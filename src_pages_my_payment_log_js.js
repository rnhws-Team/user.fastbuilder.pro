"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_my_payment_log_js"],{

/***/ "./src/pages/my_payment_log.js":
/*!*************************************!*\
  !*** ./src/pages/my_payment_log.js ***!
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




const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>`;

let paymentLogPage={
	payment_log_entries: [],
	page: 1,
	pages: 1,
	oninit: async ()=>{
		paymentLogPage.payment_log_entries=[];
		paymentLogPage.page=1;
		paymentLogPage.pages=1;
		let plr=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetPaymentLog(1);
		paymentLogPage.payment_log_entries=plr.payments;
		paymentLogPage.pages=plr.pages;
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	},
	view: (vnode)=>{
		let payment_log_output=[];
		if(!paymentLogPage.payment_log_entries) {
			payment_log_output.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", "加载中"));
		}
		for(let i of paymentLogPage.payment_log_entries) {
			payment_log_output.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: ((new Date(i.identifier)).toLocaleString())},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(i.description)),
				i.no_refund?
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", "不可退款")
				:mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					onclick:()=>{
						window.open("/api/v2/3/api.web?jump_to=do_refund&log_id="+i.identifier);
					}
				}, "退款")
			));
		}
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName:"付款记录" ,pageIcon},
			payment_log_output
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paymentLogPage);





/***/ })

}]);