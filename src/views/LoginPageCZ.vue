<template>
  <body>
    
    <TBackground/>

    <div class="login">
      
      <form @submit.prevent="loginUser" action="" class="login__form">
        <h1 class="login__title">WELCOME</h1>

        <div class="login__content">
          <div class="login__box">
            <Icon icon="tabler:user" class="login__icon"/>

            <div class="login__box-input">
              <input 
                type="email" 
                v-model="email" 
                required class="login__input" 
                id="login-email" 
                placeholder=" " 
              />
              <label for="login-email" class="login__label">Email</label>
            </div>
          </div>

          <div class="login__box">
            <Icon icon="mdi:password-outline" class="login__icon"/>

            <div class="login__box-input">
              <input
                :type="inputTypeIcon"
                v-model="password"
                required
                class="login__input"
                id="repeat-pass"
                placeholder=" "
              />
              <label for="repeat-pass" class="login__label">Password</label>
              <Icon :icon="inputTypeIcon === 'password' ? 'ri:eye-off-line' : 'gravity-ui:eye'" class="login__eye" @click="toggleInputIcon"/>
            </div>
          </div>
        </div>

        <div class="login__check">
          <div class="login__check-group">
            <input type="checkbox" class="login__check-input" id="login-check" />
            <label for="login-check" class="login__check-label">Remember me</label>
          </div>

          <a href="#" class="login__forgot" @click="redirectToResetPassword">Forgot Password?</a>
        </div>

        <button type="submit" class="login__button">LOGIN</button>

        <p class="login__register">Don't have an account? <a href="#" @click="redirectToRegister">Register</a></p>
      </form>
      

    </div>
  </body>
</template>




<script>
import TBackground from '@/components/TBackground.vue'
import { useRouter } from "vue-router";
import { Icon } from '@iconify/vue';
import axios from "axios";
import CryptoJS from 'crypto-js';
import db from '../utils/db.js'

export default {
  components: { TBackground, Icon },

  data() {
    return {
      inputTypeIcon: "password",
      email: "",
      password: ""
    };
  },

  methods: {
    redirectToRegister() {
      this.$router.push("/registerENG"); 
    },

    redirectToResetPassword() {
      this.$router.push("/resetPasswordENG"); 
    },

    toggleInputIcon() {
      this.inputTypeIcon = this.inputTypeIcon === "password" ? "text" : "password";
    },

    redirectToWatchlist() {
      this.$router.push("/watchlistENG"); 
    },

    loginUser() {
      const userData = {
        email: this.email,
        password: CryptoJS.SHA256(this.password).toString(CryptoJS.enc.Hex),
      };

      axios.post("https://webapp-backend-production.up.railway.app/auth/login", userData)
        .then((response) => {
          console.log("User logged in successfully:", response.data);

          const {access_token, refresh_token} = response.data;
          localStorage.setItem('accessToken', access_token);
          localStorage.setItem('refreshToken', refresh_token);

          this.redirectToWatchlist();
        }).catch((error) => {
          console.error("Login failed:", error.response.data);
        });
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
  color: #03e9f4;
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
  transition: top 0.3s;
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
  color: #03e9f4;
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
  background: #03e9f4;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
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
  .background .boxes {
    width: calc(20vw - 2px);
    height: calc(20vw - 2px);
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
  .background .boxes {
    width: calc(10vw - 2px);
    height: calc(10vw - 2px);
  }
}

.language-buttons {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.language-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.language-icon {
  width: 35px; 
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  border: 0.5px solid#000000;
  box-shadow: 0 0 10px #0ef;  
}

</style>