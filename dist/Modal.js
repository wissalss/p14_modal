"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modale(_ref) {
  var closeModale = _ref.closeModale,
    message = _ref.message;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bcgModale"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close",
    onClick: function onClick() {
      return closeModale(false);
    }
  }, " X "), /*#__PURE__*/_react.default.createElement("h5", null, message, "\uD83D\uDC4F ")));
}
;
var _default = Modale;
exports.default = _default;