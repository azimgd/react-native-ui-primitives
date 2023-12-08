import React, { type PropsWithChildren } from 'react';
import { Platform } from 'react-native';
import { SizableText, View, XStack, YStack, styled } from 'tamagui';

/**
 * Button props
 */
const CONTACT_ICON_HEIGHT = Platform.select({
  ios: 56,
  android: 44,
  default: 56,
});
const CONTACT_WRAPPER_PADDING_HORIZONTAL = Platform.select({
  ios: 12,
  android: 12,
  default: 12,
});
const CONTACT_WRAPPER_PADDING_VERTICAL = Platform.select({
  ios: 4,
  android: 4,
  default: 4,
});
const CONTACT_TITLE_FONT_SIZE = Platform.select({
  ios: 17,
  android: 16,
  default: 17,
});
const CONTACT_TITLE_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});
const CONTACT_SUBTITLE_FONT_SIZE = Platform.select({
  ios: 13,
  android: 14,
  default: 13,
});
const CONTACT_SUBTITLE_FONT_WEIGHT = Platform.select<'400'>({
  ios: '400',
  android: '400',
  default: '400',
});

/**
 * Per-Platform config
 */
type CustomContactProps = {
  title: string | JSX.Element;
  subtitle: (string | JSX.Element)[];
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

const IconLeft = styled(View, {
  width: CONTACT_ICON_HEIGHT,
  height: CONTACT_ICON_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-start',
});

const IconRight = styled(View, {
  width: CONTACT_ICON_HEIGHT / 2,
  height: CONTACT_ICON_HEIGHT,
  justifyContent: 'center',
  alignItems: 'flex-end',
});

const Wrapper = styled(YStack, {
  flex: 1,
  paddingHorizontal: CONTACT_WRAPPER_PADDING_HORIZONTAL,
  paddingVertical: CONTACT_WRAPPER_PADDING_VERTICAL,
  justifyContent: 'space-between',
});

const Title = styled(SizableText, {
  fontSize: CONTACT_TITLE_FONT_SIZE,
  fontWeight: CONTACT_TITLE_FONT_WEIGHT,
});

const SubTitle = styled(SizableText, {
  fontSize: CONTACT_SUBTITLE_FONT_SIZE,
  fontWeight: CONTACT_SUBTITLE_FONT_WEIGHT,
});

const SubTitleWrapper = styled(XStack, {
  flex: 1,
  space: 4,
  separator: <SizableText>·</SizableText>,
});

export const Contact = (props: PropsWithChildren<CustomContactProps>) => {
  return (
    <XStack>
      {props.iconLeft ? <IconLeft>{props.iconLeft}</IconLeft> : null}

      <Wrapper>
        <Title>{props.title}</Title>

        <SubTitleWrapper>
          {props.subtitle.map((item, key) => (
            <SubTitle key={key}>{item}</SubTitle>
          ))}
        </SubTitleWrapper>
      </Wrapper>

      {props.iconRight ? <IconRight>{props.iconRight}</IconRight> : null}
    </XStack>
  );
};
