<template>
  <main :class="page.wrap">
    <!-- 面包屑导航 -->
    <div :class="page.crumbs">
      <RouterLink to="/">Pages</RouterLink> <span> {{ nav }}</span>
    </div>
    <!-- 头部 -->
    <div :class="page.header">
      <h1 :class="page.title">
        {{ props.title }}
      </h1>
      <ToolBar />
    </div>
    <!-- 主体内容 -->
    <div :class="page.body">
      <slot />
    </div>
  </main>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
import ToolBar from '@/components/toolbar.vue';

const props = defineProps({
  // 主体页面的标题
  title: String
});

// 用于面包屑导航
const route = useRoute();
const nav = computed(() => {
  const path = route.path;
  return `/ ${ path.charAt(1).toUpperCase() }${ path.substring(2) }`;
});
</script>

<style lang="less" module="page">
.crumbs {
  color: @text-light;
}

.header {
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}

.title {
  padding: 0;
  margin: 0;
  font-size: 26px;
}

.body {
  border: 1px solid @text-dark;
}
</style>
