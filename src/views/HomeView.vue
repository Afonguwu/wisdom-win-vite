<template>
  <div class="container-xxl">
    <div class="banner-img mb-10 d-flex mx-auto">
      <div class="w-100 align-self-bottom banner-color mt-auto p-10 d-flex flex-column align-items-center text-center">
        <div class="text-info-emphasis mb-3 text-nowrap">
          <p class="fs-2 fw-bold mb-0">WISDOM & WIN</p>
          <p class="display-1 fw-bold mb-0">以智取勝</p>
        </div>
        <router-link class="btn-action btn-dark fs-5" to="/contact" type="button"> 聯絡我們 </router-link>
      </div>
    </div>
    <!-- serve -->
    <div class="mx-auto py-10" data-aos="fade-up">
      <h2 class="title text-primary mb-6">服務項目</h2>
      <div class="row g-3 mb-6">
        <serveCard />
      </div>
      <router-link class="btn-action btn-light btn-align fs-5" to="/serve"> more </router-link>
    </div>
    <!-- team -->
    <div class="py-10 mb-10" data-aos="fade-up">
      <h2 class="title mb-6 text-primary">律師團隊</h2>
      <h3 class="fs-4 border-bottom border-info-subtle border-3 mb-1 pb-2 text-info fw-bold">
        {{ internalList.name }}
      </h3>
      <teamSwiper v-bind:data="internalList"></teamSwiper>
      <h3 class="fs-4 border-bottom border-info-subtle border-3 mb-1 pb-2 text-info fw-bold">
        {{ jointList.name }}
      </h3>
      <teamSwiper v-bind:data="jointList"></teamSwiper>
      <router-link class="btn-action btn-light fs-5 btn-align mt-4" to="/team"> more </router-link>
    </div>
    <!-- about -->
    <div class="bg-danger-subtle p-10 mb-10" id="about" data-aos="fade-up">
      <h2 class="title mb-6 text-primary">關於智勝</h2>
      <p class="text text-primary">智勝法律事務所自2011年創立，致力於提供優質、專業及客製化的法律服務。</p>
      <p class="mb-6 text text-primary">
        我們擁有豐富經驗和多元專業，提供全面法律諮詢、訴訟策略制定，以及繼承案件解決方案。我們注重客戶需求，為每位客戶提供度身訂製的法律解決方案，成為值得信賴的法律合作夥伴。
      </p>
      <aboutNumber />
    </div>
    <!-- rent -->
    <div class="border p-9 mb-10" data-aos="fade-right">
      <h2 class="title text-primary mb-4">合署資訊</h2>
      <p class="text text-info text-center">提供合屬律師明亮乾淨的辦公室</p>
      <div class="row">
        <div class="col-lg-6 col-12 text-center mb-4 mx-auto mb-lg-0 row">
          <img src="/img/06.jpg" class="col-6 col-md-7" style="max-height: 350px" alt="出租辦公室" />
          <img src="/img/08.jpg" class="col-6 col-md-5" style="max-height: 350px" alt="大樓外觀" />
        </div>
        <div class="col-lg-6 col-12 d-flex flex-column justify-content-between">
          <ul
            class="fs-5 list-unstyled w-100 d-flex flex-column justify-content-between h-75 list-icon align-self-center align-self-lg-start"
          >
            <li class="mb-3">地理位置進高雄各司法機關及市中心</li>
            <li class="mb-3">樓層經重新裝修</li>
            <li class="mb-3">事務所助理協助代收信、接聽電話</li>
            <li class="mb-3">提供辦公設備及耗材</li>
          </ul>
          <router-link class="btn-action btn-light fs-5 btn-align" to="/joint">more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ref } from 'vue'

import teamData from '@/data/team.json'
const internalList = ref(teamData[0])
const jointList = ref(teamData[1])

import teamSwiper from '@/components/TeamSwiper.vue'
import serveCard from '@/components/ServeCard.vue'
import aboutNumber from '@/components/AboutNumber.vue'

AOS.init()
</script>
