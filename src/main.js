import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios模块
import axios from 'axios'
//引入网页底部内容
//import Footer from '../components/footer.vue'
//引入网页底部内容
//import Header from '../components/header.vue'

//引入elemenu-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.axios = axios
axios.defaults.withCredentials=true;


Vue.config.productionTip = false

//配置服务器默认根目录
//Vue.axios.options.root="http://localhost:3000/"




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
