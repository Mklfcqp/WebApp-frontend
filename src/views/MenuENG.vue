<template>
    <main class="main">

        <div class="section">

            <TBackground/>
            <TNavbar/>

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
                    <p class="comments">for other information click the
                        <span class="cv" @click="redirectToCV">CV</span> or
                        <span class="stock" @click="redirectToWatchlist">STOCK</span>
                    </p>
                    <br>

                </div>

                <div class="description_2">
                    <p class="comments">*/</p>
                    <p class="normal_text">}</p>
                    <br>
                </div>

            </div>

        </div>

    </main>
</template>


<script>
import TNavbar from '@/components/TNavbar.vue'
import {Icon} from '@iconify/vue';
import db from '../utils/db.js'
import axios from 'axios';
import TBackground from '@/components/TBackground.vue'
import TBackgroundGray from "@/components/TBackgroundGray.vue";

export default {

    components: {
        TBackgroundGray,
        TNavbar,
        Icon,
        TBackground
    },
    data() {
        return {}
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
*:after,
*:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}


.main {
    position: absolute;
    overflow-x: hidden;
    min-height: 100vh;
    width: 100%;
    background: #141414;
    top: 0;
    left: 0;
}


.section {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


.content {
    width: 60rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(1px);
    border-radius: 20px;
    z-index: 10;
    line-height: 1.5;
    font-family: 'JetBrains Mono', Oswald, 'Courier New', Courier;
    margin-top: 80px;
    font-size: 0.9rem;
    padding: 10rem;
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
    text-align: center;
}


.cv, .stock {
  cursor: pointer;
}

.cv:hover,
.stock:hover {
    color: #dba613;
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






/* For Desktop View */
@media screen and (min-width: 1200px) {
    .content {
        min-height: 10rem;
        font-size: 0.9rem;
        margin-top: 200px;
        margin-bottom: 200px;
    }
    .description_1,
    .description_2 {
        width: 40rem;
    }
}

/* For Desktop View */
@media screen and (min-device-width: 1024px)
and (max-device-width: 1200px) {
    .content {
        min-height: 10rem;
        font-size: 0.8rem;
        margin-top: 200px;
        margin-bottom: 200px;
    }
    .description_1,
    .description_2 {
        width: 40rem;
    }
}

/* For Tablet View */
@media screen and (min-device-width: 768px)
and (max-device-width: 1024px) {
    .content {
        width: 95%;
        min-height: 10rem;
        font-size: 0.8rem;
        padding: 40px 10px  40px 10px;
    }

    .description_1,
    .description_2 {
        width: 85%;
    }

}

/* For Mobile View */
@media screen and (min-device-width: 480px)
and (max-device-width: 768px) {
    .content {
        width: 95%;
        min-height: 10rem;
        font-size: 0.8rem;
        padding: 40px 10px  40px 10px;
    }

    .description_1,
    .description_2 {
        width: 85%;
    }

}

@media screen and (min-device-width: 320px)
and (max-device-width: 480px) {
    .content {
        width: 95%;
        min-height: 10rem;
        font-size: 0.8rem;
        padding: 30px 10px  30px 10px;
    }

    .description_1,
    .description_2 {
        width: 85%;
    }
}





</style>