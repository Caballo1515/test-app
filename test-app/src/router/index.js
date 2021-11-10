import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormComponent from '../components/FormComponent.vue'
import Users from '../components/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'FormComponent',
    component: (FormComponent)
  },
  {
    path: '/users',
    name: 'Users',
    component: (Users)
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
