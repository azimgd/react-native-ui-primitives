import React, { type PropsWithChildren } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { YStack, styled, type GetProps } from 'tamagui';

/**
 * Button props
 */
const WINDOW_PADDING_VERTICAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});
const WINDOW_PADDING_HORIZONTAL = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});
const WINDOW_SPACE = Platform.select({
  ios: 16,
  android: 16,
  default: 16,
});

type WindowProps = GetProps<typeof YStack> & {
  padded?: boolean;
};

const Wrapper = styled(SafeAreaView, {
  flex: 1,
});

const Container = styled(YStack, {
  flex: 1,
  paddingVertical: WINDOW_PADDING_VERTICAL,
  paddingHorizontal: WINDOW_PADDING_HORIZONTAL,
  space: WINDOW_SPACE,

  variants: {
    unstyled: {
      true: {
        paddingVertical: 0,
        paddingHorizontal: 0,
        space: 0,
      },
    },
  },
});

export const Window = (props: PropsWithChildren<WindowProps>) => {
  return (
    <Wrapper>
      <Container unstyled={props.padded === false} {...props}>
        {props.children}
      </Container>
    </Wrapper>
  );
};
