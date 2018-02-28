/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* global io */\n\n// import gameLoop from './game-loop';\n\nio();\n\n// const state = {};\n\nvar contentNode = document.getElementById('content');\n\nvar usernameNode = document.getElementById('username');\n// const usernameField = document.getElementById('username-field');\nvar usernameSubmit = document.getElementById('username-submit');\n\n// const choiceNode = document.getElementById('choice');\n// const createNode = document.getElementById('choice-create');\n// const joinNode = document.getElementById('choice-join');\n// const canvasNode = document.getElementById('canvas');\n\n// First, put the username form inside the content div.\ncontentNode.innerHTML = usernameNode.innerHTML;\n// eslint-disable-next-line\nconsole.log(usernameSubmit);\n// Bind Listeners\n// eslint-disable-next-line no-console\nusernameSubmit.addEventListener('click', console.log);\n\n// Listeners\n\n// function addUsername() {\n//   // eslint-disable-next-line no-console\n//   console.log('YEA');\n//   // event.preventDefault();\n//\n//   state.username = usernameField.value;\n//   usernameField.value = '';\n//   // eslint-disable-next-line\n//   console.log(state);\n//\n//   contentNode.innerHTML = choiceNode.innerHTML;\n// }\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

/******/ });