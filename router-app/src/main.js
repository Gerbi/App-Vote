import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import User from './components/user/User.vue'
import UserProfile from './components/user/UserProfile.vue'
import UserMessages from './components/user/UserMessages.vue'
import UserPosts from './components/user/UserPosts.vue'

// import Home from './components/Home.vue'
// import Blog from './components/Blog.vue'
// import Products from './components/Products.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductList from "./components/product/ProductList";
import ProductForm from "./components/product/ProductForm";
Vue.config.productionTip = false;

//registrar vue-router
Vue.use(VueRouter); //$router and route

//definir las routas para la aplicacion
const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes:[
        {
            path: '/user/:id',
            component: User,
            children:[
                {path: 'profile', component: UserProfile},
                {path: 'messages', component: UserMessages},
                {path: 'posts', component: UserPosts},
            ]
            //definir child routes para usuario

        },
        {
            path: '/products',
            component: ProductList
        },
        {
            path: '/products/new',
            component: ProductForm
        }


        // {path: '/', component: Home},
        // {path: '/products', component: Products},
        // {path: '/blog', component: Blog}
    ]
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
