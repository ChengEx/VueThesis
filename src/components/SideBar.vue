<script>
    import { getCategories } from '../api.js'
    export default {
        props:{
          category:{
            type: String
          }
        },
        data(){
            return{
                AllCategory:{},
            }
        },
        created(){
            getCategories().then(response =>{
                this.AllCategory = response.data;
                console.log(this.AllCategory);
            }).catch(error => {
                console.log(error);
            }) 
        }
        
    }
</script>
<template>
    <div v-if="category=='male'" class="col-2">
        <!-- <div class="row">
            <router-link to="/male/hat" style="text-decoration: none;">
                帽子
            </router-link>
        </div>
        <div class="row">
            <router-link to="/male/shortsleeve" style="text-decoration: none;">
                短袖上衣
            </router-link>
        </div>
        <div class="row">
            <router-link to="/male/longsleeve" style="text-decoration: none;">
                長袖上衣
            </router-link>
        </div>
        <div class="row">
            <router-link to="/male/blouse" style="text-decoration: none;">
                襯衫
            </router-link>
        </div>
        <div class="row">
            <router-link to="/male/coat" style="text-decoration: none;">
                外套
            </router-link>
        </div>
        <div class="row">
            <router-link to="/male/shorts" style="text-decoration: none;">
                短褲
            </router-link>
        </div>
        <div class="row">
            <router-link to="/male/pants" style="text-decoration: none;">
                長褲
            </router-link>
        </div>      -->
        <div class="row">
            <!-- <router-link to="/male/hat" style="text-decoration: none;">
                帽子
            </router-link> -->
            <template v-for="item in AllCategory">
                <router-link :to="`/male/${item.categorynameEN}`">{{item.categoryname}}</router-link>
            </template>
        </div>
    </div>

    <div v-else-if="category=='female'" class="col-2"> 
        <router-link to="/female/hat" style="text-decoration: none;">
            帽子
        </router-link>
        <router-link to="/female/shortsleeve" style="text-decoration: none;">
            短袖上衣
        </router-link>
        <router-link to="/female/longsleeve" style="text-decoration: none;">
            長袖上衣
        </router-link>
        <router-link to="/female/dress" style="text-decoration: none;">
            洋裝
        </router-link>
        <router-link to="/female/coat" style="text-decoration: none;">
            外套
        </router-link>
        <router-link to="/female/shorts" style="text-decoration: none;">
            短褲
        </router-link>
        <router-link to="/female/pants" style="text-decoration: none;">
            長褲
        </router-link>    
        <router-link to="/female/skirt" style="text-decoration: none;">
            裙子
        </router-link>
    </div>

    <div v-else-if="category=='kids'" class="col-2"> 
        <router-link to="/kids/shortsleeve" style="text-decoration: none;">
            短袖上衣
        </router-link>
        <router-link to="/kids/longsleeve" style="text-decoration: none;">
            長袖上衣
        </router-link>
        <router-link to="/kids/coat" style="text-decoration: none;">
            外套
        </router-link>
        <router-link to="/kids/shorts" style="text-decoration: none;">
            短褲
        </router-link> 
        <router-link to="/kids/pants" style="text-decoration: none;">
            長褲
        </router-link> 
        
    </div>
</template>