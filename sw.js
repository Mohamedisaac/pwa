if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),f={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>f[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-05e2840a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"318281a12f0855b88d9ab81a94ee42cc"},{url:"dictionary.json",revision:"2dff6c04d41cbc9932743aefe12ae5e7"},{url:"icons/icon-192.png",revision:"b4d60380de791c628b2a02dbf3a0c8ef"},{url:"icons/icon-512.png",revision:"ac176c31333ed03eee55501f833169b9"},{url:"index.html",revision:"21fbdf8075322887b7064180c99298a9"},{url:"manifest.json",revision:"39599592561868fad99202f2be240c40"},{url:"style.css",revision:"548073501d452270ebfee6d920983819"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
