<template>
  <h3 class="fs-5 border-bottom border-info border-2 mb-1 text-info fw-bold">{{internal.name}}</h3>
  <div class="row justify-content-between mb-3">
    <div class="col-12 col-md-6 col-lg-4 px-6 py-3 position-relative"
    style="max-height:350px"
    v-for="item in internal.lawyers" v-bind:key="item.name">
      <div class="row border p-4">
          <div class="col-4 p-1">
            <img class="img-fluid" v-bind:src="item.imageURL" v-bind:alt="item.name"
            style="max-height:250px">
          </div>
          <div class="col-6 m-auto">
            <span class="d-block fs-5 mb-2 text-nowrap text-info">{{item.title}}</span>
            <h3>
              <router-link to="/profile" class="stretched-link
              text-decoration-none text-nowrap fw-bold">{{item.name}}</router-link>
            </h3>
          </div>
      </div>
    </div>
  </div>
  <h3 class="fs-5 border-bottom border-info border-2 mb-1 text-info fw-bold">{{joint.name}}</h3>
  <div class="row justify-content-between mb-3">
    <div class="col-12 col-md-6 col-lg-4 px-6 py-3 position-relative"
    v-for="item in joint.lawyers" v-bind:key="item.name"
    style="max-height:350px">
      <div class="row border p-4">
        <div class="col-4 p-1">
          <img class="img-fluid" v-bind:src="item.imageURL" v-bind:alt="item.name"
          style="max-height:250px">
        </div>
        <div class="col-6 m-auto">
          <span class="d-block fs-5 mb-2 text-nowrap text-info">{{item.title}}</span>
          <h3>
          <router-link to="/profile" class="stretched-link
            text-decoration-none text-nowrap fw-bold">{{item.name}}</router-link>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { myStore } from '@/stores/teamStore';

export default {
  setup() {
    const teamList = myStore();

    return {
      internal: teamList.internal,
      joint: teamList.joint,
    };
  },
};

</script>
