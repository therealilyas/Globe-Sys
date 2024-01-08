<template>
  <ValidationProvider tag="div"
                      class="input__holder"
                      :rules="rules"
                      :name="label ? label : placeholder"
                      :vid="vid"
                      v-slot="{ errors }"
                      :hideDetails="hideDetails"
  >
    <div class="input__block" :class="disabled ? 'disabled' : '' ">
      <label class="input__block-label">

        <span v-if="label" class="input__block-title">{{label}}</span>

        <div class="input__block-wrap" :class="errors[0] ? 'error' : '' ">
          <div class="input__block-prepend">
            <slot name="prepend"></slot>
          </div>
          <div class="input__block-append">
            <slot name="append"></slot>
          </div>

          <div class="input__block-append hide-password" @click="showPassword">
            <slot name="hidePassword"></slot>
          </div>

          <textarea
            v-if="textarea"
            ref="input" :disabled="disabled"
            :value="value"
            @input="inputValue"
            v-bind="$attrs"
            :type="type"
            :maxlength="maxlength"
            :placeholder="placeholder"
            class="input__block-textarea"
            name="" id="" cols="10" rows="3"></textarea>

          <input ref="input" :disabled="disabled"
                 v-if="!textarea"
                 :value="value"
                 @input="inputValue"
                 v-bind="$attrs"
                 :type="type"
                 :maxlength="maxlength"
                 :placeholder="placeholder"
                 class="input__block-input">
        </div>
        <div class="input__details" v-if="!hideDetails">
          <span v-if="errors[0]" id="error"> {{ errors[0] }}</span>
        </div>

      </label>
    </div>

  </ValidationProvider>

</template>
<script>
  import DynamicIcon from "./DynamicIcon";
  import {ValidationProvider} from 'vee-validate';
  import "../../assets/styles/components/app-input.scss"

  export default {
    name: 'AppInput',
    components: {DynamicIcon, ValidationProvider},
    props: {
      value: {
        default: ''
      },
      label: {
        type: String
      },
      type: {},
      hideDetails: {
        type: Boolean
      },
      placeholder: {},
      rules: {},
      vid: {},
      maxlength: {
        default: null
      },
      textarea: {
        type: Boolean
      },
      disabled: {
        type: Boolean,
        default: () => {
          return false
        }
      },
      autofocus: Boolean
    },
    computed: {},
    methods: {
      inputValue(event) {
        this.$emit('input', event.target.value)
      },
      focus(){
        this.$refs.input.focus();
      },
      showPassword() {
        if(this.type === 'password') {
          this.type = 'text'
          this.btnText = 'Hide Password'
        } else {
          this.type = 'password'
          this.btnText = 'Show Password'
        }
      }
    },
    mounted() {
      if(this.autofocus) {
        this.focus()
      }
    },
  }
</script>
