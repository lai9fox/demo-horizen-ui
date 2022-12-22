<template>
  <div :class="app.wrap">
    <NavBar :class="app.nav" />
    <main :class="app.main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/nav-bar.vue';
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
  background-color: @bg-white;
}
.main {
  flex: 1;
  background-color: @bg-blue-gray;
}
</style>
