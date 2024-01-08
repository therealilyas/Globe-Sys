<template>
  <footer class="footer section__bg">
    <div class="container">
      <div class="footer__wrap">
        <div class="footer__details">
          <nuxt-link :to="this.localePath('/')" class="footer__logo mb-20">
            <img src="/logo/logo.png" alt="" />
          </nuxt-link>

          <div>
            <AppText
              size="14"
              line-height="24"
              class="color-text text-center"
              :class="isDesktopSmall ? 'mb-10' : 'mb-40'"
              max-lines="3"
            >
              {{ $t("footerText") }}
            </AppText>

            <div class="footer__socials">
              <a href="#" class="footer__socials-item">
                <DynamicIcon icon="telegram" size="20" />
              </a>

              <a href="#" class="footer__socials-item">
                <DynamicIcon icon="facebook" size="20" />
              </a>

              <a href="#" class="footer__socials-item">
                <DynamicIcon icon="instagram" size="20" />
              </a>

              <a href="#" class="footer__socials-item">
                <DynamicIcon icon="twitter" size="20" />
              </a>
            </div>
          </div>
        </div>

        <div class="footer__content">
          <div class="footer__column">
            <AppText size="12" line-height="18" weight="700" class="mb-30">
              {{ $t("services") }}
            </AppText>

            <ul class="footer__menu">
              <li class="footer__menu-item">
                <nuxt-link to="/" class="footer__menu-link">{{
                  $t("home")
                }}</nuxt-link>
              </li>

              <li class="footer__menu-item">
                <nuxt-link
                  :to="this.localePath('news')"
                  class="footer__menu-link"
                  >{{ $t("news") }}
                </nuxt-link>
              </li>

              <li class="footer__menu-item">
                <nuxt-link
                  :to="this.localePath('coverage-area')"
                  class="footer__menu-link"
                  >{{ $t("coverageArea") }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <AppText size="12" line-height="18" weight="700" class="mb-30">
              {{ $t("aboutUs") }}
            </AppText>

            <ul class="footer__menu">
              <li class="footer__menu-item">
                <nuxt-link
                  :to="this.localePath('/about')"
                  class="footer__menu-link"
                  >{{ $t("aboutUs") }}
                </nuxt-link>
              </li>

              <li class="footer__menu-item">
                <nuxt-link
                  :to="this.localePath('/contacts')"
                  class="footer__menu-link"
                  >{{ $t("contacts") }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <AppText size="12" line-height="18" weight="700" class="mb-30">
              {{ $t("contacts") }}
            </AppText>

            <ul class="footer__contacts">
              <li class="footer__contacts-item">
                <DynamicIcon
                  icon="location"
                  class="mr-10"
                  size="18"
                  color="#0E7DC2"
                />
                {{ $t("location") }}
              </li>

              <li class="footer__contacts-item">
                <a href="tel: +(998)95 0111999">
                  <DynamicIcon
                    icon="phone"
                    class="mr-10"
                    size="18"
                    color="#0E7DC2"
                  />
                  +998(71) 203-83-38
                </a>
              </li>

              <li class="footer__contacts-item">
                <a href="#">
                  <DynamicIcon
                    icon="mail"
                    class="mr-10"
                    size="18"
                    color="#0E7DC2"
                  />
                  info@btech.uz
                </a>
              </li>

              <li class="footer__contacts-item">
                <a href="#">
                  <DynamicIcon
                    icon="clock"
                    class="mr-10"
                    size="18"
                    color="#0E7DC2"
                  />
                  {{ $t("workDays") }}
                </a>
              </li>

              <li class="footer__contacts-item color-main mt-20">
                <nuxt-link :to="localePath('/contacts')" class="color-main">
                  <DynamicIcon icon="support" class="mr-10" size="18" />
                  {{ $t("theCallisFree") }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <AppText size="14" line-height="24">
          Globe Sys Support © {{ new Date().getFullYear() }}.
        </AppText>
      </div>
    </div>
  </footer>
</template>

<script>
import "./footer.scss";
import DynamicIcon from "../../../shared-components/DynamicIcon";

export default {
  name: "AppFooter",
  components: { DynamicIcon },
};
</script>

<style scoped></style>
