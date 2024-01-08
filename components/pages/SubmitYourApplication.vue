<template>
  <div>
    <div class="cta pa-20">
      <div class="cta__text">
        <AppText :size="isMobileSmall ? 16 : isMobileMedium ? 18 : 22"
                 :line-height="isMobileSmall ? 20 : isMobileMedium ? 22 : 26"
                 weight="500"
        >
          {{ $t('SubmitAppText') }}
        </AppText>
      </div>
      <AppButton class="cta__btn" @click="$refs.dialog.open()">
        {{ $t('getAnOffer') }}
      </AppButton>
    </div>

    <CallToActionDialog ref="dialog"/>

  </div>
</template>

<script>
  import DynamicIcon from "../shared-components/DynamicIcon";
  import AppModal from "../shared-components/AppModal";
  import AppInput from "../shared-components/AppInput";
  import AppButton from "../shared-components/AppButton";
  import CallToActionDialog from "./News/CallToActionDialog";

  export default {
    name: "SubmitYourApplication",
    components: {CallToActionDialog, DynamicIcon, AppButton, AppInput, AppModal},
    data() {
      return {
        // modal_dialog: false,
        loading: false,
      }
    },

  }
</script>

<style lang="scss" scoped>
  .cta {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-info-bg);
    align-items: center;
    border-radius: 8px;

    &__text {
      max-width: 70%;
      width: 100%;
      margin: 10px 20px 10px 0
    }

    &__btn {
      display: flex;
      width: max-content;
      margin: 10px 0;
    }
  }

  @media (max-width: 991px) {
    .cta {
      flex-wrap: wrap;
    }

    .cta__text {
      max-width: 100%;
    }
  }
</style>
