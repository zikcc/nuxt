import { p as publicAssetsURL } from '../../renderer.mjs';
import { ref, defineComponent, computed, openBlock, createElementBlock, mergeProps, unref, renderSlot, useAttrs as useAttrs$1, useSlots, shallowRef, watch, nextTick, toRef, createCommentVNode, Fragment, normalizeClass, createElementVNode, createBlock, withCtx, resolveDynamicComponent, withModifiers, createVNode, toDisplayString, normalizeStyle, provide, reactive, onUpdated, inject, withDirectives, cloneVNode, Text, Comment, Teleport, Transition, vShow, readonly, isRef, vModelCheckbox, createTextVNode, toRefs, toHandlers, withKeys, getCurrentInstance, renderList, watchEffect, h, onUnmounted, useSSRContext, warn, toRaw, getCurrentScope, onScopeDispose, resolveComponent, resolveDirective, vModelText, render } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue/index.mjs';
import { k as useNamespace, l as isUndefined, f as debugWarn, o as useId, g as isBoolean, i as isNumber, r as useSeoMeta, e as isStringNumber, h as useGetDerivedNamespace, j as useIdInjection, m as useZIndex, q as isPropAbsent, d as useHead, p as isElement, t as throwError } from '../server.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue/server-renderer/index.mjs';
import { isNil, pick, isEqual, debounce, fromPairs, isUndefined as isUndefined$1, castArray, get, findLastIndex, merge, set, flatMap } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/lodash-unified/import.js';
import { NOOP, isObject, isString as isString$1, hasOwn, isFunction, isArray, toRawType } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { gsap } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/gsap/dist/gsap.js';
import { ScrollTrigger } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/gsap/dist/ScrollTrigger.js';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { placements, createPopper } from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/@popperjs/core/dist/index.mjs';
import normalizeWheel from 'file://D:/CODE/blog/myNuxt/resGro/node_modules/normalize-wheel-es/dist/index.js';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/h3/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/devalue/index.js';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/ufo/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/ofetch/dist/node.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/destr/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/hookable/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/scule/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/klona/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/defu/dist/defu.mjs';
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
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unhead/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/unctx/dist/index.mjs';
import 'file://D:/CODE/blog/myNuxt/resGro/node_modules/vue-router/dist/vue-router.node.mjs';

