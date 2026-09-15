(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(o){if(o.ep)return;o.ep=!0;const f=i(o);fetch(o.href,f)}})();var Eh={exports:{}},go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function SS(){if(Lv)return go;Lv=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,o,f){var d=null;if(f!==void 0&&(d=""+f),o.key!==void 0&&(d=""+o.key),"key"in o){f={};for(var p in o)p!=="key"&&(f[p]=o[p])}else f=o;return o=f.ref,{$$typeof:l,type:s,key:d,ref:o!==void 0?o:null,props:f}}return go.Fragment=t,go.jsx=i,go.jsxs=i,go}var Ov;function ES(){return Ov||(Ov=1,Eh.exports=SS()),Eh.exports}var h=ES(),Th={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv;function TS(){if(Pv)return _t;Pv=1;var l=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.for("react.view_transition"),E=Symbol.iterator;function A(I){return I===null||typeof I!="object"?null:(I=E&&I[E]||I["@@iterator"],typeof I=="function"?I:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,M={};function U(I,ae,X){this.props=I,this.context=ae,this.refs=M,this.updater=X||N}U.prototype.isReactComponent={},U.prototype.setState=function(I,ae){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ae,"setState")},U.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function B(){}B.prototype=U.prototype;function C(I,ae,X){this.props=I,this.context=ae,this.refs=M,this.updater=X||N}var O=C.prototype=new B;O.constructor=C,b(O,U.prototype),O.isPureReactComponent=!0;var D=Array.isArray;function z(){}var S={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function j(I,ae,X){var V=X.ref;return{$$typeof:l,type:I,key:ae,ref:V!==void 0?V:null,props:X}}function k(I,ae){return j(I.type,ae,I.props)}function Y(I){return typeof I=="object"&&I!==null&&I.$$typeof===l}function me(I){var ae={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(X){return ae[X]})}var ve=/\/+/g;function te(I,ae){return typeof I=="object"&&I!==null&&I.key!=null?me(""+I.key):ae.toString(36)}function W(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(ae){I.status==="pending"&&(I.status="fulfilled",I.value=ae)},function(ae){I.status==="pending"&&(I.status="rejected",I.reason=ae)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function Z(I,ae,X,V,ee){var Se=typeof I;(Se==="undefined"||Se==="boolean")&&(I=null);var we=!1;if(I===null)we=!0;else switch(Se){case"bigint":case"string":case"number":we=!0;break;case"object":switch(I.$$typeof){case l:case t:we=!0;break;case y:return we=I._init,Z(we(I._payload),ae,X,V,ee)}}if(we)return ee=ee(I),we=V===""?"."+te(I,0):V,D(ee)?(X="",we!=null&&(X=we.replace(ve,"$&/")+"/"),Z(ee,ae,X,"",function(Pe){return Pe})):ee!=null&&(Y(ee)&&(ee=k(ee,X+(ee.key==null||I&&I.key===ee.key?"":(""+ee.key).replace(ve,"$&/")+"/")+we)),ae.push(ee)),1;we=0;var ge=V===""?".":V+":";if(D(I))for(var Ce=0;Ce<I.length;Ce++)V=I[Ce],Se=ge+te(V,Ce),we+=Z(V,ae,X,Se,ee);else if(Ce=A(I),typeof Ce=="function")for(I=Ce.call(I),Ce=0;!(V=I.next()).done;)V=V.value,Se=ge+te(V,Ce++),we+=Z(V,ae,X,Se,ee);else if(Se==="object"){if(typeof I.then=="function")return Z(W(I),ae,X,V,ee);throw ae=String(I),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return we}function J(I,ae,X){if(I==null)return I;var V=[],ee=0;return Z(I,V,"","",function(Se){return ae.call(X,Se,ee++)}),V}function Me(I){if(I._status===-1){var ae=I._result,X=ae();X.then(function(V){(I._status===0||I._status===-1)&&(I._status=1,I._result=V,X.status===void 0&&(X.status="fulfilled",X.value=V))},function(V){(I._status===0||I._status===-1)&&(I._status=2,I._result=V,X.status===void 0&&(X.status="rejected",X.reason=V))}),I._status===-1&&(I._status=0,I._result=X)}if(I._status===1)return I._result.default;throw I._result}var H=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function F(I){var ae=S.T,X={};X.types=ae!==null?ae.types:null,S.T=X;try{var V=I(),ee=S.S;ee!==null&&ee(X,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(z,H)}catch(Se){H(Se)}finally{ae!==null&&X.types!==null&&(ae.types=X.types),S.T=ae}}function _e(I){var ae=S.T;if(ae!==null){var X=ae.types;X===null?ae.types=[I]:X.indexOf(I)===-1&&X.push(I)}else F(_e.bind(null,I))}var Ne={map:J,forEach:function(I,ae,X){J(I,function(){ae.apply(this,arguments)},X)},count:function(I){var ae=0;return J(I,function(){ae++}),ae},toArray:function(I){return J(I,function(ae){return ae})||[]},only:function(I){if(!Y(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return _t.Activity=_,_t.Children=Ne,_t.Component=U,_t.Fragment=i,_t.Profiler=o,_t.PureComponent=C,_t.StrictMode=s,_t.Suspense=m,_t.ViewTransition=v,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,_t.__COMPILER_RUNTIME={__proto__:null,c:function(I){return S.H.useMemoCache(I)}},_t.addTransitionType=_e,_t.cache=function(I){return function(){return I.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(I,ae,X){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var V=b({},I.props),ee=I.key;if(ae!=null)for(Se in ae.key!==void 0&&(ee=""+ae.key),ae)!L.call(ae,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&ae.ref===void 0||(V[Se]=ae[Se]);var Se=arguments.length-2;if(Se===1)V.children=X;else if(1<Se){for(var we=Array(Se),ge=0;ge<Se;ge++)we[ge]=arguments[ge+2];V.children=we}return j(I.type,ee,V)},_t.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},_t.createElement=function(I,ae,X){var V,ee={},Se=null;if(ae!=null)for(V in ae.key!==void 0&&(Se=""+ae.key),ae)L.call(ae,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ee[V]=ae[V]);var we=arguments.length-2;if(we===1)ee.children=X;else if(1<we){for(var ge=Array(we),Ce=0;Ce<we;Ce++)ge[Ce]=arguments[Ce+2];ee.children=ge}if(I&&I.defaultProps)for(V in we=I.defaultProps,we)ee[V]===void 0&&(ee[V]=we[V]);return j(I,Se,ee)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(I){return{$$typeof:p,render:I}},_t.isValidElement=Y,_t.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:Me}},_t.memo=function(I,ae){return{$$typeof:g,type:I,compare:ae===void 0?null:ae}},_t.startTransition=F,_t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},_t.use=function(I){return S.H.use(I)},_t.useActionState=function(I,ae,X){return S.H.useActionState(I,ae,X)},_t.useCallback=function(I,ae){return S.H.useCallback(I,ae)},_t.useContext=function(I){return S.H.useContext(I)},_t.useDebugValue=function(){},_t.useDeferredValue=function(I,ae){return S.H.useDeferredValue(I,ae)},_t.useEffect=function(I,ae){return S.H.useEffect(I,ae)},_t.useEffectEvent=function(I){return S.H.useEffectEvent(I)},_t.useId=function(){return S.H.useId()},_t.useImperativeHandle=function(I,ae,X){return S.H.useImperativeHandle(I,ae,X)},_t.useInsertionEffect=function(I,ae){return S.H.useInsertionEffect(I,ae)},_t.useLayoutEffect=function(I,ae){return S.H.useLayoutEffect(I,ae)},_t.useMemo=function(I,ae){return S.H.useMemo(I,ae)},_t.useOptimistic=function(I,ae){return S.H.useOptimistic(I,ae)},_t.useReducer=function(I,ae,X){return S.H.useReducer(I,ae,X)},_t.useRef=function(I){return S.H.useRef(I)},_t.useState=function(I){return S.H.useState(I)},_t.useSyncExternalStore=function(I,ae,X){return S.H.useSyncExternalStore(I,ae,X)},_t.useTransition=function(){return S.H.useTransition()},_t.version="19.3.0",_t}var Iv;function rm(){return Iv||(Iv=1,Th.exports=TS()),Th.exports}var Qe=rm(),Ah={exports:{}},xo={},wh={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv;function AS(){return zv||(zv=1,(function(l){function t(W,Z){var J=W.length;W.push(Z);e:for(;0<J;){var Me=J-1>>>1,H=W[Me];if(0<o(H,Z))W[Me]=Z,W[J]=H,J=Me;else break e}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var Z=W[0],J=W.pop();if(J!==Z){W[0]=J;e:for(var Me=0,H=W.length,F=H>>>1;Me<F;){var _e=2*(Me+1)-1,Ne=W[_e],I=_e+1,ae=W[I];if(0>o(Ne,J))I<H&&0>o(ae,Ne)?(W[Me]=ae,W[I]=J,Me=I):(W[Me]=Ne,W[_e]=J,Me=_e);else if(I<H&&0>o(ae,J))W[Me]=ae,W[I]=J,Me=I;else break e}}return Z}function o(W,Z){var J=W.sortIndex-Z.sortIndex;return J!==0?J:W.id-Z.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();l.unstable_now=function(){return d.now()-p}}var m=[],g=[],y=1,_=null,v=3,E=!1,A=!1,N=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function C(W){for(var Z=i(g);Z!==null;){if(Z.callback===null)s(g);else if(Z.startTime<=W)s(g),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(g)}}function O(W){if(N=!1,C(W),!A)if(i(m)!==null)A=!0,D||(D=!0,Y());else{var Z=i(g);Z!==null&&te(O,Z.startTime-W)}}var D=!1,z=-1,S=5,L=-1;function j(){return b?!0:!(l.unstable_now()-L<S)}function k(){if(b=!1,D){var W=l.unstable_now();L=W;var Z=!0;try{e:{A=!1,N&&(N=!1,U(z),z=-1),E=!0;var J=v;try{t:{for(C(W),_=i(m);_!==null&&!(_.expirationTime>W&&j());){var Me=_.callback;if(typeof Me=="function"){_.callback=null,v=_.priorityLevel;var H=Me(_.expirationTime<=W);if(W=l.unstable_now(),typeof H=="function"){_.callback=H,C(W),Z=!0;break t}_===i(m)&&s(m),C(W)}else s(m);_=i(m)}if(_!==null)Z=!0;else{var F=i(g);F!==null&&te(O,F.startTime-W),Z=!1}}break e}finally{_=null,v=J,E=!1}Z=void 0}}finally{Z?Y():D=!1}}}var Y;if(typeof B=="function")Y=function(){B(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ve=me.port2;me.port1.onmessage=k,Y=function(){ve.postMessage(null)}}else Y=function(){M(k,0)};function te(W,Z){z=M(function(){W(l.unstable_now())},Z)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(W){W.callback=null},l.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<W?Math.floor(1e3/W):5},l.unstable_getCurrentPriorityLevel=function(){return v},l.unstable_next=function(W){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var J=v;v=Z;try{return W()}finally{v=J}},l.unstable_requestPaint=function(){b=!0},l.unstable_runWithPriority=function(W,Z){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var J=v;v=W;try{return Z()}finally{v=J}},l.unstable_scheduleCallback=function(W,Z,J){var Me=l.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Me+J:Me):J=Me,W){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=J+H,W={id:y++,callback:Z,priorityLevel:W,startTime:J,expirationTime:H,sortIndex:-1},J>Me?(W.sortIndex=J,t(g,W),i(m)===null&&W===i(g)&&(N?(U(z),z=-1):N=!0,te(O,J-Me))):(W.sortIndex=H,t(m,W),A||E||(A=!0,D||(D=!0,Y()))),W},l.unstable_shouldYield=j,l.unstable_wrapCallback=function(W){var Z=v;return function(){var J=v;v=Z;try{return W.apply(this,arguments)}finally{v=J}}}})(Rh)),Rh}var Fv;function wS(){return Fv||(Fv=1,wh.exports=AS()),wh.exports}var Ch={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv;function RS(){if(Bv)return zn;Bv=1;var l=rm();function t(y){var _="https://react.dev/errors/"+y;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)_+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),d=Symbol.for("react.optimistic_key");function p(y,_,v){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:E===d?d:""+E,children:y,containerInfo:_,implementation:v}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,_){if(y==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,zn.browser=function(y){return{$$typeof:f,_reason:y}},zn.createPortal=function(y,_){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return p(y,_,null,v)},zn.flushSync=function(y){var _=m.T,v=s.p;try{if(m.T=null,s.p=2,y)return y()}finally{m.T=_,s.p=v,s.d.f()}},zn.preconnect=function(y,_){typeof y=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,s.d.C(y,_))},zn.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},zn.preinit=function(y,_){if(typeof y=="string"&&_&&typeof _.as=="string"){var v=_.as,E=g(v,_.crossOrigin),A=typeof _.integrity=="string"?_.integrity:void 0,N=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;v==="style"?s.d.S(y,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:E,integrity:A,fetchPriority:N}):v==="script"&&s.d.X(y,{crossOrigin:E,integrity:A,fetchPriority:N,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},zn.preinitModule=function(y,_){if(typeof y=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var v=g(_.as,_.crossOrigin);s.d.M(y,{crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&s.d.M(y)},zn.preload=function(y,_){if(typeof y=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var v=_.as,E=g(v,_.crossOrigin);s.d.L(y,v,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},zn.preloadModule=function(y,_){if(typeof y=="string")if(_){var v=g(_.as,_.crossOrigin);s.d.m(y,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:v,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else s.d.m(y)},zn.requestFormReset=function(y){s.d.r(y)},zn.unstable_batchedUpdates=function(y,_){return y(_)},zn.useFormState=function(y,_,v){return m.H.useFormState(y,_,v)},zn.useFormStatus=function(){return m.H.useHostTransitionStatus()},zn.version="19.3.0",zn}var Hv;function CS(){if(Hv)return Ch.exports;Hv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Ch.exports=RS(),Ch.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function NS(){if(Gv)return xo;Gv=1;var l=wS(),t=rm(),i=CS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(s(188))}function g(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return m(c),e;if(u===r)return m(c),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=u;else{for(var x=!1,w=c.child;w;){if(w===a){x=!0,a=c,r=u;break}if(w===r){x=!0,r=c,a=u;break}w=w.sibling}if(!x){for(w=u.child;w;){if(w===a){x=!0,a=u,r=c;break}if(w===r){x=!0,r=u,a=c;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,r,c,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,r,c,u))return!0;e=e.sibling}return!1}function v(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function E(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function A(e){var n=[null,null],a=v(e);return a===null||N(n,e,a.child,{foundSelf:!1}),n}function N(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&N(e,n,a.child,r))return!0;a=a.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var M=null,U=null;function B(e,n,a){return e===a?!0:e===n?(M=e,!0):!1}function C(e,n,a){return e===a?(U=e,!1):e===n?(U!==null&&(M=e),!0):!1}function O(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var u=n;u;u=a(u))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var z=Object.assign,S=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),te=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),Me=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),_e=Symbol.for("react.legacy_hidden"),Ne=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ae=Symbol.for("react.recoverable"),X=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case me:return"Profiler";case Y:return"StrictMode";case Z:return"Suspense";case J:return"SuspenseList";case F:return"Activity";case I:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case te:return e.displayName||"Context";case ve:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Me:return n=e.displayName||null,n!==null?n:Se(e.type)||"Memo";case H:n=e._payload,e=e._init;try{return Se(e(n))}catch{}}return null}var we=Array.isArray,ge=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Pe={pending:!1,data:null,method:null,action:null},Be=[],ke=-1;function Ve(e){return{current:e}}function Ue(e){0>ke||(e.current=Be[ke],Be[ke]=null,ke--)}function Oe(e,n){ke++,Be[ke]=e.current,e.current=n}var ot=Ve(null),ft=Ve(null),mt=Ve(null),wt=Ve(null);function K(e,n){switch(Oe(mt,n),Oe(ft,e),Oe(ot,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vx(n),e=jx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ue(ot),Oe(ot,e)}function Lt(){Ue(ot),Ue(ft),Ue(mt)}function gt(e){var n=e.memoizedState;n!==null&&(Xs._currentValue=n.memoizedState,Oe(wt,e)),n=ot.current;var a=jx(n,e.type);n!==a&&(Oe(ft,e),Oe(ot,a))}function P(e){ft.current===e&&(Ue(ot),Ue(ft)),wt.current===e&&(Ue(wt),Xs._currentValue=Pe)}var T,ie;function oe(e){if(T===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T+e+ie}var xe=!1;function De(e,n){if(!e||xe)return"";xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Ae=function(){throw Error()};if(Object.defineProperty(Ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ae,[])}catch(je){var ne=je}Reflect.construct(e,[],Ae)}else{try{Ae.call()}catch(je){ne=je}Ae=!1;try{var fe=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ae=!0,new e}finally{Ae&&(fe!==void 0?Object.defineProperty(e.prototype,"props",fe):delete e.prototype.props)}}}else{try{throw Error()}catch(je){ne=je}(Ae=e())&&typeof Ae.catch=="function"&&Ae.catch(function(){})}}catch(je){if(je&&ne&&typeof je.stack=="string")return[je.stack,ne.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),x=u[0],w=u[1];if(x&&w){var G=x.split(`
`),se=w.split(`
`);for(c=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;c<se.length&&!se[c].includes("DetermineComponentFrameRoot");)c++;if(r===G.length||c===se.length)for(r=G.length-1,c=se.length-1;1<=r&&0<=c&&G[r]!==se[c];)c--;for(;1<=r&&0<=c;r--,c--)if(G[r]!==se[c]){if(r!==1||c!==1)do if(r--,c--,0>c||G[r]!==se[c]){var pe=`
`+G[r].replace(" at new "," at ");return e.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",e.displayName)),pe}while(1<=r&&0<=c);break}}}finally{xe=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function ze(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return oe("Activity");case 30:return oe("ViewTransition");default:return""}}function ye(e){try{var n="",a=null;do n+=ze(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var be=Object.prototype.hasOwnProperty,Le=l.unstable_scheduleCallback,$e=l.unstable_cancelCallback,He=l.unstable_shouldYield,Fe=l.unstable_requestPaint,qe=l.unstable_now,st=l.unstable_getCurrentPriorityLevel,dt=l.unstable_ImmediatePriority,Q=l.unstable_UserBlockingPriority,Ie=l.unstable_NormalPriority,Te=l.unstable_LowPriority,Ge=l.unstable_IdlePriority,Xe=l.log,Re=l.unstable_setDisableYieldValue,it=null,Ye=null;function Vt(e){if(typeof Xe=="function"&&Re(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(it,e)}catch{}}var Et=Math.clz32?Math.clz32:Ju,xi=Math.log,vi=Math.LN2;function Ju(e){return e>>>=0,e===0?32:31-(xi(e)/vi|0)|0}var ls=256,Sr=262144,Ia=4194304;function fa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Er(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,u=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~u,r!==0?c=fa(r):(x&=w,x!==0?c=fa(x):a||(a=w&~e,a!==0&&(c=fa(a))))):(w=r&~u,w!==0?c=fa(w):x!==0?c=fa(x):a||(a=r&~e,a!==0&&(c=fa(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function za(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ji(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Et(a),c=1<<r;n|=e[r],a&=~c}return n}function yl(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bl(){var e=Ia;return Ia<<=1,(Ia&62914560)===0&&(Ia=4194304),e}function os(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Po(e,n,a,r,c,u){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var w=e.entanglements,G=e.expirationTimes,se=e.hiddenUpdates;for(a=x&~a;0<a;){var pe=31-Et(a),Ae=1<<pe;w[pe]=0,G[pe]=-1;var ne=se[pe];if(ne!==null)for(se[pe]=null,pe=0;pe<ne.length;pe++){var fe=ne[pe];fe!==null&&(fe.lane&=-536870913)}a&=~Ae}r!==0&&Tr(e,r,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(x&~n))}function Tr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Et(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ml(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Et(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function Sl(e,n){var a=n&-n;return a=(a&42)!==0?1:El(a),(a&(e.suspendedLanes|n))!==0?0:a}function El(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Tl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Io(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:Av(e.type))}function zo(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var R=Math.random().toString(36).slice(2),$="__reactFiber$"+R,de="__reactProps$"+R,ue="__reactContainer$"+R,he="__reactEvents$"+R,Ze="__reactListeners$"+R,et="__reactHandles$"+R,We="__reactResources$"+R,nt="__reactMarker$"+R,lt="__reactLoad$"+R;function xt(e){delete e[$],delete e[de],delete e[Ze],delete e[et]}function vt(e){var n;if(n=e[$])return n;for(var a=e.parentNode;a;){if(n=a[ue]||a[$]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=sv(e);e!==null;){if(a=e[$])return a;e=sv(e)}return n}e=a,a=e.parentNode}return null}function rt(e){if(e=e[$]||e[ue]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Ft(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Jt(e){var n=e[We];return n||(n=e[We]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[nt]=!0}function Xt(e){e[lt]=void 0}var bn=new Set,Je={};function dn(e,n){Tt(e,n),Tt(e+"Capture",n)}function Tt(e,n){for(Je[e]=n,e=0;e<n.length;e++)bn.add(n[e])}var Kn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ri={},Di={};function Fa(e){return be.call(Di,e)?!0:be.call(ri,e)?!1:Kn.test(e)?Di[e]=!0:(ri[e]=!0,!1)}var ct=!1;function rn(){var e=ct;return ct=!1,e}function si(e,n,a){if(Fa(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Tn(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function pn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Al(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jy(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,u.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $u(e){if(!e._valueTracker){var n=Al(e)?"checked":"value";e._valueTracker=jy(e,n,""+e[n])}}function Nm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Al(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var ky=/[\n"\\]/g;function _i(e){return e.replace(ky,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ef(e,n,a,r,c,u,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pn(n)):e.value!==""+pn(n)&&(e.value=""+pn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?x==="number"&&e.value==n?tf(e,pn(e.value)):tf(e,pn(n)):a!=null?tf(e,pn(a)):r!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+pn(w):e.removeAttribute("name")}function Dm(e,n,a,r,c,u,x,w){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){$u(e);return}a=a!=null?""+pn(a):"",n=n!=null?""+pn(n):a,w||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),$u(e)}function tf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function cs(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+pn(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Um(e,n,a){if(n!=null&&(n=""+pn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pn(a):""}function Lm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(we(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=pn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),$u(e)}function us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Om(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Xy.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Pm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",ct=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(Om(e,c,r),ct=!0)}else for(var u in n)n.hasOwnProperty(u)&&Om(e,u,n[u])}function nf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(e){return Wy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xi(){}var af=null;function rf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,ds=null;function Im(e){var n=rt(e);if(n&&(e=n.stateNode)){var a=e[de]||null;e:switch(e=n.stateNode,n.type){case"input":if(ef(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_i(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[de]||null;if(!c)throw Error(s(90));ef(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Nm(r)}break e;case"textarea":Um(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&cs(e,!!a.multiple,n,!1)}}}var sf=!1;function zm(e,n,a){if(sf)return e(n,a);sf=!0;try{var r=e(n);return r}finally{if(sf=!1,(fs!==null||ds!==null)&&(Fc(),fs&&(n=fs,e=ds,ds=fs=null,Im(n),e)))for(n=0;n<e.length;n++)Im(e[n])}}function wl(e,n){var a=e.stateNode;if(a===null)return null;var r=a[de]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var da=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lf=!1;if(da)try{var Rl={};Object.defineProperty(Rl,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Rl,Rl),window.removeEventListener("test",Rl,Rl)}catch{lf=!1}var Ba=null,of=null,Bo=null;function Fm(){if(Bo)return Bo;var e,n=of,a=n.length,r,c="value"in Ba?Ba.value:Ba.textContent,u=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===c[u-r];r++);return Bo=c.slice(e,1<r?1-r:void 0)}function Ho(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function Bm(){return!1}function jn(e){function n(a,r,c,u,x){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(a=e[w],this[w]=a?a(u):u[w]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Go:Bm,this.isPropagationStopped=Bm,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=jn(Ha),Cl=z({},Ha,{view:0,detail:0}),Yy=jn(Cl),cf,uf,Nl,jo=z({},Cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nl&&(Nl&&e.type==="mousemove"?(cf=e.screenX-Nl.screenX,uf=e.screenY-Nl.screenY):uf=cf=0,Nl=e),cf)},movementY:function(e){return"movementY"in e?e.movementY:uf}}),Hm=jn(jo),Zy=z({},jo,{dataTransfer:0}),Ky=jn(Zy),Qy=z({},Cl,{relatedTarget:0}),ff=jn(Qy),Jy=z({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=jn(Jy),eb=z({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tb=jn(eb),nb=z({},Ha,{data:0}),Gm=jn(nb),ib={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rb[e])?!!n[e]:!1}function df(){return sb}var lb=z({},Cl,{key:function(e){if(e.key){var n=ib[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ab[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ob=jn(lb),cb=z({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=jn(cb),ub=z({},Ha,{submitter:0}),fb=jn(ub),db=z({},Cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),hb=jn(db),pb=z({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),mb=jn(pb),gb=z({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xb=jn(gb),vb=z({},Ha,{newState:0,oldState:0,source:0}),_b=jn(vb),yb=[9,13,27,32],hf=da&&"CompositionEvent"in window,Dl=null;da&&"documentMode"in document&&(Dl=document.documentMode);var bb=da&&"TextEvent"in window&&!Dl,jm=da&&(!hf||Dl&&8<Dl&&11>=Dl),km=" ",Xm=!1;function qm(e,n){switch(e){case"keyup":return yb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hs=!1;function Mb(e,n){switch(e){case"compositionend":return Wm(n);case"keypress":return n.which!==32?null:(Xm=!0,km);case"textInput":return e=n.data,e===km&&Xm?null:e;default:return null}}function Sb(e,n){if(hs)return e==="compositionend"||!hf&&qm(e,n)?(e=Fm(),Bo=of=Ba=null,hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jm&&n.locale!=="ko"?null:n.data;default:return null}}var Eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Eb[e.type]:n==="textarea"}function Zm(e,n,a,r){fs?ds?ds.push(r):ds=[r]:fs=r,n=kc(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Ul=null,Ll=null;function Tb(e){Ix(e,0)}function ko(e){var n=Ft(e);if(Nm(n))return e}function Km(e,n){if(e==="change")return n}var Qm=!1;if(da){var pf;if(da){var mf="oninput"in document;if(!mf){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),mf=typeof Jm.oninput=="function"}pf=mf}else pf=!1;Qm=pf&&(!document.documentMode||9<document.documentMode)}function $m(){Ul&&(Ul.detachEvent("onpropertychange",e0),Ll=Ul=null)}function e0(e){if(e.propertyName==="value"&&ko(Ll)){var n=[];Zm(n,Ll,e,rf(e)),zm(Tb,n)}}function Ab(e,n,a){e==="focusin"?($m(),Ul=n,Ll=a,Ul.attachEvent("onpropertychange",e0)):e==="focusout"&&$m()}function wb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ko(Ll)}function Rb(e,n){if(e==="click")return ko(n)}function Cb(e,n){if(e==="input"||e==="change")return ko(n)}function Nb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:Nb;function Ol(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!be.call(n,c)||!li(e[c],n[c]))return!1}return!0}function gf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function t0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function n0(e,n){var a=t0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=t0(a)}}function i0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?i0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function a0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gf(e.document)}return n}function xf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Db=da&&"documentMode"in document&&11>=document.documentMode,ps=null,vf=null,Pl=null,_f=!1;function r0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_f||ps==null||ps!==gf(r)||(r=ps,"selectionStart"in r&&xf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pl&&Ol(Pl,r)||(Pl=r,r=kc(vf,"onSelect"),0<r.length&&(n=new Vo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ps)))}function Ar(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ms={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionrun:Ar("Transition","TransitionRun"),transitionstart:Ar("Transition","TransitionStart"),transitioncancel:Ar("Transition","TransitionCancel"),transitionend:Ar("Transition","TransitionEnd")},yf={},s0={};da&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function wr(e){if(yf[e])return yf[e];if(!ms[e])return e;var n=ms[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in s0)return yf[e]=n[a];return e}var l0=wr("animationend"),o0=wr("animationiteration"),c0=wr("animationstart"),Ub=wr("transitionrun"),Lb=wr("transitionstart"),Ob=wr("transitioncancel"),u0=wr("transitionend"),f0=new Map,bf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bf.push("scrollEnd");function Ui(e,n){f0.set(e,n),dn(n,[e])}var Pb=0;function ha(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ii.identifierPrefix;var a=Pb++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function d0(e){if(e==null||typeof e=="string")return e;var n=null,a=Ps;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function pa(e,n){return e=d0(e),n=d0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Xo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],gs=0,Mf=0;function qo(){for(var e=gs,n=Mf=gs=0;n<e;){var a=yi[n];yi[n++]=null;var r=yi[n];yi[n++]=null;var c=yi[n];yi[n++]=null;var u=yi[n];if(yi[n++]=null,r!==null&&c!==null){var x=r.pending;x===null?c.next=c:(c.next=x.next,x.next=c),r.pending=c}u!==0&&h0(a,c,u)}}function Wo(e,n,a,r){yi[gs++]=e,yi[gs++]=n,yi[gs++]=a,yi[gs++]=r,Mf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Sf(e,n,a,r){return Wo(e,n,a,r),Yo(e)}function Rr(e,n){return Wo(e,null,null,n),Yo(e)}function h0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,u=e.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&n!==null&&(c=31-Et(a),e=u.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),u):null}function Yo(e){if(50<io)throw io=0,zc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xs={};function Ib(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new Ib(e,n,a,r)}function Ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function p0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Zo(e,n,a,r,c,u){var x=0;if(r=e,typeof r=="function")Ef(r)&&(x=1);else if(typeof r=="string")x=uS(e,a,ot.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(r){case F:return e=Qn(31,a,n,c),e.elementType=F,e.lanes=u,e;case k:return Cr(a.children,c,u,n);case Y:x=8,c|=24;break;case me:return e=Qn(12,a,n,c|2),e.elementType=me,e.lanes=u,e;case Z:return e=Qn(13,a,n,c),e.elementType=Z,e.lanes=u,e;case J:return e=Qn(19,a,n,c),e.elementType=J,e.lanes=u,e;case _e:case I:return e=c|32,e=Qn(30,a,n,e),e.elementType=I,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case te:x=10;break e;case ve:x=9;break e;case W:x=11;break e;case Me:x=14;break e;case H:x=16,r=null;break e}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(x,a,n,c),n.elementType=e,n.type=r,n.lanes=u,n}function Cr(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function Tf(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function m0(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Af(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var g0=new WeakMap;function bi(e,n){if(typeof e=="object"&&e!==null){var a=g0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ye(n)},g0.set(e,n),n)}return{value:e,source:n,stack:ye(n)}}var vs=[],_s=0,Ko=null,Il=0,Mi=[],Si=0,Ga=null,qi=1,Wi="";function ga(e,n){vs[_s++]=Il,vs[_s++]=Ko,Ko=e,Il=n}function x0(e,n,a){Mi[Si++]=qi,Mi[Si++]=Wi,Mi[Si++]=Ga,Ga=e;var r=qi;e=Wi;var c=32-Et(r)-1;r&=~(1<<c),a+=1;var u=32-Et(n)+c;if(30<u){var x=c-c%5;u=(r&(1<<x)-1).toString(32),r>>=x,c-=x,qi=1<<32-Et(n)+c|a<<c|r,Wi=u+e}else qi=1<<u|a<<c|r,Wi=e}function Qo(e){e.return!==null&&(ga(e,1),x0(e,1,0))}function wf(e){for(;e===Ko;)Ko=vs[--_s],vs[_s]=null,Il=vs[--_s],vs[_s]=null;for(;e===Ga;)Ga=Mi[--Si],Mi[Si]=null,Wi=Mi[--Si],Mi[Si]=null,qi=Mi[--Si],Mi[Si]=null}function v0(e,n){Mi[Si++]=qi,Mi[Si++]=Wi,Mi[Si++]=Ga,qi=n.id,Wi=n.overflow,Ga=e}var An=null,tn=null,Rt=!1,Va=null,Ei=!1,Rf=Error(s(519));function ja(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zl(bi(n,e)),Rf}function _0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[$]=e,n[de]=r,a){case"dialog":Ut("cancel",n),Ut("close",n);break;case"iframe":case"object":case"embed":Ut("load",n);break;case"video":case"audio":for(a=0;a<ro.length;a++)Ut(ro[a],n);break;case"source":Ut("error",n);break;case"img":case"image":case"link":Ut("error",n),Ut("load",n);break;case"details":Ut("toggle",n);break;case"input":Ut("invalid",n),Dm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ut("invalid",n);break;case"textarea":Ut("invalid",n),Lm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Hx(n.textContent,a)?(r.popover!=null&&(Ut("beforetoggle",n),Ut("toggle",n)),r.onScroll!=null&&Ut("scroll",n),r.onScrollEnd!=null&&Ut("scrollend",n),r.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||ja(e,!0)}function Jo(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:An=An.return}}function ys(e){if(e!==An)return!1;if(!Rt)return Jo(e),Rt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ah(e.type,e.memoizedProps)),a=!a),a&&tn&&ja(e),Jo(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=rv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));tn=rv(e)}else n===27?(n=tn,rr(e.type)?(e=hh,hh=null,tn=e):tn=n):tn=An?Ai(e.stateNode.nextSibling):null;return!0}function Nr(){tn=An=null,Rt=!1}function Cf(){var e=Va;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),Va=null),e}function zl(e){Va===null?Va=[e]:Va.push(e)}var Nf=Ve(null),Dr=null,xa=null;function ka(e,n,a){Oe(Nf,n._currentValue),n._currentValue=a}function va(e){e._currentValue=Nf.current,Ue(Nf)}function $o(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Df(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var x=c.child;u=u.firstContext;e:for(;u!==null;){var w=u;u=c;for(var G=0;G<n.length;G++)if(w.context===n[G]){u.lanes|=a,w=u.alternate,w!==null&&(w.lanes|=a),$o(u.return,a,e),r||(x=null);break e}u=w.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(s(341));x.lanes|=a,u=x.alternate,u!==null&&(u.lanes|=a),$o(x,a,e),x=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),$o(c.return,a,e),x=c.child,x=x!==null?x.sibling:null):x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ur(e,n,a,r){e=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=c.type;li(c.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(c===wt.current){if(x=c.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Xs):e=[Xs])}c=c.return}return e!==null&&Df(n,e,a,r),n.flags|=262144,e!==null}function ec(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Lr(e){Dr=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return y0(Dr,e)}function tc(e,n){return Dr===null&&Lr(e),y0(e,n)}function y0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(s(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var zb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Fb=l.unstable_scheduleCallback,Bb=l.unstable_NormalPriority,mn={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uf(){return{controller:new zb,data:new Map,refCount:0}}function Fl(e){e.refCount--,e.refCount===0&&Fb(Bb,function(){e.controller.abort()})}function b0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Bl=null;function Hb(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Hl=null,Lf=0,Or=0,bs=null;function Gb(e,n){if(Hl===null){var a=Hl=[];Lf=0,Or=Zd(),bs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Lf++,n.then(M0,M0),n}function M0(){if(--Lf===0&&(Bl=null,Hl!==null)){bs!==null&&(bs.status="fulfilled");var e=Hl;Hl=null,Or=0,bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Vb(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var S0=ge.S;ge.S=function(e,n){if(mx=qe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Gb(e,n),Bl!==null)for(var a=Bs;a!==null;)b0(a,Bl),a=a.next;if(a=e.types,a!==null){for(var r=Bs;r!==null;)b0(r,a),r=r.next;if(Or!==0){r=Bl,r===null&&(r=Bl=[]);for(var c=0;c<a.length;c++){var u=a[c];r.indexOf(u)===-1&&r.push(u)}}}S0!==null&&S0(e,n)};var Pr=Ve(null);function Of(){var e=Pr.current;return e!==null?e:en.pooledCache}function nc(e,n){n===null?Oe(Pr,Pr.current):Oe(Pr,n.pool)}function E0(){var e=Of();return e===null?null:{parent:mn._currentValue,pool:e}}var Ms=Error(s(460)),Pf=Error(s(474)),ic=Error(s(542)),ac={then:function(){}};function T0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function A0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,R0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,R0(e),e}throw zr=n,Ms}}function Ir(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zr=a,Ms):a}}var zr=null;function w0(){if(zr===null)throw Error(s(459));var e=zr;return zr=null,e}function R0(e){if(e===Ms||e===ic)throw Error(s(483))}var Ss=null,Gl=0;function rc(e){var n=Gl;return Gl+=1,Ss===null&&(Ss=[]),A0(Ss,e,n)}function Xa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function sc(e,n){throw n.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function C0(e){function n(re,q){if(e){var ce=re.deletions;ce===null?(re.deletions=[q],re.flags|=16):ce.push(q)}}function a(re,q){if(!e)return null;for(;q!==null;)n(re,q),q=q.sibling;return null}function r(re){for(var q=new Map;re!==null;)re.key===null?q.set(re.index,re):q.set(re.key,re),re=re.sibling;return q}function c(re,q){return re=ma(re,q),re.index=0,re.sibling=null,re}function u(re,q,ce){return re.index=ce,e?(ce=re.alternate,ce!==null?(ce=ce.index,ce<q?(re.flags|=2,q):ce):(re.flags|=134217730,q)):(re.flags|=1048576,q)}function x(re){return e&&re.alternate===null&&(re.flags|=134217730),re}function w(re,q,ce,Ee){return q===null||q.tag!==6?(q=Tf(ce,re.mode,Ee),q.return=re,q):(q=c(q,ce),q.return=re,q)}function G(re,q,ce,Ee){var tt=ce.type;return tt===k?(re=pe(re,q,ce.props.children,Ee,ce.key),Xa(re,ce),re):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===H&&Ir(tt)===q.type)?(q=c(q,ce.props),Xa(q,ce),q.return=re,q):(q=Zo(ce.type,ce.key,ce.props,null,re.mode,Ee),Xa(q,ce),q.return=re,q)}function se(re,q,ce,Ee){return q===null||q.tag!==4||q.stateNode.containerInfo!==ce.containerInfo||q.stateNode.implementation!==ce.implementation?(q=Af(ce,re.mode,Ee),q.return=re,q):(q=c(q,ce.children||[]),q.return=re,q)}function pe(re,q,ce,Ee,tt){return q===null||q.tag!==7?(q=Cr(ce,re.mode,Ee,tt),q.return=re,q):(q=c(q,ce),q.return=re,q)}function Ae(re,q,ce){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Tf(""+q,re.mode,ce),q.return=re,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return ce=Zo(q.type,q.key,q.props,null,re.mode,ce),Xa(ce,q),ce.return=re,ce;case j:return q=Af(q,re.mode,ce),q.return=re,q;case H:return q=Ir(q),Ae(re,q,ce)}if(we(q)||V(q))return q=Cr(q,re.mode,ce,null),q.return=re,q;if(typeof q.then=="function")return Ae(re,rc(q),ce);if(q.$$typeof===te)return Ae(re,tc(re,q),ce);sc(re,q)}return null}function ne(re,q,ce,Ee){var tt=q!==null?q.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return tt!==null?null:w(re,q,""+ce,Ee);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===tt?G(re,q,ce,Ee):null;case j:return ce.key===tt?se(re,q,ce,Ee):null;case H:return ce=Ir(ce),ne(re,q,ce,Ee)}if(we(ce)||V(ce))return tt!==null?null:pe(re,q,ce,Ee,null);if(typeof ce.then=="function")return ne(re,q,rc(ce),Ee);if(ce.$$typeof===te)return ne(re,q,tc(re,ce),Ee);sc(re,ce)}return null}function fe(re,q,ce,Ee,tt){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return re=re.get(ce)||null,w(q,re,""+Ee,tt);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case L:return re=re.get(Ee.key===null?ce:Ee.key)||null,G(q,re,Ee,tt);case j:return re=re.get(Ee.key===null?ce:Ee.key)||null,se(q,re,Ee,tt);case H:return Ee=Ir(Ee),fe(re,q,ce,Ee,tt)}if(we(Ee)||V(Ee))return re=re.get(ce)||null,pe(q,re,Ee,tt,null);if(typeof Ee.then=="function")return fe(re,q,ce,rc(Ee),tt);if(Ee.$$typeof===te)return fe(re,q,ce,tc(q,Ee),tt);sc(q,Ee)}return null}function je(re,q,ce,Ee){for(var tt=null,Pt=null,ut=q,ht=q=0,vn=null;ut!==null&&ht<ce.length;ht++){ut.index>ht?(vn=ut,ut=null):vn=ut.sibling;var Bt=ne(re,ut,ce[ht],Ee);if(Bt===null){ut===null&&(ut=vn);break}e&&ut&&Bt.alternate===null&&n(re,ut),q=u(Bt,q,ht),Pt===null?tt=Bt:Pt.sibling=Bt,Pt=Bt,ut=vn}if(ht===ce.length)return a(re,ut),Rt&&ga(re,ht),tt;if(ut===null){for(;ht<ce.length;ht++)ut=Ae(re,ce[ht],Ee),ut!==null&&(q=u(ut,q,ht),Pt===null?tt=ut:Pt.sibling=ut,Pt=ut);return Rt&&ga(re,ht),tt}for(ut=r(ut);ht<ce.length;ht++)vn=fe(ut,re,ht,ce[ht],Ee),vn!==null&&(e&&(Bt=vn.alternate,Bt!==null&&ut.delete(Bt.key===null?ht:Bt.key)),q=u(vn,q,ht),Pt===null?tt=vn:Pt.sibling=vn,Pt=vn);return e&&ut.forEach(function(ur){return n(re,ur)}),Rt&&ga(re,ht),tt}function at(re,q,ce,Ee){if(ce==null)throw Error(s(151));for(var tt=null,Pt=null,ut=q,ht=q=0,vn=null,Bt=ce.next();ut!==null&&!Bt.done;ht++,Bt=ce.next()){ut.index>ht?(vn=ut,ut=null):vn=ut.sibling;var ur=ne(re,ut,Bt.value,Ee);if(ur===null){ut===null&&(ut=vn);break}e&&ut&&ur.alternate===null&&n(re,ut),q=u(ur,q,ht),Pt===null?tt=ur:Pt.sibling=ur,Pt=ur,ut=vn}if(Bt.done)return a(re,ut),Rt&&ga(re,ht),tt;if(ut===null){for(;!Bt.done;ht++,Bt=ce.next())Bt=Ae(re,Bt.value,Ee),Bt!==null&&(q=u(Bt,q,ht),Pt===null?tt=Bt:Pt.sibling=Bt,Pt=Bt);return Rt&&ga(re,ht),tt}for(ut=r(ut);!Bt.done;ht++,Bt=ce.next())Bt=fe(ut,re,ht,Bt.value,Ee),Bt!==null&&(e&&(vn=Bt.alternate,vn!==null&&ut.delete(vn.key===null?ht:vn.key)),q=u(Bt,q,ht),Pt===null?tt=Bt:Pt.sibling=Bt,Pt=Bt);return e&&ut.forEach(function(MS){return n(re,MS)}),Rt&&ga(re,ht),tt}function Mt(re,q,ce,Ee){if(typeof ce=="object"&&ce!==null&&ce.type===k&&ce.key===null&&ce.props.ref===void 0&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var tt=ce.key;q!==null;){if(q.key===tt){if(tt=ce.type,tt===k){if(q.tag===7){a(re,q.sibling),Ee=c(q,ce.props.children),Xa(Ee,ce),Ee.return=re,re=Ee;break e}}else if(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===H&&Ir(tt)===q.type){a(re,q.sibling),Ee=c(q,ce.props),Xa(Ee,ce),Ee.return=re,re=Ee;break e}a(re,q);break}else n(re,q);q=q.sibling}ce.type===k?(Ee=Cr(ce.props.children,re.mode,Ee,ce.key),Xa(Ee,ce),Ee.return=re,re=Ee):(Ee=Zo(ce.type,ce.key,ce.props,null,re.mode,Ee),Xa(Ee,ce),Ee.return=re,re=Ee)}return x(re);case j:e:{for(tt=ce.key;q!==null;){if(q.key===tt)if(q.tag===4&&q.stateNode.containerInfo===ce.containerInfo&&q.stateNode.implementation===ce.implementation){a(re,q.sibling),Ee=c(q,ce.children||[]),Ee.return=re,re=Ee;break e}else{a(re,q);break}else n(re,q);q=q.sibling}Ee=Af(ce,re.mode,Ee),Ee.return=re,re=Ee}return x(re);case H:return ce=Ir(ce),Mt(re,q,ce,Ee)}if(we(ce))return je(re,q,ce,Ee);if(V(ce)){if(tt=V(ce),typeof tt!="function")throw Error(s(150));return ce=tt.call(ce),at(re,q,ce,Ee)}if(typeof ce.then=="function")return Mt(re,q,rc(ce),Ee);if(ce.$$typeof===te)return Mt(re,q,tc(re,ce),Ee);sc(re,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint"?(ce=""+ce,q!==null&&q.tag===6?(a(re,q.sibling),Ee=c(q,ce),Ee.return=re,re=Ee):(a(re,q),Ee=Tf(ce,re.mode,Ee),Ee.return=re,re=Ee),x(re)):a(re,q)}return function(re,q,ce,Ee){try{Gl=0;var tt=Mt(re,q,ce,Ee);return Ss=null,tt}catch(ut){if(ut===Ms||ut===ic)throw ut;var Pt=Qn(29,ut,null,re.mode);return Pt.lanes=Ee,Pt.return=re,Pt}finally{}}}var Fr=C0(!0),N0=C0(!1),qa=!1;function If(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(kt&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Yo(e),h0(e,null,a),n}return Wo(e,r,n,a),Yo(e)}function Vl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ml(e,a)}}function Ff(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=x:u=u.next=x,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bf=!1;function jl(){if(Bf){var e=bs;if(e!==null)throw e}}function kl(e,n,a,r){Bf=!1;var c=e.updateQueue;qa=!1;var u=c.firstBaseUpdate,x=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var G=w,se=G.next;G.next=null,x===null?u=se:x.next=se,x=G;var pe=e.alternate;pe!==null&&(pe=pe.updateQueue,w=pe.lastBaseUpdate,w!==x&&(w===null?pe.firstBaseUpdate=se:w.next=se,pe.lastBaseUpdate=G))}if(u!==null){var Ae=c.baseState;x=0,pe=se=G=null,w=u;do{var ne=w.lane&-536870913,fe=ne!==w.lane;if(fe?(Ot&ne)===ne:(r&ne)===ne){ne!==0&&ne===Or&&(Bf=!0),pe!==null&&(pe=pe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var je=e,at=w;ne=n;var Mt=a;switch(at.tag){case 1:if(je=at.payload,typeof je=="function"){Ae=je.call(Mt,Ae,ne);break e}Ae=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=at.payload,ne=typeof je=="function"?je.call(Mt,Ae,ne):je,ne==null)break e;Ae=z({},Ae,ne);break e;case 2:qa=!0}}ne=w.callback,ne!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=c.callbacks,fe===null?c.callbacks=[ne]:fe.push(ne))}else fe={lane:ne,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pe===null?(se=pe=fe,G=Ae):pe=pe.next=fe,x|=ne;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;fe=w,w=fe.next,fe.next=null,c.lastBaseUpdate=fe,c.shared.pending=null}}while(!0);pe===null&&(G=Ae),c.baseState=G,c.firstBaseUpdate=se,c.lastBaseUpdate=pe,u===null&&(c.shared.lanes=0),tr|=x,e.lanes=x,e.memoizedState=Ae}}function D0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function U0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)D0(a[e],n)}var Za=Ve(null),lc=Ve(0);function L0(e,n){e=Sa,Oe(lc,e),Oe(Za,n),Sa=e|n.baseLanes}function Hf(){Oe(lc,Sa),Oe(Za,Za.current)}function Gf(){Sa=lc.current,Ue(Za),Ue(lc)}var Ln=Ve(null),Bn=null;function Ka(e){var n=e.alternate;Oe(On,On.current&1),Oe(Ln,e),Bn===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(Bn=e)}function Vf(e){Oe(On,On.current),Oe(Ln,e),Bn===null&&(Bn=e)}function O0(e){e.tag===22?(Oe(On,On.current),Oe(Ln,e),Bn===null&&(Bn=e)):Qa()}function Qa(){Oe(On,On.current),Oe(Ln,Ln.current)}function oi(e){Ue(Ln),Bn===e&&(Bn=null),Ue(On)}var On=Ve(0);function Xl(e,n){Oe(Ln,Ln.current),Oe(On,n)}function jf(e){Ue(On),Ue(Ln),Bn===e&&(Bn=null)}function oc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||dh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _a=0,bt=null,$t=null,gn=null,cc=!1,Es=!1,Br=!1,uc=0,ql=0,Ts=null,jb=0;function un(){throw Error(s(321))}function kf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function Xf(e,n,a,r,c,u){return _a=u,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ge.H=e===null||e.memoizedState===null?xg:vg,Br=!1,u=a(r,c),Br=!1,Es&&(u=I0(n,a,r,c)),P0(e),u}function P0(e){ge.H=xc;var n=$t!==null&&$t.next!==null;if(_a=0,gn=$t=bt=null,cc=!1,ql=0,Ts=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&ec(e)&&(xn=!0))}function I0(e,n,a,r){bt=e;var c=0;do{if(Es&&(Ts=null),ql=0,Es=!1,25<=c)throw Error(s(301));if(c+=1,gn=$t=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}ge.H=Qb,u=n(a,r)}while(Es);return u}function kb(){var e=ge.H,n=e.useState()[0];return n=typeof n.then=="function"?Wl(n):n,e=e.useState()[0],($t!==null?$t.memoizedState:null)!==e&&(bt.flags|=1024),n}function qf(){var e=uc!==0;return uc=0,e}function Wf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yf(e){if(cc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}cc=!1}_a=0,gn=$t=bt=null,Es=!1,ql=uc=0,Ts=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?bt.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if($t===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=$t.next;var n=gn===null?bt.memoizedState:gn.next;if(n!==null)gn=n,$t=e;else{if(e===null)throw bt.alternate===null?Error(s(467)):Error(s(310));$t=e,e={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},gn===null?bt.memoizedState=gn=e:gn=gn.next=e}return gn}function fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var n=ql;return ql+=1,Ts===null&&(Ts=[]),e=A0(Ts,e,n),n=bt,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,ge.H=n===null||n.memoizedState===null?xg:vg),e}function dc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===ae)return;if(e.$$typeof===te)return Un(e)}throw Error(s(438,String(e)))}function Zf(e){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=bt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=fc(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Ne;return n.index++,a}function ya(e,n){return typeof n=="function"?n(e):n}function hc(e){var n=hn();return Kf(n,$t,e)}function Kf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,u=r.pending;if(u!==null){if(c!==null){var x=c.next;c.next=u.next,u.next=x}n.baseQueue=c=u,r.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{n=c.next;var w=x=null,G=null,se=n,pe=!1;do{var Ae=se.lane&-536870913;if(Ae!==se.lane?(Ot&Ae)===Ae:(_a&Ae)===Ae){var ne=se.revertLane;if(ne===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Ae===Or&&(pe=!0);else if((_a&ne)===ne){se=se.next,ne===Or&&(pe=!0);continue}else Ae={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},G===null?(w=G=Ae,x=u):G=G.next=Ae,bt.lanes|=ne,tr|=ne;Ae=se.action,Br&&a(u,Ae),u=se.hasEagerState?se.eagerState:a(u,Ae)}else ne={lane:Ae,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},G===null?(w=G=ne,x=u):G=G.next=ne,bt.lanes|=Ae,tr|=Ae;se=se.next}while(se!==null&&se!==n);if(G===null?x=u:G.next=w,!li(u,e.memoizedState)&&(xn=!0,pe&&(a=bs,a!==null)))throw a;e.memoizedState=u,e.baseState=x,e.baseQueue=G,r.lastRenderedState=u}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Qf(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do u=e(u,x.action),x=x.next;while(x!==c);li(u,n.memoizedState)||(xn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function z0(e,n,a){var r=bt,c=hn(),u=Rt;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!li(($t||c).memoizedState,a);if(x&&(c.memoizedState=a,xn=!0),c=c.queue,ed(H0.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||x||gn!==null&&(gn.memoizedState.tag&1)!==0,As(e?9:8,{destroy:void 0},B0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,en===null)throw Error(s(349));u||(_a&127)!==0||F0(r,n,a)}return a}function F0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=fc(),bt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function B0(e,n,a,r){n.value=a,n.getSnapshot=r,G0(n)&&V0(e)}function H0(e,n,a){return a(function(){G0(n)&&V0(e)})}function G0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function V0(e){var n=Rr(e,2);n!==null&&ti(n,e,2)}function Jf(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),Br){Vt(!0);try{a()}finally{Vt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},n}function j0(e,n,a,r){return e.baseState=a,Kf(e,$t,typeof r=="function"?r:ya)}function Xb(e,n,a,r,c){if(gc(e))throw Error(s(485));if(e=n.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){u.listeners.push(x)}};ge.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,k0(n,u)):(u.next=a.next,n.pending=a.next=u)}}function k0(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var u=ge.T,x={};x.types=u!==null?u.types:null,ge.T=x;try{var w=a(c,r),G=ge.S;G!==null&&G(x,w),X0(e,n,w)}catch(se){$f(e,n,se)}finally{u!==null&&x.types!==null&&(u.types=x.types),ge.T=u}}else try{u=a(c,r),X0(e,n,u)}catch(se){$f(e,n,se)}}function X0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){q0(e,n,r)},function(r){return $f(e,n,r)}):q0(e,n,a)}function q0(e,n,a){n.status="fulfilled",n.value=a,W0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,k0(e,a)))}function $f(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,W0(n),n=n.next;while(n!==r)}e.action=null}function W0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Y0(e,n){return n}function Z0(e,n){if(Rt){var a=en.formState;if(a!==null){e:{var r=bt;if(Rt){if(tn){t:{for(var c=tn,u=Ei;c.nodeType!==8;){if(!u){c=null;break t}if(c=Ai(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){tn=Ai(c.nextSibling),r=c.data==="F!";break e}}ja(r)}r=!1}r&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:n},a.queue=r,a=pg.bind(null,bt,r),r.dispatch=a,r=Jf(!1),u=rd.bind(null,bt,!1,r.queue),r=kn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=Xb.bind(null,bt,c,u,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function K0(e){var n=hn();return Q0(n,$t,e)}function Q0(e,n,a){if(n=Kf(e,n,Y0)[0],e=hc(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Wl(n)}catch(x){throw x===Ms?ic:x}else r=n;n=hn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,As(9,{destroy:void 0},qb.bind(null,c,a),null)),[r,u,e]}function qb(e,n){e.action=n}function J0(e){var n=hn(),a=$t;if(a!==null)return Q0(n,a,e);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function As(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=bt.updateQueue,n===null&&(n=fc(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function $0(){return hn().memoizedState}function pc(e,n,a,r){var c=kn();bt.flags|=e,c.memoizedState=As(1|n,{destroy:void 0},a,r===void 0?null:r)}function mc(e,n,a,r){var c=hn();r=r===void 0?null:r;var u=c.memoizedState.inst;$t!==null&&r!==null&&kf(r,$t.memoizedState.deps)?c.memoizedState=As(n,u,a,r):(bt.flags|=e,c.memoizedState=As(1|n,u,a,r))}function eg(e,n){pc(8390656,8,e,n)}function ed(e,n){mc(2048,8,e,n)}function Wb(e){bt.flags|=4;var n=bt.updateQueue;if(n===null)n=fc(),bt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function tg(e){var n=hn().memoizedState;return Wb({ref:n,nextImpl:e}),function(){if((kt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function ng(e,n){return mc(4,2,e,n)}function ig(e,n){return mc(4,4,e,n)}function ag(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rg(e,n,a){a=a!=null?a.concat([e]):null,mc(4,4,ag.bind(null,n,e),a)}function td(){}function sg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&kf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function lg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&kf(n,r[1]))return r[0];if(r=e(),Br){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[r,n],r}function nd(e,n,a){return a===void 0||(_a&1073741824)!==0&&(Ot&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=xx(),bt.lanes|=e,tr|=e,a)}function og(e,n,a,r){return li(a,n)?a:Za.current!==null?(e=nd(e,a,r),li(e,n)||(xn=!0),e):(_a&106)===0||(_a&1073741824)!==0&&(Ot&261930)===0?(xn=!0,e.memoizedState=a):(e=xx(),bt.lanes|=e,tr|=e,n)}function cg(e,n,a,r,c){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var x=ge.T,w={};w.types=x!==null?x.types:null,ge.T=w,rd(e,!1,n,a);try{var G=c(),se=ge.S;if(se!==null&&se(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var pe=Vb(G,r);Yl(e,n,pe,di(e))}else Yl(e,n,r,di(e))}catch(Ae){Yl(e,n,{then:function(){},status:"rejected",reason:Ae},di())}finally{Ce.p=u,x!==null&&w.types!==null&&(x.types=w.types),ge.T=x}}function Yb(){}function id(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=ug(e).queue;cg(e,c,n,Pe,a===null?Yb:function(){return fg(e),a(r)})}function ug(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Pe,baseState:Pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:Pe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function fg(e){var n=ug(e);n.next===null&&(n=e.alternate.memoizedState),Yl(e,n.next.queue,{},di())}function ad(){return Un(Xs)}function dg(){return hn().memoizedState}function hg(){return hn().memoizedState}function Zb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=Wa(a);var r=Ya(n,e,a);r!==null&&(ti(r,n,a),Vl(r,n,a)),n={cache:Uf()},e.payload=n;return}n=n.return}}function Kb(e,n,a){var r=di();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gc(e)?mg(n,a):(a=Sf(e,n,a,r),a!==null&&(ti(a,e,r),gg(a,n,r)))}function pg(e,n,a){var r=di();Yl(e,n,a,r)}function Yl(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gc(e))mg(n,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var x=n.lastRenderedState,w=u(x,a);if(c.hasEagerState=!0,c.eagerState=w,li(w,x))return Wo(e,n,c,0),en===null&&qo(),!1}catch{}finally{}if(a=Sf(e,n,c,r),a!==null)return ti(a,e,r),gg(a,n,r),!0}return!1}function rd(e,n,a,r){if(r={lane:2,revertLane:Zd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gc(e)){if(n)throw Error(s(479))}else n=Sf(e,a,r,2),n!==null&&ti(n,e,2)}function gc(e){var n=e.alternate;return e===bt||n!==null&&n===bt}function mg(e,n){Es=cc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function gg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ml(e,a)}}var xc={readContext:Un,use:dc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},xg={readContext:Un,use:dc,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:eg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,pc(4194308,4,ag.bind(null,n,e),a)},useLayoutEffect:function(e,n){return pc(4194308,4,e,n)},useInsertionEffect:function(e,n){pc(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var r=e();if(Br){Vt(!0);try{e()}finally{Vt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=kn();if(a!==void 0){var c=a(n);if(Br){Vt(!0);try{a(n)}finally{Vt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Kb.bind(null,bt,e),[r.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Jf(e);var n=e.queue,a=pg.bind(null,bt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:td,useDeferredValue:function(e,n){var a=kn();return nd(a,e,n)},useTransition:function(){var e=Jf(!1);return e=cg.bind(null,bt,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=bt,c=kn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),en===null)throw Error(s(349));(Ot&127)!==0||F0(r,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,eg(H0.bind(null,r,u,e),[e]),r.flags|=2048,As(9,{destroy:void 0},B0.bind(null,r,u,a,n),null),a},useId:function(){var e=kn(),n=en.identifierPrefix;if(Rt){var a=Wi,r=qi;a=(r&~(1<<32-Et(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=uc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=jb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ad,useFormState:Z0,useActionState:Z0,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rd.bind(null,bt,!0,a),a.dispatch=n,[e,n]},useMemoCache:Zf,useCacheRefresh:function(){return kn().memoizedState=Zb.bind(null,bt)},useEffectEvent:function(e){var n=kn(),a={impl:e};return n.memoizedState=a,function(){if((kt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},vg={readContext:Un,use:dc,useCallback:sg,useContext:Un,useEffect:ed,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:lg,useReducer:hc,useRef:$0,useState:function(){return hc(ya)},useDebugValue:td,useDeferredValue:function(e,n){var a=hn();return og(a,$t.memoizedState,e,n)},useTransition:function(){var e=hc(ya)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:z0,useId:dg,useHostTransitionStatus:ad,useFormState:K0,useActionState:K0,useOptimistic:function(e,n){var a=hn();return j0(a,$t,e,n)},useMemoCache:Zf,useCacheRefresh:hg,useEffectEvent:tg},Qb={readContext:Un,use:dc,useCallback:sg,useContext:Un,useEffect:ed,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ig,useMemo:lg,useReducer:Qf,useRef:$0,useState:function(){return Qf(ya)},useDebugValue:td,useDeferredValue:function(e,n){var a=hn();return $t===null?nd(a,e,n):og(a,$t.memoizedState,e,n)},useTransition:function(){var e=Qf(ya)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Wl(e),n]},useSyncExternalStore:z0,useId:dg,useHostTransitionStatus:ad,useFormState:J0,useActionState:J0,useOptimistic:function(e,n){var a=hn();return $t!==null?j0(a,$t,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zf,useCacheRefresh:hg,useEffectEvent:tg};function sd(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:z({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ld={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=di(),c=Wa(r);c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ti(n,e,r),Vl(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=di(),c=Wa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ti(n,e,r),Vl(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),r=Wa(a);r.tag=2,n!=null&&(r.callback=n),n=Ya(e,r,a),n!==null&&(ti(n,e,a),Vl(n,e,a))}};function _g(e,n,a,r,c,u,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,x):n.prototype&&n.prototype.isPureReactComponent?!Ol(a,r)||!Ol(c,u):!0}function yg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&ld.enqueueReplaceState(n,n.state,null)}function Hr(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=z({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function bg(e){Xo(e)}function Mg(e){console.error(e)}function Sg(e){Xo(e)}function vc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Eg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function od(e,n,a){return a=Wa(a),a.tag=3,a.payload={element:null},a.callback=function(){vc(e,n)},a}function Tg(e){return e=Wa(e),e.tag=3,e}function Ag(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;e.payload=function(){return c(u)},e.callback=function(){Eg(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Eg(n,a,r),typeof c!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Jb(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ur(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?Bc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ac?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),qd(e,r,c)),!1;case 22:return a.flags|=65536,r===ac?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),qd(e,r,c)),!1}throw Error(s(435,a.tag))}return qd(e,r,c),Bc(),!1}if(Rt)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Rf&&(e=Error(s(422),{cause:r}),zl(bi(e,a)))):(r!==Rf&&(n=Error(s(423),{cause:r}),zl(bi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=bi(r,a),c=od(e.stateNode,r,c),Ff(e,c),fn!==4&&(fn=2)),!1;var u=Error(s(520),{cause:r});if(u=bi(u,a),no===null?no=[u]:no.push(u),fn!==4&&(fn=2),n===null)return!0;r=bi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=od(a.stateNode,r,e),Ff(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(nr===null||!nr.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Tg(c),Ag(c,e,a,r),Ff(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var cd=Error(s(461)),xn=!1;function Mn(e,n,a,r){n.child=e===null?N0(n,null,a,r):Fr(n,e.child,a,r)}function wg(e,n,a,r,c){a=a.render;var u=n.ref;if("ref"in r){var x={};for(var w in r)w!=="ref"&&(x[w]=r[w])}else x=r;return Lr(n),r=Xf(e,n,a,x,u,c),w=qf(),e!==null&&!xn?(Wf(e,n,c),ba(e,n,c)):(Rt&&w&&Qo(n),n.flags|=1,Mn(e,n,r,c),n.child)}function Rg(e,n,a,r,c){if(e===null){var u=a.type;return typeof u=="function"&&!Ef(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,Cg(e,n,u,r,c)):(e=Zo(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!xd(e,c)){var x=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ol,a(x,r)&&e.ref===n.ref)return ba(e,n,c)}return n.flags|=1,e=ma(u,r),e.ref=n.ref,e.return=n,n.child=e}function Cg(e,n,a,r,c){if(e!==null){var u=e.memoizedProps;if(Ol(u,r)&&e.ref===n.ref)if(xn=!1,n.pendingProps=r=u,xd(e,c))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,ba(e,n,c)}return ud(e,n,a,r,c)}function Ng(e,n,a,r){var c=r.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,n.child=null;return Dg(e,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&nc(n,u!==null?u.cachePool:null),u!==null?L0(n,u):Hf(),O0(n);else return r=n.lanes=536870912,Dg(e,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(nc(n,u.cachePool),L0(n,u),Qa(),n.memoizedState=null):(e!==null&&nc(n,null),Hf(),Qa());return Mn(e,n,c,a),n.child}function Zl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Dg(e,n,a,r,c){var u=Of();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&nc(n,null),Hf(),O0(n),e!==null&&Ur(e,n,r,!0),n.childLanes=c,null}function _c(e,n){return n=yc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ug(e,n,a){return Fr(n,e.child,null,a),e=_c(n,n.pendingProps),e.flags|=2,oi(n),n.memoizedState=null,e}function $b(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Rt){if(r.mode==="hidden")return e=_c(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Zl(null,e);if(Vf(n),(e=tn)?(e=av(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:qi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=m0(e),a.return=n,n.child=a,An=n,tn=null)):e=null,e===null)throw ja(n);return n.lanes=536870912,null}return _c(n,r)}var u=e.memoizedState;if(u!==null){var x=u.dehydrated;if(Vf(n),c)if(n.flags&256)n.flags&=-257,n=Ug(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||Ur(e,n,a,!1),c=(a&e.childLanes)!==0,xn||c){if(Za.current===null){if(r=en,r!==null&&(x=Sl(r,a),x!==0&&x!==u.retryLane))throw u.retryLane=x,Rr(e,x),ti(r,e,x),cd;Bc()}n=Ug(e,n,a)}else e=u.treeContext,tn=Ai(x.nextSibling),An=n,Rt=!0,Va=null,Ei=!1,e!==null&&v0(n,e),n=_c(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ws(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ud(e,n,a,r,c){return Lr(n),a=Xf(e,n,a,r,void 0,c),r=qf(),e!==null&&!xn?(Wf(e,n,c),ba(e,n,c)):(Rt&&r&&Qo(n),n.flags|=1,Mn(e,n,a,c),n.child)}function Lg(e,n,a,r,c,u){return Lr(n),n.updateQueue=null,a=I0(n,r,a,c),P0(e),r=qf(),e!==null&&!xn?(Wf(e,n,u),ba(e,n,u)):(Rt&&r&&Qo(n),n.flags|=1,Mn(e,n,a,u),n.child)}function Og(e,n,a,r,c){if(Lr(n),n.stateNode===null){var u=xs,x=a.contextType;typeof x=="object"&&x!==null&&(u=Un(x)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=ld,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},If(n),x=a.contextType,u.context=typeof x=="object"&&x!==null?Un(x):xs,u.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(sd(n,a,x,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(x=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),x!==u.state&&ld.enqueueReplaceState(u,u.state,null),kl(n,r,u,c),jl(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){u=n.stateNode;var w=n.memoizedProps,G=Hr(a,w);u.props=G;var se=u.context,pe=a.contextType;x=xs,typeof pe=="object"&&pe!==null&&(x=Un(pe));var Ae=a.getDerivedStateFromProps;pe=typeof Ae=="function"||typeof u.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,pe||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(w||se!==x)&&yg(n,u,r,x),qa=!1;var ne=n.memoizedState;u.state=ne,kl(n,r,u,c),jl(),se=n.memoizedState,w||ne!==se||qa?(typeof Ae=="function"&&(sd(n,a,Ae,r),se=n.memoizedState),(G=qa||_g(n,a,G,r,ne,se,x))?(pe||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=se),u.props=r,u.state=se,u.context=x,r=G):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,zf(e,n),x=n.memoizedProps,pe=Hr(a,x),u.props=pe,Ae=n.pendingProps,ne=u.context,se=a.contextType,G=xs,typeof se=="object"&&se!==null&&(G=Un(se)),w=a.getDerivedStateFromProps,(se=typeof w=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(x!==Ae||ne!==G)&&yg(n,u,r,G),qa=!1,ne=n.memoizedState,u.state=ne,kl(n,r,u,c),jl();var fe=n.memoizedState;x!==Ae||ne!==fe||qa||e!==null&&e.dependencies!==null&&ec(e.dependencies)?(typeof w=="function"&&(sd(n,a,w,r),fe=n.memoizedState),(pe=qa||_g(n,a,pe,r,ne,fe,G)||e!==null&&e.dependencies!==null&&ec(e.dependencies))?(se||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,fe,G),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,fe,G)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=fe),u.props=r,u.state=fe,u.context=G,r=pe):(typeof u.componentDidUpdate!="function"||x===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),r=!1)}return u=r,ws(e,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&r?(n.child=Fr(n,e.child,null,c),n.child=Fr(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=u.state,e=n.child):e=ba(e,n,c),e}function Pg(e,n,a,r){return Nr(),n.flags|=256,Mn(e,n,a,r),n.child}var fd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dd(e){return{baseLanes:e,cachePool:E0()}}function hd(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=fi),e}function Ig(e,n,a){var r=n.pendingProps,c=!1,u=(n.flags&128)!==0,x;if((x=u)||(x=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Rt){if(c?Ka(n):Qa(),(e=tn)?(e=av(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:qi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=m0(e),a.return=n,n.child=a,An=n,tn=null)):e=null,e===null)throw ja(n);return dh(e)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,c?(Qa(),c=n.mode,u=yc({mode:"hidden",children:u},c),r=Cr(r,c,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=dd(a),r.childLanes=hd(e,x,a),n.memoizedState=fd,Zl(null,r)):(Ka(n),pd(n,u))}var w=e.memoizedState;if(w!==null){var G=w.dehydrated;if(G!==null)return eM(e,n,u,x,r,G,w,a)}return c?(Qa(),c=r.fallback,u=n.mode,w=e.child,G=w.sibling,r=ma(w,{mode:"hidden",children:r.children}),r.subtreeFlags=w.subtreeFlags&1206910976,G!==null?c=ma(G,c):(c=Cr(c,u,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Zl(null,r),r=n.child,c=e.child.memoizedState,c===null?c=dd(a):(u=c.cachePool,u!==null?(w=mn._currentValue,u=u.parent!==w?{parent:w,pool:w}:u):u=E0(),c={baseLanes:c.baseLanes|a,cachePool:u}),r.memoizedState=c,r.childLanes=hd(e,x,a),n.memoizedState=fd,Zl(e.child,r)):(Ka(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function pd(e,n){return n=yc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function yc(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function bc(e,n,a){return Fr(n,e.child,null,a),e=pd(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function eM(e,n,a,r,c,u,x,w){if(a)return n.flags&256?(Ka(n),n.flags&=-257,bc(e,n,w)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,null):(Qa(),u=c.fallback,x=n.mode,c=yc({mode:"visible",children:c.children},x),u=Cr(u,x,w,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Fr(n,e.child,null,w),c=n.child,c.memoizedState=dd(w),c.childLanes=hd(e,r,w),n.memoizedState=fd,Zl(null,c));if(Ka(n),dh(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var G=r.dgst;return r=G,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,zl({value:c,source:null,stack:null})),bc(e,n,w)}if(xn||Ur(e,n,w,!1),r=(w&e.childLanes)!==0,xn||r){if(Za.current!==null)return bc(e,n,w);if(r=en,r!==null&&(c=Sl(r,w),c!==0&&c!==x.retryLane))throw x.retryLane=c,Rr(e,c),ti(r,e,c),cd;return fh(u)||Bc(),bc(e,n,w)}return fh(u)?(n.flags|=192,n.child=e.child,null):(e=x.treeContext,tn=Ai(u.nextSibling),An=n,Rt=!0,Va=null,Ei=!1,e!==null&&v0(n,e),n=pd(n,c.children),n.flags|=134221824,n)}function zg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),$o(e.return,n,a)}function Fg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&oc(a)===null&&(n=e),e=e.sibling}return n}function Mc(e,n,a,r,c,u){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:u}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=c,x.treeForkCount=u)}function md(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function gd(e,n,a){var r=n.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var x=On.current;if(n.flags&128)return Xl(n,x),null;var w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,Xl(n,x),c==="backwards"&&e!==null?(md(e),Mn(e,n,r,a),md(e)):Mn(e,n,r,a),r=Rt?Il:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zg(e,a,n);else if(e.tag===19)zg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=Fg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,md(n)),Mc(n,!0,c,null,u,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&oc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Mc(n,!0,a,null,u,r);break;case"together":Mc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Fg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Mc(n,!1,c,a,u,r)}return n.child}function Bg(e,n,a){var r=n.pendingProps;return ka(n,n.type,r.value),Mn(e,n,r.children,a),n.child}function ba(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),tr|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ur(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function xd(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ec(e)))}function tM(e,n,a){switch(n.tag){case 3:K(n,n.stateNode.containerInfo),ka(n,mn,e.memoizedState.cache),Nr();break;case 27:case 5:gt(n);break;case 4:K(n,n.stateNode.containerInfo);break;case 10:ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ka(n),n.flags|=128,null;r=Ur(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Ig(e,n,a):(Ka(n),e=ba(e,n,a),e!==null?e.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return gd(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ur(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return gd(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Xl(n,On.current),r)break;return null;case 22:return n.lanes=0,Ng(e,n,a,n.pendingProps);case 24:ka(n,mn,e.memoizedState.cache)}return ba(e,n,a)}function Hg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!xd(e,a)&&(n.flags&128)===0)return xn=!1,tM(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Rt&&(n.flags&1048576)!==0&&x0(n,Il,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=Ir(n.elementType),n.type=e,typeof e=="function")Ef(e)?(r=Hr(e,r),n.tag=1,n=Og(null,n,e,r,a)):(n.tag=0,n=ud(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=wg(null,n,e,r,a);break e}else if(c===Me){n.tag=14,n=Rg(null,n,e,r,a);break e}else if(c===te){n.tag=10,n.type=e,n=Bg(null,n,a);break e}}throw n=Se(e)||e,Error(s(306,n,""))}}return n;case 0:return ud(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Hr(r,n.pendingProps),Og(e,n,r,c,a);case 3:e:{if(K(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;c=u.element,zf(e,n),kl(n,r,null,a);var x=n.memoizedState;if(r=x.cache,ka(n,mn,r),r!==u.cache&&Df(n,[mn],a,!0),jl(),r=x.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Pg(e,n,r,a);break e}else if(r!==c){c=bi(Error(s(424)),n),zl(c),n=Pg(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Ai(e.firstChild),An=n,Rt=!0,Va=null,Ei=!0,a=N0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Nr(),r===c){n=ba(e,n,a);break e}Mn(e,n,r,a)}n=n.child}return n;case 26:return ws(e,n),e===null?(a=fv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(n.stateNode=kx(n.type,n.pendingProps,mt.current,n)):n.memoizedState=fv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return gt(n),e===null&&Rt&&(r=n.stateNode=lv(n.type,n.pendingProps,mt.current),An=n,Ei=!0,c=tn,rr(n.type)?(hh=c,tn=Ai(r.firstChild)):tn=c),Mn(e,n,n.pendingProps.children,a),ws(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Rt&&((c=r=tn)&&(r=ZM(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,An=n,tn=Ai(r.firstChild),Ei=!1,c=!0):c=!1),c||ja(n)),gt(n),c=n.type,u=n.pendingProps,x=e!==null?e.memoizedProps:null,r=u.children,ah(c,u)?r=null:x!==null&&ah(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Xf(e,n,kb,null,null,a),Xs._currentValue=c),ws(e,n),Mn(e,n,r,a),n.child;case 6:return e===null&&Rt&&((e=a=tn)&&(a=KM(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,An=n,tn=null,e=!0):e=!1),e||ja(n)),null;case 13:return Ig(e,n,a);case 4:return K(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Fr(n,null,r,a):Mn(e,n,r,a),n.child;case 11:return wg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,ws(e,n),Mn(e,n,r,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return Bg(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Lr(n),c=Un(c),r=r(c),n.flags|=1,Mn(e,n,r,a),n.child;case 14:return Rg(e,n,n.type,n.pendingProps,a);case 15:return Cg(e,n,n.type,n.pendingProps,a);case 19:return gd(e,n,a);case 31:return $b(e,n,a);case 22:return Ng(e,n,a,n.pendingProps);case 24:return Lr(n),r=Un(mn),e===null?(c=Of(),c===null&&(c=en,u=Uf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:r,cache:c},If(n),ka(n,mn,c)):((e.lanes&a)!==0&&(zf(e,n),kl(n,null,null,a),jl()),c=e.memoizedState,u=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ka(n,mn,r)):(r=u.cache,ka(n,mn,r),r!==c.cache&&Df(n,[mn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Rt&&Qo(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:ws(e,n),Mn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function vd(e,n,a,r,c){var u;if((u=(e.mode&32)!==0)&&(u=a===null?mv(n,r):mv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(bx())e.flags|=8192;else throw zr=ac,Pf}else e.flags&=-16777217}function Gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!gv(n))if(bx())e.flags|=8192;else throw zr=ac,Pf}function Sc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bl():536870912,e.lanes|=n,Us|=n)}function Kl(e,n){if(!Rt)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function nn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function nM(e,n,a){var r=n.pendingProps;switch(wf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),va(mn),Lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ys(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Cf())),nn(n),null;case 26:var c=n.type,u=n.memoizedState;return e===null?(Ma(n),u!==null?(nn(n),Gg(n,u)):(nn(n),vd(n,c,null,r,a))):u?u!==e.memoizedState?(Ma(n),nn(n),Gg(n,u)):(nn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),nn(n),vd(n,c,e,r,a)),null;case 27:if(P(n),a=mt.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}e=ot.current,ys(n)?_0(n):(e=lv(c,r,a),n.stateNode=e,Ma(n))}return nn(n),n.subtreeFlags&=-33554433,null;case 5:if(P(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return nn(n),n.subtreeFlags&=-33554433,null}if(u=ot.current,ys(n))_0(n);else{var x=lo(mt.current);switch(u){case 1:u=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=x.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?x.createElement(c,{is:r.is}):x.createElement(c)}}u[$]=n,u[de]=r;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)u.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=u;e:switch(In(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Ma(n)}}return nn(n),n.subtreeFlags&=-33554433,vd(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=mt.current,ys(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=An,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[$]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Hx(e.nodeValue,a)),e||ja(n,!0)}else e=lo(e).createTextNode(r),e[$]=n,n.stateNode=e}return nn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=ys(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),e=!1}else a=Cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return nn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=ys(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[$]=n}else Nr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),c=!1}else c=Cf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Sc(n,n.updateQueue),nn(n),null);case 4:return Lt(),e===null&&$d(n.stateNode.containerInfo),n.flags|=67108864,nn(n),null;case 10:return va(n.type),nn(n),null;case 19:if(jf(n),r=n.memoizedState,r===null)return nn(n),null;if(c=(n.flags&128)!==0,u=r.rendering,u===null)if(c)Kl(r,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=oc(e),u!==null){for(n.flags|=128,Kl(r,!1),e=u.updateQueue,n.updateQueue=e,Sc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)p0(a,e),a=a.sibling;return Xl(n,On.current&1|2),Rt&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&qe()>Pc&&(n.flags|=128,c=!0,Kl(r,!1),n.lanes=4194304)}else{if(!c)if(e=oc(u),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Sc(n,e),Kl(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!Rt)return nn(n),null}else 2*qe()-r.renderingStartTime>Pc&&a!==536870912&&(n.flags|=128,c=!0,Kl(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(e=r.last,e!==null?e.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){e=r.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=qe(),e.sibling=null,u=On.current,u=c?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Rt?Xl(n,u):(a=u,Oe(Ln,n),Oe(On,a),Bn===null&&(Bn=n)),Rt&&ga(n,r.treeForkCount),e}return nn(n),null;case 22:case 23:return oi(n),Gf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Sc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Ue(Pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(mn),nn(n),null;case 25:return null;case 30:return n.flags|=33554432,nn(n),null}throw Error(s(156,n.tag))}function iM(e,n){switch(wf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return va(mn),Lt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return P(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(s(340));Nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(oi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return jf(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return Lt(),null;case 10:return va(n.type),null;case 22:case 23:return oi(n),Gf(),e!==null&&Ue(Pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return va(mn),null;case 25:return null;default:return null}}function Vg(e,n){switch(wf(n),n.tag){case 3:va(mn),Lt();break;case 26:case 27:case 5:P(n);break;case 4:Lt();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:jf(n);break;case 10:va(n.type);break;case 22:case 23:oi(n),Gf(),e!==null&&Ue(Pr);break;case 24:va(mn)}}function Ql(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var u=a.create,x=a.inst;r=u(),x.destroy=r}a=a.next}while(a!==c)}}catch(w){Zt(n,n.return,w)}}function Ja(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&e)===e){var x=r.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,c=n;var G=a,se=w;try{se()}catch(pe){Zt(c,G,pe)}}}r=r.next}while(r!==u)}}catch(pe){Zt(n,n.return,pe)}}function jg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{U0(n,a)}catch(r){Zt(e,e.return,r)}}}function kg(e,n,a){a.props=Hr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Zt(e,n,r)}}function Yi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,u=ha(e.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=Qx(u)),r=c.ref;break;case 7:if(e.stateNode===null){var x=new hi(e);_(e.child,!1,WM,x,void 0,void 0),e.stateNode=x}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(w){Zt(e,n,w)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Zt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Zt(e,n,c)}else a.current=null}function Ec(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)iv(e.stateNode,n[a])}function Xg(e){for(var n=e.return;n!==null&&(yd(n)&&iv(e.stateNode,n.stateNode),!_d(n));)n=n.return}function Jl(e){for(var n=e.return;n!==null&&(yd(n)&&YM(e.stateNode,n.stateNode),!_d(n));)n=n.return}function _d(e){return e.tag===5||e.tag===3||e.tag===27}function yd(e){return e&&e.tag===7&&e.stateNode!==null}function bd(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Zt(e,e.return,c)}}function Md(e,n,a){try{var r=e.stateNode;CM(r,e.type,a,n),r[de]=n}catch(c){Zt(e,e.return,c)}}function qg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rr(e.type)||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ed(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi)),Ec(e,r),ct=!0;else if(c!==4&&(c===27&&(Ec(e,r),r=null,rr(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Ed(e,n,a,r),e=e.sibling;e!==null;)Ed(e,n,a,r),e=e.sibling}function Tc(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Ec(e,r),ct=!0;else if(c!==4&&(c===27&&(Ec(e,r),r=null,rr(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Tc(e,n,a,r),e=e.sibling;e!==null;)Tc(e,n,a,r),e=e.sibling}function Wg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);In(n,r,a),n[$]=e,n[de]=a}catch(u){Zt(e,e.return,u)}}var Ac=!1,ci=null;function Yg(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Ac=!0)}var Zi=null;function Zg(){var e=Zi;return Zi=null,e}var Jn=0;function Rs(e,n,a,r,c){return Jn=0,Kg(e.child,n,a,r,c)}function Kg(e,n,a,r,c){for(var u=!1;e!==null;){if(e.tag===5){var x=e.stateNode;if(r!==null){var w=lh(x);r.push(w),w.view&&(u=!0)}else u||lh(x).view&&(u=!0);Ac=!0,Zx(x,Jn===0?n:n+"_"+Jn,a),Jn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Kg(e.child,n,a,r,c)&&(u=!0));e=e.sibling}return u}function Ki(e,n){for(;e!==null;)e.tag===5?Kx(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ki(e.child,n)),e=e.sibling}function wc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(wc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Rs(e,a,n,null,!1)||Ki(e.child,!1))}e=e.sibling}}function Td(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=ha(r,a),u=pa(r.default,a.paired?r.share:r.enter);u!=="none"?Rs(e,c,u,null,!1)?(wc(e),a.paired||n||Is(e,r.onEnter)):Ki(e.child,!1):wc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Td(e,n),e=e.sibling;else wc(e)}function Ad(e){if(ci!==null&&ci.size!==0){var n=ci;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var u=pa(a.default,a.share);if(u!=="none"&&(Rs(e,r,u,null,!1)?(u=e.stateNode,c.paired=u,u.paired=c,Is(e,a.onShare)):Ki(e.child,!1)),n.delete(r),n.size===0)break}}}Ad(e)}e=e.sibling}}}function wd(e){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode),r=ci!==null?ci.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Rs(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ci.delete(a),Is(e,n.onShare)):Is(e,n.onExit):Ki(e.child,!1)),ci!==null&&Ad(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)wd(e),e=e.sibling;else ci!==null&&Ad(e)}function Qg(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ha(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&Rs(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Qg(e);e=e.sibling}}function Rd(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ki(e.child,!1))}Rd(e)}e=e.sibling}}function Rc(e){if(e.tag===30)e.stateNode.paired=null,Ki(e.child,!1),Rd(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Rc(e),e=e.sibling;else Rd(e)}function Jg(e){for(e=e.child;e!==null;)e.tag===30?Ki(e.child,!1):(e.subtreeFlags&33554432)!==0&&Jg(e),e=e.sibling}function Cd(e,n,a,r,c,u,x){for(var w=!1;n!==null;){if(n.tag===5){var G=n.stateNode;if(u!==null&&Jn<u.length){var se=u[Jn],pe=lh(G);(se.view||pe.view)&&(w=!0);var Ae;if(Ae=(e.flags&4)===0)if(pe.clip)Ae=!0;else{Ae=se.rect;var ne=pe.rect;Ae=Ae.y!==ne.y||Ae.x!==ne.x||Ae.height!==ne.height||Ae.width!==ne.width}Ae&&(e.flags|=4),pe.abs?pe=!se.abs:(se=se.rect,pe=pe.rect,pe=se.height!==pe.height||se.width!==pe.width),pe&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&Zx(G,Jn===0?a:a+"_"+Jn,c),w&&(e.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(G,Jn===0?r:r+"_"+Jn,n.memoizedProps)),Jn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&x?e.flags|=n.flags&32:Cd(e,n.child,a,r,c,u,x)&&(w=!0));n=n.sibling}return w}function $g(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=ha(a,r),u=pa(a.default,a.update),x;x=e.memoizedState,e.memoizedState=null,r=e;var w=e.child;Jn=0,c=Cd(r,w,c,c,u,x,!1),(e.flags&4)!==0&&c&&Is(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&$g(e);e=e.sibling}}var wn=!1,qt=!1,Qi=!1,Nd=!1,ex=typeof WeakSet=="function"?WeakSet:Set,Rn=null,Ji=!1,$l=!1,Cc=!1,Dd=!1;function aM(e,n,a){if(e=e.containerInfo,nh=qs,e=a0(e),xf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var u=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break e}var w=0,G=-1,se=-1,pe=0,Ae=0,ne=e,fe=null;t:for(;;){for(var je;ne!==r||u!==0&&ne.nodeType!==3||(G=w+u),ne!==x||c!==0&&ne.nodeType!==3||(se=w+c),ne.nodeType===3&&(w+=ne.nodeValue.length),(je=ne.firstChild)!==null;)fe=ne,ne=je;for(;;){if(ne===e)break t;if(fe===r&&++pe===u&&(G=w),fe===x&&++Ae===c&&(se=w),(je=ne.nextSibling)!==null)break;ne=fe,fe=ne.parentNode}ne=je}r=G===-1||se===-1?null:{start:G,end:se}}else r=null}r=r||{start:0,end:0}}else r=null;for(ih={focusedElem:e,selectionRange:r},qs=!1,a=(a&335544064)===a,Rn=n,n=a?9270:1024;Rn!==null;){if(e=Rn,a&&(r=e.deletions,r!==null))for(u=0;u<r.length;u++)a&&wd(r[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&Yg(e),Nc(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&wd(r),Nc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&Yg(e),Nc(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Rn=r):(a&&Qg(e),Nc(a))}}ci=null}function Nc(e){for(;Rn!==null;){var n=Rn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var x=Hr(n.type,c);a=u.getSnapshotBeforeUpdate(x,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(w){Zt(n,n.return,w)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)uh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":uh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ha(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&Rs(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Rn=r;break}Rn=n.return}}function tx(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),r&4&&Ql(5,a);break;case 1:if($i(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Zt(a,a.return,x)}else{var c=Hr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Zt(a,a.return,x)}}r&64&&jg(a),r&512&&Yi(a,a.return);break;case 3:if($i(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{U0(e,n)}catch(x){Zt(a,a.return,x)}}break;case 27:n===null&&r&4&&Wg(a);case 26:case 5:$i(e,a),n===null&&r&4&&bd(a),r&512&&Yi(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),r&4&&rx(e,a);break;case 13:$i(e,a),r&4&&sx(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gM.bind(null,a),QM(e,a))));break;case 22:if(r=a.memoizedState!==null||wn,!r){var u=n!==null&&n.memoizedState!==null||qt;n=wn,c=qt,wn=r,(qt=u)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Pi(e,a,r)):$i(e,a),wn=n,qt=c}break;case 30:$i(e,a),r&512&&Yi(a,a.return);break;case 7:r&512&&Yi(a,a.return);default:$i(e,a)}}function Ud(e,n){for(e=e.child;e!==null;)nx(e,n),e=e.sibling}function nx(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,u=e.memoizedProps.style,x=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(G){Zt(e,e.return,G)}Ld(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ct=!0}catch(G){Zt(e,e.return,G)}break;case 18:try{var w=e.stateNode;n?Yx(w,!0):Yx(e.stateNode,!1)}catch(G){Zt(e,e.return,G)}break;case 22:case 23:e.memoizedState===null&&Ud(e,n);break;default:Ud(e,n)}}function Ld(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,r=n;switch(a.tag){case 4:nx(a,r);break e;case 22:a.memoizedState===null&&Ld(a,r);break e;default:Ld(a,r)}}e=e.sibling}}function ix(e){var n=e.alternate;n!==null&&(e.alternate=null,ix(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,$n=!1;function Li(e,n,a){for(a=a.child;a!==null;)ax(e,n,a),a=a.sibling}function ax(e,n,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 26:qt||Pn(a,n),Li(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!qt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:qt||Pn(a,n),Jl(a);var r=sn,c=$n;rr(a.type)&&(sn=a.stateNode,$n=!1),Li(e,n,a),ov(a.stateNode,a.type,a.memoizedProps),sn=r,$n=c;break;case 5:qt||Pn(a,n),Jl(a);case 6:if(a.tag===6&&Jl(a),r=sn,c=$n,sn=null,Li(e,n,a),sn=r,$n=c,sn!==null)if($n)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),ct=!0}catch(u){Zt(a,n,u)}else try{sn.removeChild(a.stateNode),ct=!0}catch(u){Zt(a,n,u)}break;case 18:sn!==null&&($n?(e=sn,Wx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ws(e)):Wx(sn,a.stateNode));break;case 4:r=sn,c=$n,sn=a.stateNode.containerInfo,$n=!0,Li(e,n,a),sn=r,$n=c;break;case 0:case 11:case 14:case 15:Ja(2,a,n),qt||Ja(4,a,n),Li(e,n,a);break;case 1:qt||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&kg(a,n,r)),Li(e,n,a);break;case 21:Li(e,n,a);break;case 22:qt=(r=qt)||a.memoizedState!==null,Li(e,n,a),qt=r;break;case 30:Pn(a,n),Li(e,n,a);break;case 7:qt||Pn(a,n),Li(e,n,a);break;default:Li(e,n,a)}}function rx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ws(e)}catch(a){Zt(n,n.return,a)}}}function sx(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ws(e)}catch(a){Zt(n,n.return,a)}}function rM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ex),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ex),n;default:throw Error(s(435,e.tag))}}function Dc(e,n){var a=rM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=xM.bind(null,e,r);r.then(c,c)}})}function Xn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var u=r[c],x=e,w=n,G=w;e:for(;G!==null;){switch(G.tag){case 27:if(rr(G.type)){sn=G.stateNode,$n=!1;break e}break;case 5:sn=G.stateNode,$n=!1;break e;case 3:case 4:sn=G.stateNode.containerInfo,$n=!0;break e}G=G.return}if(sn===null)throw Error(s(160));ax(x,w,u),sn=null,$n=!1,x=u.alternate,x!==null&&(x.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lx(n,e,a),n=n.sibling}var Oi=null;function lx(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var x=r[u];x.ref.impl=x.nextImpl}Xn(n,e,a),qn(e),c&4&&(Ja(3,e,e.return),Ql(3,e),Ja(5,e,e.return));break;case 1:Xn(n,e,a),qn(e),c&512&&(qt||r===null||Pn(r,r.return)),c&64&&wn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Oi,Xn(n,e,a),qn(e),c&512&&(qt||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(wn)e.stateNode=kx(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=u.ownerDocument||u;t:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[nt]||r[$]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),In(r,n,a),r[$]=e,St(r),n=r;break e;case"link":if(u=pv("link","href",c).get(n+(a.href||""))){for(x=0;x<u.length;x++)if(r=u[x],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(x,1);break t}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;case"meta":if(u=pv("meta","content",c).get(n+(a.content||""))){for(x=0;x<u.length;x++)if(r=u[x],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(x,1);break t}}r=c.createElement(n),In(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[$]=e,St(r),n=r}e.stateNode=n}else wn||xh(u,e.type,e.stateNode);else e.stateNode=hv(u,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||qt||n.parentNode.removeChild(n)):c.count--,a===null?wn||xh(u,e.type,e.stateNode):hv(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Md(e,e.memoizedProps,r.memoizedProps);break;case 27:Xn(n,e,a),qn(e),c&512&&(qt||r===null||Pn(r,r.return)),r!==null&&c&4&&Md(e,e.memoizedProps,r.memoizedProps);break;case 5:if(u=Qi,Qi=!1,Xn(n,e,a),Qi=u,qn(e),c&512&&(qt||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{us(n,""),ct=!0}catch(pe){Zt(e,e.return,pe)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Md(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Nd=!0);break;case 6:if(Xn(n,e,a),qn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ct=!0}catch(pe){Zt(e,e.return,pe)}}break;case 3:if(ct=!1,qc=null,u=Oi,Oi=oo(n.containerInfo),Xn(n,e,a),Oi=u,qn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Ws(n.containerInfo)}catch(pe){Zt(e,e.return,pe)}Nd&&(Nd=!1,ox(e)),ct=!1;break;case 4:c=Qi,Qi=wn,r=rn(),u=Oi,Oi=oo(e.stateNode.containerInfo),Xn(n,e,a),qn(e),Oi=u,ct&&$l&&(Cc=!0),ct=r,Qi=c;break;case 12:Xn(n,e,a),qn(e);break;case 31:Xn(n,e,a),qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Dc(e,n)));break;case 13:Xn(n,e,a),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Oc=qe()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Dc(e,n)));break;case 22:u=e.memoizedState!==null,x=r!==null&&r.memoizedState!==null;var w=wn,G=qt,se=Qi;wn=w||u,Qi=se||u,qt=G||x,Xn(n,e,a),qt=G,Qi=se,wn=w,qn(e),c&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||x||wn||qt||(n=x||qt,a=wn,r=qt,wn=u||wn,qt=n,$a(e,2),wn=a,qt=r),!u&&Qi||Ud(e,u)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Dc(e,a))));break;case 19:Xn(n,e,a),qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Dc(e,n)));break;case 30:c&512&&(qt||r===null||Pn(r,r.return)),c=rn(),u=$l,x=(a&335544064)===a,w=e.memoizedProps,$l=x&&pa(w.default,w.update)!=="none",Xn(n,e,a),qn(e),x&&r!==null&&ct&&(e.flags|=4),$l=u,ct=c;break;case 21:break;case 7:c&512&&(qt||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Xn(n,e,a),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(qg(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(yd(c)){var u=c.stateNode;r===null?r=[u]:r.push(u)}if(_d(c))break;c=c.return}var x=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var w=a.stateNode,G=Sd(e);Tc(e,G,w,x);break;case 5:var se=a.stateNode;a.flags&32&&(us(se,""),a.flags&=-33);var pe=Sd(e);Tc(e,pe,se,x);break;case 3:case 4:var Ae=a.stateNode.containerInfo,ne=Sd(e);Ed(e,ne,Ae,x);break;default:throw Error(s(161))}}catch(fe){Zt(e,e.return,fe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ox(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ox(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,qs=!0,n.reset(),qs=!1),e=e.sibling}}function Cs(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)cx(n,e),n=n.sibling;else $g(n)}function cx(e,n){var a=e.alternate;if(a===null)Td(e,!1);else switch(e.tag){case 3:if(Dd=Ji=!1,Zg(),Cs(n,e),!Ji&&!Cc){if(e=Zi,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];Kx(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Dd=!0}Zi=null;break;case 5:Cs(n,e);break;case 4:r=Ji,Ji=!1,Cs(n,e),Ji&&(Cc=!0),Ji=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Td(e,!1):Cs(n,e));break;case 30:r=Ji,c=Zg(),Ji=!1,Cs(n,e),Ji&&(e.flags|=4);var u=e.memoizedProps,x=e.stateNode;n=ha(u,x),x=ha(a.memoizedProps,x);var w=pa(u.default,u.update);w==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,Jn=0,n=Cd(e,a,n,x,w,u,!0),Jn!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Is(e,e.memoizedProps.onUpdate),Zi=c):c!==null&&(c.push.apply(c,Zi),Zi=c),Ji=(e.flags&32)!==0?!0:r;break;default:Cs(n,e)}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tx(e,n.alternate,n),n=n.sibling}function $a(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),$a(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&kg(a,a.return,c),$a(a,r);break;case 27:(r&2)!==0&&ov(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||Jl(a),$a(a,r);break;case 6:Jl(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||qt||c.parentNode.removeChild(c),$a(a,r);break;case 22:a.memoizedState===null&&$a(a,r);break;case 30:Pn(a,a.return),$a(a,r);break;case 7:Pn(a,a.return);default:$a(a,r)}e=e.sibling}}function Pi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,u=n,x=u.flags,w=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Pi(c,u,a),Ql(4,u);break;case 1:if(Pi(c,u,a),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(pe){Zt(r,r.return,pe)}if(r=u,c=r.updateQueue,c!==null){var G=r.stateNode;try{var se=c.shared.hiddenCallbacks;if(se!==null)for(c.shared.hiddenCallbacks=null,c=0;c<se.length;c++)D0(se[c],G)}catch(pe){Zt(r,r.return,pe)}}w&&x&64&&jg(u),Yi(u,u.return);break;case 27:(a&2)!==0&&Wg(u);case 5:u.tag!==5&&u.tag!==27||Xg(u),Pi(c,u,a),w&&r===null&&x&4&&bd(u),Yi(u,u.return);break;case 6:Xg(u);break;case 26:G=u.stateNode,u.memoizedState!==null||G===null||wn||xh(oo(G.ownerDocument),u.type,G),Pi(c,u,a),w&&r===null&&x&4&&bd(u),Yi(u,u.return);break;case 12:Pi(c,u,a);break;case 31:Pi(c,u,a),w&&x&4&&rx(c,u);break;case 13:Pi(c,u,a),w&&x&4&&sx(c,u);break;case 22:u.memoizedState===null&&Pi(c,u,a),Yi(u,u.return);break;case 30:Pi(c,u,a),Yi(u,u.return);break;case 7:Yi(u,u.return);default:Pi(c,u,a)}n=n.sibling}}function Od(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fl(a))}function Pd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Fl(e))}function Ti(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)ux(e,n,a,r),n=n.sibling;else c&&Jg(n)}function ux(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Rc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),u&2048&&Ql(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),c&&Dd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Fl(u)));break;case 12:if(u&2048){Ti(e,n,a,r),u=n.stateNode;try{var x=n.memoizedProps,w=x.id,G=x.onPostCommit;typeof G=="function"&&G(w,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(se){Zt(n,n.return,se)}}else Ti(e,n,a,r);break;case 31:Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:x=n.stateNode,w=n.alternate,n.memoizedState!==null?(c&&w!==null&&w.memoizedState===null&&Rc(w),x._visibility&2?Ti(e,n,a,r):eo(e,n)):(c&&w!==null&&w.memoizedState!==null&&Rc(n),x._visibility&2?Ti(e,n,a,r):(x._visibility|=2,Ns(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Od(w,n);break;case 24:Ti(e,n,a,r),u&2048&&Pd(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Ki(u.child,!0),Ki(n.child,!0))),Ti(e,n,a,r);break;default:Ti(e,n,a,r)}}function Ns(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,x=n,w=a,G=r,se=x.flags;switch(x.tag){case 0:case 11:case 15:Ns(u,x,w,G,c),Ql(8,x);break;case 23:break;case 22:var pe=x.stateNode;x.memoizedState!==null?pe._visibility&2?Ns(u,x,w,G,c):eo(u,x):(pe._visibility|=2,Ns(u,x,w,G,c)),c&&se&2048&&Od(x.alternate,x);break;case 24:Ns(u,x,w,G,c),c&&se&2048&&Pd(x.alternate,x);break;default:Ns(u,x,w,G,c)}n=n.sibling}}function eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:eo(a,r),c&2048&&Od(r.alternate,r);break;case 24:eo(a,r),c&2048&&Pd(r.alternate,r);break;default:eo(a,r)}n=n.sibling}}var Gr=8192;function Vr(e,n,a){if(e.subtreeFlags&Gr)for(e=e.child;e!==null;)fx(e,n,a),e=e.sibling}function fx(e,n,a){switch(e.tag){case 26:Vr(e,n,a),e.flags&Gr&&(e.memoizedState!==null?fS(a,Oi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&vv(a,e)));break;case 5:Vr(e,n,a),e.flags&Gr&&(e=e.stateNode,(n&335544128)===n&&vv(a,e));break;case 3:case 4:var r=Oi;Oi=oo(e.stateNode.containerInfo),Vr(e,n,a),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Gr,Gr=16777216,Vr(e,n,a),Gr=r):Vr(e,n,a));break;case 30:if((e.flags&Gr)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Vr(e,n,a);break;default:Vr(e,n,a)}}function dx(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function to(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,px(r,e)}dx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hx(e),e=e.sibling}function hx(e){switch(e.tag){case 0:case 11:case 15:to(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:to(e);break;case 12:to(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Uc(e)):to(e);break;default:to(e)}}function Uc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Rn=r,px(r,e)}dx(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),Uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Uc(n));break;default:Uc(n)}e=e.sibling}}function px(e,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fl(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Rn=r;else e:for(a=e;Rn!==null;){r=Rn;var c=r.sibling,u=r.return;if(ix(r),r===a){Rn=null;break e}if(c!==null){c.return=u,Rn=c;break e}Rn=u}}}var sM={getCacheForType:function(e){var n=Un(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(mn).controller.signal}},lM=typeof WeakMap=="function"?WeakMap:Map,kt=0,en=null,Dt=null,Ot=0,Yt=0,ui=null,er=!1,Ds=!1,Id=!1,Sa=0,fn=0,tr=0,jr=0,Lc=0,fi=0,Us=0,no=null,ei=null,zd=!1,Oc=0,mx=0,Pc=1/0,Ic=null,nr=null,on=0,Ii=null,kr=null,ea=0,Fd=0,Bd=null,gx=null,Ls=null,Os=null,Ps=null,io=0,zc=null;function di(){return(kt&2)!==0&&Ot!==0?Ot&-Ot:ge.T!==null?Zd():Io()}function xx(){if(fi===0)if((Ot&536870912)===0||Rt){var e=Sr;Sr<<=1,(Sr&3932160)===0&&(Sr=262144),fi=e}else fi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),fi}function Is(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=Qx(ha(e.memoizedProps,a))),Os===null&&(Os=[]),Os.push(n.bind(null,r))}}function ti(e,n,a){(e===en&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(zs(e,0),ir(e,Ot,fi,!1)),ki(e,a),((kt&2)===0||e!==en)&&(e===en&&((kt&2)===0&&(jr|=a),fn===4&&ir(e,Ot,fi,!1)),ta(e))}function vx(e,n,a){if((kt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||za(e,n),c=r?uM(e,n):Gd(e,n,!0),u=r;do{if(c===0){Ds&&!r&&ir(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!oM(a)){c=Gd(e,n,!1),u=!1;continue}if(c===2){if(u=n,e.errorRecoveryDisabledLanes&u)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=e;c=no;var G=w.current.memoizedState.isDehydrated;if(G&&(zs(w,x).flags|=256),x=Gd(w,x,!1),x!==2&&x!==6){if(Id&&!G){w.errorRecoveryDisabledLanes|=u,jr|=u,c=4;break e}u=ei,ei=c,u!==null&&(ei===null?ei=u:ei.push.apply(ei,u))}c=x}if(u=!1,c!==2)continue}}if(c===1){zs(e,0),ir(e,n,0,!0);break}e:{switch(r=e,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ir(r,n,fi,!er);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Oc+300-qe(),10<c)){if(ir(r,n,fi,!er),Er(r,0,!0)!==0)break e;ea=n,r.timeoutHandle=sh(_x.bind(null,r,a,ei,Ic,zd,n,fi,jr,Us,er,u,"Throttled",-0,0),c);break e}_x(r,a,ei,Ic,zd,n,fi,jr,Us,er,u,null,-0,0)}}break}while(!0);ta(e)}function _x(e,n,a,r,c,u,x,w,G,se,pe,Ae,ne,fe){e.timeoutHandle=-1;var je=n.subtreeFlags,at=(u&335544064)===u;if(Ae=null,(at||je&8192||(je&16785408)===16785408)&&(Ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ci=null,fx(n,u,Ae),at&&(je=Ae,at=e.containerInfo,at=(at.nodeType===9?at:at.ownerDocument).__reactViewTransition,at!=null&&(je.count++,je.waitingForViewTransition=!0,je=fo.bind(je),at.finished.then(je,je))),je=(u&62914560)===u?Oc-qe():(u&4194048)===u?mx-qe():0,je=dS(Ae,je),je!==null)){ea=u,e.cancelPendingCommit=je(wx.bind(null,e,n,u,a,r,c,x,w,G,se,pe,Ae,null,ne,fe)),ir(e,u,x,!se);return}wx(e,n,u,a,r,c,x,w,G,se,pe,Ae)}function oM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],u=c.getSnapshot;c=c.value;try{if(!li(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ir(e,n,a,r){n=ji(e,n),n&=~Lc,n&=~jr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var u=31-Et(c),x=1<<u;r[u]=-1,c&=~x}a!==0&&Tr(e,a,n)}function Fc(){return(kt&6)===0?(ao(0),!1):!0}function Hd(){if(Dt!==null){if(Yt===0)var e=Dt.return;else e=Dt,xa=Dr=null,Yf(e),Ss=null,Gl=0,e=Dt;for(;e!==null;)Vg(e.alternate,e),e=e.return;Dt=null}}function zs(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,UM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Hd(),en=e,Dt=a=ma(e.current,null),Ot=n,Yt=0,ui=null,er=!1,Ds=za(e,n),Id=!1,Us=fi=Lc=jr=tr=fn=0,ei=no=null,zd=!1,Sa=ji(e,n),qo(),a}function yx(e,n){bt=null,ge.H=xc,n===Ms||n===ic?(n=w0(),Yt=3):n===Pf?(n=w0(),Yt=4):Yt=n===cd?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Dt===null&&(fn=1,vc(e,bi(n,e.current)))}function bx(){var e=Ln.current;return e===null?!0:(Ot&4194048)===Ot?Bn===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?e===Bn:!1}function Mx(){var e=ge.H;return ge.H=xc,e===null?xc:e}function Sx(){var e=ge.A;return ge.A=sM,e}function Bc(){fn=4,er||(Ot&4194048)!==Ot&&Ln.current!==null||(Ds=!0),(tr&134217727)===0&&(jr&134217727)===0||en===null||ir(en,Ot,fi,!1)}function Gd(e,n,a){var r=kt;kt|=2;var c=Mx(),u=Sx();(en!==e||Ot!==n)&&(Ic=null,zs(e,n)),n=!1;var x=fn;e:do try{if(Yt!==0&&Dt!==null){var w=Dt,G=ui;switch(Yt){case 8:Hd(),x=6;break e;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var se=Yt;if(Yt=0,ui=null,Fs(e,w,G,se),a&&Ds){x=0;break e}break;default:se=Yt,Yt=0,ui=null,Fs(e,w,G,se)}}cM(),x=fn;break}catch(pe){yx(e,pe)}while(!0);return n&&e.shellSuspendCounter++,xa=Dr=null,kt=r,ge.H=c,ge.A=u,Dt===null&&(en=null,Ot=0,qo()),x}function cM(){for(;Dt!==null;)Ex(Dt)}function uM(e,n){var a=kt;kt|=2;var r=Mx(),c=Sx();en!==e||Ot!==n?(Ic=null,Pc=qe()+500,zs(e,n)):Ds=za(e,n);e:do try{if(Yt!==0&&Dt!==null){n=Dt;var u=ui;t:switch(Yt){case 1:Yt=0,ui=null,Fs(e,n,u,1);break;case 2:case 9:if(T0(u)){Yt=0,ui=null,Tx(n);break}n=function(){Yt!==2&&Yt!==9||en!==e||(Yt=7),ta(e)},u.then(n,n);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:T0(u)?(Yt=0,ui=null,Tx(n)):(Yt=0,ui=null,Fs(e,n,u,7));break;case 5:var x=null;switch(Dt.tag){case 26:x=Dt.memoizedState;case 5:case 27:var w=Dt;if(x?gv(x):w.stateNode.complete){Yt=0,ui=null;var G=w.sibling;if(G!==null)Dt=G;else{var se=w.return;se!==null?(Dt=se,Hc(se)):Dt=null}break t}}Yt=0,ui=null,Fs(e,n,u,5);break;case 6:Yt=0,ui=null,Fs(e,n,u,6);break;case 8:Hd(),fn=6;break e;default:throw Error(s(462))}}fM();break}catch(pe){yx(e,pe)}while(!0);return xa=Dr=null,ge.H=r,ge.A=c,kt=a,Dt!==null?0:(en=null,Ot=0,qo(),fn)}function fM(){for(;Dt!==null&&!He();)Ex(Dt)}function Ex(e){var n=Hg(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,n===null?Hc(e):Dt=n}function Tx(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Lg(a,n,n.pendingProps,n.type,void 0,Ot);break;case 11:n=Lg(a,n,n.pendingProps,n.type.render,n.ref,Ot);break;case 5:Yf(n);var r=n;r===An&&(Rt?(Jo(r),r.tag===5&&r.stateNode!=null&&(tn=r.stateNode)):(Jo(r),Rt=!0));default:Vg(a,n),n=Dt=p0(n,Sa),n=Hg(a,n,Sa)}e.memoizedProps=e.pendingProps,n===null?Hc(e):Dt=n}function Fs(e,n,a,r){xa=Dr=null,Yf(n),Ss=null,Gl=0;var c=n.return;try{if(Jb(e,c,n,a,Ot)){fn=1,vc(e,bi(a,e.current)),Dt=null;return}}catch(u){if(c!==null)throw Dt=c,u;fn=1,vc(e,bi(a,e.current)),Dt=null;return}n.flags&32768?(Rt||r===1?e=!0:Ds||(Ot&536870912)!==0?e=!1:(er=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ax(n,e)):Hc(n)}function Hc(e){var n=e;do{if((n.flags&32768)!==0){Ax(n,er);return}e=n.return;var a=nM(n.alternate,n,Sa);if(a!==null){Dt=a;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=e}while(n!==null);fn===0&&(fn=5)}function Ax(e,n){do{var a=iM(e.alternate,e);if(a!==null){a.flags&=32767,Dt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Dt=e;return}Dt=e=a}while(e!==null);fn=6,Dt=null}function wx(e,n,a,r,c,u,x,w,G,se,pe,Ae){e.cancelPendingCommit=null;do Gc();while(on!==0);if((kt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===en&&(Dt=en=null,Ot=0),kr=n,Ii=e,ea=a,Bd=c,gx=r,dM(e,n,a,x,w,G,Ae)}}function dM(e,n,a,r,c,u,x){var w=n.lanes|n.childLanes;if(Fd=w,w|=Mf,Po(e,a,w,r,c,u),Os=null,(a&335544064)===a?(Ps=Hb(e),r=10262):(Ps=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vM(Ie,function(){return Xd(),null})):(e.callbackNode=null,e.callbackPriority=0),Ac=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=ge.T,ge.T=null,c=Ce.p,Ce.p=2,u=kt,kt|=4;try{aM(e,n,a)}finally{kt=u,Ce.p=c,ge.T=r}}on=1,Ac?Ls=FM(x,e.containerInfo,Ps,Vd,jd,pM,kd,Xd,hM):(Vd(),jd(),kd())}function hM(e){if(on!==0){var n=Ii.onRecoverableError;n(e,{componentStack:null})}}function pM(){on===3&&(on=0,cx(kr,Ii),on=4)}function Vd(){if(on===1){on=0;var e=Ii,n=kr,a=ea,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=ge.T,ge.T=null;var c=Ce.p;Ce.p=2;var u=kt;kt|=4;try{$l=Cc=!1,lx(n,e,a),a=ih;var x=a0(e.containerInfo),w=a.focusedElem,G=a.selectionRange;if(x!==w&&w&&w.ownerDocument&&i0(w.ownerDocument.documentElement,w)){if(G!==null&&xf(w)){var se=G.start,pe=G.end;if(pe===void 0&&(pe=se),"selectionStart"in w)w.selectionStart=se,w.selectionEnd=Math.min(pe,w.value.length);else{var Ae=w.ownerDocument||document,ne=Ae&&Ae.defaultView||window;if(ne.getSelection){var fe=ne.getSelection(),je=w.textContent.length,at=Math.min(G.start,je),Mt=G.end===void 0?at:Math.min(G.end,je);!fe.extend&&at>Mt&&(x=Mt,Mt=at,at=x);var re=n0(w,at),q=n0(w,Mt);if(re&&q&&(fe.rangeCount!==1||fe.anchorNode!==re.node||fe.anchorOffset!==re.offset||fe.focusNode!==q.node||fe.focusOffset!==q.offset)){var ce=Ae.createRange();ce.setStart(re.node,re.offset),fe.removeAllRanges(),at>Mt?(fe.addRange(ce),fe.extend(q.node,q.offset)):(ce.setEnd(q.node,q.offset),fe.addRange(ce))}}}}for(Ae=[],fe=w;fe=fe.parentNode;)fe.nodeType===1&&Ae.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ae.length;w++){var Ee=Ae[w];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}qs=!!nh,ih=nh=null}finally{kt=u,Ce.p=c,ge.T=r}}e.current=n,on=2}}function jd(){if(on===2){on=0;var e=Ii,n=kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=ge.T,ge.T=null;var r=Ce.p;Ce.p=2;var c=kt;kt|=4;try{tx(e,n.alternate,n)}finally{kt=c,Ce.p=r,ge.T=a}}on=3}}function kd(){if(on===4||on===3){on=0;var e=Ls;Ls=null,Fe();var n=Ii,a=kr,r=ea,c=gx,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?on=5:(on=0,kr=Ii=null,Rx(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(nr=null),Tl(r),a=a.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(it,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=ge.T,u=Ce.p,Ce.p=2,ge.T=null;try{for(var x=n.onRecoverableError,w=0;w<c.length;w++){var G=c[w];x(G.value,{componentStack:G.stack})}}finally{ge.T=a,Ce.p=u}}if(c=Os,x=Ps,Ps=null,c!==null&&(Os=null,x===null&&(x=[]),e!==null))for(G=0;G<c.length;G++)a=(0,c[G])(x),a!==void 0&&e.finished.finally(a);(ea&3)!==0&&Gc(),ta(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===zc?io++:(io=0,zc=n):(io=0,zc=null),ao(0)}}function Rx(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Fl(n)))}function Gc(){return Ls!==null&&(Ls.skipTransition(),Ls=null),Vd(),jd(),kd(),Xd()}function Xd(){if(on!==5)return!1;var e=Ii,n=Fd;Fd=0;var a=Tl(ea),r=ge.T,c=Ce.p;try{Ce.p=32>a?32:a,ge.T=null,a=Bd,Bd=null;var u=Ii,x=ea;if(on=0,kr=Ii=null,ea=0,(kt&6)!==0)throw Error(s(331));var w=kt;if(kt|=4,hx(u.current),ux(u,u.current,x,a),kt=w,ao(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(it,u)}catch{}return!0}finally{Ce.p=c,ge.T=r,Rx(e,n)}}function Cx(e,n,a){n=bi(a,n),n=od(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(ki(e,2),ta(e))}function Zt(e,n,a){if(e.tag===3)Cx(e,e,a);else for(;n!==null;){if(n.tag===3){Cx(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){e=bi(a,e),a=Tg(2),r=Ya(n,a,2),r!==null&&(Ag(a,r,n,e),ki(r,2),ta(r));break}}n=n.return}}function qd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new lM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Id=!0,c.add(a),e=mM.bind(null,e,n,a),n.then(e,e))}function mM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,en===e&&(Ot&a)===a&&((fn===4||fn===3&&(Ot&62914560)===Ot&&300>qe()-Oc)&&(kt&2)===0?zs(e,0):Lc|=a,Us===Ot&&(Us=0)),ta(e)}function Nx(e,n){n===0&&(n=bl()),e=Rr(e,n),e!==null&&(ki(e,n),ta(e))}function gM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Nx(e,a)}function xM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Nx(e,a)}function vM(e,n){return Le(e,n)}var Bs=null,Hs=null,Wd=!1,Vc=!1,Yd=!1,ar=0;function ta(e){e!==Hs&&e.next===null&&(Hs===null?Bs=Hs=e:Hs=Hs.next=e),Vc=!0,Wd||(Wd=!0,yM())}function ao(e,n){if(!Yd&&Vc){Yd=!0;do for(var a=!1,r=Bs;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var x=r.suspendedLanes,w=r.pingedLanes;u=(1<<31-Et(42|e)+1)-1,u&=c&~(x&~w),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Ox(r,u))}else u=Ot,u=Er(r,r===en?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||za(r,u)||(a=!0,Ox(r,u));r=r.next}while(a);Yd=!1}}function _M(){Dx()}function Dx(){Vc=Wd=!1;var e=0;ar!==0&&DM()&&(e=ar);for(var n=qe(),a=null,r=Bs;r!==null;){var c=r.next,u=Ux(r,n);u===0?(r.next=null,a===null?Bs=c:a.next=c,c===null&&(Hs=a)):(a=r,(e!==0||(u&3)!==0)&&(Vc=!0)),r=c}on!==0&&on!==5||ao(e),ar!==0&&(ar=0)}function Ux(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var x=31-Et(u),w=1<<x,G=c[x];G===-1?((w&a)===0||(w&r)!==0)&&(c[x]=yl(w,n)):G<=n&&(e.expiredLanes|=w),u&=~w}if(n=en,a=Ot,a=Er(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||za(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),Tl(a)){case 2:case 8:a=Q;break;case 32:a=Ie;break;case 268435456:a=Ge;break;default:a=Ie}return r=Lx.bind(null,e),a=Le(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function Lx(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gc()&&e.callbackNode!==a)return null;var r=Ot;return r=Er(e,e===en?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(vx(e,r,n),Ux(e,qe()),e.callbackNode!=null&&e.callbackNode===a?Lx.bind(null,e):null)}function Ox(e,n){if(Gc())return null;vx(e,n,!0)}function yM(){LM(function(){(kt&6)!==0?Le(dt,_M):Dx()})}function Zd(){if(ar===0){var e=Or;e===0&&(e=ls,ls<<=1,(ls&261888)===0&&(ls=256)),ar=e}return ar}function Px(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fo(e)}function bM(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var u=Px((c[de]||null).action),x=r.submitter;x&&(n=(n=x[de]||null)?Px(n.formAction):x.getAttribute("formAction"),n!==null&&(u=n,x=null));var w=new Vo("action","action",null,r,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ar!==0){var G=new FormData(c,x);id(a,{pending:!0,data:G,method:c.method,action:u},null,G)}}else typeof u=="function"&&(w.preventDefault(),G=new FormData(c,x),id(a,{pending:!0,data:G,method:c.method,action:u},u,G))},currentTarget:c}]})}}for(var Kd=0;Kd<bf.length;Kd++){var Qd=bf[Kd],MM=Qd.toLowerCase(),SM=Qd[0].toUpperCase()+Qd.slice(1);Ui(MM,"on"+SM)}Ui(l0,"onAnimationEnd"),Ui(o0,"onAnimationIteration"),Ui(c0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Ub,"onTransitionRun"),Ui(Lb,"onTransitionStart"),Ui(Ob,"onTransitionCancel"),Ui(u0,"onTransitionEnd"),Tt("onMouseEnter",["mouseout","mouseover"]),Tt("onMouseLeave",["mouseout","mouseover"]),Tt("onPointerEnter",["pointerout","pointerover"]),Tt("onPointerLeave",["pointerout","pointerover"]),dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ro));function Ix(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var x=r.length-1;0<=x;x--){var w=r[x],G=w.instance,se=w.currentTarget;if(w=w.listener,G!==u&&c.isPropagationStopped())break e;u=w,c.currentTarget=se;try{u(c)}catch(pe){Xo(pe)}c.currentTarget=null,u=G}else for(x=0;x<r.length;x++){if(w=r[x],G=w.instance,se=w.currentTarget,w=w.listener,G!==u&&c.isPropagationStopped())break e;u=w,c.currentTarget=se;try{u(c)}catch(pe){Xo(pe)}c.currentTarget=null,u=G}}}}function Ut(e,n){var a=n[he];a===void 0&&(a=n[he]=new Set);var r=e+"__bubble";a.has(r)||(zx(n,e,2,!1),a.add(r))}function Jd(e,n,a){var r=0;n&&(r|=4),zx(a,e,r,n)}var jc="_reactListening"+Math.random().toString(36).slice(2);function $d(e){if(!e[jc]){e[jc]=!0,bn.forEach(function(a){a!=="selectionchange"&&(EM.has(a)||Jd(a,!1,e),Jd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jc]||(n[jc]=!0,Jd("selectionchange",!1,n))}}function zx(e,n,a,r){switch(Av(n)){case 2:var c=gS;break;case 8:c=xS;break;default:c=_h}a=c.bind(null,n,a,e),c=void 0,!lf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function eh(e,n,a,r,c){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var w=r.stateNode.containerInfo;if(w===c)break;if(x===4)for(x=r.return;x!==null;){var G=x.tag;if((G===3||G===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;w!==null;){if(x=vt(w),x===null)return;if(G=x.tag,G===5||G===6||G===26||G===27){r=u=x;continue e}w=w.parentNode}}r=r.return}zm(function(){var se=u,pe=rf(a),Ae=[];e:{var ne=f0.get(e);if(ne!==void 0){var fe=Vo,je=e;switch(e){case"keypress":if(Ho(a)===0)break e;case"keydown":case"keyup":fe=ob;break;case"focusin":je="focus",fe=ff;break;case"focusout":je="blur",fe=ff;break;case"beforeblur":case"afterblur":fe=ff;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=hb;break;case l0:case o0:case c0:fe=$y;break;case u0:fe=mb;break;case"scroll":case"scrollend":fe=Yy;break;case"wheel":fe=xb;break;case"copy":case"cut":case"paste":fe=tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Vm;break;case"submit":fe=fb;break;case"toggle":case"beforetoggle":fe=_b}var at=(n&4)!==0,Mt=!at&&(e==="scroll"||e==="scrollend"),re=at?ne!==null?ne+"Capture":null:ne;at=[];for(var q=se,ce;q!==null;){var Ee=q;if(ce=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||ce===null||re===null||(Ee=wl(q,re),Ee!=null&&at.push(so(q,Ee,ce))),Mt)break;q=q.return}0<at.length&&(ne=new fe(ne,je,null,a,pe),Ae.push({event:ne,listeners:at}))}}if((n&7)===0){e:{if(fe=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",fe&&a!==af&&(je=a.relatedTarget||a.fromElement)&&(vt(je)||je[ue]))break e;(ne||fe)&&(je=pe.window===pe?pe:(fe=pe.ownerDocument)?fe.defaultView||fe.parentWindow:window,ne?(fe=a.relatedTarget||a.toElement,ne=se,fe=fe?vt(fe):null,fe!==null&&(Mt=f(fe),at=fe.tag,fe!==Mt||at!==5&&at!==27&&at!==6)&&(fe=null)):(ne=null,fe=se),ne!==fe&&(at=Hm,Ee="onMouseLeave",re="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(at=Vm,Ee="onPointerLeave",re="onPointerEnter",q="pointer"),Mt=ne==null?je:Ft(ne),ce=fe==null?je:Ft(fe),je=new at(Ee,q+"leave",ne,a,pe),je.target=Mt,je.relatedTarget=ce,Ee=null,vt(pe)===se&&(at=new at(re,q+"enter",fe,a,pe),at.target=ce,at.relatedTarget=Mt,Ee=at),Mt=Ee,at=ne&&fe?D(ne,fe,TM):null,ne!==null&&Fx(Ae,je,ne,at,!1),fe!==null&&Mt!==null&&Fx(Ae,Mt,fe,at,!0)))}e:{if(ne=se?Ft(se):window,fe=ne.nodeName&&ne.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ne.type==="file")var tt=Km;else if(Ym(ne))if(Qm)tt=Cb;else{tt=wb;var Pt=Ab}else fe=ne.nodeName,!fe||fe.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?se&&nf(se.elementType)&&(tt=Km):tt=Rb;if(tt&&(tt=tt(e,se))){Zm(Ae,tt,a,pe);break e}Pt&&Pt(e,ne,se)}switch(Pt=se?Ft(se):window,e){case"focusin":(Ym(Pt)||Pt.contentEditable==="true")&&(ps=Pt,vf=se,Pl=null);break;case"focusout":Pl=vf=ps=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,r0(Ae,a,pe);break;case"selectionchange":if(Db)break;case"keydown":case"keyup":r0(Ae,a,pe)}var ut;if(hf)e:{switch(e){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else hs?qm(e,a)&&(ht="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(jm&&a.locale!=="ko"&&(hs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&hs&&(ut=Fm()):(Ba=pe,of="value"in Ba?Ba.value:Ba.textContent,hs=!0)),Pt=kc(se,ht),0<Pt.length&&(ht=new Gm(ht,e,null,a,pe),Ae.push({event:ht,listeners:Pt}),ut?ht.data=ut:(ut=Wm(a),ut!==null&&(ht.data=ut)))),(ut=bb?Mb(e,a):Sb(e,a))&&(ht=kc(se,"onBeforeInput"),0<ht.length&&(Pt=new Gm("onBeforeInput","beforeinput",null,a,pe),Ae.push({event:Pt,listeners:ht}),Pt.data=ut)),bM(Ae,e,se,a,pe)}Ix(Ae,n)})}function so(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=wl(e,a),c!=null&&r.unshift(so(e,c,u)),c=wl(e,n),c!=null&&r.push(so(e,c,u))),e.tag===3)return r;e=e.return}return[]}function TM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fx(e,n,a,r,c){for(var u=n._reactName,x=[];a!==null&&a!==r;){var w=a,G=w.alternate,se=w.stateNode;if(w=w.tag,G!==null&&G===r)break;w!==5&&w!==26&&w!==27||se===null||(G=se,c?(se=wl(a,u),se!=null&&x.unshift(so(a,se,G))):c||(se=wl(a,u),se!=null&&x.push(so(a,se,G)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var AM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function Bx(e){return(typeof e=="string"?e:""+e).replace(AM,`
`).replace(wM,"")}function Hx(e,n){return n=Bx(n),Bx(e)===n}function Kt(e,n,a,r,c,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||us(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&us(e,""+r);else return;break;case"className":jt(e,"class",r);break;case"tabIndex":jt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(e,a,r);break;case"style":Pm(e,r,u);return;case"data":if(n!=="object"){jt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Fo(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Kt(e,n,"name",c.name,c,null),Kt(e,n,"formEncType",c.formEncType,c,null),Kt(e,n,"formMethod",c.formMethod,c,null),Kt(e,n,"formTarget",c.formTarget,c,null)):(Kt(e,n,"encType",c.encType,c,null),Kt(e,n,"method",c.method,c,null),Kt(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Fo(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Xi);return;case"onScroll":r!=null&&Ut("scroll",e);return;case"onScrollEnd":r!=null&&Ut("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Fo(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ut("beforetoggle",e),Ut("toggle",e),si(e,"popover",r);break;case"xlinkActuate":Tn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":si(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=qy.get(a)||a,si(e,a,r);else return}ct=!0}function th(e,n,a,r,c,u){switch(a){case"style":Pm(e,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")us(e,r);else if(typeof r=="number"||typeof r=="bigint")us(e,""+r);else return;break;case"onScroll":r!=null&&Ut("scroll",e);return;case"onScrollEnd":r!=null&&Ut("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Xi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Je.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=e[de]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,r,c);break e}ct=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):si(e,a,r)}return}ct=!0}function In(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ut("error",e),Ut("load",e);var r=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var x=a[u];if(x!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(e,n,u,x,a,null)}}c&&Kt(e,n,"srcSet",a.srcSet,a,null),r&&Kt(e,n,"src",a.src,a,null);return;case"input":Ut("invalid",e);var w=u=x=c=null,G=null,se=null;for(r in a)if(a.hasOwnProperty(r)){var pe=a[r];if(pe!=null)switch(r){case"name":c=pe;break;case"type":x=pe;break;case"checked":G=pe;break;case"defaultChecked":se=pe;break;case"value":u=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Kt(e,n,r,pe,a,null)}}Dm(e,u,w,G,se,x,c,!1);return;case"select":Ut("invalid",e),r=x=u=null;for(c in a)if(a.hasOwnProperty(c)&&(w=a[c],w!=null))switch(c){case"value":u=w;break;case"defaultValue":x=w;break;case"multiple":r=w;default:Kt(e,n,c,w,a,null)}n=u,a=x,e.multiple=!!r,n!=null?cs(e,!!r,n,!1):a!=null&&cs(e,!!r,a,!0);return;case"textarea":Ut("invalid",e),u=c=r=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":r=w;break;case"defaultValue":c=w;break;case"children":u=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Kt(e,n,x,w,a,null)}Lm(e,r,c,u);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Kt(e,n,G,r,a,null)}return;case"dialog":Ut("beforetoggle",e),Ut("toggle",e),Ut("cancel",e),Ut("close",e);break;case"iframe":case"object":Ut("load",e);break;case"video":case"audio":for(r=0;r<ro.length;r++)Ut(ro[r],e);break;case"image":Ut("error",e),Ut("load",e);break;case"details":Ut("toggle",e);break;case"embed":case"source":case"link":Ut("error",e),Ut("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(r=a[se],r!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(e,n,se,r,a,null)}return;default:if(nf(n)){for(pe in a)a.hasOwnProperty(pe)&&(r=a[pe],r!==void 0&&th(e,n,pe,r,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(r=a[w],r!=null&&Kt(e,n,w,r,a,null))}var RM={};function CM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,x=null,w=null,G=null,se=null,pe=null;for(fe in a){var Ae=a[fe];if(a.hasOwnProperty(fe)&&Ae!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=Ae;default:r.hasOwnProperty(fe)||Kt(e,n,fe,null,r,Ae)}}for(var ne in r){var fe=r[ne];if(Ae=a[ne],r.hasOwnProperty(ne)&&(fe!=null||Ae!=null))switch(ne){case"type":fe!==Ae&&(ct=!0),u=fe;break;case"name":fe!==Ae&&(ct=!0),c=fe;break;case"checked":fe!==Ae&&(ct=!0),se=fe;break;case"defaultChecked":fe!==Ae&&(ct=!0),pe=fe;break;case"value":fe!==Ae&&(ct=!0),x=fe;break;case"defaultValue":fe!==Ae&&(ct=!0),w=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==Ae&&Kt(e,n,ne,fe,r,Ae)}}ef(e,x,w,G,se,pe,u,c);return;case"select":fe=x=w=ne=null;for(u in a)if(G=a[u],a.hasOwnProperty(u)&&G!=null)switch(u){case"value":break;case"multiple":fe=G;default:r.hasOwnProperty(u)||Kt(e,n,u,null,r,G)}for(c in r)if(u=r[c],G=a[c],r.hasOwnProperty(c)&&(u!=null||G!=null))switch(c){case"value":u!==G&&(ct=!0),ne=u;break;case"defaultValue":u!==G&&(ct=!0),w=u;break;case"multiple":u!==G&&(ct=!0),x=u;default:u!==G&&Kt(e,n,c,u,r,G)}n=w,a=x,r=fe,ne!=null?cs(e,!!a,ne,!1):!!r!=!!a&&(n!=null?cs(e,!!a,n,!0):cs(e,!!a,a?[]:"",!1));return;case"textarea":fe=ne=null;for(w in a)if(c=a[w],a.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(e,n,w,null,r,c)}for(x in r)if(c=r[x],u=a[x],r.hasOwnProperty(x)&&(c!=null||u!=null))switch(x){case"value":c!==u&&(ct=!0),ne=c;break;case"defaultValue":c!==u&&(ct=!0),fe=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&Kt(e,n,x,c,r,u)}Um(e,ne,fe);return;case"option":for(var je in a)if(ne=a[je],a.hasOwnProperty(je)&&ne!=null&&!r.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:Kt(e,n,je,null,r,ne)}for(G in r)if(ne=r[G],fe=a[G],r.hasOwnProperty(G)&&ne!==fe&&(ne!=null||fe!=null))switch(G){case"selected":ne!==fe&&(ct=!0),e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Kt(e,n,G,ne,r,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var at in a)ne=a[at],a.hasOwnProperty(at)&&ne!=null&&!r.hasOwnProperty(at)&&Kt(e,n,at,null,r,ne);for(se in r)if(ne=r[se],fe=a[se],r.hasOwnProperty(se)&&ne!==fe&&(ne!=null||fe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(s(137,n));break;default:Kt(e,n,se,ne,r,fe)}return;default:if(nf(n)){for(var Mt in a)ne=a[Mt],a.hasOwnProperty(Mt)&&ne!==void 0&&!r.hasOwnProperty(Mt)&&th(e,n,Mt,void 0,r,ne);for(pe in r)ne=r[pe],fe=a[pe],!r.hasOwnProperty(pe)||ne===fe||ne===void 0&&fe===void 0||th(e,n,pe,ne,r,fe);return}}for(var re in a)ne=a[re],a.hasOwnProperty(re)&&ne!=null&&!r.hasOwnProperty(re)&&Kt(e,n,re,null,r,ne);for(Ae in r)ne=r[Ae],fe=a[Ae],!r.hasOwnProperty(Ae)||ne===fe||ne==null&&fe==null||Kt(e,n,Ae,ne,r,fe)}function Gx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],u=c.transferSize,x=c.initiatorType,w=c.duration;if(u&&w&&Gx(x)){for(x=0,w=c.responseEnd,r+=1;r<a.length;r++){var G=a[r],se=G.startTime;if(se>w)break;var pe=G.transferSize,Ae=G.initiatorType;pe&&Gx(Ae)&&(G=G.responseEnd,x+=pe*(G<w?1:(w-se)/(G-se)))}if(--r,n+=8*(u+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nh=null,ih=null;function lo(e){return e.nodeType===9?e:e.ownerDocument}function Vx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kx(e,n,a,r){return a=lo(a).createElement(e),a[$]=r,a[de]=n,In(a,e,n),St(a),a}function ah(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function DM(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var sh=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,Xx=typeof Promise=="function"?Promise:void 0,qx=typeof requestAnimationFrame=="function"?requestAnimationFrame:sh,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof Xx<"u"?function(e){return Xx.resolve(null).then(e).catch(OM)}:sh;function OM(e){setTimeout(function(){throw e})}function rr(e){return e==="head"}function Wx(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Ws(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ph(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ph(a);for(var u=a.firstChild;u;){var x=u.nextSibling,w=u.nodeName;u[nt]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=x}}else a==="body"&&ph(e.ownerDocument.body);a=c}while(a);Ws(n)}function Yx(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Zx(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Kx(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function PM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function lh(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return PM(n,a,e)}function IM(e){return e.documentElement.clientHeight}function zM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function FM(e,n,a,r,c,u,x,w,G){var se=n.nodeType===9?n:n.ownerDocument;try{var pe=se.startViewTransition({update:function(){var ne=se.defaultView,fe=ne.navigation&&ne.navigation.transition,je=se.fonts.status;r();var at=[];if(je==="loaded"&&(IM(se),se.fonts.status==="loading"&&at.push(se.fonts.ready)),je=at.length,e!==null)for(var Mt=e.suspenseyImages,re=0,q=0;q<Mt.length;q++){var ce=Mt[q];if(!ce.complete){var Ee=ce.getBoundingClientRect();if(0<Ee.bottom&&0<Ee.right&&Ee.top<ne.innerHeight&&Ee.left<ne.innerWidth){if(re+=xv(ce),re>Wc){at.length=je;break}ce=new Promise(zM.bind(ce)),at.push(ce)}}}if(0<at.length)return ne=Promise.race([Promise.all(at),new Promise(function(tt){return setTimeout(tt,500)})]).then(c,c),(fe?Promise.allSettled([fe.finished,ne]):ne).then(u,u);if(c(),fe)return fe.finished.then(u,u);u()},types:a});se.__reactViewTransition=pe;var Ae=[];return pe.ready.then(function(){for(var ne=se.documentElement.getAnimations({subtree:!0}),fe=0;fe<ne.length;fe++){var je=ne[fe],at=je.effect,Mt=at.pseudoElement;if(Mt!=null&&Mt.startsWith("::view-transition")){Ae.push(je),je=at.getKeyframes();for(var re=Mt=void 0,q=!0,ce=0;ce<je.length;ce++){var Ee=je[ce],tt=Ee.width;if(Mt===void 0)Mt=tt;else if(Mt!==tt){q=!1;break}if(tt=Ee.height,re===void 0)re=tt;else if(re!==tt){q=!1;break}delete Ee.width,delete Ee.height,Ee.transform==="none"&&delete Ee.transform}q&&Mt!==void 0&&re!==void 0&&(at.setKeyframes(je),q=getComputedStyle(at.target,at.pseudoElement),q.width!==Mt||q.height!==re)&&(q=je[0],q.width=Mt,q.height=re,q=je[je.length-1],q.width=Mt,q.height=re,at.setKeyframes(je))}}x()},function(ne){se.__reactViewTransition===pe&&(se.__reactViewTransition=null);try{if(typeof ne=="object"&&ne!==null)switch(ne.name){case"InvalidStateError":(ne.message==="View transition was skipped because document visibility state is hidden."||ne.message==="Skipping view transition because document visibility state has become hidden."||ne.message==="Skipping view transition because viewport size changed."||ne.message==="Transition was aborted because of invalid state")&&(ne=null)}ne!==null&&G(ne)}finally{r(),c(),x()}}),pe.finished.finally(function(){for(var ne=0;ne<Ae.length;ne++)Ae[ne].cancel();se.__reactViewTransition===pe&&(se.__reactViewTransition=null),w()}),pe}catch{return r(),c(),x(),null}}function Xr(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Xr.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Xr.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===e&&u.pseudoElement===n&&r.push(a[c])}return r},Xr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Qx(e){return{name:e,group:new Xr("group",e),imagePair:new Xr("image-pair",e),old:new Xr("old",e),new:new Xr("new",e)}}function hi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}hi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if($x(u,e,n,a)===-1){var x=this,w=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(w=function(G){x.removeEventListener(e,n,a),typeof n=="function"?n.call(this,G):n.handleEvent(G)}),r!==null&&(c=x.removeEventListener.bind(x,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Gs(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:w,cleanup:c}),_(this._fragmentFiber.child,!1,BM,e,w,r)}this._eventListeners=u}};function BM(e,n,a,r){return b(e).addEventListener(n,a,r),!1}hi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=$x(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var u=c.cleanup;c=Gs(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,HM,e,a,c),r.splice(n,1),u!==null&&u()}};function HM(e,n,a,r){return b(e).removeEventListener(n,a,r),!1}function Gs(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Jx(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function $x(e,n,a,r){if(e.length===0)return-1;r=Jx(r);for(var c=0;c<e.length;c++){var u=e[c];if(u.type===n&&u.listener===a&&Jx(u.optionsOrUseCapture)===r)return c}return-1}hi.prototype.dispatchEvent=function(e){var n=v(this._fragmentFiber);if(n===null)return!0;n=b(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];r.addEventListener(u.type,u.attachedListener,Gs(u.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)u=a[c],r.removeEventListener(u.type,u.attachedListener,Gs(u.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},hi.prototype.focus=function(e){_(this._fragmentFiber.child,!0,ev,e,void 0,void 0)};function ev(e,n){return e.tag===6?!1:(e=b(e),JM(e,n))}hi.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,oh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!ev(n[a],e);a--);};function oh(e,n){return n.push(e),!1}hi.prototype.blur=function(){var e=v(this._fragmentFiber);e!==null&&(e=b(e),e=lo(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,GM,e,void 0,void 0))};function GM(e,n){return e.tag===6?!1:(e=b(e),e===n||e.contains(n)?(n.blur(),!0):!1)}hi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,VM,e,void 0,void 0)};function VM(e,n){return e.tag===6||(e=b(e),n.observe(e)),!1}hi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,jM,e,void 0,void 0);for(var a=n=0;a<zi.length;a++){var r=zi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):zi[n++]=r}zi.length=n}};function jM(e,n){return e.tag===6||(e=b(e),n.unobserve(e)),!1}var zi=[],ch=!1;function kM(e,n,a){zi.push({fragmentInstance:e,observer:n,instance:a}),ch||(ch=!0,$M(function(){ch=!1;var r=zi;zi=[];for(var c=0;c<r.length;c++){var u=r[c];u.observer.unobserve(u.instance)}}))}hi.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,XM,e,void 0,void 0),e};function XM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=b(e),n.push.apply(n,e.getClientRects());return!1}hi.prototype.getRootNode=function(e){var n=v(this._fragmentFiber);return n===null?this:b(n).getRootNode(e)},hi.prototype.compareDocumentPosition=function(e){var n=v(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,oh,a,void 0,void 0);var r=b(n);if(a.length===0){if(a=r,E(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=b(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=b(a[0]),c=b(a[a.length-1]);var u=E(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var x=n.compareDocumentPosition(e),w=c.compareDocumentPosition(e),G=x&Node.DOCUMENT_POSITION_CONTAINED_BY||w&Node.DOCUMENT_POSITION_CONTAINED_BY;return w=r&&u&&x&Node.DOCUMENT_POSITION_FOLLOWING&&w&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||u&&c===e||G||w?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!u&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:x,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||qM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function qM(e,n,a,r,c){var u=vt(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;e:{for(u=n,n=v(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=D(a,u,O),n===null?n=!1:(_(n,!0,B,u,a),u=M,M=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=D(r,u,O),n===null?n=!1:(_(n,!0,C,u,r),u=M,U=M=null,n=u!==null)),n):!1}function tv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}hi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];_(this._fragmentFiber.child,!1,oh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=A(this._fragmentFiber);if(r=a?r[1]||r[0]||v(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),tv(e,a);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=b(c),tv(c,a)):b(c).scrollIntoView(e),r+=a?-1:1}};function WM(e,n){return e=b(e),nv(e,n),!1}function nv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function iv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Gs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var x=0,w=0;w<zi.length;w++){var G=zi[w];(G.fragmentInstance!==n||G.observer!==u||G.instance!==e)&&(zi[x++]=G)}zi.length=x,u.observe(e)}),nv(e,n))}function YM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Gs(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?kM(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function uh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),xt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ZM(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[nt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function KM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function av(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function fh(e){return e.data==="$?"||e.data==="$~"}function dh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function QM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ai(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hh=null;function rv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function sv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function JM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function $M(e){qx(function(){qx(function(n){return e(n)})})}function lv(e,n,a){switch(n=lo(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ov(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Kt(e,n,r,null,RM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Xi&&(e.onclick=null),xt(e)}function ph(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xt(e)}var wi=new Map,cv=new Set;function oo(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ea=Ce.d;Ce.d={f:eS,r:tS,D:nS,C:iS,L:aS,m:rS,X:lS,S:sS,M:oS};function eS(){var e=Ea.f(),n=Fc();return e||n}function tS(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?fg(n):Ea.r(e)}var Vs=typeof document>"u"?null:document;function uv(e,n,a){var r=Vs;if(r&&typeof n=="string"&&n){var c=_i(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),cv.has(c)||(cv.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),In(n,"link",e),St(n),r.head.appendChild(n)))}}function nS(e){Ea.D(e),uv("dns-prefetch",e,null)}function iS(e,n){Ea.C(e,n),uv("preconnect",e,n)}function aS(e,n,a){Ea.L(e,n,a);var r=Vs;if(r&&e&&n){var c='link[rel="preload"][as="'+_i(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_i(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_i(a.imageSizes)+'"]')):c+='[href="'+_i(e)+'"]';var u=c;switch(n){case"style":u=js(e);break;case"script":u=ks(e)}if(!(wi.has(u)||(e=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),wi.set(u,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(co(u))||n==="script"&&r.querySelector(uo(u))))){var x=r.createElement("link");In(x,"link",e),n==="style"&&(x[lt]=!0,x.onload=x.onerror=function(){Xt(x)}),St(x),r.head.appendChild(x)}}}function rS(e,n){Ea.m(e,n);var a=Vs;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_i(r)+'"][href="'+_i(e)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ks(e)}if(!wi.has(u)&&(e=z({rel:"modulepreload",href:e},n),wi.set(u,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(uo(u)))return}r=a.createElement("link"),In(r,"link",e),St(r),a.head.appendChild(r)}}}function sS(e,n,a){Ea.S(e,n,a);var r=Vs;if(r&&e){var c=Jt(r).hoistableStyles,u=js(e);n=n||"default";var x=c.get(u);if(!x){var w={loading:0,preload:null};if(x=r.querySelector(co(u)))w.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":n},a),(a=wi.get(u))&&mh(e,a);var G=x=r.createElement("link");St(G),In(G,"link",e),G._p=new Promise(function(se,pe){G.onload=se,G.onerror=pe}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Xc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:w},c.set(u,x)}}}function lS(e,n){Ea.X(e,n);var a=Vs;if(a&&e){var r=Jt(a).hoistableScripts,c=ks(e),u=r.get(c);u||(u=a.querySelector(uo(c)),u||(e=z({src:e,async:!0},n),(n=wi.get(c))&&gh(e,n),u=a.createElement("script"),St(u),In(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function oS(e,n){Ea.M(e,n);var a=Vs;if(a&&e){var r=Jt(a).hoistableScripts,c=ks(e),u=r.get(c);u||(u=a.querySelector(uo(c)),u||(e=z({src:e,async:!0,type:"module"},n),(n=wi.get(c))&&gh(e,n),u=a.createElement("script"),St(u),In(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function fv(e,n,a,r){var c=(c=mt.current)?oo(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=js(a.href),n=Jt(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=js(a.href);var u=Jt(c).hoistableStyles,x=u.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,x),(u=c.querySelector(co(e)))?u._p||(x.instance=u,x.state.loading=5):(u=wi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(e,u)),cS(c,e,u,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=ks(a),n=Jt(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function js(e){return'href="'+_i(e)+'"'}function co(e){return'link[rel="stylesheet"]['+e+"]"}function dv(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[lt]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[lt]=!0,n.onload=n.onerror=Xt.bind(null,n),In(n,"link",a),St(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function ks(e){return'[src="'+_i(e)+'"]'}function uo(e){return"script[async]"+e}function hv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+_i(a.href)+'"]');if(r)return n.instance=r,St(r),r;var c=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),St(r),In(r,"style",c),Xc(r,a.precedence,e),n.instance=r;case"stylesheet":c=js(a.href);var u=e.querySelector(co(c));if(u)return n.state.loading|=4,n.instance=u,St(u),u;r=dv(a),(c=wi.get(c))&&mh(r,c),u=(e.ownerDocument||e).createElement("link"),St(u);var x=u;return x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),In(u,"link",r),n.state.loading|=4,Xc(u,a.precedence,e),n.instance=u;case"script":return u=ks(a.src),(c=e.querySelector(uo(u)))?(n.instance=c,St(c),c):(r=a,(c=wi.get(u))&&(r=z({},a),gh(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),St(c),In(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xc(r,a.precedence,e));return n.instance}function Xc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,x=0;x<r.length;x++){var w=r[x];if(w.dataset.precedence===n)u=w;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function mh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function gh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var qc=null;function pv(e,n,a){if(qc===null){var r=new Map,c=qc=new Map;c.set(a,r)}else c=qc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var u=a[c];if(!(u[nt]||u[$]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var x=u.getAttribute(n)||"";x=e+x;var w=r.get(x);w?w.push(u):r.set(x,[u])}}return r}function xh(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function mv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function gv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function vv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=xv(n),e.suspenseyImages.push(n)),e=hS.bind(e),n.decode().then(e,e))}function fS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=js(r.href),u=n.querySelector(co(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,St(u);return}u=n.ownerDocument||n,r=dv(r),(c=wi.get(c))&&mh(r,c),u=u.createElement("link"),St(u);var x=u;x._p=new Promise(function(w,G){x.onload=w,x.onerror=G}),In(u,"link",r),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wc=0;function dS(e,n){return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&Wc===0&&(Wc=62500*NM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Wc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function _v(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Zc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function fo(){this.count--,_v(this)}function hS(){this.imgCount--,_v(this)}var Yc=null;function Zc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yc=new Map,n.forEach(pS,e),Yc=null,fo.call(e))}function pS(e,n){if(!(n.state.loading&4)){var a=Yc.get(e);if(a)var r=a.get(null);else{a=new Map,Yc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var x=c[u];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}c=n.instance,x=c.getAttribute("data-precedence"),u=a.get(x)||r,u===r&&a.set(null,c),a.set(x,c),this.count++,r=fo.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Xs={$$typeof:te,Provider:null,Consumer:null,_currentValue:Pe,_currentValue2:Pe,_threadCount:0};function mS(e,n,a,r,c,u,x,w,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=os(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=os(0),this.hiddenUpdates=os(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.transitionTypes=null,this.incompleteTransitions=new Map}function yv(e,n,a,r,c,u,x,w,G,se,pe,Ae){return e=new mS(e,n,a,x,G,se,pe,Ae,w),n=1,u===!0&&(n|=24),u=Qn(3,null,null,n),e.current=u,u.stateNode=e,n=Uf(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},If(u),e}function bv(e){return e?(e=xs,e):xs}function Mv(e,n,a,r,c,u){c=bv(c),r.context===null?r.context=c:r.pendingContext=c,r=Wa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Ya(e,r,n),a!==null&&(ti(a,e,n),Vl(a,e,n))}function Sv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function vh(e,n){Sv(e,n),(e=e.alternate)&&Sv(e,n)}function Ev(e){if(e.tag===13||e.tag===31){var n=Rr(e,67108864);n!==null&&ti(n,e,67108864),vh(e,67108864)}}function Tv(e){if(e.tag===13||e.tag===31){var n=di();n=El(n);var a=Rr(e,n);a!==null&&ti(a,e,n),vh(e,n)}}var qs=!0;function gS(e,n,a,r){var c=ge.T;ge.T=null;var u=Ce.p;try{Ce.p=2,_h(e,n,a,r)}finally{Ce.p=u,ge.T=c}}function xS(e,n,a,r){var c=ge.T;ge.T=null;var u=Ce.p;try{Ce.p=8,_h(e,n,a,r)}finally{Ce.p=u,ge.T=c}}function _h(e,n,a,r){if(qs){var c=yh(r);if(c===null)eh(e,n,r,Kc,a),wv(e,r);else if(_S(c,e,n,a,r))r.stopPropagation();else if(wv(e,r),n&4&&-1<vS.indexOf(e)){for(;c!==null;){var u=rt(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var x=fa(u.pendingLanes);if(x!==0){var w=u;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var G=1<<31-Et(x);w.entanglements[1]|=G,x&=~G}ta(u),(kt&6)===0&&(Pc=qe()+500,ao(0))}}break;case 31:case 13:w=Rr(u,2),w!==null&&ti(w,u,2),Fc(),vh(u,2)}if(u=yh(r),u===null&&eh(e,n,r,Kc,a),u===c)break;c=u}c!==null&&r.stopPropagation()}else eh(e,n,r,null,a)}}function yh(e){return e=rf(e),bh(e)}var Kc=null;function bh(e){if(Kc=null,e=vt(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kc=e,null}function Av(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case dt:return 2;case Q:return 8;case Ie:case Te:return 32;case Ge:return 268435456;default:return 32}default:return 32}}var Mh=!1,sr=null,lr=null,or=null,ho=new Map,po=new Map,cr=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wv(e,n){switch(e){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(n.pointerId)}}function mo(e,n,a,r,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},n!==null&&(n=rt(n),n!==null&&Ev(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function _S(e,n,a,r,c){switch(n){case"focusin":return sr=mo(sr,e,n,a,r,c),!0;case"dragenter":return lr=mo(lr,e,n,a,r,c),!0;case"mouseover":return or=mo(or,e,n,a,r,c),!0;case"pointerover":var u=c.pointerId;return ho.set(u,mo(ho.get(u)||null,e,n,a,r,c)),!0;case"gotpointercapture":return u=c.pointerId,po.set(u,mo(po.get(u)||null,e,n,a,r,c)),!0}return!1}function Rv(e){var n=vt(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zo(e.priority,function(){Tv(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,zo(e.priority,function(){Tv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yh(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);af=r,a.target.dispatchEvent(r),af=null}else return n=rt(a),n!==null&&Ev(n),e.blockedOn=a,!1;n.shift()}return!0}function Cv(e,n,a){Qc(e)&&a.delete(n)}function yS(){Mh=!1,sr!==null&&Qc(sr)&&(sr=null),lr!==null&&Qc(lr)&&(lr=null),or!==null&&Qc(or)&&(or=null),ho.forEach(Cv),po.forEach(Cv)}function Jc(e,n){e.blockedOn===n&&(e.blockedOn=null,Mh||(Mh=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,yS)))}var $c=null;function Nv(e){$c!==e&&($c=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){$c===e&&($c=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(bh(r||a)===null)continue;break}var u=rt(a);u!==null&&(e.splice(n,3),n-=3,id(u,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Ws(e){function n(G){return Jc(G,e)}sr!==null&&Jc(sr,e),lr!==null&&Jc(lr,e),or!==null&&Jc(or,e),ho.forEach(n),po.forEach(n);for(var a=0;a<cr.length;a++){var r=cr[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&cr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],u=a[r+1],x=c[de]||null;if(typeof u=="function")x||Nv(a);else if(x){var w=null;if(u&&u.hasAttribute("formAction")){if(c=u,x=u[de]||null)w=x.formAction;else if(bh(c)!==null)continue}else w=x.action;typeof w=="function"?a[r+1]=w:(a.splice(r,3),r-=3),Nv(a)}}}function Dv(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Sh(e){this._internalRoot=e}eu.prototype.render=Sh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=di();Mv(a,r,e,n,null,null)},eu.prototype.unmount=Sh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Mv(e.current,2,null,e,null,null),Fc(),n[ue]=null}};function eu(e){this._internalRoot=e}eu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Io();e={blockedOn:null,target:e,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,e),a===0&&Rv(e)}};var Uv=t.version;if(Uv!=="19.3.0")throw Error(s(527,Uv,"19.3.0"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var bS={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:ge,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{it=tu.inject(bS),Ye=tu}catch{}}return xo.createRoot=function(e,n){if(!o(e))throw Error(s(299));var a=!1,r="",c=bg,u=Mg,x=Sg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=yv(e,1,!1,null,null,a,r,null,c,u,x,Dv),e[ue]=n.current,$d(e),new Sh(n)},xo.hydrateRoot=function(e,n,a){if(!o(e))throw Error(s(299));var r=!1,c="",u=bg,x=Mg,w=Sg,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=yv(e,1,!0,n,a??null,r,c,G,u,x,w,Dv),n.context=bv(null),a=n.current,r=di(),r=El(r),c=Wa(r),c.callback=null,Ya(a,c,r),a=r,n.current.lanes=a,ki(n,a),ta(n),e[ue]=n.current,$d(e),new eu(n)},xo.version="19.3.0",xo}var Vv;function DS(){if(Vv)return Ah.exports;Vv=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(t){console.error(t)}}return l(),Ah.exports=NS(),Ah.exports}var US=DS();/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),OS=l=>l.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,s)=>s?s.toUpperCase():i.toLowerCase()),jv=l=>{const t=OS(l);return t.charAt(0).toUpperCase()+t.slice(1)},ny=(...l)=>l.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim(),PS=l=>{for(const t in l)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=Qe.forwardRef(({color:l="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:o="",children:f,iconNode:d,...p},m)=>Qe.createElement("svg",{ref:m,...IS,width:t,height:t,stroke:l,strokeWidth:s?Number(i)*24/Number(t):i,className:ny("lucide",o),...!f&&!PS(p)&&{"aria-hidden":"true"},...p},[...d.map(([g,y])=>Qe.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=(l,t)=>{const i=Qe.forwardRef(({className:s,...o},f)=>Qe.createElement(zS,{ref:f,iconNode:t,className:ny(`lucide-${LS(jv(l))}`,`lucide-${l}`,s),...o}));return i.displayName=jv(l),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Iu=Gt("box",FS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],kv=Gt("calculator",BS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M14.564 14.558a3 3 0 1 1-4.122-4.121",key:"1rnrzw"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175",key:"1x3arw"}],["path",{d:"M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344",key:"1i84u0"}]],GS=Gt("camera-off",HS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],zu=Gt("camera",VS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kS=Gt("check",jS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],qS=Gt("chevron-left",XS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],YS=Gt("chevron-right",WS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nu=Gt("circle-check",ZS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],QS=Gt("code-xml",KS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],$S=Gt("copy",JS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],t1=Gt("cpu",e1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],Xv=Gt("crosshair",n1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],a1=Gt("dollar-sign",i1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],s1=Gt("file-text",r1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],hl=Gt("hand",l1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],c1=Gt("info",o1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Fu=Gt("layers",u1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],sm=Gt("layout-grid",f1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Nh=Gt("lightbulb",d1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],p1=Gt("maximize-2",h1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],g1=Gt("maximize",m1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],qv=Gt("printer",x1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],_1=Gt("qr-code",v1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],b1=Gt("rotate-ccw",y1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],S1=Gt("rotate-cw",M1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],T1=Gt("shield-check",E1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],dp=Gt("sliders-vertical",A1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],R1=Gt("smartphone",w1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],_r=Gt("sparkles",C1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],D1=Gt("sun",N1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],L1=Gt("tv",U1);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],P1=Gt("zap",O1),I1=({activeTab:l,setActiveTab:t,isFullScreen:i,toggleFullScreen:s,hasCameraSupport:o})=>{const f=[{id:"gesture",number:"03",label:"Control Gestual Neón",icon:hl},{id:"webar",number:"02",label:"Póster WebAR",icon:Iu},{id:"hologram",number:"01",label:"Malla Holo-Gauze",icon:_r},{id:"blueprint",number:"Plan",label:"Arquitectura del Stand",icon:sm}];return h.jsx("header",{className:"sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800",children:h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:h.jsxs("div",{className:"flex items-center justify-between py-4 min-h-[5rem] gap-4",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"w-9 h-9 rounded-lg bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20",children:h.jsx(_r,{className:"w-5 h-5 text-white"})}),h.jsx("div",{children:h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"font-bold text-white text-base tracking-tight",children:"STAND INTERACTIVO"}),h.jsx("span",{className:"hidden xl:inline-block px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-cyan-950 border border-cyan-800 text-cyan-300 rounded",children:"SUITE DIY"})]})})]}),h.jsx("nav",{className:"flex items-center space-x-2 sm:space-x-3",children:f.map(d=>{const p=d.icon,m=l===d.id;return h.jsxs("button",{id:`nav-tab-${d.id}`,onClick:()=>t(d.id),className:`relative flex items-center space-x-2 px-3 sm:px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${m?"bg-neutral-900 text-cyan-400 border border-cyan-500/40 shadow-sm shadow-cyan-500/10":"text-neutral-400 hover:text-white hover:bg-neutral-900/50 border border-transparent"}`,children:[h.jsx(p,{className:`w-4 h-4 ${m?"text-cyan-400":"text-neutral-500"}`}),h.jsx("span",{className:"hidden md:inline",children:d.label}),h.jsx("span",{className:"md:hidden",children:d.number}),m&&h.jsx("span",{className:"absolute -bottom-[1px] left-3 right-3 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]"})]},d.id)})}),h.jsxs("div",{className:"flex items-center space-x-2",children:[o&&h.jsxs("div",{title:"Soporte de cámara web disponible para seguimiento y AR",className:"hidden lg:flex items-center space-x-1 px-2.5 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-emerald-400",children:[h.jsx(zu,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"text-[11px] font-mono",children:"Webcam OK"})]}),h.jsx("button",{id:"fullscreen-toggle-btn",onClick:s,title:i?"Salir de pantalla completa":"Pantalla completa (Ideal para exposiciones)",className:"p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",children:h.jsx(p1,{className:"w-4 h-4"})})]})]})})})};let Ys=null;function z1(){if(typeof window>"u")return null;if(!Ys){const l=window.AudioContext||window.webkitAudioContext;l&&(Ys=new l)}return Ys&&Ys.state==="suspended"&&Ys.resume(),Ys}function yn(l){try{const t=z1();if(!t)return;const i=t.currentTime,s=t.createOscillator(),o=t.createGain();s.connect(o),o.connect(t.destination),l==="hover"?(s.type="sine",s.frequency.setValueAtTime(620,i),s.frequency.exponentialRampToValueAtTime(880,i+.08),o.gain.setValueAtTime(.04,i),o.gain.exponentialRampToValueAtTime(.001,i+.08),s.start(i),s.stop(i+.08)):l==="select"?(s.type="triangle",s.frequency.setValueAtTime(440,i),s.frequency.exponentialRampToValueAtTime(1200,i+.15),o.gain.setValueAtTime(.08,i),o.gain.exponentialRampToValueAtTime(.001,i+.15),s.start(i),s.stop(i+.15)):l==="swipe"?(s.type="sawtooth",s.frequency.setValueAtTime(320,i),s.frequency.exponentialRampToValueAtTime(160,i+.18),o.gain.setValueAtTime(.05,i),o.gain.exponentialRampToValueAtTime(.001,i+.18),s.start(i),s.stop(i+.18)):l==="calibrate"?(s.type="sine",s.frequency.setValueAtTime(523.25,i),s.frequency.setValueAtTime(659.25,i+.08),s.frequency.setValueAtTime(783.99,i+.16),s.frequency.setValueAtTime(1046.5,i+.24),o.gain.setValueAtTime(.06,i),o.gain.exponentialRampToValueAtTime(.001,i+.35),s.start(i),s.stop(i+.35)):l==="holo_power"&&(s.type="sine",s.frequency.setValueAtTime(120,i),s.frequency.exponentialRampToValueAtTime(880,i+.4),o.gain.setValueAtTime(.07,i),o.gain.exponentialRampToValueAtTime(.001,i+.45),s.start(i),s.stop(i+.45))}catch{}}const Wv=[{name:"Verde Lima Neón",colorHex:"#39FF14",hMin:70,hMax:155,sMin:.35,sMax:1,vMin:.35,vMax:1},{name:"Fucsia / Rosa Neón",colorHex:"#FF007F",hMin:295,hMax:345,sMin:.35,sMax:1,vMin:.35,vMax:1},{name:"Naranja Chillón",colorHex:"#FF5F00",hMin:10,hMax:38,sMin:.5,sMax:1,vMin:.45,vMax:1},{name:"Azul Neón / Cian",colorHex:"#00F0FF",hMin:175,hMax:215,sMin:.4,sMax:1,vMin:.4,vMax:1}];function Yv(l,t,i){l/=255,t/=255,i/=255;const s=Math.max(l,t,i),o=Math.min(l,t,i),f=s-o;let d=0;const p=s===0?0:f/s,m=s;if(s!==o){switch(s){case l:d=(t-i)/f+(t<i?6:0);break;case t:d=(i-l)/f+2;break;case i:d=(l-t)/f+4;break}d/=6}return[d*360,p,m]}const F1=()=>{const l=Qe.useRef(null),t=Qe.useRef(null),i=Qe.useRef(null),s=Qe.useRef(null),[o,f]=Qe.useState(!1),[d,p]=Qe.useState(null),[m,g]=Qe.useState(!1),[y,_]=Qe.useState(Wv[0]),[v,E]=Qe.useState(35),[A,N]=Qe.useState(0),[b,M]=Qe.useState(!1),[U,B]=Qe.useState(!1),[C,O]=Qe.useState(0),[D,z]=Qe.useState(!1),[S,L]=Qe.useState({uvLight:!0,ambientAudio:!0,spotLight:!1}),[j,k]=Qe.useState({x:15,y:30}),Y=Qe.useRef({x:.5,y:.5,radius:20,detected:!1,rawCount:0}),me=Qe.useRef([]),ve=Qe.useRef(Date.now()),te=Qe.useRef(.5),W=Qe.useRef(null),Z=Qe.useRef(null),[J,Me]=Qe.useState(0),H=Qe.useCallback(()=>{l.current&&l.current.srcObject&&(l.current.srcObject.getTracks().forEach(ee=>ee.stop()),l.current.srcObject=null),f(!1)},[]),F=async()=>{p(null);try{const V=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1});l.current&&(l.current.srcObject=V,await l.current.play(),f(!0),g(!1),yn("holo_power"))}catch(V){console.warn("Camera access denied or unavailable:",V),p('No se pudo acceder a la webcam. Puedes usar el "Modo Simulación" con mouse o pantalla táctil.'),g(!0)}},_e=Qe.useCallback(()=>{yn("swipe"),O(V=>(V+1)%4)},[]),Ne=Qe.useCallback(()=>{yn("swipe"),O(V=>(V-1+4)%4)},[]),I=V=>{if(!D)return;const ee=i.current;if(!ee)return;const Se=ee.getBoundingClientRect(),we=(V.clientX-Se.left)/Se.width*ee.width,ge=(V.clientY-Se.top)/Se.height*ee.height,Ce=ee.getContext("2d");if(Ce)try{const Pe=Ce.getImageData(Math.floor(we),Math.floor(ge),1,1).data,[Be,ke,Ve]=Yv(Pe[0],Pe[1],Pe[2]),Ue={name:`Muestra (${Math.round(Be)}° HSV)`,colorHex:`rgb(${Pe[0]}, ${Pe[1]}, ${Pe[2]})`,hMin:Math.max(0,Math.round(Be-25)),hMax:Math.min(360,Math.round(Be+25)),sMin:Math.max(.2,ke-.25),sMax:1,vMin:Math.max(.2,Ve-.25),vMax:1};_(Ue),z(!1),yn("calibrate")}catch(Pe){console.error("Error sampling color:",Pe)}};Qe.useEffect(()=>{let V,ee=0,Se=performance.now();const we=()=>{ee++;const ge=performance.now();if(ge-Se>=1e3&&(N(Math.round(ee*1e3/(ge-Se))),ee=0,Se=ge),o&&l.current&&t.current&&i.current){const Ce=l.current,Pe=t.current,Be=i.current;if(Ce.readyState>=2){Pe.width=240,Pe.height=180,Be.width=240,Be.height=180;const Ue=Pe.getContext("2d",{willReadFrequently:!0}),Oe=Be.getContext("2d");if(Ue&&Oe){Ue.save(),Ue.scale(-1,1),Ue.drawImage(Ce,-240,0,240,180),Ue.restore();const ft=Ue.getImageData(0,0,240,180).data;let mt=0,wt=0,K=0,Lt=240,gt=0,P=180,T=0;const{hMin:ie,hMax:oe,sMin:xe,sMax:De,vMin:ze,vMax:ye}=y;for(let be=0;be<180;be+=2)for(let Le=0;Le<240;Le+=2){const $e=(be*240+Le)*4,He=ft[$e],Fe=ft[$e+1],qe=ft[$e+2],[st,dt,Q]=Yv(He,Fe,qe);(ie<=oe?st>=ie&&st<=oe:st>=ie||st<=oe)&&dt>=xe&&dt<=De&&Q>=ze&&Q<=ye&&(mt+=Le,wt+=be,K++,Le<Lt&&(Lt=Le),Le>gt&&(gt=Le),be<P&&(P=be),be>T&&(T=be))}if(Oe.drawImage(Pe,0,0,240,180),K>=v){const be=mt/K,Le=wt/K,$e=be/240,He=Le/180,Fe=Y.current,qe=Fe.detected?Fe.x*.35+$e*.65:$e,st=Fe.detected?Fe.y*.35+He*.65:He,dt=gt-Lt,Q=T-P,Ie=Math.max(12,Math.min(45,(dt+Q)/4));Y.current={x:qe,y:st,radius:Ie,detected:!0,rawCount:K},me.current.push({x:qe,y:st,time:Date.now()}),me.current.length>20&&me.current.shift(),Oe.strokeStyle=y.colorHex,Oe.lineWidth=2,Oe.strokeRect(Lt,P,dt,Q),Oe.beginPath(),Oe.arc(qe*240,st*180,8,0,Math.PI*2),Oe.fillStyle=y.colorHex,Oe.shadowColor=y.colorHex,Oe.shadowBlur=10,Oe.fill();const Te=Date.now();if(Te-ve.current>120){const Xe=qe-te.current;Math.abs(Xe)>.28&&(Xe>0?_e():Ne(),ve.current=Te+400),te.current=qe}C===1&&k(Xe=>({x:(st-.5)*80,y:Xe.y+(qe-.5)*6}))}else Y.current.detected=!1,me.current.length>0&&me.current.shift()}}}V=requestAnimationFrame(we)};return V=requestAnimationFrame(we),()=>cancelAnimationFrame(V)},[o,y,v,C,_e,Ne]),Qe.useEffect(()=>()=>{H()},[H]);const ae=V=>{if(!m)return;const ee=V.currentTarget.getBoundingClientRect(),Se=(V.clientX-ee.left)/ee.width,we=(V.clientY-ee.top)/ee.height;Y.current={x:Se,y:we,radius:20,detected:!0,rawCount:150},me.current.push({x:Se,y:we,time:Date.now()}),me.current.length>15&&me.current.shift(),C===1&&k(ge=>({x:(we-.5)*60,y:ge.y+(Se-.5)*4}))};Qe.useEffect(()=>{const V=setInterval(()=>{const ee=Y.current;if(!ee.detected||!s.current){Me(0),W.current=null,Z.current=null;return}const Se=s.current.getBoundingClientRect(),we=Se.left+ee.x*Se.width,ge=Se.top+ee.y*Se.height,Ce=document.elementFromPoint(we,ge),Pe=Ce==null?void 0:Ce.closest('[data-gesture-target="true"]');if(Pe){const Be=Pe.id||"unnamed-target";if(Z.current!==Be)Z.current=Be,W.current=Date.now(),yn("hover");else if(W.current){const ke=Date.now()-W.current,Ve=Math.min(100,ke/900*100);Me(Ve),Ve>=100&&(yn("select"),Pe.click(),W.current=Date.now()+600,Me(0))}}else Z.current=null,W.current=null,Me(0)},40);return()=>clearInterval(V)},[]);const X=Y.current;return h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm",children:[h.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60",children:"Módulo 3: Visión por Computador a 60 FPS"}),h.jsx("span",{className:"text-xs text-neutral-400 font-mono",children:"HTML5 Canvas + tracking.js / HSV"})]}),h.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mt-1",children:"Control Gestual en el Aire con Pulsera Neón"}),h.jsxs("p",{className:"text-sm text-neutral-300 mt-1 max-w-3xl",children:["Sistema tipo ",h.jsx("strong",{className:"text-cyan-400",children:"Minority Report"})," para presentaciones en vivo. Detecta el color fluorescente de una pulsera de silicona deportiva frente a una webcam estándar, permitiendo pasar diapositivas, manipular hologramas 3D y activar botones sin tocar la pantalla y sin GPU costosa."]})]}),h.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o?h.jsxs("button",{id:"btn-stop-camera",onClick:H,className:"flex items-center space-x-2 px-3.5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-sm font-medium border border-neutral-700 transition cursor-pointer",children:[h.jsx(GS,{className:"w-4 h-4 text-red-400"}),h.jsx("span",{children:"Apagar Cámara"})]}):h.jsxs("button",{id:"btn-start-camera",onClick:F,className:"flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-sm shadow-lg shadow-emerald-900/30 transition active:scale-95 cursor-pointer",children:[h.jsx(zu,{className:"w-4 h-4"}),h.jsx("span",{children:"Encender Webcam y Rastrear"})]}),h.jsxs("button",{id:"btn-toggle-simulation",onClick:()=>{g(!m),o&&H()},className:`flex items-center space-x-1.5 px-3 py-2.5 rounded-lg text-sm font-medium border transition cursor-pointer ${m?"bg-cyan-950/60 border-cyan-500 text-cyan-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"}`,children:[h.jsx(hl,{className:"w-4 h-4"}),h.jsx("span",{children:m?"Simulador Mouse ACTIVO":"Simular con Mouse"})]}),h.jsxs("button",{id:"btn-toggle-guide",onClick:()=>B(!U),className:"flex items-center space-x-1.5 px-3 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white text-sm transition cursor-pointer",children:[h.jsx(Nh,{className:"w-4 h-4 text-amber-400"}),h.jsx("span",{children:"Ferretería & Utilería DIY"})]})]})]}),d&&h.jsxs("div",{className:"mt-3 p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg text-xs text-amber-300 flex items-center justify-between",children:[h.jsx("span",{children:d}),h.jsx("button",{onClick:()=>g(!0),className:"underline font-semibold ml-2 hover:text-white",children:"Activar simulación con mouse"})]})]}),U&&h.jsxs("div",{className:"bg-neutral-900/90 border border-amber-900/50 rounded-xl p-6 text-sm space-y-6",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-neutral-800 pb-3",children:[h.jsxs("h3",{className:"font-semibold text-amber-300 flex items-center space-x-2",children:[h.jsx(Nh,{className:"w-4 h-4"}),h.jsx("span",{children:"Lista de Materiales y Ajustes para el Stand"})]}),h.jsx("span",{className:"text-xs text-neutral-400",children:"Costo aproximado total: $15 - $35 USD"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800 space-y-1.5",children:[h.jsx("span",{className:"font-semibold text-white text-xs uppercase tracking-wider text-emerald-400",children:"1. Pulsera de Silicona Neón"}),h.jsx("p",{className:"text-xs text-neutral-300",children:"Usa pulseras de goma para eventos o corredores en verde lima (#39FF14) o fucsia. El material de silicona mate no genera reflejos especulares de focos de feria."})]}),h.jsxs("div",{className:"bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800 space-y-1.5",children:[h.jsx("span",{className:"font-semibold text-white text-xs uppercase tracking-wider text-cyan-400",children:"2. Webcam USB 1080p"}),h.jsx("p",{className:"text-xs text-neutral-300",children:'Colocada en trípode a la altura del pecho o montada en la parte superior del monitor de 55". Conéctala al puerto USB directo de la laptop.'})]}),h.jsxs("div",{className:"bg-neutral-950/70 p-3.5 rounded-lg border border-neutral-800 space-y-1.5",children:[h.jsx("span",{className:"font-semibold text-white text-xs uppercase tracking-wider text-purple-400",children:"3. Secreto Pro: Foco Luz Negra (UV)"}),h.jsx("p",{className:"text-xs text-neutral-300",children:"Un pequeño proyector LED de luz UV (395nm, 10W-20W) apuntando a la zona del expositor hace que la pulsera emita fluorescencia pura, eliminando el 100% del ruido de fondo."})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-8 flex flex-col space-y-6",children:[h.jsxs("div",{ref:s,id:"minority-report-stage",onMouseMove:ae,className:"relative h-[480px] sm:h-[520px] w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl select-none",style:{backgroundImage:"radial-gradient(ellipse at center, rgba(14, 165, 233, 0.08) 0%, rgba(10, 10, 10, 0.95) 75%)"},children:[h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293718_1px,transparent_1px),linear-gradient(to_bottom,#1f293718_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"}),h.jsxs("div",{className:"absolute top-4 left-4 flex items-center space-x-2 pointer-events-none",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),h.jsx("span",{className:"text-[10px] font-mono text-cyan-400 tracking-widest uppercase",children:"MINORITY REPORT HUD // GESTURE INTERFACE v3.2"})]}),h.jsxs("div",{className:"absolute top-4 right-4 flex items-center space-x-2 z-20",children:[h.jsxs("button",{id:"btn-gesture-prev","data-gesture-target":"true",onClick:Ne,className:"px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-700 text-xs text-neutral-300 hover:text-cyan-400 hover:border-cyan-500 transition flex items-center space-x-1 cursor-pointer",title:"Gesto: Mueve la mano rápidamente hacia la izquierda",children:[h.jsx(qS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Swipe Izq"})]}),h.jsxs("span",{className:"text-xs font-mono text-neutral-400 px-1",children:[C+1," / 4"]}),h.jsxs("button",{id:"btn-gesture-next","data-gesture-target":"true",onClick:_e,className:"px-2.5 py-1 rounded bg-neutral-900/80 border border-neutral-700 text-xs text-neutral-300 hover:text-cyan-400 hover:border-cyan-500 transition flex items-center space-x-1 cursor-pointer",title:"Gesto: Mueve la mano rápidamente hacia la derecha",children:[h.jsx("span",{children:"Swipe Der"}),h.jsx(YS,{className:"w-3.5 h-3.5"})]})]}),C===0&&h.jsxs("div",{className:"absolute inset-0 p-8 sm:p-10 flex flex-col justify-center",children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400",children:"Diapositiva 1 • Catálogo Holográfico"}),h.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Soluciones Interactivas de Próxima Generación"}),h.jsxs("p",{className:"text-xs sm:text-sm text-neutral-400",children:["Mantén la pulsera o el cursor sobre cualquier tarjeta por 0.8s para seleccionar con ",h.jsx("strong",{className:"text-cyan-300",children:"Dwell-Click"}),"."]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[h.jsxs("div",{id:"card-hologauge","data-gesture-target":"true",onClick:()=>yn("select"),className:"p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/80 hover:bg-cyan-950/30 transition-all cursor-pointer group relative overflow-hidden",children:[h.jsx("div",{className:"w-8 h-8 rounded-lg bg-cyan-900/40 text-cyan-400 flex items-center justify-center mb-2",children:h.jsx(_r,{className:"w-4 h-4"})}),h.jsx("h4",{className:"font-semibold text-white text-sm group-hover:text-cyan-300",children:"Holo-Gauze DIY"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"Proyección de avatar 2.5m sobre tul oscuro con fondo #000000 puro."}),h.jsxs("div",{className:"mt-3 text-[10px] font-mono text-cyan-400 flex items-center space-x-1",children:[h.jsx("span",{children:"VER DETALLES"}),h.jsx("span",{children:"→"})]})]}),h.jsxs("div",{id:"card-webar","data-gesture-target":"true",onClick:()=>yn("select"),className:"p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/80 hover:bg-emerald-950/30 transition-all cursor-pointer group relative overflow-hidden",children:[h.jsx("div",{className:"w-8 h-8 rounded-lg bg-emerald-900/40 text-emerald-400 flex items-center justify-center mb-2",children:h.jsx(Fu,{className:"w-4 h-4"})}),h.jsx("h4",{className:"font-semibold text-white text-sm group-hover:text-emerald-300",children:"Póster WebAR"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"Cero apps que instalar. Modelos 3D flotantes con MindAR & Three.js."}),h.jsxs("div",{className:"mt-3 text-[10px] font-mono text-emerald-400 flex items-center space-x-1",children:[h.jsx("span",{children:"VER DETALLES"}),h.jsx("span",{children:"→"})]})]}),h.jsxs("div",{id:"card-vision","data-gesture-target":"true",onClick:()=>yn("select"),className:"p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-purple-500/80 hover:bg-purple-950/30 transition-all cursor-pointer group relative overflow-hidden",children:[h.jsx("div",{className:"w-8 h-8 rounded-lg bg-purple-900/40 text-purple-400 flex items-center justify-center mb-2",children:h.jsx(t1,{className:"w-4 h-4"})}),h.jsx("h4",{className:"font-semibold text-white text-sm group-hover:text-purple-300",children:"Visión Neón 60 FPS"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"Control por color HSV ultraligero sin sobrecargar la CPU del stand."}),h.jsxs("div",{className:"mt-3 text-[10px] font-mono text-purple-400 flex items-center space-x-1",children:[h.jsx("span",{children:"VER DETALLES"}),h.jsx("span",{children:"→"})]})]})]})]}),C===1&&h.jsxs("div",{className:"absolute inset-0 p-8 flex flex-col justify-between items-center text-center",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400",children:"Diapositiva 2 • Manipulación Espacial"}),h.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Manipulación 3D en Tiempo Real"}),h.jsx("p",{className:"text-xs text-neutral-400",children:"Mueve la mano en el aire para rotar el hipercubo holográfico en los ejes X e Y."})]}),h.jsx("div",{className:"relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center [perspective:800px]",children:h.jsx("div",{className:"relative w-32 h-32 [transform-style:preserve-3d] transition-transform duration-75",style:{transform:`rotateX(${j.x}deg) rotateY(${j.y}deg)`},children:[{transform:"translateZ(64px)",border:"border-cyan-400",label:"STAND"},{transform:"rotateY(180deg) translateZ(64px)",border:"border-emerald-400",label:"60 FPS"},{transform:"rotateY(-90deg) translateZ(64px)",border:"border-purple-400",label:"NEÓN"},{transform:"rotateY(90deg) translateZ(64px)",border:"border-amber-400",label:"AR"},{transform:"rotateX(90deg) translateZ(64px)",border:"border-cyan-300",label:"HOLO"},{transform:"rotateX(-90deg) translateZ(64px)",border:"border-blue-400",label:"WEBAR"}].map((V,ee)=>h.jsx("div",{className:`absolute inset-0 border-2 ${V.border} bg-cyan-950/20 backdrop-blur-xs flex items-center justify-center text-xs font-mono font-bold text-white shadow-[0_0_15px_rgba(34,211,238,0.2)]`,style:{transform:V.transform},children:V.label},ee))})}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("button",{id:"btn-reset-rotation","data-gesture-target":"true",onClick:()=>k({x:15,y:30}),className:"px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 hover:text-white flex items-center space-x-1.5 cursor-pointer",children:[h.jsx(b1,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Reset Ángulo"})]}),h.jsxs("span",{className:"text-[11px] font-mono text-neutral-400",children:["Rotación X: ",Math.round(j.x),"° | Y: ",Math.round(j.y),"°"]})]})]}),C===2&&h.jsxs("div",{className:"absolute inset-0 p-8 sm:p-10 flex flex-col justify-center",children:[h.jsxs("div",{className:"mb-5",children:[h.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400",children:"Diapositiva 3 • Consola de Operaciones"}),h.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Control de Iluminación y Efectos del Stand"}),h.jsx("p",{className:"text-xs sm:text-sm text-neutral-400",children:"Pasa la pulsera sobre los interruptores para encender o apagar componentes en vivo."})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[h.jsxs("button",{id:"toggle-uv-light","data-gesture-target":"true",onClick:()=>{L(V=>({...V,uvLight:!V.uvLight})),yn("select")},className:`p-4 rounded-xl border text-left transition-all cursor-pointer ${S.uvLight?"bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-900/30":"bg-neutral-900/70 border-neutral-800 opacity-60"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx(P1,{className:`w-5 h-5 ${S.uvLight?"text-purple-400":"text-neutral-500"}`}),h.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded ${S.uvLight?"bg-purple-900 text-purple-200":"bg-neutral-800 text-neutral-400"}`,children:S.uvLight?"ACTIVO":"APAGADO"})]}),h.jsx("div",{className:"font-semibold text-white text-sm mt-3",children:"Luz Negra UV (395nm)"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"Excitación de pigmento fluorescente"})]}),h.jsxs("button",{id:"toggle-ambient-audio","data-gesture-target":"true",onClick:()=>{L(V=>({...V,ambientAudio:!V.ambientAudio})),yn("select")},className:`p-4 rounded-xl border text-left transition-all cursor-pointer ${S.ambientAudio?"bg-cyan-950/40 border-cyan-500 shadow-lg shadow-cyan-900/30":"bg-neutral-900/70 border-neutral-800 opacity-60"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx(_r,{className:`w-5 h-5 ${S.ambientAudio?"text-cyan-400":"text-neutral-500"}`}),h.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded ${S.ambientAudio?"bg-cyan-900 text-cyan-200":"bg-neutral-800 text-neutral-400"}`,children:S.ambientAudio?"ACTIVO":"MUTED"})]}),h.jsx("div",{className:"font-semibold text-white text-sm mt-3",children:"Feedback Auditivo Sci-Fi"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"Sonidos sintetizados Web Audio API"})]}),h.jsxs("button",{id:"toggle-spot-light","data-gesture-target":"true",onClick:()=>{L(V=>({...V,spotLight:!V.spotLight})),yn("select")},className:`p-4 rounded-xl border text-left transition-all cursor-pointer ${S.spotLight?"bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-900/30":"bg-neutral-900/70 border-neutral-800 opacity-60"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx(Nh,{className:`w-5 h-5 ${S.spotLight?"text-amber-400":"text-neutral-500"}`}),h.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded ${S.spotLight?"bg-amber-900 text-amber-200":"bg-neutral-800 text-neutral-400"}`,children:S.spotLight?"ACTIVO":"APAGADO"})]}),h.jsx("div",{className:"font-semibold text-white text-sm mt-3",children:"Foco Recorte Holo"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-1",children:"Luz lateral para contorno de avatar"})]})]})]}),C===3&&h.jsxs("div",{className:"absolute inset-0 p-8 sm:p-10 flex flex-col justify-center",children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-cyan-400",children:"Diapositiva 4 • Métricas de Audiencia"}),h.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Telemetría del Stand en Vivo"}),h.jsx("p",{className:"text-xs sm:text-sm text-neutral-400",children:"Estadísticas generadas por las interacciones gestuales de los visitantes."})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl",children:[h.jsx("span",{className:"text-[11px] text-neutral-400 uppercase font-mono",children:"Personas Atraídas"}),h.jsx("div",{className:"text-2xl font-bold text-white mt-1",children:"1,482"}),h.jsx("span",{className:"text-[10px] text-emerald-400",children:"+34% vs stand tradicional"})]}),h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl",children:[h.jsx("span",{className:"text-[11px] text-neutral-400 uppercase font-mono",children:"Tiempo en Stand"}),h.jsx("div",{className:"text-2xl font-bold text-cyan-400 mt-1",children:"4m 12s"}),h.jsx("span",{className:"text-[10px] text-cyan-400",children:"Alto engagement"})]}),h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl",children:[h.jsx("span",{className:"text-[11px] text-neutral-400 uppercase font-mono",children:"Tasa de Escaneo AR"}),h.jsx("div",{className:"text-2xl font-bold text-emerald-400 mt-1",children:"68.4%"}),h.jsx("span",{className:"text-[10px] text-emerald-400",children:"Póster interactivo"})]}),h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 p-3.5 rounded-xl",children:[h.jsx("span",{className:"text-[11px] text-neutral-400 uppercase font-mono",children:"Rendimiento CPU"}),h.jsxs("div",{className:"text-2xl font-bold text-purple-400 mt-1",children:[A," FPS"]}),h.jsx("span",{className:"text-[10px] text-purple-400",children:"Visión ultraligera"})]})]})]}),X.detected&&h.jsx("div",{className:"absolute pointer-events-none transition-transform duration-75 ease-out z-30",style:{left:`${X.x*100}%`,top:`${X.y*100}%`,transform:"translate(-50%, -50%)"},children:h.jsxs("div",{className:"relative flex items-center justify-center",children:[J>0&&h.jsx("svg",{className:"w-16 h-16 absolute -inset-2 transform -rotate-90",children:h.jsx("circle",{cx:"32",cy:"32",r:"26",stroke:"#22d3ee",strokeWidth:"3",fill:"transparent",strokeDasharray:"163.36",strokeDashoffset:`${163.36-163.36*J/100}`,className:"transition-all duration-75"})}),h.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-cyan-400/90 shadow-[0_0_15px_#22d3ee] flex items-center justify-center bg-cyan-500/15 backdrop-blur-xs",children:h.jsx(Xv,{className:"w-4 h-4 text-cyan-300 animate-spin",style:{animationDuration:"6s"}})}),h.jsx("div",{className:"absolute -top-3 w-0.5 h-2 bg-cyan-400"}),h.jsx("div",{className:"absolute -bottom-3 w-0.5 h-2 bg-cyan-400"}),h.jsx("div",{className:"absolute -left-3 h-0.5 w-2 bg-cyan-400"}),h.jsx("div",{className:"absolute -right-3 h-0.5 w-2 bg-cyan-400"})]})}),m&&h.jsxs("div",{className:"absolute bottom-4 left-4 pointer-events-none px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-700 text-xs text-cyan-300 font-mono flex items-center space-x-2",children:[h.jsx(hl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Simulador Activo: Mueve el mouse sobre este escenario para controlar el HUD"})]})]}),h.jsx("div",{className:"flex items-center justify-center space-x-2",children:[0,1,2,3].map(V=>h.jsx("button",{onClick:()=>{yn("hover"),O(V)},className:`h-2 rounded-full transition-all cursor-pointer ${C===V?"w-8 bg-cyan-400 shadow-[0_0_8px_#22d3ee]":"w-2 bg-neutral-800 hover:bg-neutral-700"}`},V))})]}),h.jsx("div",{className:"lg:col-span-4 flex flex-col space-y-6",children:h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-neutral-800 pb-3",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(Xv,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{className:"font-semibold text-white text-sm",children:"Monitor de Visión"})]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${X.detected?"bg-emerald-950 text-emerald-400 border border-emerald-800":"bg-neutral-800 text-neutral-400"}`,children:X.detected?"OBJETO RASTREADO":"BUSCANDO NEÓN"}),h.jsxs("span",{className:"text-[10px] font-mono text-neutral-400 bg-neutral-950 px-1.5 py-0.5 rounded",children:[A," FPS"]})]})]}),h.jsxs("div",{className:"relative aspect-[4/3] bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 flex items-center justify-center",children:[h.jsx("video",{ref:l,className:"hidden",playsInline:!0,muted:!0,autoPlay:!0}),h.jsx("canvas",{ref:t,className:"hidden"}),o?h.jsx("canvas",{ref:i,onClick:I,className:`w-full h-full object-cover ${D?"cursor-crosshair":""}`}):h.jsxs("div",{className:"p-6 text-center space-y-3",children:[h.jsx("div",{className:"w-12 h-12 mx-auto rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500",children:h.jsx(zu,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-neutral-300 font-medium",children:"Cámara web inactiva"}),h.jsx("p",{className:"text-[11px] text-neutral-400 mt-0.5",children:"Enciende la cámara o usa el modo de simulación táctil."})]}),h.jsx("button",{onClick:F,className:"px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition cursor-pointer",children:"Activar Cámara"})]}),D&&h.jsx("div",{className:"absolute top-2 left-2 right-2 p-1.5 bg-cyan-950/90 border border-cyan-500 text-cyan-200 text-[10px] font-medium text-center rounded backdrop-blur-xs",children:"Haz clic sobre la pulsera u objeto en el video para capturar su color exacto"})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs text-neutral-300",children:[h.jsx("span",{className:"font-medium",children:"Color de la Pulsera:"}),o&&h.jsx("button",{onClick:()=>z(!D),className:`text-[11px] px-2 py-0.5 rounded border transition cursor-pointer ${D?"bg-cyan-500 text-black font-bold border-cyan-400":"bg-neutral-800 text-neutral-300 border-neutral-700 hover:text-white"}`,children:"Pipeta (Muestrear)"})]}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:Wv.map(V=>{const ee=y.name===V.name;return h.jsxs("button",{onClick:()=>{_(V),yn("calibrate")},className:`flex items-center space-x-2 px-2.5 py-2 rounded-lg border text-left text-xs transition cursor-pointer ${ee?"bg-neutral-800 border-cyan-500 text-white shadow-xs":"bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[h.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-white/20 shadow-xs",style:{backgroundColor:V.colorHex}}),h.jsx("span",{className:"truncate",children:V.name})]},V.name)})})]}),h.jsxs("div",{className:"pt-2 border-t border-neutral-800",children:[h.jsxs("button",{onClick:()=>M(!b),className:"w-full flex items-center justify-between text-xs text-neutral-400 hover:text-neutral-200 transition cursor-pointer",children:[h.jsxs("span",{className:"flex items-center space-x-1.5",children:[h.jsx(dp,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Ajuste Fino de Rango HSV"})]}),h.jsx("span",{children:b?"Ocultar":"Ajustar"})]}),b&&h.jsxs("div",{className:"mt-3 space-y-3 bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-xs",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-neutral-400 mb-1",children:[h.jsx("span",{children:"Sensibilidad / Píxeles Mínimos"}),h.jsxs("span",{className:"font-mono text-cyan-400",children:[v," px"]})]}),h.jsx("input",{type:"range",min:"15",max:"120",value:v,onChange:V=>E(Number(V.target.value)),className:"w-full accent-cyan-400"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-neutral-400 mb-1",children:[h.jsx("span",{children:"Tolerancia de Matiz (Hue Range)"}),h.jsxs("span",{className:"font-mono text-cyan-400",children:[y.hMin,"° - ",y.hMax,"°"]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsx("input",{type:"range",min:"0",max:"360",value:y.hMin,onChange:V=>_(ee=>({...ee,hMin:Number(V.target.value)})),className:"w-full accent-cyan-400"}),h.jsx("input",{type:"range",min:"0",max:"360",value:y.hMax,onChange:V=>_(ee=>({...ee,hMax:Number(V.target.value)})),className:"w-full accent-cyan-400"})]})]})]})]}),h.jsxs("div",{className:"p-3 bg-neutral-950/60 rounded-lg border border-neutral-800/80 space-y-2 text-[11px]",children:[h.jsx("span",{className:"font-semibold text-neutral-300 block",children:"Gestos Reconocidos:"}),h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-400",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Mover Mano:"})," Controla el retículo en pantalla."]})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-400",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Dwell (0.8s):"})," Deja la mano fija para activar botones."]})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-400",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400"}),h.jsxs("span",{children:[h.jsx("strong",{children:"Swipe Rápido:"})," Pasa a la siguiente diapositiva."]})]})]})]})})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lm="185",B1=0,Zv=1,H1=2,Nu=1,G1=2,Ao=3,yr=0,ai=1,Na=2,Ua=0,ul=1,Kv=2,Qv=3,Jv=4,V1=5,Qr=100,j1=101,k1=102,X1=103,q1=104,W1=200,Y1=201,Z1=202,K1=203,hp=204,pp=205,Q1=206,J1=207,$1=208,eE=209,tE=210,nE=211,iE=212,aE=213,rE=214,mp=0,gp=1,xp=2,pl=3,vp=4,_p=5,yp=6,bp=7,iy=0,sE=1,lE=2,la=0,ay=1,ry=2,sy=3,ly=4,oy=5,cy=6,uy=7,fy=300,is=301,ml=302,Dh=303,Uh=304,Wu=306,Mp=1e3,Da=1001,Sp=1002,Fn=1003,oE=1004,iu=1005,Vn=1006,Lh=1007,es=1008,gi=1009,dy=1010,hy=1011,Ro=1012,om=1013,ca=1014,ra=1015,Oa=1016,cm=1017,um=1018,Co=1020,py=35902,my=35899,gy=1021,xy=1022,Vi=1023,Pa=1026,ts=1027,vy=1028,fm=1029,as=1030,dm=1031,hm=1033,Du=33776,Uu=33777,Lu=33778,Ou=33779,Ep=35840,Tp=35841,Ap=35842,wp=35843,Rp=36196,Cp=37492,Np=37496,Dp=37488,Up=37489,Bu=37490,Lp=37491,Op=37808,Pp=37809,Ip=37810,zp=37811,Fp=37812,Bp=37813,Hp=37814,Gp=37815,Vp=37816,jp=37817,kp=37818,Xp=37819,qp=37820,Wp=37821,Yp=36492,Zp=36494,Kp=36495,Qp=36283,Jp=36284,Hu=36285,$p=36286,cE=3200,em=0,uE=1,xr="",Ci="srgb",Gu="srgb-linear",Vu="linear",Qt="srgb",Zs=7680,$v=519,fE=512,dE=513,hE=514,pm=515,pE=516,mE=517,mm=518,gE=519,e_=35044,t_="300 es",sa=2e3,No=2001;function xE(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function ju(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function vE(){const l=ju("canvas");return l.style.display="block",l}const n_={};function i_(...l){const t="THREE."+l.shift();console.log(t,...l)}function _y(l){const t=l[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=l[1];i&&i.isStackTrace?l[0]+=" "+i.getLocation():l[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return l}function pt(...l){l=_y(l);const t="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...l)}}function Ht(...l){l=_y(l);const t="THREE."+l.shift();{const i=l[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...l)}}function fl(...l){const t=l.join(" ");t in n_||(n_[t]=!0,pt(...l))}function _E(l,t,i){return new Promise(function(s,o){function f(){switch(l.clientWaitSync(t,l.SYNC_FLUSH_COMMANDS_BIT,0)){case l.WAIT_FAILED:o();break;case l.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const yE={[mp]:gp,[xp]:yp,[vp]:bp,[pl]:_p,[gp]:mp,[yp]:xp,[bp]:vp,[_p]:pl};class rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const f=o.indexOf(i);f!==-1&&o.splice(f,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let f=0,d=o.length;f<d;f++)o[f].call(this,t);t.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=Math.PI/180,tm=180/Math.PI;function Uo(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[l&255]+Hn[l>>8&255]+Hn[l>>16&255]+Hn[l>>24&255]+"-"+Hn[t&255]+Hn[t>>8&255]+"-"+Hn[t>>16&15|64]+Hn[t>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function zt(l,t,i){return Math.max(t,Math.min(i,l))}function bE(l,t){return(l%t+t)%t}function Ph(l,t,i){return(1-i)*l+i*t}function vo(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return l/4294967295;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int32Array:return Math.max(l/2147483647,-1);case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ni(l,t){switch(t.constructor){case Float32Array:return l;case Uint32Array:return Math.round(l*4294967295);case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int32Array:return Math.round(l*2147483647);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Tm=class Tm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,o=t.elements;return this.x=o[0]*i+o[3]*s+o[6],this.y=o[1]*i+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(zt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),o=Math.sin(i),f=this.x-t.x,d=this.y-t.y;return this.x=f*s-d*o+t.x,this.y=f*o+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tm.prototype.isVector2=!0;let Nt=Tm;class vl{constructor(t=0,i=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=o}static slerpFlat(t,i,s,o,f,d,p){let m=s[o+0],g=s[o+1],y=s[o+2],_=s[o+3],v=f[d+0],E=f[d+1],A=f[d+2],N=f[d+3];if(_!==N||m!==v||g!==E||y!==A){let b=m*v+g*E+y*A+_*N;b<0&&(v=-v,E=-E,A=-A,N=-N,b=-b);let M=1-p;if(b<.9995){const U=Math.acos(b),B=Math.sin(U);M=Math.sin(M*U)/B,p=Math.sin(p*U)/B,m=m*M+v*p,g=g*M+E*p,y=y*M+A*p,_=_*M+N*p}else{m=m*M+v*p,g=g*M+E*p,y=y*M+A*p,_=_*M+N*p;const U=1/Math.sqrt(m*m+g*g+y*y+_*_);m*=U,g*=U,y*=U,_*=U}}t[i]=m,t[i+1]=g,t[i+2]=y,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,o,f,d){const p=s[o],m=s[o+1],g=s[o+2],y=s[o+3],_=f[d],v=f[d+1],E=f[d+2],A=f[d+3];return t[i]=p*A+y*_+m*E-g*v,t[i+1]=m*A+y*v+g*_-p*E,t[i+2]=g*A+y*E+p*v-m*_,t[i+3]=y*A-p*_-m*v-g*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,o){return this._x=t,this._y=i,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,o=t._y,f=t._z,d=t._order,p=Math.cos,m=Math.sin,g=p(s/2),y=p(o/2),_=p(f/2),v=m(s/2),E=m(o/2),A=m(f/2);switch(d){case"XYZ":this._x=v*y*_+g*E*A,this._y=g*E*_-v*y*A,this._z=g*y*A+v*E*_,this._w=g*y*_-v*E*A;break;case"YXZ":this._x=v*y*_+g*E*A,this._y=g*E*_-v*y*A,this._z=g*y*A-v*E*_,this._w=g*y*_+v*E*A;break;case"ZXY":this._x=v*y*_-g*E*A,this._y=g*E*_+v*y*A,this._z=g*y*A+v*E*_,this._w=g*y*_-v*E*A;break;case"ZYX":this._x=v*y*_-g*E*A,this._y=g*E*_+v*y*A,this._z=g*y*A-v*E*_,this._w=g*y*_+v*E*A;break;case"YZX":this._x=v*y*_+g*E*A,this._y=g*E*_+v*y*A,this._z=g*y*A-v*E*_,this._w=g*y*_-v*E*A;break;case"XZY":this._x=v*y*_-g*E*A,this._y=g*E*_-v*y*A,this._z=g*y*A+v*E*_,this._w=g*y*_+v*E*A;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],o=i[4],f=i[8],d=i[1],p=i[5],m=i[9],g=i[2],y=i[6],_=i[10],v=s+p+_;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(y-m)*E,this._y=(f-g)*E,this._z=(d-o)*E}else if(s>p&&s>_){const E=2*Math.sqrt(1+s-p-_);this._w=(y-m)/E,this._x=.25*E,this._y=(o+d)/E,this._z=(f+g)/E}else if(p>_){const E=2*Math.sqrt(1+p-s-_);this._w=(f-g)/E,this._x=(o+d)/E,this._y=.25*E,this._z=(m+y)/E}else{const E=2*Math.sqrt(1+_-s-p);this._w=(d-o)/E,this._x=(f+g)/E,this._y=(m+y)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,i/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,o=t._y,f=t._z,d=t._w,p=i._x,m=i._y,g=i._z,y=i._w;return this._x=s*y+d*p+o*g-f*m,this._y=o*y+d*m+f*p-s*g,this._z=f*y+d*g+s*m-o*p,this._w=d*y-s*p-o*m-f*g,this._onChangeCallback(),this}slerp(t,i){let s=t._x,o=t._y,f=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,o=-o,f=-f,d=-d,p=-p);let m=1-i;if(p<.9995){const g=Math.acos(p),y=Math.sin(g);m=Math.sin(m*g)/y,i=Math.sin(i*g)/y,this._x=this._x*m+s*i,this._y=this._y*m+o*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+o*i,this._z=this._z*m+f*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),f*Math.sin(i),f*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Am=class Am{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(a_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(a_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,o=this.z,f=t.elements;return this.x=f[0]*i+f[3]*s+f[6]*o,this.y=f[1]*i+f[4]*s+f[7]*o,this.z=f[2]*i+f[5]*s+f[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,o=this.z,f=t.elements,d=1/(f[3]*i+f[7]*s+f[11]*o+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*o+f[12])*d,this.y=(f[1]*i+f[5]*s+f[9]*o+f[13])*d,this.z=(f[2]*i+f[6]*s+f[10]*o+f[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,o=this.z,f=t.x,d=t.y,p=t.z,m=t.w,g=2*(d*o-p*s),y=2*(p*i-f*o),_=2*(f*s-d*i);return this.x=i+m*g+d*_-p*y,this.y=s+m*y+p*g-f*_,this.z=o+m*_+f*y-d*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,o=this.z,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*o,this.y=f[1]*i+f[5]*s+f[9]*o,this.z=f[2]*i+f[6]*s+f[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this.z=zt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this.z=zt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,o=t.y,f=t.z,d=i.x,p=i.y,m=i.z;return this.x=o*m-f*p,this.y=f*d-s*m,this.z=s*p-o*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ih.copy(this).projectOnVector(t),this.sub(Ih)}reflect(t){return this.sub(Ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(zt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return i*i+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const o=Math.sin(i)*t;return this.x=o*Math.sin(s),this.y=Math.cos(i)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Am.prototype.isVector3=!0;let le=Am;const Ih=new le,a_=new vl,wm=class wm{constructor(t,i,s,o,f,d,p,m,g){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,o,f,d,p,m,g)}set(t,i,s,o,f,d,p,m,g){const y=this.elements;return y[0]=t,y[1]=o,y[2]=p,y[3]=i,y[4]=f,y[5]=m,y[6]=s,y[7]=d,y[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,o=i.elements,f=this.elements,d=s[0],p=s[3],m=s[6],g=s[1],y=s[4],_=s[7],v=s[2],E=s[5],A=s[8],N=o[0],b=o[3],M=o[6],U=o[1],B=o[4],C=o[7],O=o[2],D=o[5],z=o[8];return f[0]=d*N+p*U+m*O,f[3]=d*b+p*B+m*D,f[6]=d*M+p*C+m*z,f[1]=g*N+y*U+_*O,f[4]=g*b+y*B+_*D,f[7]=g*M+y*C+_*z,f[2]=v*N+E*U+A*O,f[5]=v*b+E*B+A*D,f[8]=v*M+E*C+A*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],o=t[2],f=t[3],d=t[4],p=t[5],m=t[6],g=t[7],y=t[8];return i*d*y-i*p*g-s*f*y+s*p*m+o*f*g-o*d*m}invert(){const t=this.elements,i=t[0],s=t[1],o=t[2],f=t[3],d=t[4],p=t[5],m=t[6],g=t[7],y=t[8],_=y*d-p*g,v=p*m-y*f,E=g*f-d*m,A=i*_+s*v+o*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/A;return t[0]=_*N,t[1]=(o*g-y*s)*N,t[2]=(p*s-o*d)*N,t[3]=v*N,t[4]=(y*i-o*m)*N,t[5]=(o*f-p*i)*N,t[6]=E*N,t[7]=(s*m-g*i)*N,t[8]=(d*i-s*f)*N,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,o,f,d,p){const m=Math.cos(f),g=Math.sin(f);return this.set(s*m,s*g,-s*(m*d+g*p)+d+t,-o*g,o*m,-o*(-g*d+m*p)+p+i,0,0,1),this}scale(t,i){return fl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zh.makeScale(t,i)),this}rotate(t){return fl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zh.makeRotation(-t)),this}translate(t,i){return fl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let o=0;o<9;o++)if(i[o]!==s[o])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};wm.prototype.isMatrix3=!0;let yt=wm;const zh=new yt,r_=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ME(){const l={enabled:!0,workingColorSpace:Gu,spaces:{},convert:function(o,f,d){return this.enabled===!1||f===d||!f||!d||(this.spaces[f].transfer===Qt&&(o.r=La(o.r),o.g=La(o.g),o.b=La(o.b)),this.spaces[f].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[f].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Qt&&(o.r=dl(o.r),o.g=dl(o.g),o.b=dl(o.b))),o},workingToColorSpace:function(o,f){return this.convert(o,this.workingColorSpace,f)},colorSpaceToWorking:function(o,f){return this.convert(o,f,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===xr?Vu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,f=this.workingColorSpace){return o.fromArray(this.spaces[f].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,f,d){return o.copy(this.spaces[f].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,f){return fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),l.workingToColorSpace(o,f)},toWorkingColorSpace:function(o,f){return fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),l.colorSpaceToWorking(o,f)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return l.define({[Gu]:{primaries:t,whitePoint:s,transfer:Vu,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ci},outputColorSpaceConfig:{drawingBufferColorSpace:Ci}},[Ci]:{primaries:t,whitePoint:s,transfer:Qt,toXYZ:r_,fromXYZ:s_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ci}}}),l}const It=ME();function La(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function dl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}let Ks;class SE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ks===void 0&&(Ks=ju("canvas")),Ks.width=t.width,Ks.height=t.height;const o=Ks.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=Ks}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ju("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),f=o.data;for(let d=0;d<f.length;d++)f[d]=La(f[d]/255)*255;return s.putImageData(o,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(La(i[s]/255)*255):i[s]=La(i[s]);return{data:i,width:t.width,height:t.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let EE=0;class gm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EE++}),this.uuid=Uo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let f;if(Array.isArray(o)){f=[];for(let d=0,p=o.length;d<p;d++)o[d].isDataTexture?f.push(Fh(o[d].image)):f.push(Fh(o[d]))}else f=Fh(o);s.url=f}return i||(t.images[this.uuid]=s),s}}function Fh(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?SE.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let TE=0;const Bh=new le;class Zn extends rs{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Da,o=Da,f=Vn,d=es,p=Vi,m=gi,g=Zn.DEFAULT_ANISOTROPY,y=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TE++}),this.uuid=Uo(),this.name="",this.source=new gm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=f,this.minFilter=d,this.anisotropy=g,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){pt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){pt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mp:t.x=t.x-Math.floor(t.x);break;case Da:t.x=t.x<0?0:1;break;case Sp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mp:t.y=t.y-Math.floor(t.y);break;case Da:t.y=t.y<0?0:1;break;case Sp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=fy;Zn.DEFAULT_ANISOTROPY=1;const Rm=class Rm{constructor(t=0,i=0,s=0,o=1){this.x=t,this.y=i,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,o){return this.x=t,this.y=i,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,o=this.z,f=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*o+d[12]*f,this.y=d[1]*i+d[5]*s+d[9]*o+d[13]*f,this.z=d[2]*i+d[6]*s+d[10]*o+d[14]*f,this.w=d[3]*i+d[7]*s+d[11]*o+d[15]*f,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,o,f;const m=t.elements,g=m[0],y=m[4],_=m[8],v=m[1],E=m[5],A=m[9],N=m[2],b=m[6],M=m[10];if(Math.abs(y-v)<.01&&Math.abs(_-N)<.01&&Math.abs(A-b)<.01){if(Math.abs(y+v)<.1&&Math.abs(_+N)<.1&&Math.abs(A+b)<.1&&Math.abs(g+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const B=(g+1)/2,C=(E+1)/2,O=(M+1)/2,D=(y+v)/4,z=(_+N)/4,S=(A+b)/4;return B>C&&B>O?B<.01?(s=0,o=.707106781,f=.707106781):(s=Math.sqrt(B),o=D/s,f=z/s):C>O?C<.01?(s=.707106781,o=0,f=.707106781):(o=Math.sqrt(C),s=D/o,f=S/o):O<.01?(s=.707106781,o=.707106781,f=0):(f=Math.sqrt(O),s=z/f,o=S/f),this.set(s,o,f,i),this}let U=Math.sqrt((b-A)*(b-A)+(_-N)*(_-N)+(v-y)*(v-y));return Math.abs(U)<.001&&(U=1),this.x=(b-A)/U,this.y=(_-N)/U,this.z=(v-y)/U,this.w=Math.acos((g+E+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=zt(this.x,t.x,i.x),this.y=zt(this.y,t.y,i.y),this.z=zt(this.z,t.z,i.z),this.w=zt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=zt(this.x,t,i),this.y=zt(this.y,t,i),this.z=zt(this.z,t,i),this.w=zt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(zt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rm.prototype.isVector4=!0;let cn=Rm;class AE extends rs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i),this.textures=[];const o={width:t,height:i,depth:s.depth},f=new Zn(o),d=s.count;for(let p=0;p<d;p++)this.textures[p]=f.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let o=0,f=this.textures.length;o<f;o++)this.textures[o].image.width=t,this.textures[o].image.height=i,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const o=Object.assign({},t.textures[i].image);this.textures[i].source=new gm(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oa extends AE{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class yy extends Zn{constructor(t=null,i=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Zn{constructor(t=null,i=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qu=class qu{constructor(t,i,s,o,f,d,p,m,g,y,_,v,E,A,N,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,o,f,d,p,m,g,y,_,v,E,A,N,b)}set(t,i,s,o,f,d,p,m,g,y,_,v,E,A,N,b){const M=this.elements;return M[0]=t,M[4]=i,M[8]=s,M[12]=o,M[1]=f,M[5]=d,M[9]=p,M[13]=m,M[2]=g,M[6]=y,M[10]=_,M[14]=v,M[3]=E,M[7]=A,M[11]=N,M[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qu().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,o=1/Qs.setFromMatrixColumn(t,0).length(),f=1/Qs.setFromMatrixColumn(t,1).length(),d=1/Qs.setFromMatrixColumn(t,2).length();return i[0]=s[0]*o,i[1]=s[1]*o,i[2]=s[2]*o,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,o=t.y,f=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(o),g=Math.sin(o),y=Math.cos(f),_=Math.sin(f);if(t.order==="XYZ"){const v=d*y,E=d*_,A=p*y,N=p*_;i[0]=m*y,i[4]=-m*_,i[8]=g,i[1]=E+A*g,i[5]=v-N*g,i[9]=-p*m,i[2]=N-v*g,i[6]=A+E*g,i[10]=d*m}else if(t.order==="YXZ"){const v=m*y,E=m*_,A=g*y,N=g*_;i[0]=v+N*p,i[4]=A*p-E,i[8]=d*g,i[1]=d*_,i[5]=d*y,i[9]=-p,i[2]=E*p-A,i[6]=N+v*p,i[10]=d*m}else if(t.order==="ZXY"){const v=m*y,E=m*_,A=g*y,N=g*_;i[0]=v-N*p,i[4]=-d*_,i[8]=A+E*p,i[1]=E+A*p,i[5]=d*y,i[9]=N-v*p,i[2]=-d*g,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const v=d*y,E=d*_,A=p*y,N=p*_;i[0]=m*y,i[4]=A*g-E,i[8]=v*g+N,i[1]=m*_,i[5]=N*g+v,i[9]=E*g-A,i[2]=-g,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const v=d*m,E=d*g,A=p*m,N=p*g;i[0]=m*y,i[4]=N-v*_,i[8]=A*_+E,i[1]=_,i[5]=d*y,i[9]=-p*y,i[2]=-g*y,i[6]=E*_+A,i[10]=v-N*_}else if(t.order==="XZY"){const v=d*m,E=d*g,A=p*m,N=p*g;i[0]=m*y,i[4]=-_,i[8]=g*y,i[1]=v*_+N,i[5]=d*y,i[9]=E*_-A,i[2]=A*_-E,i[6]=p*y,i[10]=N*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(RE,t,CE)}lookAt(t,i,s){const o=this.elements;return pi.subVectors(t,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),fr.crossVectors(s,pi),fr.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),fr.crossVectors(s,pi)),fr.normalize(),au.crossVectors(pi,fr),o[0]=fr.x,o[4]=au.x,o[8]=pi.x,o[1]=fr.y,o[5]=au.y,o[9]=pi.y,o[2]=fr.z,o[6]=au.z,o[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,o=i.elements,f=this.elements,d=s[0],p=s[4],m=s[8],g=s[12],y=s[1],_=s[5],v=s[9],E=s[13],A=s[2],N=s[6],b=s[10],M=s[14],U=s[3],B=s[7],C=s[11],O=s[15],D=o[0],z=o[4],S=o[8],L=o[12],j=o[1],k=o[5],Y=o[9],me=o[13],ve=o[2],te=o[6],W=o[10],Z=o[14],J=o[3],Me=o[7],H=o[11],F=o[15];return f[0]=d*D+p*j+m*ve+g*J,f[4]=d*z+p*k+m*te+g*Me,f[8]=d*S+p*Y+m*W+g*H,f[12]=d*L+p*me+m*Z+g*F,f[1]=y*D+_*j+v*ve+E*J,f[5]=y*z+_*k+v*te+E*Me,f[9]=y*S+_*Y+v*W+E*H,f[13]=y*L+_*me+v*Z+E*F,f[2]=A*D+N*j+b*ve+M*J,f[6]=A*z+N*k+b*te+M*Me,f[10]=A*S+N*Y+b*W+M*H,f[14]=A*L+N*me+b*Z+M*F,f[3]=U*D+B*j+C*ve+O*J,f[7]=U*z+B*k+C*te+O*Me,f[11]=U*S+B*Y+C*W+O*H,f[15]=U*L+B*me+C*Z+O*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],o=t[8],f=t[12],d=t[1],p=t[5],m=t[9],g=t[13],y=t[2],_=t[6],v=t[10],E=t[14],A=t[3],N=t[7],b=t[11],M=t[15],U=m*E-g*v,B=p*E-g*_,C=p*v-m*_,O=d*E-g*y,D=d*v-m*y,z=d*_-p*y;return i*(N*U-b*B+M*C)-s*(A*U-b*O+M*D)+o*(A*B-N*O+M*z)-f*(A*C-N*D+b*z)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],o=t[8],f=t[1],d=t[5],p=t[9],m=t[2],g=t[6],y=t[10];return i*(d*y-p*g)-s*(f*y-p*m)+o*(f*g-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],o=t[2],f=t[3],d=t[4],p=t[5],m=t[6],g=t[7],y=t[8],_=t[9],v=t[10],E=t[11],A=t[12],N=t[13],b=t[14],M=t[15],U=i*p-s*d,B=i*m-o*d,C=i*g-f*d,O=s*m-o*p,D=s*g-f*p,z=o*g-f*m,S=y*N-_*A,L=y*b-v*A,j=y*M-E*A,k=_*b-v*N,Y=_*M-E*N,me=v*M-E*b,ve=U*me-B*Y+C*k+O*j-D*L+z*S;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/ve;return t[0]=(p*me-m*Y+g*k)*te,t[1]=(o*Y-s*me-f*k)*te,t[2]=(N*z-b*D+M*O)*te,t[3]=(v*D-_*z-E*O)*te,t[4]=(m*j-d*me-g*L)*te,t[5]=(i*me-o*j+f*L)*te,t[6]=(b*C-A*z-M*B)*te,t[7]=(y*z-v*C+E*B)*te,t[8]=(d*Y-p*j+g*S)*te,t[9]=(s*j-i*Y-f*S)*te,t[10]=(A*D-N*C+M*U)*te,t[11]=(_*C-y*D-E*U)*te,t[12]=(p*L-d*k-m*S)*te,t[13]=(i*k-s*L+o*S)*te,t[14]=(N*B-A*O-b*U)*te,t[15]=(y*O-_*B+v*U)*te,this}scale(t){const i=this.elements,s=t.x,o=t.y,f=t.z;return i[0]*=s,i[4]*=o,i[8]*=f,i[1]*=s,i[5]*=o,i[9]*=f,i[2]*=s,i[6]*=o,i[10]*=f,i[3]*=s,i[7]*=o,i[11]*=f,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,o))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),o=Math.sin(i),f=1-s,d=t.x,p=t.y,m=t.z,g=f*d,y=f*p;return this.set(g*d+s,g*p-o*m,g*m+o*p,0,g*p+o*m,y*p+s,y*m-o*d,0,g*m-o*p,y*m+o*d,f*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,o,f,d){return this.set(1,s,f,0,t,1,d,0,i,o,1,0,0,0,0,1),this}compose(t,i,s){const o=this.elements,f=i._x,d=i._y,p=i._z,m=i._w,g=f+f,y=d+d,_=p+p,v=f*g,E=f*y,A=f*_,N=d*y,b=d*_,M=p*_,U=m*g,B=m*y,C=m*_,O=s.x,D=s.y,z=s.z;return o[0]=(1-(N+M))*O,o[1]=(E+C)*O,o[2]=(A-B)*O,o[3]=0,o[4]=(E-C)*D,o[5]=(1-(v+M))*D,o[6]=(b+U)*D,o[7]=0,o[8]=(A+B)*z,o[9]=(b-U)*z,o[10]=(1-(v+N))*z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,s){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const f=this.determinantAffine();if(f===0)return s.set(1,1,1),i.identity(),this;let d=Qs.set(o[0],o[1],o[2]).length();const p=Qs.set(o[4],o[5],o[6]).length(),m=Qs.set(o[8],o[9],o[10]).length();f<0&&(d=-d),Fi.copy(this);const g=1/d,y=1/p,_=1/m;return Fi.elements[0]*=g,Fi.elements[1]*=g,Fi.elements[2]*=g,Fi.elements[4]*=y,Fi.elements[5]*=y,Fi.elements[6]*=y,Fi.elements[8]*=_,Fi.elements[9]*=_,Fi.elements[10]*=_,i.setFromRotationMatrix(Fi),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,o,f,d,p=sa,m=!1){const g=this.elements,y=2*f/(i-t),_=2*f/(s-o),v=(i+t)/(i-t),E=(s+o)/(s-o);let A,N;if(m)A=f/(d-f),N=d*f/(d-f);else if(p===sa)A=-(d+f)/(d-f),N=-2*d*f/(d-f);else if(p===No)A=-d/(d-f),N=-d*f/(d-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return g[0]=y,g[4]=0,g[8]=v,g[12]=0,g[1]=0,g[5]=_,g[9]=E,g[13]=0,g[2]=0,g[6]=0,g[10]=A,g[14]=N,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,o,f,d,p=sa,m=!1){const g=this.elements,y=2/(i-t),_=2/(s-o),v=-(i+t)/(i-t),E=-(s+o)/(s-o);let A,N;if(m)A=1/(d-f),N=d/(d-f);else if(p===sa)A=-2/(d-f),N=-(d+f)/(d-f);else if(p===No)A=-1/(d-f),N=-f/(d-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return g[0]=y,g[4]=0,g[8]=0,g[12]=v,g[1]=0,g[5]=_,g[9]=0,g[13]=E,g[2]=0,g[6]=0,g[10]=A,g[14]=N,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let o=0;o<16;o++)if(i[o]!==s[o])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};qu.prototype.isMatrix4=!0;let ln=qu;const Qs=new le,Fi=new ln,RE=new le(0,0,0),CE=new le(1,1,1),fr=new le,au=new le,pi=new le,l_=new ln,o_=new vl;class br{constructor(t=0,i=0,s=0,o=br.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,o=this._order){return this._x=t,this._y=i,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const o=t.elements,f=o[0],d=o[4],p=o[8],m=o[1],g=o[5],y=o[9],_=o[2],v=o[6],E=o[10];switch(i){case"XYZ":this._y=Math.asin(zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,E),this._z=Math.atan2(-d,f)):(this._x=Math.atan2(v,g),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,g)):(this._y=Math.atan2(-_,f),this._z=0);break;case"ZXY":this._x=Math.asin(zt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,g)):(this._y=0,this._z=Math.atan2(m,f));break;case"ZYX":this._y=Math.asin(-zt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(m,f)):(this._x=0,this._z=Math.atan2(-d,g));break;case"YZX":this._z=Math.asin(zt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,g),this._y=Math.atan2(-_,f)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,g),this._y=Math.atan2(p,f)):(this._x=Math.atan2(-y,E),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return l_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(l_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return o_.setFromEuler(this),this.setFromQuaternion(o_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}br.DEFAULT_ORDER="XYZ";class by{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NE=0;const c_=new le,Js=new vl,Ta=new ln,ru=new le,_o=new le,DE=new le,UE=new vl,u_=new le(1,0,0),f_=new le(0,1,0),d_=new le(0,0,1),h_={type:"added"},LE={type:"removed"},$s={type:"childadded",child:null},Hh={type:"childremoved",child:null};class Nn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new le,i=new br,s=new vl,o=new le(1,1,1);function f(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new yt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new by,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Js.setFromAxisAngle(t,i),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,i){return Js.setFromAxisAngle(t,i),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(u_,t)}rotateY(t){return this.rotateOnAxis(f_,t)}rotateZ(t){return this.rotateOnAxis(d_,t)}translateOnAxis(t,i){return c_.copy(t).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(u_,t)}translateY(t){return this.translateOnAxis(f_,t)}translateZ(t){return this.translateOnAxis(d_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ta.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?ru.copy(t):ru.set(t,i,s);const o=this.parent;this.updateWorldMatrix(!0,!1),_o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ta.lookAt(_o,ru,this.up):Ta.lookAt(ru,_o,this.up),this.quaternion.setFromRotationMatrix(Ta),o&&(Ta.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(Ta),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(h_),$s.child=t,this.dispatchEvent($s),$s.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(LE),Hh.child=t,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(h_),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const o=this.children;for(let f=0,d=o.length;f<d;f++)o[f].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,t,DE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_o,UE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,o=t.z,f=this.matrix.elements;f[12]+=i-f[0]*i-f[4]*s-f[8]*o,f[13]+=s-f[1]*i-f[5]*s-f[9]*o,f[14]+=o-f[2]*i-f[6]*s-f[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const f=this.children;for(let d=0,p=f.length;d<p;d++)f[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function f(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=f(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let g=0,y=m.length;g<y;g++){const _=m[g];f(t.shapes,_)}else f(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,g=this.material.length;m<g;m++)p.push(f(t.materials,this.material[m]));o.material=p}else o.material=f(t.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];o.animations.push(f(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),g=d(t.textures),y=d(t.images),_=d(t.shapes),v=d(t.skeletons),E=d(t.animations),A=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),g.length>0&&(s.textures=g),y.length>0&&(s.images=y),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),A.length>0&&(s.nodes=A)}return s.object=o,s;function d(p){const m=[];for(const g in p){const y=p[g];delete y.metadata,m.push(y)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Nn.DEFAULT_UP=new le(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cl extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OE={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let o=null,f=null,d=null;const p=this._targetRay,m=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){d=!0;for(const N of t.hand.values()){const b=i.getJointPose(N,s),M=this._getHandJoint(g,N);b!==null&&(M.matrix.fromArray(b.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=b.radius),M.visible=b!==null}const y=g.joints["index-finger-tip"],_=g.joints["thumb-tip"],v=y.position.distanceTo(_.position),E=.02,A=.005;g.inputState.pinching&&v>E+A?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&v<=E-A&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(f=i.getPose(t.gripSpace,s),f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,f.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(f.linearVelocity)):m.hasLinearVelocity=!1,f.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(f.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(o=i.getPose(t.targetRaySpace,s),o===null&&f!==null&&(o=f),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(OE)))}return p!==null&&(p.visible=o!==null),m!==null&&(m.visible=f!==null),g!==null&&(g.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new cl;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const My={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},su={h:0,s:0,l:0};function Vh(l,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?l+(t-l)*6*i:i<1/2?t:i<2/3?l+(t-l)*6*(2/3-i):l}class Ct{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,It.colorSpaceToWorking(this,i),this}setRGB(t,i,s,o=It.workingColorSpace){return this.r=t,this.g=i,this.b=s,It.colorSpaceToWorking(this,o),this}setHSL(t,i,s,o=It.workingColorSpace){if(t=bE(t,1),i=zt(i,0,1),s=zt(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,d=2*s-f;this.r=Vh(d,f,t+1/3),this.g=Vh(d,f,t),this.b=Vh(d,f,t-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(t,i=Ci){function s(f){f!==void 0&&parseFloat(f)<1&&pt("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let f;const d=o[1],p=o[2];switch(d){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:pt("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const f=o[1],d=f.length;if(d===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(f,16),i);pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ci){const s=My[t.toLowerCase()];return s!==void 0?this.setHex(s,i):pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=dl(t.r),this.g=dl(t.g),this.b=dl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ci){return It.workingToColorSpace(Gn.copy(this),t),Math.round(zt(Gn.r*255,0,255))*65536+Math.round(zt(Gn.g*255,0,255))*256+Math.round(zt(Gn.b*255,0,255))}getHexString(t=Ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=It.workingColorSpace){It.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,o=Gn.g,f=Gn.b,d=Math.max(s,o,f),p=Math.min(s,o,f);let m,g;const y=(p+d)/2;if(p===d)m=0,g=0;else{const _=d-p;switch(g=y<=.5?_/(d+p):_/(2-d-p),d){case s:m=(o-f)/_+(o<f?6:0);break;case o:m=(f-s)/_+2;break;case f:m=(s-o)/_+4;break}m/=6}return t.h=m,t.s=g,t.l=y,t}getRGB(t,i=It.workingColorSpace){return It.workingToColorSpace(Gn.copy(this),i),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=Ci){It.workingToColorSpace(Gn.copy(this),t);const i=Gn.r,s=Gn.g,o=Gn.b;return t!==Ci?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,i,s){return this.getHSL(dr),this.setHSL(dr.h+t,dr.s+i,dr.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(dr),t.getHSL(su);const s=Ph(dr.h,su.h,i),o=Ph(dr.s,su.s,i),f=Ph(dr.l,su.l,i);return this.setHSL(s,o,f),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,o=this.b,f=t.elements;return this.r=f[0]*i+f[3]*s+f[6]*o,this.g=f[1]*i+f[4]*s+f[7]*o,this.b=f[2]*i+f[5]*s+f[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Ct;Ct.NAMES=My;class Sy extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new br,this.environmentIntensity=1,this.environmentRotation=new br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bi=new le,Aa=new le,jh=new le,wa=new le,el=new le,tl=new le,p_=new le,kh=new le,Xh=new le,qh=new le,Wh=new cn,Yh=new cn,Zh=new cn;class Gi{constructor(t=new le,i=new le,s=new le){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,o){o.subVectors(s,i),Bi.subVectors(t,i),o.cross(Bi);const f=o.lengthSq();return f>0?o.multiplyScalar(1/Math.sqrt(f)):o.set(0,0,0)}static getBarycoord(t,i,s,o,f){Bi.subVectors(o,i),Aa.subVectors(s,i),jh.subVectors(t,i);const d=Bi.dot(Bi),p=Bi.dot(Aa),m=Bi.dot(jh),g=Aa.dot(Aa),y=Aa.dot(jh),_=d*g-p*p;if(_===0)return f.set(0,0,0),null;const v=1/_,E=(g*m-p*y)*v,A=(d*y-p*m)*v;return f.set(1-E-A,A,E)}static containsPoint(t,i,s,o){return this.getBarycoord(t,i,s,o,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,i,s,o,f,d,p,m){return this.getBarycoord(t,i,s,o,wa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(f,wa.x),m.addScaledVector(d,wa.y),m.addScaledVector(p,wa.z),m)}static getInterpolatedAttribute(t,i,s,o,f,d){return Wh.setScalar(0),Yh.setScalar(0),Zh.setScalar(0),Wh.fromBufferAttribute(t,i),Yh.fromBufferAttribute(t,s),Zh.fromBufferAttribute(t,o),d.setScalar(0),d.addScaledVector(Wh,f.x),d.addScaledVector(Yh,f.y),d.addScaledVector(Zh,f.z),d}static isFrontFacing(t,i,s,o){return Bi.subVectors(s,i),Aa.subVectors(t,i),Bi.cross(Aa).dot(o)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,o){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,s,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Bi.cross(Aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,o,f){return Gi.getInterpolation(t,this.a,this.b,this.c,i,s,o,f)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,o=this.b,f=this.c;let d,p;el.subVectors(o,s),tl.subVectors(f,s),kh.subVectors(t,s);const m=el.dot(kh),g=tl.dot(kh);if(m<=0&&g<=0)return i.copy(s);Xh.subVectors(t,o);const y=el.dot(Xh),_=tl.dot(Xh);if(y>=0&&_<=y)return i.copy(o);const v=m*_-y*g;if(v<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(s).addScaledVector(el,d);qh.subVectors(t,f);const E=el.dot(qh),A=tl.dot(qh);if(A>=0&&E<=A)return i.copy(f);const N=E*g-m*A;if(N<=0&&g>=0&&A<=0)return p=g/(g-A),i.copy(s).addScaledVector(tl,p);const b=y*A-E*_;if(b<=0&&_-y>=0&&E-A>=0)return p_.subVectors(f,o),p=(_-y)/(_-y+(E-A)),i.copy(o).addScaledVector(p_,p);const M=1/(b+N+v);return d=N*M,p=v*M,i.copy(s).addScaledVector(el,d).addScaledVector(tl,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Lo{constructor(t=new le(1/0,1/0,1/0),i=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=f.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Hi):Hi.fromBufferAttribute(f,d),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lu.copy(s.boundingBox)),lu.applyMatrix4(t.matrixWorld),this.union(lu)}const o=t.children;for(let f=0,d=o.length;f<d;f++)this.expandByObject(o[f],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yo),ou.subVectors(this.max,yo),nl.subVectors(t.a,yo),il.subVectors(t.b,yo),al.subVectors(t.c,yo),hr.subVectors(il,nl),pr.subVectors(al,il),qr.subVectors(nl,al);let i=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-qr.z,qr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,qr.z,0,-qr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-qr.y,qr.x,0];return!Kh(i,nl,il,al,ou)||(i=[1,0,0,0,1,0,0,0,1],!Kh(i,nl,il,al,ou))?!1:(cu.crossVectors(hr,pr),i=[cu.x,cu.y,cu.z],Kh(i,nl,il,al,ou))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ra=[new le,new le,new le,new le,new le,new le,new le,new le],Hi=new le,lu=new Lo,nl=new le,il=new le,al=new le,hr=new le,pr=new le,qr=new le,yo=new le,ou=new le,cu=new le,Wr=new le;function Kh(l,t,i,s,o){for(let f=0,d=l.length-3;f<=d;f+=3){Wr.fromArray(l,f);const p=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),m=t.dot(Wr),g=i.dot(Wr),y=s.dot(Wr);if(Math.max(-Math.max(m,g,y),Math.min(m,g,y))>p)return!1}return!0}const _n=new le,uu=new Nt;let PE=0;class Ni extends rs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=e_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let o=0,f=this.itemSize;o<f;o++)this.array[t+o]=i.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uu.fromBufferAttribute(this,i),uu.applyMatrix3(t),this.setXY(i,uu.x,uu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(t),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=vo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ni(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=vo(i,this.array)),i}setX(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=vo(i,this.array)),i}setY(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=vo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=vo(i,this.array)),i}setW(t,i){return this.normalized&&(i=ni(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,o){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array),o=ni(o,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,i,s,o,f){return t*=this.itemSize,this.normalized&&(i=ni(i,this.array),s=ni(s,this.array),o=ni(o,this.array),f=ni(f,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=f,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==e_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ey extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Ty extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class an extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}const IE=new Lo,bo=new le,Qh=new le;class Oo{constructor(t=new le,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):IE.setFromPoints(t).getCenter(s);let o=0;for(let f=0,d=t.length;f<d;f++)o=Math.max(o,s.distanceToSquared(t[f]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),o=(s-this.radius)*.5;this.center.addScaledVector(bo,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(Qh)),this.expandByPoint(bo.copy(t.center).sub(Qh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let zE=0;const Ri=new ln,Jh=new Nn,rl=new le,mi=new Lo,Mo=new Lo,Cn=new le;class Dn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xE(t)?Ty:Ey)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new yt().getNormalMatrix(t);s.applyNormalMatrix(f),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ri.makeRotationFromQuaternion(t),this.applyMatrix4(Ri),this}rotateX(t){return Ri.makeRotationX(t),this.applyMatrix4(Ri),this}rotateY(t){return Ri.makeRotationY(t),this.applyMatrix4(Ri),this}rotateZ(t){return Ri.makeRotationZ(t),this.applyMatrix4(Ri),this}translate(t,i,s){return Ri.makeTranslation(t,i,s),this.applyMatrix4(Ri),this}scale(t,i,s){return Ri.makeScale(t,i,s),this.applyMatrix4(Ri),this}lookAt(t){return Jh.lookAt(t),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rl).negate(),this.translate(rl.x,rl.y,rl.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let o=0,f=t.length;o<f;o++){const d=t[o];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new an(s,3))}else{const s=Math.min(t.length,i.count);for(let o=0;o<s;o++){const f=t[o];i.setXYZ(o,f.x,f.y,f.z||0)}t.length>i.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,o=i.length;s<o;s++){const f=i[s];mi.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(t){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),i)for(let f=0,d=i.length;f<d;f++){const p=i[f];Mo.setFromBufferAttribute(p),this.morphTargetsRelative?(Cn.addVectors(mi.min,Mo.min),mi.expandByPoint(Cn),Cn.addVectors(mi.max,Mo.max),mi.expandByPoint(Cn)):(mi.expandByPoint(Mo.min),mi.expandByPoint(Mo.max))}mi.getCenter(s);let o=0;for(let f=0,d=t.count;f<d;f++)Cn.fromBufferAttribute(t,f),o=Math.max(o,s.distanceToSquared(Cn));if(i)for(let f=0,d=i.length;f<d;f++){const p=i[f],m=this.morphTargetsRelative;for(let g=0,y=p.count;g<y;g++)Cn.fromBufferAttribute(p,g),m&&(rl.fromBufferAttribute(t,g),Cn.add(rl)),o=Math.max(o,s.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,o=i.normal,f=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ni(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let S=0;S<s.count;S++)p[S]=new le,m[S]=new le;const g=new le,y=new le,_=new le,v=new Nt,E=new Nt,A=new Nt,N=new le,b=new le;function M(S,L,j){g.fromBufferAttribute(s,S),y.fromBufferAttribute(s,L),_.fromBufferAttribute(s,j),v.fromBufferAttribute(f,S),E.fromBufferAttribute(f,L),A.fromBufferAttribute(f,j),y.sub(g),_.sub(g),E.sub(v),A.sub(v);const k=1/(E.x*A.y-A.x*E.y);isFinite(k)&&(N.copy(y).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(k),b.copy(_).multiplyScalar(E.x).addScaledVector(y,-A.x).multiplyScalar(k),p[S].add(N),p[L].add(N),p[j].add(N),m[S].add(b),m[L].add(b),m[j].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let S=0,L=U.length;S<L;++S){const j=U[S],k=j.start,Y=j.count;for(let me=k,ve=k+Y;me<ve;me+=3)M(t.getX(me+0),t.getX(me+1),t.getX(me+2))}const B=new le,C=new le,O=new le,D=new le;function z(S){O.fromBufferAttribute(o,S),D.copy(O);const L=p[S];B.copy(L),B.sub(O.multiplyScalar(O.dot(L))).normalize(),C.crossVectors(D,L);const k=C.dot(m[S])<0?-1:1;d.setXYZW(S,B.x,B.y,B.z,k)}for(let S=0,L=U.length;S<L;++S){const j=U[S],k=j.start,Y=j.count;for(let me=k,ve=k+Y;me<ve;me+=3)z(t.getX(me+0)),z(t.getX(me+1)),z(t.getX(me+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const o=new le,f=new le,d=new le,p=new le,m=new le,g=new le,y=new le,_=new le;if(t)for(let v=0,E=t.count;v<E;v+=3){const A=t.getX(v+0),N=t.getX(v+1),b=t.getX(v+2);o.fromBufferAttribute(i,A),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,b),y.subVectors(d,f),_.subVectors(o,f),y.cross(_),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,b),p.add(y),m.add(y),g.add(y),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(N,m.x,m.y,m.z),s.setXYZ(b,g.x,g.y,g.z)}else for(let v=0,E=i.count;v<E;v+=3)o.fromBufferAttribute(i,v+0),f.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),y.subVectors(d,f),_.subVectors(o,f),y.cross(_),s.setXYZ(v+0,y.x,y.y,y.z),s.setXYZ(v+1,y.x,y.y,y.z),s.setXYZ(v+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Cn.fromBufferAttribute(t,i),Cn.normalize(),t.setXYZ(i,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(p,m){const g=p.array,y=p.itemSize,_=p.normalized,v=new g.constructor(m.length*y);let E=0,A=0;for(let N=0,b=m.length;N<b;N++){p.isInterleavedBufferAttribute?E=m[N]*p.data.stride+p.offset:E=m[N]*y;for(let M=0;M<y;M++)v[A++]=g[E++]}return new Ni(v,y,_)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dn,s=this.index.array,o=this.attributes;for(const p in o){const m=o[p],g=t(m,s);i.setAttribute(p,g)}const f=this.morphAttributes;for(const p in f){const m=[],g=f[p];for(let y=0,_=g.length;y<_;y++){const v=g[y],E=t(v,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const g=d[p];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const g in m)m[g]!==void 0&&(t[g]=m[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const g=s[m];t.data.attributes[m]=g.toJSON(t.data)}const o={};let f=!1;for(const m in this.morphAttributes){const g=this.morphAttributes[m],y=[];for(let _=0,v=g.length;_<v;_++){const E=g[_];y.push(E.toJSON(t.data))}y.length>0&&(o[m]=y,f=!0)}f&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const g in o){const y=o[g];this.setAttribute(g,y.clone(i))}const f=t.morphAttributes;for(const g in f){const y=[],_=f[g];for(let v=0,E=_.length;v<E;v++)y.push(_[v].clone(i));this.morphAttributes[g]=y}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let g=0,y=d.length;g<y;g++){const _=d[g];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let FE=0;class ss extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=ul,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=pp,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){pt(`Material: parameter '${i}' has value of undefined.`);continue}const o=this[i];if(o===void 0){pt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ul&&(s.blending=this.blending),this.side!==yr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==hp&&(s.blendSrc=this.blendSrc),this.blendDst!==pp&&(s.blendDst=this.blendDst),this.blendEquation!==Qr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$v&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(f){const d=[];for(const p in f){const m=f[p];delete m.metadata,d.push(m)}return d}if(i){const f=o(t.textures),d=o(t.images);f.length>0&&(s.textures=f),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Nt().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const o=i.length;s=new Array(o);for(let f=0;f!==o;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ca=new le,$h=new le,fu=new le,mr=new le,ep=new le,du=new le,tp=new le;class xm{constructor(t=new le,i=new le(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,o){$h.copy(t).add(i).multiplyScalar(.5),fu.copy(i).sub(t).normalize(),mr.copy(this.origin).sub($h);const f=t.distanceTo(i)*.5,d=-this.direction.dot(fu),p=mr.dot(this.direction),m=-mr.dot(fu),g=mr.lengthSq(),y=Math.abs(1-d*d);let _,v,E,A;if(y>0)if(_=d*m-p,v=d*p-m,A=f*y,_>=0)if(v>=-A)if(v<=A){const N=1/y;_*=N,v*=N,E=_*(_+d*v+2*p)+v*(d*_+v+2*m)+g}else v=f,_=Math.max(0,-(d*v+p)),E=-_*_+v*(v+2*m)+g;else v=-f,_=Math.max(0,-(d*v+p)),E=-_*_+v*(v+2*m)+g;else v<=-A?(_=Math.max(0,-(-d*f+p)),v=_>0?-f:Math.min(Math.max(-f,-m),f),E=-_*_+v*(v+2*m)+g):v<=A?(_=0,v=Math.min(Math.max(-f,-m),f),E=v*(v+2*m)+g):(_=Math.max(0,-(d*f+p)),v=_>0?f:Math.min(Math.max(-f,-m),f),E=-_*_+v*(v+2*m)+g);else v=d>0?-f:f,_=Math.max(0,-(d*v+p)),E=-_*_+v*(v+2*m)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy($h).addScaledVector(fu,v),E}intersectSphere(t,i){Ca.subVectors(t.center,this.origin);const s=Ca.dot(this.direction),o=Ca.dot(Ca)-s*s,f=t.radius*t.radius;if(o>f)return null;const d=Math.sqrt(f-o),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,o,f,d,p,m;const g=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,v=this.origin;return g>=0?(s=(t.min.x-v.x)*g,o=(t.max.x-v.x)*g):(s=(t.max.x-v.x)*g,o=(t.min.x-v.x)*g),y>=0?(f=(t.min.y-v.y)*y,d=(t.max.y-v.y)*y):(f=(t.max.y-v.y)*y,d=(t.min.y-v.y)*y),s>d||f>o||((f>s||isNaN(s))&&(s=f),(d<o||isNaN(o))&&(o=d),_>=0?(p=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(p=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||p>o)||((p>s||s!==s)&&(s=p),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,s,o,f){ep.subVectors(i,t),du.subVectors(s,t),tp.crossVectors(ep,du);let d=this.direction.dot(tp),p;if(d>0){if(o)return null;p=1}else if(d<0)p=-1,d=-d;else return null;mr.subVectors(this.origin,t);const m=p*this.direction.dot(du.crossVectors(mr,du));if(m<0)return null;const g=p*this.direction.dot(ep.cross(mr));if(g<0||m+g>d)return null;const y=-p*mr.dot(tp);return y<0?null:this.at(y/d,f)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wn extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.combine=iy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const m_=new ln,Yr=new xm,hu=new Oo,g_=new le,pu=new le,mu=new le,gu=new le,np=new le,xu=new le,x_=new le,vu=new le;class Wt extends Nn{constructor(t=new Dn,i=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=o.length;f<d;f++){const p=o[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}getVertexPosition(t,i){const s=this.geometry,o=s.attributes.position,f=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(o,t);const p=this.morphTargetInfluences;if(f&&p){xu.set(0,0,0);for(let m=0,g=f.length;m<g;m++){const y=p[m],_=f[m];y!==0&&(np.fromBufferAttribute(_,t),d?xu.addScaledVector(np,y):xu.addScaledVector(np.sub(i),y))}i.add(xu)}return i}raycast(t,i){const s=this.geometry,o=this.material,f=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hu.copy(s.boundingSphere),hu.applyMatrix4(f),Yr.copy(t.ray).recast(t.near),!(hu.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(hu,g_)===null||Yr.origin.distanceToSquared(g_)>(t.far-t.near)**2))&&(m_.copy(f).invert(),Yr.copy(t.ray).applyMatrix4(m_),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Yr)))}_computeIntersections(t,i,s){let o;const f=this.geometry,d=this.material,p=f.index,m=f.attributes.position,g=f.attributes.uv,y=f.attributes.uv1,_=f.attributes.normal,v=f.groups,E=f.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,N=v.length;A<N;A++){const b=v[A],M=d[b.materialIndex],U=Math.max(b.start,E.start),B=Math.min(p.count,Math.min(b.start+b.count,E.start+E.count));for(let C=U,O=B;C<O;C+=3){const D=p.getX(C),z=p.getX(C+1),S=p.getX(C+2);o=_u(this,M,t,s,g,y,_,D,z,S),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=b.materialIndex,i.push(o))}}else{const A=Math.max(0,E.start),N=Math.min(p.count,E.start+E.count);for(let b=A,M=N;b<M;b+=3){const U=p.getX(b),B=p.getX(b+1),C=p.getX(b+2);o=_u(this,d,t,s,g,y,_,U,B,C),o&&(o.faceIndex=Math.floor(b/3),i.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,N=v.length;A<N;A++){const b=v[A],M=d[b.materialIndex],U=Math.max(b.start,E.start),B=Math.min(m.count,Math.min(b.start+b.count,E.start+E.count));for(let C=U,O=B;C<O;C+=3){const D=C,z=C+1,S=C+2;o=_u(this,M,t,s,g,y,_,D,z,S),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=b.materialIndex,i.push(o))}}else{const A=Math.max(0,E.start),N=Math.min(m.count,E.start+E.count);for(let b=A,M=N;b<M;b+=3){const U=b,B=b+1,C=b+2;o=_u(this,d,t,s,g,y,_,U,B,C),o&&(o.faceIndex=Math.floor(b/3),i.push(o))}}}}function BE(l,t,i,s,o,f,d,p){let m;if(t.side===ai?m=s.intersectTriangle(d,f,o,!0,p):m=s.intersectTriangle(o,f,d,t.side===yr,p),m===null)return null;vu.copy(p),vu.applyMatrix4(l.matrixWorld);const g=i.ray.origin.distanceTo(vu);return g<i.near||g>i.far?null:{distance:g,point:vu.clone(),object:l}}function _u(l,t,i,s,o,f,d,p,m,g){l.getVertexPosition(p,pu),l.getVertexPosition(m,mu),l.getVertexPosition(g,gu);const y=BE(l,t,i,s,pu,mu,gu,x_);if(y){const _=new le;Gi.getBarycoord(x_,pu,mu,gu,_),o&&(y.uv=Gi.getInterpolatedAttribute(o,p,m,g,_,new Nt)),f&&(y.uv1=Gi.getInterpolatedAttribute(f,p,m,g,_,new Nt)),d&&(y.normal=Gi.getInterpolatedAttribute(d,p,m,g,_,new le),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const v={a:p,b:m,c:g,normal:new le,materialIndex:0};Gi.getNormal(pu,mu,gu,v.normal),y.face=v,y.barycoord=_}return y}class HE extends Zn{constructor(t=null,i=1,s=1,o,f,d,p,m,g=Fn,y=Fn,_,v){super(null,d,p,m,g,y,o,f,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ip=new le,GE=new le,VE=new yt;class Kr{constructor(t=new le(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,o){return this.normal.set(t,i,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const o=ip.subVectors(s,i).cross(GE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const o=t.delta(ip),f=this.normal.dot(o);if(f===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/f;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(o,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||VE.getNormalMatrix(t),o=this.coplanarPoint(ip).applyMatrix4(t),f=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(f),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Oo,jE=new Nt(.5,.5),yu=new le;class vm{constructor(t=new Kr,i=new Kr,s=new Kr,o=new Kr,f=new Kr,d=new Kr){this.planes=[t,i,s,o,f,d]}set(t,i,s,o,f,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(o),p[4].copy(f),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=sa,s=!1){const o=this.planes,f=t.elements,d=f[0],p=f[1],m=f[2],g=f[3],y=f[4],_=f[5],v=f[6],E=f[7],A=f[8],N=f[9],b=f[10],M=f[11],U=f[12],B=f[13],C=f[14],O=f[15];if(o[0].setComponents(g-d,E-y,M-A,O-U).normalize(),o[1].setComponents(g+d,E+y,M+A,O+U).normalize(),o[2].setComponents(g+p,E+_,M+N,O+B).normalize(),o[3].setComponents(g-p,E-_,M-N,O-B).normalize(),s)o[4].setComponents(m,v,b,C).normalize(),o[5].setComponents(g-m,E-v,M-b,O-C).normalize();else if(o[4].setComponents(g-m,E-v,M-b,O-C).normalize(),i===sa)o[5].setComponents(g+m,E+v,M+b,O+C).normalize();else if(i===No)o[5].setComponents(m,v,b,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(t){Zr.center.set(0,0,0);const i=jE.distanceTo(t.center);return Zr.radius=.7071067811865476+i,Zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(t){const i=this.planes,s=t.center,o=-t.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const o=i[s];if(yu.x=o.normal.x>0?t.max.x:t.min.x,yu.y=o.normal.y>0?t.max.y:t.min.y,yu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(yu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ay extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ku=new le,Xu=new le,v_=new ln,So=new xm,bu=new Oo,ap=new le,__=new le;class kE extends Nn{constructor(t=new Dn,i=new Ay){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let o=1,f=i.count;o<f;o++)ku.fromBufferAttribute(i,o-1),Xu.fromBufferAttribute(i,o),s[o]=s[o-1],s[o]+=ku.distanceTo(Xu);t.setAttribute("lineDistance",new an(s,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,o=this.matrixWorld,f=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bu.copy(s.boundingSphere),bu.applyMatrix4(o),bu.radius+=f,t.ray.intersectsSphere(bu)===!1)return;v_.copy(o).invert(),So.copy(t.ray).applyMatrix4(v_);const p=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,g=this.isLineSegments?2:1,y=s.index,v=s.attributes.position;if(y!==null){const E=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let N=E,b=A-1;N<b;N+=g){const M=y.getX(N),U=y.getX(N+1),B=Mu(this,t,So,m,M,U,N);B&&i.push(B)}if(this.isLineLoop){const N=y.getX(A-1),b=y.getX(E),M=Mu(this,t,So,m,N,b,A-1);M&&i.push(M)}}else{const E=Math.max(0,d.start),A=Math.min(v.count,d.start+d.count);for(let N=E,b=A-1;N<b;N+=g){const M=Mu(this,t,So,m,N,N+1,N);M&&i.push(M)}if(this.isLineLoop){const N=Mu(this,t,So,m,A-1,E,A-1);N&&i.push(N)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=o.length;f<d;f++){const p=o[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}}function Mu(l,t,i,s,o,f,d){const p=l.geometry.attributes.position;if(ku.fromBufferAttribute(p,o),Xu.fromBufferAttribute(p,f),i.distanceSqToSegment(ku,Xu,ap,__)>s)return;ap.applyMatrix4(l.matrixWorld);const g=t.ray.origin.distanceTo(ap);if(!(g<t.near||g>t.far))return{distance:g,point:__.clone().applyMatrix4(l.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:l}}const y_=new le,b_=new le;class XE extends kE{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let o=0,f=i.count;o<f;o+=2)y_.fromBufferAttribute(i,o),b_.fromBufferAttribute(i,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+y_.distanceTo(b_);t.setAttribute("lineDistance",new an(s,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _m extends ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const M_=new ln,nm=new xm,Su=new Oo,Eu=new le;class wy extends Nn{constructor(t=new Dn,i=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,o=this.matrixWorld,f=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Su.copy(s.boundingSphere),Su.applyMatrix4(o),Su.radius+=f,t.ray.intersectsSphere(Su)===!1)return;M_.copy(o).invert(),nm.copy(t.ray).applyMatrix4(M_);const p=f/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,g=s.index,_=s.attributes.position;if(g!==null){const v=Math.max(0,d.start),E=Math.min(g.count,d.start+d.count);for(let A=v,N=E;A<N;A++){const b=g.getX(A);Eu.fromBufferAttribute(_,b),S_(Eu,b,m,o,t,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let A=v,N=E;A<N;A++)Eu.fromBufferAttribute(_,A),S_(Eu,A,m,o,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const o=i[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,d=o.length;f<d;f++){const p=o[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=f}}}}}function S_(l,t,i,s,o,f,d){const p=nm.distanceSqToPoint(l);if(p<i){const m=new le;nm.closestPointToPoint(l,m),m.applyMatrix4(s);const g=o.ray.origin.distanceTo(m);if(g<o.near||g>o.far)return;f.push({distance:g,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class Ry extends Zn{constructor(t=[],i=is,s,o,f,d,p,m,g,y){super(t,i,s,o,f,d,p,m,g,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gl extends Zn{constructor(t,i,s=ca,o,f,d,p=Fn,m=Fn,g,y=Pa,_=1){if(y!==Pa&&y!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,o,f,d,p,m,y,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qE extends gl{constructor(t,i=ca,s=is,o,f,d=Fn,p=Fn,m,g=Pa){const y={width:t,height:t,depth:1},_=[y,y,y,y,y,y];super(t,t,i,s,o,f,d,p,m,g),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Cy extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Mr extends Dn{constructor(t=1,i=1,s=1,o=1,f=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:o,heightSegments:f,depthSegments:d};const p=this;o=Math.floor(o),f=Math.floor(f),d=Math.floor(d);const m=[],g=[],y=[],_=[];let v=0,E=0;A("z","y","x",-1,-1,s,i,t,d,f,0),A("z","y","x",1,-1,s,i,-t,d,f,1),A("x","z","y",1,1,t,s,i,o,d,2),A("x","z","y",1,-1,t,s,-i,o,d,3),A("x","y","z",1,-1,t,i,s,o,f,4),A("x","y","z",-1,-1,t,i,-s,o,f,5),this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(_,2));function A(N,b,M,U,B,C,O,D,z,S,L){const j=C/z,k=O/S,Y=C/2,me=O/2,ve=D/2,te=z+1,W=S+1;let Z=0,J=0;const Me=new le;for(let H=0;H<W;H++){const F=H*k-me;for(let _e=0;_e<te;_e++){const Ne=_e*j-Y;Me[N]=Ne*U,Me[b]=F*B,Me[M]=ve,g.push(Me.x,Me.y,Me.z),Me[N]=0,Me[b]=0,Me[M]=D>0?1:-1,y.push(Me.x,Me.y,Me.z),_.push(_e/z),_.push(1-H/S),Z+=1}}for(let H=0;H<S;H++)for(let F=0;F<z;F++){const _e=v+F+te*H,Ne=v+F+te*(H+1),I=v+(F+1)+te*(H+1),ae=v+(F+1)+te*H;m.push(_e,Ne,ae),m.push(Ne,I,ae),J+=6}p.addGroup(E,J,L),E+=J,v+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jr extends Dn{constructor(t=1,i=1,s=1,o=32,f=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:o,heightSegments:f,openEnded:d,thetaStart:p,thetaLength:m};const g=this;o=Math.floor(o),f=Math.floor(f);const y=[],_=[],v=[],E=[];let A=0;const N=[],b=s/2;let M=0;U(),d===!1&&(t>0&&B(!0),i>0&&B(!1)),this.setIndex(y),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(E,2));function U(){const C=new le,O=new le;let D=0;const z=(i-t)/s;for(let S=0;S<=f;S++){const L=[],j=S/f,k=j*(i-t)+t;for(let Y=0;Y<=o;Y++){const me=Y/o,ve=me*m+p,te=Math.sin(ve),W=Math.cos(ve);O.x=k*te,O.y=-j*s+b,O.z=k*W,_.push(O.x,O.y,O.z),C.set(te,z,W).normalize(),v.push(C.x,C.y,C.z),E.push(me,1-j),L.push(A++)}N.push(L)}for(let S=0;S<o;S++)for(let L=0;L<f;L++){const j=N[L][S],k=N[L+1][S],Y=N[L+1][S+1],me=N[L][S+1];(t>0||L!==0)&&(y.push(j,k,me),D+=3),(i>0||L!==f-1)&&(y.push(k,Y,me),D+=3)}g.addGroup(M,D,0),M+=D}function B(C){const O=A,D=new Nt,z=new le;let S=0;const L=C===!0?t:i,j=C===!0?1:-1;for(let Y=1;Y<=o;Y++)_.push(0,b*j,0),v.push(0,j,0),E.push(.5,.5),A++;const k=A;for(let Y=0;Y<=o;Y++){const ve=Y/o*m+p,te=Math.cos(ve),W=Math.sin(ve);z.x=L*W,z.y=b*j,z.z=L*te,_.push(z.x,z.y,z.z),v.push(0,j,0),D.x=te*.5+.5,D.y=W*.5*j+.5,E.push(D.x,D.y),A++}for(let Y=0;Y<o;Y++){const me=O+Y,ve=k+Y;C===!0?y.push(ve,ve+1,me):y.push(ve+1,ve,me),S+=3}g.addGroup(M,S,C===!0?1:2),M+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yu extends Dn{constructor(t=[],i=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:o};const f=[],d=[];p(o),g(s),y(),this.setAttribute("position",new an(f,3)),this.setAttribute("normal",new an(f.slice(),3)),this.setAttribute("uv",new an(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function p(U){const B=new le,C=new le,O=new le;for(let D=0;D<i.length;D+=3)E(i[D+0],B),E(i[D+1],C),E(i[D+2],O),m(B,C,O,U)}function m(U,B,C,O){const D=O+1,z=[];for(let S=0;S<=D;S++){z[S]=[];const L=U.clone().lerp(C,S/D),j=B.clone().lerp(C,S/D),k=D-S;for(let Y=0;Y<=k;Y++)Y===0&&S===D?z[S][Y]=L:z[S][Y]=L.clone().lerp(j,Y/k)}for(let S=0;S<D;S++)for(let L=0;L<2*(D-S)-1;L++){const j=Math.floor(L/2);L%2===0?(v(z[S][j+1]),v(z[S+1][j]),v(z[S][j])):(v(z[S][j+1]),v(z[S+1][j+1]),v(z[S+1][j]))}}function g(U){const B=new le;for(let C=0;C<f.length;C+=3)B.x=f[C+0],B.y=f[C+1],B.z=f[C+2],B.normalize().multiplyScalar(U),f[C+0]=B.x,f[C+1]=B.y,f[C+2]=B.z}function y(){const U=new le;for(let B=0;B<f.length;B+=3){U.x=f[B+0],U.y=f[B+1],U.z=f[B+2];const C=b(U)/2/Math.PI+.5,O=M(U)/Math.PI+.5;d.push(C,1-O)}A(),_()}function _(){for(let U=0;U<d.length;U+=6){const B=d[U+0],C=d[U+2],O=d[U+4],D=Math.max(B,C,O),z=Math.min(B,C,O);D>.9&&z<.1&&(B<.2&&(d[U+0]+=1),C<.2&&(d[U+2]+=1),O<.2&&(d[U+4]+=1))}}function v(U){f.push(U.x,U.y,U.z)}function E(U,B){const C=U*3;B.x=t[C+0],B.y=t[C+1],B.z=t[C+2]}function A(){const U=new le,B=new le,C=new le,O=new le,D=new Nt,z=new Nt,S=new Nt;for(let L=0,j=0;L<f.length;L+=9,j+=6){U.set(f[L+0],f[L+1],f[L+2]),B.set(f[L+3],f[L+4],f[L+5]),C.set(f[L+6],f[L+7],f[L+8]),D.set(d[j+0],d[j+1]),z.set(d[j+2],d[j+3]),S.set(d[j+4],d[j+5]),O.copy(U).add(B).add(C).divideScalar(3);const k=b(O);N(D,j+0,U,k),N(z,j+2,B,k),N(S,j+4,C,k)}}function N(U,B,C,O){O<0&&U.x===1&&(d[B]=U.x-1),C.x===0&&C.z===0&&(d[B]=O/2/Math.PI+.5)}function b(U){return Math.atan2(U.z,-U.x)}function M(U){return Math.atan2(-U.y,Math.sqrt(U.x*U.x+U.z*U.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.vertices,t.indices,t.radius,t.detail)}}class Do extends Yu{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,o=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],f=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,f,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Do(t.radius,t.detail)}}class ym extends Yu{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new ym(t.radius,t.detail)}}class Zu extends Dn{constructor(t=1,i=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:o};const f=t/2,d=i/2,p=Math.floor(s),m=Math.floor(o),g=p+1,y=m+1,_=t/p,v=i/m,E=[],A=[],N=[],b=[];for(let M=0;M<y;M++){const U=M*v-d;for(let B=0;B<g;B++){const C=B*_-f;A.push(C,-U,0),N.push(0,0,1),b.push(B/p),b.push(1-M/m)}}for(let M=0;M<m;M++)for(let U=0;U<p;U++){const B=U+g*M,C=U+g*(M+1),O=U+1+g*(M+1),D=U+1+g*M;E.push(B,C,D),E.push(C,O,D)}this.setIndex(E),this.setAttribute("position",new an(A,3)),this.setAttribute("normal",new an(N,3)),this.setAttribute("uv",new an(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zu(t.width,t.height,t.widthSegments,t.heightSegments)}}class bm extends Dn{constructor(t=1,i=32,s=16,o=0,f=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:o,phiLength:f,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let g=0;const y=[],_=new le,v=new le,E=[],A=[],N=[],b=[];for(let M=0;M<=s;M++){const U=[],B=M/s,C=d+B*p,O=t*Math.cos(C),D=Math.sqrt(t*t-O*O);let z=0;M===0&&d===0?z=.5/i:M===s&&m===Math.PI&&(z=-.5/i);for(let S=0;S<=i;S++){const L=S/i,j=o+L*f;_.x=-D*Math.cos(j),_.y=O,_.z=D*Math.sin(j),A.push(_.x,_.y,_.z),v.copy(_).normalize(),N.push(v.x,v.y,v.z),b.push(L+z,1-B),U.push(g++)}y.push(U)}for(let M=0;M<s;M++)for(let U=0;U<i;U++){const B=y[M][U+1],C=y[M][U],O=y[M+1][U],D=y[M+1][U+1];(M!==0||d>0)&&E.push(B,C,D),(M!==s-1||m<Math.PI)&&E.push(C,O,D)}this.setIndex(E),this.setAttribute("position",new an(A,3)),this.setAttribute("normal",new an(N,3)),this.setAttribute("uv",new an(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ns extends Dn{constructor(t=1,i=.4,s=12,o=48,f=Math.PI*2,d=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:o,arc:f,thetaStart:d,thetaLength:p},s=Math.floor(s),o=Math.floor(o);const m=[],g=[],y=[],_=[],v=new le,E=new le,A=new le;for(let N=0;N<=s;N++){const b=d+N/s*p;for(let M=0;M<=o;M++){const U=M/o*f;E.x=(t+i*Math.cos(b))*Math.cos(U),E.y=(t+i*Math.cos(b))*Math.sin(U),E.z=i*Math.sin(b),g.push(E.x,E.y,E.z),v.x=t*Math.cos(U),v.y=t*Math.sin(U),A.subVectors(E,v).normalize(),y.push(A.x,A.y,A.z),_.push(M/o),_.push(N/s)}}for(let N=1;N<=s;N++)for(let b=1;b<=o;b++){const M=(o+1)*N+b-1,U=(o+1)*(N-1)+b-1,B=(o+1)*(N-1)+b,C=(o+1)*N+b;m.push(M,U,C),m.push(U,B,C)}this.setIndex(m),this.setAttribute("position",new an(g,3)),this.setAttribute("normal",new an(y,3)),this.setAttribute("uv",new an(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function xl(l){const t={};for(const i in l){t[i]={};for(const s in l[i]){const o=l[i][s];if(E_(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=o.clone();else if(Array.isArray(o))if(E_(o[0])){const f=[];for(let d=0,p=o.length;d<p;d++)f[d]=o[d].clone();t[i][s]=f}else t[i][s]=o.slice();else t[i][s]=o}}return t}function Yn(l){const t={};for(let i=0;i<l.length;i++){const s=xl(l[i]);for(const o in s)t[o]=s[o]}return t}function E_(l){return l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)}function WE(l){const t=[];for(let i=0;i<l.length;i++)t.push(l[i].clone());return t}function Ny(l){const t=l.getRenderTarget();return t===null?l.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:It.workingColorSpace}const YE={clone:xl,merge:Yn};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=KE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xl(t.uniforms),this.uniformsGroups=WE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?i.uniforms[o]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[o]={type:"m4",value:d.toArray()}:i.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const o=t.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=i[o.value]||null;break;case"c":this.uniforms[s].value=new Ct().setHex(o.value);break;case"v2":this.uniforms[s].value=new Nt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new le().fromArray(o.value);break;case"v4":this.uniforms[s].value=new cn().fromArray(o.value);break;case"m3":this.uniforms[s].value=new yt().fromArray(o.value);break;case"m4":this.uniforms[s].value=new ln().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class QE extends ua{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tu extends ss{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=em,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new br,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class JE extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $E extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mm extends Nn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const rp=new ln,T_=new le,A_=new le;class Dy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vm,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;T_.setFromMatrixPosition(t.matrixWorld),i.position.copy(T_),A_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),rp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===No||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Au=new le,wu=new vl,na=new le;class Uy extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Au,wu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,wu,na.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Au,wu,na),na.x===1&&na.y===1&&na.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,wu,na.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gr=new le,w_=new Nt,R_=new Nt;class ii extends Uy{constructor(t=50,i=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=tm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tm*2*Math.atan(Math.tan(Oh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-t/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gr.x,gr.y).multiplyScalar(-t/gr.z)}getViewSize(t,i){return this.getViewBounds(t,w_,R_),i.subVectors(R_,w_)}setViewOffset(t,i,s,o,f,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=o,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Oh*.5*this.fov)/this.zoom,s=2*i,o=this.aspect*s,f=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,g=d.fullHeight;f+=d.offsetX*o/m,i-=d.offsetY*s/g,o*=d.width/m,s*=d.height/g}const p=this.filmOffset;p!==0&&(f+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+o,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class eT extends Dy{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class tT extends Mm{constructor(t,i,s=0,o=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new eT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Sm extends Uy{constructor(t=-1,i=1,s=1,o=-1,f=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=o,this.near=f,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,o,f,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=o,this.view.width=f,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let f=s-t,d=s+t,p=o+i,m=o-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,d=f+g*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(f,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nT extends Dy{constructor(){super(new Sm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iT extends Mm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new nT}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class aT extends Mm{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const sl=-90,ll=1;class rT extends Nn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(sl,ll,t,i);o.layers=this.layers,this.add(o);const f=new ii(sl,ll,t,i);f.layers=this.layers,this.add(f);const d=new ii(sl,ll,t,i);d.layers=this.layers,this.add(d);const p=new ii(sl,ll,t,i);p.layers=this.layers,this.add(p);const m=new ii(sl,ll,t,i);m.layers=this.layers,this.add(m);const g=new ii(sl,ll,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,o,f,d,p,m]=i;for(const g of i)this.remove(g);if(t===sa)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===No)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[f,d,p,m,g,y]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const N=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let b=!1;t.isWebGLRenderer===!0?b=t.state.buffers.depth.getReversed():b=t.reversedDepthBuffer,t.setRenderTarget(s,0,o),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,1,o),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,o),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,o),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,o),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),s.texture.generateMipmaps=N,t.setRenderTarget(s,5,o),b&&t.autoClear===!1&&t.clearDepth(),t.render(i,y),t.setRenderTarget(_,v,E),t.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class sT extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ly{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const Cm=class Cm{constructor(t,i,s,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,o){const f=this.elements;return f[0]=t,f[2]=i,f[1]=s,f[3]=o,this}};Cm.prototype.isMatrix2=!0;let C_=Cm;class lT extends XE{constructor(t=10,i=10,s=4473924,o=8947848){s=new Ct(s),o=new Ct(o);const f=i/2,d=t/i,p=t/2,m=[],g=[];for(let v=0,E=0,A=-p;v<=i;v++,A+=d){m.push(-p,0,A,p,0,A),m.push(A,0,-p,A,0,p);const N=v===f?s:o;N.toArray(g,E),E+=3,N.toArray(g,E),E+=3,N.toArray(g,E),E+=3,N.toArray(g,E),E+=3}const y=new Dn;y.setAttribute("position",new an(m,3)),y.setAttribute("color",new an(g,3));const _=new Ay({vertexColors:!0,toneMapped:!1});super(y,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function N_(l,t,i,s){const o=oT(s);switch(i){case gy:return l*t;case vy:return l*t/o.components*o.byteLength;case fm:return l*t/o.components*o.byteLength;case as:return l*t*2/o.components*o.byteLength;case dm:return l*t*2/o.components*o.byteLength;case xy:return l*t*3/o.components*o.byteLength;case Vi:return l*t*4/o.components*o.byteLength;case hm:return l*t*4/o.components*o.byteLength;case Du:case Uu:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Lu:case Ou:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Tp:case wp:return Math.max(l,16)*Math.max(t,8)/4;case Ep:case Ap:return Math.max(l,8)*Math.max(t,8)/2;case Rp:case Cp:case Dp:case Up:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*8;case Np:case Bu:case Lp:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Op:return Math.floor((l+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((l+4)/5)*Math.floor((t+3)/4)*16;case Ip:return Math.floor((l+4)/5)*Math.floor((t+4)/5)*16;case zp:return Math.floor((l+5)/6)*Math.floor((t+4)/5)*16;case Fp:return Math.floor((l+5)/6)*Math.floor((t+5)/6)*16;case Bp:return Math.floor((l+7)/8)*Math.floor((t+4)/5)*16;case Hp:return Math.floor((l+7)/8)*Math.floor((t+5)/6)*16;case Gp:return Math.floor((l+7)/8)*Math.floor((t+7)/8)*16;case Vp:return Math.floor((l+9)/10)*Math.floor((t+4)/5)*16;case jp:return Math.floor((l+9)/10)*Math.floor((t+5)/6)*16;case kp:return Math.floor((l+9)/10)*Math.floor((t+7)/8)*16;case Xp:return Math.floor((l+9)/10)*Math.floor((t+9)/10)*16;case qp:return Math.floor((l+11)/12)*Math.floor((t+9)/10)*16;case Wp:return Math.floor((l+11)/12)*Math.floor((t+11)/12)*16;case Yp:case Zp:case Kp:return Math.ceil(l/4)*Math.ceil(t/4)*16;case Qp:case Jp:return Math.ceil(l/4)*Math.ceil(t/4)*8;case Hu:case $p:return Math.ceil(l/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oT(l){switch(l){case gi:case dy:return{byteLength:1,components:1};case Ro:case hy:case Oa:return{byteLength:2,components:1};case cm:case um:return{byteLength:2,components:4};case ca:case om:case ra:return{byteLength:4,components:1};case py:case my:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${l}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lm}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Oy(){let l=null,t=!1,i=null,s=null;function o(f,d){i(f,d),s=l.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&l!==null&&(s=l.requestAnimationFrame(o),t=!0)},stop:function(){l!==null&&l.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(f){i=f},setContext:function(f){l=f}}}function cT(l){const t=new WeakMap;function i(p,m){const g=p.array,y=p.usage,_=g.byteLength,v=l.createBuffer();l.bindBuffer(m,v),l.bufferData(m,g,y),p.onUploadCallback();let E;if(g instanceof Float32Array)E=l.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)E=l.HALF_FLOAT;else if(g instanceof Uint16Array)p.isFloat16BufferAttribute?E=l.HALF_FLOAT:E=l.UNSIGNED_SHORT;else if(g instanceof Int16Array)E=l.SHORT;else if(g instanceof Uint32Array)E=l.UNSIGNED_INT;else if(g instanceof Int32Array)E=l.INT;else if(g instanceof Int8Array)E=l.BYTE;else if(g instanceof Uint8Array)E=l.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)E=l.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:v,type:E,bytesPerElement:g.BYTES_PER_ELEMENT,version:p.version,size:_}}function s(p,m,g){const y=m.array,_=m.updateRanges;if(l.bindBuffer(g,p),_.length===0)l.bufferSubData(g,0,y);else{_.sort((E,A)=>E.start-A.start);let v=0;for(let E=1;E<_.length;E++){const A=_[v],N=_[E];N.start<=A.start+A.count+1?A.count=Math.max(A.count,N.start+N.count-A.start):(++v,_[v]=N)}_.length=v+1;for(let E=0,A=_.length;E<A;E++){const N=_[E];l.bufferSubData(g,N.start*y.BYTES_PER_ELEMENT,y,N.start,N.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(l.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=t.get(p);(!y||y.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const g=t.get(p);if(g===void 0)t.set(p,i(p,m));else if(g.version<p.version){if(g.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,p,m),g.version=p.version}}return{get:o,remove:f,update:d}}var uT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ST=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ET=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,LA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,OA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,HA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,WA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,P2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,j2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,At={alphahash_fragment:uT,alphahash_pars_fragment:fT,alphamap_fragment:dT,alphamap_pars_fragment:hT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:xT,batching_pars_vertex:vT,batching_vertex:_T,begin_vertex:yT,beginnormal_vertex:bT,bsdfs:MT,iridescence_fragment:ST,bumpmap_pars_fragment:ET,clipping_planes_fragment:TT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:wT,clipping_planes_vertex:RT,color_fragment:CT,color_pars_fragment:NT,color_pars_vertex:DT,color_vertex:UT,common:LT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:PT,displacementmap_pars_vertex:IT,displacementmap_vertex:zT,emissivemap_fragment:FT,emissivemap_pars_fragment:BT,colorspace_fragment:HT,colorspace_pars_fragment:GT,envmap_fragment:VT,envmap_common_pars_fragment:jT,envmap_pars_fragment:kT,envmap_pars_vertex:XT,envmap_physical_pars_fragment:nA,envmap_vertex:qT,fog_vertex:WT,fog_pars_vertex:YT,fog_fragment:ZT,fog_pars_fragment:KT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:JT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:eA,lights_pars_begin:tA,lights_toon_fragment:iA,lights_toon_pars_fragment:aA,lights_phong_fragment:rA,lights_phong_pars_fragment:sA,lights_physical_fragment:lA,lights_physical_pars_fragment:oA,lights_fragment_begin:cA,lights_fragment_maps:uA,lights_fragment_end:fA,lightprobes_pars_fragment:dA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:xA,map_pars_fragment:vA,map_particle_fragment:_A,map_particle_pars_fragment:yA,metalnessmap_fragment:bA,metalnessmap_pars_fragment:MA,morphinstance_vertex:SA,morphcolor_vertex:EA,morphnormal_vertex:TA,morphtarget_pars_vertex:AA,morphtarget_vertex:wA,normal_fragment_begin:RA,normal_fragment_maps:CA,normal_pars_fragment:NA,normal_pars_vertex:DA,normal_vertex:UA,normalmap_pars_fragment:LA,clearcoat_normal_fragment_begin:OA,clearcoat_normal_fragment_maps:PA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:zA,opaque_fragment:FA,packing:BA,premultiplied_alpha_fragment:HA,project_vertex:GA,dithering_fragment:VA,dithering_pars_fragment:jA,roughnessmap_fragment:kA,roughnessmap_pars_fragment:XA,shadowmap_pars_fragment:qA,shadowmap_pars_vertex:WA,shadowmap_vertex:YA,shadowmask_pars_fragment:ZA,skinbase_vertex:KA,skinning_pars_vertex:QA,skinning_vertex:JA,skinnormal_vertex:$A,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:a2,transmission_pars_fragment:r2,uv_pars_fragment:s2,uv_pars_vertex:l2,uv_vertex:o2,worldpos_vertex:c2,background_vert:u2,background_frag:f2,backgroundCube_vert:d2,backgroundCube_frag:h2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:x2,distance_vert:v2,distance_frag:_2,equirect_vert:y2,equirect_frag:b2,linedashed_vert:M2,linedashed_frag:S2,meshbasic_vert:E2,meshbasic_frag:T2,meshlambert_vert:A2,meshlambert_frag:w2,meshmatcap_vert:R2,meshmatcap_frag:C2,meshnormal_vert:N2,meshnormal_frag:D2,meshphong_vert:U2,meshphong_frag:L2,meshphysical_vert:O2,meshphysical_frag:P2,meshtoon_vert:I2,meshtoon_frag:z2,points_vert:F2,points_frag:B2,shadow_vert:H2,shadow_frag:G2,sprite_vert:V2,sprite_frag:j2},Ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},aa={basic:{uniforms:Yn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Yn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Yn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Yn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Yn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Yn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Yn([Ke.points,Ke.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Yn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Yn([Ke.common,Ke.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Yn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Yn([Ke.sprite,Ke.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:Yn([Ke.common,Ke.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:Yn([Ke.lights,Ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};aa.physical={uniforms:Yn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Ru={r:0,b:0,g:0},k2=new ln,Py=new yt;Py.set(-1,0,0,0,1,0,0,0,1);function X2(l,t,i,s,o,f){const d=new Ct(0);let p=o===!0?0:1,m,g,y=null,_=0,v=null;function E(U){let B=U.isScene===!0?U.background:null;if(B&&B.isTexture){const C=U.backgroundBlurriness>0;B=t.get(B,C)}return B}function A(U){let B=!1;const C=E(U);C===null?b(d,p):C&&C.isColor&&(b(C,1),B=!0);const O=l.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,f):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(l.autoClear||B)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil))}function N(U,B){const C=E(B);C&&(C.isCubeTexture||C.mapping===Wu)?(g===void 0&&(g=new Wt(new Mr(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:xl(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,D,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(k2.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.material.uniforms.backgroundRotation.value.premultiply(Py),g.material.toneMapped=It.getTransfer(C.colorSpace)!==Qt,(y!==C||_!==C.version||v!==l.toneMapping)&&(g.material.needsUpdate=!0,y=C,_=C.version,v=l.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Wt(new Zu(2,2),new ua({name:"BackgroundMaterial",uniforms:xl(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,m.material.toneMapped=It.getTransfer(C.colorSpace)!==Qt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||_!==C.version||v!==l.toneMapping)&&(m.material.needsUpdate=!0,y=C,_=C.version,v=l.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function b(U,B){U.getRGB(Ru,Ny(l)),i.buffers.color.setClear(Ru.r,Ru.g,Ru.b,B,f)}function M(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,B=1){d.set(U),p=B,b(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,b(d,p)},render:A,addToRenderList:N,dispose:M}}function q2(l,t){const i=l.getParameter(l.MAX_VERTEX_ATTRIBS),s={},o=v(null);let f=o,d=!1;function p(k,Y,me,ve,te){let W=!1;const Z=_(k,ve,me,Y);f!==Z&&(f=Z,g(f.object)),W=E(k,ve,me,te),W&&A(k,ve,me,te),te!==null&&t.update(te,l.ELEMENT_ARRAY_BUFFER),(W||d)&&(d=!1,C(k,Y,me,ve),te!==null&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,t.get(te).buffer))}function m(){return l.createVertexArray()}function g(k){return l.bindVertexArray(k)}function y(k){return l.deleteVertexArray(k)}function _(k,Y,me,ve){const te=ve.wireframe===!0;let W=s[Y.id];W===void 0&&(W={},s[Y.id]=W);const Z=k.isInstancedMesh===!0?k.id:0;let J=W[Z];J===void 0&&(J={},W[Z]=J);let Me=J[me.id];Me===void 0&&(Me={},J[me.id]=Me);let H=Me[te];return H===void 0&&(H=v(m()),Me[te]=H),H}function v(k){const Y=[],me=[],ve=[];for(let te=0;te<i;te++)Y[te]=0,me[te]=0,ve[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:me,attributeDivisors:ve,object:k,attributes:{},index:null}}function E(k,Y,me,ve){const te=f.attributes,W=Y.attributes;let Z=0;const J=me.getAttributes();for(const Me in J)if(J[Me].location>=0){const F=te[Me];let _e=W[Me];if(_e===void 0&&(Me==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),Me==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),F===void 0||F.attribute!==_e||_e&&F.data!==_e.data)return!0;Z++}return f.attributesNum!==Z||f.index!==ve}function A(k,Y,me,ve){const te={},W=Y.attributes;let Z=0;const J=me.getAttributes();for(const Me in J)if(J[Me].location>=0){let F=W[Me];F===void 0&&(Me==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),Me==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const _e={};_e.attribute=F,F&&F.data&&(_e.data=F.data),te[Me]=_e,Z++}f.attributes=te,f.attributesNum=Z,f.index=ve}function N(){const k=f.newAttributes;for(let Y=0,me=k.length;Y<me;Y++)k[Y]=0}function b(k){M(k,0)}function M(k,Y){const me=f.newAttributes,ve=f.enabledAttributes,te=f.attributeDivisors;me[k]=1,ve[k]===0&&(l.enableVertexAttribArray(k),ve[k]=1),te[k]!==Y&&(l.vertexAttribDivisor(k,Y),te[k]=Y)}function U(){const k=f.newAttributes,Y=f.enabledAttributes;for(let me=0,ve=Y.length;me<ve;me++)Y[me]!==k[me]&&(l.disableVertexAttribArray(me),Y[me]=0)}function B(k,Y,me,ve,te,W,Z){Z===!0?l.vertexAttribIPointer(k,Y,me,te,W):l.vertexAttribPointer(k,Y,me,ve,te,W)}function C(k,Y,me,ve){N();const te=ve.attributes,W=me.getAttributes(),Z=Y.defaultAttributeValues;for(const J in W){const Me=W[J];if(Me.location>=0){let H=te[J];if(H===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(H=k.instanceColor)),H!==void 0){const F=H.normalized,_e=H.itemSize,Ne=t.get(H);if(Ne===void 0)continue;const I=Ne.buffer,ae=Ne.type,X=Ne.bytesPerElement,V=ae===l.INT||ae===l.UNSIGNED_INT||H.gpuType===om;if(H.isInterleavedBufferAttribute){const ee=H.data,Se=ee.stride,we=H.offset;if(ee.isInstancedInterleavedBuffer){for(let ge=0;ge<Me.locationSize;ge++)M(Me.location+ge,ee.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<Me.locationSize;ge++)b(Me.location+ge);l.bindBuffer(l.ARRAY_BUFFER,I);for(let ge=0;ge<Me.locationSize;ge++)B(Me.location+ge,_e/Me.locationSize,ae,F,Se*X,(we+_e/Me.locationSize*ge)*X,V)}else{if(H.isInstancedBufferAttribute){for(let ee=0;ee<Me.locationSize;ee++)M(Me.location+ee,H.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ee=0;ee<Me.locationSize;ee++)b(Me.location+ee);l.bindBuffer(l.ARRAY_BUFFER,I);for(let ee=0;ee<Me.locationSize;ee++)B(Me.location+ee,_e/Me.locationSize,ae,F,_e*X,_e/Me.locationSize*ee*X,V)}}else if(Z!==void 0){const F=Z[J];if(F!==void 0)switch(F.length){case 2:l.vertexAttrib2fv(Me.location,F);break;case 3:l.vertexAttrib3fv(Me.location,F);break;case 4:l.vertexAttrib4fv(Me.location,F);break;default:l.vertexAttrib1fv(Me.location,F)}}}}U()}function O(){L();for(const k in s){const Y=s[k];for(const me in Y){const ve=Y[me];for(const te in ve){const W=ve[te];for(const Z in W)y(W[Z].object),delete W[Z];delete ve[te]}}delete s[k]}}function D(k){if(s[k.id]===void 0)return;const Y=s[k.id];for(const me in Y){const ve=Y[me];for(const te in ve){const W=ve[te];for(const Z in W)y(W[Z].object),delete W[Z];delete ve[te]}}delete s[k.id]}function z(k){for(const Y in s){const me=s[Y];for(const ve in me){const te=me[ve];if(te[k.id]===void 0)continue;const W=te[k.id];for(const Z in W)y(W[Z].object),delete W[Z];delete te[k.id]}}}function S(k){for(const Y in s){const me=s[Y],ve=k.isInstancedMesh===!0?k.id:0,te=me[ve];if(te!==void 0){for(const W in te){const Z=te[W];for(const J in Z)y(Z[J].object),delete Z[J];delete te[W]}delete me[ve],Object.keys(me).length===0&&delete s[Y]}}}function L(){j(),d=!0,f!==o&&(f=o,g(f.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:L,resetDefaultState:j,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:S,releaseStatesOfProgram:z,initAttributes:N,enableAttribute:b,disableUnusedAttributes:U}}function W2(l,t,i){let s;function o(m){s=m}function f(m,g){l.drawArrays(s,m,g),i.update(g,s,1)}function d(m,g,y){y!==0&&(l.drawArraysInstanced(s,m,g,y),i.update(g,s,y))}function p(m,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,y);let v=0;for(let E=0;E<y;E++)v+=g[E];i.update(v,s,1)}this.setMode=o,this.render=f,this.renderInstances=d,this.renderMultiDraw=p}function Y2(l,t,i,s){let o;function f(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");o=l.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(z){return!(z!==Vi&&s.convert(z)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const S=z===Oa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==gi&&s.convert(z)!==l.getParameter(l.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ra&&!S)}function m(z){if(z==="highp"){if(l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT).precision>0&&l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const y=m(g);y!==g&&(pt("WebGLRenderer:",g,"not supported, using",y,"instead."),g=y);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),A=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=l.getParameter(l.MAX_TEXTURE_SIZE),b=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),M=l.getParameter(l.MAX_VERTEX_ATTRIBS),U=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),B=l.getParameter(l.MAX_VARYING_VECTORS),C=l.getParameter(l.MAX_FRAGMENT_UNIFORM_VECTORS),O=l.getParameter(l.MAX_SAMPLES),D=l.getParameter(l.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:g,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:A,maxTextureSize:N,maxCubemapSize:b,maxAttributes:M,maxVertexUniforms:U,maxVaryings:B,maxFragmentUniforms:C,maxSamples:O,samples:D}}function Z2(l){const t=this;let i=null,s=0,o=!1,f=!1;const d=new Kr,p=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const E=_.length!==0||v||s!==0||o;return o=v,s=_.length,E},this.beginShadows=function(){f=!0,y(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(_,v){i=y(_,v,0)},this.setState=function(_,v,E){const A=_.clippingPlanes,N=_.clipIntersection,b=_.clipShadows,M=l.get(_);if(!o||A===null||A.length===0||f&&!b)f?y(null):g();else{const U=f?0:s,B=U*4;let C=M.clippingState||null;m.value=C,C=y(A,v,B,E);for(let O=0;O!==B;++O)C[O]=i[O];M.clippingState=C,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=U}};function g(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function y(_,v,E,A){const N=_!==null?_.length:0;let b=null;if(N!==0){if(b=m.value,A!==!0||b===null){const M=E+N*4,U=v.matrixWorldInverse;p.getNormalMatrix(U),(b===null||b.length<M)&&(b=new Float32Array(M));for(let B=0,C=E;B!==N;++B,C+=4)d.copy(_[B]).applyMatrix4(U,p),d.normal.toArray(b,C),b[C+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=N,t.numIntersection=0,b}}const vr=4,D_=[.125,.215,.35,.446,.526,.582],$r=20,K2=256,Eo=new Sm,U_=new Ct;let sp=null,lp=0,op=0,cp=!1;const Q2=new le;class L_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,o=100,f={}){const{size:d=256,position:p=Q2}=f;sp=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,o,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sp,lp,op),this._renderer.xr.enabled=cp,t.scissorTest=!1,ol(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===is||t.mapping===ml?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sp=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),cp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Oa,format:Vi,colorSpace:Gu,depthBuffer:!1},o=O_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(t,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J2(f)),this._blurMaterial=e3(f,t,i),this._ggxMaterial=$2(f,t,i)}return o}_compileMaterial(t){const i=new Wt(new Dn,t);this._renderer.compile(i,Eo)}_sceneToCubeUV(t,i,s,o,f){const m=new ii(90,1,i,s),g=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,E=_.toneMapping;_.getClearColor(U_),_.toneMapping=la,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Mr,new Wn({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,b=N.material;let M=!1;const U=t.background;U?U.isColor&&(b.color.copy(U),t.background=null,M=!0):(b.color.copy(U_),M=!0);for(let B=0;B<6;B++){const C=B%3;C===0?(m.up.set(0,g[B],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x+y[B],f.y,f.z)):C===1?(m.up.set(0,0,g[B]),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y+y[B],f.z)):(m.up.set(0,g[B],0),m.position.set(f.x,f.y,f.z),m.lookAt(f.x,f.y,f.z+y[B]));const O=this._cubeSize;ol(o,C*O,B>2?O:0,O,O),_.setRenderTarget(o),M&&_.render(N,m),_.render(t,m)}_.toneMapping=E,_.autoClear=v,t.background=U}_textureToCubeUV(t,i){const s=this._renderer,o=t.mapping===is||t.mapping===ml;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const f=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=f;const p=f.uniforms;p.envMap.value=t;const m=this._cubeSize;ol(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Eo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const o=this._lodMeshes.length;for(let f=1;f<o;f++)this._applyGGXFilter(t,f-1,f);i.autoClear=s}_applyGGXFilter(t,i,s){const o=this._renderer,f=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,g=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),_=Math.sqrt(g*g-y*y),v=0+g*1.25,E=_*v,{_lodMax:A}=this,N=this._sizeLods[s],b=3*N*(s>A-vr?s-A+vr:0),M=4*(this._cubeSize-N);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=A-i,ol(f,b,M,3*N,2*N),o.setRenderTarget(f),o.render(p,Eo),m.envMap.value=f.texture,m.roughness.value=0,m.mipInt.value=A-s,ol(t,b,M,3*N,2*N),o.setRenderTarget(t),o.render(p,Eo)}_blur(t,i,s,o,f){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,o,"latitudinal",f),this._halfBlur(d,t,s,s,o,"longitudinal",f)}_halfBlur(t,i,s,o,f,d,p){const m=this._renderer,g=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ht("blur direction must be either latitudinal or longitudinal!");const y=3,_=this._lodMeshes[o];_.material=g;const v=g.uniforms,E=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*E):2*Math.PI/(2*$r-1),N=f/A,b=isFinite(f)?1+Math.floor(y*N):$r;b>$r&&pt(`sigmaRadians, ${f}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${$r}`);const M=[];let U=0;for(let z=0;z<$r;++z){const S=z/N,L=Math.exp(-S*S/2);M.push(L),z===0?U+=L:z<b&&(U+=2*L)}for(let z=0;z<M.length;z++)M[z]=M[z]/U;v.envMap.value=t.texture,v.samples.value=b,v.weights.value=M,v.latitudinal.value=d==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:B}=this;v.dTheta.value=A,v.mipInt.value=B-s;const C=this._sizeLods[o],O=3*C*(o>B-vr?o-B+vr:0),D=4*(this._cubeSize-C);ol(i,O,D,3*C,2*C),m.setRenderTarget(i),m.render(_,Eo)}}function J2(l){const t=[],i=[],s=[];let o=l;const f=l-vr+1+D_.length;for(let d=0;d<f;d++){const p=Math.pow(2,o);t.push(p);let m=1/p;d>l-vr?m=D_[d-l+vr-1]:d===0&&(m=0),i.push(m);const g=1/(p-2),y=-g,_=1+g,v=[y,y,_,y,_,_,y,y,_,_,y,_],E=6,A=6,N=3,b=2,M=1,U=new Float32Array(N*A*E),B=new Float32Array(b*A*E),C=new Float32Array(M*A*E);for(let D=0;D<E;D++){const z=D%3*2/3-1,S=D>2?0:-1,L=[z,S,0,z+2/3,S,0,z+2/3,S+1,0,z,S,0,z+2/3,S+1,0,z,S+1,0];U.set(L,N*A*D),B.set(v,b*A*D);const j=[D,D,D,D,D,D];C.set(j,M*A*D)}const O=new Dn;O.setAttribute("position",new Ni(U,N)),O.setAttribute("uv",new Ni(B,b)),O.setAttribute("faceIndex",new Ni(C,M)),s.push(new Wt(O,null)),o>vr&&o--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function O_(l,t,i){const s=new oa(l,t,i);return s.texture.mapping=Wu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ol(l,t,i,s,o){l.viewport.set(t,i,s,o),l.scissor.set(t,i,s,o)}function $2(l,t,i){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ku(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function e3(l,t,i){const s=new Float32Array($r),o=new le(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function P_(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function I_(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Iy extends oa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new Ry(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Mr(5,5,5),f=new ua({name:"CubemapFromEquirect",uniforms:xl(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ai,blending:Ua});f.uniforms.tEquirect.value=i;const d=new Wt(o,f),p=i.minFilter;return i.minFilter===es&&(i.minFilter=Vn),new rT(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,o=!0){const f=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,o);t.setRenderTarget(f)}}function t3(l){let t=new WeakMap,i=new WeakMap,s=null;function o(v,E=!1){return v==null?null:E?d(v):f(v)}function f(v){if(v&&v.isTexture){const E=v.mapping;if(E===Dh||E===Uh)if(t.has(v)){const A=t.get(v).texture;return p(A,v.mapping)}else{const A=v.image;if(A&&A.height>0){const N=new Iy(A.height);return N.fromEquirectangularTexture(l,v),t.set(v,N),v.addEventListener("dispose",g),p(N.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,A=E===Dh||E===Uh,N=E===is||E===ml;if(A||N){let b=i.get(v);const M=b!==void 0?b.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return s===null&&(s=new L_(l)),b=A?s.fromEquirectangular(v,b):s.fromCubemap(v,b),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),b.texture;if(b!==void 0)return b.texture;{const U=v.image;return A&&U&&U.height>0||N&&U&&m(U)?(s===null&&(s=new L_(l)),b=A?s.fromEquirectangular(v):s.fromCubemap(v),b.texture.pmremVersion=v.pmremVersion,i.set(v,b),v.addEventListener("dispose",y),b.texture):null}}}return v}function p(v,E){return E===Dh?v.mapping=is:E===Uh&&(v.mapping=ml),v}function m(v){let E=0;const A=6;for(let N=0;N<A;N++)v[N]!==void 0&&E++;return E===A}function g(v){const E=v.target;E.removeEventListener("dispose",g);const A=t.get(E);A!==void 0&&(t.delete(E),A.dispose())}function y(v){const E=v.target;E.removeEventListener("dispose",y);const A=i.get(E);A!==void 0&&(i.delete(E),A.dispose())}function _(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function n3(l){const t={};function i(s){if(t[s]!==void 0)return t[s];const o=l.getExtension(s);return t[s]=o,o}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const o=i(s);return o===null&&fl("WebGLRenderer: "+s+" extension not supported."),o}}}function i3(l,t,i,s){const o={},f=new WeakMap;function d(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const A in v.attributes)t.remove(v.attributes[A]);v.removeEventListener("dispose",d),delete o[v.id];const E=f.get(v);E&&(t.remove(E),f.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(_,v){return o[v.id]===!0||(v.addEventListener("dispose",d),o[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const E in v)t.update(v[E],l.ARRAY_BUFFER)}function g(_){const v=[],E=_.index,A=_.attributes.position;let N=0;if(A===void 0)return;if(E!==null){const U=E.array;N=E.version;for(let B=0,C=U.length;B<C;B+=3){const O=U[B+0],D=U[B+1],z=U[B+2];v.push(O,D,D,z,z,O)}}else{const U=A.array;N=A.version;for(let B=0,C=U.length/3-1;B<C;B+=3){const O=B+0,D=B+1,z=B+2;v.push(O,D,D,z,z,O)}}const b=new(A.count>=65535?Ty:Ey)(v,1);b.version=N;const M=f.get(_);M&&t.remove(M),f.set(_,b)}function y(_){const v=f.get(_);if(v){const E=_.index;E!==null&&v.version<E.version&&g(_)}else g(_);return f.get(_)}return{get:p,update:m,getWireframeAttribute:y}}function a3(l,t,i){let s;function o(_){s=_}let f,d;function p(_){f=_.type,d=_.bytesPerElement}function m(_,v){l.drawElements(s,v,f,_*d),i.update(v,s,1)}function g(_,v,E){E!==0&&(l.drawElementsInstanced(s,v,f,_*d,E),i.update(v,s,E))}function y(_,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,f,_,0,E);let N=0;for(let b=0;b<E;b++)N+=v[b];i.update(N,s,1)}this.setMode=o,this.setIndex=p,this.render=m,this.renderInstances=g,this.renderMultiDraw=y}function r3(l){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,d,p){switch(i.calls++,d){case l.TRIANGLES:i.triangles+=p*(f/3);break;case l.LINES:i.lines+=p*(f/2);break;case l.LINE_STRIP:i.lines+=p*(f-1);break;case l.LINE_LOOP:i.lines+=p*f;break;case l.POINTS:i.points+=p*f;break;default:Ht("WebGLInfo: Unknown draw mode:",d);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:s}}function s3(l,t,i){const s=new WeakMap,o=new cn;function f(d,p,m){const g=d.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=y!==void 0?y.length:0;let v=s.get(p);if(v===void 0||v.count!==_){let j=function(){S.dispose(),s.delete(p),p.removeEventListener("dispose",j)};var E=j;v!==void 0&&v.texture.dispose();const A=p.morphAttributes.position!==void 0,N=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,M=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],B=p.morphAttributes.color||[];let C=0;A===!0&&(C=1),N===!0&&(C=2),b===!0&&(C=3);let O=p.attributes.position.count*C,D=1;O>t.maxTextureSize&&(D=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const z=new Float32Array(O*D*4*_),S=new yy(z,O,D,_);S.type=ra,S.needsUpdate=!0;const L=C*4;for(let k=0;k<_;k++){const Y=M[k],me=U[k],ve=B[k],te=O*D*4*k;for(let W=0;W<Y.count;W++){const Z=W*L;A===!0&&(o.fromBufferAttribute(Y,W),z[te+Z+0]=o.x,z[te+Z+1]=o.y,z[te+Z+2]=o.z,z[te+Z+3]=0),N===!0&&(o.fromBufferAttribute(me,W),z[te+Z+4]=o.x,z[te+Z+5]=o.y,z[te+Z+6]=o.z,z[te+Z+7]=0),b===!0&&(o.fromBufferAttribute(ve,W),z[te+Z+8]=o.x,z[te+Z+9]=o.y,z[te+Z+10]=o.z,z[te+Z+11]=ve.itemSize===4?o.w:1)}}v={count:_,texture:S,size:new Nt(O,D)},s.set(p,v),p.addEventListener("dispose",j)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(l,"morphTexture",d.morphTexture,i);else{let A=0;for(let b=0;b<g.length;b++)A+=g[b];const N=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(l,"morphTargetBaseInfluence",N),m.getUniforms().setValue(l,"morphTargetInfluences",g)}m.getUniforms().setValue(l,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(l,"morphTargetsTextureSize",v.size)}return{update:f}}function l3(l,t,i,s,o){let f=new WeakMap;function d(g){const y=o.render.frame,_=g.geometry,v=t.get(g,_);if(f.get(v)!==y&&(t.update(v),f.set(v,y)),g.isInstancedMesh&&(g.hasEventListener("dispose",m)===!1&&g.addEventListener("dispose",m),f.get(g)!==y&&(i.update(g.instanceMatrix,l.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,l.ARRAY_BUFFER),f.set(g,y))),g.isSkinnedMesh){const E=g.skeleton;f.get(E)!==y&&(E.update(),f.set(E,y))}return v}function p(){f=new WeakMap}function m(g){const y=g.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:d,dispose:p}}const o3={[ay]:"LINEAR_TONE_MAPPING",[ry]:"REINHARD_TONE_MAPPING",[sy]:"CINEON_TONE_MAPPING",[ly]:"ACES_FILMIC_TONE_MAPPING",[cy]:"AGX_TONE_MAPPING",[uy]:"NEUTRAL_TONE_MAPPING",[oy]:"CUSTOM_TONE_MAPPING"};function c3(l,t,i,s,o,f){const d=new oa(t,i,{type:l,depthBuffer:o,stencilBuffer:f,samples:s?4:0,depthTexture:o?new gl(t,i):void 0}),p=new oa(t,i,{type:Oa,depthBuffer:!1,stencilBuffer:!1}),m=new Dn;m.setAttribute("position",new an([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new an([0,2,0,0,2,0],2));const g=new QE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Wt(m,g),_=new Sm(-1,1,1,-1,0,1);let v=null,E=null,A=!1,N,b=null,M=[],U=!1;this.setSize=function(B,C){d.setSize(B,C),p.setSize(B,C);for(let O=0;O<M.length;O++){const D=M[O];D.setSize&&D.setSize(B,C)}},this.setEffects=function(B){M=B,U=M.length>0&&M[0].isRenderPass===!0;const C=d.width,O=d.height;for(let D=0;D<M.length;D++){const z=M[D];z.setSize&&z.setSize(C,O)}},this.begin=function(B,C){if(A||B.toneMapping===la&&M.length===0)return!1;if(b=C,C!==null){const O=C.width,D=C.height;(d.width!==O||d.height!==D)&&this.setSize(O,D)}return U===!1&&B.setRenderTarget(d),N=B.toneMapping,B.toneMapping=la,!0},this.hasRenderPass=function(){return U},this.end=function(B,C){B.toneMapping=N,A=!0;let O=d,D=p;for(let z=0;z<M.length;z++){const S=M[z];if(S.enabled!==!1&&(S.render(B,D,O,C),S.needsSwap!==!1)){const L=O;O=D,D=L}}if(v!==B.outputColorSpace||E!==B.toneMapping){v=B.outputColorSpace,E=B.toneMapping,g.defines={},It.getTransfer(v)===Qt&&(g.defines.SRGB_TRANSFER="");const z=o3[E];z&&(g.defines[z]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=O.texture,B.setRenderTarget(b),B.render(y,_),b=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),g.dispose()}}const zy=new Zn,im=new gl(1,1),Fy=new yy,By=new wE,Hy=new Ry,z_=[],F_=[],B_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function _l(l,t,i){const s=l[0];if(s<=0||s>0)return l;const o=t*i;let f=z_[o];if(f===void 0&&(f=new Float32Array(o),z_[o]=f),t!==0){s.toArray(f,0);for(let d=1,p=0;d!==t;++d)p+=i,l[d].toArray(f,p)}return f}function Sn(l,t){if(l.length!==t.length)return!1;for(let i=0,s=l.length;i<s;i++)if(l[i]!==t[i])return!1;return!0}function En(l,t){for(let i=0,s=t.length;i<s;i++)l[i]=t[i]}function Qu(l,t){let i=F_[t];i===void 0&&(i=new Int32Array(t),F_[t]=i);for(let s=0;s!==t;++s)i[s]=l.allocateTextureUnit();return i}function u3(l,t){const i=this.cache;i[0]!==t&&(l.uniform1f(this.addr,t),i[0]=t)}function f3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;l.uniform2fv(this.addr,t),En(i,t)}}function d3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;l.uniform3fv(this.addr,t),En(i,t)}}function h3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;l.uniform4fv(this.addr,t),En(i,t)}}function p3(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;l.uniformMatrix2fv(this.addr,!1,t),En(i,t)}else{if(Sn(i,s))return;G_.set(s),l.uniformMatrix2fv(this.addr,!1,G_),En(i,s)}}function m3(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;l.uniformMatrix3fv(this.addr,!1,t),En(i,t)}else{if(Sn(i,s))return;H_.set(s),l.uniformMatrix3fv(this.addr,!1,H_),En(i,s)}}function g3(l,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;l.uniformMatrix4fv(this.addr,!1,t),En(i,t)}else{if(Sn(i,s))return;B_.set(s),l.uniformMatrix4fv(this.addr,!1,B_),En(i,s)}}function x3(l,t){const i=this.cache;i[0]!==t&&(l.uniform1i(this.addr,t),i[0]=t)}function v3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;l.uniform2iv(this.addr,t),En(i,t)}}function _3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;l.uniform3iv(this.addr,t),En(i,t)}}function y3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;l.uniform4iv(this.addr,t),En(i,t)}}function b3(l,t){const i=this.cache;i[0]!==t&&(l.uniform1ui(this.addr,t),i[0]=t)}function M3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;l.uniform2uiv(this.addr,t),En(i,t)}}function S3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;l.uniform3uiv(this.addr,t),En(i,t)}}function E3(l,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;l.uniform4uiv(this.addr,t),En(i,t)}}function T3(l,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o);let f;this.type===l.SAMPLER_2D_SHADOW?(im.compareFunction=i.isReversedDepthBuffer()?mm:pm,f=im):f=zy,i.setTexture2D(t||f,o)}function A3(l,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o),i.setTexture3D(t||By,o)}function w3(l,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o),i.setTextureCube(t||Hy,o)}function R3(l,t,i){const s=this.cache,o=i.allocateTextureUnit();s[0]!==o&&(l.uniform1i(this.addr,o),s[0]=o),i.setTexture2DArray(t||Fy,o)}function C3(l){switch(l){case 5126:return u3;case 35664:return f3;case 35665:return d3;case 35666:return h3;case 35674:return p3;case 35675:return m3;case 35676:return g3;case 5124:case 35670:return x3;case 35667:case 35671:return v3;case 35668:case 35672:return _3;case 35669:case 35673:return y3;case 5125:return b3;case 36294:return M3;case 36295:return S3;case 36296:return E3;case 35678:case 36198:case 36298:case 36306:case 35682:return T3;case 35679:case 36299:case 36307:return A3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return R3}}function N3(l,t){l.uniform1fv(this.addr,t)}function D3(l,t){const i=_l(t,this.size,2);l.uniform2fv(this.addr,i)}function U3(l,t){const i=_l(t,this.size,3);l.uniform3fv(this.addr,i)}function L3(l,t){const i=_l(t,this.size,4);l.uniform4fv(this.addr,i)}function O3(l,t){const i=_l(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,i)}function P3(l,t){const i=_l(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,i)}function I3(l,t){const i=_l(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,i)}function z3(l,t){l.uniform1iv(this.addr,t)}function F3(l,t){l.uniform2iv(this.addr,t)}function B3(l,t){l.uniform3iv(this.addr,t)}function H3(l,t){l.uniform4iv(this.addr,t)}function G3(l,t){l.uniform1uiv(this.addr,t)}function V3(l,t){l.uniform2uiv(this.addr,t)}function j3(l,t){l.uniform3uiv(this.addr,t)}function k3(l,t){l.uniform4uiv(this.addr,t)}function X3(l,t,i){const s=this.cache,o=t.length,f=Qu(i,o);Sn(s,f)||(l.uniform1iv(this.addr,f),En(s,f));let d;this.type===l.SAMPLER_2D_SHADOW?d=im:d=zy;for(let p=0;p!==o;++p)i.setTexture2D(t[p]||d,f[p])}function q3(l,t,i){const s=this.cache,o=t.length,f=Qu(i,o);Sn(s,f)||(l.uniform1iv(this.addr,f),En(s,f));for(let d=0;d!==o;++d)i.setTexture3D(t[d]||By,f[d])}function W3(l,t,i){const s=this.cache,o=t.length,f=Qu(i,o);Sn(s,f)||(l.uniform1iv(this.addr,f),En(s,f));for(let d=0;d!==o;++d)i.setTextureCube(t[d]||Hy,f[d])}function Y3(l,t,i){const s=this.cache,o=t.length,f=Qu(i,o);Sn(s,f)||(l.uniform1iv(this.addr,f),En(s,f));for(let d=0;d!==o;++d)i.setTexture2DArray(t[d]||Fy,f[d])}function Z3(l){switch(l){case 5126:return N3;case 35664:return D3;case 35665:return U3;case 35666:return L3;case 35674:return O3;case 35675:return P3;case 35676:return I3;case 5124:case 35670:return z3;case 35667:case 35671:return F3;case 35668:case 35672:return B3;case 35669:case 35673:return H3;case 5125:return G3;case 36294:return V3;case 36295:return j3;case 36296:return k3;case 35678:case 36198:case 36298:case 36306:case 35682:return X3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return Y3}}class K3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=C3(i.type)}}class Q3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Z3(i.type)}}class J3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const o=this.seq;for(let f=0,d=o.length;f!==d;++f){const p=o[f];p.setValue(t,i[p.id],s)}}}const up=/(\w+)(\])?(\[|\.)?/g;function V_(l,t){l.seq.push(t),l.map[t.id]=t}function $3(l,t,i){const s=l.name,o=s.length;for(up.lastIndex=0;;){const f=up.exec(s),d=up.lastIndex;let p=f[1];const m=f[2]==="]",g=f[3];if(m&&(p=p|0),g===void 0||g==="["&&d+2===o){V_(i,g===void 0?new K3(p,l,t):new Q3(p,l,t));break}else{let _=i.map[p];_===void 0&&(_=new J3(p),V_(i,_)),i=_}}}class Pu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);$3(p,m,this)}const o=[],f=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(d):f.push(d);o.length>0&&(this.seq=o.concat(f))}setValue(t,i,s,o){const f=this.map[i];f!==void 0&&f.setValue(t,s,o)}setOptional(t,i,s){const o=i[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,i,s,o){for(let f=0,d=i.length;f!==d;++f){const p=i[f],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,o)}}static seqWithValue(t,i){const s=[];for(let o=0,f=t.length;o!==f;++o){const d=t[o];d.id in i&&s.push(d)}return s}}function j_(l,t,i){const s=l.createShader(t);return l.shaderSource(s,i),l.compileShader(s),s}const ew=37297;let tw=0;function nw(l,t){const i=l.split(`
`),s=[],o=Math.max(t-6,0),f=Math.min(t+6,i.length);for(let d=o;d<f;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const k_=new yt;function iw(l){It._getMatrix(k_,It.workingColorSpace,l);const t=`mat3( ${k_.elements.map(i=>i.toFixed(4))} )`;switch(It.getTransfer(l)){case Vu:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",l),[t,"LinearTransferOETF"]}}function X_(l,t,i){const s=l.getShaderParameter(t,l.COMPILE_STATUS),f=(l.getShaderInfoLog(t)||"").trim();if(s&&f==="")return"";const d=/ERROR: 0:(\d+)/.exec(f);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+f+`

`+nw(l.getShaderSource(t),p)}else return f}function aw(l,t){const i=iw(t);return[`vec4 ${l}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const rw={[ay]:"Linear",[ry]:"Reinhard",[sy]:"Cineon",[ly]:"ACESFilmic",[cy]:"AgX",[uy]:"Neutral",[oy]:"Custom"};function sw(l,t){const i=rw[t];return i===void 0?(pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+l+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+l+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new le;function lw(){It.getLuminanceCoefficients(Cu);const l=Cu.x.toFixed(4),t=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${l}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ow(l){return[l.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",l.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function cw(l){const t=[];for(const i in l){const s=l[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function uw(l,t){const i={},s=l.getProgramParameter(t,l.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const f=l.getActiveAttrib(t,o),d=f.name;let p=1;f.type===l.FLOAT_MAT2&&(p=2),f.type===l.FLOAT_MAT3&&(p=3),f.type===l.FLOAT_MAT4&&(p=4),i[d]={type:f.type,location:l.getAttribLocation(t,d),locationSize:p}}return i}function wo(l){return l!==""}function q_(l,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function W_(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function am(l){return l.replace(fw,hw)}const dw=new Map;function hw(l,t){let i=At[t];if(i===void 0){const s=dw.get(t);if(s!==void 0)i=At[s],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return am(i)}const pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y_(l){return l.replace(pw,mw)}function mw(l,t,i,s){let o="";for(let f=parseInt(t);f<parseInt(i);f++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return o}function Z_(l){let t=`precision ${l.precision} float;
	precision ${l.precision} int;
	precision ${l.precision} sampler2D;
	precision ${l.precision} samplerCube;
	precision ${l.precision} sampler3D;
	precision ${l.precision} sampler2DArray;
	precision ${l.precision} sampler2DShadow;
	precision ${l.precision} samplerCubeShadow;
	precision ${l.precision} sampler2DArrayShadow;
	precision ${l.precision} isampler2D;
	precision ${l.precision} isampler3D;
	precision ${l.precision} isamplerCube;
	precision ${l.precision} isampler2DArray;
	precision ${l.precision} usampler2D;
	precision ${l.precision} usampler3D;
	precision ${l.precision} usamplerCube;
	precision ${l.precision} usampler2DArray;
	`;return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const gw={[Nu]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function xw(l){return gw[l.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vw={[is]:"ENVMAP_TYPE_CUBE",[ml]:"ENVMAP_TYPE_CUBE",[Wu]:"ENVMAP_TYPE_CUBE_UV"};function _w(l){return l.envMap===!1?"ENVMAP_TYPE_CUBE":vw[l.envMapMode]||"ENVMAP_TYPE_CUBE"}const yw={[ml]:"ENVMAP_MODE_REFRACTION"};function bw(l){return l.envMap===!1?"ENVMAP_MODE_REFLECTION":yw[l.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mw={[iy]:"ENVMAP_BLENDING_MULTIPLY",[sE]:"ENVMAP_BLENDING_MIX",[lE]:"ENVMAP_BLENDING_ADD"};function Sw(l){return l.envMap===!1?"ENVMAP_BLENDING_NONE":Mw[l.combine]||"ENVMAP_BLENDING_NONE"}function Ew(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Tw(l,t,i,s){const o=l.getContext(),f=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=xw(i),g=_w(i),y=bw(i),_=Sw(i),v=Ew(i),E=ow(i),A=cw(f),N=o.createProgram();let b,M,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(wo).join(`
`),b.length>0&&(b+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(wo).join(`
`),M.length>0&&(M+=`
`)):(b=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),M=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==la?"#define TONE_MAPPING":"",i.toneMapping!==la?At.tonemapping_pars_fragment:"",i.toneMapping!==la?sw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,aw("linearToOutputTexel",i.outputColorSpace),lw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(wo).join(`
`)),d=am(d),d=q_(d,i),d=W_(d,i),p=am(p),p=q_(p,i),p=W_(p,i),d=Y_(d),p=Y_(p),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,M=["#define varying in",i.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const B=U+b+d,C=U+M+p,O=j_(o,o.VERTEX_SHADER,B),D=j_(o,o.FRAGMENT_SHADER,C);o.attachShader(N,O),o.attachShader(N,D),i.index0AttributeName!==void 0?o.bindAttribLocation(N,0,i.index0AttributeName):i.hasPositionAttribute===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function z(k){if(l.debug.checkShaderErrors){const Y=o.getProgramInfoLog(N)||"",me=o.getShaderInfoLog(O)||"",ve=o.getShaderInfoLog(D)||"",te=Y.trim(),W=me.trim(),Z=ve.trim();let J=!0,Me=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(J=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(o,N,O,D);else{const H=X_(o,O,"vertex"),F=X_(o,D,"fragment");Ht("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+H+`
`+F)}else te!==""?pt("WebGLProgram: Program Info Log:",te):(W===""||Z==="")&&(Me=!1);Me&&(k.diagnostics={runnable:J,programLog:te,vertexShader:{log:W,prefix:b},fragmentShader:{log:Z,prefix:M}})}o.deleteShader(O),o.deleteShader(D),S=new Pu(o,N),L=uw(o,N)}let S;this.getUniforms=function(){return S===void 0&&z(this),S};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let j=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(N,ew)),j},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=tw++,this.cacheKey=t,this.usedTimes=1,this.program=N,this.vertexShader=O,this.fragmentShader=D,this}let Aw=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new Rw(t),i.set(t,s)),s}}class Rw{constructor(t){this.id=Aw++,this.code=t,this.usedTimes=0}}function Cw(l){return l===as||l===Bu||l===Hu}function Nw(l,t,i,s,o,f){const d=new by,p=new ww,m=new Set,g=[],y=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(S){return m.add(S),S===0?"uv":`uv${S}`}function N(S,L,j,k,Y,me){const ve=k.fog,te=Y.geometry,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?k.environment:null,Z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,J=t.get(S.envMap||W,Z),Me=J&&J.mapping===Wu?J.image.height:null,H=E[S.type];S.precision!==null&&(v=s.getMaxPrecision(S.precision),v!==S.precision&&pt("WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const F=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_e=F!==void 0?F.length:0;let Ne=0;te.morphAttributes.position!==void 0&&(Ne=1),te.morphAttributes.normal!==void 0&&(Ne=2),te.morphAttributes.color!==void 0&&(Ne=3);let I,ae,X,V;if(H){const Ye=aa[H];I=Ye.vertexShader,ae=Ye.fragmentShader}else{I=S.vertexShader,ae=S.fragmentShader;const Ye=p.getVertexShaderStage(S),Vt=p.getFragmentShaderStage(S);p.update(S,Ye,Vt),X=Ye.id,V=Vt.id}const ee=l.getRenderTarget(),Se=l.state.buffers.depth.getReversed(),we=Y.isInstancedMesh===!0,ge=Y.isBatchedMesh===!0,Ce=!!S.map,Pe=!!S.matcap,Be=!!J,ke=!!S.aoMap,Ve=!!S.lightMap,Ue=!!S.bumpMap&&S.wireframe===!1,Oe=!!S.normalMap,ot=!!S.displacementMap,ft=!!S.emissiveMap,mt=!!S.metalnessMap,wt=!!S.roughnessMap,K=S.anisotropy>0,Lt=S.clearcoat>0,gt=S.dispersion>0,P=S.iridescence>0,T=S.sheen>0,ie=S.transmission>0,oe=K&&!!S.anisotropyMap,xe=Lt&&!!S.clearcoatMap,De=Lt&&!!S.clearcoatNormalMap,ze=Lt&&!!S.clearcoatRoughnessMap,ye=P&&!!S.iridescenceMap,be=P&&!!S.iridescenceThicknessMap,Le=T&&!!S.sheenColorMap,$e=T&&!!S.sheenRoughnessMap,He=!!S.specularMap,Fe=!!S.specularColorMap,qe=!!S.specularIntensityMap,st=ie&&!!S.transmissionMap,dt=ie&&!!S.thicknessMap,Q=!!S.gradientMap,Ie=!!S.alphaMap,Te=S.alphaTest>0,Ge=!!S.alphaHash,Xe=!!S.extensions;let Re=la;S.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Re=l.toneMapping);const it={shaderID:H,shaderType:S.type,shaderName:S.name,vertexShader:I,fragmentShader:ae,defines:S.defines,customVertexShaderID:X,customFragmentShaderID:V,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:ge,batchingColor:ge&&Y._colorsTexture!==null,instancing:we,instancingColor:we&&Y.instanceColor!==null,instancingMorph:we&&Y.morphTexture!==null,outputColorSpace:ee===null?l.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:Pe,envMap:Be,envMapMode:Be&&J.mapping,envMapCubeUVHeight:Me,aoMap:ke,lightMap:Ve,bumpMap:Ue,normalMap:Oe,displacementMap:ot,emissiveMap:ft,normalMapObjectSpace:Oe&&S.normalMapType===uE,normalMapTangentSpace:Oe&&S.normalMapType===em,packedNormalMap:Oe&&S.normalMapType===em&&Cw(S.normalMap.format),metalnessMap:mt,roughnessMap:wt,anisotropy:K,anisotropyMap:oe,clearcoat:Lt,clearcoatMap:xe,clearcoatNormalMap:De,clearcoatRoughnessMap:ze,dispersion:gt,iridescence:P,iridescenceMap:ye,iridescenceThicknessMap:be,sheen:T,sheenColorMap:Le,sheenRoughnessMap:$e,specularMap:He,specularColorMap:Fe,specularIntensityMap:qe,transmission:ie,transmissionMap:st,thicknessMap:dt,gradientMap:Q,opaque:S.transparent===!1&&S.blending===ul&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Te,alphaHash:Ge,combine:S.combine,mapUv:Ce&&A(S.map.channel),aoMapUv:ke&&A(S.aoMap.channel),lightMapUv:Ve&&A(S.lightMap.channel),bumpMapUv:Ue&&A(S.bumpMap.channel),normalMapUv:Oe&&A(S.normalMap.channel),displacementMapUv:ot&&A(S.displacementMap.channel),emissiveMapUv:ft&&A(S.emissiveMap.channel),metalnessMapUv:mt&&A(S.metalnessMap.channel),roughnessMapUv:wt&&A(S.roughnessMap.channel),anisotropyMapUv:oe&&A(S.anisotropyMap.channel),clearcoatMapUv:xe&&A(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&A(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&A(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&A(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&A(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&A(S.sheenColorMap.channel),sheenRoughnessMapUv:$e&&A(S.sheenRoughnessMap.channel),specularMapUv:He&&A(S.specularMap.channel),specularColorMapUv:Fe&&A(S.specularColorMap.channel),specularIntensityMapUv:qe&&A(S.specularIntensityMap.channel),transmissionMapUv:st&&A(S.transmissionMap.channel),thicknessMapUv:dt&&A(S.thicknessMap.channel),alphaMapUv:Ie&&A(S.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Oe||K),vertexNormals:!!te.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!te.attributes.uv&&(Ce||Ie),fog:!!ve,useFog:S.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||te.attributes.normal===void 0&&Oe===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Se,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:S.dithering,shadowMapEnabled:l.shadowMap.enabled&&j.length>0,shadowMapType:l.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&It.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:ft&&S.emissiveMap.isVideoTexture===!0&&It.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Na,flipSided:S.side===ai,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&S.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return it.vertexUv1s=m.has(1),it.vertexUv2s=m.has(2),it.vertexUv3s=m.has(3),m.clear(),it}function b(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const j in S.defines)L.push(j),L.push(S.defines[j]);return S.isRawShaderMaterial===!1&&(M(L,S),U(L,S),L.push(l.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function M(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function U(S,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),S.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),S.push(d.mask)}function B(S){const L=E[S.type];let j;if(L){const k=aa[L];j=YE.clone(k.uniforms)}else j=S.uniforms;return j}function C(S,L){let j=y.get(L);return j!==void 0?++j.usedTimes:(j=new Tw(l,L,S,o),g.push(j),y.set(L,j)),j}function O(S){if(--S.usedTimes===0){const L=g.indexOf(S);g[L]=g[g.length-1],g.pop(),y.delete(S.cacheKey),S.destroy()}}function D(S){p.remove(S)}function z(){p.dispose()}return{getParameters:N,getProgramCacheKey:b,getUniforms:B,acquireProgram:C,releaseProgram:O,releaseShaderCache:D,programs:g,dispose:z}}function Dw(){let l=new WeakMap;function t(d){return l.has(d)}function i(d){let p=l.get(d);return p===void 0&&(p={},l.set(d,p)),p}function s(d){l.delete(d)}function o(d,p,m){l.get(d)[p]=m}function f(){l=new WeakMap}return{has:t,get:i,remove:s,update:o,dispose:f}}function Uw(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.materialVariant!==t.materialVariant?l.materialVariant-t.materialVariant:l.z!==t.z?l.z-t.z:l.id-t.id}function K_(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function Q_(){const l=[];let t=0;const i=[],s=[],o=[];function f(){t=0,i.length=0,s.length=0,o.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function p(v,E,A,N,b,M){let U=l[t];return U===void 0?(U={id:v.id,object:v,geometry:E,material:A,materialVariant:d(v),groupOrder:N,renderOrder:v.renderOrder,z:b,group:M},l[t]=U):(U.id=v.id,U.object=v,U.geometry=E,U.material=A,U.materialVariant=d(v),U.groupOrder=N,U.renderOrder=v.renderOrder,U.z=b,U.group=M),t++,U}function m(v,E,A,N,b,M){const U=p(v,E,A,N,b,M);A.transmission>0?s.push(U):A.transparent===!0?o.push(U):i.push(U)}function g(v,E,A,N,b,M){const U=p(v,E,A,N,b,M);A.transmission>0?s.unshift(U):A.transparent===!0?o.unshift(U):i.unshift(U)}function y(v,E,A){i.length>1&&i.sort(v||Uw),s.length>1&&s.sort(E||K_),o.length>1&&o.sort(E||K_),A&&(i.reverse(),s.reverse(),o.reverse())}function _(){for(let v=t,E=l.length;v<E;v++){const A=l[v];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:o,init:f,push:m,unshift:g,finish:_,sort:y}}function Lw(){let l=new WeakMap;function t(s,o){const f=l.get(s);let d;return f===void 0?(d=new Q_,l.set(s,[d])):o>=f.length?(d=new Q_,f.push(d)):d=f[o],d}function i(){l=new WeakMap}return{get:t,dispose:i}}function Ow(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new le,color:new Ct};break;case"SpotLight":i={position:new le,direction:new le,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new le,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new le,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new le,halfWidth:new le,halfHeight:new le};break}return l[t.id]=i,i}}}function Pw(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=i,i}}}let Iw=0;function zw(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function Fw(l){const t=new Ow,i=Pw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new le);const o=new le,f=new ln,d=new ln;function p(g){let y=0,_=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let E=0,A=0,N=0,b=0,M=0,U=0,B=0,C=0,O=0,D=0,z=0;g.sort(zw);for(let L=0,j=g.length;L<j;L++){const k=g[L],Y=k.color,me=k.intensity,ve=k.distance;let te=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===as?te=k.shadow.map.texture:te=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)y+=Y.r*me,_+=Y.g*me,v+=Y.b*me;else if(k.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(k.sh.coefficients[W],me);z++}else if(k.isDirectionalLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Z=k.shadow,J=i.get(k);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,s.directionalShadow[E]=J,s.directionalShadowMap[E]=te,s.directionalShadowMatrix[E]=k.shadow.matrix,U++}s.directional[E]=W,E++}else if(k.isSpotLight){const W=t.get(k);W.position.setFromMatrixPosition(k.matrixWorld),W.color.copy(Y).multiplyScalar(me),W.distance=ve,W.coneCos=Math.cos(k.angle),W.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),W.decay=k.decay,s.spot[N]=W;const Z=k.shadow;if(k.map&&(s.spotLightMap[O]=k.map,O++,Z.updateMatrices(k),k.castShadow&&D++),s.spotLightMatrix[N]=Z.matrix,k.castShadow){const J=i.get(k);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,s.spotShadow[N]=J,s.spotShadowMap[N]=te,C++}N++}else if(k.isRectAreaLight){const W=t.get(k);W.color.copy(Y).multiplyScalar(me),W.halfWidth.set(k.width*.5,0,0),W.halfHeight.set(0,k.height*.5,0),s.rectArea[b]=W,b++}else if(k.isPointLight){const W=t.get(k);if(W.color.copy(k.color).multiplyScalar(k.intensity),W.distance=k.distance,W.decay=k.decay,k.castShadow){const Z=k.shadow,J=i.get(k);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,s.pointShadow[A]=J,s.pointShadowMap[A]=te,s.pointShadowMatrix[A]=k.shadow.matrix,B++}s.point[A]=W,A++}else if(k.isHemisphereLight){const W=t.get(k);W.skyColor.copy(k.color).multiplyScalar(me),W.groundColor.copy(k.groundColor).multiplyScalar(me),s.hemi[M]=W,M++}}b>0&&(l.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ke.LTC_FLOAT_1,s.rectAreaLTC2=Ke.LTC_FLOAT_2):(s.rectAreaLTC1=Ke.LTC_HALF_1,s.rectAreaLTC2=Ke.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=_,s.ambient[2]=v;const S=s.hash;(S.directionalLength!==E||S.pointLength!==A||S.spotLength!==N||S.rectAreaLength!==b||S.hemiLength!==M||S.numDirectionalShadows!==U||S.numPointShadows!==B||S.numSpotShadows!==C||S.numSpotMaps!==O||S.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=N,s.rectArea.length=b,s.point.length=A,s.hemi.length=M,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=B,s.pointShadowMap.length=B,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=B,s.spotLightMatrix.length=C+O-D,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=z,S.directionalLength=E,S.pointLength=A,S.spotLength=N,S.rectAreaLength=b,S.hemiLength=M,S.numDirectionalShadows=U,S.numPointShadows=B,S.numSpotShadows=C,S.numSpotMaps=O,S.numLightProbes=z,s.version=Iw++)}function m(g,y){let _=0,v=0,E=0,A=0,N=0;const b=y.matrixWorldInverse;for(let M=0,U=g.length;M<U;M++){const B=g[M];if(B.isDirectionalLight){const C=s.directional[_];C.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(b),_++}else if(B.isSpotLight){const C=s.spot[E];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(b),C.direction.setFromMatrixPosition(B.matrixWorld),o.setFromMatrixPosition(B.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(b),E++}else if(B.isRectAreaLight){const C=s.rectArea[A];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(b),d.identity(),f.copy(B.matrixWorld),f.premultiply(b),d.extractRotation(f),C.halfWidth.set(B.width*.5,0,0),C.halfHeight.set(0,B.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),A++}else if(B.isPointLight){const C=s.point[v];C.position.setFromMatrixPosition(B.matrixWorld),C.position.applyMatrix4(b),v++}else if(B.isHemisphereLight){const C=s.hemi[N];C.direction.setFromMatrixPosition(B.matrixWorld),C.direction.transformDirection(b),N++}}}return{setup:p,setupView:m,state:s}}function J_(l){const t=new Fw(l),i=[],s=[],o=[];function f(v){_.camera=v,i.length=0,s.length=0,o.length=0}function d(v){i.push(v)}function p(v){s.push(v)}function m(v){o.push(v)}function g(){t.setup(i)}function y(v){t.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:f,state:_,setupLights:g,setupLightsView:y,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function Bw(l){let t=new WeakMap;function i(o,f=0){const d=t.get(o);let p;return d===void 0?(p=new J_(l),t.set(o,[p])):f>=d.length?(p=new J_(l),d.push(p)):p=d[f],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const Hw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vw=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],jw=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],$_=new ln,To=new le,fp=new le;function kw(l,t,i){let s=new vm;const o=new Nt,f=new Nt,d=new cn,p=new JE,m=new $E,g={},y=i.maxTextureSize,_={[yr]:ai,[ai]:yr,[Na]:Na},v=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Hw,fragmentShader:Gw}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const A=new Dn;A.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new Wt(A,v),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nu;let M=this.type;this.render=function(D,z,S){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||D.length===0)return;this.type===G1&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Nu);const L=l.getRenderTarget(),j=l.getActiveCubeFace(),k=l.getActiveMipmapLevel(),Y=l.state;Y.setBlending(Ua),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const me=M!==this.type;me&&z.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach(te=>te.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,te=D.length;ve<te;ve++){const W=D[ve],Z=W.shadow;if(Z===void 0){pt("WebGLShadowMap:",W,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const J=Z.getFrameExtents();o.multiply(J),f.copy(Z.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(f.x=Math.floor(y/J.x),o.x=f.x*J.x,Z.mapSize.x=f.x),o.y>y&&(f.y=Math.floor(y/J.y),o.y=f.y*J.y,Z.mapSize.y=f.y));const Me=l.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Me,Z.map===null||me===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Ao){if(W.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new oa(o.x,o.y,{format:as,type:Oa,minFilter:Vn,magFilter:Vn,generateMipmaps:!1}),Z.map.texture.name=W.name+".shadowMap",Z.map.depthTexture=new gl(o.x,o.y,ra),Z.map.depthTexture.name=W.name+".shadowMapDepth",Z.map.depthTexture.format=Pa,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Fn,Z.map.depthTexture.magFilter=Fn}else W.isPointLight?(Z.map=new Iy(o.x),Z.map.depthTexture=new qE(o.x,ca)):(Z.map=new oa(o.x,o.y),Z.map.depthTexture=new gl(o.x,o.y,ca)),Z.map.depthTexture.name=W.name+".shadowMap",Z.map.depthTexture.format=Pa,this.type===Nu?(Z.map.depthTexture.compareFunction=Me?mm:pm,Z.map.depthTexture.minFilter=Vn,Z.map.depthTexture.magFilter=Vn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Fn,Z.map.depthTexture.magFilter=Fn);Z.camera.updateProjectionMatrix()}const H=Z.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<H;F++){if(Z.map.isWebGLCubeRenderTarget)l.setRenderTarget(Z.map,F),l.clear();else{F===0&&(l.setRenderTarget(Z.map),l.clear());const _e=Z.getViewport(F);d.set(f.x*_e.x,f.y*_e.y,f.x*_e.z,f.y*_e.w),Y.viewport(d)}if(W.isPointLight){const _e=Z.camera,Ne=Z.matrix,I=W.distance||_e.far;I!==_e.far&&(_e.far=I,_e.updateProjectionMatrix()),To.setFromMatrixPosition(W.matrixWorld),_e.position.copy(To),fp.copy(_e.position),fp.add(Vw[F]),_e.up.copy(jw[F]),_e.lookAt(fp),_e.updateMatrixWorld(),Ne.makeTranslation(-To.x,-To.y,-To.z),$_.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),Z._frustum.setFromProjectionMatrix($_,_e.coordinateSystem,_e.reversedDepth)}else Z.updateMatrices(W);s=Z.getFrustum(),C(z,S,Z.camera,W,this.type)}Z.isPointLightShadow!==!0&&this.type===Ao&&U(Z,S),Z.needsUpdate=!1}M=this.type,b.needsUpdate=!1,l.setRenderTarget(L,j,k)};function U(D,z){const S=t.update(N);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,E.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new oa(o.x,o.y,{format:as,type:Oa})),v.uniforms.shadow_pass.value=D.map.depthTexture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,l.setRenderTarget(D.mapPass),l.clear(),l.renderBufferDirect(z,null,S,v,N,null),E.uniforms.shadow_pass.value=D.mapPass.texture,E.uniforms.resolution.value=D.mapSize,E.uniforms.radius.value=D.radius,l.setRenderTarget(D.map),l.clear(),l.renderBufferDirect(z,null,S,E,N,null)}function B(D,z,S,L){let j=null;const k=S.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(k!==void 0)j=k;else if(j=S.isPointLight===!0?m:p,l.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=j.uuid,me=z.uuid;let ve=g[Y];ve===void 0&&(ve={},g[Y]=ve);let te=ve[me];te===void 0&&(te=j.clone(),ve[me]=te,z.addEventListener("dispose",O)),j=te}if(j.visible=z.visible,j.wireframe=z.wireframe,L===Ao?j.side=z.shadowSide!==null?z.shadowSide:z.side:j.side=z.shadowSide!==null?z.shadowSide:_[z.side],j.alphaMap=z.alphaMap,j.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,j.map=z.map,j.clipShadows=z.clipShadows,j.clippingPlanes=z.clippingPlanes,j.clipIntersection=z.clipIntersection,j.displacementMap=z.displacementMap,j.displacementScale=z.displacementScale,j.displacementBias=z.displacementBias,j.wireframeLinewidth=z.wireframeLinewidth,j.linewidth=z.linewidth,S.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const Y=l.properties.get(j);Y.light=S}return j}function C(D,z,S,L,j){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&j===Ao)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,D.matrixWorld);const me=t.update(D),ve=D.material;if(Array.isArray(ve)){const te=me.groups;for(let W=0,Z=te.length;W<Z;W++){const J=te[W],Me=ve[J.materialIndex];if(Me&&Me.visible){const H=B(D,Me,L,j);D.onBeforeShadow(l,D,z,S,me,H,J),l.renderBufferDirect(S,null,me,H,D,J),D.onAfterShadow(l,D,z,S,me,H,J)}}}else if(ve.visible){const te=B(D,ve,L,j);D.onBeforeShadow(l,D,z,S,me,te,null),l.renderBufferDirect(S,null,me,te,D,null),D.onAfterShadow(l,D,z,S,me,te,null)}}const Y=D.children;for(let me=0,ve=Y.length;me<ve;me++)C(Y[me],z,S,L,j)}function O(D){D.target.removeEventListener("dispose",O);for(const S in g){const L=g[S],j=D.target.uuid;j in L&&(L[j].dispose(),delete L[j])}}}function Xw(l,t){function i(){let Q=!1;const Ie=new cn;let Te=null;const Ge=new cn(0,0,0,0);return{setMask:function(Xe){Te!==Xe&&!Q&&(l.colorMask(Xe,Xe,Xe,Xe),Te=Xe)},setLocked:function(Xe){Q=Xe},setClear:function(Xe,Re,it,Ye,Vt){Vt===!0&&(Xe*=Ye,Re*=Ye,it*=Ye),Ie.set(Xe,Re,it,Ye),Ge.equals(Ie)===!1&&(l.clearColor(Xe,Re,it,Ye),Ge.copy(Ie))},reset:function(){Q=!1,Te=null,Ge.set(-1,0,0,0)}}}function s(){let Q=!1,Ie=!1,Te=null,Ge=null,Xe=null;return{setReversed:function(Re){if(Ie!==Re){const it=t.get("EXT_clip_control");Re?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Ie=Re;const Ye=Xe;Xe=null,this.setClear(Ye)}},getReversed:function(){return Ie},setTest:function(Re){Re?ee(l.DEPTH_TEST):Se(l.DEPTH_TEST)},setMask:function(Re){Te!==Re&&!Q&&(l.depthMask(Re),Te=Re)},setFunc:function(Re){if(Ie&&(Re=yE[Re]),Ge!==Re){switch(Re){case mp:l.depthFunc(l.NEVER);break;case gp:l.depthFunc(l.ALWAYS);break;case xp:l.depthFunc(l.LESS);break;case pl:l.depthFunc(l.LEQUAL);break;case vp:l.depthFunc(l.EQUAL);break;case _p:l.depthFunc(l.GEQUAL);break;case yp:l.depthFunc(l.GREATER);break;case bp:l.depthFunc(l.NOTEQUAL);break;default:l.depthFunc(l.LEQUAL)}Ge=Re}},setLocked:function(Re){Q=Re},setClear:function(Re){Xe!==Re&&(Xe=Re,Ie&&(Re=1-Re),l.clearDepth(Re))},reset:function(){Q=!1,Te=null,Ge=null,Xe=null,Ie=!1}}}function o(){let Q=!1,Ie=null,Te=null,Ge=null,Xe=null,Re=null,it=null,Ye=null,Vt=null;return{setTest:function(Et){Q||(Et?ee(l.STENCIL_TEST):Se(l.STENCIL_TEST))},setMask:function(Et){Ie!==Et&&!Q&&(l.stencilMask(Et),Ie=Et)},setFunc:function(Et,xi,vi){(Te!==Et||Ge!==xi||Xe!==vi)&&(l.stencilFunc(Et,xi,vi),Te=Et,Ge=xi,Xe=vi)},setOp:function(Et,xi,vi){(Re!==Et||it!==xi||Ye!==vi)&&(l.stencilOp(Et,xi,vi),Re=Et,it=xi,Ye=vi)},setLocked:function(Et){Q=Et},setClear:function(Et){Vt!==Et&&(l.clearStencil(Et),Vt=Et)},reset:function(){Q=!1,Ie=null,Te=null,Ge=null,Xe=null,Re=null,it=null,Ye=null,Vt=null}}}const f=new i,d=new s,p=new o,m=new WeakMap,g=new WeakMap;let y={},_={},v={},E=new WeakMap,A=[],N=null,b=!1,M=null,U=null,B=null,C=null,O=null,D=null,z=null,S=new Ct(0,0,0),L=0,j=!1,k=null,Y=null,me=null,ve=null,te=null;const W=l.getParameter(l.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const Me=l.getParameter(l.VERSION);Me.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Me)[1]),Z=J>=1):Me.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),Z=J>=2);let H=null,F={};const _e=l.getParameter(l.SCISSOR_BOX),Ne=l.getParameter(l.VIEWPORT),I=new cn().fromArray(_e),ae=new cn().fromArray(Ne);function X(Q,Ie,Te,Ge){const Xe=new Uint8Array(4),Re=l.createTexture();l.bindTexture(Q,Re),l.texParameteri(Q,l.TEXTURE_MIN_FILTER,l.NEAREST),l.texParameteri(Q,l.TEXTURE_MAG_FILTER,l.NEAREST);for(let it=0;it<Te;it++)Q===l.TEXTURE_3D||Q===l.TEXTURE_2D_ARRAY?l.texImage3D(Ie,0,l.RGBA,1,1,Ge,0,l.RGBA,l.UNSIGNED_BYTE,Xe):l.texImage2D(Ie+it,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,Xe);return Re}const V={};V[l.TEXTURE_2D]=X(l.TEXTURE_2D,l.TEXTURE_2D,1),V[l.TEXTURE_CUBE_MAP]=X(l.TEXTURE_CUBE_MAP,l.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[l.TEXTURE_2D_ARRAY]=X(l.TEXTURE_2D_ARRAY,l.TEXTURE_2D_ARRAY,1,1),V[l.TEXTURE_3D]=X(l.TEXTURE_3D,l.TEXTURE_3D,1,1),f.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ee(l.DEPTH_TEST),d.setFunc(pl),Ue(!1),Oe(Zv),ee(l.CULL_FACE),ke(Ua);function ee(Q){y[Q]!==!0&&(l.enable(Q),y[Q]=!0)}function Se(Q){y[Q]!==!1&&(l.disable(Q),y[Q]=!1)}function we(Q,Ie){return v[Q]!==Ie?(l.bindFramebuffer(Q,Ie),v[Q]=Ie,Q===l.DRAW_FRAMEBUFFER&&(v[l.FRAMEBUFFER]=Ie),Q===l.FRAMEBUFFER&&(v[l.DRAW_FRAMEBUFFER]=Ie),!0):!1}function ge(Q,Ie){let Te=A,Ge=!1;if(Q){Te=E.get(Ie),Te===void 0&&(Te=[],E.set(Ie,Te));const Xe=Q.textures;if(Te.length!==Xe.length||Te[0]!==l.COLOR_ATTACHMENT0){for(let Re=0,it=Xe.length;Re<it;Re++)Te[Re]=l.COLOR_ATTACHMENT0+Re;Te.length=Xe.length,Ge=!0}}else Te[0]!==l.BACK&&(Te[0]=l.BACK,Ge=!0);Ge&&l.drawBuffers(Te)}function Ce(Q){return N!==Q?(l.useProgram(Q),N=Q,!0):!1}const Pe={[Qr]:l.FUNC_ADD,[j1]:l.FUNC_SUBTRACT,[k1]:l.FUNC_REVERSE_SUBTRACT};Pe[X1]=l.MIN,Pe[q1]=l.MAX;const Be={[W1]:l.ZERO,[Y1]:l.ONE,[Z1]:l.SRC_COLOR,[hp]:l.SRC_ALPHA,[tE]:l.SRC_ALPHA_SATURATE,[$1]:l.DST_COLOR,[Q1]:l.DST_ALPHA,[K1]:l.ONE_MINUS_SRC_COLOR,[pp]:l.ONE_MINUS_SRC_ALPHA,[eE]:l.ONE_MINUS_DST_COLOR,[J1]:l.ONE_MINUS_DST_ALPHA,[nE]:l.CONSTANT_COLOR,[iE]:l.ONE_MINUS_CONSTANT_COLOR,[aE]:l.CONSTANT_ALPHA,[rE]:l.ONE_MINUS_CONSTANT_ALPHA};function ke(Q,Ie,Te,Ge,Xe,Re,it,Ye,Vt,Et){if(Q===Ua){b===!0&&(Se(l.BLEND),b=!1);return}if(b===!1&&(ee(l.BLEND),b=!0),Q!==V1){if(Q!==M||Et!==j){if((U!==Qr||O!==Qr)&&(l.blendEquation(l.FUNC_ADD),U=Qr,O=Qr),Et)switch(Q){case ul:l.blendFuncSeparate(l.ONE,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case Kv:l.blendFunc(l.ONE,l.ONE);break;case Qv:l.blendFuncSeparate(l.ZERO,l.ONE_MINUS_SRC_COLOR,l.ZERO,l.ONE);break;case Jv:l.blendFuncSeparate(l.DST_COLOR,l.ONE_MINUS_SRC_ALPHA,l.ZERO,l.ONE);break;default:Ht("WebGLState: Invalid blending: ",Q);break}else switch(Q){case ul:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA);break;case Kv:l.blendFuncSeparate(l.SRC_ALPHA,l.ONE,l.ONE,l.ONE);break;case Qv:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jv:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",Q);break}B=null,C=null,D=null,z=null,S.set(0,0,0),L=0,M=Q,j=Et}return}Xe=Xe||Ie,Re=Re||Te,it=it||Ge,(Ie!==U||Xe!==O)&&(l.blendEquationSeparate(Pe[Ie],Pe[Xe]),U=Ie,O=Xe),(Te!==B||Ge!==C||Re!==D||it!==z)&&(l.blendFuncSeparate(Be[Te],Be[Ge],Be[Re],Be[it]),B=Te,C=Ge,D=Re,z=it),(Ye.equals(S)===!1||Vt!==L)&&(l.blendColor(Ye.r,Ye.g,Ye.b,Vt),S.copy(Ye),L=Vt),M=Q,j=!1}function Ve(Q,Ie){Q.side===Na?Se(l.CULL_FACE):ee(l.CULL_FACE);let Te=Q.side===ai;Ie&&(Te=!Te),Ue(Te),Q.blending===ul&&Q.transparent===!1?ke(Ua):ke(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),d.setFunc(Q.depthFunc),d.setTest(Q.depthTest),d.setMask(Q.depthWrite),f.setMask(Q.colorWrite);const Ge=Q.stencilWrite;p.setTest(Ge),Ge&&(p.setMask(Q.stencilWriteMask),p.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),p.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),ft(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?ee(l.SAMPLE_ALPHA_TO_COVERAGE):Se(l.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(Q){k!==Q&&(Q?l.frontFace(l.CW):l.frontFace(l.CCW),k=Q)}function Oe(Q){Q!==B1?(ee(l.CULL_FACE),Q!==Y&&(Q===Zv?l.cullFace(l.BACK):Q===H1?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK))):Se(l.CULL_FACE),Y=Q}function ot(Q){Q!==me&&(Z&&l.lineWidth(Q),me=Q)}function ft(Q,Ie,Te){Q?(ee(l.POLYGON_OFFSET_FILL),(ve!==Ie||te!==Te)&&(ve=Ie,te=Te,d.getReversed()&&(Ie=-Ie),l.polygonOffset(Ie,Te))):Se(l.POLYGON_OFFSET_FILL)}function mt(Q){Q?ee(l.SCISSOR_TEST):Se(l.SCISSOR_TEST)}function wt(Q){Q===void 0&&(Q=l.TEXTURE0+W-1),H!==Q&&(l.activeTexture(Q),H=Q)}function K(Q,Ie,Te){Te===void 0&&(H===null?Te=l.TEXTURE0+W-1:Te=H);let Ge=F[Te];Ge===void 0&&(Ge={type:void 0,texture:void 0},F[Te]=Ge),(Ge.type!==Q||Ge.texture!==Ie)&&(H!==Te&&(l.activeTexture(Te),H=Te),l.bindTexture(Q,Ie||V[Q]),Ge.type=Q,Ge.texture=Ie)}function Lt(){const Q=F[H];Q!==void 0&&Q.type!==void 0&&(l.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function gt(){try{l.compressedTexImage2D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function P(){try{l.compressedTexImage3D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function T(){try{l.texSubImage2D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function ie(){try{l.texSubImage3D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function oe(){try{l.compressedTexSubImage2D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function xe(){try{l.compressedTexSubImage3D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function De(){try{l.texStorage2D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function ze(){try{l.texStorage3D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function ye(){try{l.texImage2D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function be(){try{l.texImage3D(...arguments)}catch(Q){Ht("WebGLState:",Q)}}function Le(Q){return _[Q]!==void 0?_[Q]:l.getParameter(Q)}function $e(Q,Ie){_[Q]!==Ie&&(l.pixelStorei(Q,Ie),_[Q]=Ie)}function He(Q){I.equals(Q)===!1&&(l.scissor(Q.x,Q.y,Q.z,Q.w),I.copy(Q))}function Fe(Q){ae.equals(Q)===!1&&(l.viewport(Q.x,Q.y,Q.z,Q.w),ae.copy(Q))}function qe(Q,Ie){let Te=g.get(Ie);Te===void 0&&(Te=new WeakMap,g.set(Ie,Te));let Ge=Te.get(Q);Ge===void 0&&(Ge=l.getUniformBlockIndex(Ie,Q.name),Te.set(Q,Ge))}function st(Q,Ie){const Ge=g.get(Ie).get(Q);m.get(Ie)!==Ge&&(l.uniformBlockBinding(Ie,Ge,Q.__bindingPointIndex),m.set(Ie,Ge))}function dt(){l.disable(l.BLEND),l.disable(l.CULL_FACE),l.disable(l.DEPTH_TEST),l.disable(l.POLYGON_OFFSET_FILL),l.disable(l.SCISSOR_TEST),l.disable(l.STENCIL_TEST),l.disable(l.SAMPLE_ALPHA_TO_COVERAGE),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ONE,l.ZERO),l.blendFuncSeparate(l.ONE,l.ZERO,l.ONE,l.ZERO),l.blendColor(0,0,0,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(l.LESS),d.setReversed(!1),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(l.ALWAYS,0,4294967295),l.stencilOp(l.KEEP,l.KEEP,l.KEEP),l.clearStencil(0),l.cullFace(l.BACK),l.frontFace(l.CCW),l.polygonOffset(0,0),l.activeTexture(l.TEXTURE0),l.bindFramebuffer(l.FRAMEBUFFER,null),l.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),l.bindFramebuffer(l.READ_FRAMEBUFFER,null),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),l.pixelStorei(l.PACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_ALIGNMENT,4),l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,!1),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,l.BROWSER_DEFAULT_WEBGL),l.pixelStorei(l.PACK_ROW_LENGTH,0),l.pixelStorei(l.PACK_SKIP_PIXELS,0),l.pixelStorei(l.PACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_ROW_LENGTH,0),l.pixelStorei(l.UNPACK_IMAGE_HEIGHT,0),l.pixelStorei(l.UNPACK_SKIP_PIXELS,0),l.pixelStorei(l.UNPACK_SKIP_ROWS,0),l.pixelStorei(l.UNPACK_SKIP_IMAGES,0),y={},_={},H=null,F={},v={},E=new WeakMap,A=[],N=null,b=!1,M=null,U=null,B=null,C=null,O=null,D=null,z=null,S=new Ct(0,0,0),L=0,j=!1,k=null,Y=null,me=null,ve=null,te=null,I.set(0,0,l.canvas.width,l.canvas.height),ae.set(0,0,l.canvas.width,l.canvas.height),f.reset(),d.reset(),p.reset()}return{buffers:{color:f,depth:d,stencil:p},enable:ee,disable:Se,bindFramebuffer:we,drawBuffers:ge,useProgram:Ce,setBlending:ke,setMaterial:Ve,setFlipSided:Ue,setCullFace:Oe,setLineWidth:ot,setPolygonOffset:ft,setScissorTest:mt,activeTexture:wt,bindTexture:K,unbindTexture:Lt,compressedTexImage2D:gt,compressedTexImage3D:P,texImage2D:ye,texImage3D:be,pixelStorei:$e,getParameter:Le,updateUBOMapping:qe,uniformBlockBinding:st,texStorage2D:De,texStorage3D:ze,texSubImage2D:T,texSubImage3D:ie,compressedTexSubImage2D:oe,compressedTexSubImage3D:xe,scissor:He,viewport:Fe,reset:dt}}function qw(l,t,i,s,o,f,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Nt,y=new WeakMap,_=new Set;let v;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function N(P,T){return A?new OffscreenCanvas(P,T):ju("canvas")}function b(P,T,ie){let oe=1;const xe=gt(P);if((xe.width>ie||xe.height>ie)&&(oe=ie/Math.max(xe.width,xe.height)),oe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const De=Math.floor(oe*xe.width),ze=Math.floor(oe*xe.height);v===void 0&&(v=N(De,ze));const ye=T?N(De,ze):v;return ye.width=De,ye.height=ze,ye.getContext("2d").drawImage(P,0,0,De,ze),pt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+De+"x"+ze+")."),ye}else return"data"in P&&pt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),P;return P}function M(P){return P.generateMipmaps}function U(P){l.generateMipmap(P)}function B(P){return P.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?l.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function C(P,T,ie,oe,xe,De=!1){if(P!==null){if(l[P]!==void 0)return l[P];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ze;oe&&(ze=t.get("EXT_texture_norm16"),ze||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ye=T;if(T===l.RED&&(ie===l.FLOAT&&(ye=l.R32F),ie===l.HALF_FLOAT&&(ye=l.R16F),ie===l.UNSIGNED_BYTE&&(ye=l.R8),ie===l.UNSIGNED_SHORT&&ze&&(ye=ze.R16_EXT),ie===l.SHORT&&ze&&(ye=ze.R16_SNORM_EXT)),T===l.RED_INTEGER&&(ie===l.UNSIGNED_BYTE&&(ye=l.R8UI),ie===l.UNSIGNED_SHORT&&(ye=l.R16UI),ie===l.UNSIGNED_INT&&(ye=l.R32UI),ie===l.BYTE&&(ye=l.R8I),ie===l.SHORT&&(ye=l.R16I),ie===l.INT&&(ye=l.R32I)),T===l.RG&&(ie===l.FLOAT&&(ye=l.RG32F),ie===l.HALF_FLOAT&&(ye=l.RG16F),ie===l.UNSIGNED_BYTE&&(ye=l.RG8),ie===l.UNSIGNED_SHORT&&ze&&(ye=ze.RG16_EXT),ie===l.SHORT&&ze&&(ye=ze.RG16_SNORM_EXT)),T===l.RG_INTEGER&&(ie===l.UNSIGNED_BYTE&&(ye=l.RG8UI),ie===l.UNSIGNED_SHORT&&(ye=l.RG16UI),ie===l.UNSIGNED_INT&&(ye=l.RG32UI),ie===l.BYTE&&(ye=l.RG8I),ie===l.SHORT&&(ye=l.RG16I),ie===l.INT&&(ye=l.RG32I)),T===l.RGB_INTEGER&&(ie===l.UNSIGNED_BYTE&&(ye=l.RGB8UI),ie===l.UNSIGNED_SHORT&&(ye=l.RGB16UI),ie===l.UNSIGNED_INT&&(ye=l.RGB32UI),ie===l.BYTE&&(ye=l.RGB8I),ie===l.SHORT&&(ye=l.RGB16I),ie===l.INT&&(ye=l.RGB32I)),T===l.RGBA_INTEGER&&(ie===l.UNSIGNED_BYTE&&(ye=l.RGBA8UI),ie===l.UNSIGNED_SHORT&&(ye=l.RGBA16UI),ie===l.UNSIGNED_INT&&(ye=l.RGBA32UI),ie===l.BYTE&&(ye=l.RGBA8I),ie===l.SHORT&&(ye=l.RGBA16I),ie===l.INT&&(ye=l.RGBA32I)),T===l.RGB&&(ie===l.UNSIGNED_SHORT&&ze&&(ye=ze.RGB16_EXT),ie===l.SHORT&&ze&&(ye=ze.RGB16_SNORM_EXT),ie===l.UNSIGNED_INT_5_9_9_9_REV&&(ye=l.RGB9_E5),ie===l.UNSIGNED_INT_10F_11F_11F_REV&&(ye=l.R11F_G11F_B10F)),T===l.RGBA){const be=De?Vu:It.getTransfer(xe);ie===l.FLOAT&&(ye=l.RGBA32F),ie===l.HALF_FLOAT&&(ye=l.RGBA16F),ie===l.UNSIGNED_BYTE&&(ye=be===Qt?l.SRGB8_ALPHA8:l.RGBA8),ie===l.UNSIGNED_SHORT&&ze&&(ye=ze.RGBA16_EXT),ie===l.SHORT&&ze&&(ye=ze.RGBA16_SNORM_EXT),ie===l.UNSIGNED_SHORT_4_4_4_4&&(ye=l.RGBA4),ie===l.UNSIGNED_SHORT_5_5_5_1&&(ye=l.RGB5_A1)}return(ye===l.R16F||ye===l.R32F||ye===l.RG16F||ye===l.RG32F||ye===l.RGBA16F||ye===l.RGBA32F)&&t.get("EXT_color_buffer_float"),ye}function O(P,T){let ie;return P?T===null||T===ca||T===Co?ie=l.DEPTH24_STENCIL8:T===ra?ie=l.DEPTH32F_STENCIL8:T===Ro&&(ie=l.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ca||T===Co?ie=l.DEPTH_COMPONENT24:T===ra?ie=l.DEPTH_COMPONENT32F:T===Ro&&(ie=l.DEPTH_COMPONENT16),ie}function D(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fn&&P.minFilter!==Vn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function z(P){const T=P.target;T.removeEventListener("dispose",z),L(T),T.isVideoTexture&&y.delete(T),T.isHTMLTexture&&_.delete(T)}function S(P){const T=P.target;T.removeEventListener("dispose",S),k(T)}function L(P){const T=s.get(P);if(T.__webglInit===void 0)return;const ie=P.source,oe=E.get(ie);if(oe){const xe=oe[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&j(P),Object.keys(oe).length===0&&E.delete(ie)}s.remove(P)}function j(P){const T=s.get(P);l.deleteTexture(T.__webglTexture);const ie=P.source,oe=E.get(ie);delete oe[T.__cacheKey],d.memory.textures--}function k(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(T.__webglFramebuffer[oe]))for(let xe=0;xe<T.__webglFramebuffer[oe].length;xe++)l.deleteFramebuffer(T.__webglFramebuffer[oe][xe]);else l.deleteFramebuffer(T.__webglFramebuffer[oe]);T.__webglDepthbuffer&&l.deleteRenderbuffer(T.__webglDepthbuffer[oe])}else{if(Array.isArray(T.__webglFramebuffer))for(let oe=0;oe<T.__webglFramebuffer.length;oe++)l.deleteFramebuffer(T.__webglFramebuffer[oe]);else l.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&l.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&l.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let oe=0;oe<T.__webglColorRenderbuffer.length;oe++)T.__webglColorRenderbuffer[oe]&&l.deleteRenderbuffer(T.__webglColorRenderbuffer[oe]);T.__webglDepthRenderbuffer&&l.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ie=P.textures;for(let oe=0,xe=ie.length;oe<xe;oe++){const De=s.get(ie[oe]);De.__webglTexture&&(l.deleteTexture(De.__webglTexture),d.memory.textures--),s.remove(ie[oe])}s.remove(P)}let Y=0;function me(){Y=0}function ve(){return Y}function te(P){Y=P}function W(){const P=Y;return P>=o.maxTextures&&pt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),Y+=1,P}function Z(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function J(P,T){const ie=s.get(P);if(P.isVideoTexture&&K(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ie.__version!==P.version){const oe=P.image;if(oe===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(ie,P,T);return}}else P.isExternalTexture&&(ie.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(l.TEXTURE_2D,ie.__webglTexture,l.TEXTURE0+T)}function Me(P,T){const ie=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){Se(ie,P,T);return}else P.isExternalTexture&&(ie.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(l.TEXTURE_2D_ARRAY,ie.__webglTexture,l.TEXTURE0+T)}function H(P,T){const ie=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ie.__version!==P.version){Se(ie,P,T);return}i.bindTexture(l.TEXTURE_3D,ie.__webglTexture,l.TEXTURE0+T)}function F(P,T){const ie=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&ie.__version!==P.version){we(ie,P,T);return}i.bindTexture(l.TEXTURE_CUBE_MAP,ie.__webglTexture,l.TEXTURE0+T)}const _e={[Mp]:l.REPEAT,[Da]:l.CLAMP_TO_EDGE,[Sp]:l.MIRRORED_REPEAT},Ne={[Fn]:l.NEAREST,[oE]:l.NEAREST_MIPMAP_NEAREST,[iu]:l.NEAREST_MIPMAP_LINEAR,[Vn]:l.LINEAR,[Lh]:l.LINEAR_MIPMAP_NEAREST,[es]:l.LINEAR_MIPMAP_LINEAR},I={[fE]:l.NEVER,[gE]:l.ALWAYS,[dE]:l.LESS,[pm]:l.LEQUAL,[hE]:l.EQUAL,[mm]:l.GEQUAL,[pE]:l.GREATER,[mE]:l.NOTEQUAL};function ae(P,T){if(T.type===ra&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Vn||T.magFilter===Lh||T.magFilter===iu||T.magFilter===es||T.minFilter===Vn||T.minFilter===Lh||T.minFilter===iu||T.minFilter===es)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),l.texParameteri(P,l.TEXTURE_WRAP_S,_e[T.wrapS]),l.texParameteri(P,l.TEXTURE_WRAP_T,_e[T.wrapT]),(P===l.TEXTURE_3D||P===l.TEXTURE_2D_ARRAY)&&l.texParameteri(P,l.TEXTURE_WRAP_R,_e[T.wrapR]),l.texParameteri(P,l.TEXTURE_MAG_FILTER,Ne[T.magFilter]),l.texParameteri(P,l.TEXTURE_MIN_FILTER,Ne[T.minFilter]),T.compareFunction&&(l.texParameteri(P,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(P,l.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==iu&&T.minFilter!==es||T.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const ie=t.get("EXT_texture_filter_anisotropic");l.texParameterf(P,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function X(P,T){let ie=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const oe=T.source;let xe=E.get(oe);xe===void 0&&(xe={},E.set(oe,xe));const De=Z(T);if(De!==P.__cacheKey){xe[De]===void 0&&(xe[De]={texture:l.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),xe[De].usedTimes++;const ze=xe[P.__cacheKey];ze!==void 0&&(xe[P.__cacheKey].usedTimes--,ze.usedTimes===0&&j(T)),P.__cacheKey=De,P.__webglTexture=xe[De].texture}return ie}function V(P,T,ie){return Math.floor(Math.floor(P/ie)/T)}function ee(P,T,ie,oe){const De=P.updateRanges;if(De.length===0)i.texSubImage2D(l.TEXTURE_2D,0,0,0,T.width,T.height,ie,oe,T.data);else{De.sort(($e,He)=>$e.start-He.start);let ze=0;for(let $e=1;$e<De.length;$e++){const He=De[ze],Fe=De[$e],qe=He.start+He.count,st=V(Fe.start,T.width,4),dt=V(He.start,T.width,4);Fe.start<=qe+1&&st===dt&&V(Fe.start+Fe.count-1,T.width,4)===st?He.count=Math.max(He.count,Fe.start+Fe.count-He.start):(++ze,De[ze]=Fe)}De.length=ze+1;const ye=i.getParameter(l.UNPACK_ROW_LENGTH),be=i.getParameter(l.UNPACK_SKIP_PIXELS),Le=i.getParameter(l.UNPACK_SKIP_ROWS);i.pixelStorei(l.UNPACK_ROW_LENGTH,T.width);for(let $e=0,He=De.length;$e<He;$e++){const Fe=De[$e],qe=Math.floor(Fe.start/4),st=Math.ceil(Fe.count/4),dt=qe%T.width,Q=Math.floor(qe/T.width),Ie=st,Te=1;i.pixelStorei(l.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(l.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(l.TEXTURE_2D,0,dt,Q,Ie,Te,ie,oe,T.data)}P.clearUpdateRanges(),i.pixelStorei(l.UNPACK_ROW_LENGTH,ye),i.pixelStorei(l.UNPACK_SKIP_PIXELS,be),i.pixelStorei(l.UNPACK_SKIP_ROWS,Le)}}function Se(P,T,ie){let oe=l.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=l.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=l.TEXTURE_3D);const xe=X(P,T),De=T.source;i.bindTexture(oe,P.__webglTexture,l.TEXTURE0+ie);const ze=s.get(De);if(De.version!==ze.__version||xe===!0){if(i.activeTexture(l.TEXTURE0+ie),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Te=It.getPrimaries(It.workingColorSpace),Ge=T.colorSpace===xr?null:It.getPrimaries(T.colorSpace),Xe=T.colorSpace===xr||Te===Ge?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}i.pixelStorei(l.UNPACK_ALIGNMENT,T.unpackAlignment);let be=b(T.image,!1,o.maxTextureSize);be=Lt(T,be);const Le=f.convert(T.format,T.colorSpace),$e=f.convert(T.type);let He=C(T.internalFormat,Le,$e,T.normalized,T.colorSpace,T.isVideoTexture);ae(oe,T);let Fe;const qe=T.mipmaps,st=T.isVideoTexture!==!0,dt=ze.__version===void 0||xe===!0,Q=De.dataReady,Ie=D(T,be);if(T.isDepthTexture)He=O(T.format===ts,T.type),dt&&(st?i.texStorage2D(l.TEXTURE_2D,1,He,be.width,be.height):i.texImage2D(l.TEXTURE_2D,0,He,be.width,be.height,0,Le,$e,null));else if(T.isDataTexture)if(qe.length>0){st&&dt&&i.texStorage2D(l.TEXTURE_2D,Ie,He,qe[0].width,qe[0].height);for(let Te=0,Ge=qe.length;Te<Ge;Te++)Fe=qe[Te],st?Q&&i.texSubImage2D(l.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,Le,$e,Fe.data):i.texImage2D(l.TEXTURE_2D,Te,He,Fe.width,Fe.height,0,Le,$e,Fe.data);T.generateMipmaps=!1}else st?(dt&&i.texStorage2D(l.TEXTURE_2D,Ie,He,be.width,be.height),Q&&ee(T,be,Le,$e)):i.texImage2D(l.TEXTURE_2D,0,He,be.width,be.height,0,Le,$e,be.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&dt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ie,He,qe[0].width,qe[0].height,be.depth);for(let Te=0,Ge=qe.length;Te<Ge;Te++)if(Fe=qe[Te],T.format!==Vi)if(Le!==null)if(st){if(Q)if(T.layerUpdates.size>0){const Xe=N_(Fe.width,Fe.height,T.format,T.type);for(const Re of T.layerUpdates){const it=Fe.data.subarray(Re*Xe/Fe.data.BYTES_PER_ELEMENT,(Re+1)*Xe/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Te,0,0,Re,Fe.width,Fe.height,1,Le,it)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,Te,0,0,0,Fe.width,Fe.height,be.depth,Le,Fe.data)}else i.compressedTexImage3D(l.TEXTURE_2D_ARRAY,Te,He,Fe.width,Fe.height,be.depth,0,Fe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Q&&i.texSubImage3D(l.TEXTURE_2D_ARRAY,Te,0,0,0,Fe.width,Fe.height,be.depth,Le,$e,Fe.data):i.texImage3D(l.TEXTURE_2D_ARRAY,Te,He,Fe.width,Fe.height,be.depth,0,Le,$e,Fe.data)}else{st&&dt&&i.texStorage2D(l.TEXTURE_2D,Ie,He,qe[0].width,qe[0].height);for(let Te=0,Ge=qe.length;Te<Ge;Te++)Fe=qe[Te],T.format!==Vi?Le!==null?st?Q&&i.compressedTexSubImage2D(l.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,Le,Fe.data):i.compressedTexImage2D(l.TEXTURE_2D,Te,He,Fe.width,Fe.height,0,Fe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Q&&i.texSubImage2D(l.TEXTURE_2D,Te,0,0,Fe.width,Fe.height,Le,$e,Fe.data):i.texImage2D(l.TEXTURE_2D,Te,He,Fe.width,Fe.height,0,Le,$e,Fe.data)}else if(T.isDataArrayTexture)if(st){if(dt&&i.texStorage3D(l.TEXTURE_2D_ARRAY,Ie,He,be.width,be.height,be.depth),Q)if(T.layerUpdates.size>0){const Te=N_(be.width,be.height,T.format,T.type);for(const Ge of T.layerUpdates){const Xe=be.data.subarray(Ge*Te/be.data.BYTES_PER_ELEMENT,(Ge+1)*Te/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,Ge,be.width,be.height,1,Le,$e,Xe)}T.clearLayerUpdates()}else i.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Le,$e,be.data)}else i.texImage3D(l.TEXTURE_2D_ARRAY,0,He,be.width,be.height,be.depth,0,Le,$e,be.data);else if(T.isData3DTexture)st?(dt&&i.texStorage3D(l.TEXTURE_3D,Ie,He,be.width,be.height,be.depth),Q&&i.texSubImage3D(l.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Le,$e,be.data)):i.texImage3D(l.TEXTURE_3D,0,He,be.width,be.height,be.depth,0,Le,$e,be.data);else if(T.isFramebufferTexture){if(dt)if(st)i.texStorage2D(l.TEXTURE_2D,Ie,He,be.width,be.height);else{let Te=be.width,Ge=be.height;for(let Xe=0;Xe<Ie;Xe++)i.texImage2D(l.TEXTURE_2D,Xe,He,Te,Ge,0,Le,$e,null),Te>>=1,Ge>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in l){const Te=l.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),be.parentNode!==Te){Te.appendChild(be),_.add(T),Te.onpaint=Ge=>{const Xe=Ge.changedElements;for(const Re of _)Xe.includes(Re.image)&&(Re.needsUpdate=!0)},Te.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,be);else{const Xe=l.RGBA,Re=l.RGBA,it=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,Xe,Re,it,be)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(qe.length>0){if(st&&dt){const Te=gt(qe[0]);i.texStorage2D(l.TEXTURE_2D,Ie,He,Te.width,Te.height)}for(let Te=0,Ge=qe.length;Te<Ge;Te++)Fe=qe[Te],st?Q&&i.texSubImage2D(l.TEXTURE_2D,Te,0,0,Le,$e,Fe):i.texImage2D(l.TEXTURE_2D,Te,He,Le,$e,Fe);T.generateMipmaps=!1}else if(st){if(dt){const Te=gt(be);i.texStorage2D(l.TEXTURE_2D,Ie,He,Te.width,Te.height)}Q&&i.texSubImage2D(l.TEXTURE_2D,0,0,0,Le,$e,be)}else i.texImage2D(l.TEXTURE_2D,0,He,Le,$e,be);M(T)&&U(oe),ze.__version=De.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function we(P,T,ie){if(T.image.length!==6)return;const oe=X(P,T),xe=T.source;i.bindTexture(l.TEXTURE_CUBE_MAP,P.__webglTexture,l.TEXTURE0+ie);const De=s.get(xe);if(xe.version!==De.__version||oe===!0){i.activeTexture(l.TEXTURE0+ie);const ze=It.getPrimaries(It.workingColorSpace),ye=T.colorSpace===xr?null:It.getPrimaries(T.colorSpace),be=T.colorSpace===xr||ze===ye?l.NONE:l.BROWSER_DEFAULT_WEBGL;i.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(l.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,$e=T.image[0]&&T.image[0].isDataTexture,He=[];for(let Re=0;Re<6;Re++)!Le&&!$e?He[Re]=b(T.image[Re],!0,o.maxCubemapSize):He[Re]=$e?T.image[Re].image:T.image[Re],He[Re]=Lt(T,He[Re]);const Fe=He[0],qe=f.convert(T.format,T.colorSpace),st=f.convert(T.type),dt=C(T.internalFormat,qe,st,T.normalized,T.colorSpace),Q=T.isVideoTexture!==!0,Ie=De.__version===void 0||oe===!0,Te=xe.dataReady;let Ge=D(T,Fe);ae(l.TEXTURE_CUBE_MAP,T);let Xe;if(Le){Q&&Ie&&i.texStorage2D(l.TEXTURE_CUBE_MAP,Ge,dt,Fe.width,Fe.height);for(let Re=0;Re<6;Re++){Xe=He[Re].mipmaps;for(let it=0;it<Xe.length;it++){const Ye=Xe[it];T.format!==Vi?qe!==null?Q?Te&&i.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,0,0,Ye.width,Ye.height,qe,Ye.data):i.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,dt,Ye.width,Ye.height,0,Ye.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Te&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,0,0,Ye.width,Ye.height,qe,st,Ye.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it,dt,Ye.width,Ye.height,0,qe,st,Ye.data)}}}else{if(Xe=T.mipmaps,Q&&Ie){Xe.length>0&&Ge++;const Re=gt(He[0]);i.texStorage2D(l.TEXTURE_CUBE_MAP,Ge,dt,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if($e){Q?Te&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,He[Re].width,He[Re].height,qe,st,He[Re].data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,dt,He[Re].width,He[Re].height,0,qe,st,He[Re].data);for(let it=0;it<Xe.length;it++){const Vt=Xe[it].image[Re].image;Q?Te&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,0,0,Vt.width,Vt.height,qe,st,Vt.data):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,dt,Vt.width,Vt.height,0,qe,st,Vt.data)}}else{Q?Te&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,qe,st,He[Re]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,dt,qe,st,He[Re]);for(let it=0;it<Xe.length;it++){const Ye=Xe[it];Q?Te&&i.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,0,0,qe,st,Ye.image[Re]):i.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Re,it+1,dt,qe,st,Ye.image[Re])}}}M(T)&&U(l.TEXTURE_CUBE_MAP),De.__version=xe.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ge(P,T,ie,oe,xe,De){const ze=f.convert(ie.format,ie.colorSpace),ye=f.convert(ie.type),be=C(ie.internalFormat,ze,ye,ie.normalized,ie.colorSpace),Le=s.get(T),$e=s.get(ie);if($e.__renderTarget=T,!Le.__hasExternalTextures){const He=Math.max(1,T.width>>De),Fe=Math.max(1,T.height>>De);xe===l.TEXTURE_3D||xe===l.TEXTURE_2D_ARRAY?i.texImage3D(xe,De,be,He,Fe,T.depth,0,ze,ye,null):i.texImage2D(xe,De,be,He,Fe,0,ze,ye,null)}i.bindFramebuffer(l.FRAMEBUFFER,P),wt(T)?p.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,oe,xe,$e.__webglTexture,0,mt(T)):(xe===l.TEXTURE_2D||xe>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,oe,xe,$e.__webglTexture,De),i.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(P,T,ie){if(l.bindRenderbuffer(l.RENDERBUFFER,P),T.depthBuffer){const oe=T.depthTexture,xe=oe&&oe.isDepthTexture?oe.type:null,De=O(T.stencilBuffer,xe),ze=T.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;wt(T)?p.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,mt(T),De,T.width,T.height):ie?l.renderbufferStorageMultisample(l.RENDERBUFFER,mt(T),De,T.width,T.height):l.renderbufferStorage(l.RENDERBUFFER,De,T.width,T.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,ze,l.RENDERBUFFER,P)}else{const oe=T.textures;for(let xe=0;xe<oe.length;xe++){const De=oe[xe],ze=f.convert(De.format,De.colorSpace),ye=f.convert(De.type),be=C(De.internalFormat,ze,ye,De.normalized,De.colorSpace);wt(T)?p.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,mt(T),be,T.width,T.height):ie?l.renderbufferStorageMultisample(l.RENDERBUFFER,mt(T),be,T.width,T.height):l.renderbufferStorage(l.RENDERBUFFER,be,T.width,T.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Pe(P,T,ie){const oe=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(l.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=s.get(T.depthTexture);if(xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),xe.__webglTexture===void 0){xe.__webglTexture=l.createTexture(),i.bindTexture(l.TEXTURE_CUBE_MAP,xe.__webglTexture),ae(l.TEXTURE_CUBE_MAP,T.depthTexture);const Le=f.convert(T.depthTexture.format),$e=f.convert(T.depthTexture.type);let He;T.depthTexture.format===Pa?He=l.DEPTH_COMPONENT24:T.depthTexture.format===ts&&(He=l.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,He,T.width,T.height,0,Le,$e,null)}}else J(T.depthTexture,0);const De=xe.__webglTexture,ze=mt(T),ye=oe?l.TEXTURE_CUBE_MAP_POSITIVE_X+ie:l.TEXTURE_2D,be=T.depthTexture.format===ts?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(T.depthTexture.format===Pa)wt(T)?p.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,be,ye,De,0,ze):l.framebufferTexture2D(l.FRAMEBUFFER,be,ye,De,0);else if(T.depthTexture.format===ts)wt(T)?p.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,be,ye,De,0,ze):l.framebufferTexture2D(l.FRAMEBUFFER,be,ye,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(P){const T=s.get(P),ie=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const oe=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",xe)};oe.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=oe}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(ie)for(let oe=0;oe<6;oe++)Pe(T.__webglFramebuffer[oe],P,oe);else{const oe=P.texture.mipmaps;oe&&oe.length>0?Pe(T.__webglFramebuffer[0],P,0):Pe(T.__webglFramebuffer,P,0)}else if(ie){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(i.bindFramebuffer(l.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=l.createRenderbuffer(),Ce(T.__webglDepthbuffer[oe],P,!1);else{const xe=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,De=T.__webglDepthbuffer[oe];l.bindRenderbuffer(l.RENDERBUFFER,De),l.framebufferRenderbuffer(l.FRAMEBUFFER,xe,l.RENDERBUFFER,De)}}else{const oe=P.texture.mipmaps;if(oe&&oe.length>0?i.bindFramebuffer(l.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(l.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=l.createRenderbuffer(),Ce(T.__webglDepthbuffer,P,!1);else{const xe=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,De=T.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,De),l.framebufferRenderbuffer(l.FRAMEBUFFER,xe,l.RENDERBUFFER,De)}}i.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(P,T,ie){const oe=s.get(P);T!==void 0&&ge(oe.__webglFramebuffer,P,P.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),ie!==void 0&&Be(P)}function Ve(P){const T=P.texture,ie=s.get(P),oe=s.get(T);P.addEventListener("dispose",S);const xe=P.textures,De=P.isWebGLCubeRenderTarget===!0,ze=xe.length>1;if(ze||(oe.__webglTexture===void 0&&(oe.__webglTexture=l.createTexture()),oe.__version=T.version,d.memory.textures++),De){ie.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer[ye]=[];for(let be=0;be<T.mipmaps.length;be++)ie.__webglFramebuffer[ye][be]=l.createFramebuffer()}else ie.__webglFramebuffer[ye]=l.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)ie.__webglFramebuffer[ye]=l.createFramebuffer()}else ie.__webglFramebuffer=l.createFramebuffer();if(ze)for(let ye=0,be=xe.length;ye<be;ye++){const Le=s.get(xe[ye]);Le.__webglTexture===void 0&&(Le.__webglTexture=l.createTexture(),d.memory.textures++)}if(P.samples>0&&wt(P)===!1){ie.__webglMultisampledFramebuffer=l.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(l.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ye=0;ye<xe.length;ye++){const be=xe[ye];ie.__webglColorRenderbuffer[ye]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,ie.__webglColorRenderbuffer[ye]);const Le=f.convert(be.format,be.colorSpace),$e=f.convert(be.type),He=C(be.internalFormat,Le,$e,be.normalized,be.colorSpace,P.isXRRenderTarget===!0),Fe=mt(P);l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe,He,P.width,P.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+ye,l.RENDERBUFFER,ie.__webglColorRenderbuffer[ye])}l.bindRenderbuffer(l.RENDERBUFFER,null),P.depthBuffer&&(ie.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(ie.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(l.FRAMEBUFFER,null)}}if(De){i.bindTexture(l.TEXTURE_CUBE_MAP,oe.__webglTexture),ae(l.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ge(ie.__webglFramebuffer[ye][be],P,T,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+ye,be);else ge(ie.__webglFramebuffer[ye],P,T,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);M(T)&&U(l.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ze){for(let ye=0,be=xe.length;ye<be;ye++){const Le=xe[ye],$e=s.get(Le);let He=l.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(He=P.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(He,$e.__webglTexture),ae(He,Le),ge(ie.__webglFramebuffer,P,Le,l.COLOR_ATTACHMENT0+ye,He,0),M(Le)&&U(He)}i.unbindTexture()}else{let ye=l.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),i.bindTexture(ye,oe.__webglTexture),ae(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let be=0;be<T.mipmaps.length;be++)ge(ie.__webglFramebuffer[be],P,T,l.COLOR_ATTACHMENT0,ye,be);else ge(ie.__webglFramebuffer,P,T,l.COLOR_ATTACHMENT0,ye,0);M(T)&&U(ye),i.unbindTexture()}P.depthBuffer&&Be(P)}function Ue(P){const T=P.textures;for(let ie=0,oe=T.length;ie<oe;ie++){const xe=T[ie];if(M(xe)){const De=B(P),ze=s.get(xe).__webglTexture;i.bindTexture(De,ze),U(De),i.unbindTexture()}}}const Oe=[],ot=[];function ft(P){if(P.samples>0){if(wt(P)===!1){const T=P.textures,ie=P.width,oe=P.height;let xe=l.COLOR_BUFFER_BIT;const De=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,ze=s.get(P),ye=T.length>1;if(ye)for(let Le=0;Le<T.length;Le++)i.bindFramebuffer(l.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.RENDERBUFFER,null),i.bindFramebuffer(l.FRAMEBUFFER,ze.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.TEXTURE_2D,null,0);i.bindFramebuffer(l.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const be=P.texture.mipmaps;be&&be.length>0?i.bindFramebuffer(l.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):i.bindFramebuffer(l.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(xe|=l.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(xe|=l.STENCIL_BUFFER_BIT)),ye){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,ze.__webglColorRenderbuffer[Le]);const $e=s.get(T[Le]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,$e,0)}l.blitFramebuffer(0,0,ie,oe,0,0,ie,oe,xe,l.NEAREST),m===!0&&(Oe.length=0,ot.length=0,Oe.push(l.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Oe.push(De),ot.push(De),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,ot)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Oe))}if(i.bindFramebuffer(l.READ_FRAMEBUFFER,null),i.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),ye)for(let Le=0;Le<T.length;Le++){i.bindFramebuffer(l.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.RENDERBUFFER,ze.__webglColorRenderbuffer[Le]);const $e=s.get(T[Le]).__webglTexture;i.bindFramebuffer(l.FRAMEBUFFER,ze.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+Le,l.TEXTURE_2D,$e,0)}i.bindFramebuffer(l.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[T])}}}function mt(P){return Math.min(o.maxSamples,P.samples)}function wt(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function K(P){const T=d.render.frame;y.get(P)!==T&&(y.set(P,T),P.update())}function Lt(P,T){const ie=P.colorSpace,oe=P.format,xe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ie!==Gu&&ie!==xr&&(It.getTransfer(ie)===Qt?(oe!==Vi||xe!==gi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",ie)),T}function gt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(g.width=P.naturalWidth||P.width,g.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(g.width=P.displayWidth,g.height=P.displayHeight):(g.width=P.width,g.height=P.height),g}this.allocateTextureUnit=W,this.resetTextureUnits=me,this.getTextureUnits=ve,this.setTextureUnits=te,this.setTexture2D=J,this.setTexture2DArray=Me,this.setTexture3D=H,this.setTextureCube=F,this.rebindTextures=ke,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Ww(l,t){function i(s,o=xr){let f;const d=It.getTransfer(o);if(s===gi)return l.UNSIGNED_BYTE;if(s===cm)return l.UNSIGNED_SHORT_4_4_4_4;if(s===um)return l.UNSIGNED_SHORT_5_5_5_1;if(s===py)return l.UNSIGNED_INT_5_9_9_9_REV;if(s===my)return l.UNSIGNED_INT_10F_11F_11F_REV;if(s===dy)return l.BYTE;if(s===hy)return l.SHORT;if(s===Ro)return l.UNSIGNED_SHORT;if(s===om)return l.INT;if(s===ca)return l.UNSIGNED_INT;if(s===ra)return l.FLOAT;if(s===Oa)return l.HALF_FLOAT;if(s===gy)return l.ALPHA;if(s===xy)return l.RGB;if(s===Vi)return l.RGBA;if(s===Pa)return l.DEPTH_COMPONENT;if(s===ts)return l.DEPTH_STENCIL;if(s===vy)return l.RED;if(s===fm)return l.RED_INTEGER;if(s===as)return l.RG;if(s===dm)return l.RG_INTEGER;if(s===hm)return l.RGBA_INTEGER;if(s===Du||s===Uu||s===Lu||s===Ou)if(d===Qt)if(f=t.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Du)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Uu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ou)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=t.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Du)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Uu)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ou)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ep||s===Tp||s===Ap||s===wp)if(f=t.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Ep)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ap)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rp||s===Cp||s===Np||s===Dp||s===Up||s===Bu||s===Lp)if(f=t.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Rp||s===Cp)return d===Qt?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Np)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC;if(s===Dp)return f.COMPRESSED_R11_EAC;if(s===Up)return f.COMPRESSED_SIGNED_R11_EAC;if(s===Bu)return f.COMPRESSED_RG11_EAC;if(s===Lp)return f.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Op||s===Pp||s===Ip||s===zp||s===Fp||s===Bp||s===Hp||s===Gp||s===Vp||s===jp||s===kp||s===Xp||s===qp||s===Wp)if(f=t.get("WEBGL_compressed_texture_astc"),f!==null){if(s===Op)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ip)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===zp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Fp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Gp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Xp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===qp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wp)return d===Qt?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yp||s===Zp||s===Kp)if(f=t.get("EXT_texture_compression_bptc"),f!==null){if(s===Yp)return d===Qt?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Zp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Kp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qp||s===Jp||s===Hu||s===$p)if(f=t.get("EXT_texture_compression_rgtc"),f!==null){if(s===Qp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Jp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hu)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$p)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Co?l.UNSIGNED_INT_24_8:l[s]!==void 0?l[s]:null}return{convert:i}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Cy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ua({vertexShader:Yw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wt(new Zu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qw extends rs{constructor(t,i){super();const s=this;let o=null,f=1,d=null,p="local-floor",m=1,g=null,y=null,_=null,v=null,E=null,A=null;const N=typeof XRWebGLBinding<"u",b=new Kw,M={},U=i.getContextAttributes();let B=null,C=null;const O=[],D=[],z=new Nt;let S=null;const L=new ii;L.viewport=new cn;const j=new ii;j.viewport=new cn;const k=[L,j],Y=new sT;let me=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let V=O[X];return V===void 0&&(V=new Gh,O[X]=V),V.getTargetRaySpace()},this.getControllerGrip=function(X){let V=O[X];return V===void 0&&(V=new Gh,O[X]=V),V.getGripSpace()},this.getHand=function(X){let V=O[X];return V===void 0&&(V=new Gh,O[X]=V),V.getHandSpace()};function te(X){const V=D.indexOf(X.inputSource);if(V===-1)return;const ee=O[V];ee!==void 0&&(ee.update(X.inputSource,X.frame,g||d),ee.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",W),o.removeEventListener("inputsourceschange",Z);for(let X=0;X<O.length;X++){const V=D[X];V!==null&&(D[X]=null,O[X].disconnect(V))}me=null,ve=null,b.reset();for(const X in M)delete M[X];t.setRenderTarget(B),E=null,v=null,_=null,o=null,C=null,ae.stop(),s.isPresenting=!1,t.setPixelRatio(S),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){f=X,s.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){p=X,s.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(X){g=X},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return _===null&&N&&(_=new XRWebGLBinding(o,i)),_},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(B=t.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",W),o.addEventListener("inputsourceschange",Z),U.xrCompatible!==!0&&await i.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(z),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Se=null,we=null;U.depth&&(we=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ee=U.stencil?ts:Pa,Se=U.stencil?Co:ca);const ge={colorFormat:i.RGBA8,depthFormat:we,scaleFactor:f};_=this.getBinding(),v=_.createProjectionLayer(ge),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new oa(v.textureWidth,v.textureHeight,{format:Vi,type:gi,depthTexture:new gl(v.textureWidth,v.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ee={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:f};E=new XRWebGLLayer(o,i,ee),o.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new oa(E.framebufferWidth,E.framebufferHeight,{format:Vi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),g=null,d=await o.requestReferenceSpace(p),ae.setContext(o),ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(X){for(let V=0;V<X.removed.length;V++){const ee=X.removed[V],Se=D.indexOf(ee);Se>=0&&(D[Se]=null,O[Se].disconnect(ee))}for(let V=0;V<X.added.length;V++){const ee=X.added[V];let Se=D.indexOf(ee);if(Se===-1){for(let ge=0;ge<O.length;ge++)if(ge>=D.length){D.push(ee),Se=ge;break}else if(D[ge]===null){D[ge]=ee,Se=ge;break}if(Se===-1)break}const we=O[Se];we&&we.connect(ee)}}const J=new le,Me=new le;function H(X,V,ee){J.setFromMatrixPosition(V.matrixWorld),Me.setFromMatrixPosition(ee.matrixWorld);const Se=J.distanceTo(Me),we=V.projectionMatrix.elements,ge=ee.projectionMatrix.elements,Ce=we[14]/(we[10]-1),Pe=we[14]/(we[10]+1),Be=(we[9]+1)/we[5],ke=(we[9]-1)/we[5],Ve=(we[8]-1)/we[0],Ue=(ge[8]+1)/ge[0],Oe=Ce*Ve,ot=Ce*Ue,ft=Se/(-Ve+Ue),mt=ft*-Ve;if(V.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(mt),X.translateZ(ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),we[10]===-1)X.projectionMatrix.copy(V.projectionMatrix),X.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const wt=Ce+ft,K=Pe+ft,Lt=Oe-mt,gt=ot+(Se-mt),P=Be*Pe/K*wt,T=ke*Pe/K*wt;X.projectionMatrix.makePerspective(Lt,gt,P,T,wt,K),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function F(X,V){V===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(V.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let V=X.near,ee=X.far;b.texture!==null&&(b.depthNear>0&&(V=b.depthNear),b.depthFar>0&&(ee=b.depthFar)),Y.near=j.near=L.near=V,Y.far=j.far=L.far=ee,(me!==Y.near||ve!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),me=Y.near,ve=Y.far),Y.layers.mask=X.layers.mask|6,L.layers.mask=Y.layers.mask&-5,j.layers.mask=Y.layers.mask&-3;const Se=X.parent,we=Y.cameras;F(Y,Se);for(let ge=0;ge<we.length;ge++)F(we[ge],Se);we.length===2?H(Y,L,j):Y.projectionMatrix.copy(L.projectionMatrix),_e(X,Y,Se)};function _e(X,V,ee){ee===null?X.matrix.copy(V.matrixWorld):(X.matrix.copy(ee.matrixWorld),X.matrix.invert(),X.matrix.multiply(V.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(V.projectionMatrix),X.projectionMatrixInverse.copy(V.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=tm*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&E===null))return m},this.setFoveation=function(X){m=X,v!==null&&(v.fixedFoveation=X),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(Y)},this.getCameraTexture=function(X){return M[X]};let Ne=null;function I(X,V){if(y=V.getViewerPose(g||d),A=V,y!==null){const ee=y.views;E!==null&&(t.setRenderTargetFramebuffer(C,E.framebuffer),t.setRenderTarget(C));let Se=!1;ee.length!==Y.cameras.length&&(Y.cameras.length=0,Se=!0);for(let Pe=0;Pe<ee.length;Pe++){const Be=ee[Pe];let ke=null;if(E!==null)ke=E.getViewport(Be);else{const Ue=_.getViewSubImage(v,Be);ke=Ue.viewport,Pe===0&&(t.setRenderTargetTextures(C,Ue.colorTexture,Ue.depthStencilTexture),t.setRenderTarget(C))}let Ve=k[Pe];Ve===void 0&&(Ve=new ii,Ve.layers.enable(Pe),Ve.viewport=new cn,k[Pe]=Ve),Ve.matrix.fromArray(Be.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Be.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ke.x,ke.y,ke.width,ke.height),Pe===0&&(Y.matrix.copy(Ve.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Se===!0&&Y.cameras.push(Ve)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){_=s.getBinding();const Pe=_.getDepthInformation(ee[0]);Pe&&Pe.isValid&&Pe.texture&&b.init(Pe,o.renderState)}if(we&&we.includes("camera-access")&&N){t.state.unbindTexture(),_=s.getBinding();for(let Pe=0;Pe<ee.length;Pe++){const Be=ee[Pe].camera;if(Be){let ke=M[Be];ke||(ke=new Cy,M[Be]=ke);const Ve=_.getCameraImage(Be);ke.sourceTexture=Ve}}}}for(let ee=0;ee<O.length;ee++){const Se=D[ee],we=O[ee];Se!==null&&we!==void 0&&we.update(Se,V,g||d)}Ne&&Ne(X,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),A=null}const ae=new Oy;ae.setAnimationLoop(I),this.setAnimationLoop=function(X){Ne=X},this.dispose=function(){}}}const Jw=new ln,Gy=new yt;Gy.set(-1,0,0,0,1,0,0,0,1);function $w(l,t){function i(b,M){b.matrixAutoUpdate===!0&&b.updateMatrix(),M.value.copy(b.matrix)}function s(b,M){M.color.getRGB(b.fogColor.value,Ny(l)),M.isFog?(b.fogNear.value=M.near,b.fogFar.value=M.far):M.isFogExp2&&(b.fogDensity.value=M.density)}function o(b,M,U,B,C){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?f(b,M):M.isMeshLambertMaterial?(f(b,M),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(f(b,M),_(b,M)):M.isMeshPhongMaterial?(f(b,M),y(b,M),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(f(b,M),v(b,M),M.isMeshPhysicalMaterial&&E(b,M,C)):M.isMeshMatcapMaterial?(f(b,M),A(b,M)):M.isMeshDepthMaterial?f(b,M):M.isMeshDistanceMaterial?(f(b,M),N(b,M)):M.isMeshNormalMaterial?f(b,M):M.isLineBasicMaterial?(d(b,M),M.isLineDashedMaterial&&p(b,M)):M.isPointsMaterial?m(b,M,U,B):M.isSpriteMaterial?g(b,M):M.isShadowMaterial?(b.color.value.copy(M.color),b.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function f(b,M){b.opacity.value=M.opacity,M.color&&b.diffuse.value.copy(M.color),M.emissive&&b.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(b.map.value=M.map,i(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.bumpMap&&(b.bumpMap.value=M.bumpMap,i(M.bumpMap,b.bumpMapTransform),b.bumpScale.value=M.bumpScale,M.side===ai&&(b.bumpScale.value*=-1)),M.normalMap&&(b.normalMap.value=M.normalMap,i(M.normalMap,b.normalMapTransform),b.normalScale.value.copy(M.normalScale),M.side===ai&&b.normalScale.value.negate()),M.displacementMap&&(b.displacementMap.value=M.displacementMap,i(M.displacementMap,b.displacementMapTransform),b.displacementScale.value=M.displacementScale,b.displacementBias.value=M.displacementBias),M.emissiveMap&&(b.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,b.emissiveMapTransform)),M.specularMap&&(b.specularMap.value=M.specularMap,i(M.specularMap,b.specularMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest);const U=t.get(M),B=U.envMap,C=U.envMapRotation;B&&(b.envMap.value=B,b.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Gy),b.reflectivity.value=M.reflectivity,b.ior.value=M.ior,b.refractionRatio.value=M.refractionRatio),M.lightMap&&(b.lightMap.value=M.lightMap,b.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,b.lightMapTransform)),M.aoMap&&(b.aoMap.value=M.aoMap,b.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,b.aoMapTransform))}function d(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,M.map&&(b.map.value=M.map,i(M.map,b.mapTransform))}function p(b,M){b.dashSize.value=M.dashSize,b.totalSize.value=M.dashSize+M.gapSize,b.scale.value=M.scale}function m(b,M,U,B){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.size.value=M.size*U,b.scale.value=B*.5,M.map&&(b.map.value=M.map,i(M.map,b.uvTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function g(b,M){b.diffuse.value.copy(M.color),b.opacity.value=M.opacity,b.rotation.value=M.rotation,M.map&&(b.map.value=M.map,i(M.map,b.mapTransform)),M.alphaMap&&(b.alphaMap.value=M.alphaMap,i(M.alphaMap,b.alphaMapTransform)),M.alphaTest>0&&(b.alphaTest.value=M.alphaTest)}function y(b,M){b.specular.value.copy(M.specular),b.shininess.value=Math.max(M.shininess,1e-4)}function _(b,M){M.gradientMap&&(b.gradientMap.value=M.gradientMap)}function v(b,M){b.metalness.value=M.metalness,M.metalnessMap&&(b.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,b.metalnessMapTransform)),b.roughness.value=M.roughness,M.roughnessMap&&(b.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,b.roughnessMapTransform)),M.envMap&&(b.envMapIntensity.value=M.envMapIntensity)}function E(b,M,U){b.ior.value=M.ior,M.sheen>0&&(b.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),b.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(b.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,b.sheenColorMapTransform)),M.sheenRoughnessMap&&(b.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,b.sheenRoughnessMapTransform))),M.clearcoat>0&&(b.clearcoat.value=M.clearcoat,b.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(b.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,b.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(b.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ai&&b.clearcoatNormalScale.value.negate())),M.dispersion>0&&(b.dispersion.value=M.dispersion),M.iridescence>0&&(b.iridescence.value=M.iridescence,b.iridescenceIOR.value=M.iridescenceIOR,b.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(b.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,b.iridescenceMapTransform)),M.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),M.transmission>0&&(b.transmission.value=M.transmission,b.transmissionSamplerMap.value=U.texture,b.transmissionSamplerSize.value.set(U.width,U.height),M.transmissionMap&&(b.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,b.transmissionMapTransform)),b.thickness.value=M.thickness,M.thicknessMap&&(b.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=M.attenuationDistance,b.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(b.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(b.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=M.specularIntensity,b.specularColor.value.copy(M.specularColor),M.specularColorMap&&(b.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,b.specularColorMapTransform)),M.specularIntensityMap&&(b.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,M){M.matcap&&(b.matcap.value=M.matcap)}function N(b,M){const U=t.get(M).light;b.referencePosition.value.setFromMatrixPosition(U.matrixWorld),b.nearDistance.value=U.shadow.camera.near,b.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function eR(l,t,i,s){let o={},f={},d=[];const p=l.getParameter(l.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,O){const D=O.program;s.uniformBlockBinding(C,D)}function g(C,O){let D=o[C.id];D===void 0&&(b(C),D=y(C),o[C.id]=D,C.addEventListener("dispose",U));const z=O.program;s.updateUBOMapping(C,z);const S=t.render.frame;f[C.id]!==S&&(v(C),f[C.id]=S)}function y(C){const O=_();C.__bindingPointIndex=O;const D=l.createBuffer(),z=C.__size,S=C.usage;return l.bindBuffer(l.UNIFORM_BUFFER,D),l.bufferData(l.UNIFORM_BUFFER,z,S),l.bindBuffer(l.UNIFORM_BUFFER,null),l.bindBufferBase(l.UNIFORM_BUFFER,O,D),D}function _(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const O=o[C.id],D=C.uniforms,z=C.__cache;l.bindBuffer(l.UNIFORM_BUFFER,O);for(let S=0,L=D.length;S<L;S++){const j=D[S];if(Array.isArray(j))for(let k=0,Y=j.length;k<Y;k++)E(j[k],S,k,z);else E(j,S,0,z)}l.bindBuffer(l.UNIFORM_BUFFER,null)}function E(C,O,D,z){if(N(C,O,D,z)===!0){const S=C.__offset,L=C.value;if(Array.isArray(L)){let j=0;for(let k=0;k<L.length;k++){const Y=L[k],me=M(Y);A(Y,C.__data,j),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(j+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(L,C.__data,0);l.bufferSubData(l.UNIFORM_BUFFER,S,C.__data)}}function A(C,O,D){typeof C=="number"||typeof C=="boolean"?O[0]=C:C.isMatrix3?(O[0]=C.elements[0],O[1]=C.elements[1],O[2]=C.elements[2],O[3]=0,O[4]=C.elements[3],O[5]=C.elements[4],O[6]=C.elements[5],O[7]=0,O[8]=C.elements[6],O[9]=C.elements[7],O[10]=C.elements[8],O[11]=0):ArrayBuffer.isView(C)?O.set(new C.constructor(C.buffer,C.byteOffset,O.length)):C.toArray(O,D)}function N(C,O,D,z){const S=C.value,L=O+"_"+D;if(z[L]===void 0)return typeof S=="number"||typeof S=="boolean"?z[L]=S:ArrayBuffer.isView(S)?z[L]=S.slice():z[L]=S.clone(),!0;{const j=z[L];if(typeof S=="number"||typeof S=="boolean"){if(j!==S)return z[L]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(j.equals(S)===!1)return j.copy(S),!0}}return!1}function b(C){const O=C.uniforms;let D=0;const z=16;for(let L=0,j=O.length;L<j;L++){const k=Array.isArray(O[L])?O[L]:[O[L]];for(let Y=0,me=k.length;Y<me;Y++){const ve=k[Y],te=Array.isArray(ve.value)?ve.value:[ve.value];for(let W=0,Z=te.length;W<Z;W++){const J=te[W],Me=M(J),H=D%z,F=H%Me.boundary,_e=H+F;D+=F,_e!==0&&z-_e<Me.storage&&(D+=z-_e),ve.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=D,D+=Me.storage}}}const S=D%z;return S>0&&(D+=z-S),C.__size=D,C.__cache={},this}function M(C){const O={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(O.boundary=4,O.storage=4):C.isVector2?(O.boundary=8,O.storage=8):C.isVector3||C.isColor?(O.boundary=16,O.storage=12):C.isVector4?(O.boundary=16,O.storage=16):C.isMatrix3?(O.boundary=48,O.storage=48):C.isMatrix4?(O.boundary=64,O.storage=64):C.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(O.boundary=16,O.storage=C.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",C),O}function U(C){const O=C.target;O.removeEventListener("dispose",U);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),l.deleteBuffer(o[O.id]),delete o[O.id],delete f[O.id]}function B(){for(const C in o)l.deleteBuffer(o[C]);d=[],o={},f={}}return{bind:m,update:g,dispose:B}}const tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ia=null;function nR(){return ia===null&&(ia=new HE(tR,16,16,as,Oa),ia.name="DFG_LUT",ia.minFilter=Vn,ia.magFilter=Vn,ia.wrapS=Da,ia.wrapT=Da,ia.generateMipmaps=!1,ia.needsUpdate=!0),ia}class Vy{constructor(t={}){const{canvas:i=vE(),context:s=null,depth:o=!0,stencil:f=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:g=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:E=gi}=t;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const N=E,b=new Set([hm,dm,fm]),M=new Set([gi,ca,Ro,Co,cm,um]),U=new Uint32Array(4),B=new Int32Array(4),C=new le;let O=null,D=null;const z=[],S=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=la,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let k=!1,Y=null,me=null,ve=null,te=null;this._outputColorSpace=Ci;let W=0,Z=0,J=null,Me=-1,H=null;const F=new cn,_e=new cn;let Ne=null;const I=new Ct(0);let ae=0,X=i.width,V=i.height,ee=1,Se=null,we=null;const ge=new cn(0,0,X,V),Ce=new cn(0,0,X,V);let Pe=!1;const Be=new vm;let ke=!1,Ve=!1;const Ue=new ln,Oe=new le,ot=new cn,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function wt(){return J===null?ee:1}let K=s;function Lt(R,$){return i.getContext(R,$)}try{const R={alpha:!0,depth:o,stencil:f,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lm}`),i.addEventListener("webglcontextlost",Vt,!1),i.addEventListener("webglcontextrestored",Et,!1),i.addEventListener("webglcontextcreationerror",xi,!1),K===null){const $="webgl2";if(K=Lt($,R),K===null)throw Lt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Ht("WebGLRenderer: "+R.message),R}let gt,P,T,ie,oe,xe,De,ze,ye,be,Le,$e,He,Fe,qe,st,dt,Q,Ie,Te,Ge,Xe,Re;function it(){gt=new n3(K),gt.init(),Ge=new Ww(K,gt),P=new Y2(K,gt,t,Ge),T=new Xw(K,gt),P.reversedDepthBuffer&&v&&T.buffers.depth.setReversed(!0),me=K.createFramebuffer(),ve=K.createFramebuffer(),te=K.createFramebuffer(),ie=new r3(K),oe=new Dw,xe=new qw(K,gt,T,oe,P,Ge,ie),De=new t3(j),ze=new cT(K),Xe=new q2(K,ze),ye=new i3(K,ze,ie,Xe),be=new l3(K,ye,ze,Xe,ie),Q=new s3(K,P,xe),qe=new Z2(oe),Le=new Nw(j,De,gt,P,Xe,qe),$e=new $w(j,oe),He=new Lw,Fe=new Bw(gt),dt=new X2(j,De,T,be,A,m),st=new kw(j,be,P),Re=new eR(K,ie,P,T),Ie=new W2(K,gt,ie),Te=new a3(K,gt,ie),ie.programs=Le.programs,j.capabilities=P,j.extensions=gt,j.properties=oe,j.renderLists=He,j.shadowMap=st,j.state=T,j.info=ie}it(),N!==gi&&(L=new c3(N,i.width,i.height,p,o,f));const Ye=new Qw(j,K);this.xr=Ye,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(R){R!==void 0&&(ee=R,this.setSize(X,V,!1))},this.getSize=function(R){return R.set(X,V)},this.setSize=function(R,$,de=!0){if(Ye.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,V=$,i.width=Math.floor(R*ee),i.height=Math.floor($*ee),de===!0&&(i.style.width=R+"px",i.style.height=$+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(X*ee,V*ee).floor()},this.setDrawingBufferSize=function(R,$,de){X=R,V=$,ee=de,i.width=Math.floor(R*de),i.height=Math.floor($*de),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(N===gi){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,$,de,ue){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,$,de,ue),T.viewport(F.copy(ge).multiplyScalar(ee).round())},this.getScissor=function(R){return R.copy(Ce)},this.setScissor=function(R,$,de,ue){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,$,de,ue),T.scissor(_e.copy(Ce).multiplyScalar(ee).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(R){T.setScissorTest(Pe=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){we=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,de=!0){let ue=0;if(R){let he=!1;if(J!==null){const Ze=J.texture.format;he=b.has(Ze)}if(he){const Ze=J.texture.type,et=M.has(Ze),We=dt.getClearColor(),nt=dt.getClearAlpha(),lt=We.r,xt=We.g,vt=We.b;et?(U[0]=lt,U[1]=xt,U[2]=vt,U[3]=nt,K.clearBufferuiv(K.COLOR,0,U)):(B[0]=lt,B[1]=xt,B[2]=vt,B[3]=nt,K.clearBufferiv(K.COLOR,0,B))}else ue|=K.COLOR_BUFFER_BIT}$&&(ue|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ue|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&K.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Vt,!1),i.removeEventListener("webglcontextrestored",Et,!1),i.removeEventListener("webglcontextcreationerror",xi,!1),dt.dispose(),He.dispose(),Fe.dispose(),oe.dispose(),De.dispose(),be.dispose(),Xe.dispose(),Re.dispose(),Le.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Er),Ye.removeEventListener("sessionend",za),ji.stop()};function Vt(R){R.preventDefault(),i_("WebGLRenderer: Context Lost."),k=!0}function Et(){i_("WebGLRenderer: Context Restored."),k=!1;const R=ie.autoReset,$=st.enabled,de=st.autoUpdate,ue=st.needsUpdate,he=st.type;it(),ie.autoReset=R,st.enabled=$,st.autoUpdate=de,st.needsUpdate=ue,st.type=he}function xi(R){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function vi(R){const $=R.target;$.removeEventListener("dispose",vi),Ju($)}function Ju(R){ls(R),oe.remove(R)}function ls(R){const $=oe.get(R).programs;$!==void 0&&($.forEach(function(de){Le.releaseProgram(de)}),R.isShaderMaterial&&Le.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,de,ue,he,Ze){$===null&&($=ft);const et=he.isMesh&&he.matrixWorld.determinantAffine()<0,We=Tl(R,$,de,ue,he);T.setMaterial(ue,et);let nt=de.index,lt=1;if(ue.wireframe===!0){if(nt=ye.getWireframeAttribute(de),nt===void 0)return;lt=2}const xt=de.drawRange,vt=de.attributes.position;let rt=xt.start*lt,Ft=(xt.start+xt.count)*lt;Ze!==null&&(rt=Math.max(rt,Ze.start*lt),Ft=Math.min(Ft,(Ze.start+Ze.count)*lt)),nt!==null?(rt=Math.max(rt,0),Ft=Math.min(Ft,nt.count)):vt!=null&&(rt=Math.max(rt,0),Ft=Math.min(Ft,vt.count));const Jt=Ft-rt;if(Jt<0||Jt===1/0)return;Xe.setup(he,ue,We,de,nt);let St,Xt=Ie;if(nt!==null&&(St=ze.get(nt),Xt=Te,Xt.setIndex(St)),he.isMesh)ue.wireframe===!0?(T.setLineWidth(ue.wireframeLinewidth*wt()),Xt.setMode(K.LINES)):Xt.setMode(K.TRIANGLES);else if(he.isLine){let bn=ue.linewidth;bn===void 0&&(bn=1),T.setLineWidth(bn*wt()),he.isLineSegments?Xt.setMode(K.LINES):he.isLineLoop?Xt.setMode(K.LINE_LOOP):Xt.setMode(K.LINE_STRIP)}else he.isPoints?Xt.setMode(K.POINTS):he.isSprite&&Xt.setMode(K.TRIANGLES);if(he.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{const bn=he._multiDrawStarts,Je=he._multiDrawCounts,dn=he._multiDrawCount,Tt=nt?ze.get(nt).bytesPerElement:1,Kn=oe.get(ue).currentProgram.getUniforms();for(let ri=0;ri<dn;ri++)Kn.setValue(K,"_gl_DrawID",ri),Xt.render(bn[ri]/Tt,Je[ri])}else if(he.isInstancedMesh)Xt.renderInstances(rt,Jt,he.count);else if(de.isInstancedBufferGeometry){const bn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Je=Math.min(de.instanceCount,bn);Xt.renderInstances(rt,Jt,Je)}else Xt.render(rt,Jt)};function Sr(R,$,de){R.transparent===!0&&R.side===Na&&R.forceSinglePass===!1?(R.side=ai,R.needsUpdate=!0,Tr(R,$,de),R.side=yr,R.needsUpdate=!0,Tr(R,$,de),R.side=Na):Tr(R,$,de)}this.compile=function(R,$,de=null){de===null&&(de=R),D=Fe.get(de),D.init($),S.push(D),de.traverseVisible(function(he){he.isLight&&he.layers.test($.layers)&&(D.pushLight(he),he.castShadow&&D.pushShadow(he))}),R!==de&&R.traverseVisible(function(he){he.isLight&&he.layers.test($.layers)&&(D.pushLight(he),he.castShadow&&D.pushShadow(he))}),D.setupLights();const ue=new Set;return R.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;const Ze=he.material;if(Ze)if(Array.isArray(Ze))for(let et=0;et<Ze.length;et++){const We=Ze[et];Sr(We,de,he),ue.add(We)}else Sr(Ze,de,he),ue.add(Ze)}),D=S.pop(),ue},this.compileAsync=function(R,$,de=null){const ue=this.compile(R,$,de);return new Promise(he=>{function Ze(){if(ue.forEach(function(et){oe.get(et).currentProgram.isReady()&&ue.delete(et)}),ue.size===0){he(R);return}setTimeout(Ze,10)}gt.get("KHR_parallel_shader_compile")!==null?Ze():setTimeout(Ze,10)})};let Ia=null;function fa(R){Ia&&Ia(R)}function Er(){ji.stop()}function za(){ji.start()}const ji=new Oy;ji.setAnimationLoop(fa),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(R){Ia=R,Ye.setAnimationLoop(R),R===null?ji.stop():ji.start()},Ye.addEventListener("sessionstart",Er),Ye.addEventListener("sessionend",za),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Y!==null&&Y.renderStart(R,$);const de=Ye.enabled===!0&&Ye.isPresenting===!0,ue=L!==null&&(J===null||de)&&L.begin(j,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera($),$=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(j,R,$,J),D=Fe.get(R,S.length),D.init($),D.state.textureUnits=xe.getTextureUnits(),S.push(D),Ue.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Be.setFromProjectionMatrix(Ue,sa,$.reversedDepth),Ve=this.localClippingEnabled,ke=qe.init(this.clippingPlanes,Ve),O=He.get(R,z.length),O.init(),z.push(O),Ye.enabled===!0&&Ye.isPresenting===!0){const et=j.xr.getDepthSensingMesh();et!==null&&yl(et,$,-1/0,j.sortObjects)}yl(R,$,0,j.sortObjects),O.finish(),j.sortObjects===!0&&O.sort(Se,we,$.reversedDepth),mt=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,mt&&dt.addToRenderList(O,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&qe.beginShadows();const he=D.state.shadowsArray;if(st.render(he,R,$),ke===!0&&qe.endShadows(),(ue&&L.hasRenderPass())===!1){const et=O.opaque,We=O.transmissive;if(D.setupLights(),$.isArrayCamera){const nt=$.cameras;if(We.length>0)for(let lt=0,xt=nt.length;lt<xt;lt++){const vt=nt[lt];os(et,We,R,vt)}mt&&dt.render(R);for(let lt=0,xt=nt.length;lt<xt;lt++){const vt=nt[lt];bl(O,R,vt,vt.viewport)}}else We.length>0&&os(et,We,R,$),mt&&dt.render(R),bl(O,R,$)}J!==null&&Z===0&&(xe.updateMultisampleRenderTarget(J),xe.updateRenderTargetMipmap(J)),ue&&L.end(j),R.isScene===!0&&R.onAfterRender(j,R,$),Xe.resetDefaultState(),Me=-1,H=null,S.pop(),S.length>0?(D=S[S.length-1],xe.setTextureUnits(D.state.textureUnits),ke===!0&&qe.setGlobalState(j.clippingPlanes,D.state.camera)):D=null,z.pop(),z.length>0?O=z[z.length-1]:O=null,Y!==null&&Y.renderEnd()};function yl(R,$,de,ue){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){ue&&ot.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ue);const et=be.update(R),We=R.material;We.visible&&O.push(R,et,We,de,ot.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const et=be.update(R),We=R.material;if(ue&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ot.copy(R.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),ot.copy(et.boundingSphere.center)),ot.applyMatrix4(R.matrixWorld).applyMatrix4(Ue)),Array.isArray(We)){const nt=et.groups;for(let lt=0,xt=nt.length;lt<xt;lt++){const vt=nt[lt],rt=We[vt.materialIndex];rt&&rt.visible&&O.push(R,et,rt,de,ot.z,vt)}}else We.visible&&O.push(R,et,We,de,ot.z,null)}}const Ze=R.children;for(let et=0,We=Ze.length;et<We;et++)yl(Ze[et],$,de,ue)}function bl(R,$,de,ue){const{opaque:he,transmissive:Ze,transparent:et}=R;D.setupLightsView(de),ke===!0&&qe.setGlobalState(j.clippingPlanes,de),ue&&T.viewport(F.copy(ue)),he.length>0&&ki(he,$,de),Ze.length>0&&ki(Ze,$,de),et.length>0&&ki(et,$,de),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function os(R,$,de,ue){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ue.id]===void 0){const rt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ue.id]=new oa(1,1,{generateMipmaps:!0,type:rt?Oa:gi,minFilter:es,samples:Math.max(4,P.samples),stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Ze=D.state.transmissionRenderTarget[ue.id],et=ue.viewport||F;Ze.setSize(et.z*j.transmissionResolutionScale,et.w*j.transmissionResolutionScale);const We=j.getRenderTarget(),nt=j.getActiveCubeFace(),lt=j.getActiveMipmapLevel();j.setRenderTarget(Ze),j.getClearColor(I),ae=j.getClearAlpha(),ae<1&&j.setClearColor(16777215,.5),j.clear(),mt&&dt.render(de);const xt=j.toneMapping;j.toneMapping=la;const vt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),D.setupLightsView(ue),ke===!0&&qe.setGlobalState(j.clippingPlanes,ue),ki(R,de,ue),xe.updateMultisampleRenderTarget(Ze),xe.updateRenderTargetMipmap(Ze),gt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ft=0,Jt=$.length;Ft<Jt;Ft++){const St=$[Ft],{object:Xt,geometry:bn,material:Je,group:dn}=St;if(Je.side===Na&&Xt.layers.test(ue.layers)){const Tt=Je.side;Je.side=ai,Je.needsUpdate=!0,Po(Xt,de,ue,bn,Je,dn),Je.side=Tt,Je.needsUpdate=!0,rt=!0}}rt===!0&&(xe.updateMultisampleRenderTarget(Ze),xe.updateRenderTargetMipmap(Ze))}j.setRenderTarget(We,nt,lt),j.setClearColor(I,ae),vt!==void 0&&(ue.viewport=vt),j.toneMapping=xt}function ki(R,$,de){const ue=$.isScene===!0?$.overrideMaterial:null;for(let he=0,Ze=R.length;he<Ze;he++){const et=R[he],{object:We,geometry:nt,group:lt}=et;let xt=et.material;xt.allowOverride===!0&&ue!==null&&(xt=ue),We.layers.test(de.layers)&&Po(We,$,de,nt,xt,lt)}}function Po(R,$,de,ue,he,Ze){R.onBeforeRender(j,$,de,ue,he,Ze),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),he.onBeforeRender(j,$,de,ue,R,Ze),he.transparent===!0&&he.side===Na&&he.forceSinglePass===!1?(he.side=ai,he.needsUpdate=!0,j.renderBufferDirect(de,$,ue,he,R,Ze),he.side=yr,he.needsUpdate=!0,j.renderBufferDirect(de,$,ue,he,R,Ze),he.side=Na):j.renderBufferDirect(de,$,ue,he,R,Ze),R.onAfterRender(j,$,de,ue,he,Ze)}function Tr(R,$,de){$.isScene!==!0&&($=ft);const ue=oe.get(R),he=D.state.lights,Ze=D.state.shadowsArray,et=he.state.version,We=Le.getParameters(R,he.state,Ze,$,de,D.state.lightProbeGridArray),nt=Le.getProgramCacheKey(We);let lt=ue.programs;ue.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,ue.fog=$.fog;const xt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ue.envMap=De.get(R.envMap||ue.environment,xt),ue.envMapRotation=ue.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,lt===void 0&&(R.addEventListener("dispose",vi),lt=new Map,ue.programs=lt);let vt=lt.get(nt);if(vt!==void 0){if(ue.currentProgram===vt&&ue.lightsStateVersion===et)return Sl(R,We),vt}else We.uniforms=Le.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,de,We),R.onBeforeCompile(We,j),vt=Le.acquireProgram(We,nt),lt.set(nt,vt),ue.uniforms=We.uniforms;const rt=ue.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=qe.uniform),Sl(R,We),ue.needsLights=zo(R),ue.lightsStateVersion=et,ue.needsLights&&(rt.ambientLightColor.value=he.state.ambient,rt.lightProbe.value=he.state.probe,rt.directionalLights.value=he.state.directional,rt.directionalLightShadows.value=he.state.directionalShadow,rt.spotLights.value=he.state.spot,rt.spotLightShadows.value=he.state.spotShadow,rt.rectAreaLights.value=he.state.rectArea,rt.ltc_1.value=he.state.rectAreaLTC1,rt.ltc_2.value=he.state.rectAreaLTC2,rt.pointLights.value=he.state.point,rt.pointLightShadows.value=he.state.pointShadow,rt.hemisphereLights.value=he.state.hemi,rt.directionalShadowMatrix.value=he.state.directionalShadowMatrix,rt.spotLightMatrix.value=he.state.spotLightMatrix,rt.spotLightMap.value=he.state.spotLightMap,rt.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.lightProbeGrid=D.state.lightProbeGridArray.length>0,ue.currentProgram=vt,ue.uniformsList=null,vt}function Ml(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Pu.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function Sl(R,$){const de=oe.get(R);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function El(R,$){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition($.matrixWorld);for(let de=0,ue=R.length;de<ue;de++){const he=R[de];if(he.texture!==null&&he.boundingBox.containsPoint(C))return he}return null}function Tl(R,$,de,ue,he){$.isScene!==!0&&($=ft),xe.resetTextureUnits();const Ze=$.fog,et=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?$.environment:null,We=J===null?j.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:It.workingColorSpace,nt=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,lt=De.get(ue.envMap||et,nt),xt=ue.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,vt=!!de.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),rt=!!de.morphAttributes.position,Ft=!!de.morphAttributes.normal,Jt=!!de.morphAttributes.color;let St=la;ue.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(St=j.toneMapping);const Xt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,bn=Xt!==void 0?Xt.length:0,Je=oe.get(ue),dn=D.state.lights;if(ke===!0&&(Ve===!0||R!==H)){const jt=R===H&&ue.id===Me;qe.setState(ue,R,jt)}let Tt=!1;ue.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==dn.state.version||Je.outputColorSpace!==We||he.isBatchedMesh&&Je.batching===!1||!he.isBatchedMesh&&Je.batching===!0||he.isBatchedMesh&&Je.batchingColor===!0&&he.colorTexture===null||he.isBatchedMesh&&Je.batchingColor===!1&&he.colorTexture!==null||he.isInstancedMesh&&Je.instancing===!1||!he.isInstancedMesh&&Je.instancing===!0||he.isSkinnedMesh&&Je.skinning===!1||!he.isSkinnedMesh&&Je.skinning===!0||he.isInstancedMesh&&Je.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Je.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Je.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Je.instancingMorph===!1&&he.morphTexture!==null||Je.envMap!==lt||ue.fog===!0&&Je.fog!==Ze||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==qe.numPlanes||Je.numIntersection!==qe.numIntersection)||Je.vertexAlphas!==xt||Je.vertexTangents!==vt||Je.morphTargets!==rt||Je.morphNormals!==Ft||Je.morphColors!==Jt||Je.toneMapping!==St||Je.morphTargetsCount!==bn||!!Je.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,Je.__version=ue.version);let Kn=Je.currentProgram;Tt===!0&&(Kn=Tr(ue,$,he),Y&&ue.isNodeMaterial&&Y.onUpdateProgram(ue,Kn,Je));let ri=!1,Di=!1,Fa=!1;const ct=Kn.getUniforms(),rn=Je.uniforms;if(T.useProgram(Kn.program)&&(ri=!0,Di=!0,Fa=!0),ue.id!==Me&&(Me=ue.id,Di=!0),Je.needsLights){const jt=El(D.state.lightProbeGridArray,he);Je.lightProbeGrid!==jt&&(Je.lightProbeGrid=jt,Di=!0)}if(ri||H!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ct.setValue(K,"projectionMatrix",R.projectionMatrix),ct.setValue(K,"viewMatrix",R.matrixWorldInverse);const Tn=ct.map.cameraPosition;Tn!==void 0&&Tn.setValue(K,Oe.setFromMatrixPosition(R.matrixWorld)),P.logarithmicDepthBuffer&&ct.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&ct.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),H!==R&&(H=R,Di=!0,Fa=!0)}if(Je.needsLights&&(dn.state.directionalShadowMap.length>0&&ct.setValue(K,"directionalShadowMap",dn.state.directionalShadowMap,xe),dn.state.spotShadowMap.length>0&&ct.setValue(K,"spotShadowMap",dn.state.spotShadowMap,xe),dn.state.pointShadowMap.length>0&&ct.setValue(K,"pointShadowMap",dn.state.pointShadowMap,xe)),he.isSkinnedMesh){ct.setOptional(K,he,"bindMatrix"),ct.setOptional(K,he,"bindMatrixInverse");const jt=he.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),ct.setValue(K,"boneTexture",jt.boneTexture,xe))}he.isBatchedMesh&&(ct.setOptional(K,he,"batchingTexture"),ct.setValue(K,"batchingTexture",he._matricesTexture,xe),ct.setOptional(K,he,"batchingIdTexture"),ct.setValue(K,"batchingIdTexture",he._indirectTexture,xe),ct.setOptional(K,he,"batchingColorTexture"),he._colorsTexture!==null&&ct.setValue(K,"batchingColorTexture",he._colorsTexture,xe));const si=de.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Q.update(he,de,Kn),(Di||Je.receiveShadow!==he.receiveShadow)&&(Je.receiveShadow=he.receiveShadow,ct.setValue(K,"receiveShadow",he.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&$.environment!==null&&(rn.envMapIntensity.value=$.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=nR()),Di){if(ct.setValue(K,"toneMappingExposure",j.toneMappingExposure),Je.needsLights&&Io(rn,Fa),Ze&&ue.fog===!0&&$e.refreshFogUniforms(rn,Ze),$e.refreshMaterialUniforms(rn,ue,ee,V,D.state.transmissionRenderTarget[R.id]),Je.needsLights&&Je.lightProbeGrid){const jt=Je.lightProbeGrid;rn.probesSH.value=jt.texture,rn.probesMin.value.copy(jt.boundingBox.min),rn.probesMax.value.copy(jt.boundingBox.max),rn.probesResolution.value.copy(jt.resolution)}Pu.upload(K,Ml(Je),rn,xe)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Pu.upload(K,Ml(Je),rn,xe),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&ct.setValue(K,"center",he.center),ct.setValue(K,"modelViewMatrix",he.modelViewMatrix),ct.setValue(K,"normalMatrix",he.normalMatrix),ct.setValue(K,"modelMatrix",he.matrixWorld),ue.uniformsGroups!==void 0){const jt=ue.uniformsGroups;for(let Tn=0,pn=jt.length;Tn<pn;Tn++){const Al=jt[Tn];Re.update(Al,Kn),Re.bind(Al,Kn)}}return Kn}function Io(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function zo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,$,de){const ue=oe.get(R);ue.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),oe.get(R.texture).__webglTexture=$,oe.get(R.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:de,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const de=oe.get(R);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,de=0){J=R,W=$,Z=de;let ue=null,he=!1,Ze=!1;if(R){const We=oe.get(R);if(We.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(K.FRAMEBUFFER,We.__webglFramebuffer),F.copy(R.viewport),_e.copy(R.scissor),Ne=R.scissorTest,T.viewport(F),T.scissor(_e),T.setScissorTest(Ne),Me=-1;return}else if(We.__webglFramebuffer===void 0)xe.setupRenderTarget(R);else if(We.__hasExternalTextures)xe.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const xt=R.depthTexture;if(We.__boundDepthTexture!==xt){if(xt!==null&&oe.has(xt)&&(R.width!==xt.image.width||R.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(R)}}const nt=R.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ze=!0);const lt=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(lt[$])?ue=lt[$][de]:ue=lt[$],he=!0):R.samples>0&&xe.useMultisampledRTT(R)===!1?ue=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(lt)?ue=lt[de]:ue=lt,F.copy(R.viewport),_e.copy(R.scissor),Ne=R.scissorTest}else F.copy(ge).multiplyScalar(ee).floor(),_e.copy(Ce).multiplyScalar(ee).floor(),Ne=Pe;if(de!==0&&(ue=me),T.bindFramebuffer(K.FRAMEBUFFER,ue)&&T.drawBuffers(R,ue),T.viewport(F),T.scissor(_e),T.setScissorTest(Ne),he){const We=oe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,We.__webglTexture,de)}else if(Ze){const We=$;for(let nt=0;nt<R.textures.length;nt++){const lt=oe.get(R.textures[nt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+nt,lt.__webglTexture,de,We)}}else if(R!==null&&de!==0){const We=oe.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,We.__webglTexture,de)}Me=-1},this.readRenderTargetPixels=function(R,$,de,ue,he,Ze,et,We=0){if(!(R&&R.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&et!==void 0&&(nt=nt[et]),nt){T.bindFramebuffer(K.FRAMEBUFFER,nt);try{const lt=R.textures[We],xt=lt.format,vt=lt.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+We),!P.textureFormatReadable(xt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(vt)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-ue&&de>=0&&de<=R.height-he&&K.readPixels($,de,ue,he,Ge.convert(xt),Ge.convert(vt),Ze)}finally{const lt=J!==null?oe.get(J).__webglFramebuffer:null;T.bindFramebuffer(K.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(R,$,de,ue,he,Ze,et,We=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&et!==void 0&&(nt=nt[et]),nt)if($>=0&&$<=R.width-ue&&de>=0&&de<=R.height-he){T.bindFramebuffer(K.FRAMEBUFFER,nt);const lt=R.textures[We],xt=lt.format,vt=lt.type;if(R.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+We),!P.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,rt),K.bufferData(K.PIXEL_PACK_BUFFER,Ze.byteLength,K.STREAM_READ),K.readPixels($,de,ue,he,Ge.convert(xt),Ge.convert(vt),0);const Ft=J!==null?oe.get(J).__webglFramebuffer:null;T.bindFramebuffer(K.FRAMEBUFFER,Ft);const Jt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await _E(K,Jt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,rt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ze),K.deleteBuffer(rt),K.deleteSync(Jt),Ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,de=0){const ue=Math.pow(2,-de),he=Math.floor(R.image.width*ue),Ze=Math.floor(R.image.height*ue),et=$!==null?$.x:0,We=$!==null?$.y:0;xe.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,de,0,0,et,We,he,Ze),T.unbindTexture()},this.copyTextureToTexture=function(R,$,de=null,ue=null,he=0,Ze=0){let et,We,nt,lt,xt,vt,rt,Ft,Jt;const St=R.isCompressedTexture?R.mipmaps[Ze]:R.image;if(de!==null)et=de.max.x-de.min.x,We=de.max.y-de.min.y,nt=de.isBox3?de.max.z-de.min.z:1,lt=de.min.x,xt=de.min.y,vt=de.isBox3?de.min.z:0;else{const rn=Math.pow(2,-he);et=Math.floor(St.width*rn),We=Math.floor(St.height*rn),R.isDataArrayTexture?nt=St.depth:R.isData3DTexture?nt=Math.floor(St.depth*rn):nt=1,lt=0,xt=0,vt=0}ue!==null?(rt=ue.x,Ft=ue.y,Jt=ue.z):(rt=0,Ft=0,Jt=0);const Xt=Ge.convert($.format),bn=Ge.convert($.type);let Je;$.isData3DTexture?(xe.setTexture3D($,0),Je=K.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(xe.setTexture2DArray($,0),Je=K.TEXTURE_2D_ARRAY):(xe.setTexture2D($,0),Je=K.TEXTURE_2D),T.activeTexture(K.TEXTURE0),T.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),T.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),T.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment);const dn=T.getParameter(K.UNPACK_ROW_LENGTH),Tt=T.getParameter(K.UNPACK_IMAGE_HEIGHT),Kn=T.getParameter(K.UNPACK_SKIP_PIXELS),ri=T.getParameter(K.UNPACK_SKIP_ROWS),Di=T.getParameter(K.UNPACK_SKIP_IMAGES);T.pixelStorei(K.UNPACK_ROW_LENGTH,St.width),T.pixelStorei(K.UNPACK_IMAGE_HEIGHT,St.height),T.pixelStorei(K.UNPACK_SKIP_PIXELS,lt),T.pixelStorei(K.UNPACK_SKIP_ROWS,xt),T.pixelStorei(K.UNPACK_SKIP_IMAGES,vt);const Fa=R.isDataArrayTexture||R.isData3DTexture,ct=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const rn=oe.get(R),si=oe.get($),jt=oe.get(rn.__renderTarget),Tn=oe.get(si.__renderTarget);T.bindFramebuffer(K.READ_FRAMEBUFFER,jt.__webglFramebuffer),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let pn=0;pn<nt;pn++)Fa&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,he,vt+pn),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,oe.get($).__webglTexture,Ze,Jt+pn)),K.blitFramebuffer(lt,xt,et,We,rt,Ft,et,We,K.DEPTH_BUFFER_BIT,K.NEAREST);T.bindFramebuffer(K.READ_FRAMEBUFFER,null),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(he!==0||R.isRenderTargetTexture||oe.has(R)){const rn=oe.get(R),si=oe.get($);T.bindFramebuffer(K.READ_FRAMEBUFFER,ve),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,te);for(let jt=0;jt<nt;jt++)Fa?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rn.__webglTexture,he,vt+jt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,rn.__webglTexture,he),ct?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,si.__webglTexture,Ze,Jt+jt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,si.__webglTexture,Ze),he!==0?K.blitFramebuffer(lt,xt,et,We,rt,Ft,et,We,K.COLOR_BUFFER_BIT,K.NEAREST):ct?K.copyTexSubImage3D(Je,Ze,rt,Ft,Jt+jt,lt,xt,et,We):K.copyTexSubImage2D(Je,Ze,rt,Ft,lt,xt,et,We);T.bindFramebuffer(K.READ_FRAMEBUFFER,null),T.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else ct?R.isDataTexture||R.isData3DTexture?K.texSubImage3D(Je,Ze,rt,Ft,Jt,et,We,nt,Xt,bn,St.data):$.isCompressedArrayTexture?K.compressedTexSubImage3D(Je,Ze,rt,Ft,Jt,et,We,nt,Xt,St.data):K.texSubImage3D(Je,Ze,rt,Ft,Jt,et,We,nt,Xt,bn,St):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ze,rt,Ft,et,We,Xt,bn,St.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ze,rt,Ft,St.width,St.height,Xt,St.data):K.texSubImage2D(K.TEXTURE_2D,Ze,rt,Ft,et,We,Xt,bn,St);T.pixelStorei(K.UNPACK_ROW_LENGTH,dn),T.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Tt),T.pixelStorei(K.UNPACK_SKIP_PIXELS,Kn),T.pixelStorei(K.UNPACK_SKIP_ROWS,ri),T.pixelStorei(K.UNPACK_SKIP_IMAGES,Di),Ze===0&&$.generateMipmaps&&K.generateMipmap(Je),T.unbindTexture()},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xe.setTextureCube(R,0):R.isData3DTexture?xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xe.setTexture2DArray(R,0):xe.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){W=0,Z=0,J=null,T.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=It._getDrawingBufferColorSpace(t),i.unpackColorSpace=It._getUnpackColorSpace()}}var Em={};(function l(t,i,s,o){var f=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",p=(function(){if(!t.OffscreenCanvas)return!1;try{var H=new OffscreenCanvas(1,1),F=H.getContext("2d");F.fillRect(0,0,1,1);var _e=H.transferToImageBitmap();F.createPattern(_e,"no-repeat")}catch{return!1}return!0})();function m(){}function g(H){var F=i.exports.Promise,_e=F!==void 0?F:t.Promise;return typeof _e=="function"?new _e(H):(H(m,m),null)}var y=(function(H,F){return{transform:function(_e){if(H)return _e;if(F.has(_e))return F.get(_e);var Ne=new OffscreenCanvas(_e.width,_e.height),I=Ne.getContext("2d");return I.drawImage(_e,0,0),F.set(_e,Ne),Ne},clear:function(){F.clear()}}})(p,new Map),_=(function(){var H=Math.floor(16.666666666666668),F,_e,Ne={},I=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(F=function(ae){var X=Math.random();return Ne[X]=requestAnimationFrame(function V(ee){I===ee||I+H-1<ee?(I=ee,delete Ne[X],ae()):Ne[X]=requestAnimationFrame(V)}),X},_e=function(ae){Ne[ae]&&cancelAnimationFrame(Ne[ae])}):(F=function(ae){return setTimeout(ae,H)},_e=function(ae){return clearTimeout(ae)}),{frame:F,cancel:_e}})(),v=(function(){var H,F,_e={};function Ne(I){function ae(X,V){I.postMessage({options:X||{},callback:V})}I.init=function(V){var ee=V.transferControlToOffscreen();I.postMessage({canvas:ee},[ee])},I.fire=function(V,ee,Se){if(F)return ae(V,null),F;var we=Math.random().toString(36).slice(2);return F=g(function(ge){function Ce(Pe){Pe.data.callback===we&&(delete _e[we],I.removeEventListener("message",Ce),F=null,y.clear(),Se(),ge())}I.addEventListener("message",Ce),ae(V,we),_e[we]=Ce.bind(null,{data:{callback:we}})}),F},I.reset=function(){I.postMessage({reset:!0});for(var V in _e)_e[V](),delete _e[V]}}return function(){if(H)return H;if(!s&&f){var I=["var CONFETTI, SIZE = {}, module = {};","("+l.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{H=new Worker(URL.createObjectURL(new Blob([I])))}catch(ae){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ae),null}Ne(H)}return H}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(H,F){return F?F(H):H}function N(H){return H!=null}function b(H,F,_e){return A(H&&N(H[F])?H[F]:E[F],_e)}function M(H){return H<0?0:Math.floor(H)}function U(H,F){return Math.floor(Math.random()*(F-H))+H}function B(H){return parseInt(H,16)}function C(H){return H.map(O)}function O(H){var F=String(H).replace(/[^0-9a-f]/gi,"");return F.length<6&&(F=F[0]+F[0]+F[1]+F[1]+F[2]+F[2]),{r:B(F.substring(0,2)),g:B(F.substring(2,4)),b:B(F.substring(4,6))}}function D(H){var F=b(H,"origin",Object);return F.x=b(F,"x",Number),F.y=b(F,"y",Number),F}function z(H){H.width=document.documentElement.clientWidth,H.height=document.documentElement.clientHeight}function S(H){var F=H.getBoundingClientRect();H.width=F.width,H.height=F.height}function L(H){var F=document.createElement("canvas");return F.style.position="fixed",F.style.top="0px",F.style.left="0px",F.style.pointerEvents="none",F.style.zIndex=H,F}function j(H,F,_e,Ne,I,ae,X,V,ee){H.save(),H.translate(F,_e),H.rotate(ae),H.scale(Ne,I),H.arc(0,0,1,X,V,ee),H.restore()}function k(H){var F=H.angle*(Math.PI/180),_e=H.spread*(Math.PI/180);return{x:H.x,y:H.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:H.startVelocity*.5+Math.random()*H.startVelocity,angle2D:-F+(.5*_e-Math.random()*_e),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:H.color,shape:H.shape,tick:0,totalTicks:H.ticks,decay:H.decay,drift:H.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:H.gravity*3,ovalScalar:.6,scalar:H.scalar,flat:H.flat}}function Y(H,F){F.x+=Math.cos(F.angle2D)*F.velocity+F.drift,F.y+=Math.sin(F.angle2D)*F.velocity+F.gravity,F.velocity*=F.decay,F.flat?(F.wobble=0,F.wobbleX=F.x+10*F.scalar,F.wobbleY=F.y+10*F.scalar,F.tiltSin=0,F.tiltCos=0,F.random=1):(F.wobble+=F.wobbleSpeed,F.wobbleX=F.x+10*F.scalar*Math.cos(F.wobble),F.wobbleY=F.y+10*F.scalar*Math.sin(F.wobble),F.tiltAngle+=.1,F.tiltSin=Math.sin(F.tiltAngle),F.tiltCos=Math.cos(F.tiltAngle),F.random=Math.random()+2);var _e=F.tick++/F.totalTicks,Ne=F.x+F.random*F.tiltCos,I=F.y+F.random*F.tiltSin,ae=F.wobbleX+F.random*F.tiltCos,X=F.wobbleY+F.random*F.tiltSin;if(H.fillStyle="rgba("+F.color.r+", "+F.color.g+", "+F.color.b+", "+(1-_e)+")",H.beginPath(),d&&F.shape.type==="path"&&typeof F.shape.path=="string"&&Array.isArray(F.shape.matrix))H.fill(Z(F.shape.path,F.shape.matrix,F.x,F.y,Math.abs(ae-Ne)*.1,Math.abs(X-I)*.1,Math.PI/10*F.wobble));else if(F.shape.type==="bitmap"){var V=Math.PI/10*F.wobble,ee=Math.abs(ae-Ne)*.1,Se=Math.abs(X-I)*.1,we=F.shape.bitmap.width*F.scalar,ge=F.shape.bitmap.height*F.scalar,Ce=new DOMMatrix([Math.cos(V)*ee,Math.sin(V)*ee,-Math.sin(V)*Se,Math.cos(V)*Se,F.x,F.y]);Ce.multiplySelf(new DOMMatrix(F.shape.matrix));var Pe=H.createPattern(y.transform(F.shape.bitmap),"no-repeat");Pe.setTransform(Ce),H.globalAlpha=1-_e,H.fillStyle=Pe,H.fillRect(F.x-we/2,F.y-ge/2,we,ge),H.globalAlpha=1}else if(F.shape==="circle")H.ellipse?H.ellipse(F.x,F.y,Math.abs(ae-Ne)*F.ovalScalar,Math.abs(X-I)*F.ovalScalar,Math.PI/10*F.wobble,0,2*Math.PI):j(H,F.x,F.y,Math.abs(ae-Ne)*F.ovalScalar,Math.abs(X-I)*F.ovalScalar,Math.PI/10*F.wobble,0,2*Math.PI);else if(F.shape==="star")for(var Be=Math.PI/2*3,ke=4*F.scalar,Ve=8*F.scalar,Ue=F.x,Oe=F.y,ot=5,ft=Math.PI/ot;ot--;)Ue=F.x+Math.cos(Be)*Ve,Oe=F.y+Math.sin(Be)*Ve,H.lineTo(Ue,Oe),Be+=ft,Ue=F.x+Math.cos(Be)*ke,Oe=F.y+Math.sin(Be)*ke,H.lineTo(Ue,Oe),Be+=ft;else H.moveTo(Math.floor(F.x),Math.floor(F.y)),H.lineTo(Math.floor(F.wobbleX),Math.floor(I)),H.lineTo(Math.floor(ae),Math.floor(X)),H.lineTo(Math.floor(Ne),Math.floor(F.wobbleY));return H.closePath(),H.fill(),F.tick<F.totalTicks}function me(H,F,_e,Ne,I){var ae=F.slice(),X=H.getContext("2d"),V,ee,Se=g(function(we){function ge(){V=ee=null,X.clearRect(0,0,Ne.width,Ne.height),y.clear(),I(),we()}function Ce(){s&&!(Ne.width===o.width&&Ne.height===o.height)&&(Ne.width=H.width=o.width,Ne.height=H.height=o.height),!Ne.width&&!Ne.height&&(_e(H),Ne.width=H.width,Ne.height=H.height),X.clearRect(0,0,Ne.width,Ne.height),ae=ae.filter(function(Pe){return Y(X,Pe)}),ae.length?V=_.frame(Ce):ge()}V=_.frame(Ce),ee=ge});return{addFettis:function(we){return ae=ae.concat(we),Se},canvas:H,promise:Se,reset:function(){V&&_.cancel(V),ee&&ee()}}}function ve(H,F){var _e=!H,Ne=!!b(F||{},"resize"),I=!1,ae=b(F,"disableForReducedMotion",Boolean),X=f&&!!b(F||{},"useWorker"),V=X?v():null,ee=_e?z:S,Se=H&&V?!!H.__confetti_initialized:!1,we=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ge;function Ce(Be,ke,Ve){for(var Ue=b(Be,"particleCount",M),Oe=b(Be,"angle",Number),ot=b(Be,"spread",Number),ft=b(Be,"startVelocity",Number),mt=b(Be,"decay",Number),wt=b(Be,"gravity",Number),K=b(Be,"drift",Number),Lt=b(Be,"colors",C),gt=b(Be,"ticks",Number),P=b(Be,"shapes"),T=b(Be,"scalar"),ie=!!b(Be,"flat"),oe=D(Be),xe=Ue,De=[],ze=H.width*oe.x,ye=H.height*oe.y;xe--;)De.push(k({x:ze,y:ye,angle:Oe,spread:ot,startVelocity:ft,color:Lt[xe%Lt.length],shape:P[U(0,P.length)],ticks:gt,decay:mt,gravity:wt,drift:K,scalar:T,flat:ie}));return ge?ge.addFettis(De):(ge=me(H,De,ee,ke,Ve),ge.promise)}function Pe(Be){var ke=ae||b(Be,"disableForReducedMotion",Boolean),Ve=b(Be,"zIndex",Number);if(ke&&we)return g(function(ft){ft()});_e&&ge?H=ge.canvas:_e&&!H&&(H=L(Ve),document.body.appendChild(H)),Ne&&!Se&&ee(H);var Ue={width:H.width,height:H.height};V&&!Se&&V.init(H),Se=!0,V&&(H.__confetti_initialized=!0);function Oe(){if(V){var ft={getBoundingClientRect:function(){if(!_e)return H.getBoundingClientRect()}};ee(ft),V.postMessage({resize:{width:ft.width,height:ft.height}});return}Ue.width=Ue.height=null}function ot(){ge=null,Ne&&(I=!1,t.removeEventListener("resize",Oe)),_e&&H&&(document.body.contains(H)&&document.body.removeChild(H),H=null,Se=!1)}return Ne&&!I&&(I=!0,t.addEventListener("resize",Oe,!1)),V?V.fire(Be,Ue,ot):Ce(Be,Ue,ot)}return Pe.reset=function(){V&&V.reset(),ge&&ge.reset()},Pe}var te;function W(){return te||(te=ve(null,{useWorker:!0,resize:!0})),te}function Z(H,F,_e,Ne,I,ae,X){var V=new Path2D(H),ee=new Path2D;ee.addPath(V,new DOMMatrix(F));var Se=new Path2D;return Se.addPath(ee,new DOMMatrix([Math.cos(X)*I,Math.sin(X)*I,-Math.sin(X)*ae,Math.cos(X)*ae,_e,Ne])),Se}function J(H){if(!d)throw new Error("path confetti are not supported in this browser");var F,_e;typeof H=="string"?F=H:(F=H.path,_e=H.matrix);var Ne=new Path2D(F),I=document.createElement("canvas"),ae=I.getContext("2d");if(!_e){for(var X=1e3,V=X,ee=X,Se=0,we=0,ge,Ce,Pe=0;Pe<X;Pe+=2)for(var Be=0;Be<X;Be+=2)ae.isPointInPath(Ne,Pe,Be,"nonzero")&&(V=Math.min(V,Pe),ee=Math.min(ee,Be),Se=Math.max(Se,Pe),we=Math.max(we,Be));ge=Se-V,Ce=we-ee;var ke=10,Ve=Math.min(ke/ge,ke/Ce);_e=[Ve,0,0,Ve,-Math.round(ge/2+V)*Ve,-Math.round(Ce/2+ee)*Ve]}return{type:"path",path:F,matrix:_e}}function Me(H){var F,_e=1,Ne="#000000",I='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof H=="string"?F=H:(F=H.text,_e="scalar"in H?H.scalar:_e,I="fontFamily"in H?H.fontFamily:I,Ne="color"in H?H.color:Ne);var ae=10*_e,X=""+ae+"px "+I,V=new OffscreenCanvas(ae,ae),ee=V.getContext("2d");ee.font=X;var Se=ee.measureText(F),we=Math.ceil(Se.actualBoundingBoxRight+Se.actualBoundingBoxLeft),ge=Math.ceil(Se.actualBoundingBoxAscent+Se.actualBoundingBoxDescent),Ce=2,Pe=Se.actualBoundingBoxLeft+Ce,Be=Se.actualBoundingBoxAscent+Ce;we+=Ce+Ce,ge+=Ce+Ce,V=new OffscreenCanvas(we,ge),ee=V.getContext("2d"),ee.font=X,ee.fillStyle=Ne,ee.fillText(F,Pe,Be);var ke=1/_e;return{type:"bitmap",bitmap:V.transferToImageBitmap(),matrix:[ke,0,0,ke,-we*ke/2,-ge*ke/2]}}i.exports=function(){return W().apply(this,arguments)},i.exports.reset=function(){W().reset()},i.exports.create=ve,i.exports.shapeFromPath=J,i.exports.shapeFromText=Me})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Em,!1);const ey=Em.exports;Em.exports.create;const iR=()=>{const[l,t]=Qe.useState("simulator"),[i,s]=Qe.useState(!1),[o,f]=Qe.useState("specs"),[d,p]=Qe.useState(!1),[m,g]=Qe.useState(!1),[y,_]=Qe.useState(!1),v=Qe.useRef(null),E=Qe.useRef(null),A=Qe.useRef(null),N=Qe.useRef(null),b=Qe.useRef(null),M=Qe.useRef([]),U=async()=>{if(i)E.current&&E.current.srcObject&&(E.current.srcObject.getTracks().forEach(D=>D.stop()),E.current.srcObject=null),s(!1);else try{const O=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}},audio:!1});E.current&&(E.current.srcObject=O,await E.current.play(),s(!0),yn("holo_power"))}catch(O){console.warn("Could not access rear/environment camera:",O);try{const D=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});E.current&&(E.current.srcObject=D,await E.current.play(),s(!0))}catch{alert("Cámara no disponible. Se utilizará el entorno visual simulado de alta fidelidad.")}}};Qe.useEffect(()=>{if(l!=="simulator"||!v.current)return;const O=v.current,D=O.clientWidth,z=O.clientHeight,S=new Sy;A.current=S;const L=new ii(45,D/z,.1,1e3);L.position.set(0,1.2,3.2),L.lookAt(0,0,0);const j=new Vy({alpha:!0,antialias:!0});j.setSize(D,z),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.current=j,O.innerHTML="",O.appendChild(j.domElement);const k=new aT(16777215,.8);S.add(k);const Y=new iT(2282478,2.5);Y.position.set(2,4,3),S.add(Y);const me=new tT(11032055,3,10);me.position.set(-2,-1,2),S.add(me);const ve=new cl;b.current=ve,S.add(ve);const te=new Do(.55,2),W=new Tu({color:440020,roughness:.2,metalness:.85,wireframe:m,emissive:537412,emissiveIntensity:.4}),Z=new Wt(te,W);ve.add(Z),M.current.push(Z);const J=new ns(.9,.03,16,100),Me=new Tu({color:3718648,metalness:.9,roughness:.1,wireframe:m}),H=new Wt(J,Me);H.rotation.x=Math.PI/3,ve.add(H),M.current.push(H);const F=new ns(1.15,.025,16,100),_e=new Tu({color:11032055,metalness:.9,roughness:.1,wireframe:m}),Ne=new Wt(F,_e);Ne.rotation.y=Math.PI/4,ve.add(Ne),M.current.push(Ne);const I=[],ae=new Mr(.18,.18,.18),X=[2282478,3462041,16007006,16498468];for(let Ue=0;Ue<4;Ue++){const Oe=Ue*Math.PI/2,ot=new Tu({color:X[Ue],metalness:.8,roughness:.2}),ft=new Wt(ae,ot);ft.position.set(Math.cos(Oe)*1.25,0,Math.sin(Oe)*1.25),ve.add(ft),I.push(ft),M.current.push(ft)}const V=new lT(2.5,10,2282478,1976635);V.position.y=-.9,S.add(V);const ee=80,Se=new Dn,we=new Float32Array(ee*3);for(let Ue=0;Ue<ee*3;Ue+=3)we[Ue]=(Math.random()-.5)*3,we[Ue+1]=(Math.random()-.5)*2,we[Ue+2]=(Math.random()-.5)*3;Se.setAttribute("position",new Ni(we,3));const ge=new _m({size:.035,color:3718648,transparent:!0,opacity:.7}),Ce=new wy(Se,ge);S.add(Ce);let Pe,Be=new Ly;const ke=()=>{Pe=requestAnimationFrame(ke);const Ue=Be.getDelta(),Oe=Be.getElapsedTime();ve.rotation.y+=Ue*.45,H.rotation.z+=Ue*.6,Ne.rotation.x+=Ue*.5,ve.position.y=Math.sin(Oe*1.5)*.08,I.forEach((ot,ft)=>{const mt=ft*Math.PI/2+Oe*.6,wt=d?1.9:1.3;ot.position.x=Math.cos(mt)*wt,ot.position.z=Math.sin(mt)*wt,ot.position.y=Math.sin(Oe*2+ft)*.2,ot.rotation.x+=Ue*1.2,ot.rotation.y+=Ue*1.5}),j.render(S,L)};ke();const Ve=()=>{if(!O||!N.current)return;const Ue=O.clientWidth,Oe=O.clientHeight;L.aspect=Ue/Oe,L.updateProjectionMatrix(),N.current.setSize(Ue,Oe)};return window.addEventListener("resize",Ve),()=>{cancelAnimationFrame(Pe),window.removeEventListener("resize",Ve),j.dispose(),S.clear()}},[l,d,m]),Qe.useEffect(()=>()=>{E.current&&E.current.srcObject&&E.current.srcObject.getTracks().forEach(D=>D.stop())},[]);const B=O=>{yn("select"),f(O),ey({particleCount:25,spread:45,origin:{y:.65},colors:["#22d3ee","#a855f7","#34d399"]})},C=()=>{navigator.clipboard.writeText(`<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stand WebAR - Experiencia Aumentada</title>
    <!-- MindAR Image Tracking + A-Frame -->
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"><\/script>
    <style>
      body { margin: 0; overflow: hidden; font-family: sans-serif; }
      .floating-ui {
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.9); border: 1px solid #38bdf8;
        color: white; padding: 12px 24px; border-radius: 30px; font-size: 14px;
        backdrop-filter: blur(8px); z-index: 999; display: flex; gap: 10px;
      }
      .ar-btn { background: #0284c7; border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; }
    </style>
  </head>
  <body>
    <div class="floating-ui">
      <span>✨ Apunta al póster del stand</span>
      <button class="ar-btn" onclick="alert('¡Información guardada en tu móvil!')">Guardar Catálogo</button>
    </div>

    <!-- MindAR Scene: Vincula el póster target compilado (.mind) -->
    <a-scene 
      mindar-image="imageTargetSrc: ./targets.mind; filterMinCF:0.0001; filterBeta: 0.001;" 
      color-space="sRGB" 
      renderer="colorManagement: true, physicallyCorrectLights" 
      vr-mode-ui="enabled: false" 
      device-orientation-permission-ui="enabled: false">
      
      <a-assets>
        <!-- Modelo 3D exportado desde Blender (.gltf/.glb) -->
        <a-asset-item id="avatarModel" src="./producto_stand.glb"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <!-- Target 0: Cuando la cámara reconoce el póster impreso -->
      <a-entity mindar-image-target="targetIndex: 0">
        <!-- Objeto 3D que flota saliendo del papel -->
        <a-gltf-model rotation="0 0 0" position="0 0 0.1" scale="0.5 0.5 0.5" src="#avatarModel"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">
        </a-gltf-model>
        
        <!-- Pestaña flotante 3D informativa -->
        <a-plane position="0 0.6 0.2" width="0.8" height="0.35" color="#0f172a" material="opacity: 0.9">
          <a-text value="ESPECIFICACIONES 2026\\nAutonomia: 48h | Peso: 1.2kg" align="center" width="1.6" color="#38bdf8"></a-text>
        </a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>`),_(!0),setTimeout(()=>_(!1),2500)};return h.jsxs("div",{className:"space-y-6",children:[h.jsx("div",{className:"bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm",children:h.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60",children:"Módulo 2: Realidad Aumentada sin Aplicaciones (WebAR)"}),h.jsx("span",{className:"text-xs text-neutral-400 font-mono",children:"MindAR.js + Three.js / WebGL"})]}),h.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mt-1",children:"Póster Interactivo con Elementos Flotantes 3D"}),h.jsx("p",{className:"text-sm text-neutral-300 mt-1 max-w-3xl",children:"Los visitantes no tienen que descargar ninguna app de la App Store ni Play Store. Escanean el código QR impreso en el póster, abren la URL con HTTPS y la cámara proyecta gráficos 3D desprendidos del papel con menús táctiles y datos flotantes."})]}),h.jsxs("div",{className:"flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800",children:[h.jsxs("button",{id:"subtab-ar-sim",onClick:()=>t("simulator"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${l==="simulator"?"bg-cyan-950 text-cyan-300 border border-cyan-800/80 shadow-xs":"text-neutral-400 hover:text-white"}`,children:[h.jsx(R1,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Simulador WebAR"})]}),h.jsxs("button",{id:"subtab-poster",onClick:()=>t("poster"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${l==="poster"?"bg-cyan-950 text-cyan-300 border border-cyan-800/80 shadow-xs":"text-neutral-400 hover:text-white"}`,children:[h.jsx(_1,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Póster Imprimible"})]}),h.jsxs("button",{id:"subtab-code",onClick:()=>t("code"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${l==="code"?"bg-cyan-950 text-cyan-300 border border-cyan-800/80 shadow-xs":"text-neutral-400 hover:text-white"}`,children:[h.jsx(QS,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Código MindAR.js"})]})]})]})}),l==="simulator"&&h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-8 flex flex-col space-y-3",children:[h.jsxs("div",{className:"relative h-[480px] sm:h-[540px] w-full rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden shadow-2xl",children:[h.jsx("video",{ref:E,playsInline:!0,muted:!0,autoPlay:!0,className:`absolute inset-0 w-full h-full object-cover z-0 ${i?"opacity-90":"hidden"}`}),!i&&h.jsxs("div",{className:"absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black",children:[h.jsx("div",{className:"absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent pointer-events-none"}),h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"})]}),h.jsx("div",{ref:v,className:"absolute inset-0 z-10 cursor-grab active:cursor-grabbing"}),h.jsx("div",{className:"absolute top-4 left-4 z-20 flex items-center space-x-2",children:h.jsxs("div",{className:"px-2.5 py-1 rounded-full bg-neutral-900/90 border border-cyan-500/60 backdrop-blur-md flex items-center space-x-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),h.jsx("span",{className:"text-[11px] font-mono text-cyan-300 font-semibold tracking-wide uppercase",children:"OBJETO ANCLADO AL PÓSTER // FLOTACIÓN 3D"})]})}),h.jsx("div",{className:"absolute top-4 right-4 z-20 flex items-center space-x-2",children:h.jsxs("button",{id:"btn-toggle-ar-camera",onClick:U,className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border backdrop-blur-md transition cursor-pointer ${i?"bg-emerald-950/80 border-emerald-500 text-emerald-300":"bg-neutral-900/90 border-neutral-700 text-neutral-300 hover:text-white"}`,children:[h.jsx(zu,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:i?"Cámara de Stand ACTIVA":"Ver con Mi Cámara"})]})}),h.jsx("div",{className:"absolute bottom-6 inset-x-4 z-20 flex flex-col items-center",children:h.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-neutral-950/85 border border-neutral-700/80 backdrop-blur-md shadow-2xl",children:[{id:"specs",label:"Ficha Técnica",icon:s1},{id:"explode",label:d?"Ensamblar 3D":"Despiece 3D",icon:Fu},{id:"wireframe",label:m?"Sólido":"Wireframe",icon:Iu},{id:"contact",label:"Pedir Cotización",icon:_r}].map(O=>{const D=O.icon,z=O.id==="explode"?d:O.id==="wireframe"?m:o===O.id;return h.jsxs("button",{id:`btn-ar-tab-${O.id}`,onClick:()=>{O.id==="explode"?(p(!d),yn("swipe")):O.id==="wireframe"?(g(!m),yn("hover")):B(O.id)},className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${z?"bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-900/40":"text-neutral-300 hover:text-white hover:bg-neutral-800/60"}`,children:[h.jsx(D,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:O.label})]},O.id)})})})]}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-neutral-400 px-2",children:[h.jsxs("span",{className:"flex items-center space-x-1.5",children:[h.jsx(S1,{className:"w-3.5 h-3.5 text-cyan-400"}),h.jsx("span",{children:"El modelo 3D rota continuamente simulando el renderizado de Three.js sobre el póster."})]}),h.jsx("span",{className:"font-mono text-[11px] text-cyan-400",children:"Latencia WebGL: <16ms"})]})]}),h.jsx("div",{className:"lg:col-span-4 flex flex-col space-y-4",children:h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsxs("div",{className:"border-b border-neutral-800 pb-3",children:[h.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-wider",children:"PANEL DESPLEGADO EN EL MÓVIL"}),h.jsxs("h3",{className:"text-lg font-bold text-white mt-0.5",children:[o==="specs"&&"Especificaciones del Producto 3D",o==="contact"&&"Captura de Leads / Contacto Express",o!=="specs"&&o!=="contact"&&"Inspección del Modelo"]})]}),o==="specs"&&h.jsxs("div",{className:"space-y-3 text-xs",children:[h.jsxs("div",{className:"p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 space-y-1",children:[h.jsx("span",{className:"text-neutral-400 block font-mono text-[10px]",children:"RECURSO 3D CARGADO"}),h.jsx("span",{className:"font-semibold text-white",children:"Núcleo Cuántico Modular (GLB)"}),h.jsx("p",{className:"text-neutral-400 text-[11px]",children:"Geometría optimizada en Blender: 4,820 polígonos con texturas comprimidas KTX2/Draco (1.2 MB)."})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex justify-between py-1.5 border-b border-neutral-800 text-neutral-300",children:[h.jsx("span",{children:"Rastreo Óptico:"}),h.jsx("span",{className:"font-mono text-cyan-400",children:"MindAR Image 2D (A-Frame)"})]}),h.jsxs("div",{className:"flex justify-between py-1.5 border-b border-neutral-800 text-neutral-300",children:[h.jsx("span",{children:"Velocidad de Carga:"}),h.jsx("span",{className:"font-mono text-emerald-400",children:"1.8 segundos en 4G/5G"})]}),h.jsxs("div",{className:"flex justify-between py-1.5 border-b border-neutral-800 text-neutral-300",children:[h.jsx("span",{children:"Requisitos de App:"}),h.jsx("span",{className:"font-mono text-white font-bold",children:"NINGUNA (Browser nativo)"})]})]}),h.jsx("button",{onClick:()=>B("contact"),className:"w-full py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition cursor-pointer",children:"Simular Captura de Lead del Visitante"})]}),o==="contact"&&h.jsxs("div",{className:"space-y-3 text-xs",children:[h.jsx("p",{className:"text-neutral-300 text-[11px]",children:"Al apuntar el móvil, el visitante puede enviar sus datos con un toque para recibir el catálogo PDF por WhatsApp o correo:"}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("input",{type:"text",placeholder:"Nombre del visitante",defaultValue:"Carlos Mendoza",className:"w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"}),h.jsx("input",{type:"email",placeholder:"Correo corporativo",defaultValue:"carlos@empresa.com",className:"w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500"})]}),h.jsx("button",{onClick:()=>{ey({particleCount:30}),alert("¡Lead capturado exitosamente en el stand!"),f("specs")},className:"w-full py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition cursor-pointer",children:"Enviar Catálogo al Visitante"})]}),h.jsxs("div",{className:"p-3.5 bg-neutral-950/70 border border-neutral-800 rounded-xl space-y-2",children:[h.jsxs("span",{className:"text-xs font-semibold text-neutral-200 flex items-center space-x-1.5",children:[h.jsx(c1,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Claves de Éxito en Stand Físico"})]}),h.jsxs("ul",{className:"text-[11px] text-neutral-400 space-y-1 list-disc list-inside",children:[h.jsxs("li",{children:[h.jsx("strong",{children:"Papel Mate:"})," Nunca uses laminado brillante porque los reflejos de las luces del recinto confunden los puntos de anclaje ópticos."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"HTTPS Obligatorio:"})," Los navegadores móviles (Safari iOS y Chrome Android) solo permiten el acceso a la cámara en dominios seguros con SSL (GitHub Pages, Vercel, Netlify)."]}),h.jsxs("li",{children:[h.jsx("strong",{children:"Alto Contraste:"})," El diseño del póster debe tener esquinas nítidas y patrones asimétricos para que MindAR lo reconozca en <200ms."]})]})]})]})})]}),l==="poster"&&h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[h.jsxs("div",{id:"printable-poster",className:"w-full max-w-md bg-neutral-950 border-4 border-cyan-500/80 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden space-y-6",children:[h.jsx("div",{className:"absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-cyan-400"}),h.jsx("div",{className:"absolute top-3 right-3 w-6 h-6 border-t-4 border-r-4 border-cyan-400"}),h.jsx("div",{className:"absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-cyan-400"}),h.jsx("div",{className:"absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-cyan-400"}),h.jsxs("div",{className:"text-center pt-2",children:[h.jsx("span",{className:"px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-[10px] font-mono tracking-widest text-cyan-300 uppercase",children:"EXPERIENCIA INTERACTIVA // WEBAR"}),h.jsx("h2",{className:"text-2xl font-black mt-2 tracking-tight text-white",children:"DESCUBRE EL FUTURO EN 3D"}),h.jsx("p",{className:"text-xs text-neutral-400 mt-0.5",children:"Apunta con la cámara de tu teléfono móvil • Cero descargas"})]}),h.jsxs("div",{className:"relative aspect-square w-full rounded-xl bg-neutral-900 border-2 border-dashed border-cyan-500/40 flex flex-col items-center justify-center p-6 text-center",children:[h.jsx("div",{className:"p-3 bg-white rounded-xl shadow-lg",children:h.jsx("div",{className:"w-36 h-36 bg-black relative flex items-center justify-center p-2",children:h.jsxs("div",{className:"w-full h-full bg-white flex flex-col justify-between p-1",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("div",{className:"w-8 h-8 bg-black border-2 border-white p-1",children:h.jsx("div",{className:"w-full h-full bg-black"})}),h.jsx("div",{className:"w-8 h-8 bg-black border-2 border-white p-1",children:h.jsx("div",{className:"w-full h-full bg-black"})})]}),h.jsx("div",{className:"flex items-center justify-center",children:h.jsx(Iu,{className:"w-8 h-8 text-black animate-pulse"})}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("div",{className:"w-8 h-8 bg-black border-2 border-white p-1",children:h.jsx("div",{className:"w-full h-full bg-black"})}),h.jsxs("div",{className:"w-8 h-8 border border-neutral-300 p-0.5 flex flex-wrap gap-0.5",children:[h.jsx("div",{className:"w-2 h-2 bg-black"}),h.jsx("div",{className:"w-2 h-2 bg-black"}),h.jsx("div",{className:"w-2 h-2 bg-black"})]})]})]})})}),h.jsxs("div",{className:"mt-4",children:[h.jsx("span",{className:"font-mono text-xs font-bold text-cyan-400 tracking-wider",children:"SCAN TO LAUNCH WebAR"}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5",children:"URL: https://tustand.com/ar"})]})]}),h.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-[10px] pt-1 border-t border-neutral-800",children:[h.jsxs("div",{className:"p-2 rounded bg-neutral-900/60",children:[h.jsx("span",{className:"font-bold text-cyan-400 block text-xs",children:"1"}),h.jsx("span",{children:"Escanea QR"})]}),h.jsxs("div",{className:"p-2 rounded bg-neutral-900/60",children:[h.jsx("span",{className:"font-bold text-cyan-400 block text-xs",children:"2"}),h.jsx("span",{children:"Apunta al póster"})]}),h.jsxs("div",{className:"p-2 rounded bg-neutral-900/60",children:[h.jsx("span",{className:"font-bold text-cyan-400 block text-xs",children:"3"}),h.jsx("span",{children:"Toca los menús 3D"})]})]})]}),h.jsx("div",{className:"mt-4 flex items-center space-x-3",children:h.jsxs("button",{onClick:()=>window.print(),className:"flex items-center space-x-2 px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium border border-neutral-700 transition cursor-pointer",children:[h.jsx(qv,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Imprimir Póster para Stand"})]})})]}),h.jsx("div",{className:"lg:col-span-5 space-y-4",children:h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsxs("h3",{className:"font-bold text-white text-sm flex items-center space-x-2",children:[h.jsx(qv,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Especificaciones de Impresión Física"})]}),h.jsxs("div",{className:"space-y-2.5 text-xs text-neutral-300",children:[h.jsxs("div",{className:"p-3 bg-neutral-950 rounded-lg border border-neutral-800",children:[h.jsx("span",{className:"font-semibold text-cyan-400 block",children:"Tipo de Papel Recomendado"}),h.jsxs("p",{className:"text-neutral-400 text-[11px] mt-0.5",children:[h.jsx("strong",{children:"Papel Bond Mate de 250g o Couche Mate sin laminar"}),". El laminado brillante crea reflejos de las lámparas halógenas del recinto ferial que ciegan la cámara del smartphone."]})]}),h.jsxs("div",{className:"p-3 bg-neutral-950 rounded-lg border border-neutral-800",children:[h.jsx("span",{className:"font-semibold text-emerald-400 block",children:"Dimensiones Óptimas"}),h.jsxs("p",{className:"text-neutral-400 text-[11px] mt-0.5",children:[h.jsx("strong",{children:"Tamaño A1 (59.4 x 84.1 cm) o A2 (42 x 59.4 cm)"}),". Permite a los visitantes interactuar cómodamente a 1 o 1.5 metros de distancia sin bloquear el paso del pasillo."]})]}),h.jsxs("div",{className:"p-3 bg-neutral-950 rounded-lg border border-neutral-800",children:[h.jsx("span",{className:"font-semibold text-purple-400 block",children:"Ángulo de Luz del Stand"}),h.jsx("p",{className:"text-neutral-400 text-[11px] mt-0.5",children:"Iluminación suave cenital o difusa a 45 grados. Evita colocar un foco dicroico directamente perpendicular que queme el centro del código QR."})]})]})]})})]}),l==="code"&&h.jsx("div",{className:"space-y-4",children:h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 lg:p-8",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-800 pb-4 mb-5 gap-4",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-bold text-white text-sm",children:"Plantilla de Producción MindAR.js + A-Frame"}),h.jsxs("p",{className:"text-xs text-neutral-400 mt-0.5",children:["Guarda este archivo como ",h.jsx("code",{className:"text-cyan-300",children:"index.html"})," y súbelo a GitHub Pages o Vercel."]})]}),h.jsxs("button",{onClick:C,className:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition cursor-pointer",children:[y?h.jsx(kS,{className:"w-4 h-4"}):h.jsx($S,{className:"w-4 h-4"}),h.jsx("span",{children:y?"¡Copiado!":"Copiar Código"})]})]}),h.jsx("div",{className:"relative rounded-lg bg-neutral-950 border border-neutral-800 p-4 font-mono text-xs text-neutral-300 overflow-x-auto max-h-[420px]",children:h.jsx("pre",{children:`<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stand WebAR - Experiencia Aumentada</title>
    <!-- MindAR Image Tracking + A-Frame -->
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-aframe.prod.js"><\/script>
    <style>
      body { margin: 0; overflow: hidden; font-family: sans-serif; }
      .floating-ui {
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: rgba(15, 23, 42, 0.9); border: 1px solid #38bdf8;
        color: white; padding: 12px 24px; border-radius: 30px; font-size: 14px;
        backdrop-filter: blur(8px); z-index: 999; display: flex; gap: 10px;
      }
      .ar-btn { background: #0284c7; border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; }
    </style>
  </head>
  <body>
    <div class="floating-ui">
      <span>✨ Apunta al póster del stand</span>
      <button class="ar-btn" onclick="alert('¡Información guardada en tu móvil!')">Guardar Catálogo</button>
    </div>

    <!-- MindAR Scene: Vincula el póster target compilado (.mind) -->
    <a-scene 
      mindar-image="imageTargetSrc: ./targets.mind; filterMinCF:0.0001; filterBeta: 0.001;" 
      color-space="sRGB" 
      renderer="colorManagement: true, physicallyCorrectLights" 
      vr-mode-ui="enabled: false" 
      device-orientation-permission-ui="enabled: false">
      
      <a-assets>
        <!-- Modelo 3D exportado desde Blender (.gltf/.glb) -->
        <a-asset-item id="avatarModel" src="./producto_stand.glb"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <!-- Target 0: Cuando la cámara reconoce el póster impreso -->
      <a-entity mindar-image-target="targetIndex: 0">
        <!-- Objeto 3D que flota saliendo del papel -->
        <a-gltf-model rotation="0 0 0" position="0 0 0.1" scale="0.5 0.5 0.5" src="#avatarModel"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear">
        </a-gltf-model>
        
        <!-- Pestaña flotante 3D informativa -->
        <a-plane position="0 0.6 0.2" width="0.8" height="0.35" color="#0f172a" material="opacity: 0.9">
          <a-text value="ESPECIFICACIONES 2026\\nAutonomia: 48h | Peso: 1.2kg" align="center" width="1.6" color="#38bdf8"></a-text>
        </a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>`})}),h.jsxs("div",{className:"mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[h.jsxs("div",{className:"p-3 bg-neutral-950 rounded-lg border border-neutral-800",children:[h.jsx("span",{className:"font-semibold text-cyan-400 block",children:"Paso 1: Compilar el Póster"}),h.jsxs("p",{className:"text-neutral-400 mt-1",children:["Arrastra tu imagen JPG/PNG del póster a la herramienta oficial online de MindAR (compiler) para descargar el archivo ",h.jsx("code",{className:"text-white",children:"targets.mind"}),"."]})]}),h.jsxs("div",{className:"p-3 bg-neutral-950 rounded-lg border border-neutral-800",children:[h.jsx("span",{className:"font-semibold text-emerald-400 block",children:"Paso 2: Exportar 3D (.glb)"}),h.jsx("p",{className:"text-neutral-400 mt-1",children:'En Blender, exporta tu producto o avatar como glTF Binary (.glb) con "Apply Modifiers" y materiales PBR embebidos.'})]}),h.jsxs("div",{className:"p-3 bg-neutral-950 rounded-lg border border-neutral-800",children:[h.jsx("span",{className:"font-semibold text-purple-400 block",children:"Paso 3: Subir a Vercel / GitHub"}),h.jsx("p",{className:"text-neutral-400 mt-1",children:"Arrastra la carpeta a GitHub Pages o Vercel. Automáticamente obtendrás un enlace con HTTPS gratuito, indispensable para la cámara web móvil."})]})]})]})})]})},ty=[{id:"cyber_humanoid",name:"Asistente Digital a Escala Real",category:"Avatar Humanoide",description:"Figura antropomórfica de 2.2m con articulaciones de luz y contorno de recorte.",heightMetres:2.2,rimColor:"#22d3ee"},{id:"dna_helix",name:"Doble Hélice Genómica 3D",category:"Biotecnología / Ciencia",description:"Estructura molecular con nodos cuánticos y datos flotantes de 2.5m.",heightMetres:2.5,rimColor:"#34d399"},{id:"tech_core",name:"Núcleo Holográfico de Datos",category:"Ingeniería / Tecnología",description:"Prisma hipergeométrico con anillos concéntricos y pulso de energía.",heightMetres:2,rimColor:"#a855f7"},{id:"vehicle_chassis",name:"Chasis Automotriz Wireframe",category:"Diseño Industrial",description:"Proyección técnica de líneas aerodinámicas suspendidas en el aire.",heightMetres:1.8,rimColor:"#f59e0b"}],aR=()=>{const[l,t]=Qe.useState("projector"),[i,s]=Qe.useState(ty[0]),[o,f]=Qe.useState(2.4),[d,p]=Qe.useState("#22d3ee"),[m,g]=Qe.useState(!0),[y,_]=Qe.useState(0),[v,E]=Qe.useState(0),[A,N]=Qe.useState(!1),[b,M]=Qe.useState(2.5),[U,B]=Qe.useState(2),[C,O]=Qe.useState(1.2),[D,z]=Qe.useState("medium"),[S,L]=Qe.useState("tulle"),j=Qe.useRef(null),k=Qe.useRef(null),Y=Qe.useRef(null),me=Qe.useRef(null);Qe.useEffect(()=>{if(l!=="projector"||!j.current)return;const J=j.current,Me=J.clientWidth,H=J.clientHeight,F=new Sy;F.background=new Ct(0),k.current=F;const _e=new ii(40,Me/H,.1,1e3);_e.position.set(0,0,4.2),_e.lookAt(0,0,0);const Ne=new Vy({antialias:!0,powerPreference:"high-performance"});Ne.setSize(Me,H),Ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),Y.current=Ne,J.innerHTML="",J.appendChild(Ne.domElement);const I=new cl;me.current=I,F.add(I);const ae=parseInt(d.replace("#","0x"),16);if(i.id==="cyber_humanoid"){const ke=new Do(.24,2),Ve=new Wn({color:ae,wireframe:!0}),Ue=new Wt(ke,Ve);Ue.position.y=1.35,I.add(Ue);const Oe=new Jr(.28,.18,.85,8,4,!0),ot=new Wn({color:ae,wireframe:!0}),ft=new Wt(Oe,ot);ft.position.y=.7,I.add(ft);const mt=new Jr(.04,.04,.75,8),wt=new Wn({color:16777215}),K=new Wt(mt,wt);K.position.y=.7,I.add(K);const Lt=new Wn({color:ae,wireframe:!0}),gt=new Jr(.06,.05,.7,6),P=new Wt(gt,Lt);P.position.set(-.42,.65,0),P.rotation.z=Math.PI/10,I.add(P);const T=new Wt(gt,Lt);T.position.set(.42,.65,0),T.rotation.z=-Math.PI/10,I.add(T);const ie=new Wn({color:ae,wireframe:!0}),oe=new Jr(.08,.05,1.1,6,4,!0),xe=new Wt(oe,ie);xe.position.set(-.2,-.4,0),I.add(xe);const De=new Wt(oe,ie);De.position.set(.2,-.4,0),I.add(De);const ze=new ns(.55,.015,8,48),ye=new Wn({color:ae,transparent:!0,opacity:.6}),be=new Wt(ze,ye);be.rotation.x=Math.PI/2,be.position.y=.4,I.add(be)}else if(i.id==="dna_helix"){const Ve=new Wn({color:ae}),Ue=new Wn({color:16777215,transparent:!0,opacity:.7});for(let Oe=0;Oe<36;Oe++){const ot=Oe/36*Math.PI*4,ft=Oe/36*2.8-1.4,mt=.55,wt=Math.cos(ot)*mt,K=Math.sin(ot)*mt,Lt=Math.cos(ot+Math.PI)*mt,gt=Math.sin(ot+Math.PI)*mt,P=new bm(.05,8,8),T=new Wt(P,Ve);T.position.set(wt,ft,K),I.add(T);const ie=new Wt(P,Ve);if(ie.position.set(Lt,ft,gt),I.add(ie),Oe%2===0){const oe=new Jr(.015,.015,mt*2,6),xe=new Wt(oe,Ue);xe.position.set(0,ft,0),xe.rotation.z=Math.PI/2,xe.rotation.y=-ot,I.add(xe)}}}else if(i.id==="tech_core"){const ke=new ym(.8,1),Ve=new Wn({color:ae,wireframe:!0}),Ue=new Wt(ke,Ve);I.add(Ue);const Oe=new Wt(new Do(.4,0),new Wn({color:16777215}));I.add(Oe);const ot=new Wt(new ns(1.2,.02,16,64),new Wn({color:ae}));ot.rotation.x=Math.PI/3,I.add(ot)}else{const ke=new Mr(1.6,.55,.9,8,4,6),Ve=new Wn({color:ae,wireframe:!0}),Ue=new Wt(ke,Ve);I.add(Ue);const Oe=new Mr(.9,.45,.75,6,2,4),ot=new Wt(Oe,Ve);ot.position.set(-.1,.45,0),I.add(ot);const ft=new ns(.22,.06,8,24),mt=new Wn({color:16777215});[[-.55,-.3,.45],[.55,-.3,.45],[-.55,-.3,-.45],[.55,-.3,-.45]].forEach(([wt,K,Lt])=>{const gt=new Wt(ft,mt);gt.position.set(wt,K,Lt),I.add(gt)})}const X=100,V=new Dn,ee=new Float32Array(X*3);for(let ke=0;ke<X*3;ke+=3)ee[ke]=(Math.random()-.5)*2.8,ee[ke+1]=(Math.random()-.5)*3.2,ee[ke+2]=(Math.random()-.5)*2;V.setAttribute("position",new Ni(ee,3));const Se=new _m({size:.03,color:ae,transparent:!0,opacity:.75}),we=new wy(V,Se);F.add(we);let ge;const Ce=new Ly,Pe=()=>{ge=requestAnimationFrame(Pe);const ke=Ce.getDelta(),Ve=Ce.getElapsedTime();I.rotation.y+=ke*.4;const Ue=1+Math.sin(Ve*2)*.015;I.scale.set(Ue,Ue,Ue),Ne.render(F,_e)};Pe();const Be=()=>{if(!J||!Y.current)return;const ke=J.clientWidth,Ve=J.clientHeight;_e.aspect=ke/Ve,_e.updateProjectionMatrix(),Y.current.setSize(ke,Ve)};return window.addEventListener("resize",Be),()=>{cancelAnimationFrame(ge),window.removeEventListener("resize",Be),Ne.dispose(),F.clear()}},[l,i,d]);const ve=()=>{yn("holo_power");const J=j.current;J&&(document.fullscreenElement?(document.exitFullscreen(),N(!1)):(J.requestFullscreen().catch(Me=>{console.warn("Fullscreen request failed:",Me)}),N(!0)))},te=(U*C).toFixed(1),W=D==="dim"?"2,500 ANSI Lúmenes":D==="medium"?"3,200 ANSI Lúmenes":"4,000+ ANSI Lúmenes",Z=(b*2+U*2+1.2).toFixed(1);return h.jsxs("div",{className:"space-y-6",children:[h.jsx("div",{className:"bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm",children:h.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-indigo-950/80 text-indigo-400 border border-indigo-800/60",children:"Módulo 1: Proyección en Malla Holo-Gauze DIY"}),h.jsx("span",{className:"text-xs text-neutral-400 font-mono",children:"Fondo #000000 Puro + Luz de Recorte"})]}),h.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mt-1",children:"Avatar Holográfico a Escala Real (2 a 3 Metros)"}),h.jsx("p",{className:"text-sm text-neutral-300 mt-1 max-w-3xl",children:"Proyecta figuras humanas o productos sobre tul de poliéster oscuro tensado. En condiciones de baja luz, el tul se vuelve invisible al ojo humano y la figura parece flotar físicamente en el aire sin necesidad de vidrios pesados ni acrílicos costosos."})]}),h.jsxs("div",{className:"flex items-center bg-neutral-950 p-1 rounded-lg border border-neutral-800",children:[h.jsxs("button",{id:"tab-holo-projector",onClick:()=>t("projector"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${l==="projector"?"bg-indigo-950 text-indigo-300 border border-indigo-800/80 shadow-xs":"text-neutral-400 hover:text-white"}`,children:[h.jsx(L1,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Señal de Proyección"})]}),h.jsxs("button",{id:"tab-holo-calc",onClick:()=>t("calculator"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${l==="calculator"?"bg-indigo-950 text-indigo-300 border border-indigo-800/80 shadow-xs":"text-neutral-400 hover:text-white"}`,children:[h.jsx(kv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Calculadora PVC & Óptica"})]}),h.jsxs("button",{id:"tab-holo-obs",onClick:()=>t("obs_guide"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition cursor-pointer ${l==="obs_guide"?"bg-indigo-950 text-indigo-300 border border-indigo-800/80 shadow-xs":"text-neutral-400 hover:text-white"}`,children:[h.jsx(dp,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Ajuste OBS & VLC"})]})]})]})}),l==="projector"&&h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-8 flex flex-col space-y-3",children:[h.jsxs("div",{id:"hologram-projector-stage",className:"relative h-[480px] sm:h-[560px] w-full rounded-2xl bg-black border border-neutral-800 overflow-hidden shadow-2xl flex items-center justify-center",style:{transform:`perspective(600px) rotateX(${y-v}deg)`},children:[h.jsx("div",{ref:j,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"}),m&&h.jsxs("div",{className:"absolute inset-y-6 left-6 pointer-events-none flex flex-col justify-between text-[11px] font-mono text-cyan-400/70 border-l border-dashed border-cyan-500/40 pl-2",children:[h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("span",{className:"w-2 h-0.5 bg-cyan-400"}),h.jsx("span",{children:"3.0 METROS (Límite Techo Stand)"})]}),h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("span",{className:"w-2 h-0.5 bg-cyan-400"}),h.jsx("span",{children:"2.5 METROS (Altura Avatar Proyectado)"})]}),h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("span",{className:"w-2 h-0.5 bg-cyan-400"}),h.jsx("span",{children:"1.8 METROS (Estatura Ojos Visitante)"})]}),h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("span",{className:"w-2 h-0.5 bg-cyan-400"}),h.jsx("span",{children:"1.0 METRO"})]}),h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("span",{className:"w-2 h-0.5 bg-cyan-400"}),h.jsx("span",{children:"0.0 METROS (Base del Suelo / Tarima)"})]})]}),h.jsx("div",{className:"absolute bottom-4 right-4 z-20 flex items-center space-x-2",children:h.jsxs("button",{id:"btn-launch-fullscreen-projector",onClick:ve,className:"flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-white text-xs font-semibold border border-neutral-700 shadow-xl backdrop-blur-sm transition cursor-pointer",children:[h.jsx(g1,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Modo Pantalla Completa (Proyector)"})]})}),h.jsx("div",{className:"absolute top-4 right-4 z-20 pointer-events-none",children:h.jsx("span",{className:"px-2.5 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono text-neutral-400",children:"BLACK LEVEL: #000000 (0% LUZ RESIDUAL)"})})]}),h.jsxs("div",{className:"flex items-center justify-between text-xs text-neutral-400 px-1",children:[h.jsxs("span",{children:["💡 ",h.jsx("strong",{children:"Consejo de Montaje:"})," Envía esta ventana al proyector mediante HDMI como segunda pantalla y presiona Pantalla Completa."]}),h.jsx("button",{onClick:()=>g(!m),className:"underline hover:text-white cursor-pointer",children:m?"Ocultar Escala Métrica":"Mostrar Escala Métrica"})]})]}),h.jsx("div",{className:"lg:col-span-4 space-y-6",children:h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsxs("div",{className:"border-b border-neutral-800 pb-3",children:[h.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-wider",children:"CATÁLOGO DE AVATARES Y MODELOS"}),h.jsx("h3",{className:"text-base font-bold text-white mt-0.5",children:"Seleccionar Figura a Proyectar"})]}),h.jsx("div",{className:"space-y-2",children:ty.map(J=>{const Me=i.id===J.id;return h.jsxs("button",{onClick:()=>{s(J),p(J.rimColor),yn("hover")},className:`w-full text-left p-3 rounded-lg border transition cursor-pointer ${Me?"bg-neutral-800 border-cyan-500 text-white shadow-md":"bg-neutral-950/50 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-semibold text-xs text-white",children:J.name}),h.jsxs("span",{className:"text-[10px] font-mono text-cyan-400",children:[J.heightMetres,"m"]})]}),h.jsx("p",{className:"text-[11px] text-neutral-400 mt-1",children:J.description})]},J.id)})}),h.jsxs("div",{className:"pt-3 border-t border-neutral-800 space-y-3",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold text-neutral-200",children:[h.jsxs("span",{className:"flex items-center space-x-1.5",children:[h.jsx(D1,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsx("span",{children:"Luz de Recorte (Rim Light)"})]}),h.jsx("span",{className:"font-mono text-cyan-400 text-[11px]",children:d})]}),h.jsx("div",{className:"flex items-center space-x-2",children:["#22d3ee","#ffffff","#a855f7","#34d399","#f59e0b"].map(J=>h.jsx("button",{onClick:()=>p(J),className:`w-7 h-7 rounded-full border-2 transition cursor-pointer ${d===J?"border-white scale-110 shadow-md":"border-transparent opacity-70"}`,style:{backgroundColor:J}},J))}),h.jsxs("div",{className:"pt-3 border-t border-neutral-800 space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs text-neutral-300",children:[h.jsx("span",{className:"font-medium",children:"Corrección Trapezoidal Digital"}),h.jsxs("span",{className:"text-[11px] font-mono text-cyan-400",children:[y,"° deg"]})]}),h.jsx("p",{className:"text-[10px] text-neutral-400",children:"Compensa la inclinación si el proyector está situado en el suelo o colgado del techo."}),h.jsx("input",{type:"range",min:"-15",max:"15",value:y,onChange:J=>_(Number(J.target.value)),className:"w-full accent-cyan-400"}),h.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-500 font-mono",children:[h.jsx("span",{children:"Tiro Suelo (+15°)"}),h.jsx("span",{children:"Plano (0°)"}),h.jsx("span",{children:"Tiro Techo (-15°)"})]})]})]})]})})]}),l==="calculator"&&h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsxs("h3",{className:"font-bold text-white text-base flex items-center space-x-2",children:[h.jsx(kv,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Calculadora de Materiales y Óptica de Proyección"})]}),h.jsxs("div",{className:"space-y-4 text-xs",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"block text-neutral-300 font-medium mb-1",children:["Altura de la Malla Holográfica: ",h.jsxs("span",{className:"text-cyan-400 font-mono",children:[b," metros"]})]}),h.jsx("input",{type:"range",min:"1.8",max:"3.5",step:"0.1",value:b,onChange:J=>M(Number(J.target.value)),className:"w-full accent-cyan-400"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"block text-neutral-300 font-medium mb-1",children:["Ancho de la Pantalla / Tul: ",h.jsxs("span",{className:"text-cyan-400 font-mono",children:[U," metros"]})]}),h.jsx("input",{type:"range",min:"1.5",max:"4.0",step:"0.1",value:U,onChange:J=>B(Number(J.target.value)),className:"w-full accent-cyan-400"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"block text-neutral-300 font-medium mb-1",children:["Ratio de Tiro del Proyector (Throw Ratio): ",h.jsxs("span",{className:"text-cyan-400 font-mono",children:[C,":1"]})]}),h.jsxs("select",{value:C,onChange:J=>O(Number(J.target.value)),className:"w-full px-3 py-2 rounded-lg bg-neutral-950 border border-neutral-700 text-white focus:outline-none focus:border-cyan-500",children:[h.jsx("option",{value:.5,children:"Tiro Ultracorto (Ultra Short Throw: 0.5:1)"}),h.jsx("option",{value:.8,children:"Tiro Corto (Short Throw: 0.8:1)"}),h.jsx("option",{value:1.2,children:"Tiro Estándar / Oficina (1.2:1 a 1.4:1)"}),h.jsx("option",{value:1.8,children:"Tiro Largo (Long Throw: 1.8:1)"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-neutral-300 font-medium mb-1",children:"Nivel de Iluminación Ambiental del Stand:"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"dim",label:"Baja (Íntima / Nocturna)"},{id:"medium",label:"Media (Pabellón Ferial Estándar)"},{id:"bright",label:"Alta (Cerca de Pasillo Exterior)"}].map(J=>h.jsx("button",{onClick:()=>z(J.id),className:`p-2 rounded-lg border text-center transition cursor-pointer ${D===J.id?"bg-neutral-800 border-cyan-500 text-white":"bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white"}`,children:J.label},J.id))})]})]})]}),h.jsxs("div",{className:"lg:col-span-6 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsx("h3",{className:"font-bold text-white text-base",children:"Especificaciones Calculadas para el Stand"}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[h.jsxs("div",{className:"p-3.5 rounded-lg bg-neutral-950 border border-neutral-800",children:[h.jsx("span",{className:"text-neutral-400 font-mono text-[10px] uppercase block",children:"Distancia Proyector → Malla"}),h.jsxs("div",{className:"text-xl font-bold text-cyan-400 mt-0.5",children:[te," metros"]}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-1",children:"Coloca el proyector en el suelo apuntando a 35° hacia arriba para no deslumbrar al público."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-neutral-950 border border-neutral-800",children:[h.jsx("span",{className:"text-neutral-400 font-mono text-[10px] uppercase block",children:"Lúmenes Mínimos Sugeridos"}),h.jsx("div",{className:"text-xl font-bold text-emerald-400 mt-0.5",children:W}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-1",children:"Garantiza brillo suficiente para que la luz atraviese el 85% del tul sin perder contraste."})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-neutral-950 border border-neutral-800",children:[h.jsx("span",{className:"text-neutral-400 font-mono text-[10px] uppercase block",children:"Tubos PVC de 1 Pulgada"}),h.jsxs("div",{className:"text-xl font-bold text-purple-400 mt-0.5",children:[Z," metros"]}),h.jsxs("p",{className:"text-[10px] text-neutral-400 mt-1",children:["2 postes verticales (",b,"m), 2 largueros (",U,"m), 4 codos y 2 patas T."]})]}),h.jsxs("div",{className:"p-3.5 rounded-lg bg-neutral-950 border border-neutral-800",children:[h.jsx("span",{className:"text-neutral-400 font-mono text-[10px] uppercase block",children:"Superficie de Tul Necesaria"}),h.jsxs("div",{className:"text-xl font-bold text-amber-400 mt-0.5",children:[(b*U).toFixed(1)," m²"]}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-1",children:"Tul poliéster gris humo de punto fino (costo estimado: $12 - $18 USD)."})]})]}),h.jsxs("div",{className:"p-3.5 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-1.5",children:[h.jsx("span",{className:"font-semibold text-white block",children:"Regla de Oro de Montaje Físico:"}),h.jsxs("p",{className:"text-neutral-300 text-[11px]",children:[h.jsx("strong",{children:"FONDO OSCURO OBLIGATORIO:"})," Detrás de la malla debe haber tela negra mate o pared oscura sin iluminación. Cualquier foco que ilumine detrás del tul romperá la ilusión de transparencia."]})]})]})]}),l==="obs_guide"&&h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 lg:p-8 space-y-6 text-xs",children:[h.jsxs("div",{className:"border-b border-neutral-800 pb-4",children:[h.jsxs("h3",{className:"text-base font-bold text-white flex items-center space-x-2",children:[h.jsx(dp,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Configuración de OBS Studio y VLC para Fondos Negros Perfectos"})]}),h.jsx("p",{className:"text-neutral-400 text-xs mt-1",children:"Pasos exactos para calibrar el video del avatar antes de enviarlo al proyector."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2",children:[h.jsx("span",{className:"font-semibold text-cyan-400 block text-sm",children:"Paso 1: Fondo #000000 Puro"}),h.jsx("p",{className:"text-neutral-300 text-[11px]",children:"En DaVinci Resolve, Premiere o CapCut, asegúrate de exportar sin canal alfa o con fondo negro 100% RGB (0, 0, 0). Aplica una curva de luminancia aplastando los negros (Black Level crush) para evitar grises residuales."})]}),h.jsxs("div",{className:"p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2",children:[h.jsx("span",{className:"font-semibold text-emerald-400 block text-sm",children:"Paso 2: Corrección en OBS Studio"}),h.jsxs("p",{className:"text-neutral-300 text-[11px]",children:["Añade la fuente de video en OBS. Haz clic derecho → ",h.jsx("em",{children:"Filtros"})," → ",h.jsx("em",{children:"Corrección de Color"}),". Aumenta el Contraste a +0.25 y reduce el Brillo a -0.08 para forzar que los bordes oscuros queden totalmente invisibles en el tul."]})]}),h.jsxs("div",{className:"p-4 bg-neutral-950 rounded-xl border border-neutral-800 space-y-2",children:[h.jsx("span",{className:"font-semibold text-purple-400 block text-sm",children:"Paso 3: Salida a Proyector (Full Screen)"}),h.jsxs("p",{className:"text-neutral-300 text-[11px]",children:["En OBS Studio, haz clic derecho sobre la vista previa → ",h.jsx("em",{children:"Proyector de ventana completa"})," → Selecciona el proyector HDMI. Si usas VLC, activa ",h.jsx("em",{children:"Herramientas → Efectos y filtros → Geometría"})," para ajustar la distorsión trapezoidal si no tienes corrección óptica."]})]})]})]})]})},rR=()=>{const[l,t]=Qe.useState("gesture");return h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-neutral-900/70 border border-neutral-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"px-2 py-0.5 text-xs font-semibold uppercase tracking-wider rounded bg-purple-950/80 text-purple-400 border border-purple-800/60",children:"Arquitectura de Stand Completo"}),h.jsx("span",{className:"text-xs text-neutral-400 font-mono",children:"Distribución Espacial 3x3m y 4x3m"})]}),h.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white mt-1",children:"Guía de Integración y Presupuesto Comparativo"}),h.jsx("p",{className:"text-sm text-neutral-300 mt-1 max-w-3xl",children:"Cómo combinar la Malla Holográfica, el Póster WebAR y el Control Gestual Neón en un único stand sin interferencias lumínicas ni cuellos de botella de público."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8",children:[h.jsxs("div",{className:"lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-6",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-neutral-800 pb-3",children:[h.jsxs("h3",{className:"font-bold text-white text-sm flex items-center space-x-2",children:[h.jsx(sm,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Plano de Distribución Óptimo (Stand 4x3 Metros)"})]}),h.jsx("span",{className:"text-xs text-neutral-400 font-mono",children:"Escala 1:50"})]}),h.jsxs("div",{className:"relative w-full aspect-[4/3] bg-neutral-950 rounded-xl border border-neutral-800 p-4 flex flex-col justify-between overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1f293720_1px,transparent_1px),linear-gradient(to_bottom,#1f293720_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"}),h.jsxs("div",{onClick:()=>t("hologram"),className:`relative z-10 w-full p-3 rounded-lg border transition cursor-pointer ${l==="hologram"?"bg-indigo-950/70 border-indigo-500 shadow-lg shadow-indigo-950":"bg-neutral-900/60 border-neutral-800 hover:border-indigo-500/50"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("span",{className:"font-bold text-xs text-white flex items-center space-x-1.5",children:[h.jsx(_r,{className:"w-3.5 h-3.5 text-indigo-400"}),h.jsx("span",{children:"ZONA 1: FONDO OSCURO — Malla Holo-Gauze (Avatar 2.5m)"})]}),h.jsx("span",{className:"text-[10px] font-mono text-indigo-300",children:"0 lux luz directa"})]}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-1",children:"Colocada al fondo para proteger el tul de los focos del pasillo ferial. Proyector en el suelo apuntando en diagonal ascendente."})]}),h.jsxs("div",{className:"relative z-10 grid grid-cols-12 gap-3 my-2",children:[h.jsxs("div",{onClick:()=>t("poster"),className:`col-span-5 p-3 rounded-lg border transition cursor-pointer ${l==="poster"?"bg-cyan-950/70 border-cyan-500 shadow-lg shadow-cyan-950":"bg-neutral-900/60 border-neutral-800 hover:border-cyan-500/50"}`,children:[h.jsxs("span",{className:"font-bold text-xs text-white flex items-center space-x-1.5",children:[h.jsx(Fu,{className:"w-3.5 h-3.5 text-cyan-400"}),h.jsx("span",{children:"ZONA 2: PÓSTER WebAR"})]}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-1",children:"Pared lateral iluminada con luz difusa. Espacio de 1.5m para que los visitantes apunten con su móvil."})]}),h.jsx("div",{className:"col-span-7 flex items-center justify-center border border-dashed border-neutral-800 rounded-lg text-center p-2",children:h.jsx("span",{className:"text-[10px] font-mono text-neutral-500",children:"PASILLO INTERNO DE CIRCULACIÓN (1.8m libre)"})})]}),h.jsxs("div",{onClick:()=>t("gesture"),className:`relative z-10 w-full p-3 rounded-lg border transition cursor-pointer ${l==="gesture"?"bg-emerald-950/70 border-emerald-500 shadow-lg shadow-emerald-950":"bg-neutral-900/60 border-neutral-800 hover:border-emerald-500/50"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("span",{className:"font-bold text-xs text-white flex items-center space-x-1.5",children:[h.jsx(hl,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:'ZONA 3: MOSTRADOR FRONTAL — Control Gestual Neón (Pantalla 55")'})]}),h.jsx("span",{className:"text-[10px] font-mono text-emerald-300",children:"Frente al Pasillo Principal"})]}),h.jsx("p",{className:"text-[10px] text-neutral-400 mt-1",children:"La atracción visual que detiene a la gente que camina por el pasillo. Expositor con pulsera neón y foco UV de 15W."})]})]})]}),h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-4",children:[h.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase tracking-wider",children:"DETALLES DE INSTALACIÓN FÍSICA"}),l==="hologram"&&h.jsxs("div",{className:"space-y-2.5 text-xs text-neutral-300",children:[h.jsxs("h4",{className:"font-bold text-white text-sm flex items-center space-x-2",children:[h.jsx(_r,{className:"w-4 h-4 text-indigo-400"}),h.jsx("span",{children:"Malla Holográfica: Precauciones Críticas"})]}),h.jsxs("p",{className:"text-neutral-400 text-[11px]",children:[h.jsx("strong",{children:"1. Trampa de Luz Negra:"})," Detrás del tul de poliéster coloca una tela de algodón negra mate (molleton o terciopelo) a 50cm de distancia."]}),h.jsxs("p",{className:"text-neutral-400 text-[11px]",children:[h.jsx("strong",{children:"2. Proyector Diagonal:"})," Si colocas el proyector en el suelo, camúflalo dentro de un podio o caja negra mate con ventilación para que el público no vea la lente."]})]}),l==="poster"&&h.jsxs("div",{className:"space-y-2.5 text-xs text-neutral-300",children:[h.jsxs("h4",{className:"font-bold text-white text-sm flex items-center space-x-2",children:[h.jsx(Fu,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Póster WebAR: Experiencia de Usuario"})]}),h.jsxs("p",{className:"text-neutral-400 text-[11px]",children:[h.jsx("strong",{children:"1. Altura de Montaje:"})," El centro del póster debe estar a 1.50 metros del suelo para que cualquier visitante apunte con el brazo en ángulo natural de 90°."]}),h.jsxs("p",{className:"text-neutral-400 text-[11px]",children:[h.jsx("strong",{children:"2. Red Wi-Fi / Cobertura:"})," Aunque el WebAR pesa menos de 2MB, coloca el QR con enlace corto (bit.ly o dominio propio) para escaneo instantáneo."]})]}),l==="gesture"&&h.jsxs("div",{className:"space-y-2.5 text-xs text-neutral-300",children:[h.jsxs("h4",{className:"font-bold text-white text-sm flex items-center space-x-2",children:[h.jsx(hl,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"Control Gestual Neón: Efecto Wow Inmediato"})]}),h.jsxs("p",{className:"text-neutral-400 text-[11px]",children:[h.jsx("strong",{children:"1. Ubicación de la Cámara:"}),' Monta la webcam USB justo encima del monitor de 55", apuntando ligeramente hacia abajo para encuadrar las manos en el aire.']}),h.jsxs("p",{className:"text-neutral-400 text-[11px]",children:[h.jsx("strong",{children:"2. Foco UV Suplementario:"})," Un reflector LED de luz negra de 20W apuntando al expositor hace que la pulsera verde lima brille como una espada láser sin iluminar el stand."]})]})]}),h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-4 text-xs",children:[h.jsxs("h4",{className:"font-bold text-white text-sm flex items-center space-x-2",children:[h.jsx(T1,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"Checklist Previo a la Apertura"})]}),h.jsxs("div",{className:"space-y-1.5 text-[11px] text-neutral-400",children:[h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-300",children:[h.jsx(nu,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Laptop con salida HDMI dual configurada en modo extendido."})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-300",children:[h.jsx(nu,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Tul tensado con abrazaderas plásticas (sin arrugas diagonales)."})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-300",children:[h.jsx(nu,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Webcam calibrada con el color exacto de la pulsera en 1 clic."})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-neutral-300",children:[h.jsx(nu,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"}),h.jsx("span",{children:"QR del póster probado en Safari (iOS) y Chrome (Android)."})]})]})]})]})]}),h.jsxs("div",{className:"bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 lg:p-8 space-y-6",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-neutral-800 pb-4",children:[h.jsxs("h3",{className:"font-bold text-white text-base flex items-center space-x-2",children:[h.jsx(a1,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"Presupuesto y Comparativa: DIY vs Solución Comercial Tradicional"})]}),h.jsx("span",{className:"px-2.5 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs font-semibold",children:"Ahorro Estimado: > 94%"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-xs",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-neutral-800 text-neutral-400 font-mono",children:[h.jsx("th",{className:"py-2.5 px-3",children:"Tecnología"}),h.jsx("th",{className:"py-2.5 px-3",children:"Materiales DIY Recomendados"}),h.jsx("th",{className:"py-2.5 px-3 text-emerald-400",children:"Costo DIY"}),h.jsx("th",{className:"py-2.5 px-3 text-neutral-500",children:"Costo Comercial / Agencia"}),h.jsx("th",{className:"py-2.5 px-3",children:"Impacto"})]})}),h.jsxs("tbody",{className:"divide-y divide-neutral-800/60 text-neutral-300",children:[h.jsxs("tr",{children:[h.jsx("td",{className:"py-3 px-3 font-semibold text-white",children:"1. Malla Holo-Gauze (Avatar 2.5m)"}),h.jsx("td",{className:"py-3 px-3 text-neutral-400",children:'Tul poliéster gris humo + tubos PVC 1" + DaVinci/OBS'}),h.jsx("td",{className:"py-3 px-3 font-bold text-emerald-400 font-mono",children:"$35 – $60 USD"}),h.jsx("td",{className:"py-3 px-3 text-neutral-500 line-through font-mono",children:"$3,500 – $7,000 USD"}),h.jsx("td",{className:"py-3 px-3",children:h.jsx("span",{className:"px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] font-bold",children:"Máximo Wow"})})]}),h.jsxs("tr",{children:[h.jsx("td",{className:"py-3 px-3 font-semibold text-white",children:"2. Póster Interactivo WebAR"}),h.jsx("td",{className:"py-3 px-3 text-neutral-400",children:"Papel bond mate 250g + MindAR.js + GitHub Pages (Gratis)"}),h.jsx("td",{className:"py-3 px-3 font-bold text-emerald-400 font-mono",children:"$12 – $25 USD"}),h.jsx("td",{className:"py-3 px-3 text-neutral-500 line-through font-mono",children:"$1,500 – $3,000 USD"}),h.jsx("td",{className:"py-3 px-3",children:h.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-bold",children:"Viral / Móvil"})})]}),h.jsxs("tr",{children:[h.jsx("td",{className:"py-3 px-3 font-semibold text-white",children:"3. Control Gestual Neón"}),h.jsx("td",{className:"py-3 px-3 text-neutral-400",children:"Pulsera silicona deportiva + webcam USB 1080p + Canvas/JS"}),h.jsx("td",{className:"py-3 px-3 font-bold text-emerald-400 font-mono",children:"$15 – $35 USD"}),h.jsx("td",{className:"py-3 px-3 text-neutral-500 line-through font-mono",children:"$2,200 – $4,500 USD"}),h.jsx("td",{className:"py-3 px-3",children:h.jsx("span",{className:"px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold",children:"Interactividad"})})]})]})]})})]})]})};function sR(){const[l,t]=Qe.useState("gesture"),[i,s]=Qe.useState(!1),[o,f]=Qe.useState(!1);Qe.useEffect(()=>{typeof navigator<"u"&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&f(!0);const p=()=>{s(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",p),()=>document.removeEventListener("fullscreenchange",p)},[]);const d=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(p=>{console.warn("Could not activate fullscreen:",p)})};return h.jsxs("div",{className:"min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-cyan-500 selection:text-black",children:[h.jsx(I1,{activeTab:l,setActiveTab:t,isFullScreen:i,toggleFullScreen:d,hasCameraSupport:o}),h.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[h.jsxs("button",{id:"quick-nav-gesture",onClick:()=>t("gesture"),className:`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${l==="gesture"?"bg-gradient-to-br from-emerald-950/70 to-neutral-900 border-emerald-500/80 shadow-lg shadow-emerald-950/40":"bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-700/60 text-emerald-400 flex items-center justify-center",children:h.jsx(hl,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 font-semibold",children:"EN VIVO"})]}),h.jsxs("div",{className:"mt-2.5",children:[h.jsx("div",{className:"text-xs font-mono text-emerald-400 font-semibold",children:"IDEA 03"}),h.jsx("h3",{className:"font-bold text-white text-sm",children:"Control Gestual Neón"}),h.jsx("p",{className:"text-[11px] text-neutral-400 mt-0.5 line-clamp-1",children:"Minority Report con webcam a 60 FPS"})]})]}),h.jsxs("button",{id:"quick-nav-webar",onClick:()=>t("webar"),className:`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${l==="webar"?"bg-gradient-to-br from-cyan-950/70 to-neutral-900 border-cyan-500/80 shadow-lg shadow-cyan-950/40":"bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-700/60 text-cyan-400 flex items-center justify-center",children:h.jsx(Iu,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 font-semibold",children:"INTERACTIVO"})]}),h.jsxs("div",{className:"mt-2.5",children:[h.jsx("div",{className:"text-xs font-mono text-cyan-400 font-semibold",children:"IDEA 02"}),h.jsx("h3",{className:"font-bold text-white text-sm",children:"Póster WebAR (Sin Apps)"}),h.jsx("p",{className:"text-[11px] text-neutral-400 mt-0.5 line-clamp-1",children:"Objetos 3D desprendidos del papel"})]})]}),h.jsxs("button",{id:"quick-nav-hologram",onClick:()=>t("hologram"),className:`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${l==="hologram"?"bg-gradient-to-br from-indigo-950/70 to-neutral-900 border-indigo-500/80 shadow-lg shadow-indigo-950/40":"bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-700/60 text-indigo-400 flex items-center justify-center",children:h.jsx(_r,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-950/80 text-indigo-300 font-semibold",children:"PROYECTOR"})]}),h.jsxs("div",{className:"mt-2.5",children:[h.jsx("div",{className:"text-xs font-mono text-indigo-400 font-semibold",children:"IDEA 01"}),h.jsx("h3",{className:"font-bold text-white text-sm",children:"Malla Holo-Gauze DIY"}),h.jsx("p",{className:"text-[11px] text-neutral-400 mt-0.5 line-clamp-1",children:"Avatar flotante a escala real 2-3m"})]})]}),h.jsxs("button",{id:"quick-nav-blueprint",onClick:()=>t("blueprint"),className:`p-5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${l==="blueprint"?"bg-gradient-to-br from-purple-950/70 to-neutral-900 border-purple-500/80 shadow-lg shadow-purple-950/40":"bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"w-7 h-7 rounded-lg bg-purple-950 border border-purple-700/60 text-purple-400 flex items-center justify-center",children:h.jsx(sm,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 text-purple-300 font-semibold",children:"PLAN & BOM"})]}),h.jsxs("div",{className:"mt-2.5",children:[h.jsx("div",{className:"text-xs font-mono text-purple-400 font-semibold",children:"INTEGRACIÓN"}),h.jsx("h3",{className:"font-bold text-white text-sm",children:"Arquitectura & Costos"}),h.jsx("p",{className:"text-[11px] text-neutral-400 mt-0.5 line-clamp-1",children:"Distribución espacial y comparativa"})]})]})]}),l==="gesture"&&h.jsx(F1,{}),l==="webar"&&h.jsx(iR,{}),l==="hologram"&&h.jsx(aR,{}),l==="blueprint"&&h.jsx(rR,{})]}),h.jsx("footer",{className:"border-t border-neutral-900 bg-neutral-950/80 mt-auto py-5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-2",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),h.jsx("span",{className:"font-mono text-neutral-300",children:"Suite Tecnológica para Stands Feriales e Interactivos"})]}),h.jsx("div",{className:"flex items-center space-x-4 text-neutral-400",children:h.jsx("span",{children:"Tul Holo-Gauze • WebAR MindAR • Visión Neón HSV"})})]})})]})}US.createRoot(document.getElementById("root")).render(h.jsx(Qe.StrictMode,{children:h.jsx(sR,{})}));
