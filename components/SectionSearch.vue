<script setup lang="ts">

import IconMobile from "~/components/icons/IconMobile.vue";
import IconAgain from "~/components/icons/IconAgain.vue";
</script>

<template>
  <form class="search-form page__search-form">
    <div class="search-form__field">
      <IconMobile class="search-form__field-icon"  width="32" height="32"/>
      <input class="search-form__input" type="text" placeholder="Номер телефона">
    </div>
    <div class="search-form__buttons">
      <button class="btn btn--primary search-form__btn">Проверить себя</button>
      <button class="btn btn--secondary search-form__btn">Проверить других</button>
    </div>
  </form>

  <form v-show="false" class="search-form page__search-form">
    <div class="search-form__field">
      <div class="search-form__field-icon search-form__field-icon--again">
        <IconAgain class="search-form__field-icon" width="20" height="20" />
      </div>
      <label class="search-form__code">
        Введите код SMS
        <input class="search-form__code-input" type="text" maxlength="4">
      </label>
    </div>
    <div class="search-form__buttons">
      <button class="btn btn--primary search-form__btn">Начать проверку</button>
    </div>
  </form>

  <div v-show="false" class="search-form page__search-form">
    <div class="search-form__field">
      <div class="search-form__field-icon search-form__field-icon--again">
        <IconAgain class="search-form__field-icon" width="20" height="20" />
      </div>
      <div class="progress-bar">
        <div class="progress-bar__value"></div>
        <div class="progress-bar__label">Процесс поиска данных</div>
      </div>
    </div>
  </div>

  <form v-show="false" class="search-form page__search-form">
    <div class="search-form__field search-form__field--auto-height">
      <div class="search-form__field-icon search-form__field-icon--again">
        <IconAgain class="search-form__field-icon" width="20" height="20" />
      </div>
      <div class="search-form__text">
        <div class="search-form__text-title">Проверка другого контакта: 100&nbsp;₽</div>
        <div class="search-form__text-subtitle">Контакты, информация, медиа и документы, передвижения</div>
      </div>
    </div>
    <div class="search-form__buttons">
      <button class="btn btn--secondary search-form__btn">Продолжить</button>
    </div>
  </form>
</template>

<style scoped>

</style>
