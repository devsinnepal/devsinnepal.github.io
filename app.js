!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){var n=document.body,r=(document.querySelectorAll(".tab-pane"),document.querySelectorAll(".tab__content-item")),o=document.querySelectorAll(".sidebar__link");o.forEach((function(e){e.addEventListener("click",(function(){var e,t,n;e=this.id,t=this.id,n=r,o.forEach((function(t){t.id==e?t.classList.add("is-active"):t.classList.contains("is-active")&&t.classList.remove("is-active")})),n.forEach((function(e,n){e.classList.remove("is-active"),e.id==t&&e.classList.add("is-active")}))}))})),document.querySelectorAll(".burger").forEach((function(e){e.addEventListener("click",(function(){n.classList.toggle("menu--open")}))})),particlesJS("particles-js2")},function(e,t){}]);