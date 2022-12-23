<!-- ICON 组件，使用 SVG -->
<template>
  <span class="h-icon">
    <svg :class="svgClass" aria-hidden="true" :style="{ color: props.color }" v-on="$attrs">
      <use :xlink:href="iconName" />
    </svg>
  </span>
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
    return `h-icon__svg h-icon__${ props.name }`;
  } else {
    return 'h-icon__svg';
  }
});

const iconName = computed(() => `#icon-${ props.name }`);
</script>

<style lang="less">
.h-icon {
  padding: 2px;
  text-align: center;

  &__svg {
    overflow: hidden;
    width: 1em;
    height: 1em;
    fill: @text-light;
    vertical-align: -0.15em;
  }
}
</style>