const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const isClient = false;
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    ;
  else if (sync)
    fn();
  else
    nextTick(fn);
}
function unrefElement(elRef) {
  var _a;
  const plain = resolveUnref(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (isString(args[0]) || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
    cleanup();
    if (!el)
      return;
    cleanups.push(...events.flatMap((event) => {
      return listeners.map((listener) => register(el, event, listener, options2));
    }));
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function onClickOutside(target, handler, options = {}) {
  const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
  if (!window2)
    return;
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return ignore.some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
      } else {
        const el = unrefElement(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  const listener = (event) => {
    const el = unrefElement(target);
    if (!el || el === event.target || event.composedPath().includes(el))
      return;
    if (event.detail === 0)
      shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window2, "click", listener, { passive: true, capture }),
    useEventListener(window2, "pointerdown", (e) => {
      const el = unrefElement(target);
      if (el)
        shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e);
    }, { passive: true }),
    detectIframe && useEventListener(window2, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = window2.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}
function useSupported(callback, sync = false) {
  const isSupported = ref();
  const update = () => isSupported.value = Boolean(callback());
  update();
  tryOnMounted(update, sync);
  return isSupported;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$g.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$g.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window: window2 = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window: window2 = defaultWindow } = _a, mutationOptions = __objRest$1(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window2 && "MutationObserver" in window2);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window2 && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues({
  linear: identity
}, _TransitionPresets);
const rAF = (fn) => setTimeout(fn, 16);
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    }
  };
};
const SCOPE$1 = "utils/dom/style";
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString$1(value)) {
    return value;
  }
  debugWarn(SCOPE$1, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var arrow_down_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
});
var arrow_down_default = arrow_down_vue_vue_type_script_setup_true_lang_default;
var arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_left_default = arrow_left_vue_vue_type_script_setup_true_lang_default;
var arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
});
var arrow_right_default = arrow_right_vue_vue_type_script_setup_true_lang_default;
var arrow_up_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
});
var arrow_up_default = arrow_up_vue_vue_type_script_setup_true_lang_default;
var circle_check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleCheck",
  __name: "circle-check",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
});
var circle_check_default = circle_check_vue_vue_type_script_setup_true_lang_default;
var circle_close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "CircleClose",
  __name: "circle-close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
});
var circle_close_default = circle_close_vue_vue_type_script_setup_true_lang_default;
var close_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Close",
  __name: "close",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
});
var close_default = close_vue_vue_type_script_setup_true_lang_default;
var d_arrow_left_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
});
var d_arrow_left_default = d_arrow_left_vue_vue_type_script_setup_true_lang_default;
var d_arrow_right_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
});
var d_arrow_right_default = d_arrow_right_vue_vue_type_script_setup_true_lang_default;
var hide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Hide",
  __name: "hide",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      createElementVNode("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
});
var hide_default = hide_vue_vue_type_script_setup_true_lang_default;
var loading_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "Loading",
  __name: "loading",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
});
var loading_default = loading_vue_vue_type_script_setup_true_lang_default;
var more_filled_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "MoreFilled",
  __name: "more-filled",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
});
var more_filled_default = more_filled_vue_vue_type_script_setup_true_lang_default;
var view_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
  name: "View",
  __name: "view",
  setup(__props) {
    return (_ctx, _cache) => (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      createElementVNode("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
});
var view_default = view_vue_vue_type_script_setup_true_lang_default;
const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => isObject(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!isObject(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if (hasOwn(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if (hasOwn(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => fromPairs(Object.entries(props).map(([key, option2]) => [
  key,
  buildProp(option2, key)
]));
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const ValidateComponentsMap = {
  validating: loading_default,
  success: circle_check_default,
  error: circle_close_default
};
const withInstall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const withNoopInstall = (component) => {
  component.install = NOOP;
  return component;
};
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const componentSizes = ["", "default", "small", "large"];
const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
const mutable = (val) => val;
const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = computed(() => {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  const instance = getCurrentInstance();
  if (!instance) {
    debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
    return computed(() => ({}));
  }
  return computed(() => {
    var _a;
    return fromPairs(Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};
const useDeprecated = ({ from, replacement, scope, version, ref: ref2, type = "API" }, condition) => {
  watch(() => unref(condition), (val) => {
    if (val) {
      debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref2}
`);
    }
  }, {
    immediate: true
  });
};
var English = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const buildTranslator = (locale) => (path, option2) => translate(path, option2, unref(locale));
const translate = (path, option2, locale) => get(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option2 == null ? void 0 : option2[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const localeContextKey = Symbol("localeContextKey");
const useLocale = (localeOverrides) => {
  const locale = localeOverrides || inject(localeContextKey, ref());
  return buildLocaleContext(computed(() => locale.value || English));
};
const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = getCurrentInstance();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = computed(() => isFunction(props[updateEventKeyRaw]));
    const isModelBindingAbsent = computed(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if (isFunction(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || isFunction(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    watch(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      watch(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const useProp = (name) => {
  const vm = getCurrentInstance();
  return computed(() => {
    var _a, _b;
    return (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$props) == null ? void 0 : _b[name];
  });
};
const usePopper = (referenceElementRef, popperElementRef, opts = {}) => {
  const stateUpdater = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state }) => {
      const derivedState = deriveState(state);
      Object.assign(states.value, derivedState);
    },
    requires: ["computeStyles"]
  };
  const options = computed(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts);
    return {
      onFirstUpdate,
      placement: placement || "bottom",
      strategy: strategy || "absolute",
      modifiers: [
        ...modifiers || [],
        stateUpdater,
        { name: "applyStyles", enabled: false }
      ]
    };
  });
  const instanceRef = shallowRef();
  const states = ref({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  });
  const destroy = () => {
    if (!instanceRef.value)
      return;
    instanceRef.value.destroy();
    instanceRef.value = void 0;
  };
  watch(options, (newOptions) => {
    const instance = unref(instanceRef);
    if (instance) {
      instance.setOptions(newOptions);
    }
  }, {
    deep: true
  });
  watch([referenceElementRef, popperElementRef], ([referenceElement, popperElement]) => {
    destroy();
    if (!referenceElement || !popperElement)
      return;
    instanceRef.value = createPopper(referenceElement, popperElement, unref(options));
  });
  return {
    state: computed(() => {
      var _a;
      return { ...((_a = unref(instanceRef)) == null ? void 0 : _a.state) || {} };
    }),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.update();
    },
    forceUpdate: () => {
      var _a;
      return (_a = unref(instanceRef)) == null ? void 0 : _a.forceUpdate();
    },
    instanceRef: computed(() => unref(instanceRef))
  };
};
function deriveState(state) {
  const elements = Object.keys(state.elements);
  const styles2 = fromPairs(elements.map((element) => [element, state.styles[element] || {}]));
  const attributes = fromPairs(elements.map((element) => [element, state.attributes[element]]));
  return {
    styles: styles2,
    attributes
  };
}
function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}
const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace();
  const idInjection = useIdInjection();
  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`;
  });
  const selector = computed(() => `#${id.value}`);
  return {
    id,
    selector
  };
};
const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId();
  return {
    id,
    selector
  };
};
const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  autoClose,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const {
    registerTimeout: registerTimeoutForAutoClose,
    cancelTimeout: cancelTimeoutForAutoClose
  } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
      const _autoClose = unref(autoClose);
      if (isNumber(_autoClose) && _autoClose > 0) {
        registerTimeoutForAutoClose(() => {
          close(event);
        }, _autoClose);
      }
    }, unref(showAfter));
  };
  const onClose = (event) => {
    cancelTimeoutForAutoClose();
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};
const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};
function useCursor(input2) {
  const selectionRef = ref();
  function recordCursor() {
    if (input2.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input2.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input2.value == void 0 || selectionRef.value == void 0)
      return;
    const { value } = input2.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input2.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {});
  return computed(() => {
    return unref(injectedSize.size) || "";
  });
};
function useFocusController(target, { afterFocus, beforeBlur, afterBlur } = {}) {
  const instance = getCurrentInstance();
  const { emit } = instance;
  const wrapperRef = shallowRef();
  const isFocused = ref(false);
  const handleFocus = (event) => {
    if (isFocused.value)
      return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus == null ? void 0 : afterFocus();
  };
  const handleBlur = (event) => {
    var _a;
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false;
    if (cancelBlur || event.relatedTarget && ((_a = wrapperRef.value) == null ? void 0 : _a.contains(event.relatedTarget)))
      return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur == null ? void 0 : afterBlur();
  };
  const handleClick = () => {
    var _a;
    (_a = target.value) == null ? void 0 : _a.focus();
  };
  watch(wrapperRef, (el) => {
    if (el) {
      el.setAttribute("tabindex", "-1");
    }
  });
  useEventListener(wrapperRef, "click", handleClick);
  return {
    wrapperRef,
    isFocused,
    handleFocus,
    handleBlur
  };
}
const SCOPE = "use-empty-values";
const DEFAULT_EMPTY_VALUES = ["", void 0, null];
const DEFAULT_VALUE_ON_CLEAR = void 0;
const useEmptyValuesProps = buildProps({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (val) => isFunction(val) ? !val() : !val
  }
});
const useEmptyValues = (props, defaultValue) => {
  let config = useGlobalConfig();
  if (!config.value) {
    config = ref({});
  }
  const emptyValues = computed(() => props.emptyValues || config.value.emptyValues || DEFAULT_EMPTY_VALUES);
  const valueOnClear = computed(() => {
    if (isFunction(props.valueOnClear)) {
      return props.valueOnClear();
    } else if (props.valueOnClear !== void 0) {
      return props.valueOnClear;
    } else if (isFunction(config.value.valueOnClear)) {
      return config.value.valueOnClear();
    } else if (config.value.valueOnClear !== void 0) {
      return config.value.valueOnClear;
    }
    return defaultValue !== void 0 ? defaultValue : DEFAULT_VALUE_ON_CLEAR;
  });
  const isEmptyValue = (value) => {
    return emptyValues.value.includes(value);
  };
  if (!emptyValues.value.includes(valueOnClear.value)) {
    debugWarn(SCOPE, "value-on-clear should be a value of empty-values");
  }
  return {
    emptyValues,
    valueOnClear,
    isEmptyValue
  };
};
const ariaProps = buildProps({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
});
const useAriaProps = (arias) => {
  return pick(ariaProps, arias);
};
const configProviderContextKey = Symbol();
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});
const __default__$o = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  ...__default__$o,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        "--color": color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", mergeProps({
        class: unref(ns).b(),
        style: unref(style)
      }, _ctx.$attrs), [
        renderSlot(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["__file", "icon.vue"]]);
const ElIcon = withInstall(Icon);
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");
const useFormSize = (fallback, ignore = {}) => {
  const emptyRef = ref(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig2 = ignore.global ? emptyRef : useGlobalSize();
  const form = ignore.form ? { size: void 0 } : inject(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : inject(formItemContextKey, void 0);
  return computed(() => size.value || unref(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig2.value || "");
};
const useFormDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = inject(formContextKey, void 0);
  return computed(() => disabled.value || unref(fallback) || (form == null ? void 0 : form.disabled) || false);
};
const useFormItem = () => {
  const form = inject(formContextKey, void 0);
  const formItem = inject(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = ref(false);
  }
  const inputId = ref();
  const isLabeledByFormItem = computed(() => {
    var _a;
    return !!(!(props.label || props.ariaLabel) && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
  });
  onUnmounted(() => {
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};
const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType
  },
  prefixIcon: {
    type: iconPropType
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  ...useAriaProps(["ariaLabel"])
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString$1(value),
  input: (value) => isString$1(value),
  change: (value) => isString$1(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
const _hoisted_1$d = ["role"];
const _hoisted_2$a = ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"];
const _hoisted_3$2 = ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"];
const __default__$n = defineComponent({
  name: "ElInput",
  inheritAttrs: false
});
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const rawAttrs = useAttrs$1();
    const slots = useSlots();
    const containerAttrs = computed(() => {
      const comboBoxAttrs = {};
      if (props.containerRole === "combobox") {
        comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
        comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
        comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
      }
      return comboBoxAttrs;
    });
    const containerKls = computed(() => [
      props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize.value),
      nsInput.is("disabled", inputDisabled.value),
      nsInput.is("exceed", inputExceed.value),
      {
        [nsInput.b("group")]: slots.prepend || slots.append,
        [nsInput.bm("group", "append")]: slots.append,
        [nsInput.bm("group", "prepend")]: slots.prepend,
        [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
        [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
        [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
        [nsInput.b("hidden")]: props.type === "hidden"
      },
      rawAttrs.class
    ]);
    const wrapperKls = computed(() => [
      nsInput.e("wrapper"),
      nsInput.is("focus", isFocused.value)
    ]);
    const attrs = useAttrs({
      excludeKeys: computed(() => {
        return Object.keys(containerAttrs.value);
      })
    });
    const { form: elForm, formItem: elFormItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: elFormItem
    });
    const inputSize = useFormSize();
    const inputDisabled = useFormDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input2 = shallowRef();
    const textarea = shallowRef();
    const hovering = ref(false);
    const isComposing = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed(() => input2.value || textarea.value);
    const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(_ref, {
      afterBlur() {
        var _a;
        if (props.validateEvent) {
          (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "blur").catch((err) => debugWarn(err));
        }
      }
    });
    const needStatusIcon = computed(() => {
      var _a;
      return (_a = elForm == null ? void 0 : elForm.statusIcon) != null ? _a : false;
    });
    const validateState = computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
    const validateIcon = computed(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = computed(() => passwordVisible.value ? view_default : hide_default);
    const containerStyle = computed(() => [
      rawAttrs.style
    ]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(() => isNil(props.modelValue) ? "" : String(props.modelValue));
    const showClear = computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value));
    const showPwdVisible = computed(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || isFocused.value));
    const isWordLimitVisible = computed(() => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = computed(() => nativeInputValue.value.length);
    const inputExceed = computed(() => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength));
    const suffixVisible = computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = useCursor(input2);
    useResizeObserver(textarea, (entries) => {
      onceInitSizeTextarea();
      if (!isWordLimitVisible.value || props.resize !== "both")
        return;
      const entry = entries[0];
      const { width } = entry.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 15 + 6}px)`
      };
    });
    const resizeTextarea = () => {
      return;
    };
    const createOnceInitResize = (resizeTextarea2) => {
      let isInit = false;
      return () => {
        var _a;
        if (isInit || !props.autosize)
          return;
        const isElHidden = ((_a = textarea.value) == null ? void 0 : _a.offsetParent) === null;
        if (!isElHidden) {
          resizeTextarea2();
          isInit = true;
        }
      };
    };
    const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
    const setNativeInputValue = () => {
      const input22 = _ref.value;
      const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
      if (!input22 || input22.value === formatterValue)
        return;
      input22.value = formatterValue;
    };
    const handleInput = async (event) => {
      recordCursor();
      let { value } = event.target;
      if (props.formatter) {
        value = props.parser ? props.parser(value) : value;
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value) {
        setNativeInputValue();
        return;
      }
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await nextTick();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a;
      await nextTick();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select2 = () => {
      var _a;
      (_a = _ref.value) == null ? void 0 : _a.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    watch(() => props.modelValue, () => {
      var _a;
      nextTick(() => resizeTextarea());
      if (props.validateEvent) {
        (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn(err));
      }
    });
    watch(nativeInputValue, () => setNativeInputValue());
    watch(() => props.type, async () => {
      await nextTick();
      setNativeInputValue();
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-input",
      ref: "https://element-plus.org/en-US/component/input.html"
    }, computed(() => !!props.label));
    expose({
      input: input2,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      focus,
      blur,
      select: select2,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps(unref(containerAttrs), {
        class: unref(containerKls),
        style: unref(containerStyle),
        role: _ctx.containerRole,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), [
        createCommentVNode(" input "),
        _ctx.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createCommentVNode(" prepend slot "),
          _ctx.$slots.prepend ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(nsInput).be("group", "prepend"))
          }, [
            renderSlot(_ctx.$slots, "prepend")
          ], 2)) : createCommentVNode("v-if", true),
          createElementVNode("div", {
            ref_key: "wrapperRef",
            ref: wrapperRef,
            class: normalizeClass(unref(wrapperKls))
          }, [
            createCommentVNode(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(nsInput).e("prefix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("prefix-inner"))
              }, [
                renderSlot(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 0,
                  class: normalizeClass(unref(nsInput).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("input", mergeProps({
              id: unref(inputId),
              ref_key: "input",
              ref: input2,
              class: unref(nsInput).e("inner")
            }, unref(attrs), {
              minlength: _ctx.minlength,
              maxlength: _ctx.maxlength,
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: unref(inputDisabled),
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label || _ctx.ariaLabel,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              form: _ctx.form,
              autofocus: _ctx.autofocus,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
              onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_2$a),
            createCommentVNode(" suffix slot "),
            unref(suffixVisible) ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(unref(nsInput).e("suffix"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(unref(nsInput).e("suffix-inner"))
              }, [
                !unref(showClear) || !unref(showPwdVisible) || !unref(isWordLimitVisible) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  renderSlot(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                    key: 0,
                    class: normalizeClass(unref(nsInput).e("icon"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("v-if", true)
                ], 64)) : createCommentVNode("v-if", true),
                unref(showClear) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 1,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                  onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                  onClick: clear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(circle_close_default))
                  ]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                unref(showPwdVisible) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 2,
                  class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true),
                unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
                  key: 3,
                  class: normalizeClass(unref(nsInput).e("count"))
                }, [
                  createElementVNode("span", {
                    class: normalizeClass(unref(nsInput).e("count-inner"))
                  }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 3)
                ], 2)) : createCommentVNode("v-if", true),
                unref(validateState) && unref(validateIcon) && unref(needStatusIcon) ? (openBlock(), createBlock(unref(ElIcon), {
                  key: 4,
                  class: normalizeClass([
                    unref(nsInput).e("icon"),
                    unref(nsInput).e("validateIcon"),
                    unref(nsInput).is("loading", unref(validateState) === "validating")
                  ])
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 2)
            ], 2)) : createCommentVNode("v-if", true)
          ], 2),
          createCommentVNode(" append slot "),
          _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(unref(nsInput).be("group", "append"))
          }, [
            renderSlot(_ctx.$slots, "append")
          ], 2)) : createCommentVNode("v-if", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createCommentVNode(" textarea "),
          createElementVNode("textarea", mergeProps({
            id: unref(inputId),
            ref_key: "textarea",
            ref: textarea,
            class: unref(nsTextarea).e("inner")
          }, unref(attrs), {
            minlength: _ctx.minlength,
            maxlength: _ctx.maxlength,
            tabindex: _ctx.tabindex,
            disabled: unref(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: unref(textareaStyle),
            "aria-label": _ctx.label || _ctx.ariaLabel,
            placeholder: _ctx.placeholder,
            form: _ctx.form,
            autofocus: _ctx.autofocus,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
            onBlur: _cache[3] || (_cache[3] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_3$2),
          unref(isWordLimitVisible) ? (openBlock(), createElementBlock("span", {
            key: 0,
            style: normalizeStyle(countStyle.value),
            class: normalizeClass(unref(nsInput).e("count"))
          }, toDisplayString(unref(textLength)) + " / " + toDisplayString(_ctx.maxlength), 7)) : createCommentVNode("v-if", true)
        ], 64))
      ], 16, _hoisted_1$d);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__file", "input.vue"]]);
const ElInput = withInstall(Input);
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});
const scrollbarContextKey = Symbol("scrollbarContextKey");
const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
const COMPONENT_NAME$2 = "Thumb";
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const scrollbar2 = inject(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar2)
      throwError(COMPONENT_NAME$2, "can not inject scrollbar context");
    const instance = ref();
    const thumb = ref();
    const thumbState = ref({});
    const visible = ref(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = null;
    const bar = computed(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = computed(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = computed(() => instance.value[bar.value.offset] ** 2 / scrollbar2.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar2.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar2.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar2.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar2.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar2.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener(toRef(scrollbar2, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener(toRef(scrollbar2, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "instance",
            ref: instance,
            class: normalizeClass([unref(ns).e("bar"), unref(ns).is(unref(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            createElementVNode("div", {
              ref_key: "thumb",
              ref: thumb,
              class: normalizeClass(unref(ns).e("thumb")),
              style: normalizeStyle(unref(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__file", "thumb.vue"]]);
const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  minSize: {
    type: Number,
    required: true
  }
});
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const scrollbar2 = inject(scrollbarContextKey);
    const moveX = ref(0);
    const moveY = ref(0);
    const sizeWidth = ref("");
    const sizeHeight = ref("");
    const ratioY = ref(1);
    const ratioX = ref(1);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * ratioY.value;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * ratioX.value;
      }
    };
    const update = () => {
      const wrap = scrollbar2 == null ? void 0 : scrollbar2.wrapElement;
      if (!wrap)
        return;
      const offsetHeight = wrap.offsetHeight - GAP;
      const offsetWidth = wrap.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    expose({
      handleScroll,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Thumb, {
          move: moveX.value,
          ratio: ratioX.value,
          size: sizeWidth.value,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        createVNode(Thumb, {
          move: moveY.value,
          ratio: ratioY.value,
          size: sizeHeight.value,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__file", "bar.vue"]]);
const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: false
  },
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ...useAriaProps(["ariaLabel", "ariaOrientation"])
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(isNumber)
};
const COMPONENT_NAME$1 = "ElScrollbar";
const __default__$m = defineComponent({
  name: COMPONENT_NAME$1
});
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbarRef = ref();
    const wrapRef = ref();
    const resizeRef = ref();
    const barRef = ref();
    const wrapStyle = computed(() => {
      const style = {};
      if (props.height)
        style.height = addUnit(props.height);
      if (props.maxHeight)
        style.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style];
    });
    const wrapKls = computed(() => {
      return [
        props.wrapClass,
        ns.e("wrap"),
        { [ns.em("wrap", "hidden-default")]: !props.native }
      ];
    });
    const resizeKls = computed(() => {
      return [ns.e("view"), props.viewClass];
    });
    const handleScroll = () => {
      var _a;
      if (wrapRef.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
        emit("scroll", {
          scrollTop: wrapRef.value.scrollTop,
          scrollLeft: wrapRef.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if (isObject(arg1)) {
        wrapRef.value.scrollTo(arg1);
      } else if (isNumber(arg1) && isNumber(arg2)) {
        wrapRef.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!isNumber(value)) {
        debugWarn(COMPONENT_NAME$1, "value must be a number");
        return;
      }
      wrapRef.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        debugWarn(COMPONENT_NAME$1, "value must be a number");
        return;
      }
      wrapRef.value.scrollLeft = value;
    };
    const update = () => {
      var _a;
      (_a = barRef.value) == null ? void 0 : _a.update();
    };
    watch(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ({ stop: stopResizeObserver } = useResizeObserver(resizeRef, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    watch(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        nextTick(() => {
          var _a;
          update();
          if (wrapRef.value) {
            (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrapRef.value);
          }
        });
    });
    provide(scrollbarContextKey, reactive({
      scrollbarElement: scrollbarRef,
      wrapElement: wrapRef
    }));
    onUpdated(() => update());
    expose({
      wrapRef,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "scrollbarRef",
        ref: scrollbarRef,
        class: normalizeClass(unref(ns).b())
      }, [
        createElementVNode("div", {
          ref_key: "wrapRef",
          ref: wrapRef,
          class: normalizeClass(unref(wrapKls)),
          style: normalizeStyle(unref(wrapStyle)),
          onScroll: handleScroll
        }, [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
            id: _ctx.id,
            ref_key: "resizeRef",
            ref: resizeRef,
            class: normalizeClass(unref(resizeKls)),
            style: normalizeStyle(_ctx.viewStyle),
            role: _ctx.role,
            "aria-label": _ctx.ariaLabel,
            "aria-orientation": _ctx.ariaOrientation
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
        ], 38),
        !_ctx.native ? (openBlock(), createBlock(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          always: _ctx.always,
          "min-size": _ctx.minSize
        }, null, 8, ["always", "min-size"])) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__file", "scrollbar.vue"]]);
const ElScrollbar = withInstall(Scrollbar);
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");
const roleTypes = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
const popperProps = buildProps({
  role: {
    type: String,
    values: roleTypes,
    default: "tooltip"
  }
});
const __default__$l = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  props: popperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const role = computed(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__file", "popper.vue"]]);
const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
const __default__$k = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  props: popperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("popper");
    const { arrowOffset, arrowRef, arrowStyle } = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
    watch(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: normalizeClass(unref(ns).e("arrow")),
        style: normalizeStyle(unref(arrowStyle)),
        "data-popper-arrow": ""
      }, null, 6);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__file", "arrow.vue"]]);
const NAME = "ElOnlyChild";
const OnlyChild = defineComponent({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = inject(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : NOOP);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        debugWarn(NAME, "requires exact only one valid child.");
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        debugWarn(NAME, "no valid child node found");
        return null;
      }
      return withDirectives(cloneVNode(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return wrapTextContent(child);
        case Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = useNamespace("only-child");
  return createVNode("span", {
    "class": ns.e("content")
  }, [s]);
}
const popperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: definePropType(Function)
  },
  onMouseleave: {
    type: definePropType(Function)
  },
  onClick: {
    type: definePropType(Function)
  },
  onKeydown: {
    type: definePropType(Function)
  },
  onFocus: {
    type: definePropType(Function)
  },
  onBlur: {
    type: definePropType(Function)
  },
  onContextmenu: {
    type: definePropType(Function)
  },
  id: String,
  open: Boolean
});
const __default__$j = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  ...__default__$j,
  props: popperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = inject(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = computed(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = computed(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = computed(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = computed(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? (openBlock(), createBlock(unref(OnlyChild), mergeProps({ key: 0 }, _ctx.$attrs, {
        "aria-controls": unref(ariaControls),
        "aria-describedby": unref(ariaDescribedby),
        "aria-expanded": unref(ariaExpanded),
        "aria-haspopup": unref(ariaHaspopup)
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : createCommentVNode("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__file", "trigger.vue"]]);
const FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
const FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");
const focusReason = ref();
const lastUserFocusTimestamp = ref(0);
const lastAutomatedFocusTimestamp = ref(0);
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
const useFocusReason = () => {
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
const createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};
const _sfc_main$G = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
            }
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop)
                tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const onFocusIn = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        relatedTarget && trapContainer.contains(relatedTarget);
      }
      if (isFocusedInTrap)
        emit("focusin", e);
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = unref(forwardRef);
      if (!trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!isNil(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    return {
      onKeydown
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$6], ["__file", "focus-trap.vue"]]);
const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: placements,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType([String, Array, Object])
  },
  className: {
    type: definePropType([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(["ariaLabel"])
});
const popperContentEmits = {
  mouseenter: (evt) => evt instanceof MouseEvent,
  mouseleave: (evt) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
const buildPopperOptions = (props, modifiers = []) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: [...genModifiers(props), ...modifiers]
  };
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  return;
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration
      }
    }
  ];
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}
const DEFAULT_ARROW_OFFSET = 0;
const usePopperContent = (props) => {
  const { popperInstanceRef, contentRef, triggerRef, role } = inject(POPPER_INJECTION_KEY, void 0);
  const arrowRef = ref();
  const arrowOffset = ref();
  const eventListenerModifier = computed(() => {
    return {
      name: "eventListeners",
      enabled: !!props.visible
    };
  });
  const arrowModifier = computed(() => {
    var _a;
    const arrowEl = unref(arrowRef);
    const offset = (_a = unref(arrowOffset)) != null ? _a : DEFAULT_ARROW_OFFSET;
    return {
      name: "arrow",
      enabled: !isUndefined$1(arrowEl),
      options: {
        element: arrowEl,
        padding: offset
      }
    };
  });
  const options = computed(() => {
    return {
      onFirstUpdate: () => {
        update();
      },
      ...buildPopperOptions(props, [
        unref(arrowModifier),
        unref(eventListenerModifier)
      ])
    };
  });
  const computedReference = computed(() => unwrapMeasurableEl(props.referenceEl) || unref(triggerRef));
  const { attributes, state, styles: styles2, update, forceUpdate, instanceRef } = usePopper(computedReference, contentRef, options);
  watch(instanceRef, (instance) => popperInstanceRef.value = instance);
  return {
    attributes,
    arrowRef,
    contentRef,
    instanceRef,
    state,
    styles: styles2,
    role,
    forceUpdate,
    update
  };
};
const usePopperContentDOM = (props, {
  attributes,
  styles: styles2,
  role
}) => {
  const { nextZIndex } = useZIndex();
  const ns = useNamespace("popper");
  const contentAttrs = computed(() => unref(attributes).popper);
  const contentZIndex = ref(isNumber(props.zIndex) ? props.zIndex : nextZIndex());
  const contentClass = computed(() => [
    ns.b(),
    ns.is("pure", props.pure),
    ns.is(props.effect),
    props.popperClass
  ]);
  const contentStyle = computed(() => {
    return [
      { zIndex: unref(contentZIndex) },
      unref(styles2).popper,
      props.popperStyle || {}
    ];
  });
  const ariaModal = computed(() => role.value === "dialog" ? "false" : void 0);
  const arrowStyle = computed(() => unref(styles2).arrow || {});
  const updateZIndex = () => {
    contentZIndex.value = isNumber(props.zIndex) ? props.zIndex : nextZIndex();
  };
  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,
    updateZIndex
  };
};
const usePopperContentFocusTrap = (props, emit) => {
  const trapped = ref(false);
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (props.visible && !trapped.value) {
      if (event.target) {
        focusStartRef.value = event.target;
      }
      trapped.value = true;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (!props.trapping) {
      if (event.detail.focusReason === "pointer") {
        event.preventDefault();
      }
      trapped.value = false;
    }
  };
  const onReleaseRequested = () => {
    trapped.value = false;
    emit("close");
  };
  return {
    focusStartRef,
    trapped,
    onFocusAfterReleased,
    onFocusAfterTrapped,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};
const __default__$i = defineComponent({
  name: "ElPopperContent"
});
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  props: popperContentProps,
  emits: popperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const {
      focusStartRef,
      trapped,
      onFocusAfterReleased,
      onFocusAfterTrapped,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = usePopperContentFocusTrap(props, emit);
    const { attributes, arrowRef, contentRef, styles: styles2, instanceRef, role, update } = usePopperContent(props);
    const {
      ariaModal,
      arrowStyle,
      contentAttrs,
      contentClass,
      contentStyle,
      updateZIndex
    } = usePopperContentDOM(props, {
      styles: styles2,
      attributes,
      role
    });
    const formItemContext = inject(formItemContextKey, void 0);
    const arrowOffset = ref();
    provide(POPPER_CONTENT_INJECTION_KEY, {
      arrowStyle,
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      provide(formItemContextKey, {
        ...formItemContext,
        addInputId: NOOP,
        removeInputId: NOOP
      });
    }
    const updatePopper = (shouldUpdateZIndex = true) => {
      update();
      shouldUpdateZIndex && updateZIndex();
    };
    expose({
      popperContentRef: contentRef,
      popperInstanceRef: instanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        ref_key: "contentRef",
        ref: contentRef
      }, unref(contentAttrs), {
        style: unref(contentStyle),
        class: unref(contentClass),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }), [
        createVNode(unref(ElFocusTrap), {
          trapped: unref(trapped),
          "trap-on-focus-in": true,
          "focus-trap-el": unref(contentRef),
          "focus-start-el": unref(focusStartRef),
          onFocusAfterTrapped: unref(onFocusAfterTrapped),
          onFocusAfterReleased: unref(onFocusAfterReleased),
          onFocusin: unref(onFocusInTrap),
          onFocusoutPrevented: unref(onFocusoutPrevented),
          onReleaseRequested: unref(onReleaseRequested)
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
      ], 16);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__file", "content.vue"]]);
const ElPopper = withInstall(Popper);
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...popperContentProps,
  appendTo: {
    type: definePropType([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: Boolean,
  ...useAriaProps(["ariaLabel"])
});
const useTooltipTriggerProps = buildProps({
  ...popperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const {
  useModelToggleProps: useTooltipModelToggleProps,
  useModelToggleEmits: useTooltipModelToggleEmits,
  useModelToggle: useTooltipModelToggle
} = createModelToggleComposable("visible");
const useTooltipProps = buildProps({
  ...popperProps,
  ...useTooltipModelToggleProps,
  ...useTooltipContentProps,
  ...useTooltipTriggerProps,
  ...popperArrowProps,
  showArrow: {
    type: Boolean,
    default: true
  }
});
const tooltipEmits = [
  ...useTooltipModelToggleEmits,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
const isTriggerType = (trigger, type) => {
  if (isArray(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType(unref(trigger), type) && handler(e);
  };
};
const __default__$h = defineComponent({
  name: "ElTooltipTrigger"
});
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  props: useTooltipTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = ref(null);
    const stopWhenControlledOrDisabled = () => {
      if (unref(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = toRef(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopperTrigger), {
        id: unref(id),
        "virtual-ref": _ctx.virtualRef,
        open: unref(open),
        "virtual-triggering": _ctx.virtualTriggering,
        class: normalizeClass(unref(ns).e("trigger")),
        onBlur: unref(onBlur),
        onClick: unref(onClick),
        onContextmenu: unref(onContextMenu),
        onFocus: unref(onFocus),
        onMouseenter: unref(onMouseenter),
        onMouseleave: unref(onMouseleave),
        onKeydown: unref(onKeydown)
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
    };
  }
});
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__file", "trigger.vue"]]);
const __default__$g = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  props: useTooltipContentProps,
  setup(__props, { expose }) {
    const props = __props;
    const { selector } = usePopperContainerId();
    const ns = useNamespace("tooltip");
    const contentRef = ref(null);
    const destroyed = ref(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = inject(TOOLTIP_INJECTION_KEY, void 0);
    const transitionClass = computed(() => {
      return props.transition || `${ns.namespace.value}-fade-in-linear`;
    });
    const persistentRef = computed(() => {
      return props.persistent;
    });
    const shouldRender = computed(() => {
      return unref(persistentRef) ? true : unref(open);
    });
    const shouldShow = computed(() => {
      return props.disabled ? false : unref(open);
    });
    const appendTo = computed(() => {
      return props.appendTo || selector.value;
    });
    const contentStyle = computed(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = computed(() => !unref(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if (unref(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && unref(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if (unref(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside(computed(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if (unref(controlled))
          return;
        const $trigger = unref(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    watch(() => unref(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    watch(() => props.content, () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    expose({
      contentRef
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        disabled: !_ctx.teleported,
        to: unref(appendTo)
      }, [
        createVNode(Transition, {
          name: unref(transitionClass),
          onAfterLeave: onTransitionLeave,
          onBeforeEnter,
          onAfterEnter: onAfterShow,
          onBeforeLeave
        }, {
          default: withCtx(() => [
            unref(shouldRender) ? withDirectives((openBlock(), createBlock(unref(ElPopperContent), mergeProps({
              key: 0,
              id: unref(id),
              ref_key: "contentRef",
              ref: contentRef
            }, _ctx.$attrs, {
              "aria-label": _ctx.ariaLabel,
              "aria-hidden": unref(ariaHidden),
              "boundaries-padding": _ctx.boundariesPadding,
              "fallback-placements": _ctx.fallbackPlacements,
              "gpu-acceleration": _ctx.gpuAcceleration,
              offset: _ctx.offset,
              placement: _ctx.placement,
              "popper-options": _ctx.popperOptions,
              strategy: _ctx.strategy,
              effect: _ctx.effect,
              enterable: _ctx.enterable,
              pure: _ctx.pure,
              "popper-class": _ctx.popperClass,
              "popper-style": [_ctx.popperStyle, unref(contentStyle)],
              "reference-el": _ctx.referenceEl,
              "trigger-target-el": _ctx.triggerTargetEl,
              visible: unref(shouldShow),
              "z-index": _ctx.zIndex,
              onMouseenter: unref(onContentEnter),
              onMouseleave: unref(onContentLeave),
              onBlur,
              onClose: unref(onClose)
            }), {
              default: withCtx(() => [
                !destroyed.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [vShow, unref(shouldShow)]
            ]) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["name"])
      ], 8, ["disabled", "to"]);
    };
  }
});
var ElTooltipContent = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__file", "content.vue"]]);
const _hoisted_1$c = ["innerHTML"];
const _hoisted_2$9 = { key: 1 };
const __default__$f = defineComponent({
  name: "ElTooltip"
});
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  ...__default__$f,
  props: useTooltipProps,
  emits: tooltipEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    usePopperContainer();
    const id = useId();
    const popperRef = ref();
    const contentRef = ref();
    const updatePopper = () => {
      var _a;
      const popperComponent = unref(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = ref(false);
    const toggleReason = ref();
    const { show, hide, hasUpdateHandler } = useTooltipModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: toRef(props, "showAfter"),
      hideAfter: toRef(props, "hideAfter"),
      autoClose: toRef(props, "autoClose"),
      open: show,
      close: hide
    });
    const controlled = computed(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    provide(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: readonly(open),
      trigger: toRef(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if (unref(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    watch(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = (event) => {
      var _a, _b;
      const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
      const activeElement = (event == null ? void 0 : event.relatedTarget) || document.activeElement;
      return popperContent && popperContent.contains(activeElement);
    };
    expose({
      popperRef,
      contentRef,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose,
      hide
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopper), {
        ref_key: "popperRef",
        ref: popperRef,
        role: _ctx.role
      }, {
        default: withCtx(() => [
          createVNode(ElTooltipTrigger, {
            disabled: _ctx.disabled,
            trigger: _ctx.trigger,
            "trigger-keys": _ctx.triggerKeys,
            "virtual-ref": _ctx.virtualRef,
            "virtual-triggering": _ctx.virtualTriggering
          }, {
            default: withCtx(() => [
              _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
          createVNode(ElTooltipContent, {
            ref_key: "contentRef",
            ref: contentRef,
            "aria-label": _ctx.ariaLabel,
            "boundaries-padding": _ctx.boundariesPadding,
            content: _ctx.content,
            disabled: _ctx.disabled,
            effect: _ctx.effect,
            enterable: _ctx.enterable,
            "fallback-placements": _ctx.fallbackPlacements,
            "hide-after": _ctx.hideAfter,
            "gpu-acceleration": _ctx.gpuAcceleration,
            offset: _ctx.offset,
            persistent: _ctx.persistent,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            placement: _ctx.placement,
            "popper-options": _ctx.popperOptions,
            pure: _ctx.pure,
            "raw-content": _ctx.rawContent,
            "reference-el": _ctx.referenceEl,
            "trigger-target-el": _ctx.triggerTargetEl,
            "show-after": _ctx.showAfter,
            strategy: _ctx.strategy,
            teleported: _ctx.teleported,
            transition: _ctx.transition,
            "virtual-triggering": _ctx.virtualTriggering,
            "z-index": _ctx.zIndex,
            "append-to": _ctx.appendTo
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "content", {}, () => [
                _ctx.rawContent ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: _ctx.content
                }, null, 8, _hoisted_1$c)) : (openBlock(), createElementBlock("span", _hoisted_2$9, toDisplayString(_ctx.content), 1))
              ]),
              _ctx.showArrow ? (openBlock(), createBlock(unref(ElPopperArrow), {
                key: 0,
                "arrow-offset": _ctx.arrowOffset
              }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
        ]),
        _: 3
      }, 8, ["role"]);
    };
  }
});
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__file", "tooltip.vue"]]);
const ElTooltip = withInstall(Tooltip);
const nodeList = /* @__PURE__ */ new Map();
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    const fn = function(event) {
      const normalized = normalizeWheel(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    element.addEventListener("wheel", fn, { passive: true });
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  }
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  value: {
    type: [String, Boolean, Number, Object],
    default: void 0
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueValue: {
    type: [String, Number],
    default: void 0
  },
  falseValue: {
    type: [String, Number],
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaControls"])
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString$1(val) || isNumber(val) || isBoolean(val),
  change: (val) => isString$1(val) || isNumber(val) || isBoolean(val)
};
const checkboxGroupContextKey = Symbol("checkboxGroupContextKey");
const useCheckboxDisabled = ({
  model,
  isChecked
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isLimitDisabled = computed(() => {
    var _a, _b;
    const max = (_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup == null ? void 0 : checkboxGroup.min) == null ? void 0 : _b.value;
    return !isUndefined(max) && model.value.length >= max && !isChecked.value || !isUndefined(min) && model.value.length <= min && isChecked.value;
  });
  const isDisabled = useFormDisabled(computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.disabled.value) || isLimitDisabled.value));
  return {
    isDisabled,
    isLimitDisabled
  };
};
const useCheckboxEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const { formItem } = useFormItem();
  const { emit } = getCurrentInstance();
  function getLabeledValue(value) {
    var _a, _b, _c, _d;
    return [true, props.trueValue, props.trueLabel].includes(value) ? (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true : (_d = (_c = props.falseValue) != null ? _c : props.falseLabel) != null ? _d : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      const eventTargets = e.composedPath();
      const hasLabel = eventTargets.some((item) => item.tagName === "LABEL");
      if (!hasLabel) {
        model.value = getLabeledValue([false, props.falseValue, props.falseLabel].includes(model.value));
        await nextTick();
        emitChangeEvent(model.value, e);
      }
    }
  }
  const validateEvent = computed(() => (checkboxGroup == null ? void 0 : checkboxGroup.validateEvent) || props.validateEvent);
  watch(() => props.modelValue, () => {
    if (validateEvent.value) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const useCheckboxModel = (props) => {
  const selfModel = ref(false);
  const { emit } = getCurrentInstance();
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isGroup = computed(() => isUndefined(checkboxGroup) === false);
  const isLimitExceeded = ref(false);
  const model = computed({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a, _b;
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value = ((_a = checkboxGroup == null ? void 0 : checkboxGroup.max) == null ? void 0 : _a.value) !== void 0 && val.length > (checkboxGroup == null ? void 0 : checkboxGroup.max.value) && val.length > model.value.length;
        isLimitExceeded.value === false && ((_b = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _b.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const checkboxGroup = inject(checkboxGroupContextKey, void 0);
  const isFocused = ref(false);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const isChecked = computed(() => {
    const value = model.value;
    if (isBoolean(value)) {
      return value;
    } else if (isArray(value)) {
      if (isObject(actualValue.value)) {
        return value.map(toRaw).some((o) => isEqual(o, actualValue.value));
      } else {
        return value.map(toRaw).includes(actualValue.value);
      }
    } else if (value !== null && value !== void 0) {
      return value === props.trueValue || value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxButtonSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }), {
    prop: true
  });
  const checkboxSize = useFormSize(computed(() => {
    var _a;
    return (_a = checkboxGroup == null ? void 0 : checkboxGroup.size) == null ? void 0 : _a.value;
  }));
  const hasOwnLabel = computed(() => {
    return !!slots.default || !isPropAbsent(actualValue.value);
  });
  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue
  };
};
const useCheckbox = (props, slots) => {
  const { formItem: elFormItem } = useFormItem();
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props);
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue
  } = useCheckboxStatus(props, slots, { model });
  const { isDisabled } = useCheckboxDisabled({ model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  const setStoreValue = () => {
    function addToStore() {
      var _a, _b;
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value);
      } else {
        model.value = (_b = (_a = props.trueValue) != null ? _a : props.trueLabel) != null ? _b : true;
      }
    }
    props.checked && addToStore();
  };
  setStoreValue();
  useDeprecated({
    from: "controls",
    replacement: "aria-controls",
    version: "2.8.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.controls));
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  useDeprecated({
    from: "true-label",
    replacement: "true-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.trueLabel));
  useDeprecated({
    from: "false-label",
    replacement: "false-value",
    version: "3.0.0",
    scope: "el-checkbox",
    ref: "https://element-plus.org/en-US/component/checkbox.html"
  }, computed(() => !!props.falseLabel));
  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot
  };
};
const _hoisted_1$b = ["id", "indeterminate", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$8 = ["id", "indeterminate", "disabled", "value", "name", "tabindex"];
const __default__$e = defineComponent({
  name: "ElCheckbox"
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  ...__default__$e,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      isFocused,
      checkboxSize,
      hasOwnLabel,
      model,
      actualValue,
      handleChange,
      onClickRoot
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    const compKls = computed(() => {
      return [
        ns.b(),
        ns.m(checkboxSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("bordered", props.border),
        ns.is("checked", isChecked.value)
      ];
    });
    const spanKls = computed(() => {
      return [
        ns.e("input"),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("indeterminate", props.indeterminate),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(!unref(hasOwnLabel) && unref(isLabeledByFormItem) ? "span" : "label"), {
        class: normalizeClass(unref(compKls)),
        "aria-controls": _ctx.indeterminate ? _ctx.controls || _ctx.ariaControls : null,
        onClick: unref(onClickRoot)
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            createElementVNode("span", {
              class: normalizeClass(unref(spanKls))
            }, [
              _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
                key: 0,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                disabled: unref(isDisabled),
                "true-value": (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel,
                "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
                onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
                onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
                onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_1$b)), [
                [vModelCheckbox, unref(model)]
              ]) : withDirectives((openBlock(), createElementBlock("input", {
                key: 1,
                id: unref(inputId),
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
                class: normalizeClass(unref(ns).e("original")),
                type: "checkbox",
                indeterminate: _ctx.indeterminate,
                disabled: unref(isDisabled),
                value: unref(actualValue),
                name: _ctx.name,
                tabindex: _ctx.tabindex,
                onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
                onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
                onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
                onClick: _cache[9] || (_cache[9] = withModifiers(() => {
                }, ["stop"]))
              }, null, 42, _hoisted_2$8)), [
                [vModelCheckbox, unref(model)]
              ]),
              createElementVNode("span", {
                class: normalizeClass(unref(ns).e("inner"))
              }, null, 2)
            ], 2),
            unref(hasOwnLabel) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(unref(ns).e("label"))
            }, [
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ], 64)) : createCommentVNode("v-if", true)
            ], 2)) : createCommentVNode("v-if", true)
          ];
        }),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__file", "checkbox.vue"]]);
const _hoisted_1$a = ["name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_2$7 = ["name", "tabindex", "disabled", "value"];
const __default__$d = defineComponent({
  name: "ElCheckboxButton"
});
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  ...__default__$d,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const {
      isFocused,
      isChecked,
      isDisabled,
      checkboxButtonSize,
      model,
      actualValue,
      handleChange
    } = useCheckbox(props, slots);
    const checkboxGroup = inject(checkboxGroupContextKey, void 0);
    const ns = useNamespace("checkbox");
    const activeStyle = computed(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    const labelKls = computed(() => {
      return [
        ns.b("button"),
        ns.bm("button", checkboxButtonSize.value),
        ns.is("disabled", isDisabled.value),
        ns.is("checked", isChecked.value),
        ns.is("focus", isFocused.value)
      ];
    });
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(labelKls))
      }, [
        _ctx.trueValue || _ctx.falseValue || _ctx.trueLabel || _ctx.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          "true-value": (_a = _ctx.trueValue) != null ? _a : _ctx.trueLabel,
          "false-value": (_b = _ctx.falseValue) != null ? _b : _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => isFocused.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => isFocused.value = false),
          onClick: _cache[4] || (_cache[4] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_1$a)), [
          [vModelCheckbox, unref(model)]
        ]) : withDirectives((openBlock(), createElementBlock("input", {
          key: 1,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(model) ? model.value = $event : null),
          class: normalizeClass(unref(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: unref(isDisabled),
          value: unref(actualValue),
          onChange: _cache[6] || (_cache[6] = (...args) => unref(handleChange) && unref(handleChange)(...args)),
          onFocus: _cache[7] || (_cache[7] = ($event) => isFocused.value = true),
          onBlur: _cache[8] || (_cache[8] = ($event) => isFocused.value = false),
          onClick: _cache[9] || (_cache[9] = withModifiers(() => {
          }, ["stop"]))
        }, null, 42, _hoisted_2$7)), [
          [vModelCheckbox, unref(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(isChecked) ? unref(activeStyle) : void 0)
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 6)) : createCommentVNode("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__file", "checkbox-button.vue"]]);
const checkboxGroupProps = buildProps({
  modelValue: {
    type: definePropType(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: useSizeProp,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isArray(val),
  change: (val) => isArray(val)
};
const __default__$c = defineComponent({
  name: "ElCheckboxGroup"
});
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  ...__default__$c,
  props: checkboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("checkbox");
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = async (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      await nextTick();
      emit("change", value);
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide(checkboxGroupContextKey, {
      ...pick(toRefs(props), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue,
      changeEvent
    });
    useDeprecated({
      from: "label",
      replacement: "aria-label",
      version: "2.8.0",
      scope: "el-checkbox-group",
      ref: "https://element-plus.org/en-US/component/checkbox.html"
    }, computed(() => !!props.label));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        id: unref(groupId),
        class: normalizeClass(unref(ns).b("group")),
        role: "group",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.label || _ctx.ariaLabel || "checkbox-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? (_a = unref(formItem)) == null ? void 0 : _a.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__file", "checkbox-group.vue"]]);
const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup
});
withNoopInstall(CheckboxButton);
withNoopInstall(CheckboxGroup);
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__$b = defineComponent({
  name: "ElTag"
});
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(containerKls)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(containerKls)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "tag.vue"]]);
const ElTag = withInstall(Tag);
const rowContextKey = Symbol("rowContextKey");
const RowJustify = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly"
];
const RowAlign = ["top", "middle", "bottom"];
const rowProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  gutter: {
    type: Number,
    default: 0
  },
  justify: {
    type: String,
    values: RowJustify,
    default: "start"
  },
  align: {
    type: String,
    values: RowAlign
  }
});
const __default__$a = defineComponent({
  name: "ElRow"
});
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("row");
    const gutter = computed(() => props.gutter);
    provide(rowContextKey, {
      gutter
    });
    const style = computed(() => {
      const styles2 = {};
      if (!props.gutter) {
        return styles2;
      }
      styles2.marginRight = styles2.marginLeft = `-${props.gutter / 2}px`;
      return styles2;
    });
    const rowKls = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== "start"),
      ns.is(`align-${props.align}`, !!props.align)
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(rowKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "row.vue"]]);
const ElRow = withInstall(Row);
const colProps = buildProps({
  tag: {
    type: String,
    default: "div"
  },
  span: {
    type: Number,
    default: 24
  },
  offset: {
    type: Number,
    default: 0
  },
  pull: {
    type: Number,
    default: 0
  },
  push: {
    type: Number,
    default: 0
  },
  xs: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  sm: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  md: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  lg: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  },
  xl: {
    type: definePropType([Number, Object]),
    default: () => mutable({})
  }
});
const __default__$9 = defineComponent({
  name: "ElCol"
});
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: colProps,
  setup(__props) {
    const props = __props;
    const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });
    const ns = useNamespace("col");
    const style = computed(() => {
      const styles2 = {};
      if (gutter.value) {
        styles2.paddingLeft = styles2.paddingRight = `${gutter.value / 2}px`;
      }
      return styles2;
    });
    const colKls = computed(() => {
      const classes = [];
      const pos = ["span", "offset", "pull", "push"];
      pos.forEach((prop) => {
        const size = props[prop];
        if (isNumber(size)) {
          if (prop === "span")
            classes.push(ns.b(`${props[prop]}`));
          else if (size > 0)
            classes.push(ns.b(`${prop}-${props[prop]}`));
        }
      });
      const sizes = ["xs", "sm", "md", "lg", "xl"];
      sizes.forEach((size) => {
        if (isNumber(props[size])) {
          classes.push(ns.b(`${size}-${props[size]}`));
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(prop !== "span" ? ns.b(`${size}-${prop}-${sizeProp}`) : ns.b(`${size}-${sizeProp}`));
          });
        }
      });
      if (gutter.value) {
        classes.push(ns.is("guttered"));
      }
      return [ns.b(), classes];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        class: normalizeClass(unref(colKls)),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "col.vue"]]);
const ElCol = withInstall(Col);
const emitChangeFn = (value) => isNumber(value) || isString$1(value) || isArray(value);
const collapseProps = buildProps({
  accordion: Boolean,
  modelValue: {
    type: definePropType([Array, String, Number]),
    default: () => mutable([])
  }
});
const collapseEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn
};
const collapseContextKey = Symbol("collapseContextKey");
const useCollapse = (props, emit) => {
  const activeNames = ref(castArray(props.modelValue));
  const setActiveNames = (_activeNames) => {
    activeNames.value = _activeNames;
    const value = props.accordion ? activeNames.value[0] : activeNames.value;
    emit(UPDATE_MODEL_EVENT, value);
    emit(CHANGE_EVENT, value);
  };
  const handleItemClick = (name) => {
    if (props.accordion) {
      setActiveNames([activeNames.value[0] === name ? "" : name]);
    } else {
      const _activeNames = [...activeNames.value];
      const index = _activeNames.indexOf(name);
      if (index > -1) {
        _activeNames.splice(index, 1);
      } else {
        _activeNames.push(name);
      }
      setActiveNames(_activeNames);
    }
  };
  watch(() => props.modelValue, () => activeNames.value = castArray(props.modelValue), { deep: true });
  provide(collapseContextKey, {
    activeNames,
    handleItemClick
  });
  return {
    activeNames,
    setActiveNames
  };
};
const useCollapseDOM = () => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => ns.b());
  return {
    rootKls
  };
};
const __default__$8 = defineComponent({
  name: "ElCollapse"
});
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: collapseProps,
  emits: collapseEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { activeNames, setActiveNames } = useCollapse(props, emit);
    const { rootKls } = useCollapseDOM();
    expose({
      activeNames,
      setActiveNames
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Collapse = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "collapse.vue"]]);
const __default__$7 = defineComponent({
  name: "ElCollapseTransition"
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const ns = useNamespace("collapse-transition");
    const reset = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height)
          el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset(el);
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset(el);
      },
      leaveCancelled(el) {
        reset(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "collapse-transition.vue"]]);
CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const collapseItemProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  name: {
    type: definePropType([String, Number]),
    default: void 0
  },
  disabled: Boolean
});
const useCollapseItem = (props) => {
  const collapse2 = inject(collapseContextKey);
  const { namespace } = useNamespace("collapse");
  const focusing = ref(false);
  const isClick = ref(false);
  const idInjection = useIdInjection();
  const id = computed(() => idInjection.current++);
  const name = computed(() => {
    var _a;
    return (_a = props.name) != null ? _a : `${namespace.value}-id-${idInjection.prefix}-${unref(id)}`;
  });
  const isActive = computed(() => collapse2 == null ? void 0 : collapse2.activeNames.value.includes(unref(name)));
  const handleFocus = () => {
    setTimeout(() => {
      if (!isClick.value) {
        focusing.value = true;
      } else {
        isClick.value = false;
      }
    }, 50);
  };
  const handleHeaderClick = () => {
    if (props.disabled)
      return;
    collapse2 == null ? void 0 : collapse2.handleItemClick(unref(name));
    focusing.value = false;
    isClick.value = true;
  };
  const handleEnterClick = () => {
    collapse2 == null ? void 0 : collapse2.handleItemClick(unref(name));
  };
  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick
  };
};
const useCollapseItemDOM = (props, { focusing, isActive, id }) => {
  const ns = useNamespace("collapse");
  const rootKls = computed(() => [
    ns.b("item"),
    ns.is("active", unref(isActive)),
    ns.is("disabled", props.disabled)
  ]);
  const headKls = computed(() => [
    ns.be("item", "header"),
    ns.is("active", unref(isActive)),
    { focusing: unref(focusing) && !props.disabled }
  ]);
  const arrowKls = computed(() => [
    ns.be("item", "arrow"),
    ns.is("active", unref(isActive))
  ]);
  const itemWrapperKls = computed(() => ns.be("item", "wrap"));
  const itemContentKls = computed(() => ns.be("item", "content"));
  const scopedContentId = computed(() => ns.b(`content-${unref(id)}`));
  const scopedHeadId = computed(() => ns.b(`head-${unref(id)}`));
  return {
    arrowKls,
    headKls,
    rootKls,
    itemWrapperKls,
    itemContentKls,
    scopedContentId,
    scopedHeadId
  };
};
const _hoisted_1$9 = ["id", "aria-expanded", "aria-controls", "aria-describedby", "tabindex"];
const _hoisted_2$6 = ["id", "aria-hidden", "aria-labelledby"];
const __default__$6 = defineComponent({
  name: "ElCollapseItem"
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: collapseItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const {
      focusing,
      id,
      isActive,
      handleFocus,
      handleHeaderClick,
      handleEnterClick
    } = useCollapseItem(props);
    const {
      arrowKls,
      headKls,
      rootKls,
      itemWrapperKls,
      itemContentKls,
      scopedContentId,
      scopedHeadId
    } = useCollapseItemDOM(props, { focusing, isActive, id });
    expose({
      isActive
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(rootKls))
      }, [
        createElementVNode("button", {
          id: unref(scopedHeadId),
          class: normalizeClass(unref(headKls)),
          "aria-expanded": unref(isActive),
          "aria-controls": unref(scopedContentId),
          "aria-describedby": unref(scopedContentId),
          tabindex: _ctx.disabled ? -1 : 0,
          type: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => unref(handleHeaderClick) && unref(handleHeaderClick)(...args)),
          onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers((...args) => unref(handleEnterClick) && unref(handleEnterClick)(...args), ["stop", "prevent"]), ["space", "enter"])),
          onFocus: _cache[2] || (_cache[2] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
          onBlur: _cache[3] || (_cache[3] = ($event) => focusing.value = false)
        }, [
          renderSlot(_ctx.$slots, "title", {}, () => [
            createTextVNode(toDisplayString(_ctx.title), 1)
          ]),
          createVNode(unref(ElIcon), {
            class: normalizeClass(unref(arrowKls))
          }, {
            default: withCtx(() => [
              createVNode(unref(arrow_right_default))
            ]),
            _: 1
          }, 8, ["class"])
        ], 42, _hoisted_1$9),
        createVNode(unref(_CollapseTransition), null, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: unref(scopedContentId),
              role: "region",
              class: normalizeClass(unref(itemWrapperKls)),
              "aria-hidden": !unref(isActive),
              "aria-labelledby": unref(scopedHeadId)
            }, [
              createElementVNode("div", {
                class: normalizeClass(unref(itemContentKls))
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
            ], 10, _hoisted_2$6), [
              [vShow, unref(isActive)]
            ])
          ]),
          _: 3
        })
      ], 2);
    };
  }
});
var CollapseItem = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "collapse-item.vue"]]);
const ElCollapse = withInstall(Collapse, {
  CollapseItem
});
const ElCollapseItem = withNoopInstall(CollapseItem);
const elPaginationKey = Symbol("elPaginationKey");
const paginationPrevProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: iconPropType
  }
});
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$8 = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2$5 = { key: 0 };
const __default__$5 = defineComponent({
  name: "ElPaginationPrev"
});
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: unref(internalDisabled),
        "aria-label": _ctx.prevText || unref(t)("el.pagination.prev"),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock("span", _hoisted_2$5, toDisplayString(_ctx.prevText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$8);
    };
  }
});
var Prev = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "prev.vue"]]);
const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: iconPropType
  }
});
const _hoisted_1$7 = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2$4 = { key: 0 };
const __default__$4 = defineComponent({
  name: "ElPaginationNext"
});
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: unref(internalDisabled),
        "aria-label": _ctx.nextText || unref(t)("el.pagination.next"),
        "aria-disabled": unref(internalDisabled),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock("span", _hoisted_2$4, toDisplayString(_ctx.nextText), 1)) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$7);
    };
  }
});
var Next = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "next.vue"]]);
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
function useOption(props, states) {
  const select2 = inject(selectKey);
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    if (select2.props.multiple) {
      return contains(select2.props.modelValue, props.value);
    } else {
      return contains([select2.props.modelValue], props.value);
    }
  });
  const limitReached = computed(() => {
    if (select2.props.multiple) {
      const modelValue = select2.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select2.props.multipleLimit && select2.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    return props.label || (isObject(props.value) ? "" : props.value);
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select2.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select2.states.hoveringIndex = select2.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
  };
  watch(() => currentLabel.value, () => {
    if (!props.created && !select2.props.remote)
      select2.setSelected();
  });
  watch(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select2.props;
    if (!isEqual(val, oldVal)) {
      select2.onOptionDestroy(oldVal, instance.proxy);
      select2.onOptionCreate(instance.proxy);
    }
    if (!props.created && !remote) {
      if (valueKey && isObject(val) && isObject(oldVal) && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select2.setSelected();
    }
  });
  watch(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  return {
    select: select2,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$q = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select: select2,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select2.onOptionCreate(vm);
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select2.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select: select2,
      hoverItem,
      updateOption,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
const _hoisted_1$6 = ["id", "aria-disabled", "aria-selected"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createElementVNode("span", null, toDisplayString(_ctx.currentLabel), 1)
    ])
  ], 42, _hoisted_1$6)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$5], ["__file", "option.vue"]]);
const _sfc_main$p = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select2 = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select2.props.popperClass);
    const isMultiple = computed(() => select2.props.multiple);
    const isFitInputWidth = computed(() => select2.props.fitInputWidth);
    const minWidth = ref("");
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(_ctx.ns.be("dropdown", "header"))
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default"),
    _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$4], ["__file", "select-dropdown.vue"]]);
function useInput(handleInput) {
  const isComposing = ref(false);
  const handleCompositionStart = () => {
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    const text = event.target.value;
    const lastCharacter = text[text.length - 1] || "";
    isComposing.value = !isKorean(lastCharacter);
  };
  const handleCompositionEnd = (event) => {
    if (isComposing.value) {
      isComposing.value = false;
      if (isFunction(handleInput)) {
        handleInput(event);
      }
    }
  };
  return {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}
const MINIMUM_INPUT_WIDTH = 11;
const useSelect = (props, emit) => {
  const { t } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: props.multiple ? [] : {},
    selectionWidth: 0,
    calculatorWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref(null);
  const selectionRef = ref(null);
  const tooltipRef = ref(null);
  const tagTooltipRef = ref(null);
  const inputRef = ref(null);
  const calculatorRef = ref(null);
  const prefixRef = ref(null);
  const suffixRef = ref(null);
  const menuRef = ref(null);
  const tagMenuRef = ref(null);
  const collapseItemRef = ref(null);
  const scrollbarRef = ref(null);
  const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(inputRef, {
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a, _b;
      return ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      expanded.value = false;
      states.menuVisibleOnFocus = false;
    }
  });
  const expanded = ref(false);
  const hoverOption = ref();
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const selectDisabled = computed(() => props.disabled || (form == null ? void 0 : form.disabled));
  const hasModelValue = computed(() => {
    return props.multiple ? isArray(props.modelValue) && props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const showClose = computed(() => {
    return props.clearable && !selectDisabled.value && states.inputHovering && hasModelValue.value;
  });
  const iconComponent = computed(() => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon);
  const iconReverse = computed(() => nsSelect.is("reverse", iconComponent.value && expanded.value));
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(() => ValidateComponentsMap[validateState.value]);
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && !states.inputValue && states.options.size === 0)
        return false;
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(() => optionsArray.value.filter((option2) => option2.visible).length);
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index = list.findIndex((i) => i.value === item);
      if (index > -1) {
        newList.push(list[index]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(() => Array.from(states.cachedOptions.values()));
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option2) => {
      return !option2.created;
    }).some((option2) => {
      return option2.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return;
    optionsArray.value.forEach((option2) => {
      var _a;
      (_a = option2.updateOption) == null ? void 0 : _a.call(option2, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && emptyText.value !== false;
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (isArray(props.modelValue)) {
      return props.modelValue.length === 0 && !states.inputValue;
    }
    return props.filterable ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a;
    const _placeholder = (_a = props.placeholder) != null ? _a : t("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (props.multiple) {
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
        handleQueryChange("");
      }
    }
    setSelected();
    if (!isEqual(val, oldVal) && props.validateEvent) {
      formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
    }
  }, {
    flush: "post",
    deep: true
  });
  watch(() => expanded.value, (val) => {
    if (val) {
      handleQueryChange(states.inputValue);
    } else {
      states.inputValue = "";
      states.previousQuery = null;
      states.isBeforeHide = true;
    }
    emit("visible-change", val);
  });
  watch(() => states.options.entries(), () => {
    return;
  }, {
    flush: "post"
  });
  watch(() => states.hoveringIndex, (val) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option2) => {
      option2.hover = hoverOption.value === option2;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoveringIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    if (!props.multiple) {
      const option2 = getOption(props.modelValue);
      states.selectedLabel = option2.currentLabel;
      states.selected = option2;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option2;
    const isObjectValue = toRawType(value).toLowerCase() === "object";
    const isNull = toRawType(value).toLowerCase() === "null";
    const isUndefined2 = toRawType(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option2 = {
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option2)
      return option2;
    const label = isObjectValue ? value.label : !isNull && !isUndefined2 ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    if (!props.multiple) {
      states.hoveringIndex = optionsArray.value.findIndex((item) => {
        return getValueKey(item) === getValueKey(states.selected);
      });
    } else {
      states.hoveringIndex = optionsArray.value.findIndex((item) => states.selected.some((selected) => getValueKey(selected) === getValueKey(item)));
    }
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = selectionRef.value.getBoundingClientRect().width;
  };
  const resetCalculatorWidth = () => {
    states.calculatorWidth = calculatorRef.value.getBoundingClientRect().width;
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a, _b;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const updateTagTooltip = () => {
    var _a, _b;
    (_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = debounce(() => {
    onInputChange();
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => !states.disabledOptions.has(it));
  const deletePrevTag = (e) => {
    if (!props.multiple)
      return;
    if (e.code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0) {
      const value = props.modelValue.slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
  };
  const deleteTag = (event, tag2) => {
    const index = states.selected.indexOf(tag2);
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag2.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option2) => {
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option2.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option2.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option2.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      emit(UPDATE_MODEL_EVENT, option2.value);
      emitChange(option2.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option2);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (toRaw(get(item, valueKey)) === get(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const scrollToOption = (option2) => {
    var _a, _b, _c, _d, _e;
    const targetOption = isArray(option2) ? option2[0] : option2;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${nsSelect.be("dropdown", "wrap")}`);
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
    vm.disabled && states.disabledOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };
  const {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useInput((e) => onInput(e));
  const popperRef = computed(() => {
    var _a, _b;
    return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => scrollToOption(states.selected));
  };
  const focus = () => {
    var _a;
    (_a = inputRef.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    handleClickOutside();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event2 = new FocusEvent("focus", event);
      nextTick(() => handleBlur(_event2));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = () => {
    if (selectDisabled.value)
      return;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoveringIndex]) {
        handleOptionSelect(optionsArray.value[states.hoveringIndex]);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(() => optionsArray.value.filter((option2) => option2.visible).every((option2) => option2.disabled));
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || filteredOptionsCount.value === 0)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option2 = optionsArray.value[states.hoveringIndex];
      if (option2.disabled === true || option2.states.groupDisabled === true || !option2.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = window.getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth : states.selectionWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const inputStyle = computed(() => ({
    width: `${Math.max(states.calculatorWidth, MINIMUM_INPUT_WIDTH)}px`
  }));
  if (props.multiple && !isArray(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, []);
  }
  if (!props.multiple && isArray(props.modelValue)) {
    emit(UPDATE_MODEL_EVENT, "");
  }
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  useResizeObserver(menuRef, updateTooltip);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    resetCalculatorWidth,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    showClose,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    focus,
    blur,
    handleBlur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    tagStyle,
    collapseTagStyle,
    inputStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    calculatorRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_, { slots }) {
    const select2 = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(!isString$1(item.children) && !isArray(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children);
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select2) {
          select2.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const SelectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  placement: {
    type: definePropType(String),
    values: placements,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const COMPONENT_NAME = "ElSelect";
const _sfc_main$o = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElInput,
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: SelectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const API = useSelect(props, emit);
    provide(selectKey, reactive({
      props,
      states: API.states,
      optionsArray: API.optionsArray,
      handleOptionSelect: API.handleOptionSelect,
      onOptionCreate: API.onOptionCreate,
      onOptionDestroy: API.onOptionDestroy,
      selectRef: API.selectRef,
      setSelected: API.setSelected
    }));
    return {
      ...API
    };
  }
});
const _hoisted_1$5 = ["id", "disabled", "autocomplete", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"];
const _hoisted_2$3 = ["textContent"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]),
    onMouseenter: _cache[16] || (_cache[16] = ($event) => _ctx.states.inputHovering = true),
    onMouseleave: _cache[17] || (_cache[17] = ($event) => _ctx.states.inputHovering = false),
    onClick: _cache[18] || (_cache[18] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["prevent", "stop"]))
  }, [
    createVNode(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropdownMenuVisible,
      placement: _ctx.placement,
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "popper-options": _ctx.popperOptions,
      "fallback-placements": _ctx.fallbackPlacements,
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onBeforeShow: _ctx.handleMenuEnter,
      onHide: _cache[15] || (_cache[15] = ($event) => _ctx.states.isBeforeHide = false)
    }, {
      default: withCtx(() => {
        var _a;
        return [
          createElementVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass([
              _ctx.nsSelect.e("wrapper"),
              _ctx.nsSelect.is("focused", _ctx.isFocused),
              _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
              _ctx.nsSelect.is("filterable", _ctx.filterable),
              _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
            ])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "prefixRef",
              class: normalizeClass(_ctx.nsSelect.e("prefix"))
            }, [
              renderSlot(_ctx.$slots, "prefix")
            ], 2)) : createCommentVNode("v-if", true),
            createElementVNode("div", {
              ref: "selectionRef",
              class: normalizeClass([
                _ctx.nsSelect.e("selection"),
                _ctx.nsSelect.is("near", _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length)
              ])
            }, [
              _ctx.multiple ? renderSlot(_ctx.$slots, "tag", { key: 0 }, () => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showTagList, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: _ctx.getValueKey(item),
                    class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                  }, [
                    createVNode(_component_el_tag, {
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      style: normalizeStyle(_ctx.tagStyle),
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: withCtx(() => [
                        createElementVNode("span", {
                          class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                        }, toDisplayString(item.currentLabel), 3)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "type", "style", "onClose"])
                  ], 2);
                }), 128)),
                _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: _ctx.effect,
                  placement: "bottom",
                  teleported: _ctx.teleported
                }, {
                  default: withCtx(() => [
                    createElementVNode("div", {
                      ref: "collapseItemRef",
                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                    }, [
                      createVNode(_component_el_tag, {
                        closable: false,
                        size: _ctx.collapseTagSize,
                        type: _ctx.tagType,
                        "disable-transitions": "",
                        style: normalizeStyle(_ctx.collapseTagStyle)
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", {
                            class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                          }, " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "style"])
                    ], 2)
                  ]),
                  content: withCtx(() => [
                    createElementVNode("div", {
                      ref: "tagMenuRef",
                      class: normalizeClass(_ctx.nsSelect.e("selection"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.collapseTagList, (item) => {
                        return openBlock(), createElementBlock("div", {
                          key: _ctx.getValueKey(item),
                          class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                        }, [
                          createVNode(_component_el_tag, {
                            class: "in-tooltip",
                            closable: !_ctx.selectDisabled && !item.isDisabled,
                            size: _ctx.collapseTagSize,
                            type: _ctx.tagType,
                            "disable-transitions": "",
                            onClose: ($event) => _ctx.deleteTag($event, item)
                          }, {
                            default: withCtx(() => [
                              createElementVNode("span", {
                                class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                              }, toDisplayString(item.currentLabel), 3)
                            ]),
                            _: 2
                          }, 1032, ["closable", "size", "type", "onClose"])
                        ], 2);
                      }), 128))
                    ], 2)
                  ]),
                  _: 1
                }, 8, ["disabled", "effect", "teleported"])) : createCommentVNode("v-if", true)
              ]) : createCommentVNode("v-if", true),
              !_ctx.selectDisabled ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("input-wrapper"),
                  _ctx.nsSelect.is("hidden", !_ctx.filterable)
                ])
              }, [
                withDirectives(createElementVNode("input", {
                  id: _ctx.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.states.inputValue = $event),
                  type: "text",
                  class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                  disabled: _ctx.selectDisabled,
                  autocomplete: _ctx.autocomplete,
                  style: normalizeStyle(_ctx.inputStyle),
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
                  "aria-controls": _ctx.contentId,
                  "aria-expanded": _ctx.dropdownMenuVisible,
                  "aria-label": _ctx.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                  onBlur: _cache[2] || (_cache[2] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
                  onKeydown: [
                    _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                    _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                    _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"])),
                    _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                    _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["stop"]), ["delete"]))
                  ],
                  onCompositionstart: _cache[8] || (_cache[8] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                  onCompositionupdate: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                  onCompositionend: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                  onInput: _cache[11] || (_cache[11] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                  onClick: _cache[12] || (_cache[12] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
                }, null, 46, _hoisted_1$5), [
                  [vModelText, _ctx.states.inputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                  textContent: toDisplayString(_ctx.states.inputValue)
                }, null, 10, _hoisted_2$3)) : createCommentVNode("v-if", true)
              ], 2)) : createCommentVNode("v-if", true),
              _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass([
                  _ctx.nsSelect.e("selected-item"),
                  _ctx.nsSelect.e("placeholder"),
                  _ctx.nsSelect.is("transparent", !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue)
                ])
              }, [
                createElementVNode("span", null, toDisplayString(_ctx.currentPlaceholder), 1)
              ], 2)) : createCommentVNode("v-if", true)
            ], 2),
            createElementVNode("div", {
              ref: "suffixRef",
              class: normalizeClass(_ctx.nsSelect.e("suffix"))
            }, [
              _ctx.iconComponent && !_ctx.showClose ? (openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
              _ctx.validateState && _ctx.validateIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 2,
                class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsInput.e("validateIcon")])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)
        ];
      }),
      content: withCtx(() => [
        createVNode(_component_el_select_menu, { ref: "menuRef" }, {
          default: withCtx(() => [
            _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
              onClick: _cache[13] || (_cache[13] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "header")
            ], 2)) : createCommentVNode("v-if", true),
            withDirectives(createVNode(_component_el_scrollbar, {
              id: _ctx.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": _ctx.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: withCtx(() => [
                _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                  key: 0,
                  value: _ctx.states.inputValue,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(_component_el_options, null, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
            }, [
              renderSlot(_ctx.$slots, "loading")
            ], 2)) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
            }, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createElementVNode("span", null, toDisplayString(_ctx.emptyText), 1)
              ])
            ], 2)) : createCommentVNode("v-if", true),
            _ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
              onClick: _cache[14] || (_cache[14] = withModifiers(() => {
              }, ["stop"]))
            }, [
              renderSlot(_ctx.$slots, "footer")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "onBeforeShow"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$3], ["__file", "select.vue"]]);
