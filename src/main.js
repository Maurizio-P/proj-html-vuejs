import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
