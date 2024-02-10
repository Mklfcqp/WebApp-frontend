<template>
    <main>
        <TBackground />
        <TNavbar />
        <section>
            <div class="content">
                
                <TCVInfo />

                <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="swiper">


                    <swiper-slide class="card1">

                        <Icon :icon="isTextVisible ? 'gravity-ui:eye' : 'ri:eye-off-line'" class="view"
                            @click="toggleTextVisibility" />

                        <div class="title_card">Technical Skills</div>

                        <div class="box">
                            <div class="row">
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="fluent-mdl2:java-logo" class="row_box_icon" />
                                    </div>
                                    <p>JAVA 17</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="cib:spring" class="row_box_icon" />
                                    </div>
                                    <p>SPRING BOOT</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="simple-icons:springsecurity" class="row_box_icon" />
                                    </div>
                                    <p>SPRING</p>
                                    <p>SECURITY</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="cib:git" class="row_box_icon" />
                                    </div>
                                    <p>GIT</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="carbon:partition-collection" class="row_box_icon" />
                                    </div>
                                    <p>STREAM API</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="simple-icons:junit5" class="row_box_icon" />
                                    </div>
                                    <p>JUNIT</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <div class="box_without_icon">ASSERTJ</div>
                                    </div>
                                    <p>ASSERTJ</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="material-symbols:function" class="row_box_icon" />
                                    </div>
                                    <p>FUNCTIONAL</p>
                                    <p>PROGRAMMING</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <div class="box_without_icon">HTTP</div>
                                    </div>
                                    <p>HTTP</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <div class="box_without_icon">MOCKITO</div>
                                    </div>
                                    <p>MOCKITO</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="simple-icons:hibernate" class="row_box_icon" />
                                    </div>
                                    <p>HIBERNATE</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="tabler:brand-mysql" class="row_box_icon" />
                                    </div>
                                    <p>MySQL</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <div class="box_without_icon">JDBC</div>
                                    </div>
                                    <p>JDBC</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="akar-icons:postgresql-fill" class="row_box_icon" />
                                    </div>
                                    <p>POSTGRE</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="simple-icons:awslambda" class="row_box_icon" />
                                    </div>
                                    <p>LAMBDA</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="akar-icons:html-fill" class="row_box_icon" />
                                    </div>
                                    <p>HTML</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="akar-icons:css-fill" class="row_box_icon" />
                                    </div>
                                    <p>CSS</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="simple-icons:javascript" class="row_box_icon" />
                                    </div>
                                    <p>JAVASCRIPT</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <Icon icon="teenyicons:vue-solid" class="row_box_icon" />
                                    </div>
                                    <p>VUE</p>
                                </div>
                                <div class="row_box_inside">
                                    <div class="row_box">
                                        <div class="box_without_icon"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </swiper-slide>


                    <swiper-slide class="card2">
                        <div class="title_card">Soft Skills</div>

                        <div class="mainbox">

                            <div class="outside_box1">
                                <p><span class="fjala">Collaboration</span> within a team on the development of an
                                    aplication for creating EDI data in the role
                                    of providing input for developers.</p>
                            </div>
                            <div class="outside_box2">
                                <div class="inside_box1">
                                    <p><span class="fjala">Leading</span> the migration of suppliers for ŠKODA auto from one
                                        EDI webapp to another.</p>
                                </div>
                                <div class="inside_box2">
                                    <p>Ability and enthusiasm for <span class="fjala">self-learning</span> and personal
                                        development.</p>
                                </div>
                            </div>

                        </div>

                    </swiper-slide>

                    <swiper-slide class="card3">

                        <div class="title_card">Education / Work Experiences</div>

                        <div class="card">

                            <div class="box1">

                                <div class="box1_text1">
                                    <p>Since 1.10. 2020 I have been working as</p>
                                    <p><span class="fjala_edu_box1">EDI specialist </span>at the company</p>
                                    <p> <span class="company">Impromat Engineering</span>, providing EDI services</p>
                                    <p>for<span class="company"> ŠKODA Auto.</span></p>
                                </div>

                                <div class="box1_text2">
                                    <span class="box1_text2_info">If you would like to know more information feel free to
                                        contact me.</span>
                                </div>

                            </div>

                            <div class="box2">

                                <span class="box3">
                                    <div class="box3_text1">
                                        <p><span class="fjala_edu_box3">Software Development Academy</span></p>
                                    </div>
                                    <div class="box3_text2">
                                        <p>Java from Scratch</p>
                                        <p>(327 hours)</p>
                                        <p>1.4. 2023 - 17.2. 2024</p>

                                    </div>
                                </span>

                            </div>
                        </div>


                    </swiper-slide>


                    <swiper-slide class="card4">
                        <div class="title_card">Languages</div>


                        <div id="drag-container">
                            <div id="spin-container">
                                <img src="https://www.worldometers.info/img/flags/ja-flag.gif" alt="jp">
                                <img src="https://www.worldometers.info/img/flags/ez-flag.gif" alt="cz">
                                <img src="https://www.worldometers.info/img/flags/uk-flag.gif" alt="uk">
                            </div>
                            <div id="ground"></div>
                        </div>


                        <div class="language_description_box">

                            <div class="cz_box">
                                <img class="img" src="https://www.worldometers.info/img/flags/ez-flag.gif" alt="cz">
                                <p>NATIVE</p>
                            </div>
                            <div class="eng_box">
                                <img class="img" src="https://www.worldometers.info/img/flags/uk-flag.gif" alt="uk">
                                <p>B2</p>
                            </div>
                            <div class="jp_box">
                                <img class="img" src="https://www.worldometers.info/img/flags/ja-flag.gif" alt="jp">
                                <p>N4</p>
                            </div>

                        </div>

                    </swiper-slide>


                    <swiper-slide class="card5">


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

                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

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
import TCVInfo from '@/components/TCVInfo.vue'

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
        TCVInfo,
    },
    data() {
        return {

        };
    },

    mounted() {
        this.rotate();
    },

    setup() {
        return {
            modules: [EffectCards],
            isTextVisible: false,
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

        toggleTextVisibility() {
            this.isTextVisible = !this.isTextVisible;
            const rowBoxInsideElements = document.querySelectorAll('.row_box_inside');
            rowBoxInsideElements.forEach((element) => {
                element.classList.toggle('active', this.isTextVisible);
            });
        },

        rotate() {
            var radius = 240;
            var autoRotate = true;
            var rotateSpeed = -10;
            var imgWidth = 170;
            var imgHeight = 120;


            setTimeout(init, 1000);

            var odrag = document.getElementById('drag-container');
            var ospin = document.getElementById('spin-container');
            var aImg = ospin.getElementsByTagName('img');
            var aEle = [...aImg];

            ospin.style.width = imgWidth + "px";
            ospin.style.height = imgHeight + "px";

            var ground = document.getElementById('ground');
            ground.style.width = radius * 3 + "px";
            ground.style.height = radius * 3 + "px";

            function init(delayTime) {
                for (var i = 0; i < aEle.length; i++) {
                    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
                    aEle[i].style.transition = "transform 1s";
                    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
                }
            }

            function applyTranform(obj) {
                if (tY > 180) tY = 180;
                if (tY < 0) tY = 0;

                obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
            }

            function playSpin(yes) {
                ospin.style.animationPlayState = (yes ? 'running' : 'paused');
            }

            var sX, sY, nX, nY, desX = 0,
                desY = 0,
                tX = 0,
                tY = 10;

            if (autoRotate) {
                var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
                ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
            }

            document.onpointerdown = function (e) {
                clearInterval(odrag.timer);
                e = e || window.event;
                var sX = e.clientX,
                    sY = e.clientY;

                this.onpointermove = function (e) {
                    e = e || window.event;
                    var nX = e.clientX,
                        nY = e.clientY;
                    desX = nX - sX;
                    desY = nY - sY;
                    tX += desX * 0.1;
                    tY += desY * 0.1;
                    applyTranform(odrag);
                    sX = nX;
                    sY = nY;
                };

                this.onpointerup = function (e) {
                    odrag.timer = setInterval(function () {
                        desX *= 0.95;
                        desY *= 0.95;
                        tX += desX * 0.1;
                        tY += desY * 0.1;
                        applyTranform(odrag);
                        playSpin(false);
                        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
                            clearInterval(odrag.timer);
                            playSpin(true);
                        }
                    }, 17);
                    this.onpointermove = this.onpointerup = null;
                };

                return false;
            };

            document.onmousewheel = function (e) {
                e = e || window.event;
                var d = e.wheelDelta / 20 || -e.detail;
                radius += d;
                init(1);
            };
        }
    },
}




