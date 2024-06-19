<template>
  <div class="col-6 col-lg-4" v-for="item in serveData" v-bind:key="item.name">
    <div class="bg-danger bg-opacity-50 p-3 text-center border border-info-subtle rounded">
      <img
        v-bind:src="item.imageURL"
        v-bind:alt="item.name"
        class="img-fluid align-self-center mb-2"
        style="height: 90px; width: 90px"
      />
      <p class="text mb-0 fw-bold text-nowrap text-primary">{{ item.name }}</p>
    </div>
    <slot v-if="showContent">
      <p class="mt-4 mb-6 text">{{ item.content }}</p>
    </slot>
  </div>
</template>
<script>
import serveData from '@/data/serve.json'

export default {
  props: {
    showContent: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      serveData
    }
  }
}
</script>
