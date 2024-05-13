<script setup>
  useSeoMeta({
    // 网站标题
    title: '标题',
    // 网站描述
    description: '描述',
    // 搜索关键词
    keywords: '倪渊之,课题组,车联网'
  })
</script>
<template>
  <div>
    <NuxtLayout>
      <!-- 自动读取pages里的index.vue -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>