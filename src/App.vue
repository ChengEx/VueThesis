<script>
  // import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    data(){
      return{
        // user: JSON.parse(localStorage.getItem('profile'))
      }
      
    },
    created() {
      // const user = JSON.parse(localStorage.getItem('profile'))
      // this.$store.dispatch('user', user)
    },

    components: {
      Navbar,
      Footer
    },
    // methods: {
    //   test(){
    //     console.log(this.user)
    //   }
    // }
  }

</script>


<template>
  <Navbar/>
  <!-- <button @click="test"></button> -->
  <router-view />
  <Footer/>
</template>

<style>
#app {
  font-family : Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing : grayscale;
  text-align : center;
  color : #2c3e50;
  /* margin-top: 60px; */
}
</style>