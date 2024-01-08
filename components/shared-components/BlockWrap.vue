<template>
  <component class="bw" :class="className" :is="tag" :v-bind="$attrs" :style="style">
    <div class="bw__cn">
      <slot></slot>
    </div>
  </component>
</template>
<script>
  export default {
    name: 'BlockWrap',
    props: {
      offsetX: {
        type: [Number, String],
        default: 16
      },
      offsetY: {
        type: [Number, String],
      },
      count: {
        type: [Number, String],
        default: 5
      },
      overflow: {
        type: Boolean
      },
      widthAuto: {
        type: Boolean
      },
      modStyle: {
        type: String
      },
      tag: {
        type: String,
        default: 'div'
      },
    },
    computed: {
      style() {
        return  {
          '--offset-x': this.offsetX + 'px',
          '--offset-y': (this.offsetY || this.offsetX) + 'px',
          '--count': this.count,
        }
      },
      className() {
        return {
          'bw--overflow': this.overflow,
          'bw--width-auto': this.widthAuto,
          ...this.modStyle
        }
      }
    }
  }
</script>
<style>
.bw {
  --offset: 10px;
  --count: 2;
}
.bw > .bw__cn {
  display: flex;
  flex-wrap: wrap;
  margin: calc(var(--offset-y) / -2) calc(var(--offset-x) / -2);
}
.bw > .bw__cn > * {
  max-width: calc(100% - var(--offset-x));
  margin: calc(var(--offset-y) / 2) calc(var(--offset-x) / 2);
}
.bw:not(.bw--width-auto) > .bw__cn > * {
  width: calc(100% / var(--count) - var(--offset-x));
  max-width: 100%;
}
.bw--overflow {
  overflow: hidden;
}
.bw.grow > .bw__cn > * {
  flex-grow: 1;
}

.bw.justify-between > .bw__cn {
  justify-content: space-between;
}
.bw.justify-center > .bw__cn {
  justify-content: center;
}
.bw.flex-nowrap > .bw__cn {
  flex-wrap: nowrap;
}
.bw.align-center > .bw__cn {
  align-items: center;
}
.bw.align-start > .bw__cn {
  align-items: flex-start;
}
.bw.align-end > .bw__cn {
  align-items: flex-end;
}

</style>
