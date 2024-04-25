<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="prj in projects" :key="prj.id">
        <h2>{{ prj.title }}</h2>
        <p>{{ prj.details }}</p>
      </div>
    </div>
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
