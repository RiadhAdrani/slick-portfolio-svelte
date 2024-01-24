import{f as be,e as xe,g as W,c as ie}from"../chunks/params.b95c40e5.js";import{s as ke,a as P,f as w,c as y,g as E,h as I,d as $,j as C,i as T,K as _,I as $e,n as de,l as A,m as R,p as F,M as ce}from"../chunks/scheduler.7a274a43.js";import{S as we,i as Ee,b as S,d as M,m as N,t as k,c as Z,a as x,e as j,g as ee}from"../chunks/index.28409b7f.js";import{U as re,e as Q}from"../chunks/UIcon.9faa29d6.js";import{C as Ce}from"../chunks/CardLogo.ffd18bf4.js";import{M as Ie}from"../chunks/MainTitle.d8ef5e17.js";import{b as fe}from"../chunks/paths.c824b0f6.js";import{B as De,M as Ve}from"../chunks/Banner.5f130f9b.js";import{T as Pe}from"../chunks/TabTitle.b45e8917.js";import{C as he}from"../chunks/Chip.2102c370.js";import{C as ye}from"../chunks/CardDivider.09b854d8.js";function Te({params:i}){if(i.slug)return{experience:be.find(l=>l.slug===i.slug)}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function ue(i,e,l){const t=i.slice();return t[3]=e[l],t}function pe(i,e,l){const t=i.slice();return t[3]=e[l],t}function Se(i){let e,l,t,n,r,f,a,s;l=new De({props:{img:W(i[0].experience.logo),$$slots:{default:[Ae]},$$scope:{ctx:i}}});const m=[Ue,Re],o=[];function b(d,v){return d[0].experience.description?0:1}return f=b(i),a=o[f]=m[f](i),{c(){e=w("div"),S(l.$$.fragment),t=P(),n=w("div"),r=w("div"),a.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=I(e);M(l.$$.fragment,v),t=y(v),n=E(v,"DIV",{class:!0});var B=I(n);r=E(B,"DIV",{class:!0});var V=I(r);a.l(V),V.forEach($),B.forEach($),v.forEach($),this.h()},h(){C(r,"class","px-10px m-y-5"),C(n,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){T(d,e,v),N(l,e,null),_(e,t),_(e,n),_(n,r),o[f].m(r,null),s=!0},p(d,v){const B={};v&1&&(B.img=W(d[0].experience.logo)),v&257&&(B.$$scope={dirty:v,ctx:d}),l.$set(B);let V=f;f=b(d),f===V?o[f].p(d,v):(ee(),k(o[V],1,1,()=>{o[V]=null}),Z(),a=o[f],a?a.p(d,v):(a=o[f]=m[f](d),a.c()),x(a,1),a.m(r,null))},i(d){s||(x(l.$$.fragment,d),x(a),s=!0)},o(d){k(l.$$.fragment,d),k(a),s=!1},d(d){d&&$(e),j(l),o[f].d()}}}function Me(i){let e,l,t,n,r="Could not load experience data...",f;return l=new re({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=P(),n=w("p"),n.textContent=r,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=I(e);M(l.$$.fragment,s),t=y(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),$e(n)!=="svelte-1o82fhi"&&(n.textContent=r),s.forEach($),this.h()},h(){C(n,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){T(a,e,s),N(l,e,null),_(e,t),_(e,n),f=!0},p:de,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&$(e),j(l)}}}function Ne(i){let e=i[0].experience.name+"",l;return{c(){l=A(e)},l(t){l=R(t,e)},m(t,n){T(t,l,n)},p(t,n){n&1&&e!==(e=t[0].experience.name+"")&&F(l,e)},d(t){t&&$(l)}}}function je(i){let e,l,t,n,r=i[3].label+"",f,a,s;return l=new re({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(l.$$.fragment),t=P(),n=w("span"),f=A(r),a=P(),this.h()},l(m){e=E(m,"DIV",{class:!0});var o=I(e);M(l.$$.fragment,o),t=y(o),n=E(o,"SPAN",{});var b=I(n);f=R(b,r),b.forEach($),o.forEach($),a=y(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,o){T(m,e,o),N(l,e,null),_(e,t),_(e,n),_(n,f),T(m,a,o),s=!0},p(m,o){(!s||o&1)&&r!==(r=m[3].label+"")&&F(f,r)},i(m){s||(x(l.$$.fragment,m),s=!0)},o(m){k(l.$$.fragment,m),s=!1},d(m){m&&($(e),$(a)),j(l)}}}function me(i){let e,l;return e=new he({props:{href:i[3].to,$$slots:{default:[je]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=t[3].to),n&257&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Be(i){let e,l,t,n=i[3].name+"",r,f,a;return e=new Ce({props:{src:W(i[3].logo),alt:i[3].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),l=P(),t=w("span"),r=A(n),f=P(),this.h()},l(s){M(e.$$.fragment,s),l=y(s),t=E(s,"SPAN",{class:!0});var m=I(t);r=R(m,n),m.forEach($),f=y(s),this.h()},h(){C(t,"class","text-[0.9em]")},m(s,m){N(e,s,m),T(s,l,m),T(s,t,m),_(t,r),T(s,f,m),a=!0},p(s,m){const o={};m&1&&(o.src=W(s[3].logo)),m&1&&(o.alt=s[3].name),e.$set(o),(!a||m&1)&&n!==(n=s[3].name+"")&&F(r,n)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){k(e.$$.fragment,s),a=!1},d(s){s&&($(l),$(t),$(f)),j(e,s)}}}function _e(i){let e,l;return e=new he({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${i[3].slug}`,$$slots:{default:[Be]},$$scope:{ctx:i}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=`${fe}/skills/${t[3].slug}`),n&257&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function Ae(i){let e,l,t,n,r,f=i[0].experience.company+"",a,s,m=i[0].experience.location+"",o,b,d=i[0].experience.type+"",v,B,V,H=ie(i[0].experience.period.from,i[0].experience.period.to)+"",J,te,G,L,le,O,ne,X,U;t=new Ie({props:{$$slots:{default:[Ne]},$$scope:{ctx:i}}}),L=new ye({});let q=Q(i[0].experience.links),h=[];for(let c=0;c<q.length;c+=1)h[c]=me(pe(i,q,c));const ge=c=>k(h[c],1,1,()=>{h[c]=null});let K=Q(i[0].experience.skills),g=[];for(let c=0;c<K.length;c+=1)g[c]=_e(ue(i,K,c));const ve=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),S(t.$$.fragment),n=P(),r=w("p"),a=A(f),s=A(" · "),o=A(m),b=A(" · "),v=A(d),B=P(),V=w("p"),J=A(H),te=P(),G=w("div"),S(L.$$.fragment),le=P(),O=w("div");for(let c=0;c<h.length;c+=1)h[c].c();ne=P(),X=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=I(e);l=E(u,"DIV",{class:!0});var D=I(l);M(t.$$.fragment,D),D.forEach($),n=y(u),r=E(u,"P",{class:!0});var p=I(r);a=R(p,f),s=R(p," · "),o=R(p,m),b=R(p," · "),v=R(p,d),p.forEach($),B=y(u),V=E(u,"P",{class:!0});var z=I(V);J=R(z,H),z.forEach($),te=y(u),G=E(u,"DIV",{class:!0});var se=I(G);M(L.$$.fragment,se),se.forEach($),le=y(u),O=E(u,"DIV",{class:!0});var ae=I(O);for(let Y=0;Y<h.length;Y+=1)h[Y].l(ae);ae.forEach($),ne=y(u),X=E(u,"DIV",{class:!0});var oe=I(X);for(let Y=0;Y<g.length;Y+=1)g[Y].l(oe);oe.forEach($),u.forEach($),this.h()},h(){C(l,"class","text-0.9em"),C(r,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(G,"class","w-75%"),C(O,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(X,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){T(c,e,u),_(e,l),N(t,l,null),_(e,n),_(e,r),_(r,a),_(r,s),_(r,o),_(r,b),_(r,v),_(e,B),_(e,V),_(V,J),_(e,te),_(e,G),N(L,G,null),_(e,le),_(e,O);for(let D=0;D<h.length;D+=1)h[D]&&h[D].m(O,null);_(e,ne),_(e,X);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(X,null);U=!0},p(c,u){const D={};if(u&257&&(D.$$scope={dirty:u,ctx:c}),t.$set(D),(!U||u&1)&&f!==(f=c[0].experience.company+"")&&F(a,f),(!U||u&1)&&m!==(m=c[0].experience.location+"")&&F(o,m),(!U||u&1)&&d!==(d=c[0].experience.type+"")&&F(v,d),(!U||u&1)&&H!==(H=ie(c[0].experience.period.from,c[0].experience.period.to)+"")&&F(J,H),u&1){q=Q(c[0].experience.links);let p;for(p=0;p<q.length;p+=1){const z=pe(c,q,p);h[p]?(h[p].p(z,u),x(h[p],1)):(h[p]=me(z),h[p].c(),x(h[p],1),h[p].m(O,null))}for(ee(),p=q.length;p<h.length;p+=1)ge(p);Z()}if(u&1){K=Q(c[0].experience.skills);let p;for(p=0;p<K.length;p+=1){const z=ue(c,K,p);g[p]?(g[p].p(z,u),x(g[p],1)):(g[p]=_e(z),g[p].c(),x(g[p],1),g[p].m(X,null))}for(ee(),p=K.length;p<g.length;p+=1)ve(p);Z()}},i(c){if(!U){x(t.$$.fragment,c),x(L.$$.fragment,c);for(let u=0;u<q.length;u+=1)x(h[u]);for(let u=0;u<K.length;u+=1)x(g[u]);U=!0}},o(c){k(t.$$.fragment,c),k(L.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);U=!1},d(c){c&&$(e),j(t),j(L),ce(h,c),ce(g,c)}}}function Re(i){let e,l,t,n,r="No description...",f;return l=new re({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=P(),n=w("p"),n.textContent=r,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=I(e);M(l.$$.fragment,s),t=y(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),$e(n)!=="svelte-kl0ixf"&&(n.textContent=r),s.forEach($),this.h()},h(){C(n,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){T(a,e,s),N(l,e,null),_(e,t),_(e,n),f=!0},p:de,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&$(e),j(l)}}}function Ue(i){let e,l;return e=new Ve({props:{content:i[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){N(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}function ze(i){let e,l,t,n,r,f;e=new Pe({props:{title:i[1]}});const a=[Me,Se],s=[];function m(o,b){return o[0].experience===void 0?0:1}return n=m(i),r=s[n]=a[n](i),{c(){S(e.$$.fragment),l=P(),t=w("div"),r.c(),this.h()},l(o){M(e.$$.fragment,o),l=y(o),t=E(o,"DIV",{class:!0});var b=I(t);r.l(b),b.forEach($),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(o,b){N(e,o,b),T(o,l,b),T(o,t,b),s[n].m(t,null),f=!0},p(o,[b]){const d={};b&2&&(d.title=o[1]),e.$set(d);let v=n;n=m(o),n===v?s[n].p(o,b):(ee(),k(s[v],1,1,()=>{s[v]=null}),Z(),r=s[n],r?r.p(o,b):(r=s[n]=a[n](o),r.c()),x(r,1),r.m(t,null))},i(o){f||(x(e.$$.fragment,o),x(r),f=!0)},o(o){k(e.$$.fragment,o),k(r),f=!1},d(o){o&&($(l),$(t)),j(e,o),s[n].d()}}}function Le(i,e,l){let t,{data:n}=e;const{title:r}=xe;return i.$$set=f=>{"data"in f&&l(0,n=f.data)},i.$$.update=()=>{i.$$.dirty&1&&l(1,t=n.experience?`${n.experience.name} - ${r}`:r)},[n,t]}class et extends we{constructor(e){super(),Ee(this,e,Le,ze,ke,{data:0})}}export{et as component,Ze as universal};