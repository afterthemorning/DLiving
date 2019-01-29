const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

var tsxEntry = __dirname+'\react/src\';

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: [tsxEntry],   // string | object | array
    // defaults to './src'
    // Here the application starts executing
    // and webpack starts bundling
    output: {
      path: __dirname+'/app/react',
      filename: 'app.js'
    },
    module: {
      rules: [
        //{ test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
      ]
    },
    resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
        modules: [
        "node_modules",
        path.resolve(__dirname, "app")
        ],
        // directories where to look for modules
        extensions: [".js", ".json", ".tsx", ".css"],
        // extensions that are used
        alias: {
        // a list of module name aliases
        "module": "new-module",
        // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
        "only-module$": "new-module",
        // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"
        "module": path.resolve(__dirname, "app/third/module.js"),
        // alias "module" -> "./app/third/module.js" and "module/file" results in error
        // modules aliases are imported relative to the current context
        },
    },
    /* alternative alias syntax (click to show) */
    /* Advanced resolve configuration (click to show) */
    optimization: {
        minimizer: [
        //   new UglifyJsPlugin({
        //     include: /\/app\/js/
        //   }),
        ],
      }
  };