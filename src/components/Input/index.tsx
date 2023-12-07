import React from 'react';
import { Platform } from 'react-native';
import { Input as TamaguiInput, View, XStack, YStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';
import { Helper } from './Helper';
import * as colors from '../colors';

/**
 * Input props
 */
const INPUT_HEIGHT = Platform.select({
  ios: 50,
  android: 20,
  default: 50,
});
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
const INPUT_BORDER_RADIUS = Platform.select({
  ios: 12,
  android: 10,
  default: 12,
});
const INPUT_BACKGROUND_COLOR = Platform.select({
  ios: colors.COLOR_WHITE,
  android: colors.COLOR_WHITE,
  default: colors.COLOR_WHITE,
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
  label: string;
  helper: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

export type InputProps = GetProps<typeof TamaguiInput> & CustomInputProps;

const config = Platform.select<InputProps['style']>({
  default: {
    height: INPUT_HEIGHT,
    fontSize: INPUT_FONT_SIZE,
    fontWeight: INPUT_FONT_WEIGHT,
    borderRadius: INPUT_BORDER_RADIUS,
    backgroundColor: INPUT_BACKGROUND_COLOR,
  },
});

const Container = styled(XStack, {
  height: 50,
  borderWidth: 1,
  borderColor: colors.COLOR_BORDER,
  paddingHorizontal: 12,
  borderRadius: INPUT_BORDER_RADIUS,
  backgroundColor: INPUT_BACKGROUND_COLOR,
  alignItems: 'center',
  overflow: 'hidden',
});

const Wrapper = styled(YStack, {
  flex: 1,
});

const InputAndroid = styled(TamaguiInput, {
  unstyled: true,
  lineHeight: 20,
  height: 20,
});

const InputIOS = styled(TamaguiInput, {
  unstyled: true,
  flex: 1,
});

const IconLeft = styled(View, {
  width: INPUT_ICON_HEIGHT,
  height: INPUT_ICON_HEIGHT,
  backgroundColor: 'red',
  marginRight: 8,
});

const IconRight = styled(View, {
  width: INPUT_ICON_HEIGHT,
  height: INPUT_ICON_HEIGHT,
  backgroundColor: 'red',
  marginLeft: 8,
});

const StyledTamaguiInput = Platform.select({
  /**
   * iOS Input
   */
  default: TamaguiInput.styleable<CustomInputProps>((props, ref) => (
    <View>
      <Label>{props.label}</Label>
      <Container>
        {props.iconLeft ? <IconLeft /> : null}

        <Wrapper>
          <InputIOS ref={ref} {...props} />
        </Wrapper>

        {props.iconRight ? <IconRight /> : null}
      </Container>
      <Helper>{props.helper}</Helper>
    </View>
  )),

  /**
   * Android
   */
  android: TamaguiInput.styleable<CustomInputProps>((props, ref) => (
    <View>
      <Container>
        {props.iconLeft ? <IconLeft /> : null}

        <Wrapper>
          <Label>{props.label}</Label>
          <InputAndroid ref={ref} {...props} />
        </Wrapper>

        {props.iconRight ? <IconRight /> : null}
      </Container>

      <Helper>{props.helper}</Helper>
    </View>
  )),
});

export const Input = styled(StyledTamaguiInput, {
  name: 'Input',

  ...(config as InputProps),
});
