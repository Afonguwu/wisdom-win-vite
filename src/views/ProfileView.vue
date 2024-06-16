<template>
  <div class="container-xxl">
    <div class="row content-div-p flex-column flex-lg-row">
      <!-- lawyers list -->
      <div class="col-12 col-lg-4 d-flex flex-column mb-6">
        <div class="mb-2">
          <button
            class="text-info bg-info-subtle border border-info-subtle py-2 fs-5 w-100 arrow-down"
            type="button"
            v-on:click="iconValue1 = !iconValue1"
            v-bind:class="{ 'arrow-up': iconValue1 }"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLocalLawyer"
            aria-expanded="false"
            aria-controls="collapseLocalLawyer"
          >
            {{ internalList.name }}
          </button>
          <ul class="collapse list-unstyled text-center fs-5" id="collapseLocalLawyer">
            <li class="py-2 list-hover" v-for="item in internalList.list" v-bind:key="item.name">
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
            v-on:click="iconValue2 = !iconValue2"
            v-bind:class="{ 'arrow-up': iconValue2 }"
            data-bs-toggle="collapse"
            data-bs-target="#collapseJointLawyer"
            aria-expanded="false"
            aria-controls="collapseJointLawyer"
          >
            {{ jointList.name }}
          </button>
          <ul class="collapse list-unstyled text-center fs-5" id="collapseJointLawyer">
            <li class="py-2 list-hover" v-for="item in jointList.list" v-bind:key="item.name">
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
            <img
              class="img-fluid"
              src="https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style="max-height: 400px"
            />
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

<script>
import { useRouter, useRoute } from 'vue-router'
import { teamStore } from '@/stores/teamStore'
import { onMounted, ref, watchEffect, computed } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const teamList = teamStore()
    const internalList = teamList.lawyers[0]
    const jointList = teamList.lawyers[1]
    const initChart = (category) => {
      teamList.initChart(category)
    }
    // list arrow-icon change
    const iconValue1 = ref(0)
    const iconValue2 = ref(0)
    const selectItem = (name, cat) => {
      teamList.selectItem(name, cat)
    }
    const selectedItem = computed(() => teamList.selectedItem)
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
      //console.log(route.params, teamList.selectedItem)
      init(route.params.name, route.params.cat)
      initChart(teamList.selectedItem.category)
      //console.log(teamList.selectedItem)
    })
    //初始渲染
    onMounted(() => {
      //console.log(route.params, teamList.selectedItem)
      init(teamList.selectedItem.name, teamList.selectedCat)
      initChart(teamList.selectedItem.category)
    })
    //
    return {
      internalList,
      jointList,
      iconValue1,
      iconValue2,
      selectedItem,
      change
    }
  }
}
</script>
