import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
  tamaguiConfig,
  Button,
  Input,
  GroupedButton,
  GroupedInput,
  GroupedContainer,
  GroupedSwitch,
  GroupedPassword,
  Contact,
  Header,
  HeaderEnlarged,
  Footer,
  Popup,
  type PopupRef,
  Attachment,
  Onetime,
  Password,
  Recipient,
  Chip,
  Window,
  Tabs,
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
  const popupRef = React.useRef<PopupRef>(null);

  return (
    <GestureHandlerRootView style={styles.gesture}>
      <TamaguiProvider config={tamaguiConfig}>
        <Window>
          <ScrollView style={styles.container}>
            <YStack space="$4" padding="$4">
              <H4>Buttons</H4>

              <Button paint="primary">Primary</Button>
              <Button paint="secondary">Secondary</Button>
              <Button disabled>Disabled</Button>
              <Button paint="danger">Danger</Button>
              <Button paint="transparent">Transparent</Button>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Inputs</H4>

              <Input
                placeholder="Default"
                label="Full Name"
                helper="This will not be shared with others"
                iconLeft={<Text color="$blue10">◀️</Text>}
                iconRight={<Text color="$blue10">▶️</Text>}
              />

              <Input
                placeholder="Default"
                label="Birthdate"
                helper="This will not be shared with others"
                overlap={<Chip>Feb 24, 1990</Chip>}
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Password</H4>
              <Password
                placeholder="Default"
                label="Password"
                helper="Password must include numbers and special characters"
                iconLeft={<Text color="$blue10">◀️</Text>}
                iconRight={<Text color="$blue10">▶️</Text>}
              />

              <Input
                placeholder="Default"
                label="Password"
                helper="Password must include numbers and special characters"
                secureTextEntry
                iconLeft={<Text color="$blue10">◀️</Text>}
                iconRight={<Text color="$blue10">▶️</Text>}
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Recipient</H4>

              <Recipient
                placeholder="Email or Phone"
                outline="horizontal"
                label="Recipient:"
              />

              <Recipient
                placeholder="Email or Phone"
                outline="horizontal"
                label="Recipient:"
                value="user@mail.com"
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Buttons</H4>

              <GroupedContainer title="Profile Information">
                <GroupedButton iconRight={<Text color="$blue10">▶️</Text>}>
                  John Smith
                </GroupedButton>
              </GroupedContainer>

              <GroupedContainer title="Preferences">
                <GroupedButton
                  androidIconLeft={<Text color="$blue10">▶️</Text>}
                  paint="primary"
                >
                  Settings
                </GroupedButton>
                <GroupedButton
                  androidIconLeft={<Text color="$blue10">▶️</Text>}
                  paint="danger"
                >
                  Delete account
                </GroupedButton>
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
                <GroupedPassword label="Password" placeholder="Default" />
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Grouped Switchs</H4>

              <GroupedContainer>
                <GroupedSwitch
                  androidIconLeft={<Text color="$blue10">▶️</Text>}
                  checked
                >
                  Checked
                </GroupedSwitch>
                <GroupedSwitch
                  androidIconLeft={<Text color="$blue10">▶️</Text>}
                  checked={false}
                >
                  Unchecked
                </GroupedSwitch>
              </GroupedContainer>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Headers</H4>

              <Header
                iconLeft={<Text color="$blue10">◀️</Text>}
                iconLeftOnPress={console.log}
                iconRight={<Text color="$blue10">▶️</Text>}
                iconRightOnPress={console.log}
              >
                Home Page
              </Header>

              <Header
                iconLeft={<Text color="$blue10">◀️</Text>}
                iconLeftOnPress={console.log}
              >
                Home Page
              </Header>

              <Header
                iconRight={<Text color="$blue10">▶️</Text>}
                iconRightOnPress={console.log}
              >
                Home Page
              </Header>

              <Header>Home Page</Header>

              <HeaderEnlarged iconLeft={<Text color="$blue10">◀️</Text>}>
                Home Page
              </HeaderEnlarged>
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Footers</H4>

              <Footer
                title="Home Page"
                iconLeft={<Text color="$blue10">◀️</Text>}
                iconLeftOnPress={console.log}
                iconRight={<Text color="$blue10">▶️</Text>}
                iconRightOnPress={console.log}
              />
            </YStack>

            <YStack space="$4" padding="$4">
              <H4>Tabs</H4>

              <Tabs
                data={[
                  { title: 'Home', onPress: () => {}, active: true },
                  { title: 'Work', onPress: () => {}, active: false },
                ]}
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
              <H4>Attachments</H4>

              <XStack space={4}>
                <Attachment
                  source={{ uri: 'https://placekitten.com/200' }}
                  onActionPress={noopHandler}
                />
                <Attachment
                  source={{ uri: 'https://placekitten.com/220' }}
                  onActionPress={noopHandler}
                  loading
                />
              </XStack>
            </YStack>
          </ScrollView>
        </Window>

        <Popup popupRef={popupRef} header={<Header>Contacts</Header>}>
          <YStack space="$2" padding="$4">
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
