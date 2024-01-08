<template>
  <hr class="divider" :class="classes" :style="styles" />
</template>

<script>
  export default {
    name: "AppDivider",
    props: {
      vertical: Boolean,
      width: [String, Number],
      height: [String, Number],
    },
    computed: {
      classes(){
        return [{ "divider--vertical": this.vertical }];
      },
      styles(){
        return {
          width: `${this.width}rem`,
          height: `${this.height}rem`
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
