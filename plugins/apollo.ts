import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { defineNuxtPlugin, useRuntimeConfig } from '#app';

const API_BASE_URL = process.env.API_BASE_URL;

export default defineNuxtPlugin(nuxtApp => {
  const appConfig = useRuntimeConfig();
  const { API_STREAMING_URL } = appConfig.public;
  const { ACCESS_TOKEN } = appConfig
  const URI = `${API_STREAMING_URL}?token=${ACCESS_TOKEN}`;

  const httpLink = createHttpLink({
    uri: URI
  })

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  nuxtApp.provide('apollo', apolloClient);
})
