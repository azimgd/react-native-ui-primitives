import React from 'react';
import { Platform, type ViewProps } from 'react-native';
import { Button as TamaguiButton, XStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * Button props
 */
const GROUPED_BUTTON_HEIGHT = Platform.select({
  ios: 44,
  android: 44,
  default: 44,
});
const GROUPED_BUTTON_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const GROUPED_BUTTON_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_BUTTON_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});

/**
 * Per-Platform config
 */
type CustomButtonProps = {};

export type ButtonProps = GetProps<typeof TamaguiButton> & CustomButtonProps;

const config = Platform.select<ButtonProps['style']>({
  default: {
    justifyContent: 'center',
    height: GROUPED_BUTTON_HEIGHT,
    fontSize: GROUPED_BUTTON_FONT_SIZE,
    fontWeight: GROUPED_BUTTON_FONT_WEIGHT,
  },
});

/**
 * Primary
 */
const configVariantPrimary = Platform.select<ButtonProps['style']>({
  default: {
    color: colors.COLOR_PRIMARY,
  },
});

/**
 * Primary
 */
const configVariantDanger = Platform.select<ButtonProps['style']>({
  default: {
    color: colors.COLOR_DANGER,
  },
});

const Wrapper = styled(XStack, {
  paddingHorizontal: GROUPED_BUTTON_PADDING_HORIZONTAL,
});

const StyledTamaguiButton = TamaguiButton.styleable<CustomButtonProps>(
  (props, ref) => (
    <Wrapper>
      <TamaguiButton ref={ref} {...props} unstyled flex={1} />
    </Wrapper>
  )
);

export const GroupedButton = styled(StyledTamaguiButton, {
  name: 'GroupedButton',

  ...(config as ButtonProps),

  variants: {
    paint: {
      primary: configVariantPrimary as ViewProps,
      danger: configVariantDanger as ViewProps,
    },
  },
});
