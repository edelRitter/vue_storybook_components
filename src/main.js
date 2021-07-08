import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

app.get('/', function (req, res) {
  res.render('index', {});
});