<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item" v-for="(item, idx) in list" :key="idx">
      <nuxt-link class="breadcrumbs__link" :to="item.path">{{ item.title }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "AppBreadcrumbs",
    props: {
      list: {
        type: Array,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>

  .breadcrumbs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    &__item {
      color: white;
      opacity: .5;
      font-size: 14px;
      line-height: 24px;
      position: relative;
      margin-right: 20px;
      transition: .3s;

      &:hover {
        opacity: 1;
      }

      &::before {
        content: '/';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + 7px);
      }

      &:last-child {
        opacity: 1;
        pointer-events: none;
        margin-right: 0;

        &::before {
          content: '';
        }
      }

    }

    &__link {
      font-size: 14px;
    }
  }

</style>
