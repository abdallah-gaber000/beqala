<template>
  <div>
    <hedar-page />
    <footer-page />
    <div class="parent flex justify-center">
      <div class="content flex">
        <div class="image"><P>150*150</P></div>
        <div class="content1">
          <h2>𝑴𝑬𝑫𝑰𝑪𝑨𝑳 𝑪𝑳𝑰𝑵𝑰𝑪𝑺_name</h2>
          <p>address</p>
          <p>description</p>
          <div class="content3 flex">
            <div class="phone">phone_number</div>
            <div class="open">opening</div>
          </div>
        </div>
      </div>
    </div>
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
<style scoped>
.content {
  margin-top: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 50%;
  animation: transitionin 3s;
}
.image {
  margin: 20px;
  width: 150px;
  height: 150px;
  background-color: rgba(0, 22, 60, 255);
}
.image p {
  font-size: 20px;
  padding-top: 30px;
  padding-left: 10px;
  color: white;
}
.content3 div {
  margin-top: 50px;
  color: white;
}
.content3 .phone {
  background-color: #00163c;
  /* border: 2px solid black; */
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
  width: 150px;
  text-align: center;
}
.content3 .open {
  margin-left: 30px;
  background-color: #00163c;
  /* border: 2px solid black; */
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
  width: 150px;
  text-align: center;
}
.content1 {
  padding-left: 30px;
}
.content1 h2 {
  font-size: 30px;
}
@keyframes transitionin {
  from {
    opacity: 0;
    transform: perspective(0);
  }
  to {
    opacity: 1;
    transform: perspective(20);
  }
}
</style>
