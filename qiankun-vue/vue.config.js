module.exports = {
  lintOnSave: false,
  devServer: {
    port: 7000,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd'
    }
  }
}