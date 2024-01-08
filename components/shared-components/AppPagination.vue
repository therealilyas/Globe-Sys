<template>
  <div class="app-pagination">
    <button class="app-pagination__button app-pagination__button--prev"
            :class="{'app-pagination__button--disabled': isPrevDisabled}" @click="onPrevClick">
<!--      <app-icon icon="chevron-left"/>-->
<!--      <img src="~/assets/icons/arrow-left.svg" />-->
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13L1 7L7 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button v-for="page in pageRange" :key="page" class="app-pagination__button"
            :class="{'app-pagination__button--selected': page === value}" @click="onPageClick(page)">
      {{ page }}
    </button>
    <button class="app-pagination__button app-pagination__button--next"
            :class="{'app-pagination__button--disabled': isNextDisabled}" @click="onNextClick">
<!--      <app-icon icon="chevron-right"/>-->
<!--      <img class="arrow-right" src="~/assets/icons/arrow-right.svg" />-->
      <svg class="arrow-right" width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 13L1 7L7 1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
import '../../assets/styles/components/app-pagination.scss'

export default {
  name: 'AppPagination',
  props: {
    pages: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      default: 5
    },
  },
  computed: {
    isPrevDisabled() {
      return this.value <= 1
    },
    isNextDisabled() {
      return this.value >= this.pages
    },
    pageRange() {
      let length = this.length
      const min = 1

      if (length > this.pages) length = this.pages;

      let start = this.value - Math.floor(length / 2);
      start = Math.max(start, min);
      start = Math.min(start, min + this.pages - length);

      return Array.from({length}, (el, i) => start + i);
    }
  },
  methods: {
    onPageClick(page) {
      this.$emit('input', page)
    },
    onPrevClick() {
      let page = this.value
      if (page <= 1) return
      this.onPageClick(--page)
    },
    onNextClick() {
      let page= this.value
      if (page >= this.pages) return
      this.onPageClick(++page)
    }
  }
}
</script>

<style scoped>
.arrow-right {
  transform: rotate(180deg);
}
button.app-pagination__button.app-pagination__button--next:hover {
  background-color: #fff;
}
button.app-pagination__button.app-pagination__button--prev:hover {
  background-color: #fff;
}
</style>
