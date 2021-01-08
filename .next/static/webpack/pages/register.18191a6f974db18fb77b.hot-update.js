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
      mes = _useState2[0],
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
    }, this), messageapi.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: messageapi.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 44
    }, this) : "", messageapi.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: messageapi.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 46
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

_s(Register, "Sn9mwXn3k5AhcXoqQi31fNNhTgQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImdvYWwiLCJzZXRHb2FsIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsIm1lcyIsInNldE1lc3NhZ2UiLCJnZXRWYWx1ZUlucHV0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U2VuZEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzdWx0IiwianNvbiIsInJlc3VsdEFwaSIsImVycm9yIiwibWVzc2FnZWFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUM7QUFDN0JDLFFBQUksRUFBRSxFQUR1QjtBQUU3QkMsZUFBVyxFQUFFLEVBRmdCO0FBRzdCQyxVQUFNLEVBQUU7QUFIcUIsR0FBRCxDQURoQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUFBLG1CQU9VTCxzREFBUSxDQUFDO0FBQy9CTSxZQUFRLEVBQUUsS0FEcUI7QUFFL0JDLFFBQUksRUFBRSxFQUZ5QjtBQUcvQkMsV0FBTyxFQUFFO0FBSHNCLEdBQUQsQ0FQbEI7QUFBQSxNQU9UQyxHQVBTO0FBQUEsTUFPSkMsVUFQSTs7QUFhaEIsV0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBMEI7QUFDdEJQLFdBQU8saUNBQU1ELElBQU4scUdBQWFRLENBQUMsQ0FBQ0MsTUFBRixDQUFTWixJQUF0QixFQUE2QlcsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQXRDLEdBQVA7QUFDSDs7QUFmZSxXQWlCREMsV0FqQkM7QUFBQTtBQUFBOztBQUFBO0FBQUEsb01BaUJoQixpQkFB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QUE7QUFBQTtBQUFBLFlBUEo7QUFBQSxrQkFESjtBQTJDSDs7R0EvRlFaLFE7O0tBQUFBLFE7QUFpR01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjE4MTkxYTZmOTc0ZGIxOGZiNzdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gICAgY29uc3QgW2dvYWwsIHNldEdvYWxdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBzdGF0dXM6ICcnXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IFttZXMsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZUlucHV0KGUpIHtcclxuICAgICAgICBzZXRHb2FsKHsgLi4uZ29hbCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlbmRGb3JtKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2dvYWxzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnb2FsKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRBcGkgPSBhd2FpdCByZXN1bHQuanNvbigpXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0QXBpLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHRBcGkubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzdWx0QXBpLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gYW8gc2FsdmVyIGRhZG9zJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlciBteSBnb2FsczwvaDE+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAge21lc3NhZ2VhcGkudHlwZSA9PT0gJ2Vycm9yJyA/IDxwPnttZXNzYWdlYXBpLm1lc3NhZ2V9PC9wPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgIHttZXNzYWdlYXBpLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxwPnttZXNzYWdlYXBpLm1lc3NhZ2V9PC9wPiA6IFwiXCJ9XHJcblxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Z2V0U2VuZEZvcm19PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHNldSBub21lXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0VmFsdWVJbnB1dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3Jpw6fDo288L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgYSBkZXNjcmnDp8Ojb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFZhbHVlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlN0YXR1czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gc3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0VmFsdWVJbnB1dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlciJdLCJzb3VyY2VSb290IjoiIn0=