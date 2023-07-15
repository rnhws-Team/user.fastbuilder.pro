"use strict";
(self["webpackChunkwebpages"] = self["webpackChunkwebpages"] || []).push([["src_pages_pay_js"],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.46.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./src/pages/pay.js":
/*!**************************!*\
  !*** ./src/pages/pay.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "./node_modules/mithril/index.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_frame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/frame */ "./src/theme/frame.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api */ "./src/api/api.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");




let stripe;
let stripe_elements;

const pageIcon=`<svg class="sectionTitle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"></path></svg>`;

let intv=null;

let pay={
	info: "",
	isfree: false,
	paired: false,
	paired_notice: "",
	error: "",
	fatal: false,
	success: false,
	showcodepwnpay: false,
	stripeloading: false,
	iframeurl: "",
	showingcodepwnpay: false,
	showingstripepay: false,
	use_point_input: "",
	oninit: async ()=>{
		pay.showingstripepay=false;
		pay.stripeloading=false;
		pay.info="";
		pay.paired=false;
		pay.isfree=false;
		pay.paired_notice="";
		pay.error="";
		pay.showingcodepwnpay=false;
		let payinfo=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].GetBill();
		if(typeof payinfo!="object")return;
		pay.isfree=payinfo.isfree;
		pay.iframeurl=payinfo.codepwn_pay_url;
		pay.showcodepwnpay=payinfo.codepwn_pay_available;
		pay.can_use_point=payinfo.can_use_point;
		pay.use_point_input="";
		pay.info=payinfo.show.replace(/\n/g,"<br/>");
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
		if(!payinfo.success)return;
		if(intv)clearInterval(intv);
		intv=setInterval(dorefresh,1000);
		if(payinfo.test_key) {
			stripe=await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(payinfo.test_key);
			return;
		}
		stripe=await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)("pk_live_51MKodeE2lNjB2a2Nh6EKCAtmksHMWf8PrCs6EMK7dPdUHoTbyXcawldsiVs0iM9NTYxuU6llV50UupFmbjsUItms00aANHRiCT");
	},
	onremove: ()=>{
		if(intv) {
			clearInterval(intv);
			intv=null;
		}
	},
	view: (vnode)=>{
		return mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].frame, {pageName: "支付", pageIcon},
			mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].section, {title:"清单"},
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(pay.info))
			),
			pay.can_use_point&&!pay.paired?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "你可以使用 Point 抵价。每 100 Point 可以抵价 ￥1，请输入 100 的倍数。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].formInput, {
					value: pay.use_point_input,
					oninput: (e)=>{
						pay.use_point_input=e.target.value;
					}
				}),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", "注意：在抵价后即使支付未完成也不会返还已经使用的 Point 。"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					onclick: async ()=>{
						let upr=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].UsePoints(pay.use_point_input);
						if(upr.success) {
							mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/router/enter", {to:"/pay"});
						}else{
							_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", upr.message);
							return;
						}
					}
				}, "抵价")
			):null,
			!pay.paired?[
				//m("p", "请通过以下方式支付:"),
				//m("p", "请联系代理并告知其你的用户名，在其确认前请勿支付。"),
				pay.showcodepwnpay&&!pay.showingcodepwnpay?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", ["或者：",mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{
					href: pay.iframeurl,
					target: "_blank",
					style: {
						display: pay.showingcodepwnpay?"none":"inline-block"
					},
					onclick: (e)=>{
						//e.preventDefault();
						//pay.showingcodepwnpay=true;
					}
				}, "自动结算[微信]（提供: CodePwn）")]):null,
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("br"),mithril__WEBPACK_IMPORTED_MODULE_0___default()("br")
			]:null,
			pay.isfree&&!pay.success?[
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-primary",{
					onclick: async ()=>{
						let captcha=await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].getCaptchaInput("输入验证码", "本操作需要输入验证码完成，请输入下方显示的验证码","验证码",false,false);
						let r=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].RedeemForFree(captcha);
						if(!r.success) {
							_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", r.message);
						}
					}
				}, "免费获取"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("br"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("br")
			]:null,
			pay.error?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p", {style:{color:"red"}}, pay.error):null,
			pay.paired?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",{style:{color:"blue"}}, pay.paired_notice):null,
			pay.fatal?null:[
				!pay.success?mithril__WEBPACK_IMPORTED_MODULE_0___default()(_theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].button, {
					onclick: ()=>{
						dorefresh(true);
					}
				}, "刷新状态"):null,
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("br"),mithril__WEBPACK_IMPORTED_MODULE_0___default()("br"),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",
					{
						style: {
							"width": "40%",
							"display": (pay.showingstripepay&&!pay.paired)?"":"none"
						}
					},
					mithril__WEBPACK_IMPORTED_MODULE_0___default()("form#payment-form",
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div#link-auth-el"),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("div#payment-el"),
						mithril__WEBPACK_IMPORTED_MODULE_0___default()("button.btn.btn-primary", {disabled:pay.stripeloading,style:{width:"100%"},onclick:async(e)=>{
							e.preventDefault();
							pay.stripeloading=true;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
							const {error}=await stripe.confirmPayment({
								elements: stripe_elements,
								confirmParams: {
									return_url: pay.stripe_return_url
								}
							});
							alert(error.message);
							pay.stripeloading=false;
							mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
						}},
							"支付"
						)
					),mithril__WEBPACK_IMPORTED_MODULE_0___default()("br"),mithril__WEBPACK_IMPORTED_MODULE_0___default()("br")
				),
				mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{
					href: "#!/shopping_cart",
					onclick: (e)=>{
						e.preventDefault();
						mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/shopping_cart");
					}
				}, "返回")
			]
		);
	}
};

async function dorefresh(manual) {
	let pairInfo=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].CheckPayment();
	if(pairInfo.error) {
		if(intv)clearInterval(intv);
		intv=null;
		await _theme_frame__WEBPACK_IMPORTED_MODULE_1__["default"].showAlert("错误", pairInfo.error_message);
		mithril__WEBPACK_IMPORTED_MODULE_0___default().route.set("/shopping_cart");
		return;
	}
	if(!pay.paired) {
		if(!pairInfo.paired) {
			if(!pay.isfree&&stripe&&!pay.showingstripepay) {
				pay.showingstripepay=true;
				let stripe_s=await _api_api__WEBPACK_IMPORTED_MODULE_2__["default"].StripeCreateSession();
				stripe_elements=stripe.elements({theme:"stripe", clientSecret: stripe_s.clientSecret});
				stripe_elements.create("linkAuthentication").mount("#link-auth-el");
				stripe_elements.create("payment", {layout: "tabs"}).mount("#payment-el");
				pay.stripe_return_url=stripe_s.return_url;
				mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
			}
			if(manual) {
				pay.error=pairInfo.message;
				mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
			}
			return;
		}else{
			pay.error="";
			pay.paired_notice=`请支付: ￥${pairInfo.price}`;
			pay.paired=true;
			mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
		}
		manual=false;
	}
	if(!pairInfo.success) {
		if(manual) {
			pay.error="尚未成功";
			mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
		}
	}else{
		pay.error="";
		pay.paired_notice="支付成功！";
		pay.success=true;
		clearInterval(intv);
		intv=null;
		mithril__WEBPACK_IMPORTED_MODULE_0___default().redraw();
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pay);
			


/***/ })

}]);