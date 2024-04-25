<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="prj in projects" :key="prj.id">
        <SingleProject :project="prj" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject'

export default {
  name: 'Home',
  components: {
    SingleProject
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
