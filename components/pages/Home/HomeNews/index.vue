<template>
  <section class="section">
    <div class="container">
      <div class="section__top mb-40">
        <div class="section__top-left">
          <AppText
            tag="h2"
            :size="isMobile ? 24 : isMobile ? 28 : 34"
            :line-height="isMobile ? 28 : isMobile ? 32 : 41"
            weight="700"
            :class="isMobile ? 'mb-10' : 'mb-30'"
          >
            {{ $t("latestNews") }}
          </AppText>
        </div>
        <div class="section__top-right">
          <nuxt-link :to="localePath('news')">
            <AppButton>{{ $t("learnMore") }}</AppButton>
          </nuxt-link>
        </div>
      </div>

      <div class="section__wrap">
        <AppSlider :list="lastNews" slide-count="3">
          <template #default="{ item }">
            <NewsCard
              v-if="
                item.image_url ||
                item.category_name ||
                item.create_at ||
                item.title ||
                item.description ||
                item.slug
              "
              :photo="item.image_url"
              :type="item.category_name"
              :date="item.create_at"
              :title="item.title"
              :text="item.description"
              :path="`/news/${item.slug}`"
            />
          </template>
        </AppSlider>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "../../../shared-components/AppButton";
import AppSlider from "../../../shared-components/AppSlider";
import NewsCard from "../../News/NewsCard";

export default {
  name: "HomeNews",
  components: { NewsCard, AppSlider, AppButton },
  data() {
    return {
      lastNews: [
        {
          id: 1,
          image_url: `/img/depositphotos.jpg`,
          category_name: this.$t("category_name"),
          create_at: "26.07.2023",
          title: this.$t("newsTitle"),
          description: this.$t("newsDesc"),
          slug: "slug_1",
        },
        {
          id: 2,
          image_url: `/img/kpi.jpg`,
          category_name: this.$t("category_name"),
          create_at: "03.07.2023",
          title: this.$t("newsTitle2"),
          description: this.$t("newsDesc2"),
          slug: "slug_2",
        },
        {
          id: 3,
          image_url: `/img/billing.jpg`,
          category_name: this.$t("category_name"),
          create_at: "24.06.2023",
          title: this.$t("newsTitle3"),
          description: this.$t("newsDesc3"),
          slug: "slug_3",
        },
        {
          id: 4,
          image_url: `/img/depositphotos.jpg`,
          category_name: this.$t("category_name"),
          create_at: "26.07.2023",
          title: this.$t("newsTitle"),
          description: this.$t("newsDesc"),
          slug: "slug_1",
        },
        {
          id: 5,
          image_url: `/img/kpi.jpg`,
          category_name: this.$t("category_name"),
          create_at: "03.07.2023",
          title: this.$t("newsTitle2"),
          description: this.$t("newsDesc2"),
          slug: "slug_2",
        },
        {
          id: 6,
          image_url: `/img/billing.jpg`,
          category_name: this.$t("category_name"),
          create_at: "24.06.2023",
          title: this.$t("newsTitle3"),
          description: this.$t("newsDesc3"),
          slug: "slug_3",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
