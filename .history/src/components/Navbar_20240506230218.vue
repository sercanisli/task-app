<template>
  <div class="buttonDiv">
    <button class="button" @click="handleClick">Logout</button>
  </div>
  <nav class="main-nav">
    <router-link :to="{ name: 'home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
export default {
  setup() {
    const { logout, error } = useLogout();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
      }
    };
    return { handleClick };
  },
};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 40px auto;
}
.main-nav a {
  display: inline-block;
  text-decoration: none;
  margin: 0 10px;
  color: #999;
  font-size: 18px;
}
a.router-link-active {
  border-bottom: 2px solid #76dd78;
  padding-bottom: 4px;
  color: #76dd78;
}

.buttonDiv {
  justify-content: end;
}

button {
  justify-content: end;
  text-decoration: none;
  background: #33a464;
  color: #fff;
  font-weight: bold;
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
