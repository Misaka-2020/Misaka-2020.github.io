const workboxVersion="6.5.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Misaka"}),self.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"840672e506f3b4093185733a709ad52e",url:"./404.html"},{revision:"6510a8ffca689adfda4d920e7e1181bf",url:"./about/"},{revision:"daa8d1f0b75174113cbed3bb7947851c",url:"./archives/2022/04/"},{revision:"dc1b16b490499321f17760afae9fed2d",url:"./archives/2022/05/"},{revision:"be053f429d05c5d3a3d74cc43e0008c9",url:"./archives/2022/06/"},{revision:"681ea51fd5cae53749b2ee942e9446f2",url:"./archives/2022/07/"},{revision:"f2784f61ccf501b7865016d013913167",url:"./archives/2022/"},{revision:"7c8468873167683b020c8a1b9476ede2",url:"./archives/2022/page/2/"},{revision:"36882fd2458174091d8a6dfde4f6cf54",url:"./archives/"},{revision:"d4d2bec41245aaa2ad1600d17025ffcb",url:"./archives/page/2/"},{revision:"cc55279d930752e050846c6464511764",url:"./artitalk/"},{revision:"30ee91487af5d8a9642c770a01675bef",url:"./categories/"},{revision:"4fd106d27e4cdab153853eca51e146c2",url:"./categories/今天来点什么/"},{revision:"bc14116421bb42d2ae867afac3bd94e5",url:"./categories/学习使我快乐/"},{revision:"4e170042585fde9073a1002136b55e4d",url:"./categories/建站纪念/"},{revision:"3958c7ad76eb8214be6780bec78ca4b8",url:"./categories/玩机技巧/"},{revision:"f942d808458767235e373fa5794ad6a5",url:"./categories/瞎吉儿优化/"},{revision:"62a6db40410c6950f6c9c543b919a1af",url:"./categories/阿伟又在打电动/"},{revision:"0b1d8cd944877c2197d463b1e111c2a4",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d49b75e3adc76e8bba639e8c2cf038d",url:"./img/404.png"},{revision:"92e3f525998c999ece7005b3b6ec842b",url:"./img/pwa/android-chrome-144x144.png"},{revision:"2178f122e4405ac6359d10d6288eacae",url:"./img/pwa/android-chrome-192x192.png"},{revision:"d0584f31d02984f4b7895e204fcda67d",url:"./img/pwa/android-chrome-256x256.png"},{revision:"4a0dc3b958684adc8a409c9a7018ad9b",url:"./img/pwa/android-chrome-36x36.png"},{revision:"dad0bf612ab0b195284ddb2a707ce8ed",url:"./img/pwa/android-chrome-384x384.png"},{revision:"bbc7520ec44f4419c9e7d7839241dc13",url:"./img/pwa/android-chrome-48x48.png"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/pwa/android-chrome-512x512.png"},{revision:"b6b4ad589d60aa670dd23cbe0332cadd",url:"./img/pwa/android-chrome-72x72.png"},{revision:"f99fafba116b9a357f4cd62d2c063c9e",url:"./img/pwa/android-chrome-96x96.png"},{revision:"1fb02ee07cf25c981d306e19e739593a",url:"./img/pwa/apple-touch-icon.png"},{revision:"6b6d67d2663938cae3b23cb939b6e024",url:"./img/pwa/favicon-16x16.png"},{revision:"b727287f3ce9014147eaded436349918",url:"./img/pwa/favicon-32x32.png"},{revision:"b9441b547cadb69647204aaaeb68a61a",url:"./img/pwa/mstile-150x150.png"},{revision:"f8e5ba6c9fd18363ead854a4b6c70b98",url:"./img/pwa/safari-pinned-tab.svg"},{revision:"417ed47a355652e1d665d6ac70873ee8",url:"./img/webicon.png"},{revision:"9136933c004bbbb034cd25dc2cf21192",url:"./"},{revision:"73e1a92da3a39646678bffb9e7817148",url:"./js/main.js"},{revision:"308de383b932f321e04751fd1f79cffb",url:"./js/search/algolia.js"},{revision:"149fcc60c1de0a818e111978d01cbd87",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"24971090b8b1bd5d3f538d414e270fd3",url:"./js/utils.js"},{revision:"7f9e8739621f68c72955bbd91f969ff7",url:"./link/"},{revision:"9bd791736cfc91b62670dee5f7fbd45c",url:"./live2dw/assets/moc/tororo.2048/texture_00.png"},{revision:"32973883fcac0a9ae6cc79c0ea25fda2",url:"./live2dw/lib/L2Dwidget.0.min.js"},{revision:"094cbace49a39548bed64abff5988b05",url:"./live2dw/lib/L2Dwidget.min.js"},{revision:"ec97b1819a14caf98784edf868147ca6",url:"./page/2/"},{revision:"6f46fea70310e3e439d8dd22bec94732",url:"./posts/10802.html"},{revision:"5040c1f22377863930f90293bbe94bc8",url:"./posts/11642.html"},{revision:"eb708d2d23e589f2e6c8a9668477e53c",url:"./posts/23251.html"},{revision:"601182c6d98fb1106413d070af0460b8",url:"./posts/28163.html"},{revision:"465df1638b76a3af38924131bf918855",url:"./posts/30523.html"},{revision:"759727ab56f9e70a3e9312241b96ad15",url:"./posts/42791.html"},{revision:"593753df9b66dc2c38ff74aed7e25871",url:"./posts/43502.html"},{revision:"28421d1d37f92c4915d15626ee419b74",url:"./posts/47697.html"},{revision:"2ff7342ed480eb4d6b99b94126802de1",url:"./posts/481.html"},{revision:"4da762e1a9b387e1e4b33604ad97bfee",url:"./posts/48793.html"},{revision:"094a4b66dba9be0d2566ceddaea3ebf7",url:"./posts/62339.html"},{revision:"df63900c962ef9c95e0d16c7a744d0b1",url:"./posts/64981.html"},{revision:"4429def488d607482f061a269016846b",url:"./punch/"},{revision:"a5a6b326cd65e82143bbbeada68fb196",url:"./tags/Bot/"},{revision:"db737c272116a615172b2192bca0a855",url:"./tags/Fontmin/"},{revision:"726822b62c81e0b16e3244757f24a0e0",url:"./tags/"},{revision:"42b486989e34d4baa2a1b88f1d2c1c95",url:"./tags/PWA/"},{revision:"c7291f902b35e13ae4e4153b9252e290",url:"./tags/Python/"},{revision:"1afe6368037aac12b75e2c76d84e46c9",url:"./tags/Telegram/"},{revision:"f2e3cc243331a62872eae14292bb89e0",url:"./tags/Windows/"},{revision:"46d3fb92a263bbe60051873bcbb9d2a3",url:"./tags/Workbox/"},{revision:"6a1c3b1276e4a6c1846432f022c7d094",url:"./tags/厨艺/"},{revision:"fbc8008d740ba0560766fc45cda3b89c",url:"./tags/双拼/"},{revision:"4ad717c58dca76181978a0b324942e1c",url:"./tags/吃货/"},{revision:"3f266fba05730fa510b2f34842dfb050",url:"./tags/学习/"},{revision:"c52597ae32efa302dfb4fde7435460f4",url:"./tags/建站纪念/"},{revision:"ff13360970f7fbeed58f292200dfe00d",url:"./tags/打卡/"},{revision:"ab47f8b3af395079bff7f1bd1027c107",url:"./tags/日语/"},{revision:"05d82417bc6c5cfc8cae8aa1a9130674",url:"./tags/游戏/"},{revision:"8dbe511ed1b55994c616334a86d2abf5",url:"./tags/猫咪大战争/"},{revision:"e152ff46376a64fb63ece9eb77be93dd",url:"./tags/生活/"},{revision:"6867f5a5607b91f8a6f597c41902296a",url:"./tags/经验/"},{revision:"1d33df0bd4c6eeae01ee41f2fecfecdf",url:"./tags/食堂/"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/res\.cloudinary\.com/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdnjs\.sourcegcdn\.com/,new workbox.strategies.CacheFirst({cacheName:"external-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();