<template>
  <section id="portfolio">
    <div class="ui-works-wrap">
      <div class="ui-works-intro-cnt-ttl">
          <span @click="openModal">/01 click to open</span>
        </div>
      <uiModalContent ref="modal">
        <template v-slot:modalTitleOne>test 1</template>
        <template v-slot:modalImgOne>test 1</template>
        <template v-slot:modalTitleTwo>test 1</template>
        <template v-slot:modalImgTwo>test 1</template>
      </uiModalContent>
    </div>
  </section>
</template>

<style scoped>

</style>

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
