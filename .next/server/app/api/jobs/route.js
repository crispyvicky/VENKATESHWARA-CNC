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
exports.id = "app/api/jobs/route";
exports.ids = ["app/api/jobs/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var E_VENKATESHWARA_VENKATESHWARA_CNC_app_api_jobs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/jobs/route.ts */ \"(rsc)/./app/api/jobs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/jobs/route\",\n        pathname: \"/api/jobs\",\n        filename: \"route\",\n        bundlePath: \"app/api/jobs/route\"\n    },\n    resolvedPagePath: \"E:\\\\VENKATESHWARA\\\\VENKATESHWARA-CNC\\\\app\\\\api\\\\jobs\\\\route.ts\",\n    nextConfigOutput,\n    userland: E_VENKATESHWARA_VENKATESHWARA_CNC_app_api_jobs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/jobs/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZqb2JzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZqb2JzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGam9icyUyRnJvdXRlLnRzJmFwcERpcj1FJTNBJTVDVkVOS0FURVNIV0FSQSU1Q1ZFTktBVEVTSFdBUkEtQ05DJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDVkVOS0FURVNIV0FSQSU1Q1ZFTktBVEVTSFdBUkEtQ05DJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNjO0FBQzNGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVua2F0ZXNod2FyYS1jbmMtbmV4dGpzLz83NTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkU6XFxcXFZFTktBVEVTSFdBUkFcXFxcVkVOS0FURVNIV0FSQS1DTkNcXFxcYXBwXFxcXGFwaVxcXFxqb2JzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9qb2JzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvam9ic1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvam9icy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkU6XFxcXFZFTktBVEVTSFdBUkFcXFxcVkVOS0FURVNIV0FSQS1DTkNcXFxcYXBwXFxcXGFwaVxcXFxqb2JzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9qb2JzL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/jobs/route.ts":
/*!*******************************!*\
  !*** ./app/api/jobs/route.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_Job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Job */ \"(rsc)/./src/models/Job.ts\");\n\n\n\n\n\nasync function GET() {\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n    const list = await _models_Job__WEBPACK_IMPORTED_MODULE_4__.Job.find().populate(\"customer\").sort({\n        createdAt: -1\n    }).lean();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(list);\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const body = await req.json();\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.connectToDatabase)();\n    const doc = await _models_Job__WEBPACK_IMPORTED_MODULE_4__.Job.create(body);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(doc, {\n        status: 201\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2pvYnMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDWDtBQUNKO0FBQ0k7QUFDVjtBQUU1QixlQUFlSztJQUNwQixNQUFNRiwwREFBaUJBO0lBQ3ZCLE1BQU1HLE9BQU8sTUFBTUYsNENBQUdBLENBQUNHLElBQUksR0FBR0MsUUFBUSxDQUFDLFlBQVlDLElBQUksQ0FBQztRQUFFQyxXQUFXLENBQUM7SUFBRSxHQUFHQyxJQUFJO0lBQy9FLE9BQU9YLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNOO0FBQzNCO0FBRU8sZUFBZU8sS0FBS0MsR0FBZ0I7SUFDekMsTUFBTUMsVUFBVSxNQUFNZCwyREFBZ0JBLENBQUNDLGtEQUFXQTtJQUNsRCxJQUFJLENBQUNhLFNBQVMsT0FBT2YscURBQVlBLENBQUNZLElBQUksQ0FBQztRQUFFSSxPQUFPO0lBQWUsR0FBRztRQUFFQyxRQUFRO0lBQUk7SUFDaEYsTUFBTUMsT0FBTyxNQUFNSixJQUFJRixJQUFJO0lBQzNCLE1BQU1ULDBEQUFpQkE7SUFDdkIsTUFBTWdCLE1BQU0sTUFBTWYsNENBQUdBLENBQUNnQixNQUFNLENBQUNGO0lBQzdCLE9BQU9sQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDTyxLQUFLO1FBQUVGLFFBQVE7SUFBSTtBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlbmthdGVzaHdhcmEtY25jLW5leHRqcy8uL2FwcC9hcGkvam9icy9yb3V0ZS50cz85ZTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCJAL2xpYi9kYlwiO1xyXG5pbXBvcnQgeyBKb2IgfSBmcm9tIFwiQC9tb2RlbHMvSm9iXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgY29uc3QgbGlzdCA9IGF3YWl0IEpvYi5maW5kKCkucG9wdWxhdGUoXCJjdXN0b21lclwiKS5zb3J0KHsgY3JlYXRlZEF0OiAtMSB9KS5sZWFuKCk7XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGxpc3QpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGlmICghc2Vzc2lvbikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiVW5hdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xyXG4gIGNvbnN0IGRvYyA9IGF3YWl0IEpvYi5jcmVhdGUoYm9keSk7XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRvYywgeyBzdGF0dXM6IDIwMSB9KTtcclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJjb25uZWN0VG9EYXRhYmFzZSIsIkpvYiIsIkdFVCIsImxpc3QiLCJmaW5kIiwicG9wdWxhdGUiLCJzb3J0IiwiY3JlYXRlZEF0IiwibGVhbiIsImpzb24iLCJQT1NUIiwicmVxIiwic2Vzc2lvbiIsImVycm9yIiwic3RhdHVzIiwiYm9keSIsImRvYyIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/jobs/route.ts\n");

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

