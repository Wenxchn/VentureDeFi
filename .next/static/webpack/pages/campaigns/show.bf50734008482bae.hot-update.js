"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/campaign */ \"./ethereum/campaign.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Show = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Show, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Show);\n    function Show() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this, Show);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_this), \"renderCards\", function() {\n            var _props = _this.props, balance = _props.balance, manager = _props.manager, miminumContribution = _props.miminumContribution, requestsCount = _props.requestsCount, approversCount = _props.approversCount;\n            var items = [\n                {\n                    header: manager,\n                    meta: \"Address of Manager\",\n                    description: \"The manager created this campaign and can create requests to withdraw ETH.\",\n                    style: {\n                        overflowWrap: \"break-word\"\n                    }\n                },\n                {\n                    header: miminumContribution,\n                    meta: \"Minimum Contribution of Wei\",\n                    description: \"You must contribute at least this much Wei to support this campaign.\",\n                    style: {\n                        overflowWrap: \"break-word\"\n                    }\n                },\n                {\n                    header: requestsCount,\n                    meta: \"Number of Requests\",\n                    description: \"A request tries to withdraw ETH from this campaign.\",\n                    style: {\n                        overflowWrap: \"break-word\"\n                    }\n                }\n            ];\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Card.Group, {\n                items: items\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wenxc\\\\Desktop\\\\VentureDeFi\\\\pages\\\\campaigns\\\\show.js\",\n                lineNumber: 42,\n                columnNumber: 10\n            }, (0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_this));\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(Show, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Show\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\wenxc\\\\Desktop\\\\VentureDeFi\\\\pages\\\\campaigns\\\\show.js\",\n                            lineNumber: 48,\n                            columnNumber: 5\n                        }, this),\n                        this.renderCards()\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\wenxc\\\\Desktop\\\\VentureDeFi\\\\pages\\\\campaigns\\\\show.js\",\n                    lineNumber: 47,\n                    columnNumber: 4\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(function() {\n                    var campaign, summary;\n                    return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(props.query.address);\n                                return [\n                                    4,\n                                    campaign.methods.getSummary().call()\n                                ];\n                            case 1:\n                                summary = _state.sent();\n                                return [\n                                    2,\n                                    {\n                                        miminumContribution: summary[0],\n                                        balance: summary[1],\n                                        requestsCount: summary[2],\n                                        approversCount: summary[3],\n                                        manager: summary[4]\n                                    }\n                                ];\n                        }\n                    });\n                })();\n            }\n        }\n    ]);\n    return Show;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Show);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQ0k7QUFDRTtBQUU5QyxRQUFVLGlCQWlEVDs7OEVBakRLSSxJQUFJOytGQUFKQSxJQUFJO2FBQUpBLElBQUk7Z0dBQUpBLElBQUk7OztRQWFUQyxnRkFBQUEsQ0FBQUEsd0ZBQUFBLFNBQUFBLGFBQVcsRUFBRyxXQUFNO1lBQ25CLElBQWlGLE1BQVUsR0FBVixNQUFLQyxLQUFLLEVBQW5GQyxPQUFPLEdBQWtFLE1BQVUsQ0FBbkZBLE9BQU8sRUFBRUMsT0FBTyxHQUF5RCxNQUFVLENBQTFFQSxPQUFPLEVBQUVDLG1CQUFtQixHQUFvQyxNQUFVLENBQWpFQSxtQkFBbUIsRUFBRUMsYUFBYSxHQUFxQixNQUFVLENBQTVDQSxhQUFhLEVBQUVDLGNBQWMsR0FBSyxNQUFVLENBQTdCQSxjQUFjO1lBRTVFLElBQU1DLEtBQUssR0FBRztnQkFDYjtvQkFDQ0MsTUFBTSxFQUFFTCxPQUFPO29CQUNmTSxJQUFJLEVBQUUsb0JBQW9CO29CQUMxQkMsV0FBVyxFQUFFLDRFQUE0RTtvQkFDekZDLEtBQUssRUFBRTt3QkFBRUMsWUFBWSxFQUFFLFlBQVk7cUJBQUU7aUJBQ3JDO2dCQUNEO29CQUNDSixNQUFNLEVBQUVKLG1CQUFtQjtvQkFDM0JLLElBQUksRUFBRSw2QkFBNkI7b0JBQ25DQyxXQUFXLEVBQUUsc0VBQXNFO29CQUNuRkMsS0FBSyxFQUFFO3dCQUFFQyxZQUFZLEVBQUUsWUFBWTtxQkFBRTtpQkFDckM7Z0JBQ0Q7b0JBQ0NKLE1BQU0sRUFBRUgsYUFBYTtvQkFDckJJLElBQUksRUFBRSxvQkFBb0I7b0JBQzFCQyxXQUFXLEVBQUUscURBQXFEO29CQUNsRUMsS0FBSyxFQUFFO3dCQUFFQyxZQUFZLEVBQUUsWUFBWTtxQkFBRTtpQkFDckM7YUFDRDtZQUNELHFCQUFPLDhEQUFDaEIseURBQVU7Z0JBQUNXLEtBQUssRUFBRUEsS0FBSzs7Ozs7K0dBQUk7UUFDcEMsQ0FBQzs7O21GQXJDSVIsSUFBSTs7WUF1Q1RlLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUFHO2dCQUNSLHFCQUNDLDhEQUFDakIsMERBQU07O3NDQUNOLDhEQUFDa0IsSUFBRTtzQ0FBQyxNQUFJOzs7OztnQ0FBSzt3QkFDWixJQUFJLENBQUNmLFdBQVcsRUFBRTs7Ozs7O3dCQUNYLENBQ1Q7WUFDRixDQUFDOzs7O1lBN0NZZ0IsR0FBZSxFQUFmQSxpQkFBZTttQkFBNUIsU0FBYUEsZUFBZSxDQUFDZixLQUFLO3VCQUFsQyxnR0FBb0M7d0JBQzdCZ0IsUUFBUSxFQUNSQyxPQUFPOzs7O2dDQURQRCxRQUFRLEdBQUduQiw4REFBUSxDQUFDRyxLQUFLLENBQUNrQixLQUFLLENBQUNDLE9BQU8sQ0FBQztnQ0FDOUI7O29DQUFNSCxRQUFRLENBQUNJLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFLENBQUNDLElBQUksRUFBRTtrQ0FBQTs7Z0NBQXBETCxPQUFPLEdBQUcsYUFBMEM7Z0NBQzFEOztvQ0FBTzt3Q0FDTmQsbUJBQW1CLEVBQUVjLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0NBQy9CaEIsT0FBTyxFQUFFZ0IsT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDbkJiLGFBQWEsRUFBRWEsT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDekJaLGNBQWMsRUFBRVksT0FBTyxDQUFDLENBQUMsQ0FBQzt3Q0FDMUJmLE9BQU8sRUFBRWUsT0FBTyxDQUFDLENBQUMsQ0FBQztxQ0FDbkI7a0NBQUE7OztnQkFDRixDQUFDO2FBQUE7OztXQVhJbkIsSUFBSTtDQStDVCxDQS9Da0JKLDRDQUFTLENBK0MzQjtBQUVELCtEQUFlSSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2IwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJ1xyXG5cclxuY2xhc3MgU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0c3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG5cdFx0Y29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKVxyXG5cdFx0Y29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKVxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWltaW51bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuXHRcdFx0YmFsYW5jZTogc3VtbWFyeVsxXSxcclxuXHRcdFx0cmVxdWVzdHNDb3VudDogc3VtbWFyeVsyXSxcclxuXHRcdFx0YXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcblx0XHRcdG1hbmFnZXI6IHN1bW1hcnlbNF1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlckNhcmRzID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBiYWxhbmNlLCBtYW5hZ2VyLCBtaW1pbnVtQ29udHJpYnV0aW9uLCByZXF1ZXN0c0NvdW50LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wc1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aGVhZGVyOiBtYW5hZ2VyLFxyXG5cdFx0XHRcdG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IEVUSC4nLFxyXG5cdFx0XHRcdHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGhlYWRlcjogbWltaW51bUNvbnRyaWJ1dGlvbixcclxuXHRcdFx0XHRtZXRhOiAnTWluaW11bSBDb250cmlidXRpb24gb2YgV2VpJyxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIFdlaSB0byBzdXBwb3J0IHRoaXMgY2FtcGFpZ24uJyxcclxuXHRcdFx0XHRzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHRoZWFkZXI6IHJlcXVlc3RzQ291bnQsXHJcblx0XHRcdFx0bWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246ICdBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgRVRIIGZyb20gdGhpcyBjYW1wYWlnbi4nLFxyXG5cdFx0XHRcdHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuXHRcdFx0fVxyXG5cdFx0XVxyXG5cdFx0cmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgzPlNob3c8L2gzPlxyXG5cdFx0XHRcdHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd1xyXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ2FyZCIsIkxheW91dCIsIkNhbXBhaWduIiwiU2hvdyIsInJlbmRlckNhcmRzIiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbWludW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiR3JvdXAiLCJyZW5kZXIiLCJoMyIsImdldEluaXRpYWxQcm9wcyIsImNhbXBhaWduIiwic3VtbWFyeSIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n"));

/***/ })

});