<template>
  <div id="edelRitter">
    <uiLoader></uiLoader>
    <uiLogoNav></uiLogoNav>
    <landing></landing>
    <information></information>
    <contents></contents>
    <contact></contact>
  </div>
</template>

<script>
import uiLogoNav from '/src/stories/components/ui_component_navigation_logo.vue'
import uiLoader from '/src/stories/components/ui_component_loader.vue'

import landing from '/src/portfolio/landing.vue'
import information from '/src/portfolio/information.vue'
import contents from '/src/portfolio/contents.vue'
import contact from '/src/portfolio/contact.vue'

export default {
  name: 'App',
  components: {
    'uiLogoNav': uiLogoNav,
    'uiLoader': uiLoader,
    'landing': landing,
    'information': information,
    'contents': contents,
    'contact': contact
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&family=Playfair+Display&display=swap');

@font-face {
    font-family: Font Awesome\ 5 Free;
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: url(./src/fonts/fa/fa-regular-400.eot);
    src: url(./src/fonts/fa/fa-regular-400.eot?#iefix) format("embedded-opentype"), url(./src/fonts/fa/fa-regular-400.woff2) format("woff2"), url(./src/fonts/fa/fa-regular-400.woff) format("woff"), url(./src/fonts/fa/fa-regular-400.ttf) format("truetype"), url(./src/fonts/fa/fa-regular-400.svg#fontawesome) format("svg")
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
