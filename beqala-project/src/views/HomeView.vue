<template>
  <div class="main w-full h-full">
    <nav class="navbar grid grid-cols-2 justify-items-center items-center">
      <span><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span>
      <ul class="grid grid-cols-2 ul justify-center">
        <li><router-link to="/LogIn">LogIn</router-link></li>
        <li><router-link to="/Join">Join</router-link></li>
      </ul>
    </nav>
    <nav class="input">
      <input type="text" name="text" placeholder="What?" class="what" />
      <input type="text" name="text" placeholder="Where?" class="where" />
      <button type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </nav>
    <nav class="router">
      <router-link to="/resturant">Resturant</router-link> |
      <router-link to="/about">Medical Clinics</router-link>
      <router-view />
    </nav>
    <nav class="img w-full h-36"></nav>
    <nav class="logo">
      <span class="font"><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span>
    </nav>
  </div>
</template>
<style scoped>
/* * {
  padding: 0;
  margin: 0;
} */
.main {
  /* margin-right: 0px; */
  width: 100%;
  height: 100vh;
  border-radius: 1px solid black;
  /* background-image: linear-gradient(to top right, #efc2d7, #9895ef); */
  background-color: #ffcd00;
}
.navbar {
  height: 100px;
}
span {
  font-size: 50px;
}
.ul {
  width: 30%;
  float: right;
  font-size: 20px;
}
.input {
  padding-top: 100px;
  padding-left: 20%;
  font-size: 30px;
}
.router {
  padding-left: 35%;
  font-size: 30px;
}
.what {
  border: 1px solid black;
}
.where {
  border: 1px solid black;
  margin-left: 10px;
}
.logo {
  font-size: 70px;
}
.font {
  position: absolute;
  left: 40%;
  top: 80%;
}
button {
  background-color: black;
  width: 5%;
  border-radius: 1px solid black;
}
.img {
  background-image: url("https://static.yellowpages.ca/ypca/ypui-6.69.0.0-20220823.0703/resources/images/homeBanner/ypca_cover_desktop.svg");
  background-repeat: no-repeat;
  /* background-size: cover; */
  position: absolute;
  bottom: 30%;
}
</style>
