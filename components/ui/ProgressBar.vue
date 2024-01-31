<script setup>
  defineProps({
    value: {
      type: Number
    }
  })
</script>

<template>
  <div class="progress-bar">
    <div class="progress-bar__value" :style="{ 'width': value + '%' }"></div>
    <div class="progress-bar__label">Процесс поиска данных</div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  border-radius: 4px;
  background: rgba(65, 70, 207, 0.64);
  position: relative;
  height: 44px;
  width: 100%;

  &__value {
    transition: .05s;
    height: 100%;
    width: 0;
    border-radius: 4px;
    background: #4146CF;
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-white;
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    width: 90%;
    text-align: center;
  }
}

</style>
