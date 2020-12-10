import React from 'react';
import { string, node } from 'prop-types';

import { useImage } from './hook';

const Img = ({ src, fallback, loader, ...props }) => {
  const { loaded } = useImage({ src, fallback });

  return loaded ? <img src={src} {...props} /> : loader;
};

Img.propTypes = {
  src: string,
  fallback: string,
  loader: node
};

Img.defaultProps = {
  loader: null
};

export default Img;
export { useImage };
