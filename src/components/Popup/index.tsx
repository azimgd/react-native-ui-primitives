import React, { useMemo, useRef, type PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  type BottomSheetProps,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { View } from 'tamagui';

type PopupProps = {
  header: JSX.Element;
};

export const Popup = (props: PropsWithChildren<PopupProps>) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

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

  /**
   * Bottom Sheet Config
   */
  const bottomSheetConfig = useMemo<Omit<BottomSheetProps, 'children'>>(
    () => ({
      index: 0,
      snapPoints: ['60%'],
      backdropComponent: renderBackdrop,
    }),
    [renderBackdrop]
  );

  return (
    <View style={styles.container}>
      <BottomSheet ref={bottomSheetRef} {...bottomSheetConfig}>
        <View>{props.header}</View>
        <View>{props.children}</View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
});
