
export default {
  mode: 'universal',
  generate:{
    //404 page
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/styles/variables.css',
    '@/styles/transitions.css',
    '@/styles/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/dv4-loaders-wc.js'
    { src: '@/plugins/dv4all.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        // config.devtool = 'source-map'
        // console.log("nuxt.config.js...", config)
      }
    },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     identifier:['@dv4all/icons','@dv4all/loaders']
    //   })
    // ]
  }
}
