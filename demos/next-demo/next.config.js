module.exports = {
  // static export definition
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/icons': { page: '/icons' },
      '/loaders': { page: '/loaders' }
    }
  }
}