(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[3],{117:function(t,e,n){t.exports={form:"LoginForm_form__2PN-X"}},121:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var o=n(1),a=n(0),r=n(89),i=n(96),c=n(93),l=n(92),u=n(117),s=n.n(u),p=n(7),b=n(8);function d(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],r=e[1],u=Object(a.useState)(""),d=Object(i.a)(u,2),f=d[0],h=d[1],j=Object(p.c)(),m=Object(a.useCallback)((function(t){return j(b.a.logIn(t))}),[j]),_=function(t){var e=t.target,n=e.name,o=e.value;"email"!==n?"password"!==n||h(o):r(o)};return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m({email:n,password:f}),r(""),h("")},className:s.a.form,children:[Object(o.jsx)(c.a,{label:"Email",type:"email",name:"email",value:n,placeholder:"Enter email...",onChange:_}),Object(o.jsx)(c.a,{label:"Password",type:"password",name:"password",value:f,placeholder:"Enter password...",onChange:_}),Object(o.jsx)(l.a,{text:"Log in",type:"submit",color:"blue"})]})}var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(r.a,{title:"Login",children:Object(o.jsx)(d,{})})})}},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n(1),a=n(90),r=n.n(a),i=n(119),c=n(88),l=n.n(c);function u(t){var e=t.title,n=t.children,a=t.appear,c=["phonebook"===t.styles?r.a.titlePhonebook:r.a.titleContacts];return Object(o.jsxs)("section",{className:r.a.section,children:[Object(o.jsx)(i.a,{in:!0,appear:a,timeout:500,classNames:r.a,unmountOnExit:!0,children:e&&Object(o.jsx)("h2",{className:l()(c.join(" ")),children:e})}),n]})}},90:function(t,e,n){t.exports={section:"Section_section__11338",titlePhonebook:"Section_titlePhonebook__ZhPyl",titleContacts:"Section_titleContacts__1Xbwv",appear:"Section_appear__19OBS",appearActive:"Section_appearActive__32mQg"}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var o=n(1),a=n(94),r=n.n(a),i=n(88),c=n.n(i);function l(t){var e=t.text,n=t.listener,a=t.type,i=t.color,l=r.a.blueColor,u=r.a.redColor,s=[r.a.button];return"red"===i&&s.push(u),"blue"===i&&s.push(l),Object(o.jsx)("button",{className:c()(s.join(" ")),type:a,onClick:n,children:e})}},93:function(t,e,n){"use strict";var o=n(1),a=n(95),r=n.n(a);e.a=function(t){var e=t.name,n=t.label,a=t.value,i=t.id,c=t.placeholder,l=t.type,u=t.onChange,s=t.pattern;return Object(o.jsxs)("label",{htmlFor:i,className:r.a.label,children:[n,Object(o.jsx)("input",{type:l,name:e,value:a,id:i,placeholder:c,onChange:u,className:r.a.input,pattern:s})]})}},94:function(t,e,n){t.exports={button:"Button_button__2UOpd",blueColor:"Button_blueColor__DGK1M",redColor:"Button_redColor__2ye0c"}},95:function(t,e,n){t.exports={label:"Input_label__3dWPf",input:"Input_input__5GLC9"}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(36);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,a=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(l){a=!0,r=l}finally{try{o||null==c.return||c.return()}finally{if(a)throw r}}return n}}(t,e)||Object(o.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=login-page.e9724d6b.chunk.js.map