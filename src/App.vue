<template>
  <div id="app">
    <app-loading-screen
      v-if="$store.getters.getLoadingScreenStatus"
    ></app-loading-screen>
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/libraries/bootstrap/bootstrap.bundle";
export default {};
</script>

<style>
@import url("./assets/libraries/bootstrap/bootstrap.css");
#app {
  width: 100vw;
  height: 100vh;
}
</style>
