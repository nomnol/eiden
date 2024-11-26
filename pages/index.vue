<style lang="less">
  @import "assets/less/partials/index-page";
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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, similique!</p>
  </section>
</template>
