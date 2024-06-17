<template>
  <header
    class="navbar navbar-expand-lg fixed-top bg-primary"
    :class="{ opaque: scrollPosition }"
    data-bs-theme="dark"
  >
    <nav class="container-xxl">
      <router-link class="navbar-brand overflow-hidden" to="/">
        <h1>智勝法律事務所</h1>
      </router-link>
      <button
        class="navbar-toggler d-lg-none border-0 p-0 shadow-none"
        type="button"
        v-on:click="toggleCollapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="collapse">
        <ul class="navbar-nav w-100 fs-5 justify-content-end ms-auto mt-2 mt-lg-0">
          <li class="nav-item text-center">
            <router-link
              class="nav-link text-nowrap"
              v-bind:to="{ path: '/', hash: '#about' }"
              v-on:click="closeCollapse"
            >
              關於智勝
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap" to="/serve" v-on:click="closeCollapse">
              服務項目
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap" to="/team" v-on:click="closeCollapse">
              律師團隊
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap" to="/contact" v-on:click="closeCollapse">
              聯絡我們
            </router-link>
          </li>
          <li class="nav-item text-center">
            <router-link class="nav-link text-nowrap" to="/joint" v-on:click="closeCollapse">
              合署資訊
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Collapse from 'bootstrap/js/dist/collapse'

// header scroll background
const scrollPosition = ref(window.scrollY > 0)
const handleScroll = () => {
  if (window.scrollY > 0) {
    scrollPosition.value = true
  } else {
    scrollPosition.value = false
  }
}
onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})

// collapse control
const collapse = ref(null)
let collapseInstance = null
// ham icon
const toggleCollapse = () => {
  if (collapseInstance) {
    collapseInstance.toggle()
  }
}
// collapse items
const closeCollapse = () => {
  console.log(collapseInstance)
  if (collapseInstance && collapseInstance._isShown) {
    collapseInstance.hide()
  }
}
// tap out of collapse
const handleClickOutside = (event) => {
  if (collapse.value && !collapse.value.contains(event.target)) {
    closeCollapse()
  }
}

onMounted(() => {
  // collapse control
  document.addEventListener('click', handleClickOutside)
  collapseInstance = new Collapse(collapse.value, { toggle: false })
})
onUnmounted(() => {
  // collapse control
  document.removeEventListener('click', handleClickOutside)
})
</script>
