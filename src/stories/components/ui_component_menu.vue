<template>
  <div class="fs-menu-inner">
    <p class="pt-16 pb-16 ta-center">logo/design area</p>
    <ul class="fs-menu-list">
      <li><a href="">Return to top, other content</a></li>
    </ul>
    <ul class="fs-menu-list">
      <li><a href="">other page link</a></li>
      <li class="pt-28 fz-14"><a href="">other page link</a></li>
      <li class="pt-28 fz-14"><a href="">other page link</a></li>
      <li class="pt-28 fz-14"><a href="">other page link</a></li>
    </ul>
    <ul class="fs-menu-list">
      <li><a href="">other page link</a></li>
      <li class="pt-28 fz-14"><a href="">other page link</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'uiFloatingMenu'
}
</script>

<style scoped>
/* module css - replace for your environment */
.ta-center {
  text-align: center;
}
.pt-16 {
  padding-top: 16px;
}
.pt-28 {
  padding-top: 28px;
}
.pb-16 {
  padding-bottom: 16px;
}
.fz-14 {
  font-size: 14px;
}

.fs-menu-inner {
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
  z-index: 9999;
  background: #ffffff;
}
.fs-menu-list {
	box-sizing: border-box;
	margin: 0 24px;
	padding: 28px 0;
	border-bottom: 1px solid #D1D1D1;
}
.fs-menu-list li a {
	font-size: 14px;
	line-height: 16px;
	font-weight: bold;
	color: #333333;
}
</style>