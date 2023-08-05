<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Pengajuan Subsidi">
    <TitleOnScreen
      title="Pengajuan Subsidi"
      sub_title="Data terkait pembelian bahan bakar"
    />
  </Dashboard>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";

export default {
  components: {
    Dashboard,
    TitleOnScreen,
  },
};
</script>
