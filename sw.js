const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f360f5cdde98a007c9cf815ec8496c41",url:"./404.html"},{revision:"1aa2224277fd46de6497d9783fd97eea",url:"./about/"},{revision:"d66463beab2d9802e8e4d8a299a0cdd1",url:"./archives/2022/04/"},{revision:"5d99bafa8524166be7e6ff9f7ec83d29",url:"./archives/2022/05/"},{revision:"b33ec78451a28bda4f93193e2c1d8d91",url:"./archives/2022/06/"},{revision:"5e238c5a4063fed83d8eaec2db77ba8e",url:"./archives/2022/07/"},{revision:"f7ef7715f538c7247efea8f3bca09ed5",url:"./archives/2022/"},{revision:"85af6238d58ad27f8adf187015ed963d",url:"./archives/2022/page/2/"},{revision:"bc6375654084e8d6dc7fa4537de23bd8",url:"./archives/"},{revision:"8c3a614e34d90662424a12e5a4bef11a",url:"./archives/page/2/"},{revision:"d1be29f9e7760ffdc0e79dfb5fe870c4",url:"./artitalk/"},{revision:"388d4bded50bc3fcdb4d7cf29d776b6e",url:"./categories/"},{revision:"fca5a9416dc1d0897cd98e1685375ac9",url:"./categories/今天来点什么/"},{revision:"09c55d4402143badac074e0ad32efa41",url:"./categories/学习使我快乐/"},{revision:"0f371d4f810df3c751a2e1e3184e90e3",url:"./categories/建站纪念/"},{revision:"5f2c622b019d3f5727a997c112d11aa8",url:"./categories/玩机技巧/"},{revision:"8a5394b249939f431e9242f285e9bace",url:"./categories/瞎吉儿优化/"},{revision:"9b95b932c83a4ead422e1d142a34b9f4",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"1ca8417ff2e8313e6a61c10b776cfe69",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"2b6beffc2e3a9760b7afd09f404e2094",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"23cb8a25c8ccfc5871df33c446e13aa7",url:"./page/2/"},{revision:"dc63492e913244cc700cc8dbcebb9b1b",url:"./posts/10802.html"},{revision:"b5d315e3ad9c3b572e60539a22fbe5f9",url:"./posts/11642.html"},{revision:"1ca05a62afccdc9f4832adbed8e52179",url:"./posts/23251.html"},{revision:"596390764bd493e7dc12ba6e347ca4b4",url:"./posts/28163.html"},{revision:"22f47a4596419c3818e44cd709d9f019",url:"./posts/30523.html"},{revision:"7af9c1bf9e7c25ddacf263d199e9757b",url:"./posts/42791.html"},{revision:"4479d048f5d4844a8c1559b95dc548bb",url:"./posts/43502.html"},{revision:"fb94df9e127a7cc7fd733f427312450b",url:"./posts/47697.html"},{revision:"d79d3a5c7710fdac9fce99f284f2c0f1",url:"./posts/481.html"},{revision:"90550edc295507b476b2e4901a13811f",url:"./posts/48793.html"},{revision:"b00367631a0081af1db57ea524178c68",url:"./posts/62339.html"},{revision:"010aba363481f7dab8a4507115a33edb",url:"./posts/64981.html"},{revision:"2bf0ddab5e02b2730be3fa295352d7c1",url:"./punch/"},{revision:"8c3bca888b3a873ddc627a50e4f65339",url:"./tags/Bot/"},{revision:"5b23e775e2c93d5071dfe2e971cceb91",url:"./tags/Fontmin/"},{revision:"2a12d35862d84efe80df5df94e529ff2",url:"./tags/"},{revision:"0ec0845b1a7eb55444454b1f5331f8cf",url:"./tags/PWA/"},{revision:"9f57745a71133f530b966bc4bf74434c",url:"./tags/Python/"},{revision:"751534217f8866c4710d27f64b993176",url:"./tags/Telegram/"},{revision:"aa9be484470d0630327fc12fa79a20be",url:"./tags/Windows/"},{revision:"9127c8f7894fff6a937c61a282d306e1",url:"./tags/Workbox/"},{revision:"89977d6a3ffe15e7dc0f6a04e3a15b21",url:"./tags/厨艺/"},{revision:"ac1d9d68cf84a6f247c2b4d5d9775c4a",url:"./tags/双拼/"},{revision:"ca1f3a034ece4913279eb31e7013a6e6",url:"./tags/吃货/"},{revision:"9b464e8bf26b2b3864c621b283e596dd",url:"./tags/学习/"},{revision:"f36725c83dcde0457d519da519772080",url:"./tags/建站纪念/"},{revision:"27f5efbf75a46902bafacb8a4ac95539",url:"./tags/打卡/"},{revision:"c64ea3990f6990b460d14e38eb2b5041",url:"./tags/日语/"},{revision:"f0d991a64cb97041c48c0036794ee4ba",url:"./tags/游戏/"},{revision:"7a1bec623c24d48618c3bc2c2cd30dc6",url:"./tags/猫咪大战争/"},{revision:"b2cc79e9f0f2a0530c615c39042f6c74",url:"./tags/生活/"},{revision:"8ba12f950020377f79e7ece923499c7b",url:"./tags/经验/"},{revision:"cb10169f63eee4b27c5e06de51decb5b",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();