'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const express = require('express')
const app = express()//请求server
var appData = require('../mock/data.json')//加载本地数据文件
var gg = require('../mock/shouye.json')//加载本地数据文件
var jifenSearch = require('../mock/jifenSearch.json')//积分商城搜索结果
var jifenDetail = require('../mock/detail.json')//积分商城详情页面
var jiFen = require('../mock/jifen.json')//积分商城页面数据
var dbmall = require('../mock/dbmall.json')//积分商城页面数据
var supermarket = require('../mock/supermarket.json')//生活超市
var safedata = require('../mock/safedata.json')//保险平台
var seller = appData.seller//获取对应的本地数据
//var goods = appData.indexData
//var ratings = appData.ratings
var apiRoutes = express.Router()
app.use('/api', apiRoutes)//通过路由请求数据



const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
		app.get('/api/seller', (req, res) => {
		    res.json({
		      errno: 0,
		      data: seller
		    })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
		}),
//app.get('/api/goods', (req, res) => {
//  res.json({
//    errno: 0,
//    data: goods
//  })
//}),
  app.get('/api/gg', (req, res) => {
    res.json({
      errno: 0,
      data: gg
    })
  }),
  app.get('/api/jifenSearch', (req, res) => {
    res.json({
      errno: 0,
      data: jifenSearch
    })
  }),
  app.get('/api/jifenDetail', (req, res) => {
    res.json({
      errno: 0,
      data: jifenDetail
    })
  }),
  app.get('/api/jiFen', (req, res) => {
    res.json({
      errno: 0,
      data: jiFen
    })
  }),
  app.get('/api/dbmall', (req, res) => {
    res.json({
      errno: 0,
      data: dbmall
    })
  }),
  app.get('/api/supermarket', (req, res) => {
    res.json({
      errno: 0,
      data: supermarket
    })
  }),app.get('/api/safedata', (req, res) => {
    res.json({
      errno: 0,
      data: safedata
    })
  })
  
  
  
}
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
