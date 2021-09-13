import React from "react";
import { string, node } from "prop-types";
import { useImage } from "./hook";

export function Image({ src, fallback, loader, ...props }) {
  const { loaded, source } = useImage({ src, fallback });

  return loaded ? <img src={source} {...props} /> : loader;
}

Image.propTypes = {
  src: string,
  fallback: string,
  loader: node,
};

Image.defaultProps = {
  loader: null,
};
