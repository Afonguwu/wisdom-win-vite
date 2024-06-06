<template>
    <div class="container-xxl">
        <div class="row content-div-p flex-column flex-lg-row">
            <!-- lawyers list -->
            <div class="col-12 col-lg-4 d-flex flex-column mb-6">
                <div class="mb-2">
                    <button class="text-info bg-info-subtle
                    border border-info-subtle py-2 fs-5 w-100 arrow-down" type="button"
                    v-on:click="iconValue1 = !iconValue1" v-bind:class="{'arrow-up':iconValue1}"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLocalLawyer"
                    aria-expanded="false" aria-controls="collapseLocalLawyer">
                        {{internal.name}}
                    </button>
                    <ul class="collapse list-unstyled text-center fs-5"
                    id="collapseLocalLawyer">
                        <li class="py-2 list-hover"
                        v-for="item in internal.lawyers" v-bind:key="item.name">
                            <a class="text-decoration-none d-block text-primary"
                            href="#">{{item.name}}</a></li>
                    </ul>
                </div>
                <div>
                    <button class="text-info bg-info-subtle
                    border border-info-subtle py-2 fs-5 w-100 arrow-down" type="button"
                    v-on:click="iconValue2 = !iconValue2" v-bind:class="{'arrow-up':iconValue2}"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseJointLawyer"
                    aria-expanded="false" aria-controls="collapseJointLawyer">
                        {{joint.name}}
                    </button>
                    <ul class="collapse list-unstyled text-center fs-5" id="collapseJointLawyer">
                    <li class="py-2 list-hover"
                    v-for="item in joint.lawyers" v-bind:key="item.name">
                        <a class="text-decoration-none d-block text-primary"
                        href="#">{{item.name}}</a></li>
                    </ul>
                </div>
            </div>
            <!-- lawyer profile -->
            <div class="col-12 col-lg-7 border border-info-subtle mx-auto ">
                <!-- name card -->
                <div class="row p-4 ">
                    <div class="col-12 col-lg-3 p-1 text-center text-lg-start">
                        <img class="img-fluid" src="https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        style="max-height:400px">
                    </div>
                    <div class="col-12 col-lg-6 m-auto text-center text-lg-start">
                        <span class="d-block fs-4 mb-2 text-nowrap text-info">所長</span>
                        <h3 class=" text-nowrap fw-bold fs-2">
                            謝小名律師
                        </h3>
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
                    <div class="clo-12 col-md-8 fs-5 ">
                        <pieChart></pieChart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import { myStore } from '@/stores/teamStore';
import { ref } from 'vue';
import pieChart from '@/components/PieChart.vue';

export default {
  setup() {
    const teamList = myStore();
    // list arrow-icon change
    const iconValue1 = ref(0);
    const iconValue2 = ref(0);
    // d3
    const chartData = ref([1, 1, 2, 3, 5, 8, 13, 21]);
    //
    return {
      internal: teamList.internal,
      joint: teamList.joint,
      iconValue1,
      iconValue2,
      chartData,
      pieChart,
    };
  },
};

</script>
<style>
svg {
  /* important for responsiveness */
  display: block;
  fill: none;
  stroke: none;
  width: 100%;
  height: 100%;
  overflow: visible;
  background: #eee;
}
</style>
