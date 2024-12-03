<style lang="less">
  @import "assets/less/partials/index-page";
  @import "assets/less/partials/main-logo";
</style>

<script setup lang="ts">
  const isSplashing = ref(true);

  setTimeout(() => {
    isSplashing.value = false;
  }, 6000)

  const onRemoveSplashScreen = () => {
    isSplashing.value = false;
  }

</script>

<template>
  <SplashScreen
    v-if="isSplashing"
    @removeSplashScreen="onRemoveSplashScreen"
  />
  <section
    class="index-page"
    v-else
  >
    <h1 class="main-logo">eiden<ins class="main-logo__sec-word">block</ins></h1>
  </section>
</template>
