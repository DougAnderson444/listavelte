import{K as ne,D as J,S as le,i as se,s as oe,e as O,k as C,t as B,c as E,a as S,m as T,h as P,d as $,b as x,g as R,J as m,L as N,j as re,M as ae,N as ie,O as ce,P as de,Q as fe,R as he,T as ye,o as X,U as z,q as F,r as U,p as j,n as ue,V as K,W as ve,X as me,x as be,Y as ke,y as we,Z as xe,z as $e,_ as Oe,C as Ee}from"../chunks/index-e7afb2b6.js";function _e(l){const t=l-1;return t*t*t+1}function Ie(l){return--l*l*l*l*l+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Me(l,t){var e={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&t.indexOf(n)<0&&(e[n]=l[n]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,n=Object.getOwnPropertySymbols(l);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(l,n[c])&&(e[n[c]]=l[n[c]]);return e}function De(l){var{fallback:t}=l,e=Me(l,["fallback"]);const n=new Map,c=new Map;function u(v,p,h){const{delay:d=0,duration:g=M=>Math.sqrt(M)*30,easing:b=_e}=J(J({},e),h),r=p.getBoundingClientRect(),_=v.left-r.left,o=v.top-r.top,w=v.width/r.width,y=v.height/r.height,k=Math.sqrt(_*_+o*o),i=getComputedStyle(p),a=i.transform==="none"?"":i.transform,f=+i.opacity;return{delay:d,duration:ne(g)?g(k):g,easing:b,css:(M,q)=>`
				opacity: ${M*f};
				transform-origin: top left;
				transform: ${a} translate(${q*_}px,${q*o}px) scale(${M+(1-M)*w}, ${M+(1-M)*y});
			`}}function s(v,p,h){return(d,g)=>(v.set(g.key,{rect:d.getBoundingClientRect()}),()=>{if(p.has(g.key)){const{rect:b}=p.get(g.key);return p.delete(g.key),u(b,d,g)}return v.delete(g.key),t&&t(d,g,h)})}return[s(c,n,!1),s(n,c,!0)]}function pe(l,{from:t,to:e},n={}){const c=getComputedStyle(l),u=c.transform==="none"?"":c.transform,[s,v]=c.transformOrigin.split(" ").map(parseFloat),p=t.left+t.width*s/e.width-(e.left+s),h=t.top+t.height*v/e.height-(e.top+v),{delay:d=0,duration:g=r=>Math.sqrt(r)*120,easing:b=_e}=n;return{delay:d,duration:ne(g)?g(Math.sqrt(p*p+h*h)):g,easing:b,css:(r,_)=>{const o=_*p,w=_*h,y=r+_*t.width/e.width,k=r+_*t.height/e.height;return`transform: ${u} translate(${o}px, ${w}px) scale(${y}, ${k});`}}}function Q(l,t,e){const n=l.slice();return n[12]=t[e],n}function W(l,t,e){const n=l.slice();return n[12]=t[e],n[15]=t,n[16]=e,n}function Y(l,t){let e,n,c,u,s=t[12].description+"",v,p,h,d,g,b,r,_,o,w,y,k,i=ue,a,f,M;function q(){return t[7](t[12])}function V(...D){return t[8](t[12],t[15],t[16],...D)}function ge(){return t[9](t[12])}return{key:l,first:null,c(){e=O("div"),n=O("input"),c=C(),u=O("div"),v=B(s),p=C(),h=O("button"),d=B("High"),b=C(),r=O("button"),_=B("X"),o=C(),this.h()},l(D){e=E(D,"DIV",{class:!0});var I=S(e);n=E(I,"INPUT",{type:!0,class:!0}),c=T(I),u=E(I,"DIV",{contenteditable:!0,class:!0});var H=S(u);v=P(H,s),H.forEach($),p=T(I),h=E(I,"BUTTON",{class:!0});var L=S(h);d=P(L,"High"),L.forEach($),b=T(I),r=E(I,"BUTTON",{class:!0});var A=S(r);_=P(A,"X"),A.forEach($),o=T(I),I.forEach($),this.h()},h(){x(n,"type","checkbox"),x(n,"class","mx-2 flex-none svelte-yh77la"),x(u,"contenteditable",""),x(u,"class","flex-grow break-all svelte-yh77la"),x(h,"class",g=(t[12].high?"bg-green-400 text-white":"text-green-200")+" mx-1 flex-none px-4 py-1 text-xs font-semibold rounded-full hover:text-white hover:bg-green-400 hover:border-transparent svelte-yh77la"),x(r,"class","mx-1 flex-none px-4 py-1 text-xs text-red-400 font-semibold rounded-full hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 svelte-yh77la"),x(e,"class","flex flex-row items-center mb-1 w-80 svelte-yh77la"),this.first=e},m(D,I){R(D,e,I),m(e,n),m(e,c),m(e,u),m(u,v),m(e,p),m(e,h),m(h,d),m(e,b),m(e,r),m(r,_),m(e,o),a=!0,f||(M=[N(n,"change",q),N(u,"keydown",Ce),N(h,"click",V),N(r,"click",ge)],f=!0)},p(D,I){t=D,(!a||I&1)&&s!==(s=t[12].description+"")&&re(v,s),(!a||I&1&&g!==(g=(t[12].high?"bg-green-400 text-white":"text-green-200")+" mx-1 flex-none px-4 py-1 text-xs font-semibold rounded-full hover:text-white hover:bg-green-400 hover:border-transparent svelte-yh77la"))&&x(h,"class",g)},r(){k=e.getBoundingClientRect()},f(){ae(e),i(),ie(e,k)},a(){i(),i=ce(e,k,pe,{duration:200})},i(D){a||(de(()=>{y&&y.end(1),w=fe(e,t[2],{key:t[12].id}),w.start()}),a=!0)},o(D){w&&w.invalidate(),y=he(e,t[1],{key:t[12].id}),a=!1},d(D){D&&$(e),D&&y&&y.end(),f=!1,ye(M)}}}function Z(l,t){let e,n,c,u,s=t[12].description+"",v,p,h,d,g,b=ue,r,_,o;function w(){return t[10](t[12])}return{key:l,first:null,c(){e=O("label"),n=O("input"),c=C(),u=O("div"),v=B(s),p=C(),this.h()},l(y){e=E(y,"LABEL",{class:!0});var k=S(e);n=E(k,"INPUT",{type:!0,class:!0}),c=T(k),u=E(k,"DIV",{class:!0});var i=S(u);v=P(i,s),i.forEach($),p=T(k),k.forEach($),this.h()},h(){x(n,"type","checkbox"),n.checked=!0,x(n,"class","mx-2 flex-none svelte-yh77la"),x(u,"class","flex-grow text-gray-400 svelte-yh77la"),x(e,"class","flex flex-row items-center py-1 w-80 svelte-yh77la"),this.first=e},m(y,k){R(y,e,k),m(e,n),m(e,c),m(e,u),m(u,v),m(e,p),r=!0,_||(o=N(n,"change",w),_=!0)},p(y,k){t=y,(!r||k&1)&&s!==(s=t[12].description+"")&&re(v,s)},r(){g=e.getBoundingClientRect()},f(){ae(e),b(),ie(e,g)},a(){b(),b=ce(e,g,pe,{duration:200})},i(y){r||(de(()=>{d&&d.end(1),h=fe(e,t[2],{key:t[12].id}),h.start()}),r=!0)},o(y){h&&h.invalidate(),d=he(e,t[1],{key:t[12].id}),r=!1},d(y){y&&$(e),y&&d&&d.end(),_=!1,o()}}}function Se(l){let t,e,n,c,u,s=[],v=new Map,p,h,d=[],g=new Map,b,r,_,o=l[0].filter(G).sort(ee);const w=i=>i[12].id;for(let i=0;i<o.length;i+=1){let a=W(l,o,i),f=w(a);v.set(f,s[i]=Y(f,a))}let y=l[0].filter(te);const k=i=>i[12].id;for(let i=0;i<y.length;i+=1){let a=Q(l,y,i),f=k(a);g.set(f,d[i]=Z(f,a))}return{c(){t=O("div"),e=O("div"),n=O("div"),c=O("input"),u=C();for(let i=0;i<s.length;i+=1)s[i].c();p=C(),h=O("div");for(let i=0;i<d.length;i+=1)d[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var a=S(t);e=E(a,"DIV",{class:!0});var f=S(e);n=E(f,"DIV",{});var M=S(n);c=E(M,"INPUT",{class:!0,placeholder:!0}),M.forEach($),u=T(f);for(let V=0;V<s.length;V+=1)s[V].l(f);f.forEach($),p=T(a),h=E(a,"DIV",{class:!0});var q=S(h);for(let V=0;V<d.length;V+=1)d[V].l(q);q.forEach($),a.forEach($),this.h()},h(){x(c,"class","mx-1 flex flex-row items-center w-80 border p-1 my-1 svelte-yh77la"),x(c,"placeholder","what needs to be done?"),x(e,"class","flex flex-col flex-nowrap m-1 w-80 svelte-yh77la"),x(h,"class","flex flex-col flex-nowrap m-1 my-2 w-80 svelte-yh77la"),x(t,"class","flex flex-col flex-nowrap w-80 svelte-yh77la")},m(i,a){R(i,t,a),m(t,e),m(e,n),m(n,c),m(e,u);for(let f=0;f<s.length;f+=1)s[f].m(e,null);m(t,p),m(t,h);for(let f=0;f<d.length;f+=1)d[f].m(h,null);b=!0,r||(_=N(c,"keydown",l[6]),r=!0)},p(i,[a]){if(a&49){o=i[0].filter(G).sort(ee),X();for(let f=0;f<s.length;f+=1)s[f].r();s=z(s,a,w,1,i,o,v,e,K,Y,null,W);for(let f=0;f<s.length;f+=1)s[f].a();F()}if(a&33){y=i[0].filter(te),X();for(let f=0;f<d.length;f+=1)d[f].r();d=z(d,a,k,1,i,y,g,h,K,Z,null,Q);for(let f=0;f<d.length;f+=1)d[f].a();F()}},i(i){if(!b){for(let a=0;a<o.length;a+=1)U(s[a]);for(let a=0;a<y.length;a+=1)U(d[a]);b=!0}},o(i){for(let a=0;a<s.length;a+=1)j(s[a]);for(let a=0;a<d.length;a+=1)j(d[a]);b=!1},d(i){i&&$(t);for(let a=0;a<s.length;a+=1)s[a].d();for(let a=0;a<d.length;a+=1)d[a].d();r=!1,_()}}}const G=l=>!l.done,ee=(l,t)=>l.high<t.high?1:-1,Ce=function(l){l.key=="Enter"&&(l.preventDefault(),this.blur())},te=l=>l.done;function Te(l,t,e){const n=()=>(16777216*Math.random()|0).toString(16),[c,u]=De({duration:o=>Math.sqrt(o*200),fallback(o,w){const y=getComputedStyle(o),k=y.transform==="none"?"":y.transform;return{duration:600,easing:Ie,css:i=>`
					transform: ${k} scale(${i});
					opacity: ${i}
				`}}});let{todos:s=[{id:n(),done:!1,high:!0,description:"write some docs"},{id:n(),done:!1,high:!1,description:"start writing blog post"},{id:n(),done:!0,high:!1,description:"buy some milk"},{id:n(),done:!1,high:!1,description:"mow the lawn"},{id:n(),done:!1,high:!1,description:"feed the turtle"},{id:n(),done:!1,high:!1,description:"fix some bugs"}]}=t;function v(o){if(o==null)return;const w={id:n(),done:!1,high:!1,description:o.value};e(0,s=[w,...s]),o.value=""}function p(o){e(0,s=s.filter(w=>w!==o))}function h(o,w){o.done=w,p(o),e(0,s=s.concat(o))}const d=o=>o.key==="Enter"&&v(o.target),g=o=>h(o,!0),b=(o,w,y,k)=>e(0,w[y].high=!o.high,s),r=o=>p(o),_=o=>h(o,!1);return l.$$set=o=>{"todos"in o&&e(0,s=o.todos)},[s,c,u,v,p,h,d,g,b,r,_]}class Ve extends le{constructor(t){super(),se(this,t,Te,Se,oe,{todos:0})}}function qe(l){let t,e,n,c,u,s,v,p,h=JSON.stringify(l[0],null,2)+"",d;function g(r){l[1](r)}let b={};return l[0]!==void 0&&(b.todos=l[0]),t=new Ve({props:b}),ve.push(()=>me(t,"todos",g)),{c(){be(t.$$.fragment),n=C(),c=O("div"),u=O("h1"),s=B("As you update the list, the data also updates:"),v=C(),p=new ke(!1),this.h()},l(r){we(t.$$.fragment,r),n=T(r),c=E(r,"DIV",{class:!0});var _=S(c);u=E(_,"H1",{class:!0});var o=S(u);s=P(o,"As you update the list, the data also updates:"),o.forEach($),v=T(_),p=xe(_,!1),_.forEach($),this.h()},h(){x(u,"class","my-2 font-semibold text-blue-400"),p.a=null,x(c,"class","p-2 text-gray-400")},m(r,_){$e(t,r,_),R(r,n,_),R(r,c,_),m(c,u),m(u,s),m(c,v),p.m(h,c),d=!0},p(r,[_]){const o={};!e&&_&1&&(e=!0,o.todos=r[0],Oe(()=>e=!1)),t.$set(o),(!d||_&1)&&h!==(h=JSON.stringify(r[0],null,2)+"")&&p.p(h)},i(r){d||(U(t.$$.fragment,r),d=!0)},o(r){j(t.$$.fragment,r),d=!1},d(r){Ee(t,r),r&&$(n),r&&$(c)}}}function Ne(l,t,e){let n=1,c=[{id:n++,done:!1,high:!0,description:"install the component"},{id:n++,done:!1,high:!1,description:"pass in some todos"},{id:n++,done:!0,high:!1,description:"mark them as done"}];function u(s){c=s,e(0,c)}return[c,u]}class Pe extends le{constructor(t){super(),se(this,t,Ne,qe,oe,{})}}export{Pe as default};
