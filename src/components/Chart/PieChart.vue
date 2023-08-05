<template>
  <ContentWithBackground>
    <p class="font-bold text-primary-gray">{{ title }}</p>
    <PieTest class="" />
  </ContentWithBackground>
</template>

<script>
import PieTest from "@/components/Chart/PieTest.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";

export default {
  components: {
    PieTest,
    ContentWithBackground,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
