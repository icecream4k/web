const path = require('path') // node 的语法来动态获取路径

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // 动态获取路径   path.resolve 是用于做路径拼接
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            // css-loader 只负责将css文件进行加载
            // style-loader负责将样式添加到DOM中生效
            // 使用多个loader时,是从右向左读
            use: ['style-loader','css-loader']
        }]
    }
}