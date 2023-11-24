const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const path = require('path');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  entry: './src/js/index.js',

  performance: {
    hints: false  // Disable performance hints
  },

  output: {
    clean: true,
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
    port: 9000,
    open: true,
    liveReload: true,
    devMiddleware: {
    writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        }
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              esModule: false
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Point to correct template
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/projects.html',  // Point to correct template
      filename: 'projects.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/project-details.html',  // Point to correct template
      filename: 'project-details.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/blog.html',  // Point to correct template
      filename: 'blog.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/blog-details.html',  // Point to correct template
      filename: 'blog-details.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/add-blog.html',  // Point to correct template
      filename: 'add-blog.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',  // Point to correct template
      filename: 'about.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/contact.html',  // Point to correct template
      filename: 'contact.html',
    }),

    new MiniCssExtractPlugin({
      filename: './css/style.css'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:9000/'  // Assuming webpack dev server runs on port 9000
    }),
  ],
};
