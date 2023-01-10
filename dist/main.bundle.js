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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n    --invalid-hover: #dd1f1fba;\n\n    --favicon: #0b57c1;\n\n    --alert-bg: #d5d5d5ce;\n    --axis-text: #e3e3e3e7;\n    --button-bg: #ffe4c4;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype supports variations\"),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    text-align: center;\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: #fa000079 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\nheader span {\n    width: calc(0.6*var(--rvv));\n    height: calc(0.6*var(--rvv));\n    margin: 0 2vw 5px;\n}\n\nheader span:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n}\n\n.square-effect {\n    border: 2px solid var(--site-green);\n    box-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    margin-bottom: 0;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    /* background-color: var(--button-bg); */\n    /* border: 1px solid black; */\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    color: var(--axis-text);\n    text-align: center;\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: #d16262;\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.invalid-hover {\n    cursor: not-allowed;\n    background-color: var(--invalid-hover);\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid #ffffffaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, #ff0000 0%, #ff5151 54%, #d67070 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, #676f7a 0%, #344863 54%, #173157 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n.ssbbd {\n    margin-left: 5px;\n    text-decoration: none;\n    color: white;\n}\n\n.ssbbd:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    font-style: italic;\n}\n\n@media screen and (min-width: 600px) {\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n    --invalid-hover: #dd1f1fba;\n\n    --favicon: #0b57c1;\n\n    --alert-bg: #d5d5d5ce;\n    --axis-text: #e3e3e3e7;\n    --button-bg: #ffe4c4;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url('./fonts/unbounded/unbounded.ttf') format(\"truetype supports variations\"),\n         url('./fonts/unbounded/unbounded.ttf') format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100%;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 3rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    text-align: center;\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: #fa000079 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 8vh;\n    margin-bottom: auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\nheader span {\n    width: calc(0.6*var(--rvv));\n    height: calc(0.6*var(--rvv));\n    margin: 0 2vw 5px;\n}\n\nheader span:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n}\n\n.square-effect {\n    border: 2px solid var(--site-green);\n    box-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    margin-bottom: 0;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    /* background-color: var(--button-bg); */\n    /* border: 1px solid black; */\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    color: var(--axis-text);\n    text-align: center;\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: #d16262;\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.invalid-hover {\n    cursor: not-allowed;\n    background-color: var(--invalid-hover);\n}\n\n.board-squares {\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid #ffffffaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, #ff0000 0%, #ff5151 54%, #d67070 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, #676f7a 0%, #344863 54%, #173157 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 6vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n.ssbbd {\n    margin-left: 5px;\n    text-decoration: none;\n    color: white;\n}\n\n.ssbbd:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    font-style: italic;\n}\n\n@media screen and (min-width: 600px) {\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n}"],"sourceRoot":""}]);
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
        header.innerHTML = `
            <span class="header-letter">b</span class="header-letter">
            <span class="header-letter">a</span class="header-letter">
            <span class="header-letter">t</span class="header-letter">
            <span class="header-letter">t</span class="header-letter">
            <span class="header-letter">l</span class="header-letter">
            <span class="header-letter">e</span class="header-letter">
            <span class="header-letter">s</span class="header-letter">
            <span class="header-letter">q</span class="header-letter">
            <span class="header-letter">u</span class="header-letter">
            <span class="header-letter">a</span class="header-letter">
            <span class="header-letter">r</span class="header-letter">
            <span class="header-letter">e</span class="header-letter">
            <span class="header-letter">s</span class="header-letter">`;
        // add click listeners to each <span> for desktop hover effect:
        const letters = document.querySelectorAll('.header-letter');
        letters.forEach(letter => {
            const letterItself = letter.textContent;
            letter.addEventListener('mouseover', () => {
                if (window.innerWidth > 600) {
                    letter.textContent = '';
                    letter.classList.add('square-effect', 'spin');
                    letter.style.borderColor = generateRandomSiteColor();
                    const boxShadowColor = generateRandomSiteColor();
                    letter.style.boxShadow = `${boxShadowColor} 2px 2px`;
                    letter.style.backgroundColor = generateRandomSiteColor();
                    letter.style.transition = 'transform 0.2s ease-in-out';
                    const randomRotation = Math.floor(Math.random() * 721 - 360); // random # of degrees between -360 and 360
                    letter.style.transform = `rotate(${randomRotation}deg)`;
                }
            });
            letter.addEventListener('mouseout', () => {
                setTimeout(() => {
                    letter.textContent = letterItself;
                    letter.classList.remove('square-effect', 'spin');
                    letter.style.borderColor = '';
                    letter.style.boxShadow = '';
                    letter.style.backgroundColor = '';
                }, 500);
            });
        });
    }

    function generateRandomSiteColor() {
        const colors = [
            '#1aff00', 
            '#1aad0aa8', 
            '#dd1f1fba', 
            '#0b57c1', 
            '#d5d5d5ce', 
            '#89a8d4', 
            '#0047ab', 
            '#96b1c2', 
            '#fa000079', 
            '#d16262',
            '#129303',
            '#ffffffaa',
            '#ff0000',
            '#ff5151',
            '#d67070',
            '#676f7a',
            '#344863',
            '#173157'
        ];
        const randomIndex = Math.floor(Math.random() * (colors.length)) + 1;
        return colors[randomIndex];
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
        footer.innerHTML = `copyright © ${year} | <a href="https://seanstephenbrian.github.io/ssbbd/" class="ssbbd" target="ssbbd" rel=”noopener”>ssbbd</a>`;
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
            title.textContent = 'welcome to BATTLESQUARES';
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
        playerOneBoardTitle.innerHTML = `
            <div class="board-title-text">PLACE YOUR SQUARES:</div>
            <div class="ship-axis-toggle">
                <div class="axis-text">toggle axis</div>
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
            } else {
                const hoveredSquare = document.querySelector(`.x${hoverCoords[0]}-y${hoverCoords[1]}`);
                hoveredSquare.classList.add('invalid-hover');
                hoveredSquare.addEventListener('mouseout', () => {
                    hoveredSquare.classList.remove('invalid-hover');
                }, {once: true});
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
        } else if (checkForPlacedShip(currentGame.playerOne, clickedCoords, shipAxis, shipLength) === true) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8s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YmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2RvbS1tZXRob2RzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWUtY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy91bmJvdW5kZWQvdW5ib3VuZGVkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtZmFsbGJhY2s6ICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG4gICAgLS1zaXRlLWdyZWVuOiAjMWFmZjAwO1xcblxcbiAgICAtLXNoaXAtcHJldmlldzogIzFhYWQwYWE4O1xcbiAgICAtLWludmFsaWQtaG92ZXI6ICNkZDFmMWZiYTtcXG5cXG4gICAgLS1mYXZpY29uOiAjMGI1N2MxO1xcblxcbiAgICAtLWFsZXJ0LWJnOiAjZDVkNWQ1Y2U7XFxuICAgIC0tYXhpcy10ZXh0OiAjZTNlM2UzZTc7XFxuICAgIC0tYnV0dG9uLWJnOiAjZmZlNGM0O1xcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGUgc3VwcG9ydHMgdmFyaWF0aW9uc1xcXCIpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZS12YXJpYXRpb25zXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMCw3MSwxNzEsMSkgMzklLCByZ2JhKDE1MCwxNzcsMTk0LDEpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIHZhcigtLWZvbnQtZmFsbGJhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU5KTtcXG59XFxuXFxuLmFsZXJ0LXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydC13aW5kb3cge1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQtYmcpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctZ2FtZS1hbGVydCxcXG4uZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUsXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiAjZmEwMDAwNzkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40Myp2YXIoLS1ydnYpKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICB3aWR0aDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIG1hcmdpbjogMCAydncgNXB4O1xcbn1cXG5cXG5oZWFkZXIgc3Bhbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG59XFxuXFxuLnNxdWFyZS1lZmZlY3Qge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zaGlwLWF4aXMtdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiYXhpcy10ZXh0IGF4aXMtdGV4dFxcXCJcXG4gICAgICAgIFxcXCJheGlzLW9wdGlvbnMgYXhpcy1vcHRpb25zXFxcIjtcXG59XFxuXFxuLmF4aXMtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1heGlzLXRleHQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogYXhpcy10ZXh0O1xcbn1cXG5cXG4uYXhpcy1vcHRpb25zIHtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLW9wdGlvbnM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmF4aXMtb3B0aW9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6ICNkMTYyNjI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIHdpZHRoOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1pbmRlbnQ6IDglO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLngtYXhpcy1vcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IHgtYXhpcztcXG59XFxuXFxuLnktYXhpcy1vcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IHktYXhpcztcXG59XFxuXFxuLnNlbGVjdGVkLWF4aXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiAjMTI5MzAzO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbGVydC1iZyk7XFxufVxcblxcbi5zaGlwLXByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXByZXZpZXcpO1xcbn1cXG5cXG4uaW52YWxpZC1ob3ZlciB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWludmFsaWQtaG92ZXIpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmFhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCAjZmYwMDAwIDAlLCAjZmY1MTUxIDU0JSwgI2Q2NzA3MCAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsICM2NzZmN2EgMCUsICMzNDQ4NjMgNTQlLCAjMTczMTU3IDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnNzYmJkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zc2JiZDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAuYXhpcy1vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZC1heGlzKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0LFxcbiAgICAuZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTV2dztcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztD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QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0lBQzNDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTs7UUFFSSxnQkFBZ0I7SUFDcEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWZhbGxiYWNrOiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuICAgIC0tc2l0ZS1ncmVlbjogIzFhZmYwMDtcXG5cXG4gICAgLS1zaGlwLXByZXZpZXc6ICMxYWFkMGFhODtcXG4gICAgLS1pbnZhbGlkLWhvdmVyOiAjZGQxZjFmYmE7XFxuXFxuICAgIC0tZmF2aWNvbjogIzBiNTdjMTtcXG5cXG4gICAgLS1hbGVydC1iZzogI2Q1ZDVkNWNlO1xcbiAgICAtLWF4aXMtdGV4dDogI2UzZTNlM2U3O1xcbiAgICAtLWJ1dHRvbi1iZzogI2ZmZTRjNDtcXG4gICAgLS1zaGlwLWJnOiAjMjAzMzRlO1xcbiAgICAtLXNoaXAtYm9yZGVyOiAxcHggc29saWQgIzg5YThkNDtcXG4gICAgLS1zaGlwLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgLS1zaGlwLXRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL3VuYm91bmRlZC91bmJvdW5kZWQudHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZSBzdXBwb3J0cyB2YXJpYXRpb25zXFxcIiksXFxuICAgICAgICAgdXJsKCcuL2ZvbnRzL3VuYm91bmRlZC91bmJvdW5kZWQudHRmJykgZm9ybWF0KFxcXCJ0cnVldHlwZS12YXJpYXRpb25zXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMCw3MSwxNzEsMSkgMzklLCByZ2JhKDE1MCwxNzcsMTk0LDEpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIHZhcigtLWZvbnQtZmFsbGJhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU5KTtcXG59XFxuXFxuLmFsZXJ0LXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydC13aW5kb3cge1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQtYmcpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctZ2FtZS1hbGVydCxcXG4uZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUsXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiAjZmEwMDAwNzkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40Myp2YXIoLS1ydnYpKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IDh2aDtcXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICB3aWR0aDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIG1hcmdpbjogMCAydncgNXB4O1xcbn1cXG5cXG5oZWFkZXIgc3Bhbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG59XFxuXFxuLnNxdWFyZS1lZmZlY3Qge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zaGlwLWF4aXMtdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgICAgICBcXFwiYXhpcy10ZXh0IGF4aXMtdGV4dFxcXCJcXG4gICAgICAgIFxcXCJheGlzLW9wdGlvbnMgYXhpcy1vcHRpb25zXFxcIjtcXG59XFxuXFxuLmF4aXMtdGV4dCB7XFxuICAgIGNvbG9yOiB2YXIoLS1heGlzLXRleHQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogYXhpcy10ZXh0O1xcbn1cXG5cXG4uYXhpcy1vcHRpb25zIHtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLW9wdGlvbnM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmF4aXMtb3B0aW9uIHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgY29sb3I6ICNkMTYyNjI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIHdpZHRoOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1pbmRlbnQ6IDglO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLngtYXhpcy1vcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IHgtYXhpcztcXG59XFxuXFxuLnktYXhpcy1vcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IHktYXhpcztcXG59XFxuXFxuLnNlbGVjdGVkLWF4aXMge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiAjMTI5MzAzO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hbGVydC1iZyk7XFxufVxcblxcbi5zaGlwLXByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLXByZXZpZXcpO1xcbn1cXG5cXG4uaW52YWxpZC1ob3ZlciB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWludmFsaWQtaG92ZXIpO1xcbn1cXG5cXG4uYm9hcmQtc3F1YXJlcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmFhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCAjZmYwMDAwIDAlLCAjZmY1MTUxIDU0JSwgI2Q2NzA3MCAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsICM2NzZmN2EgMCUsICMzNDQ4NjMgNTQlLCAjMTczMTU3IDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA2dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnNzYmJkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zc2JiZDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICAuYXhpcy1vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZC1heGlzKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0LFxcbiAgICAuZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTV2dztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRE9NID0gKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+Yjwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPmE8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj50PC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+dDwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPmw8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5lPC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+czwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPnE8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj51PC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+YTwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPnI8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5lPC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+czwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5gO1xuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXJzIHRvIGVhY2ggPHNwYW4+IGZvciBkZXNrdG9wIGhvdmVyIGVmZmVjdDpcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItbGV0dGVyJyk7XG4gICAgICAgIGxldHRlcnMuZm9yRWFjaChsZXR0ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGV0dGVySXRzZWxmID0gbGV0dGVyLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA2MDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QuYWRkKCdzcXVhcmUtZWZmZWN0JywgJ3NwaW4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnN0eWxlLmJvcmRlckNvbG9yID0gZ2VuZXJhdGVSYW5kb21TaXRlQ29sb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm94U2hhZG93Q29sb3IgPSBnZW5lcmF0ZVJhbmRvbVNpdGVDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuc3R5bGUuYm94U2hhZG93ID0gYCR7Ym94U2hhZG93Q29sb3J9IDJweCAycHhgO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZ2VuZXJhdGVSYW5kb21TaXRlQ29sb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQnO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5kb21Sb3RhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcyMSAtIDM2MCk7IC8vIHJhbmRvbSAjIG9mIGRlZ3JlZXMgYmV0d2VlbiAtMzYwIGFuZCAzNjBcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtyYW5kb21Sb3RhdGlvbn1kZWcpYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldHRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnRleHRDb250ZW50ID0gbGV0dGVySXRzZWxmO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnc3F1YXJlLWVmZmVjdCcsICdzcGluJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuc3R5bGUuYm94U2hhZG93ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tU2l0ZUNvbG9yKCkge1xuICAgICAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAgICAgICAnIzFhZmYwMCcsIFxuICAgICAgICAgICAgJyMxYWFkMGFhOCcsIFxuICAgICAgICAgICAgJyNkZDFmMWZiYScsIFxuICAgICAgICAgICAgJyMwYjU3YzEnLCBcbiAgICAgICAgICAgICcjZDVkNWQ1Y2UnLCBcbiAgICAgICAgICAgICcjODlhOGQ0JywgXG4gICAgICAgICAgICAnIzAwNDdhYicsIFxuICAgICAgICAgICAgJyM5NmIxYzInLCBcbiAgICAgICAgICAgICcjZmEwMDAwNzknLCBcbiAgICAgICAgICAgICcjZDE2MjYyJyxcbiAgICAgICAgICAgICcjMTI5MzAzJyxcbiAgICAgICAgICAgICcjZmZmZmZmYWEnLFxuICAgICAgICAgICAgJyNmZjAwMDAnLFxuICAgICAgICAgICAgJyNmZjUxNTEnLFxuICAgICAgICAgICAgJyNkNjcwNzAnLFxuICAgICAgICAgICAgJyM2NzZmN2EnLFxuICAgICAgICAgICAgJyMzNDQ4NjMnLFxuICAgICAgICAgICAgJyMxNzMxNTcnXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNvbG9ycy5sZW5ndGgpKSArIDE7XG4gICAgICAgIHJldHVybiBjb2xvcnNbcmFuZG9tSW5kZXhdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZHNDb250YWluZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChnYW1lYm9hcmRzKTtcbiAgICAgICAgZ2FtZWJvYXJkcy5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmRzJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRzJyk7XG5cbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZCcsICdnYW1lYm9hcmQnKTtcbiAgICAgICAgZ2FtZWJvYXJkcy5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgncGxheWVyLW9uZS1ib2FyZC10aXRsZScsICdib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9ICd5b3VyIGdyaWQ6JztcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkVGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnLCAnYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRTcXVhcmVzKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkJywgJ2dhbWVib2FyZCcpO1xuICAgICAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItdHdvLWJvYXJkLXRpdGxlJywgJ2JvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ2VuZW15IGdyaWQ6J1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmRUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkU3F1YXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmRTcXVhcmVzLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tYm9hcmQtc3F1YXJlcycsICdib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZFNxdWFyZXMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvYXJkR3JpZHMoKSB7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICBnYW1lYm9hcmRzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgZm9yIChsZXQgeSA9IDEwOyB5ID49IDE7IHktLSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2FtZVNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmNsYXNzTGlzdC5hZGQoYGdhbWUtc3F1YXJlYCwgYHgtJHt4fWAsIGB5LSR7eX1gLCBgeCR7eH0teSR7eX1gKTtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVNxdWFyZS5kYXRhc2V0LnggPSB4O1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmRhdGFzZXQueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGdhbWVTcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgZm9vdGVyLmlubmVySFRNTCA9IGBjb3B5cmlnaHQgwqkgJHt5ZWFyfSB8IDxhIGhyZWY9XCJodHRwczovL3NlYW5zdGVwaGVuYnJpYW4uZ2l0aHViLmlvL3NzYmJkL1wiIGNsYXNzPVwic3NiYmRcIiB0YXJnZXQ9XCJzc2JiZFwiIHJlbD3igJ1ub29wZW5lcuKAnT5zc2JiZDwvYT5gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93T3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBhbGVydFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxlcnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXdyYXBwZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhbGVydFdyYXBwZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBhbGVydFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWxlcnRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYWxlcnQtd2luZG93Jyk7XG4gICAgICAgICAgICBhbGVydFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWxlcnRXaW5kb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJyk7XG4gICAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgICAgICBjcmVhdGVHYW1lYm9hcmRzQ29udGFpbmVyKCk7XG4gICAgICAgIGNyZWF0ZUdhbWVib2FyZHMoKTtcbiAgICAgICAgY3JlYXRlQm9hcmRHcmlkcygpO1xuICAgICAgICBjcmVhdGVGb290ZXIoKTtcbiAgICAgICAgY3JlYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke3NoaXAuc3RhcnRpbmdTcXVhcmVbMF0gKyBpfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGB2YXIoLS1zaGlwLWJnKWA7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHZhcigtLXNoaXAtdHJhbnNmb3JtKWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgMGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzBdfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdICsgaX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdmFyKC0tc2hpcC1iZylgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlciA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLnRyYW5zZm9ybSA9IGB2YXIoLS1zaGlwLXRyYW5zZm9ybSlgO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCAwIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSAwIDBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGBub25lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJIaXRzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hvd0hpdHMoKS5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtoaXRbMF19LXkke2hpdFsxXX1gKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IGhpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGl0TWFya2VyLmNsYXNzTGlzdC5hZGQoJ2hpdC1tYXJrZXInKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5hcHBlbmRDaGlsZChoaXRNYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXNzZXMocGxheWVyLCBib2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaG93TWlzc2VzKCkuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pc3NlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke21pc3NbMF19LXkke21pc3NbMV19YCk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCBtaXNzTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaXNzTWFya2VyLmNsYXNzTGlzdC5hZGQoJ21pc3MtbWFya2VyJyk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuYXBwZW5kQ2hpbGQobWlzc01hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpZGVPdmVybGF5LFxuICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgY3JlYXRlQWxlcnQsXG4gICAgICAgIGRlbGV0ZUFsZXJ0LFxuICAgICAgICBpbml0aWFsaXplLFxuICAgICAgICByZW5kZXJTaGlwcyxcbiAgICAgICAgcmVuZGVySGl0cyxcbiAgICAgICAgcmVuZGVyTWlzc2VzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSB0d28gbmV3IHBsYXllcnM6XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKCk7XG4gICAgLy8gKHRoZXNlIHBsYXllcnMnIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYXQgdGhlIHNhbWUgc2FtcGxlIGNvb3JkaW5hdGVzIGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyT25lLFxuICAgICAgICBwbGF5ZXJUd29cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zcXVhcmUuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBhcnJheSB0byBob2xkIHJlZmVyZW5jZXMgdG8gYWxsIGJvYXJkIHNxdWFyZXM6XG4gICAgbGV0IGdhbWVTcXVhcmVzID0gW107XG5cbiAgICAvLyBpbml0aWFsaXplIGVtcHR5IGFycmF5IHRvIGhvbGQgcmVmZXJlbmNlcyB0byBhbGwgY3JlYXRlZCBzaGlwczpcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIHRoZSBzdWNjZXNzZnVsIGhpdHM6XG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIG1pc3NlczpcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBjcmVhdGUgMTB4MTAgZ3JpZDpcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IFNxdWFyZSh4LCB5KTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVzLnB1c2gobmV3U3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIHJlZmVyZW5jZSB0byBhIGdhbWVib2FyZCBzcXVhcmUgYmFzZWQgb24gaXRzIHggJiB5IGNvb3JkaW5hdGVzOlxuICAgIGZ1bmN0aW9uIGZpbmRTcXVhcmUoeCwgeSkge1xuICAgICAgICBsZXQgdGFyZ2V0U3F1YXJlO1xuICAgICAgICBnYW1lU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLnggPT09IHggJiYgc3F1YXJlLnkgPT09IHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3F1YXJlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIHNoaXAgb2YgdGhlIGFwcHJvcHJpYXRlIGxlbmd0aCBnaXZlbiBpdHMgc3RhcnRpbmcgJiBlbmRpbmcgY29vcmRpbmF0ZXM6XG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcChbeCwgeV0sIFt4MiwgeTJdKSB7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIC8vIGlmIHggY29vcmRpbmF0ZXMgYXJlIHRoZSBzYW1lLCBzZXQgbGVuZ3RoIHRvIGRpZmZlcmVuY2UgYmV0d2VlbiB5IGNvb3JkaW5hdGVzOlxuICAgICAgICBpZiAoeCA9PT0geDIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHkgLSB5MikgKyAxO1xuICAgICAgICAvLyBpZiB5IGNvb3JkcyBhcmUgdGhlIHNhbWUsIHNldCBsZW5ndGggdG8gZGlmZmVyZW5jZSBiZXR3ZWVuIHggY29vcmRzOlxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBNYXRoLmFicyh4IC0geDIpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCBzcXVhcmVzIHRvIHJlZmVyZW5jZSB0aGUgc2hpcDpcbiAgICAgICAgaWYgKHggPT09IHgyICYmIHkgPCB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5XTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geTsgeiA8PSB5MjsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHggPT09IHgyICYmIHkgPiB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5Ml07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHkyOyB6IDw9IHk7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHopO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4IDwgeDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeCwgeV07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHg7IHogPD0geDI7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHosIHkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4ID4geDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeDIsIHldO1xuICAgICAgICAgICAgbmV3U2hpcC5vcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgICAgIGZvciAobGV0IHogPSB4MjsgeiA8PSB4OyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZSh6LCB5KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc2hpcCB0byBzaGlwcyBhcnJheTpcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHkpO1xuXG4gICAgICAgIC8vIGlmIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLCBzaW1wbHkgcmV0dXJuOlxuICAgICAgICBpZiAoaGl0cy5oYXMoYXR0YWNrZWRTcXVhcmUpIHx8IG1pc3Nlcy5oYXMoYXR0YWNrZWRTcXVhcmUpKSByZXR1cm47XG5cbiAgICAgICAgLy8gbWFyayB0aGUgc3F1YXJlIGFzIGhhdmluZyBiZWVuIGF0dGFja2VkOlxuICAgICAgICBhdHRhY2tlZFNxdWFyZS5hdHRhY2tlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiB0aGUgYXR0YWNrZWQgc3F1YXJlIGhhcyBhIHNoaXAsIGFkZCBhICdoaXQnIHRvIHRoYXQgc2hpcDpcbiAgICAgICAgaWYgKGF0dGFja2VkU3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAvLyB0aGVuIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnaGl0cycgc2V0OlxuICAgICAgICAgICAgaGl0cy5hZGQoYXR0YWNrZWRTcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnbWlzc2VzJyBzZXQ6XG4gICAgICAgICAgICBtaXNzZXMuYWRkKGF0dGFja2VkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgICAgIGlmIChoaXRzLnNpemUgPT09IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGJlZ2luIGVuZCBvZiBnYW1lIGxvZ2ljLi4uXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWx0ZXJuYXRpdmUgYXBwcm9hY2ggd291bGQgYmUgdG8gaXRlcmF0ZSBvdmVyIHRoZSBzaGlwcyBhcnJheSxcbiAgICAgICAgLy8gY2hlY2tpbmcgaWYgZWFjaCBzaGlwIGhhcyBzdW5rXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNaXNzZXMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZE1pc3NlcyA9IFtdO1xuICAgICAgICBtaXNzZXMuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIHJlY29yZGVkTWlzc2VzLnB1c2goW21pc3MueCwgbWlzcy55XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVjb3JkZWRNaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdHMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZEhpdHMgPSBbXTtcbiAgICAgICAgaGl0cy5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICByZWNvcmRlZEhpdHMucHVzaChbaGl0LngsIGhpdC55XSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWNvcmRlZEhpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGNyZWF0ZVNoaXAsXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHNob3dIaXRzLFxuICAgICAgICBzaG93TWlzc2VzLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgZmluZFNxdWFyZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2sob3RoZXJQbGF5ZXIsIFt4LCB5XSkge1xuICAgICAgICBvdGhlclBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBib2FyZCxcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSBudWxsO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBoaXQsIFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgbGVuZ3RoXG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImNvbnN0IFNxdWFyZSA9ICh4LCB5KSA9PiB7XG4gICAgbGV0IHNoaXAgPSBudWxsO1xuICAgIGxldCBhdHRhY2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7IHgsIHksIHNoaXAsIGF0dGFja2VkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRvbU1ldGhvZHMgZnJvbSBcIi4vZG9tLW1ldGhvZHNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuKGZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuXG4gICAgbGV0IGN1cnJlbnRHYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IERPTSA9IGRvbU1ldGhvZHMoKTtcblxuICAgIERPTS5pbml0aWFsaXplKCk7XG4gICAgYWxlcnROZXdHYW1lKCk7XG5cbiAgICBmdW5jdGlvbiBhbGVydE5ld0dhbWUoKSB7XG4gICAgICAgIERPTS5jcmVhdGVBbGVydCgpO1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13aW5kb3cnKTtcbiAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYWxlcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXRpdGxlJywgJ25ldy1nYW1lLXRpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd3ZWxjb21lIHRvIEJBVFRMRVNRVUFSRVMnO1xuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnc3RhcnQgZ2FtZSc7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICAgICAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhbGVydEVuZE9mR2FtZSh3aW5uZXIpIHtcbiAgICAgICAgRE9NLmNyZWF0ZUFsZXJ0KCk7XG4gICAgICAgIGNvbnN0IGFsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsZXJ0LXdpbmRvdycpO1xuICAgICAgICBhbGVydC5jbGFzc0xpc3QuYWRkKCdlbmQtb2YtZ2FtZS1hbGVydCcpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnYWxlcnQtdGl0bGUnLCAnZW5kLW9mLWdhbWUtdGl0bGUnKTtcbiAgICAgICAgICAgIGlmICh3aW5uZXIgPT09ICdwbGF5ZXIgb25lJykge1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYHlvdSBhcmUgdGhlIHdpbm5lciFgO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5uZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGB0aGUgY29tcHV0ZXIgaXMgdGhlIHdpbm5lcmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ1dHRvbicsICdidXR0b24nKTtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ3BsYXkgYWdhaW4nO1xuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG4gICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gICAgICAgIERPTS5kZWxldGVBbGVydCgpO1xuICAgICAgICBET00uaGlkZU92ZXJsYXkoKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIG5ldyBnYW1lOlxuICAgICAgICBjdXJyZW50R2FtZSA9IEdhbWUoKTtcblxuICAgICAgICAvLyBnZW5lcmF0ZSByYW5kb20gc2hpcCBwb3NpdGlvbnMgZm9yIGNvbXB1dGVyOlxuICAgICAgICBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKTtcblxuICAgICAgICAvLyBnZXQgc2hpcCBwb3NpdGlvbnMgZnJvbSB1c2VyOlxuICAgICAgICBjaG9vc2VTaGlwUG9zaXRpb25zKCk7IFxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlclNoaXBzKCkge1xuXG4gICAgICAgIC8vIGZvciBlYWNoIG9mIHRoZSA1IHNoaXBzLi4uXG4gICAgICAgIGZvciAobGV0IGNvbXBTaGlwID0gMTsgY29tcFNoaXAgPD0gNTsgY29tcFNoaXArKykge1xuICAgICAgICAgICAgLy8gZXN0YWJsaXNoIHNoaXAgbGVuZ3RoOlxuICAgICAgICAgICAgbGV0IGNvbXBTaGlwTGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvbXBTaGlwID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSA1O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcCA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gNDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcFNoaXAgPT09IDMpIHtcbiAgICAgICAgICAgICAgICBjb21wU2hpcExlbmd0aCA9IDM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcCA9PT0gNSkge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byB0cmFjayB3aGV0aGVyIHNoaXAgaGFzIGJlZW4gcGxhY2VkOlxuICAgICAgICAgICAgbGV0IHNoaXBQbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlIChzaGlwUGxhY2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBheGlzIGRpcmVjdGlvbi4uLlxuICAgICAgICAgICAgICAgIGxldCBjb21wU2hpcEF4aXM7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgKyAxO1xuICAgICAgICAgICAgICAgIHJhbmRvbSA9PT0gMSA/IGNvbXBTaGlwQXhpcyA9ICd4JyA6IGNvbXBTaGlwQXhpcyA9ICd5JztcbiAgICAgICAgICAgICAgICAvLyBjaG9vc2UgcmFuZG9tIHZhbGlkIHNxdWFyZTpcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWDtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tWTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcFNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMSAtIGNvbXBTaGlwTGVuZ3RoKSkgKyAxO1xuICAgICAgICAgICAgICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDExIC0gY29tcFNoaXBMZW5ndGgpKSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVja0ZvclBsYWNlZFNoaXAoY3VycmVudEdhbWUucGxheWVyVHdvLCBbcmFuZG9tWCwgcmFuZG9tWV0sIGNvbXBTaGlwQXhpcywgY29tcFNoaXBMZW5ndGgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXAoY3VycmVudEdhbWUucGxheWVyVHdvLCBbcmFuZG9tWCwgcmFuZG9tWV0sIGNvbXBTaGlwQXhpcywgY29tcFNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNob29zZVNoaXBQb3NpdGlvbnMoKSB7XG5cbiAgICAgICAgLy8gaGlkZSB0aGUgZW5lbXkgZ3JpZDpcbiAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZCcpO1xuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHRoZSBwbGF5ZXIgYm9hcmQgdGl0bGUgdGV4dCB0byAnY2hvb3NlIHlvdXIgc2hpcHMnOlxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtdGl0bGUtdGV4dFwiPlBMQUNFIFlPVVIgU1FVQVJFUzo8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGlwLWF4aXMtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXMtdGV4dFwiPnRvZ2dsZSBheGlzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXMtb3B0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpcy1vcHRpb24geC1heGlzLW9wdGlvbiBzZWxlY3RlZC1heGlzXCI+WDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXhpcy1vcHRpb24geS1heGlzLW9wdGlvblwiPlk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIC8vIHN0eWxlIHRoZSAnUExBQ0UgWU9VUiBTSElQUycgdGV4dDpcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRUaXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC10aXRsZSAuYm9hcmQtdGl0bGUtdGV4dCcpXG4gICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1wcm9tcHQnKTtcblxuICAgICAgICAvLyBhcHBseSBjdXJzb3IgcG9pbnRlciBzdHlsZSB0byBib2FyZDpcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMuY2xhc3NMaXN0LmFkZCgncG9pbnRlcicpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB2YXJpYWJsZSB0byB0cmFjayBjdXJyZW50IHNoaXAgYXhpcyBjaG9pY2U6XG4gICAgICAgIGxldCBzaGlwQXhpcyA9ICd4JztcblxuICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIHRvIHVwZGF0ZSBheGlzIGNob2ljZTpcbiAgICAgICAgY29uc3QgeEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy54LWF4aXMtb3B0aW9uJyk7XG4gICAgICAgIGNvbnN0IHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueS1heGlzLW9wdGlvbicpO1xuICAgICAgICB4QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2hpcEF4aXMgPSAneCc7XG4gICAgICAgICAgICB5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgICAgIHhCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICB9KTtcbiAgICAgICAgeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBBeGlzID0gJ3knO1xuICAgICAgICAgICAgeEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1heGlzJyk7XG4gICAgICAgICAgICB5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXN0YWJsaXNoIHZhcmlhYmxlIHRvIHRyYWNrIHdoaWNoICMgc2hpcCBpcyBiZWluZyBwbGFjZWQ6XG4gICAgICAgIGxldCBzaGlwTnVtYmVyID0gMTsgLy8gKGdhbWUgd2lsbCBtb3ZlIG9uIGFmdGVyIGFsbCA1IHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQpXG5cbiAgICAgICAgLy8gYWRkIGhvdmVyIGxpc3RlbmVyIHRvIGdhbWVib2FyZDpcbiAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhvdmVyT3ZlclNxdWFyZSk7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGdhbWVib2FyZDpcbiAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tTcXVhcmUpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhvdmVyT3ZlclNxdWFyZShlKSB7XG4gICAgICAgICAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgaG92ZXJlZC1vdmVyIHNxdWFyZTpcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xuICAgICAgICAgICAgY29uc3QgaG92ZXJDb29yZHMgPSBbeCwgeV07XG5cbiAgICAgICAgICAgIGlmIChzaGlwTnVtYmVyID09PSAxICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCA1KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgNSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDIgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCA0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gMyAmJiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSA0ICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAzKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDUgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaG92ZXJlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtob3ZlckNvb3Jkc1swXX0teSR7aG92ZXJDb29yZHNbMV19YCk7XG4gICAgICAgICAgICAgICAgaG92ZXJlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgaG92ZXJlZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaG92ZXJlZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLWhvdmVyJyk7XG4gICAgICAgICAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrU3F1YXJlKGUpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb29yZGluYXRlcyBvZiBjbGlja2VkIHNxdWFyZTpcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnRhcmdldC5kYXRhc2V0Lng7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS50YXJnZXQuZGF0YXNldC55O1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZENvb3JkcyA9IFt4LCB5XTtcblxuICAgICAgICAgICAgaWYgKHNoaXBOdW1iZXIgPT09IDEgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDIgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDQpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDMgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDQgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBzaGlwTnVtYmVyKys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDUgJiYgdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIDIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGNsaWNrIGxpc3RlbmVyIGZvciBwbGFjaW5nIHNoaXBzICYgaG92ZXIgbGlzdGVuZXIgZm9yIHByZXZpZXdpbmcgc2hpcHM6XG4gICAgICAgICAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tTcXVhcmUpO1xuICAgICAgICAgICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3Zlck92ZXJTcXVhcmUpO1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdGl0bGUgdGV4dCAmIHNoaXAgYXhpcyB0b2dnbGU6XG4gICAgICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ3lvdXIgZ3JpZDonXG4gICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgcGxheWVyVHdvIGdhbWVib2FyZDpcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIHRoZSBib2FyZCBhbmQgZ2V0IHRoZSBwbGF5ZXIncyBmaXJzdCBtb3ZlOlxuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAgICAgZ2V0UGxheWVyTW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSB7XG5cbiAgICAgICAgY29uc3QgaG92ZXJlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtob3ZlckNvb3Jkc1swXX0teSR7aG92ZXJDb29yZHNbMV19YCk7XG5cbiAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGhvdmVyQ29vcmRzWzBdKSArIGkpLCBwYXJzZUludChob3ZlckNvb3Jkc1sxXSldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtzcXVhcmVDb29yZHNbMF19LXkke3NxdWFyZUNvb3Jkc1sxXX1gKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmV2aWV3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFtwYXJzZUludChob3ZlckNvb3Jkc1swXSksIChwYXJzZUludChob3ZlckNvb3Jkc1sxXSkgKyBpKV07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLngke3NxdWFyZUNvb3Jkc1swXX0teSR7c3F1YXJlQ29vcmRzWzFdfWApO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXByZXZpZXcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBtb3VzZW91dCBsaXN0ZW5lciB0byByZW1vdmUgc3R5bGluZzpcbiAgICAgICAgaG92ZXJlZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGhvdmVyQ29vcmRzWzBdKSArIGkpLCBwYXJzZUludChob3ZlckNvb3Jkc1sxXSldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7c3F1YXJlQ29vcmRzWzBdfS15JHtzcXVhcmVDb29yZHNbMV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFtwYXJzZUludChob3ZlckNvb3Jkc1swXSksIChwYXJzZUludChob3ZlckNvb3Jkc1sxXSkgKyBpKV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtzcXVhcmVDb29yZHNbMF19LXkke3NxdWFyZUNvb3Jkc1sxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcHJldmlldycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge29uY2U6IHRydWV9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cnlUb1BsYWNlU2hpcChjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuICAgICAgICAvLyBjaGVjayBpZiB2YWxpZCBjb21iaW5hdGlvbiBvZiBjb29yZGluYXRlcywgYXhpcyBkaXJlY3Rpb24sIGFuZCBzaGlwIGxlbmd0aDpcbiAgICAgICAgaWYgKGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBpZiBpdCdzIHZhbGlkLCBwbGFjZSB0aGUgc2hpcCBhbmQgcmV0dXJuIHRydWU6XG4gICAgICAgICAgICBwbGFjZVNoaXAoY3VycmVudEdhbWUucGxheWVyT25lLCBjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG90aGVyd2lzZS4uLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4JyAmJiAoKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pICsgKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSkpID4gMTApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5JyAmJiAoKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pICsgKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSkpID4gMTApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hlY2tGb3JQbGFjZWRTaGlwKGN1cnJlbnRHYW1lLnBsYXllck9uZSwgY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JQbGFjZWRTaGlwKHBsYXllciwgY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIFJFVFVSTlMgVFJVRSBJRiBJVCBGSU5EUyBBIFNISVAgSU4gVEhFIEFUVEVNUFRFRCBQTEFDRU1FTlQgWk9ORTpcbiAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChzaGlwTGVuZ3RoIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZUNvb3JkcyA9IFsocGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSkgKyBpKSwgcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1sxXSldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU3F1YXJlID0gcGxheWVyLmJvYXJkLmZpbmRTcXVhcmUoc3F1YXJlQ29vcmRzWzBdLCBzcXVhcmVDb29yZHNbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFNxdWFyZS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAoc2hpcExlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pKSwgKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pICsgaSldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvYXJkU3F1YXJlID0gcGxheWVyLmJvYXJkLmZpbmRTcXVhcmUoc3F1YXJlQ29vcmRzWzBdLCBzcXVhcmVDb29yZHNbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFNxdWFyZS5zaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm5zIGZhbHNlIGlzIG5vIHNoaXAgaXMgZm91bmQ6XG4gICAgICAgIHJldHVybiBmYWxzZTsgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAocGxheWVyLCBjbGlja2VkQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuICAgICAgICBsZXQgZW5kWDtcbiAgICAgICAgbGV0IGVuZFk7XG4gICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBlbmRYID0gcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSkgKyBwYXJzZUludChzaGlwTGVuZ3RoKSAtIDE7XG4gICAgICAgICAgICBlbmRZID0gcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1sxXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgZW5kWCA9IHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pO1xuICAgICAgICAgICAgZW5kWSA9IHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pICsgcGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHBsYXllci5ib2FyZC5jcmVhdGVTaGlwKFtwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKSwgcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1sxXSldLCBbZW5kWCwgZW5kWV0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlckJvYXJkKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJPbmUgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmU7XG4gICAgICAgIGNvbnN0IHBsYXllclR3byA9IGN1cnJlbnRHYW1lLnBsYXllclR3bztcblxuICAgICAgICBET00ucmVuZGVyU2hpcHMocGxheWVyT25lLCAnLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuXG4gICAgICAgIERPTS5yZW5kZXJIaXRzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgRE9NLnJlbmRlckhpdHMocGxheWVyVHdvLCAnLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuXG4gICAgICAgIERPTS5yZW5kZXJNaXNzZXMocGxheWVyT25lLCAnLnBsYXllci1vbmUtYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICBET00ucmVuZGVyTWlzc2VzKHBsYXllclR3bywgJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQbGF5ZXJNb3ZlKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuXG4gICAgICAgIHBsYXllclR3b1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1wcm9tcHQnKTtcbiAgICAgICAgcGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPSAnQ0hPT1NFIEEgU1FVQVJFIFRPIEFUVEFDSzonO1xuXG4gICAgICAgIHBsYXllclR3b0JvYXJkLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgcGxheWVyVHdvQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VTcXVhcmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNob29zZVNxdWFyZShlKSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRTcXVhcmUgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3QgeENvb3JkID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5Q29vcmQgPSBwYXJzZUludChjbGlja2VkU3F1YXJlLmRhdGFzZXQueSk7XG4gICAgICAgIGF0dGVtcHRBdHRhY2soeENvb3JkLCB5Q29vcmQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dGVtcHRBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCB0YXJnZXRTcXVhcmUgPSBjdXJyZW50R2FtZS5wbGF5ZXJUd28uYm9hcmQuZmluZFNxdWFyZSh4LCB5KTtcblxuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgc3F1YXJlIGhhc24ndCBiZWVuIGF0dGFja2VkIHlldDpcbiAgICAgICAgaWYgKHRhcmdldFNxdWFyZS5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlICdDSE9PU0UgQSBTUVVBUkUnIHN0eWxpbmc6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29UaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29UaXRsZS50ZXh0Q29udGVudCA9ICdlbmVteSBncmlkOic7XG5cbiAgICAgICAgICAgIC8vIHRoZW4gY29tcGxldGUgdGhlIGF0dGFjazpcbiAgICAgICAgICAgIGN1cnJlbnRHYW1lLnBsYXllck9uZS5hdHRhY2soY3VycmVudEdhbWUucGxheWVyVHdvLCBbeCwgeV0pO1xuXG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgdGhlIGJvYXJkIHRvIHNob3cgdGhlIG5ldyBhdHRhY2s6XG4gICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgY2xpY2sgbGlzdGVuZXJzIGZyb20gdGhlIGVuZW15IGJvYXJkOlxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNob29zZVNxdWFyZSk7XG5cbiAgICAgICAgICAgIC8vIGFuZCByZW1vdmUgcG9pbnRlciBzdHlsZSBmcm9tIGVuZW15IGJvYXJkOlxuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gICAgICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgYWxsIHRoZSBlbmVteSdzIHNoaXBzIGhhdmUgc3VuazpcbiAgICAgICAgICAgIGlmIChjdXJyZW50R2FtZS5wbGF5ZXJUd28uYm9hcmQuYWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnRFbmRPZkdhbWUoJ3BsYXllciBvbmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgbm90LCBsZXQgdGhlIHBsYXllciBrbm93IHRoZSBjb21wdXRlciBpcyBnZW5lcmF0aW5nIGFuIGF0dGFjazpcbiAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllck9uZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2F0dGFjay1wcm9tcHQnKTtcbiAgICAgICAgICAgIHBsYXllck9uZVRpdGxlLnRleHRDb250ZW50ID0gJ0FUVEFDSyBJTkNPTUlORyAuIC4gLic7XG5cbiAgICAgICAgICAgIC8vIHRoZW4gcmVjZWl2ZSBhIHJhbmRvbSBhdHRhY2sgb24gcGxheWVyJ3Mgb3duIGJvYXJkOlxuICAgICAgICAgICAgc2V0VGltZW91dChyZWNlaXZlQXR0YWNrLCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soKSB7XG4gICAgICAgIGxldCBhdHRhY2tYO1xuICAgICAgICBsZXQgYXR0YWNrWTtcblxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgc3F1YXJlcyBpbiB0aGUgcXVldWUsIGF0dGFjayB0aGUgZmlyc3Qgb25lOlxuICAgICAgICBpZiAoYXR0YWNrUXVldWUucXVldWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGF0dGFja1F1ZXVlLmdldE5leHRBdHRhY2soKTtcbiAgICAgICAgICAgIGF0dGFja1ggPSBzcXVhcmUueDtcbiAgICAgICAgICAgIGF0dGFja1kgPSBzcXVhcmUueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBnZXQgYSByYW5kb20gc3F1YXJlIHRvIHBvdGVudGlhbGx5IGF0dGFjazpcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCArIDEpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwICsgMSk7XG4gICAgICAgICAgICBjb25zdCByYW5kb21TcXVhcmUgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZShyYW5kb21YLCByYW5kb21ZKTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLCBydW4gdGhlIGZ1bmN0aW9uIGFnYWluOlxuICAgICAgICAgICAgaWYgKHJhbmRvbVNxdWFyZS5hdHRhY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVBdHRhY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGlmIGl0IGhhc24ndCB5ZXQgYmVlbiBhdHRhY2tlZCwgc2V0IHRoZSByYW5kb20gWC9ZIGFzIHRoZSBhdHRhY2sgY29vcmRpbmF0ZXM6XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbVNxdWFyZS5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2tYID0gcmFuZG9tWDtcbiAgICAgICAgICAgICAgICBhdHRhY2tZID0gcmFuZG9tWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSAnQVRUQUNLIElOQ09NSU5HJyBtZXNzYWdlOlxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgIHBsYXllck9uZVRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjay1wcm9tcHQnKTtcbiAgICAgICAgcGxheWVyT25lVGl0bGUudGV4dENvbnRlbnQgPSAneW91ciBncmlkOic7XG5cbiAgICAgICAgLy8gY29tcGxldGUgYXR0YWNrOlxuICAgICAgICBjdXJyZW50R2FtZS5wbGF5ZXJUd28uYXR0YWNrKGN1cnJlbnRHYW1lLnBsYXllck9uZSwgW2F0dGFja1gsIGF0dGFja1ldKTtcblxuICAgICAgICAvLyBpZiBpdCdzIGEgaGl0LCBjaGVjayBhZGphY2VudCBzcXVhcmVzIHRvIGFkZCB0byB0aGUgYXR0YWNrIHF1ZXVlOlxuICAgICAgICBpZiAoY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoYXR0YWNrWCwgYXR0YWNrWSkuc2hpcCBcbiAgICAgICAgICYmIGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKGF0dGFja1gsIGF0dGFja1kpLmF0dGFja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhdHRhY2tRdWV1ZS5jaGVja1NxdWFyZShhdHRhY2tYLCBhdHRhY2tZKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gcmUtcmVuZGVyIHRoZSBib2FyZCB0byBzaG93IHRoZSBuZXcgYXR0YWNrOlxuICAgICAgICByZW5kZXJCb2FyZCgpO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBhbGwgdGhlIHBsYXllcidzIHNoaXBzIGhhdmUgc3VuazpcbiAgICAgICAgaWYgKGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5hbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGFsZXJ0RW5kT2ZHYW1lKCdjb21wdXRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90LCBnZXQgdGhlIHBsYXllcidzIG5leHQgbW92ZTpcbiAgICAgICAgZ2V0UGxheWVyTW92ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGF0dGFja1F1ZXVlID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcXVldWUgPSBbXTtcblxuICAgICAgICBmdW5jdGlvbiBjaGVja1NxdWFyZSh4LCB5KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUFib3ZlID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoeCwgeSArIDEpO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlUmlnaHQgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZSh4ICsgMSwgeSk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVCZWxvdyA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHgsIHkgLSAxKTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZUxlZnQgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZSh4IC0gMSwgeSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcXVhcmVBYm92ZSAmJiBzcXVhcmVBYm92ZS5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHNxdWFyZUFib3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcXVhcmVSaWdodCAmJiBzcXVhcmVSaWdodC5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHNxdWFyZVJpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcXVhcmVCZWxvdyAmJiBzcXVhcmVCZWxvdy5hdHRhY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHNxdWFyZUJlbG93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzcXVhcmVMZWZ0ICYmIHNxdWFyZUxlZnQuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVMZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE5leHRBdHRhY2soKSB7XG4gICAgICAgICAgICByZXR1cm4gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBxdWV1ZSxcbiAgICAgICAgICAgIGNoZWNrU3F1YXJlLFxuICAgICAgICAgICAgZ2V0TmV4dEF0dGFja1xuICAgICAgICB9XG5cbiAgICB9KSgpO1xuXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==