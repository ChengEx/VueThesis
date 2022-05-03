<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                productdata:{}
            }
        },
        created() {
          axios.get('http://localhost:4000/Inventory/'+this.$route.params.id)
            .then(response=>{
              this.productdata = response.data;
              console.log(this.inventory);
            }).catch(error => {
              console.log(error);
            })
          
        },
    }
</script>

<template>
    <img :src="(productdata.productDetail[0].options.image)" />
    <div>{{ productdata._id }}</div>
    <div>{{ productdata.name }}</div>
    
</template>