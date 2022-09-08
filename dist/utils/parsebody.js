"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function parseBody(body) {
  var parsed = "";

  if (Array.isArray(body)) {
    body.map(function (str, ind) {
      if (/\n/.test(str) && !/\t/.test(body[ind + 1])) {
        parsed += "".concat(str, "\t");
      }

      parsed += "".concat(str, "\n\t");
    });
  }

  if (typeof body == "string") {
    for (var i = 0; i < body.length; i++) {
      if (/\n/.test(body[i]) && !/\t/.test(body[i + 1])) {
        parsed += "".concat(body[i], "\t");
      } else {
        parsed += "".concat(body[i]);
      }

      if (/\s/.test(body[i]) && /\n/.test(body[i - 1])) {
        parsed += "";
      }
    }
  }

  return parsed;
}

var _default = parseBody;
exports["default"] = _default;