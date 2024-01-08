<template>
  <section
    class="home-categories"
    style="
      background-image: url('https://www.ssstc.com/media/tz_portfolio/article/cache/60c9c04229416tz_portfolio_1623834690-146_o.jpg');
    "
  >
    <div
      class="home-categories__item"
      v-for="(item, idx) in others.slice(0, 4)"
      :key="idx"
    >
      <div class="home-categories__content">
        <AppText
          v-if="item.order"
          size="22"
          line-height="26"
          max-lines="1"
          :class="isMobileMedium ? 'mb-15' : 'mb-30'"
        >
          {{ isDigit(item.order) }}
        </AppText>

        <AppText
          v-if="item.title"
          size="22"
          line-height="26"
          weight="700"
          :class="isMobileMedium ? 'mb-15' : 'mb-30'"
        >
          {{ item.title }}
        </AppText>

        <AppText
          v-if="item.description"
          size="16"
          line-height="26"
          class="home-categories__text"
          max-lines="4"
          :class="isMobileMedium ? 'mb-20' : 'mb-40'"
        >
          {{ item.description }}
        </AppText>

        <nuxt-link :to="item.url" class="home-categories__link">
          <DynamicIcon icon="arrow-right" :size="isMobileMedium ? 16 : 22" />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import "./home-category.scss";
import DynamicIcon from "../../../shared-components/DynamicIcon";

export default {
  name: "HomeCategories",
  components: { DynamicIcon },
  data() {
    return {
      others: [
        {
          order: "01",
          title: this.$t("aboutTitle"),
          description: this.$t("aboutDescription"),
          url: this.localePath("/news"),
        },
        {
          order: "02",
          title: this.$t("aboutTitle2"),
          description: this.$t("aboutDescription2"),
          url: this.localePath("/coverage-area"),
        },
        {
          order: "03",
          title: this.$t("aboutTitle3"),
          description: this.$t("aboutDescription3"),
          url: this.localePath("/about"),
        },
        {
          order: "04",
          title: this.$t("aboutTitle4"),
          description: this.$t("aboutDescription4"),
          url: this.localePath("/contacts"),
        },
      ],
    };
  },
  methods: {
    isDigit(val) {
      val = `${val}`;
      if (val.length > 1) {
        return val;
      } else {
        return 0 + val;
      }
    },
  },
};
</script>

<style scoped></style>
