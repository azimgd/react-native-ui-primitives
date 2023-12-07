import React, { type PropsWithChildren, type RefObject } from 'react';
import DateTimePicker, {
  type DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { Popup, type PopupRef } from '../Popup';
import { Header } from '../Header';

const Noop = () => null;

export type CalendarRef = {
  open: () => void;
  close: () => void;
} | null;

type CalendarProps = {
  calendarRef: RefObject<CalendarRef>;
  onChange: (event: DateTimePickerEvent, date?: Date) => void;
  value: Date;
};

export const Calendar = (props: PropsWithChildren<CalendarProps>) => {
  const popupRef = React.useCallback((node: PopupRef) => {
    if (!node) {
      return;
    }

    // @ts-ignore
    props.calendarRef.current = {
      open: node.expand,
      close: node.collapse,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Popup
      // @ts-ignore
      popupRef={popupRef}
      header={<Header title="Calendar" iconLeft={<Noop />} />}
    >
      <DateTimePicker
        onChange={props.onChange}
        value={props.value}
        display="spinner"
        themeVariant="light"
      />
    </Popup>
  );
};
