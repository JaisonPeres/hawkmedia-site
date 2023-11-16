export * from './BackgroundColors'
export * from './TextColors'
export * from './HoverBackgroundColors'

export enum ColorNames {
  slate = 'slate',
  gray = 'gray',
  zinc = 'zinc',
  neutral = 'neutral',
  stone = 'stone',
  red = 'red',
  orange = 'orange',
  amber = 'amber',
  yellow = 'yellow',
  lime = 'lime',
  green = 'green',
  emerald = 'emerald',
  teal = 'teal',
  cyan = 'cyan',
  sky = 'sky',
  blue = 'blue',
  indigo = 'indigo',
  violet = 'violet',
  purple = 'purple',
  fuchsia = 'fuchsia',
  pink = 'pink',
  rose = 'rose'
}

export enum ColorShades {
  'SHADE_50' = 50,
  'SHADE_100' = 100,
  'SHADE_200' = 200,
  'SHADE_300' = 300,
  'SHADE_400' = 400,
  'SHADE_500' = 500,
  'SHADE_600' = 600,
  'SHADE_700' = 700,
  'SHADE_800' = 800,
  'SHADE_900' = 900,
  'SHADE_950' = 950,
}

interface Rgb {
  r: number
  g: number
  b: number
}

export function extractRgbFromHex (hex?: string): Rgb {

  const defaultRgb = {
    r: 0,
    g: 0,
    b: 0,
  }

  if (!hex) return defaultRgb

  const rgb = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)

  if (!rgb) {
    return defaultRgb
  }

  return {
    r: parseInt(rgb[1], 16),
    g: parseInt(rgb[2], 16),
    b: parseInt(rgb[3], 16),
  }
}

export interface Color {
  [key: string]: {
    [key: string]: string
  }
}

export function validatedColor(color?: string): string {
  if (!color) return 'violet'
  if(!Object.keys(ColorNames).includes(color)) return 'violet'

  return color
}