"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_contact_us_js"],{

/***/ "./src/pages/contact_us.js":
/*!*********************************!*\
  !*** ./src/pages/contact_us.js ***!
  \*********************************/
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

let contact_us={
	detail_identifier: 0,
	can_reply: false,
	contact_title: "",
	contact_list: [],
	oninit:async ()=>{
		contact_us.new_contact_title="";
		contact_us.contact_content="";
		contact_us.contact_reply_anonymous=false;
		contact_us.contact_closing=false;
		contact_us.contact_add_in_progress=false;
		contact_us.can_reply=false;
		contact_us.detail_identifier=0;
		contact_us.contact_list=[];
		let contact_content=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetUserContacts(0);
		contact_us.contact_list=contact_content.contacts;
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	},
	view:(vnode)=>{
		let layout_content=[];
		if(!contact_us.detail_identifier) {
			if(!localStorage.getItem("admin"))layout_content.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "创建联络"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: contact_us.new_contact_title,
						style:{width:"90%"},
						oninput:(e)=>{contact_us.new_contact_title=e.target.value;}
					}, "标题"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.userProfile-form-item",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.userProfile-form-label",
							[
								"内容",
								mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("textarea.userProfile-form-input.form-input.ember-text-field.ember-view"), {
									rows: "10",
									cols: "90%",
									style: {
										width: "90%"
									},
									value:contact_us.contact_content,
									oninput:(e)=>{contact_us.contact_content=e.target.value;}
								})
							]
						)
					),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						disabled:contact_us.contact_add_in_progress,
						onclick:(e)=>{
							e.preventDefault();
							contact_us.contact_add_in_progress=true;
							(async()=>{
								let create_r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].CreateUserContact(contact_us.new_contact_title, contact_us.contact_content);
								if(!create_r.success) {
									contact_us.contact_add_in_progress=false;
									_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("失败", create_r.message);
									return;
								}
								contact_us.contact_add_in_progress=false;
								contact_us.detail_identifier=create_r.identifier;
								let contact_content=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetUserContacts(create_r.identifier);
								contact_us.contact_list=contact_content.item.thread;
								contact_us.contact_title=contact_content.item.title;
								contact_us.can_reply=contact_content.item.user_can_add_msg;
								contact_us.contact_content="";
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
							})();
						}
					}, "创建")
				)
			));
			for(let index in contact_us.contact_list) {
				let i=contact_us.contact_list[index];
				layout_content.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title:i.title},
					i.has_update?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", {style:"color:red;"}, "(新消息)")):null,
					i.closed?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", {style:"color:gray;"}, "(已关闭)")):null,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						onclick: async ()=>{
							contact_us.detail_identifier=i.identifier;
							let contact_content=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetUserContacts(i.identifier);
							contact_us.contact_list=contact_content.item.thread;
							contact_us.contact_title=contact_content.item.title;
							contact_us.can_reply=contact_content.item.user_can_add_msg;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "查看")
				));
			}
		}else{
			let allow_anonymous=false;
			if(localStorage.getItem("admin")) {
				allow_anonymous=true;
			}
			layout_content.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: ""},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {style: "margin-right: 2rem;",onclick:()=>{
					contact_us.oninit();
				}}, "返回"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {onclick:async()=>{
					let con=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].question("确认", "确认要删除本联络吗？", true);
					if(!con)return;
					let del_r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].DeleteUserContact(contact_us.detail_identifier);
					if(!del_r.success) {
						return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("失败", del_r.message);
					}
					contact_us.oninit();
				}}, "删除本联络")
			));
			if(contact_us.can_reply) {
				layout_content.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "回复/追加"},
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
						allow_anonymous?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.form-check", {style:{"margin-right":".2rem"}},
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-check-input", {
								type: "checkbox",
								id: "contact_anonymous_check",
								value: contact_us.contact_reply_anonymous?"on":"off",
								oninput: (e)=>{
									if(e.target.value=="off") {
										contact_us.contact_reply_anonymous=true;
									}else{
										contact_us.contact_reply_anonymous=false;
									}
								}
							}),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.form-check-label", {for:"contact_anonymous_check",style:"margin-right:1rem;"}, "匿名")
						):null,
						allow_anonymous?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.form-check", {style:{"margin-right":".2rem"}},
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-check-input", {
								type: "checkbox",
								id: "contact_closing_check",
								value: contact_us.contact_closing?"on":"off",
								oninput: (e)=>{
									if(e.target.value=="off") {
										contact_us.contact_closing=true;
									}else{
										contact_us.contact_closing=false;
									}
								}
							}),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.form-check-label", {for:"contact_closing_check"}, "关闭此联络")
						):null,
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.userProfile-form-item",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.userProfile-form-label",
								[
									"内容",
									mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("textarea.userProfile-form-input.form-input.ember-text-field.ember-view"), {
										rows: "10",
										cols: "90%",
										style: {
											width: "90%"
										},
										value:contact_us.contact_content,
										oninput:(e)=>{contact_us.contact_content=e.target.value;}
									})
								]
							)
						),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
							disabled:contact_us.contact_add_in_progress,
							onclick:(e)=>{
								e.preventDefault();
								contact_us.contact_add_in_progress=true;
								(async()=>{
									let update_r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].UpdateUserContact(contact_us.detail_identifier, contact_us.contact_content, contact_us.contact_reply_anonymous,contact_us.contact_closing);
									if(!update_r.success) {
										contact_us.contact_add_in_progress=false;
										return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("失败", update_r.message);
									}
									contact_us.contact_add_in_progress=false;
									let contact_content=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetUserContacts(contact_us.detail_identifier);
									contact_us.contact_list=contact_content.item.thread;
									contact_us.contact_title=contact_content.item.title;
									contact_us.can_reply=contact_content.item.user_can_add_msg;
									mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								})();
							}
						}, "追加")
					)
				));
			}
			for(let i of contact_us.contact_list) {
				let formatted_content=[];
				let spl_content=i.content.split("\n");
				for(let line of spl_content) {
					formatted_content.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", line.toString()));
				}
				layout_content.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title:""},
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", ["发送方: ", i.sender]),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", ["日期: ", (new Date(parseInt(i.time+"000"))).toLocaleString()]),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("hr"),
					formatted_content
				));
			}
		}
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName:
			contact_us.detail_identifier?`联络: ${contact_us.contact_title}`:"联络",
			pageIcon},
			layout_content
		);
	}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact_us);


/***/ })

}]);