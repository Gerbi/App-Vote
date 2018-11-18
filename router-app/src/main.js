import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Products from './components/Products.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false;

//registrar vue-router
vue.use(VueRouter);

//definir las routas para la aplicacion
const router = new VueRouter({
    base: __dirname,
    routes:[
        {path: '/', component: Home},
        {path: '/products', component: Products},
        {path: '/blog', component: Blog}
    ]
})

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
