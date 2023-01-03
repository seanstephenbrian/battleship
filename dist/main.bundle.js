/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/unbounded/unbounded.ttf */ "./src/fonts/unbounded/unbounded.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1.1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype supports variations\"),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: #d5d5d5ce;\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 228, 196);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n}\n\n.attack-prompt {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1.1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url('./fonts/unbounded/unbounded.ttf') format(\"truetype supports variations\"),\n         url('./fonts/unbounded/unbounded.ttf') format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: #d5d5d5ce;\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 228, 196);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n}\n\n.attack-prompt {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/js/player.js");


const Game = () => {

    // create two new players:
    const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    // (these players' ships have been placed at the same sample coordinates for testing purposes)

    // run game loop while neither player's ships have all sunk:
    // while (playerOne.board.allSunk() === false && playerTwo.board.allSunk() === false) {

    // }

    

    return {
        playerOne,
        playerTwo
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.js */ "./src/js/square.js");
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ "./src/js/ship.js");



const Gameboard = () => {

    // initialize empty array to hold references to all board squares:
    let gameSquares = [];

    // initialize empty array to hold references to all created ships:
    let ships = [];

    // initialize empty set to track the successful hits:
    const hits = new Set();

    // initialize empty set to track misses:
    const misses = new Set();

    // create 10x10 grid:
    for (let x = 1; x <= 10; x++) {
        for (let y = 1; y <= 10; y++) {
            const newSquare = (0,_square_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, y);
            gameSquares.push(newSquare);
        }
    }

    // return a reference to a gameboard square based on its x & y coordinates:
    function findSquare(x, y) {
        let targetSquare;
        gameSquares.forEach(square => {
            if (square.x === x && square.y === y) {
                targetSquare = square;
            }
        });
        return targetSquare;
    }

    // create a ship of the appropriate length given its starting & ending coordinates:
    function createShip([x, y], [x2, y2]) {
        let length;
        // if x coordinates are the same, set length to difference between y coordinates:
        if (x === x2) {
            length = Math.abs(y - y2) + 1;
        // if y coords are the same, set length to difference between x coords:
        } else if (y === y2) {
            length = Math.abs(x - x2) + 1;
        } else {
            return;
        }

        const newShip = (0,_ship_js__WEBPACK_IMPORTED_MODULE_1__["default"])(length);

        // update gameboard squares to reference the ship:
        if (x === x2 && y < y2) {
            newShip.startingSquare = [x, y];
            newShip.orientation = 'y';
            for (let z = y; z <= y2; z++) {
                let square = findSquare(x, z);
                square.ship = newShip;
            }
        } else if (x === x2 && y > y2) {
            newShip.startingSquare = [x, y2];
            newShip.orientation = 'y';
            for (let z = y2; z <= y; z++) {
                let square = findSquare(x, z);
                square.ship = newShip;
            }
        } else if (y === y2 && x < x2) {
            newShip.startingSquare = [x, y];
            newShip.orientation = 'x';
            for (let z = x; z <= x2; z++) {
                let square = findSquare(z, y);
                square.ship = newShip;
            }
        } else if (y === y2 && x > x2) {
            newShip.startingSquare = [x2, y];
            newShip.orientation = 'x';
            for (let z = x2; z <= x; z++) {
                let square = findSquare(z, y);
                square.ship = newShip;
            }
        }

        // add ship to ships array:
        ships.push(newShip);
    }

    function receiveAttack(x, y) {
        const attackedSquare = findSquare(x, y);

        // if square has already been attacked, simply return:
        if (hits.has(attackedSquare) || misses.has(attackedSquare)) return;

        // mark the square as having been attacked:
        attackedSquare.attacked = true;
        
        // if the attacked square has a ship, add a 'hit' to that ship:
        if (attackedSquare.ship) {
            attackedSquare.ship.hit();
            // then add the square to the 'hits' set:
            hits.add(attackedSquare);
        } else {
            // otherwise add the square to the 'misses' set:
            misses.add(attackedSquare);
        }
    }

    function allSunk() {
        if (hits.size === 17) {
            return true;
            // begin end of game logic...
        }
        // alternative approach would be to iterate over the ships array,
        // checking if each ship has sunk

        return false;
    }

    function showMisses() {
        let recordedMisses = [];
        misses.forEach(miss => {
            recordedMisses.push([miss.x, miss.y]);
        });
        return recordedMisses;
    }

    function showHits() {
        let recordedHits = [];
        hits.forEach(hit => {
            recordedHits.push([hit.x, hit.y]);
        })
        return recordedHits;
    }

    return { 
        createShip,
        allSunk,
        receiveAttack,
        showHits,
        showMisses,
        ships,
        findSquare
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");


const Player = () => {

    const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();

        // 5 sample ships for testing purposes:
        board.createShip([2, 3], [3, 3]);
        board.createShip([3, 7], [3, 10]);
        board.createShip([5, 5], [7, 5]);
        board.createShip([6, 9], [10, 9]);
        board.createShip([9, 2], [9, 4]);

    function attack(otherPlayer, [x, y]) {
        otherPlayer.board.receiveAttack(x, y);
    }

    return { 
        board,
        attack
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Ship = (length) => {

    let hits = 0;
    let startingSquare = null;
    let orientation = null;

    function hit() {
        if (hits === length) {
            return;
        }
        hits++;
    }

    function isSunk() {
        if (hits === length) return true;
        return false;
    }

    return { 
        hit, 
        isSunk,
        startingSquare,
        orientation,
        length
    }

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/js/square.js":
/*!**************************!*\
  !*** ./src/js/square.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Square = (x, y) => {
    let ship = null;
    let attacked = false;
    return { x, y, ship, attacked };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Square);

/***/ }),

/***/ "./src/fonts/unbounded/unbounded.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/unbounded/unbounded.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db84d8db427d8dff17c3.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./src/style.css");




(function createInitialDOMStructure() {

    let currentGame = null;

    (function createHeader() {
        const body = document.querySelector('body');
        const header = document.createElement('header');
        body.appendChild(header);
        header.innerHTML = 
            `<span>b</span><span>a</span><span>t</span><span>t</span><span>l</span><span>e</span><span>s</span><span>h</span><span>i</span><span>p</span>`;
    })();

    (function createGameboardsContainer() {
        const body = document.querySelector('body');
        const gameboards = document.createElement('div');
        body.appendChild(gameboards);
        gameboards.classList.add('gameboards');
    })();

    (function createGameboards() {
        const gameboards = document.querySelector('.gameboards');

        const playerOneBoard = document.createElement('div');
        playerOneBoard.classList.add('player-one-board', 'gameboard');
        gameboards.appendChild(playerOneBoard);

            const playerOneBoardTitle = document.createElement('div');
            playerOneBoardTitle.classList.add('player-one-board-title', 'board-title');
            playerOneBoardTitle.textContent = 'your grid:';
            playerOneBoard.appendChild(playerOneBoardTitle);

            const playerOneBoardSquares = document.createElement('div');
            playerOneBoardSquares.classList.add('player-one-board-squares', 'board-squares');
            playerOneBoard.appendChild(playerOneBoardSquares);

        const playerTwoBoard = document.createElement('div');
        playerTwoBoard.classList.add('player-two-board', 'gameboard');
        gameboards.appendChild(playerTwoBoard);

            const playerTwoBoardTitle = document.createElement('div');
            playerTwoBoardTitle.classList.add('player-two-board-title', 'board-title');
            playerTwoBoardTitle.textContent = 'enemy grid:'
            playerTwoBoard.appendChild(playerTwoBoardTitle);

            const playerTwoBoardSquares = document.createElement('div');
            playerTwoBoardSquares.classList.add('player-two-board-squares', 'board-squares');
            playerTwoBoard.appendChild(playerTwoBoardSquares);
    })();

    (function createBoardGrids() {
        const gameboards = document.querySelectorAll('.board-squares');
        gameboards.forEach(board => {
            for (let y = 10; y >= 1; y--) {
                for (let x = 1; x <= 10; x++) {
                    const gameSquare = document.createElement('div');
                    gameSquare.classList.add(`game-square`, `x-${x}`, `y-${y}`, `x${x}-y${y}`);
                    gameSquare.dataset.x = x;
                    gameSquare.dataset.y = y;
                    board.appendChild(gameSquare);
                }
            }
        });
    })();

    (function createFooter() {
        const body = document.querySelector('body');
        const footer = document.createElement('footer');
        body.appendChild(footer);
        const date = new Date();
        const year = date.getFullYear();
        footer.textContent = `copyright © ${year} | sean stephen brian`;
    })();

    (function createOverlay() {
        const body = document.querySelector('body');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
    })();

    function hideOverlay() {
        const overlay = document.querySelector('.overlay');
        overlay.classList.add('hide');
    }

    function showOverlay() {
        const overlay = document.querySelector('.overlay');
        overlay.classList.remove('hide');
    }

    function createAlert() {
        const body = document.querySelector('body');
        const alertWrapper = document.createElement('div');
        alertWrapper.classList.add('alert-wrapper');
        body.appendChild(alertWrapper);

            const alertWindow = document.createElement('div');
            alertWindow.classList.add('alert-window');
            alertWrapper.appendChild(alertWindow);
    };

    function deleteAlert() {
        const alert = document.querySelector('.alert-wrapper');
        alert.remove();
    }

    (function alertNewGame() {
        createAlert();
        const alert = document.querySelector('.alert-window');
        alert.classList.add('new-game-alert');

            const title = document.createElement('div');
            title.classList.add('alert-title', 'new-game-title');
            title.textContent = 'welcome to BATTLESHIP';
            alert.appendChild(title);

            const startButton = document.createElement('div');
            startButton.classList.add('start-button', 'button');
            startButton.textContent = 'start game';
            alert.appendChild(startButton);

        startButton.addEventListener('click', startGame);

    })();

    function startGame() {
        deleteAlert();
        hideOverlay();

        // add blinking animation to header text:
        const header = document.querySelector('header');
        header.style.animation = 'blink 2s steps(5, start) infinite';
        header.style['-webkit-animation'] = 'blink 2s steps(5, start) infinite';

        // create a new game:
        currentGame = (0,_game__WEBPACK_IMPORTED_MODULE_0__["default"])();

        // TRIGGER LOGIC TO ALLOW USER TO CHOOSE SHIP POSITIONS

        renderBoard();

        getPlayerMove();

    }

    function renderBoard() {
        const playerOne = currentGame.playerOne;
        const playerTwo = currentGame.playerTwo;

        renderShips(playerOne, '.player-one-board-squares');

        renderHits(playerOne, '.player-one-board-squares');
        renderHits(playerTwo, '.player-two-board-squares');

        renderMisses(playerOne, '.player-one-board-squares');
        renderMisses(playerTwo, '.player-two-board-squares');
    }

    function renderShips(player, boardSelector) {
        player.board.ships.forEach(ship => {
            if (ship.orientation === 'x') {
                for (let i = 0; i < ship.length; i++) {
                    const shipSquare = document.querySelector(`${boardSelector} .x${ship.startingSquare[0] + i}-y${ship.startingSquare[1]}`);
                    shipSquare.style.backgroundColor = `var(--ship-bg)`;
                    shipSquare.style.transform = `var(--ship-transform)`;
                    if (i === 0) {
                        shipSquare.style.borderRadius = `var(--ship-border-radius) 0 0 var(--ship-border-radius)`;
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = 'none';
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    } else if (i === ship.length - 1) {
                        shipSquare.style.borderRadius = `0 var(--ship-border-radius) var(--ship-border-radius) 0`;
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = 'none';
                    } else {
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = 'none';
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = 'none';
                    }
                }
            } else if (ship.orientation === 'y') {
                for (let i = 0; i < ship.length; i++) {
                    const shipSquare = document.querySelector(`${boardSelector} .x${ship.startingSquare[0]}-y${ship.startingSquare[1] + i}`);
                    shipSquare.style.backgroundColor = `var(--ship-bg)`;
                    shipSquare.style.border = `var(--ship-border)`;
                    shipSquare.style.transform = `var(--ship-transform)`;
                    if (i === 0) {
                        shipSquare.style.borderRadius = `0 0 var(--ship-border-radius) var(--ship-border-radius)`;
                        shipSquare.style.borderTop = 'none';
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `var(--ship-border)`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    } else if (i === ship.length - 1) {
                        shipSquare.style.borderRadius = `var(--ship-border-radius) var(--ship-border-radius) 0 0`;
                        shipSquare.style.borderTop = `var(--ship-border)`;
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `none`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    } else {
                        shipSquare.style.borderTop = `none`;
                        shipSquare.style.borderRight = `var(--ship-border)`;
                        shipSquare.style.borderBottom = `none`;
                        shipSquare.style.borderLeft = `var(--ship-border)`;
                    }
                }
            }       
        });
    }

    function renderHits(player, boardSelector) {
        player.board.showHits().forEach(hit => {
            const hitSquare = document.querySelector(`${boardSelector} .x${hit[0]}-y${hit[1]}`);
            hitSquare.innerHTML = '';
            const hitMarker = document.createElement('div');
            hitMarker.classList.add('hit-marker');
            hitSquare.appendChild(hitMarker);
        });
    }

    function renderMisses(player, boardSelector) {
        player.board.showMisses().forEach(miss => {
            const missedSquare = document.querySelector(`${boardSelector} .x${miss[0]}-y${miss[1]}`);
            missedSquare.innerHTML = '';
            const missMarker = document.createElement('div');
            missMarker.classList.add('miss-marker');
            missedSquare.appendChild(missMarker);
        });
    }

    function getPlayerMove() {
        const playerTwoTitle = document.querySelector('.player-two-board-title');
        const playerTwoBoard = document.querySelector('.player-two-board-squares');

        playerTwoTitle.classList.add('attack-prompt');
        playerTwoTitle.textContent = 'CHOOSE A SQUARE TO ATTACK:';

        playerTwoBoard.style.cursor = 'pointer';
        playerTwoBoard.addEventListener('click', clickSquare);
    }

    function clickSquare(e) {
        const clickedSquare = e.target;
        const xCoord = parseInt(clickedSquare.dataset.x);
        const yCoord = parseInt(clickedSquare.dataset.y);
        attemptAttack(xCoord, yCoord);
    }

    function attemptAttack(x, y) {
        const targetSquare = currentGame.playerTwo.board.findSquare(x, y);
        // make sure that the square hasn't been attacked yet:
        if (targetSquare.attacked === false) {
            // then complete the attack:
            currentGame.playerOne.attack(currentGame.playerTwo, [x, y]);
            // re-render the board to show the new attack:
            renderBoard();
            // remove click listeners from the enemy board:
            const playerTwoBoard = document.querySelector('.player-two-board-squares');
            playerTwoBoard.removeEventListener('click', clickSquare);
            // check to see if all the enemy's ships have sunk:
            
            // if not, receive a random attack on player's own board:
            receiveAttack();
        }
    }

    function receiveAttack() {
        // get a random square to potentially attack:
        const randomX = Math.floor(Math.random() * 10 + 1);
        const randomY = Math.floor(Math.random() * 10 + 1);
        const randomSquare = currentGame.playerOne.board.findSquare(randomX, randomY);
        // if the square has already been attacked, run the function again:
        if (randomSquare.attacked === true) {
            receiveAttack();
        // if it hasn't yet been attacked, complete the attack:
        } else if (randomSquare.attacked === false) {
            currentGame.playerTwo.attack(currentGame.playerOne, [randomX, randomY]);
            // then re-render the board to show the new attack:
            renderBoard();
            // check to see if all the player's ships have sunk:

            // if not, get the player's next move:
            getPlayerMove();
        }
    }
    
})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLG1oQkFBbWhCLGNBQWMsZUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc3F1YXJlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWZhbGxiYWNrOiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuICAgIC0tc2l0ZS1ncmVlbjogIzFhZmYwMDtcXG5cXG4gICAgLS1zaGlwLWJnOiAjMjAzMzRlO1xcbiAgICAtLXNoaXAtYm9yZGVyOiAxcHggc29saWQgIzg5YThkNDtcXG4gICAgLS1zaGlwLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLS1zaGlwLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGUgc3VwcG9ydHMgdmFyaWF0aW9uc1xcXCIpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZS12YXJpYXRpb25zXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMCw3MSwxNzEsMSkgMzklLCByZ2JhKDE1MCwxNzcsMTk0LDEpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIHZhcigtLWZvbnQtZmFsbGJhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU5KTtcXG59XFxuXFxuLmFsZXJ0LXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydC13aW5kb3cge1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXJlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNWNlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctZ2FtZS1hbGVydCB7XFxuICAgIG1heC1oZWlnaHQ6IDQwdnc7XFxufVxcblxcbi5uZXctZ2FtZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMjgsIDE5Nik7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgc3BhbiB7XFxuICAgIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydnc7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5hdHRhY2stcHJvbXB0IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCByZ2JhKDI1NSwwLDAsMSkgMCUsIHJnYmEoMjU1LDgxLDgxLDEpIDU0JSwgcmdiYSgyMTQsMTEyLDExMiwxKSAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsIHJnYmEoMTAzLDExMSwxMjIsMSkgMCUsIHJnYmEoNTIsNzIsOTksMSkgNTQlLCByZ2JhKDIzLDQ5LDg3LDEpIDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dnc7XFxuICAgIH1cXG4gICAgaGVhZGVyIHNwYW46aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsNkJBQTZCOztJQUU3QixxQkFBcUI7O0lBRXJCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qjs4RUFDeUU7SUFDekUscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNHQUFzRztJQUN0Ryw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qix3R0FBd0c7SUFDeEcsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLDJDQUEyQztJQUMvQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtZmFsbGJhY2s6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG4gICAgLS1zaXRlLWdyZWVuOiAjMWFmZjAwO1xcblxcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy91bmJvdW5kZWQvdW5ib3VuZGVkLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGUgc3VwcG9ydHMgdmFyaWF0aW9uc1xcXCIpLFxcbiAgICAgICAgIHVybCgnLi9mb250cy91bmJvdW5kZWQvdW5ib3VuZGVkLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1xcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDAsNzEsMTcxLDEpIDM5JSwgcmdiYSgxNTAsMTc3LDE5NCwxKSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnLCB2YXIoLS1mb250LWZhbGxiYWNrKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41OSk7XFxufVxcblxcbi5hbGVydC13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnQtd2luZG93IHtcXG4gICAgcGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDcwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDVjZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWxlcnQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmV3LWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI4LCAxOTYpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5ib2FyZC1zcXVhcmVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNjB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjY1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogN3B4O1xcbn1cXG5cXG4uaGl0LW1hcmtlciB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMCwwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OWRlZywgcmdiYSgyNTUsMCwwLDEpIDAlLCByZ2JhKDI1NSw4MSw4MSwxKSA1NCUsIHJnYmEoMjE0LDExMiwxMTIsMSkgMTAwJSk7XFxufVxcblxcbi5taXNzLW1hcmtlciB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLDExMSwxMjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCByZ2JhKDEwMywxMTEsMTIyLDEpIDAlLCByZ2JhKDUyLDcyLDk5LDEpIDU0JSwgcmdiYSgyMyw0OSw4NywxKSAxMDAlKTtcXG4gICAgdHJhbnNmb3JtOiB2YXIoLS1zaGlwLXRyYW5zZm9ybSk7XFxufVxcblxcbi54LTEge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuLnktMTAge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4ueC0xMCB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXFxuLnktMSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuMzUqdmFyKC0tcnZ2KSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIC5nYW1lYm9hcmRzIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gICAgLmJvYXJkLXNxdWFyZXMge1xcbiAgICAgICAgd2lkdGg6IDM1dnc7XFxuICAgICAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIH1cXG4gICAgLmFsZXJ0LXdpbmRvdyB7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1dnc7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyNXZ3O1xcbiAgICB9XFxuICAgIC5uZXctZ2FtZS1hbGVydCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZ3O1xcbiAgICB9XFxuICAgIGhlYWRlciBzcGFuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmNvbnN0IEdhbWUgPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgdHdvIG5ldyBwbGF5ZXJzOlxuICAgIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcigpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IFBsYXllcigpO1xuICAgIC8vICh0aGVzZSBwbGF5ZXJzJyBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkIGF0IHRoZSBzYW1lIHNhbXBsZSBjb29yZGluYXRlcyBmb3IgdGVzdGluZyBwdXJwb3NlcylcblxuICAgIC8vIHJ1biBnYW1lIGxvb3Agd2hpbGUgbmVpdGhlciBwbGF5ZXIncyBzaGlwcyBoYXZlIGFsbCBzdW5rOlxuICAgIC8vIHdoaWxlIChwbGF5ZXJPbmUuYm9hcmQuYWxsU3VuaygpID09PSBmYWxzZSAmJiBwbGF5ZXJUd28uYm9hcmQuYWxsU3VuaygpID09PSBmYWxzZSkge1xuXG4gICAgLy8gfVxuXG4gICAgXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJPbmUsXG4gICAgICAgIHBsYXllclR3b1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NxdWFyZS5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG5cbiAgICAvLyBpbml0aWFsaXplIGVtcHR5IGFycmF5IHRvIGhvbGQgcmVmZXJlbmNlcyB0byBhbGwgYm9hcmQgc3F1YXJlczpcbiAgICBsZXQgZ2FtZVNxdWFyZXMgPSBbXTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgYXJyYXkgdG8gaG9sZCByZWZlcmVuY2VzIHRvIGFsbCBjcmVhdGVkIHNoaXBzOlxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBzZXQgdG8gdHJhY2sgdGhlIHN1Y2Nlc3NmdWwgaGl0czpcbiAgICBjb25zdCBoaXRzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBzZXQgdG8gdHJhY2sgbWlzc2VzOlxuICAgIGNvbnN0IG1pc3NlcyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGNyZWF0ZSAxMHgxMCBncmlkOlxuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gU3F1YXJlKHgsIHkpO1xuICAgICAgICAgICAgZ2FtZVNxdWFyZXMucHVzaChuZXdTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGEgcmVmZXJlbmNlIHRvIGEgZ2FtZWJvYXJkIHNxdWFyZSBiYXNlZCBvbiBpdHMgeCAmIHkgY29vcmRpbmF0ZXM6XG4gICAgZnVuY3Rpb24gZmluZFNxdWFyZSh4LCB5KSB7XG4gICAgICAgIGxldCB0YXJnZXRTcXVhcmU7XG4gICAgICAgIGdhbWVTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUueCA9PT0geCAmJiBzcXVhcmUueSA9PT0geSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRTcXVhcmU7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGEgc2hpcCBvZiB0aGUgYXBwcm9wcmlhdGUgbGVuZ3RoIGdpdmVuIGl0cyBzdGFydGluZyAmIGVuZGluZyBjb29yZGluYXRlczpcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGlwKFt4LCB5XSwgW3gyLCB5Ml0pIHtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgLy8gaWYgeCBjb29yZGluYXRlcyBhcmUgdGhlIHNhbWUsIHNldCBsZW5ndGggdG8gZGlmZmVyZW5jZSBiZXR3ZWVuIHkgY29vcmRpbmF0ZXM6XG4gICAgICAgIGlmICh4ID09PSB4Mikge1xuICAgICAgICAgICAgbGVuZ3RoID0gTWF0aC5hYnMoeSAtIHkyKSArIDE7XG4gICAgICAgIC8vIGlmIHkgY29vcmRzIGFyZSB0aGUgc2FtZSwgc2V0IGxlbmd0aCB0byBkaWZmZXJlbmNlIGJldHdlZW4geCBjb29yZHM6XG4gICAgICAgIH0gZWxzZSBpZiAoeSA9PT0geTIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHggLSB4MikgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoKTtcblxuICAgICAgICAvLyB1cGRhdGUgZ2FtZWJvYXJkIHNxdWFyZXMgdG8gcmVmZXJlbmNlIHRoZSBzaGlwOlxuICAgICAgICBpZiAoeCA9PT0geDIgJiYgeSA8IHkyKSB7XG4gICAgICAgICAgICBuZXdTaGlwLnN0YXJ0aW5nU3F1YXJlID0gW3gsIHldO1xuICAgICAgICAgICAgbmV3U2hpcC5vcmllbnRhdGlvbiA9ICd5JztcbiAgICAgICAgICAgIGZvciAobGV0IHogPSB5OyB6IDw9IHkyOyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZSh4LCB6KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoeCA9PT0geDIgJiYgeSA+IHkyKSB7XG4gICAgICAgICAgICBuZXdTaGlwLnN0YXJ0aW5nU3F1YXJlID0gW3gsIHkyXTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geTI7IHogPD0geTsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyICYmIHggPCB4Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5XTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneCc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geDsgeiA8PSB4MjsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeiwgeSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyICYmIHggPiB4Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4MiwgeV07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHgyOyB6IDw9IHg7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHosIHkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBzaGlwIHRvIHNoaXBzIGFycmF5OlxuICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBhdHRhY2tlZFNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeSk7XG5cbiAgICAgICAgLy8gaWYgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQsIHNpbXBseSByZXR1cm46XG4gICAgICAgIGlmIChoaXRzLmhhcyhhdHRhY2tlZFNxdWFyZSkgfHwgbWlzc2VzLmhhcyhhdHRhY2tlZFNxdWFyZSkpIHJldHVybjtcblxuICAgICAgICAvLyBtYXJrIHRoZSBzcXVhcmUgYXMgaGF2aW5nIGJlZW4gYXR0YWNrZWQ6XG4gICAgICAgIGF0dGFja2VkU3F1YXJlLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmIHRoZSBhdHRhY2tlZCBzcXVhcmUgaGFzIGEgc2hpcCwgYWRkIGEgJ2hpdCcgdG8gdGhhdCBzaGlwOlxuICAgICAgICBpZiAoYXR0YWNrZWRTcXVhcmUuc2hpcCkge1xuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIC8vIHRoZW4gYWRkIHRoZSBzcXVhcmUgdG8gdGhlICdoaXRzJyBzZXQ6XG4gICAgICAgICAgICBoaXRzLmFkZChhdHRhY2tlZFNxdWFyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgYWRkIHRoZSBzcXVhcmUgdG8gdGhlICdtaXNzZXMnIHNldDpcbiAgICAgICAgICAgIG1pc3Nlcy5hZGQoYXR0YWNrZWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICAgICAgaWYgKGhpdHMuc2l6ZSA9PT0gMTcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy8gYmVnaW4gZW5kIG9mIGdhbWUgbG9naWMuLi5cbiAgICAgICAgfVxuICAgICAgICAvLyBhbHRlcm5hdGl2ZSBhcHByb2FjaCB3b3VsZCBiZSB0byBpdGVyYXRlIG92ZXIgdGhlIHNoaXBzIGFycmF5LFxuICAgICAgICAvLyBjaGVja2luZyBpZiBlYWNoIHNoaXAgaGFzIHN1bmtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01pc3NlcygpIHtcbiAgICAgICAgbGV0IHJlY29yZGVkTWlzc2VzID0gW107XG4gICAgICAgIG1pc3Nlcy5mb3JFYWNoKG1pc3MgPT4ge1xuICAgICAgICAgICAgcmVjb3JkZWRNaXNzZXMucHVzaChbbWlzcy54LCBtaXNzLnldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZWNvcmRlZE1pc3NlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SGl0cygpIHtcbiAgICAgICAgbGV0IHJlY29yZGVkSGl0cyA9IFtdO1xuICAgICAgICBoaXRzLmZvckVhY2goaGl0ID0+IHtcbiAgICAgICAgICAgIHJlY29yZGVkSGl0cy5wdXNoKFtoaXQueCwgaGl0LnldKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY29yZGVkSGl0cztcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgY3JlYXRlU2hpcCxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgc2hvd0hpdHMsXG4gICAgICAgIHNob3dNaXNzZXMsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBmaW5kU3F1YXJlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgICAgICAvLyA1IHNhbXBsZSBzaGlwcyBmb3IgdGVzdGluZyBwdXJwb3NlczpcbiAgICAgICAgYm9hcmQuY3JlYXRlU2hpcChbMiwgM10sIFszLCAzXSk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZVNoaXAoWzMsIDddLCBbMywgMTBdKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlU2hpcChbNSwgNV0sIFs3LCA1XSk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZVNoaXAoWzYsIDldLCBbMTAsIDldKTtcbiAgICAgICAgYm9hcmQuY3JlYXRlU2hpcChbOSwgMl0sIFs5LCA0XSk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2sob3RoZXJQbGF5ZXIsIFt4LCB5XSkge1xuICAgICAgICBvdGhlclBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBib2FyZCxcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSBudWxsO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBoaXQsIFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgbGVuZ3RoXG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImNvbnN0IFNxdWFyZSA9ICh4LCB5KSA9PiB7XG4gICAgbGV0IHNoaXAgPSBudWxsO1xuICAgIGxldCBhdHRhY2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7IHgsIHksIHNoaXAsIGF0dGFja2VkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5pbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbihmdW5jdGlvbiBjcmVhdGVJbml0aWFsRE9NU3RydWN0dXJlKCkge1xuXG4gICAgbGV0IGN1cnJlbnRHYW1lID0gbnVsbDtcblxuICAgIChmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8c3Bhbj5iPC9zcGFuPjxzcGFuPmE8L3NwYW4+PHNwYW4+dDwvc3Bhbj48c3Bhbj50PC9zcGFuPjxzcGFuPmw8L3NwYW4+PHNwYW4+ZTwvc3Bhbj48c3Bhbj5zPC9zcGFuPjxzcGFuPmg8L3NwYW4+PHNwYW4+aTwvc3Bhbj48c3Bhbj5wPC9zcGFuPmA7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRzQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkcyk7XG4gICAgICAgIGdhbWVib2FyZHMuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkcycpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZCcsICdnYW1lYm9hcmQnKTtcbiAgICAgICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZC10aXRsZScsICdib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9ICd5b3VyIGdyaWQ6JztcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnLCAnYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRTcXVhcmVzKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkJywgJ2dhbWVib2FyZCcpO1xuICAgICAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkLXRpdGxlJywgJ2JvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ2VuZW15IGdyaWQ6J1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmRUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkU3F1YXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmRTcXVhcmVzLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tYm9hcmQtc3F1YXJlcycsICdib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZFNxdWFyZXMpO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24gY3JlYXRlQm9hcmRHcmlkcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIGdhbWVib2FyZHMuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMTA7IHkgPj0gMTsgeS0tKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuY2xhc3NMaXN0LmFkZChgZ2FtZS1zcXVhcmVgLCBgeC0ke3h9YCwgYHktJHt5fWAsIGB4JHt4fS15JHt5fWApO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuZGF0YXNldC55ID0geTtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZVNxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IGBjb3B5cmlnaHQgwqkgJHt5ZWFyfSB8IHNlYW4gc3RlcGhlbiBicmlhbmA7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBoaWRlT3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPdmVybGF5KCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGFsZXJ0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbGVydFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWxlcnQtd3JhcHBlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFsZXJ0V3JhcHBlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGVydFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhbGVydC13aW5kb3cnKTtcbiAgICAgICAgICAgIGFsZXJ0V3JhcHBlci5hcHBlbmRDaGlsZChhbGVydFdpbmRvdyk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJyk7XG4gICAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIChmdW5jdGlvbiBhbGVydE5ld0dhbWUoKSB7XG4gICAgICAgIGNyZWF0ZUFsZXJ0KCk7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdpbmRvdycpO1xuICAgICAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCduZXctZ2FtZS1hbGVydCcpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYWxlcnQtdGl0bGUnLCAnbmV3LWdhbWUtdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ3dlbGNvbWUgdG8gQkFUVExFU0hJUCc7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24nLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdzdGFydCBnYW1lJztcbiAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcblxuICAgICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5cbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgICAgICBkZWxldGVBbGVydCgpO1xuICAgICAgICBoaWRlT3ZlcmxheSgpO1xuXG4gICAgICAgIC8vIGFkZCBibGlua2luZyBhbmltYXRpb24gdG8gaGVhZGVyIHRleHQ6XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuc3R5bGUuYW5pbWF0aW9uID0gJ2JsaW5rIDJzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZSc7XG4gICAgICAgIGhlYWRlci5zdHlsZVsnLXdlYmtpdC1hbmltYXRpb24nXSA9ICdibGluayAycyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGUnO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBnYW1lOlxuICAgICAgICBjdXJyZW50R2FtZSA9IEdhbWUoKTtcblxuICAgICAgICAvLyBUUklHR0VSIExPR0lDIFRPIEFMTE9XIFVTRVIgVE8gQ0hPT1NFIFNISVAgUE9TSVRJT05TXG5cbiAgICAgICAgcmVuZGVyQm9hcmQoKTtcblxuICAgICAgICBnZXRQbGF5ZXJNb3ZlKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyT25lID0gY3VycmVudEdhbWUucGxheWVyT25lO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd28gPSBjdXJyZW50R2FtZS5wbGF5ZXJUd287XG5cbiAgICAgICAgcmVuZGVyU2hpcHMocGxheWVyT25lLCAnLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuXG4gICAgICAgIHJlbmRlckhpdHMocGxheWVyT25lLCAnLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICByZW5kZXJIaXRzKHBsYXllclR3bywgJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICByZW5kZXJNaXNzZXMocGxheWVyT25lLCAnLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICByZW5kZXJNaXNzZXMocGxheWVyVHdvLCAnLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke3NoaXAuc3RhcnRpbmdTcXVhcmVbMF0gKyBpfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGB2YXIoLS1zaGlwLWJnKWA7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHZhcigtLXNoaXAtdHJhbnNmb3JtKWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgMGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzBdfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdICsgaX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdmFyKC0tc2hpcC1iZylgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlciA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLnRyYW5zZm9ybSA9IGB2YXIoLS1zaGlwLXRyYW5zZm9ybSlgO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCAwIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSAwIDBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGBub25lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJIaXRzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hvd0hpdHMoKS5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtoaXRbMF19LXkke2hpdFsxXX1gKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IGhpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGl0TWFya2VyLmNsYXNzTGlzdC5hZGQoJ2hpdC1tYXJrZXInKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5hcHBlbmRDaGlsZChoaXRNYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXNzZXMocGxheWVyLCBib2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaG93TWlzc2VzKCkuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pc3NlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke21pc3NbMF19LXkke21pc3NbMV19YCk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCBtaXNzTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaXNzTWFya2VyLmNsYXNzTGlzdC5hZGQoJ21pc3MtbWFya2VyJyk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuYXBwZW5kQ2hpbGQobWlzc01hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBsYXllck1vdmUoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG5cbiAgICAgICAgcGxheWVyVHdvVGl0bGUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrLXByb21wdCcpO1xuICAgICAgICBwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9ICdDSE9PU0UgQSBTUVVBUkUgVE8gQVRUQUNLOic7XG5cbiAgICAgICAgcGxheWVyVHdvQm9hcmQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrU3F1YXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGlja1NxdWFyZShlKSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRTcXVhcmUgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgeENvb3JkID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5Q29vcmQgPSBwYXJzZUludChjbGlja2VkU3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAgIGF0dGVtcHRBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dGVtcHRBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCB0YXJnZXRTcXVhcmUgPSBjdXJyZW50R2FtZS5wbGF5ZXJUd28uYm9hcmQuZmluZFNxdWFyZSh4LCB5KTtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHNxdWFyZSBoYXNuJ3QgYmVlbiBhdHRhY2tlZCB5ZXQ6XG4gICAgICAgIGlmICh0YXJnZXRTcXVhcmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyB0aGVuIGNvbXBsZXRlIHRoZSBhdHRhY2s6XG4gICAgICAgICAgICBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYXR0YWNrKGN1cnJlbnRHYW1lLnBsYXllclR3bywgW3gsIHldKTtcbiAgICAgICAgICAgIC8vIHJlLXJlbmRlciB0aGUgYm9hcmQgdG8gc2hvdyB0aGUgbmV3IGF0dGFjazpcbiAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAvLyByZW1vdmUgY2xpY2sgbGlzdGVuZXJzIGZyb20gdGhlIGVuZW15IGJvYXJkOlxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrU3F1YXJlKTtcbiAgICAgICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBhbGwgdGhlIGVuZW15J3Mgc2hpcHMgaGF2ZSBzdW5rOlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBpZiBub3QsIHJlY2VpdmUgYSByYW5kb20gYXR0YWNrIG9uIHBsYXllcidzIG93biBib2FyZDpcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgIC8vIGdldCBhIHJhbmRvbSBzcXVhcmUgdG8gcG90ZW50aWFsbHkgYXR0YWNrOlxuICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwICsgMSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgICAgICAvLyBpZiB0aGUgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQsIHJ1biB0aGUgZnVuY3Rpb24gYWdhaW46XG4gICAgICAgIGlmIChyYW5kb21TcXVhcmUuYXR0YWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soKTtcbiAgICAgICAgLy8gaWYgaXQgaGFzbid0IHlldCBiZWVuIGF0dGFja2VkLCBjb21wbGV0ZSB0aGUgYXR0YWNrOlxuICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbVNxdWFyZS5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGN1cnJlbnRHYW1lLnBsYXllclR3by5hdHRhY2soY3VycmVudEdhbWUucGxheWVyT25lLCBbcmFuZG9tWCwgcmFuZG9tWV0pO1xuICAgICAgICAgICAgLy8gdGhlbiByZS1yZW5kZXIgdGhlIGJvYXJkIHRvIHNob3cgdGhlIG5ldyBhdHRhY2s6XG4gICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGFsbCB0aGUgcGxheWVyJ3Mgc2hpcHMgaGF2ZSBzdW5rOlxuXG4gICAgICAgICAgICAvLyBpZiBub3QsIGdldCB0aGUgcGxheWVyJ3MgbmV4dCBtb3ZlOlxuICAgICAgICAgICAgZ2V0UGxheWVyTW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxufSkoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9