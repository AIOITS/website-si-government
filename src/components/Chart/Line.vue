<template>
  <div style="height: 50vh">
    <Line :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import "chart.js/auto";

export default {
  name: "LineChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
            textDirection: "rtl",
          },
        },
      },
    };
  },
};
</script>
