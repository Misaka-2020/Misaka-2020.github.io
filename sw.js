const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"45146035e7c51daa93b71da59a1495cc",url:"./404.html"},{revision:"74f456005e85ae29e75414aa785d5a05",url:"./about/"},{revision:"aa9a428637ff341ba6bef5564df860d2",url:"./archives/2022/04/"},{revision:"c9dd31baca4715bad2ffdced4fed1da2",url:"./archives/2022/05/"},{revision:"15e3945f5266bce2b2fe45a1bced700d",url:"./archives/2022/06/"},{revision:"8740a59cf144d21f18831aa844d6d798",url:"./archives/2022/07/"},{revision:"4b683cc1d441e3f9f7538f14b89706c4",url:"./archives/2022/"},{revision:"504f191708095f07e3ce8d3bc47ab9cd",url:"./archives/2022/page/2/"},{revision:"f9eb8d1d114bfbb91d042f8210c2216b",url:"./archives/"},{revision:"10195ddf40c6ed3128fc84cc9abdd10b",url:"./archives/page/2/"},{revision:"2f240ca01b1153e378e31e6f430b464c",url:"./artitalk/"},{revision:"df05dba911b673f4f3cadaad2e18d735",url:"./categories/"},{revision:"8b5034a6f4e636dd2bbb0521e9722421",url:"./categories/今天来点什么/"},{revision:"c1c2ec6f45c6fb1076438a364512f833",url:"./categories/学习使我快乐/"},{revision:"aa5e72586d3c3b31a9a3f334f9f8e798",url:"./categories/建站纪念/"},{revision:"8b41d83c1bf6ea53a0e2398916525797",url:"./categories/玩机技巧/"},{revision:"8eadb2dc480272f152a99198a4e9a626",url:"./categories/瞎吉儿优化/"},{revision:"b183420355f89966c22530d18752ba12",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"9d4663a7b50a42139858d8af64f65923",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"2f62cd2d763c5e6afbc02e9d1b3b4529",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"c8720cfed63ef947af8c2bd16f34d0f9",url:"./page/2/"},{revision:"a3c1d347d99ae2dd9843f33f845a0b07",url:"./posts/10802.html"},{revision:"c5b9218b12439b2050f559102fcac50e",url:"./posts/11642.html"},{revision:"0ddef618012cae594281a88dd0957d0a",url:"./posts/23251.html"},{revision:"ca6be95def501e4d949ca9586d20b9c6",url:"./posts/28163.html"},{revision:"d776651ce20f883c7d198ba82054636a",url:"./posts/30523.html"},{revision:"0abc270c371b51ffc17031aa2bd819d1",url:"./posts/42791.html"},{revision:"23cb34e503632d68f55311a311cd2e7a",url:"./posts/43502.html"},{revision:"32373ea1c6ebe6f18d811891369fb1bc",url:"./posts/47697.html"},{revision:"934b103b7dccd98fbead613ccf62aa4f",url:"./posts/481.html"},{revision:"279d1564596522846067f6feb85aeeaf",url:"./posts/48793.html"},{revision:"5d0e8fe0edd9033c545ab6dda2e5c245",url:"./posts/62339.html"},{revision:"bbd7add8029dfcde7306656db283e9cc",url:"./posts/64981.html"},{revision:"5a1c51d44701ce0a1e5b96d81219d5b9",url:"./punch/"},{revision:"b67c3703143f1274cebb754db8d1ecbc",url:"./tags/Bot/"},{revision:"054ff5911382304a88e7a618c2c76f86",url:"./tags/Fontmin/"},{revision:"81f46b7c6d155ffafb2664a7f4b7824f",url:"./tags/"},{revision:"5aca77ed030a0d78091409a773ffee74",url:"./tags/PWA/"},{revision:"fc1555d53ae2973fa3566e1d04b5a7a4",url:"./tags/Python/"},{revision:"4a42757c90a01f7ab4dda73d105f41b8",url:"./tags/Telegram/"},{revision:"a85b06a02b094a5dd025f6c50fa8e780",url:"./tags/Windows/"},{revision:"919f1d117533a3ca8533578cb6232589",url:"./tags/Workbox/"},{revision:"6de61a5e5d66e6f7ca46b92a1e77f04f",url:"./tags/厨艺/"},{revision:"de2be6705ff95ee13623004f3984328f",url:"./tags/双拼/"},{revision:"660cbb4823445512133e612f58da4717",url:"./tags/吃货/"},{revision:"9fe8099d020fb237df9323e9d8b7bf9c",url:"./tags/学习/"},{revision:"bd7577281c3728532511fe87800a1622",url:"./tags/建站纪念/"},{revision:"eca3ce8328bff656df6130ed7d2c4905",url:"./tags/打卡/"},{revision:"d0ebbed5af496a4c411cd2d1eca9ed15",url:"./tags/日语/"},{revision:"98f5e535c62baf2ecbaf1fe7e2573755",url:"./tags/游戏/"},{revision:"8868fdcad99457b2819ff28d6c0a015a",url:"./tags/猫咪大战争/"},{revision:"b0555dd301cbb404801052e8d850d2e4",url:"./tags/生活/"},{revision:"c569006df5d728a021cbafef19d22da3",url:"./tags/经验/"},{revision:"eac45ea3e0f432f9a3d6969724a6c4a4",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();