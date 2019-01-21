import React from "react";
import { bool, string, node } from "prop-types";

import { setCachedValue, getCachedValue } from "../utils/cache";

class Img extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      loading: !!props.src
    };
  }

  static preloadImage({ src, decode, useCache }) {
    return (
      (useCache && getCachedValue(src)) ||
      new Promise((resolve, reject) => {
        const image = new Image();

        image.onerror = image.onabort = reject;

        if (decode) {
          image.src = src;
          image
            .decode()
            .then(() => {
              useCache && setCachedValue(src, image);
              resolve({ image, src });
            })
            .catch(reject);
        } else {
          image.onload = () => {
            useCache && setCachedValue(src, image);
            resolve({ image, src });
          };
          image.src = src;
        }
      })
    );
  }

  preload() {
    if (!this.props.src) {
      return;
    }
    Img.preloadImage(this.props)
      .then(({ src }) => {
        this.setState({
          loading: false,
          image: src
        });
      })
      .catch(error => {
        console.error(error.message);
        this.setState({
          loading: false
        });
      });
  }

  componentDidMount() {
    this.preload();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.src !== this.props.src) {
      this.setState(
        {
          loading: true
        },
        this.preload
      );
    }
  }

  render() {
    const { loading, image } = this.state;
    const { src, loader, useCache, decode, ...rest } = this.props;

    if (!src) {
      return null;
    }

    return loading ? loader : <img src={image} {...rest} />;
  }
}

Img.propTypes = {
  src: string.isRequired,
  useCache: bool,
  decode: bool,
  loader: node
};

Img.defaultProps = {
  decode: false,
  useCache: true,
  loader: null
};

export { Img };
