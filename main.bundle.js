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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n\n    --alert-bg: #d5d5d5ce;\n    --axis-text: #e3e3e3e7;\n    --button-bg: #ffe4c4;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype supports variations\"),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.end-of-game-title {\n    text-align: center;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    /* background-color: var(--button-bg); */\n    /* border: 1px solid black; */\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    color: var(--axis-text);\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: rgb(209, 98, 98);\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n\n    --alert-bg: #d5d5d5ce;\n    --axis-text: #e3e3e3e7;\n    --button-bg: #ffe4c4;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url('./fonts/unbounded/unbounded.ttf') format(\"truetype supports variations\"),\n         url('./fonts/unbounded/unbounded.ttf') format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.end-of-game-title {\n    text-align: center;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader span {\n    margin: 0 2vw;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    /* background-color: var(--button-bg); */\n    /* border: 1px solid black; */\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    color: var(--axis-text);\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: rgb(209, 98, 98);\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid rgba(255, 255, 255, 0.665);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, rgba(255,0,0,1) 0%, rgba(255,81,81,1) 54%, rgba(214,112,112,1) 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, rgba(103,111,122,1) 0%, rgba(52,72,99,1) 54%, rgba(23,49,87,1) 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n@media screen and (min-width: 600px) {\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n    header span:hover {\n        color: var(--site-green);\n        text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywySUFBa0Q7QUFDOUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esb2lCQUFvaUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsR0FBRyxXQUFXLHdEQUF3RCxvQ0FBb0MsOEJBQThCLGtDQUFrQyw4QkFBOEIsNkJBQTZCLDJCQUEyQix5QkFBeUIsdUNBQXVDLGdDQUFnQyxpQ0FBaUMsR0FBRyxnQkFBZ0IsK0JBQStCLCtMQUErTCw0QkFBNEIsR0FBRyxzQkFBc0IsVUFBVSw2QkFBNkIsT0FBTyxHQUFHLDhCQUE4QixVQUFVLDZCQUE2QixPQUFPLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxpQkFBaUIsNkJBQTZCLHNCQUFzQix3QkFBd0IsR0FBRyxXQUFXLCtCQUErQixHQUFHLFVBQVUseUJBQXlCLG9CQUFvQiw2QkFBNkIsOEJBQThCLDZHQUE2RyxxREFBcUQsbUJBQW1CLHlCQUF5QixHQUFHLGNBQWMseUJBQXlCLG1CQUFtQixvQkFBb0IsdUJBQXVCLGlCQUFpQiw0Q0FBNEMsR0FBRyxvQkFBb0IsaUJBQWlCLHlCQUF5QixtQkFBbUIsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsbUJBQW1CLG9DQUFvQyxrQkFBa0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsZ0NBQWdDLDBCQUEwQix3Q0FBd0MsbUJBQW1CLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLDBDQUEwQyx1QkFBdUIsR0FBRywwQ0FBMEMsdUNBQXVDLDRCQUE0QiwrQkFBK0Isa0RBQWtELG1EQUFtRCwyREFBMkQsR0FBRyx3QkFBd0IseUJBQXlCLEdBQUcsbUJBQW1CLHVDQUF1QyxzQkFBc0Isb0JBQW9CLGdDQUFnQywwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIseUNBQXlDLEdBQUcsYUFBYSw2Q0FBNkMsR0FBRyxtQkFBbUIsNEJBQTRCLEdBQUcsWUFBWSxzQ0FBc0Msa0JBQWtCLDBCQUEwQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGVBQWUsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcsa0JBQWtCLHVCQUF1QixzQ0FBc0MsR0FBRyxvQkFBb0IsNEJBQTRCLCtCQUErQixrREFBa0QsbURBQW1ELDJEQUEyRCxHQUFHLDZCQUE2QixvQkFBb0IsR0FBRyx1QkFBdUIsb0JBQW9CLDZCQUE2QixnQ0FBZ0MsR0FBRyx1QkFBdUIscUJBQXFCLG1CQUFtQiw2Q0FBNkMsb0NBQW9DLDJCQUEyQixtQkFBbUIsd0JBQXdCLDRCQUE0QixvQkFBb0IscUNBQXFDLGtDQUFrQyxvR0FBb0csR0FBRyxnQkFBZ0IsOEJBQThCLDJCQUEyQixHQUFHLG1CQUFtQiw4QkFBOEIsa0JBQWtCLG9CQUFvQixvQ0FBb0MsR0FBRyxrQkFBa0IsdUJBQXVCLDhCQUE4QixzQkFBc0Isd0JBQXdCLGtDQUFrQyxtQ0FBbUMsbUJBQW1CLG9DQUFvQyx5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLDZDQUE2QyxHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxvQkFBb0Isd0JBQXdCLEdBQUcsb0JBQW9CLDRCQUE0QixxQkFBcUIsa0NBQWtDLEdBQUcsbUJBQW1CLDRDQUE0QyxHQUFHLG9CQUFvQixvQkFBb0Isa0JBQWtCLG1CQUFtQiw2Q0FBNkMsMENBQTBDLEdBQUcsa0JBQWtCLG1EQUFtRCxvQkFBb0IsOEJBQThCLDBCQUEwQixxQkFBcUIsR0FBRyxpQkFBaUIsa0JBQWtCLGlCQUFpQix5QkFBeUIsK0JBQStCLCtHQUErRyxHQUFHLGtCQUFrQixrQkFBa0IsaUJBQWlCLHlCQUF5Qiw2Q0FBNkMsbUNBQW1DLCtHQUErRyx1Q0FBdUMsR0FBRyxVQUFVLHdCQUF3QixHQUFHLFdBQVcsdUJBQXVCLEdBQUcsV0FBVyx5QkFBeUIsR0FBRyxVQUFVLDBCQUEwQixHQUFHLFlBQVksdUJBQXVCLGtCQUFrQixvQkFBb0IsOEJBQThCLDBCQUEwQix1Q0FBdUMsdUJBQXVCLEdBQUcsMENBQTBDLDhDQUE4QyxnQ0FBZ0MsT0FBTyxtQkFBbUIsOEJBQThCLE9BQU8sc0JBQXNCLHNCQUFzQix1QkFBdUIsT0FBTyxxQkFBcUIsMkJBQTJCLDRCQUE0QiwwQkFBMEIsMkJBQTJCLE9BQU8sZ0RBQWdELDJCQUEyQixPQUFPLHlCQUF5QixtQ0FBbUMsc0RBQXNELE9BQU8sR0FBRyxPQUFPLDRGQUE0RixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxtaEJBQW1oQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLFdBQVcsd0RBQXdELG9DQUFvQyw4QkFBOEIsa0NBQWtDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLHlCQUF5Qix1Q0FBdUMsZ0NBQWdDLGlDQUFpQyxHQUFHLGdCQUFnQiwrQkFBK0IsNktBQTZLLDRCQUE0QixHQUFHLHNCQUFzQixVQUFVLDZCQUE2QixPQUFPLEdBQUcsOEJBQThCLFVBQVUsNkJBQTZCLE9BQU8sR0FBRyxjQUFjLHNCQUFzQixHQUFHLGlCQUFpQiw2QkFBNkIsc0JBQXNCLHdCQUF3QixHQUFHLFdBQVcsK0JBQStCLEdBQUcsVUFBVSx5QkFBeUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsNkdBQTZHLHFEQUFxRCxtQkFBbUIseUJBQXlCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLG9CQUFvQix1QkFBdUIsaUJBQWlCLDRDQUE0QyxHQUFHLG9CQUFvQixpQkFBaUIseUJBQXlCLG1CQUFtQixvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxtQkFBbUIsb0NBQW9DLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLGdCQUFnQixnQ0FBZ0MsMEJBQTBCLHdDQUF3QyxtQkFBbUIsR0FBRyxrQkFBa0IsdUJBQXVCLEdBQUcsMENBQTBDLHVCQUF1QixHQUFHLDBDQUEwQyx1Q0FBdUMsNEJBQTRCLCtCQUErQixrREFBa0QsbURBQW1ELDJEQUEyRCxHQUFHLHdCQUF3Qix5QkFBeUIsR0FBRyxtQkFBbUIsdUNBQXVDLHNCQUFzQixvQkFBb0IsZ0NBQWdDLDBCQUEwQixvQkFBb0IsOEJBQThCLDBCQUEwQix5Q0FBeUMsR0FBRyxhQUFhLDZDQUE2QyxHQUFHLG1CQUFtQiw0QkFBNEIsR0FBRyxZQUFZLHNDQUFzQyxrQkFBa0IsMEJBQTBCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEdBQUcsaUJBQWlCLG9CQUFvQixHQUFHLGlCQUFpQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZUFBZSxHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLGVBQWUsR0FBRyxrQkFBa0IsdUJBQXVCLHNDQUFzQyxHQUFHLG9CQUFvQiw0QkFBNEIsK0JBQStCLGtEQUFrRCxtREFBbUQsMkRBQTJELEdBQUcsNkJBQTZCLG9CQUFvQixHQUFHLHVCQUF1QixvQkFBb0IsNkJBQTZCLGdDQUFnQyxHQUFHLHVCQUF1QixxQkFBcUIsbUJBQW1CLDZDQUE2QyxvQ0FBb0MsMkJBQTJCLG1CQUFtQix3QkFBd0IsNEJBQTRCLG9CQUFvQixxQ0FBcUMsa0NBQWtDLG9HQUFvRyxHQUFHLGdCQUFnQiw4QkFBOEIsMkJBQTJCLEdBQUcsbUJBQW1CLDhCQUE4QixrQkFBa0Isb0JBQW9CLG9DQUFvQyxHQUFHLGtCQUFrQix1QkFBdUIsOEJBQThCLHNCQUFzQix3QkFBd0Isa0NBQWtDLG1DQUFtQyxtQkFBbUIsb0NBQW9DLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixzQkFBc0IsNkNBQTZDLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxvQkFBb0IsNEJBQTRCLHFCQUFxQixrQ0FBa0MsR0FBRyxtQkFBbUIsNENBQTRDLEdBQUcsb0JBQW9CLG9CQUFvQixrQkFBa0IsbUJBQW1CLDZDQUE2QywwQ0FBMEMsR0FBRyxrQkFBa0IsbURBQW1ELG9CQUFvQiw4QkFBOEIsMEJBQTBCLHFCQUFxQixHQUFHLGlCQUFpQixrQkFBa0IsaUJBQWlCLHlCQUF5QiwrQkFBK0IsK0dBQStHLEdBQUcsa0JBQWtCLGtCQUFrQixpQkFBaUIseUJBQXlCLDZDQUE2QyxtQ0FBbUMsK0dBQStHLHVDQUF1QyxHQUFHLFVBQVUsd0JBQXdCLEdBQUcsV0FBVyx1QkFBdUIsR0FBRyxXQUFXLHlCQUF5QixHQUFHLFVBQVUsMEJBQTBCLEdBQUcsWUFBWSx1QkFBdUIsa0JBQWtCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHVDQUF1Qyx1QkFBdUIsR0FBRywwQ0FBMEMsOENBQThDLGdDQUFnQyxPQUFPLG1CQUFtQiw4QkFBOEIsT0FBTyxzQkFBc0Isc0JBQXNCLHVCQUF1QixPQUFPLHFCQUFxQiwyQkFBMkIsNEJBQTRCLDBCQUEwQiwyQkFBMkIsT0FBTyxnREFBZ0QsMkJBQTJCLE9BQU8seUJBQXlCLG1DQUFtQyxzREFBc0QsT0FBTyxHQUFHLG1CQUFtQjtBQUMvbWpCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0EsaUVBQWlFLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQsaUVBQWlFLGVBQWUsSUFBSSwyQkFBMkIsSUFBSSx1QkFBdUI7QUFDMUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQ0FBZ0MsaUJBQWlCO0FBQ2pELGlFQUFpRSxlQUFlLElBQUksdUJBQXVCLElBQUksMkJBQTJCO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZSxJQUFJLE9BQU8sSUFBSSxPQUFPO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSwyREFBMkQsZUFBZSxJQUFJLFFBQVEsSUFBSSxRQUFRO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7O0FDeE1ZOztBQUU5Qjs7QUFFQTtBQUNBLHNCQUFzQixtREFBTTtBQUM1QixzQkFBc0IsbURBQU07QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmM7QUFDSjs7QUFFN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHdCQUF3QixTQUFTO0FBQ2pDLDhCQUE4QixzREFBTTtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLHdCQUF3QixvREFBSTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7O0FDaEpZOztBQUVwQzs7QUFFQSxrQkFBa0Isc0RBQVM7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDaEJyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDNUJuQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7OztVQ05yQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2I7QUFDSjs7QUFFdEI7O0FBRUE7O0FBRUEsZ0JBQWdCLHdEQUFVOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsaURBQUk7O0FBRTFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMERBQTBELGVBQWUsSUFBSSxlQUFlOztBQUU1RjtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQSwyREFBMkQsZ0JBQWdCLElBQUksZ0JBQWdCO0FBQy9GO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBLDJEQUEyRCxnQkFBZ0IsSUFBSSxnQkFBZ0I7QUFDL0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQ0FBaUM7QUFDakU7QUFDQSwrREFBK0QsZ0JBQWdCLElBQUksZ0JBQWdCO0FBQ25HO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0NBQWdDLGlDQUFpQztBQUNqRTtBQUNBLCtEQUErRCxnQkFBZ0IsSUFBSSxnQkFBZ0I7QUFDbkc7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLFdBQVc7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9kb20tbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc3F1YXJlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLWNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWZhbGxiYWNrOiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuICAgIC0tc2l0ZS1ncmVlbjogIzFhZmYwMDtcXG5cXG4gICAgLS1zaGlwLXByZXZpZXc6ICMxYWFkMGFhODtcXG5cXG4gICAgLS1hbGVydC1iZzogI2Q1ZDVkNWNlO1xcbiAgICAtLWF4aXMtdGV4dDogI2UzZTNlM2U3O1xcbiAgICAtLWJ1dHRvbi1iZzogI2ZmZTRjNDtcXG4gICAgLS1zaGlwLWJnOiAjMjAzMzRlO1xcbiAgICAtLXNoaXAtYm9yZGVyOiAxcHggc29saWQgIzg5YThkNDtcXG4gICAgLS1zaGlwLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLS1zaGlwLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlIHN1cHBvcnRzIHZhcmlhdGlvbnNcXFwiKSxcXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1xcXCIpO1xcbiAgICBmb250LXdlaWdodDogMTAwIDEwMDA7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbi5wb2ludGVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDAsNzEsMTcxLDEpIDM5JSwgcmdiYSgxNTAsMTc3LDE5NCwxKSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnLCB2YXIoLS1mb250LWZhbGxiYWNrKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41OSk7XFxufVxcblxcbi5hbGVydC13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnQtd2luZG93IHtcXG4gICAgcGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDcwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDNyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsZXJ0LWJnKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWxlcnQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmV3LWdhbWUtYWxlcnQsXFxuLmVuZC1vZi1nYW1lLWFsZXJ0IHtcXG4gICAgbWF4LWhlaWdodDogNDB2dztcXG59XFxuXFxuLm5ldy1nYW1lLXRpdGxlLFxcbi5lbmQtb2YtZ2FtZS10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5lbmQtb2YtZ2FtZS10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQzKnZhcigtLXJ2dikpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYmcpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogOHZoO1xcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgMnZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zaGlwLWF4aXMtdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiYXhpcy10ZXh0IGF4aXMtdGV4dFxcXCJcXG4gICAgICAgIFxcXCJheGlzLW9wdGlvbnMgYXhpcy1vcHRpb25zXFxcIjtcXG59XFxuXFxuLmF4aXMtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1heGlzLXRleHQpO1xcbiAgICBncmlkLWFyZWE6IGF4aXMtdGV4dDtcXG59XFxuXFxuLmF4aXMtb3B0aW9ucyB7XFxuICAgIGdyaWQtYXJlYTogYXhpcy1vcHRpb25zO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5heGlzLW9wdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiByZ2IoMjA5LCA5OCwgOTgpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICB3aWR0aDogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtaW5kZW50OiA4JTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi54LWF4aXMtb3B0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiB4LWF4aXM7XFxufVxcblxcbi55LWF4aXMtb3B0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiB5LWF4aXM7XFxufVxcblxcbi5zZWxlY3RlZC1heGlzIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjb2xvcjogIzEyOTMwMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWxlcnQtYmcpO1xcbn1cXG5cXG4uc2hpcC1wcmV2aWV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1wcmV2aWV3KTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NjUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCByZ2JhKDI1NSwwLDAsMSkgMCUsIHJnYmEoMjU1LDgxLDgxLDEpIDU0JSwgcmdiYSgyMTQsMTEyLDExMiwxKSAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsIHJnYmEoMTAzLDExMSwxMjIsMSkgMCUsIHJnYmEoNTIsNzIsOTksMSkgNTQlLCByZ2JhKDIzLDQ5LDg3LDEpIDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgLmF4aXMtb3B0aW9uOmhvdmVyOm5vdCguc2VsZWN0ZWQtYXhpcykge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICB9XFxuICAgIC5nYW1lYm9hcmRzIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIH1cXG4gICAgLmJvYXJkLXNxdWFyZXMge1xcbiAgICAgICAgd2lkdGg6IDM1dnc7XFxuICAgICAgICBoZWlnaHQ6IDM1dnc7XFxuICAgIH1cXG4gICAgLmFsZXJ0LXdpbmRvdyB7XFxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1dnc7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyNXZ3O1xcbiAgICB9XFxuICAgIC5uZXctZ2FtZS1hbGVydCxcXG4gICAgLmVuZC1vZi1nYW1lLWFsZXJ0IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1dnc7XFxuICAgIH1cXG4gICAgaGVhZGVyIHNwYW46aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsNkJBQTZCOztJQUU3QixxQkFBcUI7O0lBRXJCLHlCQUF5Qjs7SUFFekIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyx5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCOzhFQUN5RTtJQUN6RSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIs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SSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsd0dBQXdHO0FBQzVHOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLDRCQUE0QjtJQUM1Qix3R0FBd0c7SUFDeEcsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLDJDQUEyQztJQUMvQztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtZmFsbGJhY2s6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG4gICAgLS1zaXRlLWdyZWVuOiAjMWFmZjAwO1xcblxcbiAgICAtLXNoaXAtcHJldmlldzogIzFhYWQwYWE4O1xcblxcbiAgICAtLWFsZXJ0LWJnOiAjZDVkNWQ1Y2U7XFxuICAgIC0tYXhpcy10ZXh0OiAjZTNlM2UzZTc7XFxuICAgIC0tYnV0dG9uLWJnOiAjZmZlNGM0O1xcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlIHN1cHBvcnRzIHZhcmlhdGlvbnNcXFwiKSxcXG4gICAgICAgICB1cmwoJy4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlLXZhcmlhdGlvbnNcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAxMDAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG4ucG9pbnRlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhpZGUge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHJnYigyLDAsMzYpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTE1ZGVnLCByZ2JhKDIsMCwzNiwxKSAwJSwgcmdiYSgwLDcxLDE3MSwxKSAzOSUsIHJnYmEoMTUwLDE3NywxOTQsMSkgMTAwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJywgdmFyKC0tZm9udC1mYWxsYmFjayk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTkpO1xcbn1cXG5cXG4uYWxlcnQtd3JhcHBlciB7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFsZXJ0LXdpbmRvdyB7XFxuICAgIHBhZGRpbmc6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICB3aWR0aDogNzB2dztcXG4gICAgaGVpZ2h0OiA3MHZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGVydC1iZyk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFsZXJ0LXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm5ldy1nYW1lLWFsZXJ0LFxcbi5lbmQtb2YtZ2FtZS1hbGVydCB7XFxuICAgIG1heC1oZWlnaHQ6IDQwdnc7XFxufVxcblxcbi5uZXctZ2FtZS10aXRsZSxcXG4uZW5kLW9mLWdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4uZW5kLW9mLWdhbWUtdGl0bGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40Myp2YXIoLS1ydnYpKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBzcGFuIHtcXG4gICAgbWFyZ2luOiAwIDJ2dztcXG59XFxuXFxuLmdhbWVib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4dnc7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJ2dztcXG59XFxuXFxuLmJvYXJkLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmF0dGFjay1wcm9tcHQge1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5wbGF5ZXItb25lLWJvYXJkLXRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJvYXJkLXRpdGxlLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc2hpcC1heGlzLXRvZ2dsZSB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7ICovXFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImF4aXMtdGV4dCBheGlzLXRleHRcXFwiXFxuICAgICAgICBcXFwiYXhpcy1vcHRpb25zIGF4aXMtb3B0aW9uc1xcXCI7XFxufVxcblxcbi5heGlzLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tYXhpcy10ZXh0KTtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXRleHQ7XFxufVxcblxcbi5heGlzLW9wdGlvbnMge1xcbiAgICBncmlkLWFyZWE6IGF4aXMtb3B0aW9ucztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYXhpcy1vcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogcmdiKDIwOSwgOTgsIDk4KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWluZGVudDogOCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ueC1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeC1heGlzO1xcbn1cXG5cXG4ueS1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcbn1cXG5cXG4uc2VsZWN0ZWQtYXhpcyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6ICMxMjkzMDM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFsZXJ0LWJnKTtcXG59XFxuXFxuLnNoaXAtcHJldmlldyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtcHJldmlldyk7XFxufVxcblxcbi5ib2FyZC1zcXVhcmVzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIGhlaWdodDogNjB2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uZ2FtZS1zcXVhcmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjY1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogN3B4O1xcbn1cXG5cXG4uaGl0LW1hcmtlciB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMCwwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OWRlZywgcmdiYSgyNTUsMCwwLDEpIDAlLCByZ2JhKDI1NSw4MSw4MSwxKSA1NCUsIHJnYmEoMjE0LDExMiwxMTIsMSkgMTAwJSk7XFxufVxcblxcbi5taXNzLW1hcmtlciB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLDExMSwxMjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCByZ2JhKDEwMywxMTEsMTIyLDEpIDAlLCByZ2JhKDUyLDcyLDk5LDEpIDU0JSwgcmdiYSgyMyw0OSw4NywxKSAxMDAlKTtcXG4gICAgdHJhbnNmb3JtOiB2YXIoLS1zaGlwLXRyYW5zZm9ybSk7XFxufVxcblxcbi54LTEge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuLnktMTAge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4ueC0xMCB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXFxuLnktMSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGhlaWdodDogNnZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuMzUqdmFyKC0tcnZ2KSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICAgIC5heGlzLW9wdGlvbjpob3Zlcjpub3QoLnNlbGVjdGVkLWF4aXMpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICAuZ2FtZWJvYXJkcyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICAgIC5ib2FyZC1zcXVhcmVzIHtcXG4gICAgICAgIHdpZHRoOiAzNXZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICB9XFxuICAgIC5hbGVydC13aW5kb3cge1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgICAgICAgbWF4LWhlaWdodDogMjV2dztcXG4gICAgfVxcbiAgICAubmV3LWdhbWUtYWxlcnQsXFxuICAgIC5lbmQtb2YtZ2FtZS1hbGVydCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZ3O1xcbiAgICB9XFxuICAgIGhlYWRlciBzcGFuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IERPTSA9ICgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IFxuICAgICAgICAgICAgYDxzcGFuPmI8L3NwYW4+PHNwYW4+YTwvc3Bhbj48c3Bhbj50PC9zcGFuPjxzcGFuPnQ8L3NwYW4+PHNwYW4+bDwvc3Bhbj48c3Bhbj5lPC9zcGFuPjxzcGFuPnM8L3NwYW4+PHNwYW4+aDwvc3Bhbj48c3Bhbj5pPC9zcGFuPjxzcGFuPnA8L3NwYW4+YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRzQ29udGFpbmVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkcyk7XG4gICAgICAgIGdhbWVib2FyZHMuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkcycpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkcycpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQnLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmQpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQtdGl0bGUnLCAnYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAneW91ciBncmlkOic7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJywgJ2JvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkU3F1YXJlcyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZCcsICdnYW1lYm9hcmQnKTtcbiAgICAgICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZC10aXRsZScsICdib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9ICdlbmVteSBncmlkOidcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZFNxdWFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkU3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnLCAnYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmRTcXVhcmVzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZEdyaWRzKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgZ2FtZWJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSAxMDsgeSA+PSAxOyB5LS0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbWVTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNxdWFyZS5jbGFzc0xpc3QuYWRkKGBnYW1lLXNxdWFyZWAsIGB4LSR7eH1gLCBgeS0ke3l9YCwgYHgke3h9LXkke3l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuZGF0YXNldC54ID0geDtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNxdWFyZS5kYXRhc2V0LnkgPSB5O1xuICAgICAgICAgICAgICAgICAgICBib2FyZC5hcHBlbmRDaGlsZChnYW1lU3F1YXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IGBjb3B5cmlnaHQgwqkgJHt5ZWFyfSB8IHNlYW4gc3RlcGhlbiBicmlhbmA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlT3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlT3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dPdmVybGF5KCkge1xuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWxlcnQoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGFsZXJ0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbGVydFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYWxlcnQtd3JhcHBlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGFsZXJ0V3JhcHBlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsZXJ0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGVydFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdhbGVydC13aW5kb3cnKTtcbiAgICAgICAgICAgIGFsZXJ0V3JhcHBlci5hcHBlbmRDaGlsZChhbGVydFdpbmRvdyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlQWxlcnQoKSB7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdyYXBwZXInKTtcbiAgICAgICAgYWxlcnQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKCk7XG4gICAgICAgIGNyZWF0ZUdhbWVib2FyZHNDb250YWluZXIoKTtcbiAgICAgICAgY3JlYXRlR2FtZWJvYXJkcygpO1xuICAgICAgICBjcmVhdGVCb2FyZEdyaWRzKCk7XG4gICAgICAgIGNyZWF0ZUZvb3RlcigpO1xuICAgICAgICBjcmVhdGVPdmVybGF5KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyU2hpcHMocGxheWVyLCBib2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtib2FyZFNlbGVjdG9yfSAueCR7c2hpcC5zdGFydGluZ1NxdWFyZVswXSArIGl9LXkke3NoaXAuc3RhcnRpbmdTcXVhcmVbMV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHZhcigtLXNoaXAtYmcpYDtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS50cmFuc2Zvcm0gPSBgdmFyKC0tc2hpcC10cmFuc2Zvcm0pYDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgMCAwIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cylgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckJvdHRvbSA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gc2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGAwIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSAwYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckJvdHRvbSA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckJvdHRvbSA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke3NoaXAuc3RhcnRpbmdTcXVhcmVbMF19LXkke3NoaXAuc3RhcnRpbmdTcXVhcmVbMV0gKyBpfWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGB2YXIoLS1zaGlwLWJnKWA7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHZhcigtLXNoaXAtdHJhbnNmb3JtKWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGAwIDAgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIDAgMGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgbm9uZWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgbm9uZWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckhpdHMocGxheWVyLCBib2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaG93SGl0cygpLmZvckVhY2goaGl0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpdFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke2hpdFswXX0teSR7aGl0WzFdfWApO1xuICAgICAgICAgICAgaGl0U3F1YXJlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgY29uc3QgaGl0TWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBoaXRNYXJrZXIuY2xhc3NMaXN0LmFkZCgnaGl0LW1hcmtlcicpO1xuICAgICAgICAgICAgaGl0U3F1YXJlLmFwcGVuZENoaWxkKGhpdE1hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1pc3NlcyhwbGF5ZXIsIGJvYXJkU2VsZWN0b3IpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnNob3dNaXNzZXMoKS5mb3JFYWNoKG1pc3MgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWlzc2VkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgJHtib2FyZFNlbGVjdG9yfSAueCR7bWlzc1swXX0teSR7bWlzc1sxXX1gKTtcbiAgICAgICAgICAgIG1pc3NlZFNxdWFyZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IG1pc3NNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG1pc3NNYXJrZXIuY2xhc3NMaXN0LmFkZCgnbWlzcy1tYXJrZXInKTtcbiAgICAgICAgICAgIG1pc3NlZFNxdWFyZS5hcHBlbmRDaGlsZChtaXNzTWFya2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGlkZU92ZXJsYXksXG4gICAgICAgIHNob3dPdmVybGF5LFxuICAgICAgICBjcmVhdGVBbGVydCxcbiAgICAgICAgZGVsZXRlQWxlcnQsXG4gICAgICAgIGluaXRpYWxpemUsXG4gICAgICAgIHJlbmRlclNoaXBzLFxuICAgICAgICByZW5kZXJIaXRzLFxuICAgICAgICByZW5kZXJNaXNzZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jb25zdCBHYW1lID0gKCkgPT4ge1xuXG4gICAgLy8gY3JlYXRlIHR3byBuZXcgcGxheWVyczpcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoKTtcbiAgICAvLyAodGhlc2UgcGxheWVycycgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBhdCB0aGUgc2FtZSBzYW1wbGUgY29vcmRpbmF0ZXMgZm9yIHRlc3RpbmcgcHVycG9zZXMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXJPbmUsXG4gICAgICAgIHBsYXllclR3b1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiLCJpbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NxdWFyZS5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG5cbiAgICAvLyBpbml0aWFsaXplIGVtcHR5IGFycmF5IHRvIGhvbGQgcmVmZXJlbmNlcyB0byBhbGwgYm9hcmQgc3F1YXJlczpcbiAgICBsZXQgZ2FtZVNxdWFyZXMgPSBbXTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgYXJyYXkgdG8gaG9sZCByZWZlcmVuY2VzIHRvIGFsbCBjcmVhdGVkIHNoaXBzOlxuICAgIGxldCBzaGlwcyA9IFtdO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBzZXQgdG8gdHJhY2sgdGhlIHN1Y2Nlc3NmdWwgaGl0czpcbiAgICBjb25zdCBoaXRzID0gbmV3IFNldCgpO1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBzZXQgdG8gdHJhY2sgbWlzc2VzOlxuICAgIGNvbnN0IG1pc3NlcyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGNyZWF0ZSAxMHgxMCBncmlkOlxuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3U3F1YXJlID0gU3F1YXJlKHgsIHkpO1xuICAgICAgICAgICAgZ2FtZVNxdWFyZXMucHVzaChuZXdTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIGEgcmVmZXJlbmNlIHRvIGEgZ2FtZWJvYXJkIHNxdWFyZSBiYXNlZCBvbiBpdHMgeCAmIHkgY29vcmRpbmF0ZXM6XG4gICAgZnVuY3Rpb24gZmluZFNxdWFyZSh4LCB5KSB7XG4gICAgICAgIGxldCB0YXJnZXRTcXVhcmU7XG4gICAgICAgIGdhbWVTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmIChzcXVhcmUueCA9PT0geCAmJiBzcXVhcmUueSA9PT0geSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRTcXVhcmU7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGEgc2hpcCBvZiB0aGUgYXBwcm9wcmlhdGUgbGVuZ3RoIGdpdmVuIGl0cyBzdGFydGluZyAmIGVuZGluZyBjb29yZGluYXRlczpcbiAgICBmdW5jdGlvbiBjcmVhdGVTaGlwKFt4LCB5XSwgW3gyLCB5Ml0pIHtcbiAgICAgICAgbGV0IGxlbmd0aDtcbiAgICAgICAgLy8gaWYgeCBjb29yZGluYXRlcyBhcmUgdGhlIHNhbWUsIHNldCBsZW5ndGggdG8gZGlmZmVyZW5jZSBiZXR3ZWVuIHkgY29vcmRpbmF0ZXM6XG4gICAgICAgIGlmICh4ID09PSB4Mikge1xuICAgICAgICAgICAgbGVuZ3RoID0gTWF0aC5hYnMoeSAtIHkyKSArIDE7XG4gICAgICAgIC8vIGlmIHkgY29vcmRzIGFyZSB0aGUgc2FtZSwgc2V0IGxlbmd0aCB0byBkaWZmZXJlbmNlIGJldHdlZW4geCBjb29yZHM6XG4gICAgICAgIH0gZWxzZSBpZiAoeSA9PT0geTIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHggLSB4MikgKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IFNoaXAobGVuZ3RoKTtcblxuICAgICAgICAvLyB1cGRhdGUgZ2FtZWJvYXJkIHNxdWFyZXMgdG8gcmVmZXJlbmNlIHRoZSBzaGlwOlxuICAgICAgICBpZiAoeCA9PT0geDIgJiYgeSA8IHkyKSB7XG4gICAgICAgICAgICBuZXdTaGlwLnN0YXJ0aW5nU3F1YXJlID0gW3gsIHldO1xuICAgICAgICAgICAgbmV3U2hpcC5vcmllbnRhdGlvbiA9ICd5JztcbiAgICAgICAgICAgIGZvciAobGV0IHogPSB5OyB6IDw9IHkyOyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZSh4LCB6KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoeCA9PT0geDIgJiYgeSA+IHkyKSB7XG4gICAgICAgICAgICBuZXdTaGlwLnN0YXJ0aW5nU3F1YXJlID0gW3gsIHkyXTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geTI7IHogPD0geTsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyICYmIHggPCB4Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5XTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneCc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geDsgeiA8PSB4MjsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeiwgeSk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyICYmIHggPiB4Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4MiwgeV07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHgyOyB6IDw9IHg7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHosIHkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBzaGlwIHRvIHNoaXBzIGFycmF5OlxuICAgICAgICBzaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBhdHRhY2tlZFNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeSk7XG5cbiAgICAgICAgLy8gaWYgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWQsIHNpbXBseSByZXR1cm46XG4gICAgICAgIGlmIChoaXRzLmhhcyhhdHRhY2tlZFNxdWFyZSkgfHwgbWlzc2VzLmhhcyhhdHRhY2tlZFNxdWFyZSkpIHJldHVybjtcblxuICAgICAgICAvLyBtYXJrIHRoZSBzcXVhcmUgYXMgaGF2aW5nIGJlZW4gYXR0YWNrZWQ6XG4gICAgICAgIGF0dGFja2VkU3F1YXJlLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIC8vIGlmIHRoZSBhdHRhY2tlZCBzcXVhcmUgaGFzIGEgc2hpcCwgYWRkIGEgJ2hpdCcgdG8gdGhhdCBzaGlwOlxuICAgICAgICBpZiAoYXR0YWNrZWRTcXVhcmUuc2hpcCkge1xuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUuc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIC8vIHRoZW4gYWRkIHRoZSBzcXVhcmUgdG8gdGhlICdoaXRzJyBzZXQ6XG4gICAgICAgICAgICBoaXRzLmFkZChhdHRhY2tlZFNxdWFyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgYWRkIHRoZSBzcXVhcmUgdG8gdGhlICdtaXNzZXMnIHNldDpcbiAgICAgICAgICAgIG1pc3Nlcy5hZGQoYXR0YWNrZWRTcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWxsU3VuaygpIHtcbiAgICAgICAgaWYgKGhpdHMuc2l6ZSA9PT0gMTcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgLy8gYmVnaW4gZW5kIG9mIGdhbWUgbG9naWMuLi5cbiAgICAgICAgfVxuICAgICAgICAvLyBhbHRlcm5hdGl2ZSBhcHByb2FjaCB3b3VsZCBiZSB0byBpdGVyYXRlIG92ZXIgdGhlIHNoaXBzIGFycmF5LFxuICAgICAgICAvLyBjaGVja2luZyBpZiBlYWNoIHNoaXAgaGFzIHN1bmtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01pc3NlcygpIHtcbiAgICAgICAgbGV0IHJlY29yZGVkTWlzc2VzID0gW107XG4gICAgICAgIG1pc3Nlcy5mb3JFYWNoKG1pc3MgPT4ge1xuICAgICAgICAgICAgcmVjb3JkZWRNaXNzZXMucHVzaChbbWlzcy54LCBtaXNzLnldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZWNvcmRlZE1pc3NlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SGl0cygpIHtcbiAgICAgICAgbGV0IHJlY29yZGVkSGl0cyA9IFtdO1xuICAgICAgICBoaXRzLmZvckVhY2goaGl0ID0+IHtcbiAgICAgICAgICAgIHJlY29yZGVkSGl0cy5wdXNoKFtoaXQueCwgaGl0LnldKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHJlY29yZGVkSGl0cztcbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgY3JlYXRlU2hpcCxcbiAgICAgICAgYWxsU3VuayxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgc2hvd0hpdHMsXG4gICAgICAgIHNob3dNaXNzZXMsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBmaW5kU3F1YXJlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuXG4gICAgY29uc3QgYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgIGZ1bmN0aW9uIGF0dGFjayhvdGhlclBsYXllciwgW3gsIHldKSB7XG4gICAgICAgIG90aGVyUGxheWVyLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGJvYXJkLFxuICAgICAgICBhdHRhY2tcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgPT4ge1xuXG4gICAgbGV0IGhpdHMgPSAwO1xuICAgIGxldCBzdGFydGluZ1NxdWFyZSA9IG51bGw7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcbiAgICAgICAgaWYgKGhpdHMgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhpdHMrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGhpdCwgXG4gICAgICAgIGlzU3VuayxcbiAgICAgICAgc3RhcnRpbmdTcXVhcmUsXG4gICAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgICBsZW5ndGhcbiAgICB9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiY29uc3QgU3F1YXJlID0gKHgsIHkpID0+IHtcbiAgICBsZXQgc2hpcCA9IG51bGw7XG4gICAgbGV0IGF0dGFja2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIHsgeCwgeSwgc2hpcCwgYXR0YWNrZWQgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZG9tTWV0aG9kcyBmcm9tIFwiLi9kb20tbWV0aG9kc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG4oZnVuY3Rpb24gcGxheUdhbWUoKSB7XG5cbiAgICBsZXQgY3VycmVudEdhbWUgPSBudWxsO1xuXG4gICAgY29uc3QgRE9NID0gZG9tTWV0aG9kcygpO1xuXG4gICAgRE9NLmluaXRpYWxpemUoKTtcbiAgICBhbGVydE5ld0dhbWUoKTtcblxuICAgIGZ1bmN0aW9uIGFsZXJ0TmV3R2FtZSgpIHtcbiAgICAgICAgRE9NLmNyZWF0ZUFsZXJ0KCk7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdpbmRvdycpO1xuICAgICAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCduZXctZ2FtZS1hbGVydCcpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYWxlcnQtdGl0bGUnLCAnbmV3LWdhbWUtdGl0bGUnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ3dlbGNvbWUgdG8gQkFUVExFU0hJUCc7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24nLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdzdGFydCBnYW1lJztcbiAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcblxuICAgICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFsZXJ0RW5kT2ZHYW1lKHdpbm5lcikge1xuICAgICAgICBET00uY3JlYXRlQWxlcnQoKTtcbiAgICAgICAgY29uc3QgYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQtd2luZG93Jyk7XG4gICAgICAgIGFsZXJ0LmNsYXNzTGlzdC5hZGQoJ2VuZC1vZi1nYW1lLWFsZXJ0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdhbGVydC10aXRsZScsICdlbmQtb2YtZ2FtZS10aXRsZScpO1xuICAgICAgICAgICAgaWYgKHdpbm5lciA9PT0gJ3BsYXllciBvbmUnKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgeW91IGFyZSB0aGUgd2lubmVyIWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbm5lciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYHRoZSBjb21wdXRlciBpcyB0aGUgd2lubmVyYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAncGxheSBhZ2Fpbic7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICAgICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICAgICAgRE9NLmRlbGV0ZUFsZXJ0KCk7XG4gICAgICAgIERPTS5oaWRlT3ZlcmxheSgpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgbmV3IGdhbWU6XG4gICAgICAgIGN1cnJlbnRHYW1lID0gR2FtZSgpO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBzaGlwIHBvc2l0aW9ucyBmb3IgY29tcHV0ZXI6XG4gICAgICAgIGdlbmVyYXRlQ29tcHV0ZXJTaGlwcygpO1xuXG4gICAgICAgIC8vIGdldCBzaGlwIHBvc2l0aW9ucyBmcm9tIHVzZXI6XG4gICAgICAgIGNob29zZVNoaXBQb3NpdGlvbnMoKTsgXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKSB7XG5cbiAgICAgICAgLy8gZm9yIGVhY2ggb2YgdGhlIDUgc2hpcHMuLi5cbiAgICAgICAgZm9yIChsZXQgY29tcFNoaXAgPSAxOyBjb21wU2hpcCA8PSA1OyBjb21wU2hpcCsrKSB7XG4gICAgICAgICAgICAvLyBlc3RhYmxpc2ggc2hpcCBsZW5ndGg6XG4gICAgICAgICAgICBsZXQgY29tcFNoaXBMZW5ndGg7XG4gICAgICAgICAgICBpZiAoY29tcFNoaXAgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb21wU2hpcExlbmd0aCA9IDU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwID09PSAyKSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSA0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcFNoaXAgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBjb21wU2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwID09PSA1KSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHRyYWNrIHdoZXRoZXIgc2hpcCBoYXMgYmVlbiBwbGFjZWQ6XG4gICAgICAgICAgICBsZXQgc2hpcFBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKHNoaXBQbGFjZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGF4aXMgZGlyZWN0aW9uLi4uXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBTaGlwQXhpcztcbiAgICAgICAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSArIDE7XG4gICAgICAgICAgICAgICAgcmFuZG9tID09PSAxID8gY29tcFNoaXBBeGlzID0gJ3gnIDogY29tcFNoaXBBeGlzID0gJ3knO1xuICAgICAgICAgICAgICAgIC8vIGNob29zZSByYW5kb20gdmFsaWQgc3F1YXJlOlxuICAgICAgICAgICAgICAgIGxldCByYW5kb21YO1xuICAgICAgICAgICAgICAgIGxldCByYW5kb21ZO1xuICAgICAgICAgICAgICAgIGlmIChjb21wU2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDExIC0gY29tcFNoaXBMZW5ndGgpKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcFNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTEgLSBjb21wU2hpcExlbmd0aCkpICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrRm9yUGxhY2VkU2hpcChjdXJyZW50R2FtZS5wbGF5ZXJUd28sIFtyYW5kb21YLCByYW5kb21ZXSwgY29tcFNoaXBBeGlzLCBjb21wU2hpcExlbmd0aCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcChjdXJyZW50R2FtZS5wbGF5ZXJUd28sIFtyYW5kb21YLCByYW5kb21ZXSwgY29tcFNoaXBBeGlzLCBjb21wU2hpcExlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hvb3NlU2hpcFBvc2l0aW9ucygpIHtcblxuICAgICAgICAvLyBoaWRlIHRoZSBlbmVteSBncmlkOlxuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkJyk7XG4gICAgICAgIHBsYXllclR3b0JvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgICAgICAvLyBjaGFuZ2UgdGhlIHBsYXllciBib2FyZCB0aXRsZSB0ZXh0IHRvICdjaG9vc2UgeW91ciBzaGlwcyc6XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC10aXRsZScpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ1BMQUNFIFlPVVIgU0hJUFM6JztcbiAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtdGl0bGUtdGV4dFwiPlBMQUNFIFlPVVIgU0hJUFM6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcC1heGlzLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzLXRleHRcIj5zaGlwIGF4aXM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpcy1vcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzLW9wdGlvbiB4LWF4aXMtb3B0aW9uIHNlbGVjdGVkLWF4aXNcIj5YPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzLW9wdGlvbiB5LWF4aXMtb3B0aW9uXCI+WTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgLy8gc3R5bGUgdGhlICdQTEFDRSBZT1VSIFNISVBTJyB0ZXh0OlxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFRpdGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlIC5ib2FyZC10aXRsZS10ZXh0JylcbiAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrLXByb21wdCcpO1xuXG4gICAgICAgIC8vIGFwcGx5IGN1cnNvciBwb2ludGVyIHN0eWxlIHRvIGJvYXJkOlxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdwb2ludGVyJyk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHZhcmlhYmxlIHRvIHRyYWNrIGN1cnJlbnQgc2hpcCBheGlzIGNob2ljZTpcbiAgICAgICAgbGV0IHNoaXBBeGlzID0gJ3gnO1xuXG4gICAgICAgIC8vIGFkZCBjbGljayBldmVudCBsaXN0ZW5lcnMgdG8gdXBkYXRlIGF4aXMgY2hvaWNlOlxuICAgICAgICBjb25zdCB4QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngtYXhpcy1vcHRpb24nKTtcbiAgICAgICAgY29uc3QgeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy55LWF4aXMtb3B0aW9uJyk7XG4gICAgICAgIHhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwQXhpcyA9ICd4JztcbiAgICAgICAgICAgIHlCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICAgICAgeEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1heGlzJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEF4aXMgPSAneSc7XG4gICAgICAgICAgICB4QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgICAgIHlCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBlc3RhYmxpc2ggdmFyaWFibGUgdG8gdHJhY2sgd2hpY2ggIyBzaGlwIGlzIGJlaW5nIHBsYWNlZDpcbiAgICAgICAgbGV0IHNoaXBOdW1iZXIgPSAxOyAvLyAoZ2FtZSB3aWxsIG1vdmUgb24gYWZ0ZXIgYWxsIDUgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZClcblxuICAgICAgICAvLyBhZGQgaG92ZXIgbGlzdGVuZXIgdG8gZ2FtZWJvYXJkOlxuICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaG92ZXJPdmVyU3F1YXJlKTtcblxuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgdG8gZ2FtZWJvYXJkOlxuICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1NxdWFyZSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaG92ZXJPdmVyU3F1YXJlKGUpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb29yZGluYXRlcyBvZiBob3ZlcmVkLW92ZXIgc3F1YXJlOlxuICAgICAgICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgICAgICAgICBjb25zdCBob3ZlckNvb3JkcyA9IFt4LCB5XTtcblxuICAgICAgICAgICAgaWYgKHNoaXBOdW1iZXIgPT09IDEgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCA1KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gMiAmJiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgNCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSAzICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAzKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDQgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gNSAmJiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY2xpY2tTcXVhcmUoZSkge1xuICAgICAgICAgICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGNsaWNrZWQgc3F1YXJlOlxuICAgICAgICAgICAgY29uc3QgeCA9IGUudGFyZ2V0LmRhdGFzZXQueDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBlLnRhcmdldC5kYXRhc2V0Lnk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkQ29vcmRzID0gW3gsIHldO1xuXG4gICAgICAgICAgICBpZiAoc2hpcE51bWJlciA9PT0gMSAmJiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgNSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBOdW1iZXIrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gMiAmJiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgNCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBOdW1iZXIrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gMyAmJiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgMykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBOdW1iZXIrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gNCAmJiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgMykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgIHNoaXBOdW1iZXIrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gNSAmJiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgMikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgY2xpY2sgbGlzdGVuZXIgZm9yIHBsYWNpbmcgc2hpcHMgJiBob3ZlciBsaXN0ZW5lciBmb3IgcHJldmlld2luZyBzaGlwczpcbiAgICAgICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja1NxdWFyZSk7XG4gICAgICAgICAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhvdmVyT3ZlclNxdWFyZSk7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB0aXRsZSB0ZXh0ICYgc2hpcCBheGlzIHRvZ2dsZTpcbiAgICAgICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAneW91ciBncmlkOidcbiAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSBwbGF5ZXJUd28gZ2FtZWJvYXJkOlxuICAgICAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgdGhlIGJvYXJkIGFuZCBnZXQgdGhlIHBsYXllcidzIGZpcnN0IG1vdmU6XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBnZXRQbGF5ZXJNb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcblxuICAgICAgICBjb25zdCBob3ZlcmVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLngke2hvdmVyQ29vcmRzWzBdfS15JHtob3ZlckNvb3Jkc1sxXX1gKTtcblxuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFsocGFyc2VJbnQoaG92ZXJDb29yZHNbMF0pICsgaSksIHBhcnNlSW50KGhvdmVyQ29vcmRzWzFdKV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLngke3NxdWFyZUNvb3Jkc1swXX0teSR7c3F1YXJlQ29vcmRzWzFdfWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXByZXZpZXcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gW3BhcnNlSW50KGhvdmVyQ29vcmRzWzBdKSwgKHBhcnNlSW50KGhvdmVyQ29vcmRzWzFdKSArIGkpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7c3F1YXJlQ29vcmRzWzBdfS15JHtzcXVhcmVDb29yZHNbMV19YCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcHJldmlldycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIG1vdXNlb3V0IGxpc3RlbmVyIHRvIHJlbW92ZSBzdHlsaW5nOlxuICAgICAgICBob3ZlcmVkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFsocGFyc2VJbnQoaG92ZXJDb29yZHNbMF0pICsgaSksIHBhcnNlSW50KGhvdmVyQ29vcmRzWzFdKV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtzcXVhcmVDb29yZHNbMF19LXkke3NxdWFyZUNvb3Jkc1sxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcHJldmlldycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gW3BhcnNlSW50KGhvdmVyQ29vcmRzWzBdKSwgKHBhcnNlSW50KGhvdmVyQ29vcmRzWzFdKSArIGkpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLngke3NxdWFyZUNvb3Jkc1swXX0teSR7c3F1YXJlQ29vcmRzWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1wcmV2aWV3Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyeVRvUGxhY2VTaGlwKGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHZhbGlkIGNvbWJpbmF0aW9uIG9mIGNvb3JkaW5hdGVzLCBheGlzIGRpcmVjdGlvbiwgYW5kIHNoaXAgbGVuZ3RoOlxuICAgICAgICBpZiAoY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgdmFsaWQsIHBsYWNlIHRoZSBzaGlwIGFuZCByZXR1cm4gdHJ1ZTpcbiAgICAgICAgICAgIHBsYWNlU2hpcChjdXJyZW50R2FtZS5wbGF5ZXJPbmUsIGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb3RoZXJ3aXNlLi4uXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnICYmICgocGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSkgKyAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKSkgPiAxMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzaGlwQXhpcyA9PT0gJ3knICYmICgocGFyc2VJbnQoY2xpY2tlZENvb3Jkc1sxXSkgKyAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKSkgPiAxMCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGVja0ZvclBsYWNlZFNoaXAoY3VycmVudEdhbWUucGxheWVyT25lLCBzaGlwQXhpcywgc2hpcExlbmd0aCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0ZvclBsYWNlZFNoaXAocGxheWVyLCBjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuICAgICAgICAvLyBSRVRVUk5TIFRSVUUgSUYgSVQgRklORFMgQSBTSElQIElOIFRIRSBBVFRFTVBURUQgUExBQ0VNRU5UIFpPTkU6XG4gICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAoc2hpcExlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pICsgaSksIHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNxdWFyZSA9IHBsYXllci5ib2FyZC5maW5kU3F1YXJlKHNxdWFyZUNvb3Jkc1swXSwgc3F1YXJlQ29vcmRzWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRTcXVhcmUuc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHNoaXBMZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gWyhwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKSksIChwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKSArIGkpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNxdWFyZSA9IHBsYXllci5ib2FyZC5maW5kU3F1YXJlKHNxdWFyZUNvb3Jkc1swXSwgc3F1YXJlQ29vcmRzWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRTcXVhcmUuc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJucyBmYWxzZSBpcyBubyBzaGlwIGlzIGZvdW5kOlxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHBsYXllciwgY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgbGV0IGVuZFg7XG4gICAgICAgIGxldCBlbmRZO1xuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgZW5kWCA9IHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pICsgcGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxO1xuICAgICAgICAgICAgZW5kWSA9IHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGVuZFggPSBwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKTtcbiAgICAgICAgICAgIGVuZFkgPSBwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKSArIHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIuYm9hcmQuY3JlYXRlU2hpcChbcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSksIHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pXSwgW2VuZFgsIGVuZFldKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyT25lID0gY3VycmVudEdhbWUucGxheWVyT25lO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd28gPSBjdXJyZW50R2FtZS5wbGF5ZXJUd287XG5cbiAgICAgICAgRE9NLnJlbmRlclNoaXBzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICBET00ucmVuZGVySGl0cyhwbGF5ZXJPbmUsICcucGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIERPTS5yZW5kZXJIaXRzKHBsYXllclR3bywgJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICBET00ucmVuZGVyTWlzc2VzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgRE9NLnJlbmRlck1pc3NlcyhwbGF5ZXJUd28sICcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGxheWVyTW92ZSgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC10aXRsZScpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICBwbGF5ZXJUd29UaXRsZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgIHBsYXllclR3b1RpdGxlLnRleHRDb250ZW50ID0gJ0NIT09TRSBBIFNRVUFSRSBUTyBBVFRBQ0s6JztcblxuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIHBsYXllclR3b0JvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlU3F1YXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9vc2VTcXVhcmUoZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkU3F1YXJlID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHhDb29yZCA9IHBhcnNlSW50KGNsaWNrZWRTcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgeUNvb3JkID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICBhdHRlbXB0QXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRlbXB0QXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gY3VycmVudEdhbWUucGxheWVyVHdvLmJvYXJkLmZpbmRTcXVhcmUoeCwgeSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHNxdWFyZSBoYXNuJ3QgYmVlbiBhdHRhY2tlZCB5ZXQ6XG4gICAgICAgIGlmICh0YXJnZXRTcXVhcmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSAnQ0hPT1NFIEEgU1FVQVJFJyBzdHlsaW5nOlxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyVHdvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrLXByb21wdCcpO1xuICAgICAgICAgICAgcGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPSAnZW5lbXkgZ3JpZDonO1xuXG4gICAgICAgICAgICAvLyB0aGVuIGNvbXBsZXRlIHRoZSBhdHRhY2s6XG4gICAgICAgICAgICBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYXR0YWNrKGN1cnJlbnRHYW1lLnBsYXllclR3bywgW3gsIHldKTtcblxuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIHRoZSBib2FyZCB0byBzaG93IHRoZSBuZXcgYXR0YWNrOlxuICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGNsaWNrIGxpc3RlbmVycyBmcm9tIHRoZSBlbmVteSBib2FyZDpcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VTcXVhcmUpO1xuXG4gICAgICAgICAgICAvLyBhbmQgcmVtb3ZlIHBvaW50ZXIgc3R5bGUgZnJvbSBlbmVteSBib2FyZDpcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGFsbCB0aGUgZW5lbXkncyBzaGlwcyBoYXZlIHN1bms6XG4gICAgICAgICAgICBpZiAoY3VycmVudEdhbWUucGxheWVyVHdvLmJvYXJkLmFsbFN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0RW5kT2ZHYW1lKCdwbGF5ZXIgb25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIG5vdCwgbGV0IHRoZSBwbGF5ZXIga25vdyB0aGUgY29tcHV0ZXIgaXMgZ2VuZXJhdGluZyBhbiBhdHRhY2s6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS50ZXh0Q29udGVudCA9ICdBVFRBQ0sgSU5DT01JTkcgLiAuIC4nO1xuXG4gICAgICAgICAgICAvLyB0aGVuIHJlY2VpdmUgYSByYW5kb20gYXR0YWNrIG9uIHBsYXllcidzIG93biBib2FyZDpcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVjZWl2ZUF0dGFjaywgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICBsZXQgYXR0YWNrWDtcbiAgICAgICAgbGV0IGF0dGFja1k7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIHNxdWFyZXMgaW4gdGhlIHF1ZXVlLCBhdHRhY2sgdGhlIGZpcnN0IG9uZTpcbiAgICAgICAgaWYgKGF0dGFja1F1ZXVlLnF1ZXVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBhdHRhY2tRdWV1ZS5nZXROZXh0QXR0YWNrKCk7XG4gICAgICAgICAgICBhdHRhY2tYID0gc3F1YXJlLng7XG4gICAgICAgICAgICBhdHRhY2tZID0gc3F1YXJlLnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZ2V0IGEgcmFuZG9tIHNxdWFyZSB0byBwb3RlbnRpYWxseSBhdHRhY2s6XG4gICAgICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCArIDEpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUocmFuZG9tWCwgcmFuZG9tWSk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCwgcnVuIHRoZSBmdW5jdGlvbiBhZ2FpbjpcbiAgICAgICAgICAgIGlmIChyYW5kb21TcXVhcmUuYXR0YWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBpZiBpdCBoYXNuJ3QgeWV0IGJlZW4gYXR0YWNrZWQsIHNldCB0aGUgcmFuZG9tIFgvWSBhcyB0aGUgYXR0YWNrIGNvb3JkaW5hdGVzOlxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21TcXVhcmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNrWCA9IHJhbmRvbVg7XG4gICAgICAgICAgICAgICAgYXR0YWNrWSA9IHJhbmRvbVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgJ0FUVEFDSyBJTkNPTUlORycgbWVzc2FnZTpcbiAgICAgICAgY29uc3QgcGxheWVyT25lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC10aXRsZScpO1xuICAgICAgICBwbGF5ZXJPbmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgIHBsYXllck9uZVRpdGxlLnRleHRDb250ZW50ID0gJ3lvdXIgZ3JpZDonO1xuXG4gICAgICAgIC8vIGNvbXBsZXRlIGF0dGFjazpcbiAgICAgICAgY3VycmVudEdhbWUucGxheWVyVHdvLmF0dGFjayhjdXJyZW50R2FtZS5wbGF5ZXJPbmUsIFthdHRhY2tYLCBhdHRhY2tZXSk7XG5cbiAgICAgICAgLy8gaWYgaXQncyBhIGhpdCwgY2hlY2sgYWRqYWNlbnQgc3F1YXJlcyB0byBhZGQgdG8gdGhlIGF0dGFjayBxdWV1ZTpcbiAgICAgICAgaWYgKGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKGF0dGFja1gsIGF0dGFja1kpLnNoaXAgXG4gICAgICAgICAmJiBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZShhdHRhY2tYLCBhdHRhY2tZKS5hdHRhY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0YWNrUXVldWUuY2hlY2tTcXVhcmUoYXR0YWNrWCwgYXR0YWNrWSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGVuIHJlLXJlbmRlciB0aGUgYm9hcmQgdG8gc2hvdyB0aGUgbmV3IGF0dGFjazpcbiAgICAgICAgcmVuZGVyQm9hcmQoKTtcblxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgYWxsIHRoZSBwbGF5ZXIncyBzaGlwcyBoYXZlIHN1bms6XG4gICAgICAgIGlmIChjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuYWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhbGVydEVuZE9mR2FtZSgnY29tcHV0ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdCwgZ2V0IHRoZSBwbGF5ZXIncyBuZXh0IG1vdmU6XG4gICAgICAgIGdldFBsYXllck1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2tRdWV1ZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHF1ZXVlID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tTcXVhcmUoeCwgeSkge1xuXG4gICAgICAgICAgICBjb25zdCBzcXVhcmVBYm92ZSA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHgsIHkgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVJpZ2h0ID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoeCArIDEsIHkpO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlQmVsb3cgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZSh4LCB5IC0gMSk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVMZWZ0ID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoeCAtIDEsIHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3F1YXJlQWJvdmUgJiYgc3F1YXJlQWJvdmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVBYm92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlUmlnaHQgJiYgc3F1YXJlUmlnaHQuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVSaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlQmVsb3cgJiYgc3F1YXJlQmVsb3cuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVCZWxvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlTGVmdCAmJiBzcXVhcmVMZWZ0LmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goc3F1YXJlTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0QXR0YWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVldWUsXG4gICAgICAgICAgICBjaGVja1NxdWFyZSxcbiAgICAgICAgICAgIGdldE5leHRBdHRhY2tcbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=