<!-- input 通用组件 -->

<template>
  <div :class="bem()">
    <!-- 前缀 -->
    <slot name="prefix" />
    <input
      :value="modelValue"
      type="text"
      :class="bem(['input', { 'close:display': showClear }])"
      :placeholder="props.placeholder"
      v-bind="attrs"
      @keypress.enter="enterInput"
      @input="emits('update:modelValue', $event.target.value)"
    >
    <BaseIcon
      v-show="clearIconShow"
      name="close"
      :class="bem('close')"
      @click="clearInput"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, useAttrs, inject } from 'vue';
import createBem from '@lai9fox/bem';
const bem = createBem('h-input');
// props 属性
const props = defineProps({
  // 双向绑定
  modelValue: String,
  // 占位显示字符，默认为 'search'
  placeholder: {
    type: String,
    default: 'search'
  },
  // 是否显示清除 icon
  showClear: Boolean
});
// emits 事件
const emits = defineEmits(['update:modelValue']);
// attrs 透传属性
const attrs = useAttrs();

/**
 * 输入框聚焦状态下敲击 enter 按键
 */
function enterInput() {
  if (props.modelValue) {
    console.log(props.modelValue);
  }
}
/**
 * 点击清除按钮时清除 input 的值
 */
function clearInput() {
  emits('update:modelValue', '');
}

/**
 * 清除按钮的显示与隐藏
 * @return {boolean}
 */
const clearIconShow = computed(() => {
  return props.showClear && props.modelValue;
});
</script>

<style lang="less">
.h-input {
  position: relative;
  display: flex;
  overflow: hidden;
  // width: 100%;
  height: 40px;
  box-sizing: border-box;
  align-items: center;
  padding: 0 10px;
  background-color: @bg-white;

  &:focus-within {
    outline: 1px solid @text-light;
  }

  // 输入框
  &__input {
    // width: 100%;
    height: 100%;
    border: none;
    margin: 0 6px;
    background-color: transparent;
    font-size: 1rem;
    outline: none;
  }

  // close 图标
  &__close {
    position: absolute;
    right: 5px;
    width: 21px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: @bg-blue-gray;
    }

    &--display {
      margin-right: 20px;
    }
  }
}
</style>

