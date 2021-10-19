<template>
  <section>
    <div class="ui-works-wrap">
      <div class="ui-works-intro-cnt-ttl">
        <span @click="openModal">/01 click to open</span>
      </div>
      <transition name="fade">
        <uiModalContent ref="modal">
          <template v-slot:modalTitleOne>test 1</template>
          <template v-slot:modalImgOne>test 1</template>
          <template v-slot:modalTitleTwo>test 1</template>
          <template v-slot:modalImgTwo>test 1</template>
        </uiModalContent>
      </transition>
    </div>
  </section>
</template>

<script>
import uiModalContent from './ui_component_modal_content.vue'

export default {
  name: 'uiModalComponent',
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>