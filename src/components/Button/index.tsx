import { Platform, type ViewProps } from 'react-native';
import { Button as TamaguiButton, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

/**
 * Constants
 */
const COLOR_PRIMARY = Platform.select({
  ios: '#3B82F7',
  android: '#3B82F7',
  default: '#3B82F7',
});
const COLOR_WHITE = Platform.select({
  ios: '#ffffff',
  android: '#ffffff',
  default: '#ffffff',
});
const COLOR_DISABLED = Platform.select({
  ios: '#D1D1D1',
  android: '#D1D1D1',
  default: '#D1D1D1',
});
const COLOR_DANGER = Platform.select({
  ios: '#FF3B30',
  android: '#FF3B30',
  default: '#FF3B30',
});

/**
 * Button props
 */
const BUTTON_HEIGHT = Platform.select({
  ios: 50,
  android: 40,
  default: 50,
});
const BUTTON_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const BUTTON_FONT_WEIGHT = Platform.select({
  ios: '600',
  android: '500',
  default: '600',
});
const BUTTON_FONT_LINE = Platform.select({
  ios: 22,
  android: 20,
  default: 22,
});
const BUTTON_BORDER_RADIUS = Platform.select({
  ios: 12,
  android: 100,
  default: 12,
});

/**
 * Per-Platform config
 */
export type ButtonProps = GetProps<typeof TamaguiButton>;

const config = Platform.select<ButtonProps['style']>({
  default: {
    height: BUTTON_HEIGHT,
    fontSize: BUTTON_FONT_SIZE,
    fontWeight: BUTTON_FONT_WEIGHT,
    lineHeight: BUTTON_FONT_LINE,
    borderRadius: BUTTON_BORDER_RADIUS,
  },
});

/**
 * Primary
 */
const configVariantPrimary = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: COLOR_PRIMARY,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
    color: COLOR_WHITE,
  },
});

/**
 * Secondary
 */
const configVariantSecondary = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_PRIMARY,
    color: COLOR_PRIMARY,
  },
});

/**
 * Disabled
 */
const configVariantDisabled = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: COLOR_DISABLED,
    borderWidth: 1,
    borderColor: COLOR_DISABLED,
    color: COLOR_WHITE,
  },
});

/**
 * Danger
 */
const configVariantDanger = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: COLOR_WHITE,
    borderWidth: 1,
    borderColor: COLOR_DANGER,
    color: COLOR_DANGER,
  },
});

export const Button = styled(TamaguiButton, {
  name: 'Button',

  ...(config as ViewProps),

  variants: {
    paint: {
      primary: configVariantPrimary as ViewProps,
      secondary: configVariantSecondary as ViewProps,
      danger: configVariantDanger as ViewProps,
    },

    disabled: {
      true: configVariantDisabled as ViewProps,
    },
  } as const,
});
