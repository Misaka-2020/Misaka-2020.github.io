const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"dfaac99ddc3e0516d305064bcb05f0dd",url:"./404.html"},{revision:"f81069c9074b5e957d319fb74a2a1635",url:"./about/"},{revision:"8535fa7e7f12441d77e5fbd8d5d5ed2a",url:"./archives/2022/04/"},{revision:"a9c32012408883d7a9d1692ae10b3967",url:"./archives/2022/05/"},{revision:"94998846ae780f02a99701dff17cbfd9",url:"./archives/2022/06/"},{revision:"d625ff56950d0c850ccfb8eca5545927",url:"./archives/2022/07/"},{revision:"d5113fb7b8e8b1c9357cdd5cd790f117",url:"./archives/2022/"},{revision:"818f7c04fd85fd883be3ab64c8a1e59d",url:"./archives/2022/page/2/"},{revision:"5179cf7fcbea92429809f4e908a73d98",url:"./archives/"},{revision:"44a5029aa6c67723088a55f244cab8f6",url:"./archives/page/2/"},{revision:"cd39e67c9a86a94a096dc54efb9de1c9",url:"./artitalk/"},{revision:"67aa234c2aceac5a10f0a319614dbd3d",url:"./categories/"},{revision:"b325394e3612719a68cab61492164792",url:"./categories/今天来点什么/"},{revision:"e931b36f2e32ce9506e712d816fda781",url:"./categories/学习使我快乐/"},{revision:"9039bcd0d5887a2cd774f260085806b1",url:"./categories/建站纪念/"},{revision:"cbba44854feab44bb5ea1fc4a2ffcd3c",url:"./categories/玩机技巧/"},{revision:"94dfc326f1769ebe35aabb10288afa41",url:"./categories/瞎吉儿优化/"},{revision:"84c23efe965dd2400bb3e8798c8c977f",url:"./categories/阿伟又在打电动/"},{revision:"0b1d8cd944877c2197d463b1e111c2a4",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"8b0c4219f37450d96fbd9b9eb5054359",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"2d2656c047e77e7f07aed7718aaed79e",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"a19f491a2a129b0bdd046361e0b9a200",url:"./page/2/"},{revision:"6f46fea70310e3e439d8dd22bec94732",url:"./posts/10802.html"},{revision:"5040c1f22377863930f90293bbe94bc8",url:"./posts/11642.html"},{revision:"eb708d2d23e589f2e6c8a9668477e53c",url:"./posts/23251.html"},{revision:"601182c6d98fb1106413d070af0460b8",url:"./posts/28163.html"},{revision:"465df1638b76a3af38924131bf918855",url:"./posts/30523.html"},{revision:"759727ab56f9e70a3e9312241b96ad15",url:"./posts/42791.html"},{revision:"593753df9b66dc2c38ff74aed7e25871",url:"./posts/43502.html"},{revision:"8a95e49963f2fe5636434a76938a7e3b",url:"./posts/47697.html"},{revision:"2ff7342ed480eb4d6b99b94126802de1",url:"./posts/481.html"},{revision:"4da762e1a9b387e1e4b33604ad97bfee",url:"./posts/48793.html"},{revision:"094a4b66dba9be0d2566ceddaea3ebf7",url:"./posts/62339.html"},{revision:"df63900c962ef9c95e0d16c7a744d0b1",url:"./posts/64981.html"},{revision:"cba0384ac4877924f0bb2a5546e79654",url:"./punch/"},{revision:"5311d29b5e38777ea275b32fc3885a13",url:"./tags/Bot/"},{revision:"6c85763baeedc772e4e5498bad683c0d",url:"./tags/Fontmin/"},{revision:"54fccdcafd14ee9776fff4c90e9c1d9f",url:"./tags/"},{revision:"142f131cc4435c90caece66d94fa0464",url:"./tags/PWA/"},{revision:"11fac36d5d0964fe527b06d5ba66f82f",url:"./tags/Python/"},{revision:"db254b1e5486792d6f4a717652f50450",url:"./tags/Telegram/"},{revision:"b24cb16e14ecfdf27f71389f0ce6ce5e",url:"./tags/Windows/"},{revision:"a1a873ac60fa213039041fe82c617cbe",url:"./tags/Workbox/"},{revision:"41b0f3fb5124fe478d184bfe0f67ca2f",url:"./tags/厨艺/"},{revision:"488578d63f2411fd8368631e89d9ea85",url:"./tags/双拼/"},{revision:"c59b2ca95257699ffeb1a670dd05a49f",url:"./tags/吃货/"},{revision:"614c15f0282bd447c818124953d47a3b",url:"./tags/学习/"},{revision:"8df6600f4217b7a075cc2895082f9410",url:"./tags/建站纪念/"},{revision:"ac1b63356330b9b5d07982fc97d4c1de",url:"./tags/打卡/"},{revision:"ad99f22238aab85ee967011d3defa831",url:"./tags/日语/"},{revision:"ef43e76ea595ce50d1fa77fdd54bc84c",url:"./tags/游戏/"},{revision:"67225e4649c3cf1eb22e1aff99c0ce41",url:"./tags/猫咪大战争/"},{revision:"f4fd4cd4afa1f37e6683274d14f7f96c",url:"./tags/生活/"},{revision:"8c5d998173f855bc6b6b91f88b5a384d",url:"./tags/经验/"},{revision:"c10053f02ea6089ded8392a3b4801be5",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();