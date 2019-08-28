module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "global.scss";',
        includePaths: [path.resolve(__dirname, './src/sass/')],
      }
    }
  }
};