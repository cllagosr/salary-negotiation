import Vue from 'vue'
import VueRouter from 'vue-router'
import SalaryForm from '../views/SalaryForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Employer',
    component: SalaryForm,
    props: { role: 'employer' }
  },
  {
    path: '/employee',
    name: 'Employee',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SalaryForm,
    props: { role: 'employee' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
