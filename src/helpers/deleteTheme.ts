export const deleteTheme = (styles: Array<PaintStyle>) => {
  if (styles.length > 0) styles.forEach((style) => style.remove())
}
