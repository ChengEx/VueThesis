<script>
    import { getInventoryById } from '../api.js'
    export default {
        data(){
            return {
                productdata:{},       
                cartData:{
                    size:"",
                    quantity:0,
                }
            }
        },
        methods:{
            addList(ev){
                //console.log("ev",ev);
                const target = ev.target;

                //find size button
                const eachSizeButton = document.getElementsByClassName('size-button');
                console.log(eachSizeButton.length)
                
                if(target.classList.contains('current')){
                    target.classList.remove('current')
                }else{
                    for(var i=0; i<eachSizeButton.length;i++){
                        //console.log(eachSizeButton[i].classList);
                        eachSizeButton[i].classList.remove('current'); 
                    }
                    target.classList.add('current')
                    this.cartData.size=target.outerText;                 
                }
            },
            add(){
                this.cartData.quantity+=1;
            },
            minus(){
                this.cartData.quantity===0 ? (this.cartData.quantity=0):(this.cartData.quantity-=1);
            }
        },
        created() {
            getInventoryById(this.$route.params.id).then(response=>{
                this.productdata = response.data;
                console.log("getInventoryById",this.productdata);
            }).catch(error => {
                console.log(error);
            })
        },
    }
</script>

<template v-if="productdata" >
    <div class="container">
        <div class="row mt-5">
            <div class="col-6">
                <img :src="(productdata.productDetail?.options?.image)" />
            </div>
            <div class="col-6 mt-5">
                <div class="row">
                    <div class="col-7">
                        <h2>{{ productdata.name }}</h2>
                    </div>
                    <div class="col-5" >
                        <div style="text-align:right;">
                            <h5 style="margin-bottom:0px; text-decoration: line-through"> {{ productdata.productDetail?.price?.base }}</h5>
                        </div>
                        <div style="text-align:right;">
                            <span style="text-transform: uppercase;">NT$ </span>
                            <span style="font-size:50px; text-align:right;">
                                {{ productdata.productDetail?.price?.discount }}
                            </span>
                        </div>
                    </div>
                </div>
                <hr class="hrhr mt-3">
                <div style="display:flex;">
                    <button class="size-button" v-for="(siglesize, index) in productdata.productDetail?.options?.allsize" :id="siglesize.size" @click.prevent="addList($event)">{{siglesize.size}}</button>
                    <!-- web api to productdata.productDetail.options.size, and use v-for to displat all size
                    then all button have @click to send request to server to search size's quantity -->
                    <div class="mt-3" style="display:flex; margin-left:30px;">
                        <span class="buttonStyle" id="minus" @click="minus">
                            <i class="fa fa-minus mt-1" style="margin-right:10px;"></i>    
                        </span>
                        <h5 class="text-grey mr-3" style="margin-right:10px;">{{cartData.quantity}}</h5>
                        <span class="buttonStyle" id="plus" @click="add">
                            <i class="fa fa-plus mt-1"></i>
                        </span>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    
    
    
</template>
<style>
.buttonStyle {
    color: #333;
    cursor: pointer
}
.size-button {
    margin-right: 50px;
    height: 50px;
    width:70px;
    border: none;
}
.current {
    border: 1px solid #333;
}
</style>