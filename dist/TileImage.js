"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("react/jsx-runtime");

function importAll(r) {
  var images = new Map();
  r.keys().forEach(function (item, _index) {
    return images.set(item.replace('./', '').replace('.gif', ''), r(item).default);
  });
  return images;
}

var images = importAll(require.context('./images', false, /\.(gif|png|jpe?g|svg)$/));

var TileImage = function TileImage(_ref) {
  var tile = _ref.tile;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: images.get(tile),
      alt: "nope"
    })
  });
};

var _default = TileImage;
exports.default = _default;