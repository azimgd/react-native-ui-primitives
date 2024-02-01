import React from 'react';
import { Input } from '../Input';
import { Meter } from './Meter';
import { passwordStrength, type Result } from 'check-password-strength';

type CustomPassword = {
  secureTextEntry?: boolean;
  meterVisible?: boolean;
};

export const Password = Input.styleable<CustomPassword>((props, ref) => {
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
    <Input
      ref={ref}
      {...props}
      onChangeText={handleChangeText}
      secureTextEntry={
        props.secureTextEntry === undefined ? true : props.secureTextEntry
      }
      supplement={
        props.meterVisible === false ? undefined : <Meter meter={meter} />
      }
    />
  );
});
