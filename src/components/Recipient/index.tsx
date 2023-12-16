import React from 'react';
import type { GetProps } from 'tamagui';
import { InputInline } from '../InputInline';
import * as validator from './validator';
import { Chip } from '../Chip';

type CustomRecipientProps = {
  onRecipient?: ({
    recipient,
    type,
  }: {
    recipient: string | undefined;
    type: 'EMAIL' | 'PHONE' | undefined;
  }) => void;
};

export type RecipientProps = GetProps<typeof InputInline> &
  CustomRecipientProps;

export const Recipient = InputInline.styleable<RecipientProps>((props, ref) => {
  const [value, setValue] = React.useState(props.value);
  const [recipient, setRecipient] = React.useState<string | undefined>();

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
        setRecipient((state) => {
          setValue(state);

          if (props.onRecipient)
            props.onRecipient({ recipient: email, type: 'EMAIL' });

          return email.replace(' ', '');
        });
      } else if (phone && text.includes(' ')) {
        setRecipient((state) => {
          setValue(state);

          if (props.onRecipient)
            props.onRecipient({ recipient: phone, type: 'PHONE' });

          return phone.replace(' ', '');
        });
      } else {
        setRecipient((state) => {
          setValue(state);

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
    <InputInline
      ref={ref}
      {...props}
      onChangeText={handleChangeText}
      autoCapitalize="none"
      overlap={renderOverlap}
      value={value}
    />
  );
});
