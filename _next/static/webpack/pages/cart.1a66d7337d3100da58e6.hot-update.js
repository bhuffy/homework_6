webpackHotUpdate_N_E("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Cart; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"./context/CartContext.js\");\n/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Head */ \"./node_modules/next/Head.js\");\n/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.js\");\n\n\n\nvar _jsxFileName = \"/Users/bennetthuffman/code/pui/homework_6/pages/cart.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Cart() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__[\"CartContext\"]),\n      cart = _useContext[0],\n      setCart = _useContext[1];\n\n  console.log(cart);\n  var totalPrice = cart.reduce(function (acc, curr) {\n    return acc + curr.price * curr.quantity;\n  }, 0);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_Head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Cart | Muddy Paws Adventure Gear\"\n      }, \"title\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"theme-color\",\n        content: \"#ffffff\"\n      }, \"theme-color\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Adventure gear to help your pet climb any mountain.\"\n      }, \"description\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"Dogs,Cats,Paws,Adventure,Gear,Harnesses\"\n      }, \"keywords\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"author\",\n        content: \"Bennett Huffman\"\n      }, \"author\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"width=device-width, initial-scale=1.0\"\n      }, \"viewport\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, \"favion\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CategoryHeader, {\n      title: \"cart\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Items in cart: \", cart.length]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [\"Total price: \", totalPrice]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Cart, \"yW3F9rTSSpXoz1qpM/EYKrSPIEE=\");\n\n_c = Cart;\n\nvar _c;\n\n$RefreshReg$(_c, \"Cart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcz82MTAzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJjYXJ0Iiwic2V0Q2FydCIsImNvbnNvbGUiLCJsb2ciLCJ0b3RhbFByaWNlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInByaWNlIiwicXVhbnRpdHkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsb0JBRUhDLHdEQUFVLENBQUNDLGdFQUFELENBRlA7QUFBQSxNQUVwQkMsSUFGb0I7QUFBQSxNQUVkQyxPQUZjOztBQUczQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLElBQUksQ0FBQ0ssTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsSUFBTjtBQUFBLFdBQWVELEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLEdBQWFELElBQUksQ0FBQ0UsUUFBdkM7QUFBQSxHQUFaLEVBQTZELENBQTdELENBQW5CO0FBRUEsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQSxTQUFXLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBd0IsWUFBSSxFQUFDLGFBQTdCO0FBQTJDLGVBQU8sRUFBQztBQUFuRCxTQUFVLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFFSSxZQUFJLEVBQUMsYUFGVDtBQUdJLGVBQU8sRUFBQztBQUhaLFNBQ1EsYUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFRSTtBQUVJLFlBQUksRUFBQyxVQUZUO0FBR0ksZUFBTyxFQUFDO0FBSFosU0FDUSxVQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQWFJO0FBQW1CLFlBQUksRUFBQyxRQUF4QjtBQUFpQyxlQUFPLEVBQUM7QUFBekMsU0FBVSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiSixlQWNJO0FBRUksWUFBSSxFQUFDLFVBRlQ7QUFHSSxlQUFPLEVBQUM7QUFIWixTQUNRLFVBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKLGVBbUJJO0FBQW1CLFdBQUcsRUFBQyxNQUF2QjtBQUE4QixZQUFJLEVBQUM7QUFBbkMsU0FBVSxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFzQkkscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCSixlQXVCSSxxRUFBQyxjQUFEO0FBQWdCLFdBQUssRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJKLGVBd0JJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUEyQkk7QUFBQSxvQ0FBcUJULElBQUksQ0FBQ1UsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKLGVBNEJJO0FBQUEsa0NBQW1CTixVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1Qko7QUFBQSxrQkFESjtBQWlDSDs7R0F2Q3VCUCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvY2FydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvSGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcblxuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICAgIGNvbnN0IHRvdGFsUHJpY2UgPSBjYXJ0LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiBhY2MgKyBjdXJyLnByaWNlICogY3Vyci5xdWFudGl0eSwgMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+Q2FydCB8IE11ZGR5IFBhd3MgQWR2ZW50dXJlIEdlYXI8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIGtleT1cInRoZW1lLWNvbG9yXCIgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiNmZmZmZmZcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIGtleT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIkFkdmVudHVyZSBnZWFyIHRvIGhlbHAgeW91ciBwZXQgY2xpbWIgYW55IG1vdW50YWluLlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJrZXl3b3Jkc1wiXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJEb2dzLENhdHMsUGF3cyxBZHZlbnR1cmUsR2VhcixIYXJuZXNzZXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEga2V5PVwiYXV0aG9yXCIgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJCZW5uZXR0IEh1ZmZtYW5cIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgICAgICAgIGtleT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsga2V5PVwiZmF2aW9uXCIgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPENhdGVnb3J5SGVhZGVyIHRpdGxlPVwiY2FydFwiIC8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDxkaXY+SXRlbXMgaW4gY2FydDoge2NhcnQubGVuZ3RofTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBwcmljZToge3RvdGFsUHJpY2V9PC9kaXY+XG4gICAgICAgICAgICB7LyogPEZvb3RlciAvPiAqL31cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cart.js\n");

/***/ })

})