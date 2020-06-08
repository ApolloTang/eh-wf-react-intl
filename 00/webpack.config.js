const pathResolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {getIfUtils, removeEmpty} = require('webpack-config-utils');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');




// -- Configuration Setting -- //
const title = 'react app';
const webpackDevServer_host = '0.0.0.0';
const webpackDevServer_port = '9090';
const absPathToSrc = pathResolve(__dirname, 'src');
const absPathToDist = pathResolve(__dirname, 'dist');
const absPathToFont = pathResolve(__dirname, 'src/common/fonts');


const webpackConfig_fn = (env = {}) => {
  console.log('env', env)
  const _mode = env.mode || 'production';
  const {ifProduction} = getIfUtils(_mode);

  const devServer = ifProduction( {}, {
    devServer: {
      host: webpackDevServer_host,
      port: webpackDevServer_port,
      historyApiFallback: true,
      stats: 'minimal'
    }
  });

  const configOut = {
    ...devServer,
    mode: _mode,
    devtool: 'source-map',
    context: absPathToSrc,
    entry: {
      main: [
        './main'
      ]
    },
    output: ifProduction(
      {
        filename: '[name]-[chunkhash].js',
        path: absPathToDist
      },
      {
        publicPath: '/'
      }
    ),
    resolve: {
      modules: [ absPathToSrc, 'node_modules'],
      extensions: ['*', '.mjs', '.js', '.ts', '.jsx', '.tsx']
    },
    module: {
      rules: removeEmpty([
        {
          test: /\.m?(j|t)sx?$/,
          use: 'babel-loader',
          exclude: /node_modules/  // <---- very important
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$/,
          loader: 'file-loader?name=./imgs/[name].[hash].[ext]',
          exclude: absPathToFont
        },
        {
          test: /\.(woff|woff2|ttf|eot|svg|otf)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
        }
      ])
    },
    plugins: removeEmpty([
      new ProgressBarPlugin({
        format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        clear: false
      }),
      new HtmlWebpackPlugin({
        template: 'index.html',
        title: title,
        favicon: './common/images/favicon.ico'
      }),
      new webpack.EnvironmentPlugin({
        ENABLE_REDUX_LOGGER: !!env.withReduxLogger,
      }),
      new Dotenv({
        path: './.env',
        safe: false, // set to true suppose to load .env.example, but does not work.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false // load '.env.defaults' as the default values if empty.
      })
    ])
  };

  return configOut;
};

module.exports = webpackConfig_fn;
