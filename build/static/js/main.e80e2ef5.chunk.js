(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[1],{114:function(e,t,r){},118:function(e,t,r){},119:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(0),a=r(24),u=r.n(a),o=r(19),s=r(13),i=r(59),b=r(8),j=r(20);function l(){var e=Object(s.c)(j.a.getIsAuthenticated);return Object(n.jsx)("nav",{className:"nav",children:e?Object(n.jsx)(o.b,{to:"/contacts",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Phonebook"}):Object(n.jsx)(o.b,{to:"/",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Home"})})}r(74);var O=r(35),f=r.p+"static/media/default-avatar.e44fc4e2.png",d=r(135),g=r(137),h=Object(d.a)({root:{background:"linear-gradient(45deg, #f44336 30%, #f44336 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:36,padding:"0 20px"}});function p(e){var t=e.onClick,r=h();return Object(n.jsx)(g.a,{onClick:t,className:r.root,children:"Logout"})}function v(){var e=Object(s.b)(),t=Object(s.c)(j.a.getUsername),r=Object(c.useCallback)((function(){e(O.a.logOut())}),[e]);return Object(n.jsxs)("div",{className:"MenuContainer",children:[Object(n.jsx)("img",{src:f,alt:"",width:"32",className:"MenuAvatar"}),Object(n.jsxs)("span",{className:"MenuName",children:["Welcome, ",t]}),Object(n.jsx)(p,{onClick:r})]})}var x=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(o.b,{to:"/register",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Sign up"}),Object(n.jsx)(o.b,{to:"/login",exact:!0,className:"NavLink",activeClassName:"NavLink--active",children:"Log in"})]})},m={header:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #2A363B"}};function k(){var e=Object(s.c)(j.a.getIsAuthenticated);return Object(n.jsxs)("header",{style:m.header,children:[Object(n.jsx)(l,{}),e?Object(n.jsx)(v,{}):Object(n.jsx)(x,{})]})}var C=r(57),S=r(28),E=r(38);function y(e){var t=e.redirectTo,r=e.children,c=Object(E.a)(e,["redirectTo","children"]),a=Object(s.c)(j.a.getToken);return Object(n.jsx)(b.b,Object(S.a)(Object(S.a)({},c),{},{children:a?r:Object(n.jsx)(b.a,{to:t})}))}function N(e){var t=e.redirectTo,r=e.children,c=Object(E.a)(e,["redirectTo","children"]),a=Object(s.c)(j.a.getToken);return Object(n.jsx)(b.b,Object(S.a)(Object(S.a)({},c),{},{children:a&&c.restricted?Object(n.jsx)(b.a,{to:t}):r}))}var R=r(34),U=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(7)]).then(r.bind(null,149))})),q=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,150))})),w=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,151))})),L=Object(c.lazy)((function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,152))}));function T(){var e=Object(s.b)();return Object(c.useEffect)((function(){e(O.a.getCurrentUser())}),[e]),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(k,{}),Object(n.jsx)(c.Suspense,{fallback:Object(n.jsx)(R.a,{}),children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(N,{exact:!0,path:"/",restricted:!0,redirectTo:"/contacts",children:Object(n.jsx)(U,{})}),Object(n.jsx)(N,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(n.jsx)(q,{})}),Object(n.jsx)(N,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(n.jsx)(w,{})}),Object(n.jsx)(y,{path:"/contacts",redirectTo:"/login",children:Object(n.jsx)(L,{})})]})})]})}var A,z,I,P,B,M,J,F,H=r(41),W=r(5),D=r(23),G=r(61),K=r.n(G),Q=r(3),V=r(10),X=r(12),Y=[],Z="",$=!1,_=null,ee=Object(W.c)(Y,(A={},Object(Q.a)(A,X.h,(function(e,t){return t.payload})),Object(Q.a)(A,X.c,(function(e,t){var r=t.payload;return[].concat(Object(H.a)(e),[r])})),Object(Q.a)(A,X.k,(function(e,t){var r=t.payload;return e.filter((function(e){return e.id!==r}))})),A)),te=Object(W.c)($,(z={},Object(Q.a)(z,X.g,(function(){return!0})),Object(Q.a)(z,X.h,(function(){return!1})),Object(Q.a)(z,X.f,(function(){return!1})),Object(Q.a)(z,X.b,(function(){return!0})),Object(Q.a)(z,X.c,(function(){return!1})),Object(Q.a)(z,X.a,(function(){return!1})),Object(Q.a)(z,X.j,(function(){return!0})),Object(Q.a)(z,X.k,(function(){return!1})),Object(Q.a)(z,X.i,(function(){return!1})),z)),re=Object(W.c)(Z,Object(Q.a)({},X.d,(function(e,t){return t.payload}))),ne=function(e,t){return t.payload},ce=Object(W.c)(_,(I={},Object(Q.a)(I,X.f,ne),Object(Q.a)(I,X.a,ne),Object(Q.a)(I,X.i,ne),Object(Q.a)(I,X.e,(function(){return null})),I)),ae=Object(V.c)({contacts:ee,filter:re,loading:te,error:ce}),ue=r(4),oe={name:null,email:null},se=Object(W.c)(oe,(P={},Object(Q.a)(P,ue.a.registerSuccess,(function(e,t){return t.payload.user})),Object(Q.a)(P,ue.a.loginSuccess,(function(e,t){return t.payload.user})),Object(Q.a)(P,ue.a.logoutSuccess,(function(){return oe})),Object(Q.a)(P,ue.a.getCurrentUserSuccess,(function(e,t){return t.payload})),P)),ie=Object(W.c)(null,(B={},Object(Q.a)(B,ue.a.registerSuccess,(function(e,t){return t.payload.token})),Object(Q.a)(B,ue.a.loginSuccess,(function(e,t){return t.payload.token})),Object(Q.a)(B,ue.a.logoutSuccess,(function(){return null})),B)),be=function(e,t){return t.payload},je=Object(W.c)(null,(M={},Object(Q.a)(M,ue.a.registerError,be),Object(Q.a)(M,ue.a.loginError,be),Object(Q.a)(M,ue.a.logoutError,be),Object(Q.a)(M,ue.a.getCurrentUserError,be),Object(Q.a)(M,ue.a.clearError,(function(){return null})),M)),le=Object(W.c)(!1,(J={},Object(Q.a)(J,ue.a.registerSuccess,(function(){return!0})),Object(Q.a)(J,ue.a.loginSuccess,(function(){return!0})),Object(Q.a)(J,ue.a.getCurrentUserSuccess,(function(){return!0})),Object(Q.a)(J,ue.a.registerError,(function(){return!1})),Object(Q.a)(J,ue.a.loginError,(function(){return!1})),Object(Q.a)(J,ue.a.getCurrentUserError,(function(){return!1})),Object(Q.a)(J,ue.a.logoutSuccess,(function(){return!1})),J)),Oe=Object(W.c)(!1,(F={},Object(Q.a)(F,ue.a.registerSuccess,(function(){return!1})),Object(Q.a)(F,ue.a.registerRequest,(function(){return!0})),Object(Q.a)(F,ue.a.registerError,(function(){return!1})),Object(Q.a)(F,ue.a.loginSuccess,(function(){return!1})),Object(Q.a)(F,ue.a.loginRequest,(function(){return!0})),Object(Q.a)(F,ue.a.loginError,(function(){return!1})),Object(Q.a)(F,ue.a.logoutRequest,(function(){return!0})),Object(Q.a)(F,ue.a.logoutSuccess,(function(){return!1})),Object(Q.a)(F,ue.a.logoutError,(function(){return!1})),Object(Q.a)(F,ue.a.getCurrentUserRequest,(function(){return!0})),Object(Q.a)(F,ue.a.getCurrentUserSuccess,(function(){return!1})),Object(Q.a)(F,ue.a.getCurrentUserError,(function(){return!1})),Object(Q.a)(F,ue.a.clearError,(function(){return!1})),F)),fe=Object(V.c)({user:se,isAuthenticated:le,token:ie,loading:Oe,error:je}),de=Object(H.a)(Object(W.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),ge={key:"auth",storage:K.a,whitelist:["token"]},he=Object(W.a)({reducer:{auth:Object(D.g)(ge,fe),phoneBook:ae},middleware:de,devTools:!1}),pe={store:he,persistor:Object(D.h)(he)};r(117),r(118);u.a.render(Object(n.jsx)(s.a,{store:pe.store,children:Object(n.jsx)(i.a,{loading:Object(n.jsx)(R.a,{}),persistor:pe.persistor,children:Object(n.jsx)(o.a,{children:Object(n.jsx)(T,{})})})}),document.querySelector("#root"))},12:function(e,t,r){"use strict";r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return a})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return i})),r.d(t,"j",(function(){return b})),r.d(t,"k",(function(){return j})),r.d(t,"i",(function(){return l})),r.d(t,"d",(function(){return O})),r.d(t,"e",(function(){return f}));var n=r(5),c=Object(n.b)("contacts/fetchContactRequest"),a=Object(n.b)("contacts/fetchContactSuccess"),u=Object(n.b)("contacts/fetchContactError"),o=Object(n.b)("contacts/addContactRequest"),s=Object(n.b)("contacts/addContactSuccess"),i=Object(n.b)("contacts/addContactError"),b=Object(n.b)("contacts/removeContactRequest"),j=Object(n.b)("contacts/removeContactSuccess"),l=Object(n.b)("contacts/removeContactError"),O=Object(n.b)("contacts/changeFilter"),f=Object(n.b)("contacts/clearError")},20:function(e,t,r){"use strict";var n={getIsAuthenticated:function(e){return e.auth.isAuthenticated},getUsername:function(e){return e.auth.user.name},getError:function(e){return e.auth.error},getToken:function(e){return e.auth.token},getLoading:function(e){return e.auth.loading}};t.a=n},34:function(e,t,r){"use strict";var n=r(2),c=(r(0),r(60)),a=r.n(c);r(113),r(114);t.a=function(){return Object(n.jsx)("div",{className:"Loader",children:Object(n.jsx)(a.a,{type:"TailSpin",color:"#3f51b5",height:100,width:100,timeout:300})})}},35:function(e,t,r){"use strict";var n=r(22),c=r.n(n),a=r(33),u=r(25),o=r.n(u),s=r(4);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){o.a.defaults.headers.common.Authorization=""},j={register:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(s.a.registerRequest()),t.prev=1,t.next=4,o.a.post("/users/signup",e);case 4:n=t.sent,i(n.data.token),r(s.a.registerSuccess(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(s.a.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(s.a.registerRequest()),t.prev=1,t.next=4,o.a.post("/users/login",e);case 4:n=t.sent,i(n.data.token),r(s.a.loginSuccess(n.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r(s.a.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.a.logoutRequest()),e.prev=1,e.next=4,o.a.post("/users/logout");case 4:b(),t(s.a.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(s.a.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t,r){var n,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r(),a=n.auth.token){e.next=3;break}return e.abrupt("return");case 3:return i(a),t(s.a.getCurrentUserRequest()),e.prev=5,e.next=8,o.a.get("/users/current");case 8:u=e.sent,t(s.a.getCurrentUserSuccess(u.data)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),t(s.a.getCurrentUserError(e.t0.message)),t(s.a.logoutSuccess());case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,r){return e.apply(this,arguments)}}()}};t.a=j},4:function(e,t,r){"use strict";var n=r(5),c={registerSuccess:Object(n.b)("auth/registerSuccess"),registerRequest:Object(n.b)("auth/registerRequest"),registerError:Object(n.b)("auth/registerError"),loginSuccess:Object(n.b)("auth/loginSuccess"),loginRequest:Object(n.b)("auth/loginRequest"),loginError:Object(n.b)("auth/loginError"),logoutRequest:Object(n.b)("auth/logoutRequest"),logoutSuccess:Object(n.b)("auth/logoutSuccess"),logoutError:Object(n.b)("auth/logoutError"),getCurrentUserRequest:Object(n.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(n.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(n.b)("auth/getCurrentUserError"),clearError:Object(n.b)("auth/clearError")};t.a=c},57:function(e,t,r){"use strict";var n=r(2);r(0),r(94);t.a=function(e){var t=e.children;return Object(n.jsx)("div",{className:"Layout",children:t})}},74:function(e,t,r){},94:function(e,t,r){}},[[119,2,3]]]);
//# sourceMappingURL=main.e80e2ef5.chunk.js.map