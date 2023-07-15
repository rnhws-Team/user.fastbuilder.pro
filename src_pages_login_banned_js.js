"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_login_banned_js"],{

/***/ "./src/pages/login/banned.js":
/*!***********************************!*\
  !*** ./src/pages/login/banned.js ***!
  \***********************************/
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




let intv=null;

let banned_page={
	can_pay: false,
	paired: false,
	pay_error: "",
	pay_fatal: false,
	pay_success: false,
	pay_invoice_id: "",
	ticket_id: "",
	oninit: (vnode)=>{
		banned_page.ticket_id=vnode.attrs.ticket;
		banned_page.can_pay=false;
		banned_page.paired=false;
		banned_page.pay_error="";
		banned_page.pay_fatal=false;
		banned_page.pay_success=false;
		if(intv) {
			clearInterval(intv);
			intv=null;
		}
	},
	onremove: ()=>{
		if(intv) {
			clearInterval(intv);
			intv=null;
		}
	},
	view:(vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_1___default()((_theme_special_login__WEBPACK_IMPORTED_MODULE_0___default().login_frame), 
			mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-box.lowin-login",
				mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-box-inner",
					mithril__WEBPACK_IMPORTED_MODULE_1___default()("form.login-form",
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "登录到 FastBuilder 用户中心"),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "￥6 的罚款已被附加到你的账户，理由如以下所示。"),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", mithril__WEBPACK_IMPORTED_MODULE_1___default()("b",{style:{color:"red"}},vnode.attrs.reason)),
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "要继续使用这个账户，你需要缴纳这笔罚款。"),
						!banned_page.can_pay?mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-buttondiv",
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("button.lowin-btn", {
								onclick: async(e)=>{
									e.preventDefault();
									let ticketResp=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].PayTicket(vnode.attrs.ticket);
									if(!ticketResp.success) {
										alert(ticketResp.message);
										return;
									}
									banned_page.can_pay=true;
									intv=setInterval(dorefresh, 1000);
									mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
								}
							}, "缴纳罚款"),mithril__WEBPACK_IMPORTED_MODULE_1___default()("hr")
						):[
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "您正在支付: 用户协议违反罚款"),
							!banned_page.paired?[
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "请联系代理并告知其你的用户名，在其确认前请勿支付。"),
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", ["或者：", mithril__WEBPACK_IMPORTED_MODULE_1___default()("a", {
									href: "https://fs.webapp.codepwn.xyz/new",
									target: "_blank",
									style: { display: "inline-block" }
								}, "自助结算[微信/支付宝] (提供: CodePwn)")]),
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", [mithril__WEBPACK_IMPORTED_MODULE_1___default()("a", {
									href: "/api/v2/stripe/pay_ticket.web?ticketID="+banned_page.ticket_id
								}, "银行卡结算")])
							]:null,
							banned_page.pay_success?[
								mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", "支付成功，您的账号已经恢复正常，请点击 [退出登录] 按钮，然后重新登录。")
							]:[
								banned_page.pay_error?mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", {style:{color:"red"}}, banned_page.pay_error):null,
								banned_page.paired?mithril__WEBPACK_IMPORTED_MODULE_1___default()("p", {style:{color:"blue"}}, "请支付: ￥6"):null,
								banned_page.pay_fatal?null:[
									!banned_page.pay_success?mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-buttondiv",
										mithril__WEBPACK_IMPORTED_MODULE_1___default()("button.lowin-btn", {
											onclick: async(e)=>{
												e.preventDefault();
												dorefresh(true);
											}
										}, "刷新状态"),mithril__WEBPACK_IMPORTED_MODULE_1___default()("hr")
									):null
								]
							]
						],
						mithril__WEBPACK_IMPORTED_MODULE_1___default()("div.lowin-buttondiv",
							mithril__WEBPACK_IMPORTED_MODULE_1___default()("button.lowin-btn", {
								onclick:(e)=>{
									e.preventDefault();
									mithril__WEBPACK_IMPORTED_MODULE_1___default().route.set("/login");
								}
							}, "退出登录")
						)
					)
				)
			)
		);
	}
};

async function dorefresh(manual) {
	let pairInfo=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].CheckTicketPayment(banned_page.ticket_id);
	if(pairInfo.error) {
		if(intv)clearInterval(intv);
		intv=null;
		alert(pairInfo.error_message);
		banned_page.pay_fatal=true;
		mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
		return;
	}
	if(!banned_page.paired) {
		if(!pairInfo.paired) {
			if(manual) {
				banned_page.pay_error=pairInfo.message;
				mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
			}
			return;
		}else{
			banned_page.pay_error="";
			banned_page.paired=true;
			mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
		}
		manual=false;
	}
	if(!pairInfo.success) {
		if(manual) {
			banned_page.pay_error="尚未成功";
			mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
		}
	}else{
		banned_page.pay_error="";
		banned_page.pay_success=true;
		clearInterval(intv);
		intv=null;
		mithril__WEBPACK_IMPORTED_MODULE_1___default().redraw();
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banned_page);


/***/ })

}]);