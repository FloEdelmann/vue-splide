import{d as it,r as Rt,o as kn,a as De,b as xe,c as Vn,e as F,f as H,g as st,h as Mn,i as V,F as rt,j as et,k as tt,w as j,l as Et,m as yt,V as ke,n as Ve}from"./vendor.1b6f9bb3.js";const Me=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=e(s);fetch(s.href,u)}};Me();/*!
 * Splide.js
 * Version  : 3.1.6
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */const Y="splide",Bn=`data-${Y}`,St=1,Be=2,ln=3,Fn=4,jt=5,Fe={CREATED:St,MOUNTED:Be,IDLE:ln,MOVING:Fn,DESTROYED:jt},an=10,Ue=20;function $t(t){t.length=0}function Pt(t){return!dn(t)&&typeof t=="object"}function Un(t){return Array.isArray(t)}function ze(t){return typeof t=="function"}function ct(t){return typeof t=="string"}function fn(t){return typeof t=="undefined"}function dn(t){return t===null}function zn(t){return t instanceof HTMLElement}function Dt(t){return Un(t)?t:[t]}function ut(t,n){Dt(t).forEach(n)}function xt(t,n){return t.indexOf(n)>-1}function kt(t,n){return t.push(...Dt(n)),t}const Ge=Array.prototype;function vt(t,n,e){return Ge.slice.call(t,n,e)}function We(t,n){return vt(t).filter(n)[0]}function At(t,n,e){t&&ut(n,o=>{o&&t.classList[e?"add":"remove"](o)})}function lt(t,n){At(t,ct(n)?n.split(" "):n,!0)}function Zt(t,n){ut(n,t.appendChild.bind(t))}function pn(t,n){ut(t,e=>{const o=n.parentNode;o&&o.insertBefore(e,n)})}function Gn(t,n){return(t.msMatchesSelector||t.matches).call(t,n)}function Wn(t,n){return t?vt(t.children).filter(e=>Gn(e,n)):[]}function at(t,n){return n?Wn(t,n)[0]:t.firstElementChild}function pt(t,n){if(t){const e=Object.keys(t);for(let o=0;o<e.length;o++){const s=e[o];if(s!=="__proto__"&&n(t[s],s)===!1)break}}return t}function _n(t){return vt(arguments,1).forEach(n=>{pt(n,(e,o)=>{t[o]=n[o]})}),t}function _t(t,n){return pt(n,(e,o)=>{Un(e)?t[o]=e.slice():Pt(e)?t[o]=_t(Pt(t[o])?t[o]:{},e):t[o]=e}),t}function ot(t,n){t&&ut(n,e=>{t.removeAttribute(e)})}function B(t,n,e){Pt(n)?pt(n,(o,s)=>{B(t,s,o)}):dn(e)?ot(t,n):t.setAttribute(n,String(e))}function Tt(t,n,e){const o=document.createElement(t);return n&&(ct(n)?lt(o,n):B(o,n)),e&&Zt(e,o),o}function Z(t,n,e){if(fn(e))return getComputedStyle(t)[n];if(!dn(e)){const{style:o}=t;e=`${e}`,o[n]!==e&&(o[n]=e)}}function Qt(t,n){Z(t,"display",n)}function Jt(t,n){return t.getAttribute(n)}function Hn(t,n){return t&&t.classList.contains(n)}function Q(t){return t.getBoundingClientRect()}function Nt(t){ut(t,n=>{n&&n.parentNode&&n.parentNode.removeChild(n)})}function He(t,n){if(ct(n)){const e=Tt("div",{style:`width: ${n}; position: absolute;`},t);n=Q(e).width,Nt(e)}return n}function Yn(t){return at(new DOMParser().parseFromString(t,"text/html").body)}function ft(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function ht(t,n){return t&&t.querySelector(n)}function hn(t,n){return vt(t.querySelectorAll(n))}function Vt(t,n){At(t,n,!1)}function dt(t){return ct(t)?t:t?`${t}px`:""}function Mt(t,n=""){if(!t)throw new Error(`[${Y}] ${n}`)}function Xn(t){setTimeout(t)}const mn=()=>{};function qn(t){return requestAnimationFrame(t)}const{min:Bt,max:Ft,floor:gn,ceil:Ut,abs:J}=Math;function Ye(t,n,e){return J(t-n)<e}function zt(t,n,e,o){const s=Bt(n,e),u=Ft(n,e);return o?s<t&&t<u:s<=t&&t<=u}function bt(t,n,e){const o=Bt(n,e),s=Ft(n,e);return Bt(Ft(o,t),s)}function En(t){return+(t>0)-+(t<0)}function Kn(t,n){return ut(n,e=>{t=t.replace("%s",`${e}`)}),t}function yn(t){return t<10?`0${t}`:`${t}`}const jn={};function Xe(t){return`${t}${yn(jn[t]=(jn[t]||0)+1)}`}function qe(){let t={};function n(c,i,_,r=an){a(c,(l,d)=>{t[l]=t[l]||[],kt(t[l],{_event:l,_callback:i,_namespace:d,_priority:r,_key:_}).sort((f,y)=>f._priority-y._priority)})}function e(c,i){a(c,(_,r)=>{const l=t[_];t[_]=l&&l.filter(d=>d._key?d._key!==i:i||d._namespace!==r)})}function o(c){pt(t,(i,_)=>{e(_,c)})}function s(c){(t[c]||[]).forEach(i=>{i._callback.apply(i,vt(arguments,1))})}function u(){t={}}function a(c,i){Dt(c).join(" ").split(" ").forEach(_=>{const r=_.split(".");i(r[0],r[1])})}return{on:n,off:e,offBy:o,emit:s,destroy:u}}const nt="mounted",Zn="ready",mt="move",Lt="moved",Sn="click",Qn="active",Jn="inactive",te="visible",ne="hidden",ee="slide:keydown",U="refresh",X="updated",gt="resize",$n="resized",oe="repositioned",se="drag",ie="dragging",re="dragged",vn="scroll",Gt="scrolled",An="destroy",ce="arrows:mounted",ue="arrows:updated",le="pagination:mounted",ae="pagination:updated",fe="navigation:mounted",de="autoplay:play",pe="autoplay:playing",_e="autoplay:pause",Tn="lazyload:loaded";function z(t){const{event:n}=t,e={};let o=[];function s(r,l,d){n.on(r,l,e,d)}function u(r){n.off(r,e)}function a(r,l,d,f){i(r,l,(y,m)=>{o.push([y,m,d,f]),y.addEventListener(m,d,f)})}function c(r,l,d){i(r,l,(f,y)=>{o=o.filter(m=>m[0]===f&&m[1]===y&&(!d||m[2]===d)?(f.removeEventListener(y,m[2],m[3]),!1):!0)})}function i(r,l,d){ut(r,f=>{f&&l.split(" ").forEach(d.bind(null,f))})}function _(){o=o.filter(r=>c(r[0],r[1])),n.offBy(e)}return n.on(An,_,e),{on:s,off:u,emit:n.emit,bind:a,unbind:c,destroy:_}}function Nn(t,n,e,o){const{now:s}=Date;let u,a=0,c,i=!0,_=0;function r(){if(!i){const A=s()-u;if(A>=t?(a=1,u=s()):a=A/t,e&&e(a),a===1&&(n(),o&&++_>=o))return d();qn(r)}}function l(A){!A&&y(),u=s()-(A?a*t:0),i=!1,qn(r)}function d(){i=!0}function f(){u=s(),a=0,e&&e(a)}function y(){cancelAnimationFrame(c),a=0,c=0,i=!0}function m(){return i}return{start:l,rewind:f,pause:d,cancel:y,isPaused:m}}function Ke(t){let n=t;function e(s){n=s}function o(s){return xt(Dt(s),n)}return{set:e,is:o}}function he(t,n){let e;function o(){e||(e=Nn(n||0,()=>{t.apply(this,arguments),e=null},null,1),e.start())}return o}function je(t,n,e){const o=he(r);let s,u,a;function c(){try{_t(e,JSON.parse(Jt(t.root,Bn)))}catch(f){Mt(!1,f.message)}s=_t({},e);const{breakpoints:d}=e;if(d){const f=e.mediaQuery==="min";u=Object.keys(d).sort((y,m)=>f?+m-+y:+y-+m).map(y=>[y,matchMedia(`(${f?"min":"max"}-width:${y}px)`)]),r()}}function i(){u&&addEventListener("resize",o)}function _(d){d&&removeEventListener("resize",o)}function r(){const d=We(u,f=>f[1].matches)||[];d[0]!==a&&l(a=d[0])}function l(d){const f=e.breakpoints[d]||s;f.destroy?(t.options=s,t.destroy(f.destroy==="completely")):(t.state.is(jt)&&(_(!0),t.mount()),t.options=f)}return{setup:c,mount:i,destroy:_}}const me="rtl",bn="ttb",Ze={marginRight:["marginBottom","marginLeft"],autoWidth:["autoHeight"],fixedWidth:["fixedHeight"],paddingLeft:["paddingTop","paddingRight"],paddingRight:["paddingBottom","paddingLeft"],width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:["ArrowUp","ArrowRight"],ArrowRight:["ArrowDown","ArrowLeft"]};function Qe(t,n,e){function o(u,a){const{direction:c}=e,i=c===me&&!a?1:c===bn?0:-1;return Ze[u][i]||u}function s(u){return u*(e.direction===me?1:-1)}return{resolve:o,orient:s}}const tn=Y,Je=`${Y}__slider`,to=`${Y}__track`,no=`${Y}__list`,nn=`${Y}__slide`,ge=`${nn}--clone`,eo=`${nn}__container`,Ee=`${Y}__arrows`,Ln=`${Y}__arrow`,ye=`${Ln}--prev`,Se=`${Ln}--next`,$e=`${Y}__pagination`,oo=`${$e}__page`,ve=`${Y}__progress`,so=`${ve}__bar`,io=`${Y}__autoplay`,ro=`${Y}__play`,co=`${Y}__pause`,uo=`${Y}__spinner`,lo="is-initialized",It="is-active",Ae="is-prev",Te="is-next",In="is-visible",On="is-loading",ao=[It,In,Ae,Te,On],fo={slide:nn,clone:ge,arrows:Ee,arrow:Ln,prev:ye,next:Se,pagination:$e,page:oo,spinner:uo};function po(t,n,e){const{on:o}=z(t),{root:s}=t,u={},a=[];let c,i,_,r;function l(){A(),$(),lt(s,c=h())}function d(){o(U,y,an-2),o(X,m)}function f(){[s,_,r].forEach(E=>{ot(E,"style")}),$t(a),Vt(s,c)}function y(){f(),l()}function m(){Vt(s,c),lt(s,c=h())}function A(){i=at(s,`.${Je}`),_=ht(s,`.${to}`),r=at(_,`.${no}`),Mt(_&&r,"A track/list element is missing."),kt(a,Wn(r,`.${nn}:not(.${ge})`));const E=v(`.${io}`),T=v(`.${Ee}`);_n(u,{root:s,slider:i,track:_,list:r,slides:a,arrows:T,autoplay:E,prev:ht(T,`.${ye}`),next:ht(T,`.${Se}`),bar:ht(v(`.${ve}`),`.${so}`),play:ht(E,`.${ro}`),pause:ht(E,`.${co}`)})}function $(){const E=s.id||Xe(Y);s.id=E,_.id=_.id||`${E}-track`,r.id=r.id||`${E}-list`}function v(E){return at(s,E)||at(i,E)}function h(){return[`${tn}--${e.type}`,`${tn}--${e.direction}`,e.drag&&`${tn}--draggable`,e.isNavigation&&`${tn}--nav`,It]}return _n(u,{setup:l,mount:d,destroy:f})}const en="role",Ot="aria-controls",on="aria-current",wt="aria-label",Ne="aria-hidden",Wt="tabindex",_o="disabled",be="aria-orientation",sn=[en,Ot,on,wt,Ne,be,Wt,_o],Ct="slide",Ht="loop",rn="fade";function ho(t,n,e,o){const{on:s,emit:u,bind:a,destroy:c}=z(t),{Components:i,root:_,options:r}=t,{isNavigation:l,updateOnMove:d}=r,{resolve:f}=i.Direction,y=Jt(o,"style"),m=e>-1,A=at(o,`.${eo}`),$=r.focusableNodes&&hn(o,r.focusableNodes);let v;function h(){E(),a(o,"click keydown",L=>{u(L.type==="click"?Sn:ee,this,L)}),s([U,oe,Lt,Gt],D.bind(this)),d&&s(mt,O.bind(this))}function E(){if(m||(o.id=`${_.id}-slide${yn(n+1)}`),l){const L=m?e:n,M=Kn(r.i18n.slideX,L+1),g=t.splides.map(p=>p.root.id).join(" ");B(o,wt,M),B(o,Ot,g),B(o,en,"menuitem")}}function T(){v=!0,c(),Vt(o,ao),ot(o,sn),B(o,"style",y)}function O(L,M,g){v||(D.call(this),g===n&&P.call(this,!0))}function D(){if(!v){const{index:L}=t;P.call(this,C()),S.call(this,N()),At(o,Ae,n===L-1),At(o,Te,n===L+1)}}function P(L){L!==Hn(o,It)&&(At(o,It,L),l&&B(o,on,L||null),u(L?Qn:Jn,this))}function S(L){const M=!L&&!C();B(o,Ne,M||null),B(o,Wt,!M&&r.slideFocus?0:null),$&&$.forEach(g=>{B(g,Wt,M?-1:null)}),L!==Hn(o,In)&&(At(o,In,L),u(L?te:ne,this))}function b(L,M,g){Z(g&&A||o,L,M)}function C(){return t.index===n}function N(){if(t.is(rn))return C();const L=Q(i.Elements.track),M=Q(o),g=f("left"),p=f("right");return gn(L[g])<=Ut(M[g])&&gn(M[p])<=Ut(L[p])}function k(L,M){let g=J(L-n);return!t.is(Ct)&&!m&&(g=Bt(g,t.length-g)),g<=M}return{index:n,slideIndex:e,slide:o,container:A,isClone:m,mount:h,destroy:T,style:b,isWithin:k}}function mo(t,n,e){const{on:o,emit:s,bind:u}=z(t),{slides:a,list:c}=n.Elements,i=[];function _(){r(),o(U,d),o([nt,U],()=>{i.sort((S,b)=>S.index-b.index)})}function r(){a.forEach((S,b)=>{f(S,b,-1)})}function l(){h(S=>{S.destroy()}),$t(i)}function d(){l(),r()}function f(S,b,C){const N=ho(t,b,C,S);N.mount(),i.push(N)}function y(S){return S?E(b=>!b.isClone):i}function m(S){const{Controller:b}=n,C=b.toIndex(S),N=b.hasFocus()?1:e.perPage;return E(k=>zt(k.index,C,C+N-1))}function A(S){return E(S)[0]}function $(S,b){ut(S,C=>{if(ct(C)&&(C=Yn(C)),zn(C)){const N=a[b];N?pn(C,N):Zt(c,C),lt(C,e.classes.slide),O(C,s.bind(null,gt))}}),s(U)}function v(S){Nt(E(S).map(b=>b.slide)),s(U)}function h(S,b){y(b).forEach(S)}function E(S){return i.filter(ze(S)?S:b=>ct(S)?Gn(b.slide,S):xt(Dt(S),b.index))}function T(S,b,C){h(N=>{N.style(S,b,C)})}function O(S,b){const C=hn(S,"img");let{length:N}=C;N?C.forEach(k=>{u(k,"load error",()=>{--N||b()})}):b()}function D(S){return S?a.length:i.length}function P(){return i.length>e.perPage}return{mount:_,destroy:l,register:f,get:y,getIn:m,getAt:A,add:$,remove:v,forEach:h,filter:E,style:T,getLength:D,isEnough:P}}function go(t,n,e){const{on:o,bind:s,emit:u}=z(t),{Slides:a}=n,{resolve:c}=n.Direction,{track:i,list:_}=n.Elements,{getAt:r}=a;let l;function d(){f(),s(window,"resize load",he(u.bind(this,gt))),o([X,U],f),o(gt,y)}function f(){l=e.direction===bn,Z(t.root,"maxWidth",dt(e.width)),Z(i,c("paddingLeft"),A(!1)),Z(i,c("paddingRight"),A(!0)),y()}function y(){Z(i,"height",$()),a.style(c("marginRight"),dt(e.gap)),a.style("width",h()||null),m(),u($n)}function m(){a.style("height",E()||null,!0)}function A(N){const{padding:k}=e,L=c(N?"right":"left",!0);return k&&dt(k[L]||(Pt(k)?0:k))||"0px"}function $(){let N="";return l&&(N=v(),Mt(N,"height or heightRatio is missing."),N=`calc(${N} - ${A(!1)} - ${A(!0)})`),N}function v(){return dt(e.height||Q(_).width*e.heightRatio)}function h(){return e.autoWidth?"":dt(e.fixedWidth)||(l?"":T())}function E(){return dt(e.fixedHeight)||(l?e.autoHeight?"":T():v())}function T(){const N=dt(e.gap);return`calc((100%${N&&` + ${N}`})/${e.perPage||1}${N&&` - ${N}`})`}function O(){return Q(_)[c("width")]}function D(N,k){const L=r(N||0);return L?Q(L.slide)[c("width")]+(k?0:b()):0}function P(N,k){const L=r(N);if(L){const M=Q(L.slide)[c("right")],g=Q(_)[c("left")];return J(M-g)+(k?0:b())}return 0}function S(){return P(t.length-1,!0)-P(-1,!0)}function b(){const N=r(0);return N&&parseFloat(Z(N.slide,c("marginRight")))||0}function C(N){return parseFloat(Z(i,c(`padding${N?"Right":"Left"}`,!0)))||0}return{mount:d,listSize:O,slideSize:D,sliderSize:S,totalSize:P,getPadding:C}}function Eo(t,n,e){const{on:o,emit:s}=z(t),{Elements:u,Slides:a}=n,{resolve:c}=n.Direction,i=[];let _;function r(){l(),o(U,f),o([X,gt],y)}function l(){(_=$())&&(m(_),s(gt))}function d(){Nt(i),$t(i)}function f(){d(),l()}function y(){_<$()&&s(U)}function m(v){const h=a.get().slice(),{length:E}=h;if(E){for(;h.length<v;)kt(h,h);kt(h.slice(-v),h.slice(0,v)).forEach((T,O)=>{const D=O<v,P=A(T.slide,O);D?pn(P,h[0].slide):Zt(u.list,P),kt(i,P),a.register(P,O-v+(D?0:E),T.index)})}}function A(v,h){const E=v.cloneNode(!0);return lt(E,e.classes.clone),E.id=`${t.root.id}-clone${yn(h+1)}`,E}function $(){let{clones:v}=e;if(!t.is(Ht))v=0;else if(!v){const h=He(u.list,e[c("fixedWidth")]);v=(h&&Ut(Q(u.track)[c("width")]/h)||e[c("autoWidth")]&&t.length||e.perPage)*(e.drag?(e.flickMaxPages||1)+1:2)}return v}return{mount:r,destroy:d}}function yo(t,n,e){const{on:o,emit:s}=z(t),{slideSize:u,getPadding:a,totalSize:c,listSize:i,sliderSize:_}=n.Layout,{resolve:r,orient:l}=n.Direction,{list:d,track:f}=n.Elements;let y;function m(){o([nt,$n,X,U],$)}function A(){ot(d,"style")}function $(){n.Scroll.cancel(),h(t.index),s(oe)}function v(g,p,w,x){if(!L()){const{set:R}=t.state,G=b(),q=g!==p;y=q||e.waitForTransition,R(Fn),s(mt,p,w,g),n.Transition.start(g,()=>{q&&h(p),y=!1,R(ln),s(Lt,p,w,g),e.trimSpace==="move"&&g!==w&&G===b()?n.Controller.go(g>w?">":"<",!1,x):x&&x()})}}function h(g){E(S(g,!0))}function E(g,p){t.is(rn)||(d.style.transform=`translate${r("X")}(${p?g:T(g)}px)`)}function T(g){if(!y&&t.is(Ht)){const p=l(g-b()),w=M(!1,g)&&p<0,x=M(!0,g)&&p>0;(w||x)&&(g=O(g,x))}return g}function O(g,p){const w=g-k(p),x=_();return g-=En(w)*x*Ut(J(w)/x),g}function D(){y=!1,E(b()),n.Transition.cancel()}function P(g){const p=n.Slides.get();let w=0,x=1/0;for(let R=0;R<p.length;R++){const G=p[R].index,q=J(S(G,!0)-g);if(q<=x)x=q,w=G;else break}return w}function S(g,p){const w=l(c(g-1)-N(g));return p?C(w):w}function b(){const g=r("left");return Q(d)[g]-Q(f)[g]+l(a(!1))}function C(g){return e.trimSpace&&t.is(Ct)&&(g=bt(g,0,l(_()-i()))),g}function N(g){const{focus:p}=e;return p==="center"?(i()-u(g,!0))/2:+p*u(g)||0}function k(g){return S(g?n.Controller.getEnd():0,!!e.trimSpace)}function L(){return!!y}function M(g,p){p=fn(p)?b():p;const w=g!==!0&&l(p)<l(k(!1)),x=g!==!1&&l(p)>l(k(!0));return w||x}return{mount:m,destroy:A,move:v,jump:h,translate:E,shift:O,cancel:D,toIndex:P,toPosition:S,getPosition:b,getLimit:k,isBusy:L,exceededLimit:M}}function So(t,n,e){const{on:o}=z(t),{Move:s}=n,{getPosition:u,getLimit:a}=s,{isEnough:c,getLength:i}=n.Slides,_=t.is(Ht),r=t.is(Ct);let l=e.start||0,d=l,f,y,m;function A(){$(),o([X,U],$,an-1)}function $(){f=i(!0),y=e.perMove,m=e.perPage,l=bt(l,0,f-1)}function v(p,w,x){const R=E(p);if(e.useScroll)h(R,!0,!0,e.speed,x);else{const G=b(R);G>-1&&!s.isBusy()&&(w||G!==l)&&(L(G),s.move(R,G,d,x))}}function h(p,w,x,R,G){const q=w?p:k(p);n.Scroll.scroll(w||x?s.toPosition(q,!0):p,R,()=>{L(s.toIndex(s.getPosition())),G&&G()})}function E(p){let w=l;if(ct(p)){const[,x,R]=p.match(/([+\-<>])(\d+)?/)||[];x==="+"||x==="-"?w=P(l+ +`${x}${+R||1}`,l,!0):x===">"?w=R?C(+R):T(!0):x==="<"&&(w=O(!0))}else _?w=bt(p,-m,f+m-1):w=bt(p,0,S());return w}function T(p){return D(!1,p)}function O(p){return D(!0,p)}function D(p,w){const x=y||(g()?1:m),R=P(l+x*(p?-1:1),l);return R===-1&&r&&!Ye(u(),a(!p),1)?p?0:S():w?R:b(R)}function P(p,w,x){if(c()){const R=S();p<0||p>R?zt(0,p,w,!0)||zt(R,w,p,!0)?p=C(N(p)):_?p=y?p:p<0?-(f%m||m):f:e.rewind?p=p<0?R:0:p=-1:!_&&!x&&p!==w&&(p=y?p:C(N(w)+(p<w?-1:1)))}else p=-1;return p}function S(){let p=f-m;return(g()||_&&y)&&(p=f-1),Ft(p,0)}function b(p){return _?c()?p%f+(p<0?f:0):-1:p}function C(p){return bt(g()?p:m*p,0,S())}function N(p){return g()||(p=zt(p,f-m,f-1)?f-1:p,p=gn(p/m)),p}function k(p){const w=s.toIndex(p);return r?bt(w,0,S()):w}function L(p){p!==l&&(d=l,l=p)}function M(p){return p?d:l}function g(){return!fn(e.focus)||e.isNavigation}return{mount:A,go:v,scroll:h,getNext:T,getPrev:O,getEnd:S,setIndex:L,getIndex:M,toIndex:C,toPage:N,toDest:k,hasFocus:g}}const $o="http://www.w3.org/2000/svg",vo="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",cn=40;function Ao(t,n,e){const{on:o,bind:s,emit:u}=z(t),{classes:a,i18n:c}=e,{Elements:i,Controller:_}=n;let r=i.arrows,l=i.prev,d=i.next,f;const y={};function m(){A(),o(X,A)}function A(){if(e.arrows&&(!l||!d)&&h(),l&&d)if(y.prev)Qt(r,e.arrows===!1?"none":"");else{const{id:O}=i.track;B(l,Ot,O),B(d,Ot,O),y.prev=l,y.next=d,v(),u(ce,l,d)}}function $(){f?Nt(r):(ot(l,sn),ot(d,sn))}function v(){const{go:O}=_;o([nt,Lt,X,U,Gt],T),s(d,"click",()=>{O(">",!0)}),s(l,"click",()=>{O("<",!0)})}function h(){r=Tt("div",a.arrows),l=E(!0),d=E(!1),f=!0,Zt(r,[l,d]),pn(r,at(e.arrows==="slider"&&i.slider||t.root))}function E(O){const D=`<button class="${a.arrow} ${O?a.prev:a.next}" type="button"><svg xmlns="${$o}" viewBox="0 0 ${cn} ${cn}" width="${cn}" height="${cn}"><path d="${e.arrowPath||vo}" />`;return Yn(D)}function T(){const O=t.index,D=_.getPrev(),P=_.getNext(),S=D>-1&&O<D?c.last:c.prev,b=P>-1&&O>P?c.first:c.next;l.disabled=D<0,d.disabled=P<0,B(l,wt,S),B(d,wt,b),u(ue,l,d,D,P)}return{arrows:y,mount:m,destroy:$}}function To(t,n,e){const{on:o,bind:s,emit:u}=z(t),{Elements:a}=n,c=Nn(e.interval,t.go.bind(t,">"),v),{isPaused:i}=c;let _,r,l;function d(){const{autoplay:h}=e;h&&(f(!0),f(!1),y(),h!=="pause"&&m())}function f(h){const E=h?"pause":"play",T=a[E];T&&(B(T,Ot,a.track.id),B(T,wt,e.i18n[E]),s(T,"click",h?A:m))}function y(){const{root:h}=a;e.pauseOnHover&&s(h,"mouseenter mouseleave",E=>{_=E.type==="mouseenter",$()}),e.pauseOnFocus&&s(h,"focusin focusout",E=>{r=E.type==="focusin",$()}),o([mt,vn,U],c.rewind)}function m(){i()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),r=_=l=!1,u(de))}function A(h=!0){i()||(c.pause(),u(_e)),l=h}function $(){l||(!_&&!r?m():A(!1))}function v(h){const{bar:E}=a;E&&Z(E,"width",`${h*100}%`),u(pe,h)}return{mount:d,destroy:c.cancel,play:m,pause:A,isPaused:i}}function No(t,n,e){const{on:o}=z(t);function s(){e.cover&&(o(Tn,(i,_)=>{c(!0,i,_)}),o([nt,X,U],a.bind(null,!0)))}function u(){a(!1)}function a(i){n.Slides.forEach(_=>{const r=at(_.container||_.slide,"img");r&&r.src&&c(i,r,_)})}function c(i,_,r){r.style("background",i?`center/cover no-repeat url("${_.src}")`:"",!0),Qt(_,i?"none":"")}return{mount:s,destroy:u}}const bo=10,Lo=600,Io=.6,Oo=1.5,wo=800;function Co(t,n,e){const{on:o,emit:s}=z(t),{Move:u}=n,{getPosition:a,getLimit:c,exceededLimit:i}=u;let _,r;function l(){o(mt,A),o([X,U],$)}function d(h,E,T,O){const D=a();let P=1;E=E||m(J(h-D)),r=T,A(),_=Nn(E,y,S=>{const b=a(),N=(D+(h-D)*v(S)-a())*P;u.translate(b+N),t.is(Ct)&&!O&&i()&&(P*=Io,J(N)<bo&&f(i(!1)))},1),s(vn),_.start()}function f(h){d(c(!h),Lo,null,!0)}function y(){const h=a(),E=u.toIndex(h);zt(E,0,t.length-1)||u.translate(u.shift(h,E>0),!0),r&&r(),s(Gt)}function m(h){return Ft(h/Oo,wo)}function A(){_&&_.cancel()}function $(){_&&!_.isPaused()&&(A(),y())}function v(h){const{easingFunc:E}=e;return E?E(h):1-Math.pow(1-h,4)}return{mount:l,destroy:A,scroll:d,cancel:$}}const Ro=5,Le=200,Po="touchstart mousedown",wn="touchmove mousemove",Cn="touchend touchcancel mouseup";function Do(t,n,e){const{on:o,emit:s,bind:u,unbind:a}=z(t),{Move:c,Scroll:i,Controller:_}=n,{track:r}=n.Elements,{resolve:l,orient:d}=n.Direction,{getPosition:f,exceededLimit:y}=c,m={passive:!1,capture:!0};let A,$,v,h,E,T,O=!1,D,P,S;function b(){u(r,wn,mn,m),u(r,Cn,mn,m),u(r,Po,N,m),u(r,"click",g,{capture:!0}),u(r,"dragstart",ft),o([nt,X],C)}function C(){const{drag:I}=e;Dn(!I),E=I==="free"}function N(I){if(!P){const W=G(I);(W||!I.button)&&(c.isBusy()?ft(I,!0):(S=W?r:window,v=null,h=null,D=!1,u(S,wn,k,m),u(S,Cn,L,m),c.cancel(),i.cancel(),M(I)))}}function k(I){if(h||s(se),h=I,I.cancelable)if(T){const W=q(I)-q($)>Le,K=O!==(O=y());(W||K)&&M(I),c.translate(A+Re(R(I)-R($))),s(ie),D=!0,ft(I)}else{const W=J(R(I)-R($));let{dragMinThreshold:K}=e;K=Pt(K)?K:{mouse:0,touch:+K||10},T=W>(G(I)?K.touch:K.mouse),p()&&ft(I)}}function L(I){if(a(S,wn,k),a(S,Cn,L),h){if(T||I.cancelable&&p()){const W=w(I),K=x(W);E?_.scroll(K):t.is(rn)?_.go(t.index+d(En(W))):_.go(_.toDest(K),!0),ft(I)}s(re)}T=!1}function M(I){v=$,$=I,A=f()}function g(I){!P&&D&&ft(I,!0)}function p(){const I=J(R(h)-R($)),W=J(R(h,!0)-R($,!0));return I>W}function w(I){if(t.is(Ht)||!O){const W=$===h&&v||$,K=R(h)-R(W),xn=q(I)-q(W),Pe=q(I)-q(h)<Le;if(xn&&Pe)return K/xn}return 0}function x(I){return f()+En(I)*Bt(J(I)*(e.flickPower||600),E?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}function R(I,W){return(G(I)?I.touches[0]:I)[`page${l(W?"Y":"X")}`]}function G(I){return typeof TouchEvent!="undefined"&&I instanceof TouchEvent}function q(I){return I.timeStamp}function Re(I){return I/(O&&t.is(Ct)?Ro:1)}function Dn(I){P=I}return{mount:b,disable:Dn}}const xo=["Left","Right","Up","Down"];function ko(t,n,e){const{on:o,bind:s,unbind:u}=z(t),{root:a}=n.Elements,{resolve:c}=n.Direction;let i;function _(){r(),o(X,()=>{l(),r()})}function r(){const{keyboard:f="global"}=e;f&&(f==="focused"?(i=a,B(a,Wt,0)):i=window,s(i,"keydown",d))}function l(){u(i,"keydown"),zn(i)&&ot(i,Wt)}function d(f){const{key:y}=f,m=xt(xo,y)?`Arrow${y}`:y;m===c("ArrowLeft")?t.go("<"):m===c("ArrowRight")&&t.go(">")}return{mount:_,destroy:l}}const un=`${Bn}-lazy`,Rn=`${un}-srcset`,Vo=`[${un}], [${Rn}]`;function Mo(t,n,e){const{on:o,off:s,bind:u,emit:a}=z(t),c=e.lazyLoad==="sequential";let i=[],_=0;function r(){e.lazyLoad&&(o([nt,U],()=>{d(),l()}),c||o([nt,U,Lt],f))}function l(){n.Slides.forEach($=>{hn($.slide,Vo).forEach(v=>{const h=Jt(v,un),E=Jt(v,Rn);if(h!==v.src||E!==v.srcset){const T=Tt("span",e.classes.spinner,v.parentElement);B(T,en,"presentation"),i.push({_img:v,_Slide:$,src:h,srcset:E,_spinner:T}),Qt(v,"none")}})}),c&&A()}function d(){_=0,i=[]}function f(){i=i.filter($=>$._Slide.isWithin(t.index,e.perPage*((e.preloadPages||1)+1))?y($):!0),i.length||s(Lt)}function y($){const{_img:v}=$;lt($._Slide.slide,On),u(v,"load error",h=>{m($,h.type==="error")}),["src","srcset"].forEach(h=>{$[h]&&(B(v,h,$[h]),ot(v,h==="src"?un:Rn))})}function m($,v){const{_Slide:h}=$;Vt(h.slide,On),v||(Nt($._spinner),Qt($._img,""),a(Tn,$._img,h),a(gt)),c&&A()}function A(){_<i.length&&y(i[_++])}return{mount:r,destroy:d}}function Bo(t,n,e){const{on:o,emit:s,bind:u,unbind:a}=z(t),{Slides:c,Elements:i,Controller:_}=n,{hasFocus:r,getIndex:l}=_,d=[];let f;function y(){m(),o([X,U],m),o([mt,Gt],E)}function m(){A(),e.pagination&&c.isEnough()&&($(),s(le,{list:f,items:d},h(t.index)),E())}function A(){f&&(Nt(f),d.forEach(T=>{a(T.button,"click")}),$t(d),f=null)}function $(){const{length:T}=t,{classes:O,i18n:D,perPage:P}=e,S=e.pagination==="slider"&&i.slider||i.root,b=r()?T:Ut(T/P);f=Tt("ul",O.pagination,S);for(let C=0;C<b;C++){const N=Tt("li",null,f),k=Tt("button",{class:O.page,type:"button"},N),L=c.getIn(C).map(g=>g.slide.id),M=!r()&&P>1?D.pageX:D.slideX;u(k,"click",v.bind(null,C)),B(k,Ot,L.join(" ")),B(k,wt,Kn(M,C+1)),d.push({li:N,button:k,page:C})}}function v(T){_.go(`>${T}`,!0,()=>{const O=c.getAt(_.toIndex(T));O&&O.slide.focus()})}function h(T){return d[_.toPage(T)]}function E(){const T=h(l(!0)),O=h(l());T&&(Vt(T.button,It),ot(T.button,on)),O&&(lt(O.button,It),B(O.button,on,!0)),s(ae,{list:f,items:d},T,O)}return{items:d,mount:y,destroy:A,getAt:h}}const Fo=[" ","Enter","Spacebar"];function Uo(t,n,e){const{splides:o}=t,{list:s}=n.Elements;function u(){e.isNavigation?i():c()}function a(){ot(s,sn)}function c(){const d=[];o.concat(t).forEach((f,y,m)=>{z(f).on(mt,(A,$,v)=>{m.forEach(h=>{h!==f&&!xt(d,f)&&(d.push(h),h.go(h.is(Ht)?v:A))}),$t(d)})})}function i(){const{on:d,emit:f}=z(t);d(Sn,r),d(ee,l),d([nt,X],_),B(s,en,"menu"),f(fe,t.splides)}function _(){B(s,be,e.direction!==bn?"horizontal":null)}function r(d){t.go(d.index)}function l(d,f){xt(Fo,f.key)&&(r(d),ft(f))}return{mount:u,destroy:a}}function zo(t,n,e){const{bind:o}=z(t);function s(){e.wheel&&o(n.Elements.track,"wheel",u,{passive:!1,capture:!0})}function u(a){const{deltaY:c}=a;c&&(t.go(c<0?"<":">"),ft(a))}return{mount:s}}var Go=Object.freeze({__proto__:null,Options:je,Direction:Qe,Elements:po,Slides:mo,Layout:go,Clones:Eo,Move:yo,Controller:So,Arrows:Ao,Autoplay:To,Cover:No,Scroll:Co,Drag:Do,Keyboard:ko,LazyLoad:Mo,Pagination:Bo,Sync:Uo,Wheel:zo});const Wo={prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay"},Ie={type:"slide",speed:400,waitForTransition:!0,perPage:1,arrows:!0,pagination:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",slideFocus:!0,trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",classes:fo,i18n:Wo};function Ho(t,n,e){const{on:o}=z(t);function s(){o([nt,U],()=>{Xn(()=>{n.Slides.style("transition",`opacity ${e.speed}ms ${e.easing}`)})})}function u(a,c){const{track:i}=n.Elements;Z(i,"height",dt(Q(i).height)),Xn(()=>{c(),Z(i,"height","")})}return{mount:s,start:u,cancel:mn}}function Yo(t,n,e){const{bind:o}=z(t),{Move:s,Controller:u}=n,{list:a}=n.Elements;let c;function i(){o(a,"transitionend",f=>{f.target===a&&c&&(r(),c())})}function _(f,y){const m=s.toPosition(f,!0),A=s.getPosition(),$=l(f);J(m-A)>=1&&$>=1?(d(`transform ${$}ms ${e.easing}`),s.translate(m,!0),c=y):(s.jump(f),y())}function r(){d("")}function l(f){const{rewindSpeed:y}=e;if(t.is(Ct)&&y){const m=u.getIndex(!0),A=u.getEnd();if(m===0&&f>=A||m>=A&&f===0)return y}return e.speed}function d(f){Z(a,"transition",f)}return{mount:i,start:_,cancel:r}}const Oe=class{constructor(t,n){this.event=qe(),this.Components={},this.state=Ke(St),this.splides=[],this._options={},this._Extensions={};const e=ct(t)?ht(document,t):t;Mt(e,`${e} is invalid.`),this.root=e,_t(Ie,Oe.defaults),_t(_t(this._options,Ie),n||{})}mount(t,n){const{state:e,Components:o}=this;Mt(e.is([St,jt]),"Already mounted!"),e.set(St),this._Components=o,this._Transition=n||this._Transition||(this.is(rn)?Ho:Yo),this._Extensions=t||this._Extensions;const s=_n({},Go,this._Extensions,{Transition:this._Transition});return pt(s,(u,a)=>{const c=u(this,o,this._options);o[a]=c,c.setup&&c.setup()}),pt(o,u=>{u.mount&&u.mount()}),this.emit(nt),lt(this.root,lo),e.set(ln),this.emit(Zn),this}sync(t){return this.splides.push(t),t.splides.push(this),this}go(t){return this._Components.Controller.go(t),this}on(t,n){return this.event.on(t,n,null,Ue),this}off(t){return this.event.off(t),this}emit(t){return this.event.emit(t,...vt(arguments,1)),this}add(t,n){return this._Components.Slides.add(t,n),this}remove(t){return this._Components.Slides.remove(t),this}is(t){return this._options.type===t}refresh(){return this.emit(U),this}destroy(t=!0){const{event:n,state:e}=this;return e.is(St)?n.on(Zn,this.destroy.bind(this,t),this):(pt(this._Components,o=>{o.destroy&&o.destroy(t)}),n.emit(An),n.destroy(),t&&$t(this.splides),e.set(jt)),this}get options(){return this._options}set options(t){const{_options:n}=this;_t(n,t),this.state.is(St)||this.emit(X,n)}get length(){return this._Components.Slides.getLength(!0)}get index(){return this._Components.Controller.getIndex()}};let Pn=Oe;Pn.defaults={};Pn.STATES=Fe;const we=[Qn,ce,ue,_e,de,pe,Sn,An,se,re,ie,ne,Jn,Tn,nt,mt,Lt,fe,le,ae,U,gt,$n,vn,Gt,X,te];var Ce=(t,n)=>{for(const[e,o]of n)t[e]=o;return t};const Xo=it({name:"Splide",emits:we.map(t=>`splide:${t}`),props:{options:Object,extensions:Object,transition:Function,hasSliderWrapper:Boolean},setup(t,n){const e=Rt(),o=Rt();kn(()=>{o.value&&(e.value=new Pn(o.value,t.options),i(e.value),e.value.mount(t.extensions,t.transition))}),De(()=>{var r;(r=e.value)==null||r.destroy()}),xe(()=>{var r;(r=e.value)==null||r.refresh()});const s=Vn(()=>{var r;return((r=e.value)==null?void 0:r.index)||0}),u=Vn(()=>{var r;return((r=e.value)==null?void 0:r.length)||0});function a(r){var l;(l=e.value)==null||l.go(r)}function c(r){const{value:l}=e;l&&(l.sync(r),_(l),_(r))}function i(r){we.forEach(l=>{r.on(l,(...d)=>{n.emit(`splide:${l}`,r,...d)})})}function _(r){r.destroy(!1),r.mount()}return{splide:e,root:o,index:s,length:u,go:a,sync:c}}}),qo={class:"splide",ref:"root"},Ko={key:1,class:"splide__slider"},jo={class:"splide__track"},Zo={class:"splide__list"},Qo={class:"splide__track"},Jo={class:"splide__list"};function ts(t,n,e,o,s,u){return F(),H("div",qo,[t.hasSliderWrapper?st(t.$slots,"before-slider",{key:0}):Mn("",!0),t.hasSliderWrapper?(F(),H("div",Ko,[st(t.$slots,"before-track"),V("div",jo,[V("ul",Zo,[st(t.$slots,"default")])]),st(t.$slots,"after-track")])):(F(),H(rt,{key:2},[st(t.$slots,"before-track"),V("div",Qo,[V("ul",Jo,[st(t.$slots,"default")])]),st(t.$slots,"after-track")],64)),t.hasSliderWrapper?st(t.$slots,"after-slider",{key:3}):Mn("",!0)],512)}var Yt=Ce(Xo,[["render",ts]]);const ns=it({name:"SplideSlide"}),es={class:"splide__slide"};function os(t,n,e,o,s,u){return F(),H("li",es,[st(t.$slots,"default")])}var Xt=Ce(ns,[["render",os]]);function qt(t=10,n=0){return Array.from({length:t}).map((e,o)=>(o=n||o,{src:`https://source.unsplash.com/random/800x450?sig=${o}`,alt:`Image ${o}`}))}var Kt=(t,n)=>{for(const[e,o]of n)t[e]=o;return t};const ss=it({name:"AutoplayExample",components:{Splide:Yt,SplideSlide:Xt},setup(){return{slides:qt(),options:{rewind:!0,gap:"1rem",autoplay:!0,pauseOnHover:!1,arrows:"slider",height:"15rem"}}}}),is={class:"wrapper"},rs=V("h2",null,"Autoplay",-1),cs=["src","alt"],us=V("div",{class:"splide__progress"},[V("div",{class:"splide__progress__bar"})],-1),ls=V("div",{class:"splide__autoplay"},[V("button",{class:"splide__play"},"Play"),V("button",{class:"splide__pause"},"Pause")],-1);function as(t,n,e,o,s,u){const a=et("SplideSlide"),c=et("Splide");return F(),H("div",is,[rs,tt(c,{options:t.options,"has-slider-wrapper":""},{"after-slider":j(()=>[us,ls]),default:j(()=>[(F(!0),H(rt,null,Et(t.slides,i=>(F(),yt(a,{key:i.alt},{default:j(()=>[V("img",{src:i.src,alt:i.alt},null,8,cs)]),_:2},1024))),128))]),_:1},8,["options"])])}var fs=Kt(ss,[["render",as]]);const ds=it({name:"BasicExample",components:{Splide:Yt,SplideSlide:Xt},setup(){return{slides:qt(),options:{rewind:!0,perPage:2,gap:"1rem",height:"15rem",breakpoints:{1e3:{perPage:1}}},onSplideMounted:s=>console.log(s.length),onSplideMove:(s,u)=>console.log("move to",u)}}}),ps={class:"wrapper"},_s=V("h2",null,"Basic",-1),hs=["src","alt"];function ms(t,n,e,o,s,u){const a=et("SplideSlide"),c=et("Splide");return F(),H("div",ps,[_s,tt(c,{options:t.options,"onSplide:mounted":t.onSplideMounted,"onSplide:move":t.onSplideMove,ref:"splide"},{default:j(()=>[(F(!0),H(rt,null,Et(t.slides,i=>(F(),yt(a,{key:i.alt},{default:j(()=>[V("img",{src:i.src,alt:i.alt},null,8,hs)]),_:2},1024))),128))]),_:1},8,["options","onSplide:mounted","onSplide:move"])])}var gs=Kt(ds,[["render",ms]]);const Es=it({name:"DynamicSlidesExample",components:{Splide:Yt,SplideSlide:Xt},setup(){const t=Rt(qt(1)),n={rewind:!0,perPage:3,gap:"1rem",height:"15rem"};function e(){t.value.push(...qt(1,t.value.length))}function o(){--t.value.length}return{slides:t,options:n,add:e,remove:o}}}),ys={class:"wrapper"},Ss=V("h2",null,"Dynamic Slides",-1),$s=["src","alt"],vs={class:"controls"};function As(t,n,e,o,s,u){const a=et("SplideSlide"),c=et("Splide");return F(),H("div",ys,[Ss,tt(c,{options:t.options,class:"splide--dynamic"},{default:j(()=>[(F(!0),H(rt,null,Et(t.slides,i=>(F(),yt(a,{key:i.alt},{default:j(()=>[V("img",{src:i.src,alt:i.alt},null,8,$s)]),_:2},1024))),128))]),_:1},8,["options"]),V("div",vs,[V("button",{onClick:n[0]||(n[0]=(...i)=>t.add&&t.add(...i))},"Add"),V("button",{onClick:n[1]||(n[1]=(...i)=>t.remove&&t.remove(...i))},"Remove")])])}var Ts=Kt(Es,[["render",As]]);const Ns=it({name:"ThumbnailsExample",components:{Splide:Yt,SplideSlide:Xt},setup(){const t=Rt(),n=Rt(),e=qt(),o={type:"loop",perPage:2,perMove:1,gap:"1rem",pagination:!1},s={type:"slide",rewind:!0,gap:"1rem",pagination:!1,fixedWidth:110,fixedHeight:70,cover:!0,focus:"center",isNavigation:!0,updateOnMove:!0};return kn(()=>{var a,c;const u=(a=n.value)==null?void 0:a.splide;u&&((c=t.value)==null||c.sync(u))}),{slides:e,main:t,thumbs:n,mainOptions:o,thumbsOptions:s}}}),bs={class:"wrapper"},Ls=V("h2",null,"Thumbnails",-1),Is=["src","alt"],Os=["src","alt"];function ws(t,n,e,o,s,u){const a=et("SplideSlide"),c=et("Splide");return F(),H("div",bs,[Ls,tt(c,{options:t.mainOptions,ref:"main"},{default:j(()=>[(F(!0),H(rt,null,Et(t.slides,i=>(F(),yt(a,{key:i.alt},{default:j(()=>[V("img",{src:i.src,alt:i.alt},null,8,Is)]),_:2},1024))),128))]),_:1},8,["options"]),tt(c,{options:t.thumbsOptions,ref:"thumbs"},{default:j(()=>[(F(!0),H(rt,null,Et(t.slides,i=>(F(),yt(a,{key:i.alt},{default:j(()=>[V("img",{src:i.src,alt:i.alt},null,8,Os)]),_:2},1024))),128))]),_:1},8,["options"])])}var Cs=Kt(Ns,[["render",ws]]);const Rs=it({name:"VideoExample",components:{Splide:Yt,SplideSlide:Xt},setup(){return{videos:["3GNQL3alB-Y","xLJ2QQDrN9k","cdz__ojQOuU","oS6N_ZBFDZE"],options:{rewind:!0,heightRatio:.5625},extensions:{Video:ke}}}}),Ps={class:"wrapper"},Ds=V("h2",null,"Video",-1),xs=["src","alt"];function ks(t,n,e,o,s,u){const a=et("SplideSlide"),c=et("Splide");return F(),H("div",Ps,[Ds,tt(c,{options:t.options,extensions:t.extensions},{default:j(()=>[(F(!0),H(rt,null,Et(t.videos,(i,_)=>(F(),yt(a,{key:i,"data-splide-youtube":i},{default:j(()=>[V("img",{src:`https://i3.ytimg.com/vi/${i}/maxresdefault.jpg`,alt:`YouTube Sample ${_+1}`},null,8,xs)]),_:2},1032,["data-splide-youtube"]))),128))]),_:1},8,["options","extensions"])])}var Vs=Kt(Rs,[["render",ks]]);const Ms=V("hr",null,null,-1),Bs=V("hr",null,null,-1),Fs=V("hr",null,null,-1),Us=V("hr",null,null,-1),zs=it({setup(t){return(n,e)=>(F(),H(rt,null,[tt(gs),Ms,tt(fs),Bs,tt(Cs),Fs,tt(Ts),Us,tt(Vs)],64))}}),Gs=Ve(zs);Gs.mount("#app");