import { Platform, type TextProps } from 'react-native';
import { SizableText as TamaguiSizableText, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * Label props
 */
const LABEL_FONT_COLOR = Platform.select({
  ios: colors.COLOR_GRAY,
  android: colors.COLOR_GRAY,
  default: colors.COLOR_GRAY,
});
const LABEL_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const LABEL_FONT_WEIGHT = Platform.select({
  ios: '400',
  android: '400',
  default: '400',
});
const LABEL_LINE_HEIGHT = Platform.select({
  ios: 22,
  android: 22,
  default: 22,
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
    marginRight: 4,
    lineHeight: LABEL_LINE_HEIGHT,
  },
});

export const Label = styled(TamaguiSizableText, {
  name: 'Label',

  ...(config as TextProps),
});
