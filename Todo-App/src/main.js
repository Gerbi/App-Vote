import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import {getters, actions, mutations, state} from './store';

Vue.config.productionTip = false
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css"

Vue.use(Vuex);

const store = new Vuex.Store({
  getters,
  actions,
  mutations,
  state
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
