"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_remove_account_js"],{

/***/ "./src/pages/remove_account.js":
/*!*************************************!*\
  !*** ./src/pages/remove_account.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/frame */ "./src/theme/frame.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");




// A page icon for the page of removing the user permanently by themselves
const pageIcon=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>`;

let ru={
	passwordInputValue: "",
	view: function(vnode){
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "注销用户", pageIcon},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "注销用户"},
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "注销后您的所有数据都将从数据库中被移除，视为主动放弃帐号并无法再度找回，请悉知。"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						isPassword: true,
						value: ru.passwordInputValue,
						oninput: function(e){ru.passwordInputValue=e.target.value;}
					}, "当前密码"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						onclick: async ()=>{
							if(!(await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].question("确认注销", "请确认是否要注销用户。此操作不可以撤回。"))){
								return;
							}
							let rs=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].RemoveSelf(ru.passwordInputValue);
							if(!rs.success) {
								_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("注销失败", rs.message);
								return;
							}
							location.href="/remove-user.sumi.html";
						}
					}, "确认注销")
				)
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ru);



/***/ })

}]);