import React from 'react';
import { Platform } from 'react-native';
import { SizableText, Switch, XStack, styled } from 'tamagui';
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
  android: 44,
  default: 44,
});
const GROUPED_SWITCH_FONT_SIZE = Platform.select({
  ios: 17,
  android: 14,
  default: 17,
});
const GROUPED_SWITCH_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const GROUPED_SWITCH_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});

/**
 * Per-Platform config
 */
type CustomButtonProps = {
  checked: boolean;
};

export type ButtonProps = GetProps<typeof SizableText> & CustomButtonProps;

const config = Platform.select<ButtonProps['style']>({
  default: {
    lineHeight: GROUPED_SWITCH_HEIGHT,
    height: GROUPED_SWITCH_HEIGHT,
    fontSize: GROUPED_SWITCH_FONT_SIZE,
    fontWeight: GROUPED_SWITCH_FONT_WEIGHT,
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
  alignItems: 'center',
  paddingHorizontal: GROUPED_SWITCH_PADDING_HORIZONTAL,
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

const StyledSizableText = SizableText.styleable<CustomButtonProps>(
  (props, ref) => (
    <Wrapper>
      <SizableText ref={ref} {...props} unstyled flex={1} />
      <CustomSwitch checked={props.checked}>
        <CustomSwitch.Thumb animation="quick" />
      </CustomSwitch>
    </Wrapper>
  )
);

export const GroupedSwitch = styled(StyledSizableText, {
  name: 'GroupedSwitch',

  ...(config as ButtonProps),

  variants: {
    paint: {
      primary: configVariantPrimary as CustomButtonProps,
      danger: configVariantDanger as CustomButtonProps,
    },
  },
});
