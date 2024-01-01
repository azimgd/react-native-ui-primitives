import React from 'react';
import { Platform, Pressable } from 'react-native';
import { Input as TamaguiInput, View, XStack, YStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';
import { Helper } from './Helper';
import * as colors from '../colors';
import type { PressableProps } from 'react-native';

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

const LabelRight = styled(Label, {
  color: colors.COLOR_PRIMARY,
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

const StyledTamaguiInput = Platform.select({
  /**
   * iOS Input
   */
  default: TamaguiInput.styleable<CustomInputProps>((props, ref) => (
    <View>
      <XStack justifyContent="space-between">
        {props.label ? <Label>{props.label}</Label> : null}
        {props.labelRight ? (
          <Pressable onPress={props.labelRightOnPress}>
            <LabelRight>{props.labelRight}</LabelRight>
          </Pressable>
        ) : null}
      </XStack>

      <Container>
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
      </Container>

      {props.supplement}

      {props.helper ? <Helper>{props.helper}</Helper> : null}
    </View>
  )),

  /**
   * Android
   */
  android: TamaguiInput.styleable<CustomInputProps>((props, ref) => (
    <View>
      <Container>
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
      </Container>

      {props.supplement}

      {props.helper ? <Helper>{props.helper}</Helper> : null}
    </View>
  )),
});

/**
 * Implementing dynamic collapsable input label
 */
const RestyledInput = Platform.select({
  android: StyledTamaguiInput.styleable((props, ref) => {
    const [labelVisibility, setLabelVisibility] = React.useState(false);
    const [secureVisibility, setSecureVisibility] = React.useState(false);

    const handleSecureVisibility = React.useCallback(() => {
      setSecureVisibility((state) => !state);
    }, []);

    const handleChangeText = React.useCallback(
      (text: string) => {
        setLabelVisibility(text.length > 0);

        if (props.onChangeText) {
          props.onChangeText(text);
        }
      },

      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props.onChangeText]
    );

    return (
      <StyledTamaguiInput
        ref={ref}
        {...props}
        onChangeText={handleChangeText}
        labelVisibility={labelVisibility}
        iconRightOnPress={handleSecureVisibility}
        secureTextEntry={secureVisibility}
      />
    );
  }),
  default: StyledTamaguiInput.styleable((props, ref) => {
    const [secureVisibility, setSecureVisibility] = React.useState(false);

    const handleSecureVisibility = React.useCallback(() => {
      setSecureVisibility((state) => !state);
    }, []);

    return (
      <StyledTamaguiInput
        ref={ref}
        {...props}
        iconRightOnPress={handleSecureVisibility}
        secureTextEntry={secureVisibility}
      />
    );
  }),
});

export const Input = styled(RestyledInput, {
  name: 'Input',

  ...(config as InputProps),
});
