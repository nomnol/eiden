<style lang="less">
  @import "assets/less/partials/btn";
</style>

<script setup lang="ts">
const props = defineProps({
  className: String,

  primary: Boolean,

  secondary: Boolean,

  text: String
})
</script>

<template>
  <button
    class="btn"
    :class="{
      [className]: className,
      'btn_primary': primary,
      'btn_secondary': secondary
    }"
  >{{text}}</button>
</template>
