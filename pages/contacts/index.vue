<template>
  <div>
    <div class="section__details">
      <div class="section__details-content">
        <AppText
          :size="isMobileMedium ? 28 : isDesktopSmall ? 32 : 42"
          :line-height="isMobileMedium ? 32 : isDesktopSmall ? 42 : 50"
          weight="700"
          class="color-white mb-10"
        >
          {{ $t("contacts") }}
        </AppText>

        <AppBreadcrumbs :list="breadcrumbs" />
      </div>
    </div>
    <div class="container">
      <section class="section">
        <div class="contacts">
          <div
            class="contacts__wrap"
            :class="isMobileMedium ? 'mb-70' : 'mb-110'"
          >
            <div class="contacts__column">
              <BlockWrap
                :count="isMobileSmall ? 1 : 1"
                :offset-y="isMobileSmall ? 30 : 50"
                offset-x="50"
                class="mb-60"
              >
                <div
                  class="contacts__item"
                  v-for="(item, idx) in infos"
                  :key="idx"
                >
                  <AppText
                    :size="isMobileMedium ? 16 : 18"
                    :line-height="isMobileMedium ? 20 : 22"
                    weight="700"
                    class="mb-20"
                    >{{ item.name }}
                  </AppText>

                  <AppText size="16" line-height="24">
                    {{ item.status }}
                  </AppText>

                  <AppText size="14" line-height="24" class="mt-10">
                    <DynamicIcon
                      icon="phone"
                      class="mr-10"
                      size="16"
                      color="#0E7DC2"
                    />
                    {{ item.tell }}
                  </AppText>

                  <AppText size="14" line-height="24" class="mt-10">
                    <DynamicIcon
                      icon="mail"
                      class="mr-10"
                      size="16"
                      color="#0E7DC2"
                    />
                    {{ item.mail }}
                  </AppText>
                </div>
              </BlockWrap>

              <div class="socials">
                <AppText size="14" line-height="24" weight="500" class="mr-20"
                  >{{ $t("weInSocialMedia") }}:</AppText
                >
                <div class="news_socials-wrap">
                  <div class="social-share-btns-instagram">
                    <div class="social-share-btns">
                      <a
                        class="share-btn share-btn-mail"
                        href="https://t.me/gsys_uz"
                        rel="nofollow"
                        target="_blank"
                        title="via email"
                      >
                        <i class="ion-paper-airplane"></i>
                        Telegram
                      </a>
                      <a
                        class="share-btn share-btn-instagram"
                        href="https://www.instagram.com/btechuz.official/"
                        rel="nofollow"
                        target="_blank"
                      >
                        <i class="ion-social-instagram"></i>
                        Instagram
                      </a>
                      <a
                        class="share-btn share-btn-facebook"
                        href=""
                        rel="nofollow"
                        target="_blank"
                      >
                        <i class="ion-social-facebook"></i>
                        Facebook
                      </a>

                      <a
                        class="share-btn share-btn-youtube"
                        href=""
                        rel="nofollow"
                        target="_blank"
                      >
                        <i class="ion-social-youtube"></i>
                        Youtube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="contacts__column">
              <CallBack />
            </div>
          </div>

          <div class="map" style="overflow: hidden; border-radius: 14px">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3523380847173!2d69.25944683269192!3d41.32295116752836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6b6a75727b%3A0x7a8a432ac744f01!2zNzgg0YPQu9C40YbQsCDQkNCx0LTRg9C70LvQsCDQmtCw0LTRi9GA0LgsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1633351852389!5m2!1sru!2s"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "../../components/shared-components/AppBreadcrumbs";
import AppInput from "../../components/shared-components/AppInput";
import AppButton from "../../components/shared-components/AppButton";
import BlockWrap from "../../components/shared-components/BlockWrap";
import CallBack from "../../components/pages/CallBack";
import DynamicIcon from "../../components/shared-components/DynamicIcon";
import { headFunction } from "../../utils/pureFunctions";

export default {
  name: "index",
  components: {
    BlockWrap,
    AppButton,
    AppInput,
    AppBreadcrumbs,
    CallBack,
    DynamicIcon,
  },
  head() {
    const data = {
      title: this.$t("howToGetHere"),
      description: this.$t("howToGetHere"),
    };
    return headFunction(data);
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$t("home"),
          path: "/",
        },
        {
          title: this.$t("contacts"),
          path: "/contacts",
        },
      ],
      infos: [
        {
          name: this.$t("contactName2"),
          status: this.$t("contactStatus2"),
          tell: this.$t("contactTell2"),
          mail: "dilshod.khasanov@gsys.uz",
        },
        {
          name: this.$t("contactName9"),
          status: this.$t("contactStatus9"),
          tell: this.$t("contactTell9"),
          mail: "kozimjon.toyirov@gsys.uz",
        },
        // {
        //   name: this.$t('contactName10'),
        //   status: this.$t('contactStatus10'),
        //   tell: this.$t('contactTell10'),
        //   mail: "hasanov.d@btech.uz",
        // },

        {
          name: this.$t("contactName3"),
          status: this.$t("contactStatus3"),
          tell: this.$t("contactTell3"),
          mail: "mirfozil.miryunusov@gsys.uz",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  &__wrap {
    display: grid;
    grid-template-columns: 6fr 4fr;
    grid-gap: 50px 50px;
  }
}

.socials {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  &__wrap {
    display: flex;
    align-items: center;
  }

  &__item {
    margin: 10px 0 10px 15px;

    &:first-child {
      margin-left: 0;
    }
  }
}

@media (max-width: 991px) {
  .contacts {
    &__wrap {
      grid-template-columns: 1fr;
    }
  }
}

@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
.social-share-btns-container {
  overflow: hidden;
  font-size: 0;
  margin: -30px 0;
  text-align: center;
  width: 100%;
  z-index: 111;
}

.social-share-btns {
  display: inline-block;
  overflow: hidden;
}
.social-share-btns .share-btn {
  float: left;
  margin: 0 5px;
  padding: 8px 16px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  vertical-align: middle;
  -moz-transition: background 0.2s ease-in-out;
  -o-transition: background 0.2s ease-in-out;
  -webkit-transition: background 0.2s ease-in-out;
  transition: background 0.2s ease-in-out;
}
.social-share-btns .share-btn i {
  margin-right: 5px;
  display: inline-block;
  font-size: 18px;
  vertical-align: middle;
}

.share-btn {
  background-color: #95a5a6;
}
.share-btn:hover {
  background-color: #798d8f;
}

.share-btn-instagram {
  background-color: #dd2a7b;
}
.share-btn-instagram:hover {
  background-color: #810d41;
}

.share-btn-facebook {
  background-color: #3b5998;
}
.share-btn-facebook:hover {
  background-color: #2d4373;
}

.share-btn-youtube {
  background-color: #ed001c;
}
.share-btn-youtube:hover {
  background-color: #ba0016;
}

.share-btn-mail {
  background-color: #0088cc;
}
.share-btn-mail:hover {
  background-color: #084b6d;
}
</style>
