<template>
  <div :class="dashboard.wrap">
    <div :class="dashboard.tips">
      <Tip v-for="tip in tipsData" :key="tip.title" v-bind="tip">
        <template v-if="tip.append" #append>
          <span :class="tip.append > 0 ? dashboard.up : dashboard.down">
            {{ tip.append > 0 ? `+${tip.append}%` : `-${tip.append}%` }}
          </span> since last month
        </template>
      </Tip>
    </div>
    <Month />
  </div>
</template>

<script setup lang="ts">
import Tip from '@/components/tip.vue';
import Month from './component/month.vue';
import { ref } from 'vue';

const tipsData = ref([
  { prefix: 'table', title: 'Earnings', content: '$350.4' },
  { prefix: 'dollar', title: 'Spend this month', content: '$642.39' },
  { title: 'Sales', content: '$574.34', append: '23' },
  { title: 'Your balance', content: '$1000', suffix: 'dollar' },
  { prefix: 'tasks', title: 'New Tasks', content: '154' },
  { prefix: 'projects', title: 'Total Project', content: '2935' }
]);
</script>

<style lang="less" module="dashboard">
.wrap {
  height: 100%;
}

.tips {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.up {
  color: @text-success;
}

.down {
  color: @text-error;
}
</style>
