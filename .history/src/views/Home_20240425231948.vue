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

<style >
.project {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
  border-left: 4px solid #ff5500;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.project.complete {
  border-left: 4px solid #76dd78;
}
.project.complete .tick {
  color: #76dd78;
}
</style>
