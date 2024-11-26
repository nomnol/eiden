<style lang="less">
  @import "assets/less/global.less";
  @import "assets/less/partials/app-container.less";
</style>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
</script>

<template>
  <main class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
