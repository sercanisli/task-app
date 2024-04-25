<template>
  <div class="project">
    <div class="actions">
        <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
    </div>
    <div v-if="showDetails" class="details">
        <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['project'],
    data(){
        return {
            showDetails: false
        }
    }
}
</script>

<style>

</style>