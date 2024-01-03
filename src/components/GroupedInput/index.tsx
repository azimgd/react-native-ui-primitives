import React from 'react';
import { Platform } from 'react-native';
import { XStack, styled } from 'tamagui';
import { Inline } from '../Input/Inline';
import type { GetProps } from 'tamagui';
import { Label } from './Label';

/**
 * Input props
 */
const GROUPED_INPUT_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 44,
});
const GROUPED_INPUT_FONT_SIZE = Platform.select({
  ios: 17,
  android: 17,
  default: 17,
});
const GROUPED_INPUT_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_INPUT_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 0,
  default: 16,
});

/**
 * Per-Platform config
 */
type CustomInputProps = {
  label?: string;
  overlap?: JSX.Element;
};

export type InputProps = GetProps<typeof Inline> & CustomInputProps;

const config = Platform.select<InputProps['style']>({
  default: {
    fontSize: GROUPED_INPUT_FONT_SIZE,
    fontWeight: GROUPED_INPUT_FONT_WEIGHT,
  },
});

const Wrapper = styled(XStack, {
  height: GROUPED_INPUT_HEIGHT,
  alignItems: 'center',
  paddingHorizontal: GROUPED_INPUT_PADDING_HORIZONTAL,
});

const StyledInput = Inline.styleable<CustomInputProps>((props, ref) => (
  <Wrapper>
    {props.label ? <Label>{props.label}</Label> : null}

    {props.overlap || <Inline ref={ref} {...props} unstyled flex={1} />}
  </Wrapper>
));

export const GroupedInput = styled(StyledInput, {
  name: 'GroupedInput',

  ...(config as InputProps),
});
