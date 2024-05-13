<script setup lang="ts" name="ProjectsSection">
  import {
    Linear,
    gsap
  } from 'gsap'
  import {
    ScrollTrigger
  } from 'gsap/dist/ScrollTrigger'
  import ProjectTile from '../common/project-tile.vue'
  import {
    type IDesktop,
    MENULINKS,
    NO_MOTION_PREFERENCE_QUERY,
    PROJECTS
  } from '~/store/constants'

  const props = defineProps < IDesktop > ()
  const targetSectionRef: Ref < HTMLElement | undefined > = ref(undefined)
  const sectionTitleElementRef: Ref < HTMLElement | undefined > = ref(undefined)
  const sectionCollapseElementRef: Ref < HTMLElement | undefined > = ref(undefined)

  const willChange = ref(false)
  const horizontalAnimationEnabled = ref(false)

  // 从透明浮现效果
  function initRevealAnimation(targetSectionRef: Ref < HTMLElement | undefined > ): [GSAPTimeline, ScrollTrigger] {
    const revealTl = gsap.timeline({
      defaults: {
        ease: Linear.easeNone
      }
    })
    revealTl.from(targetSectionRef.value!.querySelectorAll('.seq'), {
      opacity: 0,
      duration: 0.5,
      stagger: 0.5
    }, '<')

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.value,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 0,
      animation: revealTl,
    })

    return [revealTl, scrollTrigger]
  }

  // 轮播图动画效果
  function initProjectsAnimation(
    targetSectionRef: Ref < HTMLElement | undefined > ,
    sectionTitleElementRef: Ref < HTMLElement | undefined > ,
    sectionCollapseElementRef: Ref < HTMLElement | undefined >
  ): [GSAPTimeline, ScrollTrigger] {
    const timeline = gsap.timeline({
      defaults: {
        ease: Linear.easeNone
      }
    })
    const sidePadding = document.body.clientWidth - targetSectionRef.value!.querySelector('.inner-container') !
      .clientWidth
    const elementWidth = sidePadding + targetSectionRef.value!.querySelector('.project-wrapper') !.clientWidth
    targetSectionRef.value!.style.width = `${elementWidth}px`
    const width = window.innerWidth - elementWidth
    /* TODO 动画持续效果原理还未知 */
    // const duration = `${(elementWidth / window.innerHeight) * 50}%`   
    const duration = `100%`
    timeline.to(targetSectionRef.value!, {
      x: width
    }).to(sectionTitleElementRef.value!, {
      x: -width
    }, '<').to(sectionCollapseElementRef.value!, {
      x: -width
    }, '<')

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSectionRef.value,
      start: 'top top',
      end: duration,
      scrub: 0,
      pin: true,
      animation: timeline,
      pinSpacing: 'margin',
      onToggle: self => (willChange.value = self.isActive),
    })
    return [timeline, scrollTrigger]
  }
  // 初始化
  onMounted(() => {
    let projectsScrollTrigger: ScrollTrigger | undefined
    let projectsTimeline: GSAPTimeline | undefined
    const {
      matches
    } = window.matchMedia(NO_MOTION_PREFERENCE_QUERY)
    horizontalAnimationEnabled.value = props.isDesktop && matches
    if (props.isDesktop && matches) {
      [projectsTimeline, projectsScrollTrigger] = initProjectsAnimation(targetSectionRef, sectionTitleElementRef,
        sectionCollapseElementRef)
    } else {
      const projectWrapper = targetSectionRef.value!.querySelector('.project-wrapper') as HTMLDivElement
      const parentPadding = window.getComputedStyle(targetSectionRef.value!).getPropertyValue('padding-left')

      targetSectionRef.value!.style.setProperty('width', '100%')
      projectWrapper.classList.add('overflow-x-auto')
      projectWrapper.style.setProperty('width', `calc(100vw)`)
      projectWrapper.style.setProperty('padding', `0 ${parentPadding}`)
      projectWrapper.style.setProperty('transform', `translateX(-${parentPadding})`)
    }
    const [revealTimeline, revealScrollTrigger] = initRevealAnimation(targetSectionRef)

    onUnmounted(() => {
      projectsScrollTrigger && projectsScrollTrigger.kill()
      projectsTimeline && projectsTimeline.kill()
      revealScrollTrigger && revealScrollTrigger.kill()
      revealTimeline && revealTimeline.progress(1)
    })
  })

  const {
    ref: projectsSectionRef
  } = MENULINKS[1]

  /* --------------------添加内容区----------------- */
  // element-ui
  import {
    ref
  } from 'vue'

  const activeNames = ref(['0'])
  const handleChange = (val: string[]) => {
    // 折叠面板的状态改变了
    // console.log(val)

  }
  // TODO totalData 使用axios接收
  const totalData = [{
      date: '2016-05-03',
      author: 'Tom',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      author: 'Tom',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      author: 'Tom',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      author: 'Tom',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      author: 'Tom',
      paper: 'No. 189, Grove St, Los Angeles',
    }, {
      date: '2016-05-03',
      author: 'T',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      author: 'T',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      author: 'T',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      author: 'T',
      paper: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      author: 'T',
      paper: 'No. 189, Grove St, Los Angeles',
    },
  ]
  const pageSize = ref(5)
  const tableData = ref(totalData.slice(0, 5))
  const paperTotal = ref(totalData.length)
  const currentPage = ref(1)
  const handleCurrentChange = () => {
    //更新tableData
    tableData.value = totalData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
    // console.log(currentPage.value)
  }
