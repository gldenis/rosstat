<script setup lang="ts">
const email = ref('')
const fetchingStarted = ref(false)
const progress = ref(0)
const router = useRouter()

const SEARCH_TIME = 3000
const checkContact = async () => {
  fetchingStarted.value = true

  const interval = setInterval( () => {
    progress.value += 1
    },
    SEARCH_TIME / 100
  );
  await new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve()
    }, SEARCH_TIME)
  } )

  clearInterval(interval)

  await router.push('/other/someresultid')
}

</script>

<template>
  <main class="page__content">
    <div class="container">
        <h1 class="title title--xl">Проверить контакт</h1>
        <p class="subtitle">Из-за недавнего инцидента с Твиттером, есть риск, что ваши данные могут быть использованы в корыстных целях. Наш антивирус выпустил обновление, которое защищает вас от подобного</p>
        <div v-if="fetchingStarted" class="email-form__progress">
          <ProgressBar :value="progress"/>
        </div>
        <form v-else class="email-form" @submit.prevent="checkContact">
          <IconEmailForm class="email-form__icon"/>
          <input type="email" class="email-form__input" placeholder="Адрес эл. почты" v-model="email">
          <button class="btn email-form__btn">Запустить проверку</button>
        </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  align-items: center;
  gap: 32px;
}
.page__content {
  padding: 60px 0;

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.subtitle {
  margin-top: 40px;
  text-align: center;
  max-width: 680px;
}

.email-form {
  margin-top: 60px;
  display: flex;
  max-width: 440px;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.60);
  padding: 40px;

  &__icon {
    margin-left: auto;
    margin-right: auto;
  }

  &__input {
    display: flex;
    height: 52px;
    padding: 10px 16px;
    align-items: center;
    gap: 10px;
    overflow: hidden;
    color: #9DA2AD;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 132%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
  }

  &__btn {
    border-radius: 8px;
    background: #4146CF;
    border: 2px solid #4146CF;
  }

  &__progress {
    max-width: 440px;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.60);
    margin-top: 60px;
  }
}

@media screen and (max-width: $desktop){
  .page__content {
    padding-top: calc(var(--header-height) + 60px);
  }

  .title {
    text-align: center;
  }
}

@media screen and (max-width: $mobile){
  .email-form {
    padding: 40px 20px;
  }
}
</style>
