export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // custom route
  router: {
    extendRoutes(routes, resolve) {
      // whether to clear routes
      // routes.splice(0, routes.length);
      routes.push({
        name: 'custom',
        path: '/custom',
        component: resolve(__dirname, 'pages/About.vue')
      });
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/common.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/svg-icon',
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-svg-sprite-loader', {
      symbolId: 'icon-[name]'
    }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/demo'
  },

  proxy: {
    '/demo': {
      // Whatever IP and port you want to proxy to
      target: 'http://192.168.0.105:8088'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true,
    transpile: [/^element-ui/],
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        // element-ui import on-demand
        // [
        //   "component",
        //   {
        //     "libraryName": "element-ui",
        //     "styleLibraryName": "theme-chalk"
        //   }
        // ]
      ]
    },
    // packaging optimization
    // vendor: ['element-ui', 'axios]
    // maxChunkSize: 300000
  }
}
