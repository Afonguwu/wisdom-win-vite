<template>
  <div>
    <div class="row g-3">
      <div class="col-12 col-sm-4">
        <div class="card text-center py-4 border-warning-subtle fw-bold" ref="animate1">
          <p class="text-info fs-1 fw-bold mb-0 number">{{ `${yearValue}年 ` }}</p>
          <p class="text-info-emphasis mb-0 fs-5 d-flex align-items-center justify-content-center">
            <span class="material-symbols-outlined pe-1">flag</span>運營時間
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="card text-center py-4 border-warning-subtle fw-bold" ref="animate2">
          <p class="text-info fs-1 fw-bold mb-0 number">{{ `${caseNum}+` }}</p>
          <p class="text-info-emphasis mb-0 fs-5 d-flex align-items-center justify-content-center">
            <span class="material-symbols-outlined pe-1">library_books</span>總案件數
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="card text-center py-4 border-warning-subtle fw-bold" ref="animate3">
          <p class="text-info fs-1 fw-bold mb-0 number">{{ `${cusNum}+` }}</p>
          <p class="text-info-emphasis mb-0 fs-5 d-flex align-items-center justify-content-center">
            <span class="material-symbols-outlined pe-1">groups_3</span>總客戶數
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted, onMounted, ref } from 'vue'

//animate speed
const duration = 1500

//year
const animate1 = ref(null)
const currentYear = new Date().getFullYear()
const startYear = 2011
const totalYear = currentYear - startYear
const yearValue = ref(0)
const animateYear = () => {
  const startTime = performance.now()
  const updateNumber = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    yearValue.value = Math.round(progress * totalYear)

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    }
  }
  requestAnimationFrame(updateNumber)
}
//case
const animate2 = ref(null)
const caseNum = ref(7000)
const animateCase = () => {
  const startTime = performance.now()
  const initialCaseNum = caseNum.value
  const updateNumber = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    caseNum.value = Math.round(progress * initialCaseNum)

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    }
  }
  requestAnimationFrame(updateNumber)
}

//customer
const animate3 = ref(null)
const cusNum = ref(3000)
const animateCus = () => {
  const startTime = performance.now()
  const initialCusNum = cusNum.value
  const updateNumber = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / duration, 1)
    cusNum.value = Math.round(progress * initialCusNum)

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    }
  }
  requestAnimationFrame(updateNumber)
}
//entry block start
const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      switch (entry.target) {
        case animate1.value:
          animateYear()
          break
        case animate2.value:
          animateCase()
          break
        case animate3.value:
          animateCus()
          break
        default:
          break
      }
      observer.unobserve(entry.target)
    }
  })
}

//observer
let observer
onMounted(() => {
  observer = new IntersectionObserver(handleIntersect, {
    // 當 n%的元素進入視窗時觸發
    threshold: 0.1
  })
  observer.observe(animate1.value)
  observer.observe(animate2.value)
  observer.observe(animate3.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.number {
  transition: transform 0.2s ease-in-out;
}
</style>
