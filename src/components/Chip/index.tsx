import React from 'react';
import { Platform } from 'react-native';
import { Text, View, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * Chip props
 */
const CHIP_LABEL_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const CHIP_LABEL_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const CHIP_PADDING_TOP = Platform.select({
  ios: 4,
  android: 8,
  default: 4,
});
const CHIP_BORDER_RADIUS = Platform.select({
  ios: 4,
  android: 4,
  default: 4,
});

/**
 * Per-Platform config
 */
export type ChipProps = GetProps<typeof View>;

export const Container = styled(View, {
  padding: CHIP_PADDING_TOP,
  borderRadius: CHIP_BORDER_RADIUS,
  backgroundColor: `${colors.COLOR_PRIMARY}15`,
});

export const Label = styled(Text, {
  fontSize: CHIP_LABEL_FONT_SIZE,
  fontWeight: CHIP_LABEL_FONT_WEIGHT,
  color: colors.COLOR_PRIMARY,
});

export const Chip = Container.styleable((props, ref) => (
  <Container ref={ref} {...props}>
    <Label>{props.children}</Label>
  </Container>
));
