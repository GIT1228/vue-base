import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store/index'
import router from './router'
import './/style/index.css'
import Particles from "vue2-particles";
import "../src/api/axios.config.js"
import '../src/qiankun/index'
Vue.use(ElementUI);
Vue.use(Particles);
Vue.config.devtools = true
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});