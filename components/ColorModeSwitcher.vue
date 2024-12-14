<style lang="less">
  @import "assets/less/partials/color-mode-switcher";
</style>

<script setup lang="ts">
const darkMode = useState('darkMode', () => false);

const onSwitcherClick = (): void => {
  darkMode.value = !darkMode.value;
}
</script>

<template>
  <div class="color-mode-switcher">
    <input
      type="checkbox"
      class="color-mode-switcher__checkbox"
      :class="{'color-mode-switcher__checkbox_dark': darkMode}"
      @click.stop="onSwitcherClick"
      @keydown.enter.space.stop="onSwitcherClick"
    />
  </div>
</template>
