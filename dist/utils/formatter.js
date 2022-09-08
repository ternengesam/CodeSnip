"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _parsebody = _interopRequireDefault(require("./parsebody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function format(file) {
  console.log("formatting snippets");
  var data = file;
  var keys = Object.keys(file);
  var values = Object.values(file);
  var snippets = "";

  for (var i = 0; i < keys.length; i++) {
    var body = (0, _parsebody["default"])(data[keys[i]]["body"]);
    snippets += "# ".concat(data[keys[i]]["description"] || keys[i], "\nsnippet ").concat(data[keys[i]]["prefix"], "\n\t").concat(body, "\n");
  }

  return snippets;
}

var _default = format;
exports["default"] = _default;