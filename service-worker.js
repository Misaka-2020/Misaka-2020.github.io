if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const o=e=>a(e,d),b={module:{uri:d},exports:s,require:o};i[d]=Promise.all(c.map((e=>b[e]||o(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9236245023aa3aa084aa7ac3bee2e680"},{url:"about/",revision:"470b4784147900ccb1c3d6b178efba34"},{url:"archives/2022/04/",revision:"66373feb740a933e781ef27a83b857cc"},{url:"archives/2022/05/",revision:"4c0c22409b96c054d8322e21eafc4187"},{url:"archives/2022/06/",revision:"72a0762d1daf240175769b80375256cf"},{url:"archives/2022/07/",revision:"aab6baabf187dec269602b4f1e92e6eb"},{url:"archives/2022/",revision:"defaefc73d16b5e0ff4ac69ced1dca85"},{url:"archives/2022/page/2/",revision:"25de3a4cb9accbaecac624d42d1ebd0a"},{url:"archives/",revision:"6fd090347ef8d95d29ad397b4a55473a"},{url:"archives/page/2/",revision:"8ecdda4c938607203a4d156899f56525"},{url:"artitalk/",revision:"c98e21e5bae6cc64af2f3d39158b63e6"},{url:"categories/",revision:"362349bf9c7576e6d9171dba0bc33bf4"},{url:"categories/今天来点什么/",revision:"b230fa92b332931201e834dd89e8d14c"},{url:"categories/学习使我快乐/",revision:"935ba2d5a94f324cd1dfe82c61b37fac"},{url:"categories/建站纪念/",revision:"3fcaf6a037def85ec63177b4bbf65eb3"},{url:"categories/玩机技巧/",revision:"6d0a217aa90e94cecea06fece36c273f"},{url:"categories/瞎吉儿优化/",revision:"c3f28df735fb7c5a23220d3866f029f9"},{url:"categories/阿伟又在打电动/",revision:"65f879f568347fa9d7376c77c2631e8d"},{url:"css/index.css",revision:"53ca1b38d9899866ce284e9aa4f29c54"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"fea6fb230481b6474f0f9ebc47815457"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"2a46a99d863c9a4c8f33eb270f39d2c1"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/",revision:"8e25dfc88856d82a6b13fdfd8367325b"},{url:"posts/10802.html",revision:"aac14c4fb981caec4887b4368885434f"},{url:"posts/23251.html",revision:"827a450febd6e4c7e0400f806a7259d8"},{url:"posts/28163.html",revision:"88ff0aca03d16d01200a86eb8a95024a"},{url:"posts/30523.html",revision:"63e2483c081f09e9bdbfb72201363d86"},{url:"posts/42791.html",revision:"7d4e92e8bd09eabb5a81f705359af24c"},{url:"posts/43502.html",revision:"9286b3cd971762c4898aec5bbbec0653"},{url:"posts/47697.html",revision:"0059e9d489b9909122dbe13905788618"},{url:"posts/481.html",revision:"71a76eb685442470f8ee4ccb9c16b0de"},{url:"posts/48793.html",revision:"0c927b9cee4b60e26c0528144e03c4ed"},{url:"posts/62339.html",revision:"4becbd52cd2b23f6a545b483725ec22a"},{url:"posts/64981.html",revision:"da675c2ee44b8ed42943282ecc0905a6"},{url:"tags/Fontmin/",revision:"71ac9920b31574e9126137a9ce0cdd8b"},{url:"tags/",revision:"af0829bd313b962f9d6c8e469eaabf4e"},{url:"tags/Python/",revision:"bbadad4b8c53c3180cdd67c64e915745"},{url:"tags/Telegram/",revision:"109f2b0da2bdae4c65f5c31e9116078f"},{url:"tags/Windows/",revision:"763c697c141541b6a7827d5a69d05dfe"},{url:"tags/厨艺/",revision:"4ba74b93d4441d1c86d2d05f5848a033"},{url:"tags/双拼/",revision:"c5ddafc8c6b5f648b20b5cef5ba8fe56"},{url:"tags/吃货/",revision:"46058dffc3c8b6b4d6236b7ab12b9261"},{url:"tags/学习/",revision:"86b1e8a567903ad78f8a9f50ea363961"},{url:"tags/建站纪念/",revision:"80a8328cded180813ed5a575d238316e"},{url:"tags/打卡/",revision:"02ac63753b6e93d1c591253aea85a9f7"},{url:"tags/日语/",revision:"897ef75f52f772bdcc7de5c1c5715f62"},{url:"tags/游戏/",revision:"4d293e6308c96e34a59ba853c2f6315c"},{url:"tags/猫咪大战争/",revision:"7d2256ca142bfc727e3631db269e9f95"},{url:"tags/生活/",revision:"3021c5117151bd634f07f4e63ca240a5"},{url:"tags/经验/",revision:"c668cce452e8f71ae2a9a46cdd52022c"},{url:"tags/食堂/",revision:"87802f0d6ace4c84f832d1ffc7d593c7"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));