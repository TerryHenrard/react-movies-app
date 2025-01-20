import {
  require_react
} from "./chunk-YF6YTEQP.js";
import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/.pnpm/react-activity@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-activity/dist/react-activity.js
var require_react_activity = __commonJS({
  "node_modules/.pnpm/react-activity@2.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-activity/dist/react-activity.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define("ReactActivity", ["react"], factory);
      else if (typeof exports === "object")
        exports["ReactActivity"] = factory(require_react());
      else
        root["ReactActivity"] = factory(root["react"]);
    })(exports, function(__WEBPACK_EXTERNAL_MODULE__297__) {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = {
            /***/
            930: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Bounce_Bounce
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = function(s, e) {
                  var t = {};
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var Bounce = function(_a) {
                  var _b = _a.speed, speed = _b === void 0 ? 1 : _b, rest = __rest(_a, ["speed"]);
                  var renderSquares = function() {
                    var res = [];
                    for (var i = 1; i <= 3; i++) {
                      res.unshift(external_react_.createElement("div", { key: i, style: {
                        animationDelay: (0, getRelativeTime.n)(speed, i / -10)
                      } }));
                    }
                    return res;
                  };
                  return external_react_.createElement(ActivityIndicator.Z, __assign({ indicatorClassName: "rai-bounce", speed, defaultAnimationDuration: 0.8 }, rest), renderSquares());
                };
                const Bounce_Bounce = Bounce;
                ;
              }
            ),
            /***/
            843: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Digital_Digital
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = function(s, e) {
                  var t = {};
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var Digital = function(_a) {
                  var _b = _a.speed, speed = _b === void 0 ? 1 : _b, rest = __rest(_a, ["speed"]);
                  var rects = [];
                  for (var i = 1; i <= 3; i++) {
                    rects.unshift(external_react_.createElement("div", { key: i, style: {
                      animationDelay: (0, getRelativeTime.n)(speed, i / -10)
                    } }));
                  }
                  return external_react_.createElement(ActivityIndicator.Z, __assign({ indicatorClassName: "rai-digital", defaultAnimationDuration: 0.8, speed }, rest), rects);
                };
                const Digital_Digital = Digital;
                ;
              }
            ),
            /***/
            266: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Dots_Dots
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = function(s, e) {
                  var t = {};
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var Dots = function(_a) {
                  var _b = _a.speed, speed = _b === void 0 ? 1 : _b, rest = __rest(_a, ["speed"]);
                  return external_react_.createElement(
                    ActivityIndicator.Z,
                    __assign({ indicatorClassName: "rai-dots", speed, defaultAnimationDuration: 0.8 }, rest),
                    external_react_.createElement("div", { className: "rai-circle", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.3) } }),
                    external_react_.createElement("div", { className: "rai-circle", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.2) } }),
                    external_react_.createElement("div", { className: "rai-circle", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.1) } })
                  );
                };
                const Dots_Dots = Dots;
                ;
              }
            ),
            /***/
            831: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Levels_Levels
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = function(s, e) {
                  var t = {};
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var Levels = function(_a) {
                  var _b = _a.speed, speed = _b === void 0 ? 1 : _b, rest = __rest(_a, ["speed"]);
                  return external_react_.createElement(
                    ActivityIndicator.Z,
                    __assign({ indicatorClassName: "rai-levels", speed, defaultAnimationDuration: 1.5 }, rest),
                    external_react_.createElement(
                      "div",
                      { className: "rai-levels-container" },
                      external_react_.createElement("div", { className: "rai-bar" }),
                      external_react_.createElement("div", { className: "rai-bar", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.25) } }),
                      external_react_.createElement("div", { className: "rai-bar", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.4) } })
                    )
                  );
                };
                const Levels_Levels = Levels;
                ;
              }
            ),
            /***/
            874: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Sentry_Sentry
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = function(s, e) {
                  var t = {};
                  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                    t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var Sentry = function(_a) {
                  var _b = _a.speed, speed = _b === void 0 ? 1 : _b, rest = __rest(_a, ["speed"]);
                  return external_react_.createElement(
                    ActivityIndicator.Z,
                    __assign({ indicatorClassName: "rai-sentry", speed, defaultAnimationDuration: 0.8 }, rest),
                    external_react_.createElement(
                      "div",
                      { className: "rai-wave-container" },
                      external_react_.createElement("div", { className: "rai-wave" })
                    ),
                    external_react_.createElement(
                      "div",
                      { className: "rai-wave-container" },
                      external_react_.createElement("div", { className: "rai-wave", style: { animationDelay: (0, getRelativeTime.n)(speed, -0.4) } })
                    )
                  );
                };
                const Sentry_Sentry = Sentry;
                ;
              }
            ),
            /***/
            752: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Spinner_Spinner
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var Spinner = function(props) {
                  return external_react_.createElement(
                    ActivityIndicator.Z,
                    __assign({ indicatorClassName: "rai-spinner", defaultAnimationDuration: 0.6 }, props),
                    external_react_.createElement("div", { className: "rai-spinner-outer" }),
                    external_react_.createElement("div", { className: "rai-spinner-inner" })
                  );
                };
                const Spinner_Spinner = Spinner;
                ;
              }
            ),
            /***/
            209: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Squares_Squares
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var Squares = function(props) {
                  var squares = [];
                  for (var i = 1; i <= 3; i++) {
                    squares.unshift(external_react_.createElement("div", { key: i, className: "rai-square", style: { animationDelay: "-" + i / 10 + "s" } }));
                  }
                  return external_react_.createElement(ActivityIndicator.Z, __assign({ indicatorClassName: "rai-squares", defaultAnimationDuration: 0.8 }, props), squares);
                };
                const Squares_Squares = Squares;
                ;
              }
            ),
            /***/
            918: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "default": () => (
                    /* reexport */
                    Windmill_Windmill
                  )
                });
                ;
                var external_react_ = __webpack_require__2(297);
                var ActivityIndicator = __webpack_require__2(438);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var Windmill = function(props) {
                  return external_react_.createElement(ActivityIndicator.Z, __assign({ indicatorClassName: "rai-windmill", defaultAnimationDuration: 0.8 }, props));
                };
                const Windmill_Windmill = Windmill;
                ;
              }
            ),
            /***/
            438: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  "Z": () => (
                    /* reexport */
                    ActivityIndicator_ActivityIndicator
                  )
                });
                var external_react_ = __webpack_require__2(297);
                var getRelativeTime = __webpack_require__2(531);
                ;
                var __assign = function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var ActivityIndicator = function(_a) {
                  var style = _a.style, _b = _a.size, size = _b === void 0 ? 16 : _b, _c = _a.speed, speed = _c === void 0 ? 1 : _c, defaultAnimationDuration = _a.defaultAnimationDuration, color = _a.color, className = _a.className, _d = _a.animating, animating = _d === void 0 ? true : _d, children = _a.children, indicatorClassName = _a.indicatorClassName;
                  if (!animating) {
                    return null;
                  }
                  var animationDuration = (0, getRelativeTime.n)(speed, defaultAnimationDuration);
                  return external_react_.createElement("div", { "data-testid": "rai-activity-indicator", className: "rai-container " + indicatorClassName + (className ? " " + className : ""), style: __assign({ color, fontSize: size + "px", animationDuration }, style) }, children);
                };
                const ActivityIndicator_ActivityIndicator = ActivityIndicator;
                ;
              }
            ),
            /***/
            531: (
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "n": () => (
                    /* binding */
                    getRelativeTime
                  )
                  /* harmony export */
                });
                var getRelativeTime = function(speed, delay) {
                  return 1 / speed * delay + "s";
                };
              }
            ),
            /***/
            297: (
              /***/
              (module2) => {
                module2.exports = __WEBPACK_EXTERNAL_MODULE__297__;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = {};
          (() => {
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              /* harmony export */
              "Dots": () => (
                /* reexport safe */
                _Dots__WEBPACK_IMPORTED_MODULE_0__.default
              ),
              /* harmony export */
              "Bounce": () => (
                /* reexport safe */
                _Bounce__WEBPACK_IMPORTED_MODULE_1__.default
              ),
              /* harmony export */
              "Levels": () => (
                /* reexport safe */
                _Levels__WEBPACK_IMPORTED_MODULE_2__.default
              ),
              /* harmony export */
              "Sentry": () => (
                /* reexport safe */
                _Sentry__WEBPACK_IMPORTED_MODULE_3__.default
              ),
              /* harmony export */
              "Spinner": () => (
                /* reexport safe */
                _Spinner__WEBPACK_IMPORTED_MODULE_4__.default
              ),
              /* harmony export */
              "Squares": () => (
                /* reexport safe */
                _Squares__WEBPACK_IMPORTED_MODULE_5__.default
              ),
              /* harmony export */
              "Digital": () => (
                /* reexport safe */
                _Digital__WEBPACK_IMPORTED_MODULE_6__.default
              ),
              /* harmony export */
              "Windmill": () => (
                /* reexport safe */
                _Windmill__WEBPACK_IMPORTED_MODULE_7__.default
              )
              /* harmony export */
            });
            var _Dots__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
            var _Bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
            var _Levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(831);
            var _Sentry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(874);
            var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(752);
            var _Squares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(209);
            var _Digital__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(843);
            var _Windmill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(918);
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});
export default require_react_activity();
//# sourceMappingURL=react-activity.js.map
