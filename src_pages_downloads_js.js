"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_downloads_js"],{

/***/ "./src/pages/downloads.js":
/*!********************************!*\
  !*** ./src/pages/downloads.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/frame */ "./src/theme/frame.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");




const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 576 512"><path d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z"></path></svg>`;

let phoenixdownloads={
	view:(vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "下载  PhoenixBuilder",pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "从源码构建"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "您可以从源码构建 PhoenixBuilder 以使用。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "git clone git@github.com:LNSSPsd/PhoenixBuilder.git"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "cd PhoenixBuilder"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "make current"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "# 初次使用在执行完一次 make 后执行下面的命令"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "sed \"s/urrentProtocol byte = 10/urrentProtocol byte = 8/g\" ~/go/pkg/mod/github.com/sandertv/go-raknet@v1.9.1/conn.go"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "make current"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "./build/phoenixbuilder")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "下载预构建版本"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "我们也为每个稳定版本提供了预先构建好的二进制文件供您使用，点击以下链接以查看。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", {href:"https://github.com/LNSSPsd/PhoenixBuilder/releases/latest"},"https://github.com/LNSSPsd/PhoenixBuilder/releases/latest")
			)
		);
	}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoenixdownloads);


/***/ })

}]);