"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_about_js"],{

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/frame */ "./src/theme/frame.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");




const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>`;

let ap={
	view:(vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "关于 FastBuilder 用户中心",pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "相关信息"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "FastBuilder User Center"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "(Based on Mithril.JS)"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "Copyright © 2019-2023 FastBuilder Dev. Group, Ruphane, Bouldev"),
				//m("p", "如有任何问题可通过 Email 联系我们："),
				//m("p", "Email: ", m("a", {href: "mailto:admin@boul.dev"}, "admin@boul.dev")),
				//m("p", "若您使用 QQ邮箱 发送邮件，可能会因为被判定为 spam 而延迟回信。"),
				//m("p", "若您发送的邮件不包含有效的一般人类可读信息，则我们可能会忽略您的邮件或永久屏蔽您的信箱，对此可能带来的不便深表歉意。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", {href: "https://fastbuilder.pro/privacy-policy.html"}, "隐私策略"), " ", mithril__WEBPACK_IMPORTED_MODULE_0___default()("a", {href: "https://fastbuilder.pro/enduser-license.html"}, "使用协议")])
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "联系我们"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "您可以点按下面的联络按钮来进入联络界面与用户中心管理员进行联系。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {onclick:()=>{mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/contact-us");}}, "联络")
			)
		);
	}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ap);


/***/ })

}]);