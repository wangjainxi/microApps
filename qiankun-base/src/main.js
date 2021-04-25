import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import {registerMicroApps, start} from 'qiankun'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:7000',
    container: '#vue',
    activeRule: '/vue'
  }
]
registerMicroApps(apps);
start()