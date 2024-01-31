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
                    <p>I am driven to contribute to dynamic development projects leveraging my collaborative mindset and
                        technical skills
                        to create innovative solutions.
                    </p>
                    <br>
                    <p>My enthusiasm for continuous studying and dedication honing my development capabilities makes me
                        an idealt candidate for a Junior Java Developer position.
                    </p>

                </div>

                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="swiper">
                    <swiper-slide class="card1">
                        <p>dfsfsdgsdfgsdfgsdfgsdfgssadfdgadgadfgdfgsdfgsdfgsdf</p>
                    </swiper-slide>
                    <swiper-slide class="card1">
                        <div class="title_card">Technical Skills</div>
                    </swiper-slide>
                    <swiper-slide class="card2">
                        <div class="title_card">Soft Skills</div>
                    </swiper-slide>
                    <swiper-slide class="card3">
                        <div class="title_card">Education</div>
                    </swiper-slide>
                    <swiper-slide class="card4">
                        <div class="title_card">Work Experiences</div>
                    </swiper-slide>
                    <swiper-slide class="card5">
                        <div class="title_card">Languages</div>
                    </swiper-slide>
                    <swiper-slide class="card6">
                        <div class="title_card">Contacts</div>
                        <div class="contacts">
                            <div class="linkedin" type="button" @click="redirectToLinkedin">
                                <Icon icon="cib:linkedin" class="linkedin_icon" />
                            </div>
                            <div class="email" type="button" @click="copyToClipboard('tomas.senti@seznam.cz')">
                                <Icon icon="clarity:email-line" class="contact_icon" />
                                <P>tomas.senti@seznam.cz</P>
                            </div>
                            <div class="phone" type="button" @click="copyToClipboard('+420 725 602 631')">
                                <Icon icon="ph:device-mobile" class="contact_icon" />
                                <P>+420 725 602 631</P>
                            </div>
                            <div class="city" type="button" @click="copyToClipboard('Luštěnice')">
                                <Icon icon="icon-park-outline:city" class="contact_icon" />
                                <P>Luštěnice</P>
                            </div>
                            <div class="github" type="button" @click="redirectToGihub">
                                <Icon icon="bi:github" class="github_icon" />
                            </div>
                        </div>
                    </swiper-slide>
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
        redirectToGihub() {
            const githubUrl = 'https://github.com/Mklfcqp';
            window.open(githubUrl, '_blank');
        },

        redirectToLinkedin() {
            const githubUrl = 'https://www.linkedin.com/in/tom%C3%A1%C5%A1-pitron-814148270/';
            window.open(githubUrl, '_blank');
        },

        copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            alert('The text has been copied to the clipboard.');
        },

    },
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
    border: 1px solid rgba(177, 177, 177, 0.4);
}

.swiper-slide:hover {
    border: 1px solid white;

}

.swiper-slide::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(226deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 35%, rgba(255, 255, 255, 0.2) 42%, rgba(255, 255, 255, 0) 60%);
}




.card1 {
    background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);

}

.card2 {
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
}


.card3 {
    background-image: linear-gradient(to right top, #a8668c, #a06e99, #9677a3, #8c7fa9, #8486ad, #7f8db0, #7c94b1, #7c9ab1, #80a2b2, #87a9b2, #91afb2, #9db5b3);
}

.card4 {
    background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);
}

.card5 {
    background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);
}

.card6 {
    background-color: #3C3C3C
}


.title_card {
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%, -20%);
    -ms-transform: translate(-50%, -20%);
    width: max-content;
    text-align: center;
    padding: 10px 18px;
    background: rgba(46, 39, 39, 0.3);
    border-radius: 8px;
    border: 2px solid rgb(177, 177, 177, 0.4);
    box-shadow: 0 4px 30px rgb(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.5s linear;
    font-weight: 600;
}




.contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}



.linkedin,
.email,
.phone,
.city,
.github {
    height: 3.5rem;
    width: 14rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #FFF;
    transition: all 0.5s;
    position: relative;
    font-size: 2rem;
    color: #5D9FFF;
}

.linkedin::before,
.email::before,
.phone::before,
.city::before,
.github::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    border-radius: 10px;
}

.linkedin:hover::before,
.email:hover::before,
.phone:hover::before,
.city:hover::before,
.github:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
}

.linkedin::after,
.email::after,
.phone::after,
.city::after,
.github::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    transform: scale(1.2, 1.2);
    border-radius: 10px;

}

.linkedin:hover,
.email:hover,
.phone:hover,
.city:hover,
.github:hover {
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    background: #5d9eff83;
}

.linkedin:hover::after,
.email:hover::after,
.phone:hover::after,
.city:hover::after,
.github:hover::after {
    opacity: 1;
    transform: scale(1, 1);
}

.email p,
.phone p,
.city p {
    display: none;
}

.email:hover .contact_icon,
.phone:hover .contact_icon,
.city:hover .contact_icon {
    display: none;
}

.email:hover p,
.phone:hover p,
.city:hover p {
    display: block;
    font-size: 0.9rem;
    font-weight: 800;
    color: white;
}
</style>