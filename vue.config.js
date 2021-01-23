module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: 8081, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置后自动启动浏览器
        hotOnly: true, // 热更新
        proxy: "http://192.168.1.3:8888"
    }
}