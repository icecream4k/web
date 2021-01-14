module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        resolve: {
            // 配置路径,省略路径名
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}