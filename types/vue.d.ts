import { ApolloClient } from '@apollo/client/core';

declare module 'vue' {
  interface ComponentCustomProperties {
    $apollo: ApolloClient<unknown>;
  }
}
