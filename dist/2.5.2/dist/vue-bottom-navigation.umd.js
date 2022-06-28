(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-bottom-navigation"] = factory();
	else
		root["vue-bottom-navigation"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "08bc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RingBottomNavigation_vue_vue_type_style_index_0_id_057c6f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8246");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RingBottomNavigation_vue_vue_type_style_index_0_id_057c6f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RingBottomNavigation_vue_vue_type_style_index_0_id_057c6f20_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "679a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowsBottomNavigation_vue_vue_type_style_index_0_id_28b443b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7d5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowsBottomNavigation_vue_vue_type_style_index_0_id_28b443b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WindowsBottomNavigation_vue_vue_type_style_index_0_id_28b443b5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6d88":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrowBottomNavigation_vue_vue_type_style_index_0_id_01cd58ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ea76");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrowBottomNavigation_vue_vue_type_style_index_0_id_01cd58ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrowBottomNavigation_vue_vue_type_style_index_0_id_01cd58ac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8002":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8246":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba44":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvedBottomNavigation_vue_vue_type_style_index_0_id_007f6638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8002");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvedBottomNavigation_vue_vue_type_style_index_0_id_007f6638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CurvedBottomNavigation_vue_vue_type_style_index_0_id_007f6638_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d2cf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBottomNavigation_vue_vue_type_style_index_0_id_cc775b2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f3e9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBottomNavigation_vue_vue_type_style_index_0_id_cc775b2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwipeBottomNavigation_vue_vue_type_style_index_0_id_cc775b2c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "e7d5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ea76":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f3e9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "CurvedBottomNavigation", function() { return /* reexport */ CurvedBottomNavigation; });
__webpack_require__.d(__webpack_exports__, "GrowBottomNavigation", function() { return /* reexport */ GrowBottomNavigation; });
__webpack_require__.d(__webpack_exports__, "SwipeBottomNavigation", function() { return /* reexport */ SwipeBottomNavigation; });
__webpack_require__.d(__webpack_exports__, "RingBottomNavigation", function() { return /* reexport */ RingBottomNavigation; });
__webpack_require__.d(__webpack_exports__, "WindowsBottomNavigation", function() { return /* reexport */ WindowsBottomNavigation; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"340859e2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CurvedBottomNavigation.vue?vue&type=template&id=007f6638&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-container_foreground",style:(_vm.cssVariables)},[_c('div',{staticClass:"btn-container"},[_vm._l((_vm.localOptions),function(button,index){
var _obj, _obj$1;
return _c('div',{key:("label-" + index),class:( _obj = {}, _obj[("btn-item-" + index + " labels")] = true, _obj['checked'] = button.isActive, _obj['unchecked'] = !button.isActive, _obj ),on:{"click":function($event){return _vm.handleLabelClick(button)}}},[_c('div',{staticClass:"active-label"},[(button.badge)?_c('div',{staticClass:"btn-badge"},[_vm._v(" "+_vm._s(button.badge)+" ")]):_vm._e(),_vm._t("icon",function(){return [_c('i',{class:("" + (button.icon))})]},{"props":button})],2),_c('div',{staticClass:"btn-title"},[_vm._t("title",function(){return [_vm._v(" "+_vm._s(button.title)+" ")]},{"props":button})],2),(_vm.hasChild(button))?_c('div',{class:( _obj$1 = {}, _obj$1['btn-super-parent'] = button.isActive, _obj$1['btn-class-showable'] = _vm.showable, _obj$1 )},[_c('div',{staticClass:"btn-child-parent"},_vm._l((button.childs || []),function(child,idx){return _c('div',{key:idx,staticClass:"btn-child",on:{"click":function($event){$event.stopPropagation();return _vm.handleChildClick(child)}}},[_vm._t("child-icon",function(){return [_c('i',{class:("" + (child.icon))})]},{"props":child}),_c('span',{staticClass:"btn-child-title"},[_vm._t("child-title",function(){return [_vm._v(" "+_vm._s(child.title)+" ")]},{"props":child})],2),(child.badge)?_c('div',{staticClass:"btn-child-badge"},[_vm._v(" "+_vm._s(child.badge)+" ")]):_vm._e()],2)}),0)]):_vm._e()])}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasActiveClass),expression:"hasActiveClass"}],attrs:{"id":"sweep"}},[_c('div',{attrs:{"id":"sweep-right"}}),_c('div',{attrs:{"id":"sweep-center"}}),_c('div',{attrs:{"id":"sweep-left"}})])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CurvedBottomNavigation.vue?vue&type=template&id=007f6638&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CurvedBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CurvedBottomNavigationvue_type_script_lang_js_ = ({
  name: 'VueBottomNavigation',
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    foregroundColor: {
      type: String,
      default: '#42A5F5'
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    iconColor: {
      type: String,
      default: '#0000008A'
    },
    badgeColor: {
      type: String,
      default: '#FBC02D'
    },
    replaceRoute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    localOptions: [],
    showable: false,
    enableWatch: true
  }),
  computed: {
    cssVariables() {
      const countChilds = ((this.localOptions.find(option => option.isActive) || {}).childs || []).length;
      const styles = {
        '--color-foreground': this.foregroundColor,
        '--color-background': this.backgroundColor,
        '--color-icon': this.iconColor,
        '--color-badge': this.badgeColor,
        '--width-parent': `${countChilds * 45}px`
      };
      return styles;
    },

    hasActiveClass() {
      return this.localOptions.some(option => option.isActive);
    }

  },
  watch: {
    options: {
      deep: true,

      handler(newVal) {
        if (newVal) {
          this.localOptions = newVal.map(option => ({ ...option,
            isActive: this.isActive(option)
          }));
          this.cssLoader();
        }
      }

    },
    value: {
      handler(newVal, oldVal) {
        if (newVal != oldVal && this.enableWatch) {
          const childs = [];
          this.localOptions.forEach(option => {
            if (option.childs) {
              childs.push(...option.childs);
            }
          });
          const target = [...this.localOptions, ...childs].find(option => option.id == newVal);

          if (target) {
            this.updateValue(target, this.hasChild(target));
          }
        }
      }

    }
  },

  created() {
    this.localOptions = this.options.map(option => ({ ...option,
      isActive: this.isActive(option)
    }));
  },

  mounted() {
    this.cssLoader();
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  methods: {
    cssLoader() {
      let customStyle = '';
      const containerWidth = document.querySelector('.btn-container').offsetWidth || window.innerWidth;
      this.options.forEach((item, index) => {
        if (index === 0 && this.hasChild(item)) {
          customStyle += `
          .btn-item-${index}.checked .btn-class-showable .btn-child-parent {
            transform: translateX(${item.childs.length * 45 / 2 - 35}px);
            transition: transform 500ms ease 300ms;
          }
          `;
        }

        if (index === this.options.length - 1 && this.hasChild(item)) {
          customStyle += `
          .btn-item-${index}.checked .btn-class-showable .btn-child-parent {
            transform: translateX(-${item.childs.length * 45 / 2 - 35}px);
            transition: transform 500ms ease 300ms;
          }
          `;
        }

        customStyle += `
        .btn-item-${index} {
          padding: 10px;
          transition: transform 100ms ease;
          width : ${containerWidth / this.options.length}px !important;
          display: flex;
          justify-content :center;
          align-items : center;
          position: relative;
          z-index: 10;
        }

        .btn-item-${index}.checked ~ #sweep {
          transform: translateX(${index * containerWidth / this.options.length + containerWidth / this.options.length / 4}px);
          transition: transform 500ms ease;
        }
        `;

        if (this.hasChild(item)) {
          item.childs.forEach((child, idx) => {
            customStyle += `
            .btn-item-${index}.checked .btn-class-showable .btn-child:nth-child(${idx + 1}) {
              transform: translateX(${(0.5 + idx) * 45 - item.childs.length * 45 / 2}px);
              transition: transform 500ms ease 300ms;
            }
          `;
          });
        }
      });
      document.getElementById('sweep').style.left = `
      ${containerWidth / this.options.length / 4 - 135 / 2}px`;
      const head = document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.id = 'bottom-navigation-style';

      if (style.styleSheet) {
        style.styleSheet.cssText = customStyle;
      } else {
        style.appendChild(document.createTextNode(customStyle));
      }

      head.appendChild(style);
    },

    handleLabelClick(button) {
      if (!this.showable || button.isActive) {
        this.toggleClass();
      }

      this.updateValue(button, this.hasChild(button));
    },

    handleChildClick(button) {
      this.updateValue(button);
      this.toggleClass();
    },

    updateValue(button, prevent = false) {
      this.localOptions.forEach(option => option.isActive = this.isActive(option, button.id));

      if (!prevent) {
        this.$emit('update', button.id);
        this.enableWatch = false;
        setTimeout(() => {
          this.enableWatch = true;
        }, 0);

        if (button.path && Object.keys(button.path).length) {
          if (this.replaceRoute) {
            this.$router.replace(button.path).catch(() => {});
          } else {
            this.$router.push(button.path);
          }
        }
      }
    },

    toggleClass() {
      this.showable = !this.showable;
    },

    isActive(button, value = this.value) {
      return button.id == value || (button.childs || []).find(child => child.id == value);
    },

    onResize() {
      this.$nextTick(() => {
        const styleElement = document.getElementById('bottom-navigation-style');
        styleElement && styleElement.remove();
      });
      this.cssLoader();
    },

    hasChild(button) {
      return (button.childs || []).length;
    }

  }
});
// CONCATENATED MODULE: ./src/components/CurvedBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CurvedBottomNavigationvue_type_script_lang_js_ = (CurvedBottomNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/CurvedBottomNavigation.vue?vue&type=style&index=0&id=007f6638&scoped=true&lang=css&
var CurvedBottomNavigationvue_type_style_index_0_id_007f6638_scoped_true_lang_css_ = __webpack_require__("ba44");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/CurvedBottomNavigation.vue






/* normalize component */

var component = normalizeComponent(
  components_CurvedBottomNavigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "007f6638",
  null
  
)

/* harmony default export */ var CurvedBottomNavigation = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"340859e2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GrowBottomNavigation.vue?vue&type=template&id=01cd58ac&scoped=true&
var GrowBottomNavigationvue_type_template_id_01cd58ac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gr-btn-container-foreground",style:(_vm.cssVariables)},_vm._l((_vm.localOptions),function(button,index){return _c('div',{key:("grow-button-" + index),class:[
      'gr-btn-container',
      { 'gr-btn-container-active': button.selected }
    ],on:{"click":function($event){return _vm.handleButtonClick(button, index)}}},[_c('div',{class:['gr-btn-item', { 'gr-btn-item-active': button.selected }]},[_c('div',{class:['gr-btn-icon', { 'gr-btn-icon-active': button.selected }]},[_vm._t("icon",function(){return [_c('i',{class:("" + (button.icon))})]},{"props":button})],2),_c('div',{staticClass:"gr-btn-title"},[_c('span',{staticClass:"gr-hidden-title"},[_vm._t("title",function(){return [_vm._v(" "+_vm._s(button.title)+" ")]},{"props":button})],2),_c('span',{class:[
            'gr-animated-title',
            { 'gr-animated-title-active': button.selected }
          ]},[_vm._t("title",function(){return [_vm._v(" "+_vm._s(button.title)+" ")]},{"props":button})],2)])])])}),0)}
