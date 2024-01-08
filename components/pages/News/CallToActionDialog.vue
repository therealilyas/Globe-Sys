<template>
<!--  <AppModal v-model="dialog" @close="resetForm">-->
<!--    <ValidationObserver ref="form" tag="div" v-slot="{handleSubmit}">-->
<!--      <form @submit.prevent="handleSubmit(handleSubmitForm)">-->
<!--        <div :class=" isMobileSmall ? 'pa-20' : 'pa-30'"-->
<!--             style="background-color: #ffffff; border-radius: 18px">-->
<!--          <AppText :size="isMobileSmall ? 24 : isDesktopSmall ? 28 : 34"-->
<!--                   :line-height="isMobileSmall ? 28 : isDesktopSmall ? 32 : 41"-->
<!--                   weight="700" class="mb-20">{{ $t('sendFeedback') }}-->
<!--          </AppText>-->
<!--          <AppText :size="isMobileSmall ? 12 : 14"-->
<!--                   :line-height="isMobileSmall ? 16 : 24" class="color-text"-->
<!--                   :class="isMobileSmall ? 'mb-20' : 'mb-40'">-->
<!--            {{ $t('feedbackText') }}-->
<!--          </AppText>-->

<!--          <AppInput rules="max:255|required"-->
<!--                    v-model="form.name"-->
<!--                    vid="name"-->
<!--                    :label="$t('yourName')"/>-->
<!--          <AppInput rules="max:255|email|required"-->
<!--                    v-model="form.email"-->
<!--                    vid="email"-->
<!--                    :label="$t('yourEmail')"/>-->
<!--          <AppInput rules="max:17|required"-->
<!--                    v-mask="'+998 ## ### ## ##'"-->
<!--                    vid="phone"-->
<!--                    v-model="form.phone"-->
<!--                    :label="$t('yourPhone')"/>-->
<!--          <AppInput rules="required|max:10000"-->
<!--                    v-model="form.text"-->
<!--                    vid="text"-->
<!--                    :label="$t('yourMessage')" textarea/>-->
<!--          <AppButton class="mt-10" type="submit">-->
<!--            <span v-if="!loading">{{ $t('send') }}</span>-->
<!--            <dynamic-icon v-else class="color-white loading refresh" icon="loading" />-->
<!--          </AppButton>-->

<!--        </div>-->
<!--      </form>-->
<!--    </ValidationObserver>-->
<!--  </AppModal>-->

  <AppModal v-model="dialog" @close="resetForm">
    <form action="https://formspree.io/f/xzblelan" method="POST">
      <div :class=" isMobileSmall ? 'pa-20' : 'pa-30'"
           style="background-color: #ffffff; border-radius: 18px">
        <AppText :size="isMobileSmall ? 24 : isDesktopSmall ? 28 : 34"
                 :line-height="isMobileSmall ? 28 : isDesktopSmall ? 32 : 41"
                 weight="700" class="mb-20">{{ $t('sendFeedback') }}
        </AppText>
        <AppText :size="isMobileSmall ? 12 : 14"
                 :line-height="isMobileSmall ? 16 : 24" class="color-text"
                 :class="isMobileSmall ? 'mb-20' : 'mb-40'">
          {{ $t('feedbackText') }}
        </AppText>

        <AppInput rules="max:255|required"
                  name="name"
                  v-model="form.name"
                  vid="name"
                  :label="$t('yourName')"/>
        <AppInput rules="max:255|email|required"
                  name="email"
                  v-model="form.email"
                  vid="email"
                  :label="$t('yourEmail')"/>
        <AppInput rules="max:17|required"
                  name="phone"
                  v-mask="'+998 ## ### ## ##'"
                  vid="phone"
                  v-model="form.phone"
                  :label="$t('yourPhone')"/>
        <AppInput rules="required|max:10000"
                  name="text"
                  v-model="form.text"
                  vid="text"
                  :label="$t('yourMessage')"/>
        <AppButton class="mt-10" type="submit">
          <span v-if="!loading">{{ $t('send') }}</span>
          <dynamic-icon v-else class="color-white loading refresh" icon="loading" />
        </AppButton>

      </div>
    </form>
  </AppModal>
</template>

<script>
  import AppModal from "../../shared-components/AppModal";
  import AppInput from "../../shared-components/AppInput";
  import AppButton from "../../shared-components/AppButton";
  import DynamicIcon from "../../shared-components/DynamicIcon";
  const FORM = {
    name: '',
    phone: '',
    email: '',
    text: ''
  }

  export default {
    name: "CallToActionDialog",
    components: {DynamicIcon, AppButton, AppInput, AppModal},
    data() {
      return {
        loading: false,
        form: {...FORM},
        dialog: false
      }
    },
    methods: {
      open() {
        this.dialog = true
      },
      async handleSubmitForm() {
        try {
          this.loading = true
          this.form.phone = this.form.phone.replace(/ /g, '')
          await this.$axios.post(`contact-page/create`, this.form);
          this.form = {
            name: '',
            phone: '',
            email: '',
            text: '',
          }
          this.phone = ""
          this.$nextTick(() => {
            this.$refs.form.reset();
          });
          this.dialog = false;
        } catch (e) {
          this.$refs.form.setErrors(e.response.data.errors);
          console.log(e);
        } finally {
          this.loading = false
        }
      },
      resetForm(){
        this.dialog = false
        this.form = {...FORM}
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
