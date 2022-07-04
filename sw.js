const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Misaka"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"318abe2459ee8b046dc8ac6eac783134","url":"./404.html"},{"revision":"881f6abeafbcd0a34baad01b746f2de4","url":"./about/index.html"},{"revision":"7466c7ffef21fe508470eced77bf9e0d","url":"./archives/2022/04/index.html"},{"revision":"df80f482c465b59c61bd3ba3b237712f","url":"./archives/2022/05/index.html"},{"revision":"91e9022f35b677897a96e7af98b15a9d","url":"./archives/2022/06/index.html"},{"revision":"fb5d6610e127bcc6a56462122154dbd2","url":"./archives/2022/07/index.html"},{"revision":"297f274376b8b14c081baca1cc3f4add","url":"./archives/2022/index.html"},{"revision":"34552ef69b219ebedb6e2c922a0e10b7","url":"./archives/2022/page/2/index.html"},{"revision":"0bdd94d3232a92d9fd3659e75d42b217","url":"./archives/index.html"},{"revision":"654a46b77b6819f8c9c501f910052621","url":"./archives/page/2/index.html"},{"revision":"d2898853404ceb69cb161c89fbd63655","url":"./artitalk/index.html"},{"revision":"4938774ea59a8cd3d2fd4f62c7e4d44d","url":"./categories/index.html"},{"revision":"87649371b48b1ff078a791d88ff0f73a","url":"./categories/今天来点什么/index.html"},{"revision":"96c632156ae542164fc8dcebb61adee5","url":"./categories/学习使我快乐/index.html"},{"revision":"f24ec0f2144e290ecf69aafae1a3d0b1","url":"./categories/建站纪念/index.html"},{"revision":"037ddccc6ffde65816f9220d87458a90","url":"./categories/玩机技巧/index.html"},{"revision":"efa84a59e9a2f66fdfcc55abc9138305","url":"./categories/瞎吉儿优化/index.html"},{"revision":"431eb395ea6c00ec148c125229735a9f","url":"./categories/阿伟又在打电动/index.html"},{"revision":"53ca1b38d9899866ce284e9aa4f29c54","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2d49b75e3adc76e8bba639e8c2cf038d","url":"./img/404.png"},{"revision":"92e3f525998c999ece7005b3b6ec842b","url":"./img/pwa/android-chrome-144x144.png"},{"revision":"2178f122e4405ac6359d10d6288eacae","url":"./img/pwa/android-chrome-192x192.png"},{"revision":"d0584f31d02984f4b7895e204fcda67d","url":"./img/pwa/android-chrome-256x256.png"},{"revision":"4a0dc3b958684adc8a409c9a7018ad9b","url":"./img/pwa/android-chrome-36x36.png"},{"revision":"dad0bf612ab0b195284ddb2a707ce8ed","url":"./img/pwa/android-chrome-384x384.png"},{"revision":"bbc7520ec44f4419c9e7d7839241dc13","url":"./img/pwa/android-chrome-48x48.png"},{"revision":"417ed47a355652e1d665d6ac70873ee8","url":"./img/pwa/android-chrome-512x512.png"},{"revision":"b6b4ad589d60aa670dd23cbe0332cadd","url":"./img/pwa/android-chrome-72x72.png"},{"revision":"f99fafba116b9a357f4cd62d2c063c9e","url":"./img/pwa/android-chrome-96x96.png"},{"revision":"1fb02ee07cf25c981d306e19e739593a","url":"./img/pwa/apple-touch-icon.png"},{"revision":"6b6d67d2663938cae3b23cb939b6e024","url":"./img/pwa/favicon-16x16.png"},{"revision":"b727287f3ce9014147eaded436349918","url":"./img/pwa/favicon-32x32.png"},{"revision":"b9441b547cadb69647204aaaeb68a61a","url":"./img/pwa/mstile-150x150.png"},{"revision":"f8e5ba6c9fd18363ead854a4b6c70b98","url":"./img/pwa/safari-pinned-tab.svg"},{"revision":"417ed47a355652e1d665d6ac70873ee8","url":"./img/webicon.png"},{"revision":"e9f4bca2f1bc2e70d8b158e81c709b4e","url":"./index.html"},{"revision":"73e1a92da3a39646678bffb9e7817148","url":"./js/main.js"},{"revision":"308de383b932f321e04751fd1f79cffb","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"9f57d152a3a781c90560b3187bfbb99b","url":"./link/index.html"},{"revision":"9bd791736cfc91b62670dee5f7fbd45c","url":"./live2dw/assets/moc/tororo.2048/texture_00.png"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"5d3b243766a3fe851ddccdd20edbdafe","url":"./page/2/index.html"},{"revision":"b4ec94907cc3b240f9f9c87eee2fe1d1","url":"./posts/10802.html"},{"revision":"d97a2ca337170b706fb217a9dca39b36","url":"./posts/23251.html"},{"revision":"e40cdcc385eb73110df3639edc9cc1c9","url":"./posts/28163.html"},{"revision":"4ad8c20148d25a8467d4dec426064810","url":"./posts/30523.html"},{"revision":"78859af971525e35898db2baf816952b","url":"./posts/42791.html"},{"revision":"bc967c9e281c79d7abd567433b6ca94b","url":"./posts/43502.html"},{"revision":"672b3e04049d996a1ccdc275e4867ff4","url":"./posts/47697.html"},{"revision":"dfbe152e5a0a8a44ef976b1659b810c0","url":"./posts/481.html"},{"revision":"053404fda6037f9699bffc98b4500126","url":"./posts/48793.html"},{"revision":"ea0a894fa3ca07c64777596793821579","url":"./posts/62339.html"},{"revision":"84582cd5b0b85f81f8a3fb3c88e5c330","url":"./posts/64981.html"},{"revision":"e1d2f0a08646ffdfb2b7d1c54ecb3d13","url":"./tags/Fontmin/index.html"},{"revision":"69877da8c9f5cbbcd80d45ccac0ed6de","url":"./tags/index.html"},{"revision":"adc73a75c91a3b310242f12bc1816d04","url":"./tags/Python/index.html"},{"revision":"0dd97d0e0a6dbee88bfb7f96e46a702b","url":"./tags/Telegram/index.html"},{"revision":"281e90bd7abefe7bd513f29e2381e588","url":"./tags/Windows/index.html"},{"revision":"9d66c2e0bba42affef162462210b60dc","url":"./tags/厨艺/index.html"},{"revision":"e1225c6fe736171c5ebb9a4e8529f71d","url":"./tags/双拼/index.html"},{"revision":"8a17f431437f9239ab7aa976f656931b","url":"./tags/吃货/index.html"},{"revision":"ff6e71c3f38c68a9814a88b49761ea6a","url":"./tags/学习/index.html"},{"revision":"8e3a8c4f316c840e68d006f7e73f0c0a","url":"./tags/建站纪念/index.html"},{"revision":"7b056cd633674e8ba98d5ff8d9263210","url":"./tags/打卡/index.html"},{"revision":"484b16b93e2615bad0bbb0c7edd11019","url":"./tags/日语/index.html"},{"revision":"f181709d4000c59d392a16325b813afa","url":"./tags/游戏/index.html"},{"revision":"caa9dc28249c74ec67738aa2b7e72e23","url":"./tags/猫咪大战争/index.html"},{"revision":"06d712104e2d00ff28ed4bf542674be3","url":"./tags/生活/index.html"},{"revision":"b25823c396099a0c7fbb7878cdc211e3","url":"./tags/经验/index.html"},{"revision":"b4364d9d220d0d4202202b8df7dd59de","url":"./tags/食堂/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/res\.cloudinary\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// External Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.sourcegcdn\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: "external-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();