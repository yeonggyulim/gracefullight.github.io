importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.googleAnalytics.initialize(),workbox.navigationPreload.enable();const successStatusPlugin=new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),weekExpirePlugin=new workbox.expiration.ExpirationPlugin({maxAgeSeconds:604800});workbox.routing.registerRoute(new workbox.routing.NavigationRoute(workbox.strategies.NetworkFirst({cacheName:"cached-navigations",plugins:[weekExpirePlugin],matchOptions:{ignoreSearch:!0}}),{denylist:[new RegExp("/profile/")]})),workbox.routing.registerRoute(/.*(?:imgur)\.com.*$/,workbox.strategies.CacheFirst({plugins:[successStatusPlugin]})),workbox.routing.registerRoute(/.*(?:disqus)\.com.*$/,workbox.strategies.CacheFirst({plugins:[successStatusPlugin]})),workbox.routing.registerRoute(/.*(?:jsdelivr)\.net.*$/,workbox.strategies.CacheFirst({plugins:[successStatusPlugin]})),workbox.routing.registerRoute(/.*(?:buymeacoffee)\.com.*$/,workbox.strategies.CacheFirst({plugins:[successStatusPlugin]})),workbox.routing.registerRoute(/.*(?:bootcss)\.com.*$/,workbox.strategies.StaleWhileRevalidate()),workbox.routing.registerRoute(/.*(?:kakao)\.com.*$/,workbox.strategies.StaleWhileRevalidate()),workbox.routing.registerRoute(/.*(?:qbox)\.me.*$/,workbox.strategies.StaleWhileRevalidate()),workbox.routing.registerRoute(/.*(?:onesignal)\.com.*$/,workbox.strategies.StaleWhileRevalidate()),workbox.precaching.precacheAndRoute([{revision:"3464661ee5498a08db5b56d1cc4fe964",url:"a2hs.js"},{revision:"3e6bd75abdd7f7ae1bcc78918515c449",url:"ads.txt"},{revision:"26274b3cbb0b51e5f015af23b950524c",url:"css/main.css"},{revision:"fd40b88ac5370a5353a50b8175c1f367",url:"images/algolia_logo.svg"},{revision:"fce961f0bd3cd769bf9c605ae6749bc0",url:"images/apple-touch-icon-next.png"},{revision:"1c681acc4a150e7236254c464bb5a797",url:"images/cc-by-nc-nd.svg"},{revision:"12b4b29e8453be5b7828b524d3feabce",url:"images/cc-by-nc-sa.svg"},{revision:"dd9cfe99ed839a4a548114f988d653f4",url:"images/cc-by-nc.svg"},{revision:"2d80546af20128215dc1e23ef42d06c2",url:"images/cc-by-nd.svg"},{revision:"c696b3db81cbbfba32f66c1dc88b909a",url:"images/cc-by-sa.svg"},{revision:"6c4f8422b3725cb9f26b6c00e95fc88b",url:"images/cc-by.svg"},{revision:"79deee77a07fcb79ff680ac0125eacb9",url:"images/cc-zero.svg"},{revision:"b8975923a585dbaa8519a6068e364947",url:"images/favicon-16x16-next.png"},{revision:"5a029563fe3214c96f68b46556670ea1",url:"images/favicon-32x32-next.png"},{revision:"3ba22a9a93f0a031da0bf874e20db3a5",url:"images/favicon.ico"},{revision:"3ba22a9a93f0a031da0bf874e20db3a5",url:"images/icons/favicon.ico"},{revision:"7643ad33e5e41a36cd5f75dba549bec9",url:"images/icons/icon-128x128.png"},{revision:"b905cb2aee57a55edf8a99f50afe24ea",url:"images/icons/icon-144x144.png"},{revision:"374e47146f16346990918acabab2c3a3",url:"images/icons/icon-152x152.png"},{revision:"2ea9730c6c6de3b8d1b548f15f9a23f2",url:"images/icons/icon-16x16.png"},{revision:"6f3e9b84eb6404f8f532b9e2d63bf4e0",url:"images/icons/icon-180x180.png"},{revision:"ace8b9662221c66d8ba4696d45d8bdb7",url:"images/icons/icon-192x192.png"},{revision:"2ea9730c6c6de3b8d1b548f15f9a23f2",url:"images/icons/icon-32x32.png"},{revision:"40d2398b0a7d14a5302e1675c8ba91dd",url:"images/icons/icon-48x48.png"},{revision:"a448588afc263cfeace4d76a5144a8d9",url:"images/icons/icon-512x512.png"},{revision:"0d95c8845fbd289d32020d955712f1f1",url:"images/icons/icon-72x72.png"},{revision:"9d27e582fdd0e72077d9211ef17b310c",url:"images/icons/icon-96x96.png"},{revision:"5bea188ef94e4c0dc7f088b5bd2d1f8f",url:"images/icons/icon-pinned-tab.svg"},{revision:"3ec1749c7c22aa322e41d8590f1cc0a8",url:"images/icons/mstile-150x150.png"},{revision:"ddad9027e42111ccd5b466bc18188970",url:"images/logo.svg"},{revision:"75073bc6415fe1931e2b5d00d37e60f5",url:"images/my_brand.jpg"},{revision:"8578a67d75506ddf7db0b6832b45415e",url:"images/profile_dog.png"},{revision:"1238a4baccd02c6025ec85b58f4282d4",url:"images/quote-l.svg"},{revision:"85787c6fa27965c81f7be70252b43bed",url:"images/quote-r.svg"},{revision:"7c334d580ed0c7f2639cc93a4b7d6f9e",url:"js/local-search.js"},{revision:"c8906b70f7e48a63c06e7334fc6f2b47",url:"js/motion.js"},{revision:"945140fa822d8917dfcb14f7473833f6",url:"js/next-boot.js"},{revision:"450b3ff4d24e64773919f26547dfe28f",url:"js/schemes/pisces.js"},{revision:"3e52ce68063d1a1dcb7ebda20717ba49",url:"js/utils.js"},{revision:"864a144dbbc956381a47679ec57ab06c",url:"lib/anime.min.js"},{revision:"c1b8d079c7049879838d78e0b389965e",url:"lib/velocity/velocity.min.js"},{revision:"444faf512fb24d50a5dec747cbbe39bd",url:"lib/velocity/velocity.ui.min.js"},{revision:"c79faa9878c854743b460a368f884c5b",url:"OneSignalSDKUpdaterWorker.js"},{revision:"c79faa9878c854743b460a368f884c5b",url:"OneSignalSDKWorker.js"},{revision:"21e7b1bb78e0bef85b2b3347142e2fc9",url:"robots.txt"},{revision:"a5bb5df1cb83a8fb8888139f8fdf40bd",url:"sitemap.xsl"},{revision:"9a809be113e7ad15ec723093cc6d819c",url:"sw-base.js"},{revision:"92be01f96d625e52d0b791f9633cee76",url:"sw.js"},{revision:"4ee030478fed2cd52a81fb272eb43c46",url:"index.html"},{revision:"60b008f139e0055ecee3b85eefd69e81",url:"manifest.json"}]);