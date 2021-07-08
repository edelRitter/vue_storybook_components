<template>
  <div
  class="ui-modal"
  v-if="showModal"
  v-bind:class="{ 'ui-modal-on' : showModal }">
		<div class="ui-modal__bg" v-bind:class="{ 'ui-modal-on' : showModal }">
			<p class="ui-modal-closebtn" @click="hide">
				<span></span>
				<span></span>
			</p>
			<div class="ui-modal-works">
				<div class="ui-modal-img">
					<slot name="modalImgOne"></slot>
					<slot name="modalTitleOne">FreeWork</slot>
				</div>
				<div class="ui-modal-img">
					<slot name="modalImgTwo"></slot>
					<slot name="modalTitleTwo">FreeWork</slot>
				</div>
    	</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'uiModalContent',
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    show () {
      this.showModal = !this.showModal
    },
    hide () {
      this.showModal = false
    }
  }
}
</script>

<style>
.ui-modal {
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: block;
	z-index: 9;
}

.ui-modal-closebtn {
	position: fixed;
  top: 0;
  right: 2vw;
  width: 32px;
	height: 32px;
	cursor: pointer;
	z-index: 11;
}

.ui-modal-closebtn span {
	display: block;
	position: absolute;
	top: 16px;
  left: 4px;
	width: 24px;
	height: 1px;
	background: #ffffff;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}

.ui-modal-closebtn span:last-child {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

.ui-modal-works {
	position: relative;
  box-sizing: border-box;
	overflow: auto;
  padding: 16px;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  color: #333333;
  background: #ffffff;
  z-index: 10;
}

.ui-modal .ui-modal__bg {
	position: absolute;
	display: flex;
  align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color:rgba(0, 0, 0, 0.5);
	z-index: 0;
}
</style>