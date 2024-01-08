<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <nuxt-link
          to="/"
          class="logo"
          :class="isDesktopMedium ? 'mr-15' : 'mr-50'"
        >
          <img src="../../../../static/logo/logo.png" alt="" />
        </nuxt-link>

        <ul
          class="header__menu"
          v-if="!isDesktopMedium"
          :class="isDesktopMedium ? 'mr-15' : 'mr-50'"
        >
          <li class="header__menu-item">
            <nuxt-link to="/" class="header__menu-link">{{
              $t("home")
            }}</nuxt-link>
          </li>

          <li class="header__menu-item">
            <nuxt-link :to="this.localePath('news')" class="header__menu-link"
              >{{ $t("news") }}
            </nuxt-link>
          </li>

          <li class="header__menu-item">
            <nuxt-link
              :to="this.localePath('coverage-area')"
              class="header__menu-link"
              >{{ $t("coverageArea") }}
            </nuxt-link>
          </li>

          <li class="header__menu-item">
            <nuxt-link :to="this.localePath('about')" class="header__menu-link"
              >{{ $t("aboutUs") }}
            </nuxt-link>
          </li>

          <li class="header__menu-item">
            <nuxt-link
              :to="this.localePath('contacts')"
              class="header__menu-link"
              >{{ $t("contacts") }}
            </nuxt-link>
          </li>
        </ul>

        <div class="header__wrap-details">
          <LanguagesList
            :class="
              isMobileMedium ? 'mr-10' : isDesktopMedium ? 'mr-30' : 'mr-40'
            "
          />
          <AppButton
            :height="isMobileMedium ? '30' : isDesktopMedium ? '40' : '50'"
            :sides="isDesktopMedium ? '20' : '30'"
            :weight="isMobileMedium ? '500' : '600'"
            v-if="!isMobileMedium"
            @click="$refs.dialog.open()"
            >{{ $t("tracking") }}
          </AppButton>

          <AppButton
            @click="showNavigationDrawer"
            v-if="isMobileMedium"
            height="40"
            sides="15"
          >
            <DynamicIcon icon="menu" size="18" />
          </AppButton>
        </div>
      </div>
    </div>
    <transition name="sidebar-slide">
      <NavigationDrawer
        v-if="navigationDrawer"
        :navigationDrawer="navigationDrawer"
        @navClosed="navigationDrawer = false"
      />
    </transition>

    <transition name="fade">
      <div
        class="overlay"
        v-if="navigationDrawer"
        @click="navigationDrawer = false"
      ></div>
    </transition>

    <CallToActionDialog ref="dialog" />
  </header>
</template>

<script>
import "./header.scss";
import LanguagesList from "./LanguagesList";
import AppButton from "../../../shared-components/AppButton";
import NavigationDrawer from "./NavigationDrawer";
import DynamicIcon from "../../../shared-components/DynamicIcon";
import CallBack from "../../../pages/CallBack";
import CallToActionDialog from "../../../pages/News/CallToActionDialog";

export default {
  name: "AppHeader",
  components: {
    CallToActionDialog,
    CallBack,
    DynamicIcon,
    NavigationDrawer,
    AppButton,
    LanguagesList,
  },
  data() {
    return {
      navigationDrawer: false,
      dialog: false,
    };
  },
  methods: {
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },

    open() {
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-slide {
  &-enter-active,
  &-leave-active {
    transition: transform 0.2s ease-out;
  }

  &-enter,
  &-leave-to {
    transform: translateX(-100%);
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 49;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal__holder {
  background-color: white;
  border-radius: 18px;
  overflow: hidden;
  max-width: 550px;
  width: 100%;
}
</style>
