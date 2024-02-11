import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import App from './App.vue'
import LoginComponent from './views/Login/LoginComponent.vue'
import HomeComponent from './views/Home/HomeComponent.vue'
import ProductsComponent from './views/Products/ProductsComponent.vue'
import ClientsComponent from './views/Clients/ClientsComponent.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

axios.defaults.baseURL = 'http://localhost:8000/api';

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/products', name: 'products', component: ProductsComponent },
    { path: '/clients', name: 'clients', component: ClientsComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
