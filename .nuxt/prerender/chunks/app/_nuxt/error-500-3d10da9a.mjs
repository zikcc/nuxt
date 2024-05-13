import { d as useHead } from '../server.mjs';
import { useSSRContext, mergeProps } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/ofetch/dist/node.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/hookable/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unctx/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unhead/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/h3/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/ufo/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/defu/dist/defu.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/lodash-unified/import.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/destr/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/scule/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/klona/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/ohash/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unstorage/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-6fdef64d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-6fdef64d></div><div class="max-w-520px text-center" data-v-6fdef64d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-6fdef64d>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-6fdef64d>${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error500 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fdef64d"]]);

export { error500 as default };
//# sourceMappingURL=error-500-3d10da9a.mjs.map
