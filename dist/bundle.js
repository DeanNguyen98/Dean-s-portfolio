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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  scroll-behavior: smooth;\n  font-family: \"Nunito\", sans-serif;\n}\n\nhtml {\n  font-size: 62%;\n  overflow-x: hidden;\n}\n\nbody {\n  background: #141413;\n  color: #fff;\n}\n\nsection {\n  min-height: 100vh;\n  padding: 10rem 9% 2rem;\n}\n\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 2rem 9%;\n  background-color: #141413;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 100;\n}\n\n.logo {\n  font-size: 2.5rem;\n  color: #fff;\n  font-weight: 700;\n  cursor: default;\n}\n\n.navbar a {\n  font-size: 1.5rem;\n  color: #fff;\n  margin-left: 4rem;\n  font-weight: 700;\n}\n\n.navbar a:hover,\n.navbar a.active {\n  color: #fff;\n}\n\n#hamburger-icon {\n  font-size: 3.6rem;\n  color: #fff;\n  display: none;\n}\n\n.home {\n  position: relative;\n}\n\n.home-container {\n  display: flex;\n  gap: 5rem;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  min-height: 83vh;\n}\n\n.home-content h3 {\n  font-size: 3.2rem;\n  font-weight: 700;\n}\n\n.home-content h3:nth-of-type(2) {\n  margin-bottom: 2rem;\n}\n\n.arrow {\n  position: absolute;\n  bottom: 5%;\n  right: 10%;\n  font-size: 3rem;\n  color: white;\n  animation: jiggle 0.5s infinite alternate;\n}\n\n@keyframes jiggle {\n  from {\n    transform: translateY(50%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\nspan {\n  color: #59b2f4;\n}\n\n.home-content {\n  position: relative;\n}\n.home-content .social-media a {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 4rem;\n  height: 4rem;\n  background: transparent;\n  border: 0.2rem solid #59b2f4;\n  border-radius: 50%;\n  font-size: 2rem;\n  color: #59b2f4;\n  margin: 2rem 1.5rem 2rem 0;\n  transition: 0.5s ease;\n}\n.home-content .social-media a:hover {\n  background: #59b2f4;\n  color: #2b2a27;\n  box-shadow: 0 0 1rem #59b2f4;\n}\n.home-content .circle {\n  position: absolute;\n  width: 17rem;\n  height: 17rem;\n  background-color: #59b2f4;\n  border-radius: 50%;\n  opacity: 0.2;\n  top: -60px;\n  left: -40px;\n  animation: enlarge 1s infinite alternate;\n}\n\n@keyframes enlarge {\n  from {\n    transform: scale(0.3);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.home-content h1 {\n  font-size: 5.6rem;\n  font-weight: 700;\n  line-height: 1.3;\n}\n\n.home-img {\n  width: 25vw;\n  height: 25vw;\n  overflow: hidden;\n  border-radius: 50%;\n  box-shadow: 0 0 1rem #59b2f4;\n  transition: transform 0.2s ease-in-out;\n}\n\n@keyframes moveUpDown {\n  from {\n    transform: translateY(-1rem);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n.home-img img {\n  width: 100%;\n}\n\n.home-img:hover {\n  transform: scale(1.06);\n  box-shadow: 0 0 2rem #59b2f4;\n}\n\n#about_p1 {\n  font-weight: 300;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#about_h1 {\n  font-weight: 700;\n  font-size: 3rem;\n  text-align: center;\n}\n\n.about {\n  position: relative;\n}\n\n.about-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.about-container img {\n  width: 15vw;\n  background: transparent;\n}\n\n.about-description {\n  border: 2px solid #2b2a27;\n  font-size: 2rem;\n  line-height: 1.3;\n  font-weight: 500;\n  padding: 3rem;\n  border-radius: 10px;\n  box-shadow: 0 0 2rem #2b2a27;\n  margin-bottom: 2rem;\n}\n\n.about-experience {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2.5rem;\n  flex-wrap: wrap;\n}\n\n.education {\n  text-align: center;\n  font-size: 2rem;\n  padding: 1rem 6rem;\n  border: 1px solid #fff;\n  border-radius: 1.5rem;\n  transition: 0.2s ease-in-out;\n  color: #fff;\n}\n\n.education:hover {\n  transform: scale(1.02);\n  border: 1px solid #fff;\n  box-shadow: 0 0 1rem #fff;\n  cursor: pointer;\n}\n\n.project {\n  background-color: #2b2a27;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n.project h1 {\n  font-weight: 700;\n  font-size: 3rem;\n  text-align: center;\n}\n.project p {\n  font-weight: 300;\n  font-size: 1.5rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2rem;\n  overflow-x: hidden;\n}\n.projects-container .project-box {\n  position: relative;\n  flex-shrink: 0;\n  border-radius: 2rem;\n  overflow: hidden;\n}\n\n.project-box img {\n  width: 100%;\n  height: 100%;\n  transition: transform 1s ease-in-out;\n  opacity: 0.7;\n  object-fit: cover;\n}\n.project-box .project-layer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  transform: translateY(100%);\n  transition: transform 0.5s ease-in-out;\n  background: linear-gradient(0deg, rgba(231, 241, 241, 0.1) 0%, #59b2f4);\n  padding: 1rem;\n}\n\n.project-box:hover .project-layer {\n  transform: translateY(0);\n}\n.project-box:hover img {\n  transform: scale(1.1);\n}\n\n.project-layer h4 {\n  font-size: 2rem;\n  font-weight: 900;\n}\n.project-layer p {\n  font-size: 1.5rem;\n  font-weight: 900;\n}\n.project-layer a {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 4rem;\n  height: 4rem;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: #fff;\n  font-size: 1.5rem;\n}\n.project-layer i {\n  color: #141413;\n}\n\n.skills {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10rem;\n}\n.skills h1 {\n  font-weight: 700;\n  font-size: 3rem;\n  text-align: center;\n}\n.skills h2 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n}\n.skills .skills-container {\n  display: flex;\n  gap: 2.5rem;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n\n.skills-container .skills-box {\n  padding: 0.5rem;\n  font-size: 6rem;\n  border: 1px solid #59b2f4;\n  border-radius: 0.7rem;\n  display: inline-flex;\n  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n}\n.skills-container .skills-box:hover {\n  background-color: #59b2f4;\n  box-shadow: 0 0 1rem #59b2f4;\n  cursor: pointer;\n}\n\n.contact h2 {\n  font-weight: 700;\n  font-size: 3rem;\n  text-align: center;\n}\n\n.contact form {\n  max-width: 70rem;\n  margin: 1rem auto;\n  text-align: center;\n  margin-bottom: 3rem;\n}\n\n.contactform .input-box {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.input-box input,\n.contact form textarea {\n  width: 100%;\n  padding: 1.5rem;\n  font-size: 1.6rem;\n  color: #fff;\n  background: #2b2a27;\n  border-radius: 0.8rem;\n  margin: 0.7rem 0;\n  border: 1px solid #2b2a27;\n}\n\n.input-box input {\n  width: 49%;\n}\n\n.contact form textarea {\n  resize: none;\n}\n\n.contact .btn {\n  background-color: #59b2f4;\n  padding: 1rem 1.2rem;\n  font-size: 2rem;\n  color: #fff;\n  border-radius: 1.5rem;\n  font-weight: 700;\n  border: 1px solid #2b2a27;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 2rem 9%;\n  background-color: #2b2a27;\n}\n.footer .footer-text {\n  font-size: 2rem;\n}\n\n.footer-arrow {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.8rem 1rem;\n  background-color: #59b2f4;\n  border-radius: 0.8rem;\n  transition: 0.5s ease;\n}\n\n.footer-arrow:hover {\n  box-shadow: 0 0 1rem #59b2f4;\n  cursor: pointer;\n}\n\n.footer-arrow a i {\n  color: white;\n  font-size: 1.5rem;\n}\n\n@media (max-width: 1200px) {\n  html {\n    font-size: 55%;\n  }\n}\n@media (max-width: 991px) {\n  .header {\n    padding: 2rem 3%;\n  }\n  section {\n    padding: 10rem 3%;\n  }\n  .project {\n    padding-bottom: 7rem;\n  }\n  .contact {\n    min-height: auto;\n  }\n  .footer {\n    padding: 2rem 3%;\n  }\n}\n@media (max-width: 768px) {\n  #hamburger-icon {\n    display: block;\n  }\n  .navbar {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    width: 100%;\n    padding: 1rem 3%;\n    background: #141413;\n    display: none;\n    border-top: 0.1rem solid #fff;\n  }\n  .navbar.active {\n    display: block;\n  }\n  .home-container {\n    flex-direction: column;\n  }\n  .home-content h3 {\n    font-size: 2.6rem;\n  }\n  .home-content h1 {\n    font-size: 5rem;\n  }\n  .home-content {\n    order: 2;\n  }\n  .home-img {\n    width: 90vw;\n    height: 90vw;\n    margin-top: 4rem;\n  }\n  .about {\n    flex-direction: column;\n  }\n  .about-container img {\n    width: 40vw;\n  }\n  .projects-container {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 617px) {\n  .portfolio-container {\n    grid-template-columns: 1fr;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://portfolio-dean/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://portfolio-dean/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://portfolio-dean/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//SCROLL REVEAL\n\nScrollReveal({\n    distance: '80%',\n    duration: 1000,\n    delay: 100,\n    easing: 'ease'\n})\n\nScrollReveal().reveal('.home-content', {origin: 'top'});\nScrollReveal().reveal('.home-img, .projects-container, .contact', {origin: 'bottom'});\nScrollReveal().reveal('.about-container, .learned', {origin:\"left\"});\nScrollReveal().reveal('.about-experience, .learning', {origin: \"right\"});\n\n//TYPED JS\n\nconst typed = new Typed(\".typed-text\", {\n    strings: [\" am a Junior Web Developer\", \"love to code\"],\n    typeSpeed: 50,\n    backSpeed: 50 ,\n    backDelay: 2000,\n    loop: true\n})\n\n//# sourceURL=webpack://portfolio-dean/./src/index.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hamburgerIcon = document.querySelector('#hamburger-icon');\nconst navbar = document.querySelector('.navbar');\n\nconst eventListener = () => {\n    hamburgerIcon.addEventListener(\"click\", () => {\n        hamburgerIcon.classList.toggle('fa-xmark');\n        navbar.classList.toggle('active');\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListener);\n\n//# sourceURL=webpack://portfolio-dean/./src/navbar.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;