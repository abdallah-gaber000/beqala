<template>
  <div id="app">
    <div class="parent">
      <div class="nav">
        <span><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span>
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
          <router-link to="/LogIn" class="log">LogIn</router-link>
        </ul>
      </div>

      <div class="option">
        <ul>
          <li>Restaurante</li>
          <li>Medical Clinics</li>
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
  background-color: #ffcd00;
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
}

.option li {
  padding-left: 20px;
  list-style-type: none;
  font-size: 20px;
  font-weight: bold;
}
</style>
