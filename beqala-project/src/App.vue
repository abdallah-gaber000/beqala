<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
</style>
