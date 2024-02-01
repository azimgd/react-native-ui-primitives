import React from 'react';
import { Platform } from 'react-native';
import { GroupedInput } from '../GroupedInput';
import { passwordStrength, type Result } from 'check-password-strength';
import { View, styled } from 'tamagui';
import { Meter } from './Meter';

const GROUPED_INPUT_HEIGHT = Platform.select({
  ios: 44,
  android: 56,
  default: 44,
});

const Wrapper = styled(View, {
  height: GROUPED_INPUT_HEIGHT,
  overflow: 'hidden',
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
});

const Supplement = styled(View, {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
});

type CustomGroupedInput = {
  secureTextEntry?: boolean;
  meterVisible?: boolean;
};

export const GroupedPassword = GroupedInput.styleable<CustomGroupedInput>(
  (props, ref) => {
    const [meter, setMeter] = React.useState<Result<any>>();

    /**
     * Password strength meter
     */
    const handleChangeText = React.useCallback(
      (text: string) => {
        setMeter(passwordStrength(text));

        if (props.onChangeText) {
          props.onChangeText(text);
        }
      },

      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props.onChangeText]
    );

    return (
      <Wrapper>
        <GroupedInput
          ref={ref}
          {...props}
          onChangeText={handleChangeText}
          secureTextEntry={
            props.secureTextEntry === undefined ? true : props.secureTextEntry
          }
        />

        {props.meterVisible === false ? null : (
          <Supplement>
            <Meter meter={meter} />
          </Supplement>
        )}
      </Wrapper>
    );
  }
);