</script>





<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Six+Caps&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap');
@import url('https://fonts.googleapis.com/css?family=Oswald:700');
@import url('https://fonts.googleapis.com/css?family=Rubik');

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
    /*box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);*/
    z-index: 10;

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



.swiper-slide::after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(226deg, rgba(255, 255, 255, 0.137) 0%, rgba(255, 255, 255, 0.151) 35%, rgba(255, 255, 255, 0.048) 42%, rgba(255, 255, 255, 0) 60%);
}




.card1 {
    background: hsl(0, 0%, 9%);
    color: #43c2fd;
}

.card2 {
    background: #2e2e2eef;
}

.card3 {
    background: black;
    display: flex;
    flex-direction: column;
}

.card5 {
    background: linear-gradient(to bottom, #202020, #111119);
}


/** CARD - TECHNICAL SKILLS */

.view {
    position: absolute;
    bottom: 10px;
    right: 50%;
    z-index: 2;
    font-size: 1.5rem;
}

.box {
    width: 30rem;
    height: 24rem;
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
}

.row {
    width: 30rem;
    height: 6rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}

.row_box {
    position: relative;
    border: 1px solid #413c3c;
    border-radius: 10px;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(hsl(0 0% 100% / 0.15), #0000), hsl(0 0% 4%);
    box-shadow:
        0 -1px hsl(0 0% 0% / 0.5) inset,
        0 2px 4px hsl(0 0% 0% / 0.5),
        0 1px hsl(0 0% 100% / 0.5) inset;

}

.row_box_inside {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 6rem;
    gap: 5px;
}

.box_without_icon {
    font-size: 0.6rem;
    font-weight: 800;
    color: #43c2fd;
}


.row_box_icon {
    color: #43c2fd;
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
    transition: all 0.3s;
}

.row_box:hover {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 10px;
    font-weight: 800;
    background: rgba(0, 0, 0, 0.062);
}

.row_box_inside p {
    display: none;
}

.row_box_inside:hover p {
    color: #43c2fd;
    display: block;
    font-weight: 900;
    font-size: 0.8rem;
}

.row_box:hover p {
    color: #43c2fd;
    display: block;
    font-size: 1rem;
    font-weight: 800;
}

.row_box_inside p {
    display: none;
}

.row_box_inside.active p {
    color: #43c2fd;
    display: block;
    font-weight: 900;
    font-size: 0.8rem;
}



/** CARD - SOFT SKILL */

.card2 .title_card {
    color: #ffffff;
}

.mainbox {
    width: 33rem;
    height: 27rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.outside_box1 {
    width: 33rem;
    height: 13rem;
    background: #D2D4AD;
    border-radius: 15px;
    padding: 20px;
}

.outside_box2 {
    width: 33rem;
    height: 13rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.inside_box1 {
    background: #7B3C45;
    width: 16rem;
    height: 13rem;
    border-radius: 15px;
    padding: 20px;
}

.inside_box2 {
    background: #3B5639;
    width: 16rem;
    height: 13rem;
    border-radius: 15px;
    padding: 20px;
}


.outside_box1 {
    font-family: 'Nunito', 'Fjalla One', sans-serif;
    color: #000000;
    font-size: 1.3rem;
}

.inside_box1 p,
.inside_box2 p {
    font-family: 'Nunito', 'Fjalla One', sans-serif;
    color: #cccccc;
    font-size: 1.3rem;
}

.fjala {
    font-family: 'Fjalla One', 'Nunito', sans-serif;
    color: #50A7C2;
    font-size: 2rem;
}





/** EDUCATION */
/** WORK EXPERIENCES */

.card {
    position: relative;
    width: 520px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card .box1 {
    position: relative;
    width: 100%;
    height: 240px;
    border-radius: 15px;
    background: #5B2333;
    background-size: cover;
}

.card .box1::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 black;
}

.card .box1::after {
    content: '';
    position: absolute;
    bottom: 70px;
    left: 0;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 black;
}

.card .box2 {
    position: relative;
    width: 100%;
    height: 150px;
    background: #B6C8A9;
    border-radius: 15px;
    border-top-left-radius: 0;
    padding: 0 35px;
}

.card .box2 .box3 {
    position: absolute;
    top: -80px;
    left: 0;
    height: 80px;
    width: 50%;
    background: #B6C8A9;
    border-top: 10px solid black;
    border-right: 10px solid black;
    border-top-right-radius: 25px;
}

.card .box2 .box3::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px -10px 0 black;
}

.card .box2 .box3::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -25px;
    width: 25px;
    height: 25px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -10px 10px 0 #B6C8A9;
}

.box1_text1 {
    position: absolute;
    top: 10px;
    left: 0px;
    width: 520px;
    height: 140px;
}

.box1_text1 p {
    font-size: 1.2rem;
    color: #d5dadb;
    margin: 7px 20px 0 20px;
}

.box1_text2 {
    position: absolute;
    left: 260px;
    bottom: 0;
    width: 260px;
    height: 100px;
    display: flex;
    align-items: center;
    text-align: center;
}

.box1_text2_info {
    font-size: 0.9rem;
    color: #d5dadb;
}

.company {
    color: #000000;
}

.box3_text1 {
    position: absolute;
    left: 30px;
    width: 220px;
    height: 220px;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
}

.box3_text2 {
    position: absolute;
    left: 250px;
    bottom: -150px;
    width: 270px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.box3_text2 p {
    color: #413c3c;
    font-weight: 500;
}

.fjala_edu_box1 {
    font-family: 'Fjalla One', 'Nunito', sans-serif;
    color: #50A7C2;
    font-size: 2rem;
}

.fjala_edu_box3 {
    font-family: 'Fjalla One', 'Nunito', sans-serif;
    color: #50A7C2;
    font-size: 2.5rem;
}



/** LANGUAGES */
.card4 {
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    background: radial-gradient(circle,
            rgba(67, 69, 112, 1) 3%,
            rgba(35, 36, 57, 1) 60%);
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

#drag-container,
#spin-container {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

}

#drag-container img {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 200px;
    font-size: 50px;
    text-align: center;
    -webkit-box-shadow: 0 0 8px #fff;
    box-shadow: 0 0 8px #fff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
    border-radius: 20px;
}


#drag-container p {
    position: absolute;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotateX(90deg);
    transform: translate(-50%, -50%) rotateX(90deg);
    color: #fff;
}

#ground {
    width: 900px;
    height: 900px;
    position: absolute;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%) rotateX(90deg);
    transform: translate(-50%, -50%) rotateX(90deg);
    background: -webkit-radial-gradient(center center, farthest-side, #9993, transparent);
}


