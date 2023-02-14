const path = require('path');
const webpack = require('webpack');

const rootNodeModules = path.join(__dirname, '..', '..', 'node_modules');
const nodeModules = path.join(__dirname, '..', 'node_modules');

/** @type {()=>import('@docusaurus/types').Plugin} */
const a = function () {
  return {
    name: 'docs-plugin-etta-web',
    configureWebpack(config, isServer, utils) {
      const { getJSLoader } = utils;
      return {
        plugins: isServer
          ? []
          : [
              new webpack.ProvidePlugin({
                Buffer: ['buffer', 'Buffer'],
                process: 'process/browser',
              }),
            ],
        module: {
          rules: [
            {
              test: /\.(jpg|png|woff|woff2|eot|svg)$/,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
            {
              test: /\.(t|j)sx?$/,
              use: [
                getJSLoader(isServer, {
                  plugins: ['@babel/plugin-proposal-class-properties'],
                  presets: ['@babel/preset-react', '@babel/preset-env'],
                }),
              ],
              include: [
                path.resolve(nodeModules, 'etta-ui/src'),
              ],
            },
          ],
        },
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
            'etta-ui$': path.resolve(nodeModules, 'etta-ui/src'),
          },
          fallback: isServer
            ? {}
            : {
                path: require.resolve('path-browserify'),
                os: require.resolve('os-browserify/browser'),
                fs: false,
                process: 'process/browser',
              },
        },
      };
    },
  };
};

module.exports = a;
