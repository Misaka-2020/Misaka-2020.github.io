if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>r(e,c),o={module:{uri:c},exports:s,require:n};i[c]=Promise.all(a.map((e=>o[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7f2c42697fde4d789cb1544a584c154f"},{url:"about/",revision:"85f8168c26324ff29ec3f323e6201a78"},{url:"archives/2022/04/",revision:"ee5cd0dd970af472ce886fbb8d88266c"},{url:"archives/2022/05/",revision:"4977a40b0acb16295fa681358fe0170a"},{url:"archives/2022/",revision:"bf5698cbb2d1419b05d6413a131fe356"},{url:"archives/",revision:"376e8d43c24217955a5196463c408c61"},{url:"categories/",revision:"c31096d6950c1dc190c75d2560be9475"},{url:"categories/今天来点什么呢/",revision:"31a7e0e6073eaf42f330c07436a7d796"},{url:"categories/建站纪念/",revision:"a01c522879d0d5dee294dd5a91541915"},{url:"categories/玩机技巧/",revision:"9063453b79793806741ce507d8c4661b"},{url:"categories/瞎吉儿优化/",revision:"e1f9bc149b8d79a6f0405116f3b2b990"},{url:"css/index.css",revision:"736fceaceaf68fb7367857bd7f85501e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"9e401fa0aec1787cb7f63194837a1a48"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"af567f93a5504310fe16fe368a4ee89e"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"1bde6b075fc6098d8d5dd10db58a0899"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/10802.html",revision:"dc4cb384e21e26e97e0a5669ac702dae"},{url:"posts/23251.html",revision:"439222aea89ebf43959efc4d87c4dec9"},{url:"posts/28163.html",revision:"1c9834f38eb76a5fade0465bb452118d"},{url:"posts/42791.html",revision:"55ba1d94eb9ee8ee96f5806d4174b23c"},{url:"posts/43502.html",revision:"3e0267aada75f87e16fb219d87c8b7b6"},{url:"posts/481.html",revision:"9af780de0f1ae2823531fb6aadaf4f91"},{url:"posts/48793.html",revision:"322b75e54a4e503345ef94f02f821081"},{url:"tags/Fontmin/",revision:"b44b01c6499224251a713bc45f8ee600"},{url:"tags/",revision:"0839a99bebea268155bb69dcfa85dbcb"},{url:"tags/Python/",revision:"914af92f72e4169140f8788d36d47c52"},{url:"tags/Telegram/",revision:"20b4f6734f3cad062ff96091e802af35"},{url:"tags/Windows/",revision:"e5cdd4b8888fb8af082af1133b559650"},{url:"tags/厨艺/",revision:"29e5e4fdcf4bc70ae370874e33c65989"},{url:"tags/双拼/",revision:"b426e6403d30da2bf3959acf48007286"},{url:"tags/吃货/",revision:"8cb00eaa45d8c070b59f810cd7932829"},{url:"tags/建站纪念/",revision:"4bd21fb85b29088170455c1b88209490"},{url:"tags/生活/",revision:"b725dd8711545366fcb21b44e65b4ba0"},{url:"tags/经验/",revision:"4f73e175d81321e20df19d8d1823c8e9"},{url:"tags/食堂/",revision:"fa9395f0f9903c34db62d95bf01af42d"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));