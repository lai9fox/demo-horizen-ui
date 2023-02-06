<template>
  <div :class="app.wrap">
    <NavBar :class="app.nav" />
    <Page :class="app.main" :title="title">
      <RouterView />
    </Page>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router';
import NavBar from '@/components/nav-bar.vue';
import Page from '@/views/page.vue';
import { computed } from 'vue';

// 页面自定义数据
const route = useRoute();
const title = computed(() => {
  return route.meta.title;
});
</script>

<style lang="less" module="app">
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
  color: @text-dark;
}

.nav {
  width: 290px;
  height: 100%;
  background-color: @bg-white;
}

.main {
  // height: 100%;
  // box-sizing: border-box;
  flex: 1;
  padding: 55px 20px 0;
  background-color: @bg-blue-gray;
}
</style>
