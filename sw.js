const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"dbfdc8b7f440170f8d14f17a3b62c9f5",url:"./404.html"},{revision:"0d3e9090560f4ba44b70b9d163463d6f",url:"./about/"},{revision:"4b57cfa07df9e8990e2b0feeb90e3df2",url:"./archives/2022/04/"},{revision:"939ed5d76e72002e0364d05af04ec1ac",url:"./archives/2022/05/"},{revision:"5d57e8c2111cb5e02c2fc7be0bddb20d",url:"./archives/2022/06/"},{revision:"5806535830423437ff202de75745acd6",url:"./archives/2022/07/"},{revision:"1780fbeca466c41e3897c7bfdd904455",url:"./archives/2022/"},{revision:"b8496488026d1cfe9b987143a3cf9578",url:"./archives/2022/page/2/"},{revision:"f688d3952ed51ba55dd4f767f4952dd0",url:"./archives/"},{revision:"62ce7c9e34a2c6ecf00d92c5f040a511",url:"./archives/page/2/"},{revision:"d43a42530ec0eea59064ee0b8d8fee47",url:"./artitalk/"},{revision:"faa613841607d32b141ac47626ffadc4",url:"./categories/"},{revision:"fd1c335b810b66598071fb9a898e22af",url:"./categories/今天来点什么/"},{revision:"a142fd5b572232997b4c3db0de062bcc",url:"./categories/学习使我快乐/"},{revision:"a2e07252c3afbebd91293d8cef2e61db",url:"./categories/建站纪念/"},{revision:"433f17bdc40797dd714ff08b6c52e881",url:"./categories/玩机技巧/"},{revision:"3984cd233d2ea73841258bf4767bfcea",url:"./categories/瞎吉儿优化/"},{revision:"8d551828b83d56c319e1bbb01194c767",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"16448878789ea65762268dac14b06bff",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"4660e81310fcc583d6549e1d66d55494",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"ddf9e5de071a540920051f563a2ea40b",url:"./page/2/"},{revision:"195fef9aa9e62e55d7240fbc67d77d47",url:"./posts/10802.html"},{revision:"babd944b0b14cb23d1a36e6118e1530c",url:"./posts/11642.html"},{revision:"a949509bd6dc0fa1dbe57026926efe1b",url:"./posts/23251.html"},{revision:"e1278c7586015791d4c3bd0874fa058c",url:"./posts/28163.html"},{revision:"b9690b11a78e60a4c17eca64260ef515",url:"./posts/30523.html"},{revision:"2da367a84611ff140215872578c8baac",url:"./posts/42791.html"},{revision:"0fe94d11375eda7456c74ca0830256e7",url:"./posts/43502.html"},{revision:"9a4756e022ad4d0c891aaf0d825bc126",url:"./posts/47697.html"},{revision:"915cd270cba9ebe369f49b4ab837a382",url:"./posts/481.html"},{revision:"031e1b36b63431114ead63927ae69dbd",url:"./posts/48793.html"},{revision:"7c4af6a195610d87b7630f8bba9a2eaf",url:"./posts/62339.html"},{revision:"aab9e9fc8cfe1c96bbef70d10cd11783",url:"./posts/64981.html"},{revision:"d90ce81af78cabc612096b325d32500c",url:"./punch/"},{revision:"80e99d98e9e9e1eb95b25c65d6061d37",url:"./tags/Bot/"},{revision:"1c04f14b7e9daa88a15fb5dc2ea9bb31",url:"./tags/Fontmin/"},{revision:"d1db2fb54316b7829d4d06359a25ce07",url:"./tags/"},{revision:"b151e1e6c869d2c75dbacacdbdd6b5cc",url:"./tags/PWA/"},{revision:"368986c9b819cf5ffd95b9d191355da3",url:"./tags/Python/"},{revision:"fb314804bfba95543dd3c372dfe7904a",url:"./tags/Telegram/"},{revision:"1db90a58ea8fe42e6badb2e67f7300d3",url:"./tags/Windows/"},{revision:"4d916eba5ce67553b49be433ed48bf94",url:"./tags/Workbox/"},{revision:"7c4df2af90ba496319033ea73aede7dc",url:"./tags/厨艺/"},{revision:"49457ffc7aef9196b3561da8c09cea17",url:"./tags/双拼/"},{revision:"7f4002b32e634e50dab4c8400267a37e",url:"./tags/吃货/"},{revision:"524975e91567174f184d6719a333f1b0",url:"./tags/学习/"},{revision:"5e12b34dc70423eb127c3b5c2fff331b",url:"./tags/建站纪念/"},{revision:"ce8bda537c91928af857ff1a44fc80a6",url:"./tags/打卡/"},{revision:"95f78fb038ae46bedcd4c9bf9bb24d06",url:"./tags/日语/"},{revision:"96dca5f46f298f5e4c919aefcd6584c0",url:"./tags/游戏/"},{revision:"edfe78db0b366a4d50aa06fe5c3a90e4",url:"./tags/猫咪大战争/"},{revision:"1945bcf014f03c6903aa88296b3f51f7",url:"./tags/生活/"},{revision:"dd9800a26764be3d065d5be116d3f76d",url:"./tags/经验/"},{revision:"6d198d28d9652771fab5879b96983757",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();