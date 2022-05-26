<script>
    import Product from '../components/Product.vue'
    import SideBar from '../components/SideBar.vue'
    import { getInventoriesByCategories } from '../api'
    export default {    
        data(){
            return{
                mainRoute:'',
                inventory:{}
            }
        },
        components:{
            Product,
            SideBar
        },
        async created() {
            console.log("$route",this.$route.path)
            const splitPath = this.$route.path.split("/");  //  /Male/Pants  -> [0]:'',[1]:Male ,[2]:Pants
            if(splitPath.length === 2){
                splitPath.push('default')
            }
            this.mainRoute = splitPath[1];
            const category = splitPath[1];
            const type = splitPath[2];   

            console.log("category and type",category, type);
            this.inventory = await getInventoriesByCategories(category,type).then(response=>{
                // this.inventory = response.data;
                // console.log("inventory:",this.inventory);
            }).catch(error => {
                console.log(error);
            }) 
        }, 
        methods:{

        }
    }
</script>
<template>
    <div class="container">
        <div class="row">
            <SideBar :category="mainRoute" />
            <div class="col-10">
                <div class="row">
                    <Product v-for="(product,index) in inventory" :key="index" :product="product" />      
                </div>
            </div>
            
        </div>
    </div>
    
</template>