<template>
  <div ref="wrap" class="modal" v-if="visible">
    <div class="modal__content">
      <button class="modal__close" @click="closeIcon">
        <dynamic-icon icon="close" :size="isMobileSmall ? 12 : 18"/>
      </button>

      <slot/>

    </div>
    <div class="overlay" v-if="visible" @click="close"></div>
  </div>
</template>

<script>

import "../../assets/styles/components/app-modal.scss"
import DynamicIcon from "./DynamicIcon";

export default {
  name: "AppModal",
  props: {
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      visible: this.value
    }
  },
  watch: {
    value(val) {
      if (val) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  components: {DynamicIcon},
  methods: {
    open() {
      this.visible = true
      this.$nextTick(() => {
        const {wrap} = this.$refs
        setTimeout(() => {
          wrap.classList.add('visible')
        }, 50)
      })
    },
    closeIcon(){
      const {wrap} = this.$refs
      if (wrap) wrap.classList.remove('visible')
      setTimeout(() => {
        this.visible = false;
        this.$emit('close', false)
      }, 200)
    },
    close() {
      const {wrap} = this.$refs
      if (wrap) wrap.classList.remove('visible')
      setTimeout(() => {
        this.visible = false;
        this.$emit('input', false)
      }, 200)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
