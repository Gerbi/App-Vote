import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Products from './components/Products.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AuthForm from "./components/auth/AuthForm";
import Dashboard from "./components/dashboard/Dashboard";
Vue.config.productionTip = false;

//registrar vue-router
Vue.use(VueRouter);
const requiresAuth = (to, from, next) => {
    //fetch user from localStorage
    const user = localStorage.getItem('user');

    //if there is a user then navigate to dashboard
    if (user){
        next();
    }else {
        next({path: '/'});
    }
    //otherwise don't navigate to root route
};

//definir las routas para la aplicacion
const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes:[
        {
            path: '/',
            component: AuthForm
        },
        {
            path: '/dashboard',
            component: Dashboard,
            beforeEnter: requiresAuth
        },
        // {path: '/blog', component: Blog}
    ]
});

new Vue({
    router,
  render: h => h(App),
}).$mount('#app');
