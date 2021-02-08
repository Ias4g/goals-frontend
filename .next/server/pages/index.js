module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Documentos\\www\\imersao-nodejs-react-and-react-native-5_0\\goals-frontend\\components\\Footer.js";





const Footer = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Jumbotron"], {
      fluid: true,
      className: "container-card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          className: "text-center card-container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
              className: "badge-body",
              href: "https://github.com/Ias4g",
              color: "dark",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaGithub"], {
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 33
              }, undefined), " GitHub"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
              className: "badge-body",
              href: "https://www.instagram.com/oficial_emunah/",
              color: "secondary",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillInstagram"], {
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, undefined), " Instagram"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
              className: "badge-body",
              href: "https://www.linkedin.com/in/izael-silva-49b609186/",
              color: "info",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, undefined), " Linkedin"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
              className: "badge-body",
              href: "https://twitter.com/OficialEmunah",
              color: "primary",
              target: "_blank",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitter"], {
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, undefined), " Twitter"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardFooter"], {
            className: "footer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Feito com\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaHeart"], {
                size: 16,
                color: "#bf38ac"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 47
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              bottom: true,
              width: "156",
              src: "/assets/logo-02.svg",
              alt: "Logo Goals"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Documentos\\www\\imersao-nodejs-react-and-react-native-5_0\\goals-frontend\\components\\Menu.js";



const Menu = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      color: "primary",
      className: "fixed-top",
      dark: true,
      expand: "md",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
          href: "/",
          children: "GOALS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
          onClick: toggle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
          isOpen: isOpen,
          navbar: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
            className: "mr-auto",
            navbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                href: "/",
                children: "LISTAR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
                href: "/register",
                children: "CADASTRAR"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/NotFoundDatas.js":
/*!*************************************!*\
  !*** ./components/NotFoundDatas.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Documentos\\www\\imersao-nodejs-react-and-react-native-5_0\\goals-frontend\\components\\NotFoundDatas.js";




const NotFoundDatas = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      color: "warning",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
        className: "alert-heading text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiInfo"], {
          size: 42
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 59
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "text-center",
        children: "Sinto muito, nenhum registro encontrado..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "mb-0 text-center small",
        children: "Cadastre metas para aparecerem aqui posteriormente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundDatas);

/***/ }),

/***/ "./components/Popovers.js":
/*!********************************!*\
  !*** ./components/Popovers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Documentos\\www\\imersao-nodejs-react-and-react-native-5_0\\goals-frontend\\components\\Popovers.js";





const Popovers = () => {
  const {
    0: popoverOpen,
    1: setPopoverOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  function onConclusion(msg) {
    alert(msg);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      id: "Popover1",
      color: "link",
      className: "btn-popover",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__["BsThreeDotsVertical"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
      className: "border-0",
      placement: "left",
      isOpen: popoverOpen,
      target: "Popover1",
      toggle: toggle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["PopoverBody"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          id: "actions",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              className: "actions badge",
              color: "success",
              onClick: () => {
                onConclusion("Falta implementar o código para fazer a conclusão da meta.");
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillCheckCircle"], {
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 33
              }, undefined), " concluir"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              className: "actions badge",
              color: "warning",
              onClick: () => {
                onConclusion("Falta implementar o código para fazer a atualização da meta na base de dados");
              } // {goal.status && goal.status !== "Pendente"}
              ,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillEdit"], {
                size: 16
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 33
              }, undefined), " atualizar"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Popovers);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_Popovers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Popovers */ "./components/Popovers.js");
/* harmony import */ var _components_NotFoundDatas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NotFoundDatas */ "./components/NotFoundDatas.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "D:\\Documentos\\www\\imersao-nodejs-react-and-react-native-5_0\\goals-frontend\\pages\\index.js";











