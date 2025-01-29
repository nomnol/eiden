<style lang="less">
  @import "assets/less/partials/color-mode-switcher";
</style>

<script setup lang="ts">
  const globalStore = useGlobalStore()
  const { isDarkMode } = storeToRefs(globalStore)

  const onSwitcherClick = (): void => {
    globalStore.toggleDarkMode();
  }
</script>

<template>
  <div class="color-mode-switcher">
    <input
      type="checkbox"
      class="color-mode-switcher__checkbox"
      :class="{'color-mode-switcher__checkbox_dark': isDarkMode}"
      @click.stop="onSwitcherClick"
      @keydown.enter.space.stop="onSwitcherClick"
    />
  </div>
</template>
