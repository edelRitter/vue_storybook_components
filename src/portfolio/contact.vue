<template>
  <section id="main-contact">
    <div class="content-contact-txt">
    <p class="fnt-ttl">/ content-contact</p>
    </div>
    <div class="content-contact-sns">
      <div class="sns-txt">
        <p class="fnt-ttl"><img src="./assets/img/logo.png" width="100%"></p>
        <div class="content-contact-wrap">
        <div class="cnt-social-flex">
          <div
          class="cnt-social-icn"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300">
            <p class="twitter"><a href="#"><SvgPathIcon name="twitter_icon" /></a></p>
          </div>
          <div
          class="cnt-social-icn"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300">
            <p class="facebook"><a href="https://github.com/edelRitter"><SvgPathIcon name="github_icon" /></a></p>
          </div>
          <div
          class="cnt-social-icn"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300">
            <p class="mail"><a href="#"><SvgPathIcon name="mail_icon" /></a></p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div class="copyright"><p>© Yohei Isshiki</p></div>
  </section>
</template>

<script>
import SvgPathIcon from './app_icon.vue'

export default {
  name: 'contact',
  components: {
    SvgPathIcon
  }
}
</script>
