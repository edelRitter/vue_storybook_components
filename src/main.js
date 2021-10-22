import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import VueParallaxJs from 'vue-parallax-js'

import './stories/assets/scss/ui_all.scss';
import './portfolio/assets/scss/_portfolio.scss';

const portfolio = createApp(App);
AOS.init();
Vue.use(VueParallaxJs);

portfolio.mount('#app')