// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/scss/vars.scss";'
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
