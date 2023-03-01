<template>
  <div :class="bem()">
    <div v-if="prefix" :class="bem('prefix')">
      <HIcon :name="prefix" :class="bem('icon')" />
    </div>
    <div :class="bem('info')" :style="infoMargrin">
      <div v-if="title" :class="bem('title')">
        {{ title }}
      </div>
      <div v-if="content" :class="bem('content')">
        {{ content }}
      </div>
      <div v-if="append" :class="bem('append')">
        <slot name="append" />
      </div>
    </div>
    <div v-if="suffix" :class="bem('suffix')">
      <HIcon :name="suffix" :class="bem('icon')" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import createBem from '@lai9fox/bem';
const bem = createBem('h-tip');

const props = defineProps({
  /** 前缀 icon 图标名称 */
  prefix: String,
  /** 后置 icon 图标名称 */
  suffix: String,
  /** 标题 */
  title: String,
  /** 主要内容 */
  content: String,
  /** 附加说明 */
  append: [String, Number]
});

/** info div 是否有左右边距 */
const infoMargrin = computed(() => {
  if (props.prefix && props.suffix) {
    return {
      margin: '0 20px'
    };
  }
  if (props.prefix) {
    return {
      'margin-left': '20px'
    };
  }
  if (props.suffix) {
    return {
      'margin-right': '20px'
    };
  }
  return {};
});
</script>

<style lang="less">
.h-tip {
  display: flex;
  width: 248px;
  height: 98px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 20px;
  background-color: @bg-white;

  &__prefix {
    display: flex;
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: @bg-blue-gray;
  }

  &__info {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 8px;
  }

  &__title {
    color: @text-light;
    font-size: 14px;
  }

  &__content {
    color: @text-dark;
    font-size: 21px;
    font-weight: bold;
  }

  &__append {
    color: @text-light;
    font-size: 9px;
  }

  &__suffix {
    display: flex;
    width: 56px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: @bg-blue-gray;
  }

  &__icon {
    color: @icon-purple;
    font-size: 22px;
  }
}
</style>
