<template>
  <div class="container-xxl">
    <bannerTitle
      style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url('img/joint.jpg');
      "
      >合署資訊</bannerTitle
    >
    <div class="content-div-p">
      <p class="fs-5 mb-6">若有其他想了解的資訊，歡迎來電詢問！</p>
      <h3 class="fs-2 fw-bold mb-2">地理位置</h3>
      <ul class="list-unstyled fs-5 list-icon mb-6">
        <li class="mb-3">位於中正路與中華路交會處，近捷運橘線市議會站3號出口</li>
        <li class="mb-3">往來高雄地方法院、高雄地檢署及高雄律師公會等機關便利</li>
        <li class="mb-3">鄰近公車站、Ubike租借點及捷運站，客戶來訪容易</li>
        <li class="mb-3">周遭有銀行、郵局、超商、醫院和健身房，商業機能健全</li>
        <!--           可以插入google map -->
      </ul>
      <h3 class="fs-2 fw-bold mb-2">辦公室現狀</h3>
      <ul class="list-unstyled fs-5 list-icon mb-6">
        <li class="mb-3">民國110年7月裝潢竣工，全新獨立辦公室</li>
        <li class="mb-3">會議室2間（每間可容納約6人），可依需求合併使用</li>
        <li class="mb-3">提供有線網路及無線WIFI</li>
        <li class="mb-3">提供多功能事務機（影印、列印、傳真、掃描），耗材費另計</li>
        <li class="mb-3">提供助理協助代收信件、電話轉接、客戶接待及辦公室環境維護</li>
      </ul>
      <h3 class="fs-2 fw-bold mb-2">合署費用</h3>
      <p class="fs-5 mb-6">獨立辦公室每月合署費用15000元，可2位律師合租</p>
      <h3 class="fs-2 fw-bold mb-2">環境照片</h3>
      <div class="row">
        <img
          v-for="(item, index) in images"
          v-bind:key="item.alt"
          class="col-12 col-sm-6 col-lg-4 p-4"
          v-bind:src="`${item.src}`"
          v-bind:alt="item.alt"
          v-on:click="openLightbox(index)"
        />
        <vue-easy-lightbox
          v-bind:visible="visible"
          v-bind:imgs="images.map((image) => `${image.src}`)"
          v-bind:index="currentIndex"
          v-on:hide="visible = false"
        >
        </vue-easy-lightbox>
      </div>
    </div>
  </div>
</template>
<script setup>
import bannerTitle from '@/components/BannerTitle.vue'
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
const images = [
  {
    src: 'img/01.jpg',
    alt: '櫃台環境照'
  },
  {
    src: 'img/02.jpg',
    alt: '門口環境照'
  },
  {
    src: 'img/03.jpg',
    alt: '沙發區環境照'
  },
  {
    src: 'img/04.jpg',
    alt: '會議室環境照'
  },
  {
    src: 'img/05.jpg',
    alt: '出租環境照'
  },
  {
    src: 'img/06.jpg',
    alt: '出租辦公室'
  },
  {
    src: 'img/07.jpg',
    alt: '大辦公桌'
  }
]
const visible = ref(false)
const currentIndex = ref(0)
const openLightbox = (index) => {
  currentIndex.value = index
  visible.value = true
}
</script>
