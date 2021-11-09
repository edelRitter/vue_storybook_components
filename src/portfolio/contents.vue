<template>
  <section id="main-portfolio">
    <div class="portfolio-project">
      <div class="portfolio-project-mainttl">
        <h2>These are my <span>projects</span>
          <p>/ developer / designer</p>
        </h2>
        <div class="portfolio-project-hero">
          <p><img src="./assets/img/demo_design.png"></p>
        </div>
      </div>
      <div class="portfolio-project__one">
        <div class="portfolio-parallax-wrap">
          <div class="portfolio-parallax-content">
            <div id="portfolio-parallax1" class="portfolio-parallax-post">
              / 2021
            </div>
            <div id="portfolio-parallax2" class="portfolio-parallax-post">
              / teamLab PHOTOGRAPHY
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-project__two">
        <p class="portfolio-project__header">
          <span class="portfolio-project__title">/</span>
          <span class="portfolio-project__title">swipe right<br />to see more</span>
        </p>
        <swiper
          :autoHeight="true"
          :navigation="true"
          :pagination='{
            "clickable": true
          }'
          class="portfolio-project__swiper">
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
          <p class="portfolio-project__desc-ttl">This is a set of photgraphy taken by me at teamLab</p>
          <div class="portfolio-project__desc-text">
            <p>studio open</p>
            <p>2018.6.21 (木) - 2022.8.31 (水)</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/pagination';

SwiperCore.use([ Navigation, Pagination ]);

export default {
  name: 'contents',
  components: {
		Swiper,
    SwiperSlide,
  },
}
</script>
