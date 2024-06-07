<template>
    <div class="container-xxl">
        <bannerTitle style="background-image:linear-gradient(rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)),url('https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/joint-banner.jpg?raw=true');">合署資訊</bannerTitle>
        <div class="content-div-p">
            <p class="fs-5 mb-6">若有其他想了解的資訊，歡迎來電詢問！</p>
            <h3 class="fs-2 fw-bold mb-4">地理位置</h3>
            <ul class="list-unstyled fs-5 lh-lg list-icon">
            <li>
                位於中正路與中華路交會處，近捷運橘線市議會站3號出口</li>
            <li>
                往來高雄地方法院、高雄地檢署及高雄律師公會等機關便利</li>
            <li>
                鄰近公車站、Ubike租借點及捷運站，客戶來訪容易</li>
            <li>
                周遭有銀行、郵局、超商、醫院和健身房，商業機能健全</li>
    <!--           可以插入google map -->
            </ul>
            <h3 class="fs-2 fw-bold mb-4">辦公室現狀</h3>
            <ul class="list-unstyled fs-5 lh-lg list-icon">
            <li >
                民國110年7月裝潢竣工，全新獨立辦公室
            </li>
            <li>
                會議室2間（每間可容納約6人），可依需求合併使用</li>
            <li>
                提供有線網路及無線WIFI</li>
            <li >
                提供多功能事務機（影印、列印、傳真、掃描），耗材費另計</li>
            <li>
                提供助理協助代收信件、電話轉接、客戶接待及辦公室環境維護</li>
            </ul>
            <h3 class="fs-2 fw-bold mb-4">合署費用</h3>
            <p class="fs-5 lh-lg">獨立辦公室每月合署費用15000元，可2位律師合租</p>
            <h3 class="fs-2 fw-bold mb-4">環境照片</h3>
            <div class="row">
                <img class="col-6 p-1" src="https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/%E9%96%80%E5%8F%A3.jpg?raw=true" alt="門口環境照">
                <img class="col-6 p-1" src="https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/%E6%B2%99%E7%99%BC%E5%8D%80.jpg?raw=true" alt="沙發區環境照">
                <img class="col-4 p-1" src="https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/%E6%9C%83%E8%AD%B0%E5%AE%A4.jpg?raw=true" alt="會議室環境照">
                <img class="col-4 p-1" src="/img/01.jpg" alt="櫃台環境照">
                <img class="col-4 p-1" src="https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/%E5%87%BA%E7%A7%9F%E7%92%B0%E5%A2%83.jpg?raw=true" alt="出租環境照">
                <img class="col-5 p-1" src="https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/%E5%87%BA%E7%A7%9F%E8%BE%A6%E5%85%AC%E5%AE%A4A.jpg?raw=true" alt="出租辦公室">
                <img class="col-7 p-1" src="https://github.com/Afonguwu/wisdom-win-vite/blob/gh-pages/img/%E5%A4%A7%E8%BE%A6%E5%85%AC%E6%A1%8C.jpg?raw=true" alt="大辦公桌">
            </div>
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
