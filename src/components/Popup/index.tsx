import React, { useMemo, type PropsWithChildren, type RefObject } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  type BottomSheetProps,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { View } from 'tamagui';

export type PopupRef = BottomSheet;

type PopupProps = {
  header: JSX.Element;
  popupRef: RefObject<PopupRef>;
};

export const Popup = (props: PropsWithChildren<PopupProps>) => {
  /**
   * Backdrop Component
   */
  const renderBackdrop = React.useCallback(
    (backdropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backdropProps}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const handleSheetChanges = React.useCallback((index: number) => {
    index;
  }, []);

  /**
   * Bottom Sheet Config
   */
  const bottomSheetConfig = useMemo<Omit<BottomSheetProps, 'children'>>(
    () => ({
      index: -1,
      snapPoints: ['40%'],
      backdropComponent: renderBackdrop,
      onChange: handleSheetChanges,
    }),
    [renderBackdrop, handleSheetChanges]
  );

  return (
    <BottomSheet ref={props.popupRef} {...bottomSheetConfig}>
      <View>{props.header}</View>
      <View>{props.children}</View>
    </BottomSheet>
  );
};
