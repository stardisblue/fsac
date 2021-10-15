// https://github.com/stardisblue/fsac v1.0.1 Copyright (c) 2021 Fati CHEN

"use strict";function t(t){return{v:t}}function n(t,n,r,o,h){e(t,n,r||0,o||t.length-1,h||i)}function e(t,n,i,o,h){for(;o>i;){if(o-i>600){var s=o-i+1,a=n-i+1,l=Math.log(s),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(s-c)/s)*(a-s/2<0?-1:1);e(t,n,Math.max(i,Math.floor(n-a*c/s+m)),Math.min(o,Math.floor(n+(s-a)*c/s+m)),h)}var u=t[n],f=i,x=o;for(r(t,i,n),h(t[o],u)>0&&r(t,i,o);f<x;){for(r(t,f,x),f++,x--;h(t[f],u)<0;)f++;for(;h(t[x],u)>0;)x--}0===h(t[i],u)?r(t,i,x):r(t,++x,o),x<=n&&(i=x+1),n<=x&&(o=x-1)}}function r(t,n,e){var r=t[n];t[n]=t[e],t[e]=r}function i(t,n){return t<n?-1:t>n?1:0}Object.defineProperty(exports,"__esModule",{value:!0});function o(t,n,e){if(!e)return n.indexOf(t);for(let r=0;r<n.length;r++)if(e(t,n[r]))return r;return-1}function h(t,n){s(t,0,t.children.length,n,t)}function s(t,n,e,r,i){i||(i=p(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let o=n;o<e;o++){const n=t.children[o];a(i,t.leaf?r(n):n)}return i}function a(t,n){return t.minX=Math.min(t.minX,n.minX),t.minY=Math.min(t.minY,n.minY),t.maxX=Math.max(t.maxX,n.maxX),t.maxY=Math.max(t.maxY,n.maxY),t}function l(t,n){return t.minX-n.minX}function c(t,n){return t.minY-n.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,n){const e=Math.max(t.minX,n.minX),r=Math.max(t.minY,n.minY),i=Math.min(t.maxX,n.maxX),o=Math.min(t.maxY,n.maxY);return Math.max(0,i-e)*Math.max(0,o-r)}function x(t,n){return t.minX<=n.minX&&t.minY<=n.minY&&n.maxX<=t.maxX&&n.maxY<=t.maxY}function d(t,n){return n.minX<=t.maxX&&n.minY<=t.maxY&&n.maxX>=t.minX&&n.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function M(t,e,r,i,o){const h=[e,r];for(;h.length;){if((r=h.pop())-(e=h.pop())<=i)continue;const s=e+Math.ceil((r-e)/i/2)*i;n(t,s,e,r,o),h.push(e,s,s,r)}}function g(t){return{minX:t.x-t.r,minY:t.y-t.r,maxX:t.x+t.r,maxY:t.y+t.r}}function X(t,n){const e=t.x*t.n+n.x*n.n,r=t.y*t.n+n.y*n.n,i=t.n+n.n;return function(t,n,e,r,i=null){const o={x:t,y:n,r:Math.sqrt(e),n:e,children:r};i&&(o.data=i);return o}(e/i,r/i,i,[t,n])}function Y(t,n){return(t.r+n.r)**2-((t.x-n.x)**2+(t.y-n.y)**2)}class _ extends class{constructor(t=9){this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()}all(){return this._all(this.data,[])}search(t){let n=this.data;const e=[];if(!d(t,n))return e;const r=this.toBBox,i=[];for(;n;){for(let o=0;o<n.children.length;o++){const h=n.children[o],s=n.leaf?r(h):h;d(t,s)&&(n.leaf?e.push(h):x(t,s)?this._all(h,e):i.push(h))}n=i.pop()}return e}collides(t){let n=this.data;if(!d(t,n))return!1;const e=[];for(;n;){for(let r=0;r<n.children.length;r++){const i=n.children[r],o=n.leaf?this.toBBox(i):i;if(d(t,o)){if(n.leaf||x(t,o))return!0;e.push(i)}}n=e.pop()}return!1}load(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(let n=0;n<t.length;n++)this.insert(t[n]);return this}let n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=p([]),this}remove(t,n){if(!t)return this;let e=this.data;const r=this.toBBox(t),i=[],h=[];let s,a,l;for(;e||i.length;){if(e||(e=i.pop(),a=i[i.length-1],s=h.pop(),l=!0),e.leaf){const r=o(t,e.children,n);if(-1!==r)return e.children.splice(r,1),i.push(e),this._condense(i),this}l||e.leaf||!x(e,r)?a?(s++,e=a.children[s],l=!1):e=null:(i.push(e),h.push(s),s=0,a=e,e=e.children[0])}return this}toBBox(t){return t}compareMinX(t,n){return t.minX-n.minX}compareMinY(t,n){return t.minY-n.minY}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,n){const e=[];for(;t;)t.leaf?n.push(...t.children):e.push(...t.children),t=e.pop();return n}_build(t,n,e,r){const i=e-n+1;let o,s=this._maxEntries;if(i<=s)return o=p(t.slice(n,e+1)),h(o,this.toBBox),o;r||(r=Math.ceil(Math.log(i)/Math.log(s)),s=Math.ceil(i/Math.pow(s,r-1))),o=p([]),o.leaf=!1,o.height=r;const a=Math.ceil(i/s),l=a*Math.ceil(Math.sqrt(s));M(t,n,e,l,this.compareMinX);for(let i=n;i<=e;i+=l){const n=Math.min(i+l-1,e);M(t,i,n,a,this.compareMinY);for(let e=i;e<=n;e+=a){const i=Math.min(e+a-1,n);o.children.push(this._build(t,e,i,r-1))}}return h(o,this.toBBox),o}_chooseSubtree(t,n,e,r){for(;r.push(n),!n.leaf&&r.length-1!==e;){let e,r=1/0,h=1/0;for(let s=0;s<n.children.length;s++){const a=n.children[s],l=m(a),c=(i=t,o=a,(Math.max(o.maxX,i.maxX)-Math.min(o.minX,i.minX))*(Math.max(o.maxY,i.maxY)-Math.min(o.minY,i.minY))-l);c<h?(h=c,r=l<r?l:r,e=a):c===h&&l<r&&(r=l,e=a)}n=e||n.children[0]}var i,o;return n}_insert(t,n,e){const r=e?t:this.toBBox(t),i=[],o=this._chooseSubtree(r,this.data,n,i);for(o.children.push(t),a(o,r);n>=0&&i[n].children.length>this._maxEntries;)this._split(i,n),n--;this._adjustParentBBoxes(r,i,n)}_split(t,n){const e=t[n],r=e.children.length,i=this._minEntries;this._chooseSplitAxis(e,i,r);const o=this._chooseSplitIndex(e,i,r),s=p(e.children.splice(o,e.children.length-o));s.height=e.height,s.leaf=e.leaf,h(e,this.toBBox),h(s,this.toBBox),n?t[n-1].children.push(s):this._splitRoot(e,s)}_splitRoot(t,n){this.data=p([t,n]),this.data.height=t.height+1,this.data.leaf=!1,h(this.data,this.toBBox)}_chooseSplitIndex(t,n,e){let r,i=1/0,o=1/0;for(let h=n;h<=e-n;h++){const n=s(t,0,h,this.toBBox),a=s(t,h,e,this.toBBox),l=f(n,a),c=m(n)+m(a);l<i?(i=l,r=h,o=c<o?c:o):l===i&&c<o&&(o=c,r=h)}return r||e-n}_chooseSplitAxis(t,n,e){const r=t.leaf?this.compareMinX:l,i=t.leaf?this.compareMinY:c;this._allDistMargin(t,n,e,r)<this._allDistMargin(t,n,e,i)&&t.children.sort(r)}_allDistMargin(t,n,e,r){t.children.sort(r);const i=this.toBBox,o=s(t,0,n,i),h=s(t,e-n,e,i);let l=u(o)+u(h);for(let r=n;r<e-n;r++){const n=t.children[r];a(o,t.leaf?i(n):n),l+=u(o)}for(let r=e-n-1;r>=n;r--){const n=t.children[r];a(h,t.leaf?i(n):n),l+=u(h)}return l}_adjustParentBBoxes(t,n,e){for(let r=e;r>=0;r--)a(n[r],t)}_condense(t){for(let n,e=t.length-1;e>=0;e--)0===t[e].children.length?e>0?(n=t[e-1].children,n.splice(n.indexOf(t[e]),1)):this.clear():h(t[e],this.toBBox)}}{toBBox(t){return g(t.v)}compareMinX(t,n){return t.v.x-t.v.r-(n.v.x-n.v.r)}compareMinY(t,n){return t.v.y-t.v.r-(n.v.y-n.v.r)}}function B(n,{merge:e=X,overlap:r=Y,bbox:i=g,Rbush:o=_,brk:h=!1,reverse:s=!1,sort:a=!0}={}){const l=n.map(t),c=new Set(l),m=new o;m.load(l);for(const t of c){let n=!1,o=!0,l=t.v;for(;o;){o=!1;const u=m.search(i(l)),f=new Uint32Array(u.length);{const t=new Float64Array(u.length);u.forEach(((n,e)=>{f[e]=e,t[e]=r(l,n.v)})),a&&f.sort(((n,e)=>t[e]-t[n]))}const x=s?f.reverse():f;for(const i of x){const s=u[i];if(t!==s&&(r(l,s.v)>0&&(n||(n=!0),l=e(l,s.v),c.delete(s),m.remove(s),o||(o=!0),h)))break}}n&&(m.remove(t),t.v=l,m.insert(t))}return Array.from(c,(({v:t})=>t))}function v(t){return Math.pow(2,t)}function b(t,n){return function(e,r){const i=X(e,r);return i._r=i.r,i.r/=t,i.at=n,i}}function y(t){return function(n){return n.r=n._r/t}}function w(t){return function(n){return{...n,_r:n.r,at:t}}}exports.CircleRbush=_,exports.bbox=g,exports.circlePrepare=w,exports.circleRescale=y,exports.fsac=B,exports.merge=X,exports.offlineCircleMerge=b,exports.offlinefsac=function(t,{step:n=1,maxZoom:e=18,projection:r=v,rescale:i=y,merge:o=b,prepare:h=w,...s}={}){if(n<=0)throw new Error(`step should be greater than 0, got "${n}"`);if(e<0)throw new Error(`maxZoom should be at least equal to 0, got "${e}"`);let a=Array.from(t,h(e));for(let t=e;t>=0;t-=1/r(n-1)){const n=r(t);a.forEach(i(n)),a=B(a,{...s,merge:o(n,t)})}return a},exports.overlap=Y,exports.powerTwoProjection=v,exports.ref=t;
