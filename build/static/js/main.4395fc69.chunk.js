(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[4],{121:function(e,t,r){},123:function(e,t,r){"use strict";r.r(t);var n,c,a=r(2),u=r(0),s=r(11),o=r.n(s),i=r(42),b=r(4),j=r(26),l=r(61),f=r.n(l),O=r(5),d=r(12),g=r(18),p=Object(b.c)([],(n={},Object(O.a)(n,g.j,(function(e,t){var r=t.payload;return[].concat(Object(i.a)(e),Object(i.a)(r))})),Object(O.a)(n,g.c,(function(e,t){var r=t.payload;return[].concat(Object(i.a)(e),[r])})),Object(O.a)(n,g.g,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),n)),A=Object(b.c)("",Object(O.a)({},g.d,(function(e,t){return t.payload}))),v=Object(b.c)(!1,(c={},Object(O.a)(c,g.i,(function(){return!0})),Object(O.a)(c,g.j,(function(){return!1})),Object(O.a)(c,g.h,(function(){return!1})),Object(O.a)(c,g.b,(function(){return!0})),Object(O.a)(c,g.c,(function(){return!1})),Object(O.a)(c,g.a,(function(){return!1})),Object(O.a)(c,g.f,(function(){return!0})),Object(O.a)(c,g.g,(function(){return!1})),Object(O.a)(c,g.e,(function(){return!1})),c)),h=Object(d.c)({items:p,filter:A,load:v}),C=r(17),y=r(28),x=Object(i.a)(Object(b.d)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),m={key:"auth",storage:f.a,whitelist:["token"]},B={key:"currencyBase",storage:f.a,whitelist:["baseCurrency","currencyAr"]},I=Object(b.a)({reducer:{contacts:h,auth:Object(j.g)(m,C.c),currency:Object(j.g)(B,y.c)},middleware:x,devTools:!1}),k={store:I,persistor:Object(j.h)(I)},S=r(13),E=r(21),Q=r(78),N=(r(121),r(79)),P=r(80),H=r(87),L=r(86),q=r(35),R=r.n(q),w=r(156);function M(){var e=Object(S.c)(),t=Object(S.d)(y.d.getCurrecy),r=Object(S.d)(y.d.getBaseCurrency),n=Object(S.d)(y.d.getBaseAPICurrency);Object(u.useEffect)((function(){null!==JSON.parse(localStorage.getItem("persist:currencyBase"))&&"null"!==JSON.parse(localStorage.getItem("persist:currencyBase")).currencyAr||e(y.b.getCurrency())}),[e]),Object(u.useEffect)((function(){if(r){var n=[],c=null;for(var a in t)a===r&&(c=t[a]);for(var u in t){var s=100*t[u]/(100*c);n.push([u,s])}e(y.a.parseCurrencySuccess(Object.fromEntries(n)))}}),[e,r]);return Object(a.jsx)(w.a,{labelId:"label",id:"select",native:!0,onChange:function(t){e(y.a.baseCurrency(t.target.value))},value:null===r?n:r,children:null!==t?Object.keys(t).map((function(e){return Object(a.jsx)("option",{value:e,children:e},e)})):Object(a.jsx)("option",{value:""},"1")})}function U(){var e=Object(S.d)(C.d.getIsAuthenticated);return Object(a.jsxs)("div",{children:[Object(a.jsx)(E.b,{exact:!0,to:"/",activeClassName:R.a.activeNavLink,className:R.a.navLink,children:"Home"}),e&&Object(a.jsx)(E.b,{to:"/contacts",activeClassName:R.a.activeNavLink,className:R.a.navLink,children:"Contacts"}),Object(a.jsx)(E.b,{exact:!0,to:"/currency",activeClassName:R.a.activeNavLink,className:R.a.navLink,children:"Currency"}),Object(a.jsx)(M,{})]})}var D=r(46),z=r.n(D),F=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(E.b,{exact:!0,to:"/register",activeClassName:z.a.activeNavLink,className:z.a.navLink,children:"Register"}),Object(a.jsx)(E.b,{to:"/login",activeClassName:z.a.activeNavLink,className:z.a.navLink,children:"Login"})]})},Y=r(65),X={container:{display:"flex",alignItems:"center"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12}};function W(){var e=Object(S.d)(C.d.getUserName),t=Object(S.c)(),r=Object(u.useCallback)((function(){return t(C.b.logOut())}),[t]);return Object(a.jsxs)("div",{style:X.container,children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"32",style:X.avatar}),Object(a.jsxs)("span",{style:X.name,children:["Welcome, ",e," "]}),Object(a.jsx)(Y.a,{text:"logout",listener:function(){return r()},color:"red"})]})}var T=r(84),Z=r.n(T);function K(){var e=Object(S.d)(C.d.getIsAuthenticated);return Object(a.jsxs)("header",{className:Z.a.Header,children:[Object(a.jsx)(U,{}),e?Object(a.jsx)(W,{}):Object(a.jsx)(F,{})]})}var J=r(10),V=r(85),G=r.n(V);var _=function(e){var t=e.children;return Object(a.jsx)("div",{className:G.a.pageContainer,children:t})},$=r(41),ee=r(54);function te(e){var t=e.children,r=e.redirectTo,n=Object(ee.a)(e,["children","redirectTo"]),c=Object(S.d)(C.d.getIsAuthenticated);return Object(a.jsx)(J.b,Object($.a)(Object($.a)({},n),{},{children:c?t:Object(a.jsx)(J.a,{to:r})}))}function re(e){var t=e.children,r=e.redirectTo,n=Object(ee.a)(e,["children","redirectTo"]),c=Object(S.d)(C.d.getIsAuthenticated);return Object(a.jsx)(J.b,Object($.a)(Object($.a)({},n),{},{children:c&&n.restricted?Object(a.jsx)(J.a,{to:r}):t}))}var ne=Object(u.lazy)((function(){return r.e(2).then(r.bind(null,199))})),ce=Object(u.lazy)((function(){return Promise.all([r.e(8),r.e(0)]).then(r.bind(null,194))})),ae=Object(u.lazy)((function(){return r.e(5).then(r.bind(null,197))})),ue=Object(u.lazy)((function(){return r.e(3).then(r.bind(null,198))})),se=Object(u.lazy)((function(){return Promise.all([r.e(9),r.e(1)]).then(r.bind(null,196))})),oe="/",ie="/contacts",be="/login",je="/register",le="/currency",fe=function(){return Object(a.jsx)(_,{children:Object(a.jsx)(u.Suspense,{fallback:Object(a.jsx)("p",{align:"center",children:"Loading..."}),children:Object(a.jsxs)(J.d,{children:[Object(a.jsx)(J.b,{exact:!0,path:oe,children:Object(a.jsx)(ne,{})}),Object(a.jsx)(te,{path:ie,redirectTo:be,children:Object(a.jsx)(ce,{})}),Object(a.jsx)(re,{path:je,restricted:!0,redirectTo:ie,children:Object(a.jsx)(ae,{})}),Object(a.jsx)(re,{path:be,restricted:!0,redirectTo:ie,children:Object(a.jsx)(ue,{})}),Object(a.jsx)(J.b,{path:le,children:Object(a.jsx)(se,{})}),Object(a.jsx)(J.a,{to:"/"})]})})})},Oe=function(e){Object(H.a)(r,e);var t=Object(L.a)(r);function r(){return Object(N.a)(this,r),t.apply(this,arguments)}return Object(P.a)(r,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(K,{}),Object(a.jsx)(fe,{})]})}}]),r}(u.Component),de={onGetCurrentUser:C.b.getCurrentUser},ge=Object(S.b)(null,de)(Oe);o.a.render(Object(a.jsx)(S.a,{store:k.store,children:Object(a.jsx)(Q.a,{loading:null,persistor:k.persistor,children:Object(a.jsx)(E.a,{children:Object(a.jsx)(ge,{})})})}),document.getElementById("root"))},17:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return p})),r.d(t,"b",(function(){return m})),r.d(t,"d",(function(){return B}));var n,c,a,u,s=r(4),o={registerRequest:Object(s.b)("auth/registerRequest"),registerSuccess:Object(s.b)("auth/registerSuccess"),registerError:Object(s.b)("auth/registerError"),loginRequest:Object(s.b)("auth/loginRequest"),loginSuccess:Object(s.b)("auth/loginSuccess"),loginError:Object(s.b)("auth/loginError"),logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError"),errorStatus:Object(s.b)("auth/errorStatus")},i=r(5),b=r(12),j={name:null,email:null},l=Object(s.c)(j,(n={},Object(i.a)(n,o.registerSuccess,(function(e,t){return t.payload.user})),Object(i.a)(n,o.loginSuccess,(function(e,t){return t.payload.user})),Object(i.a)(n,o.logoutSuccess,(function(){return j})),Object(i.a)(n,o.getCurrentUserSuccess,(function(e,t){return t.payload})),n)),f=Object(s.c)(null,(c={},Object(i.a)(c,o.registerSuccess,(function(e,t){return t.payload.token})),Object(i.a)(c,o.loginSuccess,(function(e,t){return t.payload.token})),Object(i.a)(c,o.logoutSuccess,(function(){return null})),c)),O=Object(s.c)(null,(a={},Object(i.a)(a,o.registerError,(function(e,t){return t.payload})),Object(i.a)(a,o.loginError,(function(e,t){return t.payload})),Object(i.a)(a,o.logoutError,(function(e,t){return t.payload})),Object(i.a)(a,o.getCurrentUserError,(function(e,t){return t.payload})),a)),d=Object(s.c)(!1,Object(i.a)({},o.errorStatus,(function(e,t){return t.payload}))),g=Object(s.c)(!1,(u={},Object(i.a)(u,o.registerSuccess,(function(){return!0})),Object(i.a)(u,o.loginSuccess,(function(){return!0})),Object(i.a)(u,o.getCurrentUserSuccess,(function(){return!0})),Object(i.a)(u,o.registerError,(function(){return!1})),Object(i.a)(u,o.loginError,(function(){return!1})),Object(i.a)(u,o.getCurrentUserError,(function(){return!1})),Object(i.a)(u,o.logoutSuccess,(function(){return!1})),u)),p=Object(b.c)({user:l,token:f,isAuthenticated:g,error:O,errorStatus:d}),A=r(22),v=r.n(A),h=r(34),C=r(25),y=r.n(C);y.a.defaults.baseURL="https://connections-api.herokuapp.com";var x={set:function(e){y.a.defaults.headers.common.Authorization="Bearer ".concat(e)},unset:function(){y.a.defaults.headers.common.Authorization=""}},m={token:x,register:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(r){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(o.registerRequest()),t.prev=1,t.next=4,y.a.post("/users/signup",e);case 4:n=t.sent,x.set(n.data.token),r(o.registerSuccess(n.data)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),r(o.registerError(t.t0.message)),r(o.errorStatus(!0));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(h.a)(v.a.mark((function t(r){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(o.loginRequest()),t.prev=1,t.next=4,y.a.post("/users/login",e);case 4:n=t.sent,x.set(n.data.token),r(o.loginSuccess(n.data)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),r(o.loginError(t.t0.message)),r(o.errorStatus(!0));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(h.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(o.logoutRequest()),e.prev=1,e.next=4,y.a.post("/users/logout");case 4:x.unset(),t(o.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(o.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(h.a)(v.a.mark((function e(t,r){var n,c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),c=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return x.set(c),t(o.logoutRequest()),e.prev=5,e.next=8,y.a.get("/users/current");case 8:a=e.sent,t(o.getCurrentUserSuccess(a.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(o.getCurrentUserSuccess(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()}},B={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUserName:function(e){return e.auth.user.name},getErrorMessage:function(e){return e.auth.error},getErrorStatus:function(e){return e.auth.errorStatus}}},18:function(e,t,r){"use strict";r.d(t,"i",(function(){return c})),r.d(t,"j",(function(){return a})),r.d(t,"h",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return j})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return f}));var n=r(4),c=Object(n.b)("contacts/parseContactRequest"),a=Object(n.b)("contacts/parseContactSuccess"),u=Object(n.b)("contacts/parseContactError"),s=Object(n.b)("contacts/addContactRequest"),o=Object(n.b)("contacts/addContactSuccess"),i=Object(n.b)("contacts/addContactError"),b=Object(n.b)("contacts/deleteContactRequest"),j=Object(n.b)("contacts/deleteContactSuccess"),l=Object(n.b)("contacts/deleteContactError"),f=Object(n.b)("contacts/delete")},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return j})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return A}));var n=r(4),c={parseCurrencyRequest:Object(n.b)("currency/parseRequest"),parseCurrencySuccess:Object(n.b)("currency/parseSuccess"),parseCurrencyError:Object(n.b)("currency/parseError"),baseCurrency:Object(n.b)("currency/baseCurrency"),baseAPICurrency:Object(n.b)("currency/baseAPICurrency")},a=r(5),u=r(12),s=Object(n.c)(null,Object(a.a)({},c.parseCurrencySuccess,(function(e,t){return t.payload}))),o=Object(n.c)(null,Object(a.a)({},c.baseCurrency,(function(e,t){return t.payload}))),i=Object(n.c)("",Object(a.a)({},c.baseAPICurrency,(function(e,t){return t.payload}))),b=Object(n.c)("",Object(a.a)({},c.parseCurrencyError,(function(e,t){return t.payload}))),j=Object(u.c)({currencyAr:s,baseCurrency:o,baseAPICurrency:i,error:b}),l=r(22),f=r.n(l),O=r(34),d=r(25),g=r.n(d),p={getCurrency:function(e){return function(){var e=Object(O.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(c.parseCurrencyRequest()),e.prev=1,e.next=4,g.a.get("".concat("http://api.exchangeratesapi.io/v1/","latest?access_key=").concat("20eae151cf40116a060cb335c1127ba3"));case 4:r=e.sent,t(c.parseCurrencySuccess(r.data.rates)),t(c.baseAPICurrency(r.data.base)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(c.parseCurrencyError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}},A={getCurrecy:function(e){return e.currency.currencyAr},getBaseCurrency:function(e){return e.currency.baseCurrency},getBaseAPICurrency:function(e){return e.currency.baseAPICurrency}}},35:function(e,t,r){e.exports={navLink:"Navigation_navLink__gCTOn",activeNavLink:"Navigation_activeNavLink__1ak2U"}},46:function(e,t,r){e.exports={navLink:"AuthNav_navLink__AoBNP",activeNavLink:"AuthNav_activeNavLink__1Puki"}},55:function(e,t,r){e.exports={button:"Button_button__2UOpd",blueColor:"Button_blueColor__DGK1M",redColor:"Button_redColor__2ye0c"}},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2),c=r(55),a=r.n(c),u=r(64),s=r.n(u);function o(e){var t=e.text,r=e.listener,c=e.type,u=e.color,o=a.a.blueColor,i=a.a.redColor,b=[a.a.button];return"red"===u&&b.push(i),"blue"===u&&b.push(o),Object(n.jsx)("button",{className:s()(b.join(" ")),type:c,onClick:r,children:t})}},84:function(e,t,r){e.exports={Header:"AppBar_Header__25maz"}},85:function(e,t,r){e.exports={pageContainer:"PageContainer_pageContainer__2bQ-4"}}},[[123,6,7]]]);
//# sourceMappingURL=main.4395fc69.chunk.js.map