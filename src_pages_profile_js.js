"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_profile_js"],{

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
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

let profilePage={
	gamenameinputcontent: "",
	isgamenamesetfailed: false,
	monthly_plan_duration: 0,
	slots: [],
	helpername: "",
	helpername_set_error: "",
	helperuserbtntitle: "",
	helperloaded: false,
	helperRealnameUrl: "",
	helperCreated: false,
	helperDefaultButtonWorking: false,
	acceptWorldChat: false,
	//combineUserError: "",
	changePassword_working: false,
	//combineUser_currentUserPassword: "",
	//combineUser_targetUserPassword: "",
	//combineUser_targetUsername: "",
	gamename_apply_btn_working: false,
	changePassword_inputs: ["","",""],
	//omegaCloudActivated: false,
	//omegaCloudNoKoRu: 0,
	//omegaCloudJoinInProgress: false,
	binded_mail: null,
	email_bind_val: "",
	email_bind_captcha_val: "",
	email_bind_working: false,
	bot_linkCode: "",
	bot_linkCode_displayOrdered: false,
	is_commercial_2022: false,
	is_2fa_enabled: false,
	is_2fa_in_progress: false,
	is_rate_limited: false,
	captchaRand: 0,
	rate_limit_waiving_in_progress:false,
	oninit: async ()=>{
		profilePage.captchaRand=Math.random();
		profilePage.is_2fa_in_progress=false;
		let generalInfo=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].FetchProfileGeneral();
		profilePage.is_2fa_enabled=generalInfo.is_2fa;
		profilePage.bot_linkCode=generalInfo.blc;
		profilePage.gamenameinputcontent=generalInfo.cn_username;
		profilePage.slots=generalInfo.slots;
		if(generalInfo.binded_mail) {
			profilePage.binded_mail=generalInfo.binded_mail;
		}else{
			profilePage.binded_mail=null;
		}
		profilePage.monthly_plan_duration=generalInfo.monthly_plan_duration;
		profilePage.is_rate_limited=generalInfo.is_rate_limited;
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
		let helperInfo=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetHelperStatus();
		profilePage.helpername=helperInfo.username;
		profilePage.helperCreated=helperInfo.set;
		profilePage.helperRealnameUrl=helperInfo.realname_addr||"";
		if(helperInfo.realname_addr||profilePage.helperCreated||profilePage.helpername||helperInfo.set===false) {
			profilePage.helperloaded=true;
		}
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	},
	view: (vnode)=>{
		let slotControls=[];
		for(let n in profilePage.slots) {
			let num=parseInt(n);
			let i=profilePage.slots[n];
			if(!i.walked&&!i.canchange) {
				if(i.locked) {
					i.sid+="|固定slot，不可修改";
				}else{
					i.sid+=`|${i.ato}天后方可修改`;
				}
				i.walked=true;
			}
			slotControls.push(mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].doClassReplace("input.userProfile-form-input.form-input.ember-text-field.ember-view"), {
						value: profilePage.slots[num].sid,
						disabled: !profilePage.slots[num].canchange,
						oninput:(e)=>{
							profilePage.slots[num].sid=e.target.value;
						}
					})
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td", i.locked?"固定":"可变"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("td",
					i.canchange?mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						disabled: profilePage.slots[num].isProcessing,
						onclick: (e)=>{
							e.preventDefault();
							profilePage.slots[num].isProcessing=true;
							(async()=>{
								let confirmation=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].question("提示", `您正将槽位内容更改为"${profilePage.slots[num].sid}"`);
								if(!confirmation) {
									profilePage.slots[num].isProcessing=false;
									mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
									return;
								}
								let res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].SaveSlot(profilePage.slots[num].slotid,profilePage.slots[num].sid,false);
								if(!res.success) {
									await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误","未能应用操作："+res.message);
									profilePage.slots[num].isProcessing=false;
									mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
									return;
								}
								profilePage.slots=res.slots;
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
							})();
						}
					}, "保存"):null,
					i.locked&&!i.canchange ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						disabled: profilePage.slots[num].isProcessing,
						onclick: (e)=>{
							e.preventDefault();
							profilePage.slots[num].isProcessing=true;
							_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].question("警告", "确定要删除这个槽位吗?",true).then(async(sel)=>{
								if(!sel) {
									profilePage.slots[num].isProcessing=false;
									mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
									return;
								}
								await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].SaveSlot(profilePage.slots[num].slotid,"",true);
								profilePage.slots[num].isProcessing=false;
								profilePage.oninit();
							});
						}
					}, "删除"):null
				)
			));
		}
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName:"用户信息" ,pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "游戏名"},
				profilePage.isgamenamesetfailed?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",{style:{color:"red"}},"设置失败"):null,
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "在此处设置客户端默认游戏名，可以不设置。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: profilePage.gamenameinputcontent,
						oninput: (e)=>{
							profilePage.gamenameinputcontent=e.target.value;
						}
					}, "游戏名")
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					disabled: profilePage.gamename_apply_btn_working,
					onclick:(e)=>{
						e.preventDefault();
						profilePage.gamename_apply_btn_working=true;
						(async function(){
							let res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].SaveClientUsername(profilePage.gamenameinputcontent);
							if(!res.success) {
								profilePage.gamename_apply_btn_working=false;
								profilePage.isgamenamesetfailed=true;
								return mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
							}
							profilePage.gamename_apply_btn_working=false;
							profilePage.gamenameinputcontent=res.namearray[0];
							return mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						})();
					}
				},
				"应用")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "月额Plan"},
				profilePage.is_commercial_2022?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",{style:{color:"red"}},"由于您的账号是商业账号，在有效期过期后数日后将会被删除。"):null,
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", profilePage.monthly_plan_duration===-1?"永久":`剩余 ${profilePage.monthly_plan_duration} 天有效`)
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "租赁服绑定"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "请在下方列表中设定您的常用租赁服，每个位置(slot)均在设置后1个月内不可变。您仅可以进入已在这里绑定的租赁服。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "slot 可自商城购买。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].form,
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("div.userProfile-form-item",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("table",
							mithril__WEBPACK_IMPORTED_MODULE_0___default()("tr",mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", "服务器号"),mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", "类型"),mithril__WEBPACK_IMPORTED_MODULE_0___default()("th", "操作")),
							slotControls
						)
					)
				)
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "fbtoken"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "fbtoken 是 PhoenixBuilder 用于登入至您的 FastBuilder 用户中心账户的凭证。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "点击下方按钮获取。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					onclick: (e)=>{
						location.href=_api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetAPI("get_phoenix_token");
					}
				}, "获取")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "辅助用户"},
				!profilePage.helperloaded?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p","请稍候，正在加载"):
				[
					mithril__WEBPACK_IMPORTED_MODULE_0___default()({
						view: (vnode)=>{
							if(profilePage.helpername_set_error.length===0)return null;
							return mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",{style:{color:"red"}},
								profilePage.helpername_set_error);
						}
					}),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, [
						"辅助用户是用于进入您的租赁服完成操作的",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", "机器人用户"),
						"。",
						"辅助用户之创建是 PhoenixBuilder 正常工作的必要条件。",
						"当您创建辅助用户后，可能需要刷新页面才可进行网易实名操作。"
					]),
					profilePage.helperCreated&&profilePage.helperRealnameUrl.length===0 ?mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: profilePage.helpername,
						oninput: (e)=>{
							profilePage.helpername=e.target.value;
						}
					}, "辅助用户名称"):null,
					profilePage.helperRealnameUrl.length===0?mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						disabled: profilePage.helperDefaultButtonWorking,
						onclick: (e)=>{
							e.preventDefault();
							profilePage.helpername_set_error="";
							profilePage.helperDefaultButtonWorking=true;
							(async function(){
								//if(profilePage.helperCreated) {
									let res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].ChangeHelperNameOrCreateHelper(profilePage.helpername);
									if(!res.success) {
										if(res.verify_url) {
											_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showIframe("网易验证码验证",res.verify_url);
										}
										profilePage.helpername_set_error=res.message;
										profilePage.helperDefaultButtonWorking=false;
										mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
										return;
									}
									profilePage.helperDefaultButtonWorking=false;
									if(res.need_realname) {
										profilePage.helperloaded=false;
										mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
										let helperInfo=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetHelperStatus();
										profilePage.helpername=helperInfo.username;
										profilePage.helperCreated=helperInfo.set;
										profilePage.helperRealnameUrl=helperInfo.realname_addr;
										profilePage.helperloaded=true;
									}
									mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								//}

							})();
						}
					}, profilePage.helperCreated? "更改昵称" : "创建辅助用户") :
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].abutton, {
						href: profilePage.helperRealnameUrl,
						target: "_blank"
					}, "网易实名认证")
				]
			),
			/*m(frame.section, {title: "合并用户"},
				m(frame.sectionGeneralText, "将当前用户的租赁服槽位合并到目标用户，合并后当前用户将被禁止登录，其他用户数据(包括辅助用户信息)不会被转移。"),
				profilePage.combineUserError.length!=0?m("p",{style:{color:"red"}},profilePage.combineUserError):null,
				m(frame.formInput, {
					isPassword: true,
					value: profilePage.combineUser_currentUserPassword,
					oninput:(e)=>{
						profilePage.combineUser_currentUserPassword=e.target.value;
					}
				}, "当前用户密码"),
				m(frame.formInput, {
					value: profilePage.combineUser_targetUsername,
					oninput:(e)=>{
						profilePage.combineUser_targetUsername=e.target.value;
					}
				}, "目标用户名"),
				m(frame.formInput, {
					isPassword: true,
					value: profilePage.combineUser_targetUserPassword,
					oninput:(e)=>{
						profilePage.combineUser_targetUserPassword=e.target.value;
					}
				}, "目标用户密码")
			),
			これは本当にまだ必要あるか？
			SLOT はもうとっくに購入可能になったから。
			それでは、この功能を削除しよ
			*/
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "双重验证"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "双重验证可以防止未经授权的人登入你的账号。双重验证使用密码器生成的一次性密码。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					disabled: profilePage.is_2fa_in_progress,
					onclick: ()=> {
						if(!profilePage.is_2fa_enabled) {
							profilePage.is_2fa_in_progress=true;
							(async()=>{
								let inf=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].Kickstart2FA();
								profilePage.is_2fa_in_progress=false;
								if(!inf.success) {
									return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", inf.message);
								}
								let auth_code=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].getInput("启用双重验证",[
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "请使用 Google Authenticator (或任意密码器) 扫描以下二维码"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {src:inf.qrcode})),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "或者输入这段文字:"),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", inf.plainkey)),
									mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "完成后，你会看到对应验证码，请将其输入到下方文本框内。")
								], "验证码", false, false);
								if(auth_code===false) {
									return;
								}
								profilePage.is_2fa_in_progress=true;
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								let fin_req=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].FinishRegistering2FA(auth_code);
								profilePage.is_2fa_in_progress=false;
								if(!fin_req.success) {
									return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", fin_req.message);
								}
								profilePage.is_2fa_enabled=true;
								await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("成功", "您再次登录时将被要求输入验证码。");
							})();
						}else{
							(async()=>{
								let conf=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].question("关闭二重验证", "确认关闭二重验证？", true);
								if(!conf)
									return;
								profilePage.is_2fa_in_progress=true;
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								let req_res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].TurnOff2FA();
								profilePage.is_2fa_in_progress=false;
								if(!req_res.success) {
									mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
									return;
								}
								profilePage.is_2fa_enabled=false;
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								return;
							})();
						}
						
					}
				}, profilePage.is_2fa_enabled?"禁用":"启用")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "密码"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "更改用户中心的登录密码。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
					isPassword: true,
					value: profilePage.changePassword_inputs[0],
					oninput: (e)=>{
						profilePage.changePassword_inputs[0]=e.target.value;
					}
				}, "原密码"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
					isPassword: true,
					value: profilePage.changePassword_inputs[1],
					oninput: (e)=>{
						profilePage.changePassword_inputs[1]=e.target.value;
					}
				}, "新密码"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
					isPassword: true,
					value: profilePage.changePassword_inputs[2],
					oninput: (e)=>{
						profilePage.changePassword_inputs[2]=e.target.value;
					}
				}, "确认新密码"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					disabled: profilePage.changePassword_working,
					onclick: (e)=>{
						e.preventDefault();
						if(profilePage.changePassword_inputs[1]!==profilePage.changePassword_inputs[2]) {
							return _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", "新密码两次输入不一致。");
						}
						profilePage.changePassword_working=true;
						(async function(){
							let res=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].ChangePassword(profilePage.changePassword_inputs[0], profilePage.changePassword_inputs[1]);
							if(!res.success) {
								_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", res.message);
								profilePage.changePassword_working=false;
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
								return;
							}
							profilePage.changePassword_working=false;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/login");
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						})();
					}
				}, "更改")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "机器人链接口令"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "您可以使用以下链接口令来链接此账号到机器人。请注意：这将给予其对您账号完整的控制权！"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", profilePage.bot_linkCode_displayOrdered?profilePage.bot_linkCode:mithril__WEBPACK_IMPORTED_MODULE_0___default()("b", "***")),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					onclick: (e) => {
						profilePage.bot_linkCode_displayOrdered=(!profilePage.bot_linkCode_displayOrdered);
					}
				}, profilePage.bot_linkCode_displayOrdered?"隐藏链接口令":"显示链接口令")
			),
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title: "登录频率限制"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].sectionGeneralText, "为防止软件故障导致的不必要的服务器资源占用，你可能被限制登录频率，你可以在这里将其解除。"),
				profilePage.is_rate_limited?[
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "你被限制了登录频率，请输入验证码解除限制。"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {style:{height:"50px",width:"300px"},src:_api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetAPI("captcha")+"&rand="+profilePage.captchaRand}),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
						value: profilePage.rate_limit_waiving_captcha,
						oninput: (e)=>{
							profilePage.rate_limit_waiving_captcha=e.target.value;
						}
					}, "验证码"),
					mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
						disabled: profilePage.rate_limit_waiving_in_progress,
						onclick: ()=>{
							profilePage.rate_limit_waiving_in_progress=true;
							(async()=>{
								let rl_resp=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].WaiveRateLimit(profilePage.rate_limit_waiving_captcha);
								profilePage.captchaRand=Math.random();
								profilePage.rate_limit_waiving_in_progress=false;
								if(!rl_resp.success) {
									_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("失败", rl_resp.message);
									return;
								}
								profilePage.is_rate_limited=false;
								mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
							})();
						}
					}, "解除")
				]:
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "你现在没有受到登录频率限制。")
			)/*,
			m(frame.section, {title: "下载登录日志"},
				m(frame.sectionGeneralText, "点击下方按钮以下载你的账户的登录日志。"),
				m(frame.button, {
					onclick:()=>{location.href="/api/v2/3/api.web?jump_to=download_account_log";}
				}, "下载")
			),*/
			/*m(frame.section, {title: "邮箱绑定"},
				m(frame.sectionGeneralText, "绑定邮箱以便接收通知或找回密码。"),
				profilePage.binded_mail?
				m("p", ["已绑定邮箱: ",profilePage.binded_mail]):
				m("p", "未绑定邮箱"),
				m(frame.formInput, {
					isPassword: false,
					value: profilePage.email_bind_val,
					oninput: (e)=>{
						profilePage.email_bind_val=e.target.value;
					}
				}, "邮箱"),
				m("img", {src:"/api/v2/3/get-captcha.web?rand="+encodeURIComponent(String(profilePage.captchaRand))}),
				m(frame.formInput, {
					value: profilePage.email_bind_captcha_val,
					oninput: (e)=>{
						profilePage.email_bind_captcha_val=e.target.value;
					}
				}, "验证码"),
				m(frame.button, {
					disabled: profilePage.email_bind_working,
					onclick: ()=>{
						if(!profilePage.email_bind_val) {
							return frame.showAlert("错误", "请输入邮箱");
						}
						profilePage.email_bind_working=true;
						(async ()=>{
							let r=await API.BindEmail(profilePage.email_bind_val, profilePage.email_bind_captcha_val);
							await frame.showAlert("message", r.message);
							profilePage.email_bind_working=false;
							profilePage.captchaRand=Math.random();
							m.redraw();
						})()
					}
				}, "绑定")
			),
			m(frame.section, {"title": "Omega Cloud (Beta)"},
				m(frame.sectionGeneralText, "在我们的服务器上为您运行 Omega 服务。"),
				profilePage.omegaCloudActivated?[
					m("p", "您已经拥有测试资格"),
					m("p", ["请您前往",m("a", {href:"https://st.fastbuilder.pro"}, "https://st.fastbuilder.pro"),"进行操作。"]),
					m("p", "用户名为您的用户中心用户名，密码为加入测试时分配给您的密码，若忘记，可以点击下方按钮重置密码。"),
					m(frame.button, {
						disabled: profilePage.omegaCloudJoinInProgress,
						onclick: ()=>{
							profilePage.omegaCloudJoinInProgress=true;
							(async()=>{
								let res=await API.EnrollOmegaCloud();
								await frame.showAlert("提示",res.message);
								profilePage.omegaCloudJoinInProgress=false;
								m.redraw();
							})();
						}
					}, "重置密码")
				]:[
					m("p", "此服务在测试阶段免费，但随时可能终止。"),
					profilePage.omegaCloudNoKoRu==0?
					m("p", "测试名额被占满了，以后再说吧～"):
					[
						m("p", ["还剩", profilePage.omegaCloudNoKoRu, "个名额可用，点按下方按钮可以立刻免费参加测试。"]),
						m(frame.button, {
							disabled: profilePage.omegaCloudJoinInProgress,
							onclick: ()=>{
								profilePage.omegaCloudJoinInProgress=true;
								(async()=>{
									let res=await API.EnrollOmegaCloud();
									await frame.showAlert("提示",res.message);
									profilePage.omegaCloudJoinInProgress=false;
									if(res.success) {
										profilePage.omegaCloudActivated=true;
									}
									m.redraw();
								})();
							}
						}, "加入测试")
					]
				]
			),*/
			/*m(frame.section, {title: "付款记录"},
				m(frame.button, {
					onclick:(e)=>{
						e.preventDefault();
						m.route.set("/my-payment-log");
					}
				}, "查询付款记录")
			),
			m(frame.section, {"title": "注销用户"},
				m(frame.sectionGeneralText, [
					"此功能将您的信息从数据库中",
					m("b","完全"),
					"移除。"
				]),
				m(frame.button, {
					onclick:(e)=>{
						e.preventDefault();
						m.route.set("/remove-user");
					}
				},"前往注销")
			)*/
		);
	}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profilePage);





/***/ })

}]);