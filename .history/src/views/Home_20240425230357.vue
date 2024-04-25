<template>
  <div class="home">
    Home
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data(){
    return{
      projects:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/projects')
      .then(response => response.json())
      .then(data => this.projects = data)
      .catch(error => console.log(error.message))
  }
}
</script>
