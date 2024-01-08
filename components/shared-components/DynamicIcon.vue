<template>
  <component :is="importedIcon" class="svg-icon" v-bind="$attrs" v-on="$listeners" :style="styles"/>
</template>

<script>
  export default {
    name: 'DynamicIcon',
    props: {
      icon: {
        type: String
      },
      size: {
        type: [Number, String],
        default: 24
      },
    },
    computed: {
      importedIcon() {
        return () => import(`@/assets/icons/${this.icon}.svg?inline`);
      },
      styles() {
        return {
          width: this.size + 'px',
          height: this.size + 'px',
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .svg-icon {
    *,
    [fill] {
      fill: currentColor;
    }

    &[stroke] *,
    [stroke-width],
    [stroke] {
      fill: none;
      stroke: currentColor;
    }
    [fill]:not([fill=none]) { // If there is problems with svg remove this
      fill: currentColor;
    }
  }
</style>
