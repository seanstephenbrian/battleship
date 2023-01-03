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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1.1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype supports variations\"),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: #d5d5d5ce;\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 228, 196);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1.1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url('./fonts/unbounded/unbounded.ttf') format(\"truetype supports variations\"),\n         url('./fonts/unbounded/unbounded.ttf') format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: #d5d5d5ce;\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(255, 228, 196);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}"],"sourceRoot":""}]);
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
            // remove 'CHOOSE A SQUARE' styling:
            const playerTwoTitle = document.querySelector('.player-two-board-title');
            playerTwoTitle.classList.remove('attack-prompt');
            playerTwoTitle.textContent = 'enemy grid:'
            // then complete the attack:
            currentGame.playerOne.attack(currentGame.playerTwo, [x, y]);
            // re-render the board to show the new attack:
            renderBoard();
            // remove click listeners from the enemy board:
            const playerTwoBoard = document.querySelector('.player-two-board-squares');
            playerTwoBoard.removeEventListener('click', clickSquare);
            // and remove pointer style from enemy board:
            playerTwoBoard.style.cursor = 'default';
            // check to see if all the enemy's ships have sunk:
            if (currentGame.playerTwo.board.allSunk() === true) {
                alert('player one wins!');
            }
            // if not, let the player know the computer is generating an attack:
            const playerOneTitle = document.querySelector('.player-one-board-title');
            playerOneTitle.classList.add('attack-prompt');
            playerOneTitle.textContent = 'ATTACK INCOMING . . .';            
            // then receive a random attack on player's own board:
            setTimeout(receiveAttack, 2000);
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
            // remove 'ATTACK INCOMING' message:
            const playerOneTitle = document.querySelector('.player-one-board-title');
            playerOneTitle.classList.remove('attack-prompt');
            playerOneTitle.textContent = 'your grid:';
            currentGame.playerTwo.attack(currentGame.playerOne, [randomX, randomY]);
            // then re-render the board to show the new attack:
            renderBoard();
            // check to see if all the player's ships have sunk:
            if (currentGame.playerOne.board.allSunk() === true) {
                alert('computer wins');
            }
            // if not, get the player's next move:
            getPlayerMove();
        }
    }
    
})();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esb2lCQUFvaUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxXQUFXLHdEQUF3RCxvQ0FBb0MsOEJBQThCLDJCQUEyQix1Q0FBdUMsZ0NBQWdDLG1DQUFtQyxHQUFHLGdCQUFnQiwrQkFBK0IsK0xBQStMLDRCQUE0QixHQUFHLHNCQUFzQixVQUFVLDZCQUE2QixPQUFPLEdBQUcsOEJBQThCLFVBQVUsNkJBQTZCLE9BQU8sR0FBRyxpQkFBaUIsNkJBQTZCLHNCQUFzQix3QkFBd0IsR0FBRyxXQUFXLG9CQUFvQixHQUFHLFVBQVUseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDZHQUE2RyxxREFBcUQsbUJBQW1CLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLG1CQUFtQixvQkFBb0IsdUJBQXVCLGlCQUFpQiw0Q0FBNEMsR0FBRyxvQkFBb0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsbUJBQW1CLG9DQUFvQyxrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLDBCQUEwQixrQ0FBa0MsbUJBQW1CLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxxQkFBcUIsdUNBQXVDLDRCQUE0QiwrQkFBK0Isa0RBQWtELG1EQUFtRCwyREFBMkQsR0FBRyxtQkFBbUIsc0JBQXNCLG9CQUFvQixnQ0FBZ0MsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDJDQUEyQyxHQUFHLGFBQWEsNkNBQTZDLEdBQUcsbUJBQW1CLDRCQUE0QixHQUFHLFlBQVksc0NBQXNDLGtCQUFrQiwwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLEdBQUcsaUJBQWlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixlQUFlLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLGtCQUFrQix1QkFBdUIsc0NBQXNDLEdBQUcsb0JBQW9CLDRCQUE0QiwrQkFBK0Isa0RBQWtELG1EQUFtRCwyREFBMkQsR0FBRyxvQkFBb0Isb0JBQW9CLGtCQUFrQixtQkFBbUIsNkNBQTZDLDBDQUEwQyxHQUFHLGtCQUFrQixtREFBbUQsb0JBQW9CLDhCQUE4QiwwQkFBMEIscUJBQXFCLEdBQUcsaUJBQWlCLGtCQUFrQixpQkFBaUIseUJBQXlCLCtCQUErQiwrR0FBK0csR0FBRyxrQkFBa0Isa0JBQWtCLGlCQUFpQix5QkFBeUIsNkNBQTZDLG1DQUFtQywrR0FBK0csdUNBQXVDLEdBQUcsVUFBVSx3QkFBd0IsR0FBRyxXQUFXLHVCQUF1QixHQUFHLFdBQVcseUJBQXlCLEdBQUcsVUFBVSwwQkFBMEIsR0FBRyxZQUFZLHVCQUF1QixrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsdUNBQXVDLHVCQUF1QixHQUFHLDBDQUEwQyxtQkFBbUIsOEJBQThCLE9BQU8sc0JBQXNCLHNCQUFzQix1QkFBdUIsT0FBTyxxQkFBcUIsMkJBQTJCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLE9BQU8sdUJBQXVCLDJCQUEyQixPQUFPLHlCQUF5QixtQ0FBbUMsc0RBQXNELE9BQU8sR0FBRyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLG1oQkFBbWhCLGNBQWMsZUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NxdWFyZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3VuYm91bmRlZC91bmJvdW5kZWQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1mYWxsYmFjazogJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxuICAgIC0tcnZ2OiBjYWxjKDFyZW0gKyAxdmggKyAxdncpO1xcblxcbiAgICAtLXNpdGUtZ3JlZW46ICMxYWZmMDA7XFxuXFxuICAgIC0tc2hpcC1iZzogIzIwMzM0ZTtcXG4gICAgLS1zaGlwLWJvcmRlcjogMXB4IHNvbGlkICM4OWE4ZDQ7XFxuICAgIC0tc2hpcC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIC0tc2hpcC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlIHN1cHBvcnRzIHZhcmlhdGlvbnNcXFwiKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1xcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDAsNzEsMTcxLDEpIDM5JSwgcmdiYSgxNTAsMTc3LDE5NCwxKSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnLCB2YXIoLS1mb250LWZhbGxiYWNrKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41OSk7XFxufVxcblxcbi5hbGVydC13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnQtd2luZG93IHtcXG4gICAgcGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDcwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDVjZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWxlcnQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmV3LWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI4LCAxOTYpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCByZ2JhKDI1NSwwLDAsMSkgMCUsIHJnYmEoMjU1LDgxLDgxLDEpIDU0JSwgcmdiYSgyMTQsMTEyLDExMiwxKSAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsIHJnYmEoMTAzLDExMSwxMjIsMSkgMCUsIHJnYmEoNTIsNzIsOTksMSkgNTQlLCByZ2JhKDIzLDQ5LDg3LDEpIDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dnc7XFxuICAgIH1cXG4gICAgaGVhZGVyIHNwYW46aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsNkJBQTZCOztJQUU3QixxQkFBcUI7O0lBRXJCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qjs4RUFDeUU7SUFDekUscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNHQUFzRztJQUN0Ryw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsMkNBQTJDO0lBQzNDLDRDQUE0QztJQUM1QyxvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qix3R0FBd0c7SUFDeEcsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLDJDQUEyQztJQUMvQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtZmFsbGJhY2s6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG4gICAgLS1zaXRlLWdyZWVuOiAjMWFmZjAwO1xcblxcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy91bmJvdW5kZWQvdW5ib3VuZGVkLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGUgc3VwcG9ydHMgdmFyaWF0aW9uc1xcXCIpLFxcbiAgICAgICAgIHVybCgnLi9mb250cy91bmJvdW5kZWQvdW5ib3VuZGVkLnR0ZicpIGZvcm1hdChcXFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1xcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDAsNzEsMTcxLDEpIDM5JSwgcmdiYSgxNTAsMTc3LDE5NCwxKSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnLCB2YXIoLS1mb250LWZhbGxiYWNrKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41OSk7XFxufVxcblxcbi5hbGVydC13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnQtd2luZG93IHtcXG4gICAgcGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDcwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWQ1ZDVjZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWxlcnQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmV3LWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjI4LCAxOTYpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCByZ2JhKDI1NSwwLDAsMSkgMCUsIHJnYmEoMjU1LDgxLDgxLDEpIDU0JSwgcmdiYSgyMTQsMTEyLDExMiwxKSAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsIHJnYmEoMTAzLDExMSwxMjIsMSkgMCUsIHJnYmEoNTIsNzIsOTksMSkgNTQlLCByZ2JhKDIzLDQ5LDg3LDEpIDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dnc7XFxuICAgIH1cXG4gICAgaGVhZGVyIHNwYW46aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSB0d28gbmV3IHBsYXllcnM6XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKCk7XG4gICAgLy8gKHRoZXNlIHBsYXllcnMnIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYXQgdGhlIHNhbWUgc2FtcGxlIGNvb3JkaW5hdGVzIGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyT25lLFxuICAgICAgICBwbGF5ZXJUd29cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zcXVhcmUuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBhcnJheSB0byBob2xkIHJlZmVyZW5jZXMgdG8gYWxsIGJvYXJkIHNxdWFyZXM6XG4gICAgbGV0IGdhbWVTcXVhcmVzID0gW107XG5cbiAgICAvLyBpbml0aWFsaXplIGVtcHR5IGFycmF5IHRvIGhvbGQgcmVmZXJlbmNlcyB0byBhbGwgY3JlYXRlZCBzaGlwczpcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIHRoZSBzdWNjZXNzZnVsIGhpdHM6XG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIG1pc3NlczpcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBjcmVhdGUgMTB4MTAgZ3JpZDpcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IFNxdWFyZSh4LCB5KTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVzLnB1c2gobmV3U3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIHJlZmVyZW5jZSB0byBhIGdhbWVib2FyZCBzcXVhcmUgYmFzZWQgb24gaXRzIHggJiB5IGNvb3JkaW5hdGVzOlxuICAgIGZ1bmN0aW9uIGZpbmRTcXVhcmUoeCwgeSkge1xuICAgICAgICBsZXQgdGFyZ2V0U3F1YXJlO1xuICAgICAgICBnYW1lU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLnggPT09IHggJiYgc3F1YXJlLnkgPT09IHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3F1YXJlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIHNoaXAgb2YgdGhlIGFwcHJvcHJpYXRlIGxlbmd0aCBnaXZlbiBpdHMgc3RhcnRpbmcgJiBlbmRpbmcgY29vcmRpbmF0ZXM6XG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcChbeCwgeV0sIFt4MiwgeTJdKSB7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIC8vIGlmIHggY29vcmRpbmF0ZXMgYXJlIHRoZSBzYW1lLCBzZXQgbGVuZ3RoIHRvIGRpZmZlcmVuY2UgYmV0d2VlbiB5IGNvb3JkaW5hdGVzOlxuICAgICAgICBpZiAoeCA9PT0geDIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHkgLSB5MikgKyAxO1xuICAgICAgICAvLyBpZiB5IGNvb3JkcyBhcmUgdGhlIHNhbWUsIHNldCBsZW5ndGggdG8gZGlmZmVyZW5jZSBiZXR3ZWVuIHggY29vcmRzOlxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBNYXRoLmFicyh4IC0geDIpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCBzcXVhcmVzIHRvIHJlZmVyZW5jZSB0aGUgc2hpcDpcbiAgICAgICAgaWYgKHggPT09IHgyICYmIHkgPCB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5XTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geTsgeiA8PSB5MjsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHggPT09IHgyICYmIHkgPiB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5Ml07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHkyOyB6IDw9IHk7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHopO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4IDwgeDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeCwgeV07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHg7IHogPD0geDI7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHosIHkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4ID4geDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeDIsIHldO1xuICAgICAgICAgICAgbmV3U2hpcC5vcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgICAgIGZvciAobGV0IHogPSB4MjsgeiA8PSB4OyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZSh6LCB5KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc2hpcCB0byBzaGlwcyBhcnJheTpcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHkpO1xuXG4gICAgICAgIC8vIGlmIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLCBzaW1wbHkgcmV0dXJuOlxuICAgICAgICBpZiAoaGl0cy5oYXMoYXR0YWNrZWRTcXVhcmUpIHx8IG1pc3Nlcy5oYXMoYXR0YWNrZWRTcXVhcmUpKSByZXR1cm47XG5cbiAgICAgICAgLy8gbWFyayB0aGUgc3F1YXJlIGFzIGhhdmluZyBiZWVuIGF0dGFja2VkOlxuICAgICAgICBhdHRhY2tlZFNxdWFyZS5hdHRhY2tlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiB0aGUgYXR0YWNrZWQgc3F1YXJlIGhhcyBhIHNoaXAsIGFkZCBhICdoaXQnIHRvIHRoYXQgc2hpcDpcbiAgICAgICAgaWYgKGF0dGFja2VkU3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAvLyB0aGVuIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnaGl0cycgc2V0OlxuICAgICAgICAgICAgaGl0cy5hZGQoYXR0YWNrZWRTcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnbWlzc2VzJyBzZXQ6XG4gICAgICAgICAgICBtaXNzZXMuYWRkKGF0dGFja2VkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgICAgIGlmIChoaXRzLnNpemUgPT09IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGJlZ2luIGVuZCBvZiBnYW1lIGxvZ2ljLi4uXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWx0ZXJuYXRpdmUgYXBwcm9hY2ggd291bGQgYmUgdG8gaXRlcmF0ZSBvdmVyIHRoZSBzaGlwcyBhcnJheSxcbiAgICAgICAgLy8gY2hlY2tpbmcgaWYgZWFjaCBzaGlwIGhhcyBzdW5rXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNaXNzZXMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZE1pc3NlcyA9IFtdO1xuICAgICAgICBtaXNzZXMuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIHJlY29yZGVkTWlzc2VzLnB1c2goW21pc3MueCwgbWlzcy55XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVjb3JkZWRNaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdHMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZEhpdHMgPSBbXTtcbiAgICAgICAgaGl0cy5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICByZWNvcmRlZEhpdHMucHVzaChbaGl0LngsIGhpdC55XSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWNvcmRlZEhpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGNyZWF0ZVNoaXAsXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHNob3dIaXRzLFxuICAgICAgICBzaG93TWlzc2VzLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgZmluZFNxdWFyZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICAgICAgLy8gNSBzYW1wbGUgc2hpcHMgZm9yIHRlc3RpbmcgcHVycG9zZXM6XG4gICAgICAgIGJvYXJkLmNyZWF0ZVNoaXAoWzIsIDNdLCBbMywgM10pO1xuICAgICAgICBib2FyZC5jcmVhdGVTaGlwKFszLCA3XSwgWzMsIDEwXSk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZVNoaXAoWzUsIDVdLCBbNywgNV0pO1xuICAgICAgICBib2FyZC5jcmVhdGVTaGlwKFs2LCA5XSwgWzEwLCA5XSk7XG4gICAgICAgIGJvYXJkLmNyZWF0ZVNoaXAoWzksIDJdLCBbOSwgNF0pO1xuXG4gICAgZnVuY3Rpb24gYXR0YWNrKG90aGVyUGxheWVyLCBbeCwgeV0pIHtcbiAgICAgICAgb3RoZXJQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIGF0dGFja1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyIsImNvbnN0IFNoaXAgPSAobGVuZ3RoKSA9PiB7XG5cbiAgICBsZXQgaGl0cyA9IDA7XG4gICAgbGV0IHN0YXJ0aW5nU3F1YXJlID0gbnVsbDtcbiAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gaGl0KCkge1xuICAgICAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaGl0cysrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKGhpdHMgPT09IGxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgaGl0LCBcbiAgICAgICAgaXNTdW5rLFxuICAgICAgICBzdGFydGluZ1NxdWFyZSxcbiAgICAgICAgb3JpZW50YXRpb24sXG4gICAgICAgIGxlbmd0aFxuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJjb25zdCBTcXVhcmUgPSAoeCwgeSkgPT4ge1xuICAgIGxldCBzaGlwID0gbnVsbDtcbiAgICBsZXQgYXR0YWNrZWQgPSBmYWxzZTtcbiAgICByZXR1cm4geyB4LCB5LCBzaGlwLCBhdHRhY2tlZCB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG4oZnVuY3Rpb24gY3JlYXRlSW5pdGlhbERPTVN0cnVjdHVyZSgpIHtcblxuICAgIGxldCBjdXJyZW50R2FtZSA9IG51bGw7XG5cbiAgICAoZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICBgPHNwYW4+Yjwvc3Bhbj48c3Bhbj5hPC9zcGFuPjxzcGFuPnQ8L3NwYW4+PHNwYW4+dDwvc3Bhbj48c3Bhbj5sPC9zcGFuPjxzcGFuPmU8L3NwYW4+PHNwYW4+czwvc3Bhbj48c3Bhbj5oPC9zcGFuPjxzcGFuPmk8L3NwYW4+PHNwYW4+cDwvc3Bhbj5gO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVib2FyZHMpO1xuICAgICAgICBnYW1lYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZHMnKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQnLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmQpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQtdGl0bGUnLCAnYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAneW91ciBncmlkOic7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJywgJ2JvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkU3F1YXJlcyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZCcsICdnYW1lYm9hcmQnKTtcbiAgICAgICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZC10aXRsZScsICdib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9ICdlbmVteSBncmlkOidcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZFNxdWFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkU3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnLCAnYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmRTcXVhcmVzKTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uIGNyZWF0ZUJvYXJkR3JpZHMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICBnYW1lYm9hcmRzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDEwOyB5ID49IDE7IHktLSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQoYGdhbWUtc3F1YXJlYCwgYHgtJHt4fWAsIGB5LSR7eX1gLCBgeCR7eH0teSR7eX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmRhdGFzZXQueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGdhbWVTcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBmb290ZXIudGV4dENvbnRlbnQgPSBgY29weXJpZ2h0IMKpICR7eWVhcn0gfCBzZWFuIHN0ZXBoZW4gYnJpYW5gO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93T3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBhbGVydFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxlcnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXdyYXBwZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhbGVydFdyYXBwZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBhbGVydFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWxlcnRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYWxlcnQtd2luZG93Jyk7XG4gICAgICAgICAgICBhbGVydFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWxlcnRXaW5kb3cpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkZWxldGVBbGVydCgpIHtcbiAgICAgICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtd3JhcHBlcicpO1xuICAgICAgICBhbGVydC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAoZnVuY3Rpb24gYWxlcnROZXdHYW1lKCkge1xuICAgICAgICBjcmVhdGVBbGVydCgpO1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13aW5kb3cnKTtcbiAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYWxlcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXRpdGxlJywgJ25ldy1nYW1lLXRpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd3ZWxjb21lIHRvIEJBVFRMRVNISVAnO1xuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnc3RhcnQgZ2FtZSc7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICAgICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuXG4gICAgfSkoKTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgZGVsZXRlQWxlcnQoKTtcbiAgICAgICAgaGlkZU92ZXJsYXkoKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBuZXcgZ2FtZTpcbiAgICAgICAgY3VycmVudEdhbWUgPSBHYW1lKCk7XG5cbiAgICAgICAgLy8gVFJJR0dFUiBMT0dJQyBUTyBBTExPVyBVU0VSIFRPIENIT09TRSBTSElQIFBPU0lUSU9OU1xuXG4gICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgZ2V0UGxheWVyTW92ZSgpO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IGN1cnJlbnRHYW1lLnBsYXllck9uZTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvID0gY3VycmVudEdhbWUucGxheWVyVHdvO1xuXG4gICAgICAgIHJlbmRlclNoaXBzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICByZW5kZXJIaXRzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgcmVuZGVySGl0cyhwbGF5ZXJUd28sICcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG5cbiAgICAgICAgcmVuZGVyTWlzc2VzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgcmVuZGVyTWlzc2VzKHBsYXllclR3bywgJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJTaGlwcyhwbGF5ZXIsIGJvYXJkU2VsZWN0b3IpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzBdICsgaX0teSR7c2hpcC5zdGFydGluZ1NxdWFyZVsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdmFyKC0tc2hpcC1iZylgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLnRyYW5zZm9ybSA9IGB2YXIoLS1zaGlwLXRyYW5zZm9ybSlgO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYDAgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIDBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd5Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtib2FyZFNlbGVjdG9yfSAueCR7c2hpcC5zdGFydGluZ1NxdWFyZVswXX0teSR7c2hpcC5zdGFydGluZ1NxdWFyZVsxXSArIGl9YCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigtLXNoaXAtYmcpYDtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXIgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS50cmFuc2Zvcm0gPSBgdmFyKC0tc2hpcC10cmFuc2Zvcm0pYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYDAgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cylgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckJvdHRvbSA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgMCAwYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckJvdHRvbSA9IGBub25lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgbm9uZWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckJvdHRvbSA9IGBub25lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVySGl0cyhwbGF5ZXIsIGJvYXJkU2VsZWN0b3IpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnNob3dIaXRzKCkuZm9yRWFjaChoaXQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaGl0U3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtib2FyZFNlbGVjdG9yfSAueCR7aGl0WzBdfS15JHtoaXRbMV19YCk7XG4gICAgICAgICAgICBoaXRTcXVhcmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCBoaXRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGhpdE1hcmtlci5jbGFzc0xpc3QuYWRkKCdoaXQtbWFya2VyJyk7XG4gICAgICAgICAgICBoaXRTcXVhcmUuYXBwZW5kQ2hpbGQoaGl0TWFya2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyTWlzc2VzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hvd01pc3NlcygpLmZvckVhY2gobWlzcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBtaXNzZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHttaXNzWzBdfS15JHttaXNzWzFdfWApO1xuICAgICAgICAgICAgbWlzc2VkU3F1YXJlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgY29uc3QgbWlzc01hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbWlzc01hcmtlci5jbGFzc0xpc3QuYWRkKCdtaXNzLW1hcmtlcicpO1xuICAgICAgICAgICAgbWlzc2VkU3F1YXJlLmFwcGVuZENoaWxkKG1pc3NNYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQbGF5ZXJNb3ZlKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuXG4gICAgICAgIHBsYXllclR3b1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1wcm9tcHQnKTtcbiAgICAgICAgcGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPSAnQ0hPT1NFIEEgU1FVQVJFIFRPIEFUVEFDSzonO1xuXG4gICAgICAgIHBsYXllclR3b0JvYXJkLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1NxdWFyZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xpY2tTcXVhcmUoZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkU3F1YXJlID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHhDb29yZCA9IHBhcnNlSW50KGNsaWNrZWRTcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgeUNvb3JkID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICBhdHRlbXB0QXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRlbXB0QXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gY3VycmVudEdhbWUucGxheWVyVHdvLmJvYXJkLmZpbmRTcXVhcmUoeCwgeSk7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzcXVhcmUgaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0OlxuICAgICAgICBpZiAodGFyZ2V0U3F1YXJlLmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlICdDSE9PU0UgQSBTUVVBUkUnIHN0eWxpbmc6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9ICdlbmVteSBncmlkOidcbiAgICAgICAgICAgIC8vIHRoZW4gY29tcGxldGUgdGhlIGF0dGFjazpcbiAgICAgICAgICAgIGN1cnJlbnRHYW1lLnBsYXllck9uZS5hdHRhY2soY3VycmVudEdhbWUucGxheWVyVHdvLCBbeCwgeV0pO1xuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIHRoZSBib2FyZCB0byBzaG93IHRoZSBuZXcgYXR0YWNrOlxuICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjbGljayBsaXN0ZW5lcnMgZnJvbSB0aGUgZW5lbXkgYm9hcmQ6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tTcXVhcmUpO1xuICAgICAgICAgICAgLy8gYW5kIHJlbW92ZSBwb2ludGVyIHN0eWxlIGZyb20gZW5lbXkgYm9hcmQ6XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gICAgICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgYWxsIHRoZSBlbmVteSdzIHNoaXBzIGhhdmUgc3VuazpcbiAgICAgICAgICAgIGlmIChjdXJyZW50R2FtZS5wbGF5ZXJUd28uYm9hcmQuYWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3BsYXllciBvbmUgd2lucyEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIG5vdCwgbGV0IHRoZSBwbGF5ZXIga25vdyB0aGUgY29tcHV0ZXIgaXMgZ2VuZXJhdGluZyBhbiBhdHRhY2s6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS50ZXh0Q29udGVudCA9ICdBVFRBQ0sgSU5DT01JTkcgLiAuIC4nOyAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gdGhlbiByZWNlaXZlIGEgcmFuZG9tIGF0dGFjayBvbiBwbGF5ZXIncyBvd24gYm9hcmQ6XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlY2VpdmVBdHRhY2ssIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjaygpIHtcbiAgICAgICAgLy8gZ2V0IGEgcmFuZG9tIHNxdWFyZSB0byBwb3RlbnRpYWxseSBhdHRhY2s6XG4gICAgICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCArIDEpO1xuICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUocmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgICAgIC8vIGlmIHRoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCwgcnVuIHRoZSBmdW5jdGlvbiBhZ2FpbjpcbiAgICAgICAgaWYgKHJhbmRvbVNxdWFyZS5hdHRhY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmVjZWl2ZUF0dGFjaygpO1xuICAgICAgICAvLyBpZiBpdCBoYXNuJ3QgeWV0IGJlZW4gYXR0YWNrZWQsIGNvbXBsZXRlIHRoZSBhdHRhY2s6XG4gICAgICAgIH0gZWxzZSBpZiAocmFuZG9tU3F1YXJlLmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlICdBVFRBQ0sgSU5DT01JTkcnIG1lc3NhZ2U6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS50ZXh0Q29udGVudCA9ICd5b3VyIGdyaWQ6JztcbiAgICAgICAgICAgIGN1cnJlbnRHYW1lLnBsYXllclR3by5hdHRhY2soY3VycmVudEdhbWUucGxheWVyT25lLCBbcmFuZG9tWCwgcmFuZG9tWV0pO1xuICAgICAgICAgICAgLy8gdGhlbiByZS1yZW5kZXIgdGhlIGJvYXJkIHRvIHNob3cgdGhlIG5ldyBhdHRhY2s6XG4gICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGFsbCB0aGUgcGxheWVyJ3Mgc2hpcHMgaGF2ZSBzdW5rOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5hbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnY29tcHV0ZXIgd2lucycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbm90LCBnZXQgdGhlIHBsYXllcidzIG5leHQgbW92ZTpcbiAgICAgICAgICAgIGdldFBsYXllck1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==