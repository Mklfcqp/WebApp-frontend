<template>
  <body>
    <div class="login">
        <TBackground/>
        <form action="" class="login__form">
            <h1 class="login__title">RESET PASSWORD</h1>

            <div class="login__content">
                <div class="login__box">

                    <div class="login__box-input">
                        <Icon icon="tabler:user" class="login__icon"/>
                        <input type="email" required class="login__input" id="login-email" placeholder="email" />
                    </div>
                </div>
            </div>

            <button type="submit" class="login__button">RESET</button>

            <p class="login__register">Back to the <a href="#" @click="redirectToLogin">Login</a></p>
        </form>


    </div>
  </body>
</template>




<script>
import TBackground from '@/components/TBackground.vue'
import { useRouter } from "vue-router";
import { Icon } from '@iconify/vue';

export default {
  components: { TBackground, Icon },

  methods: {
    redirectToLogin() {
      const router = useRouter();
      this.$router.push("/loginENG"); 
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
    height: 300px;
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

.login__icon{
    font-size: 1rem;
}

.login__input {
    color: #FF4D4D;
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
    color: #FF4D4D;
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
    background: #FF4D4D;
}

.login__button:hover {
    background: rgba(255, 77, 77, 0.89);
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