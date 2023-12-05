import React from 'react';
import { Platform } from 'react-native';
import { Input as TamaguiInput, XStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';

/**
 * Input props
 */
const INPUT_HEIGHT = Platform.select({
  ios: 44,
  android: 44,
  default: 44,
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

/**
 * Per-Platform config
 */
type CustomInputProps = {
  label: string;
};

export type InputProps = GetProps<typeof TamaguiInput> & CustomInputProps;

const config = Platform.select<InputProps['style']>({
  default: {
    height: INPUT_HEIGHT,
    fontSize: INPUT_FONT_SIZE,
    fontWeight: INPUT_FONT_WEIGHT,
  },
});

const Wrapper = styled(XStack, {
  alignItems: 'center',
  paddingHorizontal: 16,
});

const StyledTamaguiInput = TamaguiInput.styleable<CustomInputProps>(
  (props, ref) => (
    <Wrapper>
      <Label>{props.label}</Label>
      <TamaguiInput ref={ref} {...props} unstyled flex={1} />
    </Wrapper>
  )
);

export const Inline = styled(StyledTamaguiInput, {
  name: 'Inline',

  ...(config as InputProps),
});
