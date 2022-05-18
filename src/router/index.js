import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import SignInView from '../views/SignIn.vue'
import SignUpView from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/category/:id',
      name:'product',
      component: ProductView
    },
    {
      path:'/product/:id',
      name:'productdetail',
      component: ProductDetailView
    },
    {
      path:'/signin',
      name:'signin',
      component: SignInView
    },
    {
      path:'/signup',
      name:'signup',
      component: SignUpView
    }
  ]
})
export default router


