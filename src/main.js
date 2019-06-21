import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './plugins/vuetify'
import { store } from "./store"
import { Photoshop } from 'vue-color'

Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  store,
  'photoshop-picker': Photoshop,
  render: h => h(App),
}).$mount('#app')