.language_description_box {
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: row;
}

.cz_box,
.eng_box,
.jp_box {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
}

.cz_box p,
.eng_box p,
.jp_box p {
    font-size: 1rem;
}

.img {
    width: 90px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #8b8b94;
    box-shadow: 0 0 8px #fff;
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
    margin-top: 2rem;
}


.linkedin,
.email,
.phone,
.city,
.github {
    height: 3rem;
    width: 18rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #FFF;
    transition: all 0.5s;
    position: relative;
    font-size: 2rem;
    color: #3f74c4;
    border-radius: 10px;
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



.linkedin:hover,
.email:hover,
.phone:hover,
.city:hover,
.github:hover {
    border: 1px solid rgba(255, 255, 255, 0.411);
    border-radius: 10px;
    color: white;
    background-color: #1e508a;
    background-image: linear-gradient(225deg, #25d0e7bd 0%, #1e508a 50%, #163be0bd 100%);
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

/* ANIMATED BACKGROUND */

.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background-color: #1e508a;
    background-image: linear-gradient(225deg, #25d0e7bd 0%, #1e508a 50%, #163be0bd 100%);
    animation: animate 25s linear infinite;
    bottom: -150px;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
}


.circles li:nth-child(1) {
    left: 25%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation-delay: 0s;
}

.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 15px;
    height: 15px;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 30px;
    height: 30px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 40px;
    height: 40px;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 55px;
    height: 55px;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10) {
    left: 85%;
    width: 55px;
    height: 55px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 50%;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>