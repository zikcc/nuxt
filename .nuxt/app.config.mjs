
import { updateAppConfig } from '#app/config'
import { defuFn } from 'defu'

const inlineConfig = {
  "nuxt": {
    "buildId": "48551be1-9149-4205-aec5-ab51b7a32a3d"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
