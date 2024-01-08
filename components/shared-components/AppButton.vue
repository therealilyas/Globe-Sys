<template>
  <component class="a-btn" :class="className" :style="style" :type="type" :is="tag" v-bind="$attrs" v-on="listeners" :disabled="disabled">
    <slot/>
  </component>
</template>

<script>
  import '../../assets/styles/components/app-button.scss';
  export default {
    name: 'AppButton',
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      sides: {
        type: [Number, String],
        default: 30
      },
      height: {
        type: [Number, String],
        default: 50
      },
      width: {
        type: [Number, String]
      },
      radius: {
        type: [Number, String],
        default: 10
      },
      fontSize: {
        type: [Number, String],
        default: 14
      },
      weight: {
        type: [Number, String],
        default: 600
      },
      theme: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean
      },
      textColor: {
        type: String
      },
      outline: {
        type: Boolean
      },
      noFocus: {
        type: Boolean
      },
      type: {
        type: String,
        default: 'button'
      },
      shadow: {
        type: String,
      },
      flex: {
        type: Boolean
      }
    },
    computed: {
      className() {
        const name = 'a-btn--';
        const className = [
          name + 'sd-' + this.sides,
          name + 'rd-' + this.radius,
          name + 'fn-' + this.fontSize,
          name + 'wg-' + this.weight,
          name + 'hg-' + this.height,
          name + 'th-' + this.theme,
        ];
        if(this.flex) {
          className.push(name + 'fl');
        }
        if(this.width) {
          className.push(name + 'wd');
        }
        if(this.outline) {
          className.push(name + 'line');
        }
        if(this.textColor) {
          className.push(name + 'cl-' + this.textColor)
        }
        if(this.noFocus) {
          className.push(name + 'nf');
        }
        if(this.shadow) {
          className.push(name + 'shadow-' + this.shadow);
        }
        return className;
      },
      style() {
        const styles = {};
        if(this.width) {
          styles['--wd'] = this.width + 'px';
        }
        return styles;
      },
      listeners() {
        if(this.disabled) return {};

        return {
          click: (event) => this.$emit('click', event)
        }
      }
    }
  }
</script>
