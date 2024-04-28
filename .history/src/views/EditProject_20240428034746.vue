<template>
  <form >
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            title:'',
            details:'',
            uri:"http://localhost:3000/projects/" + this.id
        }
    },
    mounted(){
        fetch(uri)
            .then(response => response.json())
            .then(data=>console.log(data));
    }
}
</script>

<style>

</style>