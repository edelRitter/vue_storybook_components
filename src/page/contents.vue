<template>
  <section id="main-portfolio">
    <div id="content-project"></div>
    <p class="select-work"><span class="fnt-ttl">/</span><span class="fnt-ttl">selected<br />content-project</span></p>
    <div class="content-project-wrap">
      <div
        class="fnt-ttl content-project-intro-cnt-ttl"
        data-aos="fade-zoom-in"
        data-aos-duration="1200"
        data-aos-delay="300">
          <span @click="openModal">/01</span>
      </div>
      <div class="content-project-intro">
        <div class="content-project-flex">
          <div class="content-project-intro-bg">
            <p
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="300"
            class="content-project-one">
            </p>
          </div>
          <div
          class="content-project-desc-wrap"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="300">
            <div class="content-project-desc">
              <p class="content-project-desc-ttl">/ 2018 <br class="sp-nodisplay" />Japan Photography <br class="sp-nodisplay" />Showcase</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies justo eros, ac efficitur lacus eleifend eu. Cras rhoncus lorem ipsum, non sodales diam blandit vitae. Nullam auctor pharetra elit, quis tincidunt tellus venenatis at. Praesent molestie accumsan blandit. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import uiModalContent from '../components/ui_component_modal_content.vue'

export default {
  name: 'contents',
  components: {
    uiModalContent
  },
  methods: {
    toggler () {
      this.isActive = !this.isActive
    },
    openModal () {
      this.$refs.modal.show()
    }
  }
}
</script>

<style scoped>
#main-portfolio {
	color: #fff;
	background: #333;
	z-index: 3;
}

#main-portfolio .select-work {
	clear: both;
	box-sizing: border-box;
	width: 100%;
	text-align: center;
	margin: 120px auto;
	padding: 0 2%;
}

#main-portfolio .select-work span {
	letter-spacing: 0.4em;
	font-family: 'Playfair Display', serif;
}

#main-portfolio .content-project-wrap {
	position: relative;
}

#main-portfolio .content-project-intro {
	position: relative;
	box-sizing: border-box;
	width: 100%;
}

#main-portfolio .content-project-intro:after {
	content: '';
	display: block;
	height: 1px;
	position: absolute;
	width: 10%;
	bottom: -40px;
	margin: 0px auto;
	left: 0;
	right: 0;
	background: #c72e53;
}

#main-portfolio .content-project-intro:last-child:after {
	content: '';
	display: none;
}

#main-portfolio .content-project-intro-cnt-ttl {
	position: absolute;
	top: 25%;
	text-indent: 6%;
	width: 100%;
	text-align: center;
	font-size: 20vw;
	color: transparent;
	-webkit-text-stroke: 0.2vw #c72e53;
	text-stroke: 0.2vw #c72e53;
	letter-spacing: 0.6em;
	font-family: 'Oswald', 'arial', serif;
	z-index: 1;
}

#main-portfolio .content-project-intro-cnt-ttl span {
	cursor: pointer;
}

#main-portfolio .content-project-flex {
	clear: both;
	display: flex;
}

#main-portfolio .content-project-flex>div {
	clear: both;
	position: relative;
	box-sizing: border-box;
	width: 50%;
}

#main-portfolio .content-project-flex .content-project-desc-wrap {
	position: relative;
	box-sizing: border-box;
	padding: 0 2%;
	color: #fff;
}

#main-portfolio .content-project-flex .content-project-desc-wrap .content-project-desc-ttl {
	margin: 0 0 40px 0;
	font-size: 4vw;
	line-height: 1.2em;
	font-family: 'Playfair Display', serif;
}

#main-portfolio .content-project-flex .content-project-intro-bg p.content-project-one {
	background: url("./assets/img/work-top.png") no-repeat;
	background-size: cover;
	background-position: bottom center;
	width: 100%;
	height: 100vh;
}

#main-portfolio .content-project-bdr {
	height: 1px;
	width: 25%;
	margin: 40px auto;
	background: #c72e53;
}
</style>