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
    <!-- 页脚 -->
    <div :class="page.footer">
      <slot name="footer">
        <div :class="page.about">
          <div :class="page.copyright">
            © 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!
          </div>
          <div :class="page.links">
            <li>Marketplace</li>
            <li>License</li>
            <li>Terms of Use</li>
            <li>Blog</li>
          </div>
        </div>
      </slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';
import ToolBar from '@/components/toolbar/index.vue';

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
.wrap {
  display: flex;
  flex-direction: column;
}

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
  flex: 1;
  // border: 1px solid @text-dark;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: @scroll-bar;
  }
}

.footer {
  height: 64px;
  box-sizing: border-box;
  padding: 20px;
  color: @text-light;
  font-size: 14px;
}

.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.links {
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  gap: 42px;

  & li {
    list-style: none;
  }

  & li:hover {
    color: @text-dark;
  }
}
</style>
