import React from 'react';
import { Platform, type TextProps } from 'react-native';
import { SizableText, View, YStack, styled } from 'tamagui';
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
const GROUPED_CONTAINER_TITLE_FONT_SIZE = Platform.select({
  ios: 13,
  android: 13,
  default: 13,
});
const GROUPED_CONTAINER_TITLE_LINE_HEIGHT = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});
const GROUPED_CONTAINER_TITLE_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_CONTAINER_TITLE_COLOR = Platform.select({
  ios: colors.COLOR_GRAY,
  android: colors.COLOR_GRAY,
  default: colors.COLOR_GRAY,
});
const GROUPED_CONTAINER_TITLE_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});
const GROUPED_CONTAINER_TITLE_PADDING_VERTICAL = Platform.select({
  ios: 8,
  android: 8,
  default: 8,
});

/**
 * Per-Platform config
 */
type CustomGroupedContainerProps = {
  title?: string;
};

export type GroupedContainerProps = GetProps<typeof YStack> &
  CustomGroupedContainerProps;

const Separator = styled(View, {
  backgroundColor: colors.COLOR_BORDER,
  height: 0.5,
  marginLeft: GROUPED_CONTAINER_PADDING_HORIZONTAL,
});

const Title = styled(SizableText, {
  fontSize: GROUPED_CONTAINER_TITLE_FONT_SIZE,
  fontWeight: GROUPED_CONTAINER_TITLE_FONT_WEIGHT,
  lineHeight: GROUPED_CONTAINER_TITLE_LINE_HEIGHT,
  color: GROUPED_CONTAINER_TITLE_COLOR,
  textTransform: 'uppercase',
  paddingHorizontal: GROUPED_CONTAINER_TITLE_PADDING_HORIZONTAL,
  paddingBottom: GROUPED_CONTAINER_TITLE_PADDING_VERTICAL,
});

const config = Platform.select<GroupedContainerProps['style']>({
  default: {
    backgroundColor: colors.COLOR_WHITE,
    borderRadius: GROUPED_CONTAINER_BORDER_RADIUS,
  },
});

const StyledYStack = YStack.styleable<CustomGroupedContainerProps>(
  (props, ref) => (
    <YStack>
      {props.title ? <Title>{props.title}</Title> : null}
      <YStack ref={ref} {...props} />
    </YStack>
  )
);

export const GroupedContainer = styled(StyledYStack, {
  name: 'GroupedContainer',

  separator: <Separator />,
  ...(config as TextProps),
});
