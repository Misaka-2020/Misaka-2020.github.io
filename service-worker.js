if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const f=e=>a(e,c),b={module:{uri:c},exports:s,require:f};i[c]=Promise.all(r.map((e=>b[e]||f(e)))).then((e=>(d(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f9b40ebdff9bddf09a0ea7e5b8ec5207"},{url:"about/",revision:"ab3bfb8cd389f3afe7aaf2dd4178747f"},{url:"archives/2022/04/",revision:"e3a444015bd0108bf742e43bdb763fd2"},{url:"archives/2022/05/",revision:"6a91c832e4250f044e0421937d5798bc"},{url:"archives/2022/06/",revision:"c8638e5ef1aab755a4dd1b2ee28e9c47"},{url:"archives/2022/07/",revision:"a7d91f5e285b2c19f1f42a8d8a7c0447"},{url:"archives/2022/",revision:"abaebab4c5fddeb68d2461dfc3da1210"},{url:"archives/2022/page/2/",revision:"520fed9dde890082ce9ff49523e29d01"},{url:"archives/",revision:"a574a579bcc34ae93c40e591fe67d593"},{url:"archives/page/2/",revision:"e53fb93c104800748f763649e18b358b"},{url:"categories/",revision:"82ac053c9804f99887128ab725b006aa"},{url:"categories/今天来点什么/",revision:"b3709dc65ac7685501edfea61e6c93b1"},{url:"categories/学习使我快乐/",revision:"b8cf7fba224c313ef4ea4156f3bd50b6"},{url:"categories/建站纪念/",revision:"2c6b7baf425c824e09388c083587d9f6"},{url:"categories/玩机技巧/",revision:"fa7d4b9f12b1dfaf0802eb0dd47f8766"},{url:"categories/瞎吉儿优化/",revision:"4ddea34518b5164e136bb78d18168969"},{url:"categories/阿伟又在打电动/",revision:"f1adb535b702e88796ed681809aef0ec"},{url:"css/index.css",revision:"53ca1b38d9899866ce284e9aa4f29c54"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"2e7d17a4ad32fe4a0389f7c3525e5334"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"8a777a96bd07aac448c326351f4975dd"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/",revision:"5e38a53f0ac2bee811ad705c18dadbfb"},{url:"posts/10802.html",revision:"39eda9e311702012460422a3bf3f7751"},{url:"posts/23251.html",revision:"ed768b03bf374d110b3ac6805f346a24"},{url:"posts/28163.html",revision:"4743d1f253989f2a643499dff2410d04"},{url:"posts/30523.html",revision:"de195eff8cec4738c768d13789a49249"},{url:"posts/42791.html",revision:"372e3aacf61892c67eb0bf127d8b28b6"},{url:"posts/43502.html",revision:"845bd352bc0b818e59dda997fa793fd7"},{url:"posts/47697.html",revision:"e6318269015b9ece23d5cfbab7f784ff"},{url:"posts/481.html",revision:"eb8af2cbf8cf2b91b80f736dffc21622"},{url:"posts/48793.html",revision:"e8f88edcf6dfa225ae8c39268d53adf8"},{url:"posts/62339.html",revision:"b4ad2eb76f863ce1575cf6f83339f993"},{url:"posts/64981.html",revision:"a927cf6026d05f143206560fa4d9bc3d"},{url:"tags/Fontmin/",revision:"7105c609df01ce3161a44f4368f90245"},{url:"tags/",revision:"d52ac54c9284a7702503926f3ddc4423"},{url:"tags/Python/",revision:"b466e2b70c48327f0e936e5fd99a970d"},{url:"tags/Telegram/",revision:"54364eb5105b229824d465a9718e9053"},{url:"tags/Windows/",revision:"30eeaa4c2021aef46d974e18dffea605"},{url:"tags/厨艺/",revision:"9cc6200daae9e59d3eef301d86689962"},{url:"tags/双拼/",revision:"b6e2d7fe80adb8ba31c59988a73d3324"},{url:"tags/吃货/",revision:"20918f7b43c687b8dd1ebbd371aa4159"},{url:"tags/学习/",revision:"283090f4c6ade58c6f882560df5a94f0"},{url:"tags/建站纪念/",revision:"2c9db3bbd755ce70a764ba76fdf6d2df"},{url:"tags/打卡/",revision:"14ab61834e43d4d8356debea8180a4d7"},{url:"tags/日语/",revision:"8c7f4cc1426b15f08b3a2fc1f591df21"},{url:"tags/游戏/",revision:"1f535c5f0f7f18db9de159009594935c"},{url:"tags/猫咪大战争/",revision:"fbe1fe6719d0c76bf945c2eceedf2f66"},{url:"tags/生活/",revision:"39a6337093d7ab058dfb278916bd1b78"},{url:"tags/经验/",revision:"42423efa5a17f62673679a00e391c986"},{url:"tags/食堂/",revision:"656f97bcb9bd15d9d368bcf9795ca8ad"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));