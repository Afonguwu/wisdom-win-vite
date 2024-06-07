<template>
<div class="container-xxl ">
    <bannerTitle style="background-image:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))
    ,url('img/serve.jpg');">服務項目</bannerTitle>
    <div class="content-div-p">
        <p class="text mb-6 fw-bold">我們的服務領域包括但不限於以下：
        </p>
        <div class="row">
            <serveCard v-bind:showContent="true"></serveCard>
        </div>
    </div>
</div>
</template>
<script>
import serveCard from '@/components/ServeCard.vue';
import bannerTitle from '@/components/BannerTitle.vue';

export default {
  components: {
    bannerTitle, serveCard,
  },
};
</script>
