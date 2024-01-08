<template functional>
  <component :is="props.tag" class="text" :class="[{
              'text--max-lines': props.maxLines || props.lines,
              'text--lines': props.lines,
             }, data.staticClass, data.class, $options.classes(props)]"
             v-on="listeners" v-bind="data.attrs" :style="$options.style(props)">
    <slot/>
  </component>
</template>
<script>
  export default {
    name: 'AppText',
    props: {
      size: {
        type: [String, Number],
        default: 16
      },
      weight: {
        type: [String, Number],
        default: 400
      },
      lineHeight: {
        type: [String, Number],
      },
      letterSpacing: {
        type: [String]
      },
      tag: {
        type: String,
        default: 'p'
      },
      maxLines: {
        type: [String, Number],
      },
      lines: {
        type: [String, Number]
      },
      maxWidth: {
        type: [String, Number],
      },
    },
    classes(props) {
      // const lineHeight = props.lineHeight || props.size;
      return {
        // ['text--size-' + props.size]: true,
        // ['text--line-height-' + lineHeight]: true,
        ['text--weight-' + props.weight]: true
      }
    },
    style(props) {
      let obj = {
        '--font': props.size,
        '--line-height': props.lineHeight || props.size
      };
      if(props.maxLines) {
        obj['--max-lines'] = props.maxLines
      }
      if(props.lines) {
        obj['--max-lines'] = props.lines;
      }
      if(props.maxWidth) {
        obj['--max-width'] = props.maxWidth + 'px';
      }
      if(props.letterSpacing) {
        obj['--letter-spacing'] = props.letterSpacing + 'em';
      }
      return obj;
    }
  }
</script>
<style scoped lang="scss">
  .text {
    font-size: calc(var(--font, 16) / 16 * 1rem);
    font-weight: var(--weight);
    line-height: calc(var(--line-height, 16) / 16 * 1rem);
    letter-spacing: var(--letter-spacing, initial);
    font-family: inherit;
    max-width: var(--max-width, none);
    &--max-lines {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: var(--max-lines);
      max-height: calc(var(--line-height) * var(--max-lines) / 16 * 1rem);
    }
    &--lines {
      height: calc(var(--line-height) * var(--max-lines) / 16 * 1rem);
    }
    @each $size in 400,500,600,700,900 {
      &--weight-#{$size} {
        --weight: #{$size};
      }
    }
  }
</style>
