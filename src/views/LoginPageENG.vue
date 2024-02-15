<template>
  <body>
    
    <TBackground/>

    <div class="login">

        <form @submit.prevent="loginUser" action="" class="login__form">
            <h1 class="login__title">LOGIN</h1>

            <div class="login__content">
                <div class="login__box">


                    <div class="login__box-input">
                        <Icon icon="tabler:user" class="login__icon"/>
                        <input
                                type="email"
                                v-model="email"
                                required class="login__input"
                                id="login-email"
                                placeholder="email"
                        />
                    </div>
                </div>

                <div class="login__box">

                    <div class="login__box-input">
                        <Icon icon="mdi:password-outline" class="login__icon"/>
                        <input
                                :type="inputTypeIcon"
                                v-model="password"
                                required
                                class="login__input"
                                id="repeat-pass"
                                placeholder="password"
                        />
                        <Icon :icon="inputTypeIcon === 'password' ? 'ri:eye-off-line' : 'gravity-ui:eye'" class="login__eye" @click="toggleInputIcon"/>
                    </div>
                </div>
            </div>

            <div class="login__check">

                <a href="#" class="login__forgot" @click="redirectToResetPassword">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button" @click="loginUser">LOGIN</button>

            <p class="login__register">Don't have an account?<a href="#" @click="redirectToRegister"> Register</a></p>
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

    redirectToMenu() {
      this.$router.push("/menuENG"); 
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

          this.redirectToMenu();
        }).catch((error) => {
          console.error("Login failed:", error.response.data);
        });
      },
  }
}
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: white;
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
    background: #222327;
    margin-inline: auto;
    width: 330px;
    height: 400px;
    padding: 20px 20px 20px;
    border-radius: 8px;
    font-family: 'Lato', 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 50px 0 black;
}

.login__title {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    color: #D4D4D8;
    font-weight: 500;
}

.login__box {
    display: flex;
    justify-content: center;
}

.login__content {
    row-gap: 10px;
    margin-bottom: 1rem;
}

.login__icon,
.login__eye {
    font-size: 1rem;
}

.login__eye {
    position: absolute;
    left: 290px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
}

.login__input {
    color: #2E829B;
    padding-left: 10px;
    height: 2rem;
    width: 18rem;
    background: none;
}

.login__box-input {
    position: relative;
    border: 1px solid hsl(240 5% 27.6%);
    padding-left: 10px;
    height: 2rem;
    width: 19rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    z-index: 1000;
    background: #27272A;
    margin: 5px;
    border-radius: 5px;
    color: #2E829B;
}



.login__check {
    width: 19rem;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
}


.login__forgot {
    color: #C0C0C0;
    font-size: 0.75rem;
}

.login__forgot:hover {
    color: #60a5fa;
}

.login__button {
    width: 20rem;
    height: 2.2rem;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 2rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    background: #2E829B;
}

.login__button:hover {
    background: rgba(46, 130, 155, 0.75);
}

.login__register,
.login__register a {
    text-align: center;
    color: #C0C0C0;
    font-size: 0.75rem;
}

.login__register a:hover {
    color: #60a5fa;
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