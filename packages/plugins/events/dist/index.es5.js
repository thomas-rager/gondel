!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).gondelPluginEvents={})}(this,function(e){"use strict";var t=function(e,n,t){return t(e)},o=window.__gondelPluginEvents||{};function n(e,r){o[e]||(o[e]=t);var n=o[e];o[e]=function(e,o,i){n(e,o,function(e,n,t){r(e,o,function(e){i(e,o,t)})})}}window.__gondelPluginEvents=o;var i="_gondel_";function c(e,n){void 0===n&&(n="g");var t,o=m(void 0!==(t=e).nodeType?t:t[0],n);if(!o)throw new Error('Could not find a started gondel component in namespace "'+n+"\",\nplease check if your component is mounted via 'hasMountedGondelComponent'");return o}function m(e,n){var t=e[i+n];if(t&&t._ctx)return t}var f=function(e,n){var t=window.Element.prototype,o=t.matches||t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.webkitMatchesSelector;return(f=function(e,n){return o.call(e,n)})(e,n)};function d(i,r,e){var u=function(e){for(var n=[],t=e;t;t=t.parentElement)n.push(t);return n}(e),c=[];u.forEach(function(e,n){var t=e.getAttribute(i),o=t&&r[t];o&&c.push({index:n,handlers:o})});var a=[];return c.forEach(function(e){var t=e.index,o=e.handlers;Object.keys(o).forEach(function(e){if(!e)return a.push({index:t,ctx:u[t],target:u[t],handlerOptions:o[e]});for(var n=t;0<=--n;)if(f(u[n],e))return a.push({index:n,ctx:u[t],target:u[n],handlerOptions:o[e]})})}),0===a.length?[]:(a.sort(function(e,n){return e.index>n.index?1:e.index===n.index?0:-1}),a)}function s(u,c,a){for(var f=!1,d=[],e=function(e){var n=u[e],t=n.handlerOptions,o=m(n.ctx,a);if(o){Object.defineProperty(c,"currentTarget",{get:function(){return n.target},configurable:!0}),f=!0;for(var i=0;i<t.length&&!c.cancelBubble;i++){var r=o[t[i].handlerName].call(o,c);"function"==typeof r&&d.push(r)}}},n=0;n<u.length&&!c.cancelBubble;n++)e(n);d.forEach(function(e){e()}),f&&delete c.currentTarget}function l(e,n){var t=Object.keys(e).map(function(e){return"[data-"+n+'-name="'+e+'"]'}).join(",");if(!t)return[];for(var o=document.documentElement.querySelectorAll(t),i=[],r=0;r<o.length;r++){var u=c(o[r],n);u&&i.push(u)}return i}var u={resize:function(o,i){var r,u,c=!1,a=!1;function f(){a?requestAnimationFrame(f):(c=!1,u=void 0)}function d(o){if(a=!1,u){var i=u.map(function(e){var n=e.node;return{width:n.clientWidth,height:n.clientHeight}}),r=[];u.forEach(function(n,e){var t=i[e];t.width===n.width&&t.height===n.height||n.component._stopped||(n.component.__resizeSize=t,n.width=t.width,n.height=t.height,n.selectors.forEach(function(e){return e.forEach(function(e){return r.push(e.call(n.component,o,t))})}))}),r.forEach(function(e){"function"==typeof e&&e()})}}window.addEventListener("resize",function(e){var n,t;c?a||(a=!0,window.requestAnimationFrame(d.bind(e))):(n=e,t=l(o,i),c=!0,u=t.map(function(n){var e=n.__resizeSize||{width:0,height:0},t=o[n._componentName];return{component:n,node:n._ctx,selectors:Object.keys(t).map(function(e){return t[e].map(function(e){return n[e.handlerName]})}),width:e.width,height:e.height}}),d(n)),clearTimeout(r),r=setTimeout(f,250)})},key:function(i,n){window.addEventListener("keydown",function(t){var e=l(i,n),o=[];e.forEach(function(n){Object.keys(i[n._componentName]).forEach(function(e){""!==e&&t.key!==e||i[n._componentName][e].forEach(function(e){o.push(n[e.handlerName].call(n,t))})})}),o.forEach(function(e){"function"==typeof e&&e()})})},"swipe-left":function(a,f){document.documentElement.addEventListener("mousedown",function(e){var n,t,o=d("data-"+f+"-name",a,e.target);function i(e){(n=e).preventDefault(),t||(t=requestAnimationFrame(r))}function r(){t=void 0,n.x-e.x<-100&&(s(o,n,f),u())}function u(){document.documentElement.removeEventListener("mousemove",i),document.documentElement.removeEventListener("mouseup",c),t&&cancelAnimationFrame(t)}function c(e){e.preventDefault(),u()}0!==o.length&&(e.preventDefault(),document.documentElement.addEventListener("mousemove",i),document.documentElement.addEventListener("mouseup",c))})},"swipe-right":function(a,f){document.documentElement.addEventListener("mousedown",function(e){var n,t,o=d("data-"+f+"-name",a,e.target);function i(e){(n=e).preventDefault(),t||(t=requestAnimationFrame(r))}function r(){t=void 0,100<n.x-e.x&&(s(o,n,f),u())}function u(){document.documentElement.removeEventListener("mousemove",i),document.documentElement.removeEventListener("mouseup",c),t&&cancelAnimationFrame(t)}function c(e){e.preventDefault(),u()}0!==o.length&&(e.preventDefault(),document.documentElement.addEventListener("mousemove",i),document.documentElement.addEventListener("mouseup",c))})}};e.initEventPlugin=function(){n("registerEvent",function(e,n,t){var o=n.eventName,i=n.namespace,r=n.eventRegistry;u[o]?(u[o](r,i),t(!1)):t(e)}),n("sync",function(e,n,t){setTimeout(function(){e.forEach(function(e){e.__resizeSize={width:e._ctx.clientWidth,height:e._ctx.clientHeight}})}),t(e)})},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.es5.js.map
