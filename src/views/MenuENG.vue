<template>
    <main>
        <div class="wrapper">

            <div class="background">

                <div class="architecture">
                    <TNavbar />

                    <div class="header">
                        <Icon icon="ep:menu" class="header_icon" />
                        <h1>MENU</h1>
                        <h3></h3>
                    </div>

                    <div class="top_filling">
                        <div class="top_filling_left"></div>
                        <div class="top_filling_mid"></div>
                        <div class="top_filling_right"></div>
                    </div>

                    <div class="content">

                        <div class="content_left">

                        </div>

                        <div class="content_mid">

                            <div class="mainbox">

                                <div class="sorted"></div>

                                <div class="description_1">
                                    <p class="annotation">@Data</p>
                                    <p class="annotation">@NoArgsConstructor</p>
                                    <p class="annotation">@AllArgsConstructor</p>
                                    <p class="annotation">@Builder</p>
                                    <p><span class="keyword">public class</span> <span
                                            class="normal_text">JuniorJavaDeveloper
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
                        </div>

                        <div class="content_right">

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </main>
</template>






<script>
import TNavbar from '@/components/TNavbar.vue'
import { Icon } from '@iconify/vue';
import db from '../utils/db.js'
import axios from 'axios';

export default {

    components: {
        TNavbar,
        Icon
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
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #000000;
}

.background {
    background: radial-gradient(circle at top, #3a3a3a, #000000);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
}

.architecture {
    display: flex;
    flex-direction: column;
    /*align-items: center;*/

}


/** HEADER */

.header {
    height: 10rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    border-bottom: 0.5px solid rgb(211, 199, 199);
    background-color: #3A4454;
    background-image: linear-gradient(to right, #00CED1, #000080);
    font-family: Oswald, 'Courier New', Courier;
}

.header h1 {
    color: white;
}

.header h3 {
    color: rgb(206, 206, 206);
    font-weight: 300;
}

.header_icon {
    font-size: 1.75rem;
}




/** CONTENT */
.content {
    height: 70.75vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content_mid {
    width: 45rem;
    height: 45rem;
    display: flex;
    justify-content: center;
    border-left: 2px solid #9e94945e;
    border-right: 2px solid #9e94945e;
}



.top_filling {
    height: 3rem;
    width: 100%;
    border-bottom: 2px solid #9e94945e;
    /*box-shadow: 0 5px 5px -5px #03e9f4, 0 25px 25px -10px #03e9f4, 0 50px 50px -15px #03e9f4, 0 100px 100px -20px #03e9f4;*/
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.top_filling_left,
.top_filling_right {
    height: 3rem;
}

.top_filling_mid {
    height: 3rem;
    width: 45rem;
    border-left: 2px solid #9e94945e;
    border-right: 2px solid #9e94945e;
    
}

.sorted {
    height: 2rem;
    width: 100%;
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

.mainbox {
    width: 45rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(circle at top, #3a3a3a, #000000);
    font-size: 0.85rem;
    line-height: 1.5;
    font-family: 'JetBrains Mono', Oswald, 'Courier New', Courier;

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
    border: 1px solid #808080;
    border-radius: 5px;
    padding: 5px;
    transition: width 0.3s, height 0.3s;
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
    /* Skryje text v normálním stavu */
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
    height: 7rem;
    width: 15rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid white;
    border-radius: 0.5rem;
}


.stock_box:hover {
    background: #eea507;
    box-shadow: 0 0 5px #eea507, 0 0 25px #eea507, 0 0 50px #eea507, 0 0 100px #eea507;
}

.cv_box:hover {
    background: #03a8f4;
    box-shadow: 0 0 5px #03a8f4, 0 0 25px #03a8f4, 0 0 50px #03a8f4, 0 0 100px #03a8f4;
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