<template>
  <router-view />
  <!-- <img class="logo" alt="Vue logo" src="./assets/logo.jpg"> -->
  <!-- <SignUpComponent /> -->
  <!-- <HomeComponent /> -->
</template>

<script>
// import HomeComponent from './components/HomeComponent.vue';
// import SignUpComponent from './components/SignUpComponent.vue';

export default {
  name: 'App',
  // components: {
  //   SignUpComponent,
  //   HomeComponent
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  padding: 0;
  margin: 0;
}

.logo {
  width: 100px;
}

.register input, .login input, .add-restaurant input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.register button, .login button, .add-restaurant button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
  background-color: skyblue;
}
</style>
