const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service workerDONE and manifest file.
// TODO: Add CSS loaders and babel to webpack.DONE

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    //IS THIS SOMETHING I NEED TO ADD? IF SO I NEED TO INSTALL "webpack-dev-server" npm - -D webpack-dev-server to package.json
    // npm run build

    // devServer: {
    //   // The `hot` option is to use the webpack-dev-server in combination with the hot module replacement API.
    //   hot: 'only',
    // },
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     template: './index.html',
    //     title: 'Webpack Plugin',
    //   }),
    //   new InjectManifest({
    //     swSrc: './client/src/src-sw.js',
    //     swDest: 'service-worker.js',
    //   }), 
    // ],

    module: {
      rules: [
        // {
        //   test: /\.css$/i,
        //   use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        // {
        //   test: /\.m?js$/,
        //   exclude: /(node_modules|bower_components)/,
        //   use: {
        //     loader: 'babel-loader',
        //     options: {
        //       presets: ['@babel/preset-env'],
        //     },
        //   },
        // },
      ],
    },
  };
};
