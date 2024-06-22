import teamData from '@/data/team.json'
import c3 from 'c3'

let selectedItem = null
let selectedCat = null
const initChart = (category) => {
  const ary = category
  c3.generate({
    data: {
      // iris data from R
      columns: ary,
      type: 'pie',
      labels: true,
      colors: {
        民事訴訟: 'burlywood',
        刑事辯護: 'lightblue',
        法律扶助: 'lightcoral',
        不動產法律服務: 'cornflowerblue',
        公司法律事務: 'darkcyan',
        繼承規劃: 'darksalmon',
        data4: 'indianred',
        data5: 'lightgreen'
      },
      names: {
        形式辯護: '形式辯護',
        民事訴訟: '民事訴訟',
        法律扶助: '法律扶助'
      }
    },

    tooltip: {
      show: false
    }
  })
}
const selectItem = (name, cat) => {
  const category = teamData.find((item) => item.name === cat)
  if (category) {
    selectedCat = category.name
    const item = category.lawyers.find((item) => item.name === name)
    if (item) {
      selectedItem = item
    }
  }
}
export { selectedItem, selectedCat, initChart, selectItem }
