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

/***/ "./src/components/GalleryThumbnail.js":
/*!********************************************!*\
  !*** ./src/components/GalleryThumbnail.js ***!
  \********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // import { Link } from 'react-router-dom';\n// import { Image } from 'cloudinary-react';\n// import Zoo from '../pages/Zoo';\n// import config from '../config';\n// import config2 from '../config2';\n\nconst GalleryThumbnail = props => {\n  const [gallery, setGallery] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [galleryImage, setGalleryImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const galleryArray = []; // const galleries = ['/animalkingdom', '/brevardzoo', '/columbuszoo'];\n  // console.log(galleries);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // Immediately Invoked Function Expression\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/tags');\n        const data = yield response.json();\n        console.log(data.tags[1]);\n        setGallery(data.tags);\n        galleryArray.push(data.tags);\n        console.log(galleryArray[0]);\n        getImage();\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n\n  const getImage = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* () {\n      const galleryImageMap = () => {\n        const newArray = galleryArray.map((tag, index) => {\n          return \"http://res.cloudinary.com/ryanphotos/image/list/\".concat(tag[0][index], \".json\");\n        });\n        console.log(newArray);\n      };\n\n      galleryImageMap();\n      const imageResponse = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/\".concat(galleryArray[0][5], \".json\"));\n      const imageData = yield imageResponse.json();\n      const imageDataArray = imageData.resources;\n      console.log(imageData);\n      console.log(imageDataArray[0]);\n      const thumbnailURL = imageDataArray.map(item => {\n        let finalThumbnail = \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\";\n        return finalThumbnail;\n      });\n      console.log(thumbnailURL[0]);\n      setGalleryImage(thumbnailURL[0]);\n    });\n\n    return function getImage() {\n      return _ref2.apply(this, arguments);\n    };\n  }(); // useEffect(() => {\n  // \tgetImage();\n  // }, []);\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gallery.map(tag => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"thumbnail-container\",\n      key: tag._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"/\".concat(tag)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"\".concat(galleryImage),\n      className: \"thumbnail\"\n    })));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (GalleryThumbnail);\n\n//# sourceURL=webpack:///./src/components/GalleryThumbnail.js?");

/***/ }),

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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AnimalKingdom; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction AnimalKingdom(props) {\n  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const getData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* () {\n      const response = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/animalkingdom.json\");\n      const data = yield response.json();\n      const dataArray = data.resources;\n      const imgURL = dataArray.map(item => {\n        let finalOutput = {\n          original: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\",\n          thumbnail: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\"\n        };\n        return finalOutput;\n      });\n      setImage(imgURL);\n    });\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getData();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: image\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/AnimalKingdom.js?");

/***/ }),

/***/ "./src/pages/BrevardZoo.js":
/*!*********************************!*\
  !*** ./src/pages/BrevardZoo.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BrevardZoo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction BrevardZoo(props) {\n  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const getData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* () {\n      const response = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/brevardzoo.json\");\n      const data = yield response.json();\n      const dataArray = data.resources;\n      const imgURL = dataArray.map(item => {\n        let finalOutput = {\n          original: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\",\n          thumbnail: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\"\n        };\n        return finalOutput;\n      });\n      setImage(imgURL);\n    });\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getData();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: image\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/BrevardZoo.js?");

/***/ }),

/***/ "./src/pages/CentralFlorida.js":
/*!*************************************!*\
  !*** ./src/pages/CentralFlorida.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CentralFlorida; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction CentralFlorida(props) {\n  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const getData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* () {\n      const response = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/centralfloridazoo.json\");\n      const data = yield response.json();\n      const dataArray = data.resources;\n      const imgURL = dataArray.map(item => {\n        let finalOutput = {\n          original: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\",\n          thumbnail: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\"\n        };\n        return finalOutput;\n      });\n      setImage(imgURL);\n    });\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getData();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: image\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/CentralFlorida.js?");

/***/ }),

