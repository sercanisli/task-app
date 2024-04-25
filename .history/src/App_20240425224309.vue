<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add a project</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
    components:{

    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: #2c3e50;
}
</style>
