# react-imgp ![canvas](icon.png)

## Usage

```js
import { Image } from 'react-imgp';

const App = ({ imageProps }) => <Image {...imageProps} />;
```

## API

- Use it as a react component that takes the same props as the [HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) and passes them down

  - `src` - Same as the HTMLImageElement. It is required.
  - `fallback` - Used in case the original `src` cannot be retrieved.
  - `loader` - If provided, it will be displayed while the image loads.

- `useImage` hook gives you more control on when and how to render the preloaded image (ex: use the image source as `background-image`)

```js
import { useImage } from 'react-imgp';

const imageProps = {
  src: 'https://dummyimage.com/600x400/000/fff',
};

const App = () => {
  const { loaded } = useImage(imageProps);

  return loaded ? (
    <div
      style={{
        backgroundImage: `url(imageProps.src)`
      }}
    />
  ) : null;
};
```

## Install

- `npm install react-imgp`

## Dependencies

- The following are not bundled :

  - `Promise` API
  - Peer dependency `react` >= 17.0.x

## Author

- Daniel Andrei [@DanielCCAndrei](https://twitter.com/DanielCCAndrei)
