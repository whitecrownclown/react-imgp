import React from 'react';
import { string, bool, node } from 'prop-types';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var _cache = new Map();

function getCachedValue(key) {
  return _cache.has(key) && _cache.get(key);
}
function setCachedValue(key, value) {
  if (!getCachedValue(key)) {
    _cache.set(key, value);
  }
}

var Img =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Img, _React$Component);

  function Img(props) {
    var _this;

    _classCallCheck(this, Img);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Img).call(this, props));
    _this.state = {
      image: null,
      loading: !!props.src
    };
    return _this;
  }

  _createClass(Img, [{
    key: "preload",
    value: function preload() {
      var _this2 = this;

      if (!this.props.src) {
        return;
      }

      Img.preloadImage(this.props).then(function (_ref) {
        var src = _ref.src;

        _this2.setState({
          loading: false,
          image: src
        });
      }).catch(function (error) {
        console.error(error.message);

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.preload();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.src !== this.props.src) {
        this.setState({
          loading: true
        }, this.preload);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          image = _this$state.image;

      var _this$props = this.props,
          src = _this$props.src,
          loader = _this$props.loader,
          decode = _this$props.decode,
          rest = _objectWithoutProperties(_this$props, ["src", "loader", "decode"]);

      if (!src) {
        return null;
      }

      return loading ? loader : React.createElement("img", _extends({
        src: image
      }, rest));
    }
  }], [{
    key: "preloadImage",
    value: function preloadImage(_ref2) {
      var src = _ref2.src,
          decode = _ref2.decode,
          useCache = _ref2.useCache;
      return useCache && getCachedValue(src) || new Promise(function (resolve, reject) {
        var image = new Image();
        image.onerror = image.onabort = reject;

        if (decode) {
          image.src = src;
          image.decode().then(function () {
            useCache && setCachedValue(src, image);
            resolve({
              image: image,
              src: src
            });
          }).catch(reject);
        } else {
          image.onload = function () {
            useCache && setCachedValue(src, image);
            resolve({
              image: image,
              src: src
            });
          };

          image.src = src;
        }
      });
    }
  }]);

  return Img;
}(React.Component);

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
