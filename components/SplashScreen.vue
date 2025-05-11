<script setup lang="ts">
import 'assets/less/partials/splash-screen.less';

const emit = defineEmits<{ (type: 'removeSplashScreen'): void }>()

const onSplashClick = (): void => {
  emit('removeSplashScreen');
}
</script>

<template>
  <section
    class="splash-screen"
    @click.stop="onSplashClick"
  >
    <dfn
      class="splash-screen__definition"
    >
      <span
        class="splash-screen__definition-highlight splash-screen__definition-highlight_top"
      ></span>
      eiden block
      <span
        class="splash-screen__definition-highlight"
      ></span>
    </dfn>
  </section>
</template>
