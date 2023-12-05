import { config } from '@tamagui/config/v2';
import { createTamagui, createFont } from 'tamagui';

const headingFont = createFont({
  ...config.fonts.heading,
  family: '',
  face: {
    100: { normal: '' },
    200: { normal: '' },
    300: { normal: '' },
    400: { normal: '' },
    500: { normal: '' },
    600: { normal: '' },
    700: { normal: '' },
    800: { normal: '' },
    900: { normal: '' },
  },
});

const bodyFont = createFont({
  ...config.fonts.body,
  family: '',
  face: {
    100: { normal: '' },
    200: { normal: '' },
    300: { normal: '' },
    400: { normal: '' },
    500: { normal: '' },
    600: { normal: '' },
    700: { normal: '' },
    800: { normal: '' },
    900: { normal: '' },
  },
});

export const tamaguiConfig = createTamagui({
  ...config,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
});

type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
