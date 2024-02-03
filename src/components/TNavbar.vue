<template>
  <main>
    <div class="navigation">

      <div class="img" @click="toggleMenu">
        <Icon icon="iconamoon:profile-duotone" />
      </div>

      <div class="buttons">
        <button class="button" @click="redirectToMenu">
       
          MENU
        </button>
        <button class="button" @click="redirectToCV">

          CV
        </button>
        <button class="button" @click="toggleStockMenu">

          STOCK
        </button>
      </div>


      <div class="language_box">
        <div id="btn"></div>
        <button type="button" class="toggle-btn" @click="leftClick">ENG</button>
        <button type="button" class="toggle-btn" @click="rightClick">CZ</button>
      </div>


    </div>

    <div class="profile_menu" v-show="isMenuVisible">
      <button class="menuItem1" @click="toggleSubMenu">
        <Icon icon="lets-icons:setting-line-light" />
        Setting
      </button>

      <div class="submenu" v-show="isSubMenuVisible">
        <button class="submenuItem1">
          <Icon icon="basil:picture-outline" />
          Picture
        </button>
        <button class="submenuItem2">
          <Icon icon="carbon:email" />
          Email
        </button>
        <button class="submenuItem3">
          <Icon icon="mdi:password-outline" />
          Password
        </button>
        <button class="submenuItem4">
          <Icon icon="lucide:delete" />
          Delete account
        </button>
      </div>

      <button class="menuItem2" @click="logout">
        <Icon icon="mdi-light:logout" />
        Logout
      </button>
    </div>

    <div class="stock_menu" v-show="isStockMenuVisible">
      <button class="stockMenuItem1" @click="redirectToWatchlist">
        <Icon icon="fxemoji:stockchart" />
        Watchlist
      </button>

      <button class="stockMenuItem2" @click="redirectToPortfolio">
        <Icon icon="raphael:piechart" />
        Portfolio
      </button>
    </div>

    

  </main>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  mask-image: linear-gradient(90deg, rgb(255, 255, 255) 0%, #ffffff 25%, #ffffff 75%, rgb(255, 255, 255) 100%);
  border-bottom: 1px solid rgba(177, 177, 177, 0.4);

}

.img {
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  background: #d1d1d1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

}

.img:hover {
  cursor: pointer;
  background: #dba613a1;
}




/** STOCK MENU */

.stock_menu {
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: absolute;
  top: 3.2rem;
  left: 67rem;
  width: 6rem;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
}


.stockMenuItem1,
.stockMenuItem2 {
  cursor: pointer;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: Oswald;
  letter-spacing: 0.2px;
  border: none;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  margin: 1px;
  border-radius: 5px;
  
}


.stockMenuItem1:hover,
.stockMenuItem2:hover {
  background: #dba613a1;
  color: #000000;
}




/** CV STOCK BUTTONS */

.buttons {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.button {
  background: none;
  cursor: pointer;
  color: #cfcfcf;
  border: none;
  border-radius: 5px;
  height: 3rem;
  width: 10rem;
  font-size: 1.1rem;
  font-family: Oswald;
  display: flex;
  align-items: center;
  justify-content: center;

}

.button:hover {
  height: 3rem;
  width: 10rem;
  color: #dba613;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.1);

}


/** LANGUAGE BUTTONS */

.language_box {

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


/** UNDER NAVIGATION */




/** PROFILE MENU */

.profile_menu {
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: absolute;
  top: 3.2rem;
  left: 15px;
  width: 6rem;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
}


.menuItem1,
.menuItem2 {
  cursor: pointer;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: Oswald;
  letter-spacing: 0.2px;
  border: none;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  margin: 1px;
  border-radius: 5px;
}


.menuItem1:hover,
.menuItem2:hover {
  background: #dba613a1;
  color: #000000;
}

/** SUBMENU */

.submenu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 6rem;
  border: 1px solid black;
  border-radius: 5px;
  background: #fff;
  z-index: 1000;
  width: 8rem;
  border: 1px solid black;
  border-radius: 5px;
}


.submenuItem1,
.submenuItem2,
.submenuItem3,
.submenuItem4 {
  cursor: pointer;
  height: 2rem;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: Oswald;
  letter-spacing: 0.2px;
  border: none;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 10px;
  gap: 10px;
  margin: 1px;
  border-radius: 5px;
}




.submenuItem1:hover,
.submenuItem2:hover,
.submenuItem3:hover,
.submenuItem4:hover {
  background: #dba613a1;
  color: #000000;
}


</style>