import Vue from 'vue'
import VueRouter from 'vue-router'
import FormComponent from '../components/FormComponent.vue'
import Users from '../components/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/show',
    name: 'Users',
    component: (Users)
  },
  {
    path: '/',
    name: 'FormComponent',
    component: (FormComponent)
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
