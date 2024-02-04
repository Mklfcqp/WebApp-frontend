<template>
  <div class="navigation_backgroud"></div>
  <div class="navigation">

    <div class="profile_bar">
      <ul>
        <li>
          <a href="#" class="active">
            <Icon icon="iconamoon:profile-duotone" class="menuIcon" />
            Profile
          </a>
          <div class="sub_menu_1">
            <ul>
              <li class="hover_me">
                <a href="#">
                  <Icon icon="lets-icons:setting-line-light" class="menuIcon" />
                  Setting
                </a>
                <div class="sub_menu_2">
                  <ul>
                    <li>
                      <a href="#">
                        <Icon icon="basil:picture-outline" class="menuIcon" />
                        Picture
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Icon icon="carbon:email" class="menuIcon" />
                        Email
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Icon icon="mdi:password-outline" class="menuIcon" />
                        Password
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Icon icon="lucide:delete" class="menuIcon" />
                        Delete account
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" @click="logout">
                  <Icon icon="mdi-light:logout" class="menuIcon" />
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

        <li class="active_menu"><a href="#" @click="redirectToMenu">MENU</a></li>
        <li class="active_cv"><a href="#" @click="redirectToCV">CV</a></li>
        <li class="active_stock"><a href="#">STOCK</a>
          <div class="sub_menu_1">
            <ul>
              <li>
                <a href="#" @click="redirectToWatchlist">
                  <Icon icon="streamline:graph-dot-solid" class="menuIcon" />
                  Watchlist
                </a>
              </li>
              <li>
                <a href="#" @click="redirectToPortfolio">
                  <Icon icon="raphael:piechart" class="menuIcon" />
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
      <div id="btn"></div>
      <button type="button" class="toggle-btn" @click="leftClick">ENG</button>
      <button type="button" class="toggle-btn" @click="rightClick">CZ</button>
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
      btn.style.left = '50px'
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
}

.navigation_backgroud {
  position: fixed;
  top: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  mask-image: linear-gradient(90deg, rgb(255, 255, 255) 0%, #ffffff 25%, #ffffff 75%, rgb(255, 255, 255) 100%);
  border-bottom: 1px solid rgba(177, 177, 177, 0.4);
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
}

.menu_bar ul li a,
.profile_bar ul li a {
  text-decoration: none;
  color: #cfcfcf;
  display: flex;
  align-items: center;
  gap: 5px;
}

.active:hover,
.active_menu a:hover,
.active_cv a:hover,
.active_stock a:hover {
  color: #dba613;
}

.menu_bar ul li:hover,
.profile_bar ul li:hover {
  height: 3rem;
  width: 10rem;
  color: #dba613;
  background: rgba(255, 255, 255, 0.1);
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
}

.sub_menu_2 {
  display: none;
}

.hover_me:hover .sub_menu_2 {
  position: absolute;
  display: block;
  margin-top: 96px;
  margin-left: 319px;
  background: #2a272749;
  font-size: 0.9rem;
}



/** LANGUAGE BUTTONS */
.language_box {
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
}

.language_button {
  height: 2rem;
  display: flex;
  position: relative;
  border-radius: 10px;
  background: #afafaf;
}

.toggle-btn {
  padding: 5px 20px;
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  position: relative;
  text-align: center;
}

#btn {
  left: 0;
  top: 0;
  position: absolute;
  width: 4rem;
  height: 100%;
  background: #dba613a1;
  border: 1px solid black;
  border-radius: 10px;
  transition: .5s;
}
</style>