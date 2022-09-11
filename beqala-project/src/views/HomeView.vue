<template>
  <div class="beqala">
    <div class="sticy">
      <nav class="navbar grid grid-cols-2 justify-items-center items-center">
        <span><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span>
        <ul class="grid grid-cols-3 ul justify-center text-2xl">
          <li><router-link to="/LogIn" class="Log">LogIn</router-link></li>
          <li><router-link to="/Join" class="Join">Join</router-link></li>
          <!-- <li><router-link to="/Add" class="Add">AddPlace</router-link></li> -->
        </ul>
      </nav>
    </div>
    <div class="main w-full h-full">
      <nav class="animation">
        <nav class="input">
          <input type="text" name="name" placeholder="What?" class="what" />
          <input type="text" name="name" placeholder="Where?" class="where" />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </nav>
        <nav class="router">
          <router-link to="/resturant">Resturant</router-link> |
          <router-link to="/about">Medical Clinics</router-link>
          <router-view />
        </nav>
      </nav>
      <nav class="img w-full h-36"></nav>
    </div>
    <br />
    <div class="grid grid-cols-3 justify-items-center items-center icons">
      <div class="grid items-center text-center web">
        <i class="fa fa-cart-shopping"></i>
        <h1>𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</h1>
        <p>
          Get a clear view of what’s working and what’s not We’ll conduct three
          audits: your performance, website design,
        </p>
      </div>
      <div class="grid items-center text-center restaurant">
        <i class="fas fa-utensils"></i>
        <h1>Restaurant</h1>
        <p>
          Get a clear view of what’s working and what’s not We’ll conduct three
          audits: your performance, website design,
        </p>
      </div>
      <div class="grid items-center text-center clinic">
        <i class="fas fa-clinic-medical"></i>
        <h1>Medical Clinics</h1>
        <p>
          Get a clear view of what’s working and what’s not We’ll conduct three
          audits: your performance, website design,
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.beqala {
  width: 100%;
  height: 200vh;
}
.main {
  width: 100%;
  height: 60vh;
  border-radius: 1px solid black;
  /* background-color: #ffcd00; */
  /* background-color: #145369; */
  background-color: #2162a3;
  background-color: darkturquoise;
}
.navbar {
  height: 80px;
  border-bottom: 3px solid #20272b;
}
.sticy {
  position: sticky;
  top: 0;
  background-color: #2162a3;
  background-color: darkturquoise;
}
span {
  font-size: 35px;
  color: black;
}
.ul {
  width: 75%;
  float: right;
  /* font-size: 80px; */
  color: white;
}
li {
  border: 1px solid black;
  width: 60%;
  text-align: center;
  border-radius: 5px;
  background-color: black;
  height: 90%;
}
li:hover {
  background: transparent;
}
.input {
  padding-top: 70px;
  padding-left: 20%;
  font-size: 30px;
}
.router {
  padding-left: 35%;
  font-size: 30px;
  color: black;
}
.what {
  border: 1px solid;
}
.where {
  border: 1px solid;
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
  color: white;
  border-radius: 1px solid black;
}
.img {
  background-image: url("https://static.yellowpages.ca/ypca/ypui-6.69.0.0-20220823.0703/resources/images/homeBanner/ypca_cover_desktop.svg");
  background-repeat: no-repeat;
  /* background-size: cover; */
  position: absolute;
  bottom: 40%;
}
/* .animation {
  animation-name: example;
  animation-duration: 2s;
} */
@keyframes example {
  from {
    opacity: 0;
    transform: perspective(0);
  }
  to {
    opacity: 1;
    transform: perspective(20);
  }
}
.web {
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 10px #20272b;
  width: 50%;
  height: 50vh;
}
.restaurant {
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  width: 50%;
  height: 50vh;
}
.clinic {
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  width: 50%;
  height: 50vh;
}
.icons h1 {
  font-size: 20px;
}
.icons i {
  font-size: 60px;
}
</style>
