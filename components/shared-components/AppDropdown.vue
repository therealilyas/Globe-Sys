<template>
  <div class="app-dropdown" :class="{'app-dropdown--focused': focused, 'app-dropdown--opened': isMenuVisible}"
       tabindex="0" v-on="listeners" v-on-click-outside:excludedClass="close">
    <div class="app-dropdown__header" @click="toggle">
      <span>
        {{ title }}
      </span>
    </div>
    <transition name="app-dropdown">
      <ul v-if="isMenuVisible" class="app-dropdown__menu">
        <li v-for="item in list" :key="item[itemValue]" class="app-dropdown__list-item"
            :class="{'app-dropdown__list-item--active': item[itemValue] === value}"
            @click="selectItem(item[itemValue])">
          {{ item[itemName] }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import '../../assets/styles/components/app-dropdown.scss';

export default {
  name: 'AppDropdown',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    list: {
      type: Array,
      required: true
    },
    itemValue: {
      type: String,
      default: 'value'
    },
    itemName: {
      type: String,
      default: 'name'
    },
    placeholder: {
      type: String,
      default: 'Выберите из списка'
    }
  },
  data() {
    return {
      isMenuVisible: false,
      focused: false,
      excludedClass: '',
      listeners: {
        keydown: this.arrowsSelect,
        focusin: () => this.focused = true,
        focusout: () => this.focused = false,
      },
    }
  },
  computed: {
    selectedItem() {
      return this.list.find(item => item[this.itemValue] === this.value) || {};
    },
    title() {
      return this.selectedItem[this.itemName] || this.placeholder;
    }
  },
  methods: {
    toggle() {
      if (this.isMenuVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    close() {
      this.isMenuVisible = false;
    },
    open() {
      this.isMenuVisible = true;
    },
    select(id) {
      this.$emit('input', id);
    },
    selectItem(id) {
      this.select(id);
      this.close();
    },
    arrowsSelect(e) {
      if (!(['ArrowUp', 'ArrowDown'].includes(e.code))) {
        return;
      }

      let idx = this.list.findIndex(item => item[this.itemValue] === this.value);
      if (idx === -1) {
        idx = 0;
      }
      let nextIdx = idx;

      if (e.code === 'ArrowUp') {
        nextIdx = idx - 1;
        if (nextIdx < 0) {
          nextIdx = this.list.length - 1;
        }
      } else if (e.code === 'ArrowDown') {
        nextIdx = idx + 1;
        if (nextIdx >= this.list.length) {
          nextIdx = 0;
        }
      }

      this.select(this.list[nextIdx][this.itemValue]);
      e.preventDefault();
    },
  }
}
</script>