function Home({
  data
}) {
  function getFormatDate(dtt) {
    const firstDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["parseISO"])(dtt);
    const formattedDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_10__["format"])(firstDate, "dd 'de' MMMM 'de' yyyy', às ' HH:mm:ss");
    return formattedDate;
  }

  function onBtnDelete() {
    alert('Falta implementar o código para fazer a exclusão da meta');
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Home - My Goals"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Jumbotron"], {
      fluid: true,
      className: "home",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "display-4 text-center title",
          children: "My goals"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), data.goals.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NotFoundDatas__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 48
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroup"], {
          children: data.goals.map(goal => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItem"], {
              className: "item-list",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItemHeading"], {
                className: "item-heading",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "item-name",
                  children: [goal.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    className: "text-muted",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      children: "Criado em:"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 53
                    }, this), " ", getFormatDate(goal.createdAt)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Popovers__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 50
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItemText"], {
                children: goal.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["ListGroupItemText"], {
                className: "item-heading",
                children: [goal.status !== "Pendente" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
                  className: "actions",
                  color: "success",
                  pill: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillCheckCircle"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 53
                  }, this), " ", goal.status]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 49
                }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Badge"], {
                  className: "actions",
                  color: "warning",
                  pill: true,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsExclamationCircleFill"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 53
                  }, this), " ", goal.status]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 49
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "text-muted",
                  children: ["id: ", goal._id]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 45
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                  type: "button",
                  color: "link",
                  className: "btn-popover",
                  onClick: onBtnDelete,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiFillDelete"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 49
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 37
            }, this)
          }, goal._id, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 33
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

