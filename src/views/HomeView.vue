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
              //console.log(this.inventory);
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
        <Product v-for="(product,index) in inventory" :key="index" :product="product" />
        
      </div>
    </div>

  </div>
</template>
<style scoped>

</style>