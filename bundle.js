// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gcopy=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var c=t,l=function(e,r,t){var c,l,s,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(u.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),s="get"in t,d="set"in t,l&&(s||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(e,r,t.get),d&&i&&i.call(e,r,t.set),e},s=r()?c:l;var d=function(e,r){return e[r]},p=function(e,r){return e.get(r)},_=function(e,r,t){e[r]=t},v=function(e,r,t){e.set(t,r)};var y=function(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?p:d,setter:r?v:_}};var b=function(e,r,t,n,o,a,i){var u,f,c,l,s,d,p;for(u=r.data,f=o.data,l=r.getter,c=o.setter,s=n,d=i,p=0;p<e;p++)c(f,d,l(u,s)),s+=t,d+=a;return r},g=y,j=b;var m=y,h=b;var w=function(e,r,t,n,o){var a,i,u,f,c,l;if(e<=0)return n;if(u=g(r),f=g(n),u.accessors||f.accessors)return j(e,u,t,a=t<0?(1-e)*t:0,f,o,i=o<0?(1-e)*o:0),f.data;if(1===t&&1===o){if((c=e%8)>0)for(l=0;l<c;l++)n[l]=r[l];if(e<8)return n;for(l=c;l<e;l+=8)n[l]=r[l],n[l+1]=r[l+1],n[l+2]=r[l+2],n[l+3]=r[l+3],n[l+4]=r[l+4],n[l+5]=r[l+5],n[l+6]=r[l+6],n[l+7]=r[l+7];return n}for(a=t<0?(1-e)*t:0,i=o<0?(1-e)*o:0,l=0;l<e;l++)n[i]=r[a],a+=t,i+=o;return n};return function(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(w,"ndarray",(function(e,r,t,n,o,a,i){var u,f,c,l,s,d;if(e<=0)return o;if(c=m(r),l=m(o),c.accessors||l.accessors)return h(e,c,t,n,l,a,i),l.data;if(u=n,f=i,1===t&&1===a){if((s=e%8)>0)for(d=0;d<s;d++)o[f]=r[u],u+=t,f+=a;if(e<8)return o;for(d=s;d<e;d+=8)o[f]=r[u],o[f+1]=r[u+1],o[f+2]=r[u+2],o[f+3]=r[u+3],o[f+4]=r[u+4],o[f+5]=r[u+5],o[f+6]=r[u+6],o[f+7]=r[u+7],u+=8,f+=8;return o}for(d=0;d<e;d++)o[f]=r[u],u+=t,f+=a;return o})),w}));
//# sourceMappingURL=bundle.js.map
