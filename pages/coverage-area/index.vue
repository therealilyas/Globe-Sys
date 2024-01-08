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
          {{ $t("coverageArea") }}
        </AppText>

        <AppBreadcrumbs :list="breadcrumbs" />
      </div>
    </div>
    <div class="container">
      <section class="section">
        <div
          class="block__wrap"
          :class="isMobileMedium ? 'mb-50' : isMobile ? 'mb-70' : 'mb-130'"
        >
          <div class="block__content">
            <AppText
              :size="isMobileSmall ? 22 : isMobileMedium ? 28 : 34"
              :line-height="isMobileSmall ? 28 : isMobileMedium ? 36 : 41"
              weight="700"
              :class="[
                isMobile ? 'text-center' : '',
                isMobileMedium ? 'mb-30' : 'mb-40',
              ]"
            >
              {{ $t("coverageAreaTitle") }}
            </AppText>

            <AppText size="14" line-height="24">
              {{ $t("coverageAreaText") }}
            </AppText>
          </div>
          <div class="block__photo">
            <img src="/img/photo_2023-06-20_12-50-16.jpg" alt="" />
          </div>
        </div>

        <AppText
          :size="isMobileSmall ? 22 : isMobileMedium ? 28 : 34"
          :line-height="isMobileSmall ? 28 : isMobileMedium ? 36 : 41"
          weight="700"
          :class="[
            isMobile ? 'text-center' : '',
            isMobileMedium ? 'mb-30' : 'mb-40',
          ]"
        >
          {{ $t("coverageServiceTitle") }}
        </AppText>

        <div class="coverage-area" :class="isMobileMedium ? 'mb-70' : 'mb-110'">
          <div
            class="coverage-area__item"
            v-for="(map, index) in maps"
            :key="index"
          >
            <div
              class="coverage-area__color"
              v-if="map.color"
              :style="`--background: ${map.color}`"
            ></div>
            <AppText
              v-if="map.title"
              size="14"
              line-height="24"
              class="coverage-area tooltip"
            >
              {{ map.title }}
              <span class="tooltiptext">
                {{ map.subTitle }}<br />
                {{ map.subTell }}<br />
                {{ map.subMail }}
              </span>
              <span class="tooltiptitle" v-if="map.title === maps[0].title">
                {{ map.subTitle }}<br />
                {{ map.subTell }}<br />
                {{ map.subMail }}
              </span>
            </AppText>
          </div>
        </div>

        <div class="map" :class="isMobileMedium ? 'mb-30' : 'mb-70'">
          <client-only>
            <GmapMap :center="center" :zoom="zoom" ref="map">
              <GmapCircle
                v-for="(item, index) in markers"
                :key="index"
                v-if="item.position || item.color"
                :center="item.position"
                :radius="20000"
                :visible="true"
                :options="{
                  fillColor: item.color,
                  fillOpacity: 0.75,
                  strokeWeight: 0,
                }"
              ></GmapCircle>
            </GmapMap>
          </client-only>
        </div>

        <SubmitYourApplication />
      </section>
    </div>
  </div>
</template>

<script>
import AppBreadcrumbs from "../../components/shared-components/AppBreadcrumbs";
import SubmitYourApplication from "../../components/pages/SubmitYourApplication";
import { headFunction } from "@/utils/pureFunctions";

