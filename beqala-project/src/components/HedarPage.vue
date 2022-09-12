<template>
  <div id="app">
    <div class="parent">
      <div class="nav">
        <span>
          <router-link to="/" class="text-3xl">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span
        >
        <div class="main">
          <input
            type="text"
            name="input"
            id="one"
            placeholder="What? (E.g :Restaurante)"
          />
          <input
            type="text"
            name="input"
            id="two"
            placeholder="Where? (E.g :AlGalaa Street)"
          />
        </div>
        <ul>
          <router-link to="/LogIn" class="log text-2xl">LogIn</router-link>
        </ul>
      </div>

      <div class="option">
        <ul class="text-2xl">
          <li><router-link to="/resturant">𝑹𝑬𝑺𝑻𝑼𝑹𝑨𝑵𝑻</router-link> |</li>
          <li><router-link to="/about">𝑴𝑬𝑫𝑰𝑪𝑨𝑳 𝑪𝑳𝑰𝑵𝑰𝑪𝑺</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.parent {
  /* background-color: #ffcd00; */
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
}

.nav {
  display: flex;
  justify-content: space-around;
  /* margin-top: 30px; */
  font-size: 20px;
}
.nav ul {
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}
.nav span {
  margin-top: 20px;
}
.nav li {
  padding-left: 200px;
  list-style-type: none;
}
.mad {
  margin-top: 50px;
  text-align: center;
}
.main {
  text-align: center;
  margin-top: 20px;
}
.main input {
  margin: 4px;
  width: 500px;
  height: 40px;
  border: white;
  background-color: #eee;
  transition: width 2s;
}
.option {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
}
.option ul {
  display: flex;
  flex-direction: row;
  font-size: 20px;
}

.option li {
  padding-left: 20px;
  list-style-type: none;
  font-size: 20px;
  font-weight: bold;
}
ul {
  color: white;
}
span {
  color: white;
}
</style>
