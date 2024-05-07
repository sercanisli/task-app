<template>
  <div class="buttonDiv">
    <!-- <p class="displayName">{{ user.displayName }}</p> -->
    <button class="button" @click="handleClick">Logout</button>
  </div>
  <nav class="main-nav">
    <router-link :to="{ name: 'home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Project</router-link>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
  setup() {
    const { logout, error } = useLogout();
    const { user } = getUser();
    const userName = user.displayName;
    const handleClick = async () => {
      await logout();
      if (!error.value) {
      }
    };
    return { handleClick, user };
  },
};
</script>

<style>
.main-nav {
  text-align: center;
  margin: 20px auto;
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
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.displayName {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f08be2;
  color: white;
  padding: 10px;
  border-radius: 35px;
}

.displayName {
  margin-right: 20px;
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
