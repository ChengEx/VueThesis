<script>
    import Product from '../components/Product.vue'
    import { getInventoriesByCategories } from '../api'
    export default {    
        data(){
            return{
                inventory:{}
            }
        },
        components:{
            Product
        },
        created() {
            // console.log("$route",this.$route.path)
            // const splitPath = this.$route.path.split("/");  //  /Male/Pants  -> [0]:'',[1]:Male ,[2]:Pants
            // const category = splitPath[1];
            // const type = splitPath[2]

            // this.inventory = getInventoriesByCategories(category,type).then(response=>{
            //     this.inventory = response.data;
            //     console.log("inventory:",this.inventory);
            // }).catch(error => {
            //     console.log(error);
            // }) 
        }, 
        methods:{

        }
    }
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-2"> 
                <router-link to="/male/hats" style="text-decoration: none;">
                    hats
                </router-link>
                <router-link to="/male/short" style="text-decoration: none;">
                    short
                </router-link>
                <router-link to="/male/pants" style="text-decoration: none;">
                    pants
                </router-link>    
            </div>
            <div class="col-10">
                <div class="row">
                    <Product v-for="(product,index) in inventory" :key="index" :product="product" />      
                </div>
            </div>
            
        </div>
    </div>
    
</template>