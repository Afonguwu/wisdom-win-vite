import { defineStore } from 'pinia';

export const myStore = defineStore({
  id: 'serves',
  state: () => ({
    serves: [
      {
        name: '民事訴訟',
        imageURL: '/img/balance.png',
        content: '我們的專業律師團隊將協助您在民事訴訟中維護權益，包括合約爭議、財產糾紛等。',
      },
      {
        name: '刑事辯護',
        imageURL: '/img/gavel.png',
        content: '我們具有豐富的刑事辯護經驗，將為您提供專業的法律代理服務，保護您的權利和利益。',
      },
      {
        name: '繼承規劃',
        imageURL: '/img/flow-chart.png',
        content: '我們將協助您制定完善的繼承計劃，包括遺囑起草、財產分配等，以確保您的財產合法有序地傳承。',
      },
      {
        name: '不動產法律服務',
        imageURL: '/img/house.png',
        content: '我們提供專業的不動產法律服務，協助客戶處理各種不動產相關法律事務，包括合約爭議、租賃問題、產權糾紛等，以確保客戶的權益得到保障和財產安全。',
      },
      {
        name: '公司法律事務',
        imageURL: '/img/company.png',
        content: '我們為企業提供全面的法律支持，包括合同起草、商業交易等，以協助您達成商業目標。 ',
      },
      {
        name: '法律扶助',
        imageURL: '/img/volunteer.png',
        content: '我們致力於為有需要的個人和組織提供法律扶助服務，提供專業的法律諮詢和代理支持，確保其權益得到保障。',
      },
    ],
  }),
});
