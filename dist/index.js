"use strict";

var _plugin = _interopRequireDefault(require("../plugin.json"));

var _setup = _interopRequireDefault(require("./setup"));

var _cleanup = _interopRequireDefault(require("./utils/cleanup"));

var _nodeFs = require("node:fs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// plugin class
var CodeSnip = /*#__PURE__*/function () {
  function CodeSnip() {
    _classCallCheck(this, CodeSnip);
  }

  _createClass(CodeSnip, [{
    key: "init",
    value: function init() {
      (0, _setup["default"])();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      (0, _cleanup["default"])();
    }
  }]);

  return CodeSnip;
}(); ///


var codesnip = new CodeSnip();

if (global.acode) {
  var acode = global.acode;
  global.__project_path = "/storage/emulated/0/.acode/codesnip/";
  (0, _nodeFs.mkdir)(__project_path, function () {});
  (0, _nodeFs.mkdir)(__project_path + "sources", function () {});
  (0, _nodeFs.mkdir)(__project_path + "snippets", function () {});
  var Id = ""; //plugin.id;
  // unitialize plugin

  acode.setPluginInit(Id, function (baseUrl, _ref) {
    _objectDestructuringEmpty(_ref);

    if (!baseUrl.endsWith("/")) {
      baseUrl += "/";
    }

    codesnip.init();
  }); // unmount plugin

  acode.setPluginUnmount(_plugin["default"].id, function () {
    codesnip.destroy();
  });
} else {
  //global.__project_path = process.cwd() + "/src/";
  global.__project_path = "/storage/emulated/0/.acode/codesnip/";
  (0, _nodeFs.mkdir)(__project_path, function (error) {});
  (0, _nodeFs.mkdir)(__project_path + "sources", function (error) {});
  (0, _nodeFs.mkdir)(__project_path + "snippets", function (error) {});
  codesnip.init();
}