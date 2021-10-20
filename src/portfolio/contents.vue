<template>
  <section id="main-portfolio">
    <div class="portfolio-project">
      <div class="portfolio-project__one">
        <h2>
          HELLO / I / AM /<br>
          <span>DEVELOPER &#38; DESIGNER</span>
        </h2>
      </div>
      <div class="portfolio-project__two">
        <p class="portfolio-project__header">
          <span class="portfolio-project__title">/</span>
          <span class="portfolio-project__title">2021<br />team labo photography</span>
        </p>
        <swiper
          :grabCursor="true"
          :effect="'creative'"
          :pagination="true"
          :autoHeight="true"
          :creativeEffect='{
            "prev": {
              "shadow": true,
              "translate": [
                0,
                0,
                -400
              ]
            },
            "next": {
              "translate": [
                "100%",
                0,
                0
              ]
            }
          }' class="swiper-content-one">
          <swiper-slide>
            <p><img src="./assets/img/teamlabo/labo_2.png"></p>
          </swiper-slide>
          <swiper-slide>
            <p><img src="./assets/img/teamlabo/labo_1.png"></p>
          </swiper-slide>
          <swiper-slide>
            <p><img src="./assets/img/teamlabo/labo_3.png"></p>
          </swiper-slide>
          <swiper-slide>
            <p><img src="./assets/img/teamlabo/labo_4.png"></p>
          </swiper-slide>
          <swiper-slide>
            <p><img src="./assets/img/teamlabo/labo_5.png"></p>
          </swiper-slide>
        </swiper>
        <div class="portfolio-project__desc">
          <p class="portfolio-project__desc-ttl">This is a set of photgraphy taken by me at test</p>
          <p></p>
        </div>
        <swiper
          :grabCursor="true"
          :effect="'creative'"
          :pagination="true"
          :autoHeight="true"
          :creativeEffect='{
            "prev": {
              "shadow": true,
              "translate": [
                0,
                0,
                -400
              ]
            },
            "next": {
              "translate": [
                "100%",
                0,
                0
              ]
            }
          }' class="swiper-content-one">
          <swiper-slide>
            <video loop muted autoplay class="fullscreen-bg__video">
              <source src="./assets/img/teamlabo/labo.webm" type="video/webm">
            </video>
          </swiper-slide>
          <swiper-slide>
            <video loop muted autoplay class="fullscreen-bg__video">
          <source src="./assets/img/teamlabo/main_bg.webm" type="video/webm">
        </video>
          </swiper-slide>
        </swiper>
      </div>
      <div class="portfolio-project__three">
        <p class="portfolio-project__header">
          <span class="portfolio-project__title">/</span>
          <span class="portfolio-project__title">2021<br />team labo photography</span>
        </p>
        <swiper 
          :slidesPerView="1"
          :autoHeight="true"
          :navigation="true"
          :pagination='{
            "clickable": true
          }' 
          class="mySwiper">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-creative"

SwiperCore.use([ Navigation, Pagination, EffectCreative ]);

export default {
  name: 'contents',
  components: {
		Swiper,
    SwiperSlide,
  },
}
</script>