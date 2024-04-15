import React, { type PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';
import { Platform, ActivityIndicator, type ImageURISource } from 'react-native';
import { Image, View, styled } from 'tamagui';
import * as colors from '../colors';

/**
 * Button props
 */
const ATTACHMENT_HEIGHT = Platform.select({
  ios: 80,
  android: 76,
  default: 80,
});
const ATTACHMENT_BORDER_RADIUS = Platform.select({
  ios: 10,
  android: 10,
  default: 10,
});
const ATTACHMENT_ACTION_HEIGHT = Platform.select({
  ios: 16,
  android: 20,
  default: 16,
});
const ATTACHMENT_ACTION_PADDING = Platform.select({
  ios: 4,
  android: 8,
  default: 4,
});

type AttachmentProps = {
  loading?: boolean;
  onActionPress?: PressableProps['onPress'];
  source?: ImageURISource;
};

const Wrapper = styled(View, {
  width: ATTACHMENT_HEIGHT + ATTACHMENT_ACTION_PADDING,
  height: ATTACHMENT_HEIGHT + ATTACHMENT_ACTION_PADDING,
  justifyContent: 'flex-end',
  position: 'relative',
});

const ContentWrapper = styled(View, {
  width: ATTACHMENT_HEIGHT,
  height: ATTACHMENT_HEIGHT,
  borderRadius: ATTACHMENT_BORDER_RADIUS,
  overflow: 'hidden',
});

const Action = styled(View, {
  width: ATTACHMENT_ACTION_HEIGHT,
  height: ATTACHMENT_ACTION_HEIGHT,
  borderRadius: 100,
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: colors.COLOR_GRAY,
  justifyContent: 'center',
  alignItems: 'center',
});

const Minus = styled(View, {
  width: 8,
  height: 2,
  borderRadius: 10,
  backgroundColor: colors.COLOR_WHITE,
});

const Activity = styled(View, {
  width: ATTACHMENT_HEIGHT,
  height: ATTACHMENT_HEIGHT,
  borderRadius: 100,
  position: 'absolute',
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Attachment = (props: PropsWithChildren<AttachmentProps>) => {
  return (
    <Wrapper>
      <ContentWrapper>
        {props.source ? (
          <Image
            source={{
              width: ATTACHMENT_HEIGHT,
              height: ATTACHMENT_HEIGHT,
              ...props.source,
            }}
          />
        ) : (
          props.children
        )}
      </ContentWrapper>

      {props.onActionPress ? (
        <Action onPress={props.onActionPress}>
          <Minus />
        </Action>
      ) : null}

      {props.loading ? (
        <Activity>
          <ActivityIndicator size={32} />
        </Activity>
      ) : null}
    </Wrapper>
  );
};
