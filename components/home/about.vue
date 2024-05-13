<script setup lang="ts" name="AboutSection">
  import {
    Linear,
    gsap
  } from 'gsap'
  import {
    ScrollTrigger
  } from 'gsap/dist/ScrollTrigger'

  const quoteRef: Ref < HTMLElement | undefined > = ref(undefined)
  const targetSection: Ref < HTMLElement | undefined > = ref(undefined)

  const willChange = ref(false)

  function initAboutAnimation(quoteRef: Ref < HTMLElement | undefined > , targetSection: Ref < HTMLElement | undefined >
    ): ScrollTrigger {
    const timeline = gsap.timeline({
      defaults: {
        ease: Linear.easeNone,
        duration: 0.1
      },
    })
    timeline
      .fromTo(quoteRef.value!.querySelector('.about-1'), {
        opacity: 0.2
      }, {
        opacity: 1
      })
      .to(quoteRef.value!.querySelector('.about-1'), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(quoteRef.value!.querySelector('.about-2'), {
        opacity: 0.2
      }, {
        opacity: 1
      }, '<')
      .to(quoteRef.value!.querySelector('.about-2'), {
        opacity: 0.2,
        delay: 1,
      })
      .fromTo(quoteRef.value!.querySelector('.about-3'), {
        opacity: 0.2
      }, {
        opacity: 1
      })
      .to(quoteRef.value!.querySelector('.about-3'), {
        opacity: 0.2,
        delay: 1.5,
      })

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.value,
      start: 'center 80%',
      end: 'center top',
      scrub: 0,
      animation: timeline,
      onToggle: self => willChange.value = self.isActive,
    })
    return scrollTriggerInstance
  }

  onMounted(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(quoteRef, targetSection)
    return aboutScrollTriggerInstance.kill
  })
</script>

<template>
  <section ref="targetSection" class="section-container relative w-full select-none pb-16 pb-24 pt-20 pt-40">
    <h1 ref="quoteRef" class="text-3xl font-medium md:text-6xl sm:text-4xl">
      <span :class="`about-1  text-3xl leading-tight ${willChange ? 'will-change-opacity' : ''}`">
        车联网的研究涉及通信技术、数据处理、智能算法等多个领域，旨在解决车辆之间信息传输的可靠性、实时性以及数据隐私和安全等挑战。
      </span>
      <span :class="`about-2  text-3xl leading-tight ${willChange ? 'will-change-opacity' : ''}`">
        通过车辆之间的协同通信和信息共享，研究人员致力于优化交通流量分配、减少交通拥堵，以及提高驾驶安全性和舒适性。
      </span>
      <span :class="`about-3  text-3xl leading-tight ${willChange ? 'will-change-opacity' : ''}`">
        这项研究还促进了自动驾驶技术的发展，推动智慧城市和智能交通系统的建设，为未来城市交通和出行方式带来全新的可能性。
      </span>
    </h1>
  </section>
</template>