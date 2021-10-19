import './stories/assets/scss/ui_all.scss';
import './portfolio/assets/scss/_portfolio.scss';

import AOS from 'aos';
import { createApp } from 'vue'
import App from './App.vue'

AOS.init();
createApp(App).mount('#app')