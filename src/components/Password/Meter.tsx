import React from 'react';
import { Platform } from 'react-native';
import { XStack, View, styled } from 'tamagui';
import { type Result } from 'check-password-strength';
import * as colors from '../colors';

const METER_HEIGHT = Platform.select({
  ios: 4,
  android: 4,
  default: 4,
});
const METER_BORDER_RADIUS = Platform.select({
  ios: 4,
  android: 4,
  default: 4,
});

type CustomMeterProps = {
  meter: Result<any> | undefined;
};

const Bar = styled(View, {
  flex: 1,
  height: METER_HEIGHT,
  borderRadius: METER_BORDER_RADIUS,
  marginTop: 8,

  variants: {
    paint: {
      0: {
        backgroundColor: colors.COLOR_DANGER,
      },
      1: {
        backgroundColor: '#F49E4C',
      },
      2: {
        backgroundColor: colors.COLOR_GREEN,
      },
      3: {
        backgroundColor: colors.COLOR_GREEN,
      },
    },
  },
});

export const Meter = XStack.styleable<CustomMeterProps>((props, ref) => {
  const paint = props.meter?.id || 0;

  return (
    <XStack ref={ref} {...props} space={8}>
      <Bar paint={(paint >= 0 ? paint : undefined) as 0 | undefined} />
      <Bar paint={(paint >= 1 ? paint : undefined) as 1 | undefined} />
      <Bar paint={(paint >= 2 ? paint : undefined) as 2 | undefined} />
      <Bar paint={(paint >= 3 ? paint : undefined) as 3 | undefined} />
    </XStack>
  );
});
