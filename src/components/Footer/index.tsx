import React, { type PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import { View, XStack, YStack, styled } from 'tamagui';
import * as colors from '../colors';

/**
 * Button props
 */
const FOOTER_ICON_HEIGHT = Platform.select({
  ios: 24,
  android: 24,
  default: 24,
});
const FOOTER_HEIGHT = Platform.select({
  ios: 44,
  android: 44,
  default: 44,
});

/**
 * Per-Platform config
 */
type CustomFooterProps = {
  title: string;
  iconLeft: JSX.Element;
};

const IconLeft = styled(View, {
  width: FOOTER_ICON_HEIGHT,
  height: FOOTER_ICON_HEIGHT,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconRight = styled(View, {
  width: FOOTER_ICON_HEIGHT,
  height: FOOTER_ICON_HEIGHT,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
});

const Container = styled(XStack, {
  flex: 1,
  borderTopColor: colors.COLOR_BORDER,
  borderTopWidth: 1,
  height: FOOTER_HEIGHT,
  alignItems: 'center',
});

const Wrapper = styled(YStack, {
  flex: 1,
});

export const Footer = (props: PropsWithChildren<CustomFooterProps>) => {
  return (
    <Container>
      <IconLeft>{props.iconLeft}</IconLeft>

      <Wrapper />

      <IconRight />
    </Container>
  );
};
