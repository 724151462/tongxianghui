module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://hometown.tskedu.com',
        // target: 'http://255920k78z.qicp.vip',
        secure: false,
        ws: true,
        changeOrigin: true
      },
    },
    // proxy: 'http://255920k78z.qicp.vip'
  },
  
  // chainWebpack: config => {
  //   config.module
  //     .rule('fonts')
  //     .use('url-loader')
  //       .loader('file-loader')
  //       .tap(options => {
  //         // 修改它的选项...
  //         return options
  //       })
  // }
}