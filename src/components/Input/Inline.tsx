import React from 'react';
import { Platform, Pressable } from 'react-native';
import { Input as TamaguiInput, View, YStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';
import type { PressableProps } from 'react-native';

/**
 * Input props
 */
const INPUT_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const INPUT_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const INPUT_ICON_HEIGHT = Platform.select({
  ios: 22,
  android: 24,
  default: 22,
});

/**
 * Per-Platform config
 */
type CustomInputProps = {
  label?: string;
  helper?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  iconRightOnPress?: PressableProps['onPress'];
  supplement?: JSX.Element;
  overlap?: JSX.Element;
  labelVisibility?: boolean;
  labelRight?: string;
  labelRightOnPress?: PressableProps['onPress'];
};

export type InputProps = GetProps<typeof TamaguiInput> & CustomInputProps;

const Wrapper = styled(YStack, {
  flex: 1,
});

const InputAndroid = styled(TamaguiInput, {
  fontSize: INPUT_FONT_SIZE,
  fontWeight: INPUT_FONT_WEIGHT,
  unstyled: true,
  lineHeight: 20,
  height: 20,
});

const InputIOS = styled(TamaguiInput, {
  fontSize: INPUT_FONT_SIZE,
  fontWeight: INPUT_FONT_WEIGHT,
  unstyled: true,
  flex: 1,
});

const IconLeft = styled(View, {
  width: INPUT_ICON_HEIGHT,
  height: INPUT_ICON_HEIGHT,
  marginRight: 8,
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const IconRight = styled(View, {
  width: INPUT_ICON_HEIGHT,
  height: INPUT_ICON_HEIGHT,
  marginLeft: 8,
  justifyContent: 'center',
  alignItems: 'flex-end',
});

export const Inline = Platform.select({
  /**
   * iOS Input
   */
  default: TamaguiInput.styleable<CustomInputProps>((props, ref) => (
    <>
      {props.iconLeft ? <IconLeft>{props.iconLeft}</IconLeft> : null}

      {props.overlap ? <Wrapper>{props.overlap}</Wrapper> : null}

      {!props.overlap ? (
        <Wrapper>
          <InputIOS ref={ref} {...props} />
        </Wrapper>
      ) : null}

      {props.iconRight && !props.iconRightOnPress ? (
        <IconRight>{props.iconRight}</IconRight>
      ) : null}
      {props.iconRight && props.iconRightOnPress ? (
        <Pressable onPress={props.iconRightOnPress}>
          <IconRight>{props.iconRight}</IconRight>
        </Pressable>
      ) : null}
    </>
  )),

  /**
   * Android
   */
  android: TamaguiInput.styleable<CustomInputProps>((props, ref) => (
    <>
      {props.iconLeft ? <IconLeft>{props.iconLeft}</IconLeft> : null}

      {props.overlap ? <Wrapper>{props.overlap}</Wrapper> : null}

      {!props.overlap ? (
        <Wrapper>
          {props.labelVisibility ? <Label>{props.label}</Label> : null}
          <InputAndroid ref={ref} {...props} />
        </Wrapper>
      ) : null}

      {props.iconRight && !props.iconRightOnPress ? (
        <IconRight>{props.iconRight}</IconRight>
      ) : null}
      {props.iconRight && props.iconRightOnPress ? (
        <Pressable onPress={props.iconRightOnPress}>
          <IconRight>{props.iconRight}</IconRight>
        </Pressable>
      ) : null}
    </>
  )),
});
