const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"34027dcde0470fc1a37db065f4e9144b",url:"./404.html"},{revision:"e962356527221f6434117fbccc508d93",url:"./about/"},{revision:"31314b39223d94c9450cc083d47cea2a",url:"./archives/2022/04/"},{revision:"641880200648a48315363d13d41734c2",url:"./archives/2022/05/"},{revision:"6553a3c65fd7ce190567da1b2d6cf6d0",url:"./archives/2022/06/"},{revision:"e3a2989a39ea0961b4cceebccaed0b39",url:"./archives/2022/07/"},{revision:"f4e90c505650b5ebfd975f8f3eb52d29",url:"./archives/2022/"},{revision:"be0a94e54c38a3b01dca262153d58f94",url:"./archives/2022/page/2/"},{revision:"f81fe2eaae4fb1dab3fcadaac26c1677",url:"./archives/"},{revision:"ccdaa3bbe172d8eb12a0278fc6cc8da2",url:"./archives/page/2/"},{revision:"5c396fe7420627ee8176ef909cb4dd2b",url:"./artitalk/"},{revision:"14a3c5f1840fcdf42a12315bf8bcf973",url:"./categories/"},{revision:"ea9831ef9b44419f4696a7d113aa7855",url:"./categories/今天来点什么/"},{revision:"c4e6f912e8488ce48b8f64d21d03e989",url:"./categories/学习使我快乐/"},{revision:"e57173c3708c6101639c00a389c1ce98",url:"./categories/建站纪念/"},{revision:"4ecc2fd7ee9240ea865e7caa5b9653f6",url:"./categories/玩机技巧/"},{revision:"42dec8e42d880af809bc7213bd5a207e",url:"./categories/瞎吉儿优化/"},{revision:"b79d159957c4e94f91b62a60037b59a3",url:"./categories/阿伟又在打电动/"},{revision:"53ca1b38d9899866ce284e9aa4f29c54",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"cbb8f93959a3388ceb5e239f5b063471",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"531c140e8f37401dae8056e454234956",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"46f4d27ed664fdb7b34440dd9b7f0063",url:"./page/2/"},{revision:"1dc136e0e4ed4bccd14538c207284900",url:"./posts/10802.html"},{revision:"32ed721cd5aaaee3cd87d0506168217c",url:"./posts/11642.html"},{revision:"c52f1c1908413c54b6e05b64939488b2",url:"./posts/23251.html"},{revision:"31242a5f3530c96e3494eebf081241b8",url:"./posts/28163.html"},{revision:"c589e94472a52cf3c81ae87315455ba6",url:"./posts/30523.html"},{revision:"f70bafa0c4054981732f58a42be9b304",url:"./posts/42791.html"},{revision:"07bbeac4f4b2bc09b438ab6151f3b89b",url:"./posts/43502.html"},{revision:"34259aa24e97cc5f18d1bcf5516fc3a1",url:"./posts/47697.html"},{revision:"fce527b6d6e3c6e45059efd665f375d1",url:"./posts/481.html"},{revision:"c78240d5fcf99d80701a70e65151d594",url:"./posts/48793.html"},{revision:"168000236dfeba5cb30a20c7c1eafa16",url:"./posts/62339.html"},{revision:"834abc0c9ca46bf958968ea41ba6de35",url:"./posts/64981.html"},{revision:"c90c7602cde97982ac32cb5667b9ca6c",url:"./punch/"},{revision:"948e5aa0ccc8c4b96c93e50a6b7e6620",url:"./tags/Bot/"},{revision:"2ee0a3a3104e58abfc4d016df77be3ac",url:"./tags/Fontmin/"},{revision:"4102783ed3270e4497a6f69c0bf67857",url:"./tags/"},{revision:"584c784dd043c5ba7b49207d4707817a",url:"./tags/PWA/"},{revision:"3ff6479fd48bc9f6dcc0b8e38a5124ef",url:"./tags/Python/"},{revision:"dd3bdc7e3d647b52a63981c5e2cc0375",url:"./tags/Telegram/"},{revision:"3a34c0c6f6aed4cb168394d29ccc1e60",url:"./tags/Windows/"},{revision:"5a2b373669c1cdf90d1f91bbb4559ca9",url:"./tags/Workbox/"},{revision:"43671582a37b148dcf079427eae5de68",url:"./tags/厨艺/"},{revision:"4ffd2a56d8ff8585ac06512acad9b1a2",url:"./tags/双拼/"},{revision:"a5cfcbfcf76fb53e826c899f50335774",url:"./tags/吃货/"},{revision:"7f12e13f83ecf5d7474292858100a2d0",url:"./tags/学习/"},{revision:"0a636fc27de12b90171448f7b9c48e60",url:"./tags/建站纪念/"},{revision:"7471fe3db3b67ee238d72bbdf03e4e62",url:"./tags/打卡/"},{revision:"50b4d7f063bdee04b39cf183d7a72874",url:"./tags/日语/"},{revision:"0b8da3eb9b8899b637d5707dd83bc733",url:"./tags/游戏/"},{revision:"b190c5a80ba91c1e3314a34dcc50f827",url:"./tags/猫咪大战争/"},{revision:"7915b6d26f439e764da356ee3e941772",url:"./tags/生活/"},{revision:"563f3a0ae78b73d484d5c74319d46b84",url:"./tags/经验/"},{revision:"d5fb30884101d7f25c37ab08646c765b",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();