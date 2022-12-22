<!-- 侧边栏目 -->

<template>
  <div :class="nav.wrap">
    <div :class="nav.banner">
      <span :class="nav['banner-bold']">HORIZEN</span> FREE
    </div>
    <div :class="nav.links">
      <div
        v-for="link in navLinks"
        :key="link.link"
        :class="[nav.link, { [nav['link-active']]: link.link === route.path }]">
        <BaseIcon :name="link.icon" :class="nav.icons" />
        <RouterLink :to="link.link">{{ link.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// 侧边栏目链接
const navLinks = ref([
  { name: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
  { name: 'Marketplace', link: '/marketplace', icon: 'marketplace' },
  { name: 'Tables', link: '/tables', icon: 'table' },
  { name: 'Kanban', link: '/kanban', icon: 'kanban' },
  { name: 'Profile', link: '/profile', icon: 'profile' }
]);

// 当前路由信息
const route = useRoute();
</script>

<style lang="less" module="nav">
.wrap {
  width: 100%;
}

.banner {
  width: 100%;
  height: 129px;
  line-height: 129px;
  text-align: center;
  font-size: 26px;
  border-bottom: 1px solid @border-light;
}
.banner-bold {
  font-weight: 700;
}

.icons {
  font-size: 24px;
  margin-right: 13px;
}

.links {
  width: 100%;
  margin-top: 28px;
}

.link {
  height: 52px;
  line-height: 32px;
  width: 100%;
  padding: 10px 0 10px 33px;
  box-sizing: border-box;
  color: @text-light;
  cursor: pointer;
  &:hover {
    background-color: @hover;
  }
}
.link-active {
  color: @text-dark;
  background-color: @hover;
  position: relative;
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    width: 4px;
    height: 100%;
    border-radius: 2px;
    background-color: @icon-purple;
  }

  & > .icons {
    color: @icon-purple;
  }
}
</style>
