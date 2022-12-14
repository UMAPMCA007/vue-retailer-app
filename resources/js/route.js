import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Contact from './components/pages/Contact.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        component:Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router