<template>
    <main>

        <section>
            <TBackground />
            <TNavbar />
            <div class="content">

                <div class="description_1">
                    <p class="annotation">@Data</p>
                    <p class="annotation">@NoArgsConstructor</p>
                    <p class="annotation">@AllArgsConstructor</p>
                    <p class="annotation">@Builder</p>
                    <p><span class="keyword">public class</span> <span class="normal_text">JuniorJavaDeveloper
                            {</span></p>
                    <br>
                    <p><span class="keyword">private</span> <span class="normal_text">String</span> <span
                            class="variables">fullname</span> <span class="normal_text">= "Tomáš
                            Pitron"</span><span class="keyword">;</span></p>
                    <br>
                    <p class="comments">/*</p>
                    <br>
                    <p class="comments">for other information click the CV or STOCK button</p>

                </div>

                <div class="content_boxes">

                    <div class="container">
                        <div class="box">
                            <div class="cv_box">
                                <h1>CV</h1>
                            </div>
                            <div class="glass_cv" @click="redirectToCV">
                                <h3>the document attempting to describe my life experiences</h3>
                            </div>
                        </div>
                        <div class="box">
                            <div class="stock_box">
                                <h1>STOCK</h1>
                            </div>
                            <div class="glass_stock" @click="redirectToWatchlist">
                                <h3>mini web application to demonstrate my skills</h3>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="description_2">
                    <p class="comments">*/</p>
                    <p class="normal_text">}</p>
                    <br>
                </div>

            </div>


        </section>
    </main>
</template>






<script>
import TNavbar from '@/components/TNavbar.vue'
import { Icon } from '@iconify/vue';
import db from '../utils/db.js'
import axios from 'axios';
import TBackground from '@/components/TBackground.vue'

export default {

    components: {
        TNavbar,
        Icon,
        TBackground
    },
    data() {
        return {

        }
    },

    methods: {
        redirectToWatchlist() {
            this.$router.push("/watchlistENG");
        },

        redirectToCV() {
            this.$router.push("/cvENG");
        },
    }

}

</script>





<style scoped>
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

section {
    width: 100vw;
    height: 100%;
    overflow: hidden;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    top: 0;
    left: 0;
}


