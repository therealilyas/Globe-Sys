<template>
  <section class="main-banner" style="background-image: url('https://erepublic.brightspotcdn.com/dims4/default/f58867e/2147483647/strip/true/crop/961x501+0+64/resize/840x438!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2F60%2Fdd%2F89dc5502b4e6e4ceacae32eff97f%2Fcybersecurity-shutterstock-1027230877.JPG')">
    <div class="container">
      <div class="main-banner__wrap">
        <div class="main-banner__content">
          <AppText
            tag="h1"
            :size="isMobileSmall ? 28 : isDesktopSmall ? 36 : 42"
            :line-height="isMobileSmall ? 32 : isDesktopSmall ? 42 : 50"
            weight="700"
            class="mb-40"
          >
            {{ $t("mainBannerTitle") }}
          </AppText>

          <AppText
            size="16"
            weight="500"
            :line-height="isMobileSmall ? 22 : 26"
            class="mb-50"
          >
            {{ $t("mainBannerSubtitle") }}
          </AppText>

          <div class="main-banner__flex">
            <AppButton class="mr-40" @click="$refs.dialog.open()">
              {{ $t("tracking") }}
            </AppButton>
            <nuxt-link
              class="main-banner__link"
              :to="this.localePath('/contacts')"
              >{{ $t("feedback") }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="main-banner__bottom">
      <div class="container">
        <div class="main-banner__details">
          <div
            class="main-banner__details-item"
            v-for="(item, index) in statistics"
            :key="index"
          >
            <AppText
              :size="isMobileSmall ? 22 : isDesktopSmall ? 28 : 34"
              :line-height="isMobileSmall ? 28 : isDesktopSmall ? 36 : 41"
              weight="700"
              class="mb-10"
              v-if="item.count"
              >{{ item.count }}
            </AppText>
            <AppText size="14" line-height="24" v-if="item.title">{{
              item.title
            }}</AppText>
          </div>
        </div>
      </div>
    </div>

    <CallToActionDialog ref="dialog" />
  </section>
</template>

<script>
import "./home-banner.scss";
import BlockWrap from "../../../shared-components/BlockWrap";
import AppButton from "../../../shared-components/AppButton";
import CallToActionDialog from "../../News/CallToActionDialog";

export default {
  name: "HomeBanner",
  components: { CallToActionDialog, AppButton, BlockWrap },
  data() {
    return {
      statistics: [
     
        {
          count: "20 +",
          title: this.$t("perMonth"),
        },
        {
          count: "20 +",
          title: this.$t("companyEmployees"),
        },
        {
          count: "15",
          title: this.$t("branches"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
