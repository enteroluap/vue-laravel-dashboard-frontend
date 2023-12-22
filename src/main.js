import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LoginComponent from './views/LoginComponent.vue'
import HomeComponent from './views/HomeComponent.vue'

const routes = [
    { path: '/', name: 'login', component: LoginComponent },
    { path: '/home', name: 'home', component: HomeComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
