<template>
  <div class="partners">
    <AppSlider :list="partners" slide-count="4">
      <template #default="{item}">
        <a :href="item.url" target="_blank">
          <div class="partners__item">
            <img v-if="item.url" :src="(`/img/partners/${item.url}.png`)" alt="" />
          </div>
        </a>
        <a :href="item.url2" target="_blank">
          <div class="partners__item">
            <img v-if="item.url2" :src="(`/img/partners/${item.url2}.png`)" alt="" />
          </div>
        </a>
        <a :href="item.url3" target="_blank">
          <div class="partners__item">
            <img v-if="item.url3" :src="(`/img/partners/${item.url3}.png`)" alt="" />
          </div>
        </a>
      </template>
    </AppSlider>
  </div>
</template>

<script>
  import AppSlider from "../../../shared-components/AppSlider";
  export default {
    name: "HomePartners",
    components: {AppSlider},
    data() {
      return {
        partners: [
          {
            url: 'ipak',
            url2: 'trast',
            url3: 'aloqa',
          },
          {
            url: 'kapitalbank',
            url2: 'davrbank',
            url3: 'hamkorbank',
          },
          {
            url: 'anorbank',
            url2: 'ipoteka',
            url3: 'agro',
          },
          {
            url: 'ziraat',
            url2: 'uzkdb',
            url3: 'ravnaq',
          },
          {
            url: 'aab',
            url2: 'infinbank',
            url3: 'qqb',
          },
          {
            url: 'mib',
            url2: 'turon',
            url3: 'xalqbank',
          },
          {
            url: 'mikrokreditbank',
            url2: 'nbu',
            url3: 'ofb',
          },
          {
            url: 'poytaxt',
            url2: 'universalbank',
            url3: 'saderat',

          },
          {
            url: 'asakabank',
            url2: '',
            url3: '',
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .partners {
    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 280px;
        width: 100%;
        max-height: 160px;
        padding: 15px;
        height: 100%;
        object-fit: contain;
      }
    }
  }
</style>
