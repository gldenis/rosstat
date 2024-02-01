<script setup lang="ts">

const showRelations = ref(false)
const toggleRelationList = () => {
  showRelations.value = !showRelations.value
}
</script>

<template>
  <main class="page__content">
    <div class="container">
      <div class="row">
        <NuxtLink to="/other" class="btn btn--again">
          <IconAgain/>
        </NuxtLink>
        <h1 class="title title--xl">tim.jennings@example.com</h1>
      </div>
      <div class="unlock">
        <div class="unlock__content">
          <IconUnlock class="unlock__icon"/>
          <div class="unlock__text">
            <div class="unlock__title">Разблокировать данные</div>
            <div class="unlock__price">Стоимость: 1 проверка</div>
          </div>
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
              <div class="tag__item unavailable">Константинов</div>
              <div class="tag__item unavailable">Константин</div>
              <div class="tag__item unavailable">Константинопольский</div>
            </div>
            <div class="name-relations">
              <div class="name-relations__head">
                <div class="name-relations__title">Связаны с именем (7)</div>
                <button class="name-relations__btn"
                        @click="toggleRelationList">
                  {{ showRelations ? 'Скрыть' : 'Развернуть' }}
                </button>
              </div>
              <div v-show="showRelations" class="name-relations__list">
                <div class="name-relations__item">Максим</div>
                <div class="name-relations__item">Okeymaxim</div>
                <div class="name-relations__item">Макс Березин</div>
                <div class="name-relations__item">Литар Александра</div>
                <div class="name-relations__item">березин Максим</div>
                <div class="name-relations__item">Резникова Александра Сергеевна</div>
                <div class="name-relations__item">Березин Макси</div>
              </div>
            </div>
          </div>
          <div class="data-block">
            <h3 class="data-block__title">Паспорт:</h3>
            <div class="tag__list">
              <div class="tag__item unavailable">Серия: 42 33</div>
              <div class="tag__item unavailable">Номер: 837 281</div>
            </div>
          </div>
          <div class="data-block">
            <h3 class="data-block__title">Телефон:</h3>
            <div class="tag__list">
              <div class="tag__item unavailable">Оператор (Йота): +79990592985</div>
              <div class="tag__item unavailable">Оператор (Мегафон): +79990592985</div>
            </div>
          </div>
          <div class="data-block">
            <h3 class="data-block__title">Соц. сети:</h3>
            <div class="tag__list">
              <div class="tag__item tag__item--telegram unavailable">
                <IconTelegram/>
                ID 338920713: @Okeymaxim
              </div>
              <div class="tag__item tag__item--instagram unavailable">
                <IconInstagram/>
                Max: @okeymaxim
              </div>
            </div>
          </div>
          <div class="data-block">
            <h3 class="data-block__title ">Посещает:</h3>
            <div class="tag__list">
              <div class="tag__item tag__item--youtube unavailable">
                <IconYoutube/>
                @okeymaxim
              </div>
              <div class="tag__item unavailable">Photos Maps</div>
            </div>
          </div>
          <div class="data-block">
            <h3 class="data-block__title">Объявлений:</h3>
            <div class="tag__list">
              <div class="tag__item unavailable">3 шт.</div>
            </div>
          </div>
        </div>
        <div class="user-section result__media">
          <div class="user-section__head">
            <h2 class="user-section__title">Медиа и документы</h2>
            <div class="media-category__list">
              <div class="media-category__item">
                <IconImage />
                5 938
              </div>
              <div class="media-category__item">
                <IconMovies />
                349
              </div>
              <div class="media-category__item">
                <IconFiles />
                1 293
              </div>
            </div>
          </div>
          <div class="result-media">
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-1.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-2.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-3.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-4.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-5.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-6.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-7.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
            <div class="result-media__item result-media__item--blur">
              <img src="@/assets/img/content/img-8.jpg" loading="lazy" alt="" width="156" height="100">
            </div>
          </div>
          <div class="user-section__bottom">
            <button class="btn btn--primary result-media__btn">
              <IconDownload/>
              Скачать данные (3.42 гб)
            </button>
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
    </div>
  </main>
</template>

<style scoped lang="scss">
.name-relations {
  gap: 24px;
  display: flex;
  flex-direction: column;

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__item {
    background: rgba(22, 22, 25, 0.2);
    border-radius: 4px;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 15px;
    line-height: 132%;
    color: #fff;
  }
}
.media-category {
  &__list {
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    border-radius: 12px;
    padding: 4px 10px 4px 8px;
    height: 40px;
    background: #fff;
    color: rgb(22, 22, 25);
    font-size: 12px;
    font-weight: 700;
    line-height: 132%;
  }
}
.name-relations {
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  margin-top: 8px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: $color-white;
    font-size: 16px;
    font-weight: 700;
    line-height: 132%;
  }

  &__btn {
    color: rgba(255, 255, 255, 0.92);
    font-size: 15px;
    font-weight: 400;
    line-height: 132%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    padding: 16px;
    height: 40px;
    display: flex;
    align-items: center;

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}

.page__content {
  padding-top: 60px;
}

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
    font-size: 15px;

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

      &.unavailable {
        background: url('@/assets/img/unavailable.png'), linear-gradient(87deg, #F0B537 0%, #C84B4E 50.48%, #5534A4 100%);
      }
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
  justify-content: space-between;
  gap: 24px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.60);
  backdrop-filter: blur(4px);
  width: 920px;
  height: 134px;
  background-image: url('@/assets/img/unlock-top.png'), url('@/assets/img/unlock-bottom.png');
  background-size: 100% 8px, 100% 8px;
  background-repeat: no-repeat;
  background-position: top center, bottom center;

  &__content {
    display: flex;
    align-items: center;
    gap: 16px;
  }

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
    padding: 16px;
  }
}

.user-section {
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 1, 40, 0.40) 100%);
  padding: 20px;
  position: relative;

  &__head {
    padding-bottom: 24px;
  }

  &__bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: linear-gradient(180deg, rgba(47, 54, 86, 0.00) 0%, #2F3656 100%);
    border-radius: 0 0 8px 8px;
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

.result {
  margin-top: 60px;
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: 540px 360px;
  grid-template-rows: auto 1fr;

  &__info {
    grid-column: 1/2;
    grid-row: 1/3;
    height: max-content;
  }

  &__media {
    grid-column: 2/3;
    grid-row: 1/2;
    padding-bottom: 0;
  }

  &__place {
    grid-column: 2/3;
    grid-row: 2/3;
    height: max-content;
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

.result-media {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-height: 380px;
  overflow: hidden;

  &__item {
    border-radius: 8px;
    overflow: hidden;

    &--blur {
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(4px);
        background: rgba(0, 0, 0, 0.2);
      }
    }
  }
  img {
    object-fit: cover;
  }

  &__btn {
    width: 100%;
  }
}

.unavailable {
  background-image: url('@/assets/img/unavailable.png');
  background-size: cover;
  border: none;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    display: block;
    border-radius: 4px;
    backdrop-filter: blur(2px);
    background: rgba(255, 255, 255, 0.2);
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
  }
}
</style>
