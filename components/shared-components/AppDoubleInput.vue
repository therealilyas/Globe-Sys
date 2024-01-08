<template>
  <div :class="$attrs.class" class="double-input">
    <app-input class="double-input__item" :value="value.first" v-bind="$attrs" v-on="listeners" :placeholder="placeholder[0]"
               @input="inputFirst"/>
    <app-input class="double-input__item" :value="value.second" v-bind="$attrs" v-on="listeners" :placeholder="placeholder[1]"
               @input="inputSecond"/>
  </div>
</template>
<script>
  import AppInput from './AppInput';
  export default {
    name: 'DoubleInput',
    components: { AppInput },
    props: {
      value: {
        type: Object,
        default: () => ({})
      },
      placeholder: {
        type: Array,
        default: () => ['','']
      },
    },
    computed: {
      listeners() {
        let listeners = {...this.$listeners};
        delete listeners.input;
        return listeners;
      }
    },
    methods: {
      inputFirst(e) {
        this.$emit('input', {second: this.value.start || '', first: e});
      },
      inputSecond(e) {
        this.$emit('input', {first: this.value.first || '', second: e});
      },
    }
  }
</script>
<style lang="scss">
  .double-input {
    display: flex;
    align-items: center;
    &__item {
      width: calc(50% - 7.5px);
      &:first-child {
        margin-right: 15px;
      }
    }
  }
</style>
