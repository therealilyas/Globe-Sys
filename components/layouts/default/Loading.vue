<template>
  <transition name="fade">
    <div v-if="loading" class="preloader">
      <div class="preloader__wrap">
        <div class="logo">
          <img src="/img/png/logo.png" alt="..."/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Loading",
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.preloader {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 988 !important;
  overflow-y: auto;

  &__wrap {
    margin: auto;
    max-width: 300px;
    width: 100%;

    .logo {
      max-width: 500px;
      width: 100%;
      -webkit-animation: cssAnimation 2s infinite;
      -moz-animation: cssAnimation 2s infinite;
      -o-animation: cssAnimation 2s infinite;

      img {
        width: 100%;
      }

      @media (max-width:600px) {
        padding: 8vw;
      }
    }
  }
}

@-webkit-keyframes cssAnimation {
  0% {
    -webkit-transform: rotate(0deg) scale(1)
  }
  50% {
    -webkit-transform: rotate(0deg) scale(1.2)
  }
  100% {
    -webkit-transform: rotate(0deg) scale(1)
  }
}

@-moz-keyframes cssAnimation {
  0% {
    -webkit-transform: rotate(0deg) scale(1)
  }
  50% {
    -webkit-transform: rotate(0deg) scale(1.2)
  }
  100% {
    -webkit-transform: rotate(0deg) scale(1)
  }
}

@-o-keyframes cssAnimation {
  0% {
    -webkit-transform: rotate(0deg) scale(1)
  }
  50% {
    -webkit-transform: rotate(0deg) scale(1.2)
  }
  100% {
    -webkit-transform: rotate(0deg) scale(1)
  }
}
</style>
