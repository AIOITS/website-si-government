<template>
  <ContentWithBackground>
    <p class="font-bold text-primary-gray">{{ title }}</p>
    <PieChart class="self-center w-full" :chartData="chartData" />
  </ContentWithBackground>
</template>

<script>
import PieChart from "@/components/Chart/PieChart.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";

export default {
  components: {
    PieChart,
    ContentWithBackground,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
};
</script>
