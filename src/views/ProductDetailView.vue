<script>
    import axios from 'axios'
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
          axios.get('http://localhost:4000/Inventory/'+this.$route.params.id)
            .then(response=>{
              this.productdata = response.data;
            }).catch(error => {
              console.log(error);
            })
          
        },
        computed(){

        }
    }
</script>

<template v-if="productdata.productDetail[0]" >
    <img :src="(productdata.productDetail[0].options.image)" />
    <div>{{ productdata._id }}</div>
    <div>{{ productdata.name }}</div>
    
</template>