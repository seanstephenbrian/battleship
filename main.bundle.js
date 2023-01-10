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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n    --invalid-hover: #dd1f1fba;\n\n    --favicon: #0b57c1;\n\n    --alert-bg: #d5d5d5ce;\n    --axis-text: #e3e3e3e7;\n    --button-bg: #ffe4c4;\n    --mobile-warning-bg: #89a8d469;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype supports variations\"),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100vw;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    text-align: center;\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: #fa000079 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.mobile-warning {\n    color: #111b29;\n    font-weight: 100;\n    font-size: calc(0.3*var(--rvv));\n    border: 0.5px solid #111b29;\n    padding: 5px;\n    background-color: var(--mobile-warning-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 50px;\n    margin-bottom: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\nheader span {\n    width: calc(0.6*var(--rvv));\n    height: calc(0.6*var(--rvv));\n    margin: 0 5px 5px;\n}\n\nheader span:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n}\n\n.square-effect {\n    border: 2px solid var(--site-green);\n    box-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    margin-bottom: 0;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    color: var(--axis-text);\n    text-align: center;\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: #d16262;\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.invalid-hover {\n    cursor: not-allowed;\n    background-color: var(--invalid-hover);\n}\n\n.board-squares {\n    align-self: center;\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid #ffffffaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, #ff0000 0%, #ff5151 54%, #d67070 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, #676f7a 0%, #344863 54%, #173157 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n.ssbbd {\n    margin-left: 5px;\n    text-decoration: none;\n    color: white;\n}\n\n.ssbbd:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    font-style: italic;\n}\n\n@media screen and (min-width: 600px) {\n    header {\n        height: 8vh;\n        margin-bottom: auto;\n    }\n    header span {\n        margin: 0 2vw 5px;\n    }\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        gap: 3rem;\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n    footer {\n        height: 6vh;\n        justify-content: center;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --font-fallback: 'Helvetica', 'Arial', sans-serif;\n    --rvv: calc(1rem + 1vh + 1vw);\n\n    --site-green: #1aff00;\n\n    --ship-preview: #1aad0aa8;\n    --invalid-hover: #dd1f1fba;\n\n    --favicon: #0b57c1;\n\n    --alert-bg: #d5d5d5ce;\n    --axis-text: #e3e3e3e7;\n    --button-bg: #ffe4c4;\n    --mobile-warning-bg: #89a8d469;\n    --ship-bg: #20334e;\n    --ship-border: 1px solid #89a8d4;\n    --ship-border-radius: 5px;\n    --ship-transform: scale(1);\n}\n\n@font-face {\n    font-family: 'Unbounded';\n    src: url('./fonts/unbounded/unbounded.ttf') format(\"truetype supports variations\"),\n         url('./fonts/unbounded/unbounded.ttf') format(\"truetype-variations\");\n    font-weight: 100 1000;\n}\n\n@keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n@-webkit-keyframes blink {\n    to {\n        visibility: hidden;\n    }\n}\n\n.pointer {\n    cursor: pointer;\n}\n\nhtml,\nbody {\n    box-sizing: border-box;\n    max-width: 100vw;\n    min-height: 100vh;\n}\n\n.hide {\n    display: none !important;\n}\n\nbody {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: rgb(2,0,36);\n    background: linear-gradient(115deg, rgba(2,0,36,1) 0%, rgba(0,71,171,1) 39%, rgba(150,177,194,1) 100%);\n    font-family: 'Unbounded', var(--font-fallback);\n    color: white;\n    overflow-x: hidden;\n}\n\n.overlay {\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.59);\n}\n\n.alert-wrapper {\n    z-index: 2;\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.alert-window {\n    padding: calc(0.5*var(--rvv));\n    width: 70vw;\n    height: 70vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    border: 0.5px solid black;\n    border-radius: 2rem;\n    background-color: var(--alert-bg);\n    color: black;\n}\n\n.alert-title {\n    font-weight: 500;\n}\n\n.new-game-alert,\n.end-of-game-alert {\n    max-height: 40vw;\n}\n\n.new-game-title,\n.end-of-game-title {\n    text-align: center;\n    font-size: calc(0.45*var(--rvv));\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: #fa000079 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.start-button {\n    font-size: calc(0.43*var(--rvv));\n    cursor: pointer;\n    padding: 1rem;\n    border: 0.5px solid black;\n    border-radius: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--button-bg);\n}\n\n.mobile-warning {\n    color: #111b29;\n    font-weight: 100;\n    font-size: calc(0.3*var(--rvv));\n    border: 0.5px solid #111b29;\n    padding: 5px;\n    background-color: var(--mobile-warning-bg);\n}\n\n.button {\n    transition: transform 0.1s ease-in-out;\n}\n\n.button:hover {\n    transform: scale(1.1);\n}\n\nheader {\n    font-size: calc(0.6*var(--rvv));\n    height: 50px;\n    margin-bottom: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\nheader span {\n    width: calc(0.6*var(--rvv));\n    height: calc(0.6*var(--rvv));\n    margin: 0 5px 5px;\n}\n\nheader span:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n}\n\n.square-effect {\n    border: 2px solid var(--site-green);\n    box-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    margin-bottom: 0;\n}\n\n.gameboards {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8vw;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    gap: 2vw;\n}\n\n.board-title {\n    font-weight: 400;\n    font-size: calc(0.4*var(--rvv));\n}\n\n.attack-prompt {\n    letter-spacing: 1.5px;\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    animation: blink 1s steps(5, start) infinite;\n    -webkit-animation: blink 1s steps(5, start) infinite;\n}\n\n.player-one-board-title {\n    display: flex;\n}\n\n.board-title-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n\n.ship-axis-toggle {\n    font-size: 80%;\n    color: black;\n    border-radius: 7px;\n    padding: 6px;\n    margin-left: auto;\n    letter-spacing: 1.5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template-areas: \n        \"axis-text axis-text\"\n        \"axis-options axis-options\";\n}\n\n.axis-text {\n    color: var(--axis-text);\n    text-align: center;\n    grid-area: axis-text;\n}\n\n.axis-options {\n    grid-area: axis-options;\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n}\n\n.axis-option {\n    font-weight: 500;\n    color: #d16262;\n    cursor: pointer;\n    text-shadow: none;\n    width: calc(0.5*var(--rvv));\n    height: calc(0.5*var(--rvv));\n    padding: 3px;\n    border: 1px solid transparent;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-indent: 8%;\n    transition: transform 0.1s ease-in-out;\n}\n\n.x-axis-option {\n    grid-area: x-axis;\n}\n\n.y-axis-option {\n    grid-area: y-axis;\n}\n\n.selected-axis {\n    transform: scale(1.2);\n    color: #129303;\n    background: var(--alert-bg);\n}\n\n.ship-preview {\n    background-color: var(--ship-preview);\n}\n\n.invalid-hover {\n    cursor: not-allowed;\n    background-color: var(--invalid-hover);\n}\n\n.board-squares {\n    align-self: center;\n    display: grid;\n    width: 60vw;\n    height: 60vw;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n}\n\n.game-square {\n    border: 1px solid #ffffffaa;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 7px;\n}\n\n.hit-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    background: rgb(255,0,0);\n    background: linear-gradient(149deg, #ff0000 0%, #ff5151 54%, #d67070 100%);\n}\n\n.miss-marker {\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    border: 0.5px solid rgb(190, 190, 190);\n    background: rgb(103,111,122);\n    background: linear-gradient(149deg, #676f7a 0%, #344863 54%, #173157 100%);\n    transform: var(--ship-transform);\n}\n\n.x-1 {\n    border-left: none;\n}\n\n.y-10 {\n    border-top: none;\n}\n\n.x-10 {\n    border-right: none;\n}\n\n.y-1 {\n    border-bottom: none;\n}\n\nfooter {\n    margin-top: auto;\n    height: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: calc(0.35*var(--rvv));\n    font-weight: 100;\n}\n\n.ssbbd {\n    margin-left: 5px;\n    text-decoration: none;\n    color: white;\n}\n\n.ssbbd:hover {\n    color: var(--site-green);\n    text-shadow: rgba(250, 0, 0, 0.475) 2px 2px;\n    font-style: italic;\n}\n\n@media screen and (min-width: 600px) {\n    header {\n        height: 8vh;\n        margin-bottom: auto;\n    }\n    header span {\n        margin: 0 2vw 5px;\n    }\n    .axis-option:hover:not(.selected-axis) {\n        transform: scale(1.2);\n    }\n    .gameboards {\n        flex-direction: row;\n    }\n    .board-squares {\n        width: 35vw;\n        height: 35vw;\n    }\n    .alert-window {\n        gap: 3rem;\n        min-width: 300px;\n        min-height: 300px;\n        max-width: 25vw;\n        max-height: 25vw;\n    }\n    .new-game-alert,\n    .end-of-game-alert {\n        max-height: 15vw;\n    }\n    footer {\n        height: 6vh;\n        justify-content: center;\n    }\n}"],"sourceRoot":""}]);
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
        footer.innerHTML = `copyright © ${year} <a href="https://seanstephenbrian.github.io/ssbbd/" class="ssbbd" target="ssbbd" rel=”noopener”>ssbbd</a>`;
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

            if (window.innerWidth < 600) {
                const mobileWarning = document.createElement('div');
                mobileWarning.classList.add('mobile-warning');
                mobileWarning.innerHTML = `for optimal game performance, <br>please use a desktop browser`;
                alert.appendChild(mobileWarning);
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEs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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLOztBQUVMLENBQUMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9kb20tbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvc3F1YXJlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLWNvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWZhbGxiYWNrOiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuICAgIC0tc2l0ZS1ncmVlbjogIzFhZmYwMDtcXG5cXG4gICAgLS1zaGlwLXByZXZpZXc6ICMxYWFkMGFhODtcXG4gICAgLS1pbnZhbGlkLWhvdmVyOiAjZGQxZjFmYmE7XFxuXFxuICAgIC0tZmF2aWNvbjogIzBiNTdjMTtcXG5cXG4gICAgLS1hbGVydC1iZzogI2Q1ZDVkNWNlO1xcbiAgICAtLWF4aXMtdGV4dDogI2UzZTNlM2U3O1xcbiAgICAtLWJ1dHRvbi1iZzogI2ZmZTRjNDtcXG4gICAgLS1tb2JpbGUtd2FybmluZy1iZzogIzg5YThkNDY5O1xcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGUgc3VwcG9ydHMgdmFyaWF0aW9uc1xcXCIpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZS12YXJpYXRpb25zXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgMTAwMDtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xcbiAgICB0byB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIH1cXG59XFxuXFxuLnBvaW50ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDAsNzEsMTcxLDEpIDM5JSwgcmdiYSgxNTAsMTc3LDE5NCwxKSAxMDAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdVbmJvdW5kZWQnLCB2YXIoLS1mb250LWZhbGxiYWNrKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41OSk7XFxufVxcblxcbi5hbGVydC13cmFwcGVyIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWxlcnQtd2luZG93IHtcXG4gICAgcGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHdpZHRoOiA3MHZ3O1xcbiAgICBoZWlnaHQ6IDcwdnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsZXJ0LWJnKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWxlcnQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubmV3LWdhbWUtYWxlcnQsXFxuLmVuZC1vZi1nYW1lLWFsZXJ0IHtcXG4gICAgbWF4LWhlaWdodDogNDB2dztcXG59XFxuXFxuLm5ldy1nYW1lLXRpdGxlLFxcbi5lbmQtb2YtZ2FtZS10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogI2ZhMDAwMDc5IDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNDMqdmFyKC0tcnZ2KSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XFxufVxcblxcbi5tb2JpbGUtd2FybmluZyB7XFxuICAgIGNvbG9yOiAjMTExYjI5O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICMxMTFiMjk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9iaWxlLXdhcm5pbmctYmcpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHNwYW4ge1xcbiAgICB3aWR0aDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuICAgIG1hcmdpbjogMCA1cHggNXB4O1xcbn1cXG5cXG5oZWFkZXIgc3Bhbjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG59XFxuXFxuLnNxdWFyZS1lZmZlY3Qge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDh2dztcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZ3O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYXR0YWNrLXByb21wdCB7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbiAgICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDFzIHN0ZXBzKDUsIHN0YXJ0KSBpbmZpbml0ZTtcXG59XFxuXFxuLnBsYXllci1vbmUtYm9hcmQtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm9hcmQtdGl0bGUtdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zaGlwLWF4aXMtdG9nZ2xlIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJheGlzLXRleHQgYXhpcy10ZXh0XFxcIlxcbiAgICAgICAgXFxcImF4aXMtb3B0aW9ucyBheGlzLW9wdGlvbnNcXFwiO1xcbn1cXG5cXG4uYXhpcy10ZXh0IHtcXG4gICAgY29sb3I6IHZhcigtLWF4aXMtdGV4dCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBheGlzLXRleHQ7XFxufVxcblxcbi5heGlzLW9wdGlvbnMge1xcbiAgICBncmlkLWFyZWE6IGF4aXMtb3B0aW9ucztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYXhpcy1vcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogI2QxNjI2MjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgd2lkdGg6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBoZWlnaHQ6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWluZGVudDogOCU7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ueC1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeC1heGlzO1xcbn1cXG5cXG4ueS1heGlzLW9wdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogeS1heGlzO1xcbn1cXG5cXG4uc2VsZWN0ZWQtYXhpcyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6ICMxMjkzMDM7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFsZXJ0LWJnKTtcXG59XFxuXFxuLnNoaXAtcHJldmlldyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtcHJldmlldyk7XFxufVxcblxcbi5pbnZhbGlkLWhvdmVyIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW52YWxpZC1ob3Zlcik7XFxufVxcblxcbi5ib2FyZC1zcXVhcmVzIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5nYW1lLXNxdWFyZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmZhYTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogN3B4O1xcbn1cXG5cXG4uaGl0LW1hcmtlciB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMCwwKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OWRlZywgI2ZmMDAwMCAwJSwgI2ZmNTE1MSA1NCUsICNkNjcwNzAgMTAwJSk7XFxufVxcblxcbi5taXNzLW1hcmtlciB7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTAzLDExMSwxMjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCAjNjc2ZjdhIDAlLCAjMzQ0ODYzIDU0JSwgIzE3MzE1NyAxMDAlKTtcXG4gICAgdHJhbnNmb3JtOiB2YXIoLS1zaGlwLXRyYW5zZm9ybSk7XFxufVxcblxcbi54LTEge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG59XFxuXFxuLnktMTAge1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4ueC0xMCB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXFxuLnktMSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuMzUqdmFyKC0tcnZ2KSk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi5zc2JiZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc3NiYmQ6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4gICAgaGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogOHZoO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gICAgfVxcbiAgICBoZWFkZXIgc3BhbiB7XFxuICAgICAgICBtYXJnaW46IDAgMnZ3IDVweDtcXG4gICAgfVxcbiAgICAuYXhpcy1vcHRpb246aG92ZXI6bm90KC5zZWxlY3RlZC1heGlzKSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIH1cXG4gICAgLmdhbWVib2FyZHMge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgfVxcbiAgICAuYm9hcmQtc3F1YXJlcyB7XFxuICAgICAgICB3aWR0aDogMzV2dztcXG4gICAgICAgIGhlaWdodDogMzV2dztcXG4gICAgfVxcbiAgICAuYWxlcnQtd2luZG93IHtcXG4gICAgICAgIGdhcDogM3JlbTtcXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICAgIG1heC1oZWlnaHQ6IDI1dnc7XFxuICAgIH1cXG4gICAgLm5ldy1nYW1lLWFsZXJ0LFxcbiAgICAuZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMTV2dztcXG4gICAgfVxcbiAgICBmb290ZXIge1xcbiAgICAgICAgaGVpZ2h0OiA2dmg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1Qs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QTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkNBQTJDO0lBQzNDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7SUFDQTs7UUFFSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCx1QkFBdUI7SUFDM0I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1mb250LWZhbGxiYWNrOiAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuICAgIC0tc2l0ZS1ncmVlbjogIzFhZmYwMDtcXG5cXG4gICAgLS1zaGlwLXByZXZpZXc6ICMxYWFkMGFhODtcXG4gICAgLS1pbnZhbGlkLWhvdmVyOiAjZGQxZjFmYmE7XFxuXFxuICAgIC0tZmF2aWNvbjogIzBiNTdjMTtcXG5cXG4gICAgLS1hbGVydC1iZzogI2Q1ZDVkNWNlO1xcbiAgICAtLWF4aXMtdGV4dDogI2UzZTNlM2U3O1xcbiAgICAtLWJ1dHRvbi1iZzogI2ZmZTRjNDtcXG4gICAgLS1tb2JpbGUtd2FybmluZy1iZzogIzg5YThkNDY5O1xcbiAgICAtLXNoaXAtYmc6ICMyMDMzNGU7XFxuICAgIC0tc2hpcC1ib3JkZXI6IDFweCBzb2xpZCAjODlhOGQ0O1xcbiAgICAtLXNoaXAtYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAtLXNoaXAtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVW5ib3VuZGVkJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlIHN1cHBvcnRzIHZhcmlhdGlvbnNcXFwiKSxcXG4gICAgICAgICB1cmwoJy4vZm9udHMvdW5ib3VuZGVkL3VuYm91bmRlZC50dGYnKSBmb3JtYXQoXFxcInRydWV0eXBlLXZhcmlhdGlvbnNcXFwiKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAxMDAwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gICAgdG8ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XFxuICAgIHRvIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgfVxcbn1cXG5cXG4ucG9pbnRlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwwLDM2KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoMCw3MSwxNzEsMSkgMzklLCByZ2JhKDE1MCwxNzcsMTk0LDEpIDEwMCUpO1xcbiAgICBmb250LWZhbWlseTogJ1VuYm91bmRlZCcsIHZhcigtLWZvbnQtZmFsbGJhY2spO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU5KTtcXG59XFxuXFxuLmFsZXJ0LXdyYXBwZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hbGVydC13aW5kb3cge1xcbiAgICBwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2dztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnQtYmcpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hbGVydC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5uZXctZ2FtZS1hbGVydCxcXG4uZW5kLW9mLWdhbWUtYWxlcnQge1xcbiAgICBtYXgtaGVpZ2h0OiA0MHZ3O1xcbn1cXG5cXG4ubmV3LWdhbWUtdGl0bGUsXFxuLmVuZC1vZi1nYW1lLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiAjZmEwMDAwNzkgMnB4IDJweDtcXG4gICAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XFxufVxcblxcbi5zdGFydC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IGNhbGMoMC40Myp2YXIoLS1ydnYpKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcXG59XFxuXFxuLm1vYmlsZS13YXJuaW5nIHtcXG4gICAgY29sb3I6ICMxMTFiMjk7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzExMWIyOTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb2JpbGUtd2FybmluZy1iZyk7XFxufVxcblxcbi5idXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgc3BhbiB7XFxuICAgIHdpZHRoOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG4gICAgaGVpZ2h0OiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG4gICAgbWFyZ2luOiAwIDVweCA1cHg7XFxufVxcblxcbmhlYWRlciBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICB0ZXh0LXNoYWRvdzogcmdiYSgyNTAsIDAsIDAsIDAuNDc1KSAycHggMnB4O1xcbn1cXG5cXG4uc3F1YXJlLWVmZmVjdCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpdGUtZ3JlZW4pO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5nYW1lYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHZ3O1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydnc7XFxufVxcblxcbi5ib2FyZC10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygwLjQqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hdHRhY2stcHJvbXB0IHtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tc2l0ZS1ncmVlbik7XFxuICAgIHRleHQtc2hhZG93OiByZ2JhKDI1MCwgMCwgMCwgMC40NzUpIDJweCAycHg7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xcbn1cXG5cXG4ucGxheWVyLW9uZS1ib2FyZC10aXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5ib2FyZC10aXRsZS10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLnNoaXAtYXhpcy10b2dnbGUge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcImF4aXMtdGV4dCBheGlzLXRleHRcXFwiXFxuICAgICAgICBcXFwiYXhpcy1vcHRpb25zIGF4aXMtb3B0aW9uc1xcXCI7XFxufVxcblxcbi5heGlzLXRleHQge1xcbiAgICBjb2xvcjogdmFyKC0tYXhpcy10ZXh0KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBncmlkLWFyZWE6IGF4aXMtdGV4dDtcXG59XFxuXFxuLmF4aXMtb3B0aW9ucyB7XFxuICAgIGdyaWQtYXJlYTogYXhpcy1vcHRpb25zO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5heGlzLW9wdGlvbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiAjZDE2MjYyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICB3aWR0aDogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIGhlaWdodDogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtaW5kZW50OiA4JTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi54LWF4aXMtb3B0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiB4LWF4aXM7XFxufVxcblxcbi55LWF4aXMtb3B0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiB5LWF4aXM7XFxufVxcblxcbi5zZWxlY3RlZC1heGlzIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjb2xvcjogIzEyOTMwMztcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWxlcnQtYmcpO1xcbn1cXG5cXG4uc2hpcC1wcmV2aWV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1wcmV2aWV3KTtcXG59XFxuXFxuLmludmFsaWQtaG92ZXIge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnZhbGlkLWhvdmVyKTtcXG59XFxuXFxuLmJvYXJkLXNxdWFyZXMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICBoZWlnaHQ6IDYwdnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmdhbWUtc3F1YXJlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZmFhO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxufVxcblxcbi5oaXQtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwwLDApO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ5ZGVnLCAjZmYwMDAwIDAlLCAjZmY1MTUxIDU0JSwgI2Q2NzA3MCAxMDAlKTtcXG59XFxuXFxuLm1pc3MtbWFya2VyIHtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2IoMTkwLCAxOTAsIDE5MCk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigxMDMsMTExLDEyMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDlkZWcsICM2NzZmN2EgMCUsICMzNDQ4NjMgNTQlLCAjMTczMTU3IDEwMCUpO1xcbiAgICB0cmFuc2Zvcm06IHZhcigtLXNoaXAtdHJhbnNmb3JtKTtcXG59XFxuXFxuLngtMSB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbn1cXG5cXG4ueS0xMCB7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbi54LTEwIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbn1cXG5cXG4ueS0xIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoMC4zNSp2YXIoLS1ydnYpKTtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLnNzYmJkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zc2JiZDpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1zaXRlLWdyZWVuKTtcXG4gICAgdGV4dC1zaGFkb3c6IHJnYmEoMjUwLCAwLCAwLCAwLjQ3NSkgMnB4IDJweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xcbiAgICBoZWFkZXIge1xcbiAgICAgICAgaGVpZ2h0OiA4dmg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICB9XFxuICAgIGhlYWRlciBzcGFuIHtcXG4gICAgICAgIG1hcmdpbjogMCAydncgNXB4O1xcbiAgICB9XFxuICAgIC5heGlzLW9wdGlvbjpob3Zlcjpub3QoLnNlbGVjdGVkLWF4aXMpIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICAuZ2FtZWJvYXJkcyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB9XFxuICAgIC5ib2FyZC1zcXVhcmVzIHtcXG4gICAgICAgIHdpZHRoOiAzNXZ3O1xcbiAgICAgICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICB9XFxuICAgIC5hbGVydC13aW5kb3cge1xcbiAgICAgICAgZ2FwOiAzcmVtO1xcbiAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgICAgICAgbWF4LWhlaWdodDogMjV2dztcXG4gICAgfVxcbiAgICAubmV3LWdhbWUtYWxlcnQsXFxuICAgIC5lbmQtb2YtZ2FtZS1hbGVydCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAxNXZ3O1xcbiAgICB9XFxuICAgIGZvb3RlciB7XFxuICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET00gPSAoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5iPC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+YTwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPnQ8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj50PC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+bDwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPmU8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5zPC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+cTwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPnU8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5hPC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+cjwvc3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPmU8L3NwYW4gY2xhc3M9XCJoZWFkZXItbGV0dGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRlci1sZXR0ZXJcIj5zPC9zcGFuIGNsYXNzPVwiaGVhZGVyLWxldHRlclwiPmA7XG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lcnMgdG8gZWFjaCA8c3Bhbj4gZm9yIGRlc2t0b3AgaG92ZXIgZWZmZWN0OlxuICAgICAgICBjb25zdCBsZXR0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1sZXR0ZXInKTtcbiAgICAgICAgbGV0dGVycy5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZXR0ZXJJdHNlbGYgPSBsZXR0ZXIudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDYwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZS1lZmZlY3QnLCAnc3BpbicpO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSBnZW5lcmF0ZVJhbmRvbVNpdGVDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib3hTaGFkb3dDb2xvciA9IGdlbmVyYXRlUmFuZG9tU2l0ZUNvbG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5zdHlsZS5ib3hTaGFkb3cgPSBgJHtib3hTaGFkb3dDb2xvcn0gMnB4IDJweGA7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZW5lcmF0ZVJhbmRvbVNpdGVDb2xvcigpO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbVJvdGF0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNzIxIC0gMzYwKTsgLy8gcmFuZG9tICMgb2YgZGVncmVlcyBiZXR3ZWVuIC0zNjAgYW5kIDM2MFxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JhbmRvbVJvdGF0aW9ufWRlZylgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXIudGV4dENvbnRlbnQgPSBsZXR0ZXJJdHNlbGY7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5jbGFzc0xpc3QucmVtb3ZlKCdzcXVhcmUtZWZmZWN0JywgJ3NwaW4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnN0eWxlLmJvcmRlckNvbG9yID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci5zdHlsZS5ib3hTaGFkb3cgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TaXRlQ29sb3IoKSB7XG4gICAgICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICAgICAgICcjMWFmZjAwJywgXG4gICAgICAgICAgICAnIzFhYWQwYWE4JywgXG4gICAgICAgICAgICAnI2RkMWYxZmJhJywgXG4gICAgICAgICAgICAnIzBiNTdjMScsIFxuICAgICAgICAgICAgJyNkNWQ1ZDVjZScsIFxuICAgICAgICAgICAgJyM4OWE4ZDQnLCBcbiAgICAgICAgICAgICcjMDA0N2FiJywgXG4gICAgICAgICAgICAnIzk2YjFjMicsIFxuICAgICAgICAgICAgJyNmYTAwMDA3OScsIFxuICAgICAgICAgICAgJyNkMTYyNjInLFxuICAgICAgICAgICAgJyMxMjkzMDMnLFxuICAgICAgICAgICAgJyNmZmZmZmZhYScsXG4gICAgICAgICAgICAnI2ZmMDAwMCcsXG4gICAgICAgICAgICAnI2ZmNTE1MScsXG4gICAgICAgICAgICAnI2Q2NzA3MCcsXG4gICAgICAgICAgICAnIzY3NmY3YScsXG4gICAgICAgICAgICAnIzM0NDg2MycsXG4gICAgICAgICAgICAnIzE3MzE1NydcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY29sb3JzLmxlbmd0aCkpICsgMTtcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tyYW5kb21JbmRleF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2FtZWJvYXJkc0NvbnRhaW5lcigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGdhbWVib2FyZHMpO1xuICAgICAgICBnYW1lYm9hcmRzLmNsYXNzTGlzdC5hZGQoJ2dhbWVib2FyZHMnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmRzKCkge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZHMnKTtcblxuICAgICAgICBjb25zdCBwbGF5ZXJPbmVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGF5ZXJPbmVCb2FyZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkJywgJ2dhbWVib2FyZCcpO1xuICAgICAgICBnYW1lYm9hcmRzLmFwcGVuZENoaWxkKHBsYXllck9uZUJvYXJkKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItb25lLWJvYXJkLXRpdGxlJywgJ2JvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlLnRleHRDb250ZW50ID0gJ3lvdXIgZ3JpZDonO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyT25lQm9hcmRUaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1vbmUtYm9hcmQtc3F1YXJlcycsICdib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJPbmVCb2FyZFNxdWFyZXMpO1xuXG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBsYXllclR3b0JvYXJkLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tYm9hcmQnLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgIGdhbWVib2FyZHMuYXBwZW5kQ2hpbGQocGxheWVyVHdvQm9hcmQpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3BsYXllci10d28tYm9hcmQtdGl0bGUnLCAnYm9hcmQtdGl0bGUnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkVGl0bGUudGV4dENvbnRlbnQgPSAnZW5lbXkgZ3JpZDonXG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJUd29Cb2FyZFRpdGxlKTtcblxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvQm9hcmRTcXVhcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwbGF5ZXJUd29Cb2FyZFNxdWFyZXMuY2xhc3NMaXN0LmFkZCgncGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJywgJ2JvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLmFwcGVuZENoaWxkKHBsYXllclR3b0JvYXJkU3F1YXJlcyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmRHcmlkcygpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIGdhbWVib2FyZHMuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMTA7IHkgPj0gMTsgeS0tKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuY2xhc3NMaXN0LmFkZChgZ2FtZS1zcXVhcmVgLCBgeC0ke3h9YCwgYHktJHt5fWAsIGB4JHt4fS15JHt5fWApO1xuICAgICAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVTcXVhcmUuZGF0YXNldC55ID0geTtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZVNxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gYGNvcHlyaWdodCDCqSAke3llYXJ9IDxhIGhyZWY9XCJodHRwczovL3NlYW5zdGVwaGVuYnJpYW4uZ2l0aHViLmlvL3NzYmJkL1wiIGNsYXNzPVwic3NiYmRcIiB0YXJnZXQ9XCJzc2JiZFwiIHJlbD3igJ1ub29wZW5lcuKAnT5zc2JiZDwvYT5gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKSB7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93T3ZlcmxheSgpIHtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBhbGVydFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxlcnRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXdyYXBwZXInKTtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChhbGVydFdyYXBwZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBhbGVydFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWxlcnRXaW5kb3cuY2xhc3NMaXN0LmFkZCgnYWxlcnQtd2luZG93Jyk7XG4gICAgICAgICAgICBhbGVydFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWxlcnRXaW5kb3cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUFsZXJ0KCkge1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13cmFwcGVyJyk7XG4gICAgICAgIGFsZXJ0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgICAgICBjcmVhdGVHYW1lYm9hcmRzQ29udGFpbmVyKCk7XG4gICAgICAgIGNyZWF0ZUdhbWVib2FyZHMoKTtcbiAgICAgICAgY3JlYXRlQm9hcmRHcmlkcygpO1xuICAgICAgICBjcmVhdGVGb290ZXIoKTtcbiAgICAgICAgY3JlYXRlT3ZlcmxheSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclNoaXBzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke3NoaXAuc3RhcnRpbmdTcXVhcmVbMF0gKyBpfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGB2YXIoLS1zaGlwLWJnKWA7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUudHJhbnNmb3JtID0gYHZhcigtLXNoaXAtdHJhbnNmb3JtKWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJhZGl1cyA9IGB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIDAgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCB2YXIoLS1zaGlwLWJvcmRlci1yYWRpdXMpIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgMGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSaWdodCA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyVG9wID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclJpZ2h0ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyTGVmdCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzBdfS15JHtzaGlwLnN0YXJ0aW5nU3F1YXJlWzFdICsgaX1gKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgdmFyKC0tc2hpcC1iZylgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlciA9IGB2YXIoLS1zaGlwLWJvcmRlcilgO1xuICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLnRyYW5zZm9ybSA9IGB2YXIoLS1zaGlwLXRyYW5zZm9ybSlgO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgMCAwIHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlckxlZnQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmFkaXVzID0gYHZhcigtLXNoaXAtYm9yZGVyLXJhZGl1cykgdmFyKC0tc2hpcC1ib3JkZXItcmFkaXVzKSAwIDBgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJUb3AgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwU3F1YXJlLnN0eWxlLmJvcmRlclRvcCA9IGBub25lYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyUmlnaHQgPSBgdmFyKC0tc2hpcC1ib3JkZXIpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTcXVhcmUuc3R5bGUuYm9yZGVyQm90dG9tID0gYG5vbmVgO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNxdWFyZS5zdHlsZS5ib3JkZXJMZWZ0ID0gYHZhcigtLXNoaXAtYm9yZGVyKWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJIaXRzKHBsYXllciwgYm9hcmRTZWxlY3Rvcikge1xuICAgICAgICBwbGF5ZXIuYm9hcmQuc2hvd0hpdHMoKS5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke2JvYXJkU2VsZWN0b3J9IC54JHtoaXRbMF19LXkke2hpdFsxXX1gKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IGhpdE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGl0TWFya2VyLmNsYXNzTGlzdC5hZGQoJ2hpdC1tYXJrZXInKTtcbiAgICAgICAgICAgIGhpdFNxdWFyZS5hcHBlbmRDaGlsZChoaXRNYXJrZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJNaXNzZXMocGxheWVyLCBib2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5zaG93TWlzc2VzKCkuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1pc3NlZFNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7Ym9hcmRTZWxlY3Rvcn0gLngke21pc3NbMF19LXkke21pc3NbMV19YCk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBjb25zdCBtaXNzTWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBtaXNzTWFya2VyLmNsYXNzTGlzdC5hZGQoJ21pc3MtbWFya2VyJyk7XG4gICAgICAgICAgICBtaXNzZWRTcXVhcmUuYXBwZW5kQ2hpbGQobWlzc01hcmtlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhpZGVPdmVybGF5LFxuICAgICAgICBzaG93T3ZlcmxheSxcbiAgICAgICAgY3JlYXRlQWxlcnQsXG4gICAgICAgIGRlbGV0ZUFsZXJ0LFxuICAgICAgICBpbml0aWFsaXplLFxuICAgICAgICByZW5kZXJTaGlwcyxcbiAgICAgICAgcmVuZGVySGl0cyxcbiAgICAgICAgcmVuZGVyTWlzc2VzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBET007IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSB0d28gbmV3IHBsYXllcnM6XG4gICAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKCk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKCk7XG4gICAgLy8gKHRoZXNlIHBsYXllcnMnIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgYXQgdGhlIHNhbWUgc2FtcGxlIGNvb3JkaW5hdGVzIGZvciB0ZXN0aW5nIHB1cnBvc2VzKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyT25lLFxuICAgICAgICBwbGF5ZXJUd29cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zcXVhcmUuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuXG4gICAgLy8gaW5pdGlhbGl6ZSBlbXB0eSBhcnJheSB0byBob2xkIHJlZmVyZW5jZXMgdG8gYWxsIGJvYXJkIHNxdWFyZXM6XG4gICAgbGV0IGdhbWVTcXVhcmVzID0gW107XG5cbiAgICAvLyBpbml0aWFsaXplIGVtcHR5IGFycmF5IHRvIGhvbGQgcmVmZXJlbmNlcyB0byBhbGwgY3JlYXRlZCBzaGlwczpcbiAgICBsZXQgc2hpcHMgPSBbXTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIHRoZSBzdWNjZXNzZnVsIGhpdHM6XG4gICAgY29uc3QgaGl0cyA9IG5ldyBTZXQoKTtcblxuICAgIC8vIGluaXRpYWxpemUgZW1wdHkgc2V0IHRvIHRyYWNrIG1pc3NlczpcbiAgICBjb25zdCBtaXNzZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAvLyBjcmVhdGUgMTB4MTAgZ3JpZDpcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IDEwOyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NxdWFyZSA9IFNxdWFyZSh4LCB5KTtcbiAgICAgICAgICAgIGdhbWVTcXVhcmVzLnB1c2gobmV3U3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybiBhIHJlZmVyZW5jZSB0byBhIGdhbWVib2FyZCBzcXVhcmUgYmFzZWQgb24gaXRzIHggJiB5IGNvb3JkaW5hdGVzOlxuICAgIGZ1bmN0aW9uIGZpbmRTcXVhcmUoeCwgeSkge1xuICAgICAgICBsZXQgdGFyZ2V0U3F1YXJlO1xuICAgICAgICBnYW1lU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3F1YXJlLnggPT09IHggJiYgc3F1YXJlLnkgPT09IHkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0U3F1YXJlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSBhIHNoaXAgb2YgdGhlIGFwcHJvcHJpYXRlIGxlbmd0aCBnaXZlbiBpdHMgc3RhcnRpbmcgJiBlbmRpbmcgY29vcmRpbmF0ZXM6XG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcChbeCwgeV0sIFt4MiwgeTJdKSB7XG4gICAgICAgIGxldCBsZW5ndGg7XG4gICAgICAgIC8vIGlmIHggY29vcmRpbmF0ZXMgYXJlIHRoZSBzYW1lLCBzZXQgbGVuZ3RoIHRvIGRpZmZlcmVuY2UgYmV0d2VlbiB5IGNvb3JkaW5hdGVzOlxuICAgICAgICBpZiAoeCA9PT0geDIpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGguYWJzKHkgLSB5MikgKyAxO1xuICAgICAgICAvLyBpZiB5IGNvb3JkcyBhcmUgdGhlIHNhbWUsIHNldCBsZW5ndGggdG8gZGlmZmVyZW5jZSBiZXR3ZWVuIHggY29vcmRzOlxuICAgICAgICB9IGVsc2UgaWYgKHkgPT09IHkyKSB7XG4gICAgICAgICAgICBsZW5ndGggPSBNYXRoLmFicyh4IC0geDIpICsgMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBTaGlwKGxlbmd0aCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGdhbWVib2FyZCBzcXVhcmVzIHRvIHJlZmVyZW5jZSB0aGUgc2hpcDpcbiAgICAgICAgaWYgKHggPT09IHgyICYmIHkgPCB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5XTtcbiAgICAgICAgICAgIG5ld1NoaXAub3JpZW50YXRpb24gPSAneSc7XG4gICAgICAgICAgICBmb3IgKGxldCB6ID0geTsgeiA8PSB5MjsgeisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGZpbmRTcXVhcmUoeCwgeik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNoaXAgPSBuZXdTaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHggPT09IHgyICYmIHkgPiB5Mikge1xuICAgICAgICAgICAgbmV3U2hpcC5zdGFydGluZ1NxdWFyZSA9IFt4LCB5Ml07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3knO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHkyOyB6IDw9IHk7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHopO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4IDwgeDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeCwgeV07XG4gICAgICAgICAgICBuZXdTaGlwLm9yaWVudGF0aW9uID0gJ3gnO1xuICAgICAgICAgICAgZm9yIChsZXQgeiA9IHg7IHogPD0geDI7IHorKykge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBmaW5kU3F1YXJlKHosIHkpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh5ID09PSB5MiAmJiB4ID4geDIpIHtcbiAgICAgICAgICAgIG5ld1NoaXAuc3RhcnRpbmdTcXVhcmUgPSBbeDIsIHldO1xuICAgICAgICAgICAgbmV3U2hpcC5vcmllbnRhdGlvbiA9ICd4JztcbiAgICAgICAgICAgIGZvciAobGV0IHogPSB4MjsgeiA8PSB4OyB6KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZmluZFNxdWFyZSh6LCB5KTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgc2hpcCB0byBzaGlwcyBhcnJheTpcbiAgICAgICAgc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgYXR0YWNrZWRTcXVhcmUgPSBmaW5kU3F1YXJlKHgsIHkpO1xuXG4gICAgICAgIC8vIGlmIHNxdWFyZSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFja2VkLCBzaW1wbHkgcmV0dXJuOlxuICAgICAgICBpZiAoaGl0cy5oYXMoYXR0YWNrZWRTcXVhcmUpIHx8IG1pc3Nlcy5oYXMoYXR0YWNrZWRTcXVhcmUpKSByZXR1cm47XG5cbiAgICAgICAgLy8gbWFyayB0aGUgc3F1YXJlIGFzIGhhdmluZyBiZWVuIGF0dGFja2VkOlxuICAgICAgICBhdHRhY2tlZFNxdWFyZS5hdHRhY2tlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBpZiB0aGUgYXR0YWNrZWQgc3F1YXJlIGhhcyBhIHNoaXAsIGFkZCBhICdoaXQnIHRvIHRoYXQgc2hpcDpcbiAgICAgICAgaWYgKGF0dGFja2VkU3F1YXJlLnNoaXApIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICAvLyB0aGVuIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnaGl0cycgc2V0OlxuICAgICAgICAgICAgaGl0cy5hZGQoYXR0YWNrZWRTcXVhcmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGFkZCB0aGUgc3F1YXJlIHRvIHRoZSAnbWlzc2VzJyBzZXQ6XG4gICAgICAgICAgICBtaXNzZXMuYWRkKGF0dGFja2VkU3F1YXJlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFsbFN1bmsoKSB7XG4gICAgICAgIGlmIChoaXRzLnNpemUgPT09IDE3KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGJlZ2luIGVuZCBvZiBnYW1lIGxvZ2ljLi4uXG4gICAgICAgIH1cbiAgICAgICAgLy8gYWx0ZXJuYXRpdmUgYXBwcm9hY2ggd291bGQgYmUgdG8gaXRlcmF0ZSBvdmVyIHRoZSBzaGlwcyBhcnJheSxcbiAgICAgICAgLy8gY2hlY2tpbmcgaWYgZWFjaCBzaGlwIGhhcyBzdW5rXG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNaXNzZXMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZE1pc3NlcyA9IFtdO1xuICAgICAgICBtaXNzZXMuZm9yRWFjaChtaXNzID0+IHtcbiAgICAgICAgICAgIHJlY29yZGVkTWlzc2VzLnB1c2goW21pc3MueCwgbWlzcy55XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVjb3JkZWRNaXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0hpdHMoKSB7XG4gICAgICAgIGxldCByZWNvcmRlZEhpdHMgPSBbXTtcbiAgICAgICAgaGl0cy5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICByZWNvcmRlZEhpdHMucHVzaChbaGl0LngsIGhpdC55XSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiByZWNvcmRlZEhpdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGNyZWF0ZVNoaXAsXG4gICAgICAgIGFsbFN1bmssXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIHNob3dIaXRzLFxuICAgICAgICBzaG93TWlzc2VzLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgZmluZFNxdWFyZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcblxuICAgIGNvbnN0IGJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICBmdW5jdGlvbiBhdHRhY2sob3RoZXJQbGF5ZXIsIFt4LCB5XSkge1xuICAgICAgICBvdGhlclBsYXllci5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBib2FyZCxcbiAgICAgICAgYXR0YWNrXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY29uc3QgU2hpcCA9IChsZW5ndGgpID0+IHtcblxuICAgIGxldCBoaXRzID0gMDtcbiAgICBsZXQgc3RhcnRpbmdTcXVhcmUgPSBudWxsO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xuICAgICAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7IFxuICAgICAgICBoaXQsIFxuICAgICAgICBpc1N1bmssXG4gICAgICAgIHN0YXJ0aW5nU3F1YXJlLFxuICAgICAgICBvcmllbnRhdGlvbixcbiAgICAgICAgbGVuZ3RoXG4gICAgfVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImNvbnN0IFNxdWFyZSA9ICh4LCB5KSA9PiB7XG4gICAgbGV0IHNoaXAgPSBudWxsO1xuICAgIGxldCBhdHRhY2tlZCA9IGZhbHNlO1xuICAgIHJldHVybiB7IHgsIHksIHNoaXAsIGF0dGFja2VkIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGRvbU1ldGhvZHMgZnJvbSBcIi4vZG9tLW1ldGhvZHNcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuKGZ1bmN0aW9uIHBsYXlHYW1lKCkge1xuXG4gICAgbGV0IGN1cnJlbnRHYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IERPTSA9IGRvbU1ldGhvZHMoKTtcblxuICAgIERPTS5pbml0aWFsaXplKCk7XG4gICAgYWxlcnROZXdHYW1lKCk7XG5cbiAgICBmdW5jdGlvbiBhbGVydE5ld0dhbWUoKSB7XG4gICAgICAgIERPTS5jcmVhdGVBbGVydCgpO1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13aW5kb3cnKTtcbiAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnbmV3LWdhbWUtYWxlcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXRpdGxlJywgJ25ldy1nYW1lLXRpdGxlJyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICd3ZWxjb21lIHRvIEJBVFRMRVNRVUFSRVMnO1xuICAgICAgICAgICAgYWxlcnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnV0dG9uJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnc3RhcnQgZ2FtZSc7XG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vYmlsZVdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBtb2JpbGVXYXJuaW5nLmNsYXNzTGlzdC5hZGQoJ21vYmlsZS13YXJuaW5nJyk7XG4gICAgICAgICAgICAgICAgbW9iaWxlV2FybmluZy5pbm5lckhUTUwgPSBgZm9yIG9wdGltYWwgZ2FtZSBwZXJmb3JtYW5jZSwgPGJyPnBsZWFzZSB1c2UgYSBkZXNrdG9wIGJyb3dzZXJgO1xuICAgICAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKG1vYmlsZVdhcm5pbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRHYW1lKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWxlcnRFbmRPZkdhbWUod2lubmVyKSB7XG4gICAgICAgIERPTS5jcmVhdGVBbGVydCgpO1xuICAgICAgICBjb25zdCBhbGVydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGVydC13aW5kb3cnKTtcbiAgICAgICAgYWxlcnQuY2xhc3NMaXN0LmFkZCgnZW5kLW9mLWdhbWUtYWxlcnQnKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FsZXJ0LXRpdGxlJywgJ2VuZC1vZi1nYW1lLXRpdGxlJyk7XG4gICAgICAgICAgICBpZiAod2lubmVyID09PSAncGxheWVyIG9uZScpIHtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGB5b3UgYXJlIHRoZSB3aW5uZXIhYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2lubmVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBgdGhlIGNvbXB1dGVyIGlzIHRoZSB3aW5uZXJgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhbGVydC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydC1idXR0b24nLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdwbGF5IGFnYWluJztcbiAgICAgICAgICAgIGFsZXJ0LmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcblxuICAgICAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgICAgICBET00uZGVsZXRlQWxlcnQoKTtcbiAgICAgICAgRE9NLmhpZGVPdmVybGF5KCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBuZXcgZ2FtZTpcbiAgICAgICAgY3VycmVudEdhbWUgPSBHYW1lKCk7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgcmFuZG9tIHNoaXAgcG9zaXRpb25zIGZvciBjb21wdXRlcjpcbiAgICAgICAgZ2VuZXJhdGVDb21wdXRlclNoaXBzKCk7XG5cbiAgICAgICAgLy8gZ2V0IHNoaXAgcG9zaXRpb25zIGZyb20gdXNlcjpcbiAgICAgICAgY2hvb3NlU2hpcFBvc2l0aW9ucygpOyBcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQ29tcHV0ZXJTaGlwcygpIHtcblxuICAgICAgICAvLyBmb3IgZWFjaCBvZiB0aGUgNSBzaGlwcy4uLlxuICAgICAgICBmb3IgKGxldCBjb21wU2hpcCA9IDE7IGNvbXBTaGlwIDw9IDU7IGNvbXBTaGlwKyspIHtcbiAgICAgICAgICAgIC8vIGVzdGFibGlzaCBzaGlwIGxlbmd0aDpcbiAgICAgICAgICAgIGxldCBjb21wU2hpcExlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb21wU2hpcCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gNTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcFNoaXAgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb21wU2hpcExlbmd0aCA9IDQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBTaGlwID09PSAzKSB7XG4gICAgICAgICAgICAgICAgY29tcFNoaXBMZW5ndGggPSAzO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGNvbXBTaGlwTGVuZ3RoID0gMztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcFNoaXAgPT09IDUpIHtcbiAgICAgICAgICAgICAgICBjb21wU2hpcExlbmd0aCA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gdHJhY2sgd2hldGhlciBzaGlwIGhhcyBiZWVuIHBsYWNlZDpcbiAgICAgICAgICAgIGxldCBzaGlwUGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoc2hpcFBsYWNlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvLyBnZW5lcmF0ZSByYW5kb20gYXhpcyBkaXJlY3Rpb24uLi5cbiAgICAgICAgICAgICAgICBsZXQgY29tcFNoaXBBeGlzO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpICsgMTtcbiAgICAgICAgICAgICAgICByYW5kb20gPT09IDEgPyBjb21wU2hpcEF4aXMgPSAneCcgOiBjb21wU2hpcEF4aXMgPSAneSc7XG4gICAgICAgICAgICAgICAgLy8gY2hvb3NlIHJhbmRvbSB2YWxpZCBzcXVhcmU6XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbVg7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbVk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBTaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTEgLSBjb21wU2hpcExlbmd0aCkpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wU2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMSAtIGNvbXBTaGlwTGVuZ3RoKSkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tGb3JQbGFjZWRTaGlwKGN1cnJlbnRHYW1lLnBsYXllclR3bywgW3JhbmRvbVgsIHJhbmRvbVldLCBjb21wU2hpcEF4aXMsIGNvbXBTaGlwTGVuZ3RoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwKGN1cnJlbnRHYW1lLnBsYXllclR3bywgW3JhbmRvbVgsIHJhbmRvbVldLCBjb21wU2hpcEF4aXMsIGNvbXBTaGlwTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9vc2VTaGlwUG9zaXRpb25zKCkge1xuXG4gICAgICAgIC8vIGhpZGUgdGhlIGVuZW15IGdyaWQ6XG4gICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQnKTtcbiAgICAgICAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgcGxheWVyIGJvYXJkIHRpdGxlIHRleHQgdG8gJ2Nob29zZSB5b3VyIHNoaXBzJzpcbiAgICAgICAgY29uc3QgcGxheWVyT25lQm9hcmRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLXRpdGxlLXRleHRcIj5QTEFDRSBZT1VSIFNRVUFSRVM6PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hpcC1heGlzLXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzLXRleHRcIj50b2dnbGUgYXhpczwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJheGlzLW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXMtb3B0aW9uIHgtYXhpcy1vcHRpb24gc2VsZWN0ZWQtYXhpc1wiPlg8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF4aXMtb3B0aW9uIHktYXhpcy1vcHRpb25cIj5ZPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAvLyBzdHlsZSB0aGUgJ1BMQUNFIFlPVVIgU0hJUFMnIHRleHQ6XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkVGl0bGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1vbmUtYm9hcmQtdGl0bGUgLmJvYXJkLXRpdGxlLXRleHQnKVxuICAgICAgICBwbGF5ZXJPbmVCb2FyZFRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdhdHRhY2stcHJvbXB0Jyk7XG5cbiAgICAgICAgLy8gYXBwbHkgY3Vyc29yIHBvaW50ZXIgc3R5bGUgdG8gYm9hcmQ6XG4gICAgICAgIGNvbnN0IHBsYXllck9uZUJvYXJkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgcGxheWVyT25lQm9hcmRTcXVhcmVzLmNsYXNzTGlzdC5hZGQoJ3BvaW50ZXInKTtcblxuICAgICAgICAvLyBjcmVhdGUgdmFyaWFibGUgdG8gdHJhY2sgY3VycmVudCBzaGlwIGF4aXMgY2hvaWNlOlxuICAgICAgICBsZXQgc2hpcEF4aXMgPSAneCc7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50IGxpc3RlbmVycyB0byB1cGRhdGUgYXhpcyBjaG9pY2U6XG4gICAgICAgIGNvbnN0IHhCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueC1heGlzLW9wdGlvbicpO1xuICAgICAgICBjb25zdCB5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnktYXhpcy1vcHRpb24nKTtcbiAgICAgICAgeEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNoaXBBeGlzID0gJ3gnO1xuICAgICAgICAgICAgeUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1heGlzJyk7XG4gICAgICAgICAgICB4QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzaGlwQXhpcyA9ICd5JztcbiAgICAgICAgICAgIHhCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICAgICAgeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1heGlzJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGVzdGFibGlzaCB2YXJpYWJsZSB0byB0cmFjayB3aGljaCAjIHNoaXAgaXMgYmVpbmcgcGxhY2VkOlxuICAgICAgICBsZXQgc2hpcE51bWJlciA9IDE7IC8vIChnYW1lIHdpbGwgbW92ZSBvbiBhZnRlciBhbGwgNSBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkKVxuXG4gICAgICAgIC8vIGFkZCBob3ZlciBsaXN0ZW5lciB0byBnYW1lYm9hcmQ6XG4gICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBob3Zlck92ZXJTcXVhcmUpO1xuXG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciB0byBnYW1lYm9hcmQ6XG4gICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrU3F1YXJlKTtcblxuICAgICAgICBmdW5jdGlvbiBob3Zlck92ZXJTcXVhcmUoZSkge1xuICAgICAgICAgICAgLy8gZ2V0IGNvb3JkaW5hdGVzIG9mIGhvdmVyZWQtb3ZlciBzcXVhcmU6XG4gICAgICAgICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC54O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcbiAgICAgICAgICAgIGNvbnN0IGhvdmVyQ29vcmRzID0gW3gsIHldO1xuXG4gICAgICAgICAgICBpZiAoc2hpcE51bWJlciA9PT0gMSAmJiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgNSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSAyICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCA0KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgNCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBOdW1iZXIgPT09IDMgJiYgY2hlY2tQbGFjZW1lbnRWYWxpZGl0eShob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDMpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcHJldmlld1NoaXAoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpcE51bWJlciA9PT0gNCAmJiBjaGVja1BsYWNlbWVudFZhbGlkaXR5KGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMykgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmV2aWV3U2hpcChob3ZlckNvb3Jkcywgc2hpcEF4aXMsIDMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSA1ICYmIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoaG92ZXJDb29yZHMsIHNoaXBBeGlzLCAyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhvdmVyZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7aG92ZXJDb29yZHNbMF19LXkke2hvdmVyQ29vcmRzWzFdfWApO1xuICAgICAgICAgICAgICAgIGhvdmVyZWRTcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1ob3ZlcicpO1xuICAgICAgICAgICAgICAgIGhvdmVyZWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGhvdmVyZWRTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1ob3ZlcicpO1xuICAgICAgICAgICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjbGlja1NxdWFyZShlKSB7XG4gICAgICAgICAgICAvLyBnZXQgY29vcmRpbmF0ZXMgb2YgY2xpY2tlZCBzcXVhcmU6XG4gICAgICAgICAgICBjb25zdCB4ID0gZS50YXJnZXQuZGF0YXNldC54O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUudGFyZ2V0LmRhdGFzZXQueTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRDb29yZHMgPSBbeCwgeV07XG5cbiAgICAgICAgICAgIGlmIChzaGlwTnVtYmVyID09PSAxICYmIHRyeVRvUGxhY2VTaGlwKGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCA1KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAgICAgc2hpcE51bWJlcisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSAyICYmIHRyeVRvUGxhY2VTaGlwKGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCA0KSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAgICAgc2hpcE51bWJlcisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSAzICYmIHRyeVRvUGxhY2VTaGlwKGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCAzKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAgICAgc2hpcE51bWJlcisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSA0ICYmIHRyeVRvUGxhY2VTaGlwKGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCAzKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlckJvYXJkKCk7XG4gICAgICAgICAgICAgICAgc2hpcE51bWJlcisrO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwTnVtYmVyID09PSA1ICYmIHRyeVRvUGxhY2VTaGlwKGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCAyKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBjbGljayBsaXN0ZW5lciBmb3IgcGxhY2luZyBzaGlwcyAmIGhvdmVyIGxpc3RlbmVyIGZvciBwcmV2aWV3aW5nIHNoaXBzOlxuICAgICAgICAgICAgICAgIHBsYXllck9uZUJvYXJkU3F1YXJlcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrU3F1YXJlKTtcbiAgICAgICAgICAgICAgICBwbGF5ZXJPbmVCb2FyZFNxdWFyZXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaG92ZXJPdmVyU3F1YXJlKTtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHRpdGxlIHRleHQgJiBzaGlwIGF4aXMgdG9nZ2xlOlxuICAgICAgICAgICAgICAgIHBsYXllck9uZUJvYXJkVGl0bGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgcGxheWVyT25lQm9hcmRUaXRsZS50ZXh0Q29udGVudCA9ICd5b3VyIGdyaWQ6J1xuICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIHBsYXllclR3byBnYW1lYm9hcmQ6XG4gICAgICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgYm9hcmQgYW5kIGdldCB0aGUgcGxheWVyJ3MgZmlyc3QgbW92ZTpcbiAgICAgICAgICAgICAgICByZW5kZXJCb2FyZCgpO1xuICAgICAgICAgICAgICAgIGdldFBsYXllck1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZpZXdTaGlwKGhvdmVyQ29vcmRzLCBzaGlwQXhpcywgc2hpcExlbmd0aCkge1xuXG4gICAgICAgIGNvbnN0IGhvdmVyZWRTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7aG92ZXJDb29yZHNbMF19LXkke2hvdmVyQ29vcmRzWzFdfWApO1xuXG4gICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAocGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gWyhwYXJzZUludChob3ZlckNvb3Jkc1swXSkgKyBpKSwgcGFyc2VJbnQoaG92ZXJDb29yZHNbMV0pXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7c3F1YXJlQ29vcmRzWzBdfS15JHtzcXVhcmVDb29yZHNbMV19YCk7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcHJldmlldycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbcGFyc2VJbnQoaG92ZXJDb29yZHNbMF0pLCAocGFyc2VJbnQoaG92ZXJDb29yZHNbMV0pICsgaSldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC54JHtzcXVhcmVDb29yZHNbMF19LXkke3NxdWFyZUNvb3Jkc1sxXX1gKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc2hpcC1wcmV2aWV3Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgbW91c2VvdXQgbGlzdGVuZXIgdG8gcmVtb3ZlIHN0eWxpbmc6XG4gICAgICAgIGhvdmVyZWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gWyhwYXJzZUludChob3ZlckNvb3Jkc1swXSkgKyBpKSwgcGFyc2VJbnQoaG92ZXJDb29yZHNbMV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLngke3NxdWFyZUNvb3Jkc1swXX0teSR7c3F1YXJlQ29vcmRzWzFdfWApO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1wcmV2aWV3Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwQXhpcyA9PT0gJ3knKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMSk7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbcGFyc2VJbnQoaG92ZXJDb29yZHNbMF0pLCAocGFyc2VJbnQoaG92ZXJDb29yZHNbMV0pICsgaSldO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAueCR7c3F1YXJlQ29vcmRzWzBdfS15JHtzcXVhcmVDb29yZHNbMV19YCk7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJ5VG9QbGFjZVNoaXAoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdmFsaWQgY29tYmluYXRpb24gb2YgY29vcmRpbmF0ZXMsIGF4aXMgZGlyZWN0aW9uLCBhbmQgc2hpcCBsZW5ndGg6XG4gICAgICAgIGlmIChjaGVja1BsYWNlbWVudFZhbGlkaXR5KGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gaWYgaXQncyB2YWxpZCwgcGxhY2UgdGhlIHNoaXAgYW5kIHJldHVybiB0cnVlOlxuICAgICAgICAgICAgcGxhY2VTaGlwKGN1cnJlbnRHYW1lLnBsYXllck9uZSwgY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvdGhlcndpc2UuLi5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrUGxhY2VtZW50VmFsaWRpdHkoY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgaWYgKHNoaXBBeGlzID09PSAneCcgJiYgKChwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKSArIChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpKSA+IDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScgJiYgKChwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKSArIChwYXJzZUludChzaGlwTGVuZ3RoKSAtIDEpKSA+IDEwKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNoZWNrRm9yUGxhY2VkU2hpcChjdXJyZW50R2FtZS5wbGF5ZXJPbmUsIGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9yUGxhY2VkU2hpcChwbGF5ZXIsIGNsaWNrZWRDb29yZHMsIHNoaXBBeGlzLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBSRVRVUk5TIFRSVUUgSUYgSVQgRklORFMgQSBTSElQIElOIFRIRSBBVFRFTVBURUQgUExBQ0VNRU5UIFpPTkU6XG4gICAgICAgIGlmIChzaGlwQXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAoc2hpcExlbmd0aCAtIDEpOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcXVhcmVDb29yZHMgPSBbKHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pICsgaSksIHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNxdWFyZSA9IHBsYXllci5ib2FyZC5maW5kU3F1YXJlKHNxdWFyZUNvb3Jkc1swXSwgc3F1YXJlQ29vcmRzWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRTcXVhcmUuc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcEF4aXMgPT09ICd5Jykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gKHNoaXBMZW5ndGggLSAxKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3F1YXJlQ29vcmRzID0gWyhwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKSksIChwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKSArIGkpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFNxdWFyZSA9IHBsYXllci5ib2FyZC5maW5kU3F1YXJlKHNxdWFyZUNvb3Jkc1swXSwgc3F1YXJlQ29vcmRzWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRTcXVhcmUuc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJucyBmYWxzZSBpcyBubyBzaGlwIGlzIGZvdW5kOlxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHBsYXllciwgY2xpY2tlZENvb3Jkcywgc2hpcEF4aXMsIHNoaXBMZW5ndGgpIHtcbiAgICAgICAgbGV0IGVuZFg7XG4gICAgICAgIGxldCBlbmRZO1xuICAgICAgICBpZiAoc2hpcEF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgZW5kWCA9IHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMF0pICsgcGFyc2VJbnQoc2hpcExlbmd0aCkgLSAxO1xuICAgICAgICAgICAgZW5kWSA9IHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHNoaXBBeGlzID09PSAneScpIHtcbiAgICAgICAgICAgIGVuZFggPSBwYXJzZUludChjbGlja2VkQ29vcmRzWzBdKTtcbiAgICAgICAgICAgIGVuZFkgPSBwYXJzZUludChjbGlja2VkQ29vcmRzWzFdKSArIHBhcnNlSW50KHNoaXBMZW5ndGgpIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBwbGF5ZXIuYm9hcmQuY3JlYXRlU2hpcChbcGFyc2VJbnQoY2xpY2tlZENvb3Jkc1swXSksIHBhcnNlSW50KGNsaWNrZWRDb29yZHNbMV0pXSwgW2VuZFgsIGVuZFldKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyT25lID0gY3VycmVudEdhbWUucGxheWVyT25lO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd28gPSBjdXJyZW50R2FtZS5wbGF5ZXJUd287XG5cbiAgICAgICAgRE9NLnJlbmRlclNoaXBzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICBET00ucmVuZGVySGl0cyhwbGF5ZXJPbmUsICcucGxheWVyLW9uZS1ib2FyZC1zcXVhcmVzJyk7XG4gICAgICAgIERPTS5yZW5kZXJIaXRzKHBsYXllclR3bywgJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICBET00ucmVuZGVyTWlzc2VzKHBsYXllck9uZSwgJy5wbGF5ZXItb25lLWJvYXJkLXNxdWFyZXMnKTtcbiAgICAgICAgRE9NLnJlbmRlck1pc3NlcyhwbGF5ZXJUd28sICcucGxheWVyLXR3by1ib2FyZC1zcXVhcmVzJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGxheWVyTW92ZSgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyVHdvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC10aXRsZScpO1xuICAgICAgICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdHdvLWJvYXJkLXNxdWFyZXMnKTtcblxuICAgICAgICBwbGF5ZXJUd29UaXRsZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgIHBsYXllclR3b1RpdGxlLnRleHRDb250ZW50ID0gJ0NIT09TRSBBIFNRVUFSRSBUTyBBVFRBQ0s6JztcblxuICAgICAgICBwbGF5ZXJUd29Cb2FyZC5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIHBsYXllclR3b0JvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hvb3NlU3F1YXJlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9vc2VTcXVhcmUoZSkge1xuICAgICAgICBjb25zdCBjbGlja2VkU3F1YXJlID0gZS50YXJnZXQ7XG4gICAgICAgIGNvbnN0IHhDb29yZCA9IHBhcnNlSW50KGNsaWNrZWRTcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgeUNvb3JkID0gcGFyc2VJbnQoY2xpY2tlZFNxdWFyZS5kYXRhc2V0LnkpO1xuICAgICAgICBhdHRlbXB0QXR0YWNrKHhDb29yZCwgeUNvb3JkKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhdHRlbXB0QXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3F1YXJlID0gY3VycmVudEdhbWUucGxheWVyVHdvLmJvYXJkLmZpbmRTcXVhcmUoeCwgeSk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgdGhlIHNxdWFyZSBoYXNuJ3QgYmVlbiBhdHRhY2tlZCB5ZXQ6XG4gICAgICAgIGlmICh0YXJnZXRTcXVhcmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSAnQ0hPT1NFIEEgU1FVQVJFJyBzdHlsaW5nOlxuICAgICAgICAgICAgY29uc3QgcGxheWVyVHdvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXR3by1ib2FyZC10aXRsZScpO1xuICAgICAgICAgICAgcGxheWVyVHdvVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrLXByb21wdCcpO1xuICAgICAgICAgICAgcGxheWVyVHdvVGl0bGUudGV4dENvbnRlbnQgPSAnZW5lbXkgZ3JpZDonO1xuXG4gICAgICAgICAgICAvLyB0aGVuIGNvbXBsZXRlIHRoZSBhdHRhY2s6XG4gICAgICAgICAgICBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYXR0YWNrKGN1cnJlbnRHYW1lLnBsYXllclR3bywgW3gsIHldKTtcblxuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIHRoZSBib2FyZCB0byBzaG93IHRoZSBuZXcgYXR0YWNrOlxuICAgICAgICAgICAgcmVuZGVyQm9hcmQoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIGNsaWNrIGxpc3RlbmVycyBmcm9tIHRoZSBlbmVteSBib2FyZDpcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclR3b0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci10d28tYm9hcmQtc3F1YXJlcycpO1xuICAgICAgICAgICAgcGxheWVyVHdvQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaG9vc2VTcXVhcmUpO1xuXG4gICAgICAgICAgICAvLyBhbmQgcmVtb3ZlIHBvaW50ZXIgc3R5bGUgZnJvbSBlbmVteSBib2FyZDpcbiAgICAgICAgICAgIHBsYXllclR3b0JvYXJkLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgICAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGFsbCB0aGUgZW5lbXkncyBzaGlwcyBoYXZlIHN1bms6XG4gICAgICAgICAgICBpZiAoY3VycmVudEdhbWUucGxheWVyVHdvLmJvYXJkLmFsbFN1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0RW5kT2ZHYW1lKCdwbGF5ZXIgb25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIG5vdCwgbGV0IHRoZSBwbGF5ZXIga25vdyB0aGUgY29tcHV0ZXIgaXMgZ2VuZXJhdGluZyBhbiBhdHRhY2s6XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJPbmVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItb25lLWJvYXJkLXRpdGxlJyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgICAgICBwbGF5ZXJPbmVUaXRsZS50ZXh0Q29udGVudCA9ICdBVFRBQ0sgSU5DT01JTkcgLiAuIC4nO1xuXG4gICAgICAgICAgICAvLyB0aGVuIHJlY2VpdmUgYSByYW5kb20gYXR0YWNrIG9uIHBsYXllcidzIG93biBib2FyZDpcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVjZWl2ZUF0dGFjaywgMjAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKCkge1xuICAgICAgICBsZXQgYXR0YWNrWDtcbiAgICAgICAgbGV0IGF0dGFja1k7XG5cbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIHNxdWFyZXMgaW4gdGhlIHF1ZXVlLCBhdHRhY2sgdGhlIGZpcnN0IG9uZTpcbiAgICAgICAgaWYgKGF0dGFja1F1ZXVlLnF1ZXVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBhdHRhY2tRdWV1ZS5nZXROZXh0QXR0YWNrKCk7XG4gICAgICAgICAgICBhdHRhY2tYID0gc3F1YXJlLng7XG4gICAgICAgICAgICBhdHRhY2tZID0gc3F1YXJlLnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZ2V0IGEgcmFuZG9tIHNxdWFyZSB0byBwb3RlbnRpYWxseSBhdHRhY2s6XG4gICAgICAgICAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCArIDEpO1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tU3F1YXJlID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUocmFuZG9tWCwgcmFuZG9tWSk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCwgcnVuIHRoZSBmdW5jdGlvbiBhZ2FpbjpcbiAgICAgICAgICAgIGlmIChyYW5kb21TcXVhcmUuYXR0YWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlQXR0YWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBpZiBpdCBoYXNuJ3QgeWV0IGJlZW4gYXR0YWNrZWQsIHNldCB0aGUgcmFuZG9tIFgvWSBhcyB0aGUgYXR0YWNrIGNvb3JkaW5hdGVzOlxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21TcXVhcmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYXR0YWNrWCA9IHJhbmRvbVg7XG4gICAgICAgICAgICAgICAgYXR0YWNrWSA9IHJhbmRvbVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgJ0FUVEFDSyBJTkNPTUlORycgbWVzc2FnZTpcbiAgICAgICAgY29uc3QgcGxheWVyT25lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLW9uZS1ib2FyZC10aXRsZScpO1xuICAgICAgICBwbGF5ZXJPbmVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2stcHJvbXB0Jyk7XG4gICAgICAgIHBsYXllck9uZVRpdGxlLnRleHRDb250ZW50ID0gJ3lvdXIgZ3JpZDonO1xuXG4gICAgICAgIC8vIGNvbXBsZXRlIGF0dGFjazpcbiAgICAgICAgY3VycmVudEdhbWUucGxheWVyVHdvLmF0dGFjayhjdXJyZW50R2FtZS5wbGF5ZXJPbmUsIFthdHRhY2tYLCBhdHRhY2tZXSk7XG5cbiAgICAgICAgLy8gaWYgaXQncyBhIGhpdCwgY2hlY2sgYWRqYWNlbnQgc3F1YXJlcyB0byBhZGQgdG8gdGhlIGF0dGFjayBxdWV1ZTpcbiAgICAgICAgaWYgKGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKGF0dGFja1gsIGF0dGFja1kpLnNoaXAgXG4gICAgICAgICAmJiBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZShhdHRhY2tYLCBhdHRhY2tZKS5hdHRhY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0YWNrUXVldWUuY2hlY2tTcXVhcmUoYXR0YWNrWCwgYXR0YWNrWSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGVuIHJlLXJlbmRlciB0aGUgYm9hcmQgdG8gc2hvdyB0aGUgbmV3IGF0dGFjazpcbiAgICAgICAgcmVuZGVyQm9hcmQoKTtcblxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgYWxsIHRoZSBwbGF5ZXIncyBzaGlwcyBoYXZlIHN1bms6XG4gICAgICAgIGlmIChjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuYWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgICAgICBhbGVydEVuZE9mR2FtZSgnY29tcHV0ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdCwgZ2V0IHRoZSBwbGF5ZXIncyBuZXh0IG1vdmU6XG4gICAgICAgIGdldFBsYXllck1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2tRdWV1ZSA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHF1ZXVlID0gW107XG5cbiAgICAgICAgZnVuY3Rpb24gY2hlY2tTcXVhcmUoeCwgeSkge1xuXG4gICAgICAgICAgICBjb25zdCBzcXVhcmVBYm92ZSA9IGN1cnJlbnRHYW1lLnBsYXllck9uZS5ib2FyZC5maW5kU3F1YXJlKHgsIHkgKyAxKTtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZVJpZ2h0ID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoeCArIDEsIHkpO1xuICAgICAgICAgICAgY29uc3Qgc3F1YXJlQmVsb3cgPSBjdXJyZW50R2FtZS5wbGF5ZXJPbmUuYm9hcmQuZmluZFNxdWFyZSh4LCB5IC0gMSk7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVMZWZ0ID0gY3VycmVudEdhbWUucGxheWVyT25lLmJvYXJkLmZpbmRTcXVhcmUoeCAtIDEsIHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3F1YXJlQWJvdmUgJiYgc3F1YXJlQWJvdmUuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVBYm92ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlUmlnaHQgJiYgc3F1YXJlUmlnaHQuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVSaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlQmVsb3cgJiYgc3F1YXJlQmVsb3cuYXR0YWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaChzcXVhcmVCZWxvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3F1YXJlTGVmdCAmJiBzcXVhcmVMZWZ0LmF0dGFja2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goc3F1YXJlTGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXROZXh0QXR0YWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVldWUsXG4gICAgICAgICAgICBjaGVja1NxdWFyZSxcbiAgICAgICAgICAgIGdldE5leHRBdHRhY2tcbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=