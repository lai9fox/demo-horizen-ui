<!-- ICON 组件，使用 SVG -->
<template>
  <svg :class="svgClass" aria-hidden="true" :style="{ color: props.color }" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  // icon 名称
  name: {
    type: String,
    required: true
  },
  color: String
});

const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${ props.name }`;
  } else {
    return 'svg-icon';
  }
});

const iconName = computed(() => `#icon-${ props.name }`);
</script>

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: @text-light;
  overflow: hidden;
}
</style>
