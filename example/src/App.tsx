import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  tamaguiConfig,
  Button,
  Input,
  InputInline,
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
  Password,
  Recipient,
  Chip,
} from 'react-native-ui-primitives';
import {
  TamaguiProvider,
  YStack,
  ScrollView,
  XStack,
  H4,
  Text,
  Circle,
  View,
} from 'tamagui';
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
                iconLeft={<Text color="$blue10">Back</Text>}
                iconRight={<Text color="$blue10">Forward</Text>}
              />

              <Input
                placeholder="Default"
                label="Birthdate"
                helper="This will not be shared with others"
                overlap={<Chip>Feb 24, 1990</Chip>}
              />

              <Password
                placeholder="Default"
                label="Password"
                helper="Password must include numbers and special characters"
                iconLeft={<Text color="$blue10">Back</Text>}
                iconRight={<Text color="$blue10">Forward</Text>}
              />

              <InputInline
                placeholder="Default"
                iconLeft={<Text color="$blue10">Back</Text>}
                iconRight={<Text color="$blue10">Forward</Text>}
              />

              <Recipient
                placeholder="Recipient"
                iconLeft={<Text color="$blue10">Back</Text>}
                iconRight={<Text color="$blue10">Forward</Text>}
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Buttons</H4>

              <GroupedContainer title="Profile Information">
                <GroupedButton iconRight={<Text color="$blue10">Forward</Text>}>
                  John Smith
                </GroupedButton>
              </GroupedContainer>

              <GroupedContainer title="Preferences">
                <GroupedButton paint="primary">Settings</GroupedButton>
                <GroupedButton paint="danger">Delete account</GroupedButton>
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Inputs</H4>

              <GroupedContainer>
                <GroupedInput label="Firstname" placeholder="Default" />
                <GroupedInput label="Lastname" placeholder="Default" />
                <GroupedInput
                  label="Birthdate"
                  placeholder="Default"
                  overlap={<Chip>Feb 24, 1990</Chip>}
                />
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

              <Header
                title="Home Page"
                iconLeft={<Text color="$blue10">Back</Text>}
                iconRight={<Text color="$blue10">Forward</Text>}
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Footers</H4>

              <Footer
                title="Home Page"
                iconLeft={<Text color="$blue10">Back</Text>}
                iconRight={<Text color="$blue10">Forward</Text>}
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Contacts</H4>

              <Contact
                title="bob@gmail.com"
                subtitle={['4 messages', '3 items']}
                iconLeft={<Circle size={44} backgroundColor="$blue10" />}
                iconRight={
                  <View width={18} height={44} backgroundColor="$blue10" />
                }
              />
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
                <Attachment
                  source={{ uri: 'https://placehold.it/300' }}
                  onActionPress={noopHandler}
                />
                <Attachment
                  source={{ uri: 'https://placehold.it/300' }}
                  onActionPress={noopHandler}
                />
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
            <Contact
              title="bob@gmail.com"
              subtitle={['4 messages', '3 items']}
              iconLeft={<Noop />}
            />
            <Contact
              title="bob@gmail.com"
              subtitle={['4 messages', '3 items']}
              iconLeft={<Noop />}
            />
            <Contact
              title="bob@gmail.com"
              subtitle={['4 messages', '3 items']}
              iconLeft={<Noop />}
            />
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
