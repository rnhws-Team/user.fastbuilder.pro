"use strict";(self.webpackChunkwebpages=self.webpackChunkwebpages||[]).push([[406],{4406:(e,r,a)=>{a.r(r),a.d(r,{default:()=>u});var s=a(5143),t=a.n(s),n=a(865),o=a.n(n),i=a(2641);let l={inProgress:!1,stage:1,captchaRand:Math.random(),usernameValue:"",passwordValue:"",captchaValue:"",mailboxAddress:"",errorMessage:"",checkRegisterStatus:async e=>{let r=await i.Z.CheckRegister();if(!r.success)return r.error?(alert("注册失败："+r.error_message),l.inProgress=!1,l.stage=1,void o().redraw()):void(e&&(l.errorMessage=r.message,l.inProgress=!1,o().redraw()));l.oninit(),o().route.set("/router/enter")},oninit:()=>{l.inProgress=!1,l.stage=1,l.usernameValue="",l.passwordValue="",l.mailboxAddress="",l.errorMessage=""},view:e=>o()(t().login_frame,o()("div.lowin-box.lowin-login",o()("div.lowin-box-inner",o()("form-login.form",o()("p","注册"),l.errorMessage?o()("p",{style:{color:"red"}},l.errorMessage):null,1==l.stage?[o()("div.lowin-group",o()("input.lowin-input",{placeholder:"",type:"text",id:"username-input-id",readonly:l.inProgress,oninput:e=>{l.usernameValue=e.target.value},value:l.usernameValue}),o()("label",{for:"username-input-id"},"用户名")),o()("div.lowin-group",o()("input.lowin-input",{placeholder:"",type:"password",id:"password-input-id",readonly:l.inProgress,oninput:e=>{l.passwordValue=e.target.value},value:l.passwordValue}),o()("label",{for:"password-input-id"},"密码")),o()("img",{style:{"background-color":"white",height:"50px",width:"300px"},src:i.Z.GetAPI("captcha")+"&rand="+l.captchaRand}),o()("div.lowin-group",o()("input.lowin-input",{placeholder:"",type:"text",id:"captcha-input-id",readonly:l.inProgress,oninput:e=>{l.captchaValue=e.target.value},value:l.captchaValue}),o()("label",{for:"captcha-input-id"},"验证码")),o()("p","请阅读",o()("a",{href:"https://fastbuilder.pro/privacy-policy.html"},"隐私策略"),"以了解本服务可能涉及的隐私信息。"),o()("p","点击下方注册按钮代表您同意遵守",o()("a",{href:"https://fastbuilder.pro/enduser-license.html"},"用户协议"))]:[o()("p","注册成功："+l.usernameValue),o()("p","您的新密码已经经由邮件发送给您。")],o()("div.lowin-buttondiv",1==l.stage?o()("button.lowin-btn",{disabled:l.inProgress,onclick:()=>{if(l.errorMessage="",l.inProgress=!0,1==l.stage)return 12!=l.captchaValue.length?(l.inProgress=!1,l.errorMessage="验证码错误",void(l.captchaRand=Math.random())):0==l.usernameValue.length||0==l.passwordValue.length?(l.inProgress=!1,l.errorMessage="用户名或密码不能为空",void(l.captchaRand=Math.random())):void(async()=>{let e=await i.Z.Register(l.usernameValue,l.passwordValue,l.captchaValue);if(l.captchaRand=Math.random(),!e.success)return l.inProgress=!1,l.errorMessage=e.message,void o().redraw();l.inProgress=!1,o().redraw(),l.oninit(),o().route.set("/router/enter")})();2==l.stage&&l.checkRegisterStatus(!0)}},1==l.stage?"注册":"确认"):null),o()("div.text-foot",o()("a",{href:"#!/login",onclick:e=>{e.preventDefault(),o().route.set("/login")}},"登录"))))))};const u=l}}]);