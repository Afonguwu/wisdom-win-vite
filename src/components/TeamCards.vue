<template>
  <h3 class="fs-5 border-bottom border-info border-2 mb-1 text-info fw-bold">
    {{ internalList.name }}
  </h3>
  <div class="row justify-content-between mb-3">
    <div
      class="col-12 col-md-6 col-lg-4 px-6 py-3 position-relative"
      style="max-height: 350px"
      v-for="item in internalList.list"
      v-bind:key="item.name"
    >
      <div class="row border p-4">
        <div class="col-4 p-1">
          <img
            class="img-fluid"
            v-bind:src="item.imageURL"
            v-bind:alt="item.name"
            style="max-height: 250px"
          />
        </div>
        <div class="col-6 m-auto">
          <span class="d-block fs-5 mb-2 text-nowrap text-info">{{ item.title }}</span>
          <h3>
            <router-link
              to="/profile/:cat/:name"
              class="stretched-link text-decoration-none text-nowrap fw-bold"
              v-on:click="selectItem(item.name, internalList.name)"
              >{{ item.name }}</router-link
            >
          </h3>
        </div>
      </div>
    </div>
  </div>
  <h3 class="fs-5 border-bottom border-info border-2 mb-1 text-info fw-bold">
    {{ jointList.name }}
  </h3>
  <div class="row justify-content-between mb-3">
    <div
      class="col-12 col-md-6 col-lg-4 px-6 py-3 position-relative"
      v-for="item in jointList.list"
      v-bind:key="item.name"
      style="max-height: 350px"
    >
      <div class="row border p-4">
        <div class="col-4 p-1">
          <img
            class="img-fluid"
            v-bind:src="item.imageURL"
            v-bind:alt="item.name"
            style="max-height: 250px"
          />
        </div>
        <div class="col-6 m-auto">
          <span class="d-block fs-5 mb-2 text-nowrap text-info">{{ item.title }}</span>
          <h3>
            <router-link
              to="/profile/:cat/:name"
              class="stretched-link text-decoration-none text-nowrap fw-bold"
              v-on:click="selectItem(item.name, jointList.name)"
              >{{ item.name }}</router-link
            >
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { teamStore } from '@/stores/teamStore'
import { ref } from 'vue'
export default {
  setup() {
    const teamList = teamStore()
    const internalList = ref(teamList.lawyers[0])
    const jointList = ref(teamList.lawyers[1])
    const selectItem = (name, cat) => {
      teamList.selectItem(name, cat)
    }

    return {
      internalList,
      jointList,
      selectItem
    }
  }
}
</script>
