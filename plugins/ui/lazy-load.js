import VueLazyload from 'vue-lazyload';
import Vue from 'vue';

Vue.use(VueLazyload, {
  loading: '/img/loading.png',
  error: '/img/no-photo.jpg',
  attempt: 1,
});
