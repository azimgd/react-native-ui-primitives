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
  android: 13,
  default: 13,
});
const TABS_LABEL_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const TABS_ITEM_HEIGHT = Platform.select({
  ios: 24,
  android: 24,
  default: 24,
});
const TABS_PADDING = Platform.select({
  ios: 2,
  android: 2,
  default: 2,
});
const TABS_BORDER_RADIUS = Platform.select({
  ios: 8,
  android: 8,
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
  backgroundColor: colors.COLOR_DISABLED,
  borderRadius: TABS_BORDER_RADIUS,
  padding: TABS_PADDING,
});

export const Item = styled(View, {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: TABS_BORDER_RADIUS,
  height: TABS_ITEM_HEIGHT,

  variants: {
    active: {
      true: {
        backgroundColor: colors.COLOR_WHITE,
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
        fontWeight: '600',
      },
    },
  },
});

export const Tabs = Container.styleable<CustomTabsProps>((props, ref) => (
  <Container ref={ref} {...props}>
    {props.data.map((item, key) => (
      <Pressable onPress={item.onPress} style={{ flex: 1 }}>
        <Item key={key} active={item.active}>
          {/** @ts-ignore */}
          <Label active={item.active}>{item.title}</Label>
        </Item>
      </Pressable>
    ))}
  </Container>
));
