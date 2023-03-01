<template>
  <div :class="bem()">
    <div v-if="title || $slots.extra" :class="bem('header')">
      <div v-if="title" :class="bem('title')">
        {{ title }}
      </div>
      <div v-if="$slots.extra" :class="bem('extra')" :style="extraFlexStyle">
        <slot name="extra" />
      </div>
    </div>
    <div :class="bem('body')">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import createBem from '@lai9fox/bem';
const bem = createBem('h-card');

const props = defineProps({
  /** 标题文字 */
  title: String
});

/** extra 插槽的宽度，若无 title 则占满 header */
const extraFlexStyle = computed(() => {
  return props.title ? {} : { flex:1 };
});
</script>

<style lang="less">
.h-card {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: @bg-white;

  &__header {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  &__title {
    flex: 1;
  }

  &__body {
    flex: 1;
    padding: 0 20px 20px;
    // border: 1px solid;
  }
}
</style>
