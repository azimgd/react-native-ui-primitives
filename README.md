# react-native-default-ui

react-native-default-ui

## Installation
This project is based on:
- Tamagui, instruction: https://tamagui.dev/docs/intro/installation
- Vector Icons, instruction: https://github.com/oblador/react-native-vector-icons
- SFSymbols, instruction: https://github.com/birkir/react-native-sfsymbols
- Reanimated (for Popup), instruction: https://docs.swmansion.com/react-native-reanimated
- Gesture Handler (for Popup), instruction: https://docs.swmansion.com/react-native-gesture-handler

```sh
npm install react-native-default-ui
```

## Usage

```js
import { tamaguiConfig } from 'react-native-default-ui';
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
