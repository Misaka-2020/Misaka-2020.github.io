const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"bd31a37d26b9162fac5771073fffb389",url:"./404.html"},{revision:"bf748b744adade1c1f9c2be19317cf1c",url:"./about/"},{revision:"1246417c92783d03ba6d7e776ade5e50",url:"./archives/2022/04/"},{revision:"49b791611c9d8ed01cd8e49cf511f716",url:"./archives/2022/05/"},{revision:"f8d6510f09801220e579e194586725e6",url:"./archives/2022/06/"},{revision:"6fde91d52b50d04518ec8b6b88fe2509",url:"./archives/2022/07/"},{revision:"32320837f589b174c59de6be331599c5",url:"./archives/2022/"},{revision:"b4939818380fba356db76357cc0cd79c",url:"./archives/2022/page/2/"},{revision:"d2def4da7ba5768483bb67a834df4652",url:"./archives/"},{revision:"bb9d0f24da5d348438a4e6d395adaa8f",url:"./archives/page/2/"},{revision:"3224d2478b8da0c33ab28e071b22435d",url:"./artitalk/"},{revision:"6b985982e1717081d35cc10b8f583f50",url:"./categories/"},{revision:"73a325fa32c0d4d1dc12b8fe0a0a88fe",url:"./categories/今天来点什么/"},{revision:"a5e4358bae246af38fe49bc7551f01d9",url:"./categories/学习使我快乐/"},{revision:"74ed8785bd0caaf42cdaeaf44a45b62f",url:"./categories/建站纪念/"},{revision:"0706d79bd61b48ec20ca9eacaa3318e6",url:"./categories/玩机技巧/"},{revision:"ee58fdb2beb43c50d245d0c62de20efa",url:"./categories/瞎吉儿优化/"},{revision:"8ecede1bbee61e6ccc92a1ed207eaa2e",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"8cd2c9b7ce39c0bdb92d2a6f56e9505b",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"196f48fde90ca155b9f691045d8fe167",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"0a864e6a3ad3b76e349e596a49f29427",url:"./page/2/"},{revision:"5214a14f4ba3b88c4b9e6497e30ad455",url:"./posts/10802.html"},{revision:"e6a48f2e8951634abc9b894d1033a98a",url:"./posts/11642.html"},{revision:"f8fd40ea251c729e69f2fb49e193c035",url:"./posts/23251.html"},{revision:"e6b88e105e9771b29fa5792658427fbf",url:"./posts/28163.html"},{revision:"2a303f79938933d7f02a92e5f81b9265",url:"./posts/30523.html"},{revision:"ff4f7d89b8312cb28fc68bef750328c8",url:"./posts/42791.html"},{revision:"a78ff1db639753525157dc9615b5fb0c",url:"./posts/43502.html"},{revision:"948b776b375c61f1e77e11932f0a7653",url:"./posts/47697.html"},{revision:"df3893de614f9846658583a850cfd15f",url:"./posts/481.html"},{revision:"d47014bbb4a9dd6adeddf2464180ce88",url:"./posts/48793.html"},{revision:"50401a1de8402660b8d21df6b04f3acc",url:"./posts/62339.html"},{revision:"f1980df19760bbf5e704039853497278",url:"./posts/64981.html"},{revision:"35aebd54b1460ca6d9fe214273857711",url:"./tags/Bot/"},{revision:"7b3bd57ab751a7dc69219514c1d688aa",url:"./tags/Fontmin/"},{revision:"dd7008d31e23d9d72e96deda9c0dc44e",url:"./tags/"},{revision:"c7745ac7767818f626ca71165b7da098",url:"./tags/PWA/"},{revision:"f2069403c29cd68631d69d3d77b08848",url:"./tags/Python/"},{revision:"b3923c370c2142877fbb3c9a96b8cbed",url:"./tags/Telegram/"},{revision:"8007c54e446a6250f4a0b6808aaecd67",url:"./tags/Windows/"},{revision:"33a0a9abb28e568f0e2332d0fd9ae899",url:"./tags/Workbox/"},{revision:"133add0214215cea18ba3056eccad4d7",url:"./tags/厨艺/"},{revision:"c5f2b6d10563659edcf0a178c87485d7",url:"./tags/双拼/"},{revision:"ec88219fad99ba2e49d971cca9e9d0f0",url:"./tags/吃货/"},{revision:"2839b8925ca000f7cbde74f0ab6bc041",url:"./tags/学习/"},{revision:"5ef8e84cbdab3d1bc4b5baa7ac388a7f",url:"./tags/建站纪念/"},{revision:"5db9dd0cb672ac265f036e3b938a94da",url:"./tags/打卡/"},{revision:"3991177e8c09825f9371cc08933c01b0",url:"./tags/日语/"},{revision:"5dc4d789d44e0f5446299fbb5e752336",url:"./tags/游戏/"},{revision:"2946a4ca0cf4151601f8a3cbb933ccce",url:"./tags/猫咪大战争/"},{revision:"19abfa21d1dd6efff989f6760214c832",url:"./tags/生活/"},{revision:"fb2b52bef43a4bcda171bd7efc12e1d8",url:"./tags/经验/"},{revision:"1682bc8c00a8ecd67e6fe069d4d3dcd9",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();