const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6d9d272493799bad98c7ed6b6d84b2ae",url:"./404.html"},{revision:"fbf2a3242c7fa5a1a47329760c19549b",url:"./about/"},{revision:"f1355caccad2c44583dd1462b9ed156b",url:"./archives/2022/04/"},{revision:"7e26685fe95599edc4e5d39b628e5bce",url:"./archives/2022/05/"},{revision:"f3c3500c3ff908f0f2ef7db25f7801c6",url:"./archives/2022/06/"},{revision:"0b5d9436468a7371e080d1afe811ef18",url:"./archives/2022/07/"},{revision:"17fe7d5f010a929ec201e362400f196b",url:"./archives/2022/"},{revision:"13066edbdbb89ea65667fa5856476c4b",url:"./archives/2022/page/2/"},{revision:"0d334b4c802633f0b0d907a313f7b7e0",url:"./archives/"},{revision:"98165050ae6131217d44389d47b67b50",url:"./archives/page/2/"},{revision:"2094e653709e7daff55896d06649c4ed",url:"./artitalk/"},{revision:"2899c09e472f5e92dcd52b5effc9c0c6",url:"./categories/"},{revision:"d42960a5740cdb6476ed745405d9296f",url:"./categories/今天来点什么/"},{revision:"0403acde74e9df1b0716d42b05fba1fc",url:"./categories/学习使我快乐/"},{revision:"0bbdba79cfb67e03a1d96ac1c89843e8",url:"./categories/建站纪念/"},{revision:"52d14c916168c08075d563c3f48ac551",url:"./categories/玩机技巧/"},{revision:"01880d02b22affd563678492b4c6271c",url:"./categories/瞎吉儿优化/"},{revision:"98ffa500391858001367843132633e02",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"b4ea5cff98d3221da371668c8ed14621",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"2f81cb14e6f6a723cde798dbc1882bd1",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"f63cb6a9f3a3a1197f1dbcbfd26eb682",url:"./page/2/"},{revision:"6b44955fb45994d731c6d8bc36fd8d06",url:"./posts/10802.html"},{revision:"c96f0d72c44d7aeb11cd34e2d6946d71",url:"./posts/11642.html"},{revision:"c1eed352e3719681c86c2d19a7475358",url:"./posts/23251.html"},{revision:"26c6bed15104bf5d07725da7d68e8e99",url:"./posts/28163.html"},{revision:"74c16c35570711c60247995d67288a6b",url:"./posts/30523.html"},{revision:"142c614b4b952b6eaf310a39463d3794",url:"./posts/42791.html"},{revision:"86b2be89ecff74063607e2e3c1a90b80",url:"./posts/43502.html"},{revision:"83d64e4e4a97f01455812f33e9b1719a",url:"./posts/47697.html"},{revision:"e4ca5ee6213a93980e131698b73996eb",url:"./posts/481.html"},{revision:"6b3a4dfb056f7c78797f2e62e4bd27d5",url:"./posts/48793.html"},{revision:"c4bf1828b049bfde0cd31de13baf7c49",url:"./posts/62339.html"},{revision:"317b05ed6940bf5c2ff0e992429f48ed",url:"./posts/64981.html"},{revision:"af93bdecef55668f6075ba8ded5b5376",url:"./tags/Bot/"},{revision:"4479ff9db091580866b443fc282da2bf",url:"./tags/Fontmin/"},{revision:"bc770798ff3c9eb390e53950eed5a5cf",url:"./tags/"},{revision:"64c9c7d53026e650800ba22026d64862",url:"./tags/PWA/"},{revision:"7354d62cddf31c6afda0f9fa62f04b8a",url:"./tags/Python/"},{revision:"ae60a9bd1c0ed905bfd8774db46cddf7",url:"./tags/Telegram/"},{revision:"90fb45a7424dc0a0e8c54eda92b3b9d3",url:"./tags/Windows/"},{revision:"86c4ff988bc386cee941e73b96717f09",url:"./tags/Workbox/"},{revision:"f998bd117df0cc76cef52fcf845b15c2",url:"./tags/厨艺/"},{revision:"2aa5efc408628ac66f4837c055b94dbe",url:"./tags/双拼/"},{revision:"158010544dbd710e8bbb4dd8250f4f2a",url:"./tags/吃货/"},{revision:"f50f80d0c4ac5525876943ee6ccfd98c",url:"./tags/学习/"},{revision:"9a80384234225d51e514b7a244ca0da2",url:"./tags/建站纪念/"},{revision:"c846bafed358a86a21d7fe57c198920b",url:"./tags/打卡/"},{revision:"ac19a245e7490f68aeb6d2585f748563",url:"./tags/日语/"},{revision:"07aeec81349ec4c5259a5d78f510442b",url:"./tags/游戏/"},{revision:"2e36e53627ea786f0d30f538b7877f03",url:"./tags/猫咪大战争/"},{revision:"f1d301a19d918a6c1cee9ec5fcb3ca63",url:"./tags/生活/"},{revision:"104d38189530a11809ca812760f10383",url:"./tags/经验/"},{revision:"fd96304bdfd738ce7fa5d870a2556566",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();