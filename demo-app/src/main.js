import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// import "uikit/dist/css/uikit.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

new Vue({
  render: h => h(App),
}).$mount('#app')
