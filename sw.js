const workboxVersion="6.5.4";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"d742183f0ac1f2aa1f91d6ceb560dbd6",url:"./404.html"},{revision:"31c5b9ee0657c028bf738abeb32d0440",url:"./about/"},{revision:"b4a42cb83c116623b0a710e597521a24",url:"./archives/2022/04/"},{revision:"79f26aa5895c3d93edf822da00350888",url:"./archives/2022/05/"},{revision:"a89981ca628f877f49973357e2787cf5",url:"./archives/2022/06/"},{revision:"d5e7a87b530c8cb4a7ed36d14a6794df",url:"./archives/2022/07/"},{revision:"be804876ab32f45cb6bb0cb281f573b4",url:"./archives/2022/"},{revision:"52f79d6339efeeecf0e35c8780b8d912",url:"./archives/2022/page/2/"},{revision:"c94754d8e86d4f94cc7d8cbbb9630cb4",url:"./archives/"},{revision:"0bc0cc15123e8b00e6dc2dcc52549e7a",url:"./archives/page/2/"},{revision:"9c5b1541ee4fac5c5940c05cf5760d4c",url:"./artitalk/"},{revision:"47d3e51ffda4af0122b9103fae995a71",url:"./categories/"},{revision:"1c7c30a648739e094bf5d4b3eb26e910",url:"./categories/今天来点什么/"},{revision:"967fa4004cc227b049c24b29588cd164",url:"./categories/学习使我快乐/"},{revision:"34fc4dc86ca8606f76e5ab1e65c1ff8a",url:"./categories/建站纪念/"},{revision:"695624792f7bb30d934936c812b3bee5",url:"./categories/玩机技巧/"},{revision:"f58d5d098afe3cc326697376bfdb5c4f",url:"./categories/瞎吉儿优化/"},{revision:"8ac23db1b7dbec1924ab157b9478326e",url:"./categories/阿伟又在玩电动/"},{revision:"0b1d8cd944877c2197d463b1e111c2a4",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"92bfd54f1b91d77698579ae0912ce216",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"6128a71a4cfe457d4b019ef396af3613",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"295af4f4ebdf79ca6c37d24c7c0fbe9c",url:"./page/2/"},{revision:"c5e26319d496cf6dc3faf03b2420db9a",url:"./posts/10802.html"},{revision:"41aec4a5f5f4fe556b1d2c5c459bd095",url:"./posts/11642.html"},{revision:"800d976b405352ac5da6ffe34386e03e",url:"./posts/23251.html"},{revision:"2e770d0a84b6680e99fc72187022a447",url:"./posts/28163.html"},{revision:"048d97d927bddcff0f8b5db4e1b6dadc",url:"./posts/30523.html"},{revision:"0f76126267bd60adcb865c08be064056",url:"./posts/42791.html"},{revision:"5fdda55b3ebdbdfda5772bfc3c1b0ec9",url:"./posts/43502.html"},{revision:"cded64b92b6ae2a1815b9f0d0dab5f43",url:"./posts/47697.html"},{revision:"43ef6b8a9fc804c395a2463b66151b10",url:"./posts/481.html"},{revision:"fb3274fab870f9ed1b520041fc22d704",url:"./posts/48793.html"},{revision:"6d6c6f52d1a36d72b81e846e2025d817",url:"./posts/62339.html"},{revision:"9e5f7126de502e96a6c6494f5b839e84",url:"./posts/64981.html"},{revision:"092614fceed455671ec701b749db0635",url:"./punch/"},{revision:"59b8257c7b5bd52c29596d71540acb2e",url:"./tags/Bot/"},{revision:"e90601348bb4426f30ebf8a5af09afe0",url:"./tags/Fontmin/"},{revision:"6a226926a047f7b14e794eba231b025e",url:"./tags/"},{revision:"fecc44e07ac4d4ea675ce2993f7255a9",url:"./tags/PWA/"},{revision:"7de02e4a0826acd953d1e002df2d1895",url:"./tags/Python/"},{revision:"84ae8b39ca43c6509abe85294faa904d",url:"./tags/Telegram/"},{revision:"7a487c4f7916b952b0313b08d2e5c45b",url:"./tags/Windows/"},{revision:"20c7a9894cf38473e963ec6aaf2f5c37",url:"./tags/Workbox/"},{revision:"5ac71351dbad19f00ac3529e272ca849",url:"./tags/厨艺/"},{revision:"7e442d0f25d50c042540fec0630118fd",url:"./tags/双拼/"},{revision:"f9b657982e63d6017a070ed28cecd7ba",url:"./tags/吃货/"},{revision:"577eda87a0a1fcc2bb016812d1d09053",url:"./tags/学习/"},{revision:"2b743398f3db3265fccb8f7245940c2f",url:"./tags/建站纪念/"},{revision:"9d3289c1b07b88250d88b69882ac28d6",url:"./tags/打卡/"},{revision:"0ff2b5ad849cbbc9d3175e28669420da",url:"./tags/日语/"},{revision:"071801a073bbe914e8654742d432e673",url:"./tags/游戏/"},{revision:"4193c917bcd843c69545886eb505afb0",url:"./tags/猫咪大战争/"},{revision:"0ef13461dc26584a3b7c13b839db1ce0",url:"./tags/生活/"},{revision:"4a704cf1b03bcd6090e6ba8aee85b8dc",url:"./tags/经验/"},{revision:"0550c78b64ccd6c1639780055e2f4f78",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();