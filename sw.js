const workboxVersion="6.5.2";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.2/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"2e2150dc185306cc9dcc959eaff6b63f",url:"./404.html"},{revision:"98095d94997751e91cb6ada5130c3ac2",url:"./about/index.html"},{revision:"89e9b5d241dc73b1acbac77b4fe351dd",url:"./archives/2022/04/index.html"},{revision:"ce50c5c12f4b98778066de3abbc2625c",url:"./archives/2022/05/index.html"},{revision:"625e7223095373343c3f3f22b489aaf5",url:"./archives/2022/06/index.html"},{revision:"d0bc4a38785194a6709297a068144cf9",url:"./archives/2022/07/index.html"},{revision:"de98d1435ba8968ae9b7ad9d9ffa97dc",url:"./archives/2022/index.html"},{revision:"c94e8925e4bb2d4e0936ccb667d6e072",url:"./archives/2022/page/2/index.html"},{revision:"4bd97e607265e5d942321d5ad5631b94",url:"./archives/index.html"},{revision:"d587bf8ee33c3a21f86cf2f3c85341ff",url:"./archives/page/2/index.html"},{revision:"4c500f69470bfdbb8aaf106a085fe90c",url:"./artitalk/index.html"},{revision:"c9929776b5d5b27566ce807ecbc6f385",url:"./categories/index.html"},{revision:"03e7feda63e4cd1159901249582df022",url:"./categories/今天来点什么/index.html"},{revision:"ccd5f32905095d3fab768eb10b76feb5",url:"./categories/学习使我快乐/index.html"},{revision:"ccf183e2f6fbce6748d4ae0d506ad82c",url:"./categories/建站纪念/index.html"},{revision:"f31963ba9b8a94b2a64cd2966c542bd3",url:"./categories/玩机技巧/index.html"},{revision:"a460ea22669e2375ee5d4b10d5b69429",url:"./categories/瞎吉儿优化/index.html"},{revision:"898b1d3ac9fc3c40ffc0e9737a9c81c9",url:"./categories/阿伟又在打电动/index.html"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"4822a5f699ef251163378549306533dc",url:"./index.html"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"428cf09f78c58ea979311f20a4967c0e",url:"./link/index.html"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"5280797e1974d93ad644593b0f808d89",url:"./page/2/index.html"},{revision:"b4ec94907cc3b240f9f9c87eee2fe1d1",url:"./posts/10802.html"},{revision:"d97a2ca337170b706fb217a9dca39b36",url:"./posts/23251.html"},{revision:"e40cdcc385eb73110df3639edc9cc1c9",url:"./posts/28163.html"},{revision:"4ad8c20148d25a8467d4dec426064810",url:"./posts/30523.html"},{revision:"78859af971525e35898db2baf816952b",url:"./posts/42791.html"},{revision:"bc967c9e281c79d7abd567433b6ca94b",url:"./posts/43502.html"},{revision:"672b3e04049d996a1ccdc275e4867ff4",url:"./posts/47697.html"},{revision:"dfbe152e5a0a8a44ef976b1659b810c0",url:"./posts/481.html"},{revision:"053404fda6037f9699bffc98b4500126",url:"./posts/48793.html"},{revision:"ea0a894fa3ca07c64777596793821579",url:"./posts/62339.html"},{revision:"84582cd5b0b85f81f8a3fb3c88e5c330",url:"./posts/64981.html"},{revision:"58016002b7ae023a46c6227e6fb1620c",url:"./tags/Fontmin/index.html"},{revision:"9ca3ad94ee050a773472e185685796fa",url:"./tags/index.html"},{revision:"e45842ed9efd5e5109b0b070f31f8004",url:"./tags/Python/index.html"},{revision:"7fadf7ff5a4e60bc51ee9afb15c952a5",url:"./tags/Telegram/index.html"},{revision:"baabf38267b3b708fe77ea13a6a3ae17",url:"./tags/Windows/index.html"},{revision:"5ac11555853e08edd05a1dff46ed6810",url:"./tags/厨艺/index.html"},{revision:"6182799586b1d7b65298c82b9e41b15d",url:"./tags/双拼/index.html"},{revision:"28c35402bc1f13426b29eed2728649bd",url:"./tags/吃货/index.html"},{revision:"24177bd2182d1c98481f82fa1f9558c3",url:"./tags/学习/index.html"},{revision:"376df505f95bcd1b62beceb48e54f17e",url:"./tags/建站纪念/index.html"},{revision:"8769a2c200020b99fbe1fcddc741151c",url:"./tags/打卡/index.html"},{revision:"648ba7f7ef73994f472309ce0d7f204b",url:"./tags/日语/index.html"},{revision:"be676b47bc583a653507fa694b245563",url:"./tags/游戏/index.html"},{revision:"9cc1071c3294444504173a40fe2f02bc",url:"./tags/猫咪大战争/index.html"},{revision:"9210528a14930255a7418b0998fbb234",url:"./tags/生活/index.html"},{revision:"073f0da99acc4d8f22036f4b18e7dabb",url:"./tags/经验/index.html"},{revision:"eff4150c68206fd8215bf376ed6f0998",url:"./tags/食堂/index.html"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();