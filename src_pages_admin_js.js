"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_admin_js"],{

/***/ "./src/pages/admin.js":
/*!****************************!*\
  !*** ./src/pages/admin.js ***!
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




const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path d="M224 96.1v48.8l29.7 29.7c-6.8-34.8 3.5-70.3 28.5-95.3 20.3-20.3 47.2-31.2 75-31.2h1.2L301 105.3l15.1 90.6 90.6 15.1 57.3-57.3c.3 28.3-10.6 55.5-31.2 76.1-9.3 9.3-20.2 16.4-31.8 21.6 1.8 1.6 3.9 2.9 5.6 4.6l30.7 30.7c10.5-6.3 20.5-13.9 29.4-22.9 38.1-38.1 53.7-94.3 40.7-146.6C504.4 105 495 95.4 483 92c-12.2-3.4-25.2.1-34 9l-58.7 58.6-32.4-5.4-5.4-32.4 58.6-58.6c8.9-8.9 12.3-21.9 8.9-34-3.3-12.1-13-21.5-25.2-24.5-53.2-13.2-107.9 2-146.6 40.6C238 55.5 229.7 67 222.9 79.2l1.1.8v16.1zM106 454c-12.8 12.8-35.3 12.8-48.1 0-6.4-6.4-10-15-10-24 0-9.1 3.5-17.6 10-24l134.4-134.4-33.9-33.9L24 372C8.5 387.5 0 408.1 0 430s8.5 42.5 24 58 36.1 24 58 24 42.5-8.5 58-24l100.9-100.9c-9.7-15.8-15.2-33.8-15.7-52.1L106 454zm395.1-58.3L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7z"></path></svg>`;

let ap={
	newAnnouncementTitle: "",
	newAnnouncementContent: "",
	newAnnouncementPublishing: false,
	userlist: [],
	payments: [],
	selected_serverlist: {
		username: "",
		content: []
	},
	addUser_Username: "",
	addUser_Password: "",
	addUser_InProgress: false,
	db_cache_clean_wip: false,
	az_TargetUsername: "",
	az_Value: "",
	az_InProgress: false,
	whitelist_page: 1,
	payments_page: 1,
	whitelist_maxpage: 1,
	payments_maxpage: 1,
	whitelist_query: "",
	whitelist_query_additional: [false,false,false,false],
	payments_query: {
		username: "",
		hname: "",
		desc: ""	
	},
	pil_value: [],
	oninit: async ()=>{
		let whitelist_query_proc=`${ap.whitelist_query_additional[0]?"1":"0"}${ap.whitelist_query_additional[1]?"1":"0"}${ap.whitelist_query_additional[2]?"1":"0"}${ap.whitelist_query_additional[3]?"1":"0"}${ap.whitelist_query}`;
		let whitelist_and_payments=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetWhitelistAndPayments(
			ap.whitelist_page,
			ap.payments_page,
			whitelist_query_proc,
			ap.payments_query.username,
			ap.payments_query.hname,
			ap.payments_query.desc
		);
		ap.userlist=whitelist_and_payments.wlist;
		ap.payments=whitelist_and_payments.payments;
		ap.whitelist_maxpage=whitelist_and_payments.pn_wlist;
		ap.payments_maxpage=whitelist_and_payments.pn_plist;
		if(ap.whitelist_maxpage==0) ap.whitelist_maxpage=1;
		if(ap.payments_maxpage==0) ap.payments_maxpage=1;
		let {pil} = await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetPil();
		ap.pil_value=pil;
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	},
	view: (vnode)=>{
		let kclNode=[];
		for(let i in ap.pil_value){
			kclNode.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"row"},i),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",JSON.stringify(ap.pil_value[i]))
			));
		}
		let userlist_rendered=[];
		for(let index in ap.userlist) {
			let i = ap.userlist[index];
			let index_num=parseInt(index);
			let additionalTags=[];
			if(i.banned) {
				additionalTags.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", {style:{color:"red"}}, "[B]"));
			}
			if(i.admin) {
				additionalTags.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", {style:{color:"red"}}, "[ADMIN]"));
			}
			if(i.allowed_to_use_phoenix) {
				additionalTags.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", {style:{color:"blue"}}, "[P]"));
			}
			userlist_rendered.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"row"},[additionalTags,i.username]),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",i.promocodeCount||"0"),
				!i.editing?mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",
					{
						style: {
							cursor: "pointer"
						},
						onclick: (e)=>{
							e.preventDefault();
							ap.userlist[index_num].editing_psw="";
							ap.userlist[index_num].editing=true;
						}
					},
					i.password.substr(0,8)
				)):
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.col-sm-4.form-control", {
					style: {
						width: "initial"
					},
					value: i.editing_psw,
					oninput: (e)=>{
						ap.userlist[index_num].editing_psw=e.target.value;
					},
					onkeypress: async (e)=>{
						if(e.key=="Enter") {
							e.preventDefault();
							ap.userlist[index_num].editing=false;
							ap.userlist[index_num].password=ap.userlist[index_num].editing_psw;
							await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].UpdateUserPassword(ap.userlist[index_num].username,ap.userlist[index_num].password);
							ap.oninit();
						}
					}
				})),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", [
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-secondary", {
						onclick: ()=>{
							ap.selected_serverlist.username=ap.userlist[index_num].username;
							ap.selected_serverlist.content=ap.userlist[index_num].rentalservers;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "Serv."),
					/*" ",
					m("button.btn.btn-danger", {
						onclick: async ()=>{
							if(i.banned) {
								let confirm_stat=await frame.question("Retract Ticket", `Retract the ticket for ${i.username}?`, true);
								if(!confirm_stat)return;
								let r=await API.BanUser(i.username);
								if(!r.success) {
									return await frame.showAlert("Failed", r.message);
								}
								i.banned=false;
								m.redraw();
								return;
							}
							let reason=await frame.getInput("Fine User", "Please confirm and give a reason for fining "+i.username, "Reason", false, true);
							if(reason===false)return;
							let r=await API.BanUser(i.username, reason);
							if(!r.success) {
								return await frame.showAlert("Failed", r.message);
							}
							i.banned=true;
							m.redraw();
						}
					}, !i.banned?"Fine":"RetrTkt"),*/
					" ",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-danger", {
						onclick: async ()=>{
							if(!await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].question("Remove user", `Remove user ${i.username}? This will remove the entry permanently from the database!`, true)) {
								return;
							}
							let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].RemoveUser(i.username);
							if(!r.success) {
								return await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Failed", r.message);
							}
							ap.oninit();
						}
					}, "Remove")
				])
			));
		}
		let userlist_pagination_items=[];
		userlist_pagination_items[0]=mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.whitelist_page==1?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick:(e)=>{
					e.preventDefault();
					ap.whitelist_page--;
					ap.oninit();
				}
			}, "^")
		);
		userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.whitelist_page==1?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick: (e)=>{
					e.preventDefault();
					ap.whitelist_page=1;
					ap.oninit();
				}
			}, "1")
		));
		if(ap.whitelist_page==1||ap.whitelist_page==ap.whitelist_maxpage) {
			if(ap.whitelist_maxpage==1) {
				userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item.disabled",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", "...")
				));
			}else{
				userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
						href: "#",
						onclick: (e)=>{
							e.preventDefault();
							ap.whitelist_page=2;
							ap.oninit();
						}
					}, "2")
				));
			}
		}else{
			userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item.disabled",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", ap.whitelist_page)
			));
		}
		userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(1==ap.whitelist_maxpage?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick: async (e)=>{
					e.preventDefault();
					let jumpPage=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].getInput("Jump", "Jump to:", "Page", false, false);
					if(jumpPage===false)return;
					let pn=parseInt(jumpPage);
					if(isNaN(pn)||pn>ap.whitelist_maxpage||pn<1) {
						await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Jump", "Invalid page number");
						return;
					}
					ap.whitelist_page=pn;
					ap.oninit();
				}
			}, "...")
		));
		userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.whitelist_page==ap.whitelist_maxpage?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick:(e)=>{
					e.preventDefault();
					ap.whitelist_page=ap.whitelist_maxpage;
					ap.oninit();
				}
			}, ap.whitelist_maxpage)
		));
		userlist_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.whitelist_page==ap.whitelist_maxpage?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				style: {
					transform: "rotate(180deg)",
					"border-top-left-radius": ".25rem",
					"border-top-right-radius": ".25rem",
					"border-bottom-left-radius": "initial",
					"border-bottom-right-radius": "initial"
				},
				onclick:(e)=>{
					e.preventDefault();
					ap.whitelist_page++;
					ap.oninit();
				}
			}, "^")
		));
		let paymentLog_rendered=[];
		for(let i of ap.payments) {
			if(i.helper&&i.helper.length>40) {
				i.helper=i.helper.substr(0,36)+"...";
			}
			paymentLog_rendered.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr", {
				style: i.refunded?"text-decoration-line:line-through;color:gray;":"",
				ondblclick: ()=>{
					_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Full Content",JSON.stringify(i,null,"\t"));
				}/*,
				onmousedown:()=>{
					i.holding=true;
					setTimeout(()=>{
						if(i.holding){
							delete i.holding;
							frame.showAlert("Full Content",JSON.stringify(i,null,"\t"));
						}
					}, 2000);
				},
				onmouseup:()=>{
					delete i.holding;
				}*/
			},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", ((new Date(i.date)).toLocaleString())),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.username),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.helper||"(null)"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.price),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.helper_price),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(i.description.replace(/\n/g, "<br/>")))
			));
		}
		let paymentLog_pagination_items=[];
		paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.payments_page==1?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick:(e)=>{
					e.preventDefault();
					ap.payments_page--;
					ap.oninit();
				}
			}, "^")
		));
		paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.payments_page==1?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick: (e)=>{
					e.preventDefault();
					ap.payments_page=1;
					ap.oninit();
				}
			}, "1")
		));
		if(ap.payments_page==1||ap.payments_page==ap.payments_maxpage) {
			if(ap.payments_maxpage==1) {
				paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item.disabled", mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", "...")));
			}else{
				paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
						href: "#",
						onclick: (e)=>{
							e.preventDefault();
							ap.payments_page=2;
							ap.oninit();
						}
					}, "2")
				));
			}
		}else{
			paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item.disabled",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", ap.payments_page)
			));
		}
		paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.payments_maxpage==1?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick: async (e)=>{
					e.preventDefault();
					let jumpPage=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].getInput("Jump", "Jump to:", "Page", false, false);
					if(jumpPage===false)return;
					let pn=parseInt(jumpPage);
					if(isNaN(pn)||pn>ap.payments_maxpage||pn<1) {
						await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Jump", "Invalid page number");
						return;
					}
					ap.payments_page=pn;
					ap.oninit();
				}
			}, "...")
		));
		paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.payments_page==ap.payments_maxpage?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				onclick:(e)=>{
					e.preventDefault();
					ap.payments_page=ap.payments_maxpage;
					ap.oninit();
				}
			}, ap.payments_maxpage)
		));
		paymentLog_pagination_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.page-item"+(ap.payments_page==ap.payments_maxpage?".disabled":""),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.page-link", {
				href: "#",
				style: {
					transform: "rotate(180deg)"
				},
				onclick:(e)=>{
					e.preventDefault();
					ap.payments_page++;
					ap.oninit();
				}
			}, "^")
		));
		let renderedRentalServerField=null;
		if(ap.selected_serverlist.username) {
			let body_items=[];
			if(!ap.selected_serverlist.content) ap.selected_serverlist.content=[];
			for(let i of ap.selected_serverlist.content) {
				let canchange=false;
				let ato=0;
				if(i.locked) {
					ato="[One-Time]";
				}
				if(i.lastdate==null&&!i.locked){
					canchange=true;
				}else{
					if(i.locked) {
						canchange=false;
					}else{
						let sugosu=(new Date()).getTime()/1000-i.lastdate;
						if(sugosu>2592000/*86400000*30*/){
							canchange=true;
						}else{
							ato=Math.round(((2592000-sugosu)/86400)*100)/100;
						}
					}
				}
				let actionButtons=[];
				if(!canchange) {
					actionButtons.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-secondary", {
						onclick: async (e)=>{
							await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].UnlockSlot(ap.selected_serverlist.username, i.slotid);
							await ap.oninit();
							ap.selected_serverlist.content=(await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetRentalServerList(ap.selected_serverlist.username)).rentalservers;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "Unlock"));
				}
				if(!i.locked) {
					if(actionButtons.length!=0)actionButtons.push(" ");
					actionButtons.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-secondary", {
						onclick: async (e)=>{
							await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].LockSlot(ap.selected_serverlist.username, i.slotid);
							await ap.oninit();
							ap.selected_serverlist.content=(await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetRentalServerList(ap.selected_serverlist.username)).rentalservers;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "Lock"));
				}
				if(actionButtons.length!=0)actionButtons.push(" ");
				actionButtons.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-danger", {
					onclick: async (e)=>{
						await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].RemoveSlot(ap.selected_serverlist.username, i.slotid);
						await ap.oninit();
						ap.selected_serverlist.content=(await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetRentalServerList(ap.selected_serverlist.username)).rentalservers;
						mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
					}
				}, "Remove"));
				body_items.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.slotid),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.sid),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", `${ato}|${canchange}`),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", actionButtons)
				));
			}
			renderedRentalServerField=mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "Server list for "+ap.selected_serverlist.username},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.row.pre-scrollable",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("table.table",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("thead",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope: "col"}, "SlotID"),
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope: "col"}, "ServerID"),
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope: "col"}, "ATO|CanChange"),
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope: "col"}, "Actions")
							)
						),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("tbody", body_items)
					)
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-primary", {
						onclick: async (e)=>{
							await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].AddSlot(ap.selected_serverlist.username);
							await ap.oninit();
							ap.selected_serverlist.content=(await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetRentalServerList(ap.selected_serverlist.username)).rentalservers;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "Add"),
					" ",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-primary", {
						onclick: async (e)=>{
							await ap.oninit();
							ap.selected_serverlist.content=(await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetRentalServerList(ap.selected_serverlist.username)).rentalservers;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}
					}, "Refresh"),
					" ",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-secondary", {
						onclick: ()=>{
							ap.selected_serverlist.content=[];
							ap.selected_serverlist.username="";
						}
					}, "Close")
				)
			);
		}
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "用户中心管理", pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default().trust("<style>.page-item:first-child .page-link {\n\tborder-bottom-left-radius: initial;\n\tborder-top-right-radius: .25rem\n}\n\n.page-item:last-child .page-link {\n\tborder-top-right-radius: initial;\n\tborder-bottom-left-radius: .25rem\n}\n\n.page-item:not(:first-child) .page-link {\n\tmargin-top: -1px;\n\tmargin-left: initial;\n}\n\n"),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "发布公告"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: ap.newAnnouncementTitle,
						style: {
							width: "90%"
						},
						oninput: (e)=>{
							ap.newAnnouncementTitle=e.target.value;
						}
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
									value:ap.newAnnouncementContent,
									oninput:(e)=>{ap.newAnnouncementContent=e.target.value;}
								})
							]
						)
					)
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					disabled: ap.newAnnouncementPublishing,
					onclick: (e)=>{
						e.preventDefault();
						ap.newAnnouncementPublishing=true;
						(async function() {
							if(!(await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].PublishAnnouncement(ap.newAnnouncementTitle,ap.newAnnouncementContent)).success) {
								return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Error", "Failed to publish announcement.");
							}
							ap.newAnnouncementTitle="";
							ap.newAnnouncementContent="";
							ap.newAnnouncementPublishing=false;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						})();
					}
				}, "发布")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "用户列表"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", {
					style: {
						display: "flex"
					}
				}, 
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.row.pre-scrollable", {
						style: {
							height: "250px",
							"flex-grow": 1
						}
					},
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("table.table",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("thead",
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope:"col"},"UN"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope:"col"},"PC"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope:"col"},"PSW(SHA256(1..8))"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", {scope:"col"},"Actions")
								)
							),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("tbody", userlist_rendered)
						)
					),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("nav", {style:{"margin-left":"1.5rem","margin-top":".5rem"}},
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.pagination", {
							style: {
								"flex-direction": "column",
								width: "min-content",
							}
						}, userlist_pagination_items)
					)
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("h5", "Query"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.userlist-query",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("label", {style:{"margin-top":"auto","margin-bottom":"auto","margin-right":".5rem"}}, "Flags"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", {style:{display:"flex","margin-top":"auto","margin-bottom":"auto","margin-right":".5rem"}},
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.form-check", {style:{"margin-right":".2rem"}},
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-check-input", {
								type: "checkbox",
								id: "adminFilterCheck",
								value: ap.whitelist_query_additional[0]?"on":"off",
								oninput:(e)=>{
									if(e.target.value=="off") {
										ap.whitelist_query_additional[0]=true;
									}else{
										ap.whitelist_query_additional[0]=false;
									}
									ap.oninit();
								}
							}),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.form-check-label", {
								for: "adminFilterCheck"
							}, "Admin")
						),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.form-check", {style:{"margin-right":".2rem"}},
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-check-input", {
								type: "checkbox",
								id: "PValueFilterCheck",
								value: ap.whitelist_query_additional[1]?"on":"off",
								oninput:(e)=>{
									if(e.target.value=="off") {
										ap.whitelist_query_additional[1]=true;
									}else{
										ap.whitelist_query_additional[1]=false;
									}
									ap.oninit();
								}
							}),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.form-check-label", {
								for: "PValueFilterCheck"
							}, "P")
						),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.form-check", {style:{"margin-right":".2rem"}},
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-check-input", {
								type: "checkbox",
								id: "BannedFilterCheck",
								value: ap.whitelist_query_additional[2]?"on":"off",
								oninput:(e)=>{
									if(e.target.value=="off") {
										ap.whitelist_query_additional[2]=true;
									}else{
										ap.whitelist_query_additional[2]=false;
									}
									ap.oninit();
								}
							}),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.form-check-label", {
								for: "BannedFilterCheck"
							}, "Banned")
						),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.form-check", {style:{"margin-right":".2rem"}},
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-check-input", {
								type: "checkbox",
								id: "HasPCFilterCheck",
								value: ap.whitelist_query_additional[3]?"on":"off",
								oninput:(e)=>{
									if(e.target.value=="off") {
										ap.whitelist_query_additional[3]=true;
									}else{
										ap.whitelist_query_additional[3]=false;
									}
									ap.oninit();
								}
							}),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("label.form-check-label", {
								for: "HasPCFilterCheck"
							}, "PC!=0")
						)
					),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("label", {style:{"margin-top":"auto","margin-bottom":"auto","margin-right":".5rem"}}, "Username"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-control", {
						value: ap.whitelist_query,
						oninput: (e)=>{
							ap.whitelist_query=e.target.value;
							ap.oninit();
						}
					})
				)
			),
			renderedRentalServerField,
			/*m(frame.section, {title: "确认码列表"},
				m("div", {style:{display:"flex"}},
					m("div.row.pre-scrollable", {style:{height:"250px"}},
						m("table.table",
							m("thead",
								m("tr",
									m("th",{scope:"col"},"Key"),
									m("th",{scope:"col"},"Content")
								)
							),
							m("tbody",
								kclNode
							)
						)
					),
					m("nav", {style:{"margin-left":"1rem"}},
						m("ul", {class:"pagination",style:{"margin-top":"auto","margin-bottom":"auto",width:"min-content","flex-direction":"column"}},
							null
						)
					)
				)
			),*/
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "购买记录"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "なんと！ローを二回押すと、詳細を見ることができるようになった！"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", {style:{display:"flex"}},
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.row.pre-scrollable", {style:{height:"250px"}},
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("table.table",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("thead",
								mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"col"},"Date"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"col"},"Username"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"col"},"Helper"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"col"},"Price"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"col"},"Helper's Price"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("th",{scope:"col"},"Description")
								)
							),
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("tbody", paymentLog_rendered)
						)
					),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("nav", {style:{"margin-left":"1rem"}},
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul", {class:"pagination",style:{"margin-top":"auto","margin-bottom":"auto",width:"min-content","flex-direction":"column"}},
							paymentLog_pagination_items
						)
					)
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("h5", "Query"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.plog-query",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("label", {style: {"margin-right":".5rem","margin-top": "auto", "margin-bottom": "auto"}}, "Username"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-control", {
						value: ap.payments_query.username,
						oninput: (e)=>{
							ap.payments_query.username=e.target.value;
							ap.oninit();
						},
						style: {
							width: "10rem",
							"margin-right": "1rem"
						}
					}),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("label", {style:{"margin-right":".5rem","margin-top": "auto", "margin-bottom": "auto"}}, "Helper"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-control", {
						value: ap.payments_query.hname,
						oninput: (e)=>{
							ap.payments_query.hname=e.target.value;
							ap.oninit();
						},
						style: {
							width: "10rem",
							"margin-right": "1rem"
						}
					}),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("label", {style:{"margin-right":".5rem","margin-top": "auto", "margin-bottom": "auto"}}, "Description"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("input.form-control", {
						value: ap.payments_query.desc,
						oninput: (e)=>{
							ap.payments_query.desc=e.target.value;
							ap.oninit();
						},
						style: {
							width: "10rem",
							"margin-right": "1rem"
						}
					})
				)
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "添加用户"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: ap.addUser_Username,
						style: {
							width: "90%"
						},
						oninput: (e)=>{
							ap.addUser_Username=e.target.value;
						}
					}, "用户名"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: ap.addUser_Password,
						style: {
							width: "90%"
						},
						isPassword: true,
						oninput: (e)=>{
							ap.addUser_Password=e.target.value;
						}
					}, "密码")
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					disabled: ap.addUser_InProgress,
					onclick: ()=>{
						ap.addUser_InProgress=true;
						(async ()=>{
							let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].AddUser(ap.addUser_Username, ap.addUser_Password);
							if(!r.success) {
								ap.addUser_InProgress=false;
								_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Error", r.msg);
								return mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
							}
							ap.addUser_InProgress=false;
							ap.addUser_Username="";
							ap.addUser_Password="";
							ap.oninit();
						})();
					}
				}, "添加")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "添加余额"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: ap.az_TargetUsername,
						style: {
							width: "90%"
						},
						oninput: (e)=>{
							ap.az_TargetUsername=e.target.value;
						}
					}, "用户名"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: ap.az_Value,
						style: {
							width: "90%"
						},
						oninput: (e)=>{
							ap.az_Value=e.target.value;
						}
					}, "值")
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					disabled: ap.az_InProgress,
					onclick: ()=>{
						ap.az_InProgress=true;
						(async ()=>{
							let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].AddBalance(ap.az_TargetUsername, ap.az_Value);
							if(!r.done) {
								ap.az_InProgress=false;
								_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("Error", "Failed");
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								return;
							}
							ap.az_InProgress=false;
							ap.az_TargetUsername="";
							ap.az_Value="";
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						})();
					}
				}, "添加")
			)/*,
			m(frame.section, {title: "清空数据库缓存"},
				m("p", "一部のユーザのデータはメモリに cache されているため、データベースへの変更が直接にサーバーに作用できない。もしそうしたいなら下のボータンを押してね。"),
				m(frame.button, {
					disabled: ap.db_cache_clean_wip,
					onclick: ()=>{
						ap.db_cache_clean_wip=true;
						(async ()=>{
							let r=await API.ClearDBCache();
							ap.db_cache_clean_wip=false;
							if(!r.success) {
								frame.showAlert("Error", r.message);
								return;
							}
							m.redraw();
						})();
					}
				}, "クリア")
			),
			m(frame.section, {title: "Activate TEST Payment Environment"},
				m("p", "Dangerous! Don't use in production! Restart fbuc to recover."),
				m("p", "A production mode protector is working and this won't work in production"),
				m(frame.button, {
					onclick: async ()=>{
						await API.SwitchToTestPaymentEnv();
						return frame.showAlert("Done", "HAVE FUN");
					}
				},"GO TEST")
			),
			m(frame.section, {title: "Reload Modules"},
				m("p", "Reload shared modules"),
				m(frame.button, {
					onclick: async ()=>{
						await API.ReloadPV4Modules();
						return frame.showAlert("Scheduled", "Modules reload scheduled, and will be executed in a few seconds.");
					}
				}, "Reload")
			)*/
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ap);











/***/ })

}]);