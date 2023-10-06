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
import { useApp } from "@/stores";

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
      chartData: {
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
      },
      chartOptions: {
        responsive: true,
        parsing: true,
        normalized: true,
      },
    };
  },
  mounted() {
    // this.renderChart(this.chartData, this.chartOptions);
    // console.log("this.chartData.labels");
    // console.log(this.app.history_pengisian_by_date.labels);
  },
  async created() {
    // await this.app.useHistoryPengisianByDate();
    console.log("in created");
    console.log(this.app.history_pengisian_by_date);
  },
  watch: {
    "app.history_pengisian_by_date": {
      handler() {
        this.chartData.labels = this.app.history_pengisian_by_date.labels;
        this.chartData.datasets[0].data =
          this.app.history_pengisian_by_date.subsidi;
        this.chartData.datasets[1].data =
          this.app.history_pengisian_by_date.non_subsidi;
        // console.log("watch: ");
        // console.log(this.chartData.labels);
      },
      deep: true,
    },
  },
};
</script>
