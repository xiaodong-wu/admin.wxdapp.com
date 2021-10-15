<template>
  <div>
    <div id="NetworkChart" :style="{ width: '100%', height: '600px' }"></div>
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
      let NetworkChart = this.$echarts.init(document.getElementById("NetworkChart"));
      // 绘制图表
      NetworkChart.setOption({
        title: {
          text: "",
          subtext: "",
          top: 10,
          left: 10,
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          type: "scroll",
          bottom: 10,
          data: (function () {
            var list = [];
            for (var i = 1; i <= 28; i++) {
              list.push(i + 2000 + "");
            }
            return list;
          })(),
        },
        visualMap: {
          bottom: 50,
          right: 10,
          color: ["red", "yellow"],
          calculable: true,
        },
        radar: {
          indicator: [
            { text: "IE8-", max: 400 },
            { text: "IE9+", max: 400 },
            { text: "Safari", max: 400 },
            { text: "Firefox", max: 400 },
            { text: "Chrome", max: 400 },
          ],
        },
        series: (function () {
          var series = [];
          for (var i = 1; i <= 28; i++) {
            series.push({
              type: "radar",
              symbol: "none",
              lineStyle: {
                width: 1,
              },
              emphasis: {
                areaStyle: {
                  color: "rgba(0,250,0,0.3)",
                },
              },
              data: [
                {
                  value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2,
                  ],
                  name: i + 2000 + "",
                },
              ],
            });
          }
          return series;
        })(),
      });
    },
  },
};
</script>



<style scoped>
</style>