const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"e46a8a3284820135d680baa773e67b83",url:"./404.html"},{revision:"8861b8be3d7f93dc35b9d22d32539539",url:"./about/"},{revision:"5a0cd2ba234eadcb0f1a13ebd0e98cf0",url:"./archives/2022/04/"},{revision:"ab2ba123b4a19272485af87dfc305958",url:"./archives/2022/05/"},{revision:"6a9ab9bb57aaf68349cb4965eee964a0",url:"./archives/2022/06/"},{revision:"18d4b248d319e263982838e39f7d0512",url:"./archives/2022/07/"},{revision:"c0eff46eeacf8c2399e272e4955b8a65",url:"./archives/2022/"},{revision:"bcb1baa3d87de574541b92012abd7796",url:"./archives/2022/page/2/"},{revision:"332f4010fb27fdb83516f94733b74678",url:"./archives/"},{revision:"89a145a52e7cb9f5c4d621e3cacb282a",url:"./archives/page/2/"},{revision:"1bae4c98e8e88a448d3abdd8bfbf4faf",url:"./artitalk/"},{revision:"a2705be9a2f213e0c1dff0415d676458",url:"./categories/"},{revision:"fa519f7535303cc8340582274e3e4209",url:"./categories/今天来点什么/"},{revision:"881072beb2af5dbb106658e675d7a2f6",url:"./categories/学习使我快乐/"},{revision:"5116c973aa9d2ee853007bef4f9af5fc",url:"./categories/建站纪念/"},{revision:"716d8a7b6b1038ea1490dc48aa641ee9",url:"./categories/玩机技巧/"},{revision:"9773fe52e3f4f2649f966a4579481f14",url:"./categories/瞎吉儿优化/"},{revision:"4dec7f3662742bd6aee00780f7d90907",url:"./categories/阿伟又在玩电动/"},{revision:"0b1d8cd944877c2197d463b1e111c2a4",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"4cb82b910ff55cc1eb7aa581c2767fd0",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"8af046fda4625c00c81ca75efd774982",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"dd7fc80fad0fa498e89d9a315f2b8b29",url:"./page/2/"},{revision:"bb7211dd1eddb24b83ae5d792aba1126",url:"./posts/10802.html"},{revision:"1a105e95acfc4ce7a05cc3ddb36ad20b",url:"./posts/11642.html"},{revision:"71afeaece839cb1331237df0d48842b4",url:"./posts/23251.html"},{revision:"b9a29c4307f1805332536d14b97d387b",url:"./posts/28163.html"},{revision:"316bc090c091fbd1608c0035782e760e",url:"./posts/30523.html"},{revision:"9a1dfa041505cf04a21fb3a0943c651c",url:"./posts/42791.html"},{revision:"0635be8fb54f4deca16df3198e890f53",url:"./posts/43502.html"},{revision:"86cc89fd2a29c040e28ce9849b8b4df9",url:"./posts/47697.html"},{revision:"df3994aab9ad8dc18e30c2c74c7f0a8a",url:"./posts/481.html"},{revision:"b59a49eb8915c697d6f9735779a01571",url:"./posts/48793.html"},{revision:"a8527cc51e357f586d3d0ff8d5b65eda",url:"./posts/62339.html"},{revision:"cee48a42f6efd9ceafabf6db2bdfd1e6",url:"./posts/64981.html"},{revision:"ab7c5c7d2ac45672f4f1fca3d58148ee",url:"./punch/"},{revision:"e0018c76ff47028b78517e1274f46814",url:"./tags/Bot/"},{revision:"fe85bc8c715255e644d9db58475b90a0",url:"./tags/Fontmin/"},{revision:"047de990db93b88022f8aadbff329dab",url:"./tags/"},{revision:"f22d1d21eb5280b2a19c1bb993de3b6f",url:"./tags/PWA/"},{revision:"c50181890b2b380fe5a94093e279d572",url:"./tags/Python/"},{revision:"e92cd74ffb3a658ddd2d1a95e1ac89ef",url:"./tags/Telegram/"},{revision:"a930bd030e992ff02a1c2528d87e5f48",url:"./tags/Windows/"},{revision:"88bddef47d20c5893a391af00f6ab321",url:"./tags/Workbox/"},{revision:"f1f995b27304f2ed2edb5cb3e1b2e523",url:"./tags/厨艺/"},{revision:"dec80911d38f320e781b0532f17e0653",url:"./tags/双拼/"},{revision:"e947769ebee957c58c848aca8f376d40",url:"./tags/吃货/"},{revision:"9875521f7c6f3779a5767accaa386c0e",url:"./tags/学习/"},{revision:"f9404f354e0aa1bff15631880a62448d",url:"./tags/建站纪念/"},{revision:"51e5098f6051d8b7e218a9c7429eb3ac",url:"./tags/打卡/"},{revision:"eb2a83c3a7f14d756063f8d7abc03618",url:"./tags/日语/"},{revision:"a4d654de8bbeadcc7b606aeaaf15f19a",url:"./tags/游戏/"},{revision:"44b3a711a1db60b55048fba1b753fc63",url:"./tags/猫咪大战争/"},{revision:"4b7916409afcb5f7532c9dbd4f9c4cfa",url:"./tags/生活/"},{revision:"6e85c4ee5e7bf3c14b8686a81919f0de",url:"./tags/经验/"},{revision:"848ea75cb4efd066f6694d17013e0acd",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();