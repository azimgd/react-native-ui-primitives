import { Platform, type ViewProps } from 'react-native';
import { Button as TamaguiButton, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

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
  ios: '500',
  android: '500',
  default: '500',
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
    borderRadius: BUTTON_BORDER_RADIUS,
  },
});

/**
 * Primary
 */
const configVariantPrimary = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: colors.COLOR_PRIMARY,
    borderWidth: 1,
    borderColor: colors.COLOR_PRIMARY,
    color: colors.COLOR_WHITE,
  },
});

/**
 * Secondary
 */
const configVariantSecondary = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: colors.COLOR_WHITE,
    borderWidth: 1,
    borderColor: colors.COLOR_PRIMARY,
    color: colors.COLOR_PRIMARY,
  },
});

/**
 * Disabled
 */
const configVariantDisabled = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: colors.COLOR_DISABLED,
    borderWidth: 1,
    borderColor: colors.COLOR_DISABLED,
    color: colors.COLOR_WHITE,
  },
});

/**
 * Danger
 */
const configVariantDanger = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: colors.COLOR_WHITE,
    borderWidth: 1,
    borderColor: colors.COLOR_DANGER,
    color: colors.COLOR_DANGER,
  },
});

/**
 * Transparent
 */
const configVariantTransparent = Platform.select<ButtonProps['style']>({
  default: {
    backgroundColor: colors.COLOR_TRANSPARENT,
    borderWidth: 1,
    borderColor: colors.COLOR_TRANSPARENT,
    color: colors.COLOR_GRAY,
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
      transparent: configVariantTransparent as ViewProps,
    },

    disabled: {
      true: configVariantDisabled as ViewProps,
    },
  },
});
