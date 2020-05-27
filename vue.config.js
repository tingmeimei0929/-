module.exports = {
  publicPath: '',
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/mock': {
        target: 'http://localhost:8080',
        ws: false,
        // 将主机头的原点改为目标的URL
        changeOrigin: false
      }
    }
  }
}