export default {
  name: "index",
  components: { SubmitYourApplication, AppBreadcrumbs },
  data() {
    return {
      breadcrumbs: [
        {
          title: this.$t("home"),
          path: "/",
        },
        {
          title: this.$t("coverageArea"),
          path: "/coverage-area",
        },
      ],
      zoom: 6,
      center: { lat: 41.8064, lng: 64.5571 },
      markers: [
        {
          position: { lat: 41.330569, lng: 69.251982 },
          color: "#0E7DC2",
        },
        {
          position: { lat: 41.224737, lng: 69.217369 },
          color: "#0E7DC2",
        },
        {
          position: { lat: 40.84938, lng: 69.591406 },
          color: "#0E7DC2",
        },
        {
          position: { lat: 40.84938, lng: 69.591406 },
          color: "#0E7DC2",
        },
        {
          position: { lat: 41.5078445, lng: 69.6249943 },
          color: "#0E7DC2",
        },
        {
          position: { lat: 40.374732, lng: 71.797749 },
          color: "#FFEB3B",
        },
        {
          position: { lat: 40.5555398, lng: 70.9482881 },
          color: "#FFEB3B",
        },
        {
          position: { lat: 40.7837526, lng: 72.3487818 },
          color: "#1B5E20",
        },
        {
          position: { lat: 40.7657032, lng: 72.3334441 },
          color: "#1B5E20",
        },
        {
          position: { lat: 40.99747, lng: 71.24784 },
          color: "#B71C1C",
        },
        {
          position: { lat: 40.4943758, lng: 68.7938769 },
          color: "#E91E63",
        },
        {
          position: { lat: 39.646429, lng: 66.9373345 },
          color: "#CDDC39",
        },
        {
          position: { lat: 39.9036747, lng: 66.2509943 },
          color: "#CDDC39",
        },
        {
          position: { lat: 39.780889, lng: 64.40125 },
          color: "#FF9800",
        },
        {
          position: { lat: 39.77254, lng: 64.455116 },
          color: "#FF9800",
        },
        {
          position: { lat: 39.0525821, lng: 66.8278643 },
          color: "#795548",
        },
        {
          position: { lat: 38.8377811, lng: 65.7962092 },
          color: "#795548",
        },
        {
          position: { lat: 38.6213611, lng: 66.2521604 },
          color: "#795548",
        },
        {
          position: { lat: 40.1171712, lng: 65.3772345 },
          color: "#000000",
        },
        {
          position: { lat: 37.2442466, lng: 67.283151 },
          color: "#607D8B",
        },
        {
          position: { lat: 38.2753782, lng: 67.8951071 },
          color: "#607D8B",
        },
        {
          position: { lat: 41.6835886, lng: 60.7621988 },
          color: "#DD2C00",
        },
        {
          position: { lat: 41.5, lng: 60.5 },
          color: "#DD2C00",
        },
        {
          position: { lat: 41.3776893, lng: 60.3620006 },
          color: "#DD2C00",
        },
        {
          position: { lat: 40.136187, lng: 67.8240854 },
          color: "#9C27B0",
        },
        {
          position: { lat: 42.4600229, lng: 59.6176603 },
          color: "#004D40",
        },
        {
          position: { lat: 41.8970863, lng: 60.5168564 },
          color: "#004D40",
        },
        {
          position: { lat: 43.0447357, lng: 58.846374 },
          color: "#004D40",
        },
      ],
      maps: [
        {
          color: "#0E7DC2",
          title: this.$t("region"),
          subTitle: this.$t("subTitle"),
          subTell: this.$t("subTell"),
          subMail: this.$t("subMail"),
        },
        {
          color: "#0E7DC2",
          title: this.$t("region2"),
          subTitle: this.$t("subTitle2"),
          subTell: this.$t("subTell2"),
          subMail: this.$t("subMail2"),
        },
        {
          color: "#0E7DC2",
          title: this.$t("region3"),
          subTitle: this.$t("subTitle3"),
          subTell: this.$t("subTell3"),
          subMail: this.$t("subMail3"),
        },
        {
          color: "#0E7DC2",
          title: this.$t("region4"),
          subTitle: this.$t("subTitle4"),
          subTell: this.$t("subTell4"),
          subMail: this.$t("subMail4"),
        },
        {
          color: "#0E7DC2",
          title: this.$t("region5"),
          subTitle: this.$t("subTitle5"),
          subTell: this.$t("subTell5"),
          subMail: this.$t("subMail5"),
        },
        {
          color: "#B71C1C",
          title: this.$t("region11"),
          subTitle: this.$t("subTitle11"),
          subTell: this.$t("subTell11"),
          subMail: this.$t("subMail11"),
        },
        {
          color: "#FFEB3B",
          title: this.$t("region7"),
          subTitle: this.$t("subTitle7"),
          subTell: this.$t("subTell7"),
          subMail: this.$t("subMail7"),
        },
        {
          color: "#FFEB3B",
          title: this.$t("region8"),
          subTitle: this.$t("subTitle8"),
          subTell: this.$t("subTell8"),
          subMail: this.$t("subMail8"),
        },
        {
          color: "#1B5E20",
          title: this.$t("region9"),
          subTitle: this.$t("subTitle9"),
          subTell: this.$t("subTell9"),
          subMail: this.$t("subMail9"),
        },
        {
          color: "#1B5E20",
          title: this.$t("region10"),
          subTitle: this.$t("subTitle10"),
          subTell: this.$t("subTell10"),
          subMail: this.$t("subMail10"),
        },
        {
          color: "#E91E63",
          title: this.$t("region12"),
          subTitle: this.$t("subTitle12"),
          subTell: this.$t("subTell12"),
          subMail: this.$t("subMail12"),
        },
        {
          color: "#9C27B0",
          title: this.$t("region26"),
          subTitle: this.$t("subTitle26"),
          subTell: this.$t("subTell26"),
          subMail: this.$t("subMail26"),
        },
        {
          color: "#CDDC39",
          title: this.$t("region13"),
          subTitle: this.$t("subTitle13"),
          subTell: this.$t("subTell13"),
          subMail: this.$t("subMail13"),
        },
        {
          color: "#CDDC39",
          title: this.$t("region14"),
          subTitle: this.$t("subTitle14"),
          subTell: this.$t("subTell14"),
          subMail: this.$t("subMail14"),
        },
        {
          color: "#FF9800",
          title: this.$t("region15"),
          subTitle: this.$t("subTitle15"),
          subTell: this.$t("subTell15"),
          subMail: this.$t("subMail15"),
        },
        {
          color: "#FF9800",
          title: this.$t("region16"),
          subTitle: this.$t("subTitle16"),
          subTell: this.$t("subTell16"),
          subMail: this.$t("subMail16"),
        },
        {
          color: "#795548",
          title: this.$t("region17"),
          subTitle: this.$t("subTitle17"),
          subTell: this.$t("subTell17"),
          subMail: this.$t("subMail17"),
        },
        {
          color: "#795548",
          title: this.$t("region18"),
          subTitle: this.$t("subTitle18"),
          subTell: this.$t("subTell18"),
          subMail: this.$t("subMail18"),
        },
        {
          color: "#795548",
          title: this.$t("region19"),
          subTitle: this.$t("subTitle19"),
          subTell: this.$t("subTell19"),
          subMail: this.$t("subMail19"),
        },
        {
          color: "#000000",
          title: this.$t("region20"),
          subTitle: this.$t("subTitle20"),
          subTell: this.$t("subTell20"),
          subMail: this.$t("subMail20"),
        },
        {
          color: "#607D8B",
          title: this.$t("region21"),
          subTitle: this.$t("subTitle21"),
          subTell: this.$t("subTell21"),
          subMail: this.$t("subMail21"),
        },
        {
          color: "#607D8B",
          title: this.$t("region22"),
          subTitle: this.$t("subTitle22"),
          subTell: this.$t("subTell22"),
          subMail: this.$t("subMail22"),
        },
        {
          color: "#DD2C00",
          title: this.$t("region23"),
          subTitle: this.$t("subTitle23"),
          subTell: this.$t("subTell23"),
          subMail: this.$t("subMail23"),
        },
        {
          color: "#DD2C00",
          title: this.$t("region24"),
          subTitle: this.$t("subTitle24"),
          subTell: this.$t("subTell24"),
          subMail: this.$t("subMail24"),
        },
        {
          color: "#DD2C00",
          title: this.$t("region25"),
          subTitle: this.$t("subTitle25"),
          subTell: this.$t("subTell25"),
          subMail: this.$t("subMail25"),
        },
        {
          color: "#004D40",
          title: this.$t("region27"),
          subTitle: this.$t("subTitle27"),
          subTell: this.$t("subTell27"),
          subMail: this.$t("subMail27"),
        },
        {
          color: "#004D40",
          title: this.$t("region28"),
          subTitle: this.$t("subTitle28"),
          subTell: this.$t("subTell28"),
          subMail: this.$t("subMail28"),
        },
        {
          color: "#004D40",
          title: this.$t("region29"),
          subTitle: this.$t("subTitle29"),
          subTell: this.$t("subTell29"),
          subMail: this.$t("subMail29"),
        },
      ],
    };
  },

  head() {
    const data = {
      title: this.$t("coverageAreaTitle"),
      description: this.$t("coverageAreaText"),
    };
    return headFunction(data);
  },
};
</script>

