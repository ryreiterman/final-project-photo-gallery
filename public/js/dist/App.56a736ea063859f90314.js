/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst NavBar = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n    className: \"NavBar\"\n  }, props.routes.map((_ref) => {\n    let {\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      key: key,\n      to: path\n    }, key);\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (NavBar);\n\n//# sourceURL=webpack:///./src/components/NavBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/AnimalKingdom.js":
/*!************************************!*\
  !*** ./src/pages/AnimalKingdom.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AnimalKingdom; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction AnimalKingdom(props) {\n  const getData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* () {\n      const response = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/animalkingdom.json\");\n      const data = yield response.json();\n      const dataArray = data.resources;\n      console.log(dataArray[3]);\n      dataArray.forEach(element => {\n        console.log(\"https://res.cloudinary.com/ryanphotos/image/upload/v\" + element.version + \"/\" + element.public_id + \".jpg\");\n      }); // setCategory(jeopardyData.category.title.toUpperCase());\n      // setQuestion(jeopardyData.question);\n      // setAnswer(jeopardyData.answer);\n      // setToggle(false);\n\n      console.log(data); // console.log(imageURL);\n\n      console.log(\"https://res.cloudinary.com/ryanphotos/image/upload/v\" + data.resources[4].version + \"/\" + data.resources[4].public_id + \".jpg\");\n    });\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  getData();\n  const images = [{\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/tiger_headon_small_wp7jnk.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550138/zoo-pics/animal-kingdom/lion_side_cu_sept_14_2020_web_ietvw2.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550138/zoo-pics/animal-kingdom/lion_side_cu_sept_14_2020_web_ietvw2.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550234/zoo-pics/animal-kingdom/gorilla_eat_cu_small_dn2zx8.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550234/zoo-pics/animal-kingdom/gorilla_eat_cu_small_dn2zx8.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/meerkat_small_kwoya2.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550233/zoo-pics/animal-kingdom/meerkat_small_kwoya2.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550162/zoo-pics/animal-kingdom/tiger_6_sept_14_2020_web_okwdzt.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550162/zoo-pics/animal-kingdom/tiger_6_sept_14_2020_web_okwdzt.jpg'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: images\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/AnimalKingdom.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AppPage\"\n  }, \"This is the \", props.page, \" page\");\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/BrevardZoo.js":
/*!*********************************!*\
  !*** ./src/pages/BrevardZoo.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BrevardZoo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BrevardZoo(props) {\n  const images = [{\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616552557/zoo-pics/brevard-zoo/vulture_web_xegfeh.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616552246/zoo-pics/brevard-zoo/gator_web_dhwgqh.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616552246/zoo-pics/brevard-zoo/gator_web_dhwgqh.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551911/zoo-pics/brevard-zoo/bald_eagle_web_qcnnpn.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551911/zoo-pics/brevard-zoo/bald_eagle_web_qcnnpn.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551878/zoo-pics/brevard-zoo/giraffe_baby_cu_web_kxnv7q.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551878/zoo-pics/brevard-zoo/giraffe_baby_cu_web_kxnv7q.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616552433/zoo-pics/brevard-zoo/jag_lick_web_fyn4jn.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616552433/zoo-pics/brevard-zoo/jag_lick_web_fyn4jn.jpg'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: images\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/BrevardZoo.js?");

/***/ }),

/***/ "./src/pages/CentralFlorida.js":
/*!*************************************!*\
  !*** ./src/pages/CentralFlorida.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CentralFlorida; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction CentralFlorida(props) {\n  const images = [{\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/cheetah_brothers_web_zn8jpm.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/cheetah_brothers_web_zn8jpm.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/boa_web_x1udvq.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616551204/zoo-pics/central-florida-zoo/boa_web_x1udvq.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cougar_central_fl_zoo_feb_28_2021_web_mwsmgp.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cougar_central_fl_zoo_feb_28_2021_web_mwsmgp.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cobra_central_fl_zoo_feb_28_2021_web_ew7xql.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550435/zoo-pics/central-florida-zoo/cobra_central_fl_zoo_feb_28_2021_web_ew7xql.jpg'\n  }, {\n    original: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550715/zoo-pics/central-florida-zoo/otter_web_rnpxaa.jpg',\n    thumbnail: 'https://res.cloudinary.com/ryanphotos/image/upload/v1616550715/zoo-pics/central-florida-zoo/otter_web_rnpxaa.jpg'\n  }];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: images\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/CentralFlorida.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        page: key\n      })\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n/* harmony import */ var _pages_BrevardZoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/BrevardZoo */ \"./src/pages/BrevardZoo.js\");\n/* harmony import */ var _pages_AnimalKingdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/AnimalKingdom */ \"./src/pages/AnimalKingdom.js\");\n/* harmony import */ var _pages_CentralFlorida__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CentralFlorida */ \"./src/pages/CentralFlorida.js\");\n\n\n\n\n\nconst routes = [{\n  Component: _pages_AnimalKingdom__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Animal Kingdom',\n  path: '/animal-kingdom'\n}, {\n  Component: _pages_BrevardZoo__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Brevard Zoo',\n  path: '/brevard-zoo'\n}, {\n  Component: _pages_CentralFlorida__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'Central Florida Zoo',\n  path: '/central-florida-zoo'\n}, {\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });