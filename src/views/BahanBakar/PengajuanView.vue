<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Pengajuan Subsidi">
    <!-- title content -->
    <TitleOnScreen
      title="Pengajuan Subsidi"
      sub_title="Data terkait pembelian bahan bakar"
    />
    <!-- first content -->
    <ContentWithBackground>
      <TitleContent title="Pengajuan subsidi BBM">
        <EditBox title="1 tahun terakhir" />
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
