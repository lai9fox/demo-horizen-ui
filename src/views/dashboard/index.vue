<template>
  <div :class="dashboard.wrap">
    <div :class="dashboard.tips">
      <Tip></Tip>
      <Tip></Tip>
      <Tip></Tip>
      <Tip></Tip>
      <Tip></Tip>
      <Tip></Tip>
    </div>
  </div>
</template>

<script setup>
import Tip from '@/components/tip.vue';
</script>

<style lang="less" module="dashboard">
.wrap {
  height: 100%;
}

.tips {
  display: flex;
  justify-content: space-between;
}
</style>
