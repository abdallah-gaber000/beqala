<template>
  <div class="container1">
    <span class="loggo"><router-link to="/">𝑩𝑬𝑸𝑨𝑳𝑨.𝑪𝑶</router-link></span>
    <div class="screen">
      <div class="screen_content">
        <form action="" class="login">
          <div class="login_field">
            <input
              type="email"
              class="login_input"
              placeholder=" Enter E-mail"
            />
          </div>
          <div class="login_field">
            <input type="password" class="login_input" placeholder="Password" />
          </div>
          <button class="button login_submit">
            <span class="button_text">Sign up</span>
          </button>
        </form>
      </div>
      <div class="screen_background">
        <span class="screen_background_shape screen_background_shape4"></span>
        <span class="screen_background_shape screen_background_shape3"></span>
        <span class="screen_background_shape screen_background_shape2"></span>
        <span class="screen_background_shape screen_background_shape1"></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}
body {
  background: linear-gradient(90deg, #c7c5f4, #776bcc);
}
.container1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-left: 35%;
  background-image: url(../assets/photo-1553095066-5014bc7b7f2d.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  animation: transitionin 2s;
  overflow: hidden;
}
.loggo {
  position: absolute;
  font-size: 50px;
  left: 20px;
  top: 10px;
  color: white;
}
.screen {
  background: linear-gradient(90deg, #5d54a4, #7c78b8);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0 0 24px #5c5696;
  margin-right: 35vw;
}
.screen_content {
  z-index: 1;
  position: relative;
  height: 100%;
}
.screen_background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  clip-path: inset(0 0 0 0);
}
.screen_background_shape {
  transform: rotate(45deg);
  position: absolute;
}
.screen_background_shape1 {
  height: 520px;
  width: 520px;
  background-color: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}
.screen_background_shape2 {
  height: 220px;
  width: 220px;
  background: #6c63ac;
  top: -172px;
  right: 0;
  border-radius: 32px;
}
.screen_background_shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #5d54a4, #6a679e);
  top: -24px;
  right: 0;
  border-radius: 32px;
}
.screen_background_shape4 {
  height: 400px;
  width: 200px;
  background: #7e7bb9;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}
.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
  animation: ww 4s;
}
.login_field {
  padding: 20px 0;
  position: relative;
}
.login_input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}
.login_input:active,
.login_input:focus,
.login_input:hover {
  outline: none;
  border-bottom-color: #6a679e;
}
.login_submit {
  background-color: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.5s;
}
.login_submit:active {
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #4c489d;
  box-shadow: 0 2px 2px #5c5696;
  cursor: pointer;
  transition: 0.5s;
}
.login_submit:active,
.login_submit:focus,
.login_submit:hover {
  border-color: #6a679e;
  outline: none;
}
@keyframes transitionin {
  from {
    opacity: 0;
    transform: perspective(0);
  }

  to {
    opacity: 1;
    transform: perspective(20);
  }
}
@keyframes ww {
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
