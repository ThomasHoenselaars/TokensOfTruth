import { ITheme } from '../data/data';
import { hexToRgb } from './hexToRgb'
import { isEqual } from 'lodash-es';

interface MappedValues {
  label: string;
  value: string;
}

export const addColors = (colors: ITheme['colors'], styles: Array<PaintStyle>) => {
  const mappedValues = mapValues(colors);
  const colorsToAdd: { name: string, color: Paint[]}[] = [];

  for (let i = 0; i < mappedValues.length; i++) {
    const styleValue = mappedValues[i].label;

    const currentColor = hexToRgb(mappedValues[i].value);

    if (currentColor) {
      const rgbColor = { r: currentColor[0], g: currentColor[1], b: currentColor[2] }

      // Add style to local styles
      const solidPaint: SolidPaint = {
        type: "SOLID",
        color: rgbColor,
      };

      colorsToAdd.push({
        name: styleValue,
        color: [solidPaint],
      });

      // Splice out colors that are already in the old styles
      // TODO CHECK IF COLOR IS THE SAME AS NEW COLOR INSTEAD OF ONLY NAME
      if (styles.length > 0) {
        styles.forEach((style) => {

          for (const colorToAdd of colorsToAdd) {
            if (style.name === colorToAdd.name && !isEqual(style.paints[0].color, colorToAdd.color[0].color)) {
              style.remove();

              const newStyle = figma.createPaintStyle();

              newStyle.name = colorToAdd.name;
              newStyle.paints = colorToAdd.color;
            }
            if (style.name === colorToAdd.name) {
                const index = colorsToAdd.indexOf(colorToAdd, 0);
                colorsToAdd.splice(index, 1);

            }
          }
        })
      }
    }
  }

  colorsToAdd.forEach(color => {
    const newStyle = figma.createPaintStyle();

    newStyle.name = color.name;
    newStyle.paints = color.color;
  })

  figma.closePlugin();
}

const mapValues = (colorObject: ITheme['colors']): MappedValues[] => (
  Object.keys(colorObject).reduce((acc, current) => {

    const nested = Object.keys(colorObject[current]).map((colorHue: any) => (
      typeof colorObject[current] === 'object' ? {
        label: `${current}-${colorHue}`,
        value: colorObject[current][colorHue],
      } : null
    ))

    const topLevel = [
      ...acc,
      typeof colorObject[current] === 'string' ? {
        label: current,
        value: colorObject[current]
      } : null
    ]

    return topLevel.concat(nested).filter(x => x);
  }, [] as any)
)
