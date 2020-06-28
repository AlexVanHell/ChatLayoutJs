const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'chat-layout': './src/index.ts',
    'chat-layout.min': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ChatLayoutJS',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    modules: ['node_modules/', path.resolve(__dirname, '/src')],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          ouput: {
            comments: false,
            beautfy: false,
          },
          compress: true,
          minimize: true,
        },
        include: [/\.min\.js$/gi],
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new WriteFilePlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // Fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
            // localIdentName: '[name]__[local]___[hash:base64:5]',
          },
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '_bundles'),
    contentBasePublicPath: '/',
    compress: true,
    port: 9000,
    hot: true,
    publicPath: './_bundles',
    before: (app, server, compiler) => {
      app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'test', 'views', 'index.html'));
      });
    },
  },
};
