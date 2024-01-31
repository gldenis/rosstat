<script setup lang="ts">

import IconUserDatabe from "~/components/icons/statistic/IconUserDatabase.vue";
import IconExperience from "~/components/icons/statistic/IconExperience.vue";
</script>

<template>
  <div class="statistic-section page__statistic">
    <div class="statistic-section__item">
      <IconUserDatabase class="statistic-section__icon" width="40" height="40" />
      <div class="statistic-section__value">100 032 862</div>
      <div class="statistic-section__text">Данных пользователей в базе</div>
    </div>
    <div class="statistic-section__item">
      <IconService class="statistic-section__icon" width="40" height="40" />
      <div class="statistic-section__value">32</div>
      <div class="statistic-section__text">Инструментов для API мониторинга</div>
    </div>
    <div class="statistic-section__item">
      <IconChecks class="statistic-section__icon" width="40" height="40" />
      <div class="statistic-section__value">31</div>
      <div class="statistic-section__text">Человек сегодня проверены</div>
    </div>
    <div class="statistic-section__item">
      <IconExperience class="statistic-section__icon" width="40" height="40" />
      <div class="statistic-section__value">12</div>
      <div class="statistic-section__text">Опыта в сфере поиска и защиты данных</div>
    </div>
  </div>
</template>

<style scoped>

</style>
