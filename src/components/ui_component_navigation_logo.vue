<template>
  <nav
  id="ui-nav-logo"
  class="nav-default"
  :class="{ 'nav-white': !colorChange }">
    <div class="ui-nav-design"><a href="http://edelritter.github.io/portfolio"></a></div>
    <div class="ui-nav-hamburger">
      <div class="ui-nav-btn" v-on:click="toggler" v-bind:class="{ 'ui-nav-active' : isActive }">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="ui-nav-wrap" v-bind:class="{ 'ui-nav-active' : isActive }">
      <div class="ui-nav-content">
        <p class="ui-nav-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-nav-active' : isActive }"><span class="mini_txt">01 </span>/ about</a></p>
        <p class="ui-nav-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-nav-active' : isActive }"><span class="mini_txt">02 </span>/ works</a></p>
        <p class="ui-nav-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-nav-active' : isActive }"><span class="mini_txt">03 </span>/ contact</a></p>
      </div>
      <div class="cnt-social-icn">
        <p><a href="#">icon here</a></p>
        <p><a href="#">icon here</a></p>
      </div>
    </div>
    <div class="ui-nav-bg" v-bind:class="{ 'ui-nav-active' : isActive }"></div>
  </nav>
</template>

<script>
export default {
  name: 'uilogoNav',
  data: function () {
    return {
      isActive: false,
      colorChange: false,
      lastScrollPosition: 0
    }
  },
  methods: {
    toggler: function () {
      this.isActive = !this.isActive
    },
    handleScroll: function () {
      let currentScrollPosition = window.pageYOffset
      let sections = document.getElementById('app').getElementsByTagName('section')
      if ((currentScrollPosition < sections[0].clientHeight || currentScrollPosition > sections[2].offsetTop) && (currentScrollPosition < sections[3].offsetTop)) {
        this.colorChange = false
      } else {
        this.colorChange = true
      }
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
#ui-nav-logo {
	position: fixed;
	top: 0;
	right: 0;
	width: 100%;
	/* 
	-webkit-animation: slide_in_top 0.8s cubic-bezier(0.770, 0.000, 0.175, 1.000) both 2s;
	animation: slide_in_top 0.8s cubic-bezier(0.770, 0.000, 0.175, 1.000) both 2s;
	*/
	z-index: 999;
}

#ui-nav-logo .ui-nav-design {
	background: url('./assets/img/logo.png') no-repeat;
	background-size: 114px 18px;
	width: 114px;
	height: 18px;
	margin: 11px 0 11px 2%;
	-webkit-transition: .25s ease-in-out;
	-moz-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
}

#ui-nav-logo .ui-nav-logo a {
	display: block;
	width: 100%;
	height: 100%;
	cursor: pointer;
}

#ui-nav-logo #ui-nav-menu {
	background: #cccccc;
	padding: 4px;
}

.ui-nav-hamburger {
	position: absolute;
	top: 0;
	right: 0;
	width: 44px;
	height: 40px;
	padding: 4px;
}

.ui-nav-hamburger {
	width: 44px;
	height: 40px;
	padding: 4px;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: .5s ease-in-out;
	-moz-transition: .5s ease-in-out;
	-o-transition: .5s ease-in-out;
	transition: .5s ease-in-out;
	cursor: pointer;
	z-index: 2;
}

.ui-nav-hamburger>div {
	display: block;
	width: 100%;
	height: 100%;
}

.ui-nav-hamburger span {
	display: block;
	position: absolute;
	height: 1px;
	width: 28px;
	background: #333;
	opacity: 1;
	left: 8px;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: .25s ease-in-out;
	-moz-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
}

.ui-nav-hamburger span:nth-child(1) {
	top: 12px;
}

.ui-nav-hamburger span:nth-child(2), .ui-nav-hamburger span:nth-child(3) {
	top: 19px;
}

.ui-nav-hamburger span:nth-child(4) {
	top: 26px;
}

.ui-nav-hamburger .ui-nav-active span:nth-child(1) {
	top: 18px;
	width: 0%;
	left: 50%;
}

.ui-nav-hamburger .ui-nav-active span:nth-child(2) {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}

.ui-nav-hamburger .ui-nav-active span:nth-child(3) {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.ui-nav-hamburger .ui-nav-active span:nth-child(4) {
	top: 18px;
	width: 0%;
	left: 50%;
}

.ui-nav-wrap {
	position: fixed;
	top: 0;
	right: 0;
	width: 50%;
	height: 100vh;
	font-size: 14px;
	background: #ffffff;
	-webkit-transform: translatex(100%);
	-moz-transform: translatex(100%);
	-ms-transform: translatex(100%);
	-o-transform: translatex(100%);
	transform: translatex(100%);
	-webkit-transition: transform 0.6s;
	-moz-transition: transform 0.6s;
	-ms-transition: transform 0.6s;
	-o-transition: transform 0.6s;
	transition: transform 0.6s;
	z-index: 1;
}

.ui-nav-wrap.ui-nav-active {
	-webkit-transform: translatex(0);
	-moz-transform: translatex(0);
	-ms-transform: translatex(0);
	-o-transform: translatex(0);
	transform: translatex(0);
}

.ui-nav-bg {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: #333333;
	visibility: hidden;
	transition: visibility 1s ease, opacity 0.3s linear;
	opacity: 0;
}

.ui-nav-bg.ui-nav-active {
	visibility: visible;
	opacity: 0.5;
}

.ui-nav-wrap .ui-nav-content {
	position: relative;
	overflow: hidden;
	text-align: left;
	padding: 40px 0 20px 0;
}

.ui-nav-wrap .ui-nav-content .ui-nav-list {
	position: relative;
	width: 85%;
	padding: 20px 0;
	margin: 20px auto;
	font-size: 4vw;
	font-family: 'Playfair Display', serif;
	border-bottom: 1px solid #333;
}

.ui-nav-wrap .ui-nav-content .ui-nav-list a {
	display: block;
	width: 100%;
	height: auto;
}

.ui-nav-wrap .ui-nav-content .ui-nav-list a:hover {
	color: #c72e53;
}

.ui-nav-wrap .ui-nav-content .ui-nav-list a:after {
	content: '';
	position: absolute;
	display: block;
	left: 0;
	bottom: -2px;
	width: 0;
	height: 2px;
	background: #c72e53;
	-webkit-transition: all 1s;
	transition: all 1s;
}

.ui-nav-wrap .ui-nav-content .ui-nav-list a:hover:after {
	width: 100%;
}

.ui-nav-wrap .ui-nav-content .ui-nav-list span {
	font-size: 2vw;
}

.ui-nav-wrap .cnt-social-icn p {
	margin: 2% 7%;
}

#ui-nav-logo.nav-white .ui-nav-logo {
	background: url('./assets/img/logo_white.png') no-repeat;
	background-size: 114px 18px;
}

#ui-nav-logo.nav-white .ui-nav-hamburger span {
	background: #333333;
}

#ui-nav-logo.nav-white .ui-nav-hamburger .ui-nav-active span {
	background: #333;
}

@media only screen and (max-width: 620px) {
	.ui-nav-wrap .ui-nav-content .ui-nav-list span {
		font-size: 4vw;
	}
	.ui-nav-wrap .cnt-social-icn p {
		margin: 25% auto;
	}
}

@-webkit-keyframes slide_in_top {
	0% {
		-webkit-transform: translateY(-500px);
		transform: translateY(-500px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes slide_in_top {
	0% {
		-webkit-transform: translateY(-500px);
		transform: translateY(-500px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}
</style>