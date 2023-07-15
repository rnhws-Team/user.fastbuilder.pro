"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_mall_js"],{

/***/ "./src/pages/mall.js":
/*!***************************!*\
  !*** ./src/pages/mall.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/frame */ "./src/theme/frame.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");




const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"></path></svg>`;

let productDetail={
	view: (vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.liquid-container.ember-view",{style:{top:"0px",left:"0px"}},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.liquid-modal",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.liquid-child",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.lm-container",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.lf-dialog",{role:"dialog"},
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverview.ember-view",
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("header.lf-dialog-header.needs-close-button.ember-view.atStatus-lec",
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", [vnode.attrs.product_name,vnode.attrs.owned?" (已拥有)":null]),
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.button--iconHeader.at-lf-dialog-header", {
											type: "button",
											onclick:(e)=>{
												e.preventDefault();
												_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].placeAppendPart(null);
											}
										},"✕")
									),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.lf-dialog-content.ember-view",
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverview-timeDate-wrapper",
											mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",
												mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("div.eventOverview-timeDate-right.bootstrap-iso"),
													vnode.attrs.product_image?mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {
														src: vnode.attrs.product_image,
														width: "512",
														height: "128"
													}):null,
													mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(vnode.attrs.product_detail))
												)
											)
										),
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverview-separator"),
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverviewData-dataRow",
											mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverviewData-dataLabel","价格"),
											mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverviewData-dataValue","￥"+vnode.attrs.price)
										),
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverview-separator"),
										mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverviewData-dataRow",
											mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverviewData-dataLabel","作者"),
											mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.eventOverviewData-dataValue",vnode.attrs.author)
										)
									),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("footer.lf-dialog-footer.ember-view",
										!vnode.attrs.owned&&!productDetail.nocart?mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("button.button.button--primary"), {
											onclick:()=>{
												(async()=>{
													let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].AddProductToCart(vnode.attrs.product_id);
													if(!r.success){
														_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", r.message);
														return;
													}
													_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].placeAppendPart(null);
												})();
											}
										}, "加入购物车"):null,
										mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("button.button.button--primary"), {
											onclick:()=>{
												_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].placeAppendPart(null);
											}
										}, "关闭")
									)
								)
							)
						)
					)
				)
			)
		);
	}
};										

let mall={
	productlist: [],
	ownedlist: [],
	page: 1,
	havemore: false,
	oninit: async ()=>{
		let {products, owned}=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetProductList(0);
		mall.productlist=products||[];
		mall.ownedlist=owned||[];
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	},
	view: (vnode)=>{
		let productList=[];
		for(let product of mall.productlist) {
			if(product.forbid_cart||!product.product_id)continue;
			let productCopy=product;
			productList.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.chronos-agendaView-item.chronos-event--lec",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("time.chronos-agendaView-item-time.chronos-agendaView-item-time--monospace"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.chronos-agendaView-item-infos.chronos-agendaView-item-infos-imageLess",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.chronos-agendaView-item-title",{
						onclick:()=>{
							let arg=productCopy;
							if(mall.ownedlist.indexOf(arg.product_id)!=-1) {
								arg.owned=true;
							}
							_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].placeAppendPart(mithril__WEBPACK_IMPORTED_MODULE_0___default()(productDetail,arg));
						}
					},product.product_name)
				)
			));
		}
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "商城", pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.ember-view",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.chronos",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.chronos-events",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("div.chronos-agendaView"),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("time.chronos-agendaView-header","商品列表"),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("div#productList", productList),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{style:{"text-align":"center",display:mall.havemore?undefined:"none"}},
								mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("button.button.at-sidebarUser"), {
									onclick:()=>{
										mall.havemore=false;
										(async()=>{
											let {products}=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetProductList(mall.page);
											mall.page++;
											if(products.length!=0)mall.havemore=true;
											for(let i of products) {
												mall.productlist.push(i);
											}
											mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
										})();
									}
								}, "加载更多")
							),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("br")
						)
					)
				)
			)
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mall);


/***/ })

}]);