import React from 'react';
import { Platform } from 'react-native';
import { Input as TamaguiInput, XStack, View, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';
import * as colors from '../colors';

/**
 * Input props
 */
const INPUT_INLINE_HEIGHT = Platform.select({
  ios: 44,
  android: 42,
  default: 44,
});
const INPUT_INLINE_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const INPUT_INLINE_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const INPUT_ICON_HEIGHT = Platform.select({
  ios: 22,
  android: 24,
  default: 22,
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

/**
 * Per-Platform config
 */
type CustomInputProps = {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  overlap?: JSX.Element;
  outline?: 'horizontal';
  label?: string;
};

export type InputInlineProps = GetProps<typeof TamaguiInput> & CustomInputProps;

const config = Platform.select<InputInlineProps['style']>({
  default: {
    height: INPUT_INLINE_HEIGHT,
    fontSize: INPUT_INLINE_FONT_SIZE,
    fontWeight: INPUT_INLINE_FONT_WEIGHT,
  },
});

const Container = styled(XStack, {
  height: INPUT_INLINE_HEIGHT,
  alignItems: 'center',

  variants: {
    outline: {
      horizontal: {
        borderColor: colors.COLOR_BORDER,
        borderTopWidth: 1,
        borderBottomWidth: 1,
      },
    },
  },
});

const Wrapper = styled(XStack, {
  flex: 1,
});

const Input = styled(TamaguiInput, {
  unstyled: true,
  flex: 1,
});

const StyledTamaguiInput = TamaguiInput.styleable<CustomInputProps>(
  (props, ref) => (
    <Container outline={props.outline}>
      {props.iconLeft ? <IconLeft>{props.iconLeft}</IconLeft> : null}
      {props.label ? <Label>{props.label}</Label> : null}
      {props.overlap ? (
        <Wrapper>{props.overlap}</Wrapper>
      ) : (
        <Input ref={ref} {...props} />
      )}
      {props.iconRight ? <IconRight>{props.iconRight}</IconRight> : null}
    </Container>
  )
);

export const InputInline = styled(StyledTamaguiInput, {
  name: 'InputInline',

  ...(config as InputInlineProps),
});
