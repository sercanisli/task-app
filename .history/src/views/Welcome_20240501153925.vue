<template>
  <div class="container welcome">
    <p>Welcome</p>
    <div v-if="showLogin"> 
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm />
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'

export default {
  components:{
    SignupForm,
    LoginForm
  },
  setup(){
    const showLogin = ref(true);

    return { showLogin };
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  color: #777;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
  background-color: rgb(54, 196, 108);
  border-radius: 20px;
  border: none;
  padding: 15px;
  color: white;
}
</style>