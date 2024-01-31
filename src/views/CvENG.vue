<template>
    <main>
        <TNavbar />
        <TBackground />
        <section>
            <div class="content">
                <div class="info">
                    
                    <div class="title">ABOUT ME</div>

                    <p>I am team player with the ability to work alone, which have experiences 
                        working on web application development as business partner and also with leading small project.
                    </p>
                    <br>
                    <p>I am currently seeking a role as a Junior java Developer.</p>
                    <br>
                    <p>I am driven to contribute to dynamic development projects leveraging my collaborative mindset and technical skills
                        to create innovative solutions.
                    </p>
                    <br>
                    <p>My enthusiasm for continuous studying and dedication honing my development capabilities makes me 
                        an idealt candidate for a Junior Java Developer position.
                    </p>

                </div>

                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="swiper">
                    <swiper-slide>
                        <p>dfsfsdgsdfgsdfgsdfgsdfgssadfdgadgadfgdfgsdfgsdfgsdf</p>
                    </swiper-slide>
                    <swiper-slide>Technical Skills</swiper-slide>
                    <swiper-slide>Soft Skills</swiper-slide>
                    <swiper-slide>Education</swiper-slide>
                    <swiper-slide>Work Experiences</swiper-slide>
                    <swiper-slide>Languages</swiper-slide>
                    <swiper-slide>Contacts</swiper-slide>
                    <swiper-slide>Slide 8</swiper-slide>
                    <swiper-slide>Slide 9</swiper-slide>
                </swiper>



            </div>
        </section>



        <!--   
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
                            > -->
    </main>
</template>






<script>
import TNavbar from '@/components/TNavbar.vue';
import { Icon } from '@iconify/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import TBackground from '@/components/TBackground.vue'

import 'swiper/css';

import 'swiper/css/effect-cards';

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
    justify-content: center;
    align-items: center;
    gap: 100px;
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
    width: 30rem;
    height: 30rem;
    text-align: justify;
}

.info p {
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
}



.swiper {
  width: 280px;
  height: 420px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 18px;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}



</style>