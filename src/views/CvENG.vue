<template>
    <main>
        <TNavbar />
        <TBackground/>
        <section>
            <div class="content">
                <div class="info">
                    <p>Join us for a fantastic <span class="movie-night">movie night</span> filled with popcorn, laughter,
                        and great company! Whether you're a fan of thrilling action, heartwarming dramas, or side-splitting
                        comedies, we've got a film lineup to cater to all tastes. Save the date and bring your favorite
                        snacks to make it a memorable evening.</p>
                    <button class="btn">Join</button>
                </div>


                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="swiper">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                    <swiper-slide>Slide 6</swiper-slide>
                    <swiper-slide>Slide 7</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                </swiper>

            
            </div>
        </section>



        <!--         <div class="wrapper">

            <div class="background">

                <div class="architecture">
                    


                    <div class="content">

                        <div class="content_mid">

                            <div class="mainbox">

                                <div class="about_me">
                                    <div class="about_me_inside">
                                        <div class="about_me_inside_content">
                                            <h1>ABOUT ME</h1>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="middle">
                                    <div class="card1">
                                        <div class="technical_skills">
                                                <div class="title">
                                                    <h1>TECHNICAL SKILLS</h1>
                                                </div>
                                                <div class="text">
                                                    <div class="column1">
                                                        <p>Backend</p>
                                                        <p><Icon icon="skill-icons:java-light" /> Java 17</p>
                                                        <p><Icon icon="skill-icons:spring-dark" /> Spring Boot</p>
                                                        <p><Icon icon="simple-icons:springsecurity" /> Spring Security</p>
                                                        <p><Icon icon="devicon:git" /> GIT / GIT bash</p>
                                                        <p><Icon icon="logos:aws-step-functions" /> Functional programming</p>
                                                        <p><Icon icon="logos:aws-lambda" /> Lambda</p>
                                                        <p><Icon icon="carbon:partition-collection" /> Stream</p>
                                                    </div>
                                                    <div class="column2">
                                                        <p>Testing</p>
                                                        <p><Icon icon="devicon:junit-wordmark" /> Junit</p>
                                                        <p>Assertj</p>
                                                        <p>Mockito</p>
                                                    </div>
                                                    <div class="column3">
                                                        <p>Database</p>
                                                        <p><Icon icon="devicon:mysql-wordmark" /> MySQL</p>
                                                        <p>JDBC</p>
                                                        <p><Icon icon="logos:hibernate" /> Hibernate</p>
                                                    </div>
                                                    <div class="column4">
                                                        <p>Frontend</p>
                                                        <p><Icon icon="skill-icons:html" /> HTML</p>
                                                        <p><Icon icon="skill-icons:css" /> CSS</p>
                                                        <p><Icon icon="openmoji:javascript" /> JavaScript</p>
                                                        <p><Icon icon="logos:vue" /> Vue</p>
                                                    </div>
                                                    <div class="column5">
                                                        <p><Icon icon="vscode-icons:file-type-http" /> HTTP basics</p>
                                                    </div>

                                            </div>
                                        </div>
                                        <div class="work_experiences">
                                            <h1>WORK EXPERIENCES</h1>
                                            <p></p>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="soft_skills">
                                            <h1>SOFT SKILLS</h1>
                                            <p></p>
                                        </div>
                                        <div class="education">
                                            <h1>EDUCATION</h1>
                                            <p>Software Development Academy</p>
                                            <p>Java from Scratch(320 hours)</p>
                                        </div>
                             
                                    </div>
                                </div>


                                <div class="languages">
                                    <div class="languages_inside">

                                        <div class="language">
                                            <Icon icon="flag:cz-4x3" class="language_icon" />
                                            <p>NATIVE</p>
                                        </div>
                                        <div class="language">
                                            <Icon icon="flag:us-4x3" class="language_icon" />
                                            <p>B2</p>
                                        </div>
                                        <div class="language">
                                            <Icon icon="flag:jp-4x3" class="language_icon" />
                                            <p>N4</p>
                                        </div>

                                    </div>
                                </div>

                                <div class="contacts">
                                    <div class="contacts_inside">

                                        <Icon icon="devicon:linkedin" class="linkedin_icon" />
                                        <div class="email">
                                            <Icon icon="clarity:email-line" class="contact_icon" />
                                            <P>Tomas.senti@seznam.cz</P>
                                        </div>
                                        <div class="phone">
                                            <Icon icon="twemoji:mobile-phone-with-arrow" class="contact_icon" />
                                            <P>+420 725 602 631</P>
                                        </div>
                                        <div class="city">
                                            <Icon icon="emojione-v1:cityscape" class="contact_icon" />
                                            <P>Luštěnice</P>
                                        </div>
                                        <Icon icon="devicon:github" class="github_icon" />
                                    </div>

                                </div>


                            </div>



                        </div>
           


                    </div>

            
                </div>
            </div>
        </div> -->
    </main>
</template>






<script>
import TNavbar from '@/components/TNavbar.vue';
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import TBackground from '@/components/TBackground.vue'

  import 'swiper/css';

  import 'swiper/css/effect-cards';

  import '@/assets/swiperStyle.css';

  import { EffectCards } from 'swiper/modules';



export default {
    components: {
        TNavbar,
        Icon,
        Swiper,
        SwiperSlide,
        TBackground,
    },
    data() {
        return {

        };
    },

    setup() {
        return {
            modules: [EffectCards],
        };
    },

    methods: {

    }
}
</script>





<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
}

section {
    height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


.content {
    width: 70rem;
    height: 40rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.28) 0%,
            rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(2px);
    border-radius: 20px;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
    z-index: 10;

}

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    padding: 0 35px;
    text-align: justify;
}

.info p {
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 20px;
    line-height: 1.5;
}


.btn {
    display: block;
    padding: 10px 40px;
    margin: 10px auto;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 4px;
    outline: none;
    text-decoration: none;
    color: #784ba0;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
}

.btn:hover,
.btn:focus,
.btn:active,
.btn:visited {
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    animation: gelatine 0.5s 1;
}

@keyframes gelatine {

    0%,
    100% {
        transform: scale(1, 1);
    }

    25% {
        transform: scale(0.9, 1.1);
    }

    50% {
        transform: scale(1.1, 0.9);
    }

    75% {
        transform: scale(0.95, 1.05);
    }
}

</style>