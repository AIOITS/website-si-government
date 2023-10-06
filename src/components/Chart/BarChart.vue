<template>
  <Bar :options="chartOptions" :data="chartData" />
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
import { useApp } from "../../stores/index";

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
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: [...this.app.history_pengisian_by_date.labels],
        datasets: [
          {
            label: "Subsidi",
            data: [...this.app.history_pengisian_by_date.subsidi],
            backgroundColor: "#d5a419",
          },
          {
            label: "Non Subsidi",
            data: [...this.app.history_pengisian_by_date.non_subsidi],
            backgroundColor: "#00b595",
          },
        ],
      };
    },
  },
};
</script>