.content {
    width: 70rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: linear-gradient(180deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(1px);
    border-radius: 20px;
    /*box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);*/
    z-index: 10;
    font-size: 0.9rem;
    line-height: 1.5;
    font-family: 'JetBrains Mono', Oswald, 'Courier New', Courier;
}

/** CONTENT - MAINBOX */

.description_1,
.description_2 {
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.description_1 p:nth-child(7),
.description_1 p:nth-child(9),
.description_2 p:nth-child(1) {
    margin-left: 2rem;
}

.description_1 p:nth-child(11) {
    margin: auto;
}


.content_boxes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.cv_box,
.stock_box {
    height: 3rem;
    width: 15rem;
    border-radius: 0.5rem;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cv_box {
    background: #497296;
}

.stock_box {
    background: #966b3a;
}


.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}

.container .box {
    position: relative;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    cursor: pointer;
}



.container .box .glass_cv {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(32, 102, 194, 0.315), transparent);
    border: 1px solid rgba(0, 89, 255, 0.1);
    backdrop-filter: blur(15px);
    opacity: 0;
    scale: 0;
    transition: 0.5s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.container .box .glass_stock {
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(187, 141, 41, 0.247), transparent);
    border: 1px solid rgba(233, 188, 43, 0.1);
    backdrop-filter: blur(15px);
    opacity: 0;
    scale: 0;
    transition: 0.5s;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}


.container .box:hover .glass_cv,
.container .box:hover .glass_stock
{
    opacity: 1;
    scale: 1;
}

.container .glass_cv h3,
.container .glass_stock h3 {
    font-size: 0.9rem;
    color: #d4d4d4;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 1.2rem;
}

.container .box:hover h1 {
    display: none;
}

.container .box:hover .cv_box,
.container .box:hover .stock_box {
    background: none;
}


.annotation {
    color: #BBB529;
}

.keyword {
    color: #CC7832;
}

.normal_text {
    color: #A9B7C6;
}

.variables {
    color: #9876AA;
}

.comments {
    color: #808080;
}

/*----------------------------------------------------------------*/

@media screen and (max-height: 720px) {
    .content {
        width: 85%;
        max-height: 80%;
        font-size: 0.7rem;
        padding-top: 10px;
    }

    .description_1,
    .description_2 {
        width: 90%;
        font-size: 0.65rem;
    }


    .container .box {
        width: 200px;
        height: 40px;
        font-size: 0.6rem;
    }

    .container .box:hover {
        width: 200px;
        height: 40px;
    }

    .container .glass_cv h3,
    .container .glass_stock h3 {
        font-size: 0.6rem;
        color: #d4d4d4;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-align: center;
        line-height: 1.2rem;
    }

    .container {
        gap: 30px;
        height: 40px;
    }

    .cv_box,
    .stock_box {
        height: 40px;
        width: 15rem;
        border-radius: 0.5rem;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


/*----------------------------------------------------------------*/

@media screen and (orientation: portrait) and (max-width: 767px) {
    .content {
        width: 90%;
        height: auto;
        font-size: 0.8rem;
        padding-top: 15px;
    }

    .description_1,
    .description_2 {
        width: 85%;
    }


    .container .box {
        width: 85%;
        height: 60px;
        font-size: 0.6rem;
    }

    .container .box:hover {
        width: 70%;
        height: 60px;
    }

    .container .glass_cv h3,
    .container .glass_stock h3 {
        font-size: 0.6rem;
        color: #d4d4d4;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-align: center;
        line-height: 1.2rem;
    }

    .container {
        gap: 5px;
    }


}


@media screen and (orientation: landscape) and (max-width: 767px) {
    .content {
        width: 90%;
        height: 320px;
        font-size: 0.7rem;
        padding-top: 10px;
        margin-top: 40px;
    }

    .description_1,
    .description_2 {
        width: 90%;
        font-size: 0.6rem;
    }


    .container .box {
        width: 200px;
        height: 40px;
        font-size: 0.6rem;
    }

    .container .box:hover {
        width: 200px;
        height: 40px;
    }

    .container .glass_cv h3,
    .container .glass_stock h3 {
        font-size: 0.6rem;
        color: #d4d4d4;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-align: center;
        line-height: 1.2rem;
    }

    .container {
        gap: 10px;
        height: 40px;
    }

    .cv_box,
    .stock_box {
        height: 40px;
        width: 15rem;
        border-radius: 0.5rem;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}


/*----------------------------------------------------------------*/

@media (orientation: portrait) and (min-width: 768px) and (max-width: 1023px) {
    .content {
        width: 90%;
        height: 38rem;
        font-size: 1rem;
    }

    .description_1,
    .description_2 {
        width: 80%;
    }

    .content_boxes {
        gap: 30px;
    }

    .container .box {
        width: 250px;
    }

    .container {
        gap: 10px;
    }

    .cv_box,
    .stock_box {
        font-size: 0.8rem;
    }
}







@media screen and (min-width: 1024px) {
    .content {
        width: 60rem;
        height: 35rem;
        font-size: 0.9rem;
    }

    .description_1,
    .description_2 {
        width: 40rem;
    }

    .content_boxes {
        gap: 40px;
    }

    .container .box {
        width: 200px;
    }
}




@media screen and (min-width: 1300px) {
    .content {
        width: 70rem;
        height: 35rem;
        font-size: 0.9rem;
    }

    .description_1,
    .description_2 {
        width: 40rem;
    }

    .content_boxes {
        gap: 40px;
    }

    .container .box {
        width: 200px;
    }
}






</style>