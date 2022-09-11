<template>
  <div>
    <nav>
      <hedar-page />
      <footer-page />
    </nav>
    <!-- <h1>Hello from RESTURANT</h1> -->
  </div>
</template>
<script>
import FooterPage from "../components/FooterPags.vue";
import HedarPage from "../components/HedarPage.vue";
export default {
  components: {
    FooterPage,
    HedarPage,
  },
};
</script>
