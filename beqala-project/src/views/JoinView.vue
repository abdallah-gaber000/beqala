<template>
  <div class="join grid grid-cols-1 justify-items-center">
    <nav>
      <label>Enter E-mail</label>
      <br />
      <input type="text" name="text" placeholder="Enter E-mail" />
      <br />
      <button>Sign up</button>
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
.join {
  /* border: 1px solid red; */
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
  margin-right: 15%;
  font-size: 20px;
}
input {
  width: 30%;
  height: 15%;
  border: 1px solid black;
  font-size: 20px;
}
button {
  border-radius: 10px;
  background-color: white;
  width: 20%;
  height: 30px;
  margin-top: 3%;
}
</style>
