<template>
  <section id="main-portfolio">
    <div class="portfolio-project">
      <div class="portfolio-project-mainttl">
        <h2>These are my <span>projects</span>
          <p>/ developer / designer</p>
        </h2>
      </div>
      <div class="portfolio-project__one">
        <div class="portfolio-parallax-wrap">
          <div class="portfolio-parallax-content">
            <div id="portfolio-parallax1" class="portfolio-parallax-post">
              / 2021
            </div>
            <div id="portfolio-parallax2" class="portfolio-parallax-post">
              / TEAM LABO PHOTOGRAPHY
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-project__two">
        <p class="portfolio-project__header">
          <span class="portfolio-project__title">/</span>
          <span class="portfolio-project__title">swipe<br />to see gallery</span>
        </p>
        <swiper
          :grabCursor="true"
          :effect="'creative'"
          :pagination="true"
          :slideToClickedSlide="true"
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
          }' class="portfolio-project__swiper">
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
          }' class="portfolio-project__swiper">
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