</script>

<template>
  <section :id="projectsSectionRef" ref="targetSectionRef"
    :class="`${isDesktop && 'min-h-scree'} w-full relative select-none section-container flex-col flex  py-18 justify-center`">
    <!-- <ProjectT /> -->
    <div ref="sectionTitleElementRef"
      :class="`flex flex-col inner-container  ${willChange && 'will-change-transform'}`">
      <p class="seq section-title-sm">
        WORKS
      </p>
      <h1 class="seq section-heading mt-2">
        研究成果
      </h1>
      <h2 class="seq mt-2 max-w-sm w-full text-2xl md:max-w-3xl">
        车联网、边缘计算、空天地协同
      </h2>
    </div>
    <div
      class="seq gaodu project-wrapper grid auto-cols-max grid-flow-col w-fit snap-x snap-mandatory scroll-pl-6 gap-6 md:gap-10">
      <ProjectTile v-for="(item, _) in PROJECTS" :key="item.name" :project="item"
        :animation-enabled="horizontalAnimationEnabled" />
    </div>
    <!-- 折叠面板 -->
    <div class="mycollapse mt-6 Transparent  line-height-normal mb-20" ref="sectionCollapseElementRef">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title=" 查看全部" name="1" class="seq">
          <!-- 表格 -->
          <el-table v-model:data="tableData" style="width: 100%" class="bg-op-10">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="author" label="Author" width="180" />
            <el-table-column prop="paper" label="Paper" />
          </el-table>
          <div class="pagination-block">
            <el-pagination layout="prev, pager, next" :total="paperTotal" v-model:page-size="pageSize"
              v-model:current-page="currentPage" @current-change="handleCurrentChange" />
          </div>
        </el-collapse-item>
      </el-collapse>

    </div>
  </section>
</template>

<style lang="scss" scoped>
  .gaodu {
    @apply mt-6;
  }

  @media screen and (min-height: 800px) {
    .gaodu {
      @apply mt-12;
    }
  }

  .mycollapse {
    transition: padding-left 1.5s, padding-right 1.5s;
  }

  .mycollapse:hover {
    // transition-duration: 1.5s;
    padding-left: 2rem;
    padding-right: 2rem;

  }
</style>

<!-- 重写elementui组件的样式 -->
<style>
  .mycollapse .el-collapse {
    border: 0px;
    transition: 1s linear;
    padding: 5px;
    --el-collapse-border: 0 px;
    --el-collapse-header-text-color: #fff;
    --el-collapse-header-font-size: 1.5rem;
    --el-collapse-content-bg-color: Transparent;
    --el-collapse-content-font-size: 1rem;
    --el-collapse-content-text-color: #fff
  }


  .mycollapse .el-collapse-item__header,
  .mycollapse .el-collapse-item__wrap {
    border-bottom: 0;
  }

  .mycollapse .el-collapse-item__content {

    padding-bottom: 0px;
  }

  .mycollapse .el-collapse-item:last-child {
    margin-bottom: 1px;
  }

  .mycollapse .el-table {

    --el-table-border-color: Transparent;
    /* --el-table-border-color: var(--el-border-color-lighter); */
    --el-table-border: 1px solid var(--el-table-border-color);
    --el-table-text-color: #fff;
    --el-table-header-text-color: var(--el-text-color-secondary);
    --el-table-row-hover-bg-color: #3f4450;
    --el-table-current-row-bg-color: var(--el-color-primary-light-9);
    --el-table-header-bg-color: rgba(255, 255, 255, 0);
    --el-table-fixed-box-shadow: var(--el-box-shadow-light);
    --el-table-bg-color: rgba(255, 255, 255, 0);
    --el-table-tr-bg-color: rgba(255, 255, 255, 0);
    --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
    --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
    --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
    --el-table-index: var(--el-index-normal);
    box-sizing: border-box;
    color: var(--el-table-text-color);
    font-size: 1rem;
    height: -moz-fit-content;
    height: fit-content;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .el-pager li.is-active {
    color: #57b9e3;
    cursor: default;
    font-weight: bold;
  }

  .el-pager li:hover {
    color: #57b9e3;
  }

  .pagination-block {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
  }
  .pagination-block {
    width: 100%;
  }
  .el-pagination {

    margin-top: 10px;
    --el-pagination-font-size: 1rem;
    --el-pagination-bg-color: rgba(0, 0, 0, 0);
    --el-pagination-text-color: #fff;
    --el-pagination-border-radius: 0px;
    --el-pagination-button-color: #fff;
    --el-pagination-button-width: 32px;
    --el-pagination-button-height: 32px;
    --el-pagination-button-disabled-color: var(--el-text-color-placeholder);
    --el-pagination-button-disabled-bg-color: Transparent;
    --el-pagination-button-bg-color: #ffffff;
    --el-pagination-hover-color: #57b9e3;
    --el-pagination-font-size-small: 12px;
    --el-pagination-button-width-small: 24px;
    --el-pagination-button-height-small: 24px;
    --el-pagination-item-gap: 16px;
    align-items: center;
    color: rgb(255, 255, 255);
    display: flex;
    font-size: var(--el-pagination-font-size);
    font-weight: normal;
    white-space: nowrap;
  }
</style>