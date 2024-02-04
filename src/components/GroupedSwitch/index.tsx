import React from 'react';
import { Platform } from 'react-native';
import { SizableText, Switch, XStack, View, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';

/**
 * Button props
 */
const GROUPED_SWITCH_COLOR = Platform.select({
  ios: colors.COLOR_GREEN,
  android: colors.COLOR_PRIMARY,
  default: colors.COLOR_GREEN,
});
const GROUPED_SWITCH_THUMB_COLOR = Platform.select({
  ios: colors.COLOR_WHITE,
  android: colors.COLOR_WHITE,
  default: colors.COLOR_WHITE,
});
const GROUPED_SWITCH_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 44,
});
const GROUPED_SWITCH_FONT_SIZE = Platform.select({
  ios: 17,
  android: 17,
  default: 17,
});
const GROUPED_SWITCH_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_SWITCH_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 0,
  default: 16,
});

/**
 * Per-Platform config
 */
type CustomSwitchProps = {
  androidIconLeft?: JSX.Element;
};

export type ButtonProps = GetProps<typeof Switch> & CustomSwitchProps;

const Wrapper = styled(XStack, {
  alignItems: 'center',
  paddingHorizontal: GROUPED_SWITCH_PADDING_HORIZONTAL,
});

const Label = styled(SizableText, {
  flex: 1,
  lineHeight: GROUPED_SWITCH_HEIGHT,
  height: GROUPED_SWITCH_HEIGHT,
  fontSize: GROUPED_SWITCH_FONT_SIZE,
  fontWeight: GROUPED_SWITCH_FONT_WEIGHT,
});

const IconLeft = styled(View, {
  minWidth: GROUPED_SWITCH_HEIGHT,
  height: GROUPED_SWITCH_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const CustomSwitch = styled(Switch, {
  name: 'CustomSwitch',

  variants: {
    checked: {
      true: {
        backgroundColor: GROUPED_SWITCH_COLOR,
        borderColor: GROUPED_SWITCH_COLOR,
      },
      false: {
        backgroundColor: colors.COLOR_BORDER,
        borderColor: colors.COLOR_BORDER,
      },
    },
  } as const,
});

CustomSwitch.Thumb = styled(Switch.Thumb, {
  backgroundColor: GROUPED_SWITCH_THUMB_COLOR,
});

export const GroupedSwitch = CustomSwitch.styleable<CustomSwitchProps>(
  ({ children, ...props }, ref) => (
    <Wrapper>
      {props.androidIconLeft && Platform.OS === 'android' ? (
        <IconLeft>{props.androidIconLeft}</IconLeft>
      ) : null}

      <Label>{children}</Label>

      <CustomSwitch ref={ref} {...props}>
        <CustomSwitch.Thumb animation="100ms" />
      </CustomSwitch>
    </Wrapper>
  )
);
