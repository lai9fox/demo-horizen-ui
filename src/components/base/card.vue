<template>
  <div :class="bem()">BaseCard</div>
</template>

<script setup>
import { inject } from 'vue';

const bem = inject('$bem')('h-card');
</script>

<style lang="less">
.h-card {
  border-radius: 20px;
  background-color: @bg-white;
}
</style>
