const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServer = (isProd) =>
  isProd
    ? {}
    : {
        devServer: {
          open: true,
          hot: true,
          port: 8080,
          contentBase: path.join(__dirname, 'public'),
        },
      };

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  return {
    entry: {
      main: ['./src/index.ts', './src/style.scss'],
    },

    devtool: isProduction ? 'none' : 'source-map',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext]',
    },

    module: {
      rules: [
        {
          test: /\.[tj]s$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(?:ico|gif|png|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.js'],
    },

    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

      new HtmlWebpackPlugin({
        template: './src/index.html',
        /* filename: '[name].[contenthash].html', //devServer =( */
        filename: 'index.html',
      }),

      new CopyPlugin({
        patterns: [{ from: './public' }],
      }),

      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    ],
    ...devServer(isProduction),
  };
};
