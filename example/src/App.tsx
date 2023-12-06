import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  tamaguiConfig,
  Button,
  Input,
  GroupedInput,
  GroupedContainer,
  Contact,
  Header,
} from 'react-native-default-ui';
import { TamaguiProvider, YStack, ScrollView } from 'tamagui';

const Noop = () => null;

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.safearea}>
        <ScrollView style={styles.container}>
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
              <GroupedInput label="Firstname" placeholder="Default" />
              <GroupedInput label="Lastname" placeholder="Default" />
            </GroupedContainer>
          </YStack>

          <YStack space="$4" padding="$4">
            <Header iconLeft={<Noop />} />
          </YStack>

          <YStack space="$4" padding="$4">
            <Contact iconLeft={<Noop />} />
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  safearea: { flex: 1 },
  container: { backgroundColor: '#eee', flex: 1 },
});
