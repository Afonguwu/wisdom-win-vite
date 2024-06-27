<template>
  <div class="container-xxl">
    <bannerTitle style="background-image: url('img/contact.jpg'), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))">
      聯絡我們
    </bannerTitle>
    <div class="content-div-p">
      <p class="fs-5 mb-4">若需要諮詢或其他服務，務必事先聯繫，感謝您的配合!</p>
      <ul class="list-unstyled bg-danger-subtle p-6 rounded-3 text-primary">
        <li class="mb-5 border-bottom border-success">
          <h4 class="fw-bold mb-2">服務電話</h4>
          <p class="text-info fs-5">07-2415758</p>
        </li>
        <li class="mb-5 border-bottom border-success">
          <h4 class="fw-bold mb-2">傳真</h4>
          <p class="text-info fs-5">07-2410717</p>
        </li>
        <li class="mb-5 border-bottom border-success">
          <h4 class="fw-bold mb-2">電子信箱</h4>
          <p class="text-info fs-5">wisdom988@gmail.com</p>
        </li>
        <li class="mb-5 border-bottom border-success">
          <h4 class="fw-bold mb-2">服務時段</h4>
          <div class="text-info fs-5 d-flex flex-column flex-md-row">
            <p class="mb-0">週一至週五</p>
            <p>09：00 - 17：30</p>
          </div>
        </li>
        <li>
          <h4 class="fw-bold mb-2">服務據點</h4>
          <p class="text-info fs-5">高雄市前金區中正四路151號13樓</p>
          <iframe
            style="border: 0; width: 100%"
            load="lazy"
            allowfullscreen
            v-bind:src="`https://www.google.com/maps/embed/v1/search?q=台灣高雄市前金區中正四路智勝法律事務所&key=${API_KEY}`"
          ></iframe>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import bannerTitle from '@/components/BannerTitle.vue'
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY
</script>
