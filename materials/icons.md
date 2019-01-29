PWA Prject:

Project Guideline
https://medium.com/codingthesmartway-com-blog/getting-started-with-progressive-web-apps-pwa-ab05bcc25bfd


Step 1. install bootstrap

https://getbootstrap.com/docs/4.2/getting-started/download/

Step 2. 生成图标
https://www.favicon-generator.org/

图标下载：https://pngtree.com/free-icons/mango-vector

Step 3. Init package.json

npm init

Step 4. Add Typescript support

|- Add Type script for global complier
npm install --global typescript

|- Add the type script for my project
npm install --save-dev typescript

Step 5: Install React and Reac-DOM
npm install react react-dom
npm install --save-dev @types/react @types/react-dom

Step 6: Write some React code

Step 7: Running project

live-server --entry-file=app/index.html

As before you can build and watch for changes with npm run watch, or use npm run build for a minified production build.


Step 8: Add  typescript loader

npm install awesome-typescript-loader --save-dev

Step 9: Add  uglify js plugin

npm install uglifyjs-webpack-plugin --save-dev


参考网站：

https://www.wego.cn/
https://developers.google.com/web/showcase/2017/wego
https://mp.weixin.qq.com/s/LvooedOYCJzM8G20Tlw0HQ
https://segmentfault.com/a/1190000012353473?utm_source=tag-newest
https://www.oschina.net/news/93871/pwa-expected-major-explosion-2018
https://developers.google.com/web/fundamentals/primers/service-workers/


https://github.com/twbs/bootstrap
https://www.npmtrends.com/bootstrap-vs-ionic


TypeScript Helper:

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
http://www.typescriptlang.org/docs/handbook/compiler-options.html


Live-Server

--port=NUMBER - select port to use, default: PORT env var or 8080
--host=ADDRESS - select host address to bind to, default: IP env var or 0.0.0.0 (“any address”)
--no-browser - suppress automatic web browser launching
--browser=BROWSER - specify browser to use instead of system default
--quiet | -q - suppress logging
--verbose | -V - more logging (logs all requests, shows all listening IPv4 interfaces, etc.)
--open=PATH - launch browser to PATH instead of server root
--watch=PATH - comma-separated string of paths to exclusively watch for changes (default: watch everything)
--ignore=PATH - comma-separated string of paths to ignore (anymatch-compatible definition)
--ignorePattern=RGXP - Regular expression of files to ignore (ie .*\.jade) (DEPRECATED in favor of --ignore)
--middleware=PATH - path to .js file exporting a middleware function to add; can be a name without path nor extension to reference bundled middlewares in middleware folder
--entry-file=PATH - serve this file (server root relative) in place of missing files (useful for single page apps)
--mount=ROUTE:PATH - serve the paths contents under the defined route (multiple definitions possible)
--spa - translate requests from /abc to /#/abc (handy for Single Page Apps)
--wait=MILLISECONDS - (default 100ms) wait for all changes, before reloading
--htpasswd=PATH - Enables http-auth expecting htpasswd file located at PATH
--cors - Enables CORS for any origin (reflects request origin, requests with credentials are supported)
--https=PATH - PATH to a HTTPS configuration module
--proxy=ROUTE:URL - proxy all requests for ROUTE to URL
--help | -h - display terse usage hint and exit
--version | -v - display version and exit