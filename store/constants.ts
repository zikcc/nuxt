// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export interface IDesktop {
  isDesktop: boolean
}

export const isSmallScreen = (): boolean => document.body.clientWidth < 767

export const NO_MOTION_PREFERENCE_QUERY = '(prefers-reduced-motion: no-preference)'

// 网页<mate>标签信息
export const METADATA = {
  title: '标题',
  description:
    '描述',
  siteUrl: 'https://iot.jiangnan.edu.cn/info/1142/3569.htm',
}
export const INFODATA = {
  pdfBtnName:'详细信息',
  siteBtnName:'联系我们',
  pdfUrl:'http://www.cztouch.com/upfiles/soft/testpdf.pdf',
  siteUrl: 'https://iot.jiangnan.edu.cn/info/1142/3569.htm',
}
export const MENULINKS = [
  {
    name: '首页',
    ref: 'home',
  },
  {
    name: '成果',
    ref: 'works',
  },
  {
    name: '成员',
    ref: 'members',
  },
  {
    name: '时间线',
    ref: 'timeline',
  },
  {
    name: '联系我们',
    ref: 'contact',
  },
]

export const TYPED_STRINGS = [
  '我们在江南大学',
  '测试文本',
  '测试句句子',
  '占位占位位位位位',
]

export const EMAIL = 'niyuanzhi@jiangnan.edu.cn'

export const SOCIAL_LINKS = {
  jnu: 'https://www.jiangnan.edu.cn/',
  jnuIot: 'https://iot.jiangnan.edu.cn/',
} as Record<string, string>

export interface IProject {
  name: string
  image: string
  author: string
  description: string
  gradient: [string, string]
  url: string
  data: string
}

export const PROJECTS: IProject[] = [
  {
    name: 'keywords: 任务卸载，资源管理',
    image: 'https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png',
    author: '/projects/blur/figgen-blur.jpg',
    description: '描述信息',
    gradient: ['#1F6582', '#1ABCFE'],
    url: '#',
    data: '2024-5-11',
  },
  {
    name: 'keywords: 任务卸载，资源管理',
    image: 'https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png',
    author: '/projects/blur/myokr-blur.jpg',
    description: '描述信息',
    gradient: ['#153BB9', '#0E2C8B'],
    url: '#',
    data: '2024-5-11',
  },
  {
    name: 'keywords: 任务卸载，资源管理',
    image: 'https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png',
    author: '/projects/blur/dlt-website-blur.jpg',
    description: '描述信息',
    gradient: ['#245B57', '#004741'],
    url: '#',
    data: '2024-5-11',
  },
  {
    name: 'keywords: 任务卸载，资源管理',
    image: 'https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png',
    author: '/projects/blur/dl-unify-blur.jpg',
    description: '描述信息',
    gradient: ['#003052', '#167187'],
    url: '#',
    data: '2024-5-11',
  },
  {
    name: 'keywords: 任务卸载，资源管理',
    image: 'https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png',
    author: '/projects/blur/ngx-quill-upload-blur.jpg',
    description: '描述信息',
    gradient: ['#3A0000', '#771E1E'],
    url: '#',
    data: '2024-5-11',
  },
]
export interface MEMBER {
  name: string
  city: string
  grade: string
  interest: string
  status: string
  url: string

}

export const FORMER_MEMBERS: MEMBER[] = [
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
]
export const NOW_MEMBERS: MEMBER[] = [
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
  {
    name: "姓名",
    city: "哪里人",
    grade: "年级",
    interest: "研究兴趣",
    status: "现状",
    url: "#",
  },
]
export enum Branch {
  LEFT = 'leftSide',
  RIGHT = 'rightSide',
}

export enum NodeTypes {
  CONVERGE = 'converge',
  DIVERGE = 'diverge',
  CHECKPOINT = 'checkpoint',
}

export enum ItemSize {
  SMALL = 'small',
  LARGE = 'large',
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: '2026',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT, //左支
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题1',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/subtitleImage.svg',
    slideImage: 'https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&risl=&pid=ImgRaw&r=0',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2025',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题2',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/flipkart.svg',
    slideImage: 'https://uploadfile.bizhizu.cn/2017/0701/20170701031430776.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2024',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE, //向右分一支
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题3',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/huminos.svg',
    slideImage: 'https://ts1.cn.mm.bing.net/th/id/R-C.6b9074faed6dae2a0457e690c2aa3a03?rik=6V%2fv2rXhPCf7Pg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn20115%2f534%2fw1280h854%2f20190221%2f9461-htknpmf9890147.jpg&ehk=RyGDdQrMiIWbz7Uxa%2fLSPOz2iXvM8JpbkBIZgttQkWc%3d&risl=&pid=ImgRaw&r=0',
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题4',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/octanner.svg',
    slideImage: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE, //右支向左合并
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2023',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题5',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/dltlabs.svg',
    slideImage: 'https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJ1fJVFOIV8kdAC3oDpyfq8YAAU9wQN1ivcALegm011.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题6',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/huminos.svg',
    slideImage: 'https://www.keaitupian.cn/cjpic/frombd/2/253/2107631312/3178897554.jpg',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题7',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    // image: '/timeline/akgec.svg',
    slideImage: 'https://media.giphy.com/media/3osxYpRxjzvPOtwfF6/giphy.gif',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2022',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题8',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    slideImage: 'https://media.giphy.com/media/xTiTnu6aRsOuB41UNG/giphy.gif',
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题9',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    slideImage: 'https://ts1.cn.mm.bing.net/th/id/R-C.ccd320596cb9b0499c2d9e89079c7990?rik=bo30tkANeNk4Aw&riu=http%3a%2f%2fwww.finebornchina.cn%2fuploads%2fallimg%2f140430%2f1-140430150445413.jpg&ehk=Hjpp13uPkWtPTUVLZH%2f7V3MKAnXYJJNjmjRq1TE136k%3d&risl=&pid=ImgRaw&r=0',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题10',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    slideImage: 'https://ts1.cn.mm.bing.net/th/id/R-C.69fb9755a2385fa76560f5112f37c14d?rik=03yms%2faFfn79tQ&riu=http%3a%2f%2fi02.cztv.com%2f2013%2f08%2f1375411511_07024700.jpg&ehk=7smYXj9OTiRmibyzPiS7sWIAk1rhDYKcQq%2fC3MvGxc8%3d&risl=&pid=ImgRaw&r=0',
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题11',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    slideImage: 'https://youimg1.c-ctrip.com/target/0102a120004fhqcagB7E5_D_10000_1200.jpg?proc=autoorient',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '2021',
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: '内容标题12',
    size: ItemSize.SMALL,
    subtitle: '介绍一下吧',
    slideImage: 'https://ts1.cn.mm.bing.net/th/id/R-C.633901d07a3d18cdf6d58a0ccc74078d?rik=8evNNQvJj91%2bjg&riu=http%3a%2f%2fimg.hkwb.net%2fatt%2fsite2%2f20120308%2f633901d07a3d18cdf6d58a0ccc74078d.jpg&ehk=mupUGFlfxfEilMIkHoDFPVYnfR%2bSaF86fmgOkvvU8YM%3d&risl=&pid=ImgRaw&r=0',
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  
]

export type TimelineNodeV2 = CheckpointNode | BranchNode

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT
  title: string
  subtitle?: string
  size: ItemSize
  image?: string
  slideImage?: string
  shouldDrawLine: boolean
  alignment: Branch
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE
}

export const GTAG = 'UA-163844688-1'
