<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Penggunaan Subsidi">
    <!-- title content -->
    <TitleOnScreen
      title="Penggunaan Subsidi"
      sub_title="Data terkait pembelian bahan bakar"
    />
    <!-- first content -->
    <ContentWithBackground>
      <TitleContent title="Penggunaan dana subsidi BBM">
        <EditBox title="2005 - 2002" />
      </TitleContent>
      <Line />
    </ContentWithBackground>
  </Dashboard>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";
import TitleContent from "@/components/Title/TitleContent.vue";
import EditBox from "@/components/Content/EditBox.vue";
import Line from "@/components/Chart/Line.vue";

export default {
  components: {
    Dashboard,
    TitleOnScreen,
    ContentWithBackground,
    TitleContent,
    EditBox,
    Line,
  },
};
</script>
