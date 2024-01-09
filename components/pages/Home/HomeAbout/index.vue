<template>
  <section class="section">
    <div class="container">
      <div class="section__wrap">
        <div class="about">
          <div class="about__column">
            <AppText
              :size="isMobileSmall ? 26 : isDesktopSmall ? 32 : 34"
              :line-height="isMobileSmall ? 32 : isDesktopSmall ? 36 : 41"
              weight="700"
              class="about__column-title"
              :class="isMobileSmall ? 'mb-30' : 'mb-50'"
            >
              {{ $t("serviceWarranty") }}
            </AppText>

            <AppText
              size="14"
              line-height="24"
              class="mb-30 color-text"
              v-if="about.sub_title"
            >
              {{ about.sub_title }}
            </AppText>

            <AppText
              size="14"
              line-height="24"
              :class="isMobileSmall ? 'mb-30' : 'mb-50'"
              v-if="about.description"
            >
              {{ about.description }}
            </AppText>

            <nuxt-link :to="localePath('/about')">
              <AppButton>{{ $t("learnMore") }}</AppButton>
            </nuxt-link>
          </div>
          <div class="about__column about__photo">
            <div class="about__photo-container">
              <div class="about__photo-main">
                <img v-if="about.back" :src="`/img/${about.back}`" alt="" />
              </div>

              <div class="about__photo-secondary">
                <img v-if="about.front" :src="`/img/${about.front}`" alt="" />
              </div>

              <div class="about__photo-info">
                <div class="about__photo-info-inner">
                  <AppText
                    :size="isMobileSmall ? 24 : isDesktopSmall ? 28 : 36"
                    :line-height="
                      isMobileMedium ? 28 : isDesktopSmall ? 32 : 43
                    "
                    weight="700"
                    class="mb-5"
                    v-if="about.count"
                    >{{ about.count }} +</AppText
                  >
                  <AppText :size="isDesktopSmall ? 16 : 18" line-height="21">{{
                    $t("perDay")
                  }}</AppText>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomePartners />
      </div>
    </div>
  </section>
</template>

<script>
import "./home-about.scss";
import AppButton from "../../../shared-components/AppButton";
import HomePartners from "../HomePartners/index";

export default {
  name: "HomeAbout",
  components: { HomePartners, AppButton },
  data() {
    return {
      about: {
        sub_title: this.$t("aboutSubtitle"),
        description: this.$t("aboutDescription"),
        count: "200 000",
        front: "a.jpg",
        back: "b.jpg",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
