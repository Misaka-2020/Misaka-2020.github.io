if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const s=e=>d(e,a),b={module:{uri:a},exports:n,require:s};i[a]=Promise.all(r.map((e=>b[e]||s(e)))).then((e=>(c(...e),n)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"fa6f76a2e5a3c6b2088437749d1f9e37"},{url:"about/index.html",revision:"d20a43353c2cb5e422f9ba077e9e1cab"},{url:"archives/2022/04/index.html",revision:"8e10adb2ba5e944caf3f9e8f1aede580"},{url:"archives/2022/05/index.html",revision:"5526f5c57e86dd381bb5db5e0468e411"},{url:"archives/2022/index.html",revision:"5267acf230dbd9321944dafed7aea141"},{url:"archives/index.html",revision:"636e8d0bd23f73813373584c0102fc38"},{url:"categories/index.html",revision:"8f73e3ea6c511e3d176774d87882427b"},{url:"categories/今天来点什么呢/index.html",revision:"287118e6da9f3347e8875fe73b3b4ec0"},{url:"categories/建站纪念/index.html",revision:"40597caa7de523b1776abfc2201176f9"},{url:"categories/玩机技巧/index.html",revision:"8cfecda5cae42a5eb342f0d5f562ee05"},{url:"categories/瞎吉儿优化/index.html",revision:"1a3357f4a62242df022427d2cf07f1b3"},{url:"css/index.css",revision:"736fceaceaf68fb7367857bd7f85501e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"4eb96ad5c497dba96faaa671f21c611b"},{url:"img/pwa/android-chrome-192x192.png",revision:"b83b273e6b6d7fe423c3006e0e16146a"},{url:"img/pwa/android-chrome-256x256.png",revision:"ca5df25238e948b4daa821768bfbbf0b"},{url:"img/pwa/android-chrome-36x36.png",revision:"db29c8fbb2390c6b114917ccc8a7d34a"},{url:"img/pwa/android-chrome-384x384.png",revision:"3e5b417ccccc0532f7b839ce9fbe806f"},{url:"img/pwa/android-chrome-48x48.png",revision:"5f6899af6b937f7e2e0568979782ba40"},{url:"img/pwa/android-chrome-72x72.png",revision:"00ffd4b9b4388eb3f177f694c98cacdf"},{url:"img/pwa/android-chrome-96x96.png",revision:"188c1da9afebdbb94de892a032be3c6a"},{url:"img/pwa/apple-touch-icon.png",revision:"ebbf84f4fea35b8b516afe7b69cbb354"},{url:"img/pwa/favicon-16x16.png",revision:"d2dd353033d505ae96098eaf4fbf7226"},{url:"img/pwa/favicon-32x32.png",revision:"1a1fe37aef0224030c8d0382af8d949e"},{url:"img/pwa/mstile-150x150.png",revision:"bcf1d6fa77b43bf88c18286e6a29ceab"},{url:"img/pwa/safari-pinned-tab.svg",revision:"1e0db8eb34672458a6e4d1e427936a2a"},{url:"img/webicon.png",revision:"4cf98d1c3493bdb572270b1d41d88e8e"},{url:"index.html",revision:"492f0489547b3ba867239245eec1c808"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"3444cc346cddc63cd73a1dc7ca720003"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/10802.html",revision:"0fa507b1ecaf09da323ec47016eb99bc"},{url:"posts/23251.html",revision:"0f076fb74993e0a64181fd803218c58e"},{url:"posts/28163.html",revision:"94b475ecd3c090b046ad78b060e39dd5"},{url:"posts/42791.html",revision:"89b840f06b16e8b2b14803c253c0fdca"},{url:"posts/43502.html",revision:"64bd16172a8beaf78d4166634460cdf5"},{url:"posts/481.html",revision:"5ec01e687430c8a929185dd540321e73"},{url:"posts/48793.html",revision:"306cb9fc13b3580827d5c1a99b7b0b11"},{url:"tags/Fontmin/index.html",revision:"3d506fec2e88d84b7681d757065d85f9"},{url:"tags/index.html",revision:"1bd7d2d704e9c4c1d08c29282c8e6f85"},{url:"tags/Python/index.html",revision:"073a287296d0d1ce329f86bcba1b64f7"},{url:"tags/Telegram/index.html",revision:"5d5965a6e51b3bff3459e50d900413e4"},{url:"tags/Windows/index.html",revision:"adb4e03213d8d46dc228bb4e3cc15f91"},{url:"tags/厨艺/index.html",revision:"e3e209ec61898e2d562a271ceea7aa9c"},{url:"tags/双拼/index.html",revision:"73c899a8d5217c41fd11e2e10a1e0767"},{url:"tags/吃货/index.html",revision:"f411a4484c0c78f6e9c31996b4b68aff"},{url:"tags/建站纪念/index.html",revision:"c054524c9178632c416092e7ae6d255a"},{url:"tags/生活/index.html",revision:"0b9e8c1c6415ec56d6cad66e1c5a2fad"},{url:"tags/经验/index.html",revision:"3336bf5d2b257e9a593a2bc7be4b8f64"},{url:"tags/食堂/index.html",revision:"dc6cfca365c4a3e4e10a92a63daef107"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET")}));