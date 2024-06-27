<template>
  <swiper
    ref="{swiperRef}"
    :slidesPerView="1"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
    :spaceBetween="10"
    :pagination="{
      clickable: true
    }"
    :navigation="true"
    :breakpoints="{
      '400': {
        slidesPerView: 2,
        spaceBetween: 10
      },
      '620': {
        slidesPerView: 3,
        spaceBetween: 30
      },
      '880': {
        slidesPerView: 4,
        spaceBetween: 40
      },
      '1200': {
        slidesPerView: 5,
        spaceBetween: 50
      }
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in data.lawyers" v-bind:key="item.name">
      <div class="card p-4 mb-8">
        <img class="top-img" v-bind:src="item.imageURL" v-bind:alt="item.name" />
        <div class="card-body">
          <p class="card-text d-block fs-5 mb-2 text-nowrap text-info">{{ item.title }}</p>
          <h3 class="card-title">
            <a
              class="stretched-link text-decoration-none text-nowrap fw-bold text-center"
              v-on:click="gotoProfile(item.name, data.name)"
              type="button"
            >
              {{ item.name }}
            </a>
          </h3>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
import { useRouter } from 'vue-router'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup() {
    const router = useRouter()
    const gotoProfile = (name, cat) => {
      router.push({ name: 'profile', params: { cat: cat, name: name } })
    }
    return {
      modules: [Autoplay, Pagination, Navigation],
      gotoProfile
    }
  }
}
</script>
<style>
.swiper {
  overflow: hidden;
  width: 100%;
  height: 350px;
  margin: 0 auto;
}
.swiper-slide {
  text-align: center;

  /* Center slide text vertically */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.top-img {
  display: block;
  height: 150px;
  width: 100%;
  object-fit: scale-down;
}

.swiper-pagination-bullet {
  width: 0.8rem;
  height: 0.8rem;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  color: #00a86b;
  font-size: 1.5rem;
}
.swiper-pagination-bullet-active {
  background-color: #00a86b;
}
</style>
