import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import VueParallaxJs from 'vue-parallax-js'

import './stories/assets/scss/ui_all.scss';
import './portfolio/assets/scss/_portfolio.scss';
import router from './router'

const portfolio = createApp(App).use(router);
AOS.init();
Vue.use(VueParallaxJs);

portfolio.mount('#app')