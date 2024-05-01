<template>
  <div class="container welcome">
    <p>Welcome</p>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'

export default {
  components:{
    SignupForm
  }
}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
</style>