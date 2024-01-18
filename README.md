# react-native-ui-primitives

react-native-ui-primitives

## Installation
This project is based on:
- Tamagui, instruction: https://tamagui.dev/docs/intro/installation
- Reanimated (for Popup), instruction: https://docs.swmansion.com/react-native-reanimated
- Gesture Handler (for Popup), instruction: https://docs.swmansion.com/react-native-gesture-handler

```sh
npm install react-native-ui-primitives
```

## Usage

```js
import { tamaguiConfig } from 'react-native-ui-primitives';
import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      {/* your app here */}
    </TamaguiProvider>
  )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