/***/ "(rsc)/./src/models/Job.ts":
/*!***************************!*\
  !*** ./src/models/Job.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Job: () => (/* binding */ Job)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst JobSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    customer: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Customer\",\n        required: true,\n        index: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    rate: {\n        type: Number,\n        required: true\n    },\n    quantity: {\n        type: Number,\n        default: 1\n    },\n    discount: {\n        type: Number,\n        default: 0\n    },\n    advance: {\n        type: Number,\n        default: 0\n    },\n    total: {\n        type: Number,\n        required: true\n    },\n    paid: {\n        type: Number,\n        default: 0\n    },\n    balance: {\n        type: Number,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"in_progress\",\n            \"completed\"\n        ],\n        default: \"pending\"\n    },\n    invoiceId: {\n        type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n        ref: \"Invoice\"\n    },\n    deliveryDate: {\n        type: Date\n    }\n}, {\n    timestamps: true\n});\nconst Job = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Job || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Job\", JobSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL0pvYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQ7QUFtQjFELE1BQU1FLFlBQVksSUFBSUQsNENBQU1BLENBQzFCO0lBQ0VFLFVBQVU7UUFBRUMsTUFBTUgsNENBQU1BLENBQUNJLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVlDLFVBQVU7UUFBTUMsT0FBTztJQUFLO0lBQ3RGQyxhQUFhO1FBQUVOLE1BQU1PO1FBQVFILFVBQVU7SUFBSztJQUM1Q0ksTUFBTTtRQUFFUixNQUFNUztRQUFRTCxVQUFVO0lBQUs7SUFDckNNLFVBQVU7UUFBRVYsTUFBTVM7UUFBUUUsU0FBUztJQUFFO0lBQ3JDQyxVQUFVO1FBQUVaLE1BQU1TO1FBQVFFLFNBQVM7SUFBRTtJQUNyQ0UsU0FBUztRQUFFYixNQUFNUztRQUFRRSxTQUFTO0lBQUU7SUFDcENHLE9BQU87UUFBRWQsTUFBTVM7UUFBUUwsVUFBVTtJQUFLO0lBQ3RDVyxNQUFNO1FBQUVmLE1BQU1TO1FBQVFFLFNBQVM7SUFBRTtJQUNqQ0ssU0FBUztRQUFFaEIsTUFBTVM7UUFBUUwsVUFBVTtJQUFLO0lBQ3hDYSxRQUFRO1FBQUVqQixNQUFNTztRQUFRVyxNQUFNO1lBQUM7WUFBVztZQUFlO1NBQVk7UUFBRVAsU0FBUztJQUFVO0lBQzFGUSxXQUFXO1FBQUVuQixNQUFNSCw0Q0FBTUEsQ0FBQ0ksS0FBSyxDQUFDQyxRQUFRO1FBQUVDLEtBQUs7SUFBVTtJQUN6RGlCLGNBQWM7UUFBRXBCLE1BQU1xQjtJQUFLO0FBQzdCLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsTUFBcUIzQix3REFBZSxDQUFDMkIsR0FBRyxJQUFJM0IscURBQWMsQ0FBUyxPQUFPRSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVua2F0ZXNod2FyYS1jbmMtbmV4dGpzLy4vc3JjL21vZGVscy9Kb2IudHM/ZGEyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBNb2RlbCwgVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9iRG9jIGV4dGVuZHMgbW9uZ29vc2UuRG9jdW1lbnQge1xyXG4gIGN1c3RvbWVyOiBUeXBlcy5PYmplY3RJZDtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIHJhdGU6IG51bWJlcjtcclxuICBxdWFudGl0eTogbnVtYmVyO1xyXG4gIGRpc2NvdW50PzogbnVtYmVyO1xyXG4gIGFkdmFuY2U/OiBudW1iZXI7XHJcbiAgdG90YWw6IG51bWJlcjtcclxuICBwYWlkOiBudW1iZXI7XHJcbiAgYmFsYW5jZTogbnVtYmVyO1xyXG4gIHN0YXR1czogXCJwZW5kaW5nXCIgfCBcImluX3Byb2dyZXNzXCIgfCBcImNvbXBsZXRlZFwiO1xyXG4gIGludm9pY2VJZD86IFR5cGVzLk9iamVjdElkO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxuICB1cGRhdGVkQXQ6IERhdGU7XHJcbiAgZGVsaXZlcnlEYXRlPzogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgSm9iU2NoZW1hID0gbmV3IFNjaGVtYTxKb2JEb2M+KFxyXG4gIHtcclxuICAgIGN1c3RvbWVyOiB7IHR5cGU6IFNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkN1c3RvbWVyXCIsIHJlcXVpcmVkOiB0cnVlLCBpbmRleDogdHJ1ZSB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcmF0ZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDEgfSxcclxuICAgIGRpc2NvdW50OiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gICAgYWR2YW5jZTogeyB0eXBlOiBOdW1iZXIsIGRlZmF1bHQ6IDAgfSxcclxuICAgIHRvdGFsOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBhaWQ6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBiYWxhbmNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHN0YXR1czogeyB0eXBlOiBTdHJpbmcsIGVudW06IFtcInBlbmRpbmdcIiwgXCJpbl9wcm9ncmVzc1wiLCBcImNvbXBsZXRlZFwiXSwgZGVmYXVsdDogXCJwZW5kaW5nXCIgfSxcclxuICAgIGludm9pY2VJZDogeyB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogXCJJbnZvaWNlXCIgfSxcclxuICAgIGRlbGl2ZXJ5RGF0ZTogeyB0eXBlOiBEYXRlIH0sXHJcbiAgfSxcclxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEpvYjogTW9kZWw8Sm9iRG9jPiA9IG1vbmdvb3NlLm1vZGVscy5Kb2IgfHwgbW9uZ29vc2UubW9kZWw8Sm9iRG9jPihcIkpvYlwiLCBKb2JTY2hlbWEpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIkpvYlNjaGVtYSIsImN1c3RvbWVyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsImluZGV4IiwiZGVzY3JpcHRpb24iLCJTdHJpbmciLCJyYXRlIiwiTnVtYmVyIiwicXVhbnRpdHkiLCJkZWZhdWx0IiwiZGlzY291bnQiLCJhZHZhbmNlIiwidG90YWwiLCJwYWlkIiwiYmFsYW5jZSIsInN0YXR1cyIsImVudW0iLCJpbnZvaWNlSWQiLCJkZWxpdmVyeURhdGUiLCJEYXRlIiwidGltZXN0YW1wcyIsIkpvYiIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Job.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/@panva","vendor-chunks/oidc-token-hash"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fjobs%2Froute&page=%2Fapi%2Fjobs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fjobs%2Froute.ts&appDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CVENKATESHWARA%5CVENKATESHWARA-CNC&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();