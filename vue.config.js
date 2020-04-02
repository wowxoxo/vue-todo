module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/sass/variables.sass"`
      }
    },
    extract: {
      filename: "[name].css",
      chunkFilename: "[name].css"
    }
  }
};
