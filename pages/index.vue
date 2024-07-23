<style lang="scss">
  @import "assets/scss/partials/index-page";
</style>

<script setup lang="ts">
import debouncer from '~/utils/debouncer';
const clickValue = ref(0);

const onClickOnMeClick = debouncer(() => {
  clickValue.value += 1;
}, 400)

</script>

<template>
  <section class="index-page">
    <code>click counter: <b>{{clickValue}}</b></code>
    <footer class="index-page__footer">
      <Btn
        :className="'btn_primary'"
        :text="'CLICK ON ME'"
        @click.stop="onClickOnMeClick"
      />
    </footer>
  </section>
</template>
