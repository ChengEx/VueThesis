<script>
    export default {
        props:{
          category:{
            type: String
          }
        }   
    }
</script>
<template>
    <div v-if="category=='male'" class="col-2"> 
        <router-link to="/male/hats1" style="text-decoration: none;">
            hats1
        </router-link>
        <router-link to="/male/short1" style="text-decoration: none;">
            short1
        </router-link>
        <router-link to="/male/pants1" style="text-decoration: none;">
            pants1
        </router-link> 
    </div>
    <div v-else-if="category=='female'" class="col-2"> 
        <router-link to="/female/hats2" style="text-decoration: none;">
            hats2
        </router-link>
        <router-link to="/female/short2" style="text-decoration: none;">
            short2
        </router-link>
        <router-link to="/female/pants2" style="text-decoration: none;">
            pants2
        </router-link> 
    </div>
    <div v-else-if="category=='kids'" class="col-2"> 
        <router-link to="/kids/hats3" style="text-decoration: none;">
            hats3
        </router-link>
        <router-link to="/kids/short3" style="text-decoration: none;">
            short3
        </router-link>
        <router-link to="/kids/pants3" style="text-decoration: none;">
            pants3
        </router-link> 
    </div>
</template>