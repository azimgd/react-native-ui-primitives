import React, { type PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';
import type { ImageProps } from 'react-native';
import { Platform, ActivityIndicator } from 'react-native';
import { Image, View, styled } from 'tamagui';

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
  onActionPress: PressableProps['onPress'];
} & ImageProps;

const Wrapper = styled(View, {
  width: ATTACHMENT_HEIGHT + ATTACHMENT_ACTION_PADDING,
  height: ATTACHMENT_HEIGHT + ATTACHMENT_ACTION_PADDING,
  justifyContent: 'flex-end',
  position: 'relative',
});

const Content = styled(Image, {
  source: { uri: '' },
  width: ATTACHMENT_HEIGHT,
  height: ATTACHMENT_HEIGHT,
  borderRadius: ATTACHMENT_BORDER_RADIUS,
});

const Action = styled(View, {
  width: ATTACHMENT_ACTION_HEIGHT,
  height: ATTACHMENT_ACTION_HEIGHT,
  borderRadius: 100,
  position: 'absolute',
  top: 0,
  right: 0,
  backgroundColor: 'blue',
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
      <Content source={props.source} />

      <Action onPress={props.onActionPress} />

      <Activity>
        <ActivityIndicator size={32} />
      </Activity>
    </Wrapper>
  );
};
