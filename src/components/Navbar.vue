<script>
export default {
  name:"Navbar",
  props:{
    user: String
  },
  data(){
    return {
      //  user: JSON.parse(localStorage.getItem('profile')),
    }
  },
  created(){
    // this.user = JSON.parse(localStorage.getItem('profile'));
    //console.log("nav",userData)
  },
  methods:{
    test(){
      console.log('test',user)
    }
  }
}
</script>
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" aria-current="page" to="/">電商平台</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mt-3 mb-3" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <button @click="test">abc</button>
        <!-- <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
          <a class="nav-link active" aria-current="page" href="#"> Home </a>
        </li> -->
        <!-- <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li> -->

<!-- 看分類是否要加進資料庫 -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            Category 1
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> 
                <RouterLink class="dropdown-item" to="/about" style="text-decoration: none; color: inherit;">Product 1 </RouterLink>
            </li>
            <li> <a class="dropdown-item" href="#"> Product 2 </a> </li>
            <li> <hr class="dropdown-divider"></li>
            <li> <a class="dropdown-item" href="#"> Product 3 </a> </li>
          </ul>
        </li>
        
      </ul>
      <div v-if="!user">
        <RouterLink class="nav-link" to="/signin" style="text-decoration: none; color: inherit;">Sign in</RouterLink>
      </div>
      <div v-else>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" >
            <button @click.prevent="logout">
              Sign out
            </button>
            
          </li>
        </ul>
        <RouterLink class="nav-link"  style="text-decoration: none; color: inherit;"> 你好   Sign out</RouterLink>
      </div>
      <div>
        <RouterLink class="nav-link" to="/" style="text-decoration: none; color: inherit;">Cart</RouterLink>
      </div>
      <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit"> Search </button>
      </form> -->
    </div>
  </div>
</nav>
</template>
<style>
.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
 }
</style>