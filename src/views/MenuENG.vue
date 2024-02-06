<template>
    <main>
        <TBackground />
        <TNavbar />
        <section>
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
                    <br>
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
                    <br>
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
.description_2 p:nth-child(2) {
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






</style>