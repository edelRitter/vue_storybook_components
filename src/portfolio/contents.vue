<template>
  <section id="main-portfolio">
    <div class="content-project">
      <div class="content-project__one">
        <p class="select-work"><span class="fnt-ttl">/</span><span class="fnt-ttl">2021<br />team labo video</span></p>
        <video loop muted autoplay class="fullscreen-bg__video">
          <source src="./assets/img/teamlabo/labo.webm" type="video/webm">
        </video>
        <p class="select-work"><span class="fnt-ttl">/</span><span class="fnt-ttl">2021<br />team labo photography</span></p>
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
      </div>
      <div class="content-project__two">
        <p class="select-work"><span class="fnt-ttl">/</span><span class="fnt-ttl">selected<br />content-project</span></p>
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
          <swiper-slide>Slide 4</swiper-slide>
          <swiper-slide>Slide 5</swiper-slide>
          <swiper-slide>Slide 6</swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import uiModalContent from '../stories/components/ui_component_modal_content.vue'

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
    uiModalContent,
  },
}
</script>