<template>
    <main>
        <TBackground />
        <TNavbar />
        <section>
            <div class="content">
                <div class="info">

                    <div class="title">ABOUT ME</div>

                    <p>I am <span class="text_name">Tomáš Pitron</span>, Junior Java Developer.</p>

                    <p>As a team player with the ability to work independently and with passion of self-education, I have
                        gained valuable experience working on web application development as a business partner and leading
                        small project regarding migration of suppliers to new system.</p>

                    <p>I am highly motivated and driven to contribute to dynamic development projects, leveraging my
                        technical skills and collaborative mindset to create innovative solutions, where I can contribute to
                        dynamic development projects utilizing my analytic mindset and technical skills to create innovative
                        solutions.</p>

                </div>

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
                        <div class="mainbox_edu">

                            <div class="outside_box1_edu">
                                <p>
                                    Since 1.10. 2020 I have been working as and
                                    <span class="fjala_edu">EDI specialist</span>
                                    at the company
                                    <span class="company">Impromat Engineering</span>, providing
                                    EDI services for
                                    <span class="company">ŠKODA Auto</span>.

                                </p>
                                <span class="info_outside_box1_edu">If you would like to know more information feel free to contact me.</span>
                            </div>
                            <div class="outside_box2_edu">
                                <p><span class="fjala_edu">Software Development Academy</span> 
                                    <br>
                                    <br>Java from Scratch (327 hours) 
                                    <br>
                                    <br>1.4. 2023 - 17.2. 2024</p>
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


                        <div class="animation_text">

                            <div id="rotate-words">
                                <div>Czech<br /> <span>Native</span></div>
                                <div>English<br /> <span>B2</span></div>
                                <div>Japanese<br /> <span>N4</span></div>
                                <div>Czech<br /> <span>Native</span></div>
                                <div>English<br /> <span>B2</span></div>
                                <div>Japanese<br /> <span>N4</span></div>
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

.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    text-align: justify;
    gap: 20px;
}

.title {
    font-family: 'Six Caps', 'Noto Serif', sans-serif;
    color: rgb(179, 179, 179);
    font-size: 8rem;
    letter-spacing: 3px;
}

.info p {
    font-family: 'Noto Serif', sans-serif;
    color: #f0caca;
    font-weight: 200;
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
}

.text_name {
    font-family: 'Noto Serif', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    color: #50A7C2;
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
    background: linear-gradient(226deg, rgba(255, 255, 255, 0.137) 0%, rgba(255, 255, 255, 0.151) 35%, rgba(255, 255, 255, 0.048) 42%, rgba(255, 255, 255, 0) 60%);
}




.card1 {
    background-image: linear-gradient(to right, #dbbe95 0%, #d19784 100%);
    color: #3C3C3C;
}

.card2 {
    background: #2e2e2eef;
}

.card3 {
    background: linear-gradient(to bottom, #202020, #111119);
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
    border: 1px solid #3C3C3C;
    border-radius: 10px;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0) inset, 0 4px 16px rgba(0, 0, 0, 0.37);

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
    color: #385F71;
}


.row_box_icon {
    color: #385F71;
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
    color: #385F71;
    display: block;
    font-weight: 900;
    font-size: 0.8rem;
}

.row_box:hover p {
    color: #385F71;
    display: block;
    font-size: 1rem;
    font-weight: 800;
}

.row_box_inside p {
    display: none;
}

.row_box_inside.active p {
    color: #385F71;
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


.mainbox_edu {
    width: 33rem;
    height: 27rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.outside_box1_edu {
    width: 33rem;
    height: 13rem;
    background: #B6C8A9;
    border-radius: 15px;
    padding: 20px;
}

.info_outside_box1_edu {
    font-size: 0.8rem;
    color: #4b3a39;
}


.outside_box2_edu {
    width: 33rem;
    height: 13rem;
    background: #695958;
    border-radius: 15px;
    padding: 20px;
}


.outside_box1_edu {
    font-family: 'Nunito', 'Fjalla One', sans-serif;
    color: #000000;
    font-size: 1.3rem;
}

.inside_box1_edu p,
.inside_box2_edu p {
    font-family: 'Nunito', 'Fjalla One', sans-serif;
    color: #cccccc;
    font-size: 1.3rem;
}

.fjala_edu {
    font-family: 'Fjalla One', 'Nunito', sans-serif;
    color: #50A7C2;
    font-size: 2rem;
}

.company {
    font-size: 1.5rem;
    font-family: 'Fjalla One', 'Nunito', sans-serif;
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



.animation_text {
    width: 100%;
    height: 100%;
    position: absolute;
    background-attachment: fixed;
    color: #fff;
    text-align: center;
    overflow: hidden;
}

#rotate-words {
    max-width: 400px;
    padding: 10% 0;
}

#rotate-words span {
    height: 50px;
    font-size: 1rem;
    text-transform: uppercase;
    opacity: .8;
    font-family: 'Rubik', sans-serif;
}

#rotate-words div {
    position: absolute;
    overflow: hidden;
    bottom: 2rem;
    left: 14rem;
    font-size: 2rem;
    animation: rotate-word 32s linear infinite 0s;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
}

@keyframes rotate-word {
    0% {
        opacity: 0;
        transform: translateX(0);
        filter: blur(10px);
        transform: scale(1.2)
    }

    3% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
        transform: scale(.9)
    }

    12% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
        transform: scale(1)
    }

    16% {
        opacity: 0;
        transform: translateX(0);
        filter: blur(10px);
        transform: scale(1.2)
    }

    80% {
        opacity: 0
    }

    100% {
        opacity: 0
    }
}

#rotate-words div:nth-child(2) {
    animation-delay: 4s
}

#rotate-words div:nth-child(3) {
    animation-delay: 8s
}

#rotate-words div:nth-child(4) {
    animation-delay: 12s
}

#rotate-words div:nth-child(5) {
    animation-delay: 16s
}

#rotate-words div:nth-child(6) {
    animation-delay: 20s
}


@keyframes author {
    0% {
        opacity: 0;
        transform: translateY(100px);
        filter: blur(10px);
        transform: scaleY(2)
    }

    20% {
        opacity: 0;
        transform: translateY(200px);
        filter: blur(10px);
        transform: scaleY(2)
    }

    30% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
        transform: scaleY(1)
    }

    90% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
        transform: scaleY(.9)
    }

    100% {
        opacity: 0;
        transform: translateY(0);
        filter: blur(10px);
        transform: scale(2)
    }
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
    border-radius: 10px;
    color: white;
    background: #3f74c4;
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