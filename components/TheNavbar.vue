<script setup>
const mobileNavOpened = ref(false)
const swipeStart = ref(0)
const onTouchStart = e => {
  swipeStart.value = e.targetTouches[0].pageY;
}
const onTouchMove = e => {
  const swipeEnd = e.changedTouches[0].pageY;
  if (Math.abs(swipeEnd - swipeStart.value) > 20) {
    mobileNavOpened.value = false
  }
}
const onTouchEnd = e => {
  swipeStart.value = e.changedTouches[0].pageY;
}
const route = useRoute()

watch(
  () => route.params,
  async newId => {
    console.log(123)
    mobileNavOpened.value = false
  }
)
</script>

<template>
  <div class="mobile-header">
    <div class="mobile-header__container">
      <NuxtLink to="/" class="mobile__logo">
        <img src="@/assets/img/logo-mobile.svg" alt="">
      </NuxtLink>
      <div class="mobile-header__panel">
        <div class="mobile-header__info">
          <IconAccessChecks />
          1
        </div>
        <button class="burger__wrapper" @click="mobileNavOpened = !mobileNavOpened">
          <span class="btn-reset burger" :class="{ 'burger--active': mobileNavOpened }">
            <span class="burger__line"></span>
          </span>
        </button>
      </div>
    </div>
  </div>
  <div class="navbar__overlay"
       :class="{ 'navbar__overlay--active': mobileNavOpened }"
       @click="mobileNavOpened = !mobileNavOpened"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd"
  ></div>
  <nav class="navbar" :class="{ 'navbar--active': mobileNavOpened }">
    <ul class="menu__list">
      <li class="menu__item menu__item--logo">
        <NuxtLink to="/" class="logo">
          <img src="@/assets/img/logo-mobile.svg" alt="">

        </NuxtLink>
      </li>
      <li class="menu__item" >
        <NuxtLink to="/me" class="menu__link">
          <IconIdentification class="menu__icon" />
          <span> Данные обо мне <sup>free</sup> </span>
        </NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink to="/other" class="menu__link menu__link--disabled">
          <IconLock class="menu__icon" />
          Данные о других
        </NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink to="/protection" class="menu__link">
          <IconProtection class="menu__icon" />
          Моя защита
        </NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink to="/api" class="menu__link">
          <IconProtection class="menu__icon" />
          API
        </NuxtLink>
      </li>
    </ul>

    <ul class="menu__list">
      <li class="menu__item">
        <div class="menu__link">
          <IconAdvantage class="menu__icon" />
          Доступно проверок 1
        </div>
      </li>
      <li class="menu__item">
        <NuxtLink to="/support" class="menu__link">
          <IconSupport class="menu__icon" />
          Поддержка
        </NuxtLink>
      </li>


      <li class="menu__item">
        <NuxtLink to="/login" class="menu__link">
          <IconMe class="menu__icon" />
          Вход и регистрация
        </NuxtLink>
      </li>
      <li class="menu__item">
        <div class="menu-monitoring">
          <div class="menu-monitoring__title">Мониторинг</div>
          <div class="menu-monitoring__text">Скройте данные от нежелательных лиц</div>
          <a href="#" class="btn btn--outlined btn--small menu-monitoring__btn">
            <IconArrowRight name="arrow-right"/>
            Подробнее
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
