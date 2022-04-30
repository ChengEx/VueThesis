<script>
    export default {
        props:{

        }, 
        data() {
            return {
                products:[
                {
                    id:1,
                    name:'product1',
                    quantity: 50,
                    price: 100,
                    img:'../assets/img/img-1.jpg',
                    cart: false
                },
                {
                    id:2,
                    name:'product2',
                    quantity: 40,
                    price: 500,
                    img:'../assets/img/img-2.jpg',
                    cart: false
                },
                {
                    id:3,
                    name:'product3',
                    quantity: 550,
                    price: 1050,
                    img:'../assets/img/img-3.jpg',
                    cart: false
                },
                {
                    id:4,
                    name:'product4',
                    quantity: 540,
                    price: 1400,
                    img:'../assets/img/img-4.jpg',
                    cart: false
                },
                {
                    id:5,
                    name:'product5',
                    quantity:550,
                    price: 150,
                    img:'../assets/img/img-5.jpg',
                    cart: false
                },
                {
                    id:6,
                    name:'product6',
                    quantity: 660,
                    price: 1060,
                    img:'../assets/img/img-6.jpg',
                    cart: false
                },
                {
                    id:7,
                    name:'product7',
                    quantity: 770,
                    price: 1070,
                    img:'../assets/img/img-7.jpg',
                    cart: false
                }
            ]
            }
            
        },
        methods:{
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
    </div>
  </div>
</template>
<style scoped>

</style>