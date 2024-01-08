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
          {{ $t("aboutUs") }}
        </AppText>

        <AppBreadcrumbs :list="breadcrumbs" />
      </div>
    </div>
    <div class="container">
      <section class="section">
        <div class="block__wrap">
          <div class="block__content">
            <AppText
              :size="isMobileSmall ? 22 : isMobileMedium ? 28 : 34"
              :line-height="isMobileSmall ? 28 : isMobileMedium ? 36 : 41"
              weight="700"
              :class="[
                isMobile ? 'text-center' : '',
                isMobileMedium ? 'mb-30' : 'mb-40',
              ]"
              style="max-width: 610px"
            >
              {{ $t("serviceWarranty") }}
            </AppText>
            <AppText size="14" line-height="24">
              {{ $t("aboutPageText") }}
            </AppText>
          </div>
          <div class="block__photo">
            <img src="/logo/logo.png" alt="" />
          </div>
        </div>
      </section>
    </div>

    <div class="about__statistics section__bg">
      <div class="container">
        <div class="about__statistics-wrap">
          <div
            class="about__statistics-item"
            v-for="(item, index) in statistics"
            :key="index"
          >
            <AppText
              size="34"
              line-height="41"
              weight="700"
              class="mb-10 color-main"
              v-if="item.count"
              >{{ item.count }}</AppText
            >
            <AppText size="14" line-height="24" v-if="item.title">{{
              item.title
            }}</AppText>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <section class="section">
        <div class="advantage mb-70">
          <AppText
            :size="isMobileSmall ? 22 : isMobileMedium ? 28 : 34"
            :line-height="isMobileSmall ? 28 : isMobileMedium ? 36 : 41"
            weight="700"
            :class="[
              isMobile ? 'text-center' : '',
              isMobileMedium ? 'mb-30' : 'mb-40',
            ]"
            >{{ $t("ourAdvantages") }}
          </AppText>

          <div class="advantage__content">
            <AppText size="14" line-height="24">
              {{ $t("ourAdvantagesText") }}
            </AppText>
          </div>
        </div>
        <AppDivider class="mb-70" style="border-color: #e3e3e3; opacity: 0.2" />

        <div class="partners">
          <AppText
            :size="isMobileSmall ? 22 : isMobileMedium ? 28 : 34"
            :line-height="isMobileSmall ? 28 : isMobileMedium ? 36 : 41"
            weight="700"
            :class="[
              isMobile ? 'text-center' : '',
              isMobileMedium ? 'mb-30' : 'mb-50',
            ]"
          >
            {{ $t("ourClients") }}
          </AppText>

          <HomePartners />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "../../components/shared-components/AppBreadcrumbs";
import BlockWrap from "../../components/shared-components/BlockWrap";
import AppDivider from "../../components/shared-components/AppDivider";
import AppSlider from "../../components/shared-components/AppSlider";
import HomePartners from "../../components/pages/Home/HomePartners/index";
import { headFunction } from "../../utils/pureFunctions";

export default {
  name: "index",
  components: {
    HomePartners,
    AppSlider,
    AppDivider,
    BlockWrap,
    AppBreadcrumbs,
  },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$t("home"),
          path: "/",
        },
        {
          title: this.$t("aboutUs"),
          path: "/about",
        },
      ],
      statistics: [
        {
          count: "230 +",
          title: this.$t("satisfiedClients"),
        },
        {
          count: "68 +",
          title: this.$t("perMonth"),
        },
        {
          count: "130 +",
          title: this.$t("companyEmployees"),
        },
        {
          count: "28",
          title: this.$t("branches"),
        },
      ],
    };
  },

  head() {
    const data = {
      title: this.$t("mainBannerTitle"),
      description: this.$t("aboutPageText"),
    };
    return headFunction(data);
  },
};
</script>

<style lang="scss" scoped>
.about {
  &__statistics {
    &-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 30px;
      padding: 50px 0;

      @media (max-width: 800px) {
        padding: 20px 0;
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 450px) {
        padding: 30px 0;
      }
    }
    &-item {
      text-align: center;
    }
  }
}

.advantage {
  &__content {
    column-count: 2;
    column-gap: 120px;
  }
}

@media (max-width: 991px) {
  .advantage__content {
    column-gap: 70px;
  }
}

@media (max-width: 768px) {
  .advantage__content {
    column-count: 1;
  }
}
</style>
