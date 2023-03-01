<template>
  <div ref="chart" :class="bem()" />
</template>

<script setup lang="ts">
import { ref, inject, watch, onMounted, nextTick } from 'vue';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
import createBem from '@lai9fox/bem';

echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const bem = createBem('h-chart');

const props = defineProps({
  /** 图表配置与数据 */
  chartOption: {
    type: Object,
    required: true
  }
});

const chart = ref(null);
let eChartInstance = null;

/** 监测图表配置、数据并更新 echart */
watch(() => props.chartOption, option => {
  nextTick(() => {
    eChartInstance.setOption(option);
  });
}, {
  immediate: true
});

/** 挂载元素后初始化 echart 实例 */
onMounted(() => {
  console.log(chart);
  eChartInstance = echarts.init(chart.value);
});
</script>

<style lang="less">
.h-chart {
  width: 100%;
  height: 100%;
}
</style>
