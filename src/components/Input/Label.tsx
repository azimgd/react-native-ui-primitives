import { Platform, type TextProps } from 'react-native';
import { SizableText as TamaguiSizableText, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

/**
 * Label props
 */
const LABEL_FONT_COLOR = Platform.select({
  ios: '#808080',
  android: '#808080',
  default: '#808080',
});
const LABEL_FONT_SIZE = Platform.select({
  ios: 15,
  android: 10,
  default: 15,
});
const LABEL_FONT_WEIGHT = Platform.select({
  ios: '500',
  android: '400',
  default: '500',
});
const LABEL_PADDING_BOTTOM = Platform.select({
  ios: 8,
  android: 0,
  default: 8,
});

/**
 * Per-Platform config
 */
export type LabelProps = GetProps<typeof TamaguiSizableText>;

const config = Platform.select<LabelProps['style']>({
  default: {
    color: LABEL_FONT_COLOR,
    fontSize: LABEL_FONT_SIZE,
    fontWeight: LABEL_FONT_WEIGHT,
    paddingBottom: LABEL_PADDING_BOTTOM,
  },
});

export const Label = styled(TamaguiSizableText, {
  name: 'Label',

  ...(config as TextProps),
});
