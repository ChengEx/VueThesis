<script>
    import { getInventoryById } from '../api.js'
    export default {
        data(){
            return {
                productdata:{
                    productDetail:[{
                        options:{
                            image:""
                        }
                    }]
                }
            }
        },
        created() {
            getInventoryById(this.$route.params.id)
            .then(response=>{
              this.productdata = response.data;
            }).catch(error => {
              console.log(error);
            })
        },
    }
</script>

<template v-if="productdata.productDetail[0]" >
    <img :src="(productdata.productDetail[0].options.image)" />
    <div>{{ productdata._id }}</div>
    <div>{{ productdata.name }}</div>
</template>