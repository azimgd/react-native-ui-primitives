import React from 'react';
import { Pressable } from 'react-native';
import { Input } from '../Input';
import { Meter } from './Meter';
import { passwordStrength, type Result } from 'check-password-strength';

export const Password = Input.styleable((props, ref) => {
  const [secure, setSecure] = React.useState<boolean>(true);
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

  /**
   * Toggle secure state to show / hide password
   */
  const renderIconRight = React.useMemo(
    () => (
      <Pressable onPress={() => setSecure((state) => !state)}>
        {props.iconRight}
      </Pressable>
    ),
    [props.iconRight]
  );

  return (
    <Input
      ref={ref}
      {...props}
      onChangeText={handleChangeText}
      secureTextEntry={secure}
      supplement={<Meter meter={meter} />}
      iconRight={renderIconRight}
    />
  );
});
