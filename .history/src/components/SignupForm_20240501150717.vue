<template>
  <form @submit="handleSubmit">
    <input type="text" required placeholder="Display Name" v-model="displayName">
    <input type="email" required placeholder="E-mail" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Sign Up</button>
  </form>
</template>

<script>
import {ref} from 'vue';

export default {
 setup() {
    const displayName = ref('')
    const emial = ref('')
    const password = ref('')

    const handleSubmit = () =>{
        console.log(displayName.value, emial.value, password.value);
    }

    return {displayName, emial, password};
 }
}
</script>

<style>

</style>