import Vue from 'vue'
import 'normalize.css/normalize.css'
import 'bulma/css/bulma.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-62609356-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})     

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
