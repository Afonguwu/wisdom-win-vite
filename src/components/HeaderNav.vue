<template>
  <header class="navbar navbar-expand-lg fixed-top bg-primary"
  :class="{ opaque : scrollPosition }"
  data-bs-theme="dark">
    <nav class="container-xxl">
    <router-link class="navbar-brand overflow-hidden" to ="/">
        <h1>智勝法律事務所</h1>
      </router-link>
      <button class="navbar-toggler d-lg-none border-0 p-0 shadow-none" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-100 fs-4 justify-content-end ms-auto mt-2 mt-lg-0">
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap "
            v-bind:to="{path:'/',hash:'#about'}">關於智勝</router-link>
          </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap " to ="/serve">服務項目</router-link> </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap " to ="/team"> 律師團隊 </router-link> </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap" to ="/contact">聯絡我們</router-link> </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap" to ="/joint">合署資訊</router-link> </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {
  ref, onMounted, onUnmounted,
} from 'vue';

// header scroll background */
const scrollPosition = ref(window.scrollY > 0);
console.log(scrollPosition);
const handleScroll = () => {
  if (window.scrollY > 0) {
    scrollPosition.value = true;
  } else {
    scrollPosition.value = false;
  }
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
