import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { tamaguiConfig, Button, Input } from 'react-native-default-ui';
import { TamaguiProvider, YStack } from 'tamagui';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView>
        <YStack space="$4" padding="$4">
          <Button>Default</Button>
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
      </SafeAreaView>
    </TamaguiProvider>
  );
}
