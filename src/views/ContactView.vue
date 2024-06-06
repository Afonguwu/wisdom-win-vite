<template>
    <div class="container-xxl">
    <bannerTitle style="background-image:url('/src/assets/img/contact-banner.jpg'),linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))
    ;">聯絡我們</bannerTitle>
        <div class="content-div-p">
            <p class="fs-5 mb-6">若需要諮詢或其他服務，務必事先聯繫，感謝您的配合!</p>
            <ul class="list-unstyled bg-danger-subtle p-6 rounded-3 text-primary">
                <li class="mb-7 border-bottom border-success">
                <h3 class="fw-bold mb-4">服務電話</h3>
                <p class="fs-5 text-info">07-2415758</p>
                </li>
                <li class="mb-7 border-bottom border-success">
                <h3 class="fw-bold mb-4">傳真</h3>
                <p class="fs-5 text-info">07-2410717</p>
                </li>
                <li class="mb-7 border-bottom border-success">
                <h3 class=" fw-bold mb-4">電子信箱</h3>
                <p class="fs-5 text-info">wisdom988@gmail.com</p>
                </li>
                <li class="mb-7 border-bottom border-success">
                <h3 class=" fw-bold mb-4">服務時段</h3>
                <p class="fs-5 text-info">週一至週五  09：00 - 17：30</p>
                </li>
                <li class="mb-7">
                <h3 class="fw-bold mb-4">服務據點</h3>
                <p class="fs-5 text-info">高雄市前金區中正四路151號13樓</p>
                <!--   插入google map -->
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import bannerTitle from '@/components/BannerTitle.vue';

export default {
  components: {
    bannerTitle,
  },
};
</script>
