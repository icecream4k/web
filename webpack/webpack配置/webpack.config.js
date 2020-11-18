const path = require('path') // node 的语法来动态获取路径

module.exports = {
    entry: './src/main.js',
    output: {
        path:path.resolve(__dirname,'dist'), // 动态获取路径   path.resolve 是用于做路径拼接
        filename:'bundle.js'
    },
}
