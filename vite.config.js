const path = require('path')

function resolve(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    alias: {
        "/@/": resolve("src"),
        "/@style/": resolve("style")
    },
    extensions: ['.js', '.vue', '.json'],
    hostname: '0.0.0.0',
    port: 8081,
    // 是否自动在浏览器打开
    open: false,
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    base: '/qidian/',
    outDir: 'dist',
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    proxy: {
        '/api': {
            target: '',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}
