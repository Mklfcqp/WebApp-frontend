<template>
    <div class="navigation_backgroud"></div>
    <div class="navigation">

        <div class="profile_bar">
            <ul>
                <li class="active">
                    <img src="../assets/img/profile.svg" alt="profile" class="menuIcon">
                    <div class="width_higher">Profile</div>
                    <div class="sub_menu_1">
                        <ul>
                            <li class="active_submenu">
                                <img src="../assets/img/setting.svg" alt="setting" class="menuIcon">
                                <div class="width_higher">Setting</div>
                            </li>
                            <li class="active_submenu" @click="logout">
                                <img src="../assets/img/logout.svg" alt="logout" class="menuIcon">
                                <div class="width_higher">Logout</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class="menu_bar">
            <ul>

                <li class="active_menu" @click="redirectToMenu">
                    <img src="../assets/img/menu.svg" alt="menu" class="menuIcon">
                    <div class="width_higher">MENU</div>
                </li>
                <li class="active_cv" @click="redirectToCV">
                    <img src="../assets/img/cv.svg" alt="cv" class="menuIcon">
                    <div class="width_higher">CV</div>
                </li>
                <li class="active_stock">
                    <img src="../assets/img/stock.svg" alt="stock" class="menuIcon">
                    <div class="width_higher">STOCK</div>
                    <div class="sub_menu_1">
                        <ul>
                            <li class="active_submenu">
                                <a href="#" @click="redirectToWatchlist">
                                    <img src="../assets/img/watchlist.svg" alt="watchlist" class="menuIcon">
                                    <div class="width_higher">Watchlist</div>
                                </a>
                            </li>
                            <li class="active_submenu">
                                <a href="#" @click="redirectToPortfolio">
                                    <img src="../assets/img/portfolio.svg" alt="portfolio" class="menuIcon">
                                    <div class="width_higher">Portfolio</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>


        <div class="language_box">
            <ul>
                <li class="active_stock">
                    <img src="../assets/img/language.svg" alt="language" class="menuIcon">
                    <div class="sub_menu_1">
                        <ul>
                            <li class="active_submenu">
                                <a href="#" @click="">
                                    <img src="../assets/img/cz.svg" alt="cz" class="menuIcon">
                                </a>
                            </li>
                            <li class="active_submenu">
                                <a href="#" @click="">
                                    <img src="../assets/img/uk.svg" alt="uk" class="menuIcon">
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {Icon} from '@iconify/vue';

export default {
    components: {Icon},

    data() {
        return {};
    },


    methods: {

        redirectToPortfolio() {
            this.$router.push("/portfolioENG");
        },

        redirectToWatchlist() {
            this.$router.push("/watchlistENG");
        },

        redirectToCV() {
            this.$router.push("/cvENG");
        },

        redirectToMenu() {
            this.$router.push("/menuENG");
        },

        logout() {
            localStorage.clear();
            this.$router.push("/loginENG");
        },


    }

};
</script>


<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Oswald, 'Courier New', Courier;
    color: #000000;
}

/** NAVIGATION */

.navigation {
    height: 3rem;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #2d2d2d;
    border-bottom: 1px solid rgba(177, 177, 177, 0.4);
}

.navigation_backgroud {
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    background: #2d2d2d;
}

.profile_bar {
    height: 3rem;
    width: 10rem;
    background: none;
    margin-left: 1.5rem;
}

.menu_bar {
    width: 30rem;
    height: 3rem;
    background: none;
}

.language_box {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    width: 10rem;
    height: 3rem;
}

.menuIcon {
    width: 25px;
    height: 25px;
}


.menu_bar ul,
.profile_bar ul,
.language_box ul {
    display: inline-flex;
    list-style: none;
    color: #cfcfcf;
}

.menu_bar ul li,
.profile_bar ul li,
.language_box ul li {
    width: 10rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.width_higher {
    text-decoration: none;
    color: #cfcfcf;
    display: flex;
    align-items: center;
    gap: 5px;
}

.menu_bar ul li a,
.profile_bar ul li a,
.language_box ul li a {
    text-decoration: none;
    color: #cfcfcf;
    display: flex;
    align-items: center;
    gap: 10px;
}

.active:hover,
.active_menu:hover,
.active_cv:hover,
.active_stock:hover {
    cursor: pointer;
    height: 3rem;
    width: 10rem;
    background: rgba(255, 255, 255, 0.1);
}


.active_submenu:hover {
    border: 1px solid hsl(51, 5%, 28%);
    background: #9e8a53;
}

.sub_menu_1 {
    display: none;
}

.menu_bar ul li:hover .sub_menu_1,
.profile_bar ul li:hover .sub_menu_1,
.language_box ul li:hover .sub_menu_1 {
    display: block;
    position: absolute;
    background: #2a272749;
    margin-top: 112px;
    font-size: 0.9rem;
    cursor: pointer;
}

.menu_bar ul li:hover .sub_menu_1 ul,
.profile_bar ul li:hover .sub_menu_1 ul,
.language_box ul li:hover .sub_menu_1 ul {
    display: block;
}

.menu_bar ul li:hover .sub_menu_1 ul li,
.profile_bar ul li:hover .sub_menu_1 ul li,
.language_box ul li:hover .sub_menu_1 ul li {
    height: 2rem;
    width: 10rem;
    background: rgba(255, 255, 255, 0.1);
}


.menu_bar ul li:hover .sub_menu_1 ul li a:hover,
.profile_bar ul li:hover .sub_menu_1 ul li a:hover,
.language_box ul li:hover .sub_menu_1 ul li a:hover {
    color: #dba613;
    cursor: pointer;
}


.width_higher {
    display: inline;
}


/* Media Queries */

@media only screen and (max-width: 720px) {

    .width_higher {
        display: none;
    }

    .navigation {
        height: 2rem;
        justify-content: space-around;
    }


    .navigation_backgroud {
        height: 2rem;
    }


    .profile_bar {
        height: 2rem;
        width: 50px;
        background: none;
        margin-left: -10px;
    }

    .menu_bar {
        width: 150px;
        height: 2rem;
        background: none;
    }

    .language_box {
        display: flex;
        margin-right: -10px;
        width: 50px;
        height: 2rem;
    }


    .menu_bar ul li,
    .profile_bar ul li,
    .language_box ul li {
        width: 50px;
        height: 2rem;
    }


    .active a:hover,
    .active_menu div:hover,
    .active_cv div:hover,
    .active_stock div:hover {
        color: #9e8a53;
    }

    .menu_bar ul li:hover,
    .profile_bar ul li:hover,
    .language_box ul li:hover {
        height: 2rem;
        width: 50px;
        color: #9e8a53;
    }

    .profile_bar ul li:hover .sub_menu_1,
    .menu_bar ul li:hover .sub_menu_1,
    .language_box ul li:hover .sub_menu_1 {
        margin-top: 95px;
    }


    .menu_bar ul li:hover .sub_menu_1 ul li,
    .profile_bar ul li:hover .sub_menu_1 ul li,
    .language_box ul li:hover .sub_menu_1 ul li {
        height: 2rem;
        width: 50px;
    }


    .menu_bar ul li:hover .sub_menu_1 ul li a:hover,
    .profile_bar ul li:hover .sub_menu_1 ul li a:hover,
    .language_box ul li:hover .sub_menu_1 ul li a:hover {
        color: #9e8a53;
    }

    .menuIcon {
        width: 20px;
        height: 20px;
    }


}

</style>