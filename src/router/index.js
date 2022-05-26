import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import MaleProductView from '../views/MaleProductView.vue'
import FemaleProductView from '../views/FemaleProductView.vue'
import KidsProductView from '../views/KidsProductView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import SignInView from '../views/SignIn.vue'
import SignUpView from '../views/SignUp.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import BackStage from '../views/BackStage.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/male',
      name:'maleproduct',
      component: ProductView,
      children:[
        {
          path:':type',
          name:'maleproduct',
          component: ProductView,
        }
      ]
    },
    {
      path:'/female',
      name:'femaleproduct',
      component: ProductView,
      children:[
        {
          path:':type',
          name:'femaleproduct',
          component: ProductView,
        }
      ]
    },
    {
      path:'/kids',
      name:'kidsproduct',
      component: ProductView,
      children:[
        {
          path:':type',
          name:'kidsproduct',
          component: ProductView,
        }
      ]
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
    },
    {
      path:'/shoppingcart',
      name:'shoppingcart',
      component: ShoppingCart
    },
    {
      path:'/backstage',
      name:'backstage',
      component: BackStage
    }
  ]
})
export default router


