<script setup lang="ts">

</script>

<template>
  <main class="page__content">
    <div class="container">
      <h1 class="title title--xl">Данные обо мне</h1>
      <div class="result">
        <div class="user">
          <div class="user__info">
            <div class="user__name">Николай Резников</div>
            <div class="user__email">okaymaxim@gmail.com</div>
            <div class="user__mode">
              <button class="user__mode-btn user__mode-btn--current">Информация</button>
              <button class="user__mode-btn">Мониторинг</button>
            </div>
          </div>
          <img class="user__pic" src="@/assets/img/user.jpg" alt="">
        </div>
        <div class="monitoring">
          <div class="monitoring__title">Мониторинг</div>
          <div class="monitoring__subtitle">Контролируйте доступ ваших данных</div>
          <div class="monitoring__bottom">
            <div class="monitoring__switch">Выключено</div>
            <div class="monitoring__info"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

.user {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
  padding: 20px;
  display: flex;
  gap: 20px;

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    color: #303034;
    font-size: 28px;
    font-weight: 700;
    line-height: 132%;
  }

  &__email {
    color: #303034;
    line-height: 132%;
    margin-top: 4px;
  }

  &__mode {
    border-radius: 22px;
    background:  rgba(222, 224, 227, 0.92);
    margin-top: auto;
  }

  &__mode-btn {
    color: #606268;
    line-height: 132%;
    padding: 10px 16px;

    &--current {
      background: #303034;
      border-radius: 20px;
      color: rgba(255, 255, 255, 0.92);
    }
  }

  &__pic {
    width: 116px;
    height: 116px;
    border-radius: 50%;
  }
}
</style>
