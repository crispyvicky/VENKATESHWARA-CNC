"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/invoices/[id]/pdf/route";
exports.ids = ["app/api/invoices/[id]/pdf/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&page=%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&page=%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_VENKATESHWARA_VENKATESHWARA_CNC_app_api_invoices_id_pdf_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/invoices/[id]/pdf/route.ts */ \"(rsc)/./app/api/invoices/[id]/pdf/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/invoices/[id]/pdf/route\",\n        pathname: \"/api/invoices/[id]/pdf\",\n        filename: \"route\",\n        bundlePath: \"app/api/invoices/[id]/pdf/route\"\n    },\n    resolvedPagePath: \"E:\\\\VENKATESHWARA\\\\VENKATESHWARA-CNC\\\\app\\\\api\\\\invoices\\\\[id]\\\\pdf\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_VENKATESHWARA_VENKATESHWARA_CNC_app_api_invoices_id_pdf_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/invoices/[id]/pdf/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZpbnZvaWNlcyUyRiU1QmlkJTVEJTJGcGRmJTJGcm91dGUmcGFnZT0lMkZhcGklMkZpbnZvaWNlcyUyRiU1QmlkJTVEJTJGcGRmJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGaW52b2ljZXMlMkYlNUJpZCU1RCUyRnBkZiUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDVkVOS0FURVNIV0FSQSU1Q1ZFTktBVEVTSFdBUkEtQ05DJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDVkVOS0FURVNIV0FSQSU1Q1ZFTktBVEVTSFdBUkEtQ05DJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM2QjtBQUMxRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlbmthdGVzaHdhcmEtY25jLW5leHRqcy8/ZWI3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxWRU5LQVRFU0hXQVJBXFxcXFZFTktBVEVTSFdBUkEtQ05DXFxcXGFwcFxcXFxhcGlcXFxcaW52b2ljZXNcXFxcW2lkXVxcXFxwZGZcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ludm9pY2VzL1tpZF0vcGRmL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvaW52b2ljZXMvW2lkXS9wZGZcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ludm9pY2VzL1tpZF0vcGRmL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiRTpcXFxcVkVOS0FURVNIV0FSQVxcXFxWRU5LQVRFU0hXQVJBLUNOQ1xcXFxhcHBcXFxcYXBpXFxcXGludm9pY2VzXFxcXFtpZF1cXFxccGRmXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9pbnZvaWNlcy9baWRdL3BkZi9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&page=%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/invoices/[id]/pdf/route.ts":
/*!********************************************!*\
  !*** ./app/api/invoices/[id]/pdf/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_Invoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Invoice */ \"(rsc)/./src/models/Invoice.ts\");\n/* harmony import */ var pdfkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfkit */ \"(rsc)/./node_modules/pdfkit/js/pdfkit.es.js\");\n\n\n\n\n\n\nconst runtime = \"nodejs\";\nasync function GET(_, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n    const invoice = await _models_Invoice__WEBPACK_IMPORTED_MODULE_4__.Invoice.findById(params.id).populate(\"customer jobs\").lean();\n    if (!invoice) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not found\"\n    }, {\n        status: 404\n    });\n    const doc = new pdfkit__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n        size: \"A4\",\n        margin: 50\n    });\n    const chunks = [];\n    doc.on(\"data\", (chunk)=>chunks.push(chunk));\n    doc.fontSize(18).text(\"Venkateshwara CNC\", {\n        align: \"left\"\n    });\n    doc.moveDown(0.5);\n    doc.fontSize(12).text(\"Hyderabad, India\");\n    doc.moveDown();\n    doc.fontSize(16).text(`Invoice ${invoice.number}`, {\n        align: \"right\"\n    });\n    doc.moveDown();\n    const customer = invoice.customer || {};\n    doc.fontSize(12).text(`Bill To: ${customer.name || \"Customer\"}`);\n    if (customer.phone) doc.text(`Phone: ${customer.phone}`);\n    if (customer.address) doc.text(`Address: ${customer.address}`);\n    doc.moveDown();\n    doc.fontSize(12).text(\"Items:\");\n    doc.moveDown(0.25);\n    invoice.jobs?.forEach((job, idx)=>{\n        doc.text(`${idx + 1}. ${job.description}  x${job.quantity} @ ₹${job.rate}`);\n    });\n    doc.moveDown();\n    doc.text(`Subtotal: ₹${invoice.subtotal}`);\n    doc.text(`Discount: ₹${invoice.discount || 0}`);\n    doc.text(`Total: ₹${invoice.total}`);\n    doc.text(`Paid: ₹${invoice.paid}`);\n    doc.text(`Balance: ₹${invoice.balance}`);\n    doc.end();\n    const buffer = await new Promise((resolve)=>{\n        doc.on(\"end\", ()=>resolve(Buffer.concat(chunks)));\n    });\n    // Convert Buffer to Uint8Array for Response body\n    const bytes = new Uint8Array(buffer);\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(bytes, {\n        headers: {\n            \"Content-Type\": \"application/pdf\",\n            \"Content-Disposition\": `attachment; filename=${invoice.number}.pdf`\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2ludm9pY2VzL1tpZF0vcGRmL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNYO0FBQ0o7QUFDSTtBQUNGO0FBQ1Y7QUFFMUIsTUFBTU0sVUFBVSxTQUFTO0FBRXpCLGVBQWVDLElBQUlDLENBQWMsRUFBRSxFQUFFQyxNQUFNLEVBQThCO0lBQzlFLE1BQU1DLFVBQVUsTUFBTVQsMkRBQWdCQSxDQUFDQyxrREFBV0E7SUFDbEQsSUFBSSxDQUFDUSxTQUFTLE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRWhGLE1BQU1WLDBEQUFpQkE7SUFDdkIsTUFBTVcsVUFBVSxNQUFNVixvREFBT0EsQ0FBQ1csUUFBUSxDQUFDTixPQUFPTyxFQUFFLEVBQUVDLFFBQVEsQ0FBQyxpQkFBaUJDLElBQUk7SUFDaEYsSUFBSSxDQUFDSixTQUFTLE9BQU9kLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFZLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRTdFLE1BQU1NLE1BQU0sSUFBSWQsOENBQVdBLENBQUM7UUFBRWUsTUFBTTtRQUFNQyxRQUFRO0lBQUc7SUFDckQsTUFBTUMsU0FBbUIsRUFBRTtJQUMzQkgsSUFBSUksRUFBRSxDQUFDLFFBQVEsQ0FBQ0MsUUFBVUYsT0FBT0csSUFBSSxDQUFDRDtJQUV0Q0wsSUFBSU8sUUFBUSxDQUFDLElBQUlDLElBQUksQ0FBQyxxQkFBcUI7UUFBRUMsT0FBTztJQUFPO0lBQzNEVCxJQUFJVSxRQUFRLENBQUM7SUFDYlYsSUFBSU8sUUFBUSxDQUFDLElBQUlDLElBQUksQ0FBQztJQUN0QlIsSUFBSVUsUUFBUTtJQUVaVixJQUFJTyxRQUFRLENBQUMsSUFBSUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFYixRQUFRZ0IsTUFBTSxDQUFDLENBQUMsRUFBRTtRQUFFRixPQUFPO0lBQVE7SUFDcEVULElBQUlVLFFBQVE7SUFFWixNQUFNRSxXQUFnQixRQUFpQkEsUUFBUSxJQUFJLENBQUM7SUFDcERaLElBQUlPLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUVJLFNBQVNDLElBQUksSUFBSSxXQUFXLENBQUM7SUFDL0QsSUFBSUQsU0FBU0UsS0FBSyxFQUFFZCxJQUFJUSxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUVJLFNBQVNFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELElBQUlGLFNBQVNHLE9BQU8sRUFBRWYsSUFBSVEsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFSSxTQUFTRyxPQUFPLENBQUMsQ0FBQztJQUM3RGYsSUFBSVUsUUFBUTtJQUVaVixJQUFJTyxRQUFRLENBQUMsSUFBSUMsSUFBSSxDQUFDO0lBQ3RCUixJQUFJVSxRQUFRLENBQUM7SUFDYmYsUUFBUXFCLElBQUksRUFBRUMsUUFBUSxDQUFDQyxLQUFVQztRQUMvQm5CLElBQUlRLElBQUksQ0FBQyxDQUFDLEVBQUVXLE1BQU0sRUFBRSxFQUFFLEVBQUVELElBQUlFLFdBQVcsQ0FBQyxHQUFHLEVBQUVGLElBQUlHLFFBQVEsQ0FBQyxJQUFJLEVBQUVILElBQUlJLElBQUksQ0FBQyxDQUFDO0lBQzVFO0lBQ0F0QixJQUFJVSxRQUFRO0lBRVpWLElBQUlRLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRWIsUUFBUTRCLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDdkIsSUFBSVEsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFYixRQUFRNkIsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUM5Q3hCLElBQUlRLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRWIsUUFBUThCLEtBQUssQ0FBQyxDQUFDO0lBQ25DekIsSUFBSVEsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFYixRQUFRK0IsSUFBSSxDQUFDLENBQUM7SUFDakMxQixJQUFJUSxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUViLFFBQVFnQyxPQUFPLENBQUMsQ0FBQztJQUV2QzNCLElBQUk0QixHQUFHO0lBQ1AsTUFBTUMsU0FBUyxNQUFNLElBQUlDLFFBQWdCLENBQUNDO1FBQ3hDL0IsSUFBSUksRUFBRSxDQUFDLE9BQU8sSUFBTTJCLFFBQVFDLE9BQU9DLE1BQU0sQ0FBQzlCO0lBQzVDO0lBRUEsaURBQWlEO0lBQ2pELE1BQU0rQixRQUFRLElBQUlDLFdBQVdOO0lBRTdCLE9BQU8sSUFBSWhELHFEQUFZQSxDQUFDcUQsT0FBTztRQUM3QkUsU0FBUztZQUNQLGdCQUFnQjtZQUNoQix1QkFBdUIsQ0FBQyxxQkFBcUIsRUFBRXpDLFFBQVFnQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3JFO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlbmthdGVzaHdhcmEtY25jLW5leHRqcy8uL2FwcC9hcGkvaW52b2ljZXMvW2lkXS9wZGYvcm91dGUudHM/Yjk4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcclxuaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IHsgSW52b2ljZSB9IGZyb20gXCJAL21vZGVscy9JbnZvaWNlXCI7XHJcbmltcG9ydCBQREZEb2N1bWVudCBmcm9tIFwicGRma2l0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcnVudGltZSA9IFwibm9kZWpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKF86IE5leHRSZXF1ZXN0LCB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSkge1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XHJcblxyXG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgY29uc3QgaW52b2ljZSA9IGF3YWl0IEludm9pY2UuZmluZEJ5SWQocGFyYW1zLmlkKS5wb3B1bGF0ZShcImN1c3RvbWVyIGpvYnNcIikubGVhbigpO1xyXG4gIGlmICghaW52b2ljZSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiTm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuXHJcbiAgY29uc3QgZG9jID0gbmV3IFBERkRvY3VtZW50KHsgc2l6ZTogXCJBNFwiLCBtYXJnaW46IDUwIH0pO1xyXG4gIGNvbnN0IGNodW5rczogQnVmZmVyW10gPSBbXTtcclxuICBkb2Mub24oXCJkYXRhXCIsIChjaHVuaykgPT4gY2h1bmtzLnB1c2goY2h1bmsgYXMgQnVmZmVyKSk7XHJcblxyXG4gIGRvYy5mb250U2l6ZSgxOCkudGV4dChcIlZlbmthdGVzaHdhcmEgQ05DXCIsIHsgYWxpZ246IFwibGVmdFwiIH0pO1xyXG4gIGRvYy5tb3ZlRG93bigwLjUpO1xyXG4gIGRvYy5mb250U2l6ZSgxMikudGV4dChcIkh5ZGVyYWJhZCwgSW5kaWFcIik7XHJcbiAgZG9jLm1vdmVEb3duKCk7XHJcblxyXG4gIGRvYy5mb250U2l6ZSgxNikudGV4dChgSW52b2ljZSAke2ludm9pY2UubnVtYmVyfWAsIHsgYWxpZ246IFwicmlnaHRcIiB9KTtcclxuICBkb2MubW92ZURvd24oKTtcclxuXHJcbiAgY29uc3QgY3VzdG9tZXI6IGFueSA9IChpbnZvaWNlIGFzIGFueSkuY3VzdG9tZXIgfHwge307XHJcbiAgZG9jLmZvbnRTaXplKDEyKS50ZXh0KGBCaWxsIFRvOiAke2N1c3RvbWVyLm5hbWUgfHwgXCJDdXN0b21lclwifWApO1xyXG4gIGlmIChjdXN0b21lci5waG9uZSkgZG9jLnRleHQoYFBob25lOiAke2N1c3RvbWVyLnBob25lfWApO1xyXG4gIGlmIChjdXN0b21lci5hZGRyZXNzKSBkb2MudGV4dChgQWRkcmVzczogJHtjdXN0b21lci5hZGRyZXNzfWApO1xyXG4gIGRvYy5tb3ZlRG93bigpO1xyXG5cclxuICBkb2MuZm9udFNpemUoMTIpLnRleHQoXCJJdGVtczpcIik7XHJcbiAgZG9jLm1vdmVEb3duKDAuMjUpO1xyXG4gIGludm9pY2Uuam9icz8uZm9yRWFjaCgoam9iOiBhbnksIGlkeDogbnVtYmVyKSA9PiB7XHJcbiAgICBkb2MudGV4dChgJHtpZHggKyAxfS4gJHtqb2IuZGVzY3JpcHRpb259ICB4JHtqb2IucXVhbnRpdHl9IEAg4oK5JHtqb2IucmF0ZX1gKTtcclxuICB9KTtcclxuICBkb2MubW92ZURvd24oKTtcclxuXHJcbiAgZG9jLnRleHQoYFN1YnRvdGFsOiDigrkke2ludm9pY2Uuc3VidG90YWx9YCk7XHJcbiAgZG9jLnRleHQoYERpc2NvdW50OiDigrkke2ludm9pY2UuZGlzY291bnQgfHwgMH1gKTtcclxuICBkb2MudGV4dChgVG90YWw6IOKCuSR7aW52b2ljZS50b3RhbH1gKTtcclxuICBkb2MudGV4dChgUGFpZDog4oK5JHtpbnZvaWNlLnBhaWR9YCk7XHJcbiAgZG9jLnRleHQoYEJhbGFuY2U6IOKCuSR7aW52b2ljZS5iYWxhbmNlfWApO1xyXG5cclxuICBkb2MuZW5kKCk7XHJcbiAgY29uc3QgYnVmZmVyID0gYXdhaXQgbmV3IFByb21pc2U8QnVmZmVyPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgZG9jLm9uKFwiZW5kXCIsICgpID0+IHJlc29sdmUoQnVmZmVyLmNvbmNhdChjaHVua3MpKSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIENvbnZlcnQgQnVmZmVyIHRvIFVpbnQ4QXJyYXkgZm9yIFJlc3BvbnNlIGJvZHlcclxuICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlcik7XHJcblxyXG4gIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKGJ5dGVzLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vcGRmXCIsXHJcbiAgICAgIFwiQ29udGVudC1EaXNwb3NpdGlvblwiOiBgYXR0YWNobWVudDsgZmlsZW5hbWU9JHtpbnZvaWNlLm51bWJlcn0ucGRmYCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJJbnZvaWNlIiwiUERGRG9jdW1lbnQiLCJydW50aW1lIiwiR0VUIiwiXyIsInBhcmFtcyIsInNlc3Npb24iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJpbnZvaWNlIiwiZmluZEJ5SWQiLCJpZCIsInBvcHVsYXRlIiwibGVhbiIsImRvYyIsInNpemUiLCJtYXJnaW4iLCJjaHVua3MiLCJvbiIsImNodW5rIiwicHVzaCIsImZvbnRTaXplIiwidGV4dCIsImFsaWduIiwibW92ZURvd24iLCJudW1iZXIiLCJjdXN0b21lciIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiLCJqb2JzIiwiZm9yRWFjaCIsImpvYiIsImlkeCIsImRlc2NyaXB0aW9uIiwicXVhbnRpdHkiLCJyYXRlIiwic3VidG90YWwiLCJkaXNjb3VudCIsInRvdGFsIiwicGFpZCIsImJhbGFuY2UiLCJlbmQiLCJidWZmZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkJ1ZmZlciIsImNvbmNhdCIsImJ5dGVzIiwiVWludDhBcnJheSIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/invoices/[id]/pdf/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ADMIN_EMAIL = process.env.ADMIN_EMAIL;\nconst ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // optional plain password\nconst ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH; // optional bcrypt hash\nif (!ADMIN_EMAIL || !ADMIN_PASSWORD && !ADMIN_PASSWORD_HASH) {\n    throw new Error(\"Admin credentials env vars are missing (set ADMIN_EMAIL and ADMIN_PASSWORD or ADMIN_PASSWORD_HASH)\");\n}\nconst authOptions = {\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Admin\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                if (credentials.email !== ADMIN_EMAIL) return null;\n                let ok = false;\n                if (ADMIN_PASSWORD) {\n                    ok = credentials.password === ADMIN_PASSWORD;\n                } else if (ADMIN_PASSWORD_HASH) {\n                    ok = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, ADMIN_PASSWORD_HASH);\n                }\n                if (!ok) return null;\n                return {\n                    id: \"admin\",\n                    name: \"Admin\",\n                    email: ADMIN_EMAIL,\n                    role: \"admin\"\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = \"admin\";\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n};\nconst { auth } = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRDtBQUNZO0FBQ3BDO0FBRTlCLE1BQU1HLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVztBQUMzQyxNQUFNRyxpQkFBaUJGLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxFQUF3QiwwQkFBMEI7QUFDbkcsTUFBTUMsc0JBQXNCSCxRQUFRQyxHQUFHLENBQUNFLG1CQUFtQixFQUF3Qix1QkFBdUI7QUFFMUcsSUFBSSxDQUFDSixlQUFnQixDQUFDRyxrQkFBa0IsQ0FBQ0MscUJBQXNCO0lBQzdELE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVPLE1BQU1DLGNBQStCO0lBQzFDQyxTQUFTO1FBQUVDLFVBQVU7SUFBTTtJQUMzQkMsV0FBVztRQUNUWCwyRUFBbUJBLENBQUM7WUFDbEJZLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUMxRCxJQUFJSixZQUFZQyxLQUFLLEtBQUtaLGFBQWEsT0FBTztnQkFDOUMsSUFBSWlCLEtBQUs7Z0JBQ1QsSUFBSWQsZ0JBQWdCO29CQUNsQmMsS0FBS04sWUFBWUksUUFBUSxLQUFLWjtnQkFDaEMsT0FBTyxJQUFJQyxxQkFBcUI7b0JBQzlCYSxLQUFLLE1BQU1sQix1REFBYyxDQUFDWSxZQUFZSSxRQUFRLEVBQUVYO2dCQUNsRDtnQkFDQSxJQUFJLENBQUNhLElBQUksT0FBTztnQkFDaEIsT0FBTztvQkFBRUUsSUFBSTtvQkFBU1QsTUFBTTtvQkFBU0UsT0FBT1o7b0JBQWFvQixNQUFNO2dCQUFpQjtZQUNsRjtRQUNGO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUkQsTUFBTUgsSUFBSSxHQUFHO1lBQ2Y7WUFDQSxPQUFPRztRQUNUO1FBQ0EsTUFBTWhCLFNBQVEsRUFBRUEsT0FBTyxFQUFFZ0IsS0FBSyxFQUFFO1lBQzlCLElBQUloQixRQUFRaUIsSUFBSSxFQUFFO2dCQUNmakIsUUFBUWlCLElBQUksQ0FBU0osSUFBSSxHQUFHRyxNQUFNSCxJQUFJO1lBQ3pDO1lBQ0EsT0FBT2I7UUFDVDtJQUNGO0lBQ0FrQixPQUFPO1FBQ0xDLFFBQVE7SUFDVjtBQUNGLEVBQUU7QUFFSyxNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHOUIsZ0RBQVFBLENBQUNTLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW5rYXRlc2h3YXJhLWNuYy1uZXh0anMvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5cclxuY29uc3QgQURNSU5fRU1BSUwgPSBwcm9jZXNzLmVudi5BRE1JTl9FTUFJTCBhcyBzdHJpbmc7XHJcbmNvbnN0IEFETUlOX1BBU1NXT1JEID0gcHJvY2Vzcy5lbnYuQURNSU5fUEFTU1dPUkQgYXMgc3RyaW5nIHwgdW5kZWZpbmVkOyAvLyBvcHRpb25hbCBwbGFpbiBwYXNzd29yZFxyXG5jb25zdCBBRE1JTl9QQVNTV09SRF9IQVNIID0gcHJvY2Vzcy5lbnYuQURNSU5fUEFTU1dPUkRfSEFTSCBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7IC8vIG9wdGlvbmFsIGJjcnlwdCBoYXNoXHJcblxyXG5pZiAoIUFETUlOX0VNQUlMIHx8ICghQURNSU5fUEFTU1dPUkQgJiYgIUFETUlOX1BBU1NXT1JEX0hBU0gpKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiQWRtaW4gY3JlZGVudGlhbHMgZW52IHZhcnMgYXJlIG1pc3NpbmcgKHNldCBBRE1JTl9FTUFJTCBhbmQgQURNSU5fUEFTU1dPUkQgb3IgQURNSU5fUEFTU1dPUkRfSEFTSClcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xyXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6IFwiand0XCIgfSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkFkbWluXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xyXG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGlmIChjcmVkZW50aWFscy5lbWFpbCAhPT0gQURNSU5fRU1BSUwpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBvayA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChBRE1JTl9QQVNTV09SRCkge1xyXG4gICAgICAgICAgb2sgPSBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gQURNSU5fUEFTU1dPUkQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChBRE1JTl9QQVNTV09SRF9IQVNIKSB7XHJcbiAgICAgICAgICBvayA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCBBRE1JTl9QQVNTV09SRF9IQVNIKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvaykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHsgaWQ6IFwiYWRtaW5cIiwgbmFtZTogXCJBZG1pblwiLCBlbWFpbDogQURNSU5fRU1BSUwsIHJvbGU6IFwiYWRtaW5cIiBhcyBjb25zdCB9O1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICB0b2tlbi5yb2xlID0gXCJhZG1pblwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIHBhZ2VzOiB7XHJcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGF1dGggfSA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiQURNSU5fRU1BSUwiLCJwcm9jZXNzIiwiZW52IiwiQURNSU5fUEFTU1dPUkQiLCJBRE1JTl9QQVNTV09SRF9IQVNIIiwiRXJyb3IiLCJhdXRoT3B0aW9ucyIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJvayIsImNvbXBhcmUiLCJpZCIsInJvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJwYWdlcyIsInNpZ25JbiIsImF1dGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectToDatabase: () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"MONGODB_URI is not set in environment\");\n}\nasync function connectToDatabase() {\n    if (!global.mongooseConn) {\n        global.mongooseConn = {\n            conn: null,\n            promise: null\n        };\n    }\n    if (global.mongooseConn.conn) return global.mongooseConn.conn;\n    if (!global.mongooseConn.promise) {\n        global.mongooseConn.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            dbName: process.env.MONGODB_DB || \"venkateshwara\"\n        });\n    }\n    global.mongooseConn.conn = await global.mongooseConn.promise;\n    return global.mongooseConn.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQU9oQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVPLGVBQWVDO0lBQ3BCLElBQUksQ0FBQ0MsT0FBT0MsWUFBWSxFQUFFO1FBQ3hCRCxPQUFPQyxZQUFZLEdBQUc7WUFBRUMsTUFBTTtZQUFNQyxTQUFTO1FBQUs7SUFDcEQ7SUFFQSxJQUFJSCxPQUFPQyxZQUFZLENBQUNDLElBQUksRUFBRSxPQUFPRixPQUFPQyxZQUFZLENBQUNDLElBQUk7SUFFN0QsSUFBSSxDQUFDRixPQUFPQyxZQUFZLENBQUNFLE9BQU8sRUFBRTtRQUNoQ0gsT0FBT0MsWUFBWSxDQUFDRSxPQUFPLEdBQUdULHVEQUFnQixDQUFDQyxhQUFhO1lBQzFEVSxRQUFRVCxRQUFRQyxHQUFHLENBQUNTLFVBQVUsSUFBSTtRQUNwQztJQUNGO0lBRUFOLE9BQU9DLFlBQVksQ0FBQ0MsSUFBSSxHQUFHLE1BQU1GLE9BQU9DLFlBQVksQ0FBQ0UsT0FBTztJQUM1RCxPQUFPSCxPQUFPQyxZQUFZLENBQUNDLElBQUk7QUFDakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW5rYXRlc2h3YXJhLWNuYy1uZXh0anMvLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcclxuICB2YXIgbW9uZ29vc2VDb25uOiB7IGNvbm46IHR5cGVvZiBtb25nb29zZSB8IG51bGw7IHByb21pc2U6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB8IG51bGwgfSB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSBhcyBzdHJpbmc7XHJcblxyXG5pZiAoIU1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTU9OR09EQl9VUkkgaXMgbm90IHNldCBpbiBlbnZpcm9ubWVudFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCk6IFByb21pc2U8dHlwZW9mIG1vbmdvb3NlPiB7XHJcbiAgaWYgKCFnbG9iYWwubW9uZ29vc2VDb25uKSB7XHJcbiAgICBnbG9iYWwubW9uZ29vc2VDb25uID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBpZiAoZ2xvYmFsLm1vbmdvb3NlQ29ubi5jb25uKSByZXR1cm4gZ2xvYmFsLm1vbmdvb3NlQ29ubi5jb25uO1xyXG5cclxuICBpZiAoIWdsb2JhbC5tb25nb29zZUNvbm4ucHJvbWlzZSkge1xyXG4gICAgZ2xvYmFsLm1vbmdvb3NlQ29ubi5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwge1xyXG4gICAgICBkYk5hbWU6IHByb2Nlc3MuZW52Lk1PTkdPREJfREIgfHwgXCJ2ZW5rYXRlc2h3YXJhXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdsb2JhbC5tb25nb29zZUNvbm4uY29ubiA9IGF3YWl0IGdsb2JhbC5tb25nb29zZUNvbm4ucHJvbWlzZTtcclxuICByZXR1cm4gZ2xvYmFsLm1vbmdvb3NlQ29ubi5jb25uO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjb25uZWN0VG9EYXRhYmFzZSIsImdsb2JhbCIsIm1vbmdvb3NlQ29ubiIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdCIsImRiTmFtZSIsIk1PTkdPREJfREIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Invoice.ts":
/*!*******************************!*\
  !*** ./src/models/Invoice.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Invoice: () => (/* binding */ Invoice)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst InvoiceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    customer: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Customer\",\n        required: true\n    },\n    jobs: [\n        {\n            type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n            ref: \"Job\"\n        }\n    ],\n    subtotal: {\n        type: Number,\n        required: true\n    },\n    discount: {\n        type: Number,\n        default: 0\n    },\n    total: {\n        type: Number,\n        required: true\n    },\n    paid: {\n        type: Number,\n        default: 0\n    },\n    balance: {\n        type: Number,\n        required: true\n    },\n    number: {\n        type: String,\n        required: true,\n        unique: true,\n        index: true\n    },\n    invoiceDate: {\n        type: Date,\n        default: Date.now\n    }\n}, {\n    timestamps: true\n});\nconst Invoice = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Invoice || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Invoice\", InvoiceSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0ludm9pY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBZ0IxRCxNQUFNRSxnQkFBZ0IsSUFBSUQsNENBQU1BLENBQzlCO0lBQ0VFLFVBQVU7UUFBRUMsTUFBTUgsNENBQU1BLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVlDLFVBQVU7SUFBSztJQUN6RUMsTUFBTTtRQUFDO1lBQUVMLE1BQU1ILDRDQUFNQSxDQUFDSSxLQUFLLENBQUNDLFFBQVE7WUFBRUMsS0FBSztRQUFNO0tBQUU7SUFDbkRHLFVBQVU7UUFBRU4sTUFBTU87UUFBUUgsVUFBVTtJQUFLO0lBQ3pDSSxVQUFVO1FBQUVSLE1BQU1PO1FBQVFFLFNBQVM7SUFBRTtJQUNyQ0MsT0FBTztRQUFFVixNQUFNTztRQUFRSCxVQUFVO0lBQUs7SUFDdENPLE1BQU07UUFBRVgsTUFBTU87UUFBUUUsU0FBUztJQUFFO0lBQ2pDRyxTQUFTO1FBQUVaLE1BQU1PO1FBQVFILFVBQVU7SUFBSztJQUN4Q1MsUUFBUTtRQUFFYixNQUFNYztRQUFRVixVQUFVO1FBQU1XLFFBQVE7UUFBTUMsT0FBTztJQUFLO0lBQ2xFQyxhQUFhO1FBQUVqQixNQUFNa0I7UUFBTVQsU0FBU1MsS0FBS0MsR0FBRztJQUFDO0FBQy9DLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsVUFDWHpCLHdEQUFlLENBQUN5QixPQUFPLElBQUl6QixxREFBYyxDQUFhLFdBQVdFLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZW5rYXRlc2h3YXJhLWNuYy1uZXh0anMvLi9zcmMvbW9kZWxzL0ludm9pY2UudHM/NmFkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBNb2RlbCwgVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW52b2ljZURvYyBleHRlbmRzIG1vbmdvb3NlLkRvY3VtZW50IHtcclxuICBjdXN0b21lcjogVHlwZXMuT2JqZWN0SWQ7XHJcbiAgam9iczogVHlwZXMuT2JqZWN0SWRbXTtcclxuICBzdWJ0b3RhbDogbnVtYmVyO1xyXG4gIGRpc2NvdW50PzogbnVtYmVyO1xyXG4gIHRvdGFsOiBudW1iZXI7XHJcbiAgcGFpZDogbnVtYmVyO1xyXG4gIGJhbGFuY2U6IG51bWJlcjtcclxuICBudW1iZXI6IHN0cmluZzsgLy8gZS5nLiwgSU5WLTIwMjUtMDAxXHJcbiAgaW52b2ljZURhdGU6IERhdGU7XHJcbiAgY3JlYXRlZEF0OiBEYXRlO1xyXG4gIHVwZGF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgSW52b2ljZVNjaGVtYSA9IG5ldyBTY2hlbWE8SW52b2ljZURvYz4oXHJcbiAge1xyXG4gICAgY3VzdG9tZXI6IHsgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiQ3VzdG9tZXJcIiwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGpvYnM6IFt7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkpvYlwiIH1dLFxyXG4gICAgc3VidG90YWw6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZGlzY291bnQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgICB0b3RhbDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwYWlkOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gICAgYmFsYW5jZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBudW1iZXI6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlLCBpbmRleDogdHJ1ZSB9LFxyXG4gICAgaW52b2ljZURhdGU6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgSW52b2ljZTogTW9kZWw8SW52b2ljZURvYz4gPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5JbnZvaWNlIHx8IG1vbmdvb3NlLm1vZGVsPEludm9pY2VEb2M+KFwiSW52b2ljZVwiLCBJbnZvaWNlU2NoZW1hKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJJbnZvaWNlU2NoZW1hIiwiY3VzdG9tZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwiam9icyIsInN1YnRvdGFsIiwiTnVtYmVyIiwiZGlzY291bnQiLCJkZWZhdWx0IiwidG90YWwiLCJwYWlkIiwiYmFsYW5jZSIsIm51bWJlciIsIlN0cmluZyIsInVuaXF1ZSIsImluZGV4IiwiaW52b2ljZURhdGUiLCJEYXRlIiwibm93IiwidGltZXN0YW1wcyIsIkludm9pY2UiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Invoice.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash","vendor-chunks/crypto-js","vendor-chunks/iconv-lite","vendor-chunks/restructure","vendor-chunks/brotli","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/call-bind-apply-helpers","vendor-chunks/regexp.prototype.flags","vendor-chunks/object.assign","vendor-chunks/object-is","vendor-chunks/object-keys","vendor-chunks/get-proto","vendor-chunks/fontkit","vendor-chunks/unicode-trie","vendor-chunks/object-inspect","vendor-chunks/linebreak","vendor-chunks/jpeg-exif","vendor-chunks/has-symbols","vendor-chunks/gopd","vendor-chunks/function-bind","vendor-chunks/call-bind","vendor-chunks/unicode-properties","vendor-chunks/es-get-iterator","vendor-chunks/available-typed-arrays","vendor-chunks/which-typed-array","vendor-chunks/which-collection","vendor-chunks/which-boxed-primitive","vendor-chunks/tiny-inflate","vendor-chunks/side-channel","vendor-chunks/side-channel-weakmap","vendor-chunks/side-channel-map","vendor-chunks/side-channel-list","vendor-chunks/set-function-name","vendor-chunks/set-function-length","vendor-chunks/safer-buffer","vendor-chunks/safe-regex-test","vendor-chunks/possible-typed-array-names","vendor-chunks/png-js","vendor-chunks/pdfkit","vendor-chunks/isarray","vendor-chunks/is-weakset","vendor-chunks/is-weakmap","vendor-chunks/is-symbol","vendor-chunks/is-string","vendor-chunks/is-shared-array-buffer","vendor-chunks/is-set","vendor-chunks/is-regex","vendor-chunks/is-number-object","vendor-chunks/is-map","vendor-chunks/is-date-object","vendor-chunks/is-callable","vendor-chunks/is-boolean-object","vendor-chunks/is-bigint","vendor-chunks/is-array-buffer","vendor-chunks/is-arguments","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/has-property-descriptors","vendor-chunks/has-bigints","vendor-chunks/get-intrinsic","vendor-chunks/functions-have-names","vendor-chunks/for-each","vendor-chunks/es-object-atoms","vendor-chunks/es-define-property","vendor-chunks/dunder-proto","vendor-chunks/dfa","vendor-chunks/define-properties","vendor-chunks/define-data-property","vendor-chunks/deep-equal","vendor-chunks/clone","vendor-chunks/call-bound","vendor-chunks/base64-js","vendor-chunks/array-buffer-byte-length","vendor-chunks/@swc"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&page=%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finvoices%2F%5Bid%5D%2Fpdf%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();