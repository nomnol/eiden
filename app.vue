<style lang="scss">
  @import "@/assets/scss/global";
  @import "@/assets/scss/partials/app-container";
</style>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
console.log('APP_CONFIG.TITTLE', appConfig.tittle);
</script>

<template>
  <main class="app-container">
    <NuxtPage />
  </main>
</template>
