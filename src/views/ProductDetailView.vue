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

<template v-if="productdata.productDetail" >
    <div class="container">
        <div class="row mt-5">
            <div class="col-6">
                <img :src="(productdata.productDetail.options.image)" />
            </div>
            <div class="col-6">
                <div>
                    <h2>{{ productdata.name }}</h2>
                </div>
                <div>
                    <!-- <h5>NT$ {{ productdata.productDetail[0].price.base }}</h5> -->
                </div>
                <div style="display:flex;">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <!-- web api to productdata.productDetail.options.size, and use v-for to displat all size
                    then all button have @click to send request to server to search size's quantity -->
                    <i class="fa fa-minus"></i>
                        <h5 class="text-grey mt-1 mr-1 ml-1">2</h5>
                    <i class="fa fa-plus"></i>
                </div>
                
            </div>
        </div>
    </div>
    
    
    
</template>