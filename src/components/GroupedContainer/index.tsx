import React from 'react';
import { Platform, type TextProps } from 'react-native';
import { View, YStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * GroupedContainer props
 */
const GROUPED_CONTAINER_BORDER_RADIUS = Platform.select({
  ios: 12,
  android: 12,
  default: 12,
});
const GROUPED_CONTAINER_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});

/**
 * Per-Platform config
 */
export type GroupedContainerProps = GetProps<typeof YStack>;

const Separator = styled(View, {
  backgroundColor: colors.COLOR_BORDER,
  height: 0.5,
  marginLeft: GROUPED_CONTAINER_PADDING_HORIZONTAL,
});

const config = Platform.select<GroupedContainerProps['style']>({
  default: {
    backgroundColor: colors.COLOR_WHITE,
    borderRadius: GROUPED_CONTAINER_BORDER_RADIUS,
  },
});

export const GroupedContainer = styled(YStack, {
  name: 'GroupedContainer',

  separator: <Separator />,
  ...(config as TextProps),
});
