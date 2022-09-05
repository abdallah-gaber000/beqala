<template>
  <div class="main">
    <nav class="navbar grid grid-cols-2 justify-items-center items-center">
      <span>𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</span>
      <ul class="grid grid-cols-2 ul justify-center">
        <li><router-link to="/LogIn">LogIn</router-link></li>
        <li><router-link to="/Join">Join</router-link></li>
      </ul>
    </nav>
    <nav class="input">
      <input type="text" name="text" placeholder="What?" class="what" />
      <input type="text" name="text" placeholder="Where?" class="where" />
    </nav>
    <nav class="router">
      <router-link to="/resturant">Resturant</router-link> |
      <router-link to="/about">Medical Clinics</router-link>
      <router-view />
    </nav>
    <nav class="logo">
      <span class="font">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</span>
    </nav>
  </div>
</template>
<style>
.main {
  margin-right: 0px;
  width: 100%;
  height: 700px;
  border-radius: 1px solid black;
  background-image: linear-gradient(to top right, #60c68d, #3e7eaf);
  margin-top: 10px;
}
.navbar {
  /* border: 1px solid red; */
  height: 100px;
  width: 100%;
}
span {
  font-size: 50px;
}
.ul {
  width: 30%;
  /* border: 1px solid red; */
  float: right;
  font-size: 20px;
}
.input {
  /* border: 1px solid red; */
  padding-top: 100px;
  padding-left: 20%;
  font-size: 30px;
}
.router {
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  padding: 10% 40%;
  font-size: 70px;
}
@media screen and (max-width: 1024px) {
  .navbar {
    /* border: 1px solid red; */
    height: 100px;
    width: 100%;
  }
  span {
    font-size: 50px;
  }
  .ul {
    width: 30%;
    /* border: 1px solid red; */
    float: right;
    font-size: 20px;
  }
  .input {
    /* border: 1px solid red; */
    padding-top: 100px;
    padding-left: 20%;
    font-size: 30px;
  }
  .router {
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    padding: 10% 40%;
    font-size: 70px;
  }
}
</style>
