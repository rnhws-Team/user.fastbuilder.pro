"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_login_login_by_token_js"],{

/***/ "./src/pages/login/login_by_token.js":
/*!*******************************************!*\
  !*** ./src/pages/login/login_by_token.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theme_special_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../theme/special/login */ "./src/theme/special/login.js");
/* harmony import */ var _theme_special_login__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_special_login__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");





let login_by_token_page={
	loginFailed_reason: "",
	userbannedfor: "",
	tokenValue: "",
	inProgress: false,
	goingtouc: false,
	oninit:()=>{
		login_by_token_page.userbannedfor="";
		login_by_token_page.loginFailed_reason="";
		login_by_token_page.inProgress=false;
		login_by_token_page.goingtouc=false;
		login_by_token_page.tokenValue="";
	},
	view:(vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_1___default()((_theme_special_login__WEBPACK_IMPORTED_MODULE_0___default().login_frame), 
			mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-box.lowin-login",
				mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-box-inner",
					mithril__WEBPACK_IMPORTED_MODULE_1___default()("form.login-form",
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "登录到 FastBuilder 用户中心 (Token)"),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()({
							view: (vnode)=>{
								if(login_by_token_page.loginFailed_reason.length==0) {
									return null;
								}
								return mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", {style:{color:"red"}}, login_by_token_page.loginFailed_reason);
							}
						}),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-group",
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("input.lowin-input",{placeholder:"",type:"text",id:"token-input-id",readonly:login_by_token_page.inProgress,oninput:(e)=>{login_by_token_page.tokenValue=e.target.value;},value:login_by_token_page.tokenValue}),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("label",{for:"token-input-id"}, "FBToken")
						),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-buttondiv",
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("button.lowin-btn", {
								disabled: login_by_token_page.inProgress,
								class: (login_by_token_page.goingtouc)?["back-fill"]:[],
								onclick:(e)=>{
									e.preventDefault();
									login_by_token_page.inProgress=true;
									_api_api__WEBPACK_IMPORTED_MODULE_2__["default"].LoginWithToken(login_by_token_page.tokenValue).then((res)=>{
										if(!res.success) {
											if(res.banned) {
												mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/login/banned", {reason:res.reason});
												return;
											}
											login_by_token_page.loginFailed_reason=res.message;
											login_by_token_page.inProgress=false;
											mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
											_utils_utils__WEBPACK_IMPORTED_MODULE_3__["default"].FinishLogin(res);
											return;
										}
										login_by_token_page.goingtouc=true;
										mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
										mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/router/enter");
									});
								}
							}, "登录")
						),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.text-foot",
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("a", {
								href:"#",
								onclick:(e)=>{
									e.preventDefault();
									mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/login");
								}
							}, "登录"),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("br"),mithril__WEBPACK_IMPORTED_MODULE_1___default()("hr"),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("a", {
								href:"#",
								onclick:(e)=>{
									e.preventDefault();
									mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/login/register");
								}
							}, "注册")
						)
					)
				)
			)
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login_by_token_page);


/***/ })

}]);