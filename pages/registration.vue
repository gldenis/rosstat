<script setup lang="ts">
const formSubmit = () => {

}
</script>

<template>
  <main class="page__content">
    <div class="container">
      <div class="row">
        <h1 class="title title--xl">Вход и регистрация</h1>
        <div class="auth-switch">
          <RouterLink to="/registration" class="auth-switch__item">
            <IconRegistration />
            Регистрация
          </RouterLink>
          <RouterLink to="/login" class="auth-switch__item">
            <IconMe width="20" height="20" />
            Вход
          </RouterLink>
        </div>
      </div>
      <div class="registration__wrapper">
        <form class="login-form" @click.prevent="formSubmit">
          <IconRegistration class="login-form__icon" width="48" height="48" />
          <div class="login-form__title">Создать аккаунт</div>
          <div class="login-form__fields-list">
            <label class="login-form__field">
              <input type="text" class="login-form__input" placeholder="Адрес эл. почты">
            </label>
            <label class="login-form__field">
              <input type="text" class="login-form__input" placeholder="Придумайте пароль">
            </label>
          </div>
          <div class="login-form__buttons">
            <button class="btn btn--accent">Создать аккаунт</button>
          </div>
        </form>
        <div class="registration-advantages">
          <div class="registration-advantages__item" v-for="item of 7">
            <IconProtection class="registration-advantages__icon" width="24" height="24"/>
            <div class="registration-advantages__text">9 лет на защите ваших данных</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped lang="scss">
.registration__wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 80px;

  .login-form {
    margin-right: 0;
    margin-top: 0;
    margin-left: 0;
    max-width: 320px;
    border-radius: 8px 0 0 8px;
  }
}
.registration-advantages {
  max-width: 560px;
  width: 100%;
  border-radius: 0 8px 8px 0;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__item {
    color: rgba(21, 153, 90, 0.92);
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 8px;
    background: linear-gradient(90.00deg, rgba(28, 154, 96, 0),rgba(28, 154, 96, 0.32) 100%);
    padding: 12px 12px 12px 0px
  }
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page__content {
  padding-top: 60px;
}
.login-form {
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  max-width: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;

  &__icon {
    margin-left: auto;
    margin-right: auto;
  }

  &__title {
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 28px;
    font-weight: 700;
    line-height: 132%;
  }

  &__fields-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
    width: 100%;
  }

  &__input {
    width: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    height: 52px;
    padding: 10px 16px;
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    color: #fff;

    &::placeholder {
      color: rgb(157, 162, 173);
    }
  }
}

.auth-switch {
  border-radius: 24px;
  background: rgba(22, 22, 25, 0.6);
  padding: 4px;
  display: flex;
  gap: 4px;

  &__item {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);

    &.router-link-exact-active {
      background: #fff;
      color: #000;
    }
  }
}

@media screen and (max-width: $desktop){
  .page__content {
    padding-top: calc(var(--header-height) + 60px);
  }
}

@media screen and (max-width: $tablet){
  .row {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .title--xl {
    text-align: center;
  }

  .registration__wrapper {
    flex-direction: column;
    align-items: center;

    .login-form {
      max-width: 440px;
      border-radius: 8px 8px 0 0;
    }
  }

  .registration-advantages {
    max-width: 440px;
    border-radius: 0 0 8px 8px;
  }
}
</style>
