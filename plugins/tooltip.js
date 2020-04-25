import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip);
VTooltip.options.defaultTemplate = '<div class="tooltip-vue" role="tooltip"><div class="tooltip-vue-arrow"></div><div class="tooltip-vue-inner"></div></div>';
VTooltip.options.defaultArrowSelector = '.tooltip-vue-arrow, .tooltip-vue__arrow';
VTooltip.options.defaultInnerSelector = '.tooltip-vue-inner, .tooltip-vue__inner';
