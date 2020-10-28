webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/bennetthuffman/code/pui/homework_6/components/CartItem.js\";\n\n\n\nfunction CartItem(_ref) {\n  var src = _ref.src,\n      alt = _ref.alt,\n      name = _ref.name,\n      slug = _ref.slug,\n      price = _ref.price,\n      color = _ref.color,\n      size = _ref.size,\n      onRemove = _ref.onRemove;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cart-item my-5\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"cart-item__content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"bg-neutral-100 cart-item__img mr-4\",\n          src: src,\n          alt: alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: \"mb-3\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"cart-item__color-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"cart-item__color color-box--\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n              className: \"ml-2\",\n              children: color\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"display-block my-1\",\n            children: [\"$\", price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"display-block my-1\",\n            children: [\"Size: \", size]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"display-block my-1\",\n            children: \"Quantity\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          return onRemove();\n        },\n        className: \"cart-item__cross\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          width: \"24\",\n          height: \"24\",\n          viewBox: \"0 0 34 34\",\n          fill: \"none\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M1 0.876953L17 16.877M33 32.877L17 16.877M17 16.877L33 0.876953M17 16.877L1 32.877\",\n            stroke: \"#666666\",\n            strokeWidth: \"2.35962\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n_c = CartItem;\nCartItem.propTypes = {\n  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  slug: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  price: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcz81YWNmIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwic3JjIiwiYWx0IiwibmFtZSIsInNsdWciLCJwcmljZSIsImNvbG9yIiwic2l6ZSIsIm9uUmVtb3ZlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBMEU7QUFBQSxNQUF0REMsR0FBc0QsUUFBdERBLEdBQXNEO0FBQUEsTUFBakRDLEdBQWlELFFBQWpEQSxHQUFpRDtBQUFBLE1BQTVDQyxJQUE0QyxRQUE1Q0EsSUFBNEM7QUFBQSxNQUF0Q0MsSUFBc0MsUUFBdENBLElBQXNDO0FBQUEsTUFBaENDLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLE1BQXpCQyxLQUF5QixRQUF6QkEsS0FBeUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBRXJGLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUMsb0NBQWY7QUFBb0QsYUFBRyxFQUFFUCxHQUF6RDtBQUE4RCxhQUFHLEVBQUVDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBQyxNQUFkO0FBQUEsc0JBQXNCQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUk7QUFBSyxxQkFBUyxFQUFDLDRCQUFmO0FBQUEsb0NBQ0k7QUFBTSx1QkFBUyx3Q0FBaUNHLEtBQWpDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQU8sdUJBQVMsRUFBQyxNQUFqQjtBQUFBLHdCQUF5QkE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkosZUFNSTtBQUFPLHFCQUFTLEVBQUMsb0JBQWpCO0FBQUEsNEJBQXdDRCxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFPSTtBQUFPLHFCQUFTLEVBQUMsb0JBQWpCO0FBQUEsaUNBQTZDRSxJQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEosZUFRSTtBQUFPLHFCQUFTLEVBQUMsb0JBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQWNJO0FBQUssZUFBTyxFQUFFO0FBQUEsaUJBQU1DLFFBQVEsRUFBZDtBQUFBLFNBQWQ7QUFBZ0MsaUJBQVMsRUFBQyxrQkFBMUM7QUFBQSwrQkFDSTtBQUFLLGVBQUssRUFBQyxJQUFYO0FBQWdCLGdCQUFNLEVBQUMsSUFBdkI7QUFBNEIsaUJBQU8sRUFBQyxXQUFwQztBQUFnRCxjQUFJLEVBQUMsTUFBckQ7QUFBNEQsZUFBSyxFQUFDLDRCQUFsRTtBQUFBLGlDQUNJO0FBQU0sYUFBQyxFQUFDLG9GQUFSO0FBQTZGLGtCQUFNLEVBQUMsU0FBcEc7QUFBOEcsdUJBQVcsRUFBQztBQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQXdCSDtLQTFCdUJSLFE7QUE0QnhCQSxRQUFRLENBQUNTLFNBQVQsR0FBcUI7QUFDakJSLEtBQUcsRUFBRVMsaURBQVMsQ0FBQ0MsTUFERTtBQUVqQlQsS0FBRyxFQUFFUSxpREFBUyxDQUFDQyxNQUZFO0FBR2pCUixNQUFJLEVBQUVPLGlEQUFTLENBQUNDLE1BSEM7QUFJakJQLE1BQUksRUFBRU0saURBQVMsQ0FBQ0MsTUFKQztBQUtqQk4sT0FBSyxFQUFFSyxpREFBUyxDQUFDRSxNQUxBO0FBTWpCTixPQUFLLEVBQUVJLGlEQUFTLENBQUNDLE1BTkE7QUFPakJKLE1BQUksRUFBRUcsaURBQVMsQ0FBQ0MsTUFQQztBQVFqQkgsVUFBUSxFQUFFRSxpREFBUyxDQUFDRztBQVJILENBQXJCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRJdGVtKHsgc3JjLCBhbHQsIG5hbWUsIHNsdWcsIHByaWNlLCBjb2xvciwgc2l6ZSwgb25SZW1vdmUgfSkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbSBteS01XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJiZy1uZXV0cmFsLTEwMCBjYXJ0LWl0ZW1fX2ltZyBtci00XCIgc3JjPXtzcmN9IGFsdD17YWx0fSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTNcIj57bmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX2NvbG9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGNhcnQtaXRlbV9fY29sb3IgY29sb3ItYm94LS0ke2NvbG9yfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cIm1sLTJcIj57Y29sb3J9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImRpc3BsYXktYmxvY2sgbXktMVwiPiR7cHJpY2V9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJkaXNwbGF5LWJsb2NrIG15LTFcIj5TaXplOiB7c2l6ZX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImRpc3BsYXktYmxvY2sgbXktMVwiPlF1YW50aXR5PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZSgpfSBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX2Nyb3NzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAzNCAzNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xIDAuODc2OTUzTDE3IDE2Ljg3N00zMyAzMi44NzdMMTcgMTYuODc3TTE3IDE2Ljg3N0wzMyAwLjg3Njk1M00xNyAxNi44NzdMMSAzMi44NzdcIiBzdHJva2U9XCIjNjY2NjY2XCIgc3Ryb2tlV2lkdGg9XCIyLjM1OTYyXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbkNhcnRJdGVtLnByb3BUeXBlcyA9IHtcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmljZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartItem.js\n");

/***/ })

})