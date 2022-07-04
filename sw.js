const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Misaka"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

// 注册成功后要立即缓存的资源列表
// 具体缓存列表在gulpfile.js中配置，见下文
workbox.precaching.precacheAndRoute([{"revision":"712b3721f2ee493048ce80c62911ef26","url":"./404.html"},{"revision":"038aab2a7ed88eda73c4530056f08572","url":"./about/index.html"},{"revision":"e423b8ac49df0f341704c68d7c642fca","url":"./archives/2022/04/index.html"},{"revision":"faf10b04998c5b09098020fb4b6191c3","url":"./archives/2022/05/index.html"},{"revision":"84c45704d28a5e305d5097d9f0dd5ba4","url":"./archives/2022/06/index.html"},{"revision":"4c31aebd1cceec5713e14cc9ad39ea3b","url":"./archives/2022/07/index.html"},{"revision":"631ecd765b92881f6d895b1a0a6275d9","url":"./archives/2022/index.html"},{"revision":"b6f0b7139067a9cde1296805f5e0014a","url":"./archives/2022/page/2/index.html"},{"revision":"861aebea443390395a2739efb4295ed6","url":"./archives/index.html"},{"revision":"8c99b5c879f443dc2e7cd1087f742d9b","url":"./archives/page/2/index.html"},{"revision":"5921c24b2d8c00e880e69f181d500ead","url":"./artitalk/index.html"},{"revision":"619ada60366f0a6aa5d6f87e9e962473","url":"./categories/index.html"},{"revision":"bd8c39dbdc6d76f5359add0cea9cc57b","url":"./categories/今天来点什么/index.html"},{"revision":"b13b7f71e58fd09d6396ae9d61d48a1f","url":"./categories/学习使我快乐/index.html"},{"revision":"b59309f9a5763eeba08c5692a06a1863","url":"./categories/建站纪念/index.html"},{"revision":"63089700b76a6b3c1898e1029029eb53","url":"./categories/玩机技巧/index.html"},{"revision":"31480f2234d16715b13442e5ce700c61","url":"./categories/瞎吉儿优化/index.html"},{"revision":"2cf2601a6619a03e8886ee196fd3082b","url":"./categories/阿伟又在打电动/index.html"},{"revision":"53ca1b38d9899866ce284e9aa4f29c54","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2d49b75e3adc76e8bba639e8c2cf038d","url":"./img/404.png"},{"revision":"92e3f525998c999ece7005b3b6ec842b","url":"./img/pwa/android-chrome-144x144.png"},{"revision":"2178f122e4405ac6359d10d6288eacae","url":"./img/pwa/android-chrome-192x192.png"},{"revision":"d0584f31d02984f4b7895e204fcda67d","url":"./img/pwa/android-chrome-256x256.png"},{"revision":"4a0dc3b958684adc8a409c9a7018ad9b","url":"./img/pwa/android-chrome-36x36.png"},{"revision":"dad0bf612ab0b195284ddb2a707ce8ed","url":"./img/pwa/android-chrome-384x384.png"},{"revision":"bbc7520ec44f4419c9e7d7839241dc13","url":"./img/pwa/android-chrome-48x48.png"},{"revision":"417ed47a355652e1d665d6ac70873ee8","url":"./img/pwa/android-chrome-512x512.png"},{"revision":"b6b4ad589d60aa670dd23cbe0332cadd","url":"./img/pwa/android-chrome-72x72.png"},{"revision":"f99fafba116b9a357f4cd62d2c063c9e","url":"./img/pwa/android-chrome-96x96.png"},{"revision":"1fb02ee07cf25c981d306e19e739593a","url":"./img/pwa/apple-touch-icon.png"},{"revision":"6b6d67d2663938cae3b23cb939b6e024","url":"./img/pwa/favicon-16x16.png"},{"revision":"b727287f3ce9014147eaded436349918","url":"./img/pwa/favicon-32x32.png"},{"revision":"b9441b547cadb69647204aaaeb68a61a","url":"./img/pwa/mstile-150x150.png"},{"revision":"f8e5ba6c9fd18363ead854a4b6c70b98","url":"./img/pwa/safari-pinned-tab.svg"},{"revision":"417ed47a355652e1d665d6ac70873ee8","url":"./img/webicon.png"},{"revision":"4760162df94d0fc801c73d5562696ed8","url":"./index.html"},{"revision":"73e1a92da3a39646678bffb9e7817148","url":"./js/main.js"},{"revision":"308de383b932f321e04751fd1f79cffb","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"9182b08aaeadbf4e633e967d214f8e45","url":"./link/index.html"},{"revision":"9bd791736cfc91b62670dee5f7fbd45c","url":"./live2dw/assets/moc/tororo.2048/texture_00.png"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"2c4c295dfd33a384c2740efd5484a644","url":"./page/2/index.html"},{"revision":"66eba2bc9bdd981aab6a43925dcb592b","url":"./posts/10802.html"},{"revision":"f611c2cbfcaf3bfe658a397609432c27","url":"./posts/23251.html"},{"revision":"350f0c0af3e999e7882104b9a0737ca0","url":"./posts/28163.html"},{"revision":"d8119e9089537b4520b34e167a9afc1a","url":"./posts/30523.html"},{"revision":"b9433e92f420b962b451bad51f77ee48","url":"./posts/42791.html"},{"revision":"1465246de8febd8d8e79875a43edbea9","url":"./posts/43502.html"},{"revision":"ec7acc450adf13c76fc92cc44d37d8ec","url":"./posts/47697.html"},{"revision":"b053c5265aebf5f6a940c29eeac284f2","url":"./posts/481.html"},{"revision":"d507bb95ade868ca4fd4b6f0a08a13f1","url":"./posts/48793.html"},{"revision":"c7b826469d28513e45eff6549cccc914","url":"./posts/62339.html"},{"revision":"b615cb1d984848d4176a52199d289811","url":"./posts/64981.html"},{"revision":"30efbba80f43b8487194d8f75c1f09fc","url":"./tags/Fontmin/index.html"},{"revision":"907aa3d9b836a50c8b1ca7adb81d3161","url":"./tags/index.html"},{"revision":"315d6d13c16351745e8f89d617739e24","url":"./tags/Python/index.html"},{"revision":"05bfcd2fff1cc8f36126895adff9e00e","url":"./tags/Telegram/index.html"},{"revision":"cdfdd7f21353c3749fc1aeff7d84efa1","url":"./tags/Windows/index.html"},{"revision":"ac10510253d5af1f8d9368778996afca","url":"./tags/厨艺/index.html"},{"revision":"aa8258a1824111fa5554b6c13436c5b2","url":"./tags/双拼/index.html"},{"revision":"7f2bddf4e32b69d91258120282d1a1ca","url":"./tags/吃货/index.html"},{"revision":"5db9d54a040969803567213633afafba","url":"./tags/学习/index.html"},{"revision":"87e54649a34c128b7ba933509a2a948b","url":"./tags/建站纪念/index.html"},{"revision":"023d1045eae582cc99cb13b0951b69bf","url":"./tags/打卡/index.html"},{"revision":"903caaa550ec02065cd06a292e80640b","url":"./tags/日语/index.html"},{"revision":"67b6d43cf63090b95fc1a3fa804d0158","url":"./tags/游戏/index.html"},{"revision":"ab43442447496af158a4f1c522675bc8","url":"./tags/猫咪大战争/index.html"},{"revision":"a025d5ec9b11751a30bcca889c4e4de7","url":"./tags/生活/index.html"},{"revision":"b4488a9131ebd30045fc1ca4b79a3a6b","url":"./tags/经验/index.html"},{"revision":"0541ecd46db2f738e51a9940ea2eeb81","url":"./tags/食堂/index.html"}],{
    directoryIndex: null
});

// 清空过期缓存
workbox.precaching.cleanupOutdatedCaches();

// 图片资源（可选，不需要就注释掉）
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

// 字体文件（可选，不需要就注释掉）
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

// CDN资源（可选，不需要就注释掉）
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
workbox.routing.registerRoute(
    /^https:\/\/cdnjs\.sourcegcdn\.com/,
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

workbox.googleAnalytics.initialize();