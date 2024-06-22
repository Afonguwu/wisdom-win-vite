<template>
  <div class="container-xxl">
    <div class="row content-div-p flex-column flex-lg-row">
      <!-- lawyers list -->
      <div class="col-12 col-lg-4 d-flex flex-column mb-6">
        <div class="mb-2">
          <button
            class="text-info bg-info-subtle border border-info-subtle py-2 fs-5 w-100 arrow-down"
            type="button"
            v-on:click="toggleSideCollapse1"
            v-bind:class="{ 'arrow-up': iconValue1 }"
            aria-expanded="false"
            aria-controls="collapseLocalLawyer"
          >
            {{ internalList.name }}
          </button>
          <ul
            class="collapse list-unstyled text-center fs-5"
            id="collapseLocalLawyer"
            ref="collapse1"
          >
            <li class="py-2 list-hover" v-for="item in internalList.lawyers" v-bind:key="item.name">
              <button
                type="button"
                class="w-100 text-primary bg-transparent border-0"
                v-on:click="change(item.name, internalList.name)"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <button
            class="text-info bg-info-subtle border border-info-subtle py-2 fs-5 w-100 arrow-down"
            type="button"
            v-on:click="toggleSideCollapse2"
            v-bind:class="{ 'arrow-up': iconValue2 }"
            aria-expanded="false"
            aria-controls="collapseJointLawyer"
          >
            {{ jointList.name }}
          </button>
          <ul
            class="collapse list-unstyled text-center fs-5"
            id="collapseJointLawyer"
            ref="collapse2"
          >
            <li class="py-2 list-hover" v-for="item in jointList.lawyers" v-bind:key="item.name">
              <button
                type="button"
                class="w-100 text-primary bg-transparent border-0"
                v-on:click="change(item.name, jointList.name)"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- lawyer profile -->
      <div class="col-12 col-lg-7 border border-info-subtle mx-auto">
        <!-- name card -->
        <div class="row p-4">
          <div class="col-12 col-lg-3 p-1 text-center text-lg-start">
            <img class="img-fluid" :src="selectedItem.imageURL" alt="" style="max-height: 400px" />
          </div>
          <div class="col-12 col-lg-6 m-auto text-center text-lg-start">
            <span class="d-block fs-4 mb-2 text-nowrap text-info">{{ selectedItem.title }}</span>
            <h3 class="text-nowrap fw-bold fs-2">{{ selectedItem.name }}</h3>
          </div>
        </div>
        <!-- profile content -->
        <!-- certificate -->
        <div class="row mb-6 contain-div-p">
          <div class="col-12 col-sm-3 mb-4">
            <h4 class="text-primary fw-bold d-flex align-items-center">
              <span class="material-symbols-outlined">badge</span>
              證照
            </h4>
          </div>
          <div class="col-12 col-sm-8 lh-sm fs-5">
            <p v-for="item in selectedItem.certificate" v-bind:key="item">{{ item }}</p>
          </div>
        </div>
        <!-- experience -->
        <div class="row mb-6">
          <div class="col-12 col-md-3 mb-4">
            <h4 class="text-primary fw-bold d-flex align-items-center">
              <span class="material-symbols-outlined">school</span>
              學經歷
            </h4>
          </div>
          <div class="clo-12 col-md-8 fs-5 lh-sm">
            <p v-for="item in selectedItem.experience" v-bind:key="item">{{ item }}</p>
          </div>
        </div>
        <!-- area -->
        <div class="row mb-6">
          <div class="col-12 col-md-3 mb-4">
            <h4 class="text-primary fw-bold d-flex align-items-center text-nowrap">
              <span class="material-symbols-outlined">pin_drop</span>
              服務地區
            </h4>
          </div>
          <div class="clo-12 col-md-8 fs-5 lh-sm">
            <p v-for="item in selectedItem.area" v-bind:key="item">{{ item }}</p>
          </div>
        </div>
        <!-- category -->
        <div class="row mb-6">
          <div class="col-12 col-md-3 mb-4">
            <h4 class="text-primary fw-bold d-flex align-items-center text-nowrap">
              <span class="material-symbols-outlined">trip</span>
              業務類別
            </h4>
          </div>
          <div class="clo-12 col-md-8 fs-5">
            <div id="chart" ref="chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'
import Collapse from 'bootstrap/js/dist/collapse'
import teamData from '@/data/team.json'
import { selectItem, selectedItem, initChart } from '@/util/profileFn.js'

const router = useRouter()
const route = useRoute()
const internalList = ref(teamData[0])
const jointList = ref(teamData[1])

// toggle sideCollapse icon change
const iconValue1 = ref(0)
const iconValue2 = ref(0)

// toggle sideCollapse
const collapse1 = ref(null)
let sideCollapse1 = null
const toggleSideCollapse1 = () => {
  if (sideCollapse1) {
    sideCollapse1.toggle()
    iconValue1.value = !iconValue1.value
  }
}
const collapse2 = ref(null)
let sideCollapse2 = null
const toggleSideCollapse2 = () => {
  if (sideCollapse2) {
    sideCollapse2.toggle()
    iconValue2.value = !iconValue2.value
  }
}
onMounted(() => {
  sideCollapse1 = new Collapse(collapse1.value, { toggle: false })
  sideCollapse2 = new Collapse(collapse2.value, { toggle: false })
})

//渲染函式
const init = (item, cat) => {
  router.push({
    params: { name: item, cat: cat }
  })
  selectItem(item, cat)
}
//變更路由變數 (sidebar v-on)
const change = (item, cat) => {
  router.push({
    params: { name: item, cat: cat }
  })
}
//監聽路由參數
watchEffect(() => {
  init(route.params.name, route.params.cat)
  initChart(selectedItem.category)
})
//初始渲染
onMounted(() => {
  init(route.params.name, route.params.cat)
  initChart(selectedItem.category)
})
</script>
