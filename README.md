# react-imgp

### Usage

```js
import Image from "react-imgp";

const App = ({ imageProps }) => <Image {...imageProps} />;
```

### API

- Use it as a react component that takes the same props as the [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
  - `src` - Same as the HTMLImageElement. It is required.
  - `fallback` - Used in case the original `src` cannot be retrieved.
  - `loader` - If provided, it will be displayed while image loads.

### Install

- `npm install react-imgp`

### Dependencies

- The following are not bundled :
  - `Promise` API

### Author

- Daniel Andrei [@DanielCCAndrei](https://twitter.com/DanielCCAndrei)
