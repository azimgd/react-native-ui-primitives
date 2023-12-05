import { Platform, type TextProps } from 'react-native';
import { YStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * InlineContainer props
 */
const INLINE_BORDER_RADIUS = Platform.select({
  ios: 12,
  android: 12,
  default: 12,
});

/**
 * Per-Platform config
 */
export type InlineContainerProps = GetProps<typeof YStack>;

const config = Platform.select<InlineContainerProps['style']>({
  default: {
    backgroundColor: colors.COLOR_WHITE,
    borderRadius: INLINE_BORDER_RADIUS,
  },
});

export const InlineContainer = styled(YStack, {
  name: 'InlineContainer',

  ...(config as TextProps),
});
