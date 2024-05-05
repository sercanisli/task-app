<template>
    <nav class="main-nav">
      <router-link :to="{ name: 'home' }">Projects</router-link>
      <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
      <button>Logout</button>
    </nav>
  </template>
  
  <script>
  export default {};
  </script>

  import useLogout from '../composables/useLogout';

  export default {
    setup() {
      const {logout, error} = useLogout();
      const handleClick = async () => {
        await logout();
        if(!error.value){
          
        }
      }
      return {handleClick}
    }
  }
  
  <style>
  .main-nav {
    text-align: center;
    margin: 40px auto;
  }
  .main-nav a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
  }
  a.router-link-active {
    border-bottom: 2px solid #76dd78;
    padding-bottom: 4px;
    color: #76dd78;
  }
  </style>