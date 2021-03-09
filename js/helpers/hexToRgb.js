// HEX TO RGB HELPER
const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const base = 16;
    return result
        ?
            [parseInt(result[1], base) / 255, parseInt(result[2], base) / 255, parseInt(result[3], base) / 255]
        : null;
};
