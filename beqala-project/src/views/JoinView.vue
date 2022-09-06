<template>
  <div class="signin">
    <h2><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></h2>
    <div class="join grid grid-cols-1 justify-items-center">
      <nav>
        <input type="text" name="text" placeholder="Enter E-mail" />
        <br />
        <button>Sign up</button>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.signin {
  height: 100vh;
  background-color: #1c1a24;
}
h2 {
  position: absolute;
  color: white;
  font-size: 40px;
  top: 30px;
  left: 20px;
}
nav {
  /* border: 1px solid red; */
  width: 100%;
  height: 50%;
  margin: 20%;
  text-align: center;
}
.join {
  /* border: 1px solid red; */
  width: 50%;
  height: 60vh;
  margin-left: 20%;
  border-radius: 20px;
  border: black;
  position: absolute;
  top: 20%;
  background-image: linear-gradient(to top right, #60c68d, #3e7eaf);
  animation-name: example;
  animation-duration: 4s;
}
label {
  /* border: 1px solid red; */
  margin-top: 5%;
  margin-right: 15%;
  font-size: 20px;
}
input {
  width: 30%;
  height: 15%;
  border: 1px solid black;
  border-radius: 10px;
  font-size: 20px;
}
button {
  border-radius: 10px;
  background-color: white;
  width: 20%;
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
</style>
