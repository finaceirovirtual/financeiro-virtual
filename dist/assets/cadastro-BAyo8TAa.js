import"./common-AY5TH-UT.js";import{L as Yo,_ as Jo,C as Zo,r as Ui,F as ta,g as yn,a as ea,b as na,c as ra,d as bt,e as ia,S as sa,i as oa,f as aa,h as ua,j as la,k as ha,u as ca,G as fa,s as da}from"./index-68602d24-Fm6UU_b-.js";var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ds;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(g,y,v){for(var p=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)p[wt-2]=arguments[wt];return d.prototype[y].apply(g,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,m){m||(m=0);var g=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)g[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)g[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var v=E.g[3],p=d+(v^m&(y^v))+g[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=v+(y^d&(m^y))+g[1]+3905402710&4294967295,v=d+(p<<12&4294967295|p>>>20),p=y+(m^v&(d^m))+g[2]+606105819&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(d^y&(v^d))+g[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(v^m&(y^v))+g[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=v+(y^d&(m^y))+g[5]+1200080426&4294967295,v=d+(p<<12&4294967295|p>>>20),p=y+(m^v&(d^m))+g[6]+2821735955&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(d^y&(v^d))+g[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(v^m&(y^v))+g[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=v+(y^d&(m^y))+g[9]+2336552879&4294967295,v=d+(p<<12&4294967295|p>>>20),p=y+(m^v&(d^m))+g[10]+4294925233&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(d^y&(v^d))+g[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(v^m&(y^v))+g[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=v+(y^d&(m^y))+g[13]+4254626195&4294967295,v=d+(p<<12&4294967295|p>>>20),p=y+(m^v&(d^m))+g[14]+2792965006&4294967295,y=v+(p<<17&4294967295|p>>>15),p=m+(d^y&(v^d))+g[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^v&(m^y))+g[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(d^m))+g[6]+3225465664&4294967295,v=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(v^d))+g[11]+643717713&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^d&(y^v))+g[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^v&(m^y))+g[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(d^m))+g[10]+38016083&4294967295,v=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(v^d))+g[15]+3634488961&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^d&(y^v))+g[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^v&(m^y))+g[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(d^m))+g[14]+3275163606&4294967295,v=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(v^d))+g[3]+4107603335&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^d&(y^v))+g[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^v&(m^y))+g[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=v+(m^y&(d^m))+g[2]+4243563512&4294967295,v=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(v^d))+g[7]+1735328473&4294967295,y=v+(p<<14&4294967295|p>>>18),p=m+(v^d&(y^v))+g[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^v)+g[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=v+(d^m^y)+g[8]+2272392833&4294967295,v=d+(p<<11&4294967295|p>>>21),p=y+(v^d^m)+g[11]+1839030562&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^d)+g[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^v)+g[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=v+(d^m^y)+g[4]+1272893353&4294967295,v=d+(p<<11&4294967295|p>>>21),p=y+(v^d^m)+g[7]+4139469664&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^d)+g[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^v)+g[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=v+(d^m^y)+g[0]+3936430074&4294967295,v=d+(p<<11&4294967295|p>>>21),p=y+(v^d^m)+g[3]+3572445317&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^d)+g[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^v)+g[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=v+(d^m^y)+g[12]+3873151461&4294967295,v=d+(p<<11&4294967295|p>>>21),p=y+(v^d^m)+g[15]+530742520&4294967295,y=v+(p<<16&4294967295|p>>>16),p=m+(y^v^d)+g[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~v))+g[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=v+(m^(d|~y))+g[7]+1126891415&4294967295,v=d+(p<<10&4294967295|p>>>22),p=y+(d^(v|~m))+g[14]+2878612391&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~d))+g[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~v))+g[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=v+(m^(d|~y))+g[3]+2399980690&4294967295,v=d+(p<<10&4294967295|p>>>22),p=y+(d^(v|~m))+g[10]+4293915773&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~d))+g[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~v))+g[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=v+(m^(d|~y))+g[15]+4264355552&4294967295,v=d+(p<<10&4294967295|p>>>22),p=y+(d^(v|~m))+g[6]+2734768916&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~d))+g[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~v))+g[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=v+(m^(d|~y))+g[11]+3174756917&4294967295,v=d+(p<<10&4294967295|p>>>22),p=y+(d^(v|~m))+g[2]+718787259&4294967295,y=v+(p<<15&4294967295|p>>>17),p=m+(v^(y|~d))+g[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+v&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,g=this.B,y=this.h,v=0;v<d;){if(y==0)for(;v<=m;)s(this,E,v),v+=this.blockSize;if(typeof E=="string"){for(;v<d;)if(g[y++]=E.charCodeAt(v++),y==this.blockSize){s(this,g),y=0;break}}else for(;v<d;)if(g[y++]=E[v++],y==this.blockSize){s(this,g),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var g=0;32>g;g+=8)E[m++]=this.g[d]>>>g&255;return E};function a(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function l(E,d){this.h=d;for(var m=[],g=!0,y=E.length-1;0<=y;y--){var v=E[y]|0;g&&v==d||(m[y]=v,g=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?a(E,function(d){return new l([d|0],0>d?-1:0)}):new l([E|0],0>E?-1:0)}function _(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(_(-E));for(var d=[],m=1,g=0;E>=m;g++)d[g]=E/m|0,m*=4294967296;return new l(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=_(Math.pow(d,8)),g=w,y=0;y<E.length;y+=8){var v=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+v),d);8>v?(v=_(Math.pow(d,v)),g=g.j(v).add(_(p))):(g=g.j(m),g=g.add(_(p)))}return g}var w=f(0),S=f(1),C=f(16777216);r=l.prototype,r.m=function(){if(O(this))return-N(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var g=this.i(m);E+=(0<=g?g:4294967296+g)*d,d*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(O(this))return"-"+N(this).toString(E);for(var d=_(Math.pow(E,6)),m=this,g="";;){var y=it(m,d).g;m=K(m,y.j(d));var v=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,k(m))return v+g;for(;6>v.length;)v="0"+v;g=v+g}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function O(E){return E.h==-1}r.l=function(E){return E=K(this,E),O(E)?-1:k(E)?0:1};function N(E){for(var d=E.g.length,m=[],g=0;g<d;g++)m[g]=~E.g[g];return new l(m,~E.h).add(S)}r.abs=function(){return O(this)?N(this):this},r.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0,y=0;y<=d;y++){var v=g+(this.i(y)&65535)+(E.i(y)&65535),p=(v>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);g=p>>>16,v&=65535,p&=65535,m[y]=p<<16|v}return new l(m,m[m.length-1]&-2147483648?-1:0)};function K(E,d){return E.add(N(d))}r.j=function(E){if(k(this)||k(E))return w;if(O(this))return O(E)?N(this).j(N(E)):N(N(this).j(E));if(O(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return _(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],g=0;g<2*d;g++)m[g]=0;for(g=0;g<this.g.length;g++)for(var y=0;y<E.g.length;y++){var v=this.i(g)>>>16,p=this.i(g)&65535,wt=E.i(y)>>>16,ue=E.i(y)&65535;m[2*g+2*y]+=p*ue,$(m,2*g+2*y),m[2*g+2*y+1]+=v*ue,$(m,2*g+2*y+1),m[2*g+2*y+1]+=p*wt,$(m,2*g+2*y+1),m[2*g+2*y+2]+=v*wt,$(m,2*g+2*y+2)}for(g=0;g<d;g++)m[g]=m[2*g+1]<<16|m[2*g];for(g=d;g<2*d;g++)m[g]=0;return new l(m,0)};function $(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function Q(E,d){this.g=E,this.h=d}function it(E,d){if(k(d))throw Error("division by zero");if(k(E))return new Q(w,w);if(O(E))return d=it(N(E),d),new Q(N(d.g),N(d.h));if(O(d))return d=it(E,N(d)),new Q(N(d.g),d.h);if(30<E.g.length){if(O(E)||O(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,g=d;0>=g.l(E);)m=Lt(m),g=Lt(g);var y=mt(m,1),v=mt(g,1);for(g=mt(g,2),m=mt(m,2);!k(g);){var p=v.add(g);0>=p.l(E)&&(y=y.add(m),v=p),g=mt(g,1),m=mt(m,1)}return d=K(E,y.j(d)),new Q(y,d)}for(y=w;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),g=Math.ceil(Math.log(m)/Math.LN2),g=48>=g?1:Math.pow(2,g-48),v=_(m),p=v.j(d);O(p)||0<p.l(E);)m-=g,v=_(m),p=v.j(d);k(v)&&(v=S),y=y.add(v),E=K(E,p)}return new Q(y,E)}r.A=function(E){return it(this,E).h},r.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0;g<d;g++)m[g]=this.i(g)&E.i(g);return new l(m,this.h&E.h)},r.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0;g<d;g++)m[g]=this.i(g)|E.i(g);return new l(m,this.h|E.h)},r.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],g=0;g<d;g++)m[g]=this.i(g)^E.i(g);return new l(m,this.h^E.h)};function Lt(E){for(var d=E.g.length+1,m=[],g=0;g<d;g++)m[g]=E.i(g)<<1|E.i(g-1)>>>31;return new l(m,E.h)}function mt(E,d){var m=d>>5;d%=32;for(var g=E.g.length-m,y=[],v=0;v<g;v++)y[v]=0<d?E.i(v+m)>>>d|E.i(v+m+1)<<32-d:E.i(v+m);return new l(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=I,ds=l}).apply(typeof Bi<"u"?Bi:typeof self<"u"?self:typeof window<"u"?window:{});var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ps,Ve,ms,mn,cr,gs,_s,ys;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,u){return n==Array.prototype||n==Object.prototype||(n[o]=u.value),n};function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof hn=="object"&&hn];for(var o=0;o<n.length;++o){var u=n[o];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var i=e(this);function s(n,o){if(o)t:{var u=i;n=n.split(".");for(var h=0;h<n.length-1;h++){var T=n[h];if(!(T in u))break t;u=u[T]}n=n[n.length-1],h=u[n],o=o(h),o!=h&&o!=null&&t(u,n,{configurable:!0,writable:!0,value:o})}}function a(n,o){n instanceof String&&(n+="");var u=0,h=!1,T={next:function(){if(!h&&u<n.length){var A=u++;return{value:o(A,n[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(n){return n||function(){return a(this,function(o,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function f(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function _(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function I(n,o,u){return n.call.apply(n.bind,arguments)}function w(n,o,u){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),n.apply(o,T)}}return function(){return n.apply(o,arguments)}}function S(n,o,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function C(n,o){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function k(n,o){function u(){}u.prototype=o.prototype,n.aa=o.prototype,n.prototype=new u,n.prototype.constructor=n,n.Qb=function(h,T,A){for(var V=Array(arguments.length-2),U=2;U<arguments.length;U++)V[U-2]=arguments[U];return o.prototype[T].apply(h,V)}}function O(n){const o=n.length;if(0<o){const u=Array(o);for(let h=0;h<o;h++)u[h]=n[h];return u}return[]}function N(n,o){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(f(h)){const T=n.length||0,A=h.length||0;n.length=T+A;for(let V=0;V<A;V++)n[T+V]=h[V]}else n.push(h)}}class K{constructor(o,u){this.i=o,this.j=u,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function $(n){return/^[\s\xa0]*$/.test(n)}function Q(){var n=c.navigator;return n&&(n=n.userAgent)?n:""}function it(n){return it[" "](n),n}it[" "]=function(){};var Lt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function mt(n,o,u){for(const h in n)o.call(u,n[h],h,n)}function E(n,o){for(const u in n)o.call(void 0,n[u],u,n)}function d(n){const o={};for(const u in n)o[u]=n[u];return o}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function g(n,o){let u,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(u in h)n[u]=h[u];for(let A=0;A<m.length;A++)u=m[A],Object.prototype.hasOwnProperty.call(h,u)&&(n[u]=h[u])}}function y(n){var o=1;n=n.split(":");const u=[];for(;0<o&&n.length;)u.push(n.shift()),o--;return n.length&&u.push(n.join(":")),u}function v(n){c.setTimeout(()=>{throw n},0)}function p(){var n=Fn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class wt{constructor(){this.h=this.g=null}add(o,u){const h=ue.get();h.set(o,u),this.h?this.h.next=h:this.g=h,this.h=h}}var ue=new K(()=>new go,n=>n.reset());class go{constructor(){this.next=this.g=this.h=null}set(o,u){this.h=o,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let le,he=!1,Fn=new wt,Ur=()=>{const n=c.Promise.resolve(void 0);le=()=>{n.then(_o)}};var _o=()=>{for(var n;n=p();){try{n.h.call(n.g)}catch(u){v(u)}var o=ue;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}he=!1};function Ct(){this.s=this.s,this.C=this.C}Ct.prototype.s=!1,Ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var yo=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const u=()=>{};c.addEventListener("test",u,o),c.removeEventListener("test",u,o)}catch{}return n}();function ce(n,o){if(st.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var u=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(Lt){t:{try{it(o.nodeName);var T=!0;break t}catch{}T=!1}T||(o=null)}}else u=="mouseover"?o=n.fromElement:u=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Eo[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&ce.aa.h.call(this)}}k(ce,st);var Eo={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ge="closure_listenable_"+(1e6*Math.random()|0),To=0;function vo(n,o,u,h,T){this.listener=n,this.proxy=null,this.src=o,this.type=u,this.capture=!!h,this.ha=T,this.key=++To,this.da=this.fa=!1}function Ke(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function ze(n){this.src=n,this.g={},this.h=0}ze.prototype.add=function(n,o,u,h,T){var A=n.toString();n=this.g[A],n||(n=this.g[A]=[],this.h++);var V=Bn(n,o,h,T);return-1<V?(o=n[V],u||(o.fa=!1)):(o=new vo(o,this.src,A,!!h,T),o.fa=u,n.push(o)),o};function Un(n,o){var u=o.type;if(u in n.g){var h=n.g[u],T=Array.prototype.indexOf.call(h,o,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(Ke(o),n.g[u].length==0&&(delete n.g[u],n.h--))}}function Bn(n,o,u,h){for(var T=0;T<n.length;++T){var A=n[T];if(!A.da&&A.listener==o&&A.capture==!!u&&A.ha==h)return T}return-1}var jn="closure_lm_"+(1e6*Math.random()|0),qn={};function Br(n,o,u,h,T){if(Array.isArray(o)){for(var A=0;A<o.length;A++)Br(n,o[A],u,h,T);return null}return u=$r(u),n&&n[Ge]?n.K(o,u,_(h)?!!h.capture:!1,T):Io(n,o,u,!1,h,T)}function Io(n,o,u,h,T,A){if(!o)throw Error("Invalid event type");var V=_(T)?!!T.capture:!!T,U=Gn(n);if(U||(n[jn]=U=new ze(n)),u=U.add(o,u,h,V,A),u.proxy)return u;if(h=Ao(),u.proxy=h,h.src=n,h.listener=u,n.addEventListener)yo||(T=V),T===void 0&&(T=!1),n.addEventListener(o.toString(),h,T);else if(n.attachEvent)n.attachEvent(qr(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ao(){function n(u){return o.call(n.src,n.listener,u)}const o=wo;return n}function jr(n,o,u,h,T){if(Array.isArray(o))for(var A=0;A<o.length;A++)jr(n,o[A],u,h,T);else h=_(h)?!!h.capture:!!h,u=$r(u),n&&n[Ge]?(n=n.i,o=String(o).toString(),o in n.g&&(A=n.g[o],u=Bn(A,u,h,T),-1<u&&(Ke(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete n.g[o],n.h--)))):n&&(n=Gn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=Bn(o,u,h,T)),(u=-1<n?o[n]:null)&&$n(u))}function $n(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ge])Un(o.i,n);else{var u=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(u,h,n.capture):o.detachEvent?o.detachEvent(qr(u),h):o.addListener&&o.removeListener&&o.removeListener(h),(u=Gn(o))?(Un(u,n),u.h==0&&(u.src=null,o[jn]=null)):Ke(n)}}}function qr(n){return n in qn?qn[n]:qn[n]="on"+n}function wo(n,o){if(n.da)n=!0;else{o=new ce(o,this);var u=n.listener,h=n.ha||n.src;n.fa&&$n(n),n=u.call(h,o)}return n}function Gn(n){return n=n[jn],n instanceof ze?n:null}var Kn="__closure_events_fn_"+(1e9*Math.random()>>>0);function $r(n){return typeof n=="function"?n:(n[Kn]||(n[Kn]=function(o){return n.handleEvent(o)}),n[Kn])}function ot(){Ct.call(this),this.i=new ze(this),this.M=this,this.F=null}k(ot,Ct),ot.prototype[Ge]=!0,ot.prototype.removeEventListener=function(n,o,u,h){jr(this,n,o,u,h)};function dt(n,o){var u,h=n.F;if(h)for(u=[];h;h=h.F)u.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new st(o,n);else if(o instanceof st)o.target=o.target||n;else{var T=o;o=new st(h,n),g(o,T)}if(T=!0,u)for(var A=u.length-1;0<=A;A--){var V=o.g=u[A];T=Qe(V,h,!0,o)&&T}if(V=o.g=n,T=Qe(V,h,!0,o)&&T,T=Qe(V,h,!1,o)&&T,u)for(A=0;A<u.length;A++)V=o.g=u[A],T=Qe(V,h,!1,o)&&T}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var u=n.g[o],h=0;h<u.length;h++)Ke(u[h]);delete n.g[o],n.h--}}this.F=null},ot.prototype.K=function(n,o,u,h){return this.i.add(String(n),o,!1,u,h)},ot.prototype.L=function(n,o,u,h){return this.i.add(String(n),o,!0,u,h)};function Qe(n,o,u,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var T=!0,A=0;A<o.length;++A){var V=o[A];if(V&&!V.da&&V.capture==u){var U=V.listener,tt=V.ha||V.src;V.fa&&Un(n.i,V),T=U.call(tt,h)!==!1&&T}}return T&&!h.defaultPrevented}function Gr(n,o,u){if(typeof n=="function")u&&(n=S(n,u));else if(n&&typeof n.handleEvent=="function")n=S(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:c.setTimeout(n,o||0)}function Kr(n){n.g=Gr(()=>{n.g=null,n.i&&(n.i=!1,Kr(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Ro extends Ct{constructor(o,u){super(),this.m=o,this.l=u,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Kr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fe(n){Ct.call(this),this.h=n,this.g={}}k(fe,Ct);var zr=[];function Qr(n){mt(n.g,function(o,u){this.g.hasOwnProperty(u)&&$n(o)},n),n.g={}}fe.prototype.N=function(){fe.aa.N.call(this),Qr(this)},fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zn=c.JSON.stringify,Po=c.JSON.parse,Vo=class{stringify(n){return c.JSON.stringify(n,void 0)}parse(n){return c.JSON.parse(n,void 0)}};function Qn(){}Qn.prototype.h=null;function Hr(n){return n.h||(n.h=n.i())}function Wr(){}var de={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){st.call(this,"d")}k(Hn,st);function Wn(){st.call(this,"c")}k(Wn,st);var Ft={},Xr=null;function He(){return Xr=Xr||new ot}Ft.La="serverreachability";function Yr(n){st.call(this,Ft.La,n)}k(Yr,st);function pe(n){const o=He();dt(o,new Yr(o))}Ft.STAT_EVENT="statevent";function Jr(n,o){st.call(this,Ft.STAT_EVENT,n),this.stat=o}k(Jr,st);function pt(n){const o=He();dt(o,new Jr(o,n))}Ft.Ma="timingevent";function Zr(n,o){st.call(this,Ft.Ma,n),this.size=o}k(Zr,st);function me(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){n()},o)}function ge(){this.g=!0}ge.prototype.xa=function(){this.g=!1};function So(n,o,u,h,T,A){n.info(function(){if(n.g)if(A)for(var V="",U=A.split("&"),tt=0;tt<U.length;tt++){var F=U[tt].split("=");if(1<F.length){var at=F[0];F=F[1];var ut=at.split("_");V=2<=ut.length&&ut[1]=="type"?V+(at+"="+F+"&"):V+(at+"=redacted&")}}else V=null;else V=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+o+`
`+u+`
`+V})}function Co(n,o,u,h,T,A,V){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+o+`
`+u+`
`+A+" "+V})}function Wt(n,o,u,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+ko(n,u)+(h?" "+h:"")})}function Do(n,o){n.info(function(){return"TIMEOUT: "+o})}ge.prototype.info=function(){};function ko(n,o){if(!n.g)return o;if(!o)return null;try{var u=JSON.parse(o);if(u){for(n=0;n<u.length;n++)if(Array.isArray(u[n])){var h=u[n];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var V=1;V<T.length;V++)T[V]=""}}}}return zn(u)}catch{return o}}var We={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function Xe(){}k(Xe,Qn),Xe.prototype.g=function(){return new XMLHttpRequest},Xe.prototype.i=function(){return{}},Xn=new Xe;function Dt(n,o,u,h){this.j=n,this.i=o,this.l=u,this.R=h||1,this.U=new fe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ei}function ei(){this.i=null,this.g="",this.h=!1}var ni={},Yn={};function Jn(n,o,u){n.L=1,n.v=tn(Rt(o)),n.m=u,n.P=!0,ri(n,null)}function ri(n,o){n.F=Date.now(),Ye(n),n.A=Rt(n.v);var u=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),_i(u.i,"t",h),n.C=0,u=n.j.J,n.h=new ei,n.g=xi(n.j,u?o:null,!n.m),0<n.O&&(n.M=new Ro(S(n.Y,n,n.g),n.O)),o=n.U,u=n.g,h=n.ca;var T="readystatechange";Array.isArray(T)||(T&&(zr[0]=T.toString()),T=zr);for(var A=0;A<T.length;A++){var V=Br(u,T[A],h||o.handleEvent,!1,o.h||o);if(!V)break;o.g[V.key]=V}o=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),pe(),So(n.i,n.u,n.A,n.l,n.R,n.m)}Dt.prototype.ca=function(n){n=n.target;const o=this.M;o&&Pt(n)==3?o.j():this.Y(n)},Dt.prototype.Y=function(n){try{if(n==this.g)t:{const ut=Pt(this.g);var o=this.g.Ba();const Jt=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||wi(this.g)))){this.J||ut!=4||o==7||(o==8||0>=Jt?pe(3):pe(2)),Zn(this);var u=this.g.Z();this.X=u;e:if(ii(this)){var h=wi(this.g);n="";var T=h.length,A=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),_e(this);var V="";break e}this.h.i=new c.TextDecoder}for(o=0;o<T;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(A&&o==T-1)});h.length=0,this.h.g+=n,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=u==200,Co(this.i,this.u,this.A,this.l,this.R,ut,u),this.o){if(this.T&&!this.K){e:{if(this.g){var U,tt=this.g;if((U=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(U)){var F=U;break e}}F=null}if(u=F)Wt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tr(this,u);else{this.o=!1,this.s=3,pt(12),Ut(this),_e(this);break t}}if(this.P){u=!0;let yt;for(;!this.J&&this.C<V.length;)if(yt=No(this,V),yt==Yn){ut==4&&(this.s=4,pt(14),u=!1),Wt(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==ni){this.s=4,pt(15),Wt(this.i,this.l,V,"[Invalid Chunk]"),u=!1;break}else Wt(this.i,this.l,yt,null),tr(this,yt);if(ii(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||V.length!=0||this.h.h||(this.s=1,pt(16),u=!1),this.o=this.o&&u,!u)Wt(this.i,this.l,V,"[Invalid Chunked Response]"),Ut(this),_e(this);else if(0<V.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),or(at),at.M=!0,pt(11))}}else Wt(this.i,this.l,V,null),tr(this,V);ut==4&&Ut(this),this.o&&!this.J&&(ut==4?ki(this.j,this):(this.o=!1,Ye(this)))}else Wo(this.g),u==400&&0<V.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Ut(this),_e(this)}}}catch{}finally{}};function ii(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function No(n,o){var u=n.C,h=o.indexOf(`
`,u);return h==-1?Yn:(u=Number(o.substring(u,h)),isNaN(u)?ni:(h+=1,h+u>o.length?Yn:(o=o.slice(h,h+u),n.C=h+u,o)))}Dt.prototype.cancel=function(){this.J=!0,Ut(this)};function Ye(n){n.S=Date.now()+n.I,si(n,n.I)}function si(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=me(S(n.ba,n),o)}function Zn(n){n.B&&(c.clearTimeout(n.B),n.B=null)}Dt.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(Do(this.i,this.A),this.L!=2&&(pe(),pt(17)),Ut(this),this.s=2,_e(this)):si(this,this.S-n)};function _e(n){n.j.G==0||n.J||ki(n.j,n)}function Ut(n){Zn(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,Qr(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function tr(n,o){try{var u=n.j;if(u.G!=0&&(u.g==n||er(u.h,n))){if(!n.K&&er(u.h,n)&&u.G==3){try{var h=u.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<n.F)an(u),sn(u);else break t;sr(u),pt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=me(S(u.Za,u),6e3));if(1>=ui(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else jt(u,11)}else if((n.K||u.g==n)&&an(u),!$(o))for(T=u.Da.g.parse(o),o=0;o<T.length;o++){let F=T[o];if(u.T=F[0],F=F[1],u.G==2)if(F[0]=="c"){u.K=F[1],u.ia=F[2];const at=F[3];at!=null&&(u.la=at,u.j.info("VER="+u.la));const ut=F[4];ut!=null&&(u.Aa=ut,u.j.info("SVER="+u.Aa));const Jt=F[5];Jt!=null&&typeof Jt=="number"&&0<Jt&&(h=1.5*Jt,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const yt=n.g;if(yt){const ln=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ln){var A=h.h;A.g||ln.indexOf("spdy")==-1&&ln.indexOf("quic")==-1&&ln.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(nr(A,A.h),A.h=null))}if(h.D){const ar=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;ar&&(h.ya=ar,q(h.I,h.D,ar))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-n.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var V=n;if(h.qa=Oi(h,h.J?h.ia:null,h.W),V.K){li(h.h,V);var U=V,tt=h.L;tt&&(U.I=tt),U.B&&(Zn(U),Ye(U)),h.g=V}else Ci(h);0<u.i.length&&on(u)}else F[0]!="stop"&&F[0]!="close"||jt(u,7);else u.G==3&&(F[0]=="stop"||F[0]=="close"?F[0]=="stop"?jt(u,7):ir(u):F[0]!="noop"&&u.l&&u.l.ta(F),u.v=0)}}pe(4)}catch{}}var bo=class{constructor(n,o){this.g=n,this.map=o}};function oi(n){this.l=n||10,c.PerformanceNavigationTiming?(n=c.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ai(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ui(n){return n.h?1:n.g?n.g.size:0}function er(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function nr(n,o){n.g?n.g.add(o):n.h=o}function li(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}oi.prototype.cancel=function(){if(this.i=hi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function hi(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const u of n.g.values())o=o.concat(u.D);return o}return O(n.i)}function Oo(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(f(n)){for(var o=[],u=n.length,h=0;h<u;h++)o.push(n[h]);return o}o=[],u=0;for(h in n)o[u++]=n[h];return o}function xo(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(f(n)||typeof n=="string"){var o=[];n=n.length;for(var u=0;u<n;u++)o.push(u);return o}o=[],u=0;for(const h in n)o[u++]=h;return o}}}function ci(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(f(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var u=xo(n),h=Oo(n),T=h.length,A=0;A<T;A++)o.call(void 0,h[A],u&&u[A],n)}var fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mo(n,o){if(n){n=n.split("&");for(var u=0;u<n.length;u++){var h=n[u].indexOf("="),T=null;if(0<=h){var A=n[u].substring(0,h);T=n[u].substring(h+1)}else A=n[u];o(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Bt(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof Bt){this.h=n.h,Je(this,n.j),this.o=n.o,this.g=n.g,Ze(this,n.s),this.l=n.l;var o=n.i,u=new Te;u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),di(this,u),this.m=n.m}else n&&(o=String(n).match(fi))?(this.h=!1,Je(this,o[1]||"",!0),this.o=ye(o[2]||""),this.g=ye(o[3]||"",!0),Ze(this,o[4]),this.l=ye(o[5]||"",!0),di(this,o[6]||"",!0),this.m=ye(o[7]||"")):(this.h=!1,this.i=new Te(null,this.h))}Bt.prototype.toString=function(){var n=[],o=this.j;o&&n.push(Ee(o,pi,!0),":");var u=this.g;return(u||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Ee(o,pi,!0),"@"),n.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&n.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&n.push("/"),n.push(Ee(u,u.charAt(0)=="/"?Uo:Fo,!0))),(u=this.i.toString())&&n.push("?",u),(u=this.m)&&n.push("#",Ee(u,jo)),n.join("")};function Rt(n){return new Bt(n)}function Je(n,o,u){n.j=u?ye(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Ze(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function di(n,o,u){o instanceof Te?(n.i=o,qo(n.i,n.h)):(u||(o=Ee(o,Bo)),n.i=new Te(o,n.h))}function q(n,o,u){n.i.set(o,u)}function tn(n){return q(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ye(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ee(n,o,u){return typeof n=="string"?(n=encodeURI(n).replace(o,Lo),u&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Lo(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var pi=/[#\/\?@]/g,Fo=/[#\?:]/g,Uo=/[#\?]/g,Bo=/[#\?@]/g,jo=/#/g;function Te(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function kt(n){n.g||(n.g=new Map,n.h=0,n.i&&Mo(n.i,function(o,u){n.add(decodeURIComponent(o.replace(/\+/g," ")),u)}))}r=Te.prototype,r.add=function(n,o){kt(this),this.i=null,n=Xt(this,n);var u=this.g.get(n);return u||this.g.set(n,u=[]),u.push(o),this.h+=1,this};function mi(n,o){kt(n),o=Xt(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function gi(n,o){return kt(n),o=Xt(n,o),n.g.has(o)}r.forEach=function(n,o){kt(this),this.g.forEach(function(u,h){u.forEach(function(T){n.call(o,T,h,this)},this)},this)},r.na=function(){kt(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),u=[];for(let h=0;h<o.length;h++){const T=n[h];for(let A=0;A<T.length;A++)u.push(o[h])}return u},r.V=function(n){kt(this);let o=[];if(typeof n=="string")gi(this,n)&&(o=o.concat(this.g.get(Xt(this,n))));else{n=Array.from(this.g.values());for(let u=0;u<n.length;u++)o=o.concat(n[u])}return o},r.set=function(n,o){return kt(this),this.i=null,n=Xt(this,n),gi(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},r.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function _i(n,o,u){mi(n,o),0<u.length&&(n.i=null,n.g.set(Xt(n,o),O(u)),n.h+=u.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var u=0;u<o.length;u++){var h=o[u];const A=encodeURIComponent(String(h)),V=this.V(h);for(h=0;h<V.length;h++){var T=A;V[h]!==""&&(T+="="+encodeURIComponent(String(V[h]))),n.push(T)}}return this.i=n.join("&")};function Xt(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function qo(n,o){o&&!n.j&&(kt(n),n.i=null,n.g.forEach(function(u,h){var T=h.toLowerCase();h!=T&&(mi(this,h),_i(this,T,u))},n)),n.j=o}function $o(n,o){const u=new ge;if(c.Image){const h=new Image;h.onload=C(Nt,u,"TestLoadImage: loaded",!0,o,h),h.onerror=C(Nt,u,"TestLoadImage: error",!1,o,h),h.onabort=C(Nt,u,"TestLoadImage: abort",!1,o,h),h.ontimeout=C(Nt,u,"TestLoadImage: timeout",!1,o,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Go(n,o){const u=new ge,h=new AbortController,T=setTimeout(()=>{h.abort(),Nt(u,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?Nt(u,"TestPingServer: ok",!0,o):Nt(u,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(T),Nt(u,"TestPingServer: error",!1,o)})}function Nt(n,o,u,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(u)}catch{}}function Ko(){this.g=new Vo}function zo(n,o,u){const h=u||"";try{ci(n,function(T,A){let V=T;_(T)&&(V=zn(T)),o.push(h+A+"="+encodeURIComponent(V))})}catch(T){throw o.push(h+"type="+encodeURIComponent("_badmap")),T}}function en(n){this.l=n.Ub||null,this.j=n.eb||!1}k(en,Qn),en.prototype.g=function(){return new nn(this.l,this.j)},en.prototype.i=function(n){return function(){return n}}({});function nn(n,o){ot.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(nn,ot),r=nn.prototype,r.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,Ie(this)},r.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||c).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ve(this)),this.readyState=0},r.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ie(this)),this.g&&(this.readyState=3,Ie(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yi(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function yi(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}r.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?ve(this):Ie(this),this.readyState==3&&yi(this)}},r.Ra=function(n){this.g&&(this.response=this.responseText=n,ve(this))},r.Qa=function(n){this.g&&(this.response=n,ve(this))},r.ga=function(){this.g&&ve(this)};function ve(n){n.readyState=4,n.l=null,n.j=null,n.v=null,Ie(n)}r.setRequestHeader=function(n,o){this.u.append(n,o)},r.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var u=o.next();!u.done;)u=u.value,n.push(u[0]+": "+u[1]),u=o.next();return n.join(`\r
`)};function Ie(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function Ei(n){let o="";return mt(n,function(u,h){o+=h,o+=":",o+=u,o+=`\r
`}),o}function rr(n,o,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=Ei(u),typeof n=="string"?u!=null&&encodeURIComponent(String(u)):q(n,o,u))}function z(n){ot.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(z,ot);var Qo=/^https?$/i,Ho=["POST","PUT"];r=z.prototype,r.Ha=function(n){this.J=n},r.ea=function(n,o,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?Hr(this.o):Hr(Xn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(A){Ti(this,A);return}if(n=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)u.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())u.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&n instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ho,o,void 0))||h||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,V]of u)this.g.setRequestHeader(A,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ai(this),this.u=!0,this.g.send(n),this.u=!1}catch(A){Ti(this,A)}};function Ti(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,vi(n),rn(n)}function vi(n){n.A||(n.A=!0,dt(n,"complete"),dt(n,"error"))}r.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,dt(this,"complete"),dt(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),z.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ii(this):this.bb())},r.bb=function(){Ii(this)};function Ii(n){if(n.h&&typeof l<"u"&&(!n.v[1]||Pt(n)!=4||n.Z()!=2)){if(n.u&&Pt(n)==4)Gr(n.Ea,0,n);else if(dt(n,"readystatechange"),Pt(n)==4){n.h=!1;try{const V=n.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var u;if(!(u=o)){var h;if(h=V===0){var T=String(n.D).match(fi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),h=!Qo.test(T?T.toLowerCase():"")}u=h}if(u)dt(n,"complete"),dt(n,"success");else{n.m=6;try{var A=2<Pt(n)?n.g.statusText:""}catch{A=""}n.l=A+" ["+n.Z()+"]",vi(n)}}finally{rn(n)}}}}function rn(n,o){if(n.g){Ai(n);const u=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||dt(n,"ready");try{u.onreadystatechange=h}catch{}}}function Ai(n){n.I&&(c.clearTimeout(n.I),n.I=null)}r.isActive=function(){return!!this.g};function Pt(n){return n.g?n.g.readyState:0}r.Z=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Po(o)}};function wi(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Wo(n){const o={};n=(n.g&&2<=Pt(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if($(n[h]))continue;var u=y(n[h]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=o[T]||[];o[T]=A,A.push(u)}E(o,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ae(n,o,u){return u&&u.internalChannelParams&&u.internalChannelParams[n]||o}function Ri(n){this.Aa=0,this.i=[],this.j=new ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ae("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ae("baseRetryDelayMs",5e3,n),this.cb=Ae("retryDelaySeedMs",1e4,n),this.Wa=Ae("forwardChannelMaxRetries",2,n),this.wa=Ae("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new oi(n&&n.concurrentRequestLimit),this.Da=new Ko,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ri.prototype,r.la=8,r.G=1,r.connect=function(n,o,u,h){pt(0),this.W=n,this.H=o||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=Oi(this,null,this.W),on(this)};function ir(n){if(Pi(n),n.G==3){var o=n.U++,u=Rt(n.I);if(q(u,"SID",n.K),q(u,"RID",o),q(u,"TYPE","terminate"),we(n,u),o=new Dt(n,n.j,o),o.L=2,o.v=tn(Rt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(o.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=o.v,u=!0),u||(o.g=xi(o.j,null),o.g.ea(o.v)),o.F=Date.now(),Ye(o)}bi(n)}function sn(n){n.g&&(or(n),n.g.cancel(),n.g=null)}function Pi(n){sn(n),n.u&&(c.clearTimeout(n.u),n.u=null),an(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&c.clearTimeout(n.s),n.s=null)}function on(n){if(!ai(n.h)&&!n.s){n.s=!0;var o=n.Ga;le||Ur(),he||(le(),he=!0),Fn.add(o,n),n.B=0}}function Xo(n,o){return ui(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=me(S(n.Ga,n,o),Ni(n,n.B)),n.B++,!0)}r.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const T=new Dt(this,this.j,n);let A=this.o;if(this.S&&(A?(A=d(A),g(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var o=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=u;break t}if(o===4096||u===this.i.length-1){o=u+1;break t}}o=1e3}else o=1e3;o=Si(this,T,o),u=Rt(this.I),q(u,"RID",n),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),we(this,u),A&&(this.O?o="headers="+encodeURIComponent(String(Ei(A)))+"&"+o:this.m&&rr(u,this.m,A)),nr(this.h,T),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",o),q(u,"SID","null"),T.T=!0,Jn(T,u,null)):Jn(T,u,o),this.G=2}}else this.G==3&&(n?Vi(this,n):this.i.length==0||ai(this.h)||Vi(this))};function Vi(n,o){var u;o?u=o.l:u=n.U++;const h=Rt(n.I);q(h,"SID",n.K),q(h,"RID",u),q(h,"AID",n.T),we(n,h),n.m&&n.o&&rr(h,n.m,n.o),u=new Dt(n,n.j,u,n.B+1),n.m===null&&(u.H=n.o),o&&(n.i=o.D.concat(n.i)),o=Si(n,u,1e3),u.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),nr(n.h,u),Jn(u,h,o)}function we(n,o){n.H&&mt(n.H,function(u,h){q(o,h,u)}),n.l&&ci({},function(u,h){q(o,h,u)})}function Si(n,o,u){u=Math.min(n.i.length,u);var h=n.l?S(n.l.Na,n.l,n):null;t:{var T=n.i;let A=-1;for(;;){const V=["count="+u];A==-1?0<u?(A=T[0].g,V.push("ofs="+A)):A=0:V.push("ofs="+A);let U=!0;for(let tt=0;tt<u;tt++){let F=T[tt].g;const at=T[tt].map;if(F-=A,0>F)A=Math.max(0,T[tt].g-100),U=!1;else try{zo(at,V,"req"+F+"_")}catch{h&&h(at)}}if(U){h=V.join("&");break t}}}return n=n.i.splice(0,u),o.D=n,h}function Ci(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;le||Ur(),he||(le(),he=!0),Fn.add(o,n),n.v=0}}function sr(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=me(S(n.Fa,n),Ni(n,n.v)),n.v++,!0)}r.Fa=function(){if(this.u=null,Di(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=me(S(this.ab,this),n)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),sn(this),Di(this))};function or(n){n.A!=null&&(c.clearTimeout(n.A),n.A=null)}function Di(n){n.g=new Dt(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=Rt(n.qa);q(o,"RID","rpc"),q(o,"SID",n.K),q(o,"AID",n.T),q(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&q(o,"TO",n.ja),q(o,"TYPE","xmlhttp"),we(n,o),n.m&&n.o&&rr(o,n.m,n.o),n.L&&(n.g.I=n.L);var u=n.g;n=n.ia,u.L=1,u.v=tn(Rt(o)),u.m=null,u.P=!0,ri(u,n)}r.Za=function(){this.C!=null&&(this.C=null,sn(this),sr(this),pt(19))};function an(n){n.C!=null&&(c.clearTimeout(n.C),n.C=null)}function ki(n,o){var u=null;if(n.g==o){an(n),or(n),n.g=null;var h=2}else if(er(n.h,o))u=o.D,li(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){u=o.m?o.m.length:0,o=Date.now()-o.F;var T=n.B;h=He(),dt(h,new Zr(h,u)),on(n)}else Ci(n);else if(T=o.s,T==3||T==0&&0<o.X||!(h==1&&Xo(n,o)||h==2&&sr(n)))switch(u&&0<u.length&&(o=n.h,o.i=o.i.concat(u)),T){case 1:jt(n,5);break;case 4:jt(n,10);break;case 3:jt(n,6);break;default:jt(n,2)}}}function Ni(n,o){let u=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(u*=2),u*o}function jt(n,o){if(n.j.info("Error code "+o),o==2){var u=S(n.fb,n),h=n.Xa;const T=!h;h=new Bt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Je(h,"https"),tn(h),T?$o(h.toString(),u):Go(h.toString(),u)}else pt(2);n.G=0,n.l&&n.l.sa(o),bi(n),Pi(n)}r.fb=function(n){n?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function bi(n){if(n.G=0,n.ka=[],n.l){const o=hi(n.h);(o.length!=0||n.i.length!=0)&&(N(n.ka,o),N(n.ka,n.i),n.h.i.length=0,O(n.i),n.i.length=0),n.l.ra()}}function Oi(n,o,u){var h=u instanceof Bt?Rt(u):new Bt(u);if(h.g!="")o&&(h.g=o+"."+h.g),Ze(h,h.s);else{var T=c.location;h=T.protocol,o=o?o+"."+T.hostname:T.hostname,T=+T.port;var A=new Bt(null);h&&Je(A,h),o&&(A.g=o),T&&Ze(A,T),u&&(A.l=u),h=A}return u=n.D,o=n.ya,u&&o&&q(h,u,o),q(h,"VER",n.la),we(n,h),h}function xi(n,o,u){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new z(new en({eb:u})):new z(n.pa),o.Ha(n.J),o}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mi(){}r=Mi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function un(){}un.prototype.g=function(n,o){return new _t(n,o)};function _t(n,o){ot.call(this),this.g=new Ri(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!$(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!$(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new Yt(this)}k(_t,ot),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){ir(this.g)},_t.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var u={};u.__data__=n,n=u}else this.u&&(u={},u.__data__=zn(n),n=u);o.i.push(new bo(o.Ya++,n)),o.G==3&&on(o)},_t.prototype.N=function(){this.g.l=null,delete this.j,ir(this.g),delete this.g,_t.aa.N.call(this)};function Li(n){Hn.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){t:{for(const u in o){n=u;break t}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}k(Li,Hn);function Fi(){Wn.call(this),this.status=1}k(Fi,Wn);function Yt(n){this.g=n}k(Yt,Mi),Yt.prototype.ua=function(){dt(this.g,"a")},Yt.prototype.ta=function(n){dt(this.g,new Li(n))},Yt.prototype.sa=function(n){dt(this.g,new Fi)},Yt.prototype.ra=function(){dt(this.g,"b")},un.prototype.createWebChannel=un.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,ys=function(){return new un},_s=function(){return He()},gs=Ft,cr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},We.NO_ERROR=0,We.TIMEOUT=8,We.HTTP_ERROR=6,mn=We,ti.COMPLETE="complete",ms=ti,Wr.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Ve=Wr,z.prototype.listenOnce=z.prototype.L,z.prototype.getLastError=z.prototype.Ka,z.prototype.getLastErrorCode=z.prototype.Ba,z.prototype.getStatus=z.prototype.Z,z.prototype.getResponseJson=z.prototype.Oa,z.prototype.getResponseText=z.prototype.oa,z.prototype.send=z.prototype.ea,z.prototype.setWithCredentials=z.prototype.Ha,ps=z}).apply(typeof hn<"u"?hn:typeof self<"u"?self:typeof window<"u"?window:{});const ji="@firebase/firestore";/**
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
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let oe="10.14.0";/**
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
 */const Kt=new Yo("@firebase/firestore");function Re(){return Kt.logLevel}function D(r,...t){if(Kt.logLevel<=bt.DEBUG){const e=t.map(Ir);Kt.debug(`Firestore (${oe}): ${r}`,...e)}}function zt(r,...t){if(Kt.logLevel<=bt.ERROR){const e=t.map(Ir);Kt.error(`Firestore (${oe}): ${r}`,...e)}}function En(r,...t){if(Kt.logLevel<=bt.WARN){const e=t.map(Ir);Kt.warn(`Firestore (${oe}): ${r}`,...e)}}function Ir(r){if(typeof r=="string")return r;try{/**
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
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
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
 */function M(r="Unexpected state"){const t=`FIRESTORE (${oe}) INTERNAL ASSERTION FAILED: `+r;throw zt(t),new Error(t)}function H(r,t){r||M()}function j(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends ta{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Es{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pa{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class ma{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ga{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){H(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let a=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new $t,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const f=a;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new $t)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(H(typeof i.accessToken=="string"),new Es(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return H(t===null||typeof t=="string"),new ht(t)}}class _a{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ya{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new _a(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ea{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ta{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){H(this.o===void 0);const i=a=>{a.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.R;return this.R=a.token,D("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>i(a))};const s=a=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.A.getImmediate({optional:!0});a?s(a):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(H(typeof e.token=="string"),this.R=e.token,new Ea(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function va(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<r;i++)e[i]=Math.floor(256*Math.random());return e}/**
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
 */class Ts{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=va(40);for(let a=0;a<s.length;++a)i.length<20&&s[a]<e&&(i+=t.charAt(s[a]%t.length))}return i}}function B(r,t){return r<t?-1:r>t?1:0}function ee(r,t,e){return r.length===t.length&&r.every((i,s)=>e(i,t[s]))}/**
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
 */class Z{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new Z(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new Z(0,0))}static max(){return new G(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class be{constructor(t,e,i){e===void 0?e=0:e>t.length&&M(),i===void 0?i=t.length-e:i>t.length-e&&M(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return be.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof be?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const a=t.get(s),l=e.get(s);if(a<l)return-1;if(a>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class X extends be{construct(t,e,i){return new X(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const Ia=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends be{construct(t,e,i){return new rt(t,e,i)}static isValidIdentifier(t){return Ia.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const a=()=>{if(i.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(i+=c,s++):(a(),s++)}if(a(),l)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(X.fromString(t))}static fromName(t){return new x(X.fromString(t).popFirst(5))}static empty(){return new x(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new X(t.slice()))}}function Aa(r,t){const e=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new Z(e+1,0):new Z(e,i));return new Ot(s,x.empty(),t)}function wa(r){return new Ot(r.readTime,r.key,-1)}class Ot{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ot(G.min(),x.empty(),-1)}static max(){return new Ot(G.max(),x.empty(),-1)}}function Ra(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:B(r.largestBatchId,t.largestBatchId))}/**
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
 */const Pa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Va{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function vs(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==Pa)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(i,s)},this.catchCallback=a=>{this.wrapFailure(e,a).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,a=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++a,l&&a===s&&e()},f=>i(f))}),l=!0,a===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,a)=>{i.push(e.call(this,s,a))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const a=t.length,l=new Array(a);let c=0;for(let f=0;f<a;f++){const _=f;e(t[_]).next(I=>{l[_]=I,++c,c===a&&i(l)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const a=()=>{t()===!0?e().next(()=>{a()},s):i()};a()})}}function Sa(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Dn(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Is{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Is.oe=-1;function Ar(r){return r==null}function Tn(r){return r===0&&1/r==-1/0}function Ca(r){return typeof r=="number"&&Number.isInteger(r)&&!Tn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function qi(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Be(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function As(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class gt{constructor(t,e){this.comparator=t,this.root=e||et.EMPTY}insert(t,e){return new gt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,et.BLACK,null,null))}remove(t){return new gt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,et.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cn(this.root,t,this.comparator,!0)}}class cn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?i(t.key,e):1,e&&s&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class et{constructor(t,e,i,s,a){this.key=t,this.value=e,this.color=i??et.RED,this.left=s??et.EMPTY,this.right=a??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,a){return new et(t??this.key,e??this.value,i??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const a=i(t,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(t,e,i),null):a===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return et.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,i,s,a){return this}insert(t,e,i){return new et(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new gt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new $i(this.data.getIterator())}getIteratorFrom(t){return new $i(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,a=i.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class $i{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vt{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new vt([])}unionWith(t){let e=new ft(rt.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ee(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Da extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Da("Invalid base64 string: "+a):a}}(t);return new It(e)}static fromUint8Array(t){const e=function(s){let a="";for(let l=0;l<s.length;++l)a+=String.fromCharCode(s[l]);return a}(t);return new It(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}It.EMPTY_BYTE_STRING=new It("");const ka=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(r){if(H(!!r),typeof r=="string"){let t=0;const e=ka.exec(r);if(H(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:nt(r.seconds),nanos:nt(r.nanos)}}function nt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Oe(r){return typeof r=="string"?It.fromBase64String(r):It.fromUint8Array(r)}/**
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
 */function wr(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ws(r){const t=r.mapValue.fields.__previous_value__;return wr(t)?ws(t):t}function vn(r){const t=Qt(r.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
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
 */class Na{constructor(t,e,i,s,a,l,c,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=_}}class In{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new In("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof In&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const fn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ne(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?wr(r)?4:Oa(r)?9007199254740991:ba(r)?10:11:M()}function At(r,t){if(r===t)return!0;const e=ne(r);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return vn(r).isEqual(vn(t));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const l=Qt(s.timestampValue),c=Qt(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,a){return Oe(s.bytesValue).isEqual(Oe(a.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,a){return nt(s.geoPointValue.latitude)===nt(a.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(a.geoPointValue.longitude)}(r,t);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return nt(s.integerValue)===nt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const l=nt(s.doubleValue),c=nt(a.doubleValue);return l===c?Tn(l)===Tn(c):isNaN(l)&&isNaN(c)}return!1}(r,t);case 9:return ee(r.arrayValue.values||[],t.arrayValue.values||[],At);case 10:case 11:return function(s,a){const l=s.mapValue.fields||{},c=a.mapValue.fields||{};if(qi(l)!==qi(c))return!1;for(const f in l)if(l.hasOwnProperty(f)&&(c[f]===void 0||!At(l[f],c[f])))return!1;return!0}(r,t);default:return M()}}function xe(r,t){return(r.values||[]).find(e=>At(e,t))!==void 0}function re(r,t){if(r===t)return 0;const e=ne(r),i=ne(t);if(e!==i)return B(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(r.booleanValue,t.booleanValue);case 2:return function(a,l){const c=nt(a.integerValue||a.doubleValue),f=nt(l.integerValue||l.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(r,t);case 3:return Gi(r.timestampValue,t.timestampValue);case 4:return Gi(vn(r),vn(t));case 5:return B(r.stringValue,t.stringValue);case 6:return function(a,l){const c=Oe(a),f=Oe(l);return c.compareTo(f)}(r.bytesValue,t.bytesValue);case 7:return function(a,l){const c=a.split("/"),f=l.split("/");for(let _=0;_<c.length&&_<f.length;_++){const I=B(c[_],f[_]);if(I!==0)return I}return B(c.length,f.length)}(r.referenceValue,t.referenceValue);case 8:return function(a,l){const c=B(nt(a.latitude),nt(l.latitude));return c!==0?c:B(nt(a.longitude),nt(l.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Ki(r.arrayValue,t.arrayValue);case 10:return function(a,l){var c,f,_,I;const w=a.fields||{},S=l.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,k=(f=S.value)===null||f===void 0?void 0:f.arrayValue,O=B(((_=C==null?void 0:C.values)===null||_===void 0?void 0:_.length)||0,((I=k==null?void 0:k.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Ki(C,k)}(r.mapValue,t.mapValue);case 11:return function(a,l){if(a===fn.mapValue&&l===fn.mapValue)return 0;if(a===fn.mapValue)return 1;if(l===fn.mapValue)return-1;const c=a.fields||{},f=Object.keys(c),_=l.fields||{},I=Object.keys(_);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const S=B(f[w],I[w]);if(S!==0)return S;const C=re(c[f[w]],_[I[w]]);if(C!==0)return C}return B(f.length,I.length)}(r.mapValue,t.mapValue);default:throw M()}}function Gi(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return B(r,t);const e=Qt(r),i=Qt(t),s=B(e.seconds,i.seconds);return s!==0?s:B(e.nanos,i.nanos)}function Ki(r,t){const e=r.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const a=re(e[s],i[s]);if(a)return a}return B(e.length,i.length)}function ie(r){return fr(r)}function fr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const i=Qt(e);return`time(${i.seconds},${i.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return Oe(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return x.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let i="[",s=!0;for(const a of e.values||[])s?s=!1:i+=",",i+=fr(a);return i+"]"}(r.arrayValue):"mapValue"in r?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",a=!0;for(const l of i)a?a=!1:s+=",",s+=`${l}:${fr(e.fields[l])}`;return s+"}"}(r.mapValue):M()}function dr(r){return!!r&&"integerValue"in r}function Rr(r){return!!r&&"arrayValue"in r}function gn(r){return!!r&&"mapValue"in r}function ba(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ce(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Be(r.mapValue.fields,(e,i)=>t.mapValue.fields[e]=Ce(i)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ce(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Oa(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!gn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ce(e)}setAll(t){let e=rt.emptyPath(),i={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}l?i[c.lastSegment()]=Ce(l):s.push(c.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,i,s)}delete(t){const e=this.field(t.popLast());gn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];gn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Be(e,(s,a)=>t[s]=a);for(const s of i)delete t[s]}clone(){return new Tt(Ce(this.value))}}function Rs(r){const t=[];return Be(r.fields,(e,i)=>{const s=new rt([e]);if(gn(i)){const a=Rs(i.mapValue).fields;if(a.length===0)t.push(s);else for(const l of a)t.push(s.child(l))}else t.push(s)}),new vt(t)}/**
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
 */class Et{constructor(t,e,i,s,a,l,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(t){return new Et(t,0,G.min(),G.min(),G.min(),Tt.empty(),0)}static newFoundDocument(t,e,i,s){return new Et(t,1,e,G.min(),i,s,0)}static newNoDocument(t,e){return new Et(t,2,e,G.min(),G.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,G.min(),G.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class An{constructor(t,e){this.position=t,this.inclusive=e}}function zi(r,t,e){let i=0;for(let s=0;s<r.position.length;s++){const a=t[s],l=r.position[s];if(a.field.isKeyField()?i=x.comparator(x.fromName(l.referenceValue),e.key):i=re(l,e.data.field(a.field)),a.dir==="desc"&&(i*=-1),i!==0)break}return i}function Qi(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!At(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function xa(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ps{}class J extends Ps{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new La(t,e,i):e==="array-contains"?new Ba(t,i):e==="in"?new ja(t,i):e==="not-in"?new qa(t,i):e==="array-contains-any"?new $a(t,i):new J(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Fa(t,i):new Ua(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(re(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(re(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xt extends Ps{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new xt(t,e)}matches(t){return Vs(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vs(r){return r.op==="and"}function Ss(r){return Ma(r)&&Vs(r)}function Ma(r){for(const t of r.filters)if(t instanceof xt)return!1;return!0}function pr(r){if(r instanceof J)return r.field.canonicalString()+r.op.toString()+ie(r.value);if(Ss(r))return r.filters.map(t=>pr(t)).join(",");{const t=r.filters.map(e=>pr(e)).join(",");return`${r.op}(${t})`}}function Cs(r,t){return r instanceof J?function(i,s){return s instanceof J&&i.op===s.op&&i.field.isEqual(s.field)&&At(i.value,s.value)}(r,t):r instanceof xt?function(i,s){return s instanceof xt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((a,l,c)=>a&&Cs(l,s.filters[c]),!0):!1}(r,t):void M()}function Ds(r){return r instanceof J?function(e){return`${e.field.canonicalString()} ${e.op} ${ie(e.value)}`}(r):r instanceof xt?function(e){return e.op.toString()+" {"+e.getFilters().map(Ds).join(" ,")+"}"}(r):"Filter"}class La extends J{constructor(t,e,i){super(t,e,i),this.key=x.fromName(i.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Fa extends J{constructor(t,e){super(t,"in",e),this.keys=ks("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Ua extends J{constructor(t,e){super(t,"not-in",e),this.keys=ks("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ks(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>x.fromName(i.referenceValue))}class Ba extends J{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Rr(e)&&xe(e.arrayValue,this.value)}}class ja extends J{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&xe(this.value.arrayValue,e)}}class qa extends J{constructor(t,e){super(t,"not-in",e)}matches(t){if(xe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!xe(this.value.arrayValue,e)}}class $a extends J{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Rr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>xe(this.value.arrayValue,i))}}/**
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
 */class Ga{constructor(t,e=null,i=[],s=[],a=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=a,this.startAt=l,this.endAt=c,this.ue=null}}function Hi(r,t=null,e=[],i=[],s=null,a=null,l=null){return new Ga(r,t,e,i,s,a,l)}function Pr(r){const t=j(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>pr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(a){return a.field.canonicalString()+a.dir}(i)).join(","),Ar(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>ie(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>ie(i)).join(",")),t.ue=e}return t.ue}function Vr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!xa(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Cs(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Qi(r.startAt,t.startAt)&&Qi(r.endAt,t.endAt)}/**
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
 */class kn{constructor(t,e=null,i=[],s=[],a=null,l="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ka(r,t,e,i,s,a,l,c){return new kn(r,t,e,i,s,a,l,c)}function za(r){return new kn(r)}function Wi(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Qa(r){return r.collectionGroup!==null}function De(r){const t=j(r);if(t.ce===null){t.ce=[];const e=new Set;for(const a of t.explicitOrderBy)t.ce.push(a),e.add(a.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new ft(rt.comparator);return l.filters.forEach(f=>{f.getFlattenedFilters().forEach(_=>{_.isInequality()&&(c=c.add(_.field))})}),c})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.ce.push(new wn(a,i))}),e.has(rt.keyField().canonicalString())||t.ce.push(new wn(rt.keyField(),i))}return t.ce}function Gt(r){const t=j(r);return t.le||(t.le=Ha(t,De(r))),t.le}function Ha(r,t){if(r.limitType==="F")return Hi(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new wn(s.field,a)});const e=r.endAt?new An(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new An(r.startAt.position,r.startAt.inclusive):null;return Hi(r.path,r.collectionGroup,t,r.filters,r.limit,e,i)}}function mr(r,t,e){return new kn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Ns(r,t){return Vr(Gt(r),Gt(t))&&r.limitType===t.limitType}function bs(r){return`${Pr(Gt(r))}|lt:${r.limitType}`}function Pe(r){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Ds(s)).join(", ")}]`),Ar(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>ie(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>ie(s)).join(",")),`Target(${i})`}(Gt(r))}; limitType=${r.limitType})`}function Sr(r,t){return t.isFoundDocument()&&function(i,s){const a=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(a):x.isDocumentKey(i.path)?i.path.isEqual(a):i.path.isImmediateParentOf(a)}(r,t)&&function(i,s){for(const a of De(i))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(r,t)&&function(i,s){for(const a of i.filters)if(!a.matches(s))return!1;return!0}(r,t)&&function(i,s){return!(i.startAt&&!function(l,c,f){const _=zi(l,c,f);return l.inclusive?_<=0:_<0}(i.startAt,De(i),s)||i.endAt&&!function(l,c,f){const _=zi(l,c,f);return l.inclusive?_>=0:_>0}(i.endAt,De(i),s))}(r,t)}function Wa(r){return(t,e)=>{let i=!1;for(const s of De(r)){const a=Xa(s,t,e);if(a!==0)return a;i=i||s.field.isKeyField()}return 0}}function Xa(r,t,e){const i=r.field.isKeyField()?x.comparator(t.key,e.key):function(a,l,c){const f=l.data.field(a),_=c.data.field(a);return f!==null&&_!==null?re(f,_):M()}(r.field,t,e);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return M()}}/**
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
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,a]of i)if(this.equalsFn(s,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],t))return void(s[a]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Be(this.inner,(e,i)=>{for(const[s,a]of i)t(s,a)})}isEmpty(){return As(this.inner)}size(){return this.innerSize}}/**
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
 */const Ya=new gt(x.comparator);function Rn(){return Ya}const Os=new gt(x.comparator);function dn(...r){let t=Os;for(const e of r)t=t.insert(e.key,e);return t}function xs(r){let t=Os;return r.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function qt(){return ke()}function Ms(){return ke()}function ke(){return new ae(r=>r.toString(),(r,t)=>r.isEqual(t))}const Ja=new gt(x.comparator),Za=new ft(x.comparator);function ct(...r){let t=Za;for(const e of r)t=t.add(e);return t}const tu=new ft(B);function eu(){return tu}/**
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
 */function Cr(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tn(t)?"-0":t}}function Ls(r){return{integerValue:""+r}}function nu(r,t){return Ca(t)?Ls(t):Cr(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Nn{constructor(){this._=void 0}}function ru(r,t,e){return r instanceof Pn?function(s,a){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&wr(a)&&(a=ws(a)),a&&(l.fields.__previous_value__=a),{mapValue:l}}(e,t):r instanceof Me?Us(r,t):r instanceof Le?Bs(r,t):function(s,a){const l=Fs(s,a),c=Xi(l)+Xi(s.Pe);return dr(l)&&dr(s.Pe)?Ls(c):Cr(s.serializer,c)}(r,t)}function iu(r,t,e){return r instanceof Me?Us(r,t):r instanceof Le?Bs(r,t):e}function Fs(r,t){return r instanceof Vn?function(i){return dr(i)||function(a){return!!a&&"doubleValue"in a}(i)}(t)?t:{integerValue:0}:null}class Pn extends Nn{}class Me extends Nn{constructor(t){super(),this.elements=t}}function Us(r,t){const e=js(t);for(const i of r.elements)e.some(s=>At(s,i))||e.push(i);return{arrayValue:{values:e}}}class Le extends Nn{constructor(t){super(),this.elements=t}}function Bs(r,t){let e=js(t);for(const i of r.elements)e=e.filter(s=>!At(s,i));return{arrayValue:{values:e}}}class Vn extends Nn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Xi(r){return nt(r.integerValue||r.doubleValue)}function js(r){return Rr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function su(r,t){return r.field.isEqual(t.field)&&function(i,s){return i instanceof Me&&s instanceof Me||i instanceof Le&&s instanceof Le?ee(i.elements,s.elements,At):i instanceof Vn&&s instanceof Vn?At(i.Pe,s.Pe):i instanceof Pn&&s instanceof Pn}(r.transform,t.transform)}class ou{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _n(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class bn{}function qs(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Gs(r.key,Vt.none()):new je(r.key,r.data,Vt.none());{const e=r.data,i=Tt.empty();let s=new ft(rt.comparator);for(let a of t.fields)if(!s.has(a)){let l=e.field(a);l===null&&a.length>1&&(a=a.popLast(),l=e.field(a)),l===null?i.delete(a):i.set(a,l),s=s.add(a)}return new Ht(r.key,i,new vt(s.toArray()),Vt.none())}}function au(r,t,e){r instanceof je?function(s,a,l){const c=s.value.clone(),f=Ji(s.fieldTransforms,a,l.transformResults);c.setAll(f),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(r,t,e):r instanceof Ht?function(s,a,l){if(!_n(s.precondition,a))return void a.convertToUnknownDocument(l.version);const c=Ji(s.fieldTransforms,a,l.transformResults),f=a.data;f.setAll($s(s)),f.setAll(c),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()}(r,t,e):function(s,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Ne(r,t,e,i){return r instanceof je?function(a,l,c,f){if(!_n(a.precondition,l))return c;const _=a.value.clone(),I=Zi(a.fieldTransforms,f,l);return _.setAll(I),l.convertToFoundDocument(l.version,_).setHasLocalMutations(),null}(r,t,e,i):r instanceof Ht?function(a,l,c,f){if(!_n(a.precondition,l))return c;const _=Zi(a.fieldTransforms,f,l),I=l.data;return I.setAll($s(a)),I.setAll(_),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(r,t,e,i):function(a,l,c){return _n(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(r,t,e)}function uu(r,t){let e=null;for(const i of r.fieldTransforms){const s=t.data.field(i.field),a=Fs(i.transform,s||null);a!=null&&(e===null&&(e=Tt.empty()),e.set(i.field,a))}return e||null}function Yi(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&ee(i,s,(a,l)=>su(a,l))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class je extends bn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ht extends bn{constructor(t,e,i,s,a=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function $s(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=r.data.field(e);t.set(e,i)}}),t}function Ji(r,t,e){const i=new Map;H(r.length===e.length);for(let s=0;s<e.length;s++){const a=r[s],l=a.transform,c=t.data.field(a.field);i.set(a.field,iu(l,c,e[s]))}return i}function Zi(r,t,e){const i=new Map;for(const s of r){const a=s.transform,l=e.data.field(s.field);i.set(s.field,ru(a,l,t))}return i}class Gs extends bn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lu extends bn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hu{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(t.key)&&au(a,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Ne(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Ne(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=Ms();return this.mutations.forEach(s=>{const a=t.get(s.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=e.has(s.key)?null:c;const f=qs(l,c);f!==null&&i.set(s.key,f),l.isValidDocument()||l.convertToNoDocument(G.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ct())}isEqual(t){return this.batchId===t.batchId&&ee(this.mutations,t.mutations,(e,i)=>Yi(e,i))&&ee(this.baseMutations,t.baseMutations,(e,i)=>Yi(e,i))}}class Dr{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){H(t.mutations.length===i.length);let s=function(){return Ja}();const a=t.mutations;for(let l=0;l<a.length;l++)s=s.insert(a[l].key,i[l].version);return new Dr(t,e,i,s)}}/**
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
 */class cu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var W,L;function fu(r){switch(r){default:return M();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function du(r){if(r===void 0)return zt("GRPC error has no .code"),P.UNKNOWN;switch(r){case W.OK:return P.OK;case W.CANCELLED:return P.CANCELLED;case W.UNKNOWN:return P.UNKNOWN;case W.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case W.INTERNAL:return P.INTERNAL;case W.UNAVAILABLE:return P.UNAVAILABLE;case W.UNAUTHENTICATED:return P.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case W.NOT_FOUND:return P.NOT_FOUND;case W.ALREADY_EXISTS:return P.ALREADY_EXISTS;case W.PERMISSION_DENIED:return P.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case W.ABORTED:return P.ABORTED;case W.OUT_OF_RANGE:return P.OUT_OF_RANGE;case W.UNIMPLEMENTED:return P.UNIMPLEMENTED;case W.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(L=W||(W={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ds([4294967295,4294967295],0);class pu{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function gr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function mu(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function gu(r,t){return gr(r,t.toTimestamp())}function te(r){return H(!!r),G.fromTimestamp(function(e){const i=Qt(e);return new Z(i.seconds,i.nanos)}(r))}function Ks(r,t){return _r(r,t).canonicalString()}function _r(r,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function _u(r){const t=X.fromString(r);return H(Ru(t)),t}function yr(r,t){return Ks(r.databaseId,t.path)}function yu(r){const t=_u(r);return t.length===4?X.emptyPath():Tu(t)}function Eu(r){return new X(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tu(r){return H(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ts(r,t,e){return{name:yr(r,t),fields:e.value.mapValue.fields}}function vu(r,t){let e;if(t instanceof je)e={update:ts(r,t.key,t.value)};else if(t instanceof Gs)e={delete:yr(r,t.key)};else if(t instanceof Ht)e={update:ts(r,t.key,t.data),updateMask:wu(t.fieldMask)};else{if(!(t instanceof lu))return M();e={verify:yr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(a,l){const c=l.transform;if(c instanceof Pn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Me)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Le)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Vn)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw M()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:gu(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:M()}(r,t.precondition)),e}function Iu(r,t){return r&&r.length>0?(H(t!==void 0),r.map(e=>function(s,a){let l=s.updateTime?te(s.updateTime):te(a);return l.isEqual(G.min())&&(l=te(a)),new ou(l,s.transformResults||[])}(e,t))):[]}function Au(r){let t=yu(r.parent);const e=r.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){H(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let a=[];e.where&&(a=function(w){const S=zs(w);return S instanceof xt&&Ss(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(S=>function(k){return new wn(Zt(k.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,Ar(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,C=w.values||[];return new An(C,S)}(e.startAt));let _=null;return e.endAt&&(_=function(w){const S=!w.before,C=w.values||[];return new An(C,S)}(e.endAt)),Ka(t,s,l,a,c,"F",f,_)}function zs(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=Zt(e.unaryFilter.field);return J.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Zt(e.unaryFilter.field);return J.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Zt(e.unaryFilter.field);return J.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Zt(e.unaryFilter.field);return J.create(l,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(r):r.fieldFilter!==void 0?function(e){return J.create(Zt(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return xt.create(e.compositeFilter.filters.map(i=>zs(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(r):M()}function Zt(r){return rt.fromServerFormat(r.fieldPath)}function wu(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ru(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Pu{constructor(t){this.ct=t}}function Vu(r){const t=Au({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?mr(t,t.limit,"L"):t}/**
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
 */class Su{constructor(){this.un=new Cu}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ot.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Cu{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new ft(X.comparator),a=!s.has(i);return this.index[e]=s.add(i),a}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new ft(X.comparator)).toArray()}}/**
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
 */class se{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new se(0)}static kn(){return new se(-1)}}/**
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
 */class Du{constructor(){this.changes=new ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class ku{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Nu{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Ne(i.mutation,s,vt.empty(),Z.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ct()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ct()){const s=qt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(a=>{let l=dn();return a.forEach((c,f)=>{l=l.insert(c,f.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const i=qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ct()))}populateOverlays(t,e,i){const s=[];return i.forEach(a=>{e.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(t,s).next(a=>{a.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,i,s){let a=Rn();const l=ke(),c=function(){return ke()}();return e.forEach((f,_)=>{const I=i.get(_.key);s.has(_.key)&&(I===void 0||I.mutation instanceof Ht)?a=a.insert(_.key,_):I!==void 0?(l.set(_.key,I.mutation.getFieldMask()),Ne(I.mutation,_,I.mutation.getFieldMask(),Z.now())):l.set(_.key,vt.empty())}),this.recalculateAndSaveOverlays(t,a).next(f=>(f.forEach((_,I)=>l.set(_,I)),e.forEach((_,I)=>{var w;return c.set(_,new ku(I,(w=l.get(_))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=ke();let s=new gt((l,c)=>l-c),a=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(f=>{const _=e.get(f);if(_===null)return;let I=i.get(f)||vt.empty();I=c.applyToLocalView(_,I),i.set(f,I);const w=(s.get(c.batchId)||ct()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),_=f.key,I=f.value,w=Ms();I.forEach(S=>{if(!a.has(S)){const C=qs(e.get(S),i.get(S));C!==null&&w.set(S,C),a=a.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,_,w))}return R.waitFor(l)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(l){return x.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Qa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(a=>{const l=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-a.size):R.resolve(qt());let c=-1,f=a;return l.next(_=>R.forEach(_,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),a.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,_,a)).next(()=>this.computeViews(t,f,_,ct())).next(I=>({batchId:c,changes:xs(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(i=>{let s=dn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const a=e.collectionGroup;let l=dn();return this.indexManager.getCollectionParents(t,a).next(c=>R.forEach(c,f=>{const _=function(w,S){return new kn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(a));return this.getDocumentsMatchingCollectionQuery(t,_,i,s).next(I=>{I.forEach((w,S)=>{l=l.insert(w,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,i,s){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,a,s))).next(l=>{a.forEach((f,_)=>{const I=_.getKey();l.get(I)===null&&(l=l.insert(I,Et.newInvalidDocument(I)))});let c=dn();return l.forEach((f,_)=>{const I=a.get(f);I!==void 0&&Ne(I.mutation,_,vt.empty(),Z.now()),Sr(e,_)&&(c=c.insert(f,_))}),c})}}/**
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
 */class bu{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:te(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Vu(s.bundledQuery),readTime:te(s.readTime)}}(e)),R.resolve()}}/**
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
 */class Ou{constructor(){this.overlays=new gt(x.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=qt();return R.forEach(e,s=>this.getOverlay(t,s).next(a=>{a!==null&&i.set(s,a)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,a)=>{this.ht(t,e,a)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=qt(),a=e.length+1,l=new x(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const f=c.getNext().value,_=f.getKey();if(!e.isPrefixOf(_.path))break;_.path.length===a&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let a=new gt((_,I)=>_-I);const l=this.overlays.getIterator();for(;l.hasNext();){const _=l.getNext().value;if(_.getKey().getCollectionGroup()===e&&_.largestBatchId>i){let I=a.get(_.largestBatchId);I===null&&(I=qt(),a=a.insert(_.largestBatchId,I)),I.set(_.getKey(),_)}}const c=qt(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((_,I)=>c.set(_,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(i.key,new cu(e,i));let a=this.Ir.get(e);a===void 0&&(a=ct(),this.Ir.set(e,a)),this.Ir.set(e,a.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class xu{constructor(){this.sessionToken=It.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class kr{constructor(){this.Tr=new ft(Y.Er),this.dr=new ft(Y.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new Y(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new Y(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new x(new X([])),i=new Y(e,t),s=new Y(e,t+1),a=[];return this.dr.forEachInRange([i,s],l=>{this.Vr(l),a.push(l.key)}),a}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new x(new X([])),i=new Y(e,t),s=new Y(e,t+1);let a=ct();return this.dr.forEachInRange([i,s],l=>{a=a.add(l.key)}),a}containsKey(t){const e=new Y(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class Y{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return x.comparator(t.key,e.key)||B(t.wr,e.wr)}static Ar(t,e){return B(t.wr,e.wr)||x.comparator(t.key,e.key)}}/**
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
 */class Mu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ft(Y.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const a=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new hu(a,e,i,s);this.mutationQueue.push(l);for(const c of s)this.br=this.br.add(new Y(c.key,a)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(l)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),a=s<0?0:s;return R.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new Y(e,0),s=new Y(e,Number.POSITIVE_INFINITY),a=[];return this.br.forEachInRange([i,s],l=>{const c=this.Dr(l.wr);a.push(c)}),R.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new ft(B);return e.forEach(s=>{const a=new Y(s,0),l=new Y(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([a,l],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let a=i;x.isDocumentKey(a)||(a=a.child(""));const l=new Y(new x(a),0);let c=new ft(B);return this.br.forEachWhile(f=>{const _=f.key.path;return!!i.isPrefixOf(_)&&(_.length===s&&(c=c.add(f.wr)),!0)},l),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){H(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const a=new Y(s.key,e.batchId);return i=i.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new Y(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Lu{constructor(t){this.Mr=t,this.docs=function(){return new gt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),a=s?s.size:0,l=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let i=Rn();return e.forEach(s=>{const a=this.docs.get(s);i=i.insert(s,a?a.document.mutableCopy():Et.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let a=Rn();const l=e.path,c=new x(l.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:_,value:{document:I}}=f.getNext();if(!l.isPrefixOf(_.path))break;_.path.length>l.length+1||Ra(wa(I),i)<=0||(s.has(I.key)||Sr(e,I))&&(a=a.insert(I.key,I.mutableCopy()))}return R.resolve(a)}getAllFromCollectionGroup(t,e,i,s){M()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Fu(this)}getSize(t){return R.resolve(this.size)}}class Fu extends Du{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class Uu{constructor(t){this.persistence=t,this.Nr=new ae(e=>Pr(e),Vr),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Lr=0,this.Br=new kr,this.targetCount=0,this.kr=se.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new se(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const a=[];return this.Nr.forEach((l,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(l),a.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(a).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,a=[];return s&&e.forEach(l=>{a.push(s.markPotentiallyOrphaned(t,l))}),R.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
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
 */class Bu{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Is(0),this.Kr=!1,this.Kr=!0,this.$r=new xu,this.referenceDelegate=t(this),this.Ur=new Uu(this),this.indexManager=new Su,this.remoteDocumentCache=function(s){return new Lu(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new Pu(e),this.Gr=new bu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ou,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Mu(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new ju(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(a=>this.referenceDelegate.jr(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class ju extends Va{constructor(t){super(),this.currentSequenceNumber=t}}class Nr{constructor(t){this.persistence=t,this.Jr=new kr,this.Yr=null}static Zr(t){return new Nr(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(a=>this.Xr.add(a.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=x.fromPath(i);return this.ei(t,s).next(a=>{a||e.removeEntry(s,G.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class br{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ct(),s=ct();for(const a of e.docChanges)switch(a.type){case 0:i=i.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new br(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class qu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class $u{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return oa()?8:Sa(aa())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const a={result:null};return this.Yi(t,e).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.Zi(t,e,s,i).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new qu;return this.Xi(t,e,l).next(c=>{if(a.result=c,this.zi)return this.es(t,e,l,c.size)})}).next(()=>a.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(Re()<=bt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Re()<=bt.DEBUG&&D("QueryEngine","Query:",Pe(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(Re()<=bt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Gt(e))):R.resolve())}Yi(t,e){if(Wi(e))return R.resolve(null);let i=Gt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mr(e,null,"F"),i=Gt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(a=>{const l=ct(...a);return this.Ji.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const _=this.ts(e,c);return this.ns(e,_,l,f.readTime)?this.Yi(t,mr(e,null,"F")):this.rs(t,_,e,f)}))})))}Zi(t,e,i,s){return Wi(e)||s.isEqual(G.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(a=>{const l=this.ts(e,a);return this.ns(e,l,i,s)?R.resolve(null):(Re()<=bt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.rs(t,l,e,Aa(s,-1)).next(c=>c))})}ts(t,e){let i=new ft(Wa(t));return e.forEach((s,a)=>{Sr(t,a)&&(i=i.add(a))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Xi(t,e,i){return Re()<=bt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ot.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(a=>(e.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */class Gu{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new gt(B),this._s=new ae(a=>Pr(a),Vr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nu(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Ku(r,t,e,i){return new Gu(r,t,e,i)}async function Qs(r,t){const e=j(r);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(a=>(s=a,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(a=>{const l=[],c=[];let f=ct();for(const _ of s){l.push(_.batchId);for(const I of _.mutations)f=f.add(I.key)}for(const _ of a){c.push(_.batchId);for(const I of _.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(_=>({hs:_,removedBatchIds:l,addedBatchIds:c}))})})}function zu(r,t){const e=j(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),a=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,_,I){const w=_.batch,S=w.keys();let C=R.resolve();return S.forEach(k=>{C=C.next(()=>I.getEntry(f,k)).next(O=>{const N=_.docVersions.get(k);H(N!==null),O.version.compareTo(N)<0&&(w.applyToRemoteDocument(O,_),O.isValidDocument()&&(O.setReadTime(_.commitVersion),I.addEntry(O)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,a).next(()=>a.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ct();for(let _=0;_<c.mutationResults.length;++_)c.mutationResults[_].transformResults.length>0&&(f=f.add(c.batch.mutations[_].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function Qu(r){const t=j(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Hu(r,t){const e=j(r);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class es{constructor(){this.activeTargetIds=eu()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wu{constructor(){this.so=new es,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new es,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Xu{_o(t){}shutdown(){}}/**
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
 */class ns{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let pn=null;function ur(){return pn===null?pn=function(){return 268435456+Math.round(2147483648*Math.random())}():pn++,"0x"+pn.toString(16)}/**
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
 */const Yu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ju{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const lt="WebChannelConnection";class Zu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${a}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${a}`}get Fo(){return!1}Mo(e,i,s,a,l){const c=ur(),f=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const _={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(_,a,l),this.No(e,f,_,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw En("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}Lo(e,i,s,a,l,c){return this.Mo(e,i,s,a,l)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}xo(e,i){const s=Yu[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const a=ur();return new Promise((l,c)=>{const f=new ps;f.setWithCredentials(!0),f.listenOnce(ms.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case mn.NO_ERROR:const I=f.getResponseJson();D(lt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(I)),l(I);break;case mn.TIMEOUT:D(lt,`RPC '${t}' ${a} timed out`),c(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case mn.HTTP_ERROR:const w=f.getStatus();if(D(lt,`RPC '${t}' ${a} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const k=function(N){const K=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(K)>=0?K:P.UNKNOWN}(C.status);c(new b(k,C.message))}else c(new b(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new b(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{D(lt,`RPC '${t}' ${a} completed.`)}});const _=JSON.stringify(s);D(lt,`RPC '${t}' ${a} sending request:`,s),f.send(e,"POST",_,i,15)})}Bo(t,e,i){const s=ur(),a=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=ys(),c=_s(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(f.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=a.join("");D(lt,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=l.createWebChannel(I,f);let S=!1,C=!1;const k=new Ju({Io:N=>{C?D(lt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(D(lt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),D(lt,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),O=(N,K,$)=>{N.listen(K,Q=>{try{$(Q)}catch(it){setTimeout(()=>{throw it},0)}})};return O(w,Ve.EventType.OPEN,()=>{C||(D(lt,`RPC '${t}' stream ${s} transport opened.`),k.yo())}),O(w,Ve.EventType.CLOSE,()=>{C||(C=!0,D(lt,`RPC '${t}' stream ${s} transport closed`),k.So())}),O(w,Ve.EventType.ERROR,N=>{C||(C=!0,En(lt,`RPC '${t}' stream ${s} transport errored:`,N),k.So(new b(P.UNAVAILABLE,"The operation could not be completed")))}),O(w,Ve.EventType.MESSAGE,N=>{var K;if(!C){const $=N.data[0];H(!!$);const Q=$,it=Q.error||((K=Q[0])===null||K===void 0?void 0:K.error);if(it){D(lt,`RPC '${t}' stream ${s} received error:`,it);const Lt=it.status;let mt=function(m){const g=W[m];if(g!==void 0)return du(g)}(Lt),E=it.message;mt===void 0&&(mt=P.INTERNAL,E="Unknown error status: "+Lt+" with message "+it.message),C=!0,k.So(new b(mt,E)),w.close()}else D(lt,`RPC '${t}' stream ${s} received:`,$),k.bo($)}}),O(c,gs.STAT_EVENT,N=>{N.stat===cr.PROXY?D(lt,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===cr.NOPROXY&&D(lt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function lr(){return typeof document<"u"?document:null}/**
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
 */function On(r){return new pu(r,!0)}/**
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
 */class Hs{constructor(t,e,i=1e3,s=1.5,a=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=a,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class tl{constructor(t,e,i,s,a,l,c,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hs(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(zt(e.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new b(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class el extends tl{constructor(t,e,i,s,a,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,l),this.serializer=a}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return H(!!t.streamToken),this.lastStreamToken=t.streamToken,H(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){H(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Iu(t.writeResults,t.commitTime),i=te(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Eu(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>vu(this.serializer,i))};this.a_(e)}}/**
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
 */class nl extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Mo(t,_r(e,i),s,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new b(P.UNKNOWN,a.toString())})}Lo(t,e,i,s,a){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Lo(t,_r(e,i),s,l,c,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new b(P.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(zt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class il{constructor(t,e,i,s,a){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=a,this.k_._o(l=>{i.enqueueAndForget(async()=>{$e(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const _=j(f);_.L_.add(4),await qe(_),_.q_.set("Unknown"),_.L_.delete(4),await xn(_)}(this))})}),this.q_=new rl(i,s)}}async function xn(r){if($e(r))for(const t of r.B_)await t(!0)}async function qe(r){for(const t of r.B_)await t(!1)}function $e(r){return j(r).L_.size===0}async function Ws(r,t,e){if(!Dn(t))throw t;r.L_.add(1),await qe(r),r.q_.set("Offline"),e||(e=()=>Qu(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),r.L_.delete(1),await xn(r)})}function Xs(r,t){return t().catch(e=>Ws(r,e,t))}async function Mn(r){const t=j(r),e=Mt(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;sl(t);)try{const s=await Hu(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,ol(t,s)}catch(s){await Ws(t,s)}Ys(t)&&Js(t)}function sl(r){return $e(r)&&r.O_.length<10}function ol(r,t){r.O_.push(t);const e=Mt(r);e.r_()&&e.V_&&e.m_(t.mutations)}function Ys(r){return $e(r)&&!Mt(r).n_()&&r.O_.length>0}function Js(r){Mt(r).start()}async function al(r){Mt(r).p_()}async function ul(r){const t=Mt(r);for(const e of r.O_)t.m_(e.mutations)}async function ll(r,t,e){const i=r.O_.shift(),s=Dr.from(i,t,e);await Xs(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Mn(r)}async function hl(r,t){t&&Mt(r).V_&&await async function(i,s){if(function(l){return fu(l)&&l!==P.ABORTED}(s.code)){const a=i.O_.shift();Mt(i).s_(),await Xs(i,()=>i.remoteSyncer.rejectFailedWrite(a.batchId,s)),await Mn(i)}}(r,t),Ys(r)&&Js(r)}async function rs(r,t){const e=j(r);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=$e(e);e.L_.add(3),await qe(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await xn(e)}async function cl(r,t){const e=j(r);t?(e.L_.delete(2),await xn(e)):t||(e.L_.add(2),await qe(e),e.q_.set("Unknown"))}function Mt(r){return r.U_||(r.U_=function(e,i,s){const a=j(e);return a.w_(),new el(i,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:al.bind(null,r),mo:hl.bind(null,r),f_:ul.bind(null,r),g_:ll.bind(null,r)}),r.B_.push(async t=>{t?(r.U_.s_(),await Mn(r)):(await r.U_.stop(),r.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Or{constructor(t,e,i,s,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=a,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,a){const l=Date.now()+i,c=new Or(t,e,l,s,a);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zs(r,t){if(zt("AsyncQueue",`${t}: ${r}`),Dn(r))return new b(P.UNAVAILABLE,`${t}: ${r}`);throw r}class fl{constructor(){this.queries=is(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=j(e),a=s.queries;s.queries=is(),a.forEach((l,c)=>{for(const f of c.j_)f.onError(i)})})(this,new b(P.ABORTED,"Firestore shutting down"))}}function is(){return new ae(r=>bs(r),Ns)}function dl(r){r.Y_.forEach(t=>{t.next()})}var ss,os;(os=ss||(ss={})).ea="default",os.Cache="cache";class pl{constructor(t,e,i,s,a,l){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new ae(c=>bs(c),Ns),this.Ma=new Map,this.xa=new Set,this.Oa=new gt(x.comparator),this.Na=new Map,this.La=new kr,this.Ba={},this.ka=new Map,this.qa=se.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ml(r,t,e){const i=El(r);try{const s=await function(l,c){const f=j(l),_=Z.now(),I=c.reduce((C,k)=>C.add(k.key),ct());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let k=Rn(),O=ct();return f.cs.getEntries(C,I).next(N=>{k=N,k.forEach((K,$)=>{$.isValidDocument()||(O=O.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,k)).next(N=>{w=N;const K=[];for(const $ of c){const Q=uu($,w.get($.key).overlayedDocument);Q!=null&&K.push(new Ht($.key,Q,Rs(Q.value.mapValue),Vt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,_,K,c)}).next(N=>{S=N;const K=N.applyToLocalDocumentSet(w,O);return f.documentOverlayCache.saveOverlays(C,N.batchId,K)})}).then(()=>({batchId:S.batchId,changes:xs(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(l,c,f){let _=l.Ba[l.currentUser.toKey()];_||(_=new gt(B)),_=_.insert(c,f),l.Ba[l.currentUser.toKey()]=_}(i,s.batchId,e),await Ln(i,s.changes),await Mn(i.remoteStore)}catch(s){const a=Zs(s,"Failed to persist write");e.reject(a)}}function as(r,t,e){const i=j(r);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((a,l)=>{const c=l.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const f=j(l);f.onlineState=c;let _=!1;f.queries.forEach((I,w)=>{for(const S of w.j_)S.Z_(c)&&(_=!0)}),_&&dl(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function gl(r,t){const e=j(r),i=t.batch.batchId;try{const s=await zu(e.localStore,t);eo(e,i,null),to(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Ln(e,s)}catch(s){await vs(s)}}async function _l(r,t,e){const i=j(r);try{const s=await function(l,c){const f=j(l);return f.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let I;return f.mutationQueue.lookupMutationBatch(_,c).next(w=>(H(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(_,w))).next(()=>f.mutationQueue.performConsistencyCheck(_)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(_,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,I)).next(()=>f.localDocuments.getDocuments(_,I))})}(i.localStore,t);eo(i,t,e),to(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Ln(i,s)}catch(s){await vs(s)}}function to(r,t){(r.ka.get(t)||[]).forEach(e=>{e.resolve()}),r.ka.delete(t)}function eo(r,t,e){const i=j(r);let s=i.Ba[i.currentUser.toKey()];if(s){const a=s.get(t);a&&(e?a.reject(e):a.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function Ln(r,t,e){const i=j(r),s=[],a=[],l=[];i.Fa.isEmpty()||(i.Fa.forEach((c,f)=>{l.push(i.Ka(f,t,e).then(_=>{var I;if((_||e)&&i.isPrimaryClient){const w=_?!_.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(_){s.push(_);const w=br.Wi(f.targetId,_);a.push(w)}}))}),await Promise.all(l),i.Ca.d_(s),await async function(f,_){const I=j(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(_,S=>R.forEach(S.$i,C=>I.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>R.forEach(S.Ui,C=>I.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!Dn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of _){const S=w.targetId;if(!w.fromCache){const C=I.os.get(S),k=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(k);I.os=I.os.insert(S,O)}}}(i.localStore,a))}async function yl(r,t){const e=j(r);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Qs(e.localStore,t);e.currentUser=t,function(a,l){a.ka.forEach(c=>{c.forEach(f=>{f.reject(new b(P.CANCELLED,l))})}),a.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Ln(e,i.hs)}}function El(r){const t=j(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=gl.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_l.bind(null,t),t}class Sn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=On(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return Ku(this.persistence,new $u,t.initialUser,this.serializer)}Ga(t){return new Bu(Nr.Zr,this.serializer)}Wa(t){return new Wu}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sn.provider={build:()=>new Sn};class Er{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>as(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yl.bind(null,this.syncEngine),await cl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fl}()}createDatastore(t){const e=On(t.databaseInfo.databaseId),i=function(a){return new Zu(a)}(t.databaseInfo);return function(a,l,c,f){return new nl(a,l,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,a,l,c){return new il(i,s,a,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>as(this.syncEngine,e,0),function(){return ns.D()?new ns:new Xu}())}createSyncEngine(t,e){return function(s,a,l,c,f,_,I){const w=new pl(s,a,l,c,f,_);return I&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const a=j(s);D("RemoteStore","RemoteStore shutting down."),a.L_.add(5),await qe(a),a.k_.shutdown(),a.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Er.provider={build:()=>new Er};/**
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
 */class Tl{constructor(t,e,i,s,a){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=Ts.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(i,async l=>{D("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(i,l=>(D("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=Zs(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function hr(r,t){r.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let i=e.initialUser;r.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Qs(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function us(r,t){r.asyncQueue.verifyOperationInProgress();const e=await vl(r);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(i=>rs(t.remoteStore,i)),r.setAppCheckTokenChangeListener((i,s)=>rs(t.remoteStore,s)),r._onlineComponents=t}async function vl(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await hr(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;En("Error using user provided cache. Falling back to memory cache: "+e),await hr(r,new Sn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await hr(r,new Sn);return r._offlineComponents}async function Il(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await us(r,r._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await us(r,new Er))),r._onlineComponents}function Al(r){return Il(r).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function no(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const ls=new Map;/**
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
 */function wl(r,t,e){if(!e)throw new b(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Rl(r,t,e,i){if(t===!0&&i===!0)throw new b(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function hs(r){if(!x.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function xr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M()}function Tr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=xr(r);throw new b(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */class cs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Rl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=no((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mr{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new pa;switch(i.type){case"firstParty":return new ya(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=ls.get(e);i&&(D("ComponentProvider","Removing Datastore"),ls.delete(e),i.terminate())}(this),Promise.resolve()}}function Pl(r,t,e,i={}){var s;const a=(r=Tr(r,Mr))._getSettings(),l=`${t}:${e}`;if(a.host!=="firestore.googleapis.com"&&a.host!==l&&En("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},a),{host:l,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ht.MOCK_USER;else{c=ia(i.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(_)}r._authCredentials=new ma(new Es(c,f))}}/**
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
 */class Lr{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new Lr(this.firestore,t,this._query)}}class St{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new St(this.firestore,t,this._key)}}class Fe extends Lr{constructor(t,e,i){super(t,e,za(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new St(this.firestore,null,new x(t))}withConverter(t){return new Fe(this.firestore,t,this._path)}}function Vl(r,t,...e){if(r=yn(r),arguments.length===1&&(t=Ts.newId()),wl("doc","path",t),r instanceof Mr){const i=X.fromString(t,...e);return hs(i),new St(r,null,new x(i))}{if(!(r instanceof St||r instanceof Fe))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(X.fromString(t,...e));return hs(i),new St(r.firestore,r instanceof Fe?r.converter:null,new x(i))}}/**
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
 */class fs{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hs(this,"async_queue_retry"),this.Vu=()=>{const i=lr();i&&D("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=lr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=lr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new $t;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!Dn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(i);throw zt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=Or.createAndSchedule(this,t,e,i,a=>this.yu(a));return this.Tu.push(s),s}fu(){this.Eu&&M()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class ro extends Mr{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new fs,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new fs(t),this._firestoreClient=void 0,await t}}}function Sl(r,t){const e=typeof r=="object"?r:ea(),i=typeof r=="string"?r:"(default)",s=na(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const a=ra("firestore");a&&Pl(s,...a)}return s}function Cl(r){if(r._terminated)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Dl(r),r._firestoreClient}function Dl(r){var t,e,i;const s=r._freezeSettings(),a=function(c,f,_,I){return new Na(c,f,_,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,no(I.experimentalLongPollingOptions),I.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new Tl(r._authCredentials,r._appCheckCredentials,r._queue,a,r._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(r._componentsProvider))}/**
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
 */class Ue{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ue(It.fromBase64String(t))}catch(e){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ue(It.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class io{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class so{constructor(t){this._methodName=t}}/**
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
 */class oo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ao{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let a=0;a<i.length;++a)if(i[a]!==s[a])return!1;return!0}(this._values,t._values)}}/**
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
 */const kl=/^__.*__$/;class Nl{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new Ht(t,this.data,this.fieldMask,e,this.fieldTransforms):new je(t,this.data,e,this.fieldTransforms)}}function uo(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Fr{constructor(t,e,i,s,a,l){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,a===void 0&&this.vu(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new Fr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.Ou(t),s}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Cn(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(uo(this.Cu)&&kl.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class bl{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||On(t)}Qu(t,e,i,s=!1){return new Fr({Cu:t,methodName:e,qu:i,path:rt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ol(r){const t=r._freezeSettings(),e=On(r._databaseId);return new bl(r._databaseId,!!t.ignoreUndefinedProperties,e)}function xl(r,t,e,i,s,a={}){const l=r.Qu(a.merge||a.mergeFields?2:0,t,e,s);fo("Data must be an object, but it was:",l,i);const c=ho(i,l);let f,_;if(a.merge)f=new vt(l.fieldMask),_=l.fieldTransforms;else if(a.mergeFields){const I=[];for(const w of a.mergeFields){const S=Ml(t,w,e);if(!l.contains(S))throw new b(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Ul(I,S)||I.push(S)}f=new vt(I),_=l.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,_=l.fieldTransforms;return new Nl(new Tt(c),f,_)}function lo(r,t){if(co(r=yn(r)))return fo("Unsupported field value:",t,r),ho(r,t);if(r instanceof so)return function(i,s){if(!uo(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const a=i._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,s){const a=[];let l=0;for(const c of i){let f=lo(c,s.Lu(l));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),l++}return{arrayValue:{values:a}}}(r,t)}return function(i,s){if((i=yn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return nu(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Z.fromDate(i);return{timestampValue:gr(s.serializer,a)}}if(i instanceof Z){const a=new Z(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:gr(s.serializer,a)}}if(i instanceof oo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ue)return{bytesValue:mu(s.serializer,i._byteString)};if(i instanceof St){const a=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(a))throw s.Bu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Ks(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ao)return function(l,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(f=>{if(typeof f!="number")throw c.Bu("VectorValues must only contain numeric values.");return Cr(c.serializer,f)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${xr(i)}`)}(r,t)}function ho(r,t){const e={};return As(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Be(r,(i,s)=>{const a=lo(s,t.Mu(i));a!=null&&(e[i]=a)}),{mapValue:{fields:e}}}function co(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof oo||r instanceof Ue||r instanceof St||r instanceof so||r instanceof ao)}function fo(r,t,e){if(!co(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=xr(e);throw i==="an object"?t.Bu(r+" a custom object"):t.Bu(r+" "+i)}}function Ml(r,t,e){if((t=yn(t))instanceof io)return t._internalPath;if(typeof t=="string")return Fl(r,t);throw Cn("Field path arguments must be of type string or ",r,!1,void 0,e)}const Ll=new RegExp("[~\\*/\\[\\]]");function Fl(r,t,e){if(t.search(Ll)>=0)throw Cn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new io(...t.split("."))._internalPath}catch{throw Cn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Cn(r,t,e,i,s){const a=i&&!i.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(a||l)&&(f+=" (found",a&&(f+=` in field ${i}`),l&&(f+=` in document ${s}`),f+=")"),new b(P.INVALID_ARGUMENT,c+r+f)}function Ul(r,t){return r.some(e=>e.isEqual(t))}/**
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
 */function Bl(r,t,e){let i;return i=r?r.toFirestore(t):t,i}function jl(r,t,e){r=Tr(r,St);const i=Tr(r.firestore,ro),s=Bl(r.converter,t);return ql(i,[xl(Ol(i),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,Vt.none())])}function ql(r,t){return function(i,s){const a=new $t;return i.asyncQueue.enqueueAndForget(async()=>ml(await Al(i),s,a)),a.promise}(Cl(r),t)}(function(t,e=!0){(function(s){oe=s})(sa),Jo(new Zo("firestore",(i,{instanceIdentifier:s,options:a})=>{const l=i.getProvider("app").getImmediate(),c=new ro(new ga(i.getProvider("auth-internal")),new Ta(i.getProvider("app-check-internal")),function(_,I){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new In(_.options.projectId,I)}(l,s),l);return a=Object.assign({useFetchStreams:e},a),c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Ui(ji,"4.7.3",t),Ui(ji,"4.7.3","esm2017")})();const $l={apiKey:"AIzaSyD_K7ESDO4c9ja_mFNF2RGjx7KOxWPzuXo",authDomain:"financas-8cf44.firebaseapp.com",projectId:"financas-8cf44",storageBucket:"financas-8cf44.appspot.com",messagingSenderId:"637122171830",appId:"1:637122171830:web:8c42d2169f6176cb0d6717",measurementId:"G-GZJSG5TMLS"},po=ua($l),vr=la(po),Gl=Sl(po);document.getElementById("form-cadastro").addEventListener("submit",function(r){r.preventDefault();const t=document.getElementById("nome").value.trim(),e=document.getElementById("email").value.trim(),i=document.getElementById("senha").value.trim(),s=document.getElementById("confirmar-senha").value.trim();Ql();let a=!0;t===""&&(Se("erro-nome","O nome é obrigatório."),a=!1),Kl(e)||(Se("erro-email","Por favor, insira um email válido."),a=!1),zl(i)||(Se("erro-senha","A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos."),a=!1),i!==s&&(Se("erro-confirmar-senha","As senhas não coincidem."),a=!1),a&&Hl(t,e,i)});function Kl(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(r).toLowerCase())}function zl(r){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(r)}function Se(r,t){const e=document.getElementById(r);e.textContent=t,e.style.color="red"}function Ql(){document.querySelectorAll(".erro").forEach(t=>{t.textContent=""})}function Hl(r,t,e){ha(vr,t,e).then(i=>{const s=i.user;return console.log("Usuário cadastrado:",s),ca(s,{displayName:r})}).then(()=>{mo(vr.currentUser.uid,r,t),Wl("Cadastro realizado com sucesso!"),window.location.href="dashboard.html"}).catch(i=>{console.error("Erro no cadastro:",i.message),Se("erro-geral","Erro ao cadastrar: "+i.message)})}async function mo(r,t,e){try{const i=Vl(Gl,"usuarios",r);await jl(i,{nome:t,email:e,dataCadastro:new Date().toISOString()}),console.log("Usuário salvo no Firestore com sucesso!")}catch(i){console.error("Erro ao salvar usuário no Firestore:",i)}}function Wl(r){const t=document.createElement("div");t.classList.add("mensagem-sucesso"),t.textContent=r,document.querySelector(".formulario-cadastro").appendChild(t),setTimeout(()=>{t.remove()},5e3)}document.getElementById("google-login").addEventListener("click",function(){const r=new fa;da(vr,r).then(t=>{const e=t.user;console.log("Usuário cadastrado/logado com Google:",e),mo(e.uid,e.displayName,e.email),alert("Cadastro com Google realizado com sucesso!"),window.location.href="dashboard.html"}).catch(t=>{console.error("Erro no cadastro com Google:",t.message),alert("Erro ao cadastrar com Google: "+t.message)})});
