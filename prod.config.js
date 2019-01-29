module.exports = {
    entry: __dirname+'/react/',// string | object | array
    // defaults to './src'
    // Here the application starts executing
    // and webpack starts bundling
    output: {
      path: __dirname+'/app/react',
      filename: 'app.js'
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: 'awesome-typescript-loader' }
      ]
    }
  };