<script setup lang="ts">

import IconUnlock from "~/components/icons/IconUnlock.vue";
import IconIstagram from "~/components/icons/social/IconIstagram.vue";
</script>

<template>
  <div class="row">
    <button class="btn btn--again">
      <IconAgain />
    </button>
    <h1 class="title title--xl">tim.jennings@example.com</h1>
  </div>
  <div class="unlock">
    <IconUnlock class="unlock__icon" />
    <div class="unlock__text">
      <div class="unlock__title">Разблокировать данные</div>
      <div class="unlock__price">Стоимость: 1 проверка</div>
    </div>
    <button class="btn btn--accent unlock__btn">Разблокировать данные</button>
  </div>

  <div class="result">
    <div class="user-section result__info">
      <div class="user-section__head">
        <h2 class="user-section__title">Информация</h2>
        <p class="user-section__meta"><span>Активность не позднее:</span> 8 минут назад</p>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Ваша ФИО:</h3>
        <div class="tag__list">
          <div class="tag__item">Константинов</div>
          <div class="tag__item">Константин</div>
          <div class="tag__item">Константинопольский</div>
        </div>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Паспорт:</h3>
        <div class="tag__list">
          <div class="tag__item">Серия: 42 33</div>
          <div class="tag__item">Номер: 837 281</div>
        </div>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Телефон:</h3>
        <div class="tag__list">
          <div class="tag__item">Оператор (Йота): +79990592985</div>
          <div class="tag__item">Оператор (Мегафон): +79990592985</div>
        </div>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Соц. сети:</h3>
        <div class="tag__list">
          <div class="tag__item tag__item--telegram"><IconTelegram /> ID 338920713: @Okeymaxim</div>
          <div class="tag__item tag__item--instagram"><IconIstagram /> Max: @okeymaxim</div>
        </div>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Посещает:</h3>
        <div class="tag__list">
          <div class="tag__item tag__item--youtube"><IconYoutube/> ID 338920713: @Okeymaxim</div>
          <div class="tag__item">Photos Maps</div>
        </div>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Объявлений:</h3>
        <div class="tag__list">
          <div class="tag__item">3 шт.</div>
        </div>
      </div>
    </div>
    <div class="user-section result__media">
      <div class="user-section__head">
        <h2 class="user-section__title">Медиа и документы</h2>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Ваша ФИО:</h3>

      </div>
    </div>
    <div class="user-section result__place">
      <div class="user-section__head">
        <h2 class="user-section__title">Передвижения</h2>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Страна:</h3>
        <div class="tag__list">
          <div class="tag__item">RU</div>
          <div class="tag__item">Страна: Россия</div>
          <div class="tag__item">Приморский край</div>
        </div>
      </div>
      <div class="data-block">
        <h3 class="data-block__title">Возможные адреса:</h3>
        <div class="tag__list">
          <div class="tag__item">Страна: Россия</div>
          <div class="tag__item">Краснодарский край</div>
          <div class="tag__item">Краснодар</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__item {
    height: 40px;
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.92);
    background: rgba(255, 255, 255, 0.92);
    color: #303034;
    line-height: 132%;
    display: flex;
    align-items: center;
    gap: 10px;

    &--telegram {
      background: #1F87D3;
      border: none;
      color: $color-white;
      padding-left: 8px;
      padding-right: 8px;
    }

    &--instagram {
      background: linear-gradient(87deg, #F0B537 0%, #C84B4E 50.48%, #5534A4 100%);
      border: none;
      color: $color-white;
      padding-left: 8px;
      padding-right: 8px;
    }

    &--youtube {
      background: #C93131;
      border: none;
      color: $color-white;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
}
.row {
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: flex-start;
}
.unlock {
  margin-top: 60px;
  display: flex;
  padding: 32px;
  align-items: center;
  gap: 24px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(4px);
  width: 920px;

  &__icon {
    color: #15995A;
  }

  &__title {
    color: rgba(255, 255, 255, 0.92);
    font-size: 20px;
    font-weight: 700;
    line-height: 132%;
  }

  &__price {
    color: #9DA2AD;
    font-size: 14px;
    font-weight: 500;
    line-height: 140%;
  }

  &__btn {
    margin-left: auto;
  }
}

.result {
  margin-top: 60px;
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: 540px 360px;
  grid-template-rows: repeat(3, auto);

  &__info {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &__media {
    grid-column: 2/3;
    grid-row: 1/2;
  }

  &__place {
    grid-column: 2/3;
    grid-row: 2/3;
  }
}
.user-section {
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 1, 40, 0.40) 100%);
  padding: 20px;

  &__head {
    padding-bottom: 24px;
  }

  &__title {
    color: $color-white;
    font-size: 24px;
    font-weight: 600;
    line-height: 132%;
  }

  &__meta {
    color: rgba(255, 255, 255, 0.92);
    font-size: 16px;
    font-weight: 700;
    line-height: 132%;
    margin-top: 12px;

    span {
      opacity: 0.6;
    }
  }
}

.data-block {
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.20);
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    color: $color-white;
    font-size: 18px;
    font-weight: 500;
    line-height: 146%;
  }
}
</style>
