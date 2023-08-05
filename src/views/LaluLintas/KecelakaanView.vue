<template>
  <Dashboard nav_title="Lalu Lintas" nav_subtitle="Data Kecelakaan">
    <!-- title content -->
    <TitleOnScreen
      title="Data Kecelakaan"
      sub_title="Data kecelakaan lalu lintas yang terjadi"
    />
    <!-- all content -->
    <div
      class="lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-items-stretch lg:content-stretch flex flex-center flex-col"
    >
      <ContentWithBackground v-for="index in 5" :key="index">
        <TitleContent title="Jumlah Kecelakaan">
          <EditBox title="2018 - 2022" />
        </TitleContent>
        <Line />
      </ContentWithBackground>
    </div>
  </Dashboard>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";
import TitleContent from "@/components/Title/TitleContent.vue";
import Line from "@/components/Chart/Line.vue";
import EditBox from "@/components/Content/EditBox.vue";

export default {
  components: {
    Dashboard,
    TitleOnScreen,
    ContentWithBackground,
    TitleContent,
    Line,
    EditBox,
  },
};
</script>
