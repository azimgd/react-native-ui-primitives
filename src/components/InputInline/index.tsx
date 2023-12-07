import React from 'react';
import { Platform } from 'react-native';
import { Input as TamaguiInput, XStack, View, styled } from 'tamagui';
import type { GetProps } from 'tamagui';

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
  backgroundColor: 'red',
  marginRight: 8,
});

const IconRight = styled(View, {
  width: INPUT_ICON_HEIGHT,
  height: INPUT_ICON_HEIGHT,
  backgroundColor: 'red',
  marginLeft: 8,
});

/**
 * Per-Platform config
 */
type CustomInputProps = {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

export type InputProps = GetProps<typeof TamaguiInput> & CustomInputProps;

const config = Platform.select<InputProps['style']>({
  default: {
    height: INPUT_INLINE_HEIGHT,
    fontSize: INPUT_INLINE_FONT_SIZE,
    fontWeight: INPUT_INLINE_FONT_WEIGHT,
  },
});

const Container = styled(XStack, {
  height: INPUT_INLINE_HEIGHT,
  alignItems: 'center',
});

const Input = styled(TamaguiInput, {
  unstyled: true,
  flex: 1,
});

const StyledTamaguiInput = TamaguiInput.styleable<CustomInputProps>(
  (props, ref) => (
    <Container>
      {props.iconLeft ? <IconLeft /> : null}
      <Input ref={ref} {...props} />
      {props.iconRight ? <IconRight /> : null}
    </Container>
  )
);

export const InputInline = styled(StyledTamaguiInput, {
  name: 'InputInline',

  ...(config as InputProps),
});
