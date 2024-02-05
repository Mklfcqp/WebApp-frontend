<template>
  <body>
    <TBackground/>

    <div class="login">
      <form @submit.prevent="registerUser" action="" class="login__form">
        <h1 class="login__title">REGISTER</h1>

        <div class="login__content">
          <div class="login__box">
            <Icon icon="tabler:user" class="login__icon" />

            <div class="login__box-input">
              <input
                type="email"
                v-model="email"
                required
                class="login__input"
                id="login-email"
                placeholder=" "
              />
              <label for="login-email" class="login__label">Email</label>
            </div>
          </div>

          <div class="login__box">
            <Icon icon="mdi:password-outline" class="login__icon" />

            <div class="login__box-input">
              <input
                :type="inputTypeIcon"
                v-model="password"
                required
                class="login__input"
                id="login-pass"
                placeholder=" "
              />
              <label for="login-pass" class="login__label">Password</label>
              <Icon
                :icon="inputTypeIcon === 'password' ? 'ri:eye-off-line' : 'gravity-ui:eye'"
                class="login__eye"
                @click="toggleInputIcon"
              />
            </div>
          </div>

          <div class="login__box">
            <Icon icon="mdi:password-outline" class="login__icon" />

            <div class="login__box-input">
              <input
                :type="inputTypeIcon"
                v-model="confirmPassword"
                required
                class="login__input"
                id="repeat-pass"
                placeholder=" "
              />
              <label for="repeat-pass" class="login__label">Confirm Password</label>
              <Icon
                :icon="inputTypeIcon === 'password' ? 'ri:eye-off-line' : 'gravity-ui:eye'"
                class="login__eye"
                @click="toggleInputIcon"
              />
            </div>
          </div>
        </div>

        <button type="submit" class="login__button">REGISTER</button>

        <p class="login__register">Back to the <a href="#" @click="redirectToLogin">Login</a></p>
      </form>

    </div>
  </body>
</template>




<script>
import TBackground from '@/components/TBackground.vue'
import { useRouter } from "vue-router";
import { Icon } from '@iconify/vue';
import db from '../utils/db.js'
import CryptoJS from 'crypto-js';

import axios from "axios";

export default {
  components: { TBackground, Icon },

  data() {
    return {
      inputTypeIcon: "password",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },

  methods: {
    redirectToLogin() {
      this.$router.push("/loginENG");
    },


    toggleInputIcon() {
      this.inputTypeIcon = this.inputTypeIcon === "password" ? "text" : "password";
    },

    registerUser() {
      if (this.password === this.confirmPassword) {
        const hashedPassword = CryptoJS.SHA256(this.password).toString(CryptoJS.enc.Hex);

        const userData = {
          email: this.email,
          password: hashedPassword, 
        };

        console.log("Data to be sent:", userData);

        axios.post("http://localhost:8080/auth/register", userData)
          .then(() => {
            console.log("User registered successfully!");
            this.redirectToLogin();
          })
          .catch((error) => {
            console.error("Error during registration: ", error.response.data);
          });
      } else {
        console.error("Passwords do not match");
      }
    },
}
}

</script>




<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: white;
  font-family: Oswald, 'Courier New', Courier, monospace;
  font-weight: 300;
  letter-spacing: 1px;
}

input,
button {
  border: none;
  outline: none;
}

a {
  text-decoration: none;
}

body {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  overflow: hidden;
  background: #000;
}

/*=============== LOGIN ===============*/
.login {
  position: relative;
  height: 100vh;
  display: grid;
  align-items: center;
  z-index: 1000;
}

.login__form {
  position: relative;
  background-color: hsla(0, 0%, 10%, 0.1);
  background: #353434;
  border: 2px solid white;
  margin-inline: auto;
  width: 400px;
  padding: 2rem 3rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 50px #0ef;
}

.login__title {
  text-align: center;
  margin-bottom: 2rem;
  color: #0ef;
  font-weight: 500;
}

.login__content,
.login__box {
  display: grid;
}

.login__content {
  row-gap: 1.75rem;
  margin-bottom: 1.5rem;
}

.login__box {
  grid-template-columns: max-content 1fr;
  align-items: center;
  column-gap: 0.75rem;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0 10px;
}

.login__icon,
.login__eye {
  font-size: 1.25rem;
}

.login__input {
  width: 100%;
  padding-block: 0.8rem;
  background: none;
  position: relative;
  z-index: 1;
}

.login__box-input {
  position: relative;
}

.login__label {
  position: absolute;
  left: 0;
  top: 13px;
  transition: top 0.3s, font-size 0.3s;
  background-color: #353434;
  padding: 0 5px;
}

.login__eye {
  position: absolute;
  right: 0;
  top: 13px;
  z-index: 10;
  cursor: pointer;
}

.login__box:nth-child(2) input {
  padding-right: 1.8rem;
}

.login__check,
.login__check-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.login__check {
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
}

.login__check-label,
.login__forgot,
.login__register {
  font-size: var(--small-font-size);
}

.login__check-group {
  column-gap: 0.5rem;
}

.login__check-input {
  width: 16px;
  height: 16px;
}

.login__forgot {
  color: white;
}

.login__forgot:hover {
  text-decoration: underline;
}

.login__button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
  color: #0ef;
  transition: 0.5s;
  text-align: center;
  text-decoration: none;
  overflow: hidden;
  letter-spacing: 4px;
  font-size: 20px;
  font-weight: bold;
  background-color: hsla(0, 0%, 10%, 0.1);
}

.login__button:hover {
  background: #0ef;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #0ef, 0 0 25px #0ef, 0 0 50px #0ef, 0 0 100px #0ef;
}

.login__register {
  text-align: center;
  font-size: 0.85rem;
}

.login__register a:hover {
  text-decoration: underline;
}

.login__input:focus + .login__label {
  top: -12px;
}

.login__input:not(:placeholder-shown).login__input:not(:focus) + .login__label {
  top: -12px;
}

@media screen and (max-width: 600px) {
  .login {
    justify-content: center;
  }
  .login__form {
    width: 432px;
    padding: 4rem 3rem 3.5rem;
    border-radius: 1.5rem;
  }
  .login__title {
    font-size: 2rem;
  }
}

@media screen and (max-width: 900px) {
  .login {
    justify-content: center;
  }
  .login__form {
    width: 432px;
    padding: 4rem 3rem 3.5rem;
    border-radius: 1.5rem;
  }
  .login__title {
    font-size: 2rem;
  }
}

</style>