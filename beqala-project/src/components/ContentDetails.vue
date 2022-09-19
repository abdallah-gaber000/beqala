<template>
  <div id="app">
    <div class="parent flex">
      <div class="image"><p>150*150</p></div>
      <div class="content1">
        <h1>Restaurant_name</h1>
        <p>address..............</p>
        <div class="pa flex flex-row justify-between mt-5">
          <div class="phone">phone_number</div>
          <div class="open">opening</div>
        </div>
      </div>
    </div>
    <div class="image_slider flex flex-row">
      <div class="photo1">200*250</div>
      <div class="photo2">200*250</div>
      <div class="photo3">200*250</div>
    </div>
    <div class="description">
      <p class="desc1">Details & Description</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        voluptatibus aliquam ullam accusamus delectus ut nam nihil maxime
        mollitia officiis, esse numquam quisquam iste aliquid eaque ipsum. Quae,
        cumque consectetur?
      </p>
      <br />
      <h3 class="desc2">Dishes</h3>
      <p class="desc3">meat,pasta,.....</p>
      <br />
      <h3 class="desc4">atmosphere</h3>
    </div>
  </div>
</template>
<style scoped>
.parent,
.image_slider,
.description {
  animation: transitionin 3s;
}
.image {
  margin: 20px;
  margin-left: 200px;
  width: 150px;
  height: 150px;
  background-color: rgb(233, 240, 22);
}
.content1 {
  margin-top: 50px;
}
.content1 h1 {
  font-size: 25px;
  font-weight: bold;
}
.phone {
  background-color: #ffcd00;
  /* border: 2px solid black; */
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
  width: 150px;
  text-align: center;
}
.open {
  margin-left: 30px;
  background-color: #ffcd00;
  /* border: 2px solid black; */
  box-shadow: 5px 10px 18px #888888;
  border-radius: 5px;
  width: 150px;
  text-align: center;
}
.photo1,
.photo2,
.photo3 {
  /* margin: 20px; */
  margin-left: 200px;
  width: 200px;
  height: 250px;
  background-color: #888888;
  font-size: 20px;
}
.description {
  padding-left: 200px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  width: 50%;
}
.desc1,
.desc2,
.desc4 {
  border-bottom: 1px black dotted;
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
