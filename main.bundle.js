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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n\n    --alert-bg: #d5d5d5ce;\n    --button-bg: #ffe4c4;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype supports variations\"),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.end-of-game-title {\n    text-align: center;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    background-color: var(--button-bg);\n    border: 1px solid black;\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: rgba(250, 0, 0, 0.475);\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n    border: 1px solid black;\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n\n    --alert-bg: #d5d5d5ce;\n    --button-bg: #ffe4c4;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url('./fonts/unbounded/unbounded.ttf') format(\"truetype supports variations\"),\n         url('./fonts/unbounded/unbounded.ttf') format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.end-of-game-title {\n    text-align: center;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    background-color: var(--button-bg);\n    border: 1px solid black;\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: rgba(250, 0, 0, 0.475);\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n    border: 1px solid black;\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/js/dom-methods.js":
/*!*******************************!*\
  !*** ./src/js/dom-methods.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOM = () => {

    function createHeader() {
        const body = document.querySelector('body');
        const header = document.createElement('header');
        body.appendChild(header);
        header.innerHTML = 
            `<span>b</span><span>a</span><span>t</span><span>t</span><span>l</span><span>e</span><span>s</span><span>h</span><span>i</span><span>p</span>`;
    }

    function createGameboardsContainer() {
        const body = document.querySelector('body');
        const gameboards = document.createElement('div');
        body.appendChild(gameboards);
        gameboards.classList.add('gameboards');
    }

    function createGameboards() {
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
    }

    function createBoardGrids() {
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
    }

    function createFooter() {
        const body = document.querySelector('body');
        const footer = document.createElement('footer');
        body.appendChild(footer);
        const date = new Date();
        const year = date.getFullYear();
        footer.textContent = `copyright © ${year} | sean stephen brian`;
    }

    function createOverlay() {
        const body = document.querySelector('body');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        body.appendChild(overlay);
    }

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
    }

    function deleteAlert() {
        const alert = document.querySelector('.alert-wrapper');
        alert.remove();
    }

    function initialize() {
        createHeader();
        createGameboardsContainer();
        createGameboards();
        createBoardGrids();
        createFooter();
        createOverlay();
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

    return {
        hideOverlay,
        showOverlay,
        createAlert,
        deleteAlert,
        initialize,
        renderShips,
        renderHits,
        renderMisses
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

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
/*!***********************************!*\
  !*** ./src/js/game-controller.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-methods */ "./src/js/dom-methods.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.css */ "./src/style.css");




