<style lang="less">
  @import "assets/less/partials/btn";
</style>

<script setup lang="ts">
const props = defineProps({
  className: {
    type: String
  },

  text: {
    type: String
  }
})
</script>

<template>
  <button
    class="btn"
    :class="className"
  >{{text}}</button>
</template>
