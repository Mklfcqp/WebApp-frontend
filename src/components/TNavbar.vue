<template>
  <div class="navigation_backgroud"></div>
  <div class="navigation">

    <div class="profile_bar">
      <ul>
        <li>
            <img src="src/assets/img/profile.svg" alt="sell" class="menuIcon">
            <div class="width_higher">Profile</div>
          <div class="sub_menu_1">
            <ul>
              <li class="hover_me">
                <a href="#">
                    <img src="src/assets/img/setting.svg" alt="sell" class="menuIcon">
                  Setting
                </a>
              </li>
              <li>
                <a href="#" @click="logout">
                    <img src="src/assets/img/logout.svg" alt="sell" class="menuIcon">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="menu_bar">
      <ul>

        <li class="active_menu" @click="redirectToMenu">
            <img src="src/assets/img/menu.svg" alt="sell" class="menuIcon">
            <div class="width_higher">MENU</div>
        </li>
        <li class="active_cv" @click="redirectToCV">
            <img src="src/assets/img/cv.svg" alt="sell" class="menuIcon">
            <div class="width_higher">CV</div>
        </li>
        <li class="active_stock">
            <img src="src/assets/img/stock.svg" alt="sell" class="menuIcon">
            <div class="width_higher">STOCK</div>
          <div class="sub_menu_1">
            <ul>
              <li>
                <a href="#" @click="redirectToWatchlist">
                    <img src="src/assets/img/watchlist.svg" alt="sell" class="menuIcon">
                  Watchlist
                </a>
              </li>
              <li>
                <a href="#" @click="redirectToPortfolio">
                    <img src="src/assets/img/portfolio.svg" alt="sell" class="menuIcon">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="language_box">
    <div class="language_button">
<!--      <div id="btn"></div>-->
<!--        <Icon icon="material-symbols:language" class="width_lower"/>-->
<!--      <div type="button" class="toggle-btn" @click="leftClick">ENG</div>-->
<!--      <div type="button" class="toggle-btn" @click="rightClick">CZ</div>-->
    </div>
  </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  components: { Icon },

  data() {
    return {
      isMenuVisible: false,
      isSubMenuVisible: false,
      isStockMenuVisible: false,
    };
  },



  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;

    },

    toggleSubMenu() {
      this.isSubMenuVisible = !this.isSubMenuVisible;
    },

    toggleStockMenu() {
      this.isStockMenuVisible = !this.isStockMenuVisible;
    },




    leftClick() {
      var btn = document.getElementById('btn');
      btn.style.left = '0'
    },

    rightClick() {
      var btn = document.getElementById('btn');
      btn.style.left = '62px'
    },





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
}

.navigation_backgroud {
    position: fixed;
    top: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    background: rgba(255, 255, 255, 0.22) 0%;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
    /*border-bottom: 1px solid rgba(177, 177, 177, 0.4);*/
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

.menuIcon {
    width: 25px;
    height: 25px;
    color: #cfcfcf;
}


.menu_bar ul,
.profile_bar ul {
    display: inline-flex;
    list-style: none;
    color: #cfcfcf;

}

.menu_bar ul li,
.profile_bar ul li {
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
.profile_bar ul li a {
    text-decoration: none;
    color: #cfcfcf;
    display: flex;
    align-items: center;
    gap: 10px;
}

.active:hover,
.active_menu a:hover,
.active_cv a:hover,
.active_stock a:hover {
    color: #dba613;
    cursor: pointer;
}

.menu_bar ul li:hover,
.profile_bar ul li:hover {
    height: 3rem;
    width: 10rem;
    color: #dba613;
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

.sub_menu_1 {
    display: none;
}

.menu_bar ul li:hover .sub_menu_1,
.profile_bar ul li:hover .sub_menu_1 {
    display: block;
    position: absolute;
    background: #2a272749;
    margin-top: 112px;
    font-size: 0.9rem;
    cursor: pointer;
}

.menu_bar ul li:hover .sub_menu_1 ul,
.profile_bar ul li:hover .sub_menu_1 ul {
    display: block;
}

.menu_bar ul li:hover .sub_menu_1 ul li,
.profile_bar ul li:hover .sub_menu_1 ul li {
    height: 2rem;
    width: 10rem;
    background: rgba(255, 255, 255, 0.1);
}



.menu_bar ul li:hover .sub_menu_1 ul li a:hover,
.profile_bar ul li:hover .sub_menu_1 ul li a:hover {
    color: #dba613;
    cursor: pointer;
}




/** LANGUAGE BUTTONS */
.language_box {
    display: flex;
    align-items: center;
    margin-right: 1.5rem;
    width: 8rem;
    height: 1.5rem;
    /*border: 1px solid hsl(240 5% 27.6%);*/
    border-radius: 5px;
}

.language_button {
    height: 1.5rem;
    width: 8rem;
    display: flex;
    position: relative;
}

.toggle-btn {
    padding: 5px 10px;
    cursor: pointer;
    background: transparent;
    outline: none;
    position: relative;
    text-align: center;
    color: #cfcfcf;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

#btn {
    left: 0;
    top: 0;
    position: absolute;
    width: 4rem;
    height: 100%;
    background: rgba(204, 154, 58, 0.77);
    border-radius: 5px;
    transition: .5s;
}

.width_higher {
    display: inline;
}










/* Media Queries */

@media only screen and (max-width: 720px) {

    .width_higher,
    .toggle-btn,
    #btn {
        display: none;
    }

    .navigation {
        height: 2rem;
        border: 1px solid black;
        justify-content: space-between;
    }

    .navigation_backgroud {
        height: 2rem;
    }


    .profile_bar {
        height: 2rem;
        width: 3rem;
        background: none;
        margin-left: 1.5rem;
    }

    .menu_bar {
        width: 3rem;
        height: 2rem;
        background: none;
    }


    .menu_bar ul li,
    .profile_bar ul li {
        width: 3rem;
        height: 2rem;
    }


    .active:hover,
    .active_menu a:hover,
    .active_cv a:hover,
    .active_stock a:hover {
        color: #9e8a53;
    }

    .menu_bar ul li:hover,
    .profile_bar ul li:hover {
        height: 2rem;
        width: 3rem;
        color: #9e8a53;
    }


    .menu_bar ul li:hover .sub_menu_1,
    .profile_bar ul li:hover .sub_menu_1 {
        margin-top: 95px;
        margin-left: 64px;
        font-size: 0.8rem;
    }


    .menu_bar ul li:hover .sub_menu_1 ul li,
    .profile_bar ul li:hover .sub_menu_1 ul li {
        height: 2rem;
        width: 7rem;
    }


    .menu_bar ul li:hover .sub_menu_1 ul li a:hover,
    .profile_bar ul li:hover .sub_menu_1 ul li a:hover {
        color: #9e8a53;
    }




}

</style>