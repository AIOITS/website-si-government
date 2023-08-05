<template>
  <Pie
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    class="w-56"
  />
</template>

<script>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController, // Import PieController
  ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, PieController, ArcElement); // Register PieController

export default {
  name: "PieChart",
  components: { Pie },
  data() {
    return {
      chartData: {
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
        datasets: [
          {
            label: "Dataset 1",
            data: [20, 50, 30, 70, 40], // Replace this with your actual data
            backgroundColor: [
              "#ff6384",
              "#ffcd56",
              "#36a2eb",
              "#4bc0c0",
              "#9966ff",
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          //   title: {
          //     display: true,
          //     text: "Chart.js Pie Chart",
          //   },
        },
      },
    };
  },
};
</script>
