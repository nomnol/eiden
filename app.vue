<style lang="scss">

</style>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
console.log(appConfig.tittle);
</script>

<template>
  <main class="app-container">
    <NuxtPage />
  </main>
</template>
