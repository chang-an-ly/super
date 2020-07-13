const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('network', resolve('src/network'))
            .set('views', resolve('src/views'))
    },
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost/vue-supermall/", //API服务器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
    }
}