import React from 'react';
import type { GetProps } from 'tamagui';
import { Input, type InputProps } from '../Input';
import * as validator from './validator';
import { Chip } from '../Chip';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';

type CustomRecipientProps = {
  onRecipient?: ({
    recipient,
    type,
  }: {
    recipient: string | undefined;
    type: 'EMAIL' | 'PHONE' | undefined;
  }) => void;
} & InputProps;

export type RecipientProps = GetProps<typeof Input> & CustomRecipientProps;

export const Recipient = Input.styleable<RecipientProps>((props, ref) => {
  const [value, setValue] = React.useState(props.value);
  const [recipient, setRecipient] = React.useState<string | undefined>(
    props.value ?? ''
  );

  /**
   * Update props when value has chenged
   */
  React.useEffect(() => {
    if (value && props.onChangeText) {
      props.onChangeText(value);
    }
  }, [props, value]);

  React.useEffect(() => {
    if (value && props.onChangeText) {
      props.onChangeText(value);
    }
  }, [props, value]);

  /**
   * Editable chip, clear chip and focus input when pressed
   */
  const handleRecipientPress = React.useCallback(() => {
    setRecipient((state) => {
      setValue(state);
      return undefined;
    });
  }, []);

  /**
   * Email / Phone number formatter as you type
   */
  const handleChangeText = React.useCallback(
    (text: string) => {
      const email = validator.email(text);
      const phone = validator.phone(text);

      if (email && text.includes(' ')) {
        setRecipient(() => {
          setValue(text);
          const recipient = email.replace(' ', '');

          if (props.onRecipient)
            props.onRecipient({ recipient, type: 'EMAIL' });

          return recipient;
        });
      } else if (phone && text.includes(' ')) {
        setRecipient(() => {
          setValue(text);
          const recipient = phone.replace(' ', '');

          if (props.onRecipient)
            props.onRecipient({ recipient, type: 'PHONE' });

          return phone;
        });
      } else {
        setRecipient(() => {
          setValue(text);

          if (props.onRecipient)
            props.onRecipient({ recipient: undefined, type: undefined });

          return undefined;
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.onChangeText]
  );

  /**
   * Blur event
   */
  const handleBlur = React.useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (props.onBlur) {
        props.onBlur(event);
      }

      handleChangeText(value + ' ');
    },
    [handleChangeText, props, value]
  );

  /**
   * Chip component view
   */
  const renderOverlap = React.useMemo(
    () =>
      recipient ? (
        <Chip onPress={handleRecipientPress}>{recipient}</Chip>
      ) : undefined,
    [recipient, handleRecipientPress]
  );

  return (
    <Input
      ref={ref}
      {...props}
      onChangeText={handleChangeText}
      autoCapitalize="none"
      overlap={renderOverlap}
      value={value}
      onBlur={handleBlur}
    />
  );
});
