import { Platform, type ViewProps } from 'react-native';
import { Button as TamaguiButton, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

/**
 * Constants
 */
const IOS_COLOR_PRIMARY = '#3B82F7';
const IOS_COLOR_WHITE = '#ffffff';
const IOS_COLOR_DISABLED = '#D1D1D1';
const IOS_COLOR_DANGER = '#FF3B30';

const ANDROID_COLOR_PRIMARY = '#3B82F7';
const ANDROID_COLOR_WHITE = '#ffffff';
const ANDROID_COLOR_DISABLED = '#D1D1D1';

const IOS_BUTTON_HEIGHT = 50;
const IOS_BUTTON_FONT_SIZE = 17;
const IOS_BUTTON_FONT_WEIGHT = '600';
const IOS_BUTTON_FONT_LINE = 22;
const IOS_BUTTON_BORDER_RADIUS = 12;

const ANDROID_BUTTON_HEIGHT = 50;
const ANDROID_BUTTON_FONT_SIZE = 17;
const ANDROID_BUTTON_FONT_WEIGHT = '600';
const ANDROID_BUTTON_FONT_LINE = 22;
const ANDROID_BUTTON_BORDER_RADIUS = 12;

/**
 * Per-Platform config
 */
export type ButtonProps = GetProps<typeof TamaguiButton>;

const config = Platform.select<ButtonProps['style']>({
  ios: {
    height: IOS_BUTTON_HEIGHT,
    fontSize: IOS_BUTTON_FONT_SIZE,
    fontWeight: IOS_BUTTON_FONT_WEIGHT,
    lineHeight: IOS_BUTTON_FONT_LINE,
    borderRadius: IOS_BUTTON_BORDER_RADIUS,
  },

  android: {
    height: ANDROID_BUTTON_HEIGHT,
    fontSize: ANDROID_BUTTON_FONT_SIZE,
    fontWeight: ANDROID_BUTTON_FONT_WEIGHT,
    lineHeight: ANDROID_BUTTON_FONT_LINE,
    borderRadius: ANDROID_BUTTON_BORDER_RADIUS,
  },
});

/**
 * Primary
 */
const configVariantPrimary = Platform.select<ButtonProps['style']>({
  ios: {
    backgroundColor: IOS_COLOR_PRIMARY,
    borderWidth: 1,
    borderColor: IOS_COLOR_PRIMARY,
    color: IOS_COLOR_WHITE,
  },

  android: {
    backgroundColor: ANDROID_COLOR_PRIMARY,
    borderWidth: 1,
    borderColor: ANDROID_COLOR_PRIMARY,
    color: ANDROID_COLOR_WHITE,
  },
});

/**
 * Secondary
 */
const configVariantSecondary = Platform.select<ButtonProps['style']>({
  ios: {
    backgroundColor: IOS_COLOR_WHITE,
    borderWidth: 1,
    borderColor: IOS_COLOR_PRIMARY,
    color: IOS_COLOR_PRIMARY,
  },

  android: {
    backgroundColor: IOS_COLOR_WHITE,
    borderWidth: 1,
    borderColor: IOS_COLOR_PRIMARY,
    color: IOS_COLOR_PRIMARY,
  },
});

/**
 * Disabled
 */
const configVariantDisabled = Platform.select<ButtonProps['style']>({
  ios: {
    backgroundColor: IOS_COLOR_DISABLED,
    borderWidth: 1,
    borderColor: IOS_COLOR_DISABLED,
    color: IOS_COLOR_WHITE,
  },

  android: {
    backgroundColor: ANDROID_COLOR_DISABLED,
    borderWidth: 1,
    borderColor: ANDROID_COLOR_DISABLED,
    color: ANDROID_COLOR_WHITE,
  },
});

/**
 * Danger
 */
const configVariantDanger = Platform.select<ButtonProps['style']>({
  ios: {
    backgroundColor: IOS_COLOR_WHITE,
    borderWidth: 1,
    borderColor: IOS_COLOR_DANGER,
    color: IOS_COLOR_DANGER,
  },

  android: {
    backgroundColor: IOS_COLOR_WHITE,
    borderWidth: 1,
    borderColor: IOS_COLOR_DANGER,
    color: IOS_COLOR_DANGER,
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
