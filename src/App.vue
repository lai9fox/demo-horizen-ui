<template>
  <div :class="app.wrap">
    <nav :class="app.nav">
      123
    </nav>
    <main :class="app.main">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang="less" module="app">
.wrap {
  display: flex;
  width: 100%;
  height: 100%;
}
.nav {
  width: 290px;
  background-color: yellowgreen;
}
.main {
  flex: 1;
  background-color: aquamarine;
}
</style>
