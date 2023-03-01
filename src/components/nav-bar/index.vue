<!-- 侧边栏目 -->

<template>
  <div :class="bem('wrap')">
    <div :class="bem('banner')">
      <span :class="bem('banner:show')">
        <span :class="bem(['banner:bold'])">HORIZEN</span> FREE
      </span>
      <span :class="bem(['banner:bold', 'banner:hidden'])">H</span>
    </div>
    <div :class="bem('links')">
      <div
        v-for="link in navLinks"
        :key="link.link"
        :class="bem(['link', { 'link:active': link.link === route.path }])"
        @click="routeClick(link)"
      >
        <HIcon :name="link.icon" :class="bem('icons')" />
        <RouterLink :to="link.link" :class="bem('text:hidden')">{{ link.name }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import createBem from '@lai9fox/bem';
const bem = createBem('h-nav');

interface RouteLink {
  name: string,
  link: string,
  icon: string,
}

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

const router = useRouter();


function routeClick(link: RouteLink) {
  router.push(link.link);
}
</script>

<style lang="less">
.h-nav {
  &__wrap {
    // width: 100%;
    width: 290px;
    transition: width 0.6s;
  }

  &__banner {
    width: 100%;
    height: 129px;
    border-bottom: 1px solid @border-light;
    font-size: 26px;
    line-height: 129px;
    text-align: center;
  }

  &__banner--bold {
    font-weight: 700;
  }

  &__banner--hidden {
    display: none;
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

  &__link--active {
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

    /* stylelint-disable-next-line selector-class-pattern */
    & > .h-nav__icons {
      color: @icon-purple;
    }
  }

  &__text--hidden {
    transition: display 0.3s;
  }
}

@media screen and (max-width: 1200px) {
  .h-nav {
    &__wrap {
      width: 60px;
      transition: width 0.3s;
    }

    &__banner--show {
      display: none;
    }

    &__banner--hidden {
      display: initial;
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 0;
    }

    &__icons {
      margin: 0;
    }

    &__text--hidden {
      display: none;
    }
  }
}
</style>
