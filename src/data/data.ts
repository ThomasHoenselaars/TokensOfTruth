import { pxToRem } from '../helpers/pxToRem';

export interface ITheme {
  colors: {
    [key: string]: string | { [key: string]: string };
  },
  screens: {
    [key: string]: string
  },
  spacings: {
    [key: string]: string
  },
  fonts: {
    [key: string]: string
  },
  fontSizes: {
    [key: string]: string
  },
  fontWeights: {
    [key: string]: string
  },
  borderRadius: {
    [key: string]: string
  },
  shadows: {
    [key: string]: string
  },
}

export const theme: ITheme = {
  colors: {
    black: "#000000",
    white: "#ffffff",
    grey: {
      '1': '#4B4B4B',
      '2': '#D2D2D2',
      '3': '#7A7A7A',
      '4': '#4B4B4B',
    },
    green: {
      '1': '#E9F2EC',
      '2': '#7EC38D',
      '3': '#008B38',
      '4': '#1D6B34',
      '5': '#033412',
    },
    blue: {
      '1': '#F3F9FF',
      '2': '#99C1E9',
      '3': '#1261A3',
      '4': '#04457B',
      '5': '#00203B',
    },
    ocher: {
      '1': '#FFF9DC',
      '2': '#FFEFA0',
      '3': '#F8D62D',
      '4': '#EDBF07',
      '5': '#C8A104',
    },
    red: {
      '1': '#FFF3F0',
      '2': '#F1816D',
      '3': '#EC6047',
      '4': '#CD3B20',
      '5': '#641101',
    },
    orange: {
      '1': '#FFF4E8',
      '2': '#FFCC92',
      '3': '#F08B17',
      '4': '#C65A0C',
      '5': '#883002',
    },
  },
  screens: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },
  spacings: {
    "1": pxToRem(4),
    "2": pxToRem(8),
    "3": pxToRem(12),
    "4": pxToRem(16),
    "5": pxToRem(20),
    "6": pxToRem(24),
    "8": pxToRem(32),
    "10": pxToRem(40),
    "12": pxToRem(48),
    "16": pxToRem(64),
    "20": pxToRem(80),
    "24": pxToRem(96),
    "32": pxToRem(128)
  },
  fonts: {
    primary: "Roboto",
    secondary: "Times"
  },
  fontSizes: {
    "down-2": pxToRem(12),
    "down-1": pxToRem(14),
    base: pxToRem(16),
    "up-1": pxToRem(18),
    "up-2": pxToRem(20),
    "up-3": pxToRem(24),
    "up-4": pxToRem(30),
    "up-5": pxToRem(36),
    "up-6": pxToRem(48)
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  borderRadius: {
    default: "0.25rem",
    full: "9999px"
  },
  shadows: {
    default: "0 2px 4px 0 rgba(0, 0, 0, 0.10)",
    md: "0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08)",
    lg: "0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    outline: "0 0 0 3px rgba(52, 144, 220, 0.5)"
  }
};