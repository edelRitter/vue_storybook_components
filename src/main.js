import './styles/ui_all.scss';
import './page/assets/scss/portfolio.scss';

import AOS from 'aos';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

AOS.init();