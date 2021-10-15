<template>
  <section id="main-portfolio">
    <div id="content-project">
      <div class="content-project__one">
        <p class="select-work"><span class="fnt-ttl">/</span><span class="fnt-ttl">selected<br />content-project</span></p>
        <swiper 
          :direction="'vertical'"
          :slidesPerView="1"
          :mousewheel="true"
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
      <div class="content-project__two">
        <p class="select-work"><span class="fnt-ttl">/</span><span class="fnt-ttl">selected<br />content-project</span></p>
        <swiper 
          :direction="'vertical'"
          :slidesPerView="1"
          :mousewheel="true"
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
import uiModalContent from '../components/ui_component_modal_content.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Mousewheel,Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

SwiperCore.use([Mousewheel,Pagination]);

export default {
  name: 'contents',
  components: {
		Swiper,
    SwiperSlide,
    uiModalContent,
  },
	setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
			modules: [Mousewheel],
    };
  },
}
</script>

<style scoped>
#main-portfolio {
  position: relative;
  width: 100%;
	color: #fff;
	background: #333;
	z-index: 3;
}

#main-portfolio .select-work {
	clear: both;
	box-sizing: border-box;
	width: 100%;
	text-align: center;
	margin: 120px auto;
	padding: 0 2%;
}

#main-portfolio .select-work span {
	letter-spacing: 0.4em;
	font-family: 'Playfair Display', serif;
}
</style>