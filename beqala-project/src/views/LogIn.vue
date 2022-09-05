<template>
  <div class="login grid grid-cols-1 justify-items-center">
    <nav>
      <label>Enter E-mail</label>
      <br />
      <input type="text" name="text" placeholder="Enter E-mail" />
      <br />
      <label>Enter Password</label>
      <br />
      <input type="Password" name="text" placeholder="Enter Password" />
      <br />
      <button>LogIn</button>
    </nav>
  </div>
</template>
<style scoped>
nav {
  /* border: 1px solid red; */
  width: 100%;
  height: 50%;
  margin: 20%;
  text-align: center;
}
.login {
  width: 50%;
  height: 60vh;
  margin: 10%;
  margin-left: 20%;
  border-radius: 20px;
  border: black;
  background-image: linear-gradient(to top right, #60c68d, #3e7eaf);
}
label {
  /* border: 1px solid red; */
  margin-top: 5%;
  margin-right: 20%;
  font-size: 20px;
}
input {
  width: 40%;
  height: 15%;
  border: 1px solid black;
  font-size: 20px;
}
button {
  border-radius: 10px;
  background-color: white;
  width: 100px;
  height: 30px;
  margin-top: 3%;
}
</style>
