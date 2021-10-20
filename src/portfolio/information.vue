<template>
  <section id="main-information">
    <div class="portfolio-information__flex" id="about">
      <div class="portfolio-information__boxes biography">
        <p
        class="portfolio-information__title"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-once="true">
        /the <span class="common-red">noblest</span> pleasure is the joy of understanding
        </p>
        <p class="portfolio-information__biographydesc">Hi, my name is Yohei. Based in Tokyo, Japan. Currently working as a frontend engineer at Rakuten. Avid lover of well-crafted minimalism.<br>(Edel Ritter = german for noble knights)</p>
        <div class="portfolio-information__info">
          <p class="common-red common-size--mid">/ loves</p>
          <p class="portfolio-information__biography-txt">| SOUND : Daft Punk, BT, J.A.M, Jazzanova, Hybrid, Hamauzu Masashi, Quasimode, nujabes, nomak, Danger, Carpenter Brut, Siamés, eli noir, Galdive, Thomas J. Bergersen, Caravan Palace, etc. Currently in love with lo-fi music and good mash-ups
          <br><br>| FILM : Lawrence of Arabia, The Matrix, Memento, Blade Runner, 2001 : A Space Odyssey, Akira, Inception, Brazil, Metropolis, Truman Show, Spirited Away, The Shape of Water, Mad-max: Fury Road, Dune, films from A24, etc.
          <br><br>| HOBBIES : Drawing Illustrations, coding research and practice. Currently hooked to game called arknights.
          </p>
        </div>
        <div class="portfolio-information__info">
          <p class="common-red common-size--mid">/ contact</p>
          <p class="portfolio-information__biography-txt">
            <span>ADDRESS /</span><br>&#12306; 140-0014 Tokyo Shinagawa District<br>
            <span>MAIL /</span><br>yisshiki@gmail.com
          </p>
        </div>
      </div>
      <div class="portfolio-information__boxes social">
        <p
        class="portfolio-information__social-profile"
        data-aos="fade"
        data-aos-duration="800"
        data-aos-delay="300"
        data-aos-once="true">
        <img src="./assets/img/profile.jpg">
        </p>
        <p class="portfolio-information__border"></p>
        <div class="portfolio-information__social-wrap">
          <div class="portfolio-information__social">
            <div
            class="ui-social-icon"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true">
              <p class="twitter"><a href="#"><SvgPathIcon name="twitter_icon" /></a></p>
            </div>
            <div
            class="ui-social-icon"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-once="true">
              <p class="facebook"><a href="https://github.com/edelRitter"><SvgPathIcon name="github_icon" /></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgPathIcon from '../stories/components/ui_icon.vue'

export default {
  name: 'information',
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
