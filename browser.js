// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function S(e){return"string"==typeof e}function B(e){var r,t,n;if(!S(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=R(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,P=C.__defineGetter__,O=C.__defineSetter__,M=C.__lookupGetter__,U=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(M.call(e,r)||U.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(e,r,t.get),a&&O&&O.call(e,r,t.set),e};var N=I;function Y(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function",$={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function G(e){var r=$[e];return"function"==typeof r?r:$.default}var Z={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function X(e){var r=Z[e];return"function"==typeof r?r:Z.default}var J={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function z(e){var r=J[e];return"function"==typeof r?r:J.default}var q={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function D(e){var r=q[e];return"function"==typeof r?r:q.default}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,ee=Object.prototype.hasOwnProperty;function re(e,r){return null!=e&&ee.call(e,r)}var te="function"==typeof Symbol?Symbol:void 0,ne="function"==typeof te?te.toStringTag:"",ie=K()?function(e){var r,t,n;if(null==e)return Q.call(e);t=e[ne],r=re(e,ne);try{e[ne]=void 0}catch(r){return Q.call(e)}return n=Q.call(e),r?e[ne]=t:delete e[ne],n}:function(e){return Q.call(e)},oe=Array.isArray?Array.isArray:function(e){return"[object Array]"===ie(e)};function ae(e){return null!==e&&"object"==typeof e}function ue(e){return ae(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function fe(){return/^\s*function\s*([^(]*)/i}Y(ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!oe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ae));var le=/^\s*function\s*([^(]*)/i;function ce(e){var r,t,n;if(("Object"===(t=ie(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return ue(e)?"Buffer":t}Y(fe,"REGEXP",le);var se={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ye="function"==typeof Float64Array,pe="function"==typeof Float64Array?Float64Array:null,he="function"==typeof Float64Array?Float64Array:void 0,ge=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,NaN]),t=r,e=(ye&&t instanceof Float64Array||"[object Float64Array]"===ie(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?he:function(){throw new Error("not implemented")},me="function"==typeof Float32Array,we=Number.POSITIVE_INFINITY,be="function"==typeof Float32Array?Float32Array:null,de="function"==typeof Float32Array?Float32Array:void 0,ve=function(){var e,r,t;if("function"!=typeof be)return!1;try{r=new be([1,3.14,-3.14,5e40]),t=r,e=(me&&t instanceof Float32Array||"[object Float32Array]"===ie(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===we}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")},Ee="function"==typeof Uint32Array,Ae="function"==typeof Uint32Array?Uint32Array:null,Te="function"==typeof Uint32Array?Uint32Array:void 0,_e=function(){var e,r,t;if("function"!=typeof Ae)return!1;try{r=new Ae(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Ee&&t instanceof Uint32Array||"[object Uint32Array]"===ie(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")},xe="function"==typeof Int32Array,je="function"==typeof Int32Array?Int32Array:null,ke="function"==typeof Int32Array?Int32Array:void 0,Ve=function(){var e,r,t;if("function"!=typeof je)return!1;try{r=new je([1,3.14,-3.14,2147483648]),t=r,e=(xe&&t instanceof Int32Array||"[object Int32Array]"===ie(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?ke:function(){throw new Error("not implemented")},Le="function"==typeof Uint16Array,Re="function"==typeof Uint16Array?Uint16Array:null,Se="function"==typeof Uint16Array?Uint16Array:void 0,Be=function(){var e,r,t;if("function"!=typeof Re)return!1;try{r=new Re(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Le&&t instanceof Uint16Array||"[object Uint16Array]"===ie(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},Ie="function"==typeof Int16Array,Ce="function"==typeof Int16Array?Int16Array:null,Fe="function"==typeof Int16Array?Int16Array:void 0,Pe=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce([1,3.14,-3.14,32768]),t=r,e=(Ie&&t instanceof Int16Array||"[object Int16Array]"===ie(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Fe:function(){throw new Error("not implemented")},Oe="function"==typeof Uint8Array,Me="function"==typeof Uint8Array?Uint8Array:null,Ue="function"==typeof Uint8Array?Uint8Array:void 0,Ne=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me(r=[1,3.14,-3.14,256,257]),t=r,e=(Oe&&t instanceof Uint8Array||"[object Uint8Array]"===ie(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ue:function(){throw new Error("not implemented")},Ye="function"==typeof Uint8ClampedArray,We="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,$e="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([-1,0,1,3.14,4.99,255,256]),t=r,e=(Ye&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ie(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")},Ze="function"==typeof Int8Array,Xe="function"==typeof Int8Array?Int8Array:null,Je="function"==typeof Int8Array?Int8Array:void 0,ze=function(){var e,r,t;if("function"!=typeof Xe)return!1;try{r=new Xe([1,3.14,-3.14,128]),t=r,e=(Ze&&t instanceof Int8Array||"[object Int8Array]"===ie(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Je:function(){throw new Error("not implemented")};function qe(e){return"number"==typeof e}var De=Number,He=De.prototype.toString,Ke=K();function Qe(e){return"object"==typeof e&&(e instanceof De||(Ke?function(e){try{return He.call(e),!0}catch(e){return!1}}(e):"[object Number]"===ie(e)))}function er(e){return qe(e)||Qe(e)}Y(er,"isPrimitive",qe),Y(er,"isObject",Qe);var rr=De.NEGATIVE_INFINITY,tr=Math.floor;function nr(e){return tr(e)===e}function ir(e){return e<we&&e>rr&&nr(e)}function or(e){return qe(e)&&ir(e)}function ar(e){return Qe(e)&&ir(e.valueOf())}function ur(e){return or(e)||ar(e)}function fr(e){return or(e)&&e>=0}function lr(e){return ar(e)&&e.valueOf()>=0}function cr(e){return fr(e)||lr(e)}function sr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&nr(e.length)&&e.length>=0&&e.length<=4294967295}function yr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&nr(e.length)&&e.length>=0&&e.length<=9007199254740991}Y(ur,"isPrimitive",or),Y(ur,"isObject",ar),Y(cr,"isPrimitive",fr),Y(cr,"isObject",lr);var pr="function"==typeof ArrayBuffer;function hr(e){return pr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===ie(e)}function gr(e){return"object"==typeof e&&null!==e&&!oe(e)}var mr=/./;function wr(e){return"boolean"==typeof e}var br=Boolean,dr=Boolean.prototype.toString,vr=K();function Er(e){return"object"==typeof e&&(e instanceof br||(vr?function(e){try{return dr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ie(e)))}function Ar(e){return wr(e)||Er(e)}function Tr(){return new Function("return this;")()}Y(Ar,"isPrimitive",wr),Y(Ar,"isObject",Er);var _r="object"==typeof self?self:null,xr="object"==typeof window?window:null,jr="object"==typeof globalThis?globalThis:null,kr=function(e){if(arguments.length){if(!wr(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Tr()}if(jr)return jr;if(_r)return _r;if(xr)return xr;throw new Error("unexpected error. Unable to resolve global object.")}(),Vr=kr.document&&kr.document.childNodes,Lr=Int8Array,Rr="function"==typeof mr||"object"==typeof Lr||"function"==typeof Vr?function(e){return ce(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ce(e).toLowerCase():r};function Sr(e){return"function"===Rr(e)}function Br(e,r){if(!(this instanceof Br))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!qe(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!qe(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Br,"BYTES_PER_ELEMENT",8),Y(Br.prototype,"BYTES_PER_ELEMENT",8),Y(Br.prototype,"byteLength",16),Y(Br.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Br.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ir="function"==typeof Math.fround?Math.fround:null,Cr=new ve(1),Fr="function"==typeof Ir?Ir:function(e){return Cr[0]=e,Cr[0]};function Pr(e,r){if(!(this instanceof Pr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!qe(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!qe(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fr(e)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fr(r)}),this}function Or(e){return e instanceof Br||e instanceof Pr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Mr(e){return nr(e/2)}function Ur(){return"function"==typeof te&&"symbol"==typeof te("foo")&&re(te,"iterator")&&"symbol"==typeof te.iterator}Y(Pr,"BYTES_PER_ELEMENT",4),Y(Pr.prototype,"BYTES_PER_ELEMENT",4),Y(Pr.prototype,"byteLength",8),Y(Pr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Pr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Nr=Ur()?Symbol.iterator:null;function Yr(e,r,t){N(e,r,{configurable:!1,enumerable:!1,get:t})}function Wr(e){return e.re}function $r(e){return e.im}function Gr(e,r){return new ve(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Zr(e,r){return new ge(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Xr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(sr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Or(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Wr(n),$r(n))}return r}function Jr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,sr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Or(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Wr(o),$r(o))}return n}function zr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Or(n=r[i]))return null;e[o]=Wr(n),e[o+1]=$r(n),o+=2}return e}var qr=2*ve.BYTES_PER_ELEMENT,Dr=Ur();function Hr(e){return e instanceof rt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Kr(e){return e===rt||"Complex128Array"===e.name}function Qr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===qr}function et(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*qr}function rt(){var e,r,t,n;if(r=arguments.length,!(this instanceof rt))return 0===r?new rt:1===r?new rt(arguments[0]):2===r?new rt(arguments[0],arguments[1]):new rt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ve(0);else if(1===r)if(fr(arguments[0]))t=new ve(2*arguments[0]);else if(yr(arguments[0]))if((n=(t=arguments[0]).length)&&oe(t)&&Or(t[0])){if(null===(t=zr(new ve(2*n),t))){if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ve(arguments[0])}}else{if(Qr(t))t=Gr(t,0);else if(et(t))t=Zr(t,0);else if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ve(t)}else if(hr(arguments[0])){if(!nr((t=arguments[0]).byteLength/qr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",qr,t.byteLength));t=new ve(t)}else{if(!gr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Dr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Sr(t[Nr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Sr((t=t[Nr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Xr(t))instanceof Error)throw t;t=new ve(t)}else{if(!hr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!fr(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!nr(e/qr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",qr,e));if(2===r){if(!nr((n=t.byteLength-e)/qr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",qr,n));t=new ve(t,e)}else{if(!fr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*qr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*qr));t=new ve(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function tt(e){return e.re}function nt(e){return e.im}function it(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(sr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Or(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(tt(n),nt(n))}return r}function ot(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,sr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Or(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(tt(o),nt(o))}return n}function at(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Or(n=r[i]))return null;e[o]=tt(n),e[o+1]=nt(n),o+=2}return e}Y(rt,"BYTES_PER_ELEMENT",qr),Y(rt,"name","Complex64Array"),Y(rt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Sr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Sr(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Hr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,e.get(s),s)))o[y]=Wr(c),o[y+1]=$r(c);else{if(!(sr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(yr(e)){if(n){for(f=e.length,u=e.get&&e.set?z("default"):G("default"),s=0;s<f;s++)if(!Or(u(e,s))){l=!0;break}if(l){if(!Mr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,u(e,s),s)))o[y]=Wr(c),o[y+1]=$r(c);else{if(!(sr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(gr(e)&&Dr&&Sr(e[Nr])){if(!Sr((o=e[Nr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Jr(o,n,r):Xr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(rt,"of",(function(){var e,r;if(!Sr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Yr(rt.prototype,"buffer",(function(){return this._buffer.buffer})),Yr(rt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Yr(rt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(rt.prototype,"BYTES_PER_ELEMENT",rt.BYTES_PER_ELEMENT),Y(rt.prototype,"copyWithin",(function(e,r){if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(rt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Pr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Nr&&Y(t,Nr,(function(){return r.entries()})),t})),Y(rt.prototype,"get",(function(e){var r;if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!fr(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Pr((r=this._buffer)[e*=2],r[e+1])})),Yr(rt.prototype,"length",(function(){return this._length})),Y(rt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Hr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!fr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Or(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Wr(e),void(n[t+1]=$r(e))}if(Hr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*qr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ve(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!yr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Or(e[f])){o=!0;break}if(o){if(!Mr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*qr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ve(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Wr(u),n[t+1]=$r(u),t+=2}}));var ut=2*ge.BYTES_PER_ELEMENT,ft=Ur();function lt(e){return e instanceof pt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ct(e){return e===pt||"Complex64Array"===e.name}function st(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ut/2}function yt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ut}function pt(){var e,r,t,n;if(r=arguments.length,!(this instanceof pt))return 0===r?new pt:1===r?new pt(arguments[0]):2===r?new pt(arguments[0],arguments[1]):new pt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ge(0);else if(1===r)if(fr(arguments[0]))t=new ge(2*arguments[0]);else if(yr(arguments[0]))if((n=(t=arguments[0]).length)&&oe(t)&&Or(t[0])){if(null===(t=at(new ge(2*n),t))){if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ge(arguments[0])}}else{if(st(t))t=Gr(t,0);else if(yt(t))t=Zr(t,0);else if(!Mr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ge(t)}else if(hr(arguments[0])){if(!nr((t=arguments[0]).byteLength/ut))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ut,t.byteLength));t=new ge(t)}else{if(!gr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ft)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Sr(t[Nr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Sr((t=t[Nr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=it(t))instanceof Error)throw t;t=new ge(t)}else{if(!hr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!fr(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!nr(e/ut))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ut,e));if(2===r){if(!nr((n=t.byteLength-e)/ut))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ut,n));t=new ge(t,e)}else{if(!fr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ut>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ut));t=new ge(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(pt,"BYTES_PER_ELEMENT",ut),Y(pt,"name","Complex128Array"),Y(pt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Sr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Sr(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(lt(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,e.get(s),s)))o[y]=tt(c),o[y+1]=nt(c);else{if(!(sr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(yr(e)){if(n){for(f=e.length,u=e.get&&e.set?z("default"):G("default"),s=0;s<f;s++)if(!Or(u(e,s))){l=!0;break}if(l){if(!Mr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Or(c=n.call(r,u(e,s),s)))o[y]=tt(c),o[y+1]=nt(c);else{if(!(sr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(gr(e)&&ft&&Sr(e[Nr])){if(!Sr((o=e[Nr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?ot(o,n,r):it(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(pt,"of",(function(){var e,r;if(!Sr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Yr(pt.prototype,"buffer",(function(){return this._buffer.buffer})),Yr(pt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Yr(pt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(pt.prototype,"BYTES_PER_ELEMENT",pt.BYTES_PER_ELEMENT),Y(pt.prototype,"copyWithin",(function(e,r){if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(pt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Br(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Nr&&Y(t,Nr,(function(){return r.entries()})),t})),Y(pt.prototype,"get",(function(e){var r;if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!fr(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Br((r=this._buffer)[e*=2],r[e+1])})),Yr(pt.prototype,"length",(function(){return this._length})),Y(pt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!fr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Or(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=tt(e),void(n[t+1]=nt(e))}if(lt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ut,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ge(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!yr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Or(e[f])){o=!0;break}if(o){if(!Mr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ut,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ge(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=tt(u),n[t+1]=nt(u),t+=2}}));var ht=[ge,ve,Ve,_e,Pe,Be,ze,Ne,Ge,rt,pt],gt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],mt=gt.length;function wt(e){var r,t=function(e){var r;if(oe(e))return"generic";if(ue(e))return null;for(r=0;r<mt;r++)if(e instanceof ht[r])return gt[r];return se[ce(e)]||null}(e);return typeof(r=e).get===W&&typeof r.set===W?{accessorProtocol:!0,accessors:[z(t),D(t)]}:{accessorProtocol:!1,accessors:[G(t),X(t)]}}function bt(e){var r=wt(e);return{data:e,accessorProtocol:r.accessorProtocol,accessors:r.accessors}}function dt(e,r,t,n,i,o,a){var u,f,l,c,s,y,p;for(u=r.data,f=i.data,c=r.accessors[0],l=i.accessors[1],s=n,y=a,p=0;p<e;p++)l(f,y,c(u,s)),s+=t,y+=o;return r}function vt(e,r,t,n,i){var o,a,u,f,l,c;if(e<=0)return n;if(u=bt(r),f=bt(n),u.accessorProtocol||f.accessorProtocol)return dt(e,u,t,o=t<0?(1-e)*t:0,f,i,a=i<0?(1-e)*i:0),f.data;if(1===t&&1===i){if((l=e%8)>0)for(c=0;c<l;c++)n[c]=r[c];if(e<8)return n;for(c=l;c<e;c+=8)n[c]=r[c],n[c+1]=r[c+1],n[c+2]=r[c+2],n[c+3]=r[c+3],n[c+4]=r[c+4],n[c+5]=r[c+5],n[c+6]=r[c+6],n[c+7]=r[c+7];return n}for(o=t<0?(1-e)*t:0,a=i<0?(1-e)*i:0,c=0;c<e;c++)n[a]=r[o],o+=t,a+=i;return n}return Y(vt,"ndarray",(function(e,r,t,n,i,o,a){var u,f,l,c,s,y;if(e<=0)return i;if(l=bt(r),c=bt(i),l.accessorProtocol||c.accessorProtocol)return dt(e,l,t,n,c,o,a),c.data;if(u=n,f=a,1===t&&1===o){if((s=e%8)>0)for(y=0;y<s;y++)i[f]=r[u],u+=t,f+=o;if(e<8)return i;for(y=s;y<e;y+=8)i[f]=r[u],i[f+1]=r[u+1],i[f+2]=r[u+2],i[f+3]=r[u+3],i[f+4]=r[u+4],i[f+5]=r[u+5],i[f+6]=r[u+6],i[f+7]=r[u+7],u+=8,f+=8;return i}for(y=0;y<e;y++)i[f]=r[u],u+=t,f+=o;return i})),vt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gcopy=r();
//# sourceMappingURL=browser.js.map