<template>
  <nav 
    class="ui-floatingnavi"
    v-on:scroll.native="handleScroll">
    <div class="ui-floatingnavi__menu">
      <div class="ui-floatingnavi__menuContainer">
        <ul class="ui-floatingnavi__menuList">
          <li class="ui-floatingnavi__menuItem"><a href="">link area</a></li>
          <li class="ui-floatingnavi__menuItem"><a href="">link area</a></li>
          <li class="ui-floatingnavi__menuItem"><a href="">link</a></li>
          <li class="ui-floatingnavi__menuItem"><a href="">link area</a></li>
          <li class="ui-floatingnavi__menuItem"><a href="">link</a></li>
          <li class="ui-floatingnavi__menuToggle"></li>
        </ul>
        <div id="ui-menuToggle" v-on:click="toggler" v-bind:class="{ 'nav_active' : isActive }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="ui-menu" v-bind:class="{ 'nav_active' : isActive }">
          <div id="ui-menu-bg" v-on:click="toggler" v-bind:class="{ 'nav_active' : isActive }">
            <p id="ui-menu-close"></p>
          </div>
          <uiFloatingMenu />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import uiFloatingMenu from './ui_component_menu.vue'

export default {
  name: 'uiFloatingNav',
  components: {
    uiFloatingMenu
  },
  data: function () {
    return {
      isActive: false,
      scrollPosition: null
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggler: function () {
      this.isActive = !this.isActive
    },
    handleScroll: function () {
      const nav = document.querySelector('.ui-floatingnavi');
      console.log(nav.offsetTop);
      console.log(window.scrollY);
      if (window.scrollY > nav.offsetTop) {
        nav.classList.add('ui-is-floating');
      }
      else {
        nav.classList.remove('ui-is-floating');
      }
    }
  }
}
</script>

<style scoped>
.ui-floatingnavi {
	/* 
  position: relative;
  visibility: hidden;
  height: 0
  */
}

.ui-floatingnavi.ui-is-floating {
	visibility: visible;
	height: 56px;
}

.ui-floatingnavi .ui-floatingnavi__menu {
	position: fixed;
	z-index: 110;
	top: 0;
	left: 0;
	box-shadow: 0 1.25px 6px rgba(0, 0, 0, .2)
}

.ui-floatingnavi__menuContainer {
	display: flex;
	align-items: stretch;
	height: 56px
}

.ui-floatingnavi__menuList {
	overflow-x: scroll;
	overflow-y: hidden;
	-webkit-overflow-scrolling: touch;
	display: flex;
	align-items: stretch;
	height: 100%;
	padding: 0;
}

.ui-floatingnavi__menuItem {
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	margin: 0;
}

.ui-floatingnavi__menuItem.-active {
	margin-top: 2px;
	border-bottom: 2px solid #333;
	font-weight: 700
}

.ui-floatingnavi__menuLink, .ui-floatingnavi__menuText {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 12px;
	margin: 0;
	font-size: 12px
}

.ui-floatingnavi a.ui-floatingnavi__menuLink {
	color: #333
}

.ui-floatingnavi.-floating {
	height: auto;
	visibility: visible;
	opacity: 1;
}

.ui-floatingnavi__menu {
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 48px;
	background: #F7F7F7;
	z-index: 99;
}

.ui-floatingnavi__menuList {
	width: 100%;
	margin: -6px 48px 0px 0;
	z-index: 999;
}

.ui-floatingnavi__menuItem {
	position: relative;
	padding: 0 16px;
}

.ui-floatingnavi__menuItem a {
	display: block;
	font-size: 14px;
	text-align: center;
	margin: 0 auto;
	font-weight: bold;
	color: #333333;
	font-family: 'RakutenSans-bold', arial, sans-serif;
}

.ui-floatingnavi__menuItem a.ui-active::after {
	content: '';
	display: block;
	position: absolute;
	bottom: 3px;
	left: 0;
	width: 100%;
	height: 2px;
	background: #000000;
}

.ui-floatingnavi__menuTrigger {
	width: 48px;
	height: 48px;
}

#ui-menuToggle {
	position: absolute;
	top: 14px;
	right: 0px;
	width: 48px;
}

#ui-menuToggle span {
	position: relative;
	display: block;
	width: 18px;
	height: 2px;
	margin: 2px 0 4px 16px;
	background: #333333;
	z-index: 999;
	transform-origin: 4px 0px;
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;
}

#ui-menuToggle span:first-child {
	transform-origin: 0% 0%;
}

#ui-menuToggle span:nth-last-child(2) {
	transform-origin: 0% 100%;
}

#ui-menu {
	position: fixed;
	width: 85%;
	top: 0;
	right: 0;
	margin: 0;
	height: 100%;
	list-style-type: none;
	-webkit-font-smoothing: antialiased;
	font-family: 'RakutenSans-bold', arial, sans-serif;
	transform-origin: 0% 0%;
	transform: translate(100%, 0);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
	background: #ffffff;
	z-index: 99999;
}

#ui-menu-bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	visibility: hidden;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 998;
}

#ui-menu.nav_active {
	transform: none;
}

#ui-menu.nav_active #ui-menu-bg {
	opacity: 1;
	visibility: visible;
}

#ui-menu-close {
	position: absolute;
	left: 2%;
	top: 4px;
	width: 40px;
	height: 40px;
	z-index: 999;
}

#ui-menu-close:before, #ui-menu-close:after {
	content: '';
	position: absolute;
	width: 20px;
	height: 2px;
	background-color: white;
	top: 16px;
	box-shadow: 0 0 2px 0 #ccc;
}

#ui-menu-close:before {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	transform: rotate(45deg);
	left: 8px;
}

#ui-menu-close:after {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	transform: rotate(-45deg);
	right: 12px;
}
</style>