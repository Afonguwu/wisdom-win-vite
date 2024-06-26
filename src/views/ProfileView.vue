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
        <div class="row p-4 mb-6 border-bottom border-secondary">
          <div class="col-12 p-1 text-center">
            <img class="img-fluid" :src="selectedItem.imageURL" alt="" style="max-height: 250px" />
          </div>
          <div class="col-12 m-auto text-center">
            <span class="d-block fs-4 mb-2 text-nowrap text-info">{{ selectedItem.title }}</span>
            <h3 class="text-nowrap fw-bold fs-2">{{ selectedItem.name }}</h3>
          </div>
        </div>
        <!-- profile content -->
        <div class="contain-div-p px-6">
          <!-- certificate -->
          <div class="row mb-6">
            <div class="col-12 col-md-3 mb-4">
              <h4 class="text-primary fw-bold d-flex align-items-center">
                <span class="material-symbols-outlined">badge</span>
                證照
              </h4>
            </div>
            <div class="clo-12 col-md-8 lh-sm fs-5">
              <p class="" v-for="item in selectedItem.certificate" v-bind:key="item">
                {{ item }}
              </p>
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
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, watchEffect } from 'vue'
import Collapse from 'bootstrap/js/dist/collapse'
import teamData from '@/assets/data/team.json'
import c3 from 'c3'

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
//add collapse
onMounted(() => {
  sideCollapse1 = new Collapse(collapse1.value, { toggle: false })
  sideCollapse2 = new Collapse(collapse2.value, { toggle: false })
})

// c3 chart
const initChart = (category) => {
  const ary = category
  c3.generate({
    data: {
      // iris data from R
      columns: ary,
      type: 'pie',
      labels: true,
      colors: {
        民事訴訟: 'burlywood',
        刑事辯護: 'lightblue',
        法律扶助: 'lightcoral',
        不動產法律服務: 'cornflowerblue',
        公司法律事務: 'darkcyan',
        繼承規劃: 'darksalmon',
        data4: 'indianred',
        data5: 'lightgreen'
      },
      names: {
        形式辯護: '形式辯護',
        民事訴訟: '民事訴訟',
        法律扶助: '法律扶助'
      }
    },
    tooltip: {
      show: false
    }
  })
}

// select variable
let selectedItem = null

// select function
const selectItem = (name, cat) => {
  const category = teamData.find((item) => item.name === cat)
  if (category) {
    const item = category.lawyers.find((item) => item.name === name)
    if (item) {
      selectedItem = item
    }
  }
}

//init function
const init = (item, cat) => {
  router.push({
    params: { name: item, cat: cat }
  })
  selectItem(item, cat)
}
//change route params (sidebar v-on)
const change = (item, cat) => {
  router.push({
    params: { name: item, cat: cat }
  })
  // close collapse
  if (sideCollapse1._isShown && sideCollapse2._isShown) {
    sideCollapse1.hide()
    sideCollapse2.hide()
    iconValue1.value = false
    iconValue2.value = false
  }
}
//event listen
watchEffect(() => {
  init(route.params.name, route.params.cat)
  initChart(selectedItem.category)
})
//first init
onMounted(() => {
  init(route.params.name, route.params.cat)
  initChart(selectedItem.category)
})
</script>
<style>
.c3-legend-item {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
}
</style>
