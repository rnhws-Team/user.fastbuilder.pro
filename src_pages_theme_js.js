"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_theme_js"],{

/***/ "./src/pages/theme.js":
/*!****************************!*\
  !*** ./src/pages/theme.js ***!
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);





const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path d="M128 224c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zM418.6 58.1C359.2 9.3 281.3-10 204.6 5 104.9 24.4 24.7 104.2 5.1 203.7c-16.7 84.2 8.1 168.3 67.8 230.6 47.3 49.4 109.7 77.8 167.9 77.8 8.8 0 17.5-.6 26.1-2 24.2-3.7 44.6-18.7 56.1-41.1 12.3-24 12.3-52.7.2-76.6-6.1-12-5.5-26.2 1.8-38 7-11.8 18.7-18.4 32-18.4h72.2c46.4 0 82.8-35.7 82.8-81.3-.2-76.4-34.3-148.1-93.4-196.6zM429.2 288H357c-29.9 0-57.2 15.4-73 41.3-16 26.1-17.3 57.8-3.6 84.9 5.1 10.1 5.1 22.7-.2 32.9-2.6 5-8.7 13.7-20.6 15.6-49.3 7.7-108.9-16.6-152-61.6-48.8-50.9-69-119.4-55.4-188 15.9-80.6 80.8-145.3 161.6-161 62.6-12.3 126.1 3.5 174.3 43.1 48.1 39.5 75.7 97.6 75.9 159.6 0 18.6-15.3 33.2-34.8 33.2zM160 128c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.4-32-32-32zm96-32.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32c0-17.6-14.3-32-32-32zm96 32.1c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"></path></svg>`;

let themePage={
	theme_name: "加载中",
	pr_themes: [],
	oninit:async ()=>{
		let theme_res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetThemeInfo();
		if(theme_res.success) {
			themePage.theme_name=theme_res.data;
		}
		jquery__WEBPACK_IMPORTED_MODULE_3___default().get("assets/themes.json", (res)=> {
			themePage.pr_themes=[];
			for(let i in res) {
				let rn=String(i);
				if(themePage.pr_themes.length!=0) {
					themePage.pr_themes.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("hr"));
				}
				themePage.pr_themes.push([
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",["名称: ",mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", res[i].name)]),
					//m("p",["作者: ",m("b", res[i].author)]),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",["CSS 数: ",mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", res[i].stylesheets.length)]),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",res[i].description),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-primary", {
						onclick: async ()=>{
							let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].ApplyTheme(rn);
							if(!r.success) {
								return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("error", r.message);
							}
							location.reload(true);
						}
					}, "应用")
				]);
			}
			mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
		});
	},
	view:(vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName:"主题",pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "切换主题"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("h5", "已选主题: "+themePage.theme_name),
				themePage.pr_themes
			)
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themePage);

/***/ })

}]);