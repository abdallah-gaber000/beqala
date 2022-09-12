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
        <span class="text">𝑳𝑰𝑽𝑬. 𝑺𝑯𝑶𝑷. 𝑻𝑨𝑺𝑻𝑬.𝑫𝑰𝑺𝑪𝑶𝑽𝑬𝑹.</span>
        <nav class="input">
          <input
            type="text"
            name="name"
            placeholder="What? (E.g :Restaurante)"
            class="what"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Where? (E.g :AlGalaa Street)"
            class="where"
            required
          />
          <button @click="viewPage" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </nav>
        <nav class="router">
          <router-link to="/resturant">𝑹𝑬𝑺𝑻𝑼𝑹𝑨𝑵𝑻</router-link> |
          <router-link to="/about">𝑴𝑬𝑫𝑰𝑪𝑨𝑳 𝑪𝑳𝑰𝑵𝑰𝑪𝑺</router-link>
          <router-view />
        </nav>
      </nav>
      <nav class="img w-full h-36">
        <img
          src="https://static.yellowpages.ca/ypca/ypui-6.69.0.0-20220823.0703/resources/images/homeBanner/ypca_cover_desktop.svg"
        />
      </nav>
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
        <h1>𝑹𝑬𝑺𝑻𝑼𝑹𝑨𝑵𝑻</h1>
        <p>
          Get a clear view of what’s working and what’s not We’ll conduct three
          audits: your performance, website design,
        </p>
      </div>
      <div class="grid items-center text-center clinic">
        <i class="fas fa-clinic-medical"></i>
        <h1>𝑴𝑬𝑫𝑰𝑪𝑨𝑳 𝑪𝑳𝑰𝑵𝑰𝑪𝑺</h1>
        <p>
          Get a clear view of what’s working and what’s not We’ll conduct three
          audits: your performance, website design,
        </p>
      </div>
    </div>
    <h1 class="asidh1 text-4xl">Looking for Tips & Ideas?</h1>
    <br />
    <br />
    <div class="grid grid-cols-3 justify-items-center items-center asid">
      <div class="grid items-center text-center asid1">
        <h1>𝑹𝑬𝑺𝑻𝑼𝑹𝑨𝑵𝑻</h1>
        <p>dejkfbr.jng.,fnb,.fnf, s ,b</p>
      </div>
      <div class="grid items-center text-center asid2">
        <h1>𝑴𝑬𝑫𝑰𝑪𝑨𝑳 𝑪𝑳𝑰𝑵𝑰𝑪𝑺</h1>
        <p>edflcjnd.cvnd.vbf.vbfnv kfcdcd</p>
      </div>
      <div class="grid items-center text-center asid3">
        <h1>𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</h1>
        <p>dejkfbr.jng.,fnb,.fnf, s ,b</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    viewPage() {
      this.$router.push({
        name: "resturant",
      });
    },
  },
};
</script>
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
  /* background-color: #2162a3;
  background-color: darkturquoise; */
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
.navbar {
  height: 80px;
  border-bottom: 3px solid #20272b;
}
.sticy {
  width: 100%;
  position: sticky;
  top: 0;
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
}
span {
  font-size: 35px;
  color: white;
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
  background-color: white;
  color: black;
  height: 90%;
}
li:hover {
  background: transparent;
}
.text {
  /* border: 1px solid white; */
  position: relative;
  left: 35%;
  top: 50px;
}
.input {
  height: 50%;
  /* border: 1px solid white; */
  padding-top: 50px;
  padding-left: 20%;
  font-size: 30px;
}
.router {
  padding-left: 40%;
  font-size: 30px;
  color: white;
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
  background-color: white;
  width: 5%;
  color: black;
  border-radius: 1px solid black;
}
.img {
  /* background-image: url("https://static.yellowpages.ca/ypca/ypui-6.69.0.0-20220823.0703/resources/images/homeBanner/ypca_cover_desktop.svg");
  background-repeat: no-repeat; */
  /* position: absolute;
  bottom: 40%; */
  margin-top: 3%;
}
.animation {
  animation-name: example;
  animation-duration: 2s;
}
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
.icons {
  background-color: #f3f3f3;
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
.asidh1 {
  margin-left: 40%;
  margin-top: 60px;
}
.asid {
  border: 1px solid black;
  background-color: #f3f3f3;
}
.asid1 {
  border: 1px solid black;
  background-color: chocolate;
  width: 25vw;
  height: 20vh;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  border-radius: 10px;
}
.asid2 {
  border: 1px solid black;
  background-color: chocolate;
  width: 25vw;
  height: 20vh;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  border-radius: 10px;
}
.asid3 {
  border: 1px solid black;
  background-color: chocolate;
  width: 25vw;
  height: 20vh;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  border-radius: 10px;
}
</style>
