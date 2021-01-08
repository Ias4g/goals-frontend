webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






var _jsxFileName = "D:\\Documentos\\www\\imers\xE3o-nodejs-react-and-eact-native-5_0\\goals-frontend\\pages\\register.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    description: '',
    status: ''
  }),
      goal = _useState[0],
      setGoal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      msg = _useState2[0],
      setMessage = _useState2[1];

  function getValueInput(e) {
    setGoal(_objectSpread(_objectSpread({}, goal), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  }

  function getSendForm(_x) {
    return _getSendForm.apply(this, arguments);
  }

  function _getSendForm() {
    _getSendForm = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var result, resultApi;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              _context.next = 4;
              return fetch('http://localhost:3333/goals', {
                method: 'POST',
                body: JSON.stringify(goal),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 4:
              result = _context.sent;
              _context.next = 7;
              return result.json();

            case 7:
              resultApi = _context.sent;

              if (resultApi.error) {
                setMessage({
                  formSave: false,
                  type: 'error',
                  message: resultApi.message
                });
              } else {
                setMessage({
                  formSave: false,
                  type: 'success',
                  message: resultApi.message
                });
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setMessage({
                formSave: false,
                type: 'error',
                message: 'Erro ao salver dados'
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));
    return _getSendForm.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "Register my goals"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), msg.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: msg.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }, this) : "", msg.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: msg.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 39
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: getSendForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Nome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Insira seu nome",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Descri\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "description",
        id: "description",
        placeholder: "Insira a descri\xE7\xE3o",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        id: "status",
        placeholder: "Insira o status",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Enviar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Register, "oDal27TVDoJoaJYlI5kEURUXy+c=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImdvYWwiLCJzZXRHb2FsIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsIm1zZyIsInNldE1lc3NhZ2UiLCJnZXRWYWx1ZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VuZEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzdWx0IiwianNvbiIsInJlc3VsdEFwaSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxlQUFXLEVBQUUsRUFGZ0I7QUFHN0JDLFVBQU0sRUFBRTtBQUhxQixHQUFELENBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBQUEsbUJBT1VMLHNEQUFRLENBQUM7QUFDL0JNLFlBQVEsRUFBRSxLQURxQjtBQUUvQkMsUUFBSSxFQUFFLEVBRnlCO0FBRy9CQyxXQUFPLEVBQUU7QUFIc0IsR0FBRCxDQVBsQjtBQUFBLE1BT1RDLEdBUFM7QUFBQSxNQU9KQyxVQVBJOztBQWFoQixXQUFTQyxhQUFULENBQXVCQyxDQUF2QixFQUEwQjtBQUN0QlAsV0FBTyxpQ0FBTUQsSUFBTixxR0FBYVEsQ0FBQyxDQUFDQyxNQUFGLENBQVNaLElBQXRCLEVBQTZCVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBdEMsR0FBUDtBQUNIOztBQWZlLFdBaUJEQyxXQWpCQztBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTUFpQmhCLGlCQUEyQkgsQ0FBM0I7QUFB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QURKO0FBMkNIOztHQS9GUVosUTs7S0FBQUEsUTtBQWlHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMTNhNmVlMjA5ZDNkMzAwZmJkNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0R29hbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHN0YXR1czogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW21zZywgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFZhbHVlSW5wdXQoZSkge1xyXG4gICAgICAgIHNldEdvYWwoeyAuLi5nb2FsLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0U2VuZEZvcm0oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMzMzMvZ29hbHMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGdvYWwpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdEFwaSA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRBcGkuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdEFwaS5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHRBcGkubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJybyBhbyBzYWx2ZXIgZGFkb3MnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyIG15IGdvYWxzPC9oMT5cclxuICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICB7bXNnLnR5cGUgPT09ICdlcnJvcicgPyA8cD57bXNnLm1lc3NhZ2V9PC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIHttc2cudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gPHA+e21zZy5tZXNzYWdlfTwvcD4gOiBcIlwifVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2dldFNlbmRGb3JtfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzZXUgbm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFZhbHVlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyacOnw6NvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIGEgZGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRWYWx1ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBvIHN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFZhbHVlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9