# react-imgp

## Usage

```js
import { Img } from "react-imgp";

const App = ({ imageProps }) => <Img {...imageProps} />;
```

### API

- Use it as a react component that takes the same props as the [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
  - `src` - Same as the HTMLImageElement. It is required.
  - `useCache` - Whether or not to cache the images. Default is true.
  - `decode` - Whether or not to use the [decode API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode). Default is false (see [compatibility](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode#Browser_compatibility)).
  - `loader` - If provided, it will be displayed while image preloads.

### Install

- `npm install react-imgp`

### Dependencies

- The following are not bundled :
  - `Promise` API
  - `Map` API

### Author

- Daniel Andrei [@DanielCCAndrei](https://twitter.com/DanielCCAndrei)
