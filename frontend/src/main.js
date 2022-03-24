import { createApp } from 'vue'
import App from './App.vue'
// importing the vue library
import { createRouter,createWebHistory } from 'vue-router'

// importing pages
// import home from './components/home.vue'
import Home from './components/home.vue'
import buyElectricity from './components/buyElectricity.vue'
import viewDays from './components/viewDays.vue'


// styles importing
import './index.css'

const router = createRouter({
  history : createWebHistory(),
  routes : [
    {path:'/',name:'home',component:Home},
    {path:'/days',name:'Days',component:viewDays},
    {path:'/buy',name:'Buy',component:buyElectricity}
  ]
})


createApp(App)
.use(router)
.mount('#app')