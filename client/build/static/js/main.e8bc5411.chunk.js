(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,a,n){e.exports=n.p+"static/media/breaking.74cc15d9.png"},26:function(e,a,n){e.exports=n(40)},31:function(e,a,n){},32:function(e,a,n){},33:function(e,a,n){},34:function(e,a,n){},35:function(e,a,n){},40:function(e,a,n){"use strict";n.r(a);var t=n(3),r=n.n(t),c=n(18),l=n.n(c),i=(n(31),n(12));n(32),n(33),n(34);var o=function(e){var a=e.headline;return r.a.createElement("div",{className:"HeadLineItem",onClick:function(){window.open(a.url)}},r.a.createElement("div",{className:"headline"},a.headline),r.a.createElement("h4",{className:"newspaper"},a.newspaper))};var s=function(e){var a=e.headlines;return r.a.createElement("div",{className:"HeadLineList"},r.a.createElement("div",{className:"flag",id:"flagSpain"}),r.a.createElement("div",{className:"wrapper wrapper-spain"},a.filter((function(e){return"es-ES"===e.locale})).map((function(e){return r.a.createElement(o,{key:e.url,headline:e})}))),r.a.createElement("div",{className:"flag",id:"flagUK"}),r.a.createElement("div",{className:"wrapper"},a.filter((function(e){return"en-GB"===e.locale})).map((function(e){return r.a.createElement(o,{key:e.url,headline:e})}))),r.a.createElement("div",{className:"flag",id:"flagNL"}),r.a.createElement("div",{className:"wrapper"},a.filter((function(e){return"nl-NL"===e.locale})).map((function(e){return r.a.createElement(o,{key:e.url,headline:e})}))))},u=(n(35),function(e){var a=e.onSearchQueryUpdate,n=Object(t.useState)(""),c=Object(i.a)(n,2),l=c[0],o=c[1];return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{className:"search-bar",type:"text",value:l,onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"search-button",type:"submit",onClick:function(){a(l)}},"search"))}),m=n(19),d=n.n(m),f=n(20),h=n(9),p=n(8),v=n(25),E=n(10);function g(){var e=Object(f.a)(["\n      {\n        headline {\n          newspaper\n          headline\n          locale\n          url\n        }\n      }"]);return g=function(){return e},e}var w=new h.a({link:new E.a({uri:"http://localhost:4000/graphql",credentials:"include"}),cache:new p.a}),N=function(){return w.query({query:Object(v.a)(g())},{errorPolicy:"all"})};var b=function(){var e=Object(t.useState)([]),a=Object(i.a)(e,2),n=a[0],c=a[1],l=Object(t.useState)(""),o=Object(i.a)(l,2),m=o[0],f=o[1],h=m?n.filter(function(e){var a=new RegExp(e);return function(e){return a.test(e.headline)}}(m)):n;return Object(t.useEffect)((function(){N().then((function(e){c(e.data.headline)})).catch((function(e){return console.error(e)}))}),[]),console.log("headlinesToShow",h),r.a.createElement("div",{className:"App"},void 0!==h&&0!==h.length?r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:d.a,className:"breakingNews",alt:""}),r.a.createElement(u,{onSearchQueryUpdate:f}),r.a.createElement(s,{headlines:h})):r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"breakingSmall"}),r.a.createElement("div",{className:"login-text"},r.a.createElement("a",{href:"http://localhost:4000/auth/google"},"login"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.e8bc5411.chunk.js.map