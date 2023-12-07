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
  Footer,
  Popup,
  type PopupRef,
  Calendar,
  type CalendarRef,
  Attachment,
  Onetime,
} from 'react-native-default-ui';
import { TamaguiProvider, YStack, ScrollView, XStack, H4 } from 'tamagui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Noop = () => null;
const noopHandler = () => null;

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
              <H4>Buttons</H4>

              <Button paint="primary">Primary</Button>
              <Button paint="secondary">Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button paint="danger">Danger</Button>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Inputs</H4>

              <Input
                placeholder="Default"
                label="Full Name"
                helper="This will not be shared with others"
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Buttons</H4>

              <GroupedContainer>
                <GroupedButton>John Smith</GroupedButton>
              </GroupedContainer>

              <GroupedContainer>
                <GroupedButton paint="primary">Settings</GroupedButton>
                <GroupedButton paint="danger">Delete account</GroupedButton>
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Inputs</H4>

              <GroupedContainer>
                <GroupedInput label="Firstname" placeholder="Default" />
                <GroupedInput label="Lastname" placeholder="Default" />
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Switchs</H4>

              <GroupedContainer>
                <GroupedSwitch checked>Checked</GroupedSwitch>
                <GroupedSwitch checked={false}>Unchecked</GroupedSwitch>
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Headers</H4>

              <Header title="Home Page" iconLeft={<Noop />} />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Footers</H4>

              <Footer title="Home Page" iconLeft={<Noop />} />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Contacts</H4>

              <Contact iconLeft={<Noop />} />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>One time password</H4>

              <Onetime numberOfDigits={6} />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Calendar</H4>

              <Button paint="secondary" onPress={toggleCalendar}>
                Open Calendar
              </Button>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Attachments</H4>

              <XStack space={4}>
                <Attachment source={{ uri: '' }} onActionPress={noopHandler} />
                <Attachment source={{ uri: '' }} onActionPress={noopHandler} />
              </XStack>
            </YStack>
          </ScrollView>
        </SafeAreaView>

        <Calendar
          calendarRef={calendarRef}
          onChange={noopHandler}
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
