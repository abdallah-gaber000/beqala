<template>
  <div>
    <hedar-page />
    <footer-page />
    <h1>Hello from ABOUT</h1>
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
