const fs = require('fs')
const path = require('path')

console.log('USE NODE_ENV:', process.env.NODE_ENV)

// let gistsDir = path.join(__dirname, '../gists')
// let awesomeDir = path.join(__dirname, '../awesome')
// let secretsDir = path.join(__dirname, '../secrets')
// let mapsDir = path.join(__dirname, '../maps')

let gistsDir = 'E:\\桌面\\存储仓库\\GITEE\\yooch\\blogs\\gists'
let awesomeDir = 'E:\\桌面\\存储仓库\\GITEE\\yooch\\blogs\\awesome'
let secretsDir = 'E:\\桌面\\存储仓库\\GITEE\\yooch\\blogs\\secrets'
let mapsDir = 'E:\\桌面\\存储仓库\\GITEE\\yooch\\blogs\\maps'

/**
 * 获取目录下所有 Markdown 文件
 * @param {String} src 路径字符串
 * @param {String} prefix 给返回值添加前缀
 * @todo 按照时间排序
 */
const getSRCs = (src, prefix = '') => {
  const filenames = []
  const fileTypes = /\.md$/
  const mainFiles = ['index.md', 'README.md']
  try {
    fs.readdirSync(src).forEach(file => {
      if (fileTypes.test(file) > 0) {
        if (!mainFiles.includes(file)) {
          filenames.push(file.replace('.md', ''))
        }
      }
    })
  } catch (err) {
    // 在 Build 时会碰到这个莫名奇妙的错误，
    // 和 __dirname node 执行路径有关，
    // 可以不用管
    // console.error('Error in getSRCs : ', err)
  }
  filenames.sort()
  return filenames.map(x => prefix + x)
}

const sidebars = [
  {
    title: '傻逼日记 / journal',
    label: '傻逼日记',
    collapsable: false,
    open: true,
    path: '/journal/',
    children: [
      '/journal/DiaryOfAFool',
    ],
  },
  {
    title: '再读一点 / ReadMore',
    label: '读书',
    collapsable: false,
    open: true,
    path: '/ReadMore/',
    children: [
      '/ReadMore/IntimateRelationship',
      '/ReadMore/GoingOnALongJourneyAtTheAgeOf18',
      '/ReadMore/HowToWinFriends&InfluencePeople',
    ],
  },
  {
    title: '心流思绪 / Heart Flows',
    label: '心流思绪',
    collapsable: false,
    open: true,
    path: '/flows/',
    children: [
      // 'flows/brain-history',
      // 'flows/TheHiddenSideOfPisces',
      'flows/LvMaoShuiGuai',
      'flows/NowADays',
      // 'flows/WhatIsTheWorld',
      'flows/WhyOnlyRain',
    ],
  },
  {
    title: '知识骨架 / Maps',
    label: '知识骨架',
    collapsable: false,
    open: true,
    path: '/maps/',
    children: [
      '/maps/business/low-code',
    ],
  },
  {
    title: '技术博客 / Coder',
    label: '技术',
    collapsable: false,
    open: true,
    path: '/articles/',
    children: [
      
    ],
  }
]

module.exports = {
  getSidebar() {
    return sidebars
  },
  getRecommends() {
    return {
      介绍: {
        url: '/pixel/red.html',
        label: 'Why Yooch',
      },
      流水账: {
        url: '/journal/DiaryOfAFool.html',
        label: '傻瓜日记',
      },
    }
  }
}
