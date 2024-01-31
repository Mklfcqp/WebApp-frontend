<template>
    <main>
        <TBackground />
        <TNavbar />
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

                        <div class="title_card">Technical Skills</div>

                        <div class="box">
                            <div class="row">
                                <div class="row_box">
                                    <Icon icon="fluent-mdl2:java-logo" class="row_box_icon"/>
                                    <p>Java 17</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="cib:spring" class="row_box_icon"/>
                                    <p>Spring Boot</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="simple-icons:springsecurity" class="row_box_icon"/>
                                    <p>Spring Security</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="cib:git" class="row_box_icon"/>
                                    <p>GIT / GIT bash</p>
                                </div>
                                <div class="row_box">

                                </div>
                            </div>
                            <div class="row">
                                <div class="row_box">
                                    <Icon icon="simple-icons:junit5" class="row_box_icon"/> 
                                    <p>Junit</p>
                                </div>
                                <div class="row_box">
                                    <p>Assertj</p>
                                </div>
                                <div class="row_box">
                                    <p>Mockito</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="carbon:http" class="row_box_icon"/>
                                    <p>HTTP basics</p>
                                </div>
                                <div class="row_box">

                                </div>
                            </div>
                            <div class="row">
                                <div class="row_box">
                                    <Icon icon="simple-icons:hibernate" class="row_box_icon"/>
                                    <p>Hibernate</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="tabler:brand-mysql" class="row_box_icon"/>
                                    <p>MySQL</p>
                                </div>
                                <div class="row_box">
                                    <p>JDBC</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="akar-icons:postgresql-fill" class="row_box_icon"/>
                                    <p>PostgreSQL</p>
                                </div>
                                <div class="row_box">

                                </div>
                            </div>
                            <div class="row">
                                <div class="row_box">
                                    <Icon icon="akar-icons:html-fill" class="row_box_icon"/>
                                    <p>HTML</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="akar-icons:css-fill" class="row_box_icon"/>
                                    <p>CSS</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="simple-icons:javascript" class="row_box_icon"/>
                                    <p>JavaScript</p>
                                </div>
                                <div class="row_box">
                                    <Icon icon="teenyicons:vue-solid" class="row_box_icon"/>
                                    <p>Vue</p>
                                </div>
                                <div class="row_box">

                                </div>
                            </div>
                        </div>


                        <!-- 


          <Icon icon="logos:aws-lambda" /> Lambda
                        </p>
                        <p>
                            <Icon icon="carbon:partition-collection" /> Stream
                        </p>

                            <Icon icon="logos:aws-step-functions" /> 
                        <p>Functional programming</p>



                        </div> -->
                    </swiper-slide>


                    <swiper-slide class="card2">
                        <div class="title_card">Soft Skills</div>
                        <p>Collaboration within a team on the development of an aplication for creating EDI data in the role
                            of providing input for developers.</p>
                        <br>
                        <p>Leading the migration of suppliers for ŠKODA auto from one EDI webapp to another.</p>
                        <br>
                        <p>Abilyty and enthusiasm for self-learning and personal development.</p>
                    </swiper-slide>


                    <swiper-slide class="card3">
                        <div class="title_card">Education</div>
                        <p>Software Development Academy</p>
                        <p>Java from Scratch (327 hours) 04 2023 - 02 2024</p>
                    </swiper-slide>


                    <swiper-slide class="card4">
                        <div class="title_card">Work Experiences</div>
                        <p>Since xx I have been working as and EDI specialist at the company Impromat Engineering, providing
                            EDI services for ŠKODA auto.</p>
                        <p>If you would like know more information, feel free to request it.</p>
                    </swiper-slide>


                    <swiper-slide class="card5">
                        <div class="title_card">Languages</div>
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
    top: 0;
    left: 0;
}


.content {
    width: 100rem;
    height: 50rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.25) 0%,
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
    width: 600px;
    height: 520px;
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
    color: #3C3C3C;
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

.box {
    width: 30rem;
    height: 24rem;
    display: flex;
    flex-direction: column;
}

.row {
    width: 30rem;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.row_box {
    position: relative;
    border: 1px solid #3C3C3C;
    border-radius: 10px;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
}


.row_box_icon {
    color: #3C3C3C;
    font-size: 2rem;
}

.row_box::before {
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

.row_box:hover {
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    background: #3C3C3C;
    display: block;
    font-size: 0.9rem;
    font-weight: 800;
}



.row_box p {
    display: none;
}

.row_box:hover .row_box_icon {
    display: none;
}

.row_box:hover p {
    color: white;
}
















/** CONTACT CARD */

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