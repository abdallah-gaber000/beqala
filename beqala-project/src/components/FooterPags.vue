<template>
  <div class="parent flex justify-center">
    <div class="content flex">
      <div class="image"><P>150*150</P></div>
      <div class="content1">
        <h2>
          <router-link to="/RestaurantDetails"> Restaurant_name</router-link>
        </h2>
        <p>address</p>
        <p>description</p>
        <div class="content3 flex">
          <div class="phone">phone_number</div>
          <div class="open">opening</div>
        </div>
      </div>
    </div>
  </div>
</template>
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
  background-color: rgb(233, 240, 22);
}
.image p {
  font-size: 20px;
  padding-top: 30px;
  padding-left: 10px;
}
.content3 div {
  margin-top: 50px;
}
.content3 .phone {
  background-color: #ffcd00;
  /* border: 2px solid black; */
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
  width: 150px;
  text-align: center;
}
.content3 .open {
  margin-left: 30px;
  background-color: #ffcd00;
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
