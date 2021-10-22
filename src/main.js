import './stories/assets/scss/ui_all.scss';
import './portfolio/assets/scss/_portfolio.scss';

import { createApp } from "vue";
import App from './App.vue'
import AOS from 'aos'

AOS.init();
createApp(App).mount('#app')