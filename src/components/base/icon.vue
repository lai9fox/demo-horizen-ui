<!-- ICON 组件，使用 SVG -->
<template>
  <span :class="bem()">
    <svg :class="bem(['svg', name])" aria-hidden="true" :style="{ color: props.color }" v-on="$attrs">
      <use :xlink:href="iconName" />
    </svg>
  </span>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import createBem from '@lai9fox/bem';
const props = defineProps({
  // icon 名称
  name: {
    type: String,
    required: true
  },
  color: String
});

const bem = createBem('h-icon');

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
    // fill: @text-light;
    vertical-align: -0.15em;
  }
}
</style>
