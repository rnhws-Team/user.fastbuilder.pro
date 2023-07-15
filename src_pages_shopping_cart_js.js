"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_shopping_cart_js"],{

/***/ "./src/pages/shopping_cart.js":
/*!************************************!*\
  !*** ./src/pages/shopping_cart.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/frame */ "./src/theme/frame.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");




const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>`;

let shoppingCart={
	operationErrorNote: "",
	content: [],
	oninit:async (vnode)=>{
		let shoppingcart=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetShoppingCart();
		shoppingCart.content=shoppingcart;
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	},
	view:(vnode)=>{
		let proceededContent=[];
		for(let i of shoppingCart.content) {
			let current=i;
			proceededContent.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"row"},i.product_name),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",i.product_id),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",i.price),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td","0"), // Broken
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",i.price),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-danger", {
						onclick: async()=>{
							await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].ShoppingCartSpliceProduct(current.product_id);
							let shoppingcart=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetShoppingCart();
							shoppingCart.content=shoppingcart;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "删除")
				)
			));
		}
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "购物车", pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title:"购物车"},
				shoppingCart.operationErrorNote.length==0?null:mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",{style:{color:"red"}},shoppingCart.operationErrorNote),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("div.bootstrap-iso"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.row",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("table.table",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("thead",
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {
										scope: "col"
									}, "商品名称"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {
										scope: "col"
									}, "商品编号"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {
										scope: "col"
									}, "价格(CNY)"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {
										scope: "col"
									}, "抵价(CNY)"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {
										scope: "col"
									}, "应付(CNY)"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {
										scope: "col"
									}, "操作")
								)
							),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("tbody", proceededContent)
						)
					)
				)
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
				onclick:async ()=>{
					let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].CalculatePrice();
					if(!r.success) {
						_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", r.message);
						return;
					}
					mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set(r.location);
				}
			}, "结算"),
			" ",
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
				onclick:()=>{
					shoppingCart.oninit(vnode);
				}
			}, "刷新")
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shoppingCart);


/***/ })

}]);