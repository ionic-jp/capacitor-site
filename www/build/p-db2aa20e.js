let e,t,l,n=!1,s=!1,o=!1,i=!1,r=null,c=!1;const f="undefined"!=typeof window?window:{},a=f.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},$=e=>Promise.resolve(e),d=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),h=(e,t,l)=>{l&&l.map((([l,n,s])=>{const o=m(e,l),i=y(t,s),r=p(l);u.ael(o,n,i,r),(t.o=t.o||[]).push((()=>u.rel(o,n,i,r)))}))},y=(e,t)=>l=>{try{256&e.t?e.i[t](l):(e.u=e.u||[]).push([t,l])}catch(e){xe(e)}},m=(e,t)=>8&t?f:e,p=e=>0!=(2&e),w="http://www.w3.org/1999/xlink",b=new WeakMap,g=(e,t,l)=>{let n=Me.get(e);d&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,Me.set(e,n)},v=(e,t)=>{let l=k(t),n=Me.get(l);if(e=11===e.nodeType?e:a,n)if("string"==typeof n){let t,s=b.get(e=e.head||e);s||b.set(e,s=new Set),s.has(l)||(e.host&&(t=e.querySelector(`[sty-id="${l}"]`))?t.innerHTML=n:(t=a.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link"))),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l},k=e=>"sc-"+e.$,j=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),x={},O=e=>"object"==(e=typeof e)||"function"===e,S=(e,t,...l)=>{let n=null,s=null,o=null,i=!1,r=!1,c=[];const f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!O(n))&&(n+=""),i&&r?c[c.length-1].h+=n:c.push(i?M(null,n):n),r=i)};if(f(l),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,R);const a=M(e,null);return a.m=t,c.length>0&&(a.p=c),a.g=s,a.v=o,a},M=(e,t)=>({t:0,k:e,h:t,j:null,p:null,m:null,g:null,v:null}),C={},R={forEach:(e,t)=>e.map(T).forEach(t),map:(e,t)=>e.map(T).map(t).map(L)},T=e=>({vattrs:e.m,vchildren:e.p,vkey:e.g,vname:e.v,vtag:e.k,vtext:e.h}),L=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),S(e.vtag,t,...e.vchildren||[])}const t=M(e.vtag,e.vtext);return t.m=e.vattrs,t.p=e.vchildren,t.g=e.vkey,t.v=e.vname,t},P=(e,t,l,n,s,o)=>{if(l!==n){let i=je(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=I(l),o=I(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=O(n);if((i||c&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{let s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}let f=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,f=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(w,t):e.removeAttribute(t)):(!i||4&o||s)&&!c&&(n=!0===n?"":n,f?e.setAttributeNS(w,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):je(f,r)?r.slice(2):r[2]+t.slice(3),l&&u.rel(e,t,l,!1),n&&u.ael(e,t,n,!1)}},E=/\s/,I=e=>e?e.split(E):[],F=(e,t,l,n)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.m||x,i=t.m||x;for(n in o)n in i||P(s,n,o[n],void 0,l,t.t);for(n in i)P(s,n,o[n],i[n],l,t.t)},U=(s,r,c,f)=>{let u,$,d,h=r.p[c],y=0;if(n||(o=!0,"slot"===h.k&&(e&&f.classList.add(e+"-s"),h.t|=h.p?2:1)),null!==h.h)u=h.j=a.createTextNode(h.h);else if(1&h.t)u=h.j=a.createTextNode("");else{if(i||(i="svg"===h.k),u=h.j=a.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&h.t?"slot-fb":h.k),i&&"foreignObject"===h.k&&(i=!1),F(null,h,i),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),h.p)for(y=0;y<h.p.length;++y)$=U(s,h,y,u),$&&u.appendChild($);"svg"===h.k?i=!1:"foreignObject"===u.tagName&&(i=!0)}return u["s-hn"]=l,3&h.t&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=h.v||"",d=s&&s.p&&s.p[c],d&&d.k===h.k&&s.j&&W(s.j,!1)),u},W=(e,t)=>{u.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==l&&s["s-ol"]&&(N(s).insertBefore(s,H(s)),s["s-ol"].remove(),s["s-ol"]=void 0,o=!0),t&&W(s,t)}u.t&=-2},A=(e,t,n,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===l&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=U(null,n,o,e),r&&(s[o].j=r,c.insertBefore(r,H(t))))},B=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n.j,J(n),s=!0,o["s-ol"]?o["s-ol"].remove():W(o,!0),o.remove())},D=(e,t)=>e.k===t.k&&("slot"===e.k?e.v===t.v:e.g===t.g),H=e=>e&&e["s-ol"]||e,N=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,q=(e,t)=>{const l=t.j=e.j,n=e.p,s=t.p,o=t.k,r=t.h;let c;null===r?(i="svg"===o||"foreignObject"!==o&&i,"slot"===o||F(e,t,i),null!==n&&null!==s?((e,t,l,n)=>{let s,o,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],$=t[a],d=n.length-1,h=n[0],y=n[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==h)h=n[++r];else if(null==y)y=n[--d];else if(D(u,h))q(u,h),u=t[++i],h=n[++r];else if(D($,y))q($,y),$=t[--a],y=n[--d];else if(D(u,y))"slot"!==u.k&&"slot"!==y.k||W(u.j.parentNode,!1),q(u,y),e.insertBefore(u.j,$.j.nextSibling),u=t[++i],y=n[--d];else if(D($,h))"slot"!==u.k&&"slot"!==y.k||W($.j.parentNode,!1),q($,h),e.insertBefore($.j,u.j),$=t[--a],h=n[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].g&&t[f].g===h.g){c=f;break}c>=0?(o=t[c],o.k!==h.k?s=U(t&&t[r],l,c,e):(q(o,h),t[c]=void 0,s=o.j),h=n[++r]):(s=U(t&&t[r],l,r,e),h=n[++r]),s&&N(u.j).insertBefore(s,H(u.j))}i>a?A(e,null==n[d+1]?null:n[d+1].j,l,n,r,d):r>d&&B(t,i,a)})(l,n,t,s):null!==s?(null!==e.h&&(l.textContent=""),A(l,null,t,s,0,s.length-1)):null!==n&&B(n,0,n.length-1),i&&"svg"===o&&(i=!1)):(c=l["s-cr"])?c.parentNode.textContent=r:e.h!==r&&(l.data=r)},V=e=>{let t,l,n,s,o,i,r=e.childNodes;for(l=0,n=r.length;l<n;l++)if(t=r[l],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<n;s++)if(r[s]["s-hn"]!==t["s-hn"])if(i=r[s].nodeType,""!==o){if(1===i&&o===r[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[s].textContent.trim()){t.hidden=!0;break}V(t)}},_=[],z=e=>{let t,l,n,o,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"]))for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(G(l,o)?(i=_.find((e=>e.O===l)),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.S=t:_.push({S:t,O:l}),l["s-sr"]&&_.map((e=>{G(e.O,l["s-sn"])&&(i=_.find((e=>e.O===l)),i&&!e.S&&(e.S=i.S))}))):_.some((e=>e.O===l))||_.push({O:l}));1===t.nodeType&&z(t)}},G=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,J=e=>{e.m&&e.m.ref&&e.m.ref(null),e.p&&e.p.map(J)},K=e=>ge(e).M,Q=(e,t,l)=>{const n=K(e);return{emit:e=>X(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},X=(e,t,l)=>{const n=u.ce(t,l);return e.dispatchEvent(n),n},Y=(e,t)=>{t&&!e.C&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.C=t)))},Z=(e,t)=>{if(e.t|=16,!(4&e.t))return Y(e,e.R),Ie((()=>ee(e,t)));e.t|=512},ee=(e,t)=>{const l=e.i;let n;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>re(l,e,t))),e.u=null),n=re(l,"componentWillLoad")),ce(n,(()=>te(e,l,t)))},te=async(i,r,c)=>{const f=i.M,$=f["s-rc"];c&&(e=>{const t=e.T,l=e.M,n=t.t,s=v(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"),2&n&&l.classList.add(s+"-s"))})(i);((i,r)=>{const c=i.M,f=i.T,$=i.L||M(null,null),d=(e=>e&&e.k===C)(r)?r:S(null,null,r);if(l=c.tagName,f.P&&(d.m=d.m||{},f.P.map((([e,t])=>d.m[t]=c[e]))),d.k=null,d.t|=4,i.L=d,d.j=$.j=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],n=0!=(1&f.t),s=!1,q($,d),u.t|=1,o){let e,t,l,n,s,o;z(d.j);let i=0;for(;i<_.length;i++)e=_[i],t=e.O,t["s-ol"]||(l=a.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<_.length;i++)if(e=_[i],t=e.O,e.S){for(n=e.S.parentNode,s=e.S.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}s&&V(d.j),u.t&=-2,_.length=0})(i,le(i,r)),$&&($.map((e=>e())),f["s-rc"]=void 0);{const e=f["s-p"],t=()=>se(i);0===e.length?t():(Promise.all(e).then(t),i.t|=4,e.length=0)}},le=(e,t)=>{try{r=t,t=t.render&&t.render(),e.t&=-17,e.t|=2}catch(t){xe(t,e.M)}return r=null,t},ne=()=>r,se=e=>{const t=e.M,l=e.i,n=e.R;64&e.t||(e.t|=64,fe(t),re(l,"componentDidLoad"),e.I(t),n||ie()),e.F(t),e.C&&(e.C(),e.C=void 0),512&e.t&&Ee((()=>Z(e,!1))),e.t&=-517},oe=e=>{{const t=ge(e),l=t.M.isConnected;return l&&2==(18&t.t)&&Z(t,!1),l}},ie=()=>{fe(a.documentElement),Ee((()=>X(f,"appload",{detail:{namespace:"site"}})))},re=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){xe(e)}},ce=(e,t)=>e&&e.then?e.then(t):t(),fe=e=>e.classList.add("hydrated"),ae=(e,t,l,n,s,o,i)=>{let r,c,f,u;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(c=r.split("."),c[0]!==i&&"0"!==c[0]||(f={t:0,U:c[0],W:c[1],A:c[2],B:c[3],k:o.tagName.toLowerCase(),j:o,m:null,p:null,g:null,v:null,h:null},t.push(f),o.removeAttribute("c-id"),e.p||(e.p=[]),e.p[f.B]=f,e=f,n&&"0"===f.A&&(n[f.B]=f.j))),u=o.childNodes.length-1;u>=0;u--)ae(e,t,l,n,s,o.childNodes[u],i);if(o.shadowRoot)for(u=o.shadowRoot.childNodes.length-1;u>=0;u--)ae(e,t,l,n,s,o.shadowRoot.childNodes[u],i)}else if(8===o.nodeType)c=o.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(r=c[0],f={t:0,U:c[1],W:c[2],A:c[3],B:c[4],j:o,m:null,p:null,g:null,v:null,k:null,h:null},"t"===r?(f.j=o.nextSibling,f.j&&3===f.j.nodeType&&(f.h=f.j.textContent,t.push(f),o.remove(),e.p||(e.p=[]),e.p[f.B]=f,n&&"0"===f.A&&(n[f.B]=f.j))):f.U===i&&("s"===r?(f.k="slot",o["s-sn"]=c[5]?f.v=c[5]:"",o["s-sr"]=!0,n&&(f.j=a.createElement(f.k),f.v&&f.j.setAttribute("name",f.v),o.parentNode.insertBefore(f.j,o),o.remove(),"0"===f.A&&(n[f.B]=f.j)),l.push(f),e.p||(e.p=[]),e.p[f.B]=f):"r"===r&&(n?o.remove():(s["s-cr"]=o,o["s-cn"]=!0))));else if(e&&"style"===e.k){const t=M(null,o.textContent);t.j=o,t.B="0",e.p=[t]}},ue=(e,t)=>{if(1===e.nodeType){let l=0;for(;l<e.childNodes.length;l++)ue(e.childNodes[l],t);if(e.shadowRoot)for(l=0;l<e.shadowRoot.childNodes.length;l++)ue(e.shadowRoot.childNodes[l],t)}else if(8===e.nodeType){const l=e.nodeValue.split(".");"o"===l[0]&&(t.set(l[1]+"."+l[2],e),e.nodeValue="",e["s-en"]=l[3])}},$e=(e,t,l)=>{if(t.D){e.watchers&&(t.H=e.watchers);const n=Object.entries(t.D),s=e.prototype;if(n.map((([e,[n]])=>{31&n||2&l&&32&n?Object.defineProperty(s,e,{get(){return((e,t)=>ge(this).N.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=ge(e),o=s.M,i=s.N.get(t),r=s.t,c=s.i;if(l=((e,t)=>null==e||O(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.D[t][0]),!(8&r&&void 0!==i||l===i)&&(s.N.set(t,l),c)){if(n.H&&128&r){const e=n.H[t];e&&e.map((e=>{try{c[e](l,i,t)}catch(e){xe(e,o)}}))}2==(18&r)&&Z(s,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0}):1&l&&64&n&&Object.defineProperty(s,e,{value(...t){const l=ge(this);return l.q.then((()=>l.i[e](...t)))}})})),1&l){const l=new Map;s.attributeChangedCallback=function(e,t,n){u.jmp((()=>{const t=l.get(e);this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return l.set(s,e),512&n[0]&&t.P.push([e,s]),s}))}}return e},de=e=>{re(e,"connectedCallback")},he=e=>{if(0==(1&u.t)){const t=ge(e),l=t.T,n=()=>{};if(1&t.t)h(e,t,l.V),de(t.i);else{let n;if(t.t|=1,n=e.getAttribute("s-id"),n){if(1&l.t){const t=v(e.shadowRoot,l);e.classList.remove(t+"-h",t+"-s")}((e,t,l,n)=>{const s=e.shadowRoot,o=[],i=s?[]:null,r=n.L=M(t,null);u._||ue(a.body,u._=new Map),e["s-id"]=l,e.removeAttribute("s-id"),ae(r,o,[],i,e,e,l),o.map((e=>{const l=e.U+"."+e.W,n=u._.get(l),o=e.j;n&&""===n["s-en"]&&n.parentNode.insertBefore(o,n.nextSibling),s||(o["s-hn"]=t,n&&(o["s-ol"]=n,o["s-ol"]["s-nr"]=o)),u._.delete(l)})),s&&i.map((e=>{e&&s.appendChild(e)}))})(e,l.$,n,t)}n||12&l.t&&ye(e);{let l=e;for(;l=l.parentNode||l.host;)if(1===l.nodeType&&l.hasAttribute("s-id")&&l["s-p"]||l["s-p"]){Y(t,t.R=l);break}}l.D&&Object.entries(l.D).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=Se(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(l.H=s.watchers,$e(s,l,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){xe(e)}t.t&=-9,t.t|=128,e(),de(t.i)}if(s.style){let e=s.style;const t=k(l);if(!Me.has(t)){const n=()=>{};g(t,e,!!(1&l.t)),n()}}}const o=t.R,i=()=>Z(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}},ye=e=>{const t=e["s-cr"]=a.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},me=(e,t={})=>{const l=[],n=t.exclude||[],s=f.customElements,o=a.head,i=o.querySelector("meta[charset]"),r=a.createElement("style"),c=[],$=a.querySelectorAll("[sty-id]");let d,h=!0,y=0;for(Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",a.baseURI).href,u.t|=2;y<$.length;y++)g($[y].getAttribute("sty-id"),j($[y].innerHTML),!0);e.map((e=>e[1].map((t=>{const o={t:t[0],$:t[1],D:t[2],V:t[3]};o.D=t[2],o.V=t[3],o.P=[],o.H={};const i=o.$,r=class extends HTMLElement{constructor(e){super(e),ke(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),h?c.push(this):u.jmp((()=>he(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const e=ge(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),re(t,"disconnectedCallback")}})()))}componentOnReady(){return ge(this).G}};o.J=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,$e(r,o,1)))})))),r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),h=!1,c.length?c.map((e=>e.connectedCallback())):u.jmp((()=>d=setTimeout(ie,30)))},pe=e=>{const t=new URL(e,u.l);return t.origin!==f.location.origin?t.href:t.pathname},we=(e,t)=>t,be=new WeakMap,ge=e=>be.get(e),ve=(e,t)=>be.set(t.i=e,t),ke=(e,t)=>{const l={t:0,M:e,T:t,N:new Map};return l.q=new Promise((e=>l.F=e)),l.G=new Promise((e=>l.I=e)),e["s-p"]=[],e["s-rc"]=[],h(e,l,t.V),be.set(e,l)},je=(e,t)=>t in e,xe=(e,t)=>(0,console.error)(e,t),Oe=new Map,Se=e=>{const t=e.$.replace(/-/g,"_"),l=e.J,n=Oe.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(Oe.set(l,e),e[t])),xe)},Me=new Map,Ce=[],Re=[],Te=(e,t)=>l=>{e.push(l),c||(c=!0,t&&4&u.t?Ee(Pe):u.raf(Pe))},Le=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){xe(e)}e.length=0},Pe=()=>{Le(Ce),Le(Re),(c=Ce.length>0)&&u.raf(Pe)},Ee=e=>$().then(e),Ie=Te(Re,!0),Fe={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1};export{Fe as B,we as F,C as H,K as a,me as b,Q as c,ne as d,oe as f,pe as g,S as h,$ as p,ve as r,Ie as w}