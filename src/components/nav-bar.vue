<!-- 侧边栏目 -->

<template>
  <div :class="bem('wrap')">
    <div :class="bem('banner')">
      <span :class="bem('banner-bold')">HORIZEN</span> FREE
    </div>
    <div :class="bem('links')">
      <div
        v-for="link in navLinks"
        :key="link.link"
        :class="bem(['link', { 'link-active': link.link === route.path }])">
        <BaseIcon :name="link.icon" :class="bem('icons')" />
        <RouterLink :to="link.link">{{ link.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const bem = inject('$bem')('h-nav');
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

<style lang="less">
.h-nav {
  &__wrap {
    width: 100%;
  }

  &__banner {
    width: 100%;
    height: 129px;
    border-bottom: 1px solid @border-light;
    font-size: 26px;
    line-height: 129px;
    text-align: center;
  }

  &__banner-bold {
    font-weight: 700;
  }

  &__icons {
    margin-right: 13px;
    font-size: 24px;
  }

  &__links {
    width: 100%;
    margin-top: 28px;
  }

  &__link {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    padding: 10px 0 10px 33px;
    color: @text-light;
    cursor: pointer;
    line-height: 32px;

    &:hover {
      background-color: @hover;
    }
  }

  &__link-active {
    position: relative;
    background-color: @hover;
    color: @text-dark;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      width: 4px;
      height: 100%;
      border-radius: 2px;
      background-color: @icon-purple;
      content: "";
    }

    & > .h-nav__icons {
      color: @icon-purple;
    }
  }
}
</style>
