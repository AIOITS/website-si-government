<template>
  <div :style="chartContainerStyle">
    <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PieController, ArcElement);

export default {
  name: "PieChart",
  components: { Pie },
  computed: {
    chartContainerStyle() {
      return {
        width: "40vh",
        height: "50vh",
        "@media (max-width: 1023px)": {
          width: "50vh",
          height: "60vh",
        },
        "@media (max-width: 767px)": {
          width: "60vh",
          height: "70vh",
        },
      };
    },
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    };
  },
};
</script>
