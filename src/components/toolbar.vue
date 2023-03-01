<!-- 工具栏：搜索、通知、外观、信息等 -->

<template>
  <div :class="bem()">
    <BaseInput
      v-model="search"
      :class="bem(['search', { 'search:focus': isFocus }])"
      showClear
      @focus="expandWidth"
      @blur="expandWidth"
    >
      <template #prefix>
        <BaseIcon name="search" />
      </template>
    </BaseInput>
    <BaseIcon :class="bem('icon')" name="notify"></BaseIcon>
    <BaseIcon :class="bem('icon')" name="moon"></BaseIcon>
    <BaseIcon :class="bem('icon')" name="info"></BaseIcon>
    <div :class="bem('avatar')">
      <img src="/src/assets/img/avatar.png" alt="avatar" :class="bem('img')">
    </div>
  </div>
</template>

<script setup lang="ts">
import createBem from '@lai9fox/bem';
import { ref, inject } from 'vue';
const bem = createBem('h-toolbar');

// 搜索参数
const search = ref('');

// 搜索框状态
const isFocus = ref(false);
/**
 * 搜索框获得聚焦状态
 */
function expandWidth() {
  isFocus.value = !isFocus.value;
}
</script>

<style lang='less'>
.h-toolbar {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 12px;
  border-radius: 30px;
  background-color: @bg-white;

  // 增加权重
  & &__search {
    width: 288px;
    border-radius: 21px;
    background-color: @bg-blue-gray;
    transition: width 0.6s;
  }

  & &__search--focus {
    width: 428px;
    max-width: none;
  }

  &__icon {
    margin: 0 7px;
    color: @text-light;
    cursor: pointer;

    &:hover {
      color: @text-dark;
    }
  }

  &__avatar {
    width: 42px;
    height: 42px;
    margin-left: 7px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