async function getServerSideProps() {
  const response = await fetch(`http://192.168.15.11:3333/goals`);
  const data = await response.json();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90Rm91bmREYXRhcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BvcG92ZXJzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsIk1lbnUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsIk5vdEZvdW5kRGF0YXMiLCJQb3BvdmVycyIsInBvcG92ZXJPcGVuIiwic2V0UG9wb3Zlck9wZW4iLCJvbkNvbmNsdXNpb24iLCJtc2ciLCJhbGVydCIsIkhvbWUiLCJkYXRhIiwiZ2V0Rm9ybWF0RGF0ZSIsImR0dCIsImZpcnN0RGF0ZSIsInBhcnNlSVNPIiwiZm9ybWF0dGVkRGF0ZSIsImZvcm1hdCIsIm9uQnRuRGVsZXRlIiwiZ29hbHMiLCJsZW5ndGgiLCJtYXAiLCJnb2FsIiwibmFtZSIsImNyZWF0ZWRBdCIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiX2lkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN0QixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLG9EQUFEO0FBQVcsV0FBSyxNQUFoQjtBQUFpQixlQUFTLEVBQUMsZ0JBQTNCO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQSwrQkFDSSxxRUFBQywrQ0FBRDtBQUFNLG1CQUFTLEVBQUMsNEJBQWhCO0FBQUEsa0NBQ0kscUVBQUMsbURBQUQ7QUFBVSxxQkFBUyxFQUFDLFdBQXBCO0FBQUEsb0NBQ0kscUVBQUMsZ0RBQUQ7QUFDSSx1QkFB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LGtCQURKO0FBb0RIOztBQUVNLGVBQWVDLGtCQUFmLEdBQW9DO0FBQ3ZDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsaUNBQUYsQ0FBNUI7QUFDQSxRQUFNbkIsSUFBSSxHQUFHLE1BQU1rQixRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFDQSxTQUFPO0FBQUVsQyxTQUFLLEVBQUU7QUFBRWM7QUFBRjtBQUFULEdBQVA7QUFDSDtBQUVjRCxtRUFBZixFOzs7Ozs7Ozs7OztBQzlGQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaUZpbGxJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IHsgRmFMaW5rZWRpbiwgRmFUd2l0dGVyLCBGYUdpdGh1YiwgRmFIZWFydCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJ1xyXG5pbXBvcnQge1xyXG4gICAgQ2FyZCxcclxuICAgIENhcmRGb290ZXIsXHJcbiAgICBDYXJkQm9keSxcclxuICAgIEJhZGdlLFxyXG4gICAgSnVtYm90cm9uLFxyXG4gICAgQ29udGFpbmVyXHJcbn0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBGb290ZXIgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJjb250YWluZXItY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBjYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZS1ib2R5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0lhczRnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUdpdGh1YiBzaXplPXsxNn0gLz4gR2l0SHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vb2ZpY2lhbF9lbXVuYWgvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbEluc3RhZ3JhbSBzaXplPXsxNn0gLz4gSW5zdGFncmFtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFkZ2UtYm9keVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pemFlbC1zaWx2YS00OWI2MDkxODYvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYUxpbmtlZGluIHNpemU9ezE2fSAvPiBMaW5rZWRpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlLWJvZHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL09maWNpYWxFbXVuYWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhVHdpdHRlciBzaXplPXsxNn0gLz4gVHdpdHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRGb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GZWl0byBjb20mbmJzcDs8RmFIZWFydCBzaXplPXsxNn0gY29sb3I9XCIjYmYzOGFjXCIgLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGJvdHRvbSB3aWR0aD1cIjE1NlwiIHNyYz1cIi9hc3NldHMvbG9nby0wMi5zdmdcIiBhbHQ9XCJMb2dvIEdvYWxzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXZiYXJCcmFuZCxcclxuICAgIE5hdixcclxuICAgIE5hdkl0ZW0sXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgQ29udGFpbmVyXHJcbn0gZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3BlbilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPVwiZml4ZWQtdG9wXCIgZGFyayBleHBhbmQ9XCJtZFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5HT0FMUzwvTmF2YmFyQnJhbmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RvZ2dsZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+TElTVEFSPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9yZWdpc3RlclwiPkNBREFTVFJBUjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpSW5mbyB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xyXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgTm90Rm91bmREYXRhcyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QWxlcnQgY29sb3I9XCJ3YXJuaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYWxlcnQtaGVhZGluZyB0ZXh0LWNlbnRlclwiPjxGaUluZm8gc2l6ZT17NDJ9IC8+PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2ludG8gbXVpdG8sIG5lbmh1bSByZWdpc3RybyBlbmNvbnRyYWRvLi4uXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC1jZW50ZXIgc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICBDYWRhc3RyZSBtZXRhcyBwYXJhIGFwYXJlY2VyZW0gYXF1aSBwb3N0ZXJpb3JtZW50ZVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kRGF0YXM7IiwiaW1wb3J0IHsgQnNUaHJlZURvdHNWZXJ0aWNhbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBBaUZpbGxFZGl0LCBBaUZpbGxDaGVja0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgUG9wb3ZlciwgUG9wb3ZlckJvZHkgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IFBvcG92ZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3BvcG92ZXJPcGVuLCBzZXRQb3BvdmVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRQb3BvdmVyT3BlbighcG9wb3Zlck9wZW4pO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ29uY2x1c2lvbihtc2cpIHtcclxuICAgICAgICBhbGVydChtc2cpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBpZD1cIlBvcG92ZXIxXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tcG9wb3ZlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCc1RocmVlRG90c1ZlcnRpY2FsIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLTBcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e3BvcG92ZXJPcGVufVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiUG9wb3ZlcjFcIlxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlPXt0b2dnbGV9PlxyXG4gICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY3Rpb25zIGJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInN1Y2Nlc3NcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uY2x1c2lvbihcIkZhbHRhIGltcGxlbWVudGFyIG8gY8OzZGlnbyBwYXJhIGZhemVyIGEgY29uY2x1c8OjbyBkYSBtZXRhLlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpRmlsbENoZWNrQ2lyY2xlIHNpemU9ezE2fSAvPiBjb25jbHVpclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhY3Rpb25zIGJhZGdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25jbHVzaW9uKFwiRmFsdGEgaW1wbGVtZW50YXIgbyBjw7NkaWdvIHBhcmEgZmF6ZXIgYSBhdHVhbGl6YcOnw6NvIGRhIG1ldGEgbmEgYmFzZSBkZSBkYWRvc1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB7Z29hbC5zdGF0dXMgJiYgZ29hbC5zdGF0dXMgIT09IFwiUGVuZGVudGVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsRWRpdCBzaXplPXsxNn0gLz4gYXR1YWxpemFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUG9wb3ZlckJvZHk+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXJzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQnNFeGNsYW1hdGlvbkNpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgQWlGaWxsQ2hlY2tDaXJjbGUsIEFpRmlsbERlbGV0ZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuaW1wb3J0IFBvcG92ZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wb3ZlcnMnXHJcbmltcG9ydCBOb3RGb3VuZERhdGFzIGZyb20gJy4uL2NvbXBvbmVudHMvTm90Rm91bmREYXRhcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcclxuaW1wb3J0IHtcclxuICAgIEp1bWJvdHJvbixcclxuICAgIENvbnRhaW5lcixcclxuICAgIExpc3RHcm91cCxcclxuICAgIExpc3RHcm91cEl0ZW0sXHJcbiAgICBMaXN0R3JvdXBJdGVtSGVhZGluZyxcclxuICAgIExpc3RHcm91cEl0ZW1UZXh0LFxyXG4gICAgQmFkZ2UsXHJcbiAgICBCdXR0b24sXHJcbn0gZnJvbSAncmVhY3RzdHJhcCdcclxuXHJcbmltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmZ1bmN0aW9uIEhvbWUoeyBkYXRhIH0pIHtcclxuICAgIGZ1bmN0aW9uIGdldEZvcm1hdERhdGUoZHR0KSB7XHJcbiAgICAgICAgY29uc3QgZmlyc3REYXRlID0gcGFyc2VJU08oZHR0KVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBmb3JtYXQoXHJcbiAgICAgICAgICAgIGZpcnN0RGF0ZSwgXCJkZCAnZGUnIE1NTU0gJ2RlJyB5eXl5Jywgw6BzICcgSEg6bW06c3NcIlxyXG4gICAgICAgIClcclxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQnRuRGVsZXRlKCkge1xyXG4gICAgICAgIGFsZXJ0KCdGYWx0YSBpbXBsZW1lbnRhciBvIGPDs2RpZ28gcGFyYSBmYXplciBhIGV4Y2x1c8OjbyBkYSBtZXRhJylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkhvbWUgLSBNeSBHb2FsczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgdGV4dC1jZW50ZXIgdGl0bGVcIj5NeSBnb2FsczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZ29hbHMubGVuZ3RoID09PSAwID8gPE5vdEZvdW5kRGF0YXMgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZ29hbHMubWFwKGdvYWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtnb2FsLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtIGNsYXNzTmFtZT1cIml0ZW0tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1IZWFkaW5nIGNsYXNzTmFtZT1cIml0ZW0taGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnb2FsLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkNyaWFkbyBlbTo8L2I+IHtnZXRGb3JtYXREYXRlKGdvYWwuY3JlYXRlZEF0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PFBvcG92ZXJzIC8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW1IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnb2FsLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXBJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXBJdGVtVGV4dCBjbGFzc05hbWU9XCJpdGVtLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z29hbC5zdGF0dXMgIT09IFwiUGVuZGVudGVcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9XCJhY3Rpb25zXCIgY29sb3I9XCJzdWNjZXNzXCIgcGlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaUZpbGxDaGVja0NpcmNsZSAvPiB7Z29hbC5zdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT1cImFjdGlvbnNcIiBjb2xvcj1cIndhcm5pbmdcIiBwaWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJzRXhjbGFtYXRpb25DaXJjbGVGaWxsIC8+IHtnb2FsLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPmlkOiB7Z29hbC5faWR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwibGlua1wiIGNsYXNzTmFtZT1cImJ0bi1wb3BvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25CdG5EZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlGaWxsRGVsZXRlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTkyLjE2OC4xNS4xMTozMzMzL2dvYWxzYClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==