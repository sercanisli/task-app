<template>
  <form @submit.prevent="handleLogin">
    <input type="email" required placeholder="E-mail" v-model="email">
    <input type="password" required placeholder="Password" v-model="password">
    <button>Login</button>
  </form>
</template>

<script>
import {ref} from 'vue';
import useLogin from '../composables/useLogin';

export default {
 setup() {
    const email = ref('')
    const password = ref('')

    const handleLogin = () =>{
        console.log(email.value, password.value);
    }

    return {email, password, handleLogin};
 }
}
</script>

<style>

</style>