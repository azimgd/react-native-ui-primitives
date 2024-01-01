import React from 'react';
import { Platform, type ViewProps } from 'react-native';
import { Button as TamaguiButton, View, XStack, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * Button props
 */
const GROUPED_BUTTON_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 44,
});
const GROUPED_BUTTON_FONT_SIZE = Platform.select({
  ios: 17,
  android: 17,
  default: 17,
});
const GROUPED_BUTTON_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_BUTTON_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 0,
  default: 16,
});

/**
 * Per-Platform config
 */
type CustomButtonProps = {
  androidIconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

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
  default: Platform.select({
    android: {},
    default: {
      color: colors.COLOR_PRIMARY,
    },
  }),
});

/**
 * Primary
 */
const configVariantDanger = Platform.select<ButtonProps['style']>({
  default: Platform.select({
    android: {},
    default: {
      color: colors.COLOR_DANGER,
    },
  }),
});

const Wrapper = styled(XStack, {
  paddingHorizontal: GROUPED_BUTTON_PADDING_HORIZONTAL,
});

const IconLeft = styled(View, {
  minWidth: GROUPED_BUTTON_HEIGHT,
  height: GROUPED_BUTTON_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const IconRight = styled(View, {
  minWidth: GROUPED_BUTTON_HEIGHT,
  height: GROUPED_BUTTON_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-end',
});

const StyledTamaguiButton = TamaguiButton.styleable<CustomButtonProps>(
  (props, ref) => (
    <Wrapper>
      {props.androidIconLeft && Platform.OS === 'android' ? (
        <IconLeft>{props.androidIconLeft}</IconLeft>
      ) : null}

      <TamaguiButton ref={ref} {...props} unstyled flex={1} />
      {props.iconRight ? <IconRight>{props.iconRight}</IconRight> : null}
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
