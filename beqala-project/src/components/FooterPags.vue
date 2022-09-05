<template>
  <nav class="RouterNav grid grid-cols-2">
    <router-link to="/resturant">resturant</router-link>
    <router-link to="/about">about</router-link>
    <router-view />
  </nav>
</template>
<style>
.RouterNav {
  background-color: red;
}
</style>
