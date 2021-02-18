const e=(e,t)=>e===t;let t=j;const n={},r={owned:null,cleanups:null,context:null,owner:null},o=Symbol("lazy"),[s,l]=p(!1,!0);var i=null,c=null;let u=null,a=null,f=null,h=0;function d(e,t){t&&(i=t);const n=c,o=i,s=0===e.length?r:{owned:null,cleanups:null,context:null,owner:o,attached:!!t};let l;i=s,c=null;try{L((()=>l=e((()=>E(s)))),!0)}finally{c=n,i=o}return l}function p(t,r,o){const s={value:t,observers:null,observerSlots:null,pending:n,comparator:r?"function"==typeof r?r:e:void 0};return[x.bind(s),C.bind(s)]}function g(e,t){k(N(e,t,!0))}function v(e,t){k(N(e,t,!1))}function m(t,r,o){const s=N(t,r,!0);return s.pending=n,s.observers=null,s.observerSlots=null,s.state=0,s.comparator=o?"function"==typeof o?o:e:void 0,k(s),x.bind(s)}function y(e){if(u)return e();const t=u=[],r=e();return u=null,L((()=>{for(let e=0;e<t.length;e+=1){const r=t[e];if(r.pending!==n){const e=r.pending;r.pending=n,C.call(r,e)}}}),!1),r}function w(e){let t,n=c;return c=null,t=e(),c=n,t}function b(e){return T(i,e.id)||e.defaultValue}function S(e){const t=m(e);return m((()=>R(t())))}function A(e,t,n){const r=new Set,[o,s]=p(n,!0),[l,i]=p(),[u,a]=p(!1,!0);let f=null,h=null,d="function"==typeof e;function v(e,t,n){return h===e&&(f=n,h=null,function(e){y((()=>{s(e),a(!1);for(let e of r.keys())e.decrement();r.clear()}))}(t)),t}function m(){const e=undefined,t=o();if(f)throw f;return c&&!c.user&&e&&g((()=>{l(),h&&(e.resolved||r.has(e)||(e.increment(),r.add(e)))})),t}function b(){f=null;let n,r=d?e():e;r?(n||(n=t(r,o)),"object"==typeof n&&"then"in n?(h=n,y((()=>{a(!0),i()})),n.then((e=>v(n,e)),(e=>v(n,void 0,e)))):v(h,n)):v(h,w(o))}return Object.defineProperty(m,"loading",{get:()=>u()}),d?g(b):b(),[m,{refetch:b,mutate:s}]}function x(){if(this.state&&this.sources){const e=a;a=null,1===this.state?k(this):O(this),a=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function C(e,t){return this.comparator&&this.comparator(this.value,e)?e:u?(this.pending===n&&u.push(this),this.pending=e,e):(this.value=e,!this.observers||a&&!this.observers.length||L((()=>{for(let e=0;e<this.observers.length;e+=1){const t=this.observers[e];null,t.observers&&2!==t.state&&$(t),t.state=1,t.pure?a.push(t):f.push(t)}if(a.length>1e6)throw a=[],new Error("Potential Infinite Loop Detected.")}),!1),e)}function k(e){if(!e.fn)return;E(e);const t=i,n=c,r=h;c=i=e,function(e,t,n){let r;try{r=e.fn(t)}catch(e){P(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?C.call(e,r,!0):e.value=r,e.updatedAt=n)}(e,e.value,r),c=n,i=t}function N(e,t,n){const o={fn:e,state:1,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:i,context:null,pure:n};return null===i||i!==r&&(i.owned?i.owned.push(o):i.owned=[o]),o}function D(e){let t,n=1===e.state&&e;if(e.suspense&&w(e.suspense.inFallback))return e.suspense.effects.push(e);for(;e.fn&&(e=e.owner);)2===e.state?t=e:1===e.state&&(n=e,t=void 0);if(t){const e=a;if(a=null,O(t),a=e,!n||1!==n.state)return}n&&k(n)}function L(e,n){if(a)return e();let r=!1;n||(a=[]),f?r=!0:f=[],h++;try{e()}catch(e){P(e)}finally{!function(e){a&&(j(a),a=null);if(e)return;f.length?y((()=>{t(f),f=null})):f=null}(r)}}function j(e){for(let t=0;t<e.length;t++)D(e[t])}function O(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?D(n):2===n.state&&O(n))}}function $(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&$(n))}}function E(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)E(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function P(e){throw e}function T(e,t){return e&&(e.context&&e.context[t]||e.owner&&T(e.owner,t))}function R(e){if("function"==typeof e)return R(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){let r=R(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function B(e){return function(t){return m((()=>(i.context={[e]:t.value},S((()=>t.children)))))}}const H=Symbol("fallback");function Y(e,t,n={}){let r=[],o=[],s=[],l=0,c=t.length>1?[]:null,u=i;var a;return a=()=>{for(let e=0,t=s.length;e<t;e++)s[e]()},null===i||(null===i.cleanups?i.cleanups=[a]:i.cleanups.push(a)),()=>{let i,a,f=e()||[];return w((()=>{let e,t,p,g,v,m,y,w,b,S=f.length;if(0===S){if(0!==l){for(i=0;i<l;i++)s[i]();s=[],r=[],o=[],l=0,c&&(c=[])}n.fallback&&(r=[H],o[0]=d((e=>(s[0]=e,n.fallback())),u),l=1)}else if(0===l){for(a=0;a<S;a++)r[a]=f[a],o[a]=d(h,u);l=S}else{for(p=new Array(S),g=new Array(S),c&&(v=new Array(S)),m=0,y=Math.min(l,S);m<y&&r[m]===f[m];m++);for(y=l-1,w=S-1;y>=m&&w>=m&&r[y]===f[w];y--,w--)p[w]=o[y],g[w]=s[y],c&&(v[w]=c[y]);for(e=new Map,t=new Array(w+1),a=w;a>=m;a--)b=f[a],i=e.get(b),t[a]=void 0===i?-1:i,e.set(b,a);for(i=m;i<=y;i++)b=r[i],a=e.get(b),void 0!==a&&-1!==a?(p[a]=o[i],g[a]=s[i],c&&(v[a]=c[i]),a=t[a],e.set(b,a)):s[i]();for(a=m;a<S;a++)a in p?(o[a]=p[a],s[a]=g[a],c&&(c[a]=v[a],c[a](a))):o[a]=d(h,u);l=o.length=S,r=f.slice(0)}return o}));function h(e){if(s[a]=e,c){const[e,n]=p(a,!0);return c[a]=n,t(f[a],e)}return t(f[a])}}}function U(e,t){return w((()=>e(t)))}const I={get:(e,t)=>e.get(t),has:(e,t)=>void 0!==e.get(t),getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t)}),ownKeys:e=>e.keys()};function M(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=e[n][t];if(void 0!==r)return r}},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(e[n]));return[...new Set(t)]}},I)}function q(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),o=t.map((e=>{const t={};for(let n=0;n<e.length;n++){const o=e[n];r[o]&&Object.defineProperty(t,o,r[o])}return t}));return o.push(new Proxy({get(t){if(!n.has(t))return e[t]},keys:()=>Object.keys(e).filter((e=>!n.has(e)))},I)),o}function z(e){let t;return n=>{let r,s;{const[n]=A(o,(()=>(t||(t=e())).then((e=>e.default))));r=n}return m((()=>(s=r())&&w((()=>s(n)))))}}function W(e){const t="fallback"in e&&{fallback:()=>e.fallback};return m(Y((()=>e.each),e.children,t||void 0))}function _(e){const t=Object.getOwnPropertyDescriptor(e,"children").value,n="function"==typeof t&&t.length,r=m(n?()=>e.when:()=>!!e.when,void 0,!0);return m((()=>{const t=r();return t?n?w((()=>e.children(t))):e.children:e.fallback}))}const F=new Set(["className","indeterminate","value","allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","truespeed"]),V=new Set(["innerHTML","textContent","innerText","children"]),J={className:"class",htmlFor:"for"},K=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),X={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function G(e,t){return m(e,void 0,t)}function Q(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,c=t[o-1].nextSibling,u=null;for(;l<o||i<s;)if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:c;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)u&&u.has(t[l])||e.removeChild(t[l]),l++;else if(t[l]===n[i])l++,i++;else if(t[o-1]===n[s-1])o--,s--;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!u){u=new Map;let e=i;for(;e<s;)u.set(n[e],e++)}const r=u.get(t[l]);if(null!=r)if(i<r&&r<s){let c,a=l,f=1;for(;++a<o&&a<s&&null!=(c=u.get(t[a]))&&c===r+f;)f++;if(f>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else e.removeChild(t[l++])}}const Z=new Set;function ee(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`Template html does not match input:\n${r.innerHTML}\n\n${e}`;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function te(e){for(let t=0,n=e.length;t<n;t++){const n=e[t];Z.has(n)||(Z.add(n),document.addEventListener(n,ie))}}function ne(e,t,n){!1===n||null==n?e.removeAttribute(t):e.setAttribute(t,n)}function re(e,t,n,r){!1===r||null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function oe(e,t,n){const r=Object.keys(t);for(let o=0,s=r.length;o<s;o++){const s=r[o],l=!!t[s],i=s.split(/\s+/);if(s&&(!n||n[s]!==l))for(let t=0,n=i.length;t<n;t++)e.classList.toggle(i[t],l)}return t}function se(e,t,n){const r=e.style;if("string"==typeof t)return r.cssText=t;let o,s;if(null!=n&&"string"!=typeof n){for(s in t)o=t[s],o!==n[s]&&r.setProperty(s,o);for(s in n)null==t[s]&&r.removeProperty(s)}else for(s in t)r.setProperty(s,t[s]);return t}function le(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return ue(e,t,r,n);v((r=>ue(e,t(),r,n)),r)}function ie(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const r=n[t];if(r){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ce(e,t,n={},r,o){return!o&&"children"in t&&v((()=>n.children=ue(e,t.children,n.children))),v((()=>function(e,t,n,r,o={}){let s,l,i;for(const u in t){if("children"===u){r||ue(e,t.children);continue}const a=t[u];if(a!==o[u]){if("style"===u)se(e,a,o[u]);else if("class"!==u||n)if("classList"===u)oe(e,a,o[u]);else if("ref"===u)a(e);else if("on"===u)for(const t in a)e.addEventListener(t,a[t]);else if("onCapture"===u)for(const t in a)e.addEventListener(t,a[t],!0);else if("on"===u.slice(0,2)){const t=u.toLowerCase();if(K.has(t.slice(2))){const n=t.slice(2);Array.isArray(a)?(e[`$$${n}`]=a[0],e[`$$${n}Data`]=a[1]):e[`$$${n}`]=a,te([n])}else Array.isArray(a)?e.addEventListener(t,(e=>a[0](a[1],e))):e.addEventListener(t,a)}else if((i=V.has(u))||!n&&(l=F.has(u))||(s=e.nodeName.includes("-")))!s||l||i?e[u]=a:e[(c=u,c.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=a;else{const t=n&&u.indexOf(":")>-1&&X[u.split(":")[0]];t?re(e,t,u,a):ne(e,J[u]||u,a)}else e.className=a;o[u]=a}}var c}(e,t,r,!0,n))),n}function ue(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,l=void 0!==r;if(e=l&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s)if("number"===s&&(t=t.toString()),l){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=he(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===s)n=he(e,n,r);else{if("function"===s)return v((()=>{let o=t();for(;"function"==typeof o;)o=o();n=ue(e,o,n,r)})),()=>n;if(Array.isArray(t)){const s=[];if(ae(s,t,o))return v((()=>n=ue(e,s,n,r,!0))),()=>n;if(0===s.length){if(n=he(e,n,r),l)return n}else Array.isArray(n)?0===n.length?fe(e,s,r):Q(e,n,s):null==n||""===n?fe(e,s):Q(e,l&&n||[e.firstChild],s);n=s}else if(t instanceof Node){if(Array.isArray(n)){if(l)return n=he(e,n,r,t);he(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Skipped inserting",t)}return n}function ae(e,t,n){let r=!1;for(let o=0,s=t.length;o<s;o++){let s,l=t[o];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))r=ae(e,l)||r;else if("string"==(s=typeof l))e.push(document.createTextNode(l));else if("function"===s)if(n){for(;"function"==typeof l;)l=l();r=ae(e,Array.isArray(l)?l:[l])||r}else e.push(l),r=!0;else e.push(document.createTextNode(l.toString()))}return r}function fe(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function he(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&e.removeChild(l):t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}const de=/%|\//g;const pe=/%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g;var ge;!function(e){e[e.ANY=-1]="ANY",e[e.STAR=42]="STAR",e[e.SLASH=47]="SLASH",e[e.COLON=58]="COLON"}(ge||(ge={}));const ve=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g,me=Array.isArray,ye=Object.prototype.hasOwnProperty;function we(e,t){if("object"!=typeof e||null===e)throw new Error("You must pass an object as the second argument to `generate`.");if(!ye.call(e,t))throw new Error("You must provide param `"+t+"` to `generate`.");const n=e[t],r="string"==typeof n?n:""+n;if(0===r.length)throw new Error("You must provide a param `"+t+"`.");return r}var be,Se;!function(e){e[e.Static=0]="Static",e[e.Dynamic=1]="Dynamic",e[e.Star=2]="Star",e[e.Epsilon=4]="Epsilon"}(be||(be={})),function(e){e[e.Static=be.Static]="Static",e[e.Dynamic=be.Dynamic]="Dynamic",e[e.Star=be.Star]="Star",e[e.Epsilon=be.Epsilon]="Epsilon",e[e.Named=be.Dynamic|be.Star]="Named",e[e.Decoded=be.Dynamic]="Decoded",e[e.Counted=be.Static|be.Dynamic|be.Star]="Counted"}(Se||(Se={}));const Ae=[];Ae[be.Static]=function(e,t){let n=t;const r=e.value;for(let e=0;e<r.length;e++){const t=r.charCodeAt(e);n=n.put(t,!1,!1)}return n},Ae[be.Dynamic]=function(e,t){return t.put(ge.SLASH,!0,!0)},Ae[be.Star]=function(e,t){return t.put(ge.ANY,!1,!0)},Ae[be.Epsilon]=function(e,t){return t};const xe=[];xe[be.Static]=function(e){return e.value.replace(ve,"\\$1")},xe[be.Dynamic]=function(){return"([^/]+)"},xe[be.Star]=function(){return"(.+)"},xe[be.Epsilon]=function(){return""};const Ce=[];Ce[be.Static]=function(e){return e.value},Ce[be.Dynamic]=function(e,t,n){const r=we(t,e.value);return n?encodeURIComponent(r).replace(pe,decodeURIComponent):r},Ce[be.Star]=function(e,t){return we(t,e.value)},Ce[be.Epsilon]=function(){return""};const ke=Object.freeze({}),Ne=Object.freeze([]);function De(e,t,n){t.length>0&&t.charCodeAt(0)===ge.SLASH&&(t=t.substr(1));const r=t.split("/");let o,s;for(let t=0;t<r.length;t++){let i=r[t],c=0;c=""===i?be.Epsilon:i.charCodeAt(0)===ge.COLON?be.Dynamic:i.charCodeAt(0)===ge.STAR?be.Star:be.Static,c&Se.Named&&(i=i.slice(1),o=o||[],o.push(i),s=s||[],s.push(0!=(c&Se.Decoded))),c&Se.Counted&&n[c]++,e.push({type:c,value:(l=i,l.length<3||-1===l.indexOf("%")?l:decodeURIComponent(l).replace(de,encodeURIComponent))})}var l;return{names:o||Ne,shouldDecodes:s||Ne}}function Le(e,t,n){return e.char===t&&e.negate===n}class je{constructor(e,t,n,r,o){this.states=e,this.id=t,this.char=n,this.negate=r,this.nextStates=o?t:null,this.pattern="",this._regex=void 0,this.handlers=void 0,this.types=void 0}regex(){return this._regex||(this._regex=new RegExp(this.pattern)),this._regex}get(e,t){const n=this.nextStates;if(null!==n)if(me(n))for(let r=0;r<n.length;r++){const o=this.states[n[r]];if(Le(o,e,t))return o}else{const r=this.states[n];if(Le(r,e,t))return r}}put(e,t,n){let r;if(r=this.get(e,t))return r;const o=this.states;return r=new je(o,o.length,e,t,n),o[o.length]=r,null==this.nextStates?this.nextStates=r.id:me(this.nextStates)?this.nextStates.push(r.id):this.nextStates=[this.nextStates,r.id],r}match(e){const t=this.nextStates;if(!t)return[];const n=[];if(me(t))for(let r=0;r<t.length;r++){const o=this.states[t[r]];Oe(o,e)&&n.push(o)}else{const r=this.states[t];Oe(r,e)&&n.push(r)}return n}}function Oe(e,t){return e.negate?e.char!==t&&e.char!==ge.ANY:e.char===t||e.char===ge.ANY}function $e(e,t){let n=[];for(let r=0,o=e.length;r<o;r++){const o=e[r];n=n.concat(o.match(t))}return n}function Ee(e){let t;e=e.replace(/\+/gm,"%20");try{t=decodeURIComponent(e)}catch(e){t=""}return t}class Pe{constructor(){const e=[],t=new je(e,0,ge.ANY,!0,!1);e[0]=t,this.rootState=t}add(e){let t=this.rootState,n="^";const r=[0,0,0],o=new Array(e.length),s=[];let l=!0,i=0;for(let c=0;c<e.length;c++){const u=e[c],{names:a,shouldDecodes:f}=De(s,u.path,r);for(;i<s.length;i++){const e=s[i];e.type!==be.Epsilon&&(l=!1,t=t.put(ge.SLASH,!1,!1),n+="/",t=Ae[e.type](e,t),n+=xe[e.type](e))}o[c]={handler:u.handler,names:a,shouldDecodes:f}}l&&(t=t.put(ge.SLASH,!1,!1),n+="/"),t.handlers=o,t.pattern=n+"$",t.types=r}recognize(e){let t,n=[this.rootState],r={},o=!1;const s=e.indexOf("#");-1!==s&&(e=e.substr(0,s));const l=e.indexOf("?");if(-1!==l){const t=e.substr(l+1,e.length);e=e.substr(0,l),r=function(e){const t=e.split("&"),n={};for(let e=0;e<t.length;e++){const r=t[e].split("=");let o=Ee(r[0]);const s=o.length;let l,i=!1;1===r.length?l="true":(s>2&&o.endsWith("[]")&&(i=!0,o=o.slice(0,s-2),n[o]||(n[o]=[])),l=r[1]?Ee(r[1]):""),i?n[o].push(l):n[o]=l}return n}(t)}e.startsWith("/")||(e="/"+e);let i=e;e=decodeURI(e),i=decodeURI(i);const c=e.length;c>1&&"/"===e.charAt(c-1)&&(e=e.substr(0,c-1),i=i.substr(0,i.length-1),o=!0);for(let t=0;t<e.length&&(n=$e(n,e.charCodeAt(t)),n.length);t++);const u=[];for(let e=0;e<n.length;e++)n[e].handlers&&u.push(n[e]);n=function(e){return e.sort((function(e,t){const[n,r,o]=e.types||[0,0,0],[s,l,i]=t.types||[0,0,0];if(o!==i)return o-i;if(o){if(n!==s)return s-n;if(r!==l)return l-r}return r!==l?r-l:n!==s?s-n:0}))}(u);const a=u[0];return a&&a.handlers&&(o&&a.char===ge.ANY&&(i+="/"),t=function(e,t,n){const r=e.handlers,o=e.regex();if(!o||!r)throw new Error("state not initialized");const s=o.exec(t);let l=1;const i=function(e){const t=[];return t.queryParams=e||{},t}(n);i.length=r.length;for(let e=0;e<r.length;e++){const t=r[e],n=t.names,o=t.shouldDecodes;let c=ke,u=!1;if(n!==Ne&&o!==Ne)for(let e=0;e<n.length;e++){u=!0;const t=n[e],r=s&&s[l++];c===ke&&(c={}),c[t]=r}i[e]={handler:t.handler,params:c,isDynamic:u}}return i}(a,i,r)),t}}const Te=ee("<a></a>",2),Re=function(e){const t=Symbol("context");return{id:t,Provider:B(t),defaultValue:e}}();function Be(){return b(Re)}function He(e){const t=Be(),n=M(t,{level:t.level+1}),[r,o]=q(e,["children"]),s=m((()=>{const e=t.current;return e&&e[t.level]&&e[t.level].handler.component}),void 0,!0),l=m((()=>{const e=t.current;return e&&e[t.level]&&e[t.level].params}),void 0,!0),i=m((()=>{const e=t.current;return e&&e.queryParams}),void 0,!0),c=()=>{const e=t.current;return e&&e[t.level].handler.data&&e[t.level].handler.data({get params(){return l()},get query(){return i()}})||{}};return U(Re.Provider,{value:n,get children(){return U(_,{get when(){return s()},children:e=>U(e,M({get params(){return l()},get query(){return i()}},w(c),o,{get children(){return r.children}}))})}})}const Ye=e=>{const t=Be(),[n,r]=q(e,["children","external"]);return(()=>{const o=Te.cloneNode(!0);var s,l,i,c;return o.$$click=r=>{n.external||(r.preventDefault(),t.push(e.href||""))},s=o,i=!1,c=!0,"function"==typeof(l=r)?v((e=>ce(s,l(),e,i,c))):ce(s,l,void 0,i,c),le(o,(()=>n.children)),o})()},Ue=e=>{const t=function(e,t,n=""){const r=new Pe;Ie(r,e,n);const[o,l]=p(t||window.location.pathname.replace(n,"")+window.location.search),i=m((()=>r.recognize(n+o()))),[c,u]=[s,e=>{y(e)}];return window.onpopstate=()=>u((()=>l(window.location.pathname.replace(n,"")))),{root:n,get location(){return o()},get current(){return i()},get pending(){return c()},push(e){window.history.pushState("","",n+e),u((()=>l(e)))},addRoutes(e){Ie(r,e,n)}}}(e.routes,e.initialURL,e.root);return t.level=0,U(Re.Provider,{value:t,get children(){return e.children}})};function Ie(e,t,n,r=[]){t.forEach((t=>{const o={path:n+t.path,handler:{component:t.component,data:t.data}};if(!t.children)return e.add([...r,o]);Ie(e,t.children,n,[...r,o])}))}te(["click"]);const Me=ee("<strong>HN</strong>",2),qe=ee("<strong>New</strong>",2),ze=ee("<strong>Show</strong>",2),We=ee("<strong>Ask</strong>",2),_e=ee("<strong>Jobs</strong>",2),Fe=ee('<header class="header"><nav class="inner"><a class="github" href="http://github.com/ryansolid/solid" target="_blank" rel="noreferrer">Built with Solid</a></nav></header>',6);function Ve(){return(()=>{const e=Fe.cloneNode(!0),t=e.firstChild,n=t.firstChild;return le(t,U(Ye,{href:"",get children(){return Me.cloneNode(!0)}}),n),le(t,U(Ye,{href:"new",get children(){return qe.cloneNode(!0)}}),n),le(t,U(Ye,{href:"show",get children(){return ze.cloneNode(!0)}}),n),le(t,U(Ye,{href:"ask",get children(){return We.cloneNode(!0)}}),n),le(t,U(Ye,{href:"job",get children(){return _e.cloneNode(!0)}}),n),e})()}const Je={top:"news",new:"newest",show:"show",ask:"ask",job:"jobs"},Ke={},Xe=e=>Ke[e]||(Ke[e]=fetch(e.startsWith("user")?`https://hacker-news.firebaseio.com/v0/${e}.json`:`https://node-hnapi.herokuapp.com/${e}`).then((e=>e.json())));const Ge=["new","show","ask","job"];function Qe(e){const t=()=>{var t;return+((null===(t=e.query)||void 0===t?void 0:t.page)||1)},n=function(){const e=Be();return m((()=>{const t=e.location;for(let e=0;e<Ge.length;e++)if(t.includes(Ge[e]))return Ge[e];return"top"}))}(),r=function(e,t){return A((()=>`${Je[e()]}?page=${t()}`),Xe)[0]}(n,t);return{get type(){return n()},get stories(){return r()},get page(){return t()}}}const Ze=z((()=>import("./stories-c52f0e3f.js")));var et=[{path:"",component:Ze,data:Qe},{path:"new",component:Ze,data:Qe},{path:"show",component:Ze,data:Qe},{path:"ask",component:Ze,data:Qe},{path:"job",component:Ze,data:Qe},{path:"users/:id",component:z((()=>import("./[id]-e5b3ed58.js"))),data:function(e){const t=(n=()=>e.params.id,A((()=>`user/${n()}`),Xe)[0]);var n;return{get user(){return t()}}}},{path:"stories/:id",component:z((()=>import("./[id]-49c71743.js"))),data:function(e){const t=(n=()=>e.params.id,A((()=>`item/${n()}`),Xe)[0]);var n;return{get story(){return t()}}}},{path:"*",component:Ze,data:Qe}];!function(e,t,n){let r;d((o=>{r=o,le(t,e(),t.firstChild?null:void 0,n)}))}((()=>U(Ue,{routes:et,get root(){return"/solid-hackernews/"},get children(){return[U(Ve,{}),U(He,{class:"view"})]}})),document.body),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/solid-hackernews/sw.js")}));export{W as F,Ye as L,_ as S,v as a,p as b,U as c,oe as d,te as e,le as i,G as m,ne as s,ee as t};
