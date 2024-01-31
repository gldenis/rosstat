<script setup lang="ts">
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation, Pagination]
const prev = ref(null)
const next = ref(null)
const pagination = ref(null)
</script>

<template>
  <div class="remove-section">
    <div class="remove-section__slider">

      <Swiper :modules="modules"
              :pagination="{el: pagination}"
              :loop="true"
              :navigation="{
                nextEl: next,
                prevEl: prev,
              }"
      >
        <SwiperSlide >
          <div class="remove-section__slide">
            <img class="remove-section__image" src="@/assets/img/slide-1.jpg" alt="">
            <div class="remove-section__content">
              <div class="remove-section__title">Удаление вашей информации из интернета и приложений</div>
              <div class="remove-section__description">Удаление вашей информации из интернета и приложений</div>
              <a href="#" class="btn btn--outlined remove-section__btn">Попробовать бесплатно</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="remove-section__slide">
            <img class="remove-section__image" src="@/assets/img/slide-2.jpg" alt="">
            <div class="remove-section__content">
              <div class="remove-section__title">2 Удаление вашей информации из интернета и приложений</div>
              <div class="remove-section__description">Удаление вашей информации из интернета и приложений</div>
              <a href="#" class="btn btn--outlined remove-section__btn">Попробовать бесплатно</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="remove-section__slide">
            <img class="remove-section__image" src="@/assets/img/slide-3.jpg" alt="">
            <div class="remove-section__content">
              <div class="remove-section__title">3 Удаление вашей информации из интернета и приложений</div>
              <div class="remove-section__description">Удаление вашей информации из интернета и приложений</div>
              <a href="#" class="btn btn--outlined remove-section__btn">Попробовать бесплатно</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="remove-section__slide">
            <img class="remove-section__image" src="@/assets/img/slide-4.jpg" alt="">
            <div class="remove-section__content">
              <div class="remove-section__title">4 Удаление вашей информации из интернета и приложений</div>
              <div class="remove-section__description">Удаление вашей информации из интернета и приложений</div>
              <a href="#" class="btn btn--outlined remove-section__btn">Попробовать бесплатно</a>
            </div>
          </div>
        </SwiperSlide>
        <div ref="pagination" class="swiper-pagination"></div>
        <div class="swiper-navigation">
          <div ref="prev" class="swiper-button-prev"></div>
          <div ref="next" class="swiper-button-next"></div>
        </div>
      </Swiper>

    </div>
  </div>
</template>
