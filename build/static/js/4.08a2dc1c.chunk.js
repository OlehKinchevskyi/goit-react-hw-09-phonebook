(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{140:function(t,e,n){"use strict";var c=n(37),r=function(t){return t.phoneBook.filter},a=function(t){return t.phoneBook.contacts},o={getLoading:function(t){return t.phoneBook.loading},getFilter:r,getVisibleContacts:Object(c.a)([a,r],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:a,getError:function(t){return t.phoneBook.error}};e.a=o},141:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c=n(2),r=n(0),a=n(12),o=n(13),i=n(153),u=(n(142),n(140)),l=n(20),s=n(4);function b(t){var e=t.message,n=Object(o.b)(),b=Object(o.c)(u.a.getError),f=Object(o.c)(l.a.getError),j=Object(r.useCallback)((function(){return n(a.e())}),[n]),d=Object(r.useCallback)((function(){return n(s.a.clearError())}),[n]);return Object(r.useEffect)((function(){setTimeout((function(){d()}),2500)}),[f,d]),Object(r.useEffect)((function(){setTimeout((function(){j()}),2500)}),[b,j]),Object(c.jsx)(i.a,{in:e,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(c.jsx)("div",{className:"Overlay",children:Object(c.jsx)("p",{className:"Notification",children:e})})})}},142:function(t,e,n){},143:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(47);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,r=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(c=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);c=!0);}catch(u){r=!0,a=u}finally{try{c||null==i.return||i.return()}finally{if(r)throw a}}return n}}(t,e)||Object(c.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},145:function(t,e,n){},146:function(t,e,n){},147:function(t,e,n){},148:function(t,e,n){},152:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return A}));var c=n(2),r=n(0),a=n(13),o=n(57),i=n(143),u=n(25),l=n.n(u),s=n(12),b={fetchContacts:function(){return function(t){t(Object(s.g)()),l.a.get("/contacts").then((function(e){var n=e.data;return t(Object(s.h)(n))})).catch((function(e){return t(Object(s.f)(e.message))}))}},addContact:function(t,e){return function(n){var c={name:t,number:e};n(Object(s.b)()),l.a.post("/contacts",c).then((function(t){var e=t.data;return n(Object(s.c)(e))})).catch((function(t){return n(Object(s.a)(t.message))}))}},removeContact:function(t){return function(e){e(Object(s.j)()),l.a.delete("/contacts/".concat(t)).then((function(){return e(Object(s.k)(t))})).catch((function(t){return e(Object(s.i)(t.message))}))}}},f=n(140),j=n(141);n(145);function d(){var t=Object(a.b)(),e=Object(r.useState)(""),n=Object(i.a)(e,2),o=n[0],u=n[1],l=Object(r.useState)(""),s=Object(i.a)(l,2),d=s[0],m=s[1],O=Object(r.useState)(null),h=Object(i.a)(O,2),p=h[0],v=h[1],x=Object(a.c)(f.a.getAllContacts),g=function(t){v(t),setTimeout((function(){v(null)}),2500)},y=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":m(c);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f name - ".concat(n," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f!"))}};return Object(c.jsxs)("div",{children:[Object(c.jsx)(j.a,{message:p}),Object(c.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),""!==o?""!==d?x.find((function(t){return t.name.toLowerCase()===o.toLowerCase()}))?g("Contact already exists!"):(!function(e,n){t(b.addContact(e,n))}(o,d),u(""),m("")):g("Enter concact phone, please!"):g("Enter contact name, please!")},autoComplete:"off",children:[Object(c.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(c.jsx)("input",{type:"text",value:o,id:"name",className:"Input",onChange:y,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(c.jsx)("label",{htmlFor:"number",className:"Label",children:"Number"}),Object(c.jsx)("input",{type:"tel",value:d,id:"number",className:"Input",onChange:y,name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(c.jsx)("button",{type:"submit",className:"Button",children:"Add contact"})]})]})}n(146);var m=n(153);function O(){var t=Object(a.b)(),e=Object(a.c)(f.a.getFilter),n=Object(a.c)(f.a.getAllContacts);return Object(c.jsx)(m.a,{in:n.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,children:Object(c.jsxs)("div",{className:"FindForm",children:[Object(c.jsx)("label",{htmlFor:"find",className:"FindLabel",children:"Find contact by name"}),Object(c.jsx)("input",{type:"text",value:e,id:"find",className:"FindInput",onChange:function(e){return t(s.d(e.target.value))}})]})})}n(147);var h=n(38),p=(n(148),function(t){var e=t.children,n=t.onClick;Object(h.a)(t,["children","onClick"]);return Object(c.jsx)("button",{type:"button",onClick:n,className:"IconButton",children:e})});p.defaultProps={onClick:function(){return null},children:null};var v=p;function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,c,r=function(t,e){if(null==t)return{};var n,c,r={},a=Object.keys(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(c=0;c<a.length;c++)n=a[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var y=r.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"});function C(t,e){var n=t.title,c=t.titleId,a=g(t,["title","titleId"]);return r.createElement("svg",x({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:e,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,y)}var w=r.forwardRef(C),k=(n.p,n(138));function N(){var t=Object(a.b)(),e=Object(a.c)(f.a.getVisibleContacts);return Object(c.jsx)(k.a,{component:"ul",children:e.map((function(e,n){var r=e.id,a=e.name,o=e.number;return Object(c.jsx)(m.a,{timeout:250,classNames:"ContactItem-fade",children:Object(c.jsxs)("li",{className:"ContactItem",children:[n+1,". ",a,": ",o,Object(c.jsx)(v,{onClick:function(){return function(e){return t(b.removeContact(e))}(r)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(c.jsx)(w,{width:"17",height:"17",fill:"#fff"})})]})},r)}))})}var E=function(){return Object(c.jsx)(m.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(c.jsx)("h1",{className:"Title",children:"Phonebook"})})},L=n(34);function A(){var t=Object(a.c)(f.a.getAllContacts),e=Object(a.c)(f.a.getLoading),n=Object(a.c)(f.a.getError),i=Object(a.b)();return Object(r.useEffect)((function(){i(b.fetchContacts())}),[i]),Object(c.jsxs)(o.a,{children:[Object(c.jsx)(E,{}),Object(c.jsx)(j.a,{message:n}),Object(c.jsx)(d,{}),Object(c.jsx)(O,{}),e&&Object(c.jsx)(L.a,{}),Object(c.jsx)(m.a,{in:t.length>0,timeout:0,ommountOnExit:!0,children:Object(c.jsx)(N,{})})]})}}}]);
//# sourceMappingURL=4.08a2dc1c.chunk.js.map