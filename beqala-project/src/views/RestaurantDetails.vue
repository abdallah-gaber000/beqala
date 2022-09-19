<template>
  <div id="app">
    <hedar-page />
    <ContentDetails />
  </div>
</template>

<script>
import HedarPage from "../components/HedarPage.vue";
import ContentDetails from "@/components/ContentDetails.vue";
export default {
  components: {
    HedarPage,
    ContentDetails,
  },
};
</script>
<style scoped></style>
