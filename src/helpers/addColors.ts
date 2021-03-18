import { ITheme } from '../data/data';
import { hexToRgb } from './hexToRgb'
import { isEqual } from 'lodash-es';
import { mapFlattenObject } from '../helpers/mapFlattenObject';

interface MappedValues {
  label: string;
  value: string;
}

export const addColors = (data: ITheme, styles: Array<PaintStyle>) => {
  const mappedValues = mapFlattenObject({
    data,
    needle: 'colors',
    delimeter: '-',
    transform: ([k, v]) => ({ label: k, value: v })
  });

  const colorsToAdd: Array<{ name: string | number, color: Paint[]}> = [];

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
            // @ts-ignore
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

    newStyle.name = String(color.name);
    newStyle.paints = color.color;
  })

  figma.closePlugin();
}

