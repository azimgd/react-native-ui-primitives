import { Platform, type TextProps } from 'react-native';
import { SizableText as TamaguiSizableText, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

/**
 * Helper props
 */
const HELPER_FONT_COLOR = Platform.select({
  ios: '#808080',
  android: '#808080',
  default: '#808080',
});
const HELPER_FONT_SIZE = Platform.select({
  ios: 13,
  android: 12,
  default: 13,
});
const HELPER_FONT_WEIGHT = Platform.select({
  ios: '400',
  android: '400',
  default: '400',
});
const LABEL_PADDING_TOP = Platform.select({
  ios: 4,
  android: 8,
  default: 4,
});

/**
 * Per-Platform config
 */
export type HelperProps = GetProps<typeof TamaguiSizableText>;

const config = Platform.select<HelperProps['style']>({
  default: {
    color: HELPER_FONT_COLOR,
    fontSize: HELPER_FONT_SIZE,
    fontWeight: HELPER_FONT_WEIGHT,
    paddingTop: LABEL_PADDING_TOP,
  },
});

export const Helper = styled(TamaguiSizableText, {
  name: 'Helper',

  ...(config as TextProps),
});
