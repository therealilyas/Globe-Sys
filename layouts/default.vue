<template>
  <div class="page">
    <AppHeader/>
    <div class="page__wrap">
      <nuxt/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
  import Loading from "../components/layouts/default/Loading";
  import {mapMutations} from 'vuex';
  import AppHeader from "../components/layouts/default/app-header/AppHeader";
  import AppFooter from "../components/layouts/default/app-footer/AppFooter";

  export default {
    name: "default",
    components: {AppFooter, AppHeader, Loading},
    methods: {
      ...mapMutations(['setWindowWidth']),
      setWidth() {
        this.setWindowWidth(document.documentElement.clientWidth);
      },
    },
    mounted() {
      this.setWidth();
      window.addEventListener('resize', this.setWidth);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setWidth);
    },
  }
</script>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;

    &__header {
    }

    &__wrap {
      flex-grow: 1;
      min-height: calc(100vh - 551px);
    }

  }

</style>
