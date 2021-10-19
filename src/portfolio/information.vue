<template>
  <section id="main-information">
    <div class="content-flex" id="about">
      <div class="content-boxes biography">
        <p
        class="content-biographytxt fnt-ttl"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-once="true">
        /the <span class="fntcolor-red">noblest</span> pleasure is the joy of understanding
        </p>
        <p class="content-biographydesc">Hi, my name is Yohei. Based in Tokyo, Japan. Currently working as a frontend engineer at Rakuten. Avid lover of well-crafted minimalism.<br>(Edel Ritter = german for noble knights)</p>
        <div class="content-biography-loves">
          <p class="fntcolor-red fntsize-mid">/ loves</p>
          <p class="fntsize-sml">| SOUND : Daft Punk, BT, J.A.M, Jazzanova, Hybrid, Hamauzu Masashi, Quasimode, nujabes, nomak, jinsang, Thomas J. Bergersen, Caravan Palace, etc. Currently in love with lo-fi music and good mash-ups
          <br><br>| FILM : Lawrence of Arabia, The Matrix, Memento, Blade Runner, 2001 : A Space Odyssey, Akira, Inception, Brazil, Metropolis, Truman Show, Up, Spirited Away, The Shape of Water, Mad-max: Fury Road, etc.
          <br><br>| HOBBIES : Drawing Illustrations, coding research and practice.
          </p>
        </div>
        <div class="content-biography-loves">
          <p class="fntcolor-red fntsize-mid">/ contact</p>
          <p class="fntsize-sml">| ADDRESS : &#12306; 140-0014 Tokyo Shinagawa District<br>
            | TEL : (080) 6138 0541<br>
            | MAIL : yisshiki@gmail.com
          </p>
        </div>
      </div>
      <div class="content-boxes social">
        <p
        class="content-social-profile"
        data-aos="fade"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-once="true">
        <img src="./assets/img/profile.jpg">
        </p>
        <p class="bdr"></p>
        <div class="content-social-wrap">
          <div class="content-social-flex">
            <div
            class="content-social-icn"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true">
              <p class="twitter"><a href="#"><SvgPathIcon name="twitter_icon" /></a></p>
            </div>
            <div
            class="content-social-icn"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true">
              <p class="facebook"><a href="https://github.com/edelRitter"><SvgPathIcon name="github_icon" /></a></p>
            </div>
            <div
            class="content-social-icn"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true">
              <p class="mail"><a href="#"><SvgPathIcon name="mail_icon" /></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgPathIcon from './app_icon.vue'

export default {
  name: 'information',
  data () {
    return {
      iconNames: [
        'twitter_icon',
        'facebook_icon',
        'mail_icon'
      ]
    }
  },
  components: {
    SvgPathIcon
  }
}
</script>
