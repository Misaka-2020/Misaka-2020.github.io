if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const b=e=>a(e,d),o={module:{uri:d},exports:s,require:b};i[d]=Promise.all(r.map((e=>o[e]||b(e)))).then((e=>(c(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"deb323e323d3e319915304985b89e9a7"},{url:"about/",revision:"934f09488e94fa3335b4bb3e3997ba3f"},{url:"archives/2022/04/",revision:"5bf0710fa9f91c3e3319cffd7b3d0864"},{url:"archives/2022/05/",revision:"e471862014804a9a02c7844ede50f694"},{url:"archives/2022/06/",revision:"e4cd0c24c62214a686e5b8019cbbd6b6"},{url:"archives/2022/07/",revision:"07aadfab2eabfe5479c8e6761dc074f9"},{url:"archives/2022/",revision:"f1775bb64a42b50ed8804a80449999b0"},{url:"archives/2022/page/2/",revision:"c6fad80b95600f076be8754b58522930"},{url:"archives/",revision:"0b10be03c6a4ded9140c77546a3879e5"},{url:"archives/page/2/",revision:"18954f91dfbcda41e1e3406a8408747f"},{url:"categories/",revision:"7d091d9944b0f8fc1a2101679eab2281"},{url:"categories/今天来点什么/",revision:"b8eac05c9203c26edea1d9d5c83dcc0c"},{url:"categories/学习使我快乐/",revision:"784705eb8e9d7ced37278bccb147925e"},{url:"categories/建站纪念/",revision:"e0d0efd8e7d248416def0f255a48e345"},{url:"categories/玩机技巧/",revision:"78bb7598c81e4aad1bcd2a321c66dc9b"},{url:"categories/瞎吉儿优化/",revision:"599a4d1d5c57c13a2bc9a7751e6177b9"},{url:"categories/阿伟又在打电动/",revision:"bab9ab396398409231bc7579da9bda23"},{url:"css/index.css",revision:"53ca1b38d9899866ce284e9aa4f29c54"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.png",revision:"2d49b75e3adc76e8bba639e8c2cf038d"},{url:"img/pwa/android-chrome-144x144.png",revision:"92e3f525998c999ece7005b3b6ec842b"},{url:"img/pwa/android-chrome-192x192.png",revision:"2178f122e4405ac6359d10d6288eacae"},{url:"img/pwa/android-chrome-256x256.png",revision:"d0584f31d02984f4b7895e204fcda67d"},{url:"img/pwa/android-chrome-36x36.png",revision:"4a0dc3b958684adc8a409c9a7018ad9b"},{url:"img/pwa/android-chrome-384x384.png",revision:"dad0bf612ab0b195284ddb2a707ce8ed"},{url:"img/pwa/android-chrome-48x48.png",revision:"bbc7520ec44f4419c9e7d7839241dc13"},{url:"img/pwa/android-chrome-512x512.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"img/pwa/android-chrome-72x72.png",revision:"b6b4ad589d60aa670dd23cbe0332cadd"},{url:"img/pwa/android-chrome-96x96.png",revision:"f99fafba116b9a357f4cd62d2c063c9e"},{url:"img/pwa/apple-touch-icon.png",revision:"1fb02ee07cf25c981d306e19e739593a"},{url:"img/pwa/favicon-16x16.png",revision:"6b6d67d2663938cae3b23cb939b6e024"},{url:"img/pwa/favicon-32x32.png",revision:"b727287f3ce9014147eaded436349918"},{url:"img/pwa/mstile-150x150.png",revision:"b9441b547cadb69647204aaaeb68a61a"},{url:"img/pwa/safari-pinned-tab.svg",revision:"f8e5ba6c9fd18363ead854a4b6c70b98"},{url:"img/webicon.png",revision:"417ed47a355652e1d665d6ac70873ee8"},{url:"/",revision:"c8288324218d9f38d7a2c1bfb76048b1"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/",revision:"34f6c84b36500c92f216264407469194"},{url:"live2dw/assets/moc/tororo.2048/texture_00.png",revision:"9bd791736cfc91b62670dee5f7fbd45c"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"page/2/",revision:"b26379a3c9f02a9d88d882b1ec0ecc7a"},{url:"posts/10802.html",revision:"77f602158d4fc5350e4f8ee2aedf4d69"},{url:"posts/23251.html",revision:"025b5b1a8d4e99a409d5351e508c04a4"},{url:"posts/28163.html",revision:"8f78d05695079053113ac9a9af29747b"},{url:"posts/30523.html",revision:"f65a9269b24171196f8820415cdbbdc0"},{url:"posts/42791.html",revision:"e04c23802af35d3a84a6a85a6538ef7a"},{url:"posts/43502.html",revision:"96972d599ebf5d0f61cc0b4e1a54b196"},{url:"posts/47697.html",revision:"b5e5bbaf47b1167d6461f11e09f2187e"},{url:"posts/481.html",revision:"62d01451c663ea804881067f7e28b2c3"},{url:"posts/48793.html",revision:"fe004842cce6959f12e1d4656d0ca730"},{url:"posts/62339.html",revision:"63265aea9c8551055eb2328f30719ff4"},{url:"posts/64981.html",revision:"ec70551e7fc711c8bec40fad98be18be"},{url:"tags/Fontmin/",revision:"4fd9e48c8a86f34994a0a99c9faf7084"},{url:"tags/",revision:"c6574a1324dd596aa07c35ecd7db8e52"},{url:"tags/Python/",revision:"0fbd1fcd1eca85cc45c4c7e55f6b611f"},{url:"tags/Telegram/",revision:"63c27fbd1e909c78e509d2854f08ef46"},{url:"tags/Windows/",revision:"0b75e88610be9e9703f73f3d0e041614"},{url:"tags/厨艺/",revision:"773f9d81f5bd65c9113ba6c8b210005f"},{url:"tags/双拼/",revision:"fdfd791d0f7ab8bfef364097951241f5"},{url:"tags/吃货/",revision:"8fd79a26d1cc2ae31d403b8b4f5db160"},{url:"tags/学习/",revision:"a71b5cfc8ca1bd3377d4235a2759bbec"},{url:"tags/建站纪念/",revision:"fc9e39fb94b6b00407e7d114d8b43882"},{url:"tags/打卡/",revision:"2ca1f99e16709af20140f26b97607293"},{url:"tags/日语/",revision:"25706e8857007c74929f85774e3d6a13"},{url:"tags/游戏/",revision:"6900b1d351ca90101421082880eca608"},{url:"tags/猫咪大战争/",revision:"6f078217c8a6abaed68de2ef251cfa04"},{url:"tags/生活/",revision:"4b549f1d727b9757904323f141e44b0a"},{url:"tags/经验/",revision:"d4196956cd7385d7aadc30088a3234a9"},{url:"tags/食堂/",revision:"897be738a8159fb61f162d0ae8b6fc04"}],{}),e.registerRoute(/^https:\/\/res\.cloudinary\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com\/.*/,new e.CacheFirst,"GET")}));