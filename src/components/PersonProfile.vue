<template>
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
        <span class="d-block fs-4 mb-2 text-nowrap text-info">所長</span>
        <h3 class="text-nowrap fw-bold fs-2">謝小名律師</h3>
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
        <p>律師執照</p>
        <p>地政士執照</p>
        <p>不動產經紀人執照</p>
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
        <p>智勝法律事務所所長</p>
        <p>高雄大學法律系研究所碩專班</p>
        <p>高雄市立空中大學法政學系</p>
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
        <p>全台灣(南部為主)</p>
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
</template>
<script>
import { teamStore } from '@/stores/teamStore'
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const teamList = teamStore()
    const chart = ref(null)
    onMounted(() => {
      teamList.initChart(chart)
    })
  }
}
</script>
