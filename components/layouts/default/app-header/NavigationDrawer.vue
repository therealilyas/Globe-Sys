<template>
  <div class="navigation-drawer">
    <div class="navigation-drawer__details mb-20">
      <AppButton :sides="isMobileSmall ? 20 : '30'"
                 :font-size="isMobileSmall ? 12 : '14'"
                 :height="isMobileSmall ? 40 : '50'"
      >
        {{ $t('tracking') }}
      </AppButton>

      <ul class="mobile__language">
        <li class="mobile__language-item">
          <span @click="changeLanguage('ru')" class="mobile__language-link">Ru</span>
        </li>
        <li class="mobile__language-item">
          <span @click="changeLanguage('uz')" class="mobile__language-link">Uz</span>
        </li>
        <li class="mobile__language-item">
          <span @click="changeLanguage('en')" class="mobile__language-link">En</span>
        </li>
      </ul>
    </div>

    <ul class="mobile__menu">
      <li @click="closed" class="mobile__menu-item" v-for="(item, idx) in menu" :key="idx">
        <nuxt-link :to="item.path" class="mobile__menu-link">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppButton from "../../../shared-components/AppButton";

export default {
  name: "NavigationDrawer",
  components: {AppButton},
  props: ['navigationDrawer'],
  computed: {
    menu() {
      return [
        {
          title: this.$t('home'),
          path: this.localePath('/')
        },
        {
          title: this.$t('news'),
          path: this.localePath('/news')
        },
        {
          title: this.$t('coverageArea'),
          path: this.localePath('/coverage-area')
        },
        {
          title: this.$t('aboutUs'),
          path: this.localePath('/about')
        },
        {
          title: this.$t('contacts'),
          path: this.localePath('/contacts')
        }
      ]
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$router.push(this.switchLocalePath(lang))
    },

    closed() {
      this.$emit('navClosed', this.navigationDrawer)
    }
  },
};
</script>
<style lang="scss" scoped>
.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  z-index: 50;
  overflow-y: auto;
  padding: 30px 20px;
  background-color: white;

  &__close {
    background-color: #00D06C;
  }
}

.mobile__language {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  &-item {
    cursor: pointer;
    margin-right: 10px;
    margin-top: 10px;
    font-weight: 500;
  }
}

.mobile__menu {
  &-item {
  }

  &-link {
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &.nuxt-link-exact-active {
      font-weight: 700;
    }

  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    max-width: 75% !important;
  }
}

</style>
