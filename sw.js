const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"cab72b1d325e659161edd5c57a2ccf14",url:"./404.html"},{revision:"b526e6b5acde14fcb1862174c4b98a38",url:"./about/"},{revision:"58e8fd87d26fdf0d1977a1b82617d945",url:"./archives/2022/04/"},{revision:"4913a3043783897c73a104afb3b9e5fe",url:"./archives/2022/05/"},{revision:"609bab84046472393cc284a6b3783f9c",url:"./archives/2022/06/"},{revision:"92a760170829d72b1dce6e3c9eabe4ba",url:"./archives/2022/07/"},{revision:"b2aae662742d4f2707a0eea51feb349c",url:"./archives/2022/"},{revision:"a8803ecc46a82371070fe696079103ea",url:"./archives/2022/page/2/"},{revision:"617c4feac552855550c35908d270c4d5",url:"./archives/"},{revision:"05ea60d8f4c287f8e04b52d84fa344ce",url:"./archives/page/2/"},{revision:"0b5b44420e02ac15f0ee96067c45a220",url:"./artitalk/"},{revision:"5e466e9477df61caa34fe483616ba7bd",url:"./categories/"},{revision:"82cfcc55b2bb94927b7b6ef5de2295b7",url:"./categories/今天来点什么/"},{revision:"f5d71fd477344529da264c29980a19bb",url:"./categories/学习使我快乐/"},{revision:"8651def621f7e9e8cf132f36bbe49b48",url:"./categories/建站纪念/"},{revision:"680ed1c3866aaa9a5653e46387394da7",url:"./categories/玩机技巧/"},{revision:"22f6c1742337ef793ac0cad6c23a66af",url:"./categories/瞎吉儿优化/"},{revision:"6b92c3d69c98bddbf7c630ecf0569ee7",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"ef465b5410e170f9722997b47b84d3fe",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"9a43a8203570781971f2e6e790816d55",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"d0058dce29bf3cfa8e7a60da5c39ad10",url:"./page/2/"},{revision:"994bbcefa2c58467bb01a7920b8f6880",url:"./posts/10802.html"},{revision:"d6b0d12f3882cd51aeccbd55a70f39f9",url:"./posts/11642.html"},{revision:"96010d5e4f6e04f0e37a89099769f7ef",url:"./posts/23251.html"},{revision:"fef57eeea62f81e586d8fc6a7a0da7a9",url:"./posts/28163.html"},{revision:"0a155779eb229038113d0f16b5401a24",url:"./posts/30523.html"},{revision:"b8f0fc32c58c1a4af89b12286516ac16",url:"./posts/42791.html"},{revision:"daff3dab84b620aa15fec2fda89ae267",url:"./posts/43502.html"},{revision:"5b2f81c341bc5ff212b5e3d4969b49a4",url:"./posts/47697.html"},{revision:"087eab01d5398dc3473c77d686f6c45c",url:"./posts/481.html"},{revision:"0d0784ffb75cd0f651e0028543985a03",url:"./posts/48793.html"},{revision:"90232a5f17dfcc464819662178ac8ad9",url:"./posts/62339.html"},{revision:"8663623979edc2a56e17e9c41140e1cf",url:"./posts/64981.html"},{revision:"a6b3eb5beea7ce741cb5d232f6ee4b8d",url:"./punch/"},{revision:"d0d87affa2c5575bd4e4e4665d29bae3",url:"./tags/Bot/"},{revision:"513a7a02c74b1ca3b8d8b19f229a1ee2",url:"./tags/Fontmin/"},{revision:"af362ab0cd0e086d0086e7730d7786ee",url:"./tags/"},{revision:"dc1499ec21c904bc242a618c5ed44d7f",url:"./tags/PWA/"},{revision:"8ff34f8041e897ca0b3aa3cf623f1e84",url:"./tags/Python/"},{revision:"9c25aad3538ca4b8ea302ee35429d3f0",url:"./tags/Telegram/"},{revision:"4a5cb4a5185adf2d17341352cf9c92d8",url:"./tags/Windows/"},{revision:"9392dbeebe24773572d493356245920c",url:"./tags/Workbox/"},{revision:"f00b2b20ba90824adee0f0a3945919c1",url:"./tags/厨艺/"},{revision:"72781aaceba2f91090f235b65f908dd4",url:"./tags/双拼/"},{revision:"8fafac34d83cc3b4a8552bbe80445ad3",url:"./tags/吃货/"},{revision:"a68d1ced040a44a5c23c24b1c43f0d07",url:"./tags/学习/"},{revision:"8ed5b53bf782f11e77daadfff5b35a3a",url:"./tags/建站纪念/"},{revision:"e6f6eeb5306b1092468f117ff30f1ecb",url:"./tags/打卡/"},{revision:"c906919e09555f31b3c470466f2a0740",url:"./tags/日语/"},{revision:"66159ba0766b3f17e6060310472f764e",url:"./tags/游戏/"},{revision:"7cd81934c027c19673174cb8c1076ba9",url:"./tags/猫咪大战争/"},{revision:"7b10c8d2f177f41a417a2c70e5bac27a",url:"./tags/生活/"},{revision:"7d706d896870a7c9ac009d4d57eb3952",url:"./tags/经验/"},{revision:"473871b469750e7580dcb82fc5e77f28",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();