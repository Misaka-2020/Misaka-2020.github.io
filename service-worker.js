if(!self.define){let e,a={};const i=(i,r)=>(i=new URL(i+".js",r).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let s={};const o=e=>i(e,d),b={module:{uri:d},exports:s,require:o};a[d]=Promise.all(r.map((e=>b[e]||o(e)))).then((e=>(c(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"daa68c5b8fcd1566aafcd0b5df4ac181"},{url:"about/",revision:"daf1400b4d357a0eb5473dedf886321c"},{url:"archives/2022/04/",revision:"a2221f0043352ba408cc158c571db266"},{url:"archives/2022/05/",revision:"868f92247a17a5ec05e820454d7dca35"},{url:"archives/2022/06/",revision:"fb133c80de7c1ca287bd0a9318b223da"},{url:"archives/2022/07/",revision:"fd6f417861712fa7fb9554ea1a9df5e0"},{url:"archives/2022/",revision:"48f338d2f6646bb04dd0aa907e2b1265"},{url:"archives/2022/page/2/",revision:"8976de9e6e6579c2ded5a2365d903d1f"},{url:"archives/",revision:"9fcea7f97ad18ced2a952395871e4f5e"},{url:"archives/page/2/",revision:"976a9fef1a2126b4ef3cea71ca1d9cf5"},{url:"categories/",revision:"d0873636dfa2f57d5539cde3fe09a793"},{url:"categories/今天来点什么/",revision:"d189369f51cbbbb6a63871a965f29a25"},{url:"categories/学习使我快乐/",revision:"75d2c1ef97c735092c1ad116fb5bb12d"},{url:"categories/建站纪念/",revision:"d90e06c072761834039fa26b9ca432c1"},{url:"categories/玩机技巧/",revision:"812a42c54f2a7c56abc4238cc2bfd0f1"},{url:"categories/瞎吉儿优化/",revision:"79fe6dfa46535e0b85d9ae3a4ab93a73"},{url:"categories/阿伟又在打电动/",revision:"1b791534a8ee36f832dcb6d7fffbee11"},{url:"css/index.css",revision:"53ca1b38d9899866ce284e9aa4f29c54"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"6fd6cad9cca4aa76b65c3a056bdc2ff5"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"5aa9cd1f925cafa69b582f857bb43c08"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/",revision:"c061d7088c39e3a9973164cc06115407"},{url:"posts/10802.html",revision:"ee7299fc672fad4484121c2f8b414122"},{url:"posts/23251.html",revision:"0074716fc5d12e4b54f6a5234b77d34e"},{url:"posts/28163.html",revision:"85fbb102343f17041f10450713e23c70"},{url:"posts/30523.html",revision:"d31c109c561c86dbf318d6bec9dd73d1"},{url:"posts/42791.html",revision:"aad85d83ed4d06f20ee40e985f20dd14"},{url:"posts/43502.html",revision:"4f7b3be6417167bcd7efa3f165597649"},{url:"posts/47697.html",revision:"5f6f8c3029638626acb15905a3554f4d"},{url:"posts/481.html",revision:"0e88b9436e74a86cc0e66215ac31e05f"},{url:"posts/48793.html",revision:"22ccbc70ce1dd9bc2b2935c5ff867bfa"},{url:"posts/62339.html",revision:"ebbdf528168e935068024ba0aff70b5c"},{url:"posts/64981.html",revision:"b4a809204f8c8fc032de713147a43557"},{url:"tags/Fontmin/",revision:"7272adfa830d654ab32142b01ba86361"},{url:"tags/",revision:"eb29bae509fd7afa0acfb550c1c18ce1"},{url:"tags/Python/",revision:"11e32a3e0ee78b198d7b6ec5acd9855b"},{url:"tags/Telegram/",revision:"f35f9a09bb7662cc5d016cdc7f7449b1"},{url:"tags/Windows/",revision:"2ad85569645d272e1cf9665075651905"},{url:"tags/厨艺/",revision:"5186824daef668e4df9821778ba118ec"},{url:"tags/双拼/",revision:"774d096d39cf43bc123274d0ca8baf18"},{url:"tags/吃货/",revision:"4e08013a25dcdae66dc5735e81237add"},{url:"tags/学习/",revision:"6e9da03afb723e6dc75cafcb7d8abcc3"},{url:"tags/建站纪念/",revision:"e3a89db8510f7611c16dcc7437f94857"},{url:"tags/打卡/",revision:"194caa3bb18a9e46992b33549d0ac049"},{url:"tags/日语/",revision:"9d1d0ff436933bd80b9aedd18988644f"},{url:"tags/游戏/",revision:"2755f4b56efa9952b982f87f8d5a4d8e"},{url:"tags/猫咪大战争/",revision:"d791a253a5a50c39c580d0a78cb31308"},{url:"tags/生活/",revision:"19691bbef4bd6d1991b91204ce835c5a"},{url:"tags/经验/",revision:"eadf04e25d43038b6507004c4a74ed69"},{url:"tags/食堂/",revision:"dbdc0b21ec729431ba6118041cbe7b4d"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));