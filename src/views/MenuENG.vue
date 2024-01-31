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

                        <div class="cv_box" @click="redirectToCV">

                            <div class="title">
                                <h1>CV</h1>
                            </div>

                            <div class="text">
                                <p>the document attempting to describe my life experiences</p>
                            </div>

                        </div>

                        <div class="stock_box" @click="redirectToWatchlist">
                            <div class="title">
                                <h1>STOCK</h1>
                            </div>

                            <div class="text">
                                <p>mini web application to demonstrate my skills</p>
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
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset, 0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
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
    height: 5rem;
    width: 15rem;
    border: 1px solid #808080;
    border-radius: 5px;
    padding: 5px;
}

.cv_box {
    background: #5183af;
}

.stock_box {
    background: #b97c37;
}

.cv_box .text,
.stock_box .text {
    display: none;
}


.cv_box:hover .title h1,
.stock_box:hover .title h1 {
    display: none;
}

.cv_box:hover .text,
.stock_box:hover .text {
    display: block;
}

.cv_box:hover,
.stock_box:hover {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 0.5rem;
}


.stock_box:hover {

}

.cv_box:hover {
 
}

.title {
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;

}

.text {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
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