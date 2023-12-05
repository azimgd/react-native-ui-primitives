# react-native-default-ui

react-native-default-ui

## Installation
This project is based on Tamagui, see installation instructions here: https://tamagui.dev/docs/intro/installation

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
