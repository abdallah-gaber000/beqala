<template>
  <div class="Log flex items-center justify-center">
    <h2><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></h2>
    <br />
    <div class="login grid grid-cols-1 justify-items-center">
      <nav>
        <br />
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter E-mail"
            required
          />
          <br />
          <br />
          <input
            type="Password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <br />
          <button>LogIn</button>
        </form>
        <br />
        <router-link to="/Join" class="Join">Join</router-link>
      </nav>
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h2 {
  position: absolute;
  color: white;
  color: #1c1a24;
  font-size: 40px;
  top: 70px;
  left: 20px;
}
.Log {
  height: 100vh;
  /* background-color: #1c1a24; */
  /* background-color: whh; */
}
nav {
  width: 100%;
  height: 50%;
  margin: 20%;
  text-align: center;
}
.login {
  width: 50%;
  height: 60vh;
  border-radius: 20px;
  border: black;
  /* background-image: linear-gradient(to top right, #60c68d, #3e7eaf); */
  background-color: #2162a3;
  background-color: darkturquoise;
  animation-name: example;
  animation-duration: 2s;
}
input {
  width: 40%;
  height: 15%;
  border: 1px solid black;
  font-size: 20px;
  border-radius: 10px;
}
button {
  border-radius: 10px;
  background-color: white;
  width: 100px;
  height: 30px;
  margin-top: 3%;
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
.Join {
  font-size: 25px;
  list-style: none;
}
</style>
