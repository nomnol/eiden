<style lang="less">
  @import "assets/less/partials/index-page";
</style>

<script setup lang="ts">
const clickValue = ref(0);

const onClickOnPlus = debouncer(() => {
  clickValue.value += 1;
}, 100)

const onClickOnMinus = debouncer(() => {
  if (clickValue.value === 0) return;
  clickValue.value -= 1;
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
        :text="'PLUS ONE +'"
        @click.stop="onClickOnPlus"
      />
      <Btn
        :className="'btn_secondary'"
        :text="'MINUS ONE —'"
        @click.stop="onClickOnMinus"
      />
      <Btn
        :className="'btn_reset'"
        :text="'RESET COUNTER'"
        @click.stop="onResetClick"
      />
    </footer>
  </section>
</template>
