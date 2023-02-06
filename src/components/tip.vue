<template>
  <div :class="bem()">
    <div :class="bem('info')">
      <div :class="bem('top')">
        <slot name="top" />
      </div>
      <div :class="bem('major')">
        <slot />
      </div>
      <div :class="bem('bottom')">
        <slot name="bottom" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const bem = inject('$bem')('h-tip');

</script>

<style lang="less">
.h-tip {
  width: 248px;
  height: 98px;
  border-radius: 20px;
  background-color: @bg-white;
}
</style>
