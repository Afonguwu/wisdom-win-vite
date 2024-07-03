<template>
  <div>
    <div class="row g-3">
      <div class="col-12 col-sm-4">
        <div class="card text-center py-4 border-warning-subtle fw-bold" ref="yearDOM">
          <p class="text-info fs-1 fw-bold mb-0 number">{{ `${yearValue}年 ` }}</p>
          <p class="text-info-emphasis mb-0 fs-5 d-flex align-items-center justify-content-center">
            <span class="material-symbols-outlined pe-1">flag</span>運營時間
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="card text-center py-4 border-warning-subtle fw-bold" ref="caseDOM">
          <p class="text-info fs-1 fw-bold mb-0 number">{{ `${caseNum}+` }}</p>
          <p class="text-info-emphasis mb-0 fs-5 d-flex align-items-center justify-content-center">
            <span class="material-symbols-outlined pe-1">library_books</span>總案件數
          </p>
        </div>
      </div>
      <div class="col-12 col-sm-4">
        <div class="card text-center py-4 border-warning-subtle fw-bold" ref="customerDOM">
          <p class="text-info fs-1 fw-bold mb-0 number">{{ `${customerNum}+` }}</p>
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

// ref
const yearDOM = ref(null)
const caseDOM = ref(null)
const customerDOM = ref(null)

// variable
const currentYear = new Date().getFullYear()
const START_YEAR = 2011
const totalYear = currentYear - START_YEAR
const yearValue = ref(0)

const customerNum = ref(3000)

const caseNum = ref(7000)

// animate function
const DURATION = 1500
const animate = (initialValue, targetValue, getValue, setValue) => {
  const startTime = performance.now()

  const updateNumber = (currentTime) => {
    const elapsedTime = currentTime - startTime
    const progress = Math.min(elapsedTime / DURATION, 1)
    const currentValue = initialValue + progress * (targetValue - initialValue)
    setValue(Math.round(currentValue))

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
        case yearDOM.value:
          animate(
            0,
            totalYear,
            () => yearValue.value,
            (val) => (yearValue.value = val)
          )
          break
        case caseDOM.value:
          animate(
            0,
            caseNum.value,
            () => caseNum.value,
            (val) => (caseNum.value = val)
          )
          break
        case customerDOM.value:
          animate(
            0,
            customerNum.value,
            () => customerNum.value,
            (val) => (customerNum.value = val)
          )
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
  observer.observe(yearDOM.value)
  observer.observe(caseDOM.value)
  observer.observe(customerDOM.value)
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
