<template>
<!--  <ValidationObserver ref="form" tag="div" v-slot="{handleSubmit}">-->
<!--    <form @submit.prevent="handleSubmit(handleSubmitForm)">-->
<!--      &lt;!&ndash;        :class=" isMobileSmall ? 'pa-20' : 'pa-30'"&ndash;&gt;-->
<!--      <div style="background-color: #ffffff; border-radius: 18px">-->
<!--        <AppText :size="isMobileSmall ? 20 : isMobile ? 28 : 34"-->
<!--                 :line-height="isMobileSmall? 26 : isMobile ? 36 : 41"-->
<!--                 weight="700"-->
<!--                 class="mb-40"-->
<!--        >{{ $t('feedback') }}-->
<!--        </AppText>-->

<!--        <AppInput-->
<!--                  class="input__block-both"-->
<!--                  rules="max:255|required"-->
<!--                  v-model="form.name"-->
<!--                  vid="name"-->
<!--                  :label="$t('yourName')"/>-->
<!--        <AppInput-->
<!--                  class="input__block-both"-->
<!--                  rules="max:17|required"-->
<!--                  v-mask="'+998 ## ### ## ##'"-->
<!--                  vid="phone"-->
<!--                  v-model="form.phone"-->
<!--                  :label="$t('yourPhone')"/>-->
<!--        <AppInput-->
<!--                  class="input__block-both"-->
<!--                  rules="required|max:10000"-->
<!--                  v-model="form.text"-->
<!--                  vid="text"-->
<!--                  :label="$t('yourMessage')"-->
<!--                  textarea/>-->
<!--        <AppButton class="mt-10" type="submit" style="min-width: 140px;">-->
<!--          <span v-if="!loading" class="mr-5">{{ $t('send') }}</span>-->
<!--          <dynamic-icon v-else class="loading" icon="loading"/>-->
<!--        </AppButton>-->

<!--      </div>-->
<!--    </form>-->
<!--  </ValidationObserver>-->

<!--  <form action="https://formspree.io/f/mzblelab" method="POST">-->
<!--    <input type="text" name="name" required>-->
<!--    <input type="email" name="email" required>-->
<!--    <button type="submit">Send</button>-->
<!--  </form>-->
    <form action="https://formspree.io/f/xzblelan" method="POST">
      <div style="background-color: #ffffff; border-radius: 18px">
        <AppText :size="isMobileSmall ? 20 : isMobile ? 28 : 34"
                 :line-height="isMobileSmall? 26 : isMobile ? 36 : 41"
                 weight="700"
                 class="mb-40"
        >{{ $t('feedback') }}
        </AppText>

        <AppInput
          class="input__block-both"
          rules="max:255|required"
          name="name"
          v-model="form.name"
          vid="name"
          :label="$t('yourName')"/>
        <AppInput
          class="input__block-both"
          rules="max:17|required"
          name="phone"
          v-mask="'+998 ## ### ## ##'"
          vid="phone"
          v-model="form.phone"
          :label="$t('yourPhone')"/>
        <AppInput
          class="input__block-both"
          rules="required|max:10000"
          name="text"
          v-model="form.text"
          vid="text"
          :label="$t('yourMessage')"
          />
        <AppButton class="mt-10" type="submit" style="min-width: 140px;">
          <span v-if="!loading" class="mr-5">{{ $t('send') }}</span>
          <dynamic-icon v-else class="loading" icon="loading"/>
        </AppButton>
      </div>
    </form>
</template>

<script>
  import DynamicIcon from "../shared-components/DynamicIcon";
  import AppModal from "../shared-components/AppModal";
  import AppInput from "../shared-components/AppInput";
  import AppButton from "../shared-components/AppButton";

  const form = {
    name: '',
    phone: '',
    text: '',
  }

  export default {
    name: "CallBack",
    components: {DynamicIcon, AppButton, AppInput, AppModal},
    data() {
      return {
        loading: false,
        form: {...form}
      }
    },
    methods: {
      // async handleSubmitForm() {
      //   try {
      //     this.loading = true
      //     this.form.phone = this.form.phone.replace(/ /g, '')
      //     await this.$axios.post(`https://formspree.io/f/mzblelab`, this.form);
      //     this.form = {...form}
      //     this.$nextTick(() => {
      //       this.$refs.form.reset();
      //     });
      //   } catch (e) {
      //     this.$refs.form.setErrors(e.response.data.errors);
      //   } finally {
      //     this.loading = false
      //   }
      // }
    }
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

  .captcha__block {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
