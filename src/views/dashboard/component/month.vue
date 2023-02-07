<template>
  <BaseCard :class="month.month">
    <template #extra>
      <div :class="month['month-header']">
        <div :class="month['month-wrap']">
          <BaseIcon name="canlader" :class="month['month-canlader']" />
          <span :class="month['month-text']">This month</span>
        </div>
        <div :class="month['month-wrap']">
          <BaseIcon name="table" :class="month['month-chart']" />
        </div>
      </div>
    </template>
    <div :class="month['month-body']">
      <div :class="month['month-summary']">
      </div>
      <BaseChart :class="month['month-echart']" :chartOption="chartOption" />
    </div>
  </BaseCard>
</template>

<script setup>
import { computed } from 'vue';

const chartOption = computed(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      }
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#A3AED0',
        fontSize: 9
      },
      data: ['SET', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB']
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      }
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 18
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330],
        type: 'line',
        symbol: 'none',
        smooth: true,
        lineStyle: {
          width: 4,
          cap: 'round',
          color: '#4318FF'
        }
      },
      {
        data: [620, 732, 601, 734, 990, 830],
        type: 'line',
        symbol: 'none',
        smooth: true,
        lineStyle: {
          width: 4,
          cap: 'round',
          color: '#6AD2FF'
        }
      }
    ]
  };
});
</script>

<style lang="less" module="month">
.month {
  width: 774px;
  height: 345px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-wrap {
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: @bg-blue-gray;
  }

  &-canlader {
    width: 32px;
    height: 32px;
    color: @text-light;
    font-size: 18px;
    line-height: 32px;
  }

  &-text {
    margin-right: 16px;
    color: @text-light;
    font-size: 14px;
  }

  &-chart {
    width: 32px;
    height: 32px;
    color: @icon-purple;
    font-size: 16px;
    line-height: 32px;
  }

  &-body {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &-summary {
    width: 190px;
    height: 100%;
    // border: 1px solid red;
  }

  &-echart {
    flex: 1;
  }
}
</style>

