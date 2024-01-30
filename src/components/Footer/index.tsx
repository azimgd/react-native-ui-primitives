import React from 'react';
import type { PressableProps } from 'react-native';
import { Platform, Pressable, StyleSheet } from 'react-native';
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
  title?: string;
  iconLeft?: JSX.Element;
  iconLeftOnPress?: PressableProps['onPress'];
  iconRight?: JSX.Element;
  iconRightOnPress?: PressableProps['onPress'];
};

const IconLeft = styled(View, {
  position: 'absolute',
  left: 0,
  minWidth: FOOTER_ICON_HEIGHT,
  height: FOOTER_ICON_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const IconRight = styled(View, {
  position: 'absolute',
  right: 0,
  minWidth: FOOTER_ICON_HEIGHT,
  height: FOOTER_ICON_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-end',
});

const Container = styled(XStack, {
  borderTopColor: colors.COLOR_BORDER,
  borderTopWidth: 1,
  height: FOOTER_HEIGHT,
  alignItems: 'center',
});

const Wrapper = styled(YStack, {
  flex: 1,
});

export const Footer = Container.styleable<CustomFooterProps>((props, ref) => {
  return (
    <Container {...props} ref={ref}>
      {props.iconLeft ? (
        <Pressable onPress={props.iconLeftOnPress} style={styles.iconStyle}>
          <IconLeft>{props.iconLeft}</IconLeft>
        </Pressable>
      ) : null}

      <Wrapper />

      {props.iconRight ? (
        <Pressable onPress={props.iconRightOnPress} style={styles.iconStyle}>
          <IconRight>{props.iconRight}</IconRight>
        </Pressable>
      ) : null}
    </Container>
  );
});

const styles = StyleSheet.create({
  iconStyle: {
    zIndex: 1,
  },
});
