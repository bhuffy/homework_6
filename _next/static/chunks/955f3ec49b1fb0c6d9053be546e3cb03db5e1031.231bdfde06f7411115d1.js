(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),i=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=d.length;i<u;i++){var s=d[i];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],l=r[s]||new Set;l.has(f)?o=!1:(l.add(f),r[s]=l)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"8rWI":function(e,t,n){e.exports=n("8Kt/")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},K6CT:function(e,t,n){e.exports=n("cTJO")},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){c(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},b0oO:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("nKUr"),a=n("q1tI"),o=n("K6CT"),c=n.n(o),i=n("xKSj");function u(){var e=Object(a.useContext)(i.a),t=e[0];e[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"grid bg-white",children:Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)(c.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{className:"logo",src:"/images/logo-horizontal.svg",alt:"logo"})})}),Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsx)(c.a,{href:"/cats",children:Object(r.jsx)("a",{className:"nav__item",children:"Cats"})}),Object(r.jsx)(c.a,{href:"/dogs",children:Object(r.jsx)("a",{className:"nav__item",children:"Dogs"})}),Object(r.jsx)(c.a,{href:"/accessories",children:Object(r.jsx)("a",{className:"nav__item",children:"Accessories"})}),Object(r.jsx)(c.a,{href:"/cart",children:Object(r.jsxs)("a",{className:"nav__item nav__cart",children:[Object(r.jsx)("img",{src:"/images/cart.svg",alt:"shopping cart"}),Object(r.jsx)("span",{className:"nav__count",children:t.length})]})})]})]})})})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),i=n("elyg"),u=n("nOHt"),s=new Map,f=window.IntersectionObserver,l={};var d=function(e,t){var n=o||(f?o=new f((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],s=a[1],h=(0,u.useRouter)(),v=h&&h.pathname||"/",m=c.default.useMemo((function(){var t=(0,i.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,i.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),y=m.href,b=m.as;c.default.useEffect((function(){if(t&&f&&o&&o.tagName&&(0,i.isLocalURL)(y)&&!l[y+"%"+b])return d(o,(function(){p(h,y,b)}))}),[t,o,y,b,h]);var g=e.children,j=e.replace,x=e.shallow,_=e.scroll,O=e.locale;"string"===typeof g&&(g=c.default.createElement("a",null,g));var w=c.Children.only(g),M={ref:function(e){e&&s(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,b,j,x,_,O)}};return t&&(M.onMouseEnter=function(e){(0,i.isLocalURL)(y)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),p(h,y,b,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(M.href=(0,i.addBasePath)((0,i.addLocale)(b,"undefined"!==typeof O?O:h&&h.locale,h&&h.defaultLocale))),c.default.cloneElement(w,M)};t.default=h},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},xKSj:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr"),a=n("q1tI"),o=n.n(a).a.createContext();t.b=function(e){var t=Object(a.useState)([]),n=t[0],c=t[1];return Object(r.jsx)(o.Provider,{value:[n,c],children:e.children})}}}]);