<template>
  <section id="main-title">
    <div class="title-hero">
      <div
      class="title-caption fnt-ttl"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-delay="2400"
      data-aos-once="true">
        <span>/ welcome </span><span>/ to </span><span>/ the /</span><br /><span>/ ROUND </span><span>/ TABLE /</span>
      </div>
      <div class="title-logo"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'landing'
}
</script>

<style scoped>
#main-title .title-hero {
	background: url("./assets/img/daftpunk.png") no-repeat;
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: 100vh;
}

#main-title .title-caption {
	position: absolute;
	box-sizing: border-box;
	top: 40%;
	width: 75%;
	padding: 2%;
	color: #fff;
	font-size: 52px;
	font-family: 'Playfair Display', serif;
	z-index: 2;
}

#main-title .title-logo {
	position: absolute;
	box-sizing: border-box;
	top: 25%;
	right: 10%;
	width: 25%;
	height: 50vh;
	background: url('./assets/img/logo_design.png') no-repeat;
	background-size: contain;
	background-position: center center;
	z-index: 1;
}

@media only screen and (max-width: 620px) {
	#main-title .title-logo {
		width: 100%;
		right: 0;
		height: 25vh;
		top: 25%;
	}
	#main-title .title-caption {
		font-size: 28px;
		width: 96%;
		margin: 0 0 0 2%;
		top: 50%;
	}
}
</style>