import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  tamaguiConfig,
  Button,
  Input,
  GroupedButton,
  GroupedInput,
  GroupedContainer,
  GroupedSwitch,
  Contact,
  Header,
  Popup,
  type PopupRef,
  Calendar,
  type CalendarRef,
} from 'react-native-default-ui';
import { TamaguiProvider, YStack, ScrollView } from 'tamagui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Noop = () => null;

export default function App() {
  const calendarRef = React.useRef<CalendarRef>(null);
  const popupRef = React.useRef<PopupRef>(null);

  const toggleCalendar = React.useCallback(() => {
    calendarRef.current?.open();
    popupRef.current?.expand();
  }, []);

  return (
    <GestureHandlerRootView style={styles.gesture}>
      <TamaguiProvider config={tamaguiConfig}>
        <SafeAreaView style={styles.safearea}>
          <ScrollView style={styles.container}>
            <YStack space="$4" padding="$4">
              <Button paint="secondary" onPress={toggleCalendar}>
                Open Calendar
              </Button>
            </YStack>

            <YStack space="$4" padding="$4">
              <Button paint="primary">Primary</Button>
              <Button paint="secondary">Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button paint="danger">Danger</Button>
            </YStack>

            <YStack space="$4" padding="$4">
              <Input
                placeholder="Default"
                label="Full Name"
                helper="This will not be shared with others"
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <GroupedContainer>
                <GroupedButton>John Smith</GroupedButton>
              </GroupedContainer>

              <GroupedContainer>
                <GroupedButton paint="primary">Settings</GroupedButton>
                <GroupedButton paint="danger">Delete account</GroupedButton>
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <GroupedContainer>
                <GroupedInput label="Firstname" placeholder="Default" />
                <GroupedInput label="Lastname" placeholder="Default" />
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <GroupedContainer>
                <GroupedSwitch checked>Checked</GroupedSwitch>
                <GroupedSwitch checked={false}>Unchecked</GroupedSwitch>
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <Header title="Home Page" iconLeft={<Noop />} />
            </YStack>

            <YStack space="$4" padding="$4">
              <Contact iconLeft={<Noop />} />
            </YStack>
          </ScrollView>
        </SafeAreaView>

        <Calendar
          calendarRef={calendarRef}
          onChange={console.log}
          value={new Date()}
        />

        <Popup
          popupRef={popupRef}
          header={<Header title="Contacts" iconLeft={<Noop />} />}
        >
          <YStack space="$4" padding="$4">
            <Contact iconLeft={<Noop />} />
            <Contact iconLeft={<Noop />} />
            <Contact iconLeft={<Noop />} />
          </YStack>
        </Popup>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gesture: { flex: 1 },
  safearea: { flex: 1 },
  container: { backgroundColor: '#eee', flex: 1 },
});
