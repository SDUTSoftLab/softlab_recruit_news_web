import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import Nav from '@/components/Nav';
import Home from "@/components/Home";
import Foot from '@/components/Footer';
import router from './router'

import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs'
Vue.prototype.qs = QS;

Vue.config.productionTip = false
axios.defaults.timeout = 10000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'api';   //配置接口地址


Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Nav, App, Foot, Home },
  template: `
    <div id="app">
      <Nav/>
      <router-view></router-view>
      <Foot/>
    </div>
  `
})
