<template>
  <section id="main-content">
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
          <p class="fntsize-sml">| ADDRESS : &#12306; 140-0011 Tokyo Shinagawa District<br>
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
  name: 'SecondContent',
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

<style scoped>
#main-content {
	width: 100%;
}

#main-content .content-flex {
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -moz-flex;
	display: -webkit-flex;
	display: flex;
	align-items: stretch;
}

#main-content .content-flex .content-boxes {
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	box-sizing: border-box;
}

#main-content .content-flex .content-boxes.biography {
	box-sizing: border-box;
	width: 50%;
	padding: 80px 2%;
	background: #f4f4f4;
}

#main-content .content-flex .content-boxes.social {
	box-sizing: border-box;
	width: 50%;
	padding: 0 0 80px 0;
}

#main-content .content-flex .content-boxes .content-biographytxt {
	letter-spacing: 0.2em;
	font-family: 'Playfair Display', serif;
}

#main-content .content-flex .content-boxes .content-biographydesc {
	margin: 80px 0 0 0;
	font-size: 16px;
	line-height: 1.8em;
}

#main-content .content-flex .content-boxes .content-biography-loves {
	display: flex;
	margin: 40px 0 0 0;
	line-height: 1.8em;
}

#main-content .content-flex .content-boxes .content-biography-loves p {
	width: 80%;
}

#main-content .content-flex .content-boxes .content-biography-loves p:first-child {
	width: 20%;
	margin: -2px 0 0 0;
	font-family: 'Oswald', 'arial', serif;
}

#main-content .content-social-profile img {
	width: 100%;
	height: auto;
}

#main-content .bdr {
	clear: both;
	position: relative;
	width: 10%;
	height: 1px;
	margin: 80px auto;
	background: #333;
}

#main-content .content-flex .content-boxes .content-social-flex {
	display: flex;
	justify-content: center;
}

#main-content .content-flex .content-social-wrap {
	position: relative;
	overflow: hidden;
}

#main-content .content-flex .content-social-wrap .content-social-icn p {
	margin: 0 20px;
}

@media only screen and (max-width: 620px) {
	#main-content .content-flex .content-boxes {
		font-size: 18px;
	}
	#main-content .content-flex {
		flex-direction: column;
	}
	#main-content .content-flex .content-boxes.biography, #main-content .content-flex .content-boxes.social {
		width: 100%;
	}
	#main-content .content-flex .content-boxes.biography {
		padding: 40px 2%;
	}
	#main-content .bdr {
		margin: 40px auto;
	}
	#main-content .content-flex .content-boxes .content-biographydesc, #main-content .content-flex .content-boxes .content-biography-loves {
		margin: 40px 0 0 0;
	}
}
</style>