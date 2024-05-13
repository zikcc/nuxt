<script lang="ts" setup name="Footer">
  import Button, {
    ButtonTypes
  } from './common/button.vue'
  import {
    MENULINKS,
    SOCIAL_LINKS,
    INFODATA
  } from '~/store/constants'

  const {
    ref: footerRef
  } = MENULINKS[4]

  const otherProp = reactive({
    target: '_blank',
    rel: 'noreferrer',
  })
</script>

<template>
  <footer :id="footerRef" class="relative w-full flex flex-col select-none items-stretch bg-cover">
    <img src="/footer-curve.svg" alt="Footer" class="w-full" height="290" role="presentation" width="1440">
    <div class="h-full w-full">
      <div class="section-container z-10 h-full flex flex-col items-center justify-end py-12">
        <el-row :gutter="20">
          <el-col :span="12"> 
            <h1 class="text-center text-3xl font-medium md:text-4xl">
                 联系我们
            </h1>
       
            <div class="mt-8 flex items-center justify-center">
                <Button classes="mr-3" :type="ButtonTypes.OUTLINE" :name="INFODATA.pdfBtnName" :other-props="otherProp"
                  :href="INFODATA.pdfUrl" />
                <Button classes="ml-3" :type="ButtonTypes.WHITE" :name="INFODATA.siteBtnName" :href="INFODATA.siteUrl"
                  :other-props="otherProp" />
            </div>
          </el-col>
          <el-col :span="12"> 
            <h1 class="text-center text-3xl font-medium md:text-4xl">
                 相关链接
            </h1>
            <div class=" flex  content-center">
             
              <a v-for="el in Object.keys(SOCIAL_LINKS)" :key="el" :href="SOCIAL_LINKS[el]"
                class="link px-1 duration-300 md:px-2 hover:opacity-80 content-center" rel="noreferrer" target="_blank">
                <img :src="`/social/${el}.png`" alt="{el}"  >
              </a>

            </div>
          </el-col>
        </el-row>
       
        <h2 class="mt-8 text-center text-sm sm:text-base">
          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </h2>
      </div>
    </div>
  </footer>
</template>