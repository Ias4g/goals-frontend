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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var _jsxFileName = "D:\\Documentos\\www\\imers\xE3o-nodejs-react-and-eact-native-5_0\\goals-frontend\\pages\\register.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Register() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    name: '',
    description: '',
    status: ''
  }),
      goal = _useState[0],
      setGoal = _useState[1];

  var _us = us,
      _us2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_us, 2),
      messege = _us2[0],
      setMessege = _us2[1];

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
                console.log(resultApi.message);
              } else {
                console.log(resultApi.message);
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log('Erro ao salver dados');

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
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: getSendForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Nome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Insira seu nome",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Descri\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "description",
        id: "description",
        placeholder: "Insira a descri\xE7\xE3o",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        id: "status",
        placeholder: "Insira o status",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Enviar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Register, "U6GkdtYPSnkQNI5x4hW/7LxBifo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImdvYWwiLCJzZXRHb2FsIiwidXMiLCJtZXNzZWdlIiwic2V0TWVzc2VnZSIsImdldFZhbHVlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRTZW5kRm9ybSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXN1bHQiLCJqc29uIiwicmVzdWx0QXBpIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUUMsc0RBQVEsQ0FBQztBQUM3QkMsUUFBSSxFQUFFLEVBRHVCO0FBRTdCQyxlQUFXLEVBQUUsRUFGZ0I7QUFHN0JDLFVBQU0sRUFBRTtBQUhxQixHQUFELENBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBQUEsWUFPWUMsRUFQWjtBQUFBO0FBQUEsTUFPVEMsT0FQUztBQUFBLE1BT0FDLFVBUEE7O0FBU2hCLFdBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3RCTCxXQUFPLGlDQUFNRCxJQUFOLHFHQUFhTSxDQUFDLENBQUNDLE1BQUYsQ0FBU1YsSUFBdEIsRUFBNkJTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF0QyxHQUFQO0FBQ0g7O0FBWGUsV0FhREMsV0FiQztBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTUFhaEIsaUJBQTJCSCxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUEsZUFBQyxDQUFDSSxjQUFGO0FBREo7QUFBQTtBQUFBLHFCQUc2QkMsS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQ3REQyxzQkFBTSxFQUFFLE1BRDhDO0FBRXREQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsSUFBZixDQUZnRDtBQUd0RGdCLHVCQUFPLEVBQUU7QUFDTCxrQ0FBZ0I7QUFEWDtBQUg2QyxlQUFoQyxDQUhsQzs7QUFBQTtBQUdjQyxvQkFIZDtBQUFBO0FBQUEscUJBV2dDQSxNQUFNLENBQUNDLElBQVAsRUFYaEM7O0FBQUE7QUFXY0MsdUJBWGQ7O0FBWVEsa0JBQUlBLFNBQVMsQ0FBQ0MsS0FBZCxFQUFxQjtBQUNqQkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFTLENBQUNJLE9BQXRCO0FBQ0gsZUFGRCxNQUVPO0FBQ0hGLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBUyxDQUFDSSxPQUF0QjtBQUNIOztBQWhCVDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWtCUUYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaOztBQWxCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJnQjtBQUFBO0FBQUE7O0FBbUNoQixzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFJSTtBQUFNLGNBQVEsRUFBRWIsV0FBaEI7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFDSSxZQUFJLEVBQUMsTUFEVDtBQUVJLFlBQUksRUFBQyxNQUZUO0FBR0ksVUFBRSxFQUFDLE1BSFA7QUFJSSxtQkFBVyxFQUFDLGlCQUpoQjtBQUtJLGdCQUFRLEVBQUVKO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSixlQVlJO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxZQUFJLEVBQUMsYUFGVDtBQUdJLFVBQUUsRUFBQyxhQUhQO0FBSUksbUJBQVcsRUFBQywwQkFKaEI7QUFLSSxnQkFBUSxFQUFFQTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSixlQW1CSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkJKLGVBcUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJKLGVBc0JJO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxZQUFJLEVBQUMsUUFGVDtBQUdJLFVBQUUsRUFBQyxRQUhQO0FBSUksbUJBQVcsRUFBQyxpQkFKaEI7QUFLSSxnQkFBUSxFQUFFQTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkosZUE2Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCSixlQStCSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREo7QUF3Q0g7O0dBM0VRVixROztLQUFBQSxRO0FBNkVNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci41NzdhZjczNTNhZDA3NzJmYzhjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5mdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICAgIGNvbnN0IFtnb2FsLCBzZXRHb2FsXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBbbWVzc2VnZSwgc2V0TWVzc2VnZV09dXNcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZUlucHV0KGUpIHtcclxuICAgICAgICBzZXRHb2FsKHsgLi4uZ29hbCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlbmRGb3JtKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2dvYWxzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnb2FsKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRBcGkgPSBhd2FpdCByZXN1bHQuanNvbigpXHJcbiAgICAgICAgICAgIGlmIChyZXN1bHRBcGkuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdEFwaS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0QXBpLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm8gYW8gc2FsdmVyIGRhZG9zJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXIgbXkgZ29hbHM8L2gxPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtnZXRTZW5kRm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgc2V1IG5vbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRWYWx1ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmnDp8OjbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBhIGRlc2NyacOnw6NvXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Z2V0VmFsdWVJbnB1dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgbyBzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRWYWx1ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==