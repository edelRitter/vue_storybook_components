<template>
  <section id="main-contact">
    <div class="portfolio-contact__txt">
    <p class="common-text__title">/ portfolio-contact</p>
    </div>
    <div class="portfolio-contact__sns">
      <div class="sns-txt">
        <p class="common-text__title"><img src="./assets/img/logo.png" width="100%"></p>
        <div class="portfolio-contact__wrap">
        <div class="ui-social-flex">
          <div
          class="ui-social-icon"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300">
            <p class="twitter"><a href="#"><SvgPathIcon name="twitter_icon" /></a></p>
          </div>
          <div
          class="ui-social-icon"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300">
            <p class="facebook"><a href="https://github.com/edelRitter"><SvgPathIcon name="github_icon" /></a></p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="copyright"><p>© Yohei Isshiki</p></div>
  </section>
</template>

<script>
import SvgPathIcon from '/src/stories/components/ui_icon.vue'

export default {
  name: 'contact',
  data () {
    return {
      iconNames: [
        'twitter_icon',
        'github_icon'
      ]
    }
  },
  components: {
    SvgPathIcon
  }
}
</script>