<style lang="scss" scoped>
.coverage-area {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 50px;

  &__item {
    padding-right: 50px;
    position: relative;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__color {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--background) !important;
    margin-right: 16px;
    border: 1px solid var(--color-border);
  }
}

.tooltip {
  position: relative;
  display: inline-block;
  .tooltiptext {
    position: absolute;
    visibility: hidden;
    min-width: 270px;
    padding: 5px 0;
    text-align: center;
    background-color: #0e7dc2;
    color: #fff;
    border-radius: 6px;
    z-index: 1;
  }

  &:hover {
    .tooltiptext {
      visibility: visible;
    }
  }

  .tooltiptitle {
    position: absolute;
    top: -10px;
    visibility: visible;
    min-width: 270px;
    padding: 5px 0;
    text-align: center;
    background-color: #0e7dc2;
    color: #fff;
    border-radius: 6px;
    z-index: 1;
  }

  .tooltiptext::after,
  .tooltiptitle::after {
    content: "";
    position: absolute;
    top: 25%;
    left: -14px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent #0e7dc2 transparent transparent;
  }
}

@media (max-width: 768px) {
  .coverage-area {
    grid-gap: 20px;
    padding-left: 20px;
  }
}

@media (max-width: 650px) {
  .coverage-area {
    grid-template-columns: 1fr;

    &__item {
      padding-right: 0;
    }
  }
}
</style>
