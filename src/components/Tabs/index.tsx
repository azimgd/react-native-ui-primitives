import React from 'react';
import { Platform, Pressable } from 'react-native';
import { XStack, Text, View, styled } from 'tamagui';
import type { GetProps } from 'tamagui';
import * as colors from '../colors';
import type { PressableProps } from 'react-native';

/**
 * Tabs props
 */
const TABS_LABEL_FONT_SIZE = Platform.select({
  ios: 13,
  android: 14,
  default: 13,
});
const TABS_BACKGROUND_COLOR = Platform.select({
  ios: colors.COLOR_DISABLED,
  android: colors.COLOR_TRANSPARENT,
  default: colors.COLOR_DISABLED,
});
const TABS_BORDER_BOTTOM_COLOR = Platform.select({
  ios: colors.COLOR_TRANSPARENT,
  android: colors.COLOR_BORDER,
  default: colors.COLOR_TRANSPARENT,
});
const TABS_BORDER_BOTTOM_WIDTH = Platform.select({
  ios: 0,
  android: 1,
  default: 0,
});
const TABS_LABEL_FONT_WEIGHT = Platform.select<'400' | '500'>({
  ios: '400',
  android: '500',
  default: '400',
});
const TABS_ITEM_HEIGHT = Platform.select({
  ios: 24,
  android: 48,
  default: 24,
});
const TABS_ITEM_BACKGROUND_COLOR = Platform.select({
  ios: colors.COLOR_WHITE,
  android: colors.COLOR_TRANSPARENT,
  default: colors.COLOR_WHITE,
});
const TABS_ITEM_PADDING_VERTICAL = Platform.select({
  ios: 0,
  android: 14,
  default: 0,
});
const TABS_ITEM_ACTIVE_BORDER_COLOR = Platform.select({
  ios: colors.COLOR_TRANSPARENT,
  android: colors.COLOR_PRIMARY,
  default: colors.COLOR_TRANSPARENT,
});
const TABS_ITEM_ACTIVE_BORDER_WIDTH = Platform.select({
  ios: 0,
  android: 2,
  default: 0,
});
const TABS_PADDING = Platform.select({
  ios: 2,
  android: 0,
  default: 2,
});
const TABS_BORDER_RADIUS = Platform.select({
  ios: 8,
  android: 0,
  default: 8,
});

/**
 * Per-Platform config
 */
type CustomTabsProps = {
  data: {
    title: string;
    onPress: PressableProps['onPress'];
    active: boolean;
  }[];
};

export type TabsProps = GetProps<typeof View> & CustomTabsProps;

export const Container = styled(XStack, {
  flex: 1,
  backgroundColor: TABS_BACKGROUND_COLOR,
  borderRadius: TABS_BORDER_RADIUS,
  padding: TABS_PADDING,
  borderBottomColor: TABS_BORDER_BOTTOM_COLOR,
  borderBottomWidth: TABS_BORDER_BOTTOM_WIDTH,
});

export const Item = styled(View, {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: TABS_BORDER_RADIUS,
  height: TABS_ITEM_HEIGHT,
  paddingVertical: TABS_ITEM_PADDING_VERTICAL,

  variants: {
    active: {
      true: {
        backgroundColor: TABS_ITEM_BACKGROUND_COLOR,
        borderBottomColor: TABS_ITEM_ACTIVE_BORDER_COLOR,
        borderBottomWidth: TABS_ITEM_ACTIVE_BORDER_WIDTH,
      },
    },
  },
});

export const Label = styled(Text, {
  fontSize: TABS_LABEL_FONT_SIZE,
  fontWeight: TABS_LABEL_FONT_WEIGHT,

  variants: {
    active: {
      true: {
        fontWeight: '500',
      },
    },
  },
});

export const Tabs = Container.styleable<CustomTabsProps>((props, ref) => (
  <Container ref={ref} {...props}>
    {props.data.map((item, key) => (
      <Pressable onPress={item.onPress} style={{ flex: 1 }} key={key}>
        <Item active={item.active}>
          {/** @ts-ignore */}
          <Label active={item.active}>{item.title}</Label>
        </Item>
      </Pressable>
    ))}
  </Container>
));