(function playGame() {

    let currentGame = null;

    const DOM = (0,_dom_methods__WEBPACK_IMPORTED_MODULE_0__["default"])();

    DOM.initialize();
    alertNewGame();

    function alertNewGame() {
        DOM.createAlert();
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
    };

    function alertEndOfGame(winner) {
        DOM.createAlert();
        const alert = document.querySelector('.alert-window');
        alert.classList.add('end-of-game-alert');

            const title = document.createElement('div');
            title.classList.add('alert-title', 'end-of-game-title');
            if (winner === 'player one') {
                title.textContent = `you are the winner!`;
            } else if (winner === 'computer') {
                title.textContent = `the computer is the winner`;
            }
            
            alert.appendChild(title);

            const startButton = document.createElement('div');
            startButton.classList.add('start-button', 'button');
            startButton.textContent = 'play again';
            alert.appendChild(startButton);

        startButton.addEventListener('click', startGame);
    }

    function startGame() {
        DOM.deleteAlert();
        DOM.hideOverlay();

        // create the new game:
        currentGame = (0,_game__WEBPACK_IMPORTED_MODULE_1__["default"])();

        // generate random ship positions for computer:
        generateComputerShips();

        // get ship positions from user:
        chooseShipPositions(); 

    }

    function generateComputerShips() {

        // for each of the 5 ships...
        for (let compShip = 1; compShip <= 5; compShip++) {
            // establish ship length:
            let compShipLength;
            if (compShip === 1) {
                compShipLength = 5;
            } else if (compShip === 2) {
                compShipLength = 4;
            } else if (compShip === 3) {
                compShipLength = 3;
            } else if (compShip === 4) {
                compShipLength = 3;
            } else if (compShip === 5) {
                compShipLength = 2;
            }
            // create variable to track whether ship has been placed:
            let shipPlaced = false;
            while (shipPlaced === false) {
                // generate random axis direction...
                let compShipAxis;
                const random = Math.floor(Math.random() * 2) + 1;
                random === 1 ? compShipAxis = 'x' : compShipAxis = 'y';
                // choose random valid square:
                let randomX;
                let randomY;
                if (compShipAxis === 'x') {
                    randomX = Math.floor(Math.random() * (11 - compShipLength)) + 1;
                    randomY = Math.floor(Math.random() * 10) + 1;
                } else if (compShipAxis === 'y') {
                    randomX = Math.floor(Math.random() * 10) + 1;
                    randomY = Math.floor(Math.random() * (11 - compShipLength)) + 1;
                }
                if (checkForPlacedShip(currentGame.playerTwo, [randomX, randomY], compShipAxis, compShipLength) === false) {
                    placeShip(currentGame.playerTwo, [randomX, randomY], compShipAxis, compShipLength);
                    shipPlaced = true;
                }
            }
        }

    }

    function chooseShipPositions() {

        // hide the enemy grid:
        const playerTwoBoard = document.querySelector('.player-two-board');
        playerTwoBoard.classList.add('hide');

        // change the player board title text to 'choose your ships':
        const playerOneBoardTitle = document.querySelector('.player-one-board-title');
        playerOneBoardTitle.textContent = 'PLACE YOUR SHIPS:';
        playerOneBoardTitle.innerHTML = `
            <div class="board-title-text">PLACE YOUR SHIPS:</div>
            <div class="ship-axis-toggle">
                <div class="axis-text">ship axis</div>
                <div class="axis-options">
                    <div class="axis-option x-axis-option selected-axis">X</div>
                    <div class="axis-option y-axis-option">Y</div>
                </div>
            </div>
        `;

        // style the 'PLACE YOUR SHIPS' text:
        const playerOneBoardTitleText = document.querySelector('.player-one-board-title .board-title-text')
        playerOneBoardTitleText.classList.add('attack-prompt');

        // apply cursor pointer style to board:
        const playerOneBoardSquares = document.querySelector('.player-one-board-squares');
        playerOneBoardSquares.classList.add('pointer');

        // create variable to track current ship axis choice:
        let shipAxis = 'x';

        // add click event listeners to update axis choice:
        const xButton = document.querySelector('.x-axis-option');
        const yButton = document.querySelector('.y-axis-option');
        xButton.addEventListener('click', () => {
            shipAxis = 'x';
            yButton.classList.remove('selected-axis');
            xButton.classList.add('selected-axis');
        });
        yButton.addEventListener('click', () => {
            shipAxis = 'y';
            xButton.classList.remove('selected-axis');
            yButton.classList.add('selected-axis');
        });

        // establish variable to track which # ship is being placed:
        let shipNumber = 1; // (game will move on after all 5 ships have been placed)

        // add hover listener to gameboard:
        playerOneBoardSquares.addEventListener('mouseover', hoverOverSquare);

        // add click listener to gameboard:
        playerOneBoardSquares.addEventListener('click', clickSquare);

        function hoverOverSquare(e) {
            // get coordinates of hovered-over square:
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            const hoverCoords = [x, y];

            if (shipNumber === 1 && checkPlacementValidity(hoverCoords, shipAxis, 5) === true) {
                previewShip(hoverCoords, shipAxis, 5);
            } else if (shipNumber === 2 && checkPlacementValidity(hoverCoords, shipAxis, 4) === true) {
                previewShip(hoverCoords, shipAxis, 4);
            } else if (shipNumber === 3 && checkPlacementValidity(hoverCoords, shipAxis, 3) === true) {
                previewShip(hoverCoords, shipAxis, 3);
            } else if (shipNumber === 4 && checkPlacementValidity(hoverCoords, shipAxis, 3) === true) {
                previewShip(hoverCoords, shipAxis, 3);
            } else if (shipNumber === 5 && checkPlacementValidity(hoverCoords, shipAxis, 2) === true) {
                previewShip(hoverCoords, shipAxis, 2);
            }
        }

        function clickSquare(e) {
            // get coordinates of clicked square:
            const x = e.target.dataset.x;
            const y = e.target.dataset.y;
            const clickedCoords = [x, y];

            if (shipNumber === 1 && tryToPlaceShip(clickedCoords, shipAxis, 5) === true) {
                renderBoard();
                shipNumber++;
            } else if (shipNumber === 2 && tryToPlaceShip(clickedCoords, shipAxis, 4) === true) {
                renderBoard();
                shipNumber++;
            } else if (shipNumber === 3 && tryToPlaceShip(clickedCoords, shipAxis, 3) === true) {
                renderBoard();
                shipNumber++;
            } else if (shipNumber === 4 && tryToPlaceShip(clickedCoords, shipAxis, 3) === true) {
                renderBoard();
                shipNumber++;
            } else if (shipNumber === 5 && tryToPlaceShip(clickedCoords, shipAxis, 2) === true) {
                // remove click listener for placing ships & hover listener for previewing ships:
                playerOneBoardSquares.removeEventListener('click', clickSquare);
                playerOneBoardSquares.removeEventListener('mouseover', hoverOverSquare);
                // remove the title text & ship axis toggle:
                playerOneBoardTitle.innerHTML = '';
                playerOneBoardTitle.textContent = 'your grid:'
                // show the playerTwo gameboard:
                playerTwoBoard.classList.remove('hide');
                // render the board and get the player's first move:
                renderBoard();
                getPlayerMove();
            }
        }
    }

    function previewShip(hoverCoords, shipAxis, shipLength) {

        const hoveredSquare = document.querySelector(`.x${hoverCoords[0]}-y${hoverCoords[1]}`);

        if (shipAxis === 'x') {
            for (let i = 0; i <= (parseInt(shipLength) - 1); i++) {
                const squareCoords = [(parseInt(hoverCoords[0]) + i), parseInt(hoverCoords[1])];
                const square = document.querySelector(`.x${squareCoords[0]}-y${squareCoords[1]}`);
                square.classList.add('ship-preview');
            }
        } else if (shipAxis === 'y') {
            for (let i = 0; i <= (parseInt(shipLength) - 1); i++) {
                const squareCoords = [parseInt(hoverCoords[0]), (parseInt(hoverCoords[1]) + i)];
                const square = document.querySelector(`.x${squareCoords[0]}-y${squareCoords[1]}`);
                square.classList.add('ship-preview');
            }
        }

        // add mouseout listener to remove styling:
        hoveredSquare.addEventListener('mouseout', () => {
            if (shipAxis === 'x') {
                for (let i = 0; i <= (parseInt(shipLength) - 1); i++) {
                    const squareCoords = [(parseInt(hoverCoords[0]) + i), parseInt(hoverCoords[1])];
                    const square = document.querySelector(`.x${squareCoords[0]}-y${squareCoords[1]}`);
                    square.classList.remove('ship-preview');
                }
            } else if (shipAxis === 'y') {
                for (let i = 0; i <= (parseInt(shipLength) - 1); i++) {
                    const squareCoords = [parseInt(hoverCoords[0]), (parseInt(hoverCoords[1]) + i)];
                    const square = document.querySelector(`.x${squareCoords[0]}-y${squareCoords[1]}`);
                    square.classList.remove('ship-preview');
                }
            }
        }, {once: true});
    }

    function tryToPlaceShip(clickedCoords, shipAxis, shipLength) {
        // check if valid combination of coordinates, axis direction, and ship length:
        if (checkPlacementValidity(clickedCoords, shipAxis, shipLength) === true) {
            // if it's valid, place the ship and return true:
            placeShip(currentGame.playerOne, clickedCoords, shipAxis, shipLength);
            return true;
        }

        // otherwise...
        return false;
    }

    function checkPlacementValidity(clickedCoords, shipAxis, shipLength) {
        if (shipAxis === 'x' && ((parseInt(clickedCoords[0]) + (parseInt(shipLength) - 1)) > 10)) {
            return false;
        } else if (shipAxis === 'y' && ((parseInt(clickedCoords[1]) + (parseInt(shipLength) - 1)) > 10)) {
            return false;
        } else if (checkForPlacedShip(currentGame.playerOne, shipAxis, shipLength) === true) {
            return false;
        }
        return true;
    }

    function checkForPlacedShip(player, clickedCoords, shipAxis, shipLength) {
        // RETURNS TRUE IF IT FINDS A SHIP IN THE ATTEMPTED PLACEMENT ZONE:
        if (shipAxis === 'x') {
            for (let i = 0; i <= (shipLength - 1); i++) {
                const squareCoords = [(parseInt(clickedCoords[0]) + i), parseInt(clickedCoords[1])];
                const boardSquare = player.board.findSquare(squareCoords[0], squareCoords[1]);
                if (boardSquare.ship) {
                    return true;
                }
            }
        } else if (shipAxis === 'y') {
            for (let i = 0; i <= (shipLength - 1); i++) {
                const squareCoords = [(parseInt(clickedCoords[0])), (parseInt(clickedCoords[1]) + i)];
                const boardSquare = player.board.findSquare(squareCoords[0], squareCoords[1]);
                if (boardSquare.ship) {
                    return true;
                }
            }
        }
        // returns false is no ship is found:
        return false;   
    }

    function placeShip(player, clickedCoords, shipAxis, shipLength) {
        let endX;
        let endY;
        if (shipAxis === 'x') {
            endX = parseInt(clickedCoords[0]) + parseInt(shipLength) - 1;
            endY = parseInt(clickedCoords[1]);
        } else if (shipAxis === 'y') {
            endX = parseInt(clickedCoords[0]);
            endY = parseInt(clickedCoords[1]) + parseInt(shipLength) - 1;
        }
        player.board.createShip([parseInt(clickedCoords[0]), parseInt(clickedCoords[1])], [endX, endY]);
    }

    function renderBoard() {
        const playerOne = currentGame.playerOne;
        const playerTwo = currentGame.playerTwo;

        DOM.renderShips(playerOne, '.player-one-board-squares');

        DOM.renderHits(playerOne, '.player-one-board-squares');
        DOM.renderHits(playerTwo, '.player-two-board-squares');

        DOM.renderMisses(playerOne, '.player-one-board-squares');
        DOM.renderMisses(playerTwo, '.player-two-board-squares');
    }

    function getPlayerMove() {
        const playerTwoTitle = document.querySelector('.player-two-board-title');
        const playerTwoBoard = document.querySelector('.player-two-board-squares');

        playerTwoTitle.classList.add('attack-prompt');
        playerTwoTitle.textContent = 'CHOOSE A SQUARE TO ATTACK:';

        playerTwoBoard.style.cursor = 'pointer';
        playerTwoBoard.addEventListener('click', chooseSquare);
    }

    function chooseSquare(e) {
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
            playerTwoTitle.textContent = 'enemy grid:';

            // then complete the attack:
            currentGame.playerOne.attack(currentGame.playerTwo, [x, y]);

            // re-render the board to show the new attack:
            renderBoard();

            // remove click listeners from the enemy board:
            const playerTwoBoard = document.querySelector('.player-two-board-squares');
            playerTwoBoard.removeEventListener('click', chooseSquare);

            // and remove pointer style from enemy board:
            playerTwoBoard.style.cursor = 'default';

            // check to see if all the enemy's ships have sunk:
            if (currentGame.playerTwo.board.allSunk() === true) {
                alertEndOfGame('player one');
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
        let attackX;
        let attackY;

        // if there are squares in the queue, attack the first one:
        if (attackQueue.queue.length >= 1) {
            const square = attackQueue.getNextAttack();
            attackX = square.x;
            attackY = square.y;
        } else {
            // otherwise get a random square to potentially attack:
            const randomX = Math.floor(Math.random() * 10 + 1);
            const randomY = Math.floor(Math.random() * 10 + 1);
            const randomSquare = currentGame.playerOne.board.findSquare(randomX, randomY);

            // if the square has already been attacked, run the function again:
            if (randomSquare.attacked === true) {
                receiveAttack();
                return;

            // if it hasn't yet been attacked, set the random X/Y as the attack coordinates:
            } else if (randomSquare.attacked === false) {
                attackX = randomX;
                attackY = randomY;
            }
        }

        // remove 'ATTACK INCOMING' message:
        const playerOneTitle = document.querySelector('.player-one-board-title');
        playerOneTitle.classList.remove('attack-prompt');
        playerOneTitle.textContent = 'your grid:';

        // complete attack:
        currentGame.playerTwo.attack(currentGame.playerOne, [attackX, attackY]);

        // if it's a hit, check adjacent squares to add to the attack queue:
        if (currentGame.playerOne.board.findSquare(attackX, attackY).ship 
         && currentGame.playerOne.board.findSquare(attackX, attackY).attacked === true) {
            attackQueue.checkSquare(attackX, attackY);
        }

        // then re-render the board to show the new attack:
        renderBoard();

        // check to see if all the player's ships have sunk:
        if (currentGame.playerOne.board.allSunk() === true) {
            alertEndOfGame('computer');
        }

        // if not, get the player's next move:
        getPlayerMove();
    }

    const attackQueue = (function () {

        let queue = [];

        function checkSquare(x, y) {

            const squareAbove = currentGame.playerOne.board.findSquare(x, y + 1);
            const squareRight = currentGame.playerOne.board.findSquare(x + 1, y);
            const squareBelow = currentGame.playerOne.board.findSquare(x, y - 1);
            const squareLeft = currentGame.playerOne.board.findSquare(x - 1, y);
            
            if (squareAbove && squareAbove.attacked === false) {
                queue.push(squareAbove);
            }
            if (squareRight && squareRight.attacked === false) {
                queue.push(squareRight);
            }
            if (squareBelow && squareBelow.attacked === false) {
                queue.push(squareBelow);
            }
            if (squareLeft && squareLeft.attacked === false) {
                queue.push(squareLeft);
            }
        }

        function getNextAttack() {
            return queue.shift();
        }

        return {
            queue,
            checkSquare,
            getNextAttack
        }

    })();

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxtaEJBQW1oQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZC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ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2RvbS1tZXRob2RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWUtY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy91bmJvdW5kZWQvdW5ib3VuZGVkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtZmFsbGJhY2s6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG4gICAgLS1zaXRlLWdyZWVuOiAjMWFmZjAwO1xcblxcbiAgICAtLXNoaXAtcHJldmlldzogIzFhYWQwYWE4O1xcblxcbiAgICAtLWFsZXJ0LWJnOiAjZDVkNWQ1Y2U7XFxuICAgIC0tYnV0dG9uLWJnOiAjZmZlNGM0O1xcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGUgc3VwcG9ydHMgdmFyaWF0aW9uc1xcXCIpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZS12YXJpYXRpb25zXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMCw3MSwxNzEsMSkgMzklLCByZ2JhKDE1MCwxNzcsMTk0LDEpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIHZhcigtLWZvbnQtZmFsbGJhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU5KTtcXG59XFxuXFxuLmFsZXJ0LXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydC13aW5kb3cge1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQtYmcpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctZ2FtZS1hbGVydCxcXG4uZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUsXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDMqdmFyKC0tcnZ2KSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgc3BhbiB7XFxuICAgIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydnc7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hdHRhY2stcHJvbXB0IHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1ib2FyZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZC10aXRsZS10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNoaXAtYXhpcy10b2dnbGUge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJheGlzLXRleHQgYXhpcy10ZXh0XFxcIlxcbiAgICAgICAgXFxcImF4aXMtb3B0aW9ucyBheGlzLW9wdGlvbnNcXFwiO1xcbn1cXG5cXG4uYXhpcy10ZXh0IHtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXRleHQ7XFxufVxcblxcbi5heGlzLW9wdGlvbnMge1xcbiAgICBncmlkLWFyZWE6IGF4aXMtb3B0aW9ucztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYXhpcy1vcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWluZGVudDogOCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ueC1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeC1heGlzO1xcbn1cXG5cXG4ueS1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcbn1cXG5cXG4uc2VsZWN0ZWQtYXhpcyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6ICMxMjkzMDM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFsZXJ0LWJnKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLXByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXByZXZpZXcpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDdweDtcXG59XFxuXFxuLmhpdC1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDAsMCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsIHJnYmEoMjU1LDAsMCwxKSAwJSwgcmdiYSgyNTUsODEsODEsMSkgNTQlLCByZ2JhKDIxNCwxMTIsMTEyLDEpIDEwMCUpO1xcbn1cXG5cXG4ubWlzcy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMywxMTEsMTIyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OWRlZywgcmdiYSgxMDMsMTExLDEyMiwxKSAwJSwgcmdiYSg1Miw3Miw5OSwxKSA1NCUsIHJnYmEoMjMsNDksODcsMSkgMTAwJSk7XFxuICAgIHRyYW5zZm9ybTogdmFyKC0tc2hpcC10cmFuc2Zvcm0pO1xcbn1cXG5cXG4ueC0xIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi55LTEwIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLngtMTAge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi55LTEge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjM1KnZhcigtLXJ2dikpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAuYXhpcy1vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZC1heGlzKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0LFxcbiAgICAuZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTV2dztcXG4gICAgfVxcbiAgICBoZWFkZXIgc3Bhbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCw2QkFBNkI7O0lBRTdCLHFCQUFxQjs7SUFFckIseUJBQXlCOztJQUV6QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qjs4RUFDeUU7SUFDekUscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHNHQUFzRztJQUN0Ryw4Q0FBOEM7SUFDOUMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJ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QUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsd0dBQXdHO0lBQ3hHLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTs7UUFFSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QiwyQ0FBMkM7SUFDL0M7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWZhbGxiYWNrOiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuICAgIC0tc2l0ZS1ncmVlbjogIzFhZmYwMDtcXG5cXG4gICAgLS1zaGlwLXByZXZpZXc6ICMxYWFkMGFhODtcXG5cXG4gICAgLS1hbGVydC1iZzogI2Q1ZDVkNWNlO1xcbiAgICAtLWJ1dHRvbi1iZzogI2ZmZTRjNDtcXG4gICAgLS1zaGlwLWJnOiAjMjAzMzRlO1xcbiAgICAtLXNoaXAtYm9yZGVyOiAxcHggc29saWQgIzg5YThkNDtcXG4gICAgLS1zaGlwLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLS1zaGlwLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL3VuYm91bmRlZC91bmJvdW5kZWQudHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZSBzdXBwb3J0cyB2YXJpYXRpb25zXFxcIiksXFxuICAgICAgICAgdXJsKCcuL2ZvbnRzL3VuYm91bmRlZC91bmJvdW5kZWQudHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZS12YXJpYXRpb25zXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMCw3MSwxNzEsMSkgMzklLCByZ2JhKDE1MCwxNzcsMTk0LDEpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIHZhcigtLWZvbnQtZmFsbGJhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU5KTtcXG59XFxuXFxuLmFsZXJ0LXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydC13aW5kb3cge1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQtYmcpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctZ2FtZS1hbGVydCxcXG4uZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUsXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDMqdmFyKC0tcnZ2KSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiA4dmg7XFxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgc3BhbiB7XFxuICAgIG1hcmdpbjogMCAydnc7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydnc7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hdHRhY2stcHJvbXB0IHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1ib2FyZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZC10aXRsZS10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNoaXAtYXhpcy10b2dnbGUge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJheGlzLXRleHQgYXhpcy10ZXh0XFxcIlxcbiAgICAgICAgXFxcImF4aXMtb3B0aW9ucyBheGlzLW9wdGlvbnNcXFwiO1xcbn1cXG5cXG4uYXhpcy10ZXh0IHtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXRleHQ7XFxufVxcblxcbi5heGlzLW9wdGlvbnMge1xcbiAgICBncmlkLWFyZWE6IGF4aXMtb3B0aW9ucztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYXhpcy1vcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWluZGVudDogOCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ueC1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeC1heGlzO1xcbn1cXG5cXG4ueS1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcbn1cXG5cXG4uc2VsZWN0ZWQtYXhpcyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6ICMxMjkzMDM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFsZXJ0LWJnKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaGlwLXByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXByZXZpZXcpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2NSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDdweDtcXG59XFxuXFxuLmhpdC1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDAsMCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsIHJnYmEoMjU1LDAsMCwxKSAwJSwgcmdiYSgyNTUsODEsODEsMSkgNTQlLCByZ2JhKDIxNCwxMTIsMTEyLDEpIDEwMCUpO1xcbn1cXG5cXG4ubWlzcy1tYXJrZXIge1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYigxOTAsIDE5MCwgMTkwKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDEwMywxMTEsMTIyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OWRlZywgcmdiYSgxMDMsMTExLDEyMiwxKSAwJSwgcmdiYSg1Miw3Miw5OSwxKSA1NCUsIHJnYmEoMjMsNDksODcsMSkgMTAwJSk7XFxuICAgIHRyYW5zZm9ybTogdmFyKC0tc2hpcC10cmFuc2Zvcm0pO1xcbn1cXG5cXG4ueC0xIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxufVxcblxcbi55LTEwIHtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuLngtMTAge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxufVxcblxcbi55LTEge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjM1KnZhcigtLXJ2dikpO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAuYXhpcy1vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZC1heGlzKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0LFxcbiAgICAuZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTV2dztcXG4gICAgfVxcbiAgICBoZWFkZXIgc3Bhbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSAoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8c3Bhbj5iPC9zcGFuPjxzcGFuPmE8L3NwYW4+PHNwYW4+dDwvc3Bhbj48c3Bhbj50PC9zcGFuPjxzcGFuPmw8L3NwYW4+PHNwYW4+ZTwvc3Bhbj48c3Bhbj5zPC9zcGFuPjxzcGFuPmg8L3NwYW4+PHNwYW4+aTwvc3Bhbj48c3Bhbj5wPC9zcGFuPmA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVib2FyZHMpO1xuICAgICAgICBnYW1lYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZHMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRzKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkJywgJ2dhbWVib2FyZCcpO1xuICAgICAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkLXRpdGxlJywgJ2JvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ3lvdXIgZ3JpZDonO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQtc3F1YXJlcycsICdib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZFNxdWFyZXMpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllclR3b0JvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tYm9hcmQnLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmQpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tYm9hcmQtdGl0bGUnLCAnYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnZW5lbXkgZ3JpZDonXG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZFNxdWFyZXMuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJywgJ2JvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkU3F1YXJlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmRHcmlkcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIGdhbWVib2FyZHMuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMTA7IHkgPj0gMTsgeS0tKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuY2xhc3NMaXN0LmFkZChgZ2FtZS1zcXVhcmVgLCBgeC0ke3h9YCwgYHktJHt5fWAsIGB4JHt4fS15JHt5fWApO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuZGF0YXNldC55ID0geTtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZVNxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBmb290ZXIudGV4dENvbnRlbnQgPSBgY29weXJpZ2h0IMKpICR7eWVhcn0gfCBzZWFuIHN0ZXBoZW4gYnJpYW5gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93T3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBhbGVydFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxlcnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXdyYXBwZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhbGVydFdyYXBwZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBhbGVydFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWxlcnRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYWxlcnQtd2luZG93Jyk7XG4gICAgICAgICAgICBhbGVydFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWxlcnRXaW5kb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJyk7XG4gICAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgICAgICBjcmVhdGVHYW1lYm9hcmRzQ29udGFpbmVyKCk7XG4gICAgICAgIGNyZWF0ZUdhbWVib2FyZHMoKTtcbiAgICAgICAgY3JlYXRlQm9hcmRHcmlkcygpO1xuICAgICAgICBjcmVhdGVGb290ZXIoKTtcbiAgICAgICAgY3JlYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke3NoaXAuc3RhcnRpbmdTcXVhcmVbMF0gKyBpfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGB2YXIoLS1zaGlwLWJnKWA7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHZhcigtLXNoaXAtdHJhbnNmb3JtKWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgMGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzBdfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdICsgaX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdmFyKC0tc2hpcC1iZylgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlciA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLnRyYW5zZm9ybSA9IGB2YXIoLS1zaGlwLXRyYW5zZm9ybSlgO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCAwIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSAwIDBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGBub25lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJIaXRzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hvd0hpdHMoKS5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtoaXRbMF19LXkke2hpdFsxXX1gKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IGhpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGl0TWFya2VyLmNsYXNzTGlzdC5hZGQoJ2hpdC1tYXJrZXInKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5hcHBlbmRDaGlsZChoaXRNYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXNzZXMocGxheWVyLCBib2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaG93TWlzc2VzKCkuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pc3NlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke21pc3NbMF19LXkke21pc3NbMV19YCk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCBtaXNzTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaXNzTWFya2VyLmNsYXNzTGlzdC5hZGQoJ21pc3MtbWFya2VyJyk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuYXBwZW5kQ2hpbGQobWlzc01hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpZGVPdmVybGF5LFxuICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgY3JlYXRlQWxlcnQsXG4gICAgICAgIGRlbGV0ZUFsZXJ0LFxuICAgICAgICBpbml0aWFsaXplLFxuICAgICAgICByZW5kZXJTaGlwcyxcbiAgICAgICAgcmVuZGVySGl0cyxcbiAgICAgICAgcmVuZGVyTWlzc2VzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSB0d28gbmV3IHBsYXllcnM6XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKCk7XG4gICAgLy8gKHRoZXNlIHBsYXllcnMnIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYXQgdGhlIHNhbWUgc2FtcGxlIGNvb3JkaW5hdGVzIGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyT25lLFxuICAgICAgICBwbGF5ZXJUd29cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zcXVhcmUuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBhcnJheSB0byBob2xkIHJlZmVyZW5jZXMgdG8gYWxsIGJvYXJkIHNxdWFyZXM6XG4gICAgbGV0IGdhbWVTcXVhcmVzID0gW107XG5cbiAgICAvLyBpbml0aWFsaXplIGVtcHR5IGFycmF5IHRvIGhvbGQgcmVmZXJlbmNlcyB0byBhbGwgY3JlYXRlZCBzaGlwczpcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIHRoZSBzdWNjZXNzZnVsIGhpdHM6XG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIG1pc3NlczpcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBjcmVhdGUgMTB4MTAgZ3JpZDpcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IFNxdWFyZSh4LCB5KTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVzLnB1c2gobmV3U3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIHJlZmVyZW5jZSB0byBhIGdhbWVib2FyZCBzcXVhcmUgYmFzZWQgb24gaXRzIHggJiB5IGNvb3JkaW5hdGVzOlxuICAgIGZ1bmN0aW9uIGZpbmRTcXVhcmUoeCwgeSkge1xuICAgICAgICBsZXQgdGFyZ2V0U3F1YXJlO1xuICAgICAgICBnYW1lU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLnggPT09IHggJiYgc3F1YXJlLnkgPT09IHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3F1YXJlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIHNoaXAgb2YgdGhlIGFwcHJvcHJpYXRlIGxlbmd0aCBnaXZlbiBpdHMgc3RhcnRpbmcgJiBlbmRpbmcgY29vcmRpbmF0ZXM6XG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcChbeCwgeV0sIFt4MiwgeTJdKSB7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIC8vIGlmIHggY29vcmRpbmF0ZXMgYXJlIHRoZSBzYW1lLCBzZXQgbGVuZ3RoIHRvIGRpZmZlcmVuY2UgYmV0d2VlbiB5IGNvb3JkaW5hdGVzOlxuICAgICAgICBpZiAoeCA9PT0geDIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHkgLSB5MikgKyAxO1xuICAgICAgICAvLyBpZiB5IGNvb3JkcyBhcmUgdGhlIHNhbWUsIHNldCBsZW5ndGggdG8gZGlmZmVyZW5jZSBiZXR3ZWVuIHggY29vcmRzOlxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBNYXRoLmFicyh4IC0geDIpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCBzcXVhcmVzIHRvIHJlZmVyZW5jZSB0aGUgc2hpcDpcbiAgICAgICAgaWYgKHggPT09IHgyICYmIHkgPCB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5XTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geTsgeiA8PSB5MjsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHggPT09IHgyICYmIHkgPiB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5Ml07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHkyOyB6IDw9IHk7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHopO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4IDwgeDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeCwgeV07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHg7IHogPD0geDI7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHosIHkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4ID4geDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeDIsIHldO1xuICAgICAgICAgICAgbmV3U2hpcC5vcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgICAgIGZvciAobGV0IHogPSB4MjsgeiA8PSB4OyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZSh6LCB5KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc2hpcCB0byBzaGlwcyBhcnJheTpcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHkpO1xuXG4gICAgICAgIC8vIGlmIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLCBzaW1wbHkgcmV0dXJuOlxuICAgICAgICBpZiAoaGl0cy5oYXMoYXR0YWNrZWRTcXVhcmUpIHx8IG1pc3Nlcy5oYXMoYXR0YWNrZWRTcXVhcmUpKSByZXR1cm47XG5cbiAgICAgICAgLy8gbWFyayB0aGUgc3F1YXJlIGFzIGhhdmluZyBiZWVuIGF0dGFja2VkOlxuICAgICAgICBhdHRhY2tlZFNxdWFyZS5hdHRhY2tlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiB0aGUgYXR0YWNrZWQgc3F1YXJlIGhhcyBhIHNoaXAsIGFkZCBhICdoaXQnIHRvIHRoYXQgc2hpcDpcbiAgICAgICAgaWYgKGF0dGFja2VkU3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAvLyB0aGVuIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnaGl0cycgc2V0OlxuICAgICAgICAgICAgaGl0cy5hZGQoYXR0YWNrZWRTcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnbWlzc2VzJyBzZXQ6XG4gICAgICAgICAgICBtaXNzZXMuYWRkKGF0dGFja2VkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgICAgIGlmIChoaXRzLnNpemUgPT09IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGJlZ2luIGVuZCBvZiBnYW1lIGxvZ2ljLi4uXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWx0ZXJuYXRpdmUgYXBwcm9hY2ggd291bGQgYmUgdG8gaXRlcmF0ZSBvdmVyIHRoZSBzaGlwcyBhcnJheSxcbiAgICAgICAgLy8gY2hlY2tpbmcgaWYgZWFjaCBzaGlwIGhhcyBzdW5rXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNaXNzZXMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZE1pc3NlcyA9IFtdO1xuICAgICAgICBtaXNzZXMuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIHJlY29yZGVkTWlzc2VzLnB1c2goW21pc3MueCwgbWlzcy55XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVjb3JkZWRNaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdHMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZEhpdHMgPSBbXTtcbiAgICAgICAgaGl0cy5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICByZWNvcmRlZEhpdHMucHVzaChbaGl0LngsIGhpdC55XSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWNvcmRlZEhpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGNyZWF0ZVNoaXAsXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHNob3dIaXRzLFxuICAgICAgICBzaG93TWlzc2VzLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgZmluZFNxdWFyZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2sob3RoZXJQbGF5ZXIsIFt4LCB5XSkge1xuICAgICAgICBvdGhlclBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBib2FyZCxcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSBudWxsO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBoaXQsIFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgbGVuZ3RoXG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImNvbnN0IFNxdWFyZSA9ICh4LCB5KSA9PiB7XG4gICAgbGV0IHNoaXAgPSBudWxsO1xuICAgIGxldCBhdHRhY2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7IHgsIHksIHNoaXAsIGF0dGFja2VkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRvbU1ldGhvZHMgZnJvbSBcIi4vZG9tLW1ldGhvZHNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuKGZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuXG4gICAgbGV0IGN1cnJlbnRHYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IERPTSA9IGRvbU1ldGhvZHMoKTtcblxuICAgIERPTS5pbml0aWFsaXplKCk7XG4gICAgYWxlcnROZXdHYW1lKCk7XG5cbiAgICBmdW5jdGlvbiBhbGVydE5ld0dhbWUoKSB7XG4gICAgICAgIERPTS5jcmVhdGVBbGVydCgpO1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13aW5kb3cnKTtcbiAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYWxlcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXRpdGxlJywgJ25ldy1nYW1lLXRpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd3ZWxjb21lIHRvIEJBVFRMRVNISVAnO1xuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnc3RhcnQgZ2FtZSc7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICAgICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhbGVydEVuZE9mR2FtZSh3aW5uZXIpIHtcbiAgICAgICAgRE9NLmNyZWF0ZUFsZXJ0KCk7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdpbmRvdycpO1xuICAgICAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdlbmQtb2YtZ2FtZS1hbGVydCcpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYWxlcnQtdGl0bGUnLCAnZW5kLW9mLWdhbWUtdGl0bGUnKTtcbiAgICAgICAgICAgIGlmICh3aW5uZXIgPT09ICdwbGF5ZXIgb25lJykge1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYHlvdSBhcmUgdGhlIHdpbm5lciFgO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5uZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGB0aGUgY29tcHV0ZXIgaXMgdGhlIHdpbm5lcmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ1dHRvbicsICdidXR0b24nKTtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ3BsYXkgYWdhaW4nO1xuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG4gICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgICAgIERPTS5kZWxldGVBbGVydCgpO1xuICAgICAgICBET00uaGlkZU92ZXJsYXkoKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIG5ldyBnYW1lOlxuICAgICAgICBjdXJyZW50R2FtZSA9IEdhbWUoKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSByYW5kb20gc2hpcCBwb3NpdGlvbnMgZm9yIGNvbXB1dGVyOlxuICAgICAgICBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcblxuICAgICAgICAvLyBnZXQgc2hpcCBwb3NpdGlvbnMgZnJvbSB1c2VyOlxuICAgICAgICBjaG9vc2VTaGlwUG9zaXRpb25zKCk7IFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlclNoaXBzKCkge1xuXG4gICAgICAgIC8vIGZvciBlYWNoIG9mIHRoZSA1IHNoaXBzLi4uXG4gICAgICAgIGZvciAobGV0IGNvbXBTaGlwID0gMTsgY29tcFNoaXAgPD0gNTsgY29tcFNoaXArKykge1xuICAgICAgICAgICAgLy8gZXN0YWJsaXNoIHNoaXAgbGVuZ3RoOlxuICAgICAgICAgICAgbGV0IGNvbXBTaGlwTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvbXBTaGlwID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gNDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcFNoaXAgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBjb21wU2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcCA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byB0cmFjayB3aGV0aGVyIHNoaXAgaGFzIGJlZW4gcGxhY2VkOlxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlIChzaGlwUGxhY2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBheGlzIGRpcmVjdGlvbi4uLlxuICAgICAgICAgICAgICAgIGxldCBjb21wU2hpcEF4aXM7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgICAgICAgICAgICAgIHJhbmRvbSA9PT0gMSA/IGNvbXBTaGlwQXhpcyA9ICd4JyA6IGNvbXBTaGlwQXhpcyA9ICd5JztcbiAgICAgICAgICAgICAgICAvLyBjaG9vc2UgcmFuZG9tIHZhbGlkIHNxdWFyZTpcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWDtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcFNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMSAtIGNvbXBTaGlwTGVuZ3RoKSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDExIC0gY29tcFNoaXBMZW5ndGgpKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVja0ZvclBsYWNlZFNoaXAoY3VycmVudEdhbWUucGxheWVyVHdvLCBbcmFuZG9tWCwgcmFuZG9tWV0sIGNvbXBTaGlwQXhpcywgY29tcFNoaXBMZW5ndGgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXAoY3VycmVudEdhbWUucGxheWVyVHdvLCBbcmFuZG9tWCwgcmFuZG9tWV0sIGNvbXBTaGlwQXhpcywgY29tcFNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNob29zZVNoaXBQb3NpdGlvbnMoKSB7XG5cbiAgICAgICAgLy8gaGlkZSB0aGUgZW5lbXkgZ3JpZDpcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZCcpO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHRoZSBwbGF5ZXIgYm9hcmQgdGl0bGUgdGV4dCB0byAnY2hvb3NlIHlvdXIgc2hpcHMnOlxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9ICdQTEFDRSBZT1VSIFNISVBTOic7XG4gICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLXRpdGxlLXRleHRcIj5QTEFDRSBZT1VSIFNISVBTOjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaXAtYXhpcy10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpcy10ZXh0XCI+c2hpcCBheGlzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXMtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpcy1vcHRpb24geC1heGlzLW9wdGlvbiBzZWxlY3RlZC1heGlzXCI+WDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpcy1vcHRpb24geS1heGlzLW9wdGlvblwiPlk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIHN0eWxlIHRoZSAnUExBQ0UgWU9VUiBTSElQUycgdGV4dDpcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRUaXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC10aXRsZSAuYm9hcmQtdGl0bGUtdGV4dCcpXG4gICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1wcm9tcHQnKTtcblxuICAgICAgICAvLyBhcHBseSBjdXJzb3IgcG9pbnRlciBzdHlsZSB0byBib2FyZDpcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMuY2xhc3NMaXN0LmFkZCgncG9pbnRlcicpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byB0cmFjayBjdXJyZW50IHNoaXAgYXhpcyBjaG9pY2U6XG4gICAgICAgIGxldCBzaGlwQXhpcyA9ICd4JztcblxuICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIHRvIHVwZGF0ZSBheGlzIGNob2ljZTpcbiAgICAgICAgY29uc3QgeEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMtb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueS1heGlzLW9wdGlvbicpO1xuICAgICAgICB4QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEF4aXMgPSAneCc7XG4gICAgICAgICAgICB5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgICAgIHhCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICB9KTtcbiAgICAgICAgeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBBeGlzID0gJ3knO1xuICAgICAgICAgICAgeEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1heGlzJyk7XG4gICAgICAgICAgICB5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXN0YWJsaXNoIHZhcmlhYmxlIHRvIHRyYWNrIHdoaWNoICMgc2hpcCBpcyBiZWluZyBwbGFjZWQ6XG4gICAgICAgIGxldCBzaGlwTnVtYmVyID0gMTsgLy8gKGdhbWUgd2lsbCBtb3ZlIG9uIGFmdGVyIGFsbCA1IHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQpXG5cbiAgICAgICAgLy8gYWRkIGhvdmVyIGxpc3RlbmVyIHRvIGdhbWVib2FyZDpcbiAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhvdmVyT3ZlclNxdWFyZSk7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGdhbWVib2FyZDpcbiAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tTcXVhcmUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhvdmVyT3ZlclNxdWFyZShlKSB7XG4gICAgICAgICAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgaG92ZXJlZC1vdmVyIHNxdWFyZTpcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xuICAgICAgICAgICAgY29uc3QgaG92ZXJDb29yZHMgPSBbeCwgeV07XG5cbiAgICAgICAgICAgIGlmIChzaGlwTnVtYmVyID09PSAxICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCA1KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgNSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDIgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCA0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gMyAmJiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSA0ICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAzKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDUgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrU3F1YXJlKGUpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb29yZGluYXRlcyBvZiBjbGlja2VkIHNxdWFyZTpcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZENvb3JkcyA9IFt4LCB5XTtcblxuICAgICAgICAgICAgaWYgKHNoaXBOdW1iZXIgPT09IDEgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDIgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDMgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDQgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDUgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGNsaWNrIGxpc3RlbmVyIGZvciBwbGFjaW5nIHNoaXBzICYgaG92ZXIgbGlzdGVuZXIgZm9yIHByZXZpZXdpbmcgc2hpcHM6XG4gICAgICAgICAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tTcXVhcmUpO1xuICAgICAgICAgICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3Zlck92ZXJTcXVhcmUpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdGl0bGUgdGV4dCAmIHNoaXAgYXhpcyB0b2dnbGU6XG4gICAgICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ3lvdXIgZ3JpZDonXG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgcGxheWVyVHdvIGdhbWVib2FyZDpcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBib2FyZCBhbmQgZ2V0IHRoZSBwbGF5ZXIncyBmaXJzdCBtb3ZlOlxuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAgICAgZ2V0UGxheWVyTW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSB7XG5cbiAgICAgICAgY29uc3QgaG92ZXJlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtob3ZlckNvb3Jkc1swXX0teSR7aG92ZXJDb29yZHNbMV19YCk7XG5cbiAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGhvdmVyQ29vcmRzWzBdKSArIGkpLCBwYXJzZUludChob3ZlckNvb3Jkc1sxXSldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtzcXVhcmVDb29yZHNbMF19LXkke3NxdWFyZUNvb3Jkc1sxXX1gKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmV2aWV3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFtwYXJzZUludChob3ZlckNvb3Jkc1swXSksIChwYXJzZUludChob3ZlckNvb3Jkc1sxXSkgKyBpKV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLngke3NxdWFyZUNvb3Jkc1swXX0teSR7c3F1YXJlQ29vcmRzWzFdfWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXByZXZpZXcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBtb3VzZW91dCBsaXN0ZW5lciB0byByZW1vdmUgc3R5bGluZzpcbiAgICAgICAgaG92ZXJlZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGhvdmVyQ29vcmRzWzBdKSArIGkpLCBwYXJzZUludChob3ZlckNvb3Jkc1sxXSldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7c3F1YXJlQ29vcmRzWzBdfS15JHtzcXVhcmVDb29yZHNbMV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFtwYXJzZUludChob3ZlckNvb3Jkc1swXSksIChwYXJzZUludChob3ZlckNvb3Jkc1sxXSkgKyBpKV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtzcXVhcmVDb29yZHNbMF19LXkke3NxdWFyZUNvb3Jkc1sxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcHJldmlldycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuICAgICAgICAvLyBjaGVjayBpZiB2YWxpZCBjb21iaW5hdGlvbiBvZiBjb29yZGluYXRlcywgYXhpcyBkaXJlY3Rpb24sIGFuZCBzaGlwIGxlbmd0aDpcbiAgICAgICAgaWYgKGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCdzIHZhbGlkLCBwbGFjZSB0aGUgc2hpcCBhbmQgcmV0dXJuIHRydWU6XG4gICAgICAgICAgICBwbGFjZVNoaXAoY3VycmVudEdhbWUucGxheWVyT25lLCBjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG90aGVyd2lzZS4uLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4JyAmJiAoKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pICsgKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSkpID4gMTApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5JyAmJiAoKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pICsgKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSkpID4gMTApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tGb3JQbGFjZWRTaGlwKGN1cnJlbnRHYW1lLnBsYXllck9uZSwgc2hpcEF4aXMsIHNoaXBMZW5ndGgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQbGFjZWRTaGlwKHBsYXllciwgY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgLy8gUkVUVVJOUyBUUlVFIElGIElUIEZJTkRTIEEgU0hJUCBJTiBUSEUgQVRURU1QVEVEIFBMQUNFTUVOVCBaT05FOlxuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHNoaXBMZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gWyhwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKSArIGkpLCBwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKV07XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRTcXVhcmUgPSBwbGF5ZXIuYm9hcmQuZmluZFNxdWFyZShzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkU3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChzaGlwTGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFsocGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSkpLCAocGFyc2VJbnQoY2xpY2tlZENvb3Jkc1sxXSkgKyBpKV07XG4gICAgICAgICAgICAgICAgY29uc3QgYm9hcmRTcXVhcmUgPSBwbGF5ZXIuYm9hcmQuZmluZFNxdWFyZShzcXVhcmVDb29yZHNbMF0sIHNxdWFyZUNvb3Jkc1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkU3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybnMgZmFsc2UgaXMgbm8gc2hpcCBpcyBmb3VuZDpcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgIFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChwbGF5ZXIsIGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGxldCBlbmRYO1xuICAgICAgICBsZXQgZW5kWTtcbiAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGVuZFggPSBwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKSArIHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMTtcbiAgICAgICAgICAgIGVuZFkgPSBwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBlbmRYID0gcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSk7XG4gICAgICAgICAgICBlbmRZID0gcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1sxXSkgKyBwYXJzZUludChzaGlwTGVuZ3RoKSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyLmJvYXJkLmNyZWF0ZVNoaXAoW3BhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pLCBwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKV0sIFtlbmRYLCBlbmRZXSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllck9uZSA9IGN1cnJlbnRHYW1lLnBsYXllck9uZTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvID0gY3VycmVudEdhbWUucGxheWVyVHdvO1xuXG4gICAgICAgIERPTS5yZW5kZXJTaGlwcyhwbGF5ZXJPbmUsICcucGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJyk7XG5cbiAgICAgICAgRE9NLnJlbmRlckhpdHMocGxheWVyT25lLCAnLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICBET00ucmVuZGVySGl0cyhwbGF5ZXJUd28sICcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG5cbiAgICAgICAgRE9NLnJlbmRlck1pc3NlcyhwbGF5ZXJPbmUsICcucGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIERPTS5yZW5kZXJNaXNzZXMocGxheWVyVHdvLCAnLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBsYXllck1vdmUoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG5cbiAgICAgICAgcGxheWVyVHdvVGl0bGUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrLXByb21wdCcpO1xuICAgICAgICBwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9ICdDSE9PU0UgQSBTUVVBUkUgVE8gQVRUQUNLOic7XG5cbiAgICAgICAgcGxheWVyVHdvQm9hcmQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVNxdWFyZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hvb3NlU3F1YXJlKGUpIHtcbiAgICAgICAgY29uc3QgY2xpY2tlZFNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCB4Q29vcmQgPSBwYXJzZUludChjbGlja2VkU3F1YXJlLmRhdGFzZXQueCk7XG4gICAgICAgIGNvbnN0IHlDb29yZCA9IHBhcnNlSW50KGNsaWNrZWRTcXVhcmUuZGF0YXNldC55KTtcbiAgICAgICAgYXR0ZW1wdEF0dGFjayh4Q29vcmQsIHlDb29yZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0ZW1wdEF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFNxdWFyZSA9IGN1cnJlbnRHYW1lLnBsYXllclR3by5ib2FyZC5maW5kU3F1YXJlKHgsIHkpO1xuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBzcXVhcmUgaGFzbid0IGJlZW4gYXR0YWNrZWQgeWV0OlxuICAgICAgICBpZiAodGFyZ2V0U3F1YXJlLmF0dGFja2VkID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgJ0NIT09TRSBBIFNRVUFSRScgc3R5bGluZzpcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllclR3b1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjay1wcm9tcHQnKTtcbiAgICAgICAgICAgIHBsYXllclR3b1RpdGxlLnRleHRDb250ZW50ID0gJ2VuZW15IGdyaWQ6JztcblxuICAgICAgICAgICAgLy8gdGhlbiBjb21wbGV0ZSB0aGUgYXR0YWNrOlxuICAgICAgICAgICAgY3VycmVudEdhbWUucGxheWVyT25lLmF0dGFjayhjdXJyZW50R2FtZS5wbGF5ZXJUd28sIFt4LCB5XSk7XG5cbiAgICAgICAgICAgIC8vIHJlLXJlbmRlciB0aGUgYm9hcmQgdG8gc2hvdyB0aGUgbmV3IGF0dGFjazpcbiAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBjbGljayBsaXN0ZW5lcnMgZnJvbSB0aGUgZW5lbXkgYm9hcmQ6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlU3F1YXJlKTtcblxuICAgICAgICAgICAgLy8gYW5kIHJlbW92ZSBwb2ludGVyIHN0eWxlIGZyb20gZW5lbXkgYm9hcmQ6XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBhbGwgdGhlIGVuZW15J3Mgc2hpcHMgaGF2ZSBzdW5rOlxuICAgICAgICAgICAgaWYgKGN1cnJlbnRHYW1lLnBsYXllclR3by5ib2FyZC5hbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydEVuZE9mR2FtZSgncGxheWVyIG9uZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiBub3QsIGxldCB0aGUgcGxheWVyIGtub3cgdGhlIGNvbXB1dGVyIGlzIGdlbmVyYXRpbmcgYW4gYXR0YWNrOlxuICAgICAgICAgICAgY29uc3QgcGxheWVyT25lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyT25lVGl0bGUuY2xhc3NMaXN0LmFkZCgnYXR0YWNrLXByb21wdCcpO1xuICAgICAgICAgICAgcGxheWVyT25lVGl0bGUudGV4dENvbnRlbnQgPSAnQVRUQUNLIElOQ09NSU5HIC4gLiAuJztcblxuICAgICAgICAgICAgLy8gdGhlbiByZWNlaXZlIGEgcmFuZG9tIGF0dGFjayBvbiBwbGF5ZXIncyBvd24gYm9hcmQ6XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJlY2VpdmVBdHRhY2ssIDIwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjaygpIHtcbiAgICAgICAgbGV0IGF0dGFja1g7XG4gICAgICAgIGxldCBhdHRhY2tZO1xuXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBzcXVhcmVzIGluIHRoZSBxdWV1ZSwgYXR0YWNrIHRoZSBmaXJzdCBvbmU6XG4gICAgICAgIGlmIChhdHRhY2tRdWV1ZS5xdWV1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gYXR0YWNrUXVldWUuZ2V0TmV4dEF0dGFjaygpO1xuICAgICAgICAgICAgYXR0YWNrWCA9IHNxdWFyZS54O1xuICAgICAgICAgICAgYXR0YWNrWSA9IHNxdWFyZS55O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGdldCBhIHJhbmRvbSBzcXVhcmUgdG8gcG90ZW50aWFsbHkgYXR0YWNrOlxuICAgICAgICAgICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwICsgMSk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVNxdWFyZSA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHJhbmRvbVgsIHJhbmRvbVkpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQsIHJ1biB0aGUgZnVuY3Rpb24gYWdhaW46XG4gICAgICAgICAgICBpZiAocmFuZG9tU3F1YXJlLmF0dGFja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZUF0dGFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgLy8gaWYgaXQgaGFzbid0IHlldCBiZWVuIGF0dGFja2VkLCBzZXQgdGhlIHJhbmRvbSBYL1kgYXMgdGhlIGF0dGFjayBjb29yZGluYXRlczpcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG9tU3F1YXJlLmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGF0dGFja1ggPSByYW5kb21YO1xuICAgICAgICAgICAgICAgIGF0dGFja1kgPSByYW5kb21ZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlICdBVFRBQ0sgSU5DT01JTkcnIG1lc3NhZ2U6XG4gICAgICAgIGNvbnN0IHBsYXllck9uZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgcGxheWVyT25lVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrLXByb21wdCcpO1xuICAgICAgICBwbGF5ZXJPbmVUaXRsZS50ZXh0Q29udGVudCA9ICd5b3VyIGdyaWQ6JztcblxuICAgICAgICAvLyBjb21wbGV0ZSBhdHRhY2s6XG4gICAgICAgIGN1cnJlbnRHYW1lLnBsYXllclR3by5hdHRhY2soY3VycmVudEdhbWUucGxheWVyT25lLCBbYXR0YWNrWCwgYXR0YWNrWV0pO1xuXG4gICAgICAgIC8vIGlmIGl0J3MgYSBoaXQsIGNoZWNrIGFkamFjZW50IHNxdWFyZXMgdG8gYWRkIHRvIHRoZSBhdHRhY2sgcXVldWU6XG4gICAgICAgIGlmIChjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZShhdHRhY2tYLCBhdHRhY2tZKS5zaGlwIFxuICAgICAgICAgJiYgY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoYXR0YWNrWCwgYXR0YWNrWSkuYXR0YWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGF0dGFja1F1ZXVlLmNoZWNrU3F1YXJlKGF0dGFja1gsIGF0dGFja1kpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlbiByZS1yZW5kZXIgdGhlIGJvYXJkIHRvIHNob3cgdGhlIG5ldyBhdHRhY2s6XG4gICAgICAgIHJlbmRlckJvYXJkKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGFsbCB0aGUgcGxheWVyJ3Mgc2hpcHMgaGF2ZSBzdW5rOlxuICAgICAgICBpZiAoY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmFsbFN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYWxlcnRFbmRPZkdhbWUoJ2NvbXB1dGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3QsIGdldCB0aGUgcGxheWVyJ3MgbmV4dCBtb3ZlOlxuICAgICAgICBnZXRQbGF5ZXJNb3ZlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrUXVldWUgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBxdWV1ZSA9IFtdO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrU3F1YXJlKHgsIHkpIHtcblxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlQWJvdmUgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZSh4LCB5ICsgMSk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVSaWdodCA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHggKyAxLCB5KTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUJlbG93ID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoeCwgeSAtIDEpO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlTGVmdCA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHggLSAxLCB5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNxdWFyZUFib3ZlICYmIHNxdWFyZUFib3ZlLmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goc3F1YXJlQWJvdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNxdWFyZVJpZ2h0ICYmIHNxdWFyZVJpZ2h0LmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goc3F1YXJlUmlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNxdWFyZUJlbG93ICYmIHNxdWFyZUJlbG93LmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goc3F1YXJlQmVsb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNxdWFyZUxlZnQgJiYgc3F1YXJlTGVmdC5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHNxdWFyZUxlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TmV4dEF0dGFjaygpIHtcbiAgICAgICAgICAgIHJldHVybiBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXVlLFxuICAgICAgICAgICAgY2hlY2tTcXVhcmUsXG4gICAgICAgICAgICBnZXROZXh0QXR0YWNrXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9