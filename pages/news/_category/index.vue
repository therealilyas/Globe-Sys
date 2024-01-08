<template>
  <div>
    <div class="section__details">
      <div class="section__details-content">
        <AppText :size="isMobile ? 28 : isMobile ? 32 : 42" line-height="50" weight="700" class="color-white mb-10">
          {{ $t('news') }}
        </AppText>
        <AppBreadcrumbs :list="breadcrumbs"/>
      </div>
    </div>
    <div class="container">
      <section class="section">
        <div class="section__top mb-30">
          <div class="news__inner-wrap">
            <AppText
              v-if="newsItems.title"
              :size="isMobile ? 24 : isMobile ? 28 : 34"
              line-height="isMobile ? 28 : isMobile ? 34 : 41" weight="700" class="mb-30">
              {{ newsItems.title }}
            </AppText>

            <div class="news__inner-top">
              <AppButton
                v-if="newsItems.category_name"
                height="30" sides="20" radius="6" weight="500" style="pointer-events: none" class="mr-15">
                {{ newsItems.category_name }}
              </AppButton>

              <AppText
                v-if="newsItems.create_at"
                class="news__date color-text" size="12" line-height="14" weight="600">/ {{ dateMaker(newsItems.create_at) }}</AppText>
            </div>
          </div>
        </div>
        <div class="section__wrap">

          <div class="news__inner-photo mb-50">
            <img v-if="newsItems.image_url" v-lazy="newsItems.image_url" src="" alt="">
          </div>

          <div class="content__text">
            <h4 v-if="newsItems.description" v-html="newsItems.description"></h4>
          </div>

          <div class="content__text">
            <h5 v-if="newsItems.response" v-html="newsItems.response"></h5>
          </div>
          <div class="content__text">
            <p v-if="newsItems.sub_response" v-html="newsItems.sub_response"></p>
            <p v-if="newsItems.sub_response2" v-html="newsItems.sub_response2"></p>
            <p v-if="newsItems.sub_response3" v-html="newsItems.sub_response3"></p>
            <p v-if="newsItems.sub_response4" v-html="newsItems.sub_response4"></p>
            <p v-if="newsItems.sub_response5" v-html="newsItems.sub_response5"></p>
          </div>

          <div class="content__text">
            <h5 v-if="newsItems.require" v-html="newsItems.require"></h5>
          </div>
          <div class="content__text">
            <p v-if="newsItems.sub_require" v-html="newsItems.sub_require"></p>
            <p v-if="newsItems.sub_require2" v-html="newsItems.sub_require2"></p>
            <p v-if="newsItems.sub_require3" v-html="newsItems.sub_require3"></p>
            <p v-if="newsItems.sub_require4" v-html="newsItems.sub_require4"></p>
            <p v-if="newsItems.sub_require5" v-html="newsItems.sub_require5"></p>
          </div>

          <div class="content__text">
            <h5 v-if="newsItems.condition" v-html="newsItems.condition"></h5>
          </div>
          <div class="content__text">
            <p v-if="newsItems.sub_condition" v-html="newsItems.sub_condition"></p>
            <p v-if="newsItems.sub_condition2" v-html="newsItems.sub_condition2"></p>
            <p v-if="newsItems.sub_condition3" v-html="newsItems.sub_condition3"></p>
            <p v-if="newsItems.sub_condition4" v-html="newsItems.sub_condition4"></p>
            <p v-if="newsItems.sub_condition5" v-html="newsItems.sub_condition5"></p>
          </div>

          <AppDivider style="border-color: var(--color-border); opacity: .5" class="mt-50"/>

          <div class="news__inner-bottom">
            <nuxt-link :to="localePath('/news')" class="color-main">{{ $t('comeBack') }}</nuxt-link>

            <div class="news__socials">
              <AppText size="14" line-height="24" weight="500" class="mr-5">{{ $t('shareTheNews') }}:</AppText>

              <div class="news__socials-wrap">
                <!--                <div class="news__socials-item"></div>-->

                <ShareNetwork
                  class="news__socials-item"
                  network="telegram"
                  :url="$route.fullPath"
                  v-if="newsItems.title || newsItems.description"
                  :title="newsItems.title"
                  :description="newsItems.description ? newsItems.description : '' "
                >
                  <img src="/img/png/telegram.png" alt="">
                </ShareNetwork>

                <ShareNetwork
                  class="news__socials-item"
                  network="facebook"
                  :url="$route.fullPath"
                  v-if="newsItems.title || newsItems.description"
                  :title="newsItems.title"
                  :description=" newsItems.description ? newsItems.description : '' "
                >
                  <img src="/img/png/instagram.png" alt="">
                </ShareNetwork>

                <ShareNetwork
                  class="news__socials-item"
                  network="facebook"
                  :url="$route.fullPath"
                  v-if="newsItems.title || newsItems.description"
                  :title="newsItems.title"
                  :description=" newsItems.description ? newsItems.description : '' "
                >
                  <img src="/img/png/facebook.png" alt="">
                </ShareNetwork>

                <ShareNetwork
                  class="news__socials-item"
                  network="twitter"
                  :url="$route.fullPath"
                  v-if="newsItems.title || newsItems.description"
                  :title="newsItems.title"
                  :description=" newsItems.description ? newsItems.description : '' "
                >
                  <img src="/img/png/twitter.png" alt="">
                </ShareNetwork>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import DynamicIcon from "../../../components/shared-components/DynamicIcon";
  import AppBreadcrumbs from "../../../components/shared-components/AppBreadcrumbs";
  import AppButton from "../../../components/shared-components/AppButton";
  import AppInput from "../../../components/shared-components/AppInput";
  import AppDivider from "../../../components/shared-components/AppDivider";
  import {headFunction} from "@/utils/pureFunctions";

  export default {
    name: "index",
    components: {AppDivider, AppInput, AppButton, AppBreadcrumbs, DynamicIcon},
    data() {
      return {
        breadcrumbs: [
          {
            title: this.$t('home'),
            path: '/'
          },
          {
            title: this.$t('news'),
            path: this.localePath('/news')
          },
          {
            title: this.$t('moreDetails'),
            path: this.localePath('/news')
          },
        ],
        newsItems: {},
      }
    },
    head(){
      return headFunction(this.newsItems)
    },
    methods: {
      dateMaker(date) {
        return date.slice(0, 10).split("-").reverse().join(".")
      },
    },
    mounted() {
      let news = JSON.parse(localStorage.getItem('devs'));
      let slug = this.$route.params.category.slice(5) - 1;
      this.newsItems = news[slug];
    }
  }
</script>

<style lang="scss" scoped>
  .news {
    &__inner {
      &-top {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }

      &-wrap {
        max-width: 810px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
      }

      &-photo {
        width: 100%;
        max-height: 540px;
        height: 100%;
        overflow: hidden;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &-bottom {
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        grid-gap: 20px;
      }
    }

    &__socials {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      grid-gap: 20px;

      &-wrap {
        display: flex;
        align-items: center;
      }

      &-item {
        margin-right: 14px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .content__text {
    font-size: 14px;
    line-height: 24px;
    font-family: "Roboto", sans-serif;

    p {
      font-size: 14px;
      margin-bottom: 20px;
    }

    b {
      display: inline-flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 15px;
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }

    strong {
      display: inline-flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 14px;;
      line-height: 1.3;

      &:first-child {
        margin-top: 0;
      }
    }

    ul {
      padding-left: 20px;
      margin-top: 24px;

      li {
        list-style-type: disc;
        font-size: 14px;
        line-height: 1.4;
        margin-bottom: 24px;
      }
    }

    h4 {
      font-weight: bold;
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 20px;
    }

    h5 {
      font-size: 18px;
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }
</style>
