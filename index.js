!function(){"use strict";let t,e,n;function i(t){const e=document.createElement("a");return"root"===t.id?e.innerText="🏠":e.innerText=t.textElement.innerText,e.href="#",e.setAttribute("data-task-id",t.id),e.addEventListener("click",o),e}function o(n){n.preventDefault();const i=n.target.getAttribute("data-task-id");for(;t.id!==i;){const n=t.parent();if(!n)break;n.ancestor=!1,t.root=!1,n.root=!0,t=n;const i=e.querySelector("a:last-child");i&&i.remove()}}function s(n){t=n,e=document.querySelector("nav")}(function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function e(e){var n=t.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!n&&e}function n(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function i(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function o(t,e,n){n=void 0===n?new Set:n;for(var s=t;s;){if(s.nodeType===Node.ELEMENT_NODE){var r=s;e(r);var a=r.localName;if("link"===a&&"import"===r.getAttribute("rel")){if((s=r.import)instanceof Node&&!n.has(s))for(n.add(s),s=s.firstChild;s;s=s.nextSibling)o(s,e,n);s=i(t,r);continue}if("template"===a){s=i(t,r);continue}if(r=r.__CE_shadowRoot)for(r=r.firstChild;r;r=r.nextSibling)o(r,e,n)}s=s.firstChild?s.firstChild:i(t,s)}}function s(t,e,n){t[e]=n}function r(){this.a=new Map,this.f=new Map,this.c=[],this.b=!1}function a(t,e){t.b=!0,t.c.push(e)}function c(t,e){t.b&&o(e,function(e){return h(t,e)})}function h(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.c.length;n++)t.c[n](e)}}function l(t,e){var n=[];for(o(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var i=n[e];1===i.__CE_state?t.connectedCallback(i):p(t,i)}}function d(t,e){var n=[];for(o(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var i=n[e];1===i.__CE_state&&t.disconnectedCallback(i)}}function u(t,e,n){var i=(n=void 0===n?{}:n).u||new Set,s=n.h||function(e){return p(t,e)},r=[];if(o(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var o=new Set(i);o.delete(n),u(t,n,{u:o,h:s})}})}else r.push(e)},i),t.b)for(e=0;e<r.length;e++)h(t,r[e]);for(e=0;e<r.length;e++)s(r[e])}function p(t,e){if(void 0===e.__CE_state){var i=e.ownerDocument;if((i.defaultView||i.__CE_isImportDocument&&i.__CE_hasRegistry)&&(i=t.a.get(e.localName))){i.constructionStack.push(e);var o=i.constructorFunction;try{try{if(new o!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{i.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=i,i.attributeChangedCallback)for(i=i.observedAttributes,o=0;o<i.length;o++){var s=i[o],r=e.getAttribute(s);null!==r&&t.attributeChangedCallback(e,s,null,r,null)}n(e)&&t.connectedCallback(e)}}}function f(t){var e=document;this.c=t,this.a=e,this.b=void 0,u(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function m(t){t.b&&t.b.disconnect()}function y(){var t=this;this.b=this.a=void 0,this.c=new Promise(function(e){t.b=e,t.a&&e(t.a)})}function w(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function b(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.i=[],this.o=new f(t)}r.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},r.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},r.prototype.attributeChangedCallback=function(t,e,n,i,o){var s=t.__CE_definition;s.attributeChangedCallback&&-1<s.observedAttributes.indexOf(e)&&s.attributeChangedCallback.call(t,e,n,i,o)},f.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||m(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,i=0;i<n.length;i++)u(this.c,n[i])},b.prototype.l=function(t,n){var i=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!e(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var o=function(t){var e=s[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},s=n.prototype;if(!(s instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var r=o("connectedCallback"),a=o("disconnectedCallback"),c=o("adoptedCallback"),h=o("attributeChangedCallback"),l=n.observedAttributes||[]}catch(t){return}finally{this.c=!1}n={localName:t,constructorFunction:n,connectedCallback:r,disconnectedCallback:a,adoptedCallback:c,attributeChangedCallback:h,observedAttributes:l,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.f.set(n.constructorFunction,n)}(this.a,t,n),this.i.push(n),this.b||(this.b=!0,this.f(function(){return function(t){if(!1!==t.b){t.b=!1;for(var e=t.i,n=[],i=new Map,o=0;o<e.length;o++)i.set(e[o].localName,[]);for(u(t.a,document,{h:function(e){if(void 0===e.__CE_state){var o=e.localName,s=i.get(o);s?s.push(e):t.a.a.get(o)&&n.push(e)}}}),o=0;o<n.length;o++)p(t.a,n[o]);for(;0<e.length;){var s=e.shift();o=s.localName,s=i.get(s.localName);for(var r=0;r<s.length;r++)p(t.a,s[r]);(o=t.j.get(o))&&w(o)}}}(i)}))},b.prototype.h=function(t){u(this.a,t)},b.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},b.prototype.m=function(t){if(!e(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var n=this.j.get(t);return n?n.c:(n=new y,this.j.set(t,n),this.a.a.get(t)&&!this.i.some(function(e){return e.localName===t})&&w(n),n.c)},b.prototype.s=function(t){m(this.o);var e=this.f;this.f=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=b,b.prototype.define=b.prototype.l,b.prototype.upgrade=b.prototype.h,b.prototype.get=b.prototype.get,b.prototype.whenDefined=b.prototype.m,b.prototype.polyfillWrapFlushCallback=b.prototype.s;var k=window.Document.prototype.createElement,v=window.Document.prototype.createElementNS,g=window.Document.prototype.importNode,C=window.Document.prototype.prepend,x=window.Document.prototype.append,E=window.DocumentFragment.prototype.prepend,_=window.DocumentFragment.prototype.append,S=window.Node.prototype.cloneNode,A=window.Node.prototype.appendChild,N=window.Node.prototype.insertBefore,T=window.Node.prototype.removeChild,D=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),P=window.Element.prototype.attachShadow,j=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),M=window.Element.prototype.getAttribute,q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,F=window.Element.prototype.getAttributeNS,O=window.Element.prototype.setAttributeNS,K=window.Element.prototype.removeAttributeNS,H=window.Element.prototype.insertAdjacentElement,B=window.Element.prototype.insertAdjacentHTML,I=window.Element.prototype.prepend,$=window.Element.prototype.append,z=window.Element.prototype.before,U=window.Element.prototype.after,X=window.Element.prototype.replaceWith,W=window.Element.prototype.remove,J=window.HTMLElement,V=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),G=window.HTMLElement.prototype.insertAdjacentElement,Q=window.HTMLElement.prototype.insertAdjacentHTML,Y=new function(){};function Z(t,e,i){function o(e){return function(i){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];s=[];for(var r=[],a=0;a<o.length;a++){var c=o[a];if(c instanceof Element&&n(c)&&r.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)s.push(c);else s.push(c)}for(e.apply(this,o),o=0;o<r.length;o++)d(t,r[o]);if(n(this))for(o=0;o<s.length;o++)(r=s[o])instanceof Element&&l(t,r)}}void 0!==i.g&&(e.prepend=o(i.g)),void 0!==i.append&&(e.append=o(i.append))}var tt,et=window.customElements;if(!et||et.forcePolyfill||"function"!=typeof et.define||"function"!=typeof et.get){var nt=new r;tt=nt,window.HTMLElement=function(){function t(){var t=this.constructor,e=tt.f.get(t);if(!e)throw Error("The custom element being constructed was not registered with `customElements`.");var n=e.constructionStack;if(0===n.length)return n=k.call(document,e.localName),Object.setPrototypeOf(n,t.prototype),n.__CE_state=1,n.__CE_definition=e,h(tt,n),n;var i=n[e=n.length-1];if(i===Y)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[e]=Y,Object.setPrototypeOf(i,t.prototype),h(tt,i),i}return t.prototype=J.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}(),function(){var t=nt;s(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructorFunction}return e=k.call(this,e),h(t,e),e}),s(Document.prototype,"importNode",function(e,n){return e=g.call(this,e,!!n),this.__CE_hasRegistry?u(t,e):c(t,e),e}),s(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var i=t.a.get(n);if(i)return new i.constructorFunction}return e=v.call(this,e,n),h(t,e),e}),Z(t,Document.prototype,{g:C,append:x})}(),Z(nt,DocumentFragment.prototype,{g:E,append:_}),function(){function t(t,i){Object.defineProperty(t,"textContent",{enumerable:i.enumerable,configurable:!0,get:i.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)i.set.call(this,t);else{var o=void 0;if(this.firstChild){var s=this.childNodes,r=s.length;if(0<r&&n(this)){o=Array(r);for(var a=0;a<r;a++)o[a]=s[a]}}if(i.set.call(this,t),o)for(t=0;t<o.length;t++)d(e,o[t])}}})}var e=nt;s(Node.prototype,"insertBefore",function(t,i){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);if(t=N.call(this,t,i),n(this))for(i=0;i<o.length;i++)l(e,o[i]);return t}return o=n(t),i=N.call(this,t,i),o&&d(e,t),n(this)&&l(e,t),i}),s(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var i=Array.prototype.slice.apply(t.childNodes);if(t=A.call(this,t),n(this))for(var o=0;o<i.length;o++)l(e,i[o]);return t}return i=n(t),o=A.call(this,t),i&&d(e,t),n(this)&&l(e,t),o}),s(Node.prototype,"cloneNode",function(t){return t=S.call(this,!!t),this.ownerDocument.__CE_hasRegistry?u(e,t):c(e,t),t}),s(Node.prototype,"removeChild",function(t){var i=n(t),o=T.call(this,t);return i&&d(e,t),o}),s(Node.prototype,"replaceChild",function(t,i){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);if(t=D.call(this,t,i),n(this))for(d(e,i),i=0;i<o.length;i++)l(e,o[i]);return t}o=n(t);var s=D.call(this,t,i),r=n(this);return r&&d(e,i),o&&d(e,t),r&&l(e,t),s}),L&&L.get?t(Node.prototype,L):a(e,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)T.call(this,this.firstChild);A.call(this,document.createTextNode(t))}})})}(),function(){function t(t,e){Object.defineProperty(t,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(t){var i=this,s=void 0;if(n(this)&&(s=[],o(this,function(t){t!==i&&s.push(t)})),e.set.call(this,t),s)for(var a=0;a<s.length;a++){var h=s[a];1===h.__CE_state&&r.disconnectedCallback(h)}return this.ownerDocument.__CE_hasRegistry?u(r,this):c(r,this),t}})}function e(t,e){s(t,"insertAdjacentElement",function(t,i){var o=n(i);return t=e.call(this,t,i),o&&d(r,i),n(t)&&l(r,i),t})}function i(t,e){function n(t,e){for(var n=[];t!==e;t=t.nextSibling)n.push(t);for(e=0;e<n.length;e++)u(r,n[e])}s(t,"insertAdjacentHTML",function(t,i){if("beforebegin"===(t=t.toLowerCase())){var o=this.previousSibling;e.call(this,t,i),n(o||this.parentNode.firstChild,this)}else if("afterbegin"===t)o=this.firstChild,e.call(this,t,i),n(this.firstChild,o);else if("beforeend"===t)o=this.lastChild,e.call(this,t,i),n(o||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");o=this.nextSibling,e.call(this,t,i),n(this.nextSibling,o)}})}var r=nt;P&&s(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=P.call(this,t)}),j&&j.get?t(Element.prototype,j):V&&V.get?t(HTMLElement.prototype,V):a(r,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return S.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,i=v.call(document,this.namespaceURI,this.localName);for(i.innerHTML=t;0<n.childNodes.length;)T.call(n,n.childNodes[0]);for(t=e?i.content:i;0<t.childNodes.length;)A.call(n,t.childNodes[0])}})}),s(Element.prototype,"setAttribute",function(t,e){if(1!==this.__CE_state)return q.call(this,t,e);var n=M.call(this,t);q.call(this,t,e),e=M.call(this,t),r.attributeChangedCallback(this,t,n,e,null)}),s(Element.prototype,"setAttributeNS",function(t,e,n){if(1!==this.__CE_state)return O.call(this,t,e,n);var i=F.call(this,t,e);O.call(this,t,e,n),n=F.call(this,t,e),r.attributeChangedCallback(this,e,i,n,t)}),s(Element.prototype,"removeAttribute",function(t){if(1!==this.__CE_state)return R.call(this,t);var e=M.call(this,t);R.call(this,t),null!==e&&r.attributeChangedCallback(this,t,e,null,null)}),s(Element.prototype,"removeAttributeNS",function(t,e){if(1!==this.__CE_state)return K.call(this,t,e);var n=F.call(this,t,e);K.call(this,t,e);var i=F.call(this,t,e);n!==i&&r.attributeChangedCallback(this,e,n,i,t)}),G?e(HTMLElement.prototype,G):H?e(Element.prototype,H):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),Q?i(HTMLElement.prototype,Q):B?i(Element.prototype,B):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Z(r,Element.prototype,{g:I,append:$}),function(t){function e(e){return function(i){for(var o=[],s=0;s<arguments.length;++s)o[s]=arguments[s];s=[];for(var r=[],a=0;a<o.length;a++){var c=o[a];if(c instanceof Element&&n(c)&&r.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)s.push(c);else s.push(c)}for(e.apply(this,o),o=0;o<r.length;o++)d(t,r[o]);if(n(this))for(o=0;o<s.length;o++)(r=s[o])instanceof Element&&l(t,r)}}var i=Element.prototype;void 0!==z&&(i.before=e(z)),void 0!==z&&(i.after=e(U)),void 0!==X&&s(i,"replaceWith",function(e){for(var i=[],o=0;o<arguments.length;++o)i[o]=arguments[o];o=[];for(var s=[],r=0;r<i.length;r++){var a=i[r];if(a instanceof Element&&n(a)&&s.push(a),a instanceof DocumentFragment)for(a=a.firstChild;a;a=a.nextSibling)o.push(a);else o.push(a)}for(r=n(this),X.apply(this,i),i=0;i<s.length;i++)d(t,s[i]);if(r)for(d(t,this),i=0;i<o.length;i++)(s=o[i])instanceof Element&&l(t,s)}),void 0!==W&&s(i,"remove",function(){var e=n(this);W.call(this),e&&d(t,this)})}(r)}(),document.__CE_hasRegistry=!0;var it=new b(nt);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:it})}}).call(self);class r{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbp=new Promise((n,i)=>{const o=indexedDB.open(t,1);o.onerror=(()=>i(o.error)),o.onsuccess=(()=>n(o.result)),o.onupgradeneeded=(()=>{o.result.createObjectStore(e)})})}_withIDBStore(t,e){return this._dbp.then(n=>new Promise((i,o)=>{const s=n.transaction(this.storeName,t);s.oncomplete=(()=>i()),s.onabort=s.onerror=(()=>o(s.error)),e(s.objectStore(this.storeName))}))}}function a(){return n||(n=new r),n}function c(t,e,n=a()){return n._withIDBStore("readwrite",n=>{n.put(e,t)})}function h(t,e=a()){return e._withIDBStore("readwrite",e=>{e.delete(t)})}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,()=>Math.floor(16*Math.random()).toString(16))}const d={store:new r("flowy","tasks"),task(t){return function(t,e=a()){let n;return e._withIDBStore("readonly",e=>{n=e.get(t)}).then(()=>n.result)}(t,this.store)},async create(t,e=""){const n=l(),i={id:n,text:e,checked:!1,pinned:!1,collapsed:!1,children:[]};return t.children.push(n),await Promise.all([c(t.id,t,this.store),c(n,i,this.store)]),i},async createBefore(t,e,n=""){const i=l(),o={id:i,text:n,checked:!1,pinned:!1,collapsed:!1,children:[]},s=t.children.indexOf(e.id);return t.children.splice(s,0,i),await Promise.all([c(t.id,t,this.store),c(i,o,this.store)]),o},update(t){return c(t.id,t,this.store)},remove:t=>h(t.id),async initialize(){const t={id:"root",text:" ",checked:!1,pinned:!1,collapsed:!1,children:[]};return await c("root",t,this.store),await this.create(t,"first item"),t}};async function u(){const t=await function(t=a()){const e=[];return t._withIDBStore("readonly",t=>{(t.openKeyCursor||t.openCursor).call(t).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}}).then(()=>e)}(d.store);await Promise.all(t.map(t=>h(t,d.store)))}const p={apiKey:null,url:null,create:async(t,e)=>await d.create(t,e),createBefore:async(t,e,n)=>await d.createBefore(t,e,n),task:async t=>await d.task(t),async update(t){await d.update(t),this.url&&await this._updateRemoteSingle(t)},async _updateRemoteSingle(t){const e=document.getElementById(t.id);e.unsynced=!0;try{await fetch(`${this.url}/set`,{body:JSON.stringify(t),headers:{"Content-Type":"application/json","X-API-Key":this.apiKey},method:"POST"}),e.unsynced=!1}catch(t){console.error(t)}},async remove(t){if(await d.remove(t),!this.url)return;const e=document.getElementById(t.id);e&&(e.unsynced=!0);try{await fetch(`${this.url}/${t.id}`,{headers:{"Content-Type":"application/json","X-API-Key":this.apiKey},method:"DELETE"}),e&&(e.unsynced=!1)}catch(t){console.error(t)}},initialize:async()=>await d.initialize(),async resyncLocal(t,e){this.url=t,this.apiKey=e,f(t,e);try{const t=await fetch(`${this.url}/root`,{headers:{Accept:"application/json","X-API-Key":this.apiKey}}),e=await t.json();if(!e||!e.children||!e.children.length)return;await u(),await this._updateLocal(e)}catch(t){console.error(t)}},async _updateLocal(t){t.children||(t.children=[]),d.update(t),await Promise.all(t.children.map(async t=>{const e=await fetch(`${this.url}/${t}`,{headers:{Accept:"application/json","X-API-Key":this.apiKey}}),n=await e.json();await this._updateLocal(n)}))},async resyncRemote(t,e){this.url=t,this.apiKey=e,f(t,e);const n=await d.task("root");await this._updateRemote(n)},async _updateRemote(t){await this._updateRemoteSingle(t),await Promise.all(t.children.map(async t=>{await this._updateRemote(await d.task(t))}))}};function f(t,e){window.localStorage.setItem("url",t),window.localStorage.setItem("apiKey",e),document.querySelector("#status").classList.remove("hidden"),document.querySelector("#status a").innerText=t,document.querySelector("#status a").href=t}p.url=window.localStorage.getItem("url"),p.apiKey=window.localStorage.getItem("apiKey"),p.url&&p.apiKey&&f(p.url,p.apiKey);class m extends HTMLElement{constructor(t,e=!1){super(),this.onChange=(()=>{this.input.checked?this.setAttribute("checked","true"):this.removeAttribute("checked")});const n=document.querySelector("#checkbox");this.node=document.importNode(n.content,!0),this.appendChild(this.node),this.input=this.querySelector("input"),this.input.id=`checkbox-${t}`,this.querySelector("label").setAttribute("for",`checkbox-${t}`),this.checked=e,this.input.addEventListener("change",this.onChange)}get checked(){return this.hasAttribute("checked")}set checked(t){t?this.setAttribute("checked","true"):this.removeAttribute("checked"),this.input.checked=t}}window.customElements.define("x-checkbox",m);class y extends HTMLElement{constructor(t){super(),this.onLinkClick=(async t=>{t.preventDefault(),await this.task.togglePinned(),this.remove()}),this.onKeyPress=(async t=>{if(t.shiftKey)switch(t.keyCode){case 9:case 38:case 40:return void t.preventDefault()}if(t.ctrlKey)switch(t.keyCode){case 8:case 13:case 38:case 40:return void t.preventDefault()}switch(t.keyCode){case 9:case 13:case 38:case 40:return void t.preventDefault()}}),this.onKeyUp=(async()=>{await this.task.updateText(this.tasktext.innerText)}),this.onStatusChange=(async()=>{await Promise.all([this.task.toggleChecked()]),this.remove()}),this.task=t;const e=document.querySelector("#task"),n=document.importNode(e.content,!0);this.appendChild(n),this.id=`pinned-${t.id}`,this.checkbox=new m(this.id),this.tasktext=document.createElement("span"),this.tasktext.innerText=t.textElement.innerText,this.tasktext.setAttribute("contenteditable","true");const i=this.querySelector("header");i.appendChild(this.checkbox),i.appendChild(this.tasktext),this.querySelector("header > a:nth-child(2)").addEventListener("click",this.onLinkClick),this.tasktext.addEventListener("keypress",this.onKeyPress),this.tasktext.addEventListener("keyup",this.onKeyUp),this.checkbox.addEventListener("change",this.onStatusChange)}updateLocation(){const t=this.querySelector("footer");for(;t.hasChildNodes();)t.removeChild(t.lastChild);const e=[];for(let t=this.task.parent();t&&"root"!==t.id;t=t.parent())e.push(t.textElement.innerText);for(const n of e.reverse()){const e=document.createElement("div");e.innerHTML=n,t.appendChild(e)}}connectedCallback(){this.task.isConnected&&this.updateLocation()}}window.customElements.define("x-pin",y);const w=5e3;class b extends HTMLElement{constructor(n){super(),this.onCheckboxChange=(async t=>{t.target.checked!==this.checked&&await this.toggleChecked()}),this.verifyChecked=(async()=>{const t=this.subtasks.querySelector("x-task:not([checked])");(this.checked&&t||!this.checked&&!t)&&await this.toggleChecked()}),this.addSubtaskBefore=((t,e)=>{this.expanded=!0,t.remove(),this.subtasks.insertBefore(t,e)}),this.addSubtaskAfter=((t,e)=>{this.expanded=!0,t.remove();const n=e.nextSibling;n?this.subtasks.insertBefore(t,n):this.subtasks.appendChild(t)}),this.onRoot=(n=>{n.preventDefault(),function(n){const o=[];for(let e=n.parent();e!==t;e=e.parent())o.push(i(e)),e.ancestor=!0;o.push(i(t));for(const t of o.reverse())e.appendChild(t);t.ancestor=!0,t.root=!1,n.root=!0,t=n}(this)}),this.onLinkClick=(t=>{t.preventDefault(),this.hasSubtasks?this.toggleExpanded():this.togglePinned()}),this.onTryResync=(async t=>{t.preventDefault(),await p.update(this.task)}),this.onKeyPress=(async t=>{if(t.shiftKey)switch(t.keyCode){case 9:t.preventDefault(),await this.unshift();break;case 38:t.preventDefault(),await this.moveUp();break;case 40:t.preventDefault(),await this.moveDown()}else if(t.ctrlKey)switch(t.keyCode){case 8:t.preventDefault(),await this.drop();break;case 13:t.preventDefault(),await this.toggleChecked();break;case 38:t.preventDefault(),this.expanded=!1;break;case 40:t.preventDefault(),this.expanded=!0}else switch(t.keyCode){case 9:t.preventDefault(),await this.shift();break;case 13:t.preventDefault(),await this.addSibling();break;case 38:t.preventDefault(),await this.moveFocusUp();break;case 40:t.preventDefault(),await this.moveFocusDown()}}),this.removeSubtask=(async t=>{this.task.children=this.task.children.filter(e=>e!==t),0===this.task.children.length&&(this.hasSubtasks=!1,this.expanded=!1),await p.update(this.task)}),this.drop=(async()=>{const t=this.parent();this.remove(),await Promise.all([t.removeSubtask(this.id),p.remove(this.task)])}),this.addSibling=(async()=>{if(this.hasAttribute("root"))return;const t=this.parent(),e=this.nextSibling;if(e){const n=await p.createBefore(t.task,e.task),i=new b(n);t.addSubtaskBefore(i,e),i.tasktext.focus()}else{const e=await p.create(t.task),n=new b(e);t.addSubtask(n),n.tasktext.focus()}}),this.shift=(async()=>{if(this.hasAttribute("root"))return;const t=this.previousSibling;if(!t)return;const e=this.getCursorPosition();this.parent().removeSubtask(this.task.id),t.task.children.push(this.task.id),await p.update(t.task),t.addSubtask(this),this.tasktext.focus(),this.setCursorPosition(e)}),this.unshift=(async()=>{if(this.hasAttribute("root"))return;const t=this.parent(),e=t.parent();if(!(e&&e instanceof b))return;const n=this.getCursorPosition(),i=t.nextSibling;if(i){const t=e.task.children.indexOf(i.id);e.task.children.splice(t,0,this.id),e.addSubtaskBefore(this,i)}else e.task.children.push(this.id),e.addSubtask(this);await Promise.all([t.removeSubtask(this.task.id),p.update(e.task)]),this.tasktext.focus(),this.setCursorPosition(n)}),this.updateTextCache=(async()=>{this.task.text=this.tasktext.innerText,this.task.text?await p.update(this.task):await this.drop()}),this.onFocusText=(()=>{setTimeout(async()=>{this.tasktext===document.activeElement&&(this.task.text!==this.tasktext.innerText&&(this.task.text=this.tasktext.innerText,await p.update(this.task)),this.tasktext===document.activeElement&&this.onFocusText())},w)}),this.moveUp=(async()=>{const t=this.previousSibling;if(!t)return;const e=this.parent();if(!e)return;const n=this.getCursorPosition(),i=e.task.children.indexOf(t.id);e.task.children[i]=this.id,e.task.children[i+1]=t.id,e.addSubtaskBefore(this,t),this.tasktext.focus(),this.setCursorPosition(n),await p.update(e.task)}),this.moveDown=(async()=>{const t=this.nextSibling;if(!t)return;const e=this.parent();if(!e)return;const n=this.getCursorPosition(),i=e.task.children.indexOf(t.id);e.task.children[i]=this.id,e.task.children[i-1]=t.id,e.addSubtaskAfter(this,t),this.tasktext.focus(),this.setCursorPosition(n),await p.update(e.task)}),this.moveFocusUp=(async()=>{const t=this.previousSibling;if(t)return void this.moveFocus(t);const e=this.parent();e.root||this.moveFocus(e)}),this.moveFocusDown=(async()=>{const t=this.nextSibling;t&&this.moveFocus(t)}),this.moveFocus=(t=>{const e=this.getCursorPosition();this.tasktext.blur(),t.tasktext.focus(),t.setCursorPosition(e)}),this.getCursorPosition=(()=>{const t=window.getSelection();if(t.rangeCount){const e=t.getRangeAt(0);if(e.commonAncestorContainer.parentNode===this.tasktext)return e.endOffset}return 0}),this.setCursorPosition=(t=>{if(!this.tasktext.childNodes||!this.tasktext.childNodes.length)return;const e=document.createRange();e.setStart(this.tasktext.childNodes[0],t),e.collapse(!0);const n=window.getSelection();n.removeAllRanges(),n.addRange(e)}),this.task=n;const o=document.querySelector("#task"),s=document.importNode(o.content,!0);this.appendChild(s),this.id=n.id,this.subtasks=this.querySelector("footer"),this.checkbox=new m(n.id),this.checked=n.checked,this.tasktext=document.createElement("span"),n.text&&(this.tasktext.innerText=n.text),this.tasktext.setAttribute("contenteditable","true"),this.isPinned=n.pinned;const r=this.querySelector("header");r.appendChild(this.checkbox),r.appendChild(this.tasktext),this.querySelector("header > a:nth-child(1)").addEventListener("click",this.onRoot),this.querySelector("header > a:nth-child(2)").addEventListener("click",this.onLinkClick),this.querySelector("header > a:nth-child(3)").addEventListener("click",this.onTryResync),this.tasktext.addEventListener("keypress",this.onKeyPress),this.tasktext.addEventListener("blur",this.updateTextCache),this.tasktext.addEventListener("focus",this.onFocusText),this.checkbox.addEventListener("change",this.onCheckboxChange)}connectedCallback(){this.isPinned&&document.querySelector(`#pinned-${this.id}`).updateLocation()}disconnectedCallback(){if(this.isPinned){document.querySelector(`#pinned-${this.id}`).remove()}}get expanded(){return this.hasAttribute("expanded")}set expanded(t){t?(this.setAttribute("expanded","true"),this.task.collapsed=!1):(this.removeAttribute("expanded"),this.task.collapsed=!0)}get hasSubtasks(){return this.hasAttribute("has-subtasks")}set hasSubtasks(t){t?(this.setAttribute("has-subtasks","true"),this.isPinned=!1):this.removeAttribute("has-subtasks")}get root(){return this.hasAttribute("root")}set root(t){t?this.setAttribute("root","true"):this.removeAttribute("root")}get ancestor(){return this.hasAttribute("ancestor")}set ancestor(t){t?this.setAttribute("ancestor","true"):this.removeAttribute("ancestor")}get isPinned(){return this.hasAttribute("is-pinned")}set isPinned(t){if(t)this.setAttribute("is-pinned","true"),this.task.pinned=!0,document.querySelector("#pins").appendChild(new y(this));else{this.removeAttribute("is-pinned"),this.task.pinned=!1;const t=document.querySelector(`#pinned-${this.id}`);t&&t.remove()}}get checked(){return this.hasAttribute("checked")}set checked(t){if(t?(this.setAttribute("checked","true"),this.isPinned=!1):this.removeAttribute("checked"),this.checkbox.checked=t,this.isConnected){const t=this.parent();t&&t.verifyChecked()}}get unsynced(){return this.hasAttribute("unsynced")}set unsynced(t){t?this.setAttribute("unsynced","true"):this.removeAttribute("unsynced")}get textElement(){return this.tasktext}addSubtask(t){t.remove(),this.subtasks.appendChild(t),this.expanded=!0,this.hasSubtasks=!0}freezeText(){this.tasktext.removeAttribute("contenteditable")}async updateText(t){this.tasktext.innerText=t,await this.updateTextCache()}parent(){const t=this.parentElement.parentElement;return t instanceof b?t:null}async toggleChecked(){this.checked=!this.checked,this.task.checked=this.checked,await p.update(this.task)}async toggleExpanded(){this.expanded=!this.expanded,await p.update(this.task)}async togglePinned(){this.isPinned=!this.isPinned,await p.update(this.task)}}function k(t){t.root=!0,t.freezeText(),s(t),document.querySelector("#work").appendChild(t)}async function v(t){const e=await p.task(t),n=new b(e),i=e.collapsed,o=await Promise.all(e.children.map(t=>v(t)));for(const t of o)n.addSubtask(t);return i&&n.removeAttribute("expanded"),n}function g(t){t.preventDefault();const e=this.parentElement;e.hasAttribute("data-open")?e.removeAttribute("data-open"):e.setAttribute("data-open","true")}window.customElements.define("x-task",b),navigator.serviceWorker.register("sw.js").then(()=>console.log("service worker registered")).catch(t=>console.error("service worker registration error",t)),window.addEventListener("DOMContentLoaded",async function(){await p.task("root")||await p.initialize();let t=await v("root");k(t),document.querySelector("aside > a").addEventListener("click",g),document.querySelector("#storage a").addEventListener("click",g),document.querySelector("#shortcuts a").addEventListener("click",g),document.querySelector("#about a").addEventListener("click",g);const e=document.querySelector("#storage form");e.addEventListener("submit",async n=>{n.preventDefault();const i=e[0].value,o=e[1].value;e[3].checked?(await p.resyncLocal(i,o),t.remove(),k(t=await v("root"))):await p.resyncRemote(i,o),document.querySelector("aside").removeAttribute("data-open")})})}();
