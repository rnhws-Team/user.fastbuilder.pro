"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_login_register_js"],{

/***/ "./src/pages/login/register.js":
/*!*************************************!*\
  !*** ./src/pages/login/register.js ***!
  \*************************************/
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





let rg={
	inProgress: false,
	stage: 1,
	captchaRand: Math.random(),
	usernameValue: "",
	passwordValue: "",
	captchaValue: "",
	mailboxAddress: "",
	errorMessage: "",
	checkRegisterStatus: async (manual)=>{
		let stat=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].CheckRegister();
		if(!stat.success){
			if(stat.error) {
				alert("注册失败："+stat.error_message);
				rg.inProgress=false;
				rg.stage=1;
				mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
				return;
			}
			if(manual){
				rg.errorMessage=stat.message;
				rg.inProgress=false;
				mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
			}
			return;
		}
		rg.oninit();
		mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/router/enter");
	},
	oninit: ()=>{
		rg.inProgress=false;
		rg.stage=1;
		rg.usernameValue="";
		rg.passwordValue="";
		rg.mailboxAddress="";
		rg.errorMessage="";
	},
	view: (vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_1___default()((_theme_special_login__WEBPACK_IMPORTED_MODULE_0___default().login_frame),
			mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-box.lowin-login",
				mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-box-inner",
					mithril__WEBPACK_IMPORTED_MODULE_1___default()("form-login.form",
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "注册"),
						//m("p", "新用户的密码将经由邮箱发送给您。"),
						rg.errorMessage?mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", {style:{color:"red"}}, rg.errorMessage):null,
						rg.stage==1?
						[
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-group",
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("input.lowin-input",{placeholder:"",type:"text",id:"username-input-id",readonly:rg.inProgress,oninput:(e)=>{rg.usernameValue=e.target.value;},value:rg.usernameValue}),
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("label",{for:"username-input-id"}, "用户名")
							),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-group",
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("input.lowin-input",{placeholder:"",type:"password",id:"password-input-id",readonly:rg.inProgress,oninput:(e)=>{rg.passwordValue=e.target.value;},value:rg.passwordValue}),
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("label",{for:"password-input-id"}, "密码")
							),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("img", {style:{"background-color":"white",height:"50px",width:"300px"},src:_api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetAPI("captcha")+"&rand="+rg.captchaRand}),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-group",
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("input.lowin-input",{placeholder:"",type:"text",id:"captcha-input-id",readonly:rg.inProgress,oninput:(e)=>{rg.captchaValue=e.target.value;},value:rg.captchaValue}),
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("label",{for:"captcha-input-id"}, "验证码")
							),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "请阅读",mithril__WEBPACK_IMPORTED_MODULE_1___default()("a",{href:"https://fastbuilder.pro/privacy-policy.html"}, "隐私策略"),"以了解本服务可能涉及的隐私信息。"),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "点击下方注册按钮代表您同意遵守",mithril__WEBPACK_IMPORTED_MODULE_1___default()("a",{href:"https://fastbuilder.pro/enduser-license.html"}, "用户协议"))
						]:
						[
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "注册成功："+rg.usernameValue),
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "您的新密码已经经由邮件发送给您。")
						],
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-buttondiv",
							rg.stage==1?mithril__WEBPACK_IMPORTED_MODULE_1___default()("button.lowin-btn", {
								disabled: rg.inProgress,
								onclick: ()=>{
									rg.errorMessage="";
									rg.inProgress=true;
									if(rg.stage==1){
										if(rg.captchaValue.length!=12) {
											rg.inProgress=false;
											rg.errorMessage="验证码错误";
											rg.captchaRand=Math.random();
											return;
										}
										if(rg.usernameValue.length==0 || rg.passwordValue.length==0){
											rg.inProgress=false;
											rg.errorMessage="用户名或密码不能为空";
											rg.captchaRand=Math.random();
											return;
										}
										(async ()=>{
											let res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].Register(rg.usernameValue, rg.passwordValue, rg.captchaValue);
											rg.captchaRand=Math.random();
											if(!res.success){
												rg.inProgress=false;
												rg.errorMessage=res.message;
												mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
												return;
											}
											//rg.stage=2;
											rg.inProgress=false;
											mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
											rg.oninit();
											mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/router/enter");
											return;
											rg.mailboxAddress=res.mailboxAddress;
											rg.stage=2;
											rg.inProgress=false;
											let intv=setInterval(()=>{
												if(rg.stage!=2){
													clearInterval(intv);
													return;
												}
												rg.checkRegisterStatus(false);
											}, 2500);
											mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
										})();
										return;
									}else if(rg.stage==2) {
										rg.checkRegisterStatus(true);
									}
								}
							}, rg.stage==1?"注册":"确认"):null
						),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.text-foot",
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("a", {href:"#!/login",onclick:(e)=>{
								e.preventDefault();
								mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/login");
							}}, "登录")/*,
							rg.stage==1?null:
							[
								m("br"),m("br"),
								m("a", {href:"javascript:void(0)",onclick:()=>{
									rg.stage=1;
									m.redraw();
								}}, "返回")
							]*/
						)
					)
				)
			)
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rg);



/***/ })

}]);