var GrowBottomNavigationvue_type_template_id_01cd58ac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GrowBottomNavigation.vue?vue&type=template&id=01cd58ac&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GrowBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GrowBottomNavigationvue_type_script_lang_js_ = ({
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      default: '#74cbbb'
    },
    replaceRoute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    prevSelected: null,
    currSelected: null,
    localOptions: [],
    enableWatch: true
  }),
  computed: {
    cssVariables() {
      const activeTitle = (this.localOptions[this.currSelected] || {}).title;
      let activeWidth = 95;

      if (activeTitle && activeTitle.length * 15 > 110) {
        activeWidth = 95 + (activeTitle.length * 15 - 110) / 2;
      }

      const mainColor = (this.localOptions[this.currSelected] || {}).color || this.color;
      const styles = {
        '--color': mainColor,
        '--color-background': mainColor + '30',
        '--active-width': `${activeWidth}px`
      };
      return styles;
    }

  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (newVal != oldVal && this.enableWatch) {
          const target = this.localOptions.findIndex(option => option.id == newVal);

          if (target > -1) {
            this.handleButtonClick(this.localOptions[target], target);
          }
        }
      }

    }
  },

  created() {
    this.localOptions = this.options.slice();
    const index = this.localOptions.findIndex(item => item.id == this.value || (item.path || {}).name == (this.$route || {}).name);

    if (index > -1) {
      this.currSelected = index;
      this.prevSelected = index;

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }
    }
  },

  methods: {
    handleButtonClick(button, index) {
      this.currSelected = index;

      if (this.prevSelected !== null) {
        this.localOptions[this.prevSelected].selected = false;
      }

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }

      this.prevSelected = this.currSelected;
      this.updateValue(button);
    },

    updateValue(button) {
      this.$emit('update', button.id);
      this.enableWatch = false;
      setTimeout(() => {
        this.enableWatch = true;
      }, 0);

      if (button.path && Object.keys(button.path).length) {
        if (this.replaceRoute) {
          this.$router.replace(button.path).catch(() => {});
        } else {
          this.$router.push(button.path);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/GrowBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GrowBottomNavigationvue_type_script_lang_js_ = (GrowBottomNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GrowBottomNavigation.vue?vue&type=style&index=0&id=01cd58ac&scoped=true&lang=css&
var GrowBottomNavigationvue_type_style_index_0_id_01cd58ac_scoped_true_lang_css_ = __webpack_require__("6d88");

// CONCATENATED MODULE: ./src/components/GrowBottomNavigation.vue






/* normalize component */

var GrowBottomNavigation_component = normalizeComponent(
  components_GrowBottomNavigationvue_type_script_lang_js_,
  GrowBottomNavigationvue_type_template_id_01cd58ac_scoped_true_render,
  GrowBottomNavigationvue_type_template_id_01cd58ac_scoped_true_staticRenderFns,
  false,
  null,
  "01cd58ac",
  null
  
)

/* harmony default export */ var GrowBottomNavigation = (GrowBottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"340859e2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipeBottomNavigation.vue?vue&type=template&id=cc775b2c&scoped=true&
var SwipeBottomNavigationvue_type_template_id_cc775b2c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sm-btn-container-foreground",style:(_vm.cssVariables)},[_vm._l((_vm.localOptions),function(button,index){return _c('div',{key:("simple-btn-" + index),ref:"btnContainer",refInFor:true,staticClass:"sm-btn-container",on:{"click":function($event){return _vm.handleButtonClick(button, index)}}},[_c('div',{staticClass:"sm-btn-item"},[_c('div',{class:['sm-btn-icon', { 'sm-btn-icon-active': button.selected }]},[_vm._t("icon",function(){return [_c('i',{class:("" + (button.icon))})]},{"props":button})],2),_c('div',{class:['sm-btn-title', { 'sm-btn-title-active': button.selected }]},[_vm._t("title",function(){return [_vm._v(" "+_vm._s(button.title)+" ")]},{"props":button})],2)])])}),_c('div',{ref:"borderSwiper",staticClass:"border-swiper"})],2)}
var SwipeBottomNavigationvue_type_template_id_cc775b2c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SwipeBottomNavigation.vue?vue&type=template&id=cc775b2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SwipeBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var SwipeBottomNavigationvue_type_script_lang_js_ = ({
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    iconColor: {
      type: String,
      default: '#8066C7'
    },
    swiperColor: {
      type: String,
      default: '#8066C7'
    },
    replaceRoute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    prevSelected: null,
    currSelected: null,
    localOptions: [],
    enableWatch: true,
    btnItemWidth: 0
  }),
  computed: {
    cssVariables() {
      const styles = {
        '--swiper-color': this.swiperColor,
        '--icon-color': this.iconColor,
        '--background-color': this.backgroundColor
      };
      return styles;
    }

  },
  watch: {
    currSelected(newVal) {
      this.$refs.borderSwiper.style.transform = `translateX(${this.btnItemWidth * newVal}px)`;
    },

    value: {
      handler(newVal, oldVal) {
        if (newVal != oldVal && this.enableWatch) {
          const target = this.localOptions.findIndex(option => option.id == newVal);

          if (target > -1) {
            this.handleButtonClick(this.localOptions[target], target);
          }
        }
      }

    }
  },

  mounted() {
    this.cssLoader();
    window.addEventListener('resize', this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },

  created() {
    this.localOptions = this.options.slice();
    const index = this.localOptions.findIndex(item => item.id == this.value || (item.path || {}).name == (this.$route || {}).name);

    if (index > -1) {
      this.currSelected = index;
      this.prevSelected = index;

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }
    }
  },

  methods: {
    cssLoader() {
      this.btnItemWidth = this.$refs.btnContainer[0].offsetWidth;
      this.$refs.borderSwiper.style.width = this.btnItemWidth + 'px';
      this.$refs.borderSwiper.style.transform = `translateX(${this.btnItemWidth * this.currSelected}px)`;
    },

    onResize() {
      this.cssLoader();
    },

    handleButtonClick(button, index) {
      this.currSelected = index;

      if (this.prevSelected !== null) {
        this.localOptions[this.prevSelected].selected = false;
      }

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }

      this.prevSelected = this.currSelected;
      this.updateValue(button);
    },

    updateValue(button) {
      this.$emit('update', button.id);
      this.enableWatch = false;
      setTimeout(() => {
        this.enableWatch = true;
      }, 0);

      if (button.path && Object.keys(button.path).length) {
        if (this.replaceRoute) {
          this.$router.replace(button.path).catch(() => {});
        } else {
          this.$router.push(button.path);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/SwipeBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SwipeBottomNavigationvue_type_script_lang_js_ = (SwipeBottomNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SwipeBottomNavigation.vue?vue&type=style&index=0&id=cc775b2c&scoped=true&lang=css&
var SwipeBottomNavigationvue_type_style_index_0_id_cc775b2c_scoped_true_lang_css_ = __webpack_require__("d2cf");

// CONCATENATED MODULE: ./src/components/SwipeBottomNavigation.vue






/* normalize component */

var SwipeBottomNavigation_component = normalizeComponent(
  components_SwipeBottomNavigationvue_type_script_lang_js_,
  SwipeBottomNavigationvue_type_template_id_cc775b2c_scoped_true_render,
  SwipeBottomNavigationvue_type_template_id_cc775b2c_scoped_true_staticRenderFns,
  false,
  null,
  "cc775b2c",
  null
  
)

/* harmony default export */ var SwipeBottomNavigation = (SwipeBottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"340859e2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RingBottomNavigation.vue?vue&type=template&id=057c6f20&scoped=true&
var RingBottomNavigationvue_type_template_id_057c6f20_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rg-btn-container-foreground",style:(_vm.cssVariables)},_vm._l((_vm.localOptions),function(button,index){return _c('div',{key:("ring-btn-" + index),staticClass:"rg-btn-container",on:{"click":function($event){return _vm.handleButtonClick(button, index)}}},[_c('div',{staticClass:"rg-btn-item"},[_c('div',{class:[
          { 'rg-btn-border': button.selected },
          { 'rg-btn-border-deselect': button.deselect }
        ]}),_c('div',{class:[
          'rg-btn-icon',
          { 'rg-btn-icon-active': button.selected },
          { 'rg-btn-icon-deselect': button.deselect }
        ]},[_vm._t("icon",function(){return [_c('i',{class:("" + (button.icon))})]},{"props":button}),(button.badge > 0)?_c('div',{staticClass:"rg-btn-badge"}):_vm._e()],2),_c('div',{class:['rg-btn-title', { 'rg-btn-title-active': button.selected }]},[_vm._t("title",function(){return [_vm._v(" "+_vm._s(button.title)+" ")]},{"props":button})],2)])])}),0)}
var RingBottomNavigationvue_type_template_id_057c6f20_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/RingBottomNavigation.vue?vue&type=template&id=057c6f20&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RingBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RingBottomNavigationvue_type_script_lang_js_ = ({
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    iconColor: {
      type: String,
      default: '#669C35'
    },
    titleColor: {
      type: String,
      default: '#669C35'
    },
    borderColor: {
      type: String,
      default: '#4F7A28'
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    badgeColor: {
      type: String,
      default: '#FBC02D'
    },
    replaceRoute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    prevSelected: null,
    currSelected: null,
    localOptions: [],
    enableWatch: true
  }),
  computed: {
    cssVariables() {
      const styles = {
        '--border-color': this.borderColor,
        '--icon-color': this.iconColor,
        '--background-color': this.backgroundColor,
        '--title-color': this.titleColor,
        '--badge-color': this.badgeColor
      };
      return styles;
    }

  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (newVal != oldVal && this.enableWatch) {
          const target = this.localOptions.findIndex(option => option.id == newVal);

          if (target > -1) {
            this.handleButtonClick(this.localOptions[target], target);
          }
        }
      }

    }
  },

  created() {
    this.localOptions = this.options.slice();
    const index = this.localOptions.findIndex(item => item.id == this.value || (item.path || {}).name == (this.$route || {}).name);

    if (index > -1) {
      this.currSelected = index;
      this.prevSelected = index;

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }
    }
  },

  methods: {
    handleButtonClick(button, index) {
      if (index === this.currSelected) {
        return;
      }

      this.currSelected = index;

      if (this.prevSelected !== null) {
        const temp = this.prevSelected;
        setTimeout(() => {
          this.localOptions[temp].deselect = false;
        }, 100);
        this.localOptions[this.prevSelected].selected = false;
        this.localOptions[this.prevSelected].deselect = true;
      }

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }

      this.prevSelected = this.currSelected;
      this.updateValue(button);
    },

    updateValue(button) {
      this.$emit('update', button.id);
      this.enableWatch = false;
      setTimeout(() => {
        this.enableWatch = true;
      }, 0);

      if (button.path && Object.keys(button.path).length) {
        if (this.replaceRoute) {
          this.$router.replace(button.path).catch(() => {});
        } else {
          this.$router.push(button.path);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/RingBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RingBottomNavigationvue_type_script_lang_js_ = (RingBottomNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/RingBottomNavigation.vue?vue&type=style&index=0&id=057c6f20&scoped=true&lang=css&
var RingBottomNavigationvue_type_style_index_0_id_057c6f20_scoped_true_lang_css_ = __webpack_require__("08bc");

// CONCATENATED MODULE: ./src/components/RingBottomNavigation.vue






/* normalize component */

var RingBottomNavigation_component = normalizeComponent(
  components_RingBottomNavigationvue_type_script_lang_js_,
  RingBottomNavigationvue_type_template_id_057c6f20_scoped_true_render,
  RingBottomNavigationvue_type_template_id_057c6f20_scoped_true_staticRenderFns,
  false,
  null,
  "057c6f20",
  null
  
)

/* harmony default export */ var RingBottomNavigation = (RingBottomNavigation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"340859e2-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WindowsBottomNavigation.vue?vue&type=template&id=28b443b5&scoped=true&
var WindowsBottomNavigationvue_type_template_id_28b443b5_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wn-btn-container-foreground",style:(_vm.cssVariables)},_vm._l((_vm.localOptions),function(button,index){return _c('div',{key:("windows-btn-" + index),staticClass:"wn-btn-container",on:{"click":function($event){return _vm.handleButtonClick(button, index)}}},[_c('div',{staticClass:"wn-btn-item"},[_c('div',{class:[
          'wn-btn-icon',
          { 'wn-btn-icon-active': button.selected },
          { 'wn-btn-icon-deselect': button.deselect }
        ],style:(("color:" + (button.color)))},[_vm._t("icon",function(){return [_c('i',{class:("" + (button.icon))})]},{"props":button}),(button.badge > 0)?_c('div',{staticClass:"wn-btn-badge"},[_vm._v(" "+_vm._s(button.badge)+" ")]):_vm._e()],2),_c('div',{class:[
          'wn-btn-border',
          { 'wn-btn-border-selected': button.selected },
          { 'wn-btn-border-deselect': button.deselect }
        ]})])])}),0)}
var WindowsBottomNavigationvue_type_template_id_28b443b5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/WindowsBottomNavigation.vue?vue&type=template&id=28b443b5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WindowsBottomNavigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WindowsBottomNavigationvue_type_script_lang_js_ = ({
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      default: null
    },
    options: {
      type: Array,
      required: true
    },
    borderColor: {
      type: String,
      default: '#9B9B9B'
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    badgeColor: {
      type: String,
      default: '#828282'
    },
    replaceRoute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    prevSelected: null,
    currSelected: null,
    localOptions: [],
    enableWatch: true
  }),
  computed: {
    cssVariables() {
      const styles = {
        '--border-color': this.borderColor,
        '--background-color': this.backgroundColor,
        '--badge-color': this.badgeColor
      };
      return styles;
    }

  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (newVal != oldVal && this.enableWatch) {
          const target = this.localOptions.findIndex(option => option.id == newVal);

          if (target > -1) {
            this.handleButtonClick(this.localOptions[target], target);
          }
        }
      }

    }
  },

  created() {
    this.localOptions = this.options.slice();
    const index = this.localOptions.findIndex(item => item.id == this.value || (item.path || {}).name == (this.$route || {}).name);

    if (index > -1) {
      this.currSelected = index;
      this.prevSelected = index;

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }
    }
  },

  methods: {
    handleButtonClick(button, index) {
      if (index === this.currSelected) {
        return;
      }

      this.currSelected = index;

      if (this.prevSelected !== null) {
        const temp = this.prevSelected;
        setTimeout(() => {
          this.localOptions[temp].deselect = false;
        }, 300);
        this.localOptions[this.prevSelected].selected = false;
        this.localOptions[this.prevSelected].deselect = true;
      }

      if ('$set' in this) {
        this.$set(this.localOptions, index, { ...this.localOptions[index],
          selected: true
        });
      } else {
        this.localOptions[index].selected = true;
      }

      this.prevSelected = this.currSelected;
      this.updateValue(button);
    },

    updateValue(button) {
      this.$emit('update', button.id);
      this.enableWatch = false;
      setTimeout(() => {
        this.enableWatch = true;
      }, 0);

      if (button.path && Object.keys(button.path).length) {
        if (this.replaceRoute) {
          this.$router.replace(button.path).catch(() => {});
        } else {
          this.$router.push(button.path);
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/WindowsBottomNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_WindowsBottomNavigationvue_type_script_lang_js_ = (WindowsBottomNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/WindowsBottomNavigation.vue?vue&type=style&index=0&id=28b443b5&scoped=true&lang=css&
var WindowsBottomNavigationvue_type_style_index_0_id_28b443b5_scoped_true_lang_css_ = __webpack_require__("679a");

// CONCATENATED MODULE: ./src/components/WindowsBottomNavigation.vue






/* normalize component */

var WindowsBottomNavigation_component = normalizeComponent(
  components_WindowsBottomNavigationvue_type_script_lang_js_,
  WindowsBottomNavigationvue_type_template_id_28b443b5_scoped_true_render,
  WindowsBottomNavigationvue_type_template_id_28b443b5_scoped_true_staticRenderFns,
  false,
  null,
  "28b443b5",
  null
  
)

/* harmony default export */ var WindowsBottomNavigation = (WindowsBottomNavigation_component.exports);
// CONCATENATED MODULE: ./src/install.js





/* harmony default export */ var install = ({
  install(Vue) {
    Vue.component("CurvedBottomNavigation", CurvedBottomNavigation);
    Vue.component("GrowBottomNavigation", GrowBottomNavigation);
    Vue.component("SwipeBottomNavigation", SwipeBottomNavigation);
    Vue.component("RingBottomNavigation", RingBottomNavigation);
    Vue.component("WindowsBottomNavigation", WindowsBottomNavigation);
  }

});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (install);



/***/ })

/******/ });
});
//# sourceMappingURL=vue-bottom-navigation.umd.js.map