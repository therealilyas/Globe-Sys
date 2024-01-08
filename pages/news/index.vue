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
          {{ $t("news") }}
        </AppText>

        <AppBreadcrumbs :list="breadcrumbs" />
      </div>
    </div>
    <div class="container">
      <section class="section">
        <div class="section__top mb-30 align-center">
          <div class="section__top-left">
            <div class="news__filter">
              <AppButton
                theme="secondary"
                class="mr-15"
                v-for="(item, idx) in newsCategories"
                :key="idx"
                v-if="item.name"
                @click="isSelect(idx)"
                :class="{ active: item.name === selectedCategory }"
                >{{ item.name }}</AppButton
              >
            </div>
          </div>

          <div class="section__top-right">
            <AppInput
              v-model="search"
              :placeholder="this.$t('search')"
              maxlength="250"
              hide-details
            >
              <template #append>
                <img
                  @click="close"
                  v-if="search"
                  src="../../assets/icons/close.svg"
                  alt=""
                  style="cursor: pointer"
                />
                <img v-else src="../../assets/icons/search.svg" alt="" />
              </template>
            </AppInput>
          </div>
        </div>

        <div class="section__wrap">
          <div class="news__wrap mb-50" v-if="searchNewsItems.length">
            <NewsCard
              v-for="(item, index) in searchNewsItems"
              :key="index"
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
            >
            </NewsCard>
          </div>

          <div class="pagination-flex">
            <AppPagination
              v-if="pagination.current_page || pagination.last_page"
              v-model="pagination.current_page"
              :pages="pagination.last_page"
            />
            <div class="show-list">
              <AppDropdown
                v-if="pagination.per_page || perPageList"
                v-model="pagination.per_page"
                itemName="text"
                itemValue="value"
                :list="perPageList"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "../../components/shared-components/AppBreadcrumbs";
import AppInput from "../../components/shared-components/AppInput";
import DynamicIcon from "../../components/shared-components/DynamicIcon";
import AppButton from "../../components/shared-components/AppButton";
import NewsCard from "../../components/pages/News/NewsCard";
import AppPagination from "../../components/shared-components/AppPagination";
import AppDropdown from "../../components/shared-components/AppDropdown";
import { headFunction } from "@/utils/pureFunctions";

const PAGINATION = {
  current_page: 1,
  last_page: 1,
  per_page: 9,
  total: 9,
};

export default {
  name: "index",
  components: {
    AppDropdown,
    AppPagination,
    NewsCard,
    AppButton,
    DynamicIcon,
    AppInput,
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
          title: this.$t("news"),
          path: "/news",
        },
      ],
      newsItems: [
        {
          id: 1,
          image_url: `https://www.trevenacross.co.uk/wp-content/uploads/2019/03/Job-Vacancy.jpg`,
          category_name: this.$t("category_name"),
          create_at: "26.07.2023",
          title: this.$t("newsTitle"),
          description: this.$t("newsDesc"),
          response: this.$t("response"),
          sub_response: this.$t("sub_response"),
          sub_response2: this.$t("sub_response2"),
          sub_response3: this.$t("sub_response3"),
          sub_response4: this.$t("sub_response4"),
          sub_response5: this.$t("sub_response5"),
          require: this.$t("require"),
          sub_require: this.$t("sub_require"),
          sub_require2: this.$t("sub_require2"),
          sub_require3: this.$t("sub_require3"),
          sub_require4: this.$t("sub_require4"),
          sub_require5: this.$t("sub_require5"),
          condition: this.$t("condition"),
          sub_condition: this.$t("sub_condition"),
          sub_condition2: this.$t("sub_condition2"),
          sub_condition3: this.$t("sub_condition3"),
          sub_condition4: this.$t("sub_condition4"),
          sub_condition5: this.$t("sub_condition5"),
          slug: "slug_1",
        },
        {
          id: 2,
          image_url: `https://neiros.ru/img/kpi/chto-takoe-kpi.png`,
          category_name: this.$t("category_name"),
          create_at: "03.07.2023",
          title: this.$t("newsTitle2"),
          description: this.$t("newsDesc2"),
          slug: "slug_2",
        },
        {
          id: 3,
          image_url: `https://legodesk.com/wp-content/uploads/2021/07/Difference-Between-Billing-and-InvoiceCover-Photo-1024x576.png`,
          category_name: this.$t("category_name"),
          create_at: "24.06.2023",
          title: this.$t("newsTitle3"),
          description: this.$t("newsDesc3"),
          slug: "slug_3",
        },
      ],
      newsCategories: [
        {
          name: this.$t("all"),
        },
        {
          name: this.$t("category_name"),
        },
        {
          name: this.$t("category_name2"),
        },
        {
          name: this.$t("category_name3"),
        },
      ],
      search: "",
      selectedCategory: this.$t("all"),
      pagination: { ...PAGINATION },
      perPageList: [
        {
          text: 3,
          value: "3",
        },
        {
          text: 6,
          value: "6",
        },
        {
          text: 9,
          value: "9",
        },
        {
          text: 12,
          value: "12",
        },
        {
          text: 15,
          value: "15",
        },
      ],
    };
  },
  computed: {
    searchNewsItems() {
      if (this.search.trim().length > 0) {
        let result = [];

        result = this.newsItems.filter((newsItem) =>
          newsItem.title
            .toLowerCase()
            .includes(this.search.trim().toLowerCase())
        );
        if (!result.length) {
          result = this.newsItems.filter((newsItem) =>
            newsItem.description
              .toLowerCase()
              .includes(this.search.trim().toLowerCase())
          );
        }
        return result;
      }

      let category = this.selectedCategory;

      if (category === this.$t("all")) {
        return this.newsItems;
      } else {
        return this.newsItems.filter(function (newsItem) {
          return newsItem.category_name === category;
        });
      }

      return this.newsItems;
    },
  },
  head() {
    const data = {
      title: this.$t("news"),
      description: this.$t("news"),
    };
    return headFunction(data);
  },
  methods: {
    close() {
      this.search = "";
    },
    isSelect(val) {
      if (val === 0) {
        return (this.selectedCategory = this.$t("all"));
      } else if (val === 1) {
        return (this.selectedCategory = this.$t("category_name"));
      } else if (val === 2) {
        return (this.selectedCategory = this.$t("category_name2"));
      } else if (val === 3) {
        return (this.selectedCategory = this.$t("category_name3"));
      }
    },
  },
  mounted() {
    localStorage.setItem("devs", JSON.stringify(this.newsItems));
  },
};
</script>

<style lang="scss" scoped>
.active {
  background-color: #0e7dc2 !important;
  color: #ffffff !important;
}

.news__filter {
  display: flex;
  flex-wrap: wrap;

  button {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

.pagination-flex {
  display: flex;
  justify-content: space-between;
}

.news__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
</style>
