if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>r(e,d),b={module:{uri:d},exports:s,require:o};i[d]=Promise.all(c.map((e=>b[e]||o(e)))).then((e=>(a(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b2b488cee25de5e3e2baafa10a340855"},{url:"about/",revision:"cdbd2ef6da59cf27d720478eca60b015"},{url:"archives/2022/04/",revision:"b9e74c479cf98dc65aff243e192c7328"},{url:"archives/2022/05/",revision:"d091f869bfc88992f7739d9eef3fc808"},{url:"archives/2022/06/",revision:"f06182654dceb5c9bf6c46631a6b5b5b"},{url:"archives/2022/07/",revision:"2b5bde4c742dd4f16a01229970faeeb7"},{url:"archives/2022/",revision:"0e3196df3164ef4ec52d1ec59133441a"},{url:"archives/2022/page/2/",revision:"d3aca39fdc6bdc5962837a91ad9d4b5c"},{url:"archives/",revision:"0f0783f0f69690d6a5e42f89d0f85d5a"},{url:"archives/page/2/",revision:"983c14af6bbe4d7f752356f81b2f0fb6"},{url:"categories/",revision:"abdfea23b99c09e02d6470d48a91cab1"},{url:"categories/今天来点什么/",revision:"7351380619223bb7187b3e941d9463c8"},{url:"categories/学习使我快乐/",revision:"8ddf8c1c3bd914e116e56c5364058734"},{url:"categories/建站纪念/",revision:"310a4c83a8b3079d083a403b89d5e1ec"},{url:"categories/玩机技巧/",revision:"bbcaf6a3400c1b6fe3d772c7510c0645"},{url:"categories/瞎吉儿优化/",revision:"9d98fb5a4c68b853e904ecdd609db19c"},{url:"categories/阿伟又在打电动/",revision:"07cf2ae48bf76a6e17937ca46b55776c"},{url:"css/index.css",revision:"53ca1b38d9899866ce284e9aa4f29c54"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"9406d4459028631bb6b05f8868ccf556"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"5af01360d09b8e618b9dc8624ae17a70"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/",revision:"ab97f2b34eb55ac6ca6e7bebfbe3ebf3"},{url:"posts/10802.html",revision:"e946c76255927d0c656b7dd2dff16218"},{url:"posts/23251.html",revision:"0c35ea458f6a62e109afb9bfd7039457"},{url:"posts/28163.html",revision:"2f8073179b7f9bcf4768ee49848816e5"},{url:"posts/30523.html",revision:"c4a60d1e32d4329c16bf07eaa51ba111"},{url:"posts/42791.html",revision:"24894fd6c5d213adb8f5a997c3a5f604"},{url:"posts/43502.html",revision:"9b70d72142f4b95e278fcac94bb025cd"},{url:"posts/47697.html",revision:"00d63e2f52ce7effc827d02f2042702d"},{url:"posts/481.html",revision:"4a1d724173316e2c0a3afeb3b5a98f29"},{url:"posts/48793.html",revision:"b8acd8f7ff1c8721b9651e74dbb2927a"},{url:"posts/62339.html",revision:"462c5e25671f9de6e0c3cf3905d60208"},{url:"posts/64981.html",revision:"8f4954dac7c6374b6cc7187a59489528"},{url:"tags/Fontmin/",revision:"f0696ec5af201898ef7e37560744c4c9"},{url:"tags/",revision:"6e8035c3d87d00c8e758253de6141966"},{url:"tags/Python/",revision:"935e3a4ac2630f7c8e20494414e46720"},{url:"tags/Telegram/",revision:"4c6eb0b5a7716f1486acf3af92f040fa"},{url:"tags/Windows/",revision:"579d0c967252b1e9f3130ec8a501e813"},{url:"tags/厨艺/",revision:"2824368287ab2dea4a239e87630ef2d9"},{url:"tags/双拼/",revision:"578afa41eb184506e417c2d74eec3288"},{url:"tags/吃货/",revision:"3750aa9b7f4dad329e22473f9fc23b8c"},{url:"tags/学习/",revision:"fc511613d156bd4c7b8271cc88e9b57f"},{url:"tags/建站纪念/",revision:"72d2e41c879464a49c39c3597186a162"},{url:"tags/打卡/",revision:"03278befca6086fb55d050a286bf97a1"},{url:"tags/日语/",revision:"73c9bad417db68ee30e431c5118c7645"},{url:"tags/游戏/",revision:"40cf56007383dd13b35b66c6a9d28835"},{url:"tags/猫咪大战争/",revision:"171054fd56ae76f7ee968ff31ff5c25e"},{url:"tags/生活/",revision:"a5f6cb881971e482321377b207636d89"},{url:"tags/经验/",revision:"bb5b458995bb9f714ed53ccf925aac23"},{url:"tags/食堂/",revision:"5b1e9697a5ca55534d4c2721e8ce8d75"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));