const path = require('path')
const webpack = require('webpack')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    chainWebpack: config => {
        config.module
            .rule('swf')
            .test(/\.swf$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 10000
            })
    }
}