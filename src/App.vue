<template>
  <HeaderNav></HeaderNav>
  <router-view class="margin-nav"></router-view>
  <FooterBar></FooterBar>
</template>
<script>
import HeaderNav from './components/HeaderNav.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  components: {
    HeaderNav, FooterBar,
  },
};
</script>
<style lang="scss">
@import '@/assets/scss/all.scss';
</style>
