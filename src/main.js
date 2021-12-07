import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@fontsource/open-sans'

Vue.config.productionTip = false

Vue.component('fade-transition', () => import('./components/transitions/Fade'))
Vue.component('loading-spinner', () => import('./components/layout/LoadingSpinner'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
