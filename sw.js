const workboxVersion="6.5.4";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f83ae799baf73069c50e757bd81362d5",url:"./404.html"},{revision:"83784819de8e6f5b6e8719f4c6a09731",url:"./about/"},{revision:"06af6a3c1a8bccc077451bf9f10fbb34",url:"./archives/2022/04/"},{revision:"a933725a139929976d839c1933a9bc2f",url:"./archives/2022/05/"},{revision:"6fd427b87d11ec7c551f2197c160110b",url:"./archives/2022/06/"},{revision:"1bcab470ef78175ba7b9def2a57fe8f7",url:"./archives/2022/07/"},{revision:"c4df9f42e670748ff5b440ffc88982e9",url:"./archives/2022/"},{revision:"ad78aae421b63cc69210c73225e79f74",url:"./archives/2022/page/2/"},{revision:"86ce1314d0b23a57100539cb8c7a5d52",url:"./archives/"},{revision:"df462ed6eac09339e38baa35674c18db",url:"./archives/page/2/"},{revision:"6c8b17cb96db76e24820d9d7a9e56b01",url:"./artitalk/"},{revision:"d566d1a8a64a276004dfc9e245c4c272",url:"./categories/"},{revision:"7dfaf6b0e1c47428340cd3afb5afbc3d",url:"./categories/今天来点什么/"},{revision:"22b76078a20f49ec82f569924ec57099",url:"./categories/学习使我快乐/"},{revision:"73023f355c737723325ee63102bf0989",url:"./categories/建站纪念/"},{revision:"3ac89eb7996809f362d7fb5196121f84",url:"./categories/玩机技巧/"},{revision:"7da166c1d498fd50f6b728a74013acd9",url:"./categories/瞎吉儿优化/"},{revision:"2821b73497b76fbee7a6ee4f59cfa088",url:"./categories/阿伟又在玩电动/"},{revision:"0b1d8cd944877c2197d463b1e111c2a4",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"1d78ea8801e532b8c2885570da827461",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"e7284c6c255ff13354e7c2629355fa3d",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"a125dc2187a28dc60bbf65072275aaa7",url:"./page/2/"},{revision:"c5e26319d496cf6dc3faf03b2420db9a",url:"./posts/10802.html"},{revision:"41aec4a5f5f4fe556b1d2c5c459bd095",url:"./posts/11642.html"},{revision:"800d976b405352ac5da6ffe34386e03e",url:"./posts/23251.html"},{revision:"2e770d0a84b6680e99fc72187022a447",url:"./posts/28163.html"},{revision:"048d97d927bddcff0f8b5db4e1b6dadc",url:"./posts/30523.html"},{revision:"0f76126267bd60adcb865c08be064056",url:"./posts/42791.html"},{revision:"5fdda55b3ebdbdfda5772bfc3c1b0ec9",url:"./posts/43502.html"},{revision:"88e6293ac865b6ea81b183f258ae15b9",url:"./posts/47697.html"},{revision:"43ef6b8a9fc804c395a2463b66151b10",url:"./posts/481.html"},{revision:"fb3274fab870f9ed1b520041fc22d704",url:"./posts/48793.html"},{revision:"6d6c6f52d1a36d72b81e846e2025d817",url:"./posts/62339.html"},{revision:"9e5f7126de502e96a6c6494f5b839e84",url:"./posts/64981.html"},{revision:"1c86fc5f5c2d7b9e85cb13734a5946cf",url:"./punch/"},{revision:"13586d84f33853c3d99c7e4118f1097f",url:"./tags/Bot/"},{revision:"b7254cbed7f2692777c0fae04560ae49",url:"./tags/Fontmin/"},{revision:"9b01992eb2709d68a5361f831b5dfceb",url:"./tags/"},{revision:"fa3fdf9e628d94f72b0fc381e24440e8",url:"./tags/PWA/"},{revision:"bf0397bc58ba07abd81f7156d02a79aa",url:"./tags/Python/"},{revision:"ba1fb6c7a9dfb35e495f8710a2c3fa99",url:"./tags/Telegram/"},{revision:"6126f8bcc974221a75ed6bd61f3c14bf",url:"./tags/Windows/"},{revision:"fa2a6a81e8b42e00d9b5bb4952cfef9f",url:"./tags/Workbox/"},{revision:"daf01e0cbbb99a4fb19a28e716aff249",url:"./tags/厨艺/"},{revision:"284238d6b805fbb71f0b43fde2018045",url:"./tags/双拼/"},{revision:"3073bdc474b9617be4ff2b73cfad2cb8",url:"./tags/吃货/"},{revision:"61873ab4b90ec4134bdd286d4249012f",url:"./tags/学习/"},{revision:"5d950b752b028af5a84b6c2605605797",url:"./tags/建站纪念/"},{revision:"c402b0d85f5499fdc6df4b1ac37ecbd5",url:"./tags/打卡/"},{revision:"dd2c284afad71b77084961cccb16bedc",url:"./tags/日语/"},{revision:"718baebb3bf3c8ccc68713c8f1b721c1",url:"./tags/游戏/"},{revision:"c54444c5185f6ff6c8af0c2bd71ce33b",url:"./tags/猫咪大战争/"},{revision:"977348be213929770967bd767c25aa8a",url:"./tags/生活/"},{revision:"0b9f79b678b596473d2dc8d1e963d12e",url:"./tags/经验/"},{revision:"bec7a4ed4b9b13f3ca411cf1a22a716d",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();