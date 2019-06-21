import Vue from 'vue'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify'
import { store } from "./store"
import compact from 'vue-color/src/components/Compact.vue';

Vue.use(Vuetify, {
  iconfont: 'md'
})

new Vue({
  store,
  compact,
  render: h => h(App),
}).$mount('#app')

