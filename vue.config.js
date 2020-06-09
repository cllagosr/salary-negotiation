module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/scss/constants.scss";'
      }
    }
  }
}
