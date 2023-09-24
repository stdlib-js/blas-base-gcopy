// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.1.0-esm/index.mjs";function o(r,e,o,t,a,n,s){var f,i,c,d,u,l,m;for(f=e.data,i=a.data,d=e.accessors[0],c=a.accessors[1],u=t,l=s,m=0;m<r;m++)c(i,l,d(f,u)),u+=o,l+=n;return e}function t(r,t,a,n,s){var f,i,c,d,u,l;if(r<=0)return n;if(c=e(t),d=e(n),c.accessorProtocol||d.accessorProtocol)return o(r,c,a,f=a<0?(1-r)*a:0,d,s,i=s<0?(1-r)*s:0),d.data;if(1===a&&1===s){if((u=r%8)>0)for(l=0;l<u;l++)n[l]=t[l];if(r<8)return n;for(l=u;l<r;l+=8)n[l]=t[l],n[l+1]=t[l+1],n[l+2]=t[l+2],n[l+3]=t[l+3],n[l+4]=t[l+4],n[l+5]=t[l+5],n[l+6]=t[l+6],n[l+7]=t[l+7];return n}for(f=a<0?(1-r)*a:0,i=s<0?(1-r)*s:0,l=0;l<r;l++)n[i]=t[f],f+=a,i+=s;return n}function a(r,t,a,n,s,f,i){var c,d,u,l,m,j;if(r<=0)return s;if(u=e(t),l=e(s),u.accessorProtocol||l.accessorProtocol)return o(r,u,a,n,l,f,i),l.data;if(c=n,d=i,1===a&&1===f){if((m=r%8)>0)for(j=0;j<m;j++)s[d]=t[c],c+=a,d+=f;if(r<8)return s;for(j=m;j<r;j+=8)s[d]=t[c],s[d+1]=t[c+1],s[d+2]=t[c+2],s[d+3]=t[c+3],s[d+4]=t[c+4],s[d+5]=t[c+5],s[d+6]=t[c+6],s[d+7]=t[c+7],c+=8,d+=8;return s}for(j=0;j<r;j++)s[d]=t[c],c+=a,d+=f;return s}r(t,"ndarray",a);export{t as default,a as ndarray};
//# sourceMappingURL=index.mjs.map
