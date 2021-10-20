<template>
  <nav
  id="ui-navlogo"
  class="ui-nav__default"
  :class="{ 'ui-nav__white': !colorChange }">
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
      <div class="ui-social-icon">
        <p><a href="#"><SvgPathIcon name="twitter_icon" /></a></p>
        <p><a href="#"><SvgPathIcon name="github_icon" /></a></p>
      </div>
    </div>
    <div class="ui-navlogo-bg" v-bind:class="{ 'ui-navlogo-active' : isActive }"></div>
  </nav>
</template>

<script>
import SvgPathIcon from '/src/stories/components/ui_icon.vue'

export default {
  name: 'uiLogoNav',
  data: function () {
    return {
      isActive: false,
      colorChange: false,
      lastScrollPosition: 0,
      iconNames: [
        'twitter_icon',
        'facebook_icon'
      ]
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
  },
  components: {
    SvgPathIcon,
  },
}
</script>