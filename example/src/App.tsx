import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import {
  tamaguiConfig,
  Button,
  Input,
  Inline,
  InlineContainer,
} from 'react-native-default-ui';
import { TamaguiProvider, YStack } from 'tamagui';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView style={styles.container}>
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
          <InlineContainer>
            <Inline label="Firstname" placeholder="Default" />
            <Inline label="Lastname" placeholder="Default" />
          </InlineContainer>
        </YStack>
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#eee' },
});
