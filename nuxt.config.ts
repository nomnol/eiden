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
      title: 'EIDEN BLOCK'
    }
  },

  devtools: {
    enabled: true
  },

  runtimeConfig: {

  },

  $production: {

  },

  $development: {
    routeRules: {}
  },

  modules: ["@nuxt/eslint"],
  compatibilityDate: '2024-08-30',
  alias: {
    '@': resolve(__dirname, '/')
  }
})
