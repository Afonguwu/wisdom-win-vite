import { defineStore } from 'pinia';

export const myStore = defineStore({
  id: 'team',
  state: () => ({
    internal: {
      name: '主持律師',
      lawyers: [
        {
          name: '謝曉明律師',
          imageURL: 'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: '所長',
          certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
          experience: ['智勝法律事務所所長', '高雄大學法律研究所碩專班', '高雄市立空中大學法政學系'],
          area: ['全台灣(南部為主)'],
          category: [
            ['民事', 30],
            ['刑事', 20],
            ['法律扶助', 50],
          ],
        },
        {
          name: '謝小花律師',
          imageURL: 'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: '主持律師',
          Certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
          experience: ['智勝法律事務所所長', '高雄大學法律研究所碩專班', '高雄市立空中大學法政學系'],
          area: ['全台灣(南部為主)'],
          skill: [
            {
              name: '民事',
              value: 30,
            },
            {
              name: '刑事',
              value: 20,
            },
            {
              name: '法律扶助',
              value: 50,
            },
          ],
        },
        {
          name: '謝小羊律師',
          imageURL: 'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: '主持律師',
          Certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
          experience: ['智勝法律事務所所長', '高雄大學法律研究所碩專班', '高雄市立空中大學法政學系'],
          area: ['全台灣(南部為主)'],
          skill: [
            ['民事', 30],
            ['刑事', 20],
            ['法律扶助', 50],
          ],
        },
      ],
    },
    joint: {
      name: '合署律師',
      lawyers: [
        {
          name: '黃曉芳律師',
          imageURL: 'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: '合署律師',
          Certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
          experience: ['智勝法律事務所所長', '高雄大學法律研究所碩專班', '高雄市立空中大學法政學系'],
          area: ['全台灣(南部為主)'],
          skill: [
            ['民事', 30],
            ['刑事', 20],
            ['法律扶助', 50],
          ],
        },
        {
          name: '張志宏律師',
          imageURL: 'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: '合署律師',
          Certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
          experience: ['智勝法律事務所所長', '高雄大學法律研究所碩專班', '高雄市立空中大學法政學系'],
          area: ['全台灣(南部為主)'],
          skill: [
            ['民事', 30],
            ['刑事', 20],
            ['法律扶助', 50],
          ],
        },
        {
          name: '葉小愛律師',
          imageURL: 'https://images.unsplash.com/photo-1642911353098-42efaae7f6d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: '合署律師',
          Certificate: ['律師執照', '不動產經紀人執照', '地政士執照'],
          experience: ['智勝法律事務所所長', '高雄大學法律研究所碩專班', '高雄市立空中大學法政學系'],
          area: ['全台灣(南部為主)'],
          skill: [
            ['民事', 30],
            ['刑事', 20],
            ['法律扶助', 50],
          ],
        },
      ],
    },
  }),
});
