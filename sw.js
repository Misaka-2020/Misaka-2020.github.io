const workboxVersion="6.5.3";async function removeIndex(e){return{manifest:e.map((e=>(e.url=e.url.replace(/(^|\/)index\.html$/,"/"),e)))}}importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"8d05f8b31de5d0551c9075a121f1f6c4",url:"./404.html"},{revision:"ba89c8e29d1228024b1de6a6392d3ce4",url:"./about/index.html"},{revision:"1ca1cf2c343fd4d83748e479969caa93",url:"./archives/2022/04/index.html"},{revision:"ef595562c01948619d9ecfac8754b1b3",url:"./archives/2022/05/index.html"},{revision:"84aef9b472b97041a9a6136224113fec",url:"./archives/2022/06/index.html"},{revision:"1d4b560f0117e3b14a41dff1935375e5",url:"./archives/2022/07/index.html"},{revision:"7f3f0ad4e57f4887059e3b9f1d38e14f",url:"./archives/2022/index.html"},{revision:"b55e85023dd2eb6064f4a07fbb2cc8ab",url:"./archives/2022/page/2/index.html"},{revision:"ed30bd133f130441d16fdd9062b51d02",url:"./archives/index.html"},{revision:"1a9fe84b2cc7cd3dcf6e91e5567ba87e",url:"./archives/page/2/index.html"},{revision:"593126f535f023cf07126af1c880297c",url:"./artitalk/index.html"},{revision:"7664fd4c8c575425a67fb2743a67019e",url:"./categories/index.html"},{revision:"5ce5eceb0c2842fa5d01cbb9c3c3d3dd",url:"./categories/今天来点什么/index.html"},{revision:"27e984e78b62e1f87968fd05c0bc3500",url:"./categories/学习使我快乐/index.html"},{revision:"fee7a18c03c316f728062b7049d224f3",url:"./categories/建站纪念/index.html"},{revision:"1ff4d31057ae796b4ce12b176e7bf5e5",url:"./categories/玩机技巧/index.html"},{revision:"4dc67fadf0b37000421d48a56511dd92",url:"./categories/瞎吉儿优化/index.html"},{revision:"656f24427aa932d95c14aa8c1ea4599b",url:"./categories/阿伟又在打电动/index.html"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"15e0f991aa5ee78cee62dfa1963cf233",url:"./index.html"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"5119d2e6ea58b52e767cc6ce403caa2b",url:"./link/index.html"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"d5583242ef942e13f89e278a8d88b85f",url:"./page/2/index.html"},{revision:"b4ec94907cc3b240f9f9c87eee2fe1d1",url:"./posts/10802.html"},{revision:"d97a2ca337170b706fb217a9dca39b36",url:"./posts/23251.html"},{revision:"e40cdcc385eb73110df3639edc9cc1c9",url:"./posts/28163.html"},{revision:"4ad8c20148d25a8467d4dec426064810",url:"./posts/30523.html"},{revision:"78859af971525e35898db2baf816952b",url:"./posts/42791.html"},{revision:"bc967c9e281c79d7abd567433b6ca94b",url:"./posts/43502.html"},{revision:"672b3e04049d996a1ccdc275e4867ff4",url:"./posts/47697.html"},{revision:"dfbe152e5a0a8a44ef976b1659b810c0",url:"./posts/481.html"},{revision:"053404fda6037f9699bffc98b4500126",url:"./posts/48793.html"},{revision:"ea0a894fa3ca07c64777596793821579",url:"./posts/62339.html"},{revision:"84582cd5b0b85f81f8a3fb3c88e5c330",url:"./posts/64981.html"},{revision:"8b48020c6fc153f7f2be84b91fa28fc2",url:"./tags/Fontmin/index.html"},{revision:"da9d76487dcbb248814b5aa0eeb52ac6",url:"./tags/index.html"},{revision:"8afdf1bf636b96e4b03591ed1dc0f32d",url:"./tags/Python/index.html"},{revision:"bd2e115264e3c53b2bcd2210e7e0f134",url:"./tags/Telegram/index.html"},{revision:"38f134f968a1b1ac3f22a651e18a6021",url:"./tags/Windows/index.html"},{revision:"2a247bf943e0bdc177b29edd57d6e78b",url:"./tags/厨艺/index.html"},{revision:"8ce8f73024e01b9a44653add760cdbc3",url:"./tags/双拼/index.html"},{revision:"3fb9a62fa85cd78f5bb850bf10fa68f1",url:"./tags/吃货/index.html"},{revision:"4cadbc0b952a3b00bc83c6d3b3bfa337",url:"./tags/学习/index.html"},{revision:"4f5cb73746d57c33a6f4aef0897319e5",url:"./tags/建站纪念/index.html"},{revision:"5ae043c6bfd16b038283461a17031f5b",url:"./tags/打卡/index.html"},{revision:"884a98389038fc012ae2af96d605b49a",url:"./tags/日语/index.html"},{revision:"65268b78ab88fb1f5bd6aee8846dc1e3",url:"./tags/游戏/index.html"},{revision:"12e94e767d0e64fdb3c9c18dc78f1b68",url:"./tags/猫咪大战争/index.html"},{revision:"53fcb320573579461f80fe0f454a7059",url:"./tags/生活/index.html"},{revision:"c55190a1a986bed544d4fcd0c3bcc1ea",url:"./tags/经验/index.html"},{revision:"8c670d14800aaf161df74de106184773",url:"./tags/食堂/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();