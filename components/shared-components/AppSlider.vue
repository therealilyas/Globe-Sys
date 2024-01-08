<template>
  <div class="app-slider"
       :class="{ 'app-slider--medium': medium }">
    <div class="splide" ref="slider">
      <div class="splide__slider">
        <div class="splide__track">
          <div class="splide__list">
            <div v-for="(item, idx) in list" :key="idx" class="splide__slide">
              <slot :item="item" :medium="medium">
              </slot>
            </div>
          </div>
        </div>
        <template v-if="arrows">
          <app-button
            v-if="showPreviousArrow"
            key="1"
            class="app-slider__button-previous"
            width="50"
            flex
            :height="isMobileSmall ? 30 : 40"
            radius="100"
            shadow="medium"
            theme="white"
            @click="previous"
          >
            <!--          <img src="../../assets/icons/arrow-left.svg" alt="">-->
            <DynamicIcon icon="arrow-left"/>
          </app-button>
          <app-button
            v-if="showNextArrow"
            key="2"
            class="app-slider__button-next"
            width="50"
            flex
            :height="isMobileSmall ? 30 : 40"
            radius="100"
            shadow="medium"
            theme="white"
            @click="next"
          >
            <!--          <img src="../../assets/icons/arrow-right.svg" alt="">-->
            <DynamicIcon icon="arrow-right"/>
          </app-button>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import AppButton from "./AppButton";

  const SplideJS = () => import("@splidejs/splide");
  import "@splidejs/splide/dist/css/splide-core.min.css";
  import "../../assets/styles/components/app-slider.scss";
  import DynamicIcon from "./DynamicIcon";

  export default {
    name: "AppSlider",
    components: {
      DynamicIcon,
      AppButton,
    },
    props: {
      list: {
        type: Array,
        required: true
      },
      medium: {
        type: Boolean,
        default: false
      },
      slideCount: {
        type: [String, Number],
        default: 4
      },
      arrows: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        cardsSlider: null,
        showPreviousArrow: false,
        showNextArrow: false
      }
    },

    computed: {
      count() {
        if (this.isMobile) {
          return 1;
        }
        if (this.isDesktopSmall) {
          return this.medium ? 2 : 3;
        }
        return this.medium ? 3 : this.slideCount;
      },
      options() {
        return {
          rewind: true,
          drag: this.list.length > this.count,
          dots: true,
          perPage: this.count,
          perMove: 2,
          gap: 15,
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 2000,
          speed: 1000,
          // type: 'loop',
          breakpoints: {
            1240: {
              gap: 15
            },
            1100: {
              perPage: 3,
              gap: 15
            },
            900: {
              perPage: 2,
              gap: 15
            },
            550: {
              perPage: 1
            }
          }
        };
      }
    },
    methods: {
      checkArrows(idx) {
        this.showPreviousArrow = idx > 0;
        this.showNextArrow =
          (this.isMobile ? idx : idx + this.count - 1) < this.list.length - 1;
      },
      next() {
        if (this.cardsSlider) {
          this.cardsSlider.go("+1");
        }
      },
      previous() {
        if (this.cardsSlider) {
          this.cardsSlider.go("-1");
        }
      },
      async init() {
        const refSlider = this.$refs["slider"];
        const Splide = await SplideJS();
        const slider = new Splide.default(refSlider, this.options);
        slider.mount();
        this.checkArrows(0);
        slider.on("move", newIndex => {
          this.checkArrows(newIndex);
          this.$emit("select", {index: newIndex});
        });
        this.cardsSlider = slider;
      }
    },
    mounted() {
      this.init();
    },
    watch: {
      list() {
        this.init();
      }
    },
    beforeDestroy() {
      if (this.cardsSlider) {
        const cardsSlider = this.cardsSlider;
        setTimeout(() => {
          cardsSlider.destroy();
        }, 150);
      }
    }
  }
</script>

<style lang="scss">
  @media(max-width: 600px) {
    .app-slider__button-next {
      display: none;
    }

    .app-slider__button-previous {
      display: none;
    }
  }

  .splide__pagination {
    margin-top: 30px;
    &__page {
      width: 10px;
      height: 10px;
      background: #AAA3BF;
      opacity: .3;
      margin: 5px;
      border-radius: 50%;
      overflow: hidden;

      &.is-active {
        opacity: 1;
      }

    }
  }
</style>
