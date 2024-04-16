import React from 'react';
import { Platform } from 'react-native';
import { SizableText, YStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Header } from './index';

/**
 * HeaderEnlarged props
 */
const HEADER_ENLARGED_FONT_SIZE = Platform.select({
  ios: 34,
  android: 28,
  default: 34,
});
const HEADER_ENLARGED_FONT_WEIGHT = Platform.select<'600' | '400'>({
  ios: '600',
  android: '400',
  default: '600',
});
const HEADER_ENLARGED_LINE_HEIGHT = Platform.select({
  ios: 41,
  android: 36,
  default: 41,
});
const HEADER_ENLARGED_PADDING_TOP = Platform.select({
  ios: 4,
  android: 40,
  default: 4,
});
const HEADER_ENLARGED_PADDING_BOTTOM = Platform.select({
  ios: 7,
  android: 28,
  default: 7,
});

/**
 * Per-Platform config
 */
export type HeaderEnlargedProps = GetProps<typeof Header>;

export const Title = styled(SizableText, {
  fontSize: HEADER_ENLARGED_FONT_SIZE,
  fontWeight: HEADER_ENLARGED_FONT_WEIGHT,
  lineHeight: HEADER_ENLARGED_LINE_HEIGHT,
  paddingTop: HEADER_ENLARGED_PADDING_TOP,
  paddingBottom: HEADER_ENLARGED_PADDING_BOTTOM,
});

export const HeaderEnlarged = ({ children, ...props }: HeaderEnlargedProps) => (
  <YStack>
    <Header {...props} />
    <Title>{children}</Title>
  </YStack>
);
