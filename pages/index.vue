<style lang="less">
  @import "assets/less/partials/index-page";
  @import "assets/less/partials/main-logo";
</style>

<script setup lang="ts">
  const globalStore = useGlobalStore()
  const { isDarkMode } = storeToRefs(globalStore)
  const isSplashing = ref(true);

  setTimeout((): void => {
    isSplashing.value = false;
  }, 6000)

  const onRemoveSplashScreen = throttle((): void => {
    isSplashing.value = false;
  }, 100)

</script>

<template>
  <SplashScreen
    v-if="isSplashing"
    @removeSplashScreen="onRemoveSplashScreen"
  />
  <section
    class="index-page"
    :class="{ 'index-page_dark': isDarkMode}"
    v-else
  >
    <h1
      class="main-logo"
      :class="{'main-logo_dark': isDarkMode}"
    >eiden<ins class="main-logo__sec-word">block</ins></h1>
    <ColorModeSwitcher />
  </section>
</template>
