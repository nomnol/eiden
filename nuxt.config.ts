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

  runtimeConfig: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,

    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_STREAMING_URL: process.env.API_STREAMING_URL
    }
  },

  $production: {},

  $development: {
    routeRules: {}
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@pinia/nuxt'
  ],
  compatibilityDate: '2024-08-30',
  alias: {
    '@': resolve(__dirname, '/')
  }
})
