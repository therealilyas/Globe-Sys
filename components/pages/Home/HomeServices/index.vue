<template>
  <section class="section section__bg">
    <div class="container">
      <div class="section__top mb-40">
        <div class="section__top-left">
          <AppText
            tag="h2"
            :size="isMobile ? 24 : isMobile ? 28 : 34"
            :line-height="isMobile ? 28 : isMobile ? 32 : 41"
            weight="700"
            class="mb-30"
          >
            {{ $t("services") }}:
            <span class="color-main">{{ $t("serviceCompany") }}</span>
          </AppText>

          <AppText size="16" line-height="26" class="color-text">
            {{ $t("aboutDescription") }}
          </AppText>
        </div>
        <!--        <div class="section__top-right">-->
        <!--          <nuxt-link :to="localePath('tariffs-and-services')">-->
        <!--            <AppButton>{{ $t('learnMore') }}</AppButton>-->
        <!--          </nuxt-link>-->
        <!--        </div>-->
      </div>

      <div class="section__wrap">
        <AppSlider :list="items" slide-count="3">
          <template #default="{ item }">
            <div class="services__card">
              <div class="services__card-bg">
                <img
                  v-if="item.image_url"
                  :src="`${item.image_url}`"
                  alt=""
                />
              </div>

              <div class="services__card-content">
                <div class="services__card-icon mb-30">
                  <img
                    v-if="item.icon_url"
                    :src="`/icons/${item.icon_url}.svg`"
                    alt=""
                  />
                </div>

                <AppText
                  v-if="item.title"
                  size="22"
                  line-height="26"
                  weight="700"
                  max-lines="2"
                  class="mb-20"
                >
                  {{ item.title }}</AppText
                >

                <AppText
                  v-if="item.description"
                  size="16"
                  line-height="26"
                  class="color-text"
                  max-lines="5"
                >
                  {{ item.description }}</AppText
                >

                <AppText
                  v-if="item.category_name"
                  size="12"
                  line-height="14"
                  weight="700"
                  max-lines="1"
                  class="color-main mta"
                >
                  {{ item.category_name }}
                </AppText>
              </div>
            </div>
          </template>
        </AppSlider>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "../../../shared-components/AppButton";
import AppSlider from "../../../shared-components/AppSlider";
import "./home-services.scss";

export default {
  name: "HomeServices",
  components: { AppSlider, AppButton },
  data() {
    return {
      items: [
        {
          image_url: "https://mms.businesswire.com/media/20230725542632/en/1848761/5/Cajera_Pivot_Family_-_Cajera_Plus_Cajera_Pivot_IV%2C_Cajera_Pivot_II-III_-_small_for_businesswire.jpg",
        
          title: this.$t("doorToDoor"),
          description: this.$t("trainingFact3"),
          category_name: this.$t("express"),
        },
        {
          image_url: "https://www.kofrimpong.com/wp-content/uploads/2018/12/atm-monitoring-dashboard.png",
          
          title: this.$t("doorToDoor2"),
          description: this.$t("trainingFact2"),
          category_name: this.$t("standard"),
        },
        {
          image_url: "https://www.datacardshop.com/images/thumbnails/0/775/700/CE840_SideOpen_1140X1083.jpg",
         
          title: this.$t("doorToDoor3"),
          description: this.$t("trainingFact3"),
          category_name: this.$t("carGo"),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
