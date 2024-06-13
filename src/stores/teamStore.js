import { defineStore } from 'pinia'
import c3 from 'c3'
//import { useRouter } from 'vue-router'
//import * as d3 from 'd3'
export const teamStore = defineStore({
  id: 'team',
  state: () => ({
    lawyers: [
      {
        id: 1,
        name: '主持律師',
        list: [
          {
            id: 101,
            name: '謝曉明律師',
            imageURL:
              'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '所長',
            certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
            experience: [
              '智勝法律事務所所長',
              '高雄大學法律研究所碩專班',
              '高雄市立空中大學法政學系'
            ],
            area: ['全台灣(南部為主)'],
            category: [
              ['民事訴訟', 30],
              ['刑事辯護', 20],
              ['法律扶助', 50]
            ]
          },
          {
            id: 102,
            name: '謝小花律師',
            imageURL:
              'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '主持律師',
            certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
            experience: [
              '智勝法律事務所所長',
              '高雄大學法律研究所碩專班',
              '高雄市立空中大學法政學系'
            ],
            area: ['全台灣(南部為主)'],
            category: [
              ['不動產法律服務', 70],
              ['刑事辯護', 20],
              ['繼承規劃', 10]
            ]
          },
          {
            id: 103,
            name: '謝小羊律師',
            imageURL:
              'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '主持律師',
            certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
            experience: [
              '智勝法律事務所所長',
              '高雄大學法律研究所碩專班',
              '高雄市立空中大學法政學系'
            ],
            area: ['全台灣(南部為主)'],
            category: [
              ['繼承規劃', 30],
              ['公司法律事務', 10],
              ['法律扶助', 50],
              ['民事訴訟', 50]
            ]
          }
        ]
      },
      {
        id: 2,
        name: '合署律師',
        targetValue: 0,
        list: [
          {
            id: 201,
            name: '黃曉芳律師',
            imageURL:
              'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '合署律師',
            certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
            experience: [
              '智勝法律事務所所長',
              '高雄大學法律研究所碩專班',
              '高雄市立空中大學法政學系'
            ],
            area: ['全台灣(南部為主)'],
            category: [
              ['刑事辯護', 30],
              ['繼承規劃', 20],
              ['法律扶助', 50],
              ['不動產法律服務', 10]
            ]
          },
          {
            id: 202,
            name: '張志宏律師',
            imageURL:
              'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '合署律師',
            certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
            experience: [
              '智勝法律事務所所長',
              '高雄大學法律研究所碩專班',
              '高雄市立空中大學法政學系'
            ],
            area: ['全台灣(南部為主)'],
            category: [
              ['不動產法律服務', 10],
              ['民事訴訟', 30],
              ['刑事辯護', 20],
              ['法律扶助', 50]
            ]
          },
          {
            id: 203,
            name: '葉小愛律師',
            imageURL:
              'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '合署律師',
            certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
            experience: [
              '智勝法律事務所所長',
              '高雄大學法律研究所碩專班',
              '高雄市立空中大學法政學系'
            ],
            area: ['全台灣(南部為主)'],
            category: [
              ['民事訴訟', 30],
              ['刑事辯護', 20],
              ['法律扶助', 50],
              ['不動產法律服務', 10]
            ]
          }
        ]
      }
    ],
    selectedItem: null,
    selectedCat: null
  }),
  actions: {
    initChart(category) {
      const ary = category
      //console.log(ary)
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
    },
    selectItem(name, cat) {
      const category = this.lawyers.find((item) => item.name === cat)
      if (category) {
        this.selectedCat = category.name
        const item = category.list.find((item) => item.name === name)
        if (item) {
          this.selectedItem = item
        }
      }
    }
  }
})
