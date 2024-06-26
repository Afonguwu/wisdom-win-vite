<template>
  <div class="container-xxl">
    <bannerTitle
      style="
        background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url('img/team.jpg');
      "
      >律師團隊</bannerTitle
    >
    <div class="content-div-p">
      <h3 class="fs-5 border-bottom border-info border-2 mb-1 text-info fw-bold">
        {{ internalList.name }}
      </h3>
      <div class="row mb-10 g-5">
        <div
          class="col-8 col-sm-6 col-md-3 p-6 mx-auto"
          style="max-height: 350px"
          v-for="item in internalList.lawyers"
          v-bind:key="item.name"
        >
          <div class="row border p-1 text-center position-relative">
            <div class="col-12 p-2">
              <img
                class="img-fluid h-100 object-fit-scale"
                v-bind:src="item.imageURL"
                v-bind:alt="item.name"
                style="max-height: 250px"
              />
            </div>
            <div class="col-12 m-auto">
              <span class="d-block fs-5 mb-2 text-nowrap text-info">{{ item.title }}</span>
              <h3>
                <a
                  class="stretched-link text-decoration-none text-nowrap fw-bold"
                  v-on:click="gotoProfile(item.name, internalList.name)"
                  type="button"
                  >{{ item.name }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <h3 class="fs-5 border-bottom border-info border-2 mb-1 text-info fw-bold">
        {{ jointList.name }}
      </h3>
      <div class="row mb-10 g-5">
        <div
          class="col-12 col-sm-6 col-md-3 p-6"
          style="max-height: 350px"
          v-for="item in jointList.lawyers"
          v-bind:key="item.name"
        >
          <div class="row border p-1 text-center position-relative">
            <div class="col-12 p-1">
              <img
                class="img-fluid h-100"
                v-bind:src="item.imageURL"
                v-bind:alt="item.name"
                style="max-height: 250px"
              />
            </div>
            <div class="col-12 m-auto">
              <span class="d-block fs-5 mb-2 text-nowrap text-info">{{ item.title }}</span>
              <h3>
                <a
                  class="stretched-link text-decoration-none text-nowrap fw-bold"
                  v-on:click="gotoProfile(item.name, jointList.name)"
                  type="button"
                  >{{ item.name }}
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import bannerTitle from '@/components/BannerTitle.vue'
//import { selectItem } from '@/assets/util/profileFn.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const gotoProfile = (name, cat) => {
  router.push({ name: 'profile', params: { cat: cat, name: name } })
}

import teamData from '@/assets/data/team.json'
const internalList = ref(teamData[0])
const jointList = ref(teamData[1])
</script>
