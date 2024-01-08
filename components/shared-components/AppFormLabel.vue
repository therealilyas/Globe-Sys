<template>
    <div class="form-label" :class="[{'form-label--focused': focused}, $attrs.class]" :style="{...$attrs.style, ...style}">
      <app-text class="form-label__title mb-10" size="12" line-height="16">{{ title }}</app-text>
      <div class="form-label__wrap">
        <component :value="value" :is="component" v-bind="$attrs" v-on="$listeners"
                   @input="$emit('input', $event)" @focus="focused = true" @blur="focused = false"/>
      </div>
    </div>
</template>
<script>
  import AppText from './AppText';
  import AppDropdown from './AppDropdown';
  import AppInput from './AppInput';
  import '../../assets/styles/components/app-form-label.scss';
  import AppDoubleInput from './AppDoubleInput';
  export default {
    name: 'AppFormLabel',
    components: { AppDoubleInput, AppText, AppDropdown, AppInput },
    props: {
      value: {
        type: [String, Number, Object],
        default: ''
      },
      title: {
        type: [String, Number],
        default: ''
      },
      componentType: {
        type: String,
        default: 'input'
      },
      width: {
        type: [String, Number]
      }
    },
    inheritAttrs: false,
    data() {
      return {
        focused: false
      }
    },
    computed: {
      style() {
        const style = {};
        if(this.width) {
          style['--width'] = this.width + 'px';
        }
        return style;
      },
      component() {
        switch(this.componentType) {
          case 'dropdown':
            return 'AppDropdown';
          case 'app-double-input':
            return 'app-double-input';
          default:
            return 'app-input';
        }
      }
    }
  }
</script>
