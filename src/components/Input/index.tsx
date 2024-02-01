import React from 'react';
import { Platform, Pressable } from 'react-native';
import { View, XStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';
import { Helper } from './Helper';
import { Inline } from './Inline';
import * as colors from '../colors';
import type { PressableProps } from 'react-native';

/**
 * Input props
 */
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

export type InputProps = GetProps<typeof Inline> & CustomInputProps;

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

const LabelRight = styled(Label, {
  color: colors.COLOR_PRIMARY,
});

const StyledInput = Platform.select({
  /**
   * iOS Input
   */
  default: Inline.styleable<CustomInputProps>((props, ref) => (
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
        <Inline {...props} ref={ref} />
      </Container>

      {props.supplement}

      {props.helper ? <Helper>{props.helper}</Helper> : null}
    </View>
  )),

  /**
   * Android
   */
  android: Inline.styleable<CustomInputProps>((props, ref) => (
    <View>
      <Container>
        <Inline {...props} ref={ref} />
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
  android: StyledInput.styleable((props, ref) => {
    const [labelVisibility, setLabelVisibility] = React.useState(false);

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
      <StyledInput
        ref={ref}
        {...props}
        onChangeText={handleChangeText}
        labelVisibility={labelVisibility}
      />
    );
  }),
  default: StyledInput.styleable((props, ref) => {
    return <StyledInput ref={ref} {...props} />;
  }),
});

export const Input = styled(RestyledInput, {
  name: 'Input',
});
