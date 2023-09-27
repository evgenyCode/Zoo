/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animal.ts":
/*!***********************!*\
  !*** ./src/animal.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Animal: () => (/* binding */ Animal)\n/* harmony export */ });\nvar Animal = /** @class */ (function () {\n    function Animal(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n    Animal.prototype.makeSound = function () {\n        console.log(\"Gyvūnas išskleidžia garsą\");\n    };\n    return Animal;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/animal.ts?");

/***/ }),

/***/ "./src/animals.ts":
/*!************************!*\
  !*** ./src/animals.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Elephant: () => (/* binding */ Elephant),\n/* harmony export */   Tiger: () => (/* binding */ Tiger),\n/* harmony export */   Zebra: () => (/* binding */ Zebra)\n/* harmony export */ });\n/* harmony import */ var _animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animal */ \"./src/animal.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n // Importuojame pagrindinę \"Animal\" klasę iš animal.ts\nvar Zebra = /** @class */ (function (_super) {\n    __extends(Zebra, _super);\n    function Zebra(name, age) {\n        return _super.call(this, name, age) || this;\n    }\n    Zebra.prototype.drinkWater = function () { };\n    Zebra.prototype.eatGrass = function () { };\n    Zebra.prototype.makeSound = function () {\n        console.log(\"Zebros garsas\");\n    };\n    return Zebra;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\nvar Tiger = /** @class */ (function (_super) {\n    __extends(Tiger, _super);\n    function Tiger(name, age) {\n        var _this = _super.call(this, name, age) || this;\n        _this.wasOutside = false;\n        _this.outsideTimestamp = 0;\n        return _this;\n    }\n    Tiger.prototype.goOutside = function () {\n        this.wasOutside = true;\n        this.outsideTimestamp = new Date().getTime();\n    };\n    Tiger.prototype.returnToCage = function () {\n        this.wasOutside = false;\n        this.outsideTimestamp = 0;\n    };\n    Tiger.prototype.checkOutsideStatus = function () {\n        if (!this.wasOutside) {\n            return false;\n        }\n        var currentTime = new Date().getTime();\n        var timeOutside = currentTime - this.outsideTimestamp;\n        return timeOutside <= 8 * 60 * 60 * 1000;\n    };\n    Tiger.prototype.eatMeat = function () { };\n    Tiger.prototype.drinkWater = function () { };\n    Tiger.prototype.makeSound = function () {\n        console.log(\"Riaumoja\");\n    };\n    return Tiger;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\nvar Elephant = /** @class */ (function (_super) {\n    __extends(Elephant, _super);\n    function Elephant(name, age) {\n        return _super.call(this, name, age) || this;\n    }\n    Elephant.prototype.drinkWater = function () { };\n    Elephant.prototype.eatGrass = function () { };\n    Elephant.prototype.makeSound = function () {\n        console.log(\"Trimituoja\");\n    };\n    return Elephant;\n}(_animal__WEBPACK_IMPORTED_MODULE_0__.Animal));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/animals.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals */ \"./src/animals.ts\");\n\nvar zebra = new _animals__WEBPACK_IMPORTED_MODULE_0__.Zebra(\"Marty\", 5);\nvar tiger = new _animals__WEBPACK_IMPORTED_MODULE_0__.Tiger(\"Willson\", 7);\nvar elephant = new _animals__WEBPACK_IMPORTED_MODULE_0__.Elephant(\"Django\", 35);\nconsole.log(zebra.name);\nconsole.log(tiger.name);\nconsole.log(elephant.name);\ntiger.goOutside();\nconsole.log(\"Is tiger was outside last 8 h\", tiger.checkOutsideStatus());\nzebra.eatGrass();\ntiger.eatMeat();\nelephant.drinkWater();\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;