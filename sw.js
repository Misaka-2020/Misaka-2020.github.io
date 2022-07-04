const workboxVersion = '6.5.2';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Misaka"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

// 注册成功后要立即缓存的资源列表
// 具体缓存列表在gulpfile.js中配置，见下文
workbox.precaching.precacheAndRoute([{"revision":"577060e8df27783ae389f3b5cdd7233c","url":"./404.html"},{"revision":"a6871f298519e06d2699687ab75100ff","url":"./about/index.html"},{"revision":"8c216b72a1abd9823a350e21d1162d21","url":"./archives/2022/04/index.html"},{"revision":"24ad75292edcf6613ec506d088098b41","url":"./archives/2022/05/index.html"},{"revision":"82bbefbf2114ce295ec40c06217340f8","url":"./archives/2022/06/index.html"},{"revision":"924d70753246c9cb05aabc5deb6bbe71","url":"./archives/2022/07/index.html"},{"revision":"ac1a68f3e244df8f0d1d2c4ab98c1b6d","url":"./archives/2022/index.html"},{"revision":"3c523766dee1154fb3f656e61b2902aa","url":"./archives/2022/page/2/index.html"},{"revision":"07494c79bb66affe0b143909b2b3f581","url":"./archives/index.html"},{"revision":"e040d9f172f13f7b7e2f13ab5ee5aaf5","url":"./archives/page/2/index.html"},{"revision":"0edcc95f10e89bf3dd40365fd30d9ff8","url":"./artitalk/index.html"},{"revision":"f5e5c9ed6a557867b03cb7e35de78419","url":"./categories/index.html"},{"revision":"8d83a286c61bf8f3d6893a346bdc097f","url":"./categories/今天来点什么/index.html"},{"revision":"e91da9de205e2db6d5f2aa28413ef95a","url":"./categories/学习使我快乐/index.html"},{"revision":"a246ab18cb571a545e2f3d5a66185780","url":"./categories/建站纪念/index.html"},{"revision":"cef02a3c3986f7c6097c1f6188f695c6","url":"./categories/玩机技巧/index.html"},{"revision":"b3ce4d48b0b1b6ade7da476116bdbbf2","url":"./categories/瞎吉儿优化/index.html"},{"revision":"97d36815fc24bebce47868f7fe0d4ec0","url":"./categories/阿伟又在打电动/index.html"},{"revision":"53ca1b38d9899866ce284e9aa4f29c54","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"2d49b75e3adc76e8bba639e8c2cf038d","url":"./img/404.png"},{"revision":"92e3f525998c999ece7005b3b6ec842b","url":"./img/pwa/android-chrome-144x144.png"},{"revision":"2178f122e4405ac6359d10d6288eacae","url":"./img/pwa/android-chrome-192x192.png"},{"revision":"d0584f31d02984f4b7895e204fcda67d","url":"./img/pwa/android-chrome-256x256.png"},{"revision":"4a0dc3b958684adc8a409c9a7018ad9b","url":"./img/pwa/android-chrome-36x36.png"},{"revision":"dad0bf612ab0b195284ddb2a707ce8ed","url":"./img/pwa/android-chrome-384x384.png"},{"revision":"bbc7520ec44f4419c9e7d7839241dc13","url":"./img/pwa/android-chrome-48x48.png"},{"revision":"417ed47a355652e1d665d6ac70873ee8","url":"./img/pwa/android-chrome-512x512.png"},{"revision":"b6b4ad589d60aa670dd23cbe0332cadd","url":"./img/pwa/android-chrome-72x72.png"},{"revision":"f99fafba116b9a357f4cd62d2c063c9e","url":"./img/pwa/android-chrome-96x96.png"},{"revision":"1fb02ee07cf25c981d306e19e739593a","url":"./img/pwa/apple-touch-icon.png"},{"revision":"6b6d67d2663938cae3b23cb939b6e024","url":"./img/pwa/favicon-16x16.png"},{"revision":"b727287f3ce9014147eaded436349918","url":"./img/pwa/favicon-32x32.png"},{"revision":"b9441b547cadb69647204aaaeb68a61a","url":"./img/pwa/mstile-150x150.png"},{"revision":"f8e5ba6c9fd18363ead854a4b6c70b98","url":"./img/pwa/safari-pinned-tab.svg"},{"revision":"417ed47a355652e1d665d6ac70873ee8","url":"./img/webicon.png"},{"revision":"d84b5922fa02903aeece1d88e55d7161","url":"./index.html"},{"revision":"73e1a92da3a39646678bffb9e7817148","url":"./js/main.js"},{"revision":"308de383b932f321e04751fd1f79cffb","url":"./js/search/algolia.js"},{"revision":"149fcc60c1de0a818e111978d01cbd87","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"24971090b8b1bd5d3f538d414e270fd3","url":"./js/utils.js"},{"revision":"26dcc7de87f2d91b5be990668a48db5a","url":"./link/index.html"},{"revision":"9bd791736cfc91b62670dee5f7fbd45c","url":"./live2dw/assets/moc/tororo.2048/texture_00.png"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"bf9c6f4c7759a13a83f66238b365458a","url":"./page/2/index.html"},{"revision":"66eba2bc9bdd981aab6a43925dcb592b","url":"./posts/10802.html"},{"revision":"f611c2cbfcaf3bfe658a397609432c27","url":"./posts/23251.html"},{"revision":"350f0c0af3e999e7882104b9a0737ca0","url":"./posts/28163.html"},{"revision":"d8119e9089537b4520b34e167a9afc1a","url":"./posts/30523.html"},{"revision":"b9433e92f420b962b451bad51f77ee48","url":"./posts/42791.html"},{"revision":"1465246de8febd8d8e79875a43edbea9","url":"./posts/43502.html"},{"revision":"329f6dc8648e96098cd08d3c41ba31b3","url":"./posts/47697.html"},{"revision":"b053c5265aebf5f6a940c29eeac284f2","url":"./posts/481.html"},{"revision":"d507bb95ade868ca4fd4b6f0a08a13f1","url":"./posts/48793.html"},{"revision":"c7b826469d28513e45eff6549cccc914","url":"./posts/62339.html"},{"revision":"b615cb1d984848d4176a52199d289811","url":"./posts/64981.html"},{"revision":"05a930109f8894813dbd24ed765467f9","url":"./tags/Fontmin/index.html"},{"revision":"e7cab9cb9279a5ec76fa8af412fb05ff","url":"./tags/index.html"},{"revision":"61d21ba5c977202b3b6de1aea141924d","url":"./tags/Python/index.html"},{"revision":"d5521d26d52511f9ced3df16324cb545","url":"./tags/Telegram/index.html"},{"revision":"2a564814b1bedd0a6fb911881dc46eac","url":"./tags/Windows/index.html"},{"revision":"6bb36e84180ffadc180b80287353966c","url":"./tags/厨艺/index.html"},{"revision":"348c4d21ef573f094b1ad5f0c23fa4b7","url":"./tags/双拼/index.html"},{"revision":"9a1385a255b59f58c7604d2bc1cfa81d","url":"./tags/吃货/index.html"},{"revision":"ac32e1eb414af87b3b6d6f61819e0ce3","url":"./tags/学习/index.html"},{"revision":"88df8f2bf31cad06c1c39e809a74e3f6","url":"./tags/建站纪念/index.html"},{"revision":"3bdda397c6e5afa2d4c02ec80d74ac8f","url":"./tags/打卡/index.html"},{"revision":"acda30a0609b751c2bcfbcbcc6a5993f","url":"./tags/日语/index.html"},{"revision":"918f1cf206ec2af4c1fc218f3f4a84fe","url":"./tags/游戏/index.html"},{"revision":"b58a7591623d383d90828f7f6082e32c","url":"./tags/猫咪大战争/index.html"},{"revision":"de5a8b87e1e8a11e04ee1beb2be6f757","url":"./tags/生活/index.html"},{"revision":"3f078e4257012b3c0e379c613d2c168c","url":"./tags/经验/index.html"},{"revision":"8caccd3c2d477b4d314609acdb393790","url":"./tags/食堂/index.html"}],{
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