<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Penggunaan Subsidi">
    <!-- title content -->
    <TitleOnScreen
      title="Penggunaan Subsidi"
      sub_title="Data terkait pembelian bahan bakar"
    />
    <!-- first content -->
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
