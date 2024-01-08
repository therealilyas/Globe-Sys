<template>
  <nuxt-link :to="localePath(path)" class="news-card">
    <div class="news-card__photo">
      <div class="news-card__photo-inner">
        <img v-if="photo" v-lazy="photo" alt="">
      </div>
      <div class="news__type">
        <AppText size="12" line-height="14" max-lines="1" letter-spacing="0.1">
          {{ type }}
        </AppText>
      </div>
    </div>

    <div class="news-card__content" :class="isDesktopSmall ? 'pa-20' : 'pa-40'">
      <AppText class="color-text mb-20" size="12" line-height="14" max-lines="1">
        {{ dateMaker(date) }}
      </AppText>
      <AppText class="mb-20" size="22" line-height="26" weight="700" max-lines="3">
        {{ title }}
      </AppText>
      <AppText class="color-text" size="16" line-height="26" max-lines="2">
        {{ text }}
      </AppText>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: "NewsCard",
    props: {
      path: String,
      photo: String,
      type: String,
      date: String,
      title: String,
      text: String,
    },
    methods: {
      dateMaker(date) {
        return date.slice(0, 10).split("-").reverse().join(".")
      }
    }
  }
</script>

<style lang="scss" scoped>
  .news {
    &-card {
      border-radius: 14px;
      overflow: hidden;
      transition: .3s;
      display: block;

      &:hover {
        .news-card__photo {
          img {
            transform: scale(1.1);

          }
        }
      }

      &__photo {
        width: 100%;
        position: relative;

        &-inner {
          height: 272px;
          width: 100%;
          overflow: hidden;
        }

        img {
          width: 100%;
          max-height: 272px;
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          transition: .3s;
        }
      }

      &__content {
        border: 1px solid var(--color-border);
        border-radius: 0 0 14px 14px;
        border-top: none;
        min-height: 265px;
      }

    }

    &__type {
      position: absolute;
      top: calc(100% - 17px);
      background-color: var(--color-main);
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      left: 40px;
    }
  }

  @media (max-width: 991px) {
    .news__type {
      top: unset;
      left: 20px;
      bottom: 20px;
    }
  }

  @media (max-width: 550px) {
    .news-card__content {
      min-height: unset;
    }
  }

  @media (max-width: 450px) {

    .news-card__photo-inner {
      height: 210px;
    }
  }

</style>
