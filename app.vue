<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();

import 'assets/less/global.less';
import 'assets/less/partials/app-container.less';

console.log('RUNTIME_CONFIG:\n', runtimeConfig);
console.log('APP_CONFIG:\n', appConfig);
</script>

<template>
  <main class="app-container">
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
