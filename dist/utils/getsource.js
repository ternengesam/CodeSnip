"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFs = require("node:fs");

var _nodeHttps = require("node:https");

var _cleanup = _interopRequireDefault(require("./cleanup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getSource(url, pathname, writename) {
  console.log("downloading snippets");
  var source_path = "".concat(global.__project_path, "sources/").concat(pathname, "/").concat(writename || pathname, ".json");
  return new Promise(function (resolve, reject) {
    (0, _nodeHttps.get)(url, function (res) {
      var stream = (0, _nodeFs.createWriteStream)(source_path);
      res.on("error", function () {
        return reject();
      });
      stream.on("finish", function () {
        stream.close();
        resolve();
      });
      stream.on("error", function () {
        return reject();
      });
      res.pipe(stream);
    }).on("error", function (error) {
      (0, _cleanup["default"])();
      console.log(error);
      reject();
    });
  })["catch"](function (error) {});
}

var _default = getSource;
exports["default"] = _default;