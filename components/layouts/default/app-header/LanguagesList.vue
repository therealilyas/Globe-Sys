<template>
  <div class="languages">
    <DynamicIcon icon="globe" size="18" style="color: #AAA3BF"/>
    <app-dropdown
      @input="changeLanguage"
      :list="langs"
      item-value="id"
      v-model="language"
      item-name="lang"
      :placeholder="$i18n.locale"
    />
  </div>
</template>

<script>
  import "./header.scss"
  import AppDropdown from "../../../../components/shared-components/AppDropdown";
  import DynamicIcon from "../../../shared-components/DynamicIcon";

  export default {
    name: 'LanguagesList',
    components: {DynamicIcon, AppDropdown},
    data() {
      return {
        list: [
          {
            lang: "En",
            id: "en"
          },
          {
            lang: "Ру",
            id: "ru"
          },
          {
            lang: "Uz",
            id: "uz"
          }
        ],
        language: 'uz'
      }
    },
    methods: {
      changeLanguage(lang) {
        this.$router.push(this.switchLocalePath(lang));
        this.language = lang
      }
    },
    computed: {
      langs() {
        return this.list.filter(item => item.lang !== this.$i18n.locale)
      }
    },
    mounted() {
      this.changeLanguage();
    }
  }
</script>
<style lang="scss">
  .languages {
    display: flex;
    align-items: center;

    .app-dropdown {
      width: auto;

      &__header {
        width: auto;
        border: none;
        border-radius: 6px;

        span {
          text-align: center;
          width: auto;
        }

        &::after {
          display: none;
        }
      }

      &__menu {
        text-align: center;
        padding: 5px;
        font-size: 14px;
        top: 100%;
      }

    }

    .app-dropdown__list-item {
      font-weight: 500;
      &:last-child {
        margin-bottom: 0;
      }
    }

  }
</style>
