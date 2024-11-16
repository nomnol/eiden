<style lang="less">
  @import "assets/less/partials/index-page";
</style>

<script setup lang="ts">
const clickValue = ref(0);

const onClickOnMeClick = debouncer(() => {
  clickValue.value += 1;
}, 100)

const onResetClick = throttle(() => {
  clickValue.value = 0
}, 100)

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
      <Btn
        :className="'btn_reset'"
        :text="'RESET COUNTER'"
        @click.stop="onResetClick"
      />
    </footer>
  </section>
</template>
