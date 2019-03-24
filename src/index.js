import React, { useState, useEffect } from "react";
import { string, node } from "prop-types";

const fetchImage = src => {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.onload = resolve;
    image.onerror = image.onabort = reject;

    image.src = src;
  });
};

const Img = ({ src, fallback, loader, ...rest }) => {
  const [image, setImage] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(
    () => {
      setLoaded(false);

      fetchImage(image)
        .then(() => setLoaded(true))
        .catch(() => {
          if (fallback) {
            fetchImage(fallback)
              .then(() => {
                setImage(fallback);
                setLoaded(true);
              })
              .catch(() => setLoaded(false));
          }
        });
    },
    [src]
  );

  return loaded ? <img src={image} {...rest} /> : loader;
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