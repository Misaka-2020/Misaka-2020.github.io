if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const b=e=>a(e,s),o={module:{uri:s},exports:d,require:b};i[s]=Promise.all(r.map((e=>o[e]||b(e)))).then((e=>(c(...e),d)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"dfc7cb3b2619a6b04b6dc8bba323b13b"},{url:"about/",revision:"277ce881a150884c1b8191e8a47a474f"},{url:"archives/2022/04/",revision:"2809ac9e9e7d968ac53a0aeaf1ea4c11"},{url:"archives/2022/05/",revision:"fe12ed69b34a42afe2ff33b5711aa75c"},{url:"archives/2022/06/",revision:"84265d27fd8d615dfc646174649ce166"},{url:"archives/2022/07/",revision:"693b84795bc7c5ad8778891d517f4478"},{url:"archives/2022/",revision:"9d28f06642459a53aef5aeb1248f7b33"},{url:"archives/2022/page/2/",revision:"eaa059474af4a8db2578eb9bd3415dc7"},{url:"archives/",revision:"1334b631f8bb4eaf4cc38f4189395658"},{url:"archives/page/2/",revision:"2a458b0d1e5ba7223be46b86d8b11f86"},{url:"artitalk/",revision:"4b6554a53f92e097156afcd5149e4817"},{url:"categories/",revision:"3eb183983d2fb8951cf059430e4ad7f1"},{url:"categories/今天来点什么/",revision:"6bf2830eefddb3563b243e8f1457eec7"},{url:"categories/学习使我快乐/",revision:"0153f4ca4cce2354855ebc5f4462415a"},{url:"categories/建站纪念/",revision:"d0d44a189abad264a0110c2142cccc31"},{url:"categories/玩机技巧/",revision:"e97473f5c492431684a2ac4b0c22f076"},{url:"categories/瞎吉儿优化/",revision:"37130883b2627822753619e9606650bc"},{url:"categories/阿伟又在打电动/",revision:"80841f8ef3d4cb544e52c3d48c720bc4"},{url:"css/index.css",revision:"53ca1b38d9899866ce284e9aa4f29c54"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"ed2b0224a5cbce401608eb41a19dd2c8"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"436a846299e300d4dc1e6e47bc8ba57f"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/",revision:"255de02aa368bf4410b8b3f43548b590"},{url:"posts/10802.html",revision:"aac14c4fb981caec4887b4368885434f"},{url:"posts/23251.html",revision:"827a450febd6e4c7e0400f806a7259d8"},{url:"posts/28163.html",revision:"88ff0aca03d16d01200a86eb8a95024a"},{url:"posts/30523.html",revision:"63e2483c081f09e9bdbfb72201363d86"},{url:"posts/42791.html",revision:"7d4e92e8bd09eabb5a81f705359af24c"},{url:"posts/43502.html",revision:"9286b3cd971762c4898aec5bbbec0653"},{url:"posts/47697.html",revision:"0059e9d489b9909122dbe13905788618"},{url:"posts/481.html",revision:"71a76eb685442470f8ee4ccb9c16b0de"},{url:"posts/48793.html",revision:"0c927b9cee4b60e26c0528144e03c4ed"},{url:"posts/62339.html",revision:"4becbd52cd2b23f6a545b483725ec22a"},{url:"posts/64981.html",revision:"da675c2ee44b8ed42943282ecc0905a6"},{url:"tags/Fontmin/",revision:"e0e2bb41dc171ee24910b3b0050ee4a7"},{url:"tags/",revision:"eea9b11acd1bf972dec8242af8594e7c"},{url:"tags/Python/",revision:"a9eea5a95961bf1e2e2c60442fceb823"},{url:"tags/Telegram/",revision:"27ed5bd83824ce1038b19fa2f57ffe02"},{url:"tags/Windows/",revision:"0d2989f27a6fc3219bca584759192e03"},{url:"tags/厨艺/",revision:"0e692765213c956799ff64e719722ead"},{url:"tags/双拼/",revision:"6af9bb4b1a8d9bd0fa61eebdfe9cecc4"},{url:"tags/吃货/",revision:"ab1907879bde0f18690136d6cc72de37"},{url:"tags/学习/",revision:"34dc6365de8a360a00fb882e92417f6d"},{url:"tags/建站纪念/",revision:"d8ae22720178d45f7fbcf69763d48b88"},{url:"tags/打卡/",revision:"b3f28a661360ffa3e3b461a796c462e4"},{url:"tags/日语/",revision:"653eb1abbdc470f428c29a098acf9bfe"},{url:"tags/游戏/",revision:"f24f25b57c329e1c39ac0f0a2351b1a3"},{url:"tags/猫咪大战争/",revision:"45061c4c1aa3d4a7eb2c544874124b8d"},{url:"tags/生活/",revision:"13617895a5feedfe2cbd53e58c0091ca"},{url:"tags/经验/",revision:"cc1a08415e209cfbef18f80fcac5076b"},{url:"tags/食堂/",revision:"2f4abccb95c001345d535a3efcf11285"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));