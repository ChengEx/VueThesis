<script>
    import Carousel from '../components/Carousel.vue'
    import Product from '../components/Product.vue'
    import axios from 'axios'
    export default {
        props:{

        }, 
        data() {
          return {
            inventory:{},  
          }
        },
        created() {
          this.inventory = axios.get('http://localhost:4000/Inventory')
            .then(response=>{
              this.inventory = response.data;
              console.log(this.inventory);
            }).catch(error => {
              console.log(error);
            })
          
        },
        //註冊組件
        components:{
          Carousel,
          Product
        },
        mounted() {
         
        },
        methods: {
          //轉換圖片URL
          getImageUrl(name) {
            return new URL(`${name}`, import.meta.url).href
          }   
        }
        
    }
</script>

<template>
  <div class="container">
    <div class="row">
      <Carousel/>
      <div class="row">
        <Product v-for="(product,index) in inventory" :key="index" :product="product">
        
        </Product>
        
      </div>
    </div>
    
    <!-- <div class="row">
      <div class="col-3 card"  v-for="(product,index) in products" :key="index">
        <RouterLink :to="`/product/${product.id}`" style="text-decoration: none; color: inherit;">
          <img class="card-img-top mt-3" :src="getImageUrl(product.img)">
          <div class="card-body">
            <h2>{{product.name}}</h2>
            <div class="row p-0 mt-3">
              <h5 class="col-auto me-auto p-0">剩餘數量:{{product.quantity}}</h5>
              <h5 class="col-auto p-0">NT${{product.price}}</h5>
            </div>      
          </div>
        </RouterLink>
      </div>
    </div> -->
    <!-- <div class="row">
      <div class="col-3 card"  v-for="(product,index) in inventory" :key="index">
        <RouterLink :to="`/product/${product._id}`" style="text-decoration: none; color: inherit;">
          <img class="card-img-top mt-3" :src="(product.productDetail[0].options.image)">
          <div class="card-body">
            <h2>{{product.name}}</h2>
            <div class="row p-0 mt-3">
              <h5 class="col-auto me-auto p-0">剩餘數量:{{product.productDetail[0].quantity}}</h5>
              <h5 class="col-auto p-0">NT${{product.productDetail[0].price.base}}</h5>
            </div>      
          </div>
        </RouterLink>
      </div>
    </div> -->
    
  </div>
</template>
<style scoped>

</style>