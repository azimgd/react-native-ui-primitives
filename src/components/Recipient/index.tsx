import React from 'react';
import { XStack, styled, type GetProps } from 'tamagui';
import { Inline, type InputProps } from '../Input/Inline';
import * as validator from './validator';
import { Chip } from '../Chip';
import type {
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { Label } from './Label';
import * as colors from '../colors';

type CustomRecipientProps = {
  onRecipient?: ({
    recipient,
    type,
  }: {
    recipient: string | undefined;
    type: 'EMAIL' | 'PHONE' | undefined;
  }) => void;
  outline?: 'horizontal';
} & InputProps;

const Container = styled(XStack, {
  alignItems: 'center',
  height: 50,

  variants: {
    outline: {
      horizontal: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.COLOR_BORDER,
        paddingVertical: 4,
        paddingHorizontal: 16,
      },
    },
  },
});

export type RecipientProps = GetProps<typeof Inline> & CustomRecipientProps;

export const Recipient = Inline.styleable<RecipientProps>((props, ref) => {
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
    if (props.disabled) return;

    setRecipient((state) => {
      setValue(state);
      return undefined;
    });
  }, [props.disabled]);

  /**
   * Email / Phone number formatter as you type
   */
  const handleChangeText = React.useCallback(
    (text: string, trigger?: boolean) => {
      const email = validator.email(text);
      const phone = validator.phone(text);

      if (email && trigger) {
        setRecipient(() => {
          setValue(text);
          const recipient = email.replaceAll(' ', '');

          if (props.onRecipient)
            props.onRecipient({ recipient, type: 'EMAIL' });

          return recipient;
        });
      } else if (phone && trigger) {
        setRecipient(() => {
          setValue(text);
          const recipient = phone.replaceAll(' ', '');

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

      handleChangeText(value || '', true);
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
    <Container outline={props.outline}>
      {props.label ? <Label>{props.label}</Label> : null}

      <Inline
        ref={ref}
        {...props}
        onChangeText={handleChangeText}
        autoCapitalize="none"
        overlap={renderOverlap}
        value={value}
        onBlur={handleBlur}
      />
    </Container>
  );
});
