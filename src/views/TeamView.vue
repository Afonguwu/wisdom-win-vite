<template>
<div class="container-xxl">
  <bannerTitle style="background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))
  ,url('@/assets/img/team-banner.jpg');">律師團隊</bannerTitle>
  <div class="content-div-p">
    <teamBlock></teamBlock>
  </div>
</div>
</template>
<script>
import bannerTitle from '@/components/BannerTitle.vue';
import teamBlock from '@/components/TeamCards.vue';

export default {
  components: {
    bannerTitle, teamBlock,
  },
};
</script>
