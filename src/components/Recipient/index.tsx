import React from 'react';
import { InputInline } from '../InputInline';
import * as validator from './validator';

export const Recipient = InputInline.styleable((props, ref) => {
  const [recipient, setRecipient] = React.useState<string | undefined>();

  const handleChangeText = React.useCallback(
    (text: string) => {
      const email = validator.email(text);
      const phone = validator.phone(text);

      if (email && text.includes(' ')) {
        setRecipient(email);
      } else if (phone && text.includes(' ')) {
        setRecipient(phone);
      } else {
        setRecipient(undefined);
      }

      if (props.onChangeText) {
        props.onChangeText(text);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props.onChangeText]
  );

  const color = recipient ? 'green' : undefined;

  return (
    <InputInline
      ref={ref}
      {...props}
      onChangeText={handleChangeText}
      color={color}
      autoCapitalize="none"
    />
  );
});
