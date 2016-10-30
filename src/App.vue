<template>
  <div id="app">
    <div class="">
      <router-link to="/Hello">Hello</router-link>
      <router-link to="/Foo">Foo</router-link>
      <router-view></router-view>
    </div>
    <div class="">

    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #c9a6c2;
}
</style>
