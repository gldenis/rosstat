// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/fontaine', 'nuxt-icons'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      link: [
        {}
      ],
      bodyAttrs: {
        class: 'page__body'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
