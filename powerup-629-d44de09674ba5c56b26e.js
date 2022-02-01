"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[629],{6282:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g}),r(5666),r(1249),r(8309),r(9753),r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(1038),r(4916),r(8674);var n=r(7294),a=r(2613),u=r(8443),i=r(9260),o=r.n(i),l=r(7208),c=r(306),s=r(3084);const d=[{field:"title",headerContent:"Card"},{field:"status",headerContent:"Status"}];var f=$RefreshSig$();function m(e,t,r,n,a,u,i){try{var o=e[u](i),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function i(e){m(u,n,a,i,o,"next",e)}function o(e){m(u,n,a,i,o,"throw",e)}i(void 0)}))}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,u=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw a}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(){f();var e=(0,a.DN)(),t=h((0,n.useState)(null),2),r=t[0],i=t[1],m=h((0,n.useState)([]),2),v=m[0],y=m[1],g=h((0,n.useState)([]),2),b=g[0],w=g[1],E=h((0,n.useState)(null),2),x=(E[0],E[1]);function S(e){return e?e.map((function(e){return{resourceId:e.card.id,title:e.card.name,start:e.card.badges.start,end:e.card.badges.due,url:e.card.url}})):[]}function N(e){return e?e.map((function(e){return{id:e.card.id,title:e.card.name,status:e.name}})):[]}var k=function(){var t=p(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.ZM)(e);case 2:return r=t.sent,t.next=5,(0,u.Oc)(e);case 5:if(n=t.sent,x(n),i(n),y(S(n)),w(N(n)),0!==r.length){t.next=15;break}return t.next=13,e.sizeTo(300);case 13:t.next=17;break;case 15:return t.next=17,e.sizeTo("#react-root");case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){k().then((function(){e.render(p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:case"end":return e.stop()}}),e)}))))}))}),[]),n.createElement("div",null,n.createElement("div",{className:"card-container"},null===r&&n.createElement("p",null,"Loading..."),null!==r&&r.length>0&&n.createElement("div",{className:"demo-app"},n.createElement("div",{className:"demo-app-main"},n.createElement(c.ZPm,{plugins:[s.ZP],headerToolbar:{left:"prev,next",center:"title",right:"resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear"},initialView:"resourceTimelineYear",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,events:v,resources:b,resourceAreaColumns:d}))),null!==r&&0===r.length&&n.createElement("div",null,n.createElement(o(),{className:"lottie-empty-state",loop:!1,height:200,animationData:l}),n.createElement("div",{className:"lottie-empty-state-label"},n.createElement("h2",null,"No Notes")))))}f(y,"d6OV7CNvnl4r2lyy13IS0w0tE74=",!1,(function(){return[a.DN]}));const g=y;$RefreshReg$(y,"BoardButton")}}]);