<template>
  <div>
    <div id="PieChart" :style="{ width: '100%', height: '600px' }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let PieChart = this.$echarts.init(document.getElementById("PieChart"));
      // 绘制图表
      PieChart.setOption({
        legend: {
          top: "bottom",
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 250],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      });
    },
  },
};
</script>



<style scoped>
</style>