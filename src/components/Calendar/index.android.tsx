import { type PropsWithChildren, type RefObject } from 'react';

// https://github.com/react-native-datetimepicker/datetimepicker/issues/808

export type CalendarRef = {
  open: () => void;
  close: () => void;
} | null;

type CalendarProps = {
  calendarRef: RefObject<CalendarRef>;
  onChange: (event: any, date?: Date) => void;
  value: Date;
};

export const Calendar = (props: PropsWithChildren<CalendarProps>) => {
  props;
  return null;
};
