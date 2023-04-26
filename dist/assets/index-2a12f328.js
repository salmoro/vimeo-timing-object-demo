var Oo=Object.defineProperty;var xo=(n,e,t)=>e in n?Oo(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Q=(n,e,t)=>(xo(n,typeof e!="symbol"?e+"":e,t),t),Tn=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var Ve=(n,e,t)=>(Tn(n,e,"read from private field"),t?t.call(n):e.get(n)),ye=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},Sn=(n,e,t,i)=>(Tn(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t);var Ue=(n,e,t)=>(Tn(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Mo=n=>(e,t,i)=>{const r=n(e,t),s=n(e,i);return r!==null&&s!==null?r<s?r:s:r!==null?r:s!==null?s:null},Lo=n=>({acceleration:e,position:t,velocity:i},r)=>{const s=n(t,i,e,r);if(s.length===0)return null;if(s.length===1)return s[0]>0?s[0]:null;if(s.length===2){if(s[1]<0)return null;if(s[0]>0)return s[0];if(s[1]>0)return s[1]}return null},Fo=n=>(e,t,i)=>{const r=n(e,t,i);return r===null||r===Number.POSITIVE_INFINITY?null:r},Wo=(n,e)=>class{constructor(){this._listeners=new WeakMap,this._nativeEventTarget=n()}addEventListener(i,r,s){if(r!==null){let o=this._listeners.get(r);o===void 0&&(o=e(this,r),typeof r=="function"&&this._listeners.set(r,o)),this._nativeEventTarget.addEventListener(i,o,s)}}dispatchEvent(i){return this._nativeEventTarget.dispatchEvent(i)}removeEventListener(i,r,s){const o=r===null?void 0:this._listeners.get(r);this._nativeEventTarget.removeEventListener(i,o===void 0?null:o,s)}},Bo=n=>()=>{if(n===null)throw new Error("A native EventTarget could not be created.");return n.document.createElement("p")},Vo=()=>{try{return new DOMException("","IllegalValueError")}catch(n){return n.name="IllegalValueError",n}},Uo=()=>{try{return new DOMException("","InvalidStateError")}catch(n){return n.code=11,n.name="InvalidStateError",n}},jo=(n,e,t,i,r,s,o,a)=>class extends i{constructor(c={},l=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY){super();const{timingProviderSource:u,vector:d}=c.update===void 0?{timingProviderSource:null,vector:c}:{timingProviderSource:c,vector:{}};if(this._endPosition=u===null?h:u.endPosition,this._onchange=null,this._onerror=null,this._onreadystatechange=null,this._readyState=u===null?"open":u.readyState,this._skew=u===null?0:u.skew,this._startPosition=u===null?l:u.startPosition,this._timingProviderSource=u,this._timeoutId=null,this._vector=u===null?{acceleration:0,position:0,velocity:0,...r(d),timestamp:s.now()/1e3}:u.vector,h<this._vector.position&&(this._vector={...this._vector,acceleration:0,position:h,velocity:0}),l>this._vector.position&&(this._vector={...this._vector,acceleration:0,position:l,velocity:0}),this._setInternalTimeout(),u===null)o(()=>this.dispatchEvent(new Event("readystatechange")));else{const f=()=>{this._skew=u.skew},p=()=>this._setInternalVector(u.vector),T=()=>{this._isAllowedTransition(u.readyState)?this._readyState=u.readyState:(this._readyState="closed",u.removeEventListener("adjust",f),u.removeEventListener("change",p),u.removeEventListener("readystatechange",T)),u.error!==null&&o(()=>this.dispatchEvent(new ErrorEvent("error",{error:u.error}))),o(()=>this.dispatchEvent(new Event("readystatechange")))};u.addEventListener("adjust",f),u.addEventListener("change",p),u.addEventListener("readystatechange",T)}}get endPosition(){return this._endPosition}get onchange(){return this._onchange===null?this._onchange:this._onchange[0]}set onchange(c){if(this._onchange!==null&&this.removeEventListener("change",this._onchange[1]),typeof c=="function"){const l=c.bind(this);this.addEventListener("change",l),this._onchange=[c,l]}else this._onchange=null}get onerror(){return this._onerror===null?this._onerror:this._onerror[0]}set onerror(c){if(this._onerror!==null&&this.removeEventListener("error",this._onerror[1]),typeof c=="function"){const l=c.bind(this);this.addEventListener("error",l),this._onerror=[c,l]}else this._onerror=null}get onreadystatechange(){return this._onreadystatechange===null?this._onreadystatechange:this._onreadystatechange[0]}set onreadystatechange(c){if(this._onreadystatechange!==null&&this.removeEventListener("readystatechange",this._onreadystatechange[1]),typeof c=="function"){const l=c.bind(this);this.addEventListener("readystatechange",l),this._onreadystatechange=[c,l]}else this._onreadystatechange=null}get readyState(){return this._readyState}get startPosition(){return this._startPosition}get timingProviderSource(){return this._timingProviderSource}query(){if(this._readyState!=="open")throw t();const c=s.now()/1e3,l=this._timingProviderSource===null?c-this._vector.timestamp:c+this._skew-this._vector.timestamp,h=a(this._vector,l);return this._endPosition<h.position||this._startPosition>h.position?(this._setInternalVector({...h,acceleration:0,position:this._endPosition<h.position?this._endPosition:this._startPosition,velocity:0}),this.query()):h}update(c){if(this._readyState!=="open")return Promise.reject(t());if(this._timingProviderSource!==null){const p=this._timingProviderSource.update(c);return p instanceof Promise?p:Promise.reject(new TypeError("The timingProviderSource failed to return a promise."))}const l=r(c);if(Object.keys(l).length===0)return Promise.resolve();const h={...this.query(),...l},{position:u,velocity:d,acceleration:f}=h;return u<this._startPosition||u>this._endPosition||u===this._startPosition&&(d<0||d===0&&f<0)||u===this._endPosition&&(d>0||d===0&&f>0)?Promise.reject(e()):(this._setInternalVector(h),Promise.resolve())}_isAllowedTransition(c){return this._readyState==="closing"&&c==="closed"||this._readyState==="connecting"||this._readyState==="open"&&(c==="closed"||c==="closing")}_setInternalTimeout(){if(this._timeoutId!==null&&(clearTimeout(this._timeoutId),this._timeoutId=null),this._endPosition===Number.POSITIVE_INFINITY&&this._startPosition===Number.NEGATIVE_INFINITY||this._vector.acceleration===0&&this._vector.velocity===0)return;const c=n(this._vector,this._startPosition,this._endPosition);c!==null&&(this._timeoutId=o(()=>this.query(),c))}_setInternalVector(c){this._vector=c,this._setInternalTimeout(),o(()=>this.dispatchEvent(new Event("change")))}},Ho=(n,e,t,i)=>{if(t===0&&e===0)return n!==i?[]:[0];if(t===0)return[(i-n)/e];const r=e/t,s=Math.sqrt(r**2-2/t*(n-i));return[s-r,-(s+r)].filter(o=>!isNaN(o)).sort()},$o=n=>{if(n===void 0)return{};let e=n.acceleration!==null&&n.acceleration!==void 0?{acceleration:n.acceleration}:{};return n.position!==null&&n.position!==void 0&&(e={...e,position:n.position}),n.velocity!==null&&n.velocity!==void 0?{...e,velocity:n.velocity}:e},qo=(n,e)=>{const{acceleration:t,position:i,timestamp:r,velocity:s}=n;return{acceleration:t,position:i+s*e+.5*t*e**2,timestamp:r+e,velocity:s+t*e}},Go=(n,e)=>t=>{const i={value:n};return Object.defineProperties(t,{currentTarget:i,target:i}),typeof e=="function"?e.call(n,t):e.handleEvent.call(n,t)},zo=jo(Fo(Mo(Lo(Ho))),Vo,Uo,Wo(Bo(window),Go),$o,performance,setTimeout,qo);/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */function Yi(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ki(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Yi(Object(t),!0).forEach(function(i){Ut(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Yi(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function K(){K=function(){return n};var n={},e=Object.prototype,t=e.hasOwnProperty,i=Object.defineProperty||function(g,_,y){g[_]=y.value},r=typeof Symbol=="function"?Symbol:{},s=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(g,_,y){return Object.defineProperty(g,_,{value:y,enumerable:!0,configurable:!0,writable:!0}),g[_]}try{c({},"")}catch{c=function(_,y,N){return _[y]=N}}function l(g,_,y,N){var C=_&&_.prototype instanceof d?_:d,x=Object.create(C.prototype),j=new ne(N||[]);return i(x,"_invoke",{value:S(g,y,j)}),x}function h(g,_,y){try{return{type:"normal",arg:g.call(_,y)}}catch(N){return{type:"throw",arg:N}}}n.wrap=l;var u={};function d(){}function f(){}function p(){}var T={};c(T,s,function(){return this});var D=Object.getPrototypeOf,U=D&&D(D(se([])));U&&U!==e&&t.call(U,s)&&(T=U);var w=p.prototype=d.prototype=Object.create(T);function v(g){["next","throw","return"].forEach(function(_){c(g,_,function(y){return this._invoke(_,y)})})}function E(g,_){function y(C,x,j,ie){var re=h(g[C],g,x);if(re.type!=="throw"){var Be=re.arg,ot=Be.value;return ot&&typeof ot=="object"&&t.call(ot,"__await")?_.resolve(ot.__await).then(function(Ie){y("next",Ie,j,ie)},function(Ie){y("throw",Ie,j,ie)}):_.resolve(ot).then(function(Ie){Be.value=Ie,j(Be)},function(Ie){return y("throw",Ie,j,ie)})}ie(re.arg)}var N;i(this,"_invoke",{value:function(C,x){function j(){return new _(function(ie,re){y(C,x,ie,re)})}return N=N?N.then(j,j):j()}})}function S(g,_,y){var N="suspendedStart";return function(C,x){if(N==="executing")throw new Error("Generator is already running");if(N==="completed"){if(C==="throw")throw x;return In()}for(y.method=C,y.arg=x;;){var j=y.delegate;if(j){var ie=R(j,y);if(ie){if(ie===u)continue;return ie}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(N==="suspendedStart")throw N="completed",y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);N="executing";var re=h(g,_,y);if(re.type==="normal"){if(N=y.done?"completed":"suspendedYield",re.arg===u)continue;return{value:re.arg,done:y.done}}re.type==="throw"&&(N="completed",y.method="throw",y.arg=re.arg)}}}function R(g,_){var y=_.method,N=g.iterator[y];if(N===void 0)return _.delegate=null,y==="throw"&&g.iterator.return&&(_.method="return",_.arg=void 0,R(g,_),_.method==="throw")||y!=="return"&&(_.method="throw",_.arg=new TypeError("The iterator does not provide a '"+y+"' method")),u;var C=h(N,g.iterator,_.arg);if(C.type==="throw")return _.method="throw",_.arg=C.arg,_.delegate=null,u;var x=C.arg;return x?x.done?(_[g.resultName]=x.value,_.next=g.nextLoc,_.method!=="return"&&(_.method="next",_.arg=void 0),_.delegate=null,u):x:(_.method="throw",_.arg=new TypeError("iterator result is not an object"),_.delegate=null,u)}function B(g){var _={tryLoc:g[0]};1 in g&&(_.catchLoc=g[1]),2 in g&&(_.finallyLoc=g[2],_.afterLoc=g[3]),this.tryEntries.push(_)}function I(g){var _=g.completion||{};_.type="normal",delete _.arg,g.completion=_}function ne(g){this.tryEntries=[{tryLoc:"root"}],g.forEach(B,this),this.reset(!0)}function se(g){if(g){var _=g[s];if(_)return _.call(g);if(typeof g.next=="function")return g;if(!isNaN(g.length)){var y=-1,N=function C(){for(;++y<g.length;)if(t.call(g,y))return C.value=g[y],C.done=!1,C;return C.value=void 0,C.done=!0,C};return N.next=N}}return{next:In}}function In(){return{value:void 0,done:!0}}return f.prototype=p,i(w,"constructor",{value:p,configurable:!0}),i(p,"constructor",{value:f,configurable:!0}),f.displayName=c(p,a,"GeneratorFunction"),n.isGeneratorFunction=function(g){var _=typeof g=="function"&&g.constructor;return!!_&&(_===f||(_.displayName||_.name)==="GeneratorFunction")},n.mark=function(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,p):(g.__proto__=p,c(g,a,"GeneratorFunction")),g.prototype=Object.create(w),g},n.awrap=function(g){return{__await:g}},v(E.prototype),c(E.prototype,o,function(){return this}),n.AsyncIterator=E,n.async=function(g,_,y,N,C){C===void 0&&(C=Promise);var x=new E(l(g,_,y,N),C);return n.isGeneratorFunction(_)?x:x.next().then(function(j){return j.done?j.value:x.next()})},v(w),c(w,a,"Generator"),c(w,s,function(){return this}),c(w,"toString",function(){return"[object Generator]"}),n.keys=function(g){var _=Object(g),y=[];for(var N in _)y.push(N);return y.reverse(),function C(){for(;y.length;){var x=y.pop();if(x in _)return C.value=x,C.done=!1,C}return C.done=!0,C}},n.values=se,ne.prototype={constructor:ne,reset:function(g){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!g)for(var _ in this)_.charAt(0)==="t"&&t.call(this,_)&&!isNaN(+_.slice(1))&&(this[_]=void 0)},stop:function(){this.done=!0;var g=this.tryEntries[0].completion;if(g.type==="throw")throw g.arg;return this.rval},dispatchException:function(g){if(this.done)throw g;var _=this;function y(re,Be){return x.type="throw",x.arg=g,_.next=re,Be&&(_.method="next",_.arg=void 0),!!Be}for(var N=this.tryEntries.length-1;N>=0;--N){var C=this.tryEntries[N],x=C.completion;if(C.tryLoc==="root")return y("end");if(C.tryLoc<=this.prev){var j=t.call(C,"catchLoc"),ie=t.call(C,"finallyLoc");if(j&&ie){if(this.prev<C.catchLoc)return y(C.catchLoc,!0);if(this.prev<C.finallyLoc)return y(C.finallyLoc)}else if(j){if(this.prev<C.catchLoc)return y(C.catchLoc,!0)}else{if(!ie)throw new Error("try statement without catch or finally");if(this.prev<C.finallyLoc)return y(C.finallyLoc)}}}},abrupt:function(g,_){for(var y=this.tryEntries.length-1;y>=0;--y){var N=this.tryEntries[y];if(N.tryLoc<=this.prev&&t.call(N,"finallyLoc")&&this.prev<N.finallyLoc){var C=N;break}}C&&(g==="break"||g==="continue")&&C.tryLoc<=_&&_<=C.finallyLoc&&(C=null);var x=C?C.completion:{};return x.type=g,x.arg=_,C?(this.method="next",this.next=C.finallyLoc,u):this.complete(x)},complete:function(g,_){if(g.type==="throw")throw g.arg;return g.type==="break"||g.type==="continue"?this.next=g.arg:g.type==="return"?(this.rval=this.arg=g.arg,this.method="return",this.next="end"):g.type==="normal"&&_&&(this.next=_),u},finish:function(g){for(var _=this.tryEntries.length-1;_>=0;--_){var y=this.tryEntries[_];if(y.finallyLoc===g)return this.complete(y.completion,y.afterLoc),I(y),u}},catch:function(g){for(var _=this.tryEntries.length-1;_>=0;--_){var y=this.tryEntries[_];if(y.tryLoc===g){var N=y.completion;if(N.type==="throw"){var C=N.arg;I(y)}return C}}throw new Error("illegal catch attempt")},delegateYield:function(g,_,y){return this.delegate={iterator:se(g),resultName:_,nextLoc:y},this.method==="next"&&(this.arg=void 0),u}},n}function Qi(n,e,t,i,r,s,o){try{var a=n[s](o),c=a.value}catch(l){t(l);return}a.done?e(c):Promise.resolve(c).then(i,r)}function Se(n){return function(){var e=this,t=arguments;return new Promise(function(i,r){var s=n.apply(e,t);function o(c){Qi(s,i,r,o,a,"next",c)}function a(c){Qi(s,i,r,o,a,"throw",c)}o(void 0)})}}function $r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Xi(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,zr(i.key),i)}}function qr(n,e,t){return e&&Xi(n.prototype,e),t&&Xi(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ut(n,e,t){return e=zr(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Yo(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&yt(n,e)}function mt(n){return mt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},mt(n)}function yt(n,e){return yt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},yt(n,e)}function Gr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function jt(n,e,t){return Gr()?jt=Reflect.construct.bind():jt=function(r,s,o){var a=[null];a.push.apply(a,s);var c=Function.bind.apply(r,a),l=new c;return o&&yt(l,o.prototype),l},jt.apply(null,arguments)}function Ko(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function Bn(n){var e=typeof Map=="function"?new Map:void 0;return Bn=function(i){if(i===null||!Ko(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return jt(i,arguments,mt(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),yt(r,i)},Bn(n)}function Ht(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Qo(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ht(n)}function Xo(n){var e=Gr();return function(){var i=mt(n),r;if(e){var s=mt(this).constructor;r=Reflect.construct(i,arguments,s)}else r=i.apply(this,arguments);return Qo(this,r)}}function Jo(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function zr(n){var e=Jo(n,"string");return typeof e=="symbol"?e:String(e)}var Yr=typeof global<"u"&&{}.toString.call(global)==="[object global]";function Ji(n,e){return n.indexOf(e.toLowerCase())===0?n:"".concat(e.toLowerCase()).concat(n.substr(0,1).toUpperCase()).concat(n.substr(1))}function Zo(n){return!!(n&&n.nodeType===1&&"nodeName"in n&&n.ownerDocument&&n.ownerDocument.defaultView)}function ea(n){return!isNaN(parseFloat(n))&&isFinite(n)&&Math.floor(n)==n}function De(n){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(n)}function Kr(n){var e=/^https:\/\/player\.vimeo\.com\/video\/\d+/;return e.test(n)}function Qr(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.id,t=n.url,i=e||t;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(ea(i))return"https://vimeo.com/".concat(i);if(De(i))return i.replace("http:","https:");throw e?new TypeError("“".concat(e,"” is not a valid video id.")):new TypeError("“".concat(i,"” is not a vimeo.com url."))}var Zi=function(e,t,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"addEventListener",s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"removeEventListener",o=typeof t=="string"?[t]:t;return o.forEach(function(a){e[r](a,i)}),{cancel:function(){return o.forEach(function(c){return e[s](c,i)})}}},ta=typeof Array.prototype.indexOf<"u",na=typeof window<"u"&&typeof window.postMessage<"u";if(!Yr&&(!ta||!na))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var qe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ia(n,e){return e={exports:{}},n(e,e.exports),e.exports}/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */(function(n){if(n.WeakMap)return;var e=Object.prototype.hasOwnProperty,t=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{value:1}).x===1}catch{}}(),i=function(s,o,a){t?Object.defineProperty(s,o,{configurable:!0,writable:!0,value:a}):s[o]=a};n.WeakMap=function(){function s(){if(this===void 0)throw new TypeError("Constructor WeakMap requires 'new'");if(i(this,"_id",a("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}i(s.prototype,"delete",function(l){if(o(this,"delete"),!r(l))return!1;var h=l[this._id];return h&&h[0]===l?(delete l[this._id],!0):!1}),i(s.prototype,"get",function(l){if(o(this,"get"),!!r(l)){var h=l[this._id];if(h&&h[0]===l)return h[1]}}),i(s.prototype,"has",function(l){if(o(this,"has"),!r(l))return!1;var h=l[this._id];return!!(h&&h[0]===l)}),i(s.prototype,"set",function(l,h){if(o(this,"set"),!r(l))throw new TypeError("Invalid value used as weak map key");var u=l[this._id];return u&&u[0]===l?(u[1]=h,this):(i(l,this._id,[l,h]),this)});function o(l,h){if(!r(l)||!e.call(l,"_id"))throw new TypeError(h+" method called on incompatible receiver "+typeof l)}function a(l){return l+"_"+c()+"."+c()}function c(){return Math.random().toString().substring(2)}return i(s,"_polyfill",!0),s}();function r(s){return Object(s)===s}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:qe);var oe=ia(function(n){/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/(function(t,i,r){i[t]=i[t]||r(),n.exports&&(n.exports=i[t])})("Promise",qe,function(){var t,i,r,s=Object.prototype.toString,o=typeof setImmediate<"u"?function(v){return setImmediate(v)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(v,E,S,R){return Object.defineProperty(v,E,{value:S,writable:!0,configurable:R!==!1})}}catch{t=function(E,S,R){return E[S]=R,E}}r=function(){var v,E,S;function R(B,I){this.fn=B,this.self=I,this.next=void 0}return{add:function(I,ne){S=new R(I,ne),E?E.next=S:v=S,E=S,S=void 0},drain:function(){var I=v;for(v=E=i=void 0;I;)I.fn.call(I.self),I=I.next}}}();function a(w,v){r.add(w,v),i||(i=o(r.drain))}function c(w){var v,E=typeof w;return w!=null&&(E=="object"||E=="function")&&(v=w.then),typeof v=="function"?v:!1}function l(){for(var w=0;w<this.chain.length;w++)h(this,this.state===1?this.chain[w].success:this.chain[w].failure,this.chain[w]);this.chain.length=0}function h(w,v,E){var S,R;try{v===!1?E.reject(w.msg):(v===!0?S=w.msg:S=v.call(void 0,w.msg),S===E.promise?E.reject(TypeError("Promise-chain cycle")):(R=c(S))?R.call(S,E.resolve,E.reject):E.resolve(S))}catch(B){E.reject(B)}}function u(w){var v,E=this;if(!E.triggered){E.triggered=!0,E.def&&(E=E.def);try{(v=c(w))?a(function(){var S=new p(E);try{v.call(w,function(){u.apply(S,arguments)},function(){d.apply(S,arguments)})}catch(R){d.call(S,R)}}):(E.msg=w,E.state=1,E.chain.length>0&&a(l,E))}catch(S){d.call(new p(E),S)}}}function d(w){var v=this;v.triggered||(v.triggered=!0,v.def&&(v=v.def),v.msg=w,v.state=2,v.chain.length>0&&a(l,v))}function f(w,v,E,S){for(var R=0;R<v.length;R++)(function(I){w.resolve(v[I]).then(function(se){E(I,se)},S)})(R)}function p(w){this.def=w,this.triggered=!1}function T(w){this.promise=w,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function D(w){if(typeof w!="function")throw TypeError("Not a function");if(this.__NPO__!==0)throw TypeError("Not a promise");this.__NPO__=1;var v=new T(this);this.then=function(S,R){var B={success:typeof S=="function"?S:!0,failure:typeof R=="function"?R:!1};return B.promise=new this.constructor(function(ne,se){if(typeof ne!="function"||typeof se!="function")throw TypeError("Not a function");B.resolve=ne,B.reject=se}),v.chain.push(B),v.state!==0&&a(l,v),B.promise},this.catch=function(S){return this.then(void 0,S)};try{w.call(void 0,function(S){u.call(v,S)},function(S){d.call(v,S)})}catch(E){d.call(v,E)}}var U=t({},"constructor",D,!1);return D.prototype=U,t(U,"__NPO__",0,!1),t(D,"resolve",function(v){var E=this;return v&&typeof v=="object"&&v.__NPO__===1?v:new E(function(R,B){if(typeof R!="function"||typeof B!="function")throw TypeError("Not a function");R(v)})}),t(D,"reject",function(v){return new this(function(S,R){if(typeof S!="function"||typeof R!="function")throw TypeError("Not a function");R(v)})}),t(D,"all",function(v){var E=this;return s.call(v)!="[object Array]"?E.reject(TypeError("Not an array")):v.length===0?E.resolve([]):new E(function(R,B){if(typeof R!="function"||typeof B!="function")throw TypeError("Not a function");var I=v.length,ne=Array(I),se=0;f(E,v,function(g,_){ne[g]=_,++se===I&&R(ne)},B)})}),t(D,"race",function(v){var E=this;return s.call(v)!="[object Array]"?E.reject(TypeError("Not an array")):new E(function(R,B){if(typeof R!="function"||typeof B!="function")throw TypeError("Not a function");f(E,v,function(ne,se){R(se)},B)})}),D})}),de=new WeakMap;function at(n,e,t){var i=de.get(n.element)||{};e in i||(i[e]=[]),i[e].push(t),de.set(n.element,i)}function $t(n,e){var t=de.get(n.element)||{};return t[e]||[]}function qt(n,e,t){var i=de.get(n.element)||{};if(!i[e])return!0;if(!t)return i[e]=[],de.set(n.element,i),!0;var r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),de.set(n.element,i),i[e]&&i[e].length===0}function ra(n,e){var t=$t(n,e);if(t.length<1)return!1;var i=t.shift();return qt(n,e,i),i}function sa(n,e){var t=de.get(n);de.set(e,t),de.delete(n)}function fn(n){if(typeof n=="string")try{n=JSON.parse(n)}catch(e){return console.warn(e),{}}return n}function Te(n,e,t){if(!(!n.element.contentWindow||!n.element.contentWindow.postMessage)){var i={method:e};t!==void 0&&(i.value=t);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(i=JSON.stringify(i)),n.element.contentWindow.postMessage(i,n.origin)}}function oa(n,e){e=fn(e);var t=[],i;if(e.event){if(e.event==="error"){var r=$t(n,e.data.method);r.forEach(function(o){var a=new Error(e.data.message);a.name=e.data.name,o.reject(a),qt(n,e.data.method,o)})}t=$t(n,"event:".concat(e.event)),i=e.data}else if(e.method){var s=ra(n,e.method);s&&(t.push(s),i=e.value)}t.forEach(function(o){try{if(typeof o=="function"){o.call(n,i);return}o.resolve(i)}catch{}})}var aa=["autopause","autoplay","background","byline","color","colors","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function Xr(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return aa.reduce(function(t,i){var r=n.getAttribute("data-vimeo-".concat(i));return(r||r==="")&&(t[i]=r===""?1:r),t},e)}function li(n,e){var t=n.html;if(!e)throw new TypeError("An element must be provided");if(e.getAttribute("data-vimeo-initialized")!==null)return e.querySelector("iframe");var i=document.createElement("div");return i.innerHTML=t,e.appendChild(i.firstChild),e.setAttribute("data-vimeo-initialized","true"),e.querySelector("iframe")}function Jr(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return new Promise(function(i,r){if(!De(n))throw new TypeError("“".concat(n,"” is not a vimeo.com url."));var s="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(n));for(var o in e)e.hasOwnProperty(o)&&(s+="&".concat(o,"=").concat(encodeURIComponent(e[o])));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",s,!0),a.onload=function(){if(a.status===404){r(new Error("“".concat(n,"” was not found.")));return}if(a.status===403){r(new Error("“".concat(n,"” is not embeddable.")));return}try{var c=JSON.parse(a.responseText);if(c.domain_status_code===403){li(c,t),r(new Error("“".concat(n,"” is not embeddable.")));return}i(c)}catch(l){r(l)}},a.onerror=function(){var c=a.status?" (".concat(a.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(c,".")))},a.send()})}function la(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document,e=[].slice.call(n.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),t=function(r){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(r))};e.forEach(function(i){try{if(i.getAttribute("data-vimeo-defer")!==null)return;var r=Xr(i),s=Qr(r);Jr(s,r,i).then(function(o){return li(o,i)}).catch(t)}catch(o){t(o)}})}function ca(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var e=function(i){if(De(i.origin)&&!(!i.data||i.data.event!=="spacechange")){for(var r=n.querySelectorAll("iframe"),s=0;s<r.length;s++)if(r[s].contentWindow===i.source){var o=r[s].parentElement;o.style.paddingBottom="".concat(i.data.data[0].bottom,"px");break}}};window.addEventListener("message",e)}}function ua(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var e=function(i){if(De(i.origin)){var r=fn(i.data);if(!(!r||r.event!=="ready"))for(var s=n.querySelectorAll("iframe"),o=0;o<s.length;o++){var a=s[o],c=a.contentWindow===i.source;if(Kr(a.src)&&c){var l=new ci(a);l.callMethod("appendVideoMetadata",window.location.href)}}}};window.addEventListener("message",e)}}function ha(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var e=function(r){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(r))},t=function(r){if(De(r.origin)){var s=fn(r.data);if(!(!s||s.event!=="ready"))for(var o=n.querySelectorAll("iframe"),a=function(){var h=o[c],u=h.contentWindow===r.source;if(Kr(h.src)&&u){var d=new ci(h);d.getVideoId().then(function(f){var p=new RegExp("[?&]vimeo_t_".concat(f,"=([^&#]*)")).exec(window.location.href);if(p&&p[1]){var T=decodeURI(p[1]);d.setCurrentTime(T)}}).catch(e)}},c=0;c<o.length;c++)a()}};window.addEventListener("message",t)}}function da(){var n=function(){for(var i,r=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,o=r.length,a={};s<o;s++)if(i=r[s],i&&i[1]in document){for(s=0;s<i.length;s++)a[r[0][s]]=i[s];return a}return!1}(),e={fullscreenchange:n.fullscreenchange,fullscreenerror:n.fullscreenerror},t={request:function(r){return new Promise(function(s,o){var a=function l(){t.off("fullscreenchange",l),s()};t.on("fullscreenchange",a),r=r||document.documentElement;var c=r[n.requestFullscreen]();c instanceof Promise&&c.then(a).catch(o)})},exit:function(){return new Promise(function(r,s){if(!t.isFullscreen){r();return}var o=function c(){t.off("fullscreenchange",c),r()};t.on("fullscreenchange",o);var a=document[n.exitFullscreen]();a instanceof Promise&&a.then(o).catch(s)})},on:function(r,s){var o=e[r];o&&document.addEventListener(o,s)},off:function(r,s){var o=e[r];o&&document.removeEventListener(o,s)}};return Object.defineProperties(t,{isFullscreen:{get:function(){return!!document[n.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[n.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return!!document[n.fullscreenEnabled]}}}),t}var fa={role:"viewer",autoPlayMuted:!0,allowedDrift:.3,maxAllowedDrift:1,minCheckInterval:.1,maxRateAdjustment:.2,maxTimeToCatchUp:1},pa=function(n){Yo(t,n);var e=Xo(t);function t(i,r){var s,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;return $r(this,t),s=e.call(this),Ut(Ht(s),"logger",void 0),Ut(Ht(s),"speedAdjustment",0),Ut(Ht(s),"adjustSpeed",function(){var c=Se(K().mark(function l(h,u){var d;return K().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(s.speedAdjustment!==u){p.next=2;break}return p.abrupt("return");case 2:return p.next=4,h.getPlaybackRate();case 4:return p.t0=p.sent,p.t1=s.speedAdjustment,p.t2=p.t0-p.t1,p.t3=u,d=p.t2+p.t3,s.log("New playbackRate:  ".concat(d)),p.next=12,h.setPlaybackRate(d);case 12:s.speedAdjustment=u;case 13:case"end":return p.stop()}},l)}));return function(l,h){return c.apply(this,arguments)}}()),s.logger=a,s.init(r,i,Ki(Ki({},fa),o)),s}return qr(t,[{key:"disconnect",value:function(){this.dispatchEvent(new Event("disconnect"))}},{key:"init",value:function(){var i=Se(K().mark(function s(o,a,c){var l=this,h,u,d;return K().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,this.waitForTOReadyState(o,"open");case 2:if(c.role!=="viewer"){p.next=10;break}return p.next=5,this.updatePlayer(o,a,c);case 5:h=Zi(o,"change",function(){return l.updatePlayer(o,a,c)}),u=this.maintainPlaybackPosition(o,a,c),this.addEventListener("disconnect",function(){u.cancel(),h.cancel()}),p.next=14;break;case 10:return p.next=12,this.updateTimingObject(o,a);case 12:d=Zi(a,["seeked","play","pause","ratechange"],function(){return l.updateTimingObject(o,a)},"on","off"),this.addEventListener("disconnect",function(){return d.cancel()});case 14:case"end":return p.stop()}},s,this)}));function r(s,o,a){return i.apply(this,arguments)}return r}()},{key:"updateTimingObject",value:function(){var i=Se(K().mark(function s(o,a){return K().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.t0=o,l.next=3,a.getCurrentTime();case 3:return l.t1=l.sent,l.next=6,a.getPaused();case 6:if(!l.sent){l.next=10;break}l.t2=0,l.next=13;break;case 10:return l.next=12,a.getPlaybackRate();case 12:l.t2=l.sent;case 13:l.t3=l.t2,l.t4={position:l.t1,velocity:l.t3},l.t0.update.call(l.t0,l.t4);case 16:case"end":return l.stop()}},s)}));function r(s,o){return i.apply(this,arguments)}return r}()},{key:"updatePlayer",value:function(){var i=Se(K().mark(function s(o,a,c){var l,h,u;return K().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(l=o.query(),h=l.position,u=l.velocity,typeof h=="number"&&a.setCurrentTime(h),typeof u!="number"){f.next=25;break}if(u!==0){f.next=11;break}return f.next=6,a.getPaused();case 6:if(f.t0=f.sent,f.t0!==!1){f.next=9;break}a.pause();case 9:f.next=25;break;case 11:if(!(u>0)){f.next=25;break}return f.next=14,a.getPaused();case 14:if(f.t1=f.sent,f.t1!==!0){f.next=19;break}return f.next=18,a.play().catch(function(){var p=Se(K().mark(function T(D){return K().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(!(D.name==="NotAllowedError"&&c.autoPlayMuted)){w.next=5;break}return w.next=3,a.setMuted(!0);case 3:return w.next=5,a.play().catch(function(v){return console.error("Couldn't play the video from TimingSrcConnector. Error:",v)});case 5:case"end":return w.stop()}},T)}));return function(T){return p.apply(this,arguments)}}());case 18:this.updatePlayer(o,a,c);case 19:return f.next=21,a.getPlaybackRate();case 21:if(f.t2=f.sent,f.t3=u,f.t2===f.t3){f.next=25;break}a.setPlaybackRate(u);case 25:case"end":return f.stop()}},s,this)}));function r(s,o,a){return i.apply(this,arguments)}return r}()},{key:"maintainPlaybackPosition",value:function(r,s,o){var a=this,c=o.allowedDrift,l=o.maxAllowedDrift,h=o.minCheckInterval,u=o.maxRateAdjustment,d=o.maxTimeToCatchUp,f=Math.min(d,Math.max(h,l))*1e3,p=function(){var D=Se(K().mark(function U(){var w,v,E,S,R;return K().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(I.t0=r.query().velocity===0,I.t0){I.next=6;break}return I.next=4,s.getPaused();case 4:I.t1=I.sent,I.t0=I.t1===!0;case 6:if(!I.t0){I.next=8;break}return I.abrupt("return");case 8:return I.t2=r.query().position,I.next=11,s.getCurrentTime();case 11:if(I.t3=I.sent,w=I.t2-I.t3,v=Math.abs(w),a.log("Drift: ".concat(w)),!(v>l)){I.next=22;break}return I.next=18,a.adjustSpeed(s,0);case 18:s.setCurrentTime(r.query().position),a.log("Resync by currentTime"),I.next=29;break;case 22:if(!(v>c)){I.next=29;break}return E=v/d,S=u,R=E<S?(S-E)/2:S,I.next=28,a.adjustSpeed(s,R*Math.sign(w));case 28:a.log("Resync by playbackRate");case 29:case"end":return I.stop()}},U)}));return function(){return D.apply(this,arguments)}}(),T=setInterval(function(){return p()},f);return{cancel:function(){return clearInterval(T)}}}},{key:"log",value:function(r){var s;(s=this.logger)===null||s===void 0||s.call(this,"TimingSrcConnector: ".concat(r))}},{key:"waitForTOReadyState",value:function(r,s){return new Promise(function(o){var a=function c(){r.readyState===s?o():r.addEventListener("readystatechange",c,{once:!0})};a()})}}]),t}(Bn(EventTarget)),je=new WeakMap,Nn=new WeakMap,X={},ci=function(){function n(e){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if($r(this,n),window.jQuery&&e instanceof jQuery&&(e.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),e=e[0]),typeof document<"u"&&typeof e=="string"&&(e=document.getElementById(e)),!Zo(e))throw new TypeError("You must pass either a valid element or a valid id.");if(e.nodeName!=="IFRAME"){var r=e.querySelector("iframe");r&&(e=r)}if(e.nodeName==="IFRAME"&&!De(e.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(je.has(e))return je.get(e);this._window=e.ownerDocument.defaultView,this.element=e,this.origin="*";var s=new oe(function(a,c){if(t._onMessage=function(u){if(!(!De(u.origin)||t.element.contentWindow!==u.source)){t.origin==="*"&&(t.origin=u.origin);var d=fn(u.data),f=d&&d.event==="error",p=f&&d.data&&d.data.method==="ready";if(p){var T=new Error(d.data.message);T.name=d.data.name,c(T);return}var D=d&&d.event==="ready",U=d&&d.method==="ping";if(D||U){t.element.setAttribute("data-ready","true"),a();return}oa(t,d)}},t._window.addEventListener("message",t._onMessage),t.element.nodeName!=="IFRAME"){var l=Xr(e,i),h=Qr(l);Jr(h,l,e).then(function(u){var d=li(u,e);return t.element=d,t._originalElement=e,sa(e,d),je.set(t.element,t),u}).catch(c)}});if(Nn.set(this,s),je.set(this.element,this),this.element.nodeName==="IFRAME"&&Te(this,"ping"),X.isEnabled){var o=function(){return X.exit()};this.fullscreenchangeHandler=function(){X.isFullscreen?at(t,"event:exitFullscreen",o):qt(t,"event:exitFullscreen",o),t.ready().then(function(){Te(t,"fullscreenchange",X.isFullscreen)})},X.on("fullscreenchange",this.fullscreenchangeHandler)}return this}return qr(n,[{key:"callMethod",value:function(t){var i=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new oe(function(s,o){return i.ready().then(function(){at(i,t,{resolve:s,reject:o}),Te(i,t,r)}).catch(o)})}},{key:"get",value:function(t){var i=this;return new oe(function(r,s){return t=Ji(t,"get"),i.ready().then(function(){at(i,t,{resolve:r,reject:s}),Te(i,t)}).catch(s)})}},{key:"set",value:function(t,i){var r=this;return new oe(function(s,o){if(t=Ji(t,"set"),i==null)throw new TypeError("There must be a value to set.");return r.ready().then(function(){at(r,t,{resolve:s,reject:o}),Te(r,t,i)}).catch(o)})}},{key:"on",value:function(t,i){if(!t)throw new TypeError("You must pass an event name.");if(!i)throw new TypeError("You must pass a callback function.");if(typeof i!="function")throw new TypeError("The callback must be a function.");var r=$t(this,"event:".concat(t));r.length===0&&this.callMethod("addEventListener",t).catch(function(){}),at(this,"event:".concat(t),i)}},{key:"off",value:function(t,i){if(!t)throw new TypeError("You must pass an event name.");if(i&&typeof i!="function")throw new TypeError("The callback must be a function.");var r=qt(this,"event:".concat(t),i);r&&this.callMethod("removeEventListener",t).catch(function(s){})}},{key:"loadVideo",value:function(t){return this.callMethod("loadVideo",t)}},{key:"ready",value:function(){var t=Nn.get(this)||new oe(function(i,r){r(new Error("Unknown player. Probably unloaded."))});return oe.resolve(t)}},{key:"addCuePoint",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.callMethod("addCuePoint",{time:t,data:i})}},{key:"removeCuePoint",value:function(t){return this.callMethod("removeCuePoint",t)}},{key:"enableTextTrack",value:function(t,i){if(!t)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:t,kind:i})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return X.isEnabled?X.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return X.isEnabled?X.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return X.isEnabled?oe.resolve(X.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"remotePlaybackPrompt",value:function(){return this.callMethod("remotePlaybackPrompt")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var t=this;return new oe(function(i){if(Nn.delete(t),je.delete(t.element),t._originalElement&&(je.delete(t._originalElement),t._originalElement.removeAttribute("data-vimeo-initialized")),t.element&&t.element.nodeName==="IFRAME"&&t.element.parentNode&&(t.element.parentNode.parentNode&&t._originalElement&&t._originalElement!==t.element.parentNode?t.element.parentNode.parentNode.removeChild(t.element.parentNode):t.element.parentNode.removeChild(t.element)),t.element&&t.element.nodeName==="DIV"&&t.element.parentNode){t.element.removeAttribute("data-vimeo-initialized");var r=t.element.querySelector("iframe");r&&r.parentNode&&(r.parentNode.parentNode&&t._originalElement&&t._originalElement!==r.parentNode?r.parentNode.parentNode.removeChild(r.parentNode):r.parentNode.removeChild(r))}t._window.removeEventListener("message",t._onMessage),X.isEnabled&&X.off("fullscreenchange",t.fullscreenchangeHandler),i()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(t){return this.set("autopause",t)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(t){return this.set("cameraProps",t)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"getColors",value:function(){return oe.all([this.get("colorOne"),this.get("colorTwo"),this.get("colorThree"),this.get("colorFour")])}},{key:"setColor",value:function(t){return this.set("color",t)}},{key:"setColors",value:function(t){if(!Array.isArray(t))return new oe(function(s,o){return o(new TypeError("Argument must be an array."))});var i=new oe(function(s){return s(null)}),r=[t[0]?this.set("colorOne",t[0]):i,t[1]?this.set("colorTwo",t[1]):i,t[2]?this.set("colorThree",t[2]):i,t[3]?this.set("colorFour",t[3]):i];return oe.all(r)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(t){return this.set("currentTime",t)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(t){return this.set("loop",t)}},{key:"setMuted",value:function(t){return this.set("muted",t)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(t){return this.set("playbackRate",t)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(t){return this.set("quality",t)}},{key:"getRemotePlaybackAvailability",value:function(){return this.get("remotePlaybackAvailability")}},{key:"getRemotePlaybackState",value:function(){return this.get("remotePlaybackState")}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(t){return this.set("volume",t)}},{key:"setTimingSrc",value:function(){var e=Se(K().mark(function i(r,s){var o=this,a;return K().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(r){l.next=2;break}throw new TypeError("A Timing Object must be provided.");case 2:return l.next=4,this.ready();case 4:return a=new pa(this,r,s),Te(this,"notifyTimingObjectConnect"),a.addEventListener("disconnect",function(){return Te(o,"notifyTimingObjectDisconnect")}),l.abrupt("return",a);case 8:case"end":return l.stop()}},i,this)}));function t(i,r){return e.apply(this,arguments)}return t}()}]),n}();Yr||(X=da(),la(),ca(),ua(),ha());var Pt,un,Zr,hn,es,dn,ts,Rt,Vn;class _a extends EventTarget{constructor(t){super();ye(this,un);ye(this,hn);ye(this,dn);ye(this,Rt);Q(this,"dataProvider");Q(this,"vector",{position:0,acceleration:0,timestamp:0,velocity:0});Q(this,"onadjust");Q(this,"onchange");Q(this,"onreadystatechange");Q(this,"startPosition");Q(this,"endPosition");Q(this,"error");Q(this,"readyState","connecting");Q(this,"skew",0);ye(this,Pt,crypto.randomUUID());this.dataProvider=t,Ue(this,un,Zr).call(this),Ue(this,hn,es).call(this)}async update(t,i=!0){let{position:r,timestamp:s,velocity:o,acceleration:a}=this.vector;if(r=r+(performance.now()/1e3-s)*o,this.vector={acceleration:a,velocity:o,position:r,...t,timestamp:performance.now()/1e3},Ue(this,Rt,Vn).call(this,"change"),i){const{timestamp:c,...l}=this.vector;await Ue(this,dn,ts).call(this,l)}}}Pt=new WeakMap,un=new WeakSet,Zr=function(){this.dataProvider.onNetworkChange(t=>{this.readyState!==t&&(this.readyState=t,Ue(this,Rt,Vn).call(this,"readystatechange"))})},hn=new WeakSet,es=function(){this.dataProvider.onData(t=>{const{time:i,clientId:r,...s}=t;r!==Ve(this,Pt)&&this.update({...s,position:s.position+s.velocity*((Date.now()-i)/1e3)},!1)})},dn=new WeakSet,ts=function(t){this.dataProvider.set({...t,clientId:Ve(this,Pt),time:Date.now()})},Rt=new WeakSet,Vn=function(t){this.dispatchEvent(new Event(t));const i=`on${t}`;typeof this[i]=="function"&&this[i]()};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw nt(e)},nt=function(n){return new Error("Firebase Database ("+ns.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ga=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ui={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(t[h],t[u],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(is(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ga(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const l=r<n.length?t[n.charAt(r)]:64;++r;const u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new ma;const d=s<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),u!==64){const p=l<<6&192|u;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ma extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rs=function(n){const e=is(n);return ui.encodeByteArray(e,!0)},Gt=function(n){return rs(n).replace(/\./g,"")},Un=function(n){try{return ui.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(n){return ss(void 0,n)}function ss(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!va(t)||(n[t]=ss(n[t],e[t]));return n}function va(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=()=>Ea().__FIREBASE_DEFAULTS__,Ca=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ba=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Un(n[1]);return e&&JSON.parse(e)},os=()=>{try{return wa()||Ca()||ba()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ia=n=>{var e,t;return(t=(e=os())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ta=n=>{const e=Ia(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Sa=()=>{var n;return(n=os())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Gt(JSON.stringify(t)),Gt(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function as(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ka())}function Pa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ls(){return ns.NODE_ADMIN===!0}function Ra(){try{return typeof indexedDB=="object"}catch{return!1}}function Aa(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="FirebaseError";class Dt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Da,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Oa(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dt(r,a,i)}}function Oa(n,e){return n.replace(xa,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const xa=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){return JSON.parse(n)}function G(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=vt(Un(s[0])||""),t=vt(Un(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},Ma=function(n){const e=us(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},La=function(n){const e=us(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Je(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function er(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zt(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function jn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(tr(s)&&tr(o)){if(!jn(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function tr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),h=1518500249):(l=s^o^a,h=1859775393):u<60?(l=s&o|a&(s|o),h=2400959708):(l=s^o^a,h=3395469782);const d=(r<<5|r>>>27)+l+c+h+i[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function hi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,m(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},_n=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){return n&&n._delegate?n._delegate:n}class Et{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new pn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ja(e))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Ne){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ne){return this.instances.has(e)}getOptions(e=Ne){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ua(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ne){return this.component?this.component.multipleInstances?e:Ne:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ua(n){return n===Ne?void 0:n}function ja(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Va(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const $a={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},qa=L.INFO,Ga={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},za=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=Ga[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hs{constructor(e){this.name=e,this._logLevel=qa,this._logHandler=za,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$a[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const Ya=(n,e)=>e.some(t=>n instanceof t);let nr,ir;function Ka(){return nr||(nr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qa(){return ir||(ir=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ds=new WeakMap,Hn=new WeakMap,fs=new WeakMap,kn=new WeakMap,di=new WeakMap;function Xa(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ve(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ds.set(t,n)}).catch(()=>{}),di.set(e,n),e}function Ja(n){if(Hn.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Hn.set(n,e)}let $n={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Za(n){$n=n($n)}function el(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Pn(this),e,...t);return fs.set(i,e.sort?e.sort():[e]),ve(i)}:Qa().includes(n)?function(...e){return n.apply(Pn(this),e),ve(ds.get(this))}:function(...e){return ve(n.apply(Pn(this),e))}}function tl(n){return typeof n=="function"?el(n):(n instanceof IDBTransaction&&Ja(n),Ya(n,Ka())?new Proxy(n,$n):n)}function ve(n){if(n instanceof IDBRequest)return Xa(n);if(kn.has(n))return kn.get(n);const e=tl(n);return e!==n&&(kn.set(n,e),di.set(e,n)),e}const Pn=n=>di.get(n);function nl(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),a=ve(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ve(o.result),c.oldVersion,c.newVersion,ve(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const il=["get","getKey","getAll","getAllKeys","count"],rl=["put","add","delete","clear"],Rn=new Map;function rr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rn.get(e))return Rn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=rl.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||il.includes(t)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return Rn.set(e,s),s}Za(n=>({...n,get:(e,t,i)=>rr(e,t)||n.get(e,t,i),has:(e,t)=>!!rr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ol(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ol(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qn="@firebase/app",sr="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new hs("@firebase/app"),al="@firebase/app-compat",ll="@firebase/analytics-compat",cl="@firebase/analytics",ul="@firebase/app-check-compat",hl="@firebase/app-check",dl="@firebase/auth",fl="@firebase/auth-compat",pl="@firebase/database",_l="@firebase/database-compat",gl="@firebase/functions",ml="@firebase/functions-compat",yl="@firebase/installations",vl="@firebase/installations-compat",El="@firebase/messaging",wl="@firebase/messaging-compat",Cl="@firebase/performance",bl="@firebase/performance-compat",Il="@firebase/remote-config",Tl="@firebase/remote-config-compat",Sl="@firebase/storage",Nl="@firebase/storage-compat",kl="@firebase/firestore",Pl="@firebase/firestore-compat",Rl="firebase",Al="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]",Dl={[qn]:"fire-core",[al]:"fire-core-compat",[cl]:"fire-analytics",[ll]:"fire-analytics-compat",[hl]:"fire-app-check",[ul]:"fire-app-check-compat",[dl]:"fire-auth",[fl]:"fire-auth-compat",[pl]:"fire-rtdb",[_l]:"fire-rtdb-compat",[gl]:"fire-fn",[ml]:"fire-fn-compat",[yl]:"fire-iid",[vl]:"fire-iid-compat",[El]:"fire-fcm",[wl]:"fire-fcm-compat",[Cl]:"fire-perf",[bl]:"fire-perf-compat",[Il]:"fire-rc",[Tl]:"fire-rc-compat",[Sl]:"fire-gcs",[Nl]:"fire-gcs-compat",[kl]:"fire-fst",[Pl]:"fire-fst-compat","fire-js":"fire-js",[Rl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Map,zn=new Map;function Ol(n,e){try{n.container.addComponent(e)}catch(t){Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(zn.has(e))return Oe.debug(`There were multiple attempts to register component ${e}.`),!1;zn.set(e,n);for(const t of Yt.values())Ol(t,n);return!0}function xl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new cs("app","Firebase",Ml);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=Al;function ps(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Gn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Ee.create("bad-app-name",{appName:String(r)});if(t||(t=Sa()),!t)throw Ee.create("no-options");const s=Yt.get(r);if(s){if(jn(t,s.options)&&jn(i,s.config))return s;throw Ee.create("duplicate-app",{appName:r})}const o=new Ha(r);for(const c of zn.values())o.addComponent(c);const a=new Ll(t,i,o);return Yt.set(r,a),a}function Wl(n=Gn){const e=Yt.get(n);if(!e&&n===Gn)return ps();if(!e)throw Ee.create("no-app",{appName:n});return e}function Ge(n,e,t){var i;let r=(i=Dl[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oe.warn(a.join(" "));return}Kt(new Et(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="firebase-heartbeat-database",Vl=1,wt="firebase-heartbeat-store";let An=null;function _s(){return An||(An=nl(Bl,Vl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(wt)}}}).catch(n=>{throw Ee.create("idb-open",{originalErrorMessage:n.message})})),An}async function Ul(n){try{return(await _s()).transaction(wt).objectStore(wt).get(gs(n))}catch(e){if(e instanceof Dt)Oe.warn(e.message);else{const t=Ee.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oe.warn(t.message)}}}async function or(n,e){try{const i=(await _s()).transaction(wt,"readwrite");return await i.objectStore(wt).put(e,gs(n)),i.done}catch(t){if(t instanceof Dt)Oe.warn(t.message);else{const i=Ee.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Oe.warn(i.message)}}}function gs(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=1024,Hl=30*24*60*60*1e3;class $l{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Gl(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ar();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=Hl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ar(),{heartbeatsToSend:t,unsentEntries:i}=ql(this._heartbeatsCache.heartbeats),r=Gt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ar(){return new Date().toISOString().substring(0,10)}function ql(n,e=jl){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),lr(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),lr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Gl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ra()?Aa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ul(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return or(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return or(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function lr(n){return Gt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(n){Kt(new Et("platform-logger",e=>new sl(e),"PRIVATE")),Kt(new Et("heartbeat",e=>new $l(e),"PRIVATE")),Ge(qn,sr,n),Ge(qn,sr,"esm2017"),Ge("fire-js","")}zl("");const cr="@firebase/database",ur="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="";function Yl(n){ms=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),G(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:vt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ge(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Kl(e)}}catch{}return new Ql},Pe=ys("localStorage"),Yn=ys("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new hs("@firebase/database"),Xl=function(){let n=1;return function(){return n++}}(),vs=function(n){const e=Ba(n),t=new Wa;t.update(e);const i=t.digest();return ui.encodeByteArray(i)},xt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=xt.apply(null,i):typeof i=="object"?e+=G(i):e+=i,e+=" "}return e};let Ae=null,hr=!0;const Jl=function(n,e){m(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(ze.logLevel=L.VERBOSE,Ae=ze.log.bind(ze),e&&Yn.set("logging_enabled",!0)):typeof n=="function"?Ae=n:(Ae=null,Yn.remove("logging_enabled"))},Y=function(...n){if(hr===!0&&(hr=!1,Ae===null&&Yn.get("logging_enabled")===!0&&Jl(!0)),Ae){const e=xt.apply(null,n);Ae(e)}},Mt=function(n){return function(...e){Y(n,...e)}},Kn=function(...n){const e="FIREBASE INTERNAL ERROR: "+xt(...n);ze.error(e)},pe=function(...n){const e=`FIREBASE FATAL ERROR: ${xt(...n)}`;throw ze.error(e),new Error(e)},ee=function(...n){const e="FIREBASE WARNING: "+xt(...n);ze.warn(e)},Zl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Es=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ec=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ze="[MIN_NAME]",xe="[MAX_NAME]",it=function(n,e){if(n===e)return 0;if(n===Ze||e===xe)return-1;if(e===Ze||n===xe)return 1;{const t=dr(n),i=dr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},tc=function(n,e){return n===e?0:n<e?-1:1},lt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+G(e))},fi=function(n){if(typeof n!="object"||n===null)return G(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=G(e[i]),t+=":",t+=fi(n[e[i]]);return t+="}",t},ws=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Cs=function(n){m(!Es(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,a,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},nc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ic=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const sc=new RegExp("^-?(0*)\\d{1,10}$"),oc=-2147483648,ac=2147483647,dr=function(n){if(sc.test(n)){const e=Number(n);if(e>=oc&&e<=ac)return e}return null},rt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ee("Exception was thrown by user callback.",t),e},Math.floor(0))}},lc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ee(e)}}class Ye{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ye.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="5",bs="v",Is="s",Ts="r",Ss="f",Ns=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ks="ls",Ps="p",Qn="ac",Rs="websocket",As="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t,i,r,s=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Os(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===Rs)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===As)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hc(n)&&(t.ns=n.namespace);const r=[];return te(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.counters_={}}incrementCounter(e,t=1){ge(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ya(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn={},On={};function _i(n){const e=n.toString();return Dn[e]||(Dn[e]=new dc),Dn[e]}function fc(n,e){const t=n.toString();return On[t]||(On[t]=e()),On[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&rt(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="start",_c="close",gc="pLPCommand",mc="pRTLPCB",xs="id",Ms="pw",Ls="ser",yc="cb",vc="seg",Ec="ts",wc="d",Cc="dframe",Fs=1870,Ws=30,bc=Fs-Ws,Ic=25e3,Tc=3e4;class $e{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mt(e),this.stats_=_i(t),this.urlFn=c=>(this.appCheckToken&&(c[Qn]=this.appCheckToken),Os(t,As,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Tc)),ec(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gi((...s)=>{const[o,a,c,l,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fr)this.id=a,this.password=c;else if(o===_c)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fr]="t",i[Ls]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[yc]=this.scriptTagHolder.uniqueCallbackIdentifier),i[bs]=pi,this.transportSessionId&&(i[Is]=this.transportSessionId),this.lastSessionId&&(i[ks]=this.lastSessionId),this.applicationId&&(i[Ps]=this.applicationId),this.appCheckToken&&(i[Qn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ns.test(location.hostname)&&(i[Ts]=Ss);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$e.forceAllow_=!0}static forceDisallow(){$e.forceDisallow_=!0}static isAvailable(){return $e.forceAllow_?!0:!$e.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nc()&&!ic()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=rs(t),r=ws(i,bc);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Cc]="t",i[xs]=e,i[Ms]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=G(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gi{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xl(),window[gc+this.uniqueCallbackIdentifier]=e,window[mc+this.uniqueCallbackIdentifier]=t,this.myIFrame=gi.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xs]=this.myID,e[Ms]=this.myPW,e[Ls]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ws+i.length<=Fs;){const o=this.pendingSegs.shift();i=i+"&"+vc+r+"="+o.seg+"&"+Ec+r+"="+o.ts+"&"+wc+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(Ic)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=16384,Nc=45e3;let Qt=null;typeof MozWebSocket<"u"?Qt=MozWebSocket:typeof WebSocket<"u"&&(Qt=WebSocket);class ae{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mt(this.connId),this.stats_=_i(t),this.connURL=ae.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[bs]=pi,typeof location<"u"&&location.hostname&&Ns.test(location.hostname)&&(o[Ts]=Ss),t&&(o[Is]=t),i&&(o[ks]=i),r&&(o[Qn]=r),s&&(o[Ps]=s),Os(e,Rs,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pe.set("previous_websocket_failure",!0);try{let i;ls(),this.mySock=new Qt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Qt!==null&&!ae.forceDisallow_}static previouslyFailed(){return Pe.isInMemoryStorage||Pe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Pe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=vt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ws(t,Sc);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2;ae.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$e,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ae&&ae.isAvailable();let i=t&&!ae.previouslyFailed();if(e.webSocketOnly&&(t||ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ae];else{const r=this.transports_=[];for(const s of Ct.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Ct.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ct.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=6e4,Pc=5e3,Rc=10*1024,Ac=100*1024,xn="t",pr="d",Dc="s",_r="r",Oc="e",gr="o",mr="a",yr="n",vr="p",xc="h";class Mc{constructor(e,t,i,r,s,o,a,c,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mt("c:"+this.id+":"),this.transportManager_=new Ct(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=dt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ac?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xn in e){const t=e[xn];t===mr?this.upgradeIfSecondaryHealthy_():t===_r?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===gr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=lt("t",e),i=lt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=lt("t",e),i=lt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=lt(xn,e);if(pr in e){const i=e[pr];if(t===xc){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===yr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Dc?this.onConnectionShutdown_(i):t===_r?this.onReset_(i):t===Oc?Kn("Server Error: "+i):t===gr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),pi!==i&&ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),dt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Pc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Vs{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!as()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xt}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=32,wr=768;class M{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function O(){return new M("")}function k(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ce(n){return n.pieces_.length-n.pieceNum_}function F(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new M(n.pieces_,e)}function Us(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Lc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function js(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Hs(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new M(e,0)}function H(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof M)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new M(t,0)}function A(n){return n.pieceNum_>=n.pieces_.length}function J(n,e){const t=k(n),i=k(e);if(t===null)return e;if(t===i)return J(F(n),F(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function mi(n,e){if(Ce(n)!==Ce(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function le(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ce(n)>Ce(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Fc{constructor(e,t){this.errorPrefix_=t,this.parts_=js(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=_n(this.parts_[i]);$s(this)}}function Wc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_n(e),$s(n)}function Bc(n){const e=n.parts_.pop();n.byteLength_-=_n(e),n.parts_.length>0&&(n.byteLength_-=1)}function $s(n){if(n.byteLength_>wr)throw new Error(n.errorPrefix_+"has a key path longer than "+wr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Er)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Er+") or object contains a cycle "+ke(n))}function ke(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Vs{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new yi}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=1e3,Vc=60*5*1e3,Cr=30*1e3,Uc=1.3,jc=3e4,Hc="server_kill",br=3;class fe extends Bs{constructor(e,t,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=fe.nextPersistentConnectionId_++,this.log_=Mt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ct,this.maxReconnectDelay_=Vc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!ls())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(G(s)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new pn,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;fe.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ge(e,"w")){const i=Je(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||La(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ma(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+G(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Kn("Unrecognized action received from server: "+G(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ct,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ct,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jc&&(this.reconnectDelay_=ct),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Uc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+fe.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(u){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Mc(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{ee(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hc)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ee(u),c())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],er(this.interruptReasons_)&&(this.reconnectDelay_=ct,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>fi(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new M(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=br&&(this.reconnectDelay_=Cr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=br&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ms.replace(/\./g,"-")]=1,as()?e["framework.cordova"]=1:Pa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xt.getInstance().currentlyOnline();return er(this.interruptReasons_)&&e}}fe.nextPersistentConnectionId_=0;fe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new P(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new P(Ze,e),r=new P(Ze,t);return this.compare(i,r)!==0}minPost(){return P.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class qs extends gn{static get __EMPTY_NODE(){return Bt}static set __EMPTY_NODE(e){Bt=e}compare(e,t){return it(e.name,t.name)}isDefinedOn(e){throw nt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(xe,Bt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,Bt)}toString(){return".key"}}const Ke=new qs;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class q{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??q.RED,this.left=r??Z.EMPTY_NODE,this.right=s??Z.EMPTY_NODE}copy(e,t,i,r,s){return new q(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Z.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Z.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}q.RED=!0;q.BLACK=!1;class $c{copy(e,t,i,r,s){return this}insert(e,t,i){return new q(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Z{constructor(e,t=Z.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Z(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,q.BLACK,null,null))}remove(e){return new Z(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,q.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}Z.EMPTY_NODE=new $c;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n,e){return it(n.name,e.name)}function vi(n,e){return it(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn;function Gc(n){Xn=n}const Gs=function(n){return typeof n=="number"?"number:"+Cs(n):"string:"+n},zs=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ge(e,".sv"),"Priority must be a string or number.")}else m(n===Xn||n.isEmpty(),"priority of unexpected type.");m(n===Xn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ir;class ${constructor(e,t=$.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zs(this.priorityNode_)}static set __childrenNodeConstructor(e){Ir=e}static get __childrenNodeConstructor(){return Ir}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return A(e)?this:k(e)===".priority"?this.priorityNode_:$.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=k(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Ce(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,$.__childrenNodeConstructor.EMPTY_NODE.updateChild(F(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Cs(this.value_):e+=this.value_,this.lazyHash_=vs(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=$.VALUE_TYPE_ORDER.indexOf(t),s=$.VALUE_TYPE_ORDER.indexOf(i);return m(r>=0,"Unknown leaf type: "+t),m(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys,Ks;function zc(n){Ys=n}function Yc(n){Ks=n}class Kc extends gn{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?it(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(xe,new $("[PRIORITY-POST]",Ks))}makePost(e,t){const i=Ys(e);return new P(t,new $("[PRIORITY-POST]",i))}toString(){return".priority"}}const V=new Kc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=Math.log(2);class Xc{constructor(e){const t=s=>parseInt(Math.log(s)/Qc,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jt=function(n,e,t,i){n.sort(e);const r=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=n[c],d=t?t(u):u,new q(d,u.node,q.BLACK,null,null);{const f=parseInt(h/2,10)+c,p=r(c,f),T=r(f+1,l);return u=n[f],d=t?t(u):u,new q(d,u.node,q.BLACK,p,T)}},s=function(c){let l=null,h=null,u=n.length;const d=function(p,T){const D=u-p,U=u;u-=p;const w=r(D+1,U),v=n[D],E=t?t(v):v;f(new q(E,v.node,T,null,w))},f=function(p){l?(l.left=p,l=p):(h=p,l=p)};for(let p=0;p<c.count;++p){const T=c.nextBitIsOne(),D=Math.pow(2,c.count-(p+1));T?d(D,q.BLACK):(d(D,q.BLACK),d(D,q.RED))}return h},o=new Xc(n.length),a=s(o);return new Z(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn;const He={};class he{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(He&&V,"ChildrenNode.ts has not been loaded"),Mn=Mn||new he({".priority":He},{".priority":V}),Mn}get(e){const t=Je(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Z?t:null}hasIndex(e){return ge(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(P.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Jt(i,e.getCompare()):a=He;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new he(h,l)}addToIndexes(e,t){const i=zt(this.indexes_,(r,s)=>{const o=Je(this.indexSet_,s);if(m(o,"Missing index implementation for "+s),r===He)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(P.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Jt(a,o.getCompare())}else return He;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new P(e.name,a))),c.insert(e,e.node)}});return new he(i,this.indexSet_)}removeFromIndexes(e,t){const i=zt(this.indexes_,r=>{if(r===He)return r;{const s=t.get(e.name);return s?r.remove(new P(e.name,s)):r}});return new he(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut;class b{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&zs(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ut||(ut=new b(new Z(vi),null,he.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ut}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ut:t}}getChild(e){const t=k(e);return t===null?this:this.getImmediateChild(t).getChild(F(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new P(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?ut:this.priorityNode_;return new b(r,o,s)}}updateChild(e,t){const i=k(e);if(i===null)return t;{m(k(e)!==".priority"||Ce(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(F(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(V,(o,a)=>{t[o]=a.val(e),i++,s&&b.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gs(this.getPriority().val())+":"),this.forEachChild(V,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":vs(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new P(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,P.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lt?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(V),r=t.getIterator(V);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Jc extends b{constructor(){super(new Z(vi),b.EMPTY_NODE,he.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const Lt=new Jc;Object.defineProperties(P,{MIN:{value:new P(Ze,b.EMPTY_NODE)},MAX:{value:new P(xe,Lt)}});qs.__EMPTY_NODE=b.EMPTY_NODE;$.__childrenNodeConstructor=b;Gc(Lt);Yc(Lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=!0;function z(n,e=null){if(n===null)return b.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $(t,z(e))}if(!(n instanceof Array)&&Zc){const t=[];let i=!1;if(te(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=z(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new P(o,c)))}}),t.length===0)return b.EMPTY_NODE;const s=Jt(t,qc,o=>o.name,vi);if(i){const o=Jt(t,V.getCompare());return new b(s,z(e),new he({".priority":o},{".priority":V}))}else return new b(s,z(e),he.Default)}else{let t=b.EMPTY_NODE;return te(n,(i,r)=>{if(ge(n,i)&&i.substring(0,1)!=="."){const s=z(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(z(e))}}zc(z);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends gn{constructor(e){super(),this.indexPath_=e,m(!A(e)&&k(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?it(e.name,t.name):s}makePost(e,t){const i=z(e),r=b.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(t,r)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,Lt);return new P(xe,e)}toString(){return js(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends gn{compare(e,t){const i=e.node.compareTo(t.node);return i===0?it(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){const i=z(e);return new P(t,i)}toString(){return".value"}}const nu=new tu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){return{type:"value",snapshotNode:n}}function et(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function bt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function It(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function iu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(bt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(et(t,i)):o.trackChildChange(It(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(V,(r,s)=>{t.hasChild(r)||i.trackChildChange(bt(r,s))}),t.isLeafNode()||t.forEachChild(V,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(It(r,s,o))}else i.trackChildChange(et(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.indexedFilter_=new Ei(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tt.getStartPost_(e),this.endPost_=Tt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new P(t,i))||(i=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=b.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(b.EMPTY_NODE);const s=this;return t.forEachChild(V,(o,a)=>{s.matches(new P(o,a))||(r=r.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Tt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new P(t,i))||(i=b.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new P(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(h&&!i.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(It(t,i,u)),a.updateImmediateChild(t,i);{s!=null&&s.trackChildChange(bt(t,u));const T=a.updateImmediateChild(t,b.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(et(d.name,d.node)),T.updateImmediateChild(d.name,d.node)):T}}else return i.isEmpty()?e:h&&o(l,c)>=0?(s!=null&&(s.trackChildChange(bt(l.name,l.node)),s.trackChildChange(et(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=V}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ze}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===V}copy(){const e=new wi;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function su(n){return n.loadsAllData()?new Ei(n.getIndex()):n.hasLimit()?new ru(n):new Tt(n)}function Tr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===V?t="$priority":n.index_===nu?t="$value":n.index_===Ke?t="$key":(m(n.index_ instanceof eu,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=G(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=G(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+G(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=G(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+G(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Sr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==V&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Bs{constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Mt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Zt.getListenId_(e,i),a={};this.listens_[o]=a;const c=Tr(e._queryParams);this.restRequest_(s+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,i),Je(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",r(d,null)}})}unlisten(e,t){const i=Zt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Tr(e._queryParams),i=e._path.toString(),r=new pn;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fa(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=vt(a.responseText)}catch{ee("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&ee("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return{value:null,children:new Map}}function Xs(n,e,t){if(A(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=k(e);n.children.has(i)||n.children.set(i,en());const r=n.children.get(i);e=F(e),Xs(r,e,t)}}function Jn(n,e,t){n.value!==null?t(e,n.value):au(n,(i,r)=>{const s=new M(e.toString()+"/"+i);Jn(r,s,t)})}function au(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&te(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=10*1e3,cu=30*1e3,uu=5*60*1e3;class hu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lu(e);const i=Nr+(cu-Nr)*Math.random();dt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;te(e,(r,s)=>{s>0&&ge(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),dt(this.reportStats_.bind(this),Math.floor(Math.random()*2*uu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ce||(ce={}));function Js(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ci(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ce.ACK_USER_WRITE,this.source=Js()}operationForChild(e){if(A(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new M(e));return new tn(O(),t,this.revert)}}else return m(k(this.path)===e,"operationForChild called for unrelated child."),new tn(F(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.source=e,this.path=t,this.type=ce.LISTEN_COMPLETE}operationForChild(e){return A(this.path)?new St(this.source,O()):new St(this.source,F(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ce.OVERWRITE}operationForChild(e){return A(this.path)?new Me(this.source,O(),this.snap.getImmediateChild(e)):new Me(this.source,F(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ce.MERGE}operationForChild(e){if(A(this.path)){const t=this.children.subtree(new M(e));return t.isEmpty()?null:t.value?new Me(this.source,O(),t.value):new Nt(this.source,O(),t)}else return m(k(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Nt(this.source,F(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(A(e))return this.isFullyInitialized()&&!this.filtered_;const t=k(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function fu(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iu(o.childName,o.snapshotNode))}),ht(n,r,"child_removed",e,i,t),ht(n,r,"child_added",e,i,t),ht(n,r,"child_moved",s,i,t),ht(n,r,"child_changed",e,i,t),ht(n,r,"value",e,i,t),r}function ht(n,e,t,i,r,s){const o=i.filter(a=>a.type===t);o.sort((a,c)=>_u(n,a,c)),o.forEach(a=>{const c=pu(n,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function pu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _u(n,e,t){if(e.childName==null||t.childName==null)throw nt("Should only compare child_ events.");const i=new P(e.childName,e.snapshotNode),r=new P(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,e){return{eventCache:n,serverCache:e}}function ft(n,e,t,i){return mn(new Le(e,t,i),n.serverCache)}function Zs(n,e,t,i){return mn(n.eventCache,new Le(e,t,i))}function Zn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Fe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;const gu=()=>(Ln||(Ln=new Z(tc)),Ln);class W{constructor(e,t=gu()){this.value=e,this.children=t}static fromObject(e){let t=new W(null);return te(e,(i,r)=>{t=t.set(new M(i),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:O(),value:this.value};if(A(e))return null;{const i=k(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(F(e),t);return s!=null?{path:H(new M(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(A(e))return this;{const t=k(e),i=this.children.get(t);return i!==null?i.subtree(F(e)):new W(null)}}set(e,t){if(A(e))return new W(t,this.children);{const i=k(e),s=(this.children.get(i)||new W(null)).set(F(e),t),o=this.children.insert(i,s);return new W(this.value,o)}}remove(e){if(A(e))return this.children.isEmpty()?new W(null):new W(null,this.children);{const t=k(e),i=this.children.get(t);if(i){const r=i.remove(F(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new W(null):new W(this.value,s)}else return this}}get(e){if(A(e))return this.value;{const t=k(e),i=this.children.get(t);return i?i.get(F(e)):null}}setTree(e,t){if(A(e))return t;{const i=k(e),s=(this.children.get(i)||new W(null)).setTree(F(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new W(this.value,o)}}fold(e){return this.fold_(O(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(H(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,O(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(A(e))return null;{const s=k(e),o=this.children.get(s);return o?o.findOnPath_(F(e),H(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,O(),t)}foreachOnPath_(e,t,i){if(A(e))return this;{this.value&&i(t,this.value);const r=k(e),s=this.children.get(r);return s?s.foreachOnPath_(F(e),H(t,r),i):new W(null)}}foreach(e){this.foreach_(O(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(H(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.writeTree_=e}static empty(){return new ue(new W(null))}}function pt(n,e,t){if(A(e))return new ue(new W(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=J(r,e);return s=s.updateChild(o,t),new ue(n.writeTree_.set(r,s))}else{const r=new W(t),s=n.writeTree_.setTree(e,r);return new ue(s)}}}function kr(n,e,t){let i=n;return te(t,(r,s)=>{i=pt(i,H(e,r),s)}),i}function Pr(n,e){if(A(e))return ue.empty();{const t=n.writeTree_.setTree(e,new W(null));return new ue(t)}}function ei(n,e){return We(n,e)!=null}function We(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(J(t.path,e)):null}function Rr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(V,(i,r)=>{e.push(new P(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new P(i,r.value))}),e}function we(n,e){if(A(e))return n;{const t=We(n,e);return t!=null?new ue(new W(t)):new ue(n.writeTree_.subtree(e))}}function ti(n){return n.writeTree_.isEmpty()}function tt(n,e){return eo(O(),n.writeTree_,e)}function eo(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(m(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=eo(H(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(H(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e){return ro(e,n)}function mu(n,e,t,i,r){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=pt(n.visibleWrites,e,t)),n.lastWriteId=i}function yu(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function vu(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Eu(a,i.path)?r=!1:le(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return wu(n),!0;if(i.snap)n.visibleWrites=Pr(n.visibleWrites,i.path);else{const a=i.children;te(a,c=>{n.visibleWrites=Pr(n.visibleWrites,H(i.path,c))})}return!0}else return!1}function Eu(n,e){if(n.snap)return le(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&le(H(n.path,t),e))return!0;return!1}function wu(n){n.visibleWrites=to(n.allWrites,Cu,O()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Cu(n){return n.visible}function to(n,e,t){let i=ue.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let a;if(s.snap)le(t,o)?(a=J(t,o),i=pt(i,a,s.snap)):le(o,t)&&(a=J(o,t),i=pt(i,O(),s.snap.getChild(a)));else if(s.children){if(le(t,o))a=J(t,o),i=kr(i,a,s.children);else if(le(o,t))if(a=J(o,t),A(a))i=kr(i,O(),s.children);else{const c=Je(s.children,k(a));if(c){const l=c.getChild(F(a));i=pt(i,O(),l)}}}else throw nt("WriteRecord should have .snap or .children")}}return i}function no(n,e,t,i,r){if(!i&&!r){const s=We(n.visibleWrites,e);if(s!=null)return s;{const o=we(n.visibleWrites,e);if(ti(o))return t;if(t==null&&!ei(o,O()))return null;{const a=t||b.EMPTY_NODE;return tt(o,a)}}}else{const s=we(n.visibleWrites,e);if(!r&&ti(s))return t;if(!r&&t==null&&!ei(s,O()))return null;{const o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(le(l.path,e)||le(e,l.path))},a=to(n.allWrites,o,e),c=t||b.EMPTY_NODE;return tt(a,c)}}}function bu(n,e,t){let i=b.EMPTY_NODE;const r=We(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(V,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=we(n.visibleWrites,e);return t.forEachChild(V,(o,a)=>{const c=tt(we(s,new M(o)),a);i=i.updateImmediateChild(o,c)}),Rr(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=we(n.visibleWrites,e);return Rr(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Iu(n,e,t,i,r){m(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=H(e,t);if(ei(n.visibleWrites,s))return null;{const o=we(n.visibleWrites,s);return ti(o)?r.getChild(t):tt(o,r.getChild(t))}}function Tu(n,e,t,i){const r=H(e,t),s=We(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=we(n.visibleWrites,r);return tt(o,i.getNode().getImmediateChild(t))}else return null}function Su(n,e){return We(n.visibleWrites,e)}function Nu(n,e,t,i,r,s,o){let a;const c=we(n.visibleWrites,e),l=We(c,O());if(l!=null)a=l;else if(t!=null)a=tt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&h.length<r;)u(f,i)!==0&&h.push(f),f=d.getNext();return h}else return[]}function ku(){return{visibleWrites:ue.empty(),allWrites:[],lastWriteId:-1}}function nn(n,e,t,i){return no(n.writeTree,n.treePath,e,t,i)}function Ti(n,e){return bu(n.writeTree,n.treePath,e)}function Ar(n,e,t,i){return Iu(n.writeTree,n.treePath,e,t,i)}function rn(n,e){return Su(n.writeTree,H(n.treePath,e))}function Pu(n,e,t,i,r,s){return Nu(n.writeTree,n.treePath,e,t,i,r,s)}function Si(n,e,t){return Tu(n.writeTree,n.treePath,e,t)}function io(n,e){return ro(H(n.treePath,e),n.writeTree)}function ro(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,It(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,bt(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,et(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,It(i,e.snapshotNode,r.oldSnap));else throw nt("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const so=new Au;class Ni{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Le(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Si(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fe(this.viewCache_),s=Pu(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(n){return{filter:n}}function Ou(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xu(n,e,t,i,r){const s=new Ru;let o,a;if(t.type===ce.OVERWRITE){const l=t;l.source.fromUser?o=ni(n,e,l.path,l.snap,i,r,s):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!A(l.path),o=sn(n,e,l.path,l.snap,i,r,a,s))}else if(t.type===ce.MERGE){const l=t;l.source.fromUser?o=Lu(n,e,l.path,l.children,i,r,s):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ii(n,e,l.path,l.children,i,r,a,s))}else if(t.type===ce.ACK_USER_WRITE){const l=t;l.revert?o=Bu(n,e,l.path,i,r,s):o=Fu(n,e,l.path,l.affectedTree,i,r,s)}else if(t.type===ce.LISTEN_COMPLETE)o=Wu(n,e,t.path,i,s);else throw nt("Unknown operation type: "+t.type);const c=s.getChanges();return Mu(e,o,c),{viewCache:o,changes:c}}function Mu(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Zn(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Qs(Zn(e)))}}function oo(n,e,t,i,r,s){const o=e.eventCache;if(rn(i,t)!=null)return e;{let a,c;if(A(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Fe(e),h=l instanceof b?l:b.EMPTY_NODE,u=Ti(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=nn(i,Fe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=k(t);if(l===".priority"){m(Ce(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Ar(i,t,h,c);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=F(t);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Ar(i,t,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=Si(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,h,r,s):a=o.getNode()}}return ft(e,a,o.isFullyInitialized()||A(t),n.filter.filtersNodes())}}function sn(n,e,t,i,r,s,o,a){const c=e.serverCache;let l;const h=o?n.filter:n.filter.getIndexedFilter();if(A(t))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=h.updateFullNode(c.getNode(),f,null)}else{const f=k(t);if(!c.isCompleteForPath(t)&&Ce(t)>1)return e;const p=F(t),D=c.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?l=h.updatePriority(c.getNode(),D):l=h.updateChild(c.getNode(),f,D,p,so,null)}const u=Zs(e,l,c.isFullyInitialized()||A(t),h.filtersNodes()),d=new Ni(r,u,s);return oo(n,u,t,r,d,a)}function ni(n,e,t,i,r,s,o){const a=e.eventCache;let c,l;const h=new Ni(r,e,s);if(A(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=ft(e,l,!0,n.filter.filtersNodes());else{const u=k(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=ft(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=F(t),f=a.getNode().getImmediateChild(u);let p;if(A(d))p=i;else{const T=h.getCompleteChild(u);T!=null?Us(d)===".priority"&&T.getChild(Hs(d)).isEmpty()?p=T:p=T.updateChild(d,i):p=b.EMPTY_NODE}if(f.equals(p))c=e;else{const T=n.filter.updateChild(a.getNode(),u,p,d,h,o);c=ft(e,T,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Dr(n,e){return n.eventCache.isCompleteForChild(e)}function Lu(n,e,t,i,r,s,o){let a=e;return i.foreach((c,l)=>{const h=H(t,c);Dr(e,k(h))&&(a=ni(n,a,h,l,r,s,o))}),i.foreach((c,l)=>{const h=H(t,c);Dr(e,k(h))||(a=ni(n,a,h,l,r,s,o))}),a}function Or(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ii(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;A(t)?l=i:l=new W(null).setTree(t,i);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=Or(n,f,d);c=sn(n,c,new M(u),p,r,s,o,a)}}),l.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),T=Or(n,p,d);c=sn(n,c,new M(u),T,r,s,o,a)}}),c}function Fu(n,e,t,i,r,s,o){if(rn(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(A(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return sn(n,e,t,c.getNode().getChild(t),r,s,a,o);if(A(t)){let l=new W(null);return c.getNode().forEachChild(Ke,(h,u)=>{l=l.set(new M(h),u)}),ii(n,e,t,l,r,s,a,o)}else return e}else{let l=new W(null);return i.foreach((h,u)=>{const d=H(t,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),ii(n,e,t,l,r,s,a,o)}}function Wu(n,e,t,i,r){const s=e.serverCache,o=Zs(e,s.getNode(),s.isFullyInitialized()||A(t),s.isFiltered());return oo(n,o,t,i,so,r)}function Bu(n,e,t,i,r,s){let o;if(rn(i,t)!=null)return e;{const a=new Ni(i,e,r),c=e.eventCache.getNode();let l;if(A(t)||k(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=nn(i,Fe(e));else{const u=e.serverCache.getNode();m(u instanceof b,"serverChildren would be complete if leaf node"),h=Ti(i,u)}h=h,l=n.filter.updateFullNode(c,h,s)}else{const h=k(t);let u=Si(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=n.filter.updateChild(c,h,u,F(t),a,s):e.eventCache.getNode().hasChild(h)?l=n.filter.updateChild(c,h,b.EMPTY_NODE,F(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=nn(i,Fe(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||rn(i,O())!=null,ft(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Ei(i.getIndex()),s=su(i);this.processor_=Du(s);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(b.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(b.EMPTY_NODE,a.getNode(),null),h=new Le(c,o.isFullyInitialized(),r.filtersNodes()),u=new Le(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=mn(u,h),this.eventGenerator_=new du(this.query_)}get query(){return this.query_}}function Uu(n){return n.viewCache_.serverCache.getNode()}function ju(n,e){const t=Fe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!A(e)&&!t.getImmediateChild(k(e)).isEmpty())?t.getChild(e):null}function xr(n){return n.eventRegistrations_.length===0}function Hu(n,e){n.eventRegistrations_.push(e)}function Mr(n,e,t){const i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Lr(n,e,t,i){e.type===ce.MERGE&&e.source.queryId!==null&&(m(Fe(n.viewCache_),"We should always have a full cache before handling merges"),m(Zn(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=xu(n.processor_,r,e,t,i);return Ou(n.processor_,s.viewCache),m(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,ao(n,s.changes,s.viewCache.eventCache.getNode(),null)}function $u(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(V,(s,o)=>{i.push(et(s,o))}),t.isFullyInitialized()&&i.push(Qs(t.getNode())),ao(n,i,t.getNode(),e)}function ao(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return fu(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;class qu{constructor(){this.views=new Map}}function Gu(n){m(!on,"__referenceConstructor has already been defined"),on=n}function zu(){return m(on,"Reference.ts has not been loaded"),on}function Yu(n){return n.views.size===0}function ki(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return m(s!=null,"SyncTree gave us an op for an invalid query."),Lr(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Lr(o,e,t,i));return s}}function Ku(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=nn(t,r?i:null),c=!1;a?c=!0:i instanceof b?(a=Ti(t,i),c=!1):(a=b.EMPTY_NODE,c=!1);const l=mn(new Le(a,c,!1),new Le(i,r,!1));return new Vu(e,l)}return o}function Qu(n,e,t,i,r,s){const o=Ku(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Hu(o,t),$u(o,t)}function Xu(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const a=be(n);if(r==="default")for(const[c,l]of n.views.entries())o=o.concat(Mr(l,t,i)),xr(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=n.views.get(r);c&&(o=o.concat(Mr(c,t,i)),xr(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!be(n)&&s.push(new(zu())(e._repo,e._path)),{removed:s,events:o}}function lo(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Qe(n,e){let t=null;for(const i of n.views.values())t=t||ju(i,e);return t}function co(n,e){if(e._queryParams.loadsAllData())return yn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function uo(n,e){return co(n,e)!=null}function be(n){return yn(n)!=null}function yn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;function Ju(n){m(!an,"__referenceConstructor has already been defined"),an=n}function Zu(){return m(an,"Reference.ts has not been loaded"),an}let eh=1;class Fr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new W(null),this.pendingWriteTree_=ku(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ho(n,e,t,i,r){return mu(n.pendingWriteTree_,e,t,i,r),r?Ft(n,new Me(Js(),e,t)):[]}function Re(n,e,t=!1){const i=yu(n.pendingWriteTree_,e);if(vu(n.pendingWriteTree_,e)){let s=new W(null);return i.snap!=null?s=s.set(O(),!0):te(i.children,o=>{s=s.set(new M(o),!0)}),Ft(n,new tn(i.path,s,t))}else return[]}function vn(n,e,t){return Ft(n,new Me(Ci(),e,t))}function th(n,e,t){const i=W.fromObject(t);return Ft(n,new Nt(Ci(),e,i))}function nh(n,e){return Ft(n,new St(Ci(),e))}function ih(n,e,t){const i=Ri(n,t);if(i){const r=Ai(i),s=r.path,o=r.queryId,a=J(s,e),c=new St(bi(o),a);return Di(n,s,c)}else return[]}function ri(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||uo(o,e))){const c=Xu(o,e,t,i);Yu(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!r){const h=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(d,f)=>be(f));if(h&&!u){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const f=oh(d);for(let p=0;p<f.length;++p){const T=f[p],D=T.query,U=_o(n,T);n.listenProvider_.startListening(_t(D),ln(n,D),U.hashFn,U.onComplete)}}}!u&&l.length>0&&!i&&(h?n.listenProvider_.stopListening(_t(e),null):l.forEach(d=>{const f=n.queryToTagMap.get(En(d));n.listenProvider_.stopListening(_t(d),f)}))}ah(n,l)}return a}function rh(n,e,t,i){const r=Ri(n,i);if(r!=null){const s=Ai(r),o=s.path,a=s.queryId,c=J(o,e),l=new Me(bi(a),c,t);return Di(n,o,l)}else return[]}function sh(n,e,t,i){const r=Ri(n,i);if(r){const s=Ai(r),o=s.path,a=s.queryId,c=J(o,e),l=W.fromObject(t),h=new Nt(bi(a),c,l);return Di(n,o,h)}else return[]}function Wr(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(d,f)=>{const p=J(d,r);s=s||Qe(f,p),o=o||be(f)});let a=n.syncPointTree_.get(r);a?(o=o||be(a),s=s||Qe(a,O())):(a=new qu,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;s!=null?c=!0:(c=!1,s=b.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((f,p)=>{const T=Qe(p,O());T&&(s=s.updateImmediateChild(f,T))}));const l=uo(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=En(e);m(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=lh();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Ii(n.pendingWriteTree_,r);let u=Qu(a,e,t,h,s,c);if(!l&&!o&&!i){const d=co(a,e);u=u.concat(ch(n,e,d))}return u}function Pi(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=J(o,e),l=Qe(a,c);if(l)return l});return no(r,e,s,t,!0)}function Ft(n,e){return fo(e,n.syncPointTree_,null,Ii(n.pendingWriteTree_,O()))}function fo(n,e,t,i){if(A(n.path))return po(n,e,t,i);{const r=e.get(O());t==null&&r!=null&&(t=Qe(r,O()));let s=[];const o=k(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,h=io(i,o);s=s.concat(fo(a,c,l,h))}return r&&(s=s.concat(ki(r,n,i,t))),s}}function po(n,e,t,i){const r=e.get(O());t==null&&r!=null&&(t=Qe(r,O()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=io(i,o),h=n.operationForChild(o);h&&(s=s.concat(po(h,a,c,l)))}),r&&(s=s.concat(ki(r,n,i,t))),s}function _o(n,e){const t=e.query,i=ln(n,t);return{hashFn:()=>(Uu(e)||b.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?ih(n,t._path,i):nh(n,t._path);{const s=rc(r,t);return ri(n,t,null,s)}}}}function ln(n,e){const t=En(e);return n.queryToTagMap.get(t)}function En(n){return n._path.toString()+"$"+n._queryIdentifier}function Ri(n,e){return n.tagToQueryMap.get(e)}function Ai(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new M(n.substr(0,e))}}function Di(n,e,t){const i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const r=Ii(n.pendingWriteTree_,e);return ki(i,t,r,null)}function oh(n){return n.fold((e,t,i)=>{if(t&&be(t))return[yn(t)];{let r=[];return t&&(r=lo(t)),te(i,(s,o)=>{r=r.concat(o)}),r}})}function _t(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Zu())(n._repo,n._path):n}function ah(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=En(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function lh(){return eh++}function ch(n,e,t){const i=e._path,r=ln(n,e),s=_o(n,t),o=n.listenProvider_.startListening(_t(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)m(!be(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!A(l)&&h&&be(h))return[yn(h).query];{let d=[];return h&&(d=d.concat(lo(h).map(f=>f.query))),te(u,(f,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const h=c[l];n.listenProvider_.stopListening(_t(h),ln(n,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Oi(t)}node(){return this.node_}}class xi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=H(this.path_,e);return new xi(this.syncTree_,t)}node(){return Pi(this.syncTree_,this.path_)}}const uh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Br=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return hh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return dh(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},hh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},dh=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const r=e.node();if(m(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},fh=function(n,e,t,i){return Mi(e,new xi(t,n),i)},go=function(n,e,t){return Mi(n,new Oi(e),t)};function Mi(n,e,t){const i=n.getPriority().val(),r=Br(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,a=Br(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new $(a,z(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new $(r))),o.forEachChild(V,(a,c)=>{const l=Mi(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Fi(n,e){let t=e instanceof M?e:new M(e),i=n,r=k(t);for(;r!==null;){const s=Je(i.node.children,r)||{children:{},childCount:0};i=new Li(r,i,s),t=F(t),r=k(t)}return i}function st(n){return n.node.value}function mo(n,e){n.node.value=e,si(n)}function yo(n){return n.node.childCount>0}function ph(n){return st(n)===void 0&&!yo(n)}function wn(n,e){te(n.node.children,(t,i)=>{e(new Li(t,n,i))})}function vo(n,e,t,i){t&&!i&&e(n),wn(n,r=>{vo(r,e,!0,i)}),t&&i&&e(n)}function _h(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Wt(n){return new M(n.parent===null?n.name:Wt(n.parent)+"/"+n.name)}function si(n){n.parent!==null&&gh(n.parent,n.name,n)}function gh(n,e,t){const i=ph(t),r=ge(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,si(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,si(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=/[\[\].#$\/\u0000-\u001F\u007F]/,yh=/[\[\].#$\u0000-\u001F\u007F]/,Fn=10*1024*1024,Eo=function(n){return typeof n=="string"&&n.length!==0&&!mh.test(n)},wo=function(n){return typeof n=="string"&&n.length!==0&&!yh.test(n)},vh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wo(n)},Eh=function(n,e,t,i){i&&e===void 0||Wi(hi(n,"value"),e,t)},Wi=function(n,e,t){const i=t instanceof M?new Fc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ke(i));if(typeof e=="function")throw new Error(n+"contains a function "+ke(i)+" with contents = "+e.toString());if(Es(e))throw new Error(n+"contains "+e.toString()+" "+ke(i));if(typeof e=="string"&&e.length>Fn/3&&_n(e)>Fn)throw new Error(n+"contains a string greater than "+Fn+" utf8 bytes "+ke(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(te(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Eo(o)))throw new Error(n+" contains an invalid key ("+o+") "+ke(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Wc(i,o),Wi(n,a,i),Bc(i)}),r&&s)throw new Error(n+' contains ".value" child '+ke(i)+" in addition to actual children.")}},Co=function(n,e,t,i){if(!(i&&t===void 0)&&!wo(t))throw new Error(hi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wh=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Co(n,e,t,i)},Ch=function(n,e){if(k(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},bh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Eo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!vh(t))throw new Error(hi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bi(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!mi(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function bo(n,e,t){Bi(n,t),Io(n,i=>mi(i,e))}function _e(n,e,t){Bi(n,t),Io(n,i=>le(i,e)||le(e,i))}function Io(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(Th(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Th(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ae&&Y("event: "+t.toString()),rt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh="repo_interrupt",Nh=25;class kh{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ih,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=en(),this.transactionQueueTree_=new Li,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ph(n,e,t){if(n.stats_=_i(n.repoInfo_),n.forceRestClient_||lc())n.server_=new Zt(n.repoInfo_,(i,r,s,o)=>{Vr(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ur(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{G(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new fe(n.repoInfo_,e,(i,r,s,o)=>{Vr(n,i,r,s,o)},i=>{Ur(n,i)},i=>{Ah(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=fc(n.repoInfo_,()=>new hu(n.stats_,n.server_)),n.infoData_=new ou,n.infoSyncTree_=new Fr({startListening:(i,r,s,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=vn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ui(n,"connected",!1),n.serverSyncTree_=new Fr({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,c)=>{const l=o(a,c);_e(n.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function Rh(n){const t=n.infoData_.getNode(new M(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vi(n){return uh({timestamp:Rh(n)})}function Vr(n,e,t,i,r){n.dataUpdateCount++;const s=new M(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=zt(t,l=>z(l));o=sh(n.serverSyncTree_,s,c,r)}else{const c=z(t);o=rh(n.serverSyncTree_,s,c,r)}else if(i){const c=zt(t,l=>z(l));o=th(n.serverSyncTree_,s,c)}else{const c=z(t);o=vn(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Cn(n,s)),_e(n.eventQueue_,a,o)}function Ur(n,e){Ui(n,"connected",e),e===!1&&Oh(n)}function Ah(n,e){te(e,(t,i)=>{Ui(n,t,i)})}function Ui(n,e,t){const i=new M("/.info/"+e),r=z(t);n.infoData_.updateSnapshot(i,r);const s=vn(n.infoSyncTree_,i,r);_e(n.eventQueue_,i,s)}function To(n){return n.nextWriteId_++}function Dh(n,e,t,i,r){ji(n,"set",{path:e.toString(),value:t,priority:i});const s=Vi(n),o=z(t,i),a=Pi(n.serverSyncTree_,e),c=go(o,a,s),l=To(n),h=ho(n.serverSyncTree_,e,c,l,!0);Bi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||ee("set at "+e+" failed: "+d);const T=Re(n.serverSyncTree_,l,!p);_e(n.eventQueue_,e,T),Lh(n,r,d,f)});const u=Ro(n,e);Cn(n,u),_e(n.eventQueue_,u,[])}function Oh(n){ji(n,"onDisconnectEvents");const e=Vi(n),t=en();Jn(n.onDisconnect_,O(),(r,s)=>{const o=fh(r,s,n.serverSyncTree_,e);Xs(t,r,o)});let i=[];Jn(t,O(),(r,s)=>{i=i.concat(vn(n.serverSyncTree_,r,s));const o=Ro(n,r);Cn(n,o)}),n.onDisconnect_=en(),_e(n.eventQueue_,O(),i)}function xh(n,e,t){let i;k(e._path)===".info"?i=Wr(n.infoSyncTree_,e,t):i=Wr(n.serverSyncTree_,e,t),bo(n.eventQueue_,e._path,i)}function jr(n,e,t){let i;k(e._path)===".info"?i=ri(n.infoSyncTree_,e,t):i=ri(n.serverSyncTree_,e,t),bo(n.eventQueue_,e._path,i)}function Mh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Sh)}function ji(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function Lh(n,e,t,i){e&&rt(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function So(n,e,t){return Pi(n.serverSyncTree_,e,t)||b.EMPTY_NODE}function Hi(n,e=n.transactionQueueTree_){if(e||bn(n,e),st(e)){const t=ko(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&Fh(n,Wt(e),t)}else yo(e)&&wn(e,t=>{Hi(n,t)})}function Fh(n,e,t){const i=t.map(l=>l.currentWriteId),r=So(n,e,i);let s=r;const o=r.hash();for(let l=0;l<t.length;l++){const h=t[l];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=J(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{ji(n,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(Re(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();bn(n,Fi(n.transactionQueueTree_,e)),Hi(n,n.transactionQueueTree_),_e(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)rt(u[d])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ee("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}Cn(n,e)}},o)}function Cn(n,e){const t=No(n,e),i=Wt(t),r=ko(n,t);return Wh(n,r,i),i}function Wh(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=J(t,c.path);let h=!1,u;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,r=r.concat(Re(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Nh)h=!0,u="maxretry",r=r.concat(Re(n.serverSyncTree_,c.currentWriteId,!0));else{const d=So(n,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Wi("transaction failed: Data returned ",f,c.path);let p=z(f);typeof f=="object"&&f!=null&&ge(f,".priority")||(p=p.updatePriority(d.getPriority()));const D=c.currentWriteId,U=Vi(n),w=go(p,d,U);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=w,c.currentWriteId=To(n),o.splice(o.indexOf(D),1),r=r.concat(ho(n.serverSyncTree_,c.path,w,c.currentWriteId,c.applyLocally)),r=r.concat(Re(n.serverSyncTree_,D,!0))}else h=!0,u="nodata",r=r.concat(Re(n.serverSyncTree_,c.currentWriteId,!0))}_e(n.eventQueue_,t,r),r=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}bn(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)rt(i[a]);Hi(n,n.transactionQueueTree_)}function No(n,e){let t,i=n.transactionQueueTree_;for(t=k(e);t!==null&&st(i)===void 0;)i=Fi(i,t),e=F(e),t=k(e);return i}function ko(n,e){const t=[];return Po(n,e,t),t.sort((i,r)=>i.order-r.order),t}function Po(n,e,t){const i=st(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);wn(e,r=>{Po(n,r,t)})}function bn(n,e){const t=st(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,mo(e,t.length>0?t:void 0)}wn(e,i=>{bn(n,i)})}function Ro(n,e){const t=Wt(No(n,e)),i=Fi(n.transactionQueueTree_,e);return _h(i,r=>{Wn(n,r)}),Wn(n,i),vo(i,r=>{Wn(n,r)}),t}function Wn(n,e){const t=st(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Re(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?mo(e,void 0):t.length=s+1,_e(n.eventQueue_,Wt(e),r);for(let o=0;o<i.length;o++)rt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Vh(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ee(`Invalid query segment '${t}' in query '${n}'`)}return e}const Hr=function(n,e){const t=Uh(n),i=t.namespace;t.domain==="firebase.com"&&pe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&pe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Zl();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ds(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new M(t.pathString)}},Uh=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(r=Bh(n.substring(h,u)));const d=Vh(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+G(this.snapshot.exportVal())}}class Do{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return A(this._path)?null:Us(this._path)}get ref(){return new me(this._repo,this._path)}get _queryIdentifier(){const e=Sr(this._queryParams),t=fi(e);return t==="{}"?"default":t}get _queryObject(){return Sr(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof $i))return!1;const t=this._repo===e._repo,i=mi(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lc(this._path)}}class me extends $i{constructor(e,t){super(e,t,new wi,!1)}get parent(){const e=Hs(this._path);return e===null?null:new me(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class kt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new M(e),i=cn(this.ref,e);return new kt(this._node.getChild(t),i,V)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new kt(r,cn(this.ref,i),V)))}hasChild(e){const t=new M(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hh(n,e){return n=Ot(n),n._checkNotDeleted("ref"),e!==void 0?cn(n._root,e):n._root}function cn(n,e){return n=Ot(n),k(n._path)===null?wh("child","path",e,!1):Co("child","path",e,!1),new me(n._repo,H(n._path,e))}function $h(n,e){n=Ot(n),Ch("set",n._path),Eh("set",e,n._path,!1);const t=new pn;return Dh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Ao("value",this,new kt(e.snapshotNode,new me(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Do(this,e,t):null}matches(e){return e instanceof qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Do(this,e,t):null}createEvent(e,t){m(e.childName!=null,"Child events should have a childName.");const i=cn(new me(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Ao(e.type,this,new kt(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Gi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function qh(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const c=t,l=(h,u)=>{jr(n._repo,n,a),c(h,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}const o=new jh(t,s||void 0),a=e==="value"?new qi(o):new Gi(e,o);return xh(n._repo,n,a),()=>jr(n._repo,n,a)}function Gh(n,e,t,i){return qh(n,"value",e,t,i)}Gu(me);Ju(me);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="FIREBASE_DATABASE_EMULATOR_HOST",oi={};let Yh=!1;function Kh(n,e,t,i){n.repoInfo_=new Ds(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Qh(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||pe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Hr(s,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[zh]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Hr(s,r),a=o.repoInfo):c=!o.repoInfo.secure;const h=r&&c?new Ye(Ye.OWNER):new uc(n.name,n.options,e);bh("Invalid Firebase Database URL",o),A(o.path)||pe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Jh(a,n,h,new cc(n.name,t));return new Zh(u,n)}function Xh(n,e){const t=oi[e];(!t||t[n.key]!==n)&&pe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Mh(n),delete t[n.key]}function Jh(n,e,t,i){let r=oi[e.name];r||(r={},oi[e.name]=r);let s=r[n.toURLString()];return s&&pe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new kh(n,Yh,t,i),r[n.toURLString()]=s,s}class Zh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ph(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new me(this._repo,O())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Xh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pe("Cannot call "+e+" on a deleted database.")}}function ed(n=Wl(),e){const t=xl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ta("database");i&&td(t,...i)}return t}function td(n,e,t,i={}){n=Ot(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&pe("Cannot call useEmulator() after instance has already been initialized.");const r=n._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&pe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ye(Ye.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Na(i.mockUserToken,n.app.options.projectId);s=new Ye(o)}Kh(r,e,t,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){Yl(Fl),Kt(new Et("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Qh(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),Ge(cr,ur,n),Ge(cr,ur,"esm2017")}fe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};fe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};nd();var id="firebase",rd="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(id,rd,"app");var Xe,At;class sd{constructor(e){ye(this,Xe,void 0);ye(this,At,e=>{});Q(this,"set",e=>$h(Ve(this,Xe),e));Q(this,"onData",e=>{Gh(Ve(this,Xe),t=>{Ve(this,At).call(this,"open"),t.exists()&&e(t.val())})});Q(this,"onNetworkChange",e=>{Sn(this,At,e)});Sn(this,Xe,Hh(ed(ps(e.firebase)),e.docPath))}}Xe=new WeakMap,At=new WeakMap;const od=new URLSearchParams(window.location.search);let gt=od.get("session");const zi=gt===null;gt===null&&(gt=crypto.randomUUID(),window.history.replaceState("","",`${window.location.href}?session=${gt}`));document.querySelector("#role").innerText=zi?"Presenter":"Viewer";const ad=new ci("video",{id:"76979871",width:700,controls:zi,autopause:!1}),ld=new _a(new sd({docPath:`timing-source/${gt}`,firebase:{apiKey:"AIzaSyB_ppk9it8hzR8AhprHYPM3dc9Z84rf7NI",projectId:"to-poc"}})),ai=new zo(ld,0,61),cd=new Promise(n=>ai.addEventListener("readystatechange",()=>{ai.readyState==="open"&&n()}));cd.then(()=>{ad.setTimingSrc(ai,{role:zi?"controller":"viewer"})});
