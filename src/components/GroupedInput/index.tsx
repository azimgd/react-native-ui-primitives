import React from 'react';
import { Platform } from 'react-native';
import { Input as TamaguiInput, XStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import { Label } from './Label';

/**
 * Input props
 */
const GROUPED_INPUT_HEIGHT = Platform.select({
  ios: 44,
  android: 44,
  default: 44,
});
const GROUPED_INPUT_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const GROUPED_INPUT_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_INPUT_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
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
    height: GROUPED_INPUT_HEIGHT,
    fontSize: GROUPED_INPUT_FONT_SIZE,
    fontWeight: GROUPED_INPUT_FONT_WEIGHT,
  },
});

const Wrapper = styled(XStack, {
  alignItems: 'center',
  paddingHorizontal: GROUPED_INPUT_PADDING_HORIZONTAL,
});

const StyledTamaguiInput = TamaguiInput.styleable<CustomInputProps>(
  (props, ref) => (
    <Wrapper>
      <Label>{props.label}</Label>
      <TamaguiInput ref={ref} {...props} unstyled flex={1} />
    </Wrapper>
  )
);

export const GroupedInput = styled(StyledTamaguiInput, {
  name: 'GroupedInput',

  ...(config as InputProps),
});