const _sfc_main$n = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref(null);
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(selectGroupKey, reactive({
      ...toRefs(props)
    }));
    const visible = computed(() => children.value.some((option2) => option2.visible === true));
    const isOption = (node) => {
      var _a, _b;
      return ((_a = node.type) == null ? void 0 : _a.name) === "ElOption" && !!((_b = node.component) == null ? void 0 : _b.proxy);
    };
    const flattedChildren = (node) => {
      const Nodes = castArray(node);
      const children2 = [];
      Nodes.forEach((child) => {
        var _a, _b;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if ((_a = child.children) == null ? void 0 : _a.length) {
          children2.push(...flattedChildren(child.children));
        } else if ((_b = child.component) == null ? void 0 : _b.subTree) {
          children2.push(...flattedChildren(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren(instance.subTree);
    };
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    ref: "groupRef",
    class: normalizeClass(_ctx.ns.be("group", "wrap"))
  }, [
    createElementVNode("li", {
      class: normalizeClass(_ctx.ns.be("group", "title"))
    }, toDisplayString(_ctx.label), 3),
    createElementVNode("li", null, [
      createElementVNode("ul", {
        class: normalizeClass(_ctx.ns.b("group"))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$2], ["__file", "option-group.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
const usePagination = () => inject(elPaginationKey, {});
const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: componentSizes
  }
});
const __default__$3 = defineComponent({
  name: "ElPaginationSizes"
});
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const pagination2 = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPageSizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination2.handleSizeChange) == null ? void 0 : _a.call(pagination2, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("sizes"))
      }, [
        createVNode(unref(ElSelect), {
          "model-value": innerPageSize.value,
          disabled: _ctx.disabled,
          "popper-class": _ctx.popperClass,
          size: _ctx.size,
          teleported: _ctx.teleported,
          "validate-event": false,
          onChange: handleChange
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(innerPageSizes), (item) => {
              return openBlock(), createBlock(unref(ElOption), {
                key: item,
                value: item,
                label: item + unref(t)("el.pagination.pagesize")
              }, null, 8, ["value", "label"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
      ], 2);
    };
  }
});
var Sizes = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__file", "sizes.vue"]]);
const paginationJumperProps = buildProps({
  size: {
    type: String,
    values: componentSizes
  }
});
const _hoisted_1$4 = ["disabled"];
const __default__$2 = defineComponent({
  name: "ElPaginationJumper"
});
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: paginationJumperProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed(() => {
      var _a;
      return (_a = userInput.value) != null ? _a : currentPage == null ? void 0 : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = val ? +val : "";
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("jump")),
        disabled: unref(disabled)
      }, [
        createElementVNode("span", {
          class: normalizeClass([unref(ns).e("goto")])
        }, toDisplayString(unref(t)("el.pagination.goto")), 3),
        createVNode(unref(ElInput), {
          size: _ctx.size,
          class: normalizeClass([unref(ns).e("editor"), unref(ns).is("in-pagination")]),
          min: 1,
          max: unref(pageCount),
          disabled: unref(disabled),
          "model-value": unref(innerValue),
          "validate-event": false,
          label: unref(t)("el.pagination.page"),
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
        createElementVNode("span", {
          class: normalizeClass([unref(ns).e("classifier")])
        }, toDisplayString(unref(t)("el.pagination.pageClassifier")), 3)
      ], 10, _hoisted_1$4);
    };
  }
});
var Jumper = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__file", "jumper.vue"]]);
const paginationTotalProps = buildProps({
  total: {
    type: Number,
    default: 1e3
  }
});
const _hoisted_1$3 = ["disabled"];
const __default__$1 = defineComponent({
  name: "ElPaginationTotal"
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: paginationTotalProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("total")),
        disabled: unref(disabled)
      }, toDisplayString(unref(t)("el.pagination.total", {
        total: _ctx.total
      })), 11, _hoisted_1$3);
    };
  }
});
var Total = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "total.vue"]]);
const paginationPagerProps = buildProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
});
const _hoisted_1$2 = ["onKeyup"];
const _hoisted_2$2 = ["aria-current", "aria-label", "tabindex"];
const _hoisted_3$1 = ["tabindex", "aria-label"];
const _hoisted_4 = ["aria-current", "aria-label", "tabindex"];
const _hoisted_5 = ["tabindex", "aria-label"];
const _hoisted_6 = ["aria-current", "aria-label", "tabindex"];
const __default__ = defineComponent({
  name: "ElPaginationPager"
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: paginationPagerProps,
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const nsPager = useNamespace("pager");
    const nsIcon = useNamespace("icon");
    const { t } = useLocale();
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const quickPrevFocus = ref(false);
    const quickNextFocus = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    const prevMoreKls = computed(() => [
      "more",
      "btn-quickprev",
      nsIcon.b(),
      nsPager.is("disabled", props.disabled)
    ]);
    const nextMoreKls = computed(() => [
      "more",
      "btn-quicknext",
      nsIcon.b(),
      nsPager.is("disabled", props.disabled)
    ]);
    const tabindex = computed(() => props.disabled ? -1 : 0);
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onMouseEnter(forward = false) {
      if (props.disabled)
        return;
      if (forward) {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onFocus(forward = false) {
      if (forward) {
        quickPrevFocus.value = true;
      } else {
        quickNextFocus.value = true;
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      } else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) {
        onPagerClick(e);
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", {
        class: normalizeClass(unref(nsPager).b()),
        onClick: onPagerClick,
        onKeyup: withKeys(onEnter, ["enter"])
      }, [
        _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
          key: 0,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === 1),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === 1,
          "aria-label": unref(t)("el.pagination.currentPage", { pager: 1 }),
          tabindex: unref(tabindex)
        }, " 1 ", 10, _hoisted_2$2)) : createCommentVNode("v-if", true),
        showPrevMore.value ? (openBlock(), createElementBlock("li", {
          key: 1,
          class: normalizeClass(unref(prevMoreKls)),
          tabindex: unref(tabindex),
          "aria-label": unref(t)("el.pagination.prevPages", { pager: _ctx.pagerCount - 2 }),
          onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
          onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
          onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
          onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
        }, [
          (quickPrevHover.value || quickPrevFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_left_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_3$1)) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(pagers), (pager) => {
          return openBlock(), createElementBlock("li", {
            key: pager,
            class: normalizeClass([[
              unref(nsPager).is("active", _ctx.currentPage === pager),
              unref(nsPager).is("disabled", _ctx.disabled)
            ], "number"]),
            "aria-current": _ctx.currentPage === pager,
            "aria-label": unref(t)("el.pagination.currentPage", { pager }),
            tabindex: unref(tabindex)
          }, toDisplayString(pager), 11, _hoisted_4);
        }), 128)),
        showNextMore.value ? (openBlock(), createElementBlock("li", {
          key: 2,
          class: normalizeClass(unref(nextMoreKls)),
          tabindex: unref(tabindex),
          "aria-label": unref(t)("el.pagination.nextPages", { pager: _ctx.pagerCount - 2 }),
          onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
          onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
          onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
          onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
        }, [
          (quickNextHover.value || quickNextFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_right_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
        ], 42, _hoisted_5)) : createCommentVNode("v-if", true),
        _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
          key: 3,
          class: normalizeClass([[
            unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount),
            unref(nsPager).is("disabled", _ctx.disabled)
          ], "number"]),
          "aria-current": _ctx.currentPage === _ctx.pageCount,
          "aria-label": unref(t)("el.pagination.currentPage", { pager: _ctx.pageCount }),
          tabindex: unref(tabindex)
        }, toDisplayString(_ctx.pageCount), 11, _hoisted_6)) : createCommentVNode("v-if", true)
      ], 42, _hoisted_1$2);
    };
  }
});
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__file", "pager.vue"]]);
const isAbsent = (v) => typeof v !== "number";
const paginationProps = buildProps({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value) => {
      return isNumber(value) && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: iconPropType,
    default: () => arrow_left_default
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: iconPropType,
    default: () => arrow_right_default
  },
  teleported: {
    type: Boolean,
    default: true
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
});
const paginationEmits = {
  "update:current-page": (val) => isNumber(val),
  "update:page-size": (val) => isNumber(val),
  "size-change": (val) => isNumber(val),
  change: (currentPage, pageSize) => isNumber(currentPage) && isNumber(pageSize),
  "current-change": (val) => isNumber(val),
  "prev-click": (val) => isNumber(val),
  "next-click": (val) => isNumber(val)
};
const componentName = "ElPagination";
var Pagination = defineComponent({
  name: componentName,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize);
    const innerCurrentPage = ref(isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage);
    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v);
          emit("size-change", v);
        }
      }
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v) {
        let newCurrentPage = v;
        if (v < 1) {
          newCurrentPage = 1;
        } else if (v > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    watch([currentPageBridge, pageSizeBridge], (value) => {
      emit("change", ...value);
    }, { flush: "post" });
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function addClass2(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a, _b;
      if (!assertValidUsage.value) {
        debugWarn(componentName, t("el.pagination.deprecationWarning"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h("div", { class: ns.e("rightwrapper") }, rightWrapperChildren);
      const TEMPLATE_MAP = {
        prev: h(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev
        }),
        jumper: h(Jumper, {
          size: props.small ? "small" : "default"
        }),
        pager: h(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next
        }),
        sizes: h(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          disabled: props.disabled,
          teleported: props.teleported,
          size: props.small ? "small" : "default"
        }),
        slot: (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : null,
        total: h(Total, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components.forEach((c) => {
        if (c === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c]);
        }
      });
      addClass2(rootChildren[0], ns.is("first"));
      addClass2(rootChildren[rootChildren.length - 1], ns.is("last"));
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        addClass2(rightWrapperChildren[0], ns.is("first"));
        addClass2(rightWrapperChildren[rightWrapperChildren.length - 1], ns.is("last"));
        rootChildren.push(rightWrapperRoot);
      }
      return h("div", {
        class: [
          ns.b(),
          ns.is("background", props.background),
          {
            [ns.m("small")]: props.small
          }
        ]
      }, rootChildren);
    };
  }
});
const ElPagination = withInstall(Pagination);
const getCell = function(event) {
  var _a;
  return (_a = event.target) == null ? void 0 : _a.closest("td");
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === "string") {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map((by) => {
        if (typeof by === "string") {
          return get(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject(value) && "$value" in value)
        value = value.$value;
    }
    return [isObject(value) ? get(value, sortKey) : value];
  };
  const compare = function(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (let i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index) => {
    return {
      value,
      index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort((a, b) => {
    let order = compare(a, b);
    if (!order) {
      order = a.index - b.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table2, columnId) {
  let column = null;
  table2.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table2, columnKey) {
  let column = null;
  for (let i = 0; i < table2.columns.length; i++) {
    const item = table2.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  if (!column)
    throwError("ElTable", `No column matching with column-key: ${columnKey}`);
  return column;
};
const getColumnByCell = function(table2, cell, namespace) {
  const matches = (cell.className || "").match(new RegExp(`${namespace}-table_[^\\s]+`, "gm"));
  if (matches) {
    return getColumnById(table2, matches[0]);
  }
  return null;
};
const getRowIdentity = (row2, rowKey) => {
  if (!row2)
    throw new Error("Row is required when get row identity");
  if (typeof rowKey === "string") {
    if (!rowKey.includes(".")) {
      return `${row2[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row2;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (typeof rowKey === "function") {
    return rowKey.call(null, row2);
  }
};
const getKeysMap = function(array, rowKey) {
  const arrayMap = {};
  (array || []).forEach((row2, index) => {
    arrayMap[getRowIdentity(row2, rowKey)] = { row: row2, index };
  });
  return arrayMap;
};
function parseWidth(width) {
  if (width === "")
    return width;
  if (width !== void 0) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (minWidth !== void 0) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function toggleRowStatus(statusArr, row2, newVal) {
  let changed = false;
  const index = statusArr.indexOf(row2);
  const included = index !== -1;
  const toggleStatus = (type) => {
    if (type === "add") {
      statusArr.push(row2);
    } else {
      statusArr.splice(index, 1);
    }
    changed = true;
    if (isArray(row2.children)) {
      row2.children.forEach((item) => {
        toggleRowStatus(statusArr, item, newVal != null ? newVal : !included);
      });
    }
  };
  if (isBoolean(newVal)) {
    if (newVal && !included) {
      toggleStatus("add");
    } else if (!newVal && included) {
      toggleStatus("remove");
    }
  } else {
    included ? toggleStatus("remove") : toggleStatus("add");
  }
  return changed;
}
function walkTreeNode(root, cb, childrenKey = "children", lazyKey = "hasChildren") {
  const isNil2 = (array) => !(Array.isArray(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil2(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root.forEach((item) => {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil2(children)) {
      _walker(item, children, 0);
    }
  });
}
let removePopper = null;
function createTablePopper(props, popperContent, trigger, table2) {
  if ((removePopper == null ? void 0 : removePopper.trigger) === trigger) {
    return;
  }
  removePopper == null ? void 0 : removePopper();
  const parentNode = table2 == null ? void 0 : table2.refs.tableWrapper;
  const ns = parentNode == null ? void 0 : parentNode.dataset.prefix;
  const popperOptions = {
    strategy: "fixed",
    ...props.popperOptions
  };
  const vm = createVNode(ElTooltip, {
    content: popperContent,
    virtualTriggering: true,
    virtualRef: trigger,
    appendTo: parentNode,
    placement: "top",
    transition: "none",
    offset: 0,
    hideAfter: 0,
    ...props,
    popperOptions,
    onHide: () => {
      removePopper == null ? void 0 : removePopper();
    }
  });
  vm.appContext = { ...table2.appContext, ...table2 };
  const container = document.createElement("div");
  render(vm, container);
  vm.component.exposed.onOpen();
  const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns}-scrollbar__wrap`);
  removePopper = () => {
    render(null, container);
    scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", removePopper);
    removePopper = null;
  };
  removePopper.trigger = trigger;
  scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
}
function getCurrentColumns(column) {
  if (column.children) {
    return flatMap(column.children, getCurrentColumns);
  } else {
    return [column];
  }
}
function getColSpan(colSpan, column) {
  return colSpan + column.colSpan;
}
const isFixedColumn = (index, fixed, store, realColumns) => {
  let start = 0;
  let after = index;
  const columns = store.states.columns.value;
  if (realColumns) {
    const curColumns = getCurrentColumns(realColumns[index]);
    const preColumns = columns.slice(0, columns.indexOf(curColumns[0]));
    start = preColumns.reduce(getColSpan, 0);
    after = start + curColumns.reduce(getColSpan, 0) - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index, fixed, store, realColumns, offset = 0) => {
  const classes = [];
  const { direction, start, after } = isFixedColumn(index, fixed, store, realColumns);
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && after + offset === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start - offset === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (column.realWidth === null || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index, fixed, store, realColumns) => {
  const {
    direction,
    start = 0,
    after = 0
  } = isFixedColumn(index, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles2 = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles2.left = columns.slice(0, start).reduce(getOffset, 0);
  } else {
    styles2.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
  }
  return styles2;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};
function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row2) => {
        const rowId = getRowIdentity(row2, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row2);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row2, expanded) => {
    const changed = toggleRowStatus(expandRows.value, row2, expanded);
    if (changed) {
      instance.emit("expand-change", row2, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row2) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row2, rowKey)];
    }
    return expandRows.value.includes(row2);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    const { data, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (unref(data) || []).find((item) => getRowIdentity(item, rowKey.value) === key);
    }
    currentRow.value = _currentRow;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (!data.includes(oldCurrentRow) && oldCurrentRow) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (currentRow.value === null) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const instance = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys.length)
      return res;
    keys.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row2) => {
          const currentRowKey = getRowIdentity(row2, rowKey);
          item.children.push(currentRowKey);
          if (row2[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(data, (parent, children, level) => {
      const parentId = getRowIdentity(parent, rowKey);
      if (Array.isArray(children)) {
        res[parentId] = {
          children: children.map((row2) => getRowIdentity(row2, rowKey)),
          level
        };
      } else if (lazy.value) {
        res[parentId] = {
          children: [],
          lazy: true,
          level
        };
      }
    }, childrenColumnName.value, lazyColumnIdentifier.value);
    return res;
  };
  const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll = ((_a) => (_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value)()) => {
    var _a2;
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys = Object.keys(nested);
    const newTreeData = {};
    if (keys.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (newTreeData[key].children.length !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: ""
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_a2 = instance.store) == null ? void 0 : _a2.updateTableScrollY();
  };
  watch(() => expandRowKeys.value, () => {
    updateTreeData(true);
  });
  watch(() => normalizedData.value, () => {
    updateTreeData();
  });
  watch(() => normalizedLazyNode.value, () => {
    updateTreeData();
  });
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const toggleTreeExpansion = (row2, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row2, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = typeof expanded === "undefined" ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row2, expanded);
      }
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row2) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row2, rowKey);
    const data = treeData.value[id];
    if (lazy.value && data && "loaded" in data && !data.loaded) {
      loadData(row2, id, data);
    } else {
      toggleTreeExpansion(row2, void 0);
    }
  };
  const loadData = (row2, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row2, treeNode, (data) => {
        if (!Array.isArray(data)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance.emit("expand-change", row2, true);
      });
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName
    }
  };
}
const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === "string") {
    return data;
  }
  return orderBy(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children && column.children.length > 0) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const updateOrderFns = [];
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  watch(data, () => instance.state && scheduleLayout(false), {
    deep: true
  });
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateChildFixed = (column) => {
    var _a2;
    (_a2 = column.children) == null ? void 0 : _a2.forEach((childColumn) => {
      childColumn.fixed = column.fixed;
      updateChildFixed(childColumn);
    });
  };
  const updateColumns = () => {
    _columns.value.forEach((column) => {
      updateChildFixed(column);
    });
    fixedColumns.value = _columns.value.filter((column) => column.fixed === true || column.fixed === "left");
    rightFixedColumns.value = _columns.value.filter((column) => column.fixed === "right");
    if (fixedColumns.value.length > 0 && _columns.value[0] && _columns.value[0].type === "selection" && !_columns.value[0].fixed) {
      _columns.value[0].fixed = true;
      fixedColumns.value.unshift(_columns.value[0]);
    }
    const notFixedColumns = _columns.value.filter((column) => !column.fixed);
    originColumns.value = [].concat(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = [].concat(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row2) => {
    return selection.value.includes(row2);
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    if (oldSelection.length) {
      selection.value = [];
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const selectedMap = getKeysMap(selection.value, rowKey.value);
      const dataMap = getKeysMap(data.value, rowKey.value);
      for (const key in selectedMap) {
        if (hasOwn(selectedMap, key) && !dataMap[key]) {
          deleted.push(selectedMap[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter((item) => !deleted.includes(item));
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row2, selected = void 0, emitChange = true) => {
    const changed = toggleRowStatus(selection.value, row2, selected);
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row2);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a2, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
    data.value.forEach((row2, index) => {
      const rowIndex = index + childrenCount;
      if (selectable.value) {
        if (selectable.value.call(null, row2, rowIndex) && toggleRowStatus(selection.value, row2, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowStatus(selection.value, row2, value)) {
          selectionChanged = true;
        }
      }
      childrenCount += getChildrenCount(getRowIdentity(row2, rowKey2));
    });
    if (selectionChanged) {
      instance.emit("selection-change", selection.value ? selection.value.slice() : []);
    }
    instance.emit("select-all", selection.value);
  };
  const updateSelectionByRowKey = () => {
    const selectedMap = getKeysMap(selection.value, rowKey.value);
    data.value.forEach((row2) => {
      const rowId = getRowIdentity(row2, rowKey.value);
      const rowInfo = selectedMap[rowId];
      if (rowInfo) {
        selection.value[rowInfo.index] = row2;
      }
    });
  };
  const updateAllSelected = () => {
    var _a2, _b, _c;
    if (((_a2 = data.value) == null ? void 0 : _a2.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    let selectedMap;
    if (rowKey.value) {
      selectedMap = getKeysMap(selection.value, rowKey.value);
    }
    const isSelected2 = function(row2) {
      if (selectedMap) {
        return !!selectedMap[getRowIdentity(row2, rowKey.value)];
      } else {
        return selection.value.includes(row2);
      }
    };
    let isAllSelected_ = true;
    let selectedCount = 0;
    let childrenCount = 0;
    for (let i = 0, j = (data.value || []).length; i < j; i++) {
      const keyProp = (_c = (_b = instance == null ? void 0 : instance.store) == null ? void 0 : _b.states) == null ? void 0 : _c.rowKey.value;
      const rowIndex = i + childrenCount;
      const item = data.value[i];
      const isRowSelectable = selectable.value && selectable.value.call(null, item, rowIndex);
      if (!isSelected2(item)) {
        if (!selectable.value || isRowSelectable) {
          isAllSelected_ = false;
          break;
        }
      } else {
        selectedCount++;
      }
      childrenCount += getChildrenCount(getRowIdentity(item, keyProp));
    }
    if (selectedCount === 0)
      isAllSelected_ = false;
    isAllSelected.value = isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a2;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (columns2, values) => {
    if (!Array.isArray(columns2)) {
      columns2 = [columns2];
    }
    const filters_ = {};
    columns2.forEach((col2) => {
      filters.value[col2.id] = values;
      filters_[col2.columnKey || col2.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById({
        columns: columns.value
      }, columnId);
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row2) => {
          return values.some((value) => column.filterMethod.call(null, value, row2, column));
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    data.value = sortData(filteredData.value, {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore && ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys = Object.keys(panels);
    if (!keys.length)
      return;
    if (typeof columnKeys === "string") {
      columnKeys = [columnKeys];
    }
    if (Array.isArray(columnKeys)) {
      const columns_ = columnKeys.map((key) => getColumnByKey({
        columns: columns.value
      }, key));
      keys.forEach((key) => {
        const column = columns_.find((col2) => col2.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys.forEach((key) => {
        const column = columns.value.find((col2) => col2.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row2, expanded) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row2, expanded);
    } else {
      toggleTreeExpansion(row2, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateSelectionByRowKey,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    states: {
      tableSize,
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      updateOrderFns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}
function replaceColumn(array, column) {
  return array.map((item) => {
    var _a;
    if (item.id === column.id) {
      return column;
    } else if ((_a = item.children) == null ? void 0 : _a.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array) {
  array.forEach((item) => {
    var _a, _b;
    item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns = useNamespace("table");
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(instance.store.states.defaultExpandAll.value);
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
        instance.store.updateSelectionByRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent, updateColumnOrder) {
      const array = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array.push(column);
        newColumns = array;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        parent.children.push(column);
        newColumns = replaceColumn(array, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      states.updateOrderFns.push(updateColumnOrder);
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    updateColumnOrder(states, column) {
      var _a;
      const newColumnIndex = (_a = column.getColumnIndex) == null ? void 0 : _a.call(column);
      if (newColumnIndex === column.no)
        return;
      sortColumn(states._columns.value);
      if (instance.$ready) {
        instance.store.updateColumns();
      }
    },
    removeColumn(states, column, parent, updateColumnOrder) {
      const array = unref(states._columns) || [];
      if (parent) {
        parent.children.splice(parent.children.findIndex((item) => item.id === column.id), 1);
        nextTick(() => {
          var _a;
          if (((_a = parent.children) == null ? void 0 : _a.length) === 0) {
            delete parent.children;
          }
        });
        states._columns.value = replaceColumn(array, parent);
      } else {
        const index = array.indexOf(column);
        if (index > -1) {
          array.splice(index, 1);
          states._columns.value = array;
        }
      }
      const updateFnIndex = states.updateOrderFns.indexOf(updateColumnOrder);
      updateFnIndex > -1 && states.updateOrderFns.splice(updateFnIndex, 1);
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find((column2) => column2.property === prop);
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn, sortProp, sortOrder } = states;
      const columnValue = unref(sortingColumn), propValue = unref(sortProp), orderValue = unref(sortOrder);
      if (orderValue === null) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ignore = { filter: true };
      instance.store.execQuery(ignore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: columnValue,
          prop: propValue,
          order: orderValue
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      instance.store.toggleAllSelection();
    },
    rowSelectedChanged(_states, row2) {
      instance.store.toggleRowSelection(row2);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row2) {
      states.hoverRow.value = row2;
    },
    setCurrentRow(_states, row2) {
      instance.store.updateCurrentRow(row2);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [instance.store.states].concat(args));
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}
const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  }
};
function createStore(table2, props) {
  if (!table2) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(() => getArrKeysValue(props, key), (value) => {
      handleValue(value, key, store);
    });
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (typeof InitialStateMap[propsKey] === "object") {
    storeKey = storeKey.key;
    newVal = newVal || InitialStateMap[propsKey].default;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, keys) {
  if (keys.includes(".")) {
    const keyList = keys.split(".");
    let value = props;
    keyList.forEach((key) => {
      value = value[key];
    });
    return value;
  } else {
    return props[keys];
  }
}
class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (height === null)
      return false;
    const scrollBarRef = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (scrollBarRef == null ? void 0 : scrollBarRef.wrapRef)) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    return;
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    return;
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a, _b;
      switch (event) {
        case "columns":
          (_a = observer.state) == null ? void 0 : _a.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
const { CheckboxGroup: ElCheckboxGroup } = ElCheckbox;
const _sfc_main$i = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrow_down_default,
    ArrowUp: arrow_up_default
  },
  directives: { ClickOutside },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const ns = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = ref(false);
    const tooltip2 = ref(null);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterClassName = computed(() => {
      if (props.column.filterClassName) {
        return `${ns.b()} ${props.column.filterClassName}`;
      }
      return ns.b();
    });
    const filterValue = computed({
      get: () => {
        var _a;
        return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = tooltip2.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tooltipVisible,
      multiple,
      filterClassName,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      ns,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip: tooltip2
    };
  }
});
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = ["disabled"];
const _hoisted_3 = ["label", "onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _directive_click_outside = resolveDirective("click-outside");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltip",
    visible: _ctx.tooltipVisible,
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": _ctx.filterClassName,
    persistent: ""
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("content"))
        }, [
          createVNode(_component_el_scrollbar, {
            "wrap-class": _ctx.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_checkbox_group, {
                modelValue: _ctx.filteredValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
                class: normalizeClass(_ctx.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
                    return openBlock(), createBlock(_component_el_checkbox, {
                      key: filter.value,
                      value: filter.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(filter.text), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("bottom"))
        }, [
          createElementVNode("button", {
            class: normalizeClass({ [_ctx.ns.is("disabled")]: _ctx.filteredValue.length === 0 }),
            disabled: _ctx.filteredValue.length === 0,
            type: "button",
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
          }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_2$1),
          createElementVNode("button", {
            type: "button",
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
          }, toDisplayString(_ctx.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(_ctx.ns.e("list"))
      }, [
        createElementVNode("li", {
          class: normalizeClass([
            _ctx.ns.e("list-item"),
            {
              [_ctx.ns.is("active")]: _ctx.filterValue === void 0 || _ctx.filterValue === null
            }
          ]),
          onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null))
        }, toDisplayString(_ctx.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.filters, (filter) => {
          return openBlock(), createElementBlock("li", {
            key: filter.value,
            class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
            label: filter.value,
            onClick: ($event) => _ctx.handleSelect(filter.value)
          }, toDisplayString(filter.text), 11, _hoisted_3);
        }), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${_ctx.ns.namespace.value}-table__column-filter-trigger`,
          `${_ctx.ns.namespace.value}-none-outline`
        ]),
        onClick: _cache[4] || (_cache[4] = (...args) => _ctx.showFilterPanel && _ctx.showFilterPanel(...args))
      }, [
        createVNode(_component_el_icon, null, {
          default: withCtx(() => [
            _ctx.column.filterOpened ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [_directive_click_outside, _ctx.hideFilterPanel, _ctx.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$1], ["__file", "filter-panel.vue"]]);
function useLayoutObserver(root) {
  const instance = getCurrentInstance();
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance);
  });
  const tableLayout = computed(() => {
    const layout = root.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i = 0, j = cols.length; i < j; i++) {
      const col2 = cols[i];
      const name = col2.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col2.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a, _b;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i = 0, j = cols.length; i < j; i++) {
      const col2 = cols[i];
      col2.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
const TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
  getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  ref({});
  const handleMouseDown = (event, column) => {
    return;
  };
  const handleMouseMove = (event, column) => {
    if (column.children && column.children.length > 0)
      return;
    const el = event.target;
    if (!isElement(el)) {
      return;
    }
    const target = el == null ? void 0 : el.closest("th");
    if (!column || !column.resizable)
      return;
    if (!dragging.value && props.border) {
      const rect = target.getBoundingClientRect();
      const bodyStyle = document.body.style;
      if (rect.width > 12 && rect.right - event.pageX < 8) {
        bodyStyle.cursor = "col-resize";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "col-resize";
        }
        draggingColumn.value = column;
      } else if (!dragging.value) {
        bodyStyle.cursor = "";
        if (hasClass(target, "is-sortable")) {
          target.style.cursor = "pointer";
        }
        draggingColumn.value = null;
      }
    }
  };
  const handleMouseOut = () => {
    return;
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index = sortOrders.indexOf(order || null);
    return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    var _a;
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (target) {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && sortingColumn.order === null) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (typeof headerRowStyle === "function") {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (typeof headerRowClassName === "string") {
      classes.push(headerRowClassName);
    } else if (typeof headerRowClassName === "function") {
      classes.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row2, column) => {
    var _a;
    let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
    if (typeof headerCellStyles === "function") {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row: row2,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, column.fixed, props.store, row2);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row2, column) => {
    const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, column.fixed, props.store, row2);
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (typeof headerCellClassName === "string") {
      classes.push(headerCellClassName);
    } else if (typeof headerCellClassName === "function") {
      classes.push(headerCellClassName.call(null, {
        rowIndex,
        columnIndex,
        row: row2,
        column
      }));
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col2) => col2.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
var TableHeader = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(props);
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection
    };
  },
  render() {
    const {
      ns,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent
    } = this;
    let rowSpan = 1;
    return h("thead", {
      class: { [ns.is("group")]: isGroup }
    }, columnRows.map((subColumns, rowIndex) => h("tr", {
      class: getHeaderRowClass(rowIndex),
      key: rowIndex,
      style: getHeaderRowStyle(rowIndex)
    }, subColumns.map((column, cellIndex) => {
      if (column.rowSpan > rowSpan) {
        rowSpan = column.rowSpan;
      }
      return h("th", {
        class: getHeaderCellClass(rowIndex, cellIndex, subColumns, column),
        colspan: column.colSpan,
        key: `${column.id}-thead`,
        rowspan: column.rowSpan,
        style: getHeaderCellStyle(rowIndex, cellIndex, subColumns, column),
        onClick: ($event) => handleHeaderClick($event, column),
        onContextmenu: ($event) => handleHeaderContextMenu($event, column),
        onMousedown: ($event) => handleMouseDown($event, column),
        onMousemove: ($event) => handleMouseMove($event, column),
        onMouseout: handleMouseOut
      }, [
        h("div", {
          class: [
            "cell",
            column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
          ]
        }, [
          column.renderHeader ? column.renderHeader({
            column,
            $index: cellIndex,
            store,
            _self: $parent
          }) : column.label,
          column.sortable && h("span", {
            onClick: ($event) => handleSortClick($event, column),
            class: "caret-wrapper"
          }, [
            h("i", {
              onClick: ($event) => handleSortClick($event, column, "ascending"),
              class: "sort-caret ascending"
            }),
            h("i", {
              onClick: ($event) => handleSortClick($event, column, "descending"),
              class: "sort-caret descending"
            })
          ]),
          column.filterable && h(FilterPanel, {
            store,
            placement: column.filterPlacement || "bottom-start",
            column,
            upDataColumn: (key, value) => {
              column[key] = value;
            }
          })
        ])
      ]);
    }))));
  }
});
function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h("div"));
  const handleEvent = (event, row2, name) => {
    var _a;
    const table2 = parent;
    const cell = getCell(event);
    let column;
    const namespace = (_a = table2 == null ? void 0 : table2.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (column) {
        table2 == null ? void 0 : table2.emit(`cell-${name}`, row2, column, cell, event);
      }
    }
    table2 == null ? void 0 : table2.emit(`row-${name}`, row2, column, event);
  };
  const handleDoubleClick = (event, row2) => {
    handleEvent(event, row2, "dblclick");
  };
  const handleClick = (event, row2) => {
    props.store.commit("setCurrentRow", row2);
    handleEvent(event, row2, "click");
  };
  const handleContextMenu = (event, row2) => {
    handleEvent(event, row2, "contextmenu");
  };
  const handleMouseEnter = debounce((index) => {
    props.store.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce(() => {
    props.store.commit("setHoverRow", null);
  }, 30);
  const getPadding = (el) => {
    const style = window.getComputedStyle(el, null);
    const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0;
    const paddingRight = Number.parseInt(style.paddingRight, 10) || 0;
    const paddingTop = Number.parseInt(style.paddingTop, 10) || 0;
    const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0;
    return {
      left: paddingLeft,
      right: paddingRight,
      top: paddingTop,
      bottom: paddingBottom
    };
  };
  const toggleRowClassByCell = (rowSpan, event, toggle) => {
    let node = event.target.parentNode;
    while (rowSpan > 1) {
      node = node == null ? void 0 : node.nextSibling;
      if (!node || node.nodeName !== "TR")
        break;
      toggle(node, "hover-row hover-fixed-row");
      rowSpan--;
    }
  };
  const handleCellMouseEnter = (event, row2, tooltipOptions) => {
    var _a;
    const table2 = parent;
    const cell = getCell(event);
    const namespace = (_a = table2 == null ? void 0 : table2.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      const column = getColumnByCell({
        columns: props.store.states.columns.value
      }, cell, namespace);
      if (cell.rowSpan > 1) {
        toggleRowClassByCell(cell.rowSpan, event, addClass);
      }
      const hoverState = table2.hoverState = { cell, column, row: row2 };
      table2 == null ? void 0 : table2.emit("cell-mouse-enter", hoverState.row, hoverState.column, hoverState.cell, event);
    }
    if (!tooltipOptions) {
      return;
    }
    const cellChild = event.target.querySelector(".cell");
    if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length)) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    let rangeWidth = range.getBoundingClientRect().width;
    let rangeHeight = range.getBoundingClientRect().height;
    const offsetWidth = rangeWidth - Math.floor(rangeWidth);
    const { width: cellChildWidth, height: cellChildHeight } = cellChild.getBoundingClientRect();
    if (offsetWidth < 1e-3) {
      rangeWidth = Math.floor(rangeWidth);
    }
    const offsetHeight = rangeHeight - Math.floor(rangeHeight);
    if (offsetHeight < 1e-3) {
      rangeHeight = Math.floor(rangeHeight);
    }
    const { top, left, right, bottom } = getPadding(cellChild);
    const horizontalPadding = left + right;
    const verticalPadding = top + bottom;
    if (rangeWidth + horizontalPadding > cellChildWidth || rangeHeight + verticalPadding > cellChildHeight || cellChild.scrollWidth > cellChildWidth) {
      createTablePopper(tooltipOptions, cell.innerText || cell.textContent, cell, table2);
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    if (cell.rowSpan > 1) {
      toggleRowClassByCell(cell.rowSpan, event, removeClass);
    }
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit("cell-mouse-leave", oldHoverState == null ? void 0 : oldHoverState.row, oldHoverState == null ? void 0 : oldHoverState.column, oldHoverState == null ? void 0 : oldHoverState.cell, event);
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getRowStyle = (row2, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (typeof rowStyle === "function") {
      return rowStyle.call(null, {
        row: row2,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row2, rowIndex) => {
    const classes = [ns.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row2 === props.store.states.currentRow.value) {
      classes.push("current-row");
    }
    if (props.stripe && rowIndex % 2 === 1) {
      classes.push(ns.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (typeof rowClassName === "string") {
      classes.push(rowClassName);
    } else if (typeof rowClassName === "function") {
      classes.push(rowClassName.call(null, {
        row: row2,
        rowIndex
      }));
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row2, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (typeof cellStyle === "function") {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row: row2,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(columnIndex, props == null ? void 0 : props.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row2, column, offset) => {
    const fixedClasses = getFixedColumnsClass(ns.b(), columnIndex, props == null ? void 0 : props.fixed, props.store, void 0, offset);
    const classes = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (typeof cellClassName === "string") {
      classes.push(cellClassName);
    } else if (typeof cellClassName === "function") {
      classes.push(cellClassName.call(null, {
        rowIndex,
        columnIndex,
        row: row2,
        column
      }));
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row2, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent == null ? void 0 : parent.props.spanMethod;
    if (typeof fn === "function") {
      const result = fn({
        row: row2,
        column,
        rowIndex,
        columnIndex
      });
      if (Array.isArray(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (typeof result === "object") {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index) => {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
    return Number(widthArr.reduce((acc, width) => Number(acc) + Number(width), -1));
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}
function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  const firstDefaultColumnIndex = computed(() => {
    return props.store.states.columns.value.findIndex(({ type }) => type === "default");
  });
  const getKeyOfRow = (row2, index) => {
    const rowKey = parent.props.rowKey;
    if (rowKey) {
      return getRowIdentity(row2, rowKey);
    }
    return index;
  };
  const rowRender = (row2, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, tooltipOptions, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = getRowClass(row2, $index);
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns.em("row", `level-${treeRowData.level}`));
      display = treeRowData.display;
    }
    const displayStyle = display ? null : {
      display: "none"
    };
    return h("tr", {
      style: [displayStyle, getRowStyle(row2, $index)],
      class: rowClasses,
      key: getKeyOfRow(row2, $index),
      onDblclick: ($event) => handleDoubleClick($event, row2),
      onClick: ($event) => handleClick($event, row2),
      onContextmenu: ($event) => handleContextMenu($event, row2),
      onMouseenter: () => handleMouseEnter($index),
      onMouseleave: handleMouseLeave
    }, columns.value.map((column, cellIndex) => {
      const { rowspan, colspan } = getSpan(row2, column, $index, cellIndex);
      if (!rowspan || !colspan) {
        return null;
      }
      const columnData = Object.assign({}, column);
      columnData.realWidth = getColspanRealWidth(columns.value, colspan, cellIndex);
      const data = {
        store: props.store,
        _self: props.context || parent,
        column: columnData,
        row: row2,
        $index,
        cellIndex,
        expanded
      };
      if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
        data.treeNode = {
          indent: treeRowData.level * indent.value,
          level: treeRowData.level
        };
        if (typeof treeRowData.expanded === "boolean") {
          data.treeNode.expanded = treeRowData.expanded;
          if ("loading" in treeRowData) {
            data.treeNode.loading = treeRowData.loading;
          }
          if ("noLazyChildren" in treeRowData) {
            data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
          }
        }
      }
      const baseKey = `${getKeyOfRow(row2, $index)},${cellIndex}`;
      const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
      const tdChildren = cellChildren(cellIndex, column, data);
      const mergedTooltipOptions = column.showOverflowTooltip && merge({
        effect: tooltipEffect
      }, tooltipOptions, column.showOverflowTooltip);
      return h("td", {
        style: getCellStyle($index, cellIndex, row2, column),
        class: getCellClass($index, cellIndex, row2, column, colspan - 1),
        key: `${patchKey}${baseKey}`,
        rowspan,
        colspan,
        onMouseenter: ($event) => handleCellMouseEnter($event, row2, mergedTooltipOptions),
        onMouseleave: handleCellMouseLeave
      }, [tdChildren]);
    }));
  };
  const cellChildren = (cellIndex, column, data) => {
    return column.renderCell(data);
  };
  const wrappedRowRender = (row2, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row2);
      const tr = rowRender(row2, $index, void 0, expanded);
      const renderExpanded = parent.renderExpanded;
      if (expanded) {
        if (!renderExpanded) {
          console.error("[Element Error]renderExpanded is required.");
          return tr;
        }
        return [
          [
            tr,
            h("tr", {
              key: `expanded-row__${tr.key}`
            }, [
              h("td", {
                colspan: columns.length,
                class: `${ns.e("cell")} ${ns.e("expanded-cell")}`
              }, [renderExpanded({ row: row2, $index, store, expanded })])
            ])
          ]
        ];
      } else {
        return [[tr]];
      }
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row2, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true
        };
        if (typeof cur.lazy === "boolean") {
          if (typeof cur.loaded === "boolean" && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row2, $index, treeRowData)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (childKey === void 0 || childKey === null) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (typeof cur.lazy === "boolean") {
                if (typeof cur.loaded === "boolean" && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row2[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row2, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}
const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const hoveredCellList = [];
    watch(props.store.states.hoverRow, (newVal, oldVal) => {
      var _a;
      const el = instance == null ? void 0 : instance.vnode.el;
      const rows = Array.from((el == null ? void 0 : el.children) || []).filter((e) => e == null ? void 0 : e.classList.contains(`${ns.e("row")}`));
      let rowNum = newVal;
      const childNodes = (_a = rows[rowNum]) == null ? void 0 : _a.childNodes;
      if (childNodes == null ? void 0 : childNodes.length) {
        let control = 0;
        const indexes = Array.from(childNodes).reduce((acc, item, index) => {
          var _a2, _b;
          if (((_a2 = childNodes[index]) == null ? void 0 : _a2.colSpan) > 1) {
            control = (_b = childNodes[index]) == null ? void 0 : _b.colSpan;
          }
          if (item.nodeName !== "TD" && control === 0) {
            acc.push(index);
          }
          control > 0 && control--;
          return acc;
        }, []);
        indexes.forEach((rowIndex) => {
          var _a2;
          rowNum = newVal;
          while (rowNum > 0) {
            const preChildNodes = (_a2 = rows[rowNum - 1]) == null ? void 0 : _a2.childNodes;
            if (preChildNodes[rowIndex] && preChildNodes[rowIndex].nodeName === "TD" && preChildNodes[rowIndex].rowSpan > 1) {
              addClass(preChildNodes[rowIndex], "hover-cell");
              hoveredCellList.push(preChildNodes[rowIndex]);
              break;
            }
            rowNum--;
          }
        });
      } else {
        hoveredCellList.forEach((item) => removeClass(item, "hover-cell"));
        hoveredCellList.length = 0;
      }
      if (!props.store.states.isComplex.value || !isClient)
        return;
      rAF(() => {
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow && !oldRow.classList.contains("hover-fixed-row")) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a;
      (_a = removePopper) == null ? void 0 : _a();
    });
    return {
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data = store.states.data.value || [];
    return h("tbody", { tabIndex: -1 }, [
      data.reduce((acc, row2) => {
        return acc.concat(wrappedRowRender(row2, acc.length));
      }, [])
    ]);
  }
});
function useMapState() {
  const table2 = inject(TABLE_INJECTION_KEY);
  const store = table2 == null ? void 0 : table2.store;
  const leftFixedLeafCount = computed(() => {
    return store.states.fixedLeafColumnsLength.value;
  });
  const rightFixedLeafCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  const columnsCount = computed(() => {
    return store.states.columns.value.length;
  });
  const leftFixedCount = computed(() => {
    return store.states.fixedColumns.value.length;
  });
  const rightFixedCount = computed(() => {
    return store.states.rightFixedColumns.value.length;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: store.states.columns
  };
}
function useStyle$1(props) {
  const { columns } = useMapState();
  const ns = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes = [
      ns.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns.is("leaf"));
    }
    return classes;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(cellIndex, column.fixed, props.store);
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}
var TableFooter = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const { getCellClasses, getCellStyles, columns } = useStyle$1(props);
    const ns = useNamespace("table");
    return {
      ns,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const { columns, getCellStyles, getCellClasses, summaryMethod, sumText } = this;
    const data = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data
      });
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = sumText;
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }
    return h(h("tfoot", [
      h("tr", {}, [
        ...columns.map((column, cellIndex) => h("td", {
          key: cellIndex,
          colspan: column.colSpan,
          rowspan: column.rowSpan,
          class: getCellClasses(columns, cellIndex),
          style: getCellStyles(column, cellIndex)
        }, [
          h("div", {
            class: ["cell", column.labelClassName]
          }, [sums[cellIndex]])
        ]))
      ])
    ]));
  }
});
function useUtils(store) {
  const setCurrentRow = (row2) => {
    store.commit("setCurrentRow", row2);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row2, selected) => {
    store.toggleRowSelection(row2, selected, false);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row2, expanded) => {
    store.toggleRowExpansionAdapter(row2, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort
  };
}
function useStyle(props, layout, store, table2) {
  const isHidden2 = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null,
    headerHeight: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  ref(0);
  const bodyScrollHeight = ref(0);
  const headerScrollHeight = ref(0);
  const footerScrollHeight = ref(0);
  ref(0);
  watchEffect(() => {
    layout.setHeight(props.height);
  });
  watchEffect(() => {
    layout.setMaxHeight(props.maxHeight);
  });
  watch(() => [props.currentRowKey, store.states.rowKey], ([currentRowKey, rowKey]) => {
    if (!unref(rowKey) || !unref(currentRowKey))
      return;
    store.setCurrentRowKey(`${currentRowKey}`);
  }, {
    immediate: true
  });
  watch(() => props.data, (data) => {
    table2.store.commit("setData", data);
  }, {
    immediate: true,
    deep: true
  });
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table2.store.commit("setHoverRow", null);
    if (table2.hoverState)
      table2.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table2.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    requestAnimationFrame(syncPosition);
  };
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter((item) => !item.startsWith("is-scrolling-"));
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { tableWrapper } = table2.refs;
    setScrollClassByEl(tableWrapper, className);
  };
  const hasScrollClass = (className) => {
    const { tableWrapper } = table2.refs;
    return !!(tableWrapper && tableWrapper.classList.contains(className));
  };
  const syncPosition = function() {
    if (!table2.refs.scrollBarRef)
      return;
    if (!layout.scrollX.value) {
      const scrollingNoneClass = "is-scrolling-none";
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass);
      }
      return;
    }
    const scrollContainer = table2.refs.scrollBarRef.wrapRef;
    if (!scrollContainer)
      return;
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
    const { headerWrapper, footerWrapper } = table2.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  };
  const tableSize = useFormSize();
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length)
      return null;
    let height = "100%";
    if (props.height && bodyScrollHeight.value) {
      height = `${bodyScrollHeight.value}px`;
    }
    const width = tableWidth.value;
    return {
      width: width ? `${width}px` : "",
      height
    };
  });
  const tableInnerStyle = computed(() => {
    if (props.height) {
      return {
        height: !Number.isNaN(Number(props.height)) ? `${props.height}px` : props.height
      };
    }
    if (props.maxHeight) {
      return {
        maxHeight: !Number.isNaN(Number(props.maxHeight)) ? `${props.maxHeight}px` : props.maxHeight
      };
    }
    return {};
  });
  const scrollbarStyle = computed(() => {
    if (props.height) {
      return {
        height: "100%"
      };
    }
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        return {
          maxHeight: `${props.maxHeight - headerScrollHeight.value - footerScrollHeight.value}px`
        };
      } else {
        return {
          maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
        };
      }
    }
    return {};
  });
  const handleFixedMousewheel = (event, data) => {
    const bodyWrapper = table2.refs.bodyWrapper;
    if (Math.abs(data.spinY) > 0) {
      const currentScrollTop = bodyWrapper.scrollTop;
      if (data.pixelY < 0 && currentScrollTop !== 0) {
        event.preventDefault();
      }
      if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
        event.preventDefault();
      }
      bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
    } else {
      bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
    }
  };
  return {
    isHidden: isHidden2,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    emptyBlockStyle,
    handleFixedMousewheel,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
    tableInnerStyle,
    scrollbarStyle
  };
}
function useKeyRender(table2) {
  const observer = ref();
  onUnmounted(() => {
    var _a;
    (_a = observer.value) == null ? void 0 : _a.disconnect();
  });
}
var defaultProps$1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: useSizeProp,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children"
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
};
function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every((column) => column.width === void 0)) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h("colgroup", {}, columns.map((column) => h("col", getPropsData(column))));
}
hColgroup.props = ["columns", "tableLayout"];
const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar2 = scrollBarRef.value;
    if (scrollbar2) {
      scrollbar2.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar2 = scrollBarRef.value;
    if (scrollbar2 && isNumber(offset) && ["Top", "Left"].includes(position)) {
      scrollbar2[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};
let tableIdSeed = 1;
const _sfc_main$h = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(props) {
    const { t } = useLocale();
    const ns = useNamespace("table");
    const table2 = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table2);
    const store = createStore(table2, props);
    table2.store = store;
    const layout = new TableLayout({
      store: table2.store,
      table: table2,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table2.layout = layout;
    const isEmpty = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort
    } = useUtils(store);
    const {
      isHidden: isHidden2,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      handleFixedMousewheel,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle
    } = useStyle(props, layout, store, table2);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce(doLayout, 50);
    const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`;
    table2.tableId = tableId;
    table2.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed(() => props.sumText || t("el.table.sumText"));
    const computedEmptyText = computed(() => {
      return props.emptyText || t("el.table.emptyText");
    });
    useKeyRender();
    return {
      ns,
      layout,
      store,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden: isHidden2,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      handleFixedMousewheel,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      t,
      setDragVisible,
      context: table2,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      tableInnerStyle,
      scrollbarStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop
    };
  }
});
const _hoisted_1 = ["data-prefix"];
const _hoisted_2 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_table_footer = resolveComponent("table-footer");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _cache[0] || (_cache[0] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args))
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("inner-wrapper")),
      style: normalizeStyle(_ctx.tableInnerStyle)
    }, [
      createElementVNode("div", _hoisted_2, [
        renderSlot(_ctx.$slots, "default")
      ], 512),
      _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(_ctx.ns.e("header-wrapper"))
      }, [
        createElementVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(_ctx.ns.e("header")),
          style: normalizeStyle(_ctx.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_header, {
            ref: "tableHeaderRef",
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            onSetDragVisible: _ctx.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        ref: "bodyWrapper",
        class: normalizeClass(_ctx.ns.e("body-wrapper"))
      }, [
        createVNode(_component_el_scrollbar, {
          ref: "scrollBarRef",
          "view-style": _ctx.scrollbarViewStyle,
          "wrap-style": _ctx.scrollbarStyle,
          always: _ctx.scrollbarAlwaysOn
        }, {
          default: withCtx(() => [
            createElementVNode("table", {
              ref: "tableBody",
              class: normalizeClass(_ctx.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: _ctx.bodyWidth,
                tableLayout: _ctx.tableLayout
              })
            }, [
              createVNode(_component_hColgroup, {
                columns: _ctx.store.states.columns.value,
                "table-layout": _ctx.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                key: 0,
                ref: "tableHeaderRef",
                class: normalizeClass(_ctx.ns.e("body-header")),
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                onSetDragVisible: _ctx.setDragVisible
              }, null, 8, ["class", "border", "default-sort", "store", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(_component_table_body, {
                context: _ctx.context,
                highlight: _ctx.highlightCurrentRow,
                "row-class-name": _ctx.rowClassName,
                "tooltip-effect": _ctx.tooltipEffect,
                "tooltip-options": _ctx.tooltipOptions,
                "row-style": _ctx.rowStyle,
                store: _ctx.store,
                stripe: _ctx.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
              _ctx.showSummary && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_footer, {
                key: 1,
                class: normalizeClass(_ctx.ns.e("body-footer")),
                border: _ctx.border,
                "default-sort": _ctx.defaultSort,
                store: _ctx.store,
                "sum-text": _ctx.computedSumText,
                "summary-method": _ctx.summaryMethod
              }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : createCommentVNode("v-if", true)
            ], 6),
            _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(_ctx.emptyBlockStyle),
              class: normalizeClass(_ctx.ns.e("empty-block"))
            }, [
              createElementVNode("span", {
                class: normalizeClass(_ctx.ns.e("empty-text"))
              }, [
                renderSlot(_ctx.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(_ctx.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            _ctx.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(_ctx.ns.e("append-wrapper"))
            }, [
              renderSlot(_ctx.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      _ctx.showSummary && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        ref: "footerWrapper",
        class: normalizeClass(_ctx.ns.e("footer-wrapper"))
      }, [
        createElementVNode("table", {
          class: normalizeClass(_ctx.ns.e("footer")),
          cellspacing: "0",
          cellpadding: "0",
          border: "0",
          style: normalizeStyle(_ctx.tableBodyStyles)
        }, [
          createVNode(_component_hColgroup, {
            columns: _ctx.store.states.columns.value,
            "table-layout": _ctx.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(_component_table_footer, {
            border: _ctx.border,
            "default-sort": _ctx.defaultSort,
            store: _ctx.store,
            "sum-text": _ctx.computedSumText,
            "summary-method": _ctx.summaryMethod
          }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
        ], 6)
      ], 2)), [
        [vShow, !_ctx.isEmpty],
        [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(_ctx.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 6),
    withDirectives(createElementVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, _hoisted_1);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render], ["__file", "table.vue"]]);
const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const getDefaultClassName = (type) => {
  return defaultClassNames[type] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store, column }) {
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": store.toggleAllSelection,
        modelValue: store.states.isAllSelected.value,
        ariaLabel: column.label
      });
    },
    renderCell({
      row: row2,
      column,
      store,
      $index
    }) {
      return h(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row2, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row2);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row2),
        ariaLabel: column.label
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({ column }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index = column.index;
      if (typeof index === "number") {
        i = $index + index;
      } else if (typeof index === "function") {
        i = index($index);
      }
      return h("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({ column }) {
      return column.label || "";
    },
    renderCell({
      row: row2,
      store,
      expanded
    }) {
      const { ns } = store;
      const classes = [ns.e("expand-icon")];
      if (expanded) {
        classes.push(ns.em("expand-icon", "expanded"));
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row2);
      };
      return h("div", {
        class: classes,
        onClick: callback
      }, {
        default: () => {
          return [
            h(ElIcon, null, {
              default: () => {
                return [h(arrow_right_default)];
              }
            })
          ];
        }
      });
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row: row2,
  column,
  $index
}) {
  var _a;
  const property = column.property;
  const value = property && getProp(row2, property).value;
  if (column && column.formatter) {
    return column.formatter(row2, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row: row2,
  treeNode,
  store
}, createPlaceholder = false) {
  const { ns } = store;
  if (!treeNode) {
    if (createPlaceholder) {
      return [
        h("span", {
          class: ns.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    if (treeNode.loading) {
      return;
    }
    store.loadOrToggle(row2);
  };
  if (treeNode.indent) {
    ele.push(h("span", {
      class: ns.e("indent"),
      style: { "padding-left": `${treeNode.indent}px` }
    }));
  }
  if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e("expand-icon"),
      treeNode.expanded ? ns.em("expand-icon", "expanded") : ""
    ];
    let icon = arrow_right_default;
    if (treeNode.loading) {
      icon = loading_default;
    }
    ele.push(h("div", {
      class: expandClasses,
      onClick: callback
    }, {
      default: () => {
        return [
          h(ElIcon, { class: { [ns.is("loading")]: treeNode.loading } }, {
            default: () => [h(icon)]
          })
        ];
      }
    }));
  } else {
    ele.push(h("span", {
      class: ns.e("placeholder")
    }));
  }
  return ele;
}
function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          let value = newVal;
          if (columnKey === "width" && key === "realWidth") {
            value = parseWidth(newVal);
          }
          if (columnKey === "minWidth" && key === "realMinWidth") {
            value = parseMinWidth(newVal);
          }
          instance.columnConfig.value[columnKey] = value;
          instance.columnConfig.value[key] = value;
          const updateColumns = columnKey === "fixed";
          owner.value.store.scheduleLayout(updateColumns);
        });
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "filteredValue",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "filterClassName",
      "showOverflowTooltip"
    ];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(() => props_[columnKey], (newVal) => {
          instance.columnConfig.value[key] = newVal;
        });
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!realWidth.value && realMinWidth.value) {
      column.width = void 0;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(column.width === void 0 ? column.minWidth : column.width);
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type = column.type;
    const source = cellForced[type] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && value !== void 0) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type);
    if (className) {
      const forceClass = `${unref(ns.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (Array.isArray(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a;
      if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader) {
      debugWarn("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.");
    } else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        return renderSlot(slots, "header", scope, () => [column.label]);
      };
    }
    let originRenderCell = column.renderCell;
    if (column.type === "expand") {
      column.renderCell = (data) => h("div", {
        class: "cell"
      }, [originRenderCell(data)]);
      owner.value.renderExpanded = (data) => {
        return slots.default ? slots.default(data) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data);
          children = vnodes.some((v) => v.type !== Comment) ? vnodes : originRenderCell(data);
        } else {
          children = originRenderCell(data);
        }
        const { columns } = owner.value.store.states;
        const firstUserColumnIndex = columns.value.findIndex((item) => item.type === "default");
        const shouldCreatePlaceholder = hasTreeColumn.value && data.cellIndex === firstUserColumnIndex;
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns.namespace)}-tooltip`;
          props2.style = {
            width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce((prev, cur) => {
      if (Array.isArray(cur)) {
        cur.forEach((key) => {
          prev[key] = props[key];
        });
      }
      return prev;
    }, {});
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  const updateColumnOrder = () => {
    owner.value.store.commit("updateColumnOrder", instance.columnConfig.value);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
    updateColumnOrder
  };
}
var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  filterClassName: String,
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every((order) => ["ascending", "descending", null].includes(order));
    }
  }
};
let columnIdSeed = 1;
var ElTableColumn$1 = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    useWatcher(owner, props);
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign,
      updateColumnOrder
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${parent.tableId || parent.columnId}_column_${columnIdSeed++}`;
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a, _b, _c;
    try {
      const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (Array.isArray(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && Array.isArray(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString$1(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h("div", children);
      return vnode;
    } catch (e) {
      return h("div", []);
    }
  }
});
const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    title: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a;
    const noscript = { ...props };
    const textContent = (((_a = slots.default) == null ? void 0 : _a.call(slots)) || []).filter(({ children }) => children).map(({ children }) => children).join("");
    if (textContent) {
      noscript.children = textContent;
    }
    return {
      noscript: [noscript]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base2) => ({
    base: base2
  }))
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Meta = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    },
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = { ...props };
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const METADATA = {
  title: "\u6807\u9898",
  description: "\u63CF\u8FF0",
  siteUrl: "https://iot.jiangnan.edu.cn/info/1142/3569.htm"
};
const INFODATA = {
  pdfBtnName: "\u8BE6\u7EC6\u4FE1\u606F",
  siteBtnName: "\u8054\u7CFB\u6211\u4EEC",
  pdfUrl: "http://www.cztouch.com/upfiles/soft/testpdf.pdf",
  siteUrl: "https://iot.jiangnan.edu.cn/info/1142/3569.htm"
};
const MENULINKS = [
  {
    name: "\u9996\u9875",
    ref: "home"
  },
  {
    name: "\u6210\u679C",
    ref: "works"
  },
  {
    name: "\u6210\u5458",
    ref: "members"
  },
  {
    name: "\u65F6\u95F4\u7EBF",
    ref: "timeline"
  },
  {
    name: "\u8054\u7CFB\u6211\u4EEC",
    ref: "contact"
  }
];
const SOCIAL_LINKS = {
  jnu: "https://www.jiangnan.edu.cn/",
  jnuIot: "https://iot.jiangnan.edu.cn/"
};
const PROJECTS = [
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/figgen-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/myokr-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/dlt-website-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#245B57", "#004741"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/dl-unify-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#003052", "#167187"],
    url: "#",
    data: "2024-5-11"
  },
  {
    name: "keywords: \u4EFB\u52A1\u5378\u8F7D\uFF0C\u8D44\u6E90\u7BA1\u7406",
    image: "https://pics.latexstudio.net/uploads/20201230/5feb59092cadf/latexc__images/3.png",
    author: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "\u63CF\u8FF0\u4FE1\u606F",
    gradient: ["#3A0000", "#771E1E"],
    url: "#",
    data: "2024-5-11"
  }
];
const FORMER_MEMBERS = [
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  }
];
const NOW_MEMBERS = [
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  },
  {
    name: "\u59D3\u540D",
    city: "\u54EA\u91CC\u4EBA",
    grade: "\u5E74\u7EA7",
    interest: "\u7814\u7A76\u5174\u8DA3",
    status: "\u73B0\u72B6",
    url: "#"
  }
];
var NodeTypes = /* @__PURE__ */ ((NodeTypes2) => {
  NodeTypes2["CONVERGE"] = "converge";
  NodeTypes2["DIVERGE"] = "diverge";
  NodeTypes2["CHECKPOINT"] = "checkpoint";
  return NodeTypes2;
})(NodeTypes || {});
const TIMELINE = [
  {
    type: "checkpoint",
    title: "2026",
    size: "large",
    shouldDrawLine: false,
    alignment: "leftSide"
    /* LEFT */
    //左支
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98981",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/subtitleImage.svg',
    slideImage: "https://ts1.cn.mm.bing.net/th/id/R-C.748160bf925a7acb3ba1c9514bbc60db?rik=AYY%2bJ9WcXYIMgw&riu=http%3a%2f%2fseopic.699pic.com%2fphoto%2f50017%2f0822.jpg_wh1200.jpg&ehk=CMVcdZMU6xxsjVjafO70cFcmJvD62suFC1ytk8UuAUk%3d&risl=&pid=ImgRaw&r=0",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "2025",
    size: "large",
    shouldDrawLine: false,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98982",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/flipkart.svg',
    slideImage: "https://uploadfile.bizhizu.cn/2017/0701/20170701031430776.jpg",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "2024",
    size: "large",
    shouldDrawLine: false,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "diverge"
    /* DIVERGE */
    //向右分一支
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98983",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/huminos.svg',
    slideImage: "https://ts1.cn.mm.bing.net/th/id/R-C.6b9074faed6dae2a0457e690c2aa3a03?rik=6V%2fv2rXhPCf7Pg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn20115%2f534%2fw1280h854%2f20190221%2f9461-htknpmf9890147.jpg&ehk=RyGDdQrMiIWbz7Uxa%2fLSPOz2iXvM8JpbkBIZgttQkWc%3d&risl=&pid=ImgRaw&r=0",
    shouldDrawLine: true,
    alignment: "rightSide"
    /* RIGHT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98984",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/octanner.svg',
    slideImage: "https://tse1-mm.cn.bing.net/th/id/OIP-C.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "converge"
    /* CONVERGE */
    //右支向左合并
  },
  {
    type: "checkpoint",
    title: "2023",
    size: "large",
    shouldDrawLine: false,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98985",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/dltlabs.svg',
    slideImage: "https://sjbz-fd.zol-img.com.cn/t_s1080x1920c/g5/M00/00/02/ChMkJ1fJVFOIV8kdAC3oDpyfq8YAAU9wQN1ivcALegm011.jpg",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98986",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/huminos.svg',
    slideImage: "https://www.keaitupian.cn/cjpic/frombd/2/253/2107631312/3178897554.jpg",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98987",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    // image: '/timeline/akgec.svg',
    slideImage: "https://media.giphy.com/media/3osxYpRxjzvPOtwfF6/giphy.gif",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "2022",
    size: "large",
    shouldDrawLine: false,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "diverge"
    /* DIVERGE */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98988",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    slideImage: "https://media.giphy.com/media/xTiTnu6aRsOuB41UNG/giphy.gif",
    shouldDrawLine: true,
    alignment: "rightSide"
    /* RIGHT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u98989",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    slideImage: "https://ts1.cn.mm.bing.net/th/id/R-C.ccd320596cb9b0499c2d9e89079c7990?rik=bo30tkANeNk4Aw&riu=http%3a%2f%2fwww.finebornchina.cn%2fuploads%2fallimg%2f140430%2f1-140430150445413.jpg&ehk=Hjpp13uPkWtPTUVLZH%2f7V3MKAnXYJJNjmjRq1TE136k%3d&risl=&pid=ImgRaw&r=0",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u989810",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    slideImage: "https://ts1.cn.mm.bing.net/th/id/R-C.69fb9755a2385fa76560f5112f37c14d?rik=03yms%2faFfn79tQ&riu=http%3a%2f%2fi02.cztv.com%2f2013%2f08%2f1375411511_07024700.jpg&ehk=7smYXj9OTiRmibyzPiS7sWIAk1rhDYKcQq%2fC3MvGxc8%3d&risl=&pid=ImgRaw&r=0",
    shouldDrawLine: true,
    alignment: "rightSide"
    /* RIGHT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u989811",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    slideImage: "https://youimg1.c-ctrip.com/target/0102a120004fhqcagB7E5_D_10000_1200.jpg?proc=autoorient",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "converge"
    /* CONVERGE */
  },
  {
    type: "checkpoint",
    title: "2021",
    size: "large",
    shouldDrawLine: false,
    alignment: "leftSide"
    /* LEFT */
  },
  {
    type: "checkpoint",
    title: "\u5185\u5BB9\u6807\u989812",
    size: "small",
    subtitle: "\u4ECB\u7ECD\u4E00\u4E0B\u5427",
    slideImage: "https://ts1.cn.mm.bing.net/th/id/R-C.633901d07a3d18cdf6d58a0ccc74078d?rik=8evNNQvJj91%2bjg&riu=http%3a%2f%2fimg.hkwb.net%2fatt%2fsite2%2f20120308%2f633901d07a3d18cdf6d58a0ccc74078d.jpg&ehk=mupUGFlfxfEilMIkHoDFPVYnfR%2bSaF86fmgOkvvU8YM%3d&risl=&pid=ImgRaw&r=0",
    shouldDrawLine: true,
    alignment: "leftSide"
    /* LEFT */
  }
];
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Meta = Meta;
      _push(ssrRenderComponent(_component_Head, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Meta, {
              httpequiv: "Content-Type",
              content: "text/html; charset=utf-8"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "viewport",
              content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              httpequiv: "X-UA-Compatible",
              content: "IE=edge,chrome=1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              name: "description",
              content: unref(METADATA).description
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:locale",
              content: "zh-CN"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:type",
              content: "website"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:title",
              content: unref(METADATA).title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:description",
              content: unref(METADATA).description
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:url",
              content: unref(METADATA).siteUrl
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:site_name",
              content: unref(METADATA).title
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image",
              content: "https://tse4-mm.cn.bing.net/th/id/OIP-C.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image:secure_url",
              content: unref(METADATA).siteUrl
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image:width",
              content: "1440"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              property: "og:image:height",
              content: "800"
            }, null, _parent2, _scopeId));
            _push2(`<link rel="icon" type="image/x-icon" href="/favicon.ico"${_scopeId}>`);
          } else {
            return [
              createVNode(_component_Meta, {
                httpequiv: "Content-Type",
                content: "text/html; charset=utf-8"
              }),
              createVNode(_component_Meta, {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
              }),
              createVNode(_component_Meta, {
                httpequiv: "X-UA-Compatible",
                content: "IE=edge,chrome=1"
              }),
              createVNode(_component_Meta, {
                name: "description",
                content: unref(METADATA).description
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:locale",
                content: "zh-CN"
              }),
              createVNode(_component_Meta, {
                property: "og:type",
                content: "website"
              }),
              createVNode(_component_Meta, {
                property: "og:title",
                content: unref(METADATA).title
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:description",
                content: unref(METADATA).description
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:url",
                content: unref(METADATA).siteUrl
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:site_name",
                content: unref(METADATA).title
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:image",
                content: "https://tse4-mm.cn.bing.net/th/id/OIP-C.GC_ugX-TzPVR26SSxI1kZwHaE9?rs=1&pid=ImgDetMain"
              }),
              createVNode(_component_Meta, {
                property: "og:image:secure_url",
                content: unref(METADATA).siteUrl
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                property: "og:image:width",
                content: "1440"
              }),
              createVNode(_component_Meta, {
                property: "og:image:height",
                content: "800"
              }),
              createVNode("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _imports_0$3 = "" + publicAssetsURL("internet.svg");
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "menu",
  __ssrInlineRender: true,
  props: {
    setmenuVisible: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "menu pointer-events-none invisible fixed left-0 top-0 h-full w-full flex items-center justify-center overflow-hidden",
        style: { "visibility": "'hidden'" }
      }, _attrs))}><div class="flex flex-none items-center justify-center overflow-hidden"><div class="max-h-screen flex flex-none items-center justify-center overflow-y-auto text-center opacity-0"><ul class="m-0 block max-h-screen list-none px-0 py-4" role="menu"><!--[-->`);
      ssrRenderList(unref(MENULINKS), (el) => {
        _push(`<li class="m-6 block p-0 text-2xl" role="menuitem"><a class="link relative inline text-5xl font-bold duration-300 hover:no-underline"${ssrRenderAttr("href", `#${el.ref}`)}>${ssrInterpolate(el.name)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></section>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/menu.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const menuVisible = ref(false);
    function setmenuVisible(val) {
      menuVisible.value = val;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 z-50 w-full select-none from-gray-900 to-transparent bg-gradient-to-b py-8" }, _attrs))}><div class="section-container flex justify-between"><a href="#home" class="link"><img${ssrRenderAttr("src", _imports_0$3)} alt="Logo - Ayush Singh" width="32" height="32"></a><nav class="${ssrRenderClass(`outer-menu ${unref(menuVisible) && "menu-visible"}`)}"><button class="link hamburger relative h-6 w-6 flex items-center justify-center"><div class="relative w-full flex flex-none items-center justify-center bg-white duration-300"></div></button>`);
      _push(ssrRenderComponent(_sfc_main$f, { "setmenu-visible": setmenuVisible }, null, _parent));
      _push(`</nav></div></header>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ProgressIndicator",
  __ssrInlineRender: true,
  setup(__props) {
    const progress = ref(0);
    function calculateProgress() {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winScroll / height;
      progress.value = scrolled;
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", calculateProgress);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="progress fixed top-0 z-50 w-full"><div class="progress-bar" style="${ssrRenderStyle(`transform:scaleX(${unref(progress)})`)}"></div></div></div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProgressIndicator.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const cursor = "_cursor_1iqny_6";
const cursorFollower = "_cursorFollower_1iqny_11";
const styles$2 = {
  cursor,
  cursorFollower
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "Cursor",
  __ssrInlineRender: true,
  props: {
    isDesktop: { type: Boolean }
  },
  setup(__props) {
    const CURSOR_STYLES = {
      CURSOR: "fixed hidden bg-white w-4 h-4 select-none pointer-events-none z-50",
      FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50"
    };
    ref(void 0);
    ref(void 0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass(`${unref(styles$2).cursor} ${CURSOR_STYLES.CURSOR}`)}"></div><div class="${ssrRenderClass(`${unref(styles$2).cursorFollower} ${CURSOR_STYLES.FOLLOWER}`)}"></div></div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cursor.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _imports_0$2 = "" + publicAssetsURL("footer-curve.svg");
const primary = "_primary_1ed9x_6";
const outline = "_outline_1ed9x_15";
const white = "_white_1ed9x_22";
const styles$1 = {
  primary,
  outline,
  white
};
var ButtonTypes = /* @__PURE__ */ ((ButtonTypes2) => {
  ButtonTypes2["PRIMARY"] = "primary";
  ButtonTypes2["OUTLINE"] = "outline";
  ButtonTypes2["WHITE"] = "white";
  return ButtonTypes2;
})(ButtonTypes || {});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "button",
  __ssrInlineRender: true,
  props: {
    type: {},
    onClick: { type: Function },
    name: {},
    href: {},
    classes: {},
    otherProps: {}
  },
  setup(__props) {
    const buttonClasses = "py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center";
    function getButtonTypeStyles(type) {
      return type === "primary" ? styles$1.primary : type === "white" ? styles$1.white : styles$1.outline;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({ href: _ctx.href }, _ctx.otherProps, {
        class: `${getButtonTypeStyles(_ctx.type)} ${buttonClasses} ${_ctx.classes}`
      }, _attrs))}>${ssrInterpolate(_ctx.name)}</a>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/button.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "footer",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      ref: footerRef
    } = MENULINKS[4];
    const otherProp = reactive({
      target: "_blank",
      rel: "noreferrer"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: unref(footerRef),
        class: "relative w-full flex flex-col select-none items-stretch bg-cover"
      }, _attrs))}><img${ssrRenderAttr("src", _imports_0$2)} alt="Footer" class="w-full" height="290" role="presentation" width="1440"><div class="h-full w-full"><div class="section-container z-10 h-full flex flex-col items-center justify-end py-12">`);
      _push(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, { span: 12 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-center text-3xl font-medium md:text-4xl"${_scopeId2}> \u8054\u7CFB\u6211\u4EEC </h1><div class="mt-8 flex items-center justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    classes: "mr-3",
                    type: unref(ButtonTypes).OUTLINE,
                    name: unref(INFODATA).pdfBtnName,
                    "other-props": unref(otherProp),
                    href: unref(INFODATA).pdfUrl
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    classes: "ml-3",
                    type: unref(ButtonTypes).WHITE,
                    name: unref(INFODATA).siteBtnName,
                    href: unref(INFODATA).siteUrl,
                    "other-props": unref(otherProp)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-center text-3xl font-medium md:text-4xl" }, " \u8054\u7CFB\u6211\u4EEC "),
                    createVNode("div", { class: "mt-8 flex items-center justify-center" }, [
                      createVNode(_sfc_main$b, {
                        classes: "mr-3",
                        type: unref(ButtonTypes).OUTLINE,
                        name: unref(INFODATA).pdfBtnName,
                        "other-props": unref(otherProp),
                        href: unref(INFODATA).pdfUrl
                      }, null, 8, ["type", "name", "other-props", "href"]),
                      createVNode(_sfc_main$b, {
                        classes: "ml-3",
                        type: unref(ButtonTypes).WHITE,
                        name: unref(INFODATA).siteBtnName,
                        href: unref(INFODATA).siteUrl,
                        "other-props": unref(otherProp)
                      }, null, 8, ["type", "name", "href", "other-props"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, { span: 12 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h1 class="text-center text-3xl font-medium md:text-4xl"${_scopeId2}> \u76F8\u5173\u94FE\u63A5 </h1><div class="flex content-center"${_scopeId2}><!--[-->`);
                  ssrRenderList(Object.keys(unref(SOCIAL_LINKS)), (el) => {
                    _push3(`<a${ssrRenderAttr("href", unref(SOCIAL_LINKS)[el])} class="link px-1 duration-300 md:px-2 hover:opacity-80 content-center" rel="noreferrer" target="_blank"${_scopeId2}><img${ssrRenderAttr("src", `/social/${el}.png`)} alt="{el}"${_scopeId2}></a>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("h1", { class: "text-center text-3xl font-medium md:text-4xl" }, " \u76F8\u5173\u94FE\u63A5 "),
                    createVNode("div", { class: "flex content-center" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(unref(SOCIAL_LINKS)), (el) => {
                        return openBlock(), createBlock("a", {
                          key: el,
                          href: unref(SOCIAL_LINKS)[el],
                          class: "link px-1 duration-300 md:px-2 hover:opacity-80 content-center",
                          rel: "noreferrer",
                          target: "_blank"
                        }, [
                          createVNode("img", {
                            src: `/social/${el}.png`,
                            alt: "{el}"
                          }, null, 8, ["src"])
                        ], 8, ["href"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, { span: 12 }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-center text-3xl font-medium md:text-4xl" }, " \u8054\u7CFB\u6211\u4EEC "),
                  createVNode("div", { class: "mt-8 flex items-center justify-center" }, [
                    createVNode(_sfc_main$b, {
                      classes: "mr-3",
                      type: unref(ButtonTypes).OUTLINE,
                      name: unref(INFODATA).pdfBtnName,
                      "other-props": unref(otherProp),
                      href: unref(INFODATA).pdfUrl
                    }, null, 8, ["type", "name", "other-props", "href"]),
                    createVNode(_sfc_main$b, {
                      classes: "ml-3",
                      type: unref(ButtonTypes).WHITE,
                      name: unref(INFODATA).siteBtnName,
                      href: unref(INFODATA).siteUrl,
                      "other-props": unref(otherProp)
                    }, null, 8, ["type", "name", "href", "other-props"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_col, { span: 12 }, {
                default: withCtx(() => [
                  createVNode("h1", { class: "text-center text-3xl font-medium md:text-4xl" }, " \u76F8\u5173\u94FE\u63A5 "),
                  createVNode("div", { class: "flex content-center" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(Object.keys(unref(SOCIAL_LINKS)), (el) => {
                      return openBlock(), createBlock("a", {
                        key: el,
                        href: unref(SOCIAL_LINKS)[el],
                        class: "link px-1 duration-300 md:px-2 hover:opacity-80 content-center",
                        rel: "noreferrer",
                        target: "_blank"
                      }, [
                        createVNode("img", {
                          src: `/social/${el}.png`,
                          alt: "{el}"
                        }, null, 8, ["src"])
                      ], 8, ["href"]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="mt-8 text-center text-sm sm:text-base"> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx </h2></div></div></footer>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "quote",
  __ssrInlineRender: true,
  setup(__props) {
    ref(void 0);
    const targetSection = ref(void 0);
    const willChange = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "targetSection",
        ref: targetSection,
        class: "relative w-full select-none"
      }, _attrs))}><div class="section-container tall:py-60 py-72"><h1 class="${ssrRenderClass(`${unref(willChange) && "will-change-opacity"} font-medium  text-center  text-4xl l`)}"> &quot;\u77E5\u8BC6\u662F\u8DEF\uFF0C\u7814\u7A76\u662F<span class="text-strong font-bold">\u8F66</span>\uFF0C\u594B\u6597\u662F\u65B9\u5411\uFF0C\u52AA\u529B\u662F\u52A8\u529B&quot; </h1></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/quote.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$1 = "" + publicAssetsURL("pattern-r.svg");
const _imports_1 = "" + publicAssetsURL("pattern-l.svg");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "render-member-column",
  __ssrInlineRender: true,
  props: {
    members: {},
    willChange: {},
    title: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      _push(`<!--[--><h2 class="section-title-sm seq mb-4" data-v-82d2d436>${ssrInterpolate(_ctx.title)}</h2><div class="${ssrRenderClass(`${_ctx.willChange && "will-change-opacity"} seq flex flex-wrap`)}" data-v-82d2d436>`);
      _push(ssrRenderComponent(_component_el_row, { style: { "width": "100%", "padding-left": "2rem" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.members, (member, idx) => {
              _push2(ssrRenderComponent(_component_el_col, {
                xs: 24,
                sm: 12,
                md: 8,
                lg: 6,
                xl: 6,
                key: idx,
                class: "seq"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<a${ssrRenderAttr("href", member.url)} title="\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F" data-v-82d2d436${_scopeId2}><div class="grid-content" data-v-82d2d436${_scopeId2}><h5 data-v-82d2d436${_scopeId2}>\u59D3\u540D\uFF1A${ssrInterpolate(member.name)}</h5><h5 data-v-82d2d436${_scopeId2}>\u7C4D\u8D2F\uFF1A${ssrInterpolate(member.city)}</h5><h5 data-v-82d2d436${_scopeId2}>\u5E74\u7EA7\uFF1A${ssrInterpolate(member.grade)}</h5><h5 data-v-82d2d436${_scopeId2}>\u7814\u7A76\u5174\u8DA3\uFF1A${ssrInterpolate(member.interest)}</h5><h5 data-v-82d2d436${_scopeId2}>\u73B0\u72B6\uFF1A${ssrInterpolate(member.status)}</h5></div></a>`);
                  } else {
                    return [
                      createVNode("a", {
                        href: member.url,
                        title: "\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F"
                      }, [
                        createVNode("div", { class: "grid-content" }, [
                          createVNode("h5", null, "\u59D3\u540D\uFF1A" + toDisplayString(member.name), 1),
                          createVNode("h5", null, "\u7C4D\u8D2F\uFF1A" + toDisplayString(member.city), 1),
                          createVNode("h5", null, "\u5E74\u7EA7\uFF1A" + toDisplayString(member.grade), 1),
                          createVNode("h5", null, "\u7814\u7A76\u5174\u8DA3\uFF1A" + toDisplayString(member.interest), 1),
                          createVNode("h5", null, "\u73B0\u72B6\uFF1A" + toDisplayString(member.status), 1)
                        ])
                      ], 8, ["href"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.members, (member, idx) => {
                return openBlock(), createBlock(_component_el_col, {
                  xs: 24,
                  sm: 12,
                  md: 8,
                  lg: 6,
                  xl: 6,
                  key: idx,
                  class: "seq"
                }, {
                  default: withCtx(() => [
                    createVNode("a", {
                      href: member.url,
                      title: "\u70B9\u51FB\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F"
                    }, [
                      createVNode("div", { class: "grid-content" }, [
                        createVNode("h5", null, "\u59D3\u540D\uFF1A" + toDisplayString(member.name), 1),
                        createVNode("h5", null, "\u7C4D\u8D2F\uFF1A" + toDisplayString(member.city), 1),
                        createVNode("h5", null, "\u5E74\u7EA7\uFF1A" + toDisplayString(member.grade), 1),
                        createVNode("h5", null, "\u7814\u7A76\u5174\u8DA3\uFF1A" + toDisplayString(member.interest), 1),
                        createVNode("h5", null, "\u73B0\u72B6\uFF1A" + toDisplayString(member.status), 1)
                      ])
                    ], 8, ["href"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/render-member-column.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const renderMemberColumn = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-82d2d436"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "members",
  __ssrInlineRender: true,
  setup(__props) {
    const willChange = ref(false);
    ref(void 0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="absolute right-0 hidden max-w-xs w-1/5 justify-end -bottom-1/3 md:flex"><img${ssrRenderAttr("src", _imports_0$1)} loading="lazy" height="700" width="320" alt="pattern"></div><div class="absolute left-0 hidden max-w-xs w-1/12 -bottom-3.5 md:block"><img${ssrRenderAttr("src", _imports_1)} loading="lazy" height="335" width="140" alt="pattern"></div><div${ssrRenderAttr("id", unref(MENULINKS)[2].ref)} class="section-container relative mb-24 w-full flex flex-col select-none justify-center py-12"><div class="members-wrapper flex flex-col"><div class="flex flex-col"><p class="section-title-sm seq"> MEMBERS </p><h1 class="section-heading seq mt-2"> \u8BFE\u9898\u7EC4\u6210\u5458 </h1><h2 class="seq mt-2 w-full text-2xl md:max-w-2xl"> \u60F3\u4E2A\u53E5\u5B50\u586B\u5145\u4E00\u4E0B\u5427~ </h2></div><div class="mt-10">`);
      _push(ssrRenderComponent(renderMemberColumn, {
        members: unref(FORMER_MEMBERS),
        "will-change": unref(willChange),
        title: "\u5DF2\u6BD5\u4E1A"
      }, null, _parent));
      _push(`</div><div class="mt-10">`);
      _push(ssrRenderComponent(renderMemberColumn, {
        members: unref(NOW_MEMBERS),
        "will-change": unref(willChange),
        title: "\u5728\u8BFB"
      }, null, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/members.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    ref(void 0);
    const targetSection = ref(void 0);
    const willChange = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "targetSection",
        ref: targetSection,
        class: "section-container relative w-full select-none pb-16 pb-24 pt-20 pt-40"
      }, _attrs))}><h1 class="text-3xl font-medium md:text-6xl sm:text-4xl"><span class="${ssrRenderClass(`about-1  text-3xl leading-tight ${unref(willChange) ? "will-change-opacity" : ""}`)}"> \u8F66\u8054\u7F51\u7684\u7814\u7A76\u6D89\u53CA\u901A\u4FE1\u6280\u672F\u3001\u6570\u636E\u5904\u7406\u3001\u667A\u80FD\u7B97\u6CD5\u7B49\u591A\u4E2A\u9886\u57DF\uFF0C\u65E8\u5728\u89E3\u51B3\u8F66\u8F86\u4E4B\u95F4\u4FE1\u606F\u4F20\u8F93\u7684\u53EF\u9760\u6027\u3001\u5B9E\u65F6\u6027\u4EE5\u53CA\u6570\u636E\u9690\u79C1\u548C\u5B89\u5168\u7B49\u6311\u6218\u3002 </span><span class="${ssrRenderClass(`about-2  text-3xl leading-tight ${unref(willChange) ? "will-change-opacity" : ""}`)}"> \u901A\u8FC7\u8F66\u8F86\u4E4B\u95F4\u7684\u534F\u540C\u901A\u4FE1\u548C\u4FE1\u606F\u5171\u4EAB\uFF0C\u7814\u7A76\u4EBA\u5458\u81F4\u529B\u4E8E\u4F18\u5316\u4EA4\u901A\u6D41\u91CF\u5206\u914D\u3001\u51CF\u5C11\u4EA4\u901A\u62E5\u5835\uFF0C\u4EE5\u53CA\u63D0\u9AD8\u9A7E\u9A76\u5B89\u5168\u6027\u548C\u8212\u9002\u6027\u3002 </span><span class="${ssrRenderClass(`about-3  text-3xl leading-tight ${unref(willChange) ? "will-change-opacity" : ""}`)}"> \u8FD9\u9879\u7814\u7A76\u8FD8\u4FC3\u8FDB\u4E86\u81EA\u52A8\u9A7E\u9A76\u6280\u672F\u7684\u53D1\u5C55\uFF0C\u63A8\u52A8\u667A\u6167\u57CE\u5E02\u548C\u667A\u80FD\u4EA4\u901A\u7CFB\u7EDF\u7684\u5EFA\u8BBE\uFF0C\u4E3A\u672A\u6765\u57CE\u5E02\u4EA4\u901A\u548C\u51FA\u884C\u65B9\u5F0F\u5E26\u6765\u5168\u65B0\u7684\u53EF\u80FD\u6027\u3002 </span></h1></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/about.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function HeroImage() {
  return createVNode("svg", {
    "width": 1021,
    "height": 650,
    "viewBox": "0 0 1021 650",
    "class": "w-full",
    "style": {
      height: "auto"
    },
    "fill": "none",
    "xmlns": "http://www.w3.org/2000/svg"
  }, [createVNode("g", {
    "id": "Frame_595"
  }, [createVNode("g", {
    "id": "Group",
    "opacity": 0.2
  }, [createVNode("path", {
    "id": "Shape",
    "d": "M999.062 225.12h-1.174v-20.37c-.263-2.46-.587-4.9-.972-7.32v27.69h-28.092v-33.16h27.137c-.079-.38-.149-.75-.228-1.13h-26.909v-33.17h14.668c-.21-.37-.438-.75-.674-1.12h-13.994v-17.21c-.324-.29-.648-.6-.981-.89v18.1h-30.045v-33.17h6.361c-.893-.39-1.787-.76-2.689-1.12h-3.672v-1.39c-.324-.11-.648-.22-.972-.32v1.71h-29.073v-7.73c-.324-.04-.657-.06-.981-.09v7.82h-29.064v-7.54c-.324.02-.657.06-.981.1v7.44h-29.064v-2.65c-.324.06-.657.13-.981.21v2.44H835.44c-1.664.37-3.329.75-4.994 1.12h16.236v33.17h-29.064v-30.29c-.332.06-.657.14-.981.21v30.08h-29.064v-24.69c-.332.05-.657.09-.981.13v24.56h-29.063v-22.77c-.324 0-.658-.02-.981-.02v22.79h-29.064v-27.02c-.324-.06-.658-.16-.981-.25v27.27h-29.064v-33.17h9.962c-1.025-.37-2.033-.73-3.049-1.12h-6.913v-2.69c-.324-.13-.649-.25-.981-.39v3.08h-29.064v-16.09c-.324-.14-.657-.3-.981-.45v16.54h-29.064v-30c-.333-.14-.657-.29-.981-.42v30.42h-29.064V89.08h22.614c-.911-.37-1.822-.75-2.733-1.12h-19.881v-7.17c-.324-.12-.657-.21-.981-.31v7.48h-29.064V73.9c-.324-.05-.657-.09-.981-.15v14.21h-29.064V71.02c-.333-.02-.657-.02-.981-.02v16.96h-29.064V71.73c-.333.02-.657.04-.981.08v16.15h-29.073V76.04c-.324.06-.648.12-.972.21v11.71H457.07v-3.84c-.324.11-.648.23-.972.34v3.5h-9.656c-.946.37-1.893.75-2.839 1.12h12.495v33.17h-29.073V96.41c-.324.17-.648.32-.972.48v25.36H396.98v-8.6c-.324.21-.648.43-.972.66v7.94H384.81c-.491.37-.981.75-1.481 1.12h12.679v33.17h-29.072v-19.71c-.325.28-.649.57-.973.86v18.85h-19.285c-.351.37-.692.75-1.043 1.12h20.328v33.17h-29.072v-23.31c-.333.37-.657.75-.973 1.13v22.18h-17.112c-.254.38-.517.75-.78 1.13h17.892v33.16h-29.072v-16.06c-.333.54-.657 1.08-.982 1.61v14.45h-8.245c-.201.38-.403.75-.596 1.13h8.841v33.16h-24.779c-.166.38-.324.75-.49 1.13h25.269v33.17h-29.063V269.5c-.333.79-.657 1.58-.982 2.36v21.85h-8.648c-.14.37-.289.73-.429 1.12h9.077V328h-21.537c-.14.36-.28.75-.42 1.11h21.957v33.18h-29.063v-14.48c-.324.84-.649 1.69-.981 2.52v11.96h-4.741c-.149.36-.306.75-.455 1.11h5.196v33.18h-19.794c-.184.36-.359.75-.552 1.11h20.346v33.17h-29.064v-16.07c-.324.6-.649 1.21-.981 1.82v14.25h-8.035c-.219.37-.438.74-.657 1.12h8.692v33.17h-29.134v-2.05c-.324.46-.649.9-.982 1.33v.72h-.534c-.272.37-.552.75-.832 1.12h1.366v33.17h-29.063v-.96c-.701.71-1.402 1.41-2.103 2.08h1.122v33.19h-29.064v-9.57c-.324.23-.657.47-.981.71v8.86H112.39c-.578.37-1.156.75-1.735 1.1h14.87v33.19H96.461V543.6c-.324.21-.657.4-.981.61v23.83H66.416v-5.94c-.333.21-.657.42-.981.65v5.29h-7.79c-.525.35-1.051.73-1.568 1.1h9.358v33.19H36.37V585c-.333.31-.657.6-.981.91v16.42H20.109c-.307.36-.605.73-.894 1.11H35.39v33.17H6.326v-13.4c-.333.64-.666 1.27-.981 1.93v11.47H.395c-.141.39-.272.75-.395 1.12h5.345v11.57h.981v-11.57H35.39v11.57h.981v-11.57h29.064v11.57h.981v-11.57H95.48v11.57h.98v-11.57h29.065v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.063v11.57h.982v-11.57h29.134v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.063v11.57h.982v-11.57h29.063v11.57h.982v-11.57h29.072v11.57h.973v-11.57h29.072v11.57h.973v-11.57h29.072v11.57h.972v-11.57h29.073v11.57h.972v-11.57h29.073v11.57h.972v-11.57h29.073v11.57h.972v-11.57h29.073v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.064v11.57h.981v-11.57h29.064v10.19a8.54 8.54 0 00.981-.28v-9.91h29.063v.77c.324-.11.658-.23.982-.36v-.41h1.165c1.043-.36 2.085-.73 3.119-1.12h-4.284v-33.17h29.063v23.41c.333-.14.657-.29.982-.43v-22.98h29.063v9.35c.324-.17.657-.33.982-.5v-8.85h16.98c.57-.36 1.122-.73 1.665-1.11h-18.646v-33.19h29.064v26.72c.324-.21.657-.42.982-.65v-26.07h26.057c.211-.37.422-.74.614-1.1h-26.672v-33.19h29.064v28.04c.35-.89.675-1.79.981-2.72v-25.32h1.788c-.053-.37-.096-.74-.149-1.1h-1.639v-9.6c-.315-1.65-.648-3.3-.981-4.96v14.56h-29.064v-33.19h26.164c-.018-.38-.026-.75-.044-1.12h-26.12v-33.17h29.064v13.88c.307-.9.631-1.82.981-2.72v-11.16h5.442c.219-.37.438-.75.666-1.12h-6.108v-33.17h29.064v4.81c.324-.33.648-.67.981-1v-3.81h3.777c.368-.38.744-.75 1.121-1.12h-4.898v-33.17h29.073v9.21c.324-.34.648-.69.972-1.03v-8.18H945c.307-.38.605-.75.903-1.11h-8.105V363.4h28.231c.184-.36.369-.75.561-1.11h-28.792v-33.18h30.045v30.64c.333-.67.657-1.34.981-2.02v-28.62h12.031c.131-.36.271-.75.403-1.11h-12.434v-33.17h22.221c.096-.37.184-.75.263-1.12h-22.484v-33.17h28.091v1.35c.377-3.06.702-6.14.973-9.22v-26.42h1.183c0-.38-.009-.75-.009-1.13zM65.435 636.61H36.37v-33.17h29.064v33.17zm30.045 0H66.416v-33.17H95.48v33.17zm0-34.28H66.416v-33.19H95.48v33.19zm30.045 34.28H96.461v-33.17h29.064v33.17zm0-34.28H96.461v-33.19h29.064v33.19zm30.045 34.28h-29.064v-33.17h29.064v33.17zm0-34.28h-29.064v-33.19h29.064v33.19zm0-34.29h-29.064v-33.19h29.064v33.19zm30.044 68.57h-29.063v-33.17h29.063v33.17zm0-34.28h-29.063v-33.19h29.063v33.19zm0-34.29h-29.063v-33.19h29.063v33.19zm0-34.29h-29.063v-33.19h29.063v33.19zm30.116 102.86h-29.134v-33.17h29.134v33.17zm0-34.28h-29.134v-33.19h29.134v33.19zm0-34.29h-29.134v-33.19h29.134v33.19zm0-34.29h-29.134v-33.19h29.134v33.19zm0-34.31h-29.134v-33.17h29.134v33.17zm30.045 137.17h-29.064v-33.17h29.064v33.17zm0-34.28h-29.064v-33.19h29.064v33.19zm0-34.29h-29.064v-33.19h29.064v33.19zm0-34.29h-29.064v-33.19h29.064v33.19zm0-34.31h-29.064v-33.17h29.064v33.17zm0-34.29h-29.064v-33.17h29.064v33.17zm30.044 171.46h-29.063v-33.17h29.063v33.17zm0-34.28h-29.063v-33.19h29.063v33.19zm0-34.29h-29.063v-33.19h29.063v33.19zm0-34.29h-29.063v-33.19h29.063v33.19zm0-34.309h-29.063V466.27h29.063v33.171zm0-34.29h-29.063V431.98h29.063v33.171zm0-34.29h-29.063V397.69h29.063v33.171zm0-34.28h-29.063V363.4h29.063v33.181zm30.045 240.03h-29.063V603.44h29.063v33.171zm0-34.28h-29.063V569.14h29.063v33.191zm0-34.29h-29.063V534.85h29.063v33.191zm0-34.29h-29.063V500.56h29.063v33.191zm0-34.31h-29.063V466.27h29.063v33.171zm0-34.29h-29.063V431.98h29.063v33.171zm0-34.29h-29.063V397.69h29.063v33.171zm0-34.28h-29.063V363.4h29.063v33.181zm0-34.29h-29.063V329.11h29.063v33.181zm0-34.29h-29.063V294.83h29.063v33.171zm30.054 308.609h-29.072v-33.17h29.072v33.17zm0-34.28h-29.072v-33.19h29.072v33.19zm0-34.29h-29.072v-33.19h29.072v33.19zm0-34.29h-29.072v-33.19h29.072v33.19zm0-34.31h-29.072v-33.17h29.072v33.17zm0-34.29h-29.072v-33.17h29.072v33.17zm0-34.29h-29.072v-33.17h29.072v33.17zm0-34.28h-29.072V363.4h29.072v33.18zm0-34.29h-29.072v-33.18h29.072v33.18zm0-34.29h-29.072v-33.17h29.072V328zm0-34.29h-29.072v-33.17h29.072v33.17zm0-34.3h-29.072v-33.16h29.072v33.16zm30.045 377.2h-29.072v-33.17h29.072v33.17zm0-34.28h-29.072v-33.19h29.072v33.19zm0-34.29h-29.072v-33.19h29.072v33.19zm0-34.29h-29.072v-33.19h29.072v33.19zm0-34.309h-29.072V466.27h29.072v33.171zm0-34.29h-29.072V431.98h29.072v33.171zm0-34.29h-29.072V397.69h29.072v33.171zm0-34.28h-29.072V363.4h29.072v33.181zm0-34.29h-29.072V329.11h29.072v33.181zm0-34.29h-29.072V294.83h29.072v33.171zm0-34.29h-29.072V260.54h29.072v33.171zm0-34.3h-29.072V226.25h29.072v33.161zm0-34.29h-29.072V191.96h29.072v33.161zm30.045 411.49h-29.072V603.44h29.072v33.171zm0-34.28h-29.072V569.14h29.072v33.191zm0-34.29h-29.072V534.85h29.072v33.191zm0-34.29h-29.072V500.56h29.072v33.191zm0-34.31h-29.072V466.27h29.072v33.171zm0-34.29h-29.072V431.98h29.072v33.171zm0-34.29h-29.072V397.69h29.072v33.171zm0-34.28h-29.072V363.4h29.072v33.181zm0-34.29h-29.072V329.11h29.072v33.181zm0-34.29h-29.072V294.83h29.072v33.171zm0-34.29h-29.072V260.54h29.072v33.171zm0-34.3h-29.072V226.25h29.072v33.161zm0-34.29h-29.072V191.96h29.072v33.161zm0-34.29h-29.072V157.66h29.072v33.171zm30.045 445.78H396.98V603.44h29.073v33.171zm0-34.28H396.98V569.14h29.073v33.191zm0-34.29H396.98V534.85h29.073v33.191zm0-34.29H396.98V500.56h29.073v33.191zm0-34.31H396.98V466.27h29.073v33.171zm0-34.29H396.98V431.98h29.073v33.171zm0-34.29H396.98V397.69h29.073v33.171zm0-34.28H396.98V363.4h29.073v33.181zm0-34.29H396.98V329.11h29.073v33.181zm0-34.29H396.98V294.83h29.073v33.171zm0-34.29H396.98V260.54h29.073v33.171zm0-34.299H396.98V226.25h29.073v33.162zm0-34.29H396.98V191.96h29.073v33.162zm0-34.29H396.98V157.66h29.073v33.172zm0-34.29H396.98V123.37h29.073v33.172zm30.045 480.068h-29.073v-33.17h29.073v33.17zm0-34.28h-29.073v-33.19h29.073v33.19zm0-34.29h-29.073v-33.19h29.073v33.19zm0-34.29h-29.073v-33.19h29.073v33.19zm0-34.31h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.28h-29.073V363.4h29.073v33.18zm0-34.29h-29.073v-33.18h29.073v33.18zm0-34.29h-29.073v-33.17h29.073V328zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.3h-29.073v-33.16h29.073v33.16zm0-34.29h-29.073v-33.16h29.073v33.16zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073v-33.17h29.073v33.17zm30.045 480.07H457.07v-33.17h29.073v33.17zm0-34.28H457.07v-33.19h29.073v33.19zm0-34.29H457.07v-33.19h29.073v33.19zm0-34.29H457.07v-33.19h29.073v33.19zm0-34.31H457.07v-33.17h29.073v33.17zm0-34.29H457.07v-33.17h29.073v33.17zm0-34.29H457.07v-33.17h29.073v33.17zm0-34.28H457.07V363.4h29.073v33.18zm0-34.29H457.07v-33.18h29.073v33.18zm0-34.29H457.07v-33.17h29.073V328zm0-34.29H457.07v-33.17h29.073v33.17zm0-34.3H457.07v-33.16h29.073v33.16zm0-34.29H457.07v-33.16h29.073v33.16zm0-34.29H457.07v-33.17h29.073v33.17zm0-34.29H457.07v-33.17h29.073v33.17zm0-34.29H457.07V89.08h29.073v33.17zm30.045 514.36h-29.073v-33.17h29.073v33.17zm0-34.28h-29.073v-33.19h29.073v33.19zm0-34.29h-29.073v-33.19h29.073v33.19zm0-34.29h-29.073v-33.19h29.073v33.19zm0-34.31h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.28h-29.073V363.4h29.073v33.18zm0-34.29h-29.073v-33.18h29.073v33.18zm0-34.29h-29.073v-33.17h29.073V328zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.3h-29.073v-33.16h29.073v33.16zm0-34.29h-29.073v-33.16h29.073v33.16zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073v-33.17h29.073v33.17zm0-34.29h-29.073V89.08h29.073v33.17zm30.045 514.361h-29.064V603.44h29.064v33.171zm0-34.28h-29.064V569.14h29.064v33.191zm0-34.29h-29.064V534.85h29.064v33.191zm0-34.29h-29.064V500.56h29.064v33.191zm0-34.31h-29.064V466.27h29.064v33.171zm0-34.29h-29.064V431.98h29.064v33.171zm0-34.29h-29.064V397.69h29.064v33.171zm0-34.28h-29.064V363.4h29.064v33.181zm0-34.29h-29.064V329.11h29.064v33.181zm0-34.29h-29.064V294.83h29.064v33.171zm0-34.29h-29.064V260.54h29.064v33.171zm0-34.3h-29.064V226.25h29.064v33.161zm0-34.29h-29.064V191.96h29.064v33.161zm0-34.29h-29.064V157.66h29.064v33.171zm0-34.29h-29.064V123.37h29.064v33.171zm0-34.29h-29.064v-33.17h29.064v33.17zm30.045 514.36h-29.064V603.44h29.064v33.171zm0-34.28h-29.064V569.14h29.064v33.191zm0-34.29h-29.064V534.85h29.064v33.191zm0-34.29h-29.064V500.56h29.064v33.191zm0-34.31h-29.064V466.27h29.064v33.171zm0-34.29h-29.064V431.98h29.064v33.171zm0-34.29h-29.064V397.69h29.064v33.171zm0-34.28h-29.064V363.4h29.064v33.181zm0-34.29h-29.064V329.11h29.064v33.181zm0-34.29h-29.064V294.83h29.064v33.171zm0-34.29h-29.064V260.54h29.064v33.171zm0-34.3h-29.064V226.25h29.064v33.161zm0-34.29h-29.064V191.96h29.064v33.161zm0-34.29h-29.064V157.66h29.064v33.171zm0-34.29h-29.064V123.37h29.064v33.171zm0-34.29h-29.064v-33.17h29.064v33.17zm30.045 514.361h-29.064V603.44h29.064v33.172zm0-34.28h-29.064V569.14h29.064v33.192zm0-34.29h-29.064V534.85h29.064v33.192zm0-34.29h-29.064V500.56h29.064v33.192zm0-34.31h-29.064V466.27h29.064v33.172zm0-34.29h-29.064V431.98h29.064v33.172zm0-34.29h-29.064V397.69h29.064v33.172zm0-34.28h-29.064V363.4h29.064v33.182zm0-34.29h-29.064V329.11h29.064v33.182zm0-34.29h-29.064V294.83h29.064v33.172zm0-34.29h-29.064V260.54h29.064v33.172zm0-34.3h-29.064V226.25h29.064v33.162zm0-34.29h-29.064V191.96h29.064v33.162zm0-34.29h-29.064V157.66h29.064v33.172zm0-34.29h-29.064V123.37h29.064v33.172zm0-34.29h-29.064V89.08h29.064v33.172zm30.045 514.36h-29.064V603.44h29.064v33.172zm0-34.28h-29.064V569.14h29.064v33.192zm0-34.29h-29.064V534.85h29.064v33.192zm0-34.29h-29.064V500.56h29.064v33.192zm0-34.31h-29.064V466.27h29.064v33.172zm0-34.29h-29.064V431.98h29.064v33.172zm0-34.29h-29.064V397.69h29.064v33.172zm0-34.28h-29.064V363.4h29.064v33.182zm0-34.29h-29.064V329.11h29.064v33.182zm0-34.29h-29.064V294.83h29.064v33.172zm0-34.29h-29.064V260.54h29.064v33.172zm0-34.3h-29.064V226.25h29.064v33.162zm0-34.29h-29.064V191.96h29.064v33.162zm0-34.29h-29.064V157.66h29.064v33.172zm0-34.29h-29.064V123.37h29.064v33.172zm30.045 480.07h-29.064V603.44h29.064v33.172zm0-34.279h-29.064V569.14h29.064v33.193zm0-34.291h-29.064V534.85h29.064v33.192zm0-34.29h-29.064V500.56h29.064v33.192zm0-34.309h-29.064V466.27h29.064v33.173zm0-34.29h-29.064V431.98h29.064v33.173zm0-34.29h-29.064V397.69h29.064v33.173zm0-34.28h-29.064V363.4h29.064v33.183zm0-34.29h-29.064V329.11h29.064v33.183zm0-34.29h-29.064V294.83h29.064v33.173zm0-34.29h-29.064V260.54h29.064v33.173zm0-34.3h-29.064V226.25h29.064v33.163zm0-34.29h-29.064V191.96h29.064v33.163zm0-34.29h-29.064V157.66h29.064v33.173zm0-34.29h-29.064V123.37h29.064v33.173zm30.045 480.07h-29.064V603.44h29.064v33.173zm0-34.28h-29.064V569.14h29.064v33.193zm0-34.29h-29.064V534.85h29.064v33.193zm0-34.29h-29.064V500.56h29.064v33.193zm0-34.31h-29.064V466.27h29.064v33.173zm0-34.29h-29.064V431.98h29.064v33.173zm0-34.29h-29.064V397.69h29.064v33.173zm0-34.28h-29.064V363.4h29.064v33.183zm0-34.29h-29.064V329.11h29.064v33.183zm0-34.29h-29.064V294.83h29.064v33.173zm0-34.29h-29.064V260.54h29.064v33.173zm0-34.3h-29.064V226.25h29.064v33.163zm0-34.29h-29.064V191.96h29.064v33.163zm0-34.29h-29.064V157.66h29.064v33.173zm0-34.29h-29.064V123.37h29.064v33.173zm30.045 480.07h-29.064V603.44h29.064v33.173zm0-34.28h-29.064V569.14h29.064v33.193zm0-34.29h-29.064V534.85h29.064v33.193zm0-34.29h-29.064V500.56h29.064v33.193zm0-34.309h-29.064V466.27h29.064v33.174zm0-34.29h-29.064V431.98h29.064v33.174zm0-34.29h-29.064V397.69h29.064v33.174zm0-34.28h-29.064V363.4h29.064v33.184zm0-34.29h-29.064V329.11h29.064v33.184zm0-34.29h-29.064V294.83h29.064v33.174zm0-34.29h-29.064V260.54h29.064v33.174zm0-34.3h-29.064V226.25h29.064v33.164zm0-34.29h-29.064V191.96h29.064v33.164zm0-34.29h-29.064V157.66h29.064v33.174zm30.044 445.78h-29.063V603.44h29.063v33.174zm0-34.28h-29.063V569.14h29.063v33.194zm0-34.29h-29.063V534.85h29.063v33.194zm0-34.29h-29.063V500.56h29.063v33.194zm0-34.31h-29.063V466.27h29.063v33.174zm0-34.29h-29.063V431.98h29.063v33.174zm0-34.29h-29.063V397.69h29.063v33.174zm0-34.28h-29.063V363.4h29.063v33.184zm0-34.29h-29.063V329.11h29.063v33.184zm0-34.29h-29.063V294.83h29.063v33.174zm0-34.29h-29.063V260.54h29.063v33.174zm0-34.3h-29.063V226.25h29.063v33.164zm0-34.29h-29.063V191.96h29.063v33.164zm0-34.29h-29.063V157.66h29.063v33.174zm30.045 411.5h-29.063V569.14h29.063v33.194zm0-34.29h-29.063V534.85h29.063v33.194zm0-34.29h-29.063V500.56h29.063v33.194zm0-34.31h-29.063V466.27h29.063v33.174zm0-34.29h-29.063V431.98h29.063v33.174zm0-34.29h-29.063V397.69h29.063v33.174zm0-34.28h-29.063V363.4h29.063v33.184zm0-34.29h-29.063V329.11h29.063v33.184zm0-34.29h-29.063V294.83h29.063v33.174zm0-34.29h-29.063V260.54h29.063v33.174zm0-34.299h-29.063V226.25h29.063v33.165zm0-34.29h-29.063V191.96h29.063v33.165zm0-34.29h-29.063V157.66h29.063v33.175zm30.045 411.5h-29.064V569.14h29.064v33.195zm0-34.291h-29.064V534.85h29.064v33.194zm0-34.29h-29.064V500.56h29.064v33.194zm0-34.309h-29.064V466.27h29.064v33.175zm0-34.29h-29.064V431.98h29.064v33.175zm0-34.29h-29.064V397.69h29.064v33.175zm0-34.28h-29.064V363.4h29.064v33.185zm0-34.29h-29.064V329.11h29.064v33.185zm0-34.29h-29.064V294.83h29.064v33.175zm0-34.29h-29.064V260.54h29.064v33.175zm0-34.3h-29.064V226.25h29.064v33.165zm0-34.29h-29.064V191.96h29.064v33.165zm0-34.29h-29.064V157.66h29.064v33.175zm30.045 377.21h-29.064V534.85h29.064v33.195zm0-34.29h-29.064V500.56h29.064v33.195zm0-34.31h-29.064V466.27h29.064v33.175zm0-34.29h-29.064V431.98h29.064v33.175zm0-34.29h-29.064V397.69h29.064v33.175zm0-34.28h-29.064V363.4h29.064v33.185zm0-34.29h-29.064V329.11h29.064v33.185zm0-34.29h-29.064V294.83h29.064v33.175zm0-34.29h-29.064V260.54h29.064v33.175zm0-34.3h-29.064V226.25h29.064v33.165zm0-34.29h-29.064V191.96h29.064v33.165zm0-34.29h-29.064V157.66h29.064v33.175zm30.045 274.32h-29.064V431.98h29.064v33.175zm0-34.29h-29.064V397.69h29.064v33.175zm0-34.28h-29.064V363.4h29.064v33.185zm0-34.29h-29.064V329.11h29.064v33.185zm0-34.29h-29.064V294.83h29.064v33.175zm0-34.29h-29.064V260.54h29.064v33.175zm0-34.299h-29.064V226.25h29.064v33.166zm0-34.29h-29.064V191.96h29.064v33.166zm0-34.29h-29.064V157.66h29.064v33.176zm0-34.29h-29.064V123.37h29.064v33.176zm30.045 274.32h-29.064V397.69h29.064v33.176zm0-34.28h-29.064V363.4h29.064v33.186zm0-34.29h-29.064V329.11h29.064v33.186zm0-34.29h-29.064V294.83h29.064v33.176zm0-34.29h-29.064V260.54h29.064v33.176zm0-34.3h-29.064V226.25h29.064v33.166zm0-34.29h-29.064V191.96h29.064v33.166zm0-34.29h-29.064V157.66h29.064v33.176zm0-34.29h-29.064V123.37h29.064v33.176zm30.054 240.04h-29.073V363.4h29.073v33.186zm0-34.29h-29.073V329.11h29.073v33.186zm0-34.29h-29.073V294.83h29.073v33.176zm0-34.29h-29.073V260.54h29.073v33.176zm0-34.3h-29.073V226.25h29.073v33.166zm0-34.29h-29.073V191.96h29.073v33.166zm0-34.29h-29.073V157.66h29.073v33.176zm0-34.29h-29.073V123.37h29.073v33.176zm31.017 171.46h-30.045V294.83h30.045v33.176zm0-34.29h-30.045V260.54h30.045v33.176zm0-34.3h-30.045V226.25h30.045v33.166zm0-34.29h-30.045V191.96h30.045v33.166zm0-34.29h-30.045V157.66h30.045v33.176zm29.072 68.58h-28.091V226.25h28.091v33.166z",
    "fill": "#fff"
  }, null)]), createVNode("g", {
    "id": "Group_17"
  }, [createVNode("g", {
    "transform": "translate(330, 200)"
  }, [createVNode("svg", {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "64",
    "height": "64",
    "viewBox": "0 0 24 24"
  }, [createVNode("path", {
    "fill": "#F4BD50",
    "d": "M5.466 2.53a.75.75 0 1 0-1.06-1.06A10.719 10.719 0 0 0 1.25 9.077a10.72 10.72 0 0 0 3.225 7.677a.75.75 0 0 0 1.05-1.071A9.22 9.22 0 0 1 2.75 9.078a9.219 9.219 0 0 1 2.716-6.547m14.211-.978a.75.75 0 1 0-1.071 1.05a9.218 9.218 0 0 1 2.644 6.475a9.219 9.219 0 0 1-2.703 6.534a.75.75 0 0 0 1.062 1.06a10.718 10.718 0 0 0 3.141-7.594c0-2.93-1.173-5.587-3.073-7.525"
  }, null), createVNode("path", {
    "fill": "#61C454",
    "d": "M8.274 5.626A.75.75 0 1 0 7.25 4.53c-1.229 1.149-2 2.75-2 4.53c0 1.8.79 3.418 2.042 4.57a.75.75 0 0 0 1.016-1.105c-.97-.89-1.558-2.118-1.558-3.466c0-1.332.575-2.546 1.524-3.434m8.529-1.045a.75.75 0 0 0-1.037 1.084c.925.885 1.484 2.083 1.484 3.396c0 1.329-.572 2.54-1.517 3.428a.75.75 0 0 0 1.027 1.093c1.223-1.148 1.99-2.746 1.99-4.52c0-1.754-.75-3.336-1.947-4.48"
  }, null), createVNode("path", {
    "fill": "#ED6A5E",
    "fill-rule": "evenodd",
    "d": "M10.833 10.624a2 2 0 1 1 2.335 0l3.547 11.149a.75.75 0 0 1-1.287.712L12 18.434l-3.427 4.05a.75.75 0 0 1-1.288-.711zm2.15 6.649l1.164 1.375l-.637-2zm-.008-2.308a.78.78 0 0 0-.047.05L12 16.113l-.928-1.096a.78.78 0 0 0-.046-.051L12 11.902zm-2.485 1.684l.527.624l-1.164 1.375z",
    "clip-rule": "evenodd"
  }, null)])]), createVNode("g", {
    "transform": "translate(50, 560)"
  }, [createVNode("svg", {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "128",
    "height": "128",
    "viewBox": "0 0 512 512"
  }, [createVNode("path", {
    "fill": "#9966CC",
    "d": "M188.287 169.428c-28.644-.076-60.908 2.228-98.457 8.01c-4.432.62-47.132 24.977-58.644 41.788c-11.512 16.812-15.45 48.813-15.45 48.813c-3.108 13.105-1.22 34.766-.353 36.872c1.17 4.56 7.78 8.387 19.133 11.154C35.84 295.008 53.29 278.6 74.39 278.574c22.092 0 40 17.91 40 40a40 40 0 0 1-.392 5.272c.59.008 1.26.024 1.82.03l239.266 1.99a40 40 0 0 1-.693-7.292c0-22.09 17.91-40 40-40c22.092 0 40 17.91 40 40c0 2.668-.266 5.33-.796 7.944l62.186.517c1.318-22.812 6.86-46.77-7.024-66.72c-5.456-7.84-31.93-22.038-99.03-32.66c-34.668-17.41-68.503-37.15-105.35-48.462c-28.41-5.635-59.26-9.668-96.09-9.765m-17.197 11.984c5.998.044 11.5.29 16.014.81l7.287 48.352c-41.43-5.093-83.647-9.663-105.964-27.5c.35-5.5 7.96-13.462 16.506-16.506c4.84-1.724 40.167-5.346 66.158-5.156zm34.625.348c25.012.264 62.032 2.69 87.502 13.94c12.202 5.65 35.174 18.874 50.537 30.55l-6.35 10.535c-41.706-1.88-97.288-4.203-120.1-6.78l-11.59-48.245zM74.39 294.574a24 24 0 0 0-24 24a24 24 0 0 0 24 24a24 24 0 0 0 24-24a24 24 0 0 0-24-24m320 0a24 24 0 0 0-24 24a24 24 0 0 0 24 24a24 24 0 0 0 24-24a24 24 0 0 0-24-24"
  }, null)])]), createVNode("g", {
    "transform": "translate(260, 360)"
  }, [createVNode("svg", {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "128",
    "height": "128",
    "viewBox": "0 0 100 100"
  }, [createVNode("path", {
    "fill": "#3D85C6",
    "d": "M19.53 28.49a3.852 3.852 0 0 0-3.533 2.343C6.706 31.364-.029 32.257 0 32.955c.027.693 6.712.997 15.928.724c.32.862.936 1.58 1.738 2.027H16.17v2.742h-1.83a.874.874 0 0 0-.875.874v1.954c0 .483.391.874.874.874h12.316c3.103.73 3.45 1.843 5.774 3.88c-.38 2.113-.94 4.42-1.378 6.414v16.973a2.092 2.092 0 1 0 4.185 0V61.21c-.048-6.9 1.066-9.69 4.905-15.031l.965-.448c0 4.146 2.866 4.395 6.908 5.32h-3.036c-.924 0-1.674.75-1.674 1.675v10c0 .924.75 1.674 1.674 1.674h10.044c.924 0 1.674-.75 1.674-1.674v-10c0-.925-.75-1.674-1.674-1.674h-3.033c4.041-.928 6.905-1.176 6.905-5.321l.965.448c4.857 5.026 4.905 8.447 4.905 15.03v8.207a2.092 2.092 0 0 0 4.185 0V52.444c-.513-2.191-1.062-4.487-1.58-6.762c2.199-2.155 3.101-2.64 5.956-3.532h12.336a.874.874 0 0 0 .874-.874v-1.954a.874.874 0 0 0-.874-.874H83.83v-2.742h-1.496a3.852 3.852 0 0 0 1.738-2.027c9.216.273 15.901-.031 15.928-.724c.029-.698-6.706-1.59-15.997-2.122a3.852 3.852 0 0 0-6.943-.302c-9.307-.283-16.103.018-16.142.716c-.029.693 6.615 1.58 15.827 2.112a3.852 3.852 0 0 0 1.839 2.347h-1.496v2.742C67.654 38.426 60.352 33.685 50 33.49c-10.003.212-18.38 4.958-27.088 4.958v-2.742h-1.496a3.852 3.852 0 0 0 1.839-2.347c9.212-.532 15.856-1.42 15.827-2.112c-.039-.698-6.835-1-16.142-.716a3.852 3.852 0 0 0-3.41-2.04M50 53.503c2.347 0 4.276 1.929 4.276 4.276c0 2.347-1.929 4.277-4.276 4.277c-2.347 0-4.278-1.93-4.278-4.277c0-2.347 1.93-4.276 4.278-4.276m0 2.51c-.99 0-1.767.776-1.767 1.766s.777 1.766 1.767 1.766c.99 0 1.765-.776 1.765-1.766S50.99 56.013 50 56.013",
    "color": "#ffffff"
  }, null)])]), createVNode("g", {
    "transform": "translate(350, 530)"
  }, [createVNode("svg", {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "48",
    "height": "48",
    "viewBox": "0 0 24 24"
  }, [createVNode("path", {
    "fill": "none",
    "stroke": "#ffffff",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    "d": "M14 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0a2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0m-8 0h4m4 0h4m-4.5-6.5l5 5m-13 3l5 5m3 0l5-5m-8-8l-5 5M12 6v4m0 4v4"
  }, null)])]), createVNode("path", {
    "id": "Path",
    "opacity": 0.1,
    "d": "M843.861 180.89v245.63a3.963 3.963 0 01-3.97 3.96h-348.19v13.77a5.087 5.087 0 01-5.08 5.08h-80.73a5.087 5.087 0 01-5.08-5.08v-58.6a5.087 5.087 0 015.08-5.08h34.32V180.89c.001-5.666 4.594-10.259 10.26-10.26h383.13c5.664.005 10.255 4.596 10.26 10.26z"
  }, null), createVNode("path", {
    "id": "Path_2",
    "d": "M832.681 169.71v245.63a3.963 3.963 0 01-3.97 3.96h-395.71a3.963 3.963 0 01-3.97-3.96V169.71c.001-5.666 4.594-10.259 10.26-10.26h383.13c5.664.005 10.255 4.596 10.26 10.26h0z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("g", {
    "id": "Window_Controls",
    "clip-path": "url(#clip1)"
  }, [createVNode("g", {
    "id": "Close"
  }, [createVNode("circle", {
    "cx": 444.667,
    "cy": 170.667,
    "r": 4.667,
    "fill": "#ED6A5E"
  }, null), createVNode("circle", {
    "cx": 444.667,
    "cy": 170.667,
    "r": 4.278,
    "stroke": "#000",
    "stroke-opacity": 0.1,
    "stroke-width": 0.778
  }, null)]), createVNode("g", {
    "id": "Minimize"
  }, [createVNode("circle", {
    "cx": 460.222,
    "cy": 170.667,
    "r": 4.667,
    "fill": "#F4BD50"
  }, null), createVNode("circle", {
    "cx": 460.222,
    "cy": 170.667,
    "r": 4.278,
    "stroke": "#000",
    "stroke-opacity": 0.1,
    "stroke-width": 0.778
  }, null)]), createVNode("g", {
    "id": "Zoom"
  }, [createVNode("circle", {
    "cx": 475.778,
    "cy": 170.667,
    "r": 4.667,
    "fill": "#61C454"
  }, null), createVNode("circle", {
    "cx": 475.778,
    "cy": 170.667,
    "r": 4.278,
    "stroke": "#000",
    "stroke-opacity": 0.1,
    "stroke-width": 0.778
  }, null)])]), createVNode("path", {
    "id": "Path_3",
    "d": "M429.267 182.626h403.34",
    "stroke": "#fff"
  }, null), createVNode("path", {
    "id": "Shape_2",
    "d": "M681.371 247.96h-1.92a.762.762 0 01-.7-.51c-.06-.17-.14-.35-.22-.53a.766.766 0 01.14-.85l1.36-1.35a.9.9 0 000-1.27l-2.21-2.21a.9.9 0 00-1.27 0l-1.37 1.37a.75.75 0 01-.82.15c-.19-.08-.4-.17-.58-.24a.727.727 0 01-.47-.69v-1.93a.895.895 0 00-.9-.9h-3.13a.896.896 0 00-.89.9v1.91a.78.78 0 01-.5.71 5.352 5.352 0 00-.56.23.743.743 0 01-.85-.14l-1.36-1.35a.9.9 0 00-1.27 0l-2.21 2.22a.9.9 0 00.01 1.27l1.37 1.36c.214.216.277.54.16.82-.09.19-.17.4-.24.58a.75.75 0 01-.69.48h-1.94a.895.895 0 00-.89.9l.01 3.12a.898.898 0 00.9.9h1.91a.75.75 0 01.71.5c.065.177.138.351.22.52a.778.778 0 01-.14.86l-1.35 1.36a.9.9 0 000 1.27l2.21 2.2a.9.9 0 001.27 0l1.36-1.37a.74.74 0 01.82-.16c.2.09.41.17.59.24a.74.74 0 01.47.69v1.93a.901.901 0 00.9.9h3.13a.893.893 0 00.89-.9v-1.92a.757.757 0 01.5-.7c.18-.07.36-.15.53-.22a.728.728 0 01.85.14l1.36 1.35a.9.9 0 001.27 0l2.21-2.21a.9.9 0 000-1.27l-1.37-1.37a.737.737 0 01-.16-.82c.2-.46.41-1.02.42-1.05h2.45a.9.9 0 00.89-.9v-3.13a.885.885 0 00-.9-.89zm-6.17 3.26a4.426 4.426 0 01-8.219 1.366 4.427 4.427 0 118.219-1.366z",
    "fill": "#fff"
  }, null), createVNode("path", {
    "id": "Rectangle",
    "d": "M681.397 202.296h-21.102a2.433 2.433 0 00-2.433 2.433v16.572a2.433 2.433 0 002.433 2.433h21.102a2.434 2.434 0 002.434-2.433v-16.572a2.433 2.433 0 00-2.434-2.433z",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("g", {
    "id": "switch-1"
  }, [createVNode("path", {
    "id": "Rectangle_2",
    "d": "M808.454 335.456h-22.843a7.721 7.721 0 000 15.443h22.843a7.721 7.721 0 000-15.443z",
    "stroke": "#61C454",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_3",
    "class": "switchToggle1",
    "d": "M785.832 334.906h-.228a8.27 8.27 0 100 16.542h.228a8.27 8.27 0 008.27-8.271 8.27 8.27 0 00-8.27-8.271z",
    "fill": "#61C454"
  }, null)]), createVNode("g", {
    "id": "switch-3"
  }, [createVNode("path", {
    "id": "Rectangle_4",
    "d": "M808.454 390.204h-22.843a7.721 7.721 0 000 15.442h22.843a7.721 7.721 0 000-15.442z",
    "stroke": "#ED6A5E",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_5",
    "class": "switchToggle2",
    "d": "M785.824 390.204h-.213a7.721 7.721 0 000 15.442h.213a7.721 7.721 0 000-15.442z",
    "fill": "#ED6A5E"
  }, null)]), createVNode("g", {
    "id": "switch-2"
  }, [createVNode("path", {
    "id": "Rectangle_6",
    "d": "M785.611 377.968h22.843a7.721 7.721 0 007.721-7.721v0a7.721 7.721 0 00-7.721-7.721h-22.843a7.721 7.721 0 00-7.721 7.721v0a7.721 7.721 0 007.721 7.721z",
    "stroke": "#F4BD50",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_7",
    "class": "switchToggle3",
    "d": "M808.455 362.421h-.215a7.826 7.826 0 000 15.652h.215a7.826 7.826 0 000-15.652z",
    "fill": "#F4BD50"
  }, null)]), createVNode("path", {
    "id": "Rectangle_8",
    "d": "M755.614 290.97h-95.973a3.424 3.424 0 100 6.847h95.973a3.424 3.424 0 000-6.847z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_9",
    "d": "M682.617 304.353h-22.976a3.423 3.423 0 100 6.847h22.976a3.424 3.424 0 000-6.847z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_10",
    "d": "M707.558 304.353h-10.81a3.423 3.423 0 100 6.847h10.81a3.424 3.424 0 000-6.847z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_11",
    "d": "M731.586 304.353h-10.81a3.423 3.423 0 100 6.847h10.81a3.424 3.424 0 000-6.847z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_12",
    "d": "M719.126 335.456h-59.684a2.161 2.161 0 100 4.323h59.684a2.162 2.162 0 000-4.323z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_13",
    "d": "M698.698 343.828h-39.642c-.981 0-1.775.795-1.775 1.776v.771c0 .981.794 1.776 1.775 1.776h39.642c.981 0 1.776-.795 1.776-1.776v-.771c0-.981-.795-1.776-1.776-1.776z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_14",
    "d": "M719.126 362.526h-59.684a2.16 2.16 0 100 4.322h59.684a2.161 2.161 0 100-4.322z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_15",
    "d": "M698.698 370.898h-39.642c-.981 0-1.775.795-1.775 1.775v.772c0 .981.794 1.775 1.775 1.775h39.642c.981 0 1.776-.794 1.776-1.775v-.772c0-.98-.795-1.775-1.776-1.775z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_16",
    "d": "M719.126 390.204h-59.684a2.16 2.16 0 100 4.322h59.684a2.161 2.161 0 100-4.322z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Rectangle_17",
    "d": "M698.698 398.576h-39.642c-.981 0-1.775.795-1.775 1.775v.772c0 .981.794 1.775 1.775 1.775h39.642c.981 0 1.776-.794 1.776-1.775v-.772c0-.98-.795-1.775-1.776-1.775z",
    "fill": "#E3E8E8"
  }, null), createVNode("path", {
    "id": "Path_4",
    "d": "M429 183h212v236H432.97a3.965 3.965 0 01-3.97-3.961V183z",
    "fill": "#111827"
  }, null), createVNode("g", {
    "id": "Group_2",
    "opacity": 0.1,
    "fill": "#111827"
  }, [createVNode("path", {
    "id": "Oval",
    "opacity": 0.1,
    "d": "M446.407 208.264a3.124 3.124 0 100-6.249 3.124 3.124 0 000 6.249z"
  }, null), createVNode("path", {
    "id": "Oval_2",
    "opacity": 0.1,
    "d": "M446.407 225.692a3.124 3.124 0 100-6.249 3.124 3.124 0 000 6.249z"
  }, null), createVNode("path", {
    "id": "Oval_3",
    "opacity": 0.1,
    "d": "M446.407 243.12a3.124 3.124 0 100-6.249 3.124 3.124 0 000 6.249z"
  }, null), createVNode("path", {
    "id": "Oval_4",
    "opacity": 0.1,
    "d": "M446.407 260.548a3.124 3.124 0 100-6.249 3.124 3.124 0 000 6.249z"
  }, null), createVNode("path", {
    "id": "Oval_5",
    "opacity": 0.1,
    "d": "M446.407 277.976a3.124 3.124 0 100-6.249 3.124 3.124 0 000 6.249z"
  }, null), createVNode("path", {
    "id": "Oval_6",
    "opacity": 0.1,
    "d": "M446.407 295.404a3.125 3.125 0 10-.001-6.25 3.125 3.125 0 00.001 6.25z"
  }, null), createVNode("path", {
    "id": "Oval_7",
    "opacity": 0.1,
    "d": "M446.407 312.832a3.125 3.125 0 10-.001-6.25 3.125 3.125 0 00.001 6.25z"
  }, null), createVNode("path", {
    "id": "Oval_8",
    "opacity": 0.1,
    "d": "M446.407 330.26a3.125 3.125 0 10-.001-6.25 3.125 3.125 0 00.001 6.25z"
  }, null), createVNode("path", {
    "id": "Oval_9",
    "opacity": 0.1,
    "d": "M446.407 347.688a3.125 3.125 0 10-.001-6.25 3.125 3.125 0 00.001 6.25z"
  }, null), createVNode("path", {
    "id": "Oval_10",
    "opacity": 0.1,
    "d": "M446.407 365.116a3.125 3.125 0 10-.001-6.25 3.125 3.125 0 00.001 6.25z"
  }, null), createVNode("path", {
    "id": "Oval_11",
    "opacity": 0.1,
    "d": "M446.407 382.543a3.124 3.124 0 100-6.248 3.124 3.124 0 000 6.248z"
  }, null), createVNode("path", {
    "id": "Oval_12",
    "opacity": 0.1,
    "d": "M446.407 399.971a3.124 3.124 0 100-6.249 3.124 3.124 0 000 6.249z"
  }, null)]), createVNode("path", {
    "id": "Path_5",
    "class": "cog",
    "d": "M630.265 547.319l-10.151-5.131a70.693 70.693 0 00-9.268-22.393l3.533-10.822a3.89 3.89 0 00-.715-4.483l-9.805-9.804a3.907 3.907 0 00-4.505-.727l-10.8 3.544a70.56 70.56 0 00-22.393-9.268l-5.154-10.151a3.875 3.875 0 00-3.678-2.672h-13.862a3.906 3.906 0 00-3.701 2.672l-5.131 10.151a70.56 70.56 0 00-22.393 9.268l-10.822-3.533a3.854 3.854 0 00-4.483.716l-9.804 9.804a3.907 3.907 0 00-.738 4.494l3.555 10.811a70.716 70.716 0 00-9.268 22.393l-10.162 5.154a3.855 3.855 0 00-2.661 3.678v13.862a3.904 3.904 0 002.661 3.701l10.162 5.132a70.711 70.711 0 009.268 22.392l-3.533 10.822a3.854 3.854 0 00.716 4.483l9.804 9.805a3.908 3.908 0 004.494.737l10.811-3.555a70.536 70.536 0 0022.393 9.268l5.154 10.162a3.853 3.853 0 003.678 2.661h13.862a3.904 3.904 0 003.701-2.661l5.131-10.162a70.536 70.536 0 0022.393-9.268l10.822 3.533a3.89 3.89 0 004.483-.715l9.805-9.805a3.907 3.907 0 00.726-4.505l-3.544-10.8a70.693 70.693 0 009.268-22.393l10.151-5.154a3.874 3.874 0 002.672-3.678V551.02a3.906 3.906 0 00-2.672-3.701z",
    "fill": "#111827"
  }, null), createVNode("path", {
    "fillRule": "evenodd",
    "clipRule": "evenodd",
    "class": "cog",
    "d": "M630.265 547.319l-10.151-5.131a70.693 70.693 0 00-9.268-22.393l3.533-10.822a3.89 3.89 0 00-.715-4.483l-9.805-9.804a3.907 3.907 0 00-4.505-.727l-10.8 3.544a70.56 70.56 0 00-22.393-9.268l-5.154-10.151a3.875 3.875 0 00-3.678-2.672h-13.862a3.906 3.906 0 00-3.701 2.672l-5.131 10.151a70.56 70.56 0 00-22.393 9.268l-10.822-3.533a3.854 3.854 0 00-4.483.716l-9.804 9.804a3.907 3.907 0 00-.738 4.494l3.555 10.811a70.716 70.716 0 00-9.268 22.393l-10.162 5.154a3.855 3.855 0 00-2.661 3.678v13.862a3.904 3.904 0 002.661 3.701l10.162 5.132a70.711 70.711 0 009.268 22.392l-3.533 10.822a3.854 3.854 0 00.716 4.483l9.804 9.805a3.908 3.908 0 004.494.737l10.811-3.555a70.536 70.536 0 0022.393 9.268l5.154 10.162a3.853 3.853 0 003.678 2.661h13.862a3.904 3.904 0 003.701-2.661l5.131-10.162a70.536 70.536 0 0022.393-9.268l10.822 3.533a3.89 3.89 0 004.483-.715l9.805-9.805a3.907 3.907 0 00.726-4.505l-3.544-10.8a70.693 70.693 0 009.268-22.393l10.151-5.154a3.874 3.874 0 002.672-3.678V551.02a3.906 3.906 0 00-2.672-3.701zm0 0l-10.151-5.131a70.693 70.693 0 00-9.268-22.393l3.533-10.822a3.89 3.89 0 00-.715-4.483l-9.805-9.804a3.907 3.907 0 00-4.505-.727l-10.8 3.544a70.56 70.56 0 00-22.393-9.268l-5.154-10.151a3.875 3.875 0 00-3.678-2.672h-13.862a3.906 3.906 0 00-3.701 2.672l-5.131 10.151a70.56 70.56 0 00-22.393 9.268l-10.822-3.533a3.854 3.854 0 00-4.483.716l-9.804 9.804a3.907 3.907 0 00-.738 4.494l3.555 10.811a70.716 70.716 0 00-9.268 22.393l-10.162 5.154a3.855 3.855 0 00-2.661 3.678v13.862a3.904 3.904 0 002.661 3.701l10.162 5.132a70.711 70.711 0 009.268 22.392l-3.533 10.822a3.854 3.854 0 00.716 4.483l9.804 9.805a3.908 3.908 0 004.494.737l10.811-3.555a70.536 70.536 0 0022.393 9.268l5.154 10.162a3.853 3.853 0 003.678 2.661h13.862a3.904 3.904 0 003.701-2.661l5.131-10.162a70.536 70.536 0 0022.393-9.268l10.822 3.533a3.89 3.89 0 004.483-.715l9.805-9.805a3.907 3.907 0 00.726-4.505l-3.544-10.8a70.693 70.693 0 009.268-22.393l10.151-5.154a3.874 3.874 0 002.672-3.678V551.02a3.906 3.906 0 00-2.672-3.701zm-46.104 23.287c-.28.772-.604 1.532-.939 2.281a36.188 36.188 0 01-17.888 17.888 32.16 32.16 0 01-2.292.95 36.2 36.2 0 01-25.288 0 32.16 32.16 0 01-2.292-.95 36.186 36.186 0 01-17.887-17.888 33.01 33.01 0 01-.939-2.281 36.052 36.052 0 010-25.299c.279-.772.592-1.543.939-2.292a36.184 36.184 0 0117.887-17.887 33.01 33.01 0 012.281-.939 36.083 36.083 0 0125.31 0 33.01 33.01 0 012.281.939 36.186 36.186 0 0117.888 17.887c.346.749.659 1.52.939 2.292a36.063 36.063 0 010 25.299z",
    "stroke": "#fff",
    "stroke-width": 1.342
  }, null), createVNode("g", {
    "id": "Path_6"
  }, [createVNode("path", {
    "d": "M972.646 548.283v-33.912h-408.47v33.912",
    "fill": "#111827"
  }, null), createVNode("path", {
    "d": "M972.646 548.283v-33.912h-408.47v33.912",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null)]), createVNode("g", {
    "id": "Path_7"
  }, [createVNode("path", {
    "d": "M972.646 581.821V547.91H535.855v33.911",
    "fill": "#111827"
  }, null), createVNode("path", {
    "d": "M972.646 581.821V547.91H535.855v33.911",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null)]), createVNode("g", {
    "id": "Path_8"
  }, [createVNode("path", {
    "d": "M972.646 615.36v-33.911H507.533v33.911",
    "fill": "#111827"
  }, null), createVNode("path", {
    "d": "M972.646 615.36v-33.911H507.533v33.911",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null)]), createVNode("g", {
    "id": "Path_9"
  }, [createVNode("mask", {
    "id": "path-53-inside-1",
    "fill": "#fff"
  }, [createVNode("path", {
    "d": "M973 649v-34H479v34"
  }, null)]), createVNode("path", {
    "d": "M973 649v-34H479v34",
    "fill": "#111827"
  }, null), createVNode("path", {
    "d": "M973 615h1.118v-1.118H973V615zm-494 0v-1.118h-1.118V615H479zm495.118 34v-34h-2.236v34h2.236zM973 613.882H479v2.236h494v-2.236zM477.882 615v34h2.236v-34h-2.236z",
    "fill": "#fff",
    "mask": "url(#path-53-inside-1)"
  }, null)]), createVNode("path", {
    "id": "Path_10",
    "d": "M593.47 507.772h109.088v2.242a3.644 3.644 0 01-3.645 3.644H597.115a3.644 3.644 0 01-3.645-3.644v-2.242z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Path_11",
    "d": "M607.516 450.62h80.995a4.86 4.86 0 014.86 4.86v52.242h-90.715V455.48a4.86 4.86 0 014.86-4.86z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_18",
    "opacity": 0.3,
    "d": "M685.425 456.694h-74.96c-.618 0-1.118.5-1.118 1.118v42.494c0 .617.5 1.118 1.118 1.118h74.96c.617 0 1.118-.501 1.118-1.118v-42.494c0-.618-.501-1.118-1.118-1.118z",
    "fill": "#6882BA"
  }, null), createVNode("path", {
    "id": "Rectangle_19",
    "d": "M644.281 461.614h-28.752c-1.025 0-1.855.83-1.855 1.855v0c0 1.025.83 1.856 1.855 1.856h28.752a1.856 1.856 0 001.856-1.856v0a1.855 1.855 0 00-1.856-1.855z",
    "fill": "#fff",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_20",
    "d": "M664.484 461.614h-10.598c-1.024 0-1.855.83-1.855 1.855v0c0 1.025.831 1.856 1.855 1.856h10.598a1.856 1.856 0 001.855-1.856v0a1.855 1.855 0 00-1.855-1.855z",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Path_12",
    "d": "M686.541 475.61h-26.08a1.86 1.86 0 010-3.72h26.08",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_21",
    "d": "M640.767 475.605h9.992a1.855 1.855 0 100-3.71h-9.992a1.855 1.855 0 100 3.71z",
    "fill": "#fff",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Path_13",
    "d": "M609.411 471.89h21.75a1.86 1.86 0 010 3.72h-21.75",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_22",
    "d": "M637.898 492.456h-23.737a1.855 1.855 0 000 3.711h23.737a1.856 1.856 0 100-3.711z",
    "fill": "#fff",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_23",
    "d": "M663.115 492.456h-15.612a1.856 1.856 0 000 3.711h15.612a1.856 1.856 0 100-3.711z",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_24",
    "d": "M619.417 485.886h16.292a1.855 1.855 0 100-3.711h-16.292a1.855 1.855 0 000 3.711z",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Path_14",
    "d": "M609.411 482.18h1.77a1.855 1.855 0 110 3.71h-1.77",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_25",
    "d": "M648.319 482.175h-3.152a1.856 1.856 0 00-1.855 1.856v0c0 1.025.831 1.855 1.855 1.855h3.152c1.024 0 1.855-.83 1.855-1.855v0a1.856 1.856 0 00-1.855-1.856z",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_26",
    "d": "M675.234 482.175h-19.992a1.856 1.856 0 00-1.856 1.856v0c0 1.025.831 1.855 1.856 1.855h19.992c1.024 0 1.855-.83 1.855-1.855v0a1.856 1.856 0 00-1.855-1.856z",
    "stroke": "#fff",
    "stroke-width": 0.838
  }, null), createVNode("path", {
    "id": "Rectangle_27",
    "d": "M477.206 201.54h-6.473a2.69 2.69 0 100 5.38h6.473a2.69 2.69 0 000-5.38z",
    "fill": "#5DC8DD"
  }, null), createVNode("path", {
    "id": "Rectangle_28",
    "d": "M534.081 201.54H492.4a2.69 2.69 0 100 5.38h41.681a2.69 2.69 0 000-5.38z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_29",
    "d": "M563.367 201.54h-15.362a2.69 2.69 0 100 5.38h15.362a2.69 2.69 0 000-5.38z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_30",
    "d": "M625.252 216.444h-67.711a2.69 2.69 0 100 5.379h67.711a2.69 2.69 0 100-5.379z",
    "fill": "#F16D6E"
  }, null), createVNode("path", {
    "id": "Rectangle_31",
    "d": "M528.986 221.823h14.485a2.69 2.69 0 100-5.379h-14.485a2.69 2.69 0 100 5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_32",
    "d": "M470.733 221.823h44.329a2.69 2.69 0 000-5.379h-44.329a2.69 2.69 0 100 5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_33",
    "d": "M477.206 246.251h-6.473a2.69 2.69 0 000 5.38h6.473a2.69 2.69 0 000-5.38z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_34",
    "d": "M524.828 246.251h-34.412a2.69 2.69 0 000 5.38h34.412a2.69 2.69 0 000-5.38z",
    "fill": "#F16D6E"
  }, null), createVNode("path", {
    "id": "Rectangle_35",
    "d": "M561.384 246.251h-22.632a2.69 2.69 0 000 5.38h22.632a2.69 2.69 0 000-5.38z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_36",
    "d": "M600.127 261.155h-67.38a2.69 2.69 0 100 5.379h67.38a2.69 2.69 0 100-5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_37",
    "d": "M517.085 266.534h4.568a2.69 2.69 0 100-5.379h-4.568a2.69 2.69 0 100 5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_38",
    "d": "M470.733 266.534h34.411a2.69 2.69 0 100-5.379h-34.411a2.69 2.69 0 100 5.379z",
    "fill": "#5DC8DD"
  }, null), createVNode("path", {
    "id": "Rectangle_39",
    "d": "M498.036 236.727h23.617a2.69 2.69 0 000-5.379h-23.617a2.69 2.69 0 100 5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_40",
    "d": "M470.733 236.727h15.362a2.69 2.69 0 100-5.379h-15.362a2.69 2.69 0 100 5.379z",
    "fill": "#F16D6E"
  }, null), createVNode("path", {
    "id": "Rectangle_41",
    "d": "M539.934 231.348h-4.569a2.69 2.69 0 000 5.379h4.569a2.69 2.69 0 000-5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_42",
    "d": "M578.951 231.348h-28.982a2.69 2.69 0 000 5.379h28.982a2.69 2.69 0 100-5.379z",
    "fill": "#5DC8DD"
  }, null), createVNode("path", {
    "id": "Rectangle_43",
    "d": "M477.206 320.783h-6.473a2.69 2.69 0 100 5.379h6.473a2.69 2.69 0 000-5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_44",
    "d": "M524.828 320.783h-34.412a2.69 2.69 0 000 5.379h34.412a2.69 2.69 0 000-5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_45",
    "d": "M559.4 320.783h-22.632a2.69 2.69 0 000 5.379H559.4a2.69 2.69 0 100-5.379z",
    "fill": "#5DC8DD"
  }, null), createVNode("path", {
    "id": "Rectangle_46",
    "d": "M498.036 311.258h23.617a2.69 2.69 0 100-5.379h-23.617a2.69 2.69 0 100 5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_47",
    "d": "M470.733 311.258h15.362a2.69 2.69 0 100-5.379h-15.362a2.69 2.69 0 100 5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_48",
    "d": "M537.95 305.879h-4.568a2.69 2.69 0 100 5.379h4.568a2.69 2.69 0 100-5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_49",
    "d": "M576.967 305.879h-28.981a2.69 2.69 0 100 5.379h28.981a2.69 2.69 0 100-5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_50",
    "d": "M477.206 290.963h-6.473a2.69 2.69 0 100 5.379h6.473a2.69 2.69 0 000-5.379z",
    "fill": "#EFC01A"
  }, null), createVNode("path", {
    "id": "Rectangle_51",
    "d": "M569.815 290.963h-79.399a2.69 2.69 0 000 5.379h79.399a2.69 2.69 0 000-5.379z",
    "fill": "#F16D6E"
  }, null), createVNode("path", {
    "id": "Rectangle_52",
    "d": "M604.387 290.963h-22.632a2.69 2.69 0 000 5.379h22.632a2.69 2.69 0 100-5.379z",
    "fill": "#5DC8DD"
  }, null), createVNode("path", {
    "id": "Rectangle_53",
    "d": "M581.2 276.059h-48.453a2.69 2.69 0 100 5.379H581.2a2.69 2.69 0 100-5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Rectangle_54",
    "d": "M498.036 281.438h23.617a2.69 2.69 0 100-5.379h-23.617a2.69 2.69 0 100 5.379z",
    "fill": "#5DC8DD"
  }, null), createVNode("path", {
    "id": "Rectangle_55",
    "d": "M470.733 281.438h15.362a2.69 2.69 0 100-5.379h-15.362a2.69 2.69 0 100 5.379z",
    "fill": "#37BA99"
  }, null), createVNode("path", {
    "id": "Path_15",
    "opacity": 0.1,
    "d": "M491.701 385.65v33.65h-58.7a3.967 3.967 0 01-3.97-3.96v-34.77h57.59a5.087 5.087 0 015.08 5.08z"
  }, null), createVNode("path", {
    "id": "Oval_13",
    "d": "M571.835 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_14",
    "d": "M583.239 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_15",
    "d": "M594.644 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_16",
    "d": "M606.049 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_17",
    "d": "M617.453 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_18",
    "d": "M628.858 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_19",
    "d": "M640.262 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_20",
    "d": "M651.667 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_21",
    "d": "M663.072 522.13a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_22",
    "d": "M674.477 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_23",
    "d": "M685.881 522.13a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_24",
    "d": "M697.286 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_25",
    "d": "M708.691 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_26",
    "d": "M720.095 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_27",
    "d": "M731.5 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_28",
    "d": "M742.905 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_29",
    "d": "M754.309 522.13a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_30",
    "d": "M765.714 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_31",
    "d": "M777.118 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_32",
    "d": "M788.523 522.13a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_33",
    "d": "M799.928 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_34",
    "d": "M811.332 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_35",
    "d": "M571.835 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_36",
    "d": "M583.239 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_37",
    "d": "M594.644 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_38",
    "d": "M606.049 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_39",
    "d": "M617.453 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_40",
    "d": "M628.858 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_41",
    "d": "M640.262 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_42",
    "d": "M651.667 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_43",
    "d": "M663.072 532.982a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_44",
    "d": "M674.477 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_45",
    "d": "M685.881 532.982a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_46",
    "d": "M697.286 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_47",
    "d": "M708.691 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_48",
    "d": "M720.095 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_49",
    "d": "M731.5 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_50",
    "d": "M742.905 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_51",
    "d": "M754.309 532.982a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_52",
    "d": "M765.714 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_53",
    "d": "M777.118 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_54",
    "d": "M788.523 532.982a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_55",
    "d": "M799.928 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_56",
    "d": "M811.332 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_57",
    "d": "M571.835 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_58",
    "d": "M583.239 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_59",
    "d": "M594.644 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_60",
    "d": "M606.049 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_61",
    "d": "M617.453 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_62",
    "d": "M628.858 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_63",
    "d": "M640.262 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_64",
    "d": "M651.667 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_65",
    "d": "M663.072 543.835a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_66",
    "d": "M674.477 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_67",
    "d": "M685.881 543.835a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_68",
    "d": "M697.286 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_69",
    "d": "M708.691 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_70",
    "d": "M720.095 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_71",
    "d": "M731.5 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_72",
    "d": "M742.905 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_73",
    "d": "M754.309 543.835a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_74",
    "d": "M765.714 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_75",
    "d": "M777.118 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_76",
    "d": "M788.523 543.835a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_77",
    "d": "M799.928 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_78",
    "d": "M811.332 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_79",
    "d": "M823.105 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_80",
    "d": "M834.509 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_81",
    "d": "M845.914 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_82",
    "d": "M857.319 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_83",
    "d": "M868.723 522.13a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_84",
    "d": "M880.128 522.13a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_85",
    "d": "M891.533 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_86",
    "d": "M902.938 522.13a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_87",
    "d": "M823.105 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_88",
    "d": "M834.509 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_89",
    "d": "M845.914 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_90",
    "d": "M857.319 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_91",
    "d": "M868.723 532.982a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_92",
    "d": "M880.128 532.982a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_93",
    "d": "M891.533 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_94",
    "d": "M902.938 532.982a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_95",
    "d": "M823.105 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_96",
    "d": "M834.509 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_97",
    "d": "M845.914 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_98",
    "d": "M857.319 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_99",
    "d": "M868.723 543.835a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_100",
    "d": "M880.128 543.835a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_101",
    "d": "M891.533 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_102",
    "d": "M902.938 543.835a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_103",
    "d": "M515.789 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_104",
    "d": "M527.194 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_105",
    "d": "M538.598 589.064a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_106",
    "d": "M550.003 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_107",
    "d": "M561.407 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_108",
    "d": "M572.812 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_109",
    "d": "M584.217 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_110",
    "d": "M595.621 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_111",
    "d": "M607.026 589.064a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_112",
    "d": "M618.431 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_113",
    "d": "M629.835 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_114",
    "d": "M641.24 589.064a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_115",
    "d": "M652.645 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_116",
    "d": "M664.049 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_117",
    "d": "M675.454 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_118",
    "d": "M686.859 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_119",
    "d": "M698.263 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_120",
    "d": "M709.668 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_121",
    "d": "M721.073 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_122",
    "d": "M732.477 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_123",
    "d": "M743.882 589.064a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_124",
    "d": "M755.287 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_125",
    "d": "M515.789 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_126",
    "d": "M527.194 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_127",
    "d": "M538.598 599.917a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_128",
    "d": "M550.003 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_129",
    "d": "M561.407 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_130",
    "d": "M572.812 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_131",
    "d": "M584.217 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_132",
    "d": "M595.621 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_133",
    "d": "M607.026 599.917a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_134",
    "d": "M618.431 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_135",
    "d": "M629.835 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_136",
    "d": "M641.24 599.917a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_137",
    "d": "M652.645 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_138",
    "d": "M664.049 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_139",
    "d": "M675.454 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_140",
    "d": "M686.859 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_141",
    "d": "M698.263 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_142",
    "d": "M709.668 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_143",
    "d": "M721.073 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_144",
    "d": "M732.477 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_145",
    "d": "M743.882 599.917a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_146",
    "d": "M755.287 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_147",
    "d": "M515.789 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_148",
    "d": "M527.194 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_149",
    "d": "M538.598 610.769a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_150",
    "d": "M550.003 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_151",
    "d": "M561.407 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_152",
    "d": "M572.812 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_153",
    "d": "M584.217 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_154",
    "d": "M595.621 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_155",
    "d": "M607.026 610.769a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_156",
    "d": "M618.431 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_157",
    "d": "M629.835 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_158",
    "d": "M641.24 610.769a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_159",
    "d": "M652.645 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_160",
    "d": "M664.049 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_161",
    "d": "M675.454 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_162",
    "d": "M686.859 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_163",
    "d": "M698.263 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_164",
    "d": "M709.668 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_165",
    "d": "M721.073 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_166",
    "d": "M732.477 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_167",
    "d": "M743.882 610.769a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_168",
    "d": "M755.287 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_169",
    "d": "M767.059 589.064a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_170",
    "d": "M778.464 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_171",
    "d": "M789.868 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_172",
    "d": "M801.273 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_173",
    "d": "M812.678 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_174",
    "d": "M824.082 589.064a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_175",
    "d": "M835.487 589.064a1.657 1.657 0 000-3.311 1.655 1.655 0 000 3.311z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_176",
    "d": "M846.892 589.064a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_177",
    "d": "M767.059 599.917a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_178",
    "d": "M778.464 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_179",
    "d": "M789.868 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_180",
    "d": "M801.273 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_181",
    "d": "M812.678 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_182",
    "d": "M824.082 599.917a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_183",
    "d": "M835.487 599.917a1.657 1.657 0 10-.001-3.313 1.657 1.657 0 00.001 3.313z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_184",
    "d": "M846.892 599.917a1.656 1.656 0 10-.002-3.312 1.656 1.656 0 00.002 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_185",
    "d": "M767.059 610.769a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_186",
    "d": "M778.464 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_187",
    "d": "M789.868 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_188",
    "d": "M801.273 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_189",
    "d": "M812.678 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_190",
    "d": "M824.082 610.769a1.655 1.655 0 10.001-3.31 1.655 1.655 0 00-.001 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_191",
    "d": "M835.487 610.769a1.656 1.656 0 100-3.312 1.656 1.656 0 000 3.312z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Oval_192",
    "d": "M846.892 610.769a1.655 1.655 0 100-3.31 1.655 1.655 0 000 3.31z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "id": "Path_16",
    "d": "M913.913 547.851h.5v-33.539h58.292v134.087H829.447v-33.47h28.322V581.39h28.322v-33.539h27.822z",
    "stroke": "#fff"
  }, null), createVNode("path", {
    "id": "Rectangle_56",
    "opacity": 0.3,
    "d": "M408.805 499.571l-18.053-7.147-7.146 18.053 18.052 7.147 7.147-18.053z",
    "stroke": "#B5B5B5",
    "stroke-width": 1.677
  }, null), createVNode("path", {
    "id": "Rectangle_57",
    "opacity": 0.3,
    "d": "M408.23 547.302l-66.734 12.678 12.679 66.734 66.734-12.679-12.679-66.733z",
    "stroke": "#B5B5B5",
    "stroke-width": 1.677
  }, null), createVNode("path", {
    "id": "Path_17",
    "d": "M369.257 590.8l-25.443 14.81-18.185-31.24 43.628 16.43z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Path_18",
    "d": "M399.729 590.476l19.923 7.096",
    "stroke": "#231F20",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_58",
    "d": "M400.173 590.474H327.07v58.425h73.103v-58.425z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_59",
    "d": "M426.636 590.474h-26.462v58.425h26.462v-58.425z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Rectangle_60",
    "d": "M367.932 590.476h-13.091v29.745h13.091v-29.745z",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Path_19",
    "d": "M400.174 590.474v6.708l-15.652 16.937H327.07v-16.937l73.104-6.708z",
    "fill": "#fff"
  }, null), createVNode("path", {
    "id": "Path_20",
    "d": "M384.525 607.417h-73.108l15.651-16.941h73.108l-15.651 16.941z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Path_21",
    "d": "M426.636 597.383v16.736h-10.688l-15.651-16.937.246-6.216 25.903 6.216.19.201z",
    "fill": "#fff"
  }, null), createVNode("path", {
    "id": "Path_22",
    "d": "M415.947 607.417H442.1l-15.652-16.941h-26.153l15.652 16.941z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.118
  }, null), createVNode("path", {
    "id": "Path_23",
    "opacity": 0.3,
    "d": "M306 487.326l-10.44-25.03 30.734-12.819L306 487.326z",
    "fill": "#BFF4FF"
  }, null), createVNode("path", {
    "d": "M315.588 478.547a6.272 6.272 0 100-12.543 6.272 6.272 0 000 12.543z",
    "fill": "#fff",
    "id": "Oval_193",
    "opacity": 0.3
  }, null), createVNode("path", {
    "id": "Rectangle_61",
    "d": "M240.014 265.227h138.791a9.014 9.014 0 019.014 9.014v0a9.015 9.015 0 01-9.014 9.015H240.014a9.015 9.015 0 01-9.014-9.015v0a9.014 9.014 0 019.014-9.014z",
    "stroke": "#fff"
  }, null), createVNode("path", {
    "id": "Rectangle_62",
    "d": "M240.263 265.227h-.249a9.015 9.015 0 000 18.029h.249a9.015 9.015 0 000-18.029z",
    "fill": "#fff"
  }, null), createVNode("path", {
    "id": "Path_24",
    "fillRule": "evenodd",
    "clipRule": "evenodd",
    "d": "M296.076 296.829h82.729a9.015 9.015 0 010 18.029h-82.729a9.014 9.014 0 01-9.014-9.014v-.001a9.014 9.014 0 019.014-9.014z",
    "stroke": "#fff",
    "strokeDasharray": "5.84 5.84"
  }, null), createVNode("path", {
    "id": "Rectangle_63",
    "d": "M329.199 314.858h36.265a9.015 9.015 0 000-18.029h-36.265a9.014 9.014 0 00-9.014 9.014 9.014 9.014 0 009.014 9.015z",
    "fill": "#fff"
  }, null), createVNode("g", {
    "id": "Group_5"
  }, [createVNode("path", {
    "id": "Vector_46",
    "d": "M907.782 498.908s2.14 8.28 2.14 10.37.517 3.49-3.981 4.36c-4.497.87-7.462.35-8.159-1.74-.696-2.09-1.214-12.57-1.214-12.57l10.946-2.1.268 1.68z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_47",
    "d": "M897.832 511.908a8.754 8.754 0 01-.299-1.46 73.335 73.335 0 0012.458-1c0 2 .388 3.35-3.98 4.19-4.368.84-7.512.36-8.179-1.73z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_48",
    "d": "M802.26 499.688s-3.473 1.22-8.517 2.79c-5.045 1.57-15.314 3.32-16.309 3.49-.995.17-.995 2.27-.169 3.15.826.88 5.383 3.49 10.766 4.88 5.383 1.39 23.632 2.62 25.194 1.58 1.304-.88.866-9.43.348-11.35-.517-1.92-11.313-4.54-11.313-4.54z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_49",
    "d": "M777.245 509.118a2.626 2.626 0 01-.517-2.45c3.522 2.82 10.557 5.92 17.711 6.64a127.36 127.36 0 0019.503-.1c-.13 1.2-.359 2.11-.737 2.37-1.562 1-19.801-.18-25.194-1.58-5.393-1.4-9.9-4.01-10.766-4.88z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_50",
    "d": "M886.29 347.478s2.985 18.26.676 28.4c0 0 4.368 40.22 5.045 58.14 0 0 9.413 31.44 10.766 41.24a242.503 242.503 0 005.005 23.65 21.246 21.246 0 01-6.726 2.37c-4.717 1-5.383-2.71-5.383-2.71s-25.871-59.83-27.921-68.62c-2.049-8.79-8.726-40.21-8.726-40.21l-27.861 51.38s-1.353 17.58-5.383 27.72-11.771 38.19-11.771 38.19a27.753 27.753 0 01-9.084-1c-4.04-1.35-4.04-3.38-4.04-3.38s6.059-22.65 6.059-30.08 2.349-32.79 4.03-39.89c1.682-7.1 13.125-44.28 14.806-48.34 1.682-4.06 5.383-16.9 5.383-16.9l2.349-19.95s28.895 8.11 52.776-.01z",
    "fill": "#111827",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_51",
    "d": "M864.946 261.328s1.553-3.37 1.553-5.44c0-2.07.995-11.91.995-11.91s-14.926-27.17-19.055-32.35a63.385 63.385 0 00-9.015-9.06s-10.05-2.07-12.109-2.07c-2.06 0-4.379-1-4.379-2.33s3.354-1 5.413-1c2.06 0 4.637-1.81 4.637-1.81s-3.353-9.65-4.378-13.46c-.547-2-2.318-6.21-.995-6.21s1.542 1 2.318 2.59c.777 1.59 4.12 6.73 4.12 6.73l-.766-11.39s.995-1.55 1.801.26a78.355 78.355 0 012.577 8.54 6.266 6.266 0 001.283 2.46l.995-8.49s1.752-1.87 2.06 1.37c.169 1.8 0 7.77 0 8.8 0 1.03.995-1.47.995-1.47s.607-2.81 1.284-3.19c.676-.38 1.283.52.995 2.59-.289 2.07.258 10.61.258 10.61s1.543 2.07 3.861 4.92c2.319 2.85 20.896 19.67 27.861 25.11 6.965 5.44 7.721 9.84 8.756 15.27 1.035 5.43 2.06 37 2.06 48.41 0 11.41-.995 29.5-1.801 35.46-.806 5.96.617 13.64 1.612 17.82.995 4.18 0 7.76-2.836 9.83-2.836 2.07-14.926 3.37-24.975 3.37-10.05 0-20.349-1-23.443-2.07-3.095-1.07-5.463-1.31-5.463-5.44 0-4.13 2.06-12.42 2.06-14.75s-4.129-26.4-4.129-26.4-26.269 8-31.164 6.21c-4.896-1.79-45.841-40.64-45.841-40.64s-6.438-2.59-9.791-3.11c-3.353-.52-8.498-2.84-8.756-3.62-.259-.78.517-.52 2.577-.52a24.14 24.14 0 015.413 1s-7.035-4.48-8.249-4.92c-.836-.31-2.279-2.22-.259-1.81 2.537.51 8.756 2.33 8.756 2.33l-8.238-5.18s-1.284-2.07.258-2.07c1.543 0 9.274 4.66 9.274 4.66l-5.97-5.62c-1.164-1.08-.189-2.61 1.184-1.81l6.965 4c1.698.998 3.5 1.806 5.373 2.41l1.284.78a34.506 34.506 0 01-.518-4.14c0-1.3.776-4.66 2.577-4.92 1.801-.26.259 2.33.259 3.62s2.577 8 2.577 9.06v3.11s8.756 7.76 16.736 11.91c7.981 4.15 26.02 17.86 26.02 17.86s20.597-10.62 25.234-14.5c4.637-3.88 9.791-8.54 14.925-12.68a63.939 63.939 0 018.498-6l16.726-.71z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_52",
    "d": "M778.877 280.558c8.746 5.62 20.657 14.68 20.657 14.68s20.596-10.62 25.233-14.5c4.637-3.88 9.791-8.54 14.926-12.68a63.929 63.929 0 018.497-6l16.736-.77s1.553-3.37 1.553-5.44c0-2.07.995-11.91.995-11.91s-7.712-14-13.582-23.85l.467-.48c2.886-2.89 6.876-4.45 10.358-5.3 4.856 4.33 9.682 8.5 12.548 10.74 6.965 5.43 7.721 9.84 8.756 15.27 1.035 5.43 2.06 37 2.06 48.41 0 11.41-.995 29.5-1.801 35.46-.806 5.96.607 13.72 1.602 17.9.995 4.18 0 7.76-2.836 9.83-2.836 2.07-14.926 3.37-24.975 3.37-10.05 0-20.349-1-23.443-2.07-3.095-1.07-5.463-1.31-5.463-5.44 0-4.13 2.06-12.42 2.06-14.75s-4.129-26.4-4.129-26.4-26.269 8-31.164 6.21c-2.607-1-15.523-12.5-26.976-23a35.345 35.345 0 017.921-9.28z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_53",
    "d": "M837.135 272.668s10.368 2.84 10.946 10.73",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_54",
    "d": "M829.176 306.628s12.079-3.34 18.358-9.66",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_55",
    "d": "M835.882 304.908s10.368 2.84 19.791-.94",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_56",
    "d": "M879.623 288.138s-3.274 23-19.055 34.46",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_57",
    "d": "M855.593 328.908c-1.204.33-2.448.62-3.731.85",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_58",
    "d": "M879.623 311.108a44.344 44.344 0 01-17.662 15.36",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_59",
    "d": "M882.678 260.048s-10.05-5-16.02-.32",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_60",
    "d": "M879.852 237.008s-9.114 3.16-11.622 9.47",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_61",
    "d": "M873.882 234.798a12.904 12.904 0 00-4.398 6.94",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_62",
    "d": "M830.956 219.908s-1.552 8.8-1.552 11.13 2.577 3.11 1.552 6.21c-1.024 3.1-3.353 3.37-2.835 6 .517 2.63 3.86 4.14 3.86 4.14s1.801 7.25 3.612 10.35c1.811 3.1 8.498.78 8.498.78l.517 8.28s2.319 3.37 10.816 2.33a46.98 46.98 0 0014.159-3.88l1.294-1.81s-6.697-3.37-6.965-5.7c-.269-2.33 0-7.76 0-15.53s2.318-22.78-10.299-26.66c-12.617-3.88-22.657 4.36-22.657 4.36z",
    "fill": "#fff",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_63",
    "d": "M846.688 241.158s2.905-6.7 6.159-2.87c2.109 2.49-.518 9.84-1.801 10.87-1.284 1.03-4.12.52-4.12.52s4.12 4.14 8.498 4.14c4.378 0 8.239-4.14 11.074-11.39 2.836-7.25 4.896-19.67 1.801-27.18-3.094-7.51-19.064-7.76-22.666-7.76-3.602 0-9.015 2.07-9.015 2.07s-11.592-1-11.851 2.85c-.259 3.85 1.552 4.14 1.552 4.14s-8.248 4.4-4.378 6.21c3.871 1.81 9.781.78 13.652.78a5.5 5.5 0 012.979.676 5.534 5.534 0 012.165 2.164s-3.602 2.33-2.318 3.37c1.283 1.04 5.97 3.1 6.438 4.92.467 1.82-1.801 4.66-.249 6 1.552 1.34 2.08.49 2.08.49z",
    "fill": "#111827"
  }, null), createVNode("path", {
    "id": "eye",
    "d": "M832.359 238.028c0 1.32.548 2.39 1.214 2.39.667 0 1.204-1.07 1.204-2.39s-.547-2.39-1.204-2.39c-.656 0-1.214 1.07-1.214 2.39z",
    "fill": "#263238"
  }, null), createVNode("path", {
    "id": "Vector_64",
    "d": "M836.578 234.978s-1.661-3.9-4.298-1.81",
    "stroke": "#263238",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_65",
    "d": "M859.046 389.738l2.358-4.4 11.771-3.04",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null)]), createVNode("g", {
    "id": "Group_6"
  }, [createVNode("path", {
    "id": "Vector_66",
    "d": "M246.9 466.9s0-4.32-6.06-10.38c-6.06-6.06-10-9.52-10-9.52s-3 10 2.59 16a106.202 106.202 0 0013.42 11.68l.05-7.78z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_67",
    "d": "M238.11 493.96s0-4.33-6.06-10.39c-6.06-6.06-9.99-9.52-9.99-9.52s-3 10 2.59 16a107.274 107.274 0 0013.42 11.68l.04-7.77z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_68",
    "d": "M246.52 474.3s.46-4.3 7.12-9.68 10.9-8.42 10.9-8.42 2 10.22-4.27 15.65a106.232 106.232 0 01-14.57 10.2l.82-7.75z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_69",
    "d": "M235.9 506.22s.9-4.23 8.1-8.88c7.2-4.65 11.72-7.23 11.72-7.23s.88 10.37-5.89 15.11a106.192 106.192 0 01-15.57 8.62l1.64-7.62z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_70",
    "d": "M237.89 541.02s0-4.33 6.06-10.39c6.06-6.06 10-9.52 10-9.52s3 10-2.59 16a106.825 106.825 0 01-13.42 11.69l-.05-7.78z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_71",
    "d": "M237.79 549.51s.62-4.28-4.52-11.14-8.5-10.84-8.5-10.84-4.41 9.43.3 16.22a105.34 105.34 0 0011.62 13.47l1.1-7.71z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_72",
    "d": "M231.82 574.69s0-4.33 6.06-10.39c6.06-6.06 10-9.52 10-9.52s3 9.95-2.6 16a105.744 105.744 0 01-13.41 11.68l-.05-7.77z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_73",
    "d": "M235.86 597.51s-1.09-4.19 3.2-11.61c4.29-7.42 7.22-11.73 7.22-11.73s5.45 8.86 1.55 16.14a106.267 106.267 0 01-10 14.7l-1.97-7.5z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_74",
    "d": "M247.45 465.83a124.24 124.24 0 01-1.66 13.43c-2.4 12.37-8.38 20.36-10.78 31.53-2.4 11.17 4.48 25.58 2.64 39.93-1.84 14.35-7.43 22.34-5.83 31.92 1.6 9.58 10 35.52 10 35.52",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_75",
    "d": "M246.46 477.18l6.53-5.01",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_76",
    "d": "M246.76 471.41l-2.73-4.86",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_77",
    "d": "M235.37 510.28s5.47-4.1 11.09-8.2",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_78",
    "d": "M238.11 501.75s-4.56-8.93-9.72-14.85",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_79",
    "d": "M238.11 547.18a67.406 67.406 0 0111.69-15.64",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_80",
    "d": "M237.06 553.25a76.786 76.786 0 00-5.93-11.24c-3.18-4.7-3.64-5.31-3.64-5.31",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_81",
    "d": "M231.82 582.64a73.29 73.29 0 014.92-10 63.59 63.59 0 016.38-8.35",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_82",
    "d": "M237.84 605.04a18.578 18.578 0 011.63-9.58c2.28-4.41 4.86-10.17 5.93-12.45",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_83",
    "d": "M207.23 524.74s-.47-2.71 2.67-7.17c3.14-4.46 5.21-7.05 5.21-7.05s3 5.92.11 10.33a67.311 67.311 0 01-7.16 8.78l-.83-4.89z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_84",
    "d": "M215.67 540.74s-.46-2.72 2.68-7.17c3.14-4.45 5.2-7.05 5.2-7.05s3 5.91.11 10.32a67.675 67.675 0 01-7.14 8.78l-.85-4.88z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_85",
    "d": "M208.27 529.33s-.76-2.65-5.52-5.31c-4.76-2.66-7.75-4.12-7.75-4.12s-.12 6.62 4.38 9.35a67.52 67.52 0 0010.24 4.81l-1.35-4.73z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_86",
    "d": "M218.39 548.19s-1-2.56-6-4.7-8.14-3.25-8.14-3.25.58 6.59 5.34 8.83a68.283 68.283 0 0010.69 3.72l-1.89-4.6z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_87",
    "d": "M220.92 570.22s-.47-2.71-4.93-5.85c-4.46-3.14-7.27-4.89-7.27-4.89s-.82 6.57 3.36 9.76a67.936 67.936 0 009.68 5.87l-.84-4.89z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_88",
    "d": "M221.9 575.54s-.84-2.64 1.63-7.48c2.47-4.84 4.15-7.72 4.15-7.72s3.79 5.43 1.58 10.21a67.857 67.857 0 01-5.83 9.7l-1.53-4.71z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_89",
    "d": "M229.51 597.43s.31-2.74 4.58-6.13c4.27-3.39 7-5.29 7-5.29s1.2 6.51-2.8 9.93a68.012 68.012 0 01-9.33 6.41l.55-4.92z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_90",
    "d": "M228.38 590.68s-.47-2.72-4.92-5.86-7.28-4.92-7.28-4.92-.82 6.57 3.37 9.76a67.26 67.26 0 009.68 5.87l-.85-4.85z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_91",
    "d": "M228.32 605.43s.24-2.75-3.28-6.91c-3.52-4.16-5.8-6.58-5.8-6.58s-2.46 6.15.79 10.3a68.23 68.23 0 007.87 8.13l.42-4.94z",
    "fill": "#92E3A9"
  }, null), createVNode("path", {
    "id": "Vector_92",
    "d": "M206.76 524.11a81.612 81.612 0 002.5 8.24c2.85 7.5 7.47 11.86 10.18 18.61s0 16.52 2.68 25.32 7.09 13.2 7.12 19.38c.03 6.18-2.4 23.36-2.4 23.36",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_93",
    "d": "M208.62 531.12l-4.64-2.43",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_94",
    "d": "M207.8 527.54l1.19-3.35",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_95",
    "d": "M219.16 550.68s-3.87-2-7.84-3.94",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_96",
    "d": "M216.52 545.62a56.004 56.004 0 014.48-10.37",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_97",
    "d": "M221.45 574.11a42.846 42.846 0 00-9-8.54",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_98",
    "d": "M222.78 577.8a48.38 48.38 0 012.49-7.69c1.49-3.29 1.71-3.73 1.71-3.73",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_99",
    "d": "M229.06 600.35a40.933 40.933 0 015-5.18 26.335 26.335 0 003.24-2.81",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_100",
    "d": "M229.24 595.66a45.816 45.816 0 00-4.16-5.7 39.976 39.976 0 00-4.91-4.55",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_101",
    "d": "M227.9 610.37a11.853 11.853 0 00-2.06-5.84c-1.91-2.51-4.16-5.85-5.07-7.16",
    "stroke": "#fff",
    "stroke-width": 1.035,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_102",
    "d": "M214.47 616.03h39.59v29.81a3 3 0 01-3 3h-33.55a3 3 0 01-3-3v-29.81h-.04z",
    "stroke": "#fff"
  }, null), createVNode("path", {
    "id": "Vector_103",
    "d": "M253.75 621.2h-39.28a3.102 3.102 0 01-3.1-3.11 3.101 3.101 0 013.1-3.1h39.28a3.101 3.101 0 013.1 3.1 3.088 3.088 0 01-.904 2.198 3.091 3.091 0 01-2.196.912z",
    "fill": "#fff"
  }, null)]), createVNode("path", {
    "id": "Vector_104",
    "d": "M786.96 257.4v1.02h-1.02",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_105",
    "d": "M783.92 258.42h-59.49",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "strokeDasharray": "2.02 2.02"
  }, null), createVNode("path", {
    "id": "Vector_106",
    "d": "M723.42 258.42h-1.03v-1.02",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_107",
    "d": "M722.39 255.43v-46.27",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "strokeDasharray": "1.97 1.97"
  }, null), createVNode("path", {
    "id": "Vector_108",
    "d": "M722.39 208.17v-1.02h1.03",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_109",
    "d": "M725.43 207.15h59.5",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "strokeDasharray": "2.02 2.02"
  }, null), createVNode("path", {
    "id": "Vector_110",
    "d": "M785.94 207.15h1.02v1.02",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_111",
    "d": "M786.96 210.14v46.28",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "strokeDasharray": "1.97 1.97"
  }, null), createVNode("path", {
    "id": "Vector_112",
    "d": "M776.65 215.34H732.7v34.9h43.95v-34.9z",
    "fill": "#fff",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_113",
    "d": "M730.12 212.75l-15.08-11.63",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_114",
    "d": "M779.67 251.96l12.93 11.2",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_115",
    "d": "M714.44 204.95L714 200h5.17",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_116",
    "d": "M792.95 258.48l.89 5.4-6.29.23",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_117",
    "d": "M722.1 265.72h23.19",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null), createVNode("path", {
    "id": "Vector_118",
    "d": "M722.1 270.94h23.19",
    "stroke": "#fff",
    "stroke-width": 1.023,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null)])]), createVNode("defs", null, [createVNode("clip-path", {
    "id": "clip0"
  }, [createVNode("path", {
    "fill": "#fff",
    "transform": "rotate(-24.663 1464.712 -523.355)",
    "d": "M0 0h49v52H0z"
  }, null)]), createVNode("clip-path", {
    "id": "clip1"
  }, [createVNode("path", {
    "fill": "#fff",
    "transform": "translate(440 166)",
    "d": "M0 0h40.444v9.333H0z"
  }, null)]), createVNode("clip-path", {
    "id": "clip2"
  }, [createVNode("path", {
    "fill": "#fff",
    "transform": "translate(416 403.007)",
    "d": "M0 0h34v34H0z"
  }, null)]), createVNode("clip-path", {
    "id": "clip3"
  }, [createVNode("path", {
    "fill": "#fff",
    "transform": "translate(337.818 215)",
    "d": "M0 0h43v50H0z"
  }, null)]), createVNode("clip-path", {
    "id": "clip4"
  }, [createVNode("path", {
    "fill": "#fff",
    "transform": "matrix(-1 0 0 1 327.001 610.219)",
    "d": "M0 0h33.675v34.83H0z"
  }, null)]), createVNode("clip-path", {
    "id": "clip5"
  }, [createVNode("rect", {
    "x": 567,
    "y": 134,
    "width": 37,
    "height": 37,
    "rx": 4,
    "fill": "#fff"
  }, null)]), createVNode("clip-path", {
    "id": "clip6"
  }, [createVNode("path", {
    "fill": "#fff",
    "transform": "translate(576.514 138.757)",
    "d": "M0 0h18.5v27.486H0z"
  }, null)]), createVNode("filter", {
    "id": "filter0_d",
    "x": 337,
    "y": 532.007,
    "width": 96.229,
    "height": 97.703,
    "filterUnits": "userSpaceOnUse",
    "color-interpolationFilters": "sRGB"
  }, [createVNode("feFlood", {
    "flood-Oopacity": 0,
    "result": "BackgroundImageFix"
  }, null), createVNode("feColorMatrix", {
    "in": "SourceAlpha",
    "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }, null), createVNode("feOffset", {
    "dy": 4
  }, null), createVNode("feGaussianBlur", {
    "stdDeviation": 7.5
  }, null), createVNode("feColorMatrix", {
    "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }, null), createVNode("feBlend", {
    "in2": "BackgroundImageFix",
    "result": "effect1_dropShadow"
  }, null), createVNode("feBlend", {
    "in": "SourceGraphic",
    "in2": "effect1_dropShadow",
    "result": "shape"
  }, null)]), createVNode("filter", {
    "id": "filter1_d",
    "x": 401,
    "y": 392.007,
    "width": 64,
    "height": 64,
    "filterUnits": "userSpaceOnUse",
    "colorInterpolationFilters": "sRGB"
  }, [createVNode("feFlood", {
    "flood-opacity": 0,
    "result": "BackgroundImageFix"
  }, null), createVNode("feColorMatrix", {
    "in": "SourceAlpha",
    "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }, null), createVNode("feOffset", {
    "dy": 4
  }, null), createVNode("feGaussianBlur", {
    "stdDeviation": 7.5
  }, null), createVNode("feColorMatrix", {
    "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }, null), createVNode("feBlend", {
    "in2": "BackgroundImageFix",
    "result": "effect1_dropShadow"
  }, null), createVNode("feBlend", {
    "in": "SourceGraphic",
    "in2": "effect1_dropShadow",
    "result": "shape"
  }, null)]), createVNode("filter", {
    "id": "filter2_d",
    "x": 561.514,
    "y": 127.757,
    "width": 48.5,
    "height": 57.486,
    "filterUnits": "userSpaceOnUse",
    "color-interpolationFilters": "sRGB"
  }, [createVNode("feFlood", {
    "flood-opacity": 0,
    "result": "BackgroundImageFix"
  }, null), createVNode("feColorMatrix", {
    "in": "SourceAlpha",
    "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }, null), createVNode("feOffset", {
    "dy": 4
  }, null), createVNode("feGaussianBlur", {
    "stdDeviation": 7.5
  }, null), createVNode("feColorMatrix", {
    "values": "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }, null), createVNode("feBlend", {
    "in2": "BackgroundImageFix",
    "result": "effect1_dropShadow"
  }, null), createVNode("feBlend", {
    "in": "SourceGraphic",
    "in2": "effect1_dropShadow",
    "result": "shape"
  }, null)])])]);
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    let typed;
    const HERO_STYLES = {
      SECTION: "w-full flex md:items-center py-8 section-container min-h-screen relative mb-24",
      CONTENT: "font-medium flex flex-col pt-32 md:pt-0 select-none",
      SOCIAL_LINK: "link hover:opacity-80 duration-300 md:mr-4 mr-2",
      BG_WRAPPER: "absolute hero-bg right-0 md:bottom-0 bottom-8 md:w-3/4 w-full scale-125 sm:scale-100 flex items-end",
      TYPED_SPAN: "text-xl sm:text-2xl md:text-4xl seq"
    };
    ref(void 0);
    ref(void 0);
    onUnmounted(() => {
      typed.destroy();
    });
    const {
      ref: heroSectionRef
    } = MENULINKS[0];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section${ssrRenderAttr("id", unref(heroSectionRef))} class="${ssrRenderClass(HERO_STYLES.SECTION)}" style="${ssrRenderStyle({ "opacity": "100" })}"><div class="${ssrRenderClass(HERO_STYLES.CONTENT)}" style="${ssrRenderStyle({ "z-index": "2" })}"><div class="mb-2 md:mb-4"><br><h1 class="seq text-3xl"> \u8FD9\u91CC\u662F\u3002\u3002\u3002 </h1></div><p class="mb-4"><span class="${ssrRenderClass(HERO_STYLES.TYPED_SPAN)}"></span></p><div class="seq flex">`);
      _push(ssrRenderComponent(_sfc_main$b, {
        classes: "mr-3",
        type: unref(ButtonTypes).OUTLINE,
        name: "\u8BE6\u7EC6\u4FE1\u606F",
        target: "_blank",
        rel: "noreferrer",
        href: unref(INFODATA).pdfUrl
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, {
        classes: "ml-3",
        type: unref(ButtonTypes).PRIMARY,
        name: "\u8054\u7CFB\u6211\u4EEC",
        href: unref(INFODATA).siteUrl,
        target: "_blank",
        rel: "noreferrer"
      }, null, _parent));
      _push(`</div></div><div class="${ssrRenderClass(HERO_STYLES.BG_WRAPPER)}" style="${ssrRenderStyle({ "maxheight": "'650px'" })}">`);
      _push(ssrRenderComponent(unref(HeroImage), null, null, _parent));
      _push(`</div></section></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "" + publicAssetsURL("project-bg.svg");
const ProjectTile = "_ProjectTile_nd4de_6";
const ProjectImg = "_ProjectImg_nd4de_22";
const techIcons = "_techIcons_nd4de_35";
const styles = {
  ProjectTile,
  ProjectImg,
  techIcons
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "project-tile",
  __ssrInlineRender: true,
  props: {
    project: {},
    animationEnabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    ref(void 0);
    const {
      name,
      data,
      image,
      author,
      description,
      gradient: [stop1, stop2]
    } = props.project;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.project.url,
        target: "_blank",
        rel: "noreferrer",
        class: "link snap-start overflow-hidden rounded-3xl",
        style: `maxWidth:${_ctx.animationEnabled ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)"}, flex: '1 0 auto',WebkitMaskImage: '-webkit-radial-gradient(white, black)'`
      }, _attrs))}><div class="${ssrRenderClass(`${unref(styles).ProjectTile} rounded-3xl relative p-6 flex-col flex justify-between max-w-full`)}" style="${ssrRenderStyle(`background: linear-gradient(90deg, ${unref(stop1)} 0%, ${unref(stop2)} 100%)`)}"><img${ssrRenderAttr("src", _imports_0)} alt="Project" layout="fill" class="absolute left-0 top-0 h-full w-full opacity-20"><img placeholder="blur"${ssrRenderAttr("src", unref(image))}${ssrRenderAttr("alt", unref(name))} layout="fill" class="${ssrRenderClass(`${unref(styles).ProjectImg} z-0`)}"><div class="absolute left-0 top-0 h-20 w-full" style="${ssrRenderStyle(`background: linear-gradient(180deg, ${unref(stop1)} 0%, rgba(0,0,0,0) 100%)`)}"></div><div class="absolute bottom-0 left-0 h-32 w-full" style="${ssrRenderStyle(`background: linear-gradient(0deg, ${unref(stop1)} 10%, rgba(0,0,0,0) 100%)`)}"></div><h1 class="z-10 pl-2 text-2xl sm:text-3xl" style="${ssrRenderStyle({ "transform": "translateZ(3rem)" })}">${ssrInterpolate(unref(name))}</h1><h2 class="z-10 text-lg font-medium tracking-wide" style="${ssrRenderStyle({ "transform": "translateZ(0.8rem)" })}">${ssrInterpolate(unref(description))}</h2></div></a>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/project-tile.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  props: {
    isDesktop: { type: Boolean }
  },
  setup(__props) {
    const targetSectionRef = ref(void 0);
    ref(void 0);
    ref(void 0);
    const willChange = ref(false);
    const horizontalAnimationEnabled = ref(false);
    const {
      ref: projectsSectionRef
    } = MENULINKS[1];
    const activeNames = ref(["0"]);
    const handleChange = (val) => {
    };
    const totalData = [
      {
        date: "2016-05-03",
        author: "Tom",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        author: "Tom",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        author: "Tom",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        author: "Tom",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        author: "Tom",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-03",
        author: "T",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-02",
        author: "T",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-04",
        author: "T",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        author: "T",
        paper: "No. 189, Grove St, Los Angeles"
      },
      {
        date: "2016-05-01",
        author: "T",
        paper: "No. 189, Grove St, Los Angeles"
      }
    ];
    const pageSize = ref(5);
    const tableData = ref(totalData.slice(0, 5));
    const paperTotal = ref(totalData.length);
    const currentPage = ref(1);
    const handleCurrentChange = () => {
      tableData.value = totalData.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      const _component_el_table = ElTable;
      const _component_el_table_column = ElTableColumn;
      const _component_el_pagination = ElPagination;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: unref(projectsSectionRef),
        ref_key: "targetSectionRef",
        ref: targetSectionRef,
        class: `${_ctx.isDesktop && "min-h-scree"} w-full relative select-none section-container flex-col flex  py-18 justify-center`
      }, _attrs))} data-v-a84e5cdd><div class="${ssrRenderClass(`flex flex-col inner-container  ${willChange.value && "will-change-transform"}`)}" data-v-a84e5cdd><p class="seq section-title-sm" data-v-a84e5cdd> WORKS </p><h1 class="seq section-heading mt-2" data-v-a84e5cdd> \u7814\u7A76\u6210\u679C </h1><h2 class="seq mt-2 max-w-sm w-full text-2xl md:max-w-3xl" data-v-a84e5cdd> \u8F66\u8054\u7F51\u3001\u8FB9\u7F18\u8BA1\u7B97\u3001\u7A7A\u5929\u5730\u534F\u540C </h2></div><div class="seq gaodu project-wrapper grid auto-cols-max grid-flow-col w-fit snap-x snap-mandatory scroll-pl-6 gap-6 md:gap-10" data-v-a84e5cdd><!--[-->`);
      ssrRenderList(unref(PROJECTS), (item, _) => {
        _push(ssrRenderComponent(_sfc_main$4, {
          key: item.name,
          project: item,
          "animation-enabled": horizontalAnimationEnabled.value
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mycollapse mt-6 Transparent line-height-normal mb-20" data-v-a84e5cdd>`);
      _push(ssrRenderComponent(_component_el_collapse, {
        modelValue: activeNames.value,
        "onUpdate:modelValue": ($event) => activeNames.value = $event,
        onChange: handleChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_collapse_item, {
              title: " \u67E5\u770B\u5168\u90E8",
              name: "1",
              class: "seq"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_table, {
                    data: tableData.value,
                    "onUpdate:data": ($event) => tableData.value = $event,
                    style: { "width": "100%" },
                    class: "bg-op-10"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_el_table_column, {
                          prop: "date",
                          label: "Date",
                          width: "180"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_table_column, {
                          prop: "author",
                          label: "Author",
                          width: "180"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_el_table_column, {
                          prop: "paper",
                          label: "Paper"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_el_table_column, {
                            prop: "date",
                            label: "Date",
                            width: "180"
                          }),
                          createVNode(_component_el_table_column, {
                            prop: "author",
                            label: "Author",
                            width: "180"
                          }),
                          createVNode(_component_el_table_column, {
                            prop: "paper",
                            label: "Paper"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="pagination-block" data-v-a84e5cdd${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_el_pagination, {
                    layout: "prev, pager, next",
                    total: paperTotal.value,
                    "page-size": pageSize.value,
                    "onUpdate:pageSize": ($event) => pageSize.value = $event,
                    "current-page": currentPage.value,
                    "onUpdate:currentPage": ($event) => currentPage.value = $event,
                    onCurrentChange: handleCurrentChange
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_el_table, {
                      data: tableData.value,
                      "onUpdate:data": ($event) => tableData.value = $event,
                      style: { "width": "100%" },
                      class: "bg-op-10"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_table_column, {
                          prop: "date",
                          label: "Date",
                          width: "180"
                        }),
                        createVNode(_component_el_table_column, {
                          prop: "author",
                          label: "Author",
                          width: "180"
                        }),
                        createVNode(_component_el_table_column, {
                          prop: "paper",
                          label: "Paper"
                        })
                      ]),
                      _: 1
                    }, 8, ["data", "onUpdate:data"]),
                    createVNode("div", { class: "pagination-block" }, [
                      createVNode(_component_el_pagination, {
                        layout: "prev, pager, next",
                        total: paperTotal.value,
                        "page-size": pageSize.value,
                        "onUpdate:pageSize": ($event) => pageSize.value = $event,
                        "current-page": currentPage.value,
                        "onUpdate:currentPage": ($event) => currentPage.value = $event,
                        onCurrentChange: handleCurrentChange
                      }, null, 8, ["total", "page-size", "onUpdate:pageSize", "current-page", "onUpdate:currentPage"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_collapse_item, {
                title: " \u67E5\u770B\u5168\u90E8",
                name: "1",
                class: "seq"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_table, {
                    data: tableData.value,
                    "onUpdate:data": ($event) => tableData.value = $event,
                    style: { "width": "100%" },
                    class: "bg-op-10"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_table_column, {
                        prop: "date",
                        label: "Date",
                        width: "180"
                      }),
                      createVNode(_component_el_table_column, {
                        prop: "author",
                        label: "Author",
                        width: "180"
                      }),
                      createVNode(_component_el_table_column, {
                        prop: "paper",
                        label: "Paper"
                      })
                    ]),
                    _: 1
                  }, 8, ["data", "onUpdate:data"]),
                  createVNode("div", { class: "pagination-block" }, [
                    createVNode(_component_el_pagination, {
                      layout: "prev, pager, next",
                      total: paperTotal.value,
                      "page-size": pageSize.value,
                      "onUpdate:pageSize": ($event) => pageSize.value = $event,
                      "current-page": currentPage.value,
                      "onUpdate:currentPage": ($event) => currentPage.value = $event,
                      onCurrentChange: handleCurrentChange
                    }, null, 8, ["total", "page-size", "onUpdate:pageSize", "current-page", "onUpdate:currentPage"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/projects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProjectsSection = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-a84e5cdd"]]);
const separation = 450;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "timeline",
  __ssrInlineRender: true,
  props: {
    isDesktop: { type: Boolean }
  },
  setup(__props) {
    ref(void 0);
    ref(void 0);
    ref(void 0);
    const svgWidth = ref(400);
    const svgCheckpointItems = TIMELINE.filter((item) => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine);
    const svgLength = svgCheckpointItems && svgCheckpointItems.length * separation;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: unref(MENULINKS)[3].ref,
        class: "section-container relative min-h-screen w-full flex flex-col select-none justify-center py-8"
      }, _attrs))}><div class="flex flex-col"><p class="section-title-sm seq"> MILESTONES </p><h1 class="section-heading seq mt-2"> \u65F6\u95F4\u7EBF </h1><h2 class="seq mt-2 w-full text-2xl md:max-w-2xl"> \u9690\u85CF\u7740\u4EC0\u4E48\u5462\uFF1F </h2></div><div class="grid grid-cols-12 mt-20 gap-4"><div class="line-svg col-span-12 md:col-span-6"><svg${ssrRenderAttr("width", unref(svgWidth))}${ssrRenderAttr("height", unref(svgLength))}${ssrRenderAttr("viewBox", `0 0 ${unref(svgWidth)} ${unref(svgLength)}`)} fill="none"></svg></div><div class="col-span-12 hidden md:col-span-6 md:flex"><div class="h-96 max-w-full overflow-hidden bg-transparent w-200"><div class="relative h-full w-full"><div class="absolute left-0 top-0 h-full w-full"><!--[-->`);
      ssrRenderList(unref(svgCheckpointItems), (item, idx) => {
        _push(`<img alt="Timeline" layout="fill" class="${ssrRenderClass(`w-full absolute top-0 object-cover slide-${idx + 1}`)}"${ssrRenderAttr("src", `${item.slideImage}`)}>`);
      });
      _push(`<!--]--></div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/timeline.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "collaboration",
  __ssrInlineRender: true,
  setup(__props) {
    const COLLABORATION_STYLE = {
      SLIDING_TEXT: "opacity-20 text-4xl md:text-5xl font-bold whitespace-nowrap",
      SECTION: "w-full relative select-none tall:py-36 py-48 section-container flex flex-col",
      TITLE: "mt-6 md:mt-8 font-medium text-4xl md:text-5xl text-center"
    };
    ref(void 0);
    const targetSection = ref(void 0);
    const willChange = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        ref_key: "targetSection",
        ref: targetSection,
        class: COLLABORATION_STYLE.SECTION
      }, _attrs))}><p class="${ssrRenderClass(`ui-left ${COLLABORATION_STYLE.SLIDING_TEXT}`)}">${ssrInterpolate(Array.from({ length: 15 }).fill(" \u5B66\u800C\u4E0D\u601D\u5219\u7F54 ").reduce((str, el) => str.concat(el), ""))}</p><h1 class="${ssrRenderClass(`${COLLABORATION_STYLE.TITLE} ${unref(willChange) && "will-change-opacity"}`)}"> \u52AA\u529B\u8BF7\u4ECE <span class="text-strong font-bold">\u4ECA\u65E5</span> \u59CB </h1><p class="${ssrRenderClass(`mt-6 md:mt-8 ui-right ${COLLABORATION_STYLE.SLIDING_TEXT}`)}">${ssrInterpolate(Array.from({ length: 15 }).fill(" \u601D\u800C\u4E0D\u5B66\u5219\u6B86").reduce((str, el) => str.concat(el), ""))}</p></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/collaboration.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      // 网站标题
      title: "\u6807\u9898",
      // 网站描述
      description: "\u63CF\u8FF0",
      // 搜索关键词
      keywords: "\u502A\u6E0A\u4E4B,\u8BFE\u9898\u7EC4,\u8F66\u8054\u7F51"
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.config({
      nullTargetWarn: false
    });
    const isDesktop = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Layout = _sfc_main$g;
      const _component_Header = _sfc_main$e;
      const _component_ProgressIndicator = _sfc_main$d;
      const _component_Cursor = _sfc_main$c;
      const _component_Footer = _sfc_main$a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Layout, null, null, _parent));
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(ssrRenderComponent(_component_ProgressIndicator, null, null, _parent));
      _push(ssrRenderComponent(_component_Cursor, { "is-desktop": unref(isDesktop) }, null, _parent));
      _push(`<main class="flex flex-col"><div class="fixed left-0 top-0 h-full w-full bg-gray-900 -z-1"></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(ProjectsSection, { "is-desktop": unref(isDesktop) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { "is-desktop": unref(isDesktop) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-58d5a208.mjs.map
