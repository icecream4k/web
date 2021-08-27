module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/", // 运行环境
    // outputDir: "./dist", // 打包环境
    chainWebpack: (config) => {
        config.module
            .rule("swf")
            .test(/\.swf$/)
            .use("url-loader")
            .loader("url-loader")
            .options({
                limit: 10000,
            });
    },
    devServer: {
        port: 6060, // 设置vue启动时的端口号
        open: true,
    },
};
