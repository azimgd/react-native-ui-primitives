import * as React from 'react';

import { SafeAreaView } from 'react-native';
import { tamaguiConfig, Button } from 'react-native-default-ui';
import { TamaguiProvider, YStack } from 'tamagui';

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <SafeAreaView>
        <YStack space="$4" padding="$4">
          <Button paint="primary">Primary</Button>
          <Button paint="secondary">Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button paint="danger">Danger</Button>
        </YStack>
      </SafeAreaView>
    </TamaguiProvider>
  );
}
