webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartItem; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/bennetthuffman/code/pui/homework_6/components/CartItem.js\";\n\n\n\nfunction CartItem(_ref) {\n  var src = _ref.src,\n      alt = _ref.alt,\n      name = _ref.name,\n      slug = _ref.slug,\n      price = _ref.price,\n      color = _ref.color,\n      size = _ref.size,\n      onRemove = _ref.onRemove;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"cart-item my-5\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"cart-item__content\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"bg-neutral-100 cart-item__img mr-4\",\n          src: src,\n          alt: alt\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: \"mb-3\",\n            children: name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"cart-item__color-container\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: \"cart-item__color color-box--\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 29\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n              className: \"ml-2\",\n              children: color\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"display-block my-1\",\n            children: [\"$\", price]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"display-block my-1\",\n            children: [\"Size: \", size]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"small\", {\n            className: \"display-block my-1\",\n            children: \"Quantity\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          return onRemove;\n        },\n        className: \"cart__cross\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n          width: \"24\",\n          height: \"24\",\n          viewBox: \"0 0 34 34\",\n          fill: \"none\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n            d: \"M1 0.876953L17 16.877M33 32.877L17 16.877M17 16.877L33 0.876953M17 16.877L1 32.877\",\n            stroke: \"#666666\",\n            strokeWidth: \"2.35962\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, this)\n  }, void 0, false);\n}\n_c = CartItem;\nCartItem.propTypes = {\n  src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  alt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  slug: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  price: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,\n  color: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,\n  onRemoev: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"CartItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0SXRlbS5qcz81YWNmIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwic3JjIiwiYWx0IiwibmFtZSIsInNsdWciLCJwcmljZSIsImNvbG9yIiwic2l6ZSIsIm9uUmVtb3ZlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwib25SZW1vZXYiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxPQUEwRTtBQUFBLE1BQXREQyxHQUFzRCxRQUF0REEsR0FBc0Q7QUFBQSxNQUFqREMsR0FBaUQsUUFBakRBLEdBQWlEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQXRDQyxJQUFzQyxRQUF0Q0EsSUFBc0M7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLEtBQXlCLFFBQXpCQSxLQUF5QjtBQUFBLE1BQWxCQyxJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFFckYsc0JBQ0k7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxvQ0FBZjtBQUFvRCxhQUFHLEVBQUVQLEdBQXpEO0FBQThELGFBQUcsRUFBRUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLE1BQWQ7QUFBQSxzQkFBc0JDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFFSTtBQUFLLHFCQUFTLEVBQUMsNEJBQWY7QUFBQSxvQ0FDSTtBQUFNLHVCQUFTLHdDQUFpQ0csS0FBakM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBTyx1QkFBUyxFQUFDLE1BQWpCO0FBQUEsd0JBQXlCQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQU1JO0FBQU8scUJBQVMsRUFBQyxvQkFBakI7QUFBQSw0QkFBd0NELEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSixlQU9JO0FBQU8scUJBQVMsRUFBQyxvQkFBakI7QUFBQSxpQ0FBNkNFLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSixlQVFJO0FBQU8scUJBQVMsRUFBQyxvQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBY0k7QUFBSyxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsUUFBTjtBQUFBLFNBQWQ7QUFBOEIsaUJBQVMsRUFBQyxhQUF4QztBQUFBLCtCQUNJO0FBQUssZUFBSyxFQUFDLElBQVg7QUFBZ0IsZ0JBQU0sRUFBQyxJQUF2QjtBQUE0QixpQkFBTyxFQUFDLFdBQXBDO0FBQWdELGNBQUksRUFBQyxNQUFyRDtBQUE0RCxlQUFLLEVBQUMsNEJBQWxFO0FBQUEsaUNBQ0k7QUFBTSxhQUFDLEVBQUMsb0ZBQVI7QUFBNkYsa0JBQU0sRUFBQyxTQUFwRztBQUE4Ryx1QkFBVyxFQUFDO0FBQTFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBd0JIO0tBMUJ1QlIsUTtBQTRCeEJBLFFBQVEsQ0FBQ1MsU0FBVCxHQUFxQjtBQUNqQlIsS0FBRyxFQUFFUyxpREFBUyxDQUFDQyxNQURFO0FBRWpCVCxLQUFHLEVBQUVRLGlEQUFTLENBQUNDLE1BRkU7QUFHakJSLE1BQUksRUFBRU8saURBQVMsQ0FBQ0MsTUFIQztBQUlqQlAsTUFBSSxFQUFFTSxpREFBUyxDQUFDQyxNQUpDO0FBS2pCTixPQUFLLEVBQUVLLGlEQUFTLENBQUNFLE1BTEE7QUFNakJOLE9BQUssRUFBRUksaURBQVMsQ0FBQ0MsTUFOQTtBQU9qQkosTUFBSSxFQUFFRyxpREFBUyxDQUFDQyxNQVBDO0FBUWpCRSxVQUFRLEVBQUVILGlEQUFTLENBQUNJO0FBUkgsQ0FBckIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRJdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydEl0ZW0oeyBzcmMsIGFsdCwgbmFtZSwgc2x1ZywgcHJpY2UsIGNvbG9yLCBzaXplLCBvblJlbW92ZSB9KSB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtIG15LTVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJnLW5ldXRyYWwtMTAwIGNhcnQtaXRlbV9faW1nIG1yLTRcIiBzcmM9e3NyY30gYWx0PXthbHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItM1wiPntuYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9fY29sb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgY2FydC1pdGVtX19jb2xvciBjb2xvci1ib3gtLSR7Y29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwibWwtMlwiPntjb2xvcn08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZGlzcGxheS1ibG9jayBteS0xXCI+JHtwcmljZX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImRpc3BsYXktYmxvY2sgbXktMVwiPlNpemU6IHtzaXplfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZGlzcGxheS1ibG9jayBteS0xXCI+UXVhbnRpdHk8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlfSBjbGFzc05hbWU9XCJjYXJ0X19jcm9zc1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMzQgMzRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAwLjg3Njk1M0wxNyAxNi44NzdNMzMgMzIuODc3TDE3IDE2Ljg3N00xNyAxNi44NzdMMzMgMC44NzY5NTNNMTcgMTYuODc3TDEgMzIuODc3XCIgc3Ryb2tlPVwiIzY2NjY2NlwiIHN0cm9rZVdpZHRoPVwiMi4zNTk2MlwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5DYXJ0SXRlbS5wcm9wVHlwZXMgPSB7XG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcHJpY2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblJlbW9ldjogUHJvcFR5cGVzLmZ1bmMsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartItem.js\n");

/***/ })

})