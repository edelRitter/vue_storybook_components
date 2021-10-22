<template>
  <div id="edelRitter">
    <uiLoader></uiLoader>
    <uiLogoNav></uiLogoNav>
    <Hero></Hero>
    <Info></Info>
    <Works></Works>
    <Contact></Contact>
  </div>
</template>

<script>
import uiLogoNav from './stories/components/ui_component_navigation_logo.vue'
import uiLoader from './stories/components/ui_component_loader.vue'
import Hero from './portfolio/landing.vue'
import Info from './portfolio/information.vue'
import Works from './portfolio/contents.vue'
import Contact from './portfolio/contact.vue'
export default {
  name: 'App',
  components: {
    'uiLogoNav': uiLogoNav,
    'uiLoader': uiLoader,
    'Hero': Hero,
    'Info': Info,
    'Works': Works,
    'Contact': Contact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Playfair+Display&display=swap');
@font-face {
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: url(../fonts/fa/fa-regular-400.eot);
    src: url(../fonts/fa/fa-regular-400.eot?#iefix) format("embedded-opentype"), url(../fonts/fa/fa-regular-400.woff2) format("woff2"), url(../fonts/fa/fa-regular-400.woff) format("woff"), url(../fonts/fa/fa-regular-400.ttf) format("truetype"), url(../fonts/fa/fa-regular-400.svg#fontawesome) format("svg")
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>