<template>
  <body>


    <div class="login">
        <TBackground/>
        <form @submit.prevent="registerUser" action="" class="login__form">
            <h1 class="login__title">REGISTER</h1>

            <div class="login__content">
                <div class="login__box">

                    <div class="login__box-input">
                        <Icon icon="tabler:user" class="login__icon" />
                        <input
                                type="email"
                                v-model="email"
                                required
                                class="login__input"
                                id="login-email"
                                placeholder="email"
                        />
                    </div>
                </div>

                <div class="login__box">

                    <div class="login__box-input">
                        <Icon icon="mdi:password-outline" class="login__icon" />
                        <input
                                :type="inputTypeIcon"
                                v-model="password"
                                required
                                class="login__input"
                                id="login-pass"
                                placeholder="password"
                        />
                        <Icon
                                :icon="inputTypeIcon === 'password' ? 'ri:eye-off-line' : 'gravity-ui:eye'"
                                class="login__eye"
                                @click="toggleInputIcon"
                        />
                    </div>
                </div>

                <div class="login__box">

                    <div class="login__box-input">
                        <Icon icon="mdi:password-outline" class="login__icon" />
                        <input
                                :type="inputTypeIcon"
                                v-model="confirmPassword"
                                required
                                class="login__input"
                                id="repeat-pass"
                                placeholder="confirm Password"
                        />
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

        axios.post("https://webapp-backend-production.up.railway.app/auth/register", userData)
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
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap')

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


input,
button {
    border: none;
    outline: none;
}

a {
    text-decoration: none;
}


/*=============== LOGIN ===============*/
.login {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100%;
    overflow: hidden;
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

.login__input {
    color: #3CB652;
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
    color: #3CB652;
}


.login__eye {
    position: absolute;
    left: 290px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
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
    background: #3CB652;
}

.login__button:hover {
    background: rgba(60, 182, 82, 0.85);
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


@media screen and (max-width: 676px) {
    .login {

    }
    .login__form {
        width: 300px;


    }
    .login__title {

    }
}

@media screen and (min-width: 768px)
and (max-width: 1023px) {
    .login {

    }
    .login__form {



    }
    .login__title {

    }

}


@media screen and (min-width: 1024px) {
    .login {

    }
    .login__form {

    }
    .login__title {

    }

}

</style>