<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [
          {
            label: "Blue Data",
            data: [20, 50, 30],
            backgroundColor: "#00bdf7",
          },
          {
            label: "Green Data",
            data: [40, 30, 40],
            backgroundColor: "#00b595",
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
