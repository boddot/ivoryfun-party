import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import BirthdayLanding from './views/BirthdayLanding.vue'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import EventDetail from './views/EventDetail.vue'
import Register from './views/Register.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', name: 'BirthdayLanding', component: BirthdayLanding },
  { path: '/home', name: 'Home', component: Home },
  { path: '/events', name: 'Events', component: Events },
  { path: '/events/:id', name: 'EventDetail', component: EventDetail },
  { path: '/register/:id', name: 'Register', component: Register },
  { path: '/about', name: 'About', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
