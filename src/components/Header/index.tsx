import React, { type PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import { SizableText, View, XStack, YStack, styled } from 'tamagui';

/**
 * Button props
 */
const HEADER_ICON_HEIGHT = Platform.select({
  ios: 42,
  android: 48,
  default: 42,
});
const HEADER_WRAPPER_PADDING_HORIZONTAL = Platform.select({
  ios: 12,
  android: 12,
  default: 12,
});
const HEADER_WRAPPER_PADDING_VERTICAL = Platform.select({
  ios: 4,
  android: 4,
  default: 4,
});
const HEADER_TITLE_FONT_SIZE = Platform.select({
  ios: 17,
  android: 16,
  default: 17,
});
const HEADER_TITLE_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});

const HEADER_WRAPPER_ALIGN = Platform.select<'center' | 'flex-start'>({
  ios: 'center',
  android: 'flex-start',
  default: 'center',
});

/**
 * Per-Platform config
 */
type CustomHeaderProps = {
  title: string;
  iconLeft: JSX.Element;
};

const IconLeft = styled(View, {
  width: HEADER_ICON_HEIGHT,
  height: HEADER_ICON_HEIGHT,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
});

const IconRight = styled(View, {
  width: HEADER_ICON_HEIGHT,
  height: HEADER_ICON_HEIGHT,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
});

const Wrapper = styled(YStack, {
  flex: 1,
  paddingHorizontal: HEADER_WRAPPER_PADDING_HORIZONTAL,
  paddingVertical: HEADER_WRAPPER_PADDING_VERTICAL,
  justifyContent: 'center',
  alignItems: HEADER_WRAPPER_ALIGN,
});

const Title = styled(SizableText, {
  fontSize: HEADER_TITLE_FONT_SIZE,
  fontWeight: HEADER_TITLE_FONT_WEIGHT,
});

export const Header = (props: PropsWithChildren<CustomHeaderProps>) => {
  return (
    <XStack>
      <IconLeft>{props.iconLeft}</IconLeft>

      <Wrapper>
        <Title>{props.title}</Title>
      </Wrapper>

      <IconRight />
    </XStack>
  );
};
