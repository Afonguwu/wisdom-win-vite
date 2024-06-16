<template>
  <div class="container-xxl">
    <div class="banner-img mb-10 d-flex mx-auto">
      <div
        class="w-100 align-self-bottom banner-color mt-auto p-10 d-flex flex-column align-items-center text-center"
      >
        <div class="text-info-emphasis mb-3 text-nowrap">
          <p class="fs-2 fw-bold mb-0">
            <span class="text-info">WISDOM</span> & <span class="text-info">WIN</span>
          </p>
          <p class="display-1 fw-bold">
            以<span class="text-info">智</span>取<span class="text-info">勝</span>
          </p>
        </div>
        <router-link class="btn-action btn-dark fs-5" to="/contact"> 聯絡我們 </router-link>
      </div>
    </div>
    <!-- serve -->
    <div class="mx-auto py-10">
      <h2 class="title text-primary mb-6">服務項目</h2>
      <div class="row g-3 mb-4">
        <serveCard></serveCard>
      </div>
      <router-link class="btn-action btn-light fs-6 ms-auto" to="/serve"> more </router-link>
    </div>
    <!-- team -->
    <div class="py-10 mb-10">
      <h2 class="title mb-6 text-primary">律師團隊</h2>
      <teamBlock></teamBlock>
      <router-link class="btn-action btn-light fs-6 ms-auto" to="/team"> more </router-link>
    </div>
    <!-- about -->
    <div class="bg-danger-subtle p-10 mb-10" id="about">
      <h2 class="title mb-6 text-primary">關於智勝</h2>
      <p class="text text-primary">
        智勝法律事務所自2011年創立，致力於提供優質、專業及客製化的法律服務。
      </p>
      <p class="mb-6 text text-primary">
        我們擁有豐富經驗和多元專業，提供全面法律諮詢、訴訟策略制定，以及繼承案件解決方案。我們注重客戶需求，為每位客戶提供度身訂製的法律解決方案，成為值得信賴的法律合作夥伴。
      </p>
      <div class="row">
        <img
          class="col-6"
          src="https://plus.unsplash.com/premium_photo-1661496148632-514dd2197691?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          class="col-6"
          src="https://plus.unsplash.com/premium_photo-1661421746164-b8b53de3bd4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <!-- rent -->
    <div class="border p-9 mb-10">
      <h2 class="title text-primary mb-4">合署資訊</h2>
      <p class="text text-info text-center">提供合屬律師明亮乾淨的辦公室</p>
      <div class="row">
        <div class="col-lg-4 col-12 text-center mb-4 mb-lg-0">
          <img
            src="/img/06.jpg"
            class="img-fluid rounded"
            style="max-height: 350px"
            alt="出租辦公室"
          />
        </div>
        <div class="col-lg-8 col-12 d-flex flex-column justify-content-between mx-auto">
          <ul class="text list-unstyled d-flex flex-column justify-content-between h-75 list-icon">
            <li>地理位置進高雄各司法機關及市中心</li>
            <li>樓層經重新裝修</li>
            <li>事務所助理協助代收信、接聽電話</li>
            <li>提供辦公設備及耗材</li>
          </ul>
          <router-link class="btn-action btn-light fs-6 ms-auto" to="/joint">more</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import serveCard from '@/components/ServeCard.vue'
import teamBlock from '@/components/TeamCards.vue'

export default {
  components: {
    serveCard,
    teamBlock
  }
}
</script>