/***/ "./src/pages/ColumbusZoo.js":
/*!**********************************!*\
  !*** ./src/pages/ColumbusZoo.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ColumbusZoo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction ColumbusZoo(props) {\n  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n\n  const getData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* () {\n      const response = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/columbuszoo.json\");\n      const data = yield response.json();\n      const dataArray = data.resources;\n      const imgURL = dataArray.map(item => {\n        let finalOutput = {\n          original: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\",\n          thumbnail: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\"\n        };\n        return finalOutput;\n      });\n      setImage(imgURL);\n    });\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    getData();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: image\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/ColumbusZoo.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_GalleryThumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/GalleryThumbnail */ \"./src/components/GalleryThumbnail.js\");\n\n\nfunction App(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"home-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GalleryThumbnail__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], props)));\n} // Display all galleries from Cloudinary in grid of thumbnail images\n// Grab thumbnail image from 1st item in array, link to tag name, click on thumbnail takes you to gallery url\n//Gallery thumbnail React component\n//\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Zoo.js":
/*!**************************!*\
  !*** ./src/pages/Zoo.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Zoo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-image-gallery */ \"./node_modules/react-image-gallery/build/image-gallery.js\");\n/* harmony import */ var react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction Zoo(props) {\n  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [prevLocation, setPrevLocation] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [link, setLink] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.match.params.zoo);\n\n  const getData = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* () {\n      const response = yield fetch(\"http://res.cloudinary.com/ryanphotos/image/list/\".concat(props.match.params.zoo, \".json\"));\n      const data = yield response.json();\n      const dataArray = data.resources;\n      console.log(data);\n      console.log(dataArray);\n      const imgURL = dataArray.map(item => {\n        let finalOutput = {\n          original: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\",\n          thumbnail: \"https://res.cloudinary.com/ryanphotos/image/upload/v\" + item.version + \"/\" + item.public_id + \".jpg\"\n        };\n        return finalOutput;\n      });\n      console.log(imgURL[0].thumbnail);\n      setImage(imgURL);\n    });\n\n    return function getData() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // Run getData only when there is a change to link\n    if (!prevLocation) {\n      getData();\n    } else {\n      setPrevLocation(props.location.key);\n    }\n  }, [props.location.key]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_image_gallery__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    items: image\n  }));\n}\n\n//# sourceURL=webpack:///./src/pages/Zoo.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ \"./src/components/NavBar.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    routes: _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map((_ref) => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      key: key,\n      path: path,\n      component: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({\n        page: key\n      }, props))\n    });\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _pages_BrevardZoo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/BrevardZoo */ \"./src/pages/BrevardZoo.js\");\n/* harmony import */ var _pages_AnimalKingdom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/AnimalKingdom */ \"./src/pages/AnimalKingdom.js\");\n/* harmony import */ var _pages_CentralFlorida__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CentralFlorida */ \"./src/pages/CentralFlorida.js\");\n/* harmony import */ var _pages_ColumbusZoo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/ColumbusZoo */ \"./src/pages/ColumbusZoo.js\");\n/* harmony import */ var _pages_Zoo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Zoo */ \"./src/pages/Zoo.js\");\n\n\n\n\n\n\n\nconst routes = [{\n  Component: _pages_Zoo__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"],\n  key: 'Zoo',\n  path: '/:zoo'\n}, // {\n// \tComponent: Gatorland,\n// \tkey: 'Gatorland',\n// \tpath: '/gatorland'\n// },\n{\n  Component: _pages_ColumbusZoo__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"],\n  key: 'Columbus Zoo',\n  path: '/columbuszoo'\n}, {\n  Component: _pages_CentralFlorida__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"],\n  key: 'Central Florida Zoo',\n  path: '/centralfloridazoo'\n}, {\n  Component: _pages_BrevardZoo__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"],\n  key: 'Brevard Zoo',\n  path: '/brevardzoo'\n}, {\n  Component: _pages_AnimalKingdom__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"],\n  key: 'Animal Kingdom',\n  path: '/animalkingdom'\n}, {\n  Component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'Home',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });