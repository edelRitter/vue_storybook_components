<template>
  <nav
  id="ui-navlogo-logo"
  class="nav-default"
  :class="{ 'nav-white': !colorChange }">
    <div class="ui-navlogo-design"><a href="#"></a></div>
    <div class="ui-navlogo-hamburger">
      <div class="ui-navlogo-btn" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
    <div class="ui-navlogo-wrap" v-bind:class="{ 'ui-navlogo-active' : isActive }">
      <div class="ui-navlogo-content">
        <p class="ui-navlogo-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }"><span class="mini_txt">01 </span>/ about</a></p>
        <p class="ui-navlogo-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }"><span class="mini_txt">02 </span>/ works</a></p>
        <p class="ui-navlogo-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }"><span class="mini_txt">03 </span>/ contact</a></p>
      </div>
      <div class="cnt-social-icn">
        <p><a href="#">icon here</a></p>
        <p><a href="#">icon here</a></p>
      </div>
    </div>
    <div class="ui-navlogo-bg" v-bind:class="{ 'ui-navlogo-active' : isActive }"></div>
  </nav>
</template>

<script>
export default {
  name: 'uiLogoNav',
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