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