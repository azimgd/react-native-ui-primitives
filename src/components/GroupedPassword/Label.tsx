import { Platform, type TextProps } from 'react-native';
import { SizableText as TamaguiSizableText, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

/**
 * Label props
 */
const LABEL_FONT_COLOR = Platform.select({
  ios: '#1D1D1F',
  android: '#1D1D1F',
  default: '#1D1D1F',
});
const LABEL_FONT_SIZE = Platform.select({
  ios: 17,
  android: 17,
  default: 17,
});
const LABEL_FONT_WEIGHT = Platform.select({
  ios: '400',
  android: '400',
  default: '400',
});

/**
 * Per-Platform config
 */
export type LabelProps = GetProps<typeof TamaguiSizableText>;

const config = Platform.select<LabelProps['style']>({
  default: {
    width: '40%',
    color: LABEL_FONT_COLOR,
    fontSize: LABEL_FONT_SIZE,
    fontWeight: LABEL_FONT_WEIGHT,
  },
});

export const Label = styled(TamaguiSizableText, {
  name: 'Label',

  ...(config as TextProps),
});
