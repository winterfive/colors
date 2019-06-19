import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  render: h => h(App),
}).$mount('#app')

