// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@element-plus/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/element-variables.scss" as element;`,
        },
      },
    },
  },
  elementPlus: {
    // icon: 'ElIcon',
    importStyle: 'scss',
    // themes: ['dark'],
  },
  // 开启ssr
  ssr: true,
  // 开启调试工具
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['clip-path'].includes(tag),
    },
  },

})
