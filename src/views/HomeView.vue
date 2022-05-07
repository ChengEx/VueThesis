<script>
    import Carousel from '../components/Carousel.vue'
    import Product from '../components/Product.vue'
    import { getInventories } from '../api'

    export default {
        props:['user'], 
        data() {
          return {

            inventory: {},  
          }
        },
        created() {

          // console.log("home",user)
          // this.user.firstName = localStorage.getItem('profile').firstName;
          // this.user.lastName = localStorage.getItem('profile').lastName;
          this.inventory = getInventories()
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