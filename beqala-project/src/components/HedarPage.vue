<template>
  <div class="navbar">
    <nav class="hedar grid grid-cols-5 justify-items-center items-center">
      <span><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span>
      <nav class="input grid grid-cols-3 col-start-2 col-span-3 items-endclass">
        <input type="text" name="text" placeholder="What?" class="what" />
        <input type="text" name="text" placeholder="Where?" class="what pl-6" />
        <button type="submit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </nav>
      <router-link to="/LogIn" class="text-2xl log">LogIn</router-link>
    </nav>
    <nav class="RouterNav flex justify-center">
      <div class="flex initial w-64">
        <router-link to="/resturant">resturant</router-link>
      </div>
      <div class="flex initial w-64">
        <router-link to="/about">Medical Clinics</router-link>
      </div>
      <router-view />
    </nav>
  </div>
</template>
<style scoped>
.navbar {
  height: 15vh;
  /* background-image: linear-gradient(to top right, #60c68d, #3e7eaf); */
  /* border: 1px solid red; */
  background-color: #ffcd00;
}
.hedar {
  /* border: 1px solid red; */
  /* margin-top: 20px; */
  height: 80%;
  /* display: inline; */
}
.input {
  /* border: 1px solid red; */
  width: 100%;
}
span {
  font-size: 30px;
}
input {
  /* padding-left: 35%; */
  font-size: 15px;
  border: 1px solid blue;
  height: 40px;
  width: 40%;
}
.what {
  border: 1px solid black;
  width: 400px;
}
button {
  background-color: black;
  width: 100px;
  margin-left: 6px;
  border-radius: 1px solid black;
  color: white;
}
.log {
  border: 1px solid black;
  width: 30%;
  text-align: center;
  border-radius: 5px;
}
.RouterNav {
  font-size: 20px;
  position: relative;
  bottom: 15px;
}
</style>
