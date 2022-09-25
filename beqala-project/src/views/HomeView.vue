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
    <div class="hedar bg-cover bg-no-repeat">
      <nav class="animation text-center">
        <span class="text">𝑳𝑰𝑽𝑬. 𝑺𝑯𝑶𝑷. 𝑻𝑨𝑺𝑻𝑬.𝑫𝑰𝑺𝑪𝑶𝑽𝑬𝑹.</span>
        <nav class="m-auto input justify-items-center items-center">
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
            require
          />
          <button @click="viewPage" type="submit" class="sarch">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </nav>
        <nav class="router">
          <router-link to="/resturant">Resturant</router-link> |
          <router-link to="/about">Medical Clinics</router-link>
          <router-view />
        </nav>
      </nav>
      <nav class="img h-36">
        <img
          src="https://static.yellowpages.ca/ypca/ypui-6.69.0.0-20220823.0703/resources/images/homeBanner/ypca_cover_desktop.svg"
        />
      </nav>
    </div>
    <br />
    <div class="grid grid-cols-3 gap-14 justify-items-center items-center main">
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
    <div class="grid grid-cols-3 gap-14 justify-items-center items-center asid">
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
    <div class="footer grid grid-cols-2 justify-items-center items-center">
      <span class="footer1 relative">𝑳𝑰𝑽𝑬. 𝑺𝑯𝑶𝑷. 𝑻𝑨𝑺𝑻𝑬.𝑫𝑰𝑺𝑪𝑶𝑽𝑬𝑹.</span>
      <p class="text-xl text-left text-white w-72">
        Looking for goods, services, dirgridections or even deals? Find italland
        more on the YP app
      </p>
      <div class="grid grid-cols-4 justify-items-center items-center ficon">
        <button>
          <i class="fa-solid fa-square-envelope" style="color: white"></i>
        </button>
        <button>
          <i class="fa-brands fa-facebook" style="color: white"></i>
        </button>
        <button>
          <i class="fa-brands fa-square-instagram" style="color: white"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter" style="color: white"></i>
        </button>
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
  height: 100%;
}
.hedar {
  width: 100vw;
  height: 60vh;
  border-radius: 1px solid black;
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
  /* margin: auto; */
  /* position: relative; */
  /* left: 50px; */
  /* z-index: -1; */
}
.navbar {
  width: 100vw;
  height: 80px;
  border-bottom: 3px solid #20272b;
  width: 100vw;
}
.sticy {
  width: 100vw;
  position: sticky;
  top: 0;
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}
span {
  font-size: 30px;
  color: white;
}
.ul {
  width: 75%;
  float: right;
  /* font-size: 80px; */
  color: white;
}
li {
  /* border: 1px solid black; */
  width: 60%;
  text-align: center;
  border-radius: 5px;
  /* background-color: white; */
  color: white;
  height: 90%;
}
.text {
  /* border: 1px solid white; */
  /* position: relative; */
  left: 20%;
  top: 10px;
}
.input {
  height: 50%;
  /* position: relative;
  left: 30px; */
  width: 100%;
  font-size: 25px;
  text-align: center;
  /* border: 1px solid red; */
}
.router {
  width: 55%;
  /* position: relative;
  left: 25%; */
  margin: auto;
  font-size: 30px;
  color: white;
}
.what {
  border: 1px solid;
  /* margin-left: 50%;
  width: 100%; */
}
.where {
  border: 1px solid;
  /* margin-left: 50%; */
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
  /* background-color: white; */
  width: 5%;
  color: black;
  border-radius: 1px solid black;
  height: 95%;
  margin-top: 1px;
  /* width: 50%; */
}
.sarch {
  background-color: white;
  height: 100%;
  width: 3%;
  /* margin-left: 100%; */
}
.img {
  /* position: relative;
  top: 20%; */
  padding: 5% 0;
  background-size: cover;
  font-size: 90px;
}
.animation {
  /* margin-left: auto;
  margin-right: auto; */
  /* position: relative;
  left: 30px;
  top: 30px; */
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
.main {
  width: 100vw;
  background-color: #f3f3f3;
  animation-name: main;
  animation-duration: 2s;
}
.web {
  border: 1px solid white;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 10px #20272b;
  height: 50vh;
}
.restaurant {
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  height: 50vh;
}
.clinic {
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  height: 50vh;
}
.main h1 {
  font-size: 20px;
}
.main i {
  font-size: 60px;
}
.asidh1 {
  margin-left: 40%;
  margin-top: 60px;
}
.asid {
  /* border: 1px solid black; */
  background-color: #f3f3f3;
  width: 100vw;
}
.asid1 {
  border: 1px solid black;
  /* background-color: chocolate; */
  width: 25vw;
  height: 20vh;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  border-radius: 10px;
}
.asid2 {
  border: 1px solid black;
  /* background-color: chocolate; */
  width: 25vw;
  height: 20vh;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  border-radius: 10px;
}
.asid3 {
  /* border: 1px solid black; */
  /* background-color: chocolate; */
  width: 25vw;
  height: 20vh;
  box-shadow: 2px 2px 10px #20272b;
  background-color: white;
  border-radius: 10px;
}
.footer {
  /* border: 1px solid red; */
  height: 25vh;
  width: 100vw;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  top: 15px;
}
/* .footer span {
  position: relative;
  top: 40px;
} */
.ficon {
  position: relative;
  left: 55%;
  /* border: 1px solid white; */
  width: 50%;
  font-size: 35px;
  /* padding: 20px; */
  color: white;
}
</style>
