/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n1 │ @import '-bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  resources/css/app.scss 1:9  root stylesheet\n    at processResult (/Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/webpack/lib/NormalModule.js:676:19)\n    at /Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/webpack/lib/NormalModule.js:778:5\n    at /Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/loader-runner/lib/LoaderRunner.js:399:11\n    at /Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/loader-runner/lib/LoaderRunner.js:251:18\n    at context.callback (/Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at /Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/sass-loader/dist/index.js:54:7\n    at Function.call$2 (/Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/sass/sass.dart.js:92612:16)\n    at _render_closure1.call$2 (/Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/sass/sass.dart.js:81115:12)\n    at _RootZone.runBinary$3$3 (/Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/sass/sass.dart.js:27260:18)\n    at _FutureListener.handleError$1 (/Applications/XAMPP/xamppfiles/htdocs/laravel8-app/node_modules/sass/sass.dart.js:25816:19)");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/css/app.scss");
/******/ 	
/******/ })()
;