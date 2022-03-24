<script>
import AppNav from "./components/appNav.vue";
export default{ components: { AppNav } }
</script>

<template>
<div>
  <header class="app-header">
    <app-nav></app-nav>
  </header>
  <main class="container">
  <router-view></router-view>
  </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
