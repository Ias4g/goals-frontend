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
      messege = _useState2[0],
      setMessege = _useState2[1];

  function getValueInput(e) {
    setGoal(_objectSpread(_objectSpread({}, goal), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({}, e.target.name, e.target.value)));
  }

  function getSendForm(_x) {
    return _getSendForm.apply(this, arguments);
  }

  function _getSendForm() {
    _getSendForm = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var result, _resultApi;

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
              _resultApi = _context.sent;

              if (_resultApi.error) {
                setMessege({
                  formSave: false,
                  type: 'error',
                  message: _resultApi.message
                });
              } else {
                console.log(_resultApi.message);
                setMessege({
                  formSave: false,
                  type: 'success'
                });
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setMessege({
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
    }, this), resultApi.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: resultApi.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 46
    }, this) : '', resultApi.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: resultApi.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 48
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: getSendForm,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Nome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Insira seu nome",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Descri\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "description",
        id: "description",
        placeholder: "Insira a descri\xE7\xE3o",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        id: "status",
        placeholder: "Insira o status",
        onChange: getValueInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Enviar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Register, "72JCns40YzFKns/a8REvbRzgsIw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImdvYWwiLCJzZXRHb2FsIiwiZm9ybVNhdmUiLCJ0eXBlIiwibWVzc2FnZSIsIm1lc3NlZ2UiLCJzZXRNZXNzZWdlIiwiZ2V0VmFsdWVJbnB1dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldFNlbmRGb3JtIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlc3VsdCIsImpzb24iLCJyZXN1bHRBcGkiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDO0FBQzdCQyxRQUFJLEVBQUUsRUFEdUI7QUFFN0JDLGVBQVcsRUFBRSxFQUZnQjtBQUc3QkMsVUFBTSxFQUFFO0FBSHFCLEdBQUQsQ0FEaEI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxtQkFPY0wsc0RBQVEsQ0FBQztBQUNuQ00sWUFBUSxFQUFFLEtBRHlCO0FBRW5DQyxRQUFJLEVBQUUsRUFGNkI7QUFHbkNDLFdBQU8sRUFBRTtBQUgwQixHQUFELENBUHRCO0FBQUEsTUFPVEMsT0FQUztBQUFBLE1BT0FDLFVBUEE7O0FBYWhCLFdBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3RCUCxXQUFPLGlDQUFNRCxJQUFOLHFHQUFhUSxDQUFDLENBQUNDLE1BQUYsQ0FBU1osSUFBdEIsRUFBNkJXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF0QyxHQUFQO0FBQ0g7O0FBZmUsV0FpQkRDLFdBakJDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9NQWlCaEIsaUJBQTJCSCxDQUEzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0ksY0FBRjtBQURKO0FBQUE7QUFBQSxxQkFHNkJDLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUN0REMsc0JBQU0sRUFBRSxNQUQ4QztBQUV0REMsb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixJQUFmLENBRmdEO0FBR3REa0IsdUJBQU8sRUFBRTtBQUNMLGtDQUFnQjtBQURYO0FBSDZDLGVBQWhDLENBSGxDOztBQUFBO0FBR2NDLG9CQUhkO0FBQUE7QUFBQSxxQkFXZ0NBLE1BQU0sQ0FBQ0MsSUFBUCxFQVhoQzs7QUFBQTtBQVdjQyx3QkFYZDs7QUFhUSxrQkFBSUEsVUFBUyxDQUFDQyxLQUFkLEVBQXFCO0FBQ2pCaEIsMEJBQVUsQ0FBQztBQUNQSiwwQkFBUSxFQUFFLEtBREg7QUFFUEMsc0JBQUksRUFBRSxPQUZDO0FBR1BDLHlCQUFPLEVBQUVpQixVQUFTLENBQUNqQjtBQUhaLGlCQUFELENBQVY7QUFLSCxlQU5ELE1BTU87QUFDSG1CLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBUyxDQUFDakIsT0FBdEI7QUFDQUUsMEJBQVUsQ0FBQztBQUNQSiwwQkFBUSxFQUFFLEtBREg7QUFFUEMsc0JBQUksRUFBRTtBQUZDLGlCQUFELENBQVY7QUFJSDs7QUF6QlQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUEyQlFHLHdCQUFVLENBQUM7QUFDUEosd0JBQVEsRUFBRSxLQURIO0FBRVBDLG9CQUFJLEVBQUUsT0FGQztBQUdQQyx1QkFBTyxFQUFFO0FBSEYsZUFBRCxDQUFWOztBQTNCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpCZ0I7QUFBQTtBQUFBOztBQW9EaEIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBS1FpQixTQUFTLENBQUNsQixJQUFWLEtBQW1CLE9BQW5CLGdCQUE2QjtBQUFBLGdCQUFJa0IsU0FBUyxDQUFDakI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTdCLEdBQTBELEVBTGxFLEVBUVFpQixTQUFTLENBQUNsQixJQUFWLEtBQW1CLFNBQW5CLGdCQUErQjtBQUFBLGdCQUFJa0IsU0FBUyxDQUFDakI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQS9CLEdBQTRELEVBUnBFLGVBV0k7QUFBTSxjQUFRLEVBQUVPLFdBQWhCO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQ0ksWUFBSSxFQUFDLE1BRFQ7QUFFSSxZQUFJLEVBQUMsTUFGVDtBQUdJLFVBQUUsRUFBQyxNQUhQO0FBSUksbUJBQVcsRUFBQyxpQkFKaEI7QUFLSSxnQkFBUSxFQUFFSjtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUSixlQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEosZUFZSTtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksWUFBSSxFQUFDLGFBRlQ7QUFHSSxVQUFFLEVBQUMsYUFIUDtBQUlJLG1CQUFXLEVBQUMsMEJBSmhCO0FBS0ksZ0JBQVEsRUFBRUE7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CSixlQXFCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCSixlQXNCSTtBQUNJLFlBQUksRUFBQyxNQURUO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFHSSxVQUFFLEVBQUMsUUFIUDtBQUlJLG1CQUFXLEVBQUMsaUJBSmhCO0FBS0ksZ0JBQVEsRUFBRUE7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJKLGVBNkJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkosZUErQkk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBLGtCQURKO0FBK0NIOztHQW5HUVosUTs7S0FBQUEsUTtBQXFHTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuODZkY2U0YWUzN2Y3MWQ3OTRmNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0R29hbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgIHN0YXR1czogJydcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgW21lc3NlZ2UsIHNldE1lc3NlZ2VdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZvcm1TYXZlOiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRWYWx1ZUlucHV0KGUpIHtcclxuICAgICAgICBzZXRHb2FsKHsgLi4uZ29hbCwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlbmRGb3JtKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2dvYWxzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShnb2FsKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRBcGkgPSBhd2FpdCByZXN1bHQuanNvbigpXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0QXBpLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzZWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXN1bHRBcGkubWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdEFwaS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2VnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVNhdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0TWVzc2VnZSh7XHJcbiAgICAgICAgICAgICAgICBmb3JtU2F2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm8gYW8gc2FsdmVyIGRhZG9zJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT5SZWdpc3RlciBteSBnb2FsczwvaDE+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0QXBpLnR5cGUgPT09ICdlcnJvcicgPyA8cD57cmVzdWx0QXBpLm1lc3NhZ2V9PC9wPiA6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0QXBpLnR5cGUgPT09ICdzdWNjZXNzJyA/IDxwPntyZXN1bHRBcGkubWVzc2FnZX08L3A+IDogJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2dldFNlbmRGb3JtfT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5Ob21lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBzZXUgbm9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFZhbHVlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyacOnw6NvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIGEgZGVzY3Jpw6fDo29cIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtnZXRWYWx1ZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBvIHN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2dldFZhbHVlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9