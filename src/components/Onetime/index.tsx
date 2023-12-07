import React, { type PropsWithChildren } from 'react';
import { View, styled } from 'tamagui';
import { OtpInput, type OtpInputProps } from 'react-native-otp-entry';
import { StyleSheet, Platform } from 'react-native';
import * as colors from '../colors';

/**
 * Button props
 */
const ONETIME_BORDER_RADIUS = Platform.select({
  ios: 12,
  android: 12,
  default: 12,
});
const ONETIME_FONT_SIZE = Platform.select({
  ios: 32,
  android: 24,
  default: 32,
});

type OnetimeProps = {} & OtpInputProps;

const Wrapper = styled(View, {
  flex: 1,
});

export const Onetime = (props: PropsWithChildren<OnetimeProps>) => {
  return (
    <Wrapper>
      <OtpInput {...props} theme={styles as OtpInputProps['theme']} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  inputsContainerStyle: {},
  pinCodeContainerStyle: {
    borderRadius: ONETIME_BORDER_RADIUS,
    borderColor: colors.COLOR_BORDER,
    backgroundColor: colors.COLOR_WHITE,
  },
  focusedPinCodeContainerStyle: {
    borderColor: colors.COLOR_PRIMARY,
  },
  pinCodeTextStyle: {
    fontSize: ONETIME_FONT_SIZE,
  },
  focusStickStyle: {
    backgroundColor: colors.COLOR_BORDER,
  },
});
