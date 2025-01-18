// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "assets/less/vars.less";'
        }
      }
    }
  },

  app: {
    head: {
      title: 'E I D E N___B L O C K'
    }
  },

  devtools: {
    enabled: false
  },

  runtimeConfig: {},

  $production: {},

  $development: {
    routeRules: {}
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module'
  ],
  compatibilityDate: '2024-08-30',
  alias: {
    '@': resolve(__dirname, '/')
  }
})
