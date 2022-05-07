<script>
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'
  export default {
    data(){
      return{
        // user: JSON.parse(localStorage.getItem('profile'))
        user:"hi"
      }
      
    },
    // created() {
    //   this.user = JSON.parse(localStorage.getItem('profile'))
    // },

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
  <Navbar :user="user"/>
  <!-- <button @click="test"></button> -->
  <RouterView />
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