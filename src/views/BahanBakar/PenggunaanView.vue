<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Penggunaan Subsidi">
    <!-- title content -->
    <TitleContent
      title="Penggunaan Subsidi"
      sub_title="Data terkait pembelian bahan bakar"
    />
  </Dashboard>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import TitleContent from "@/components/Title/TitleContent.vue";

export default {
  components: {
    Dashboard,
    TitleContent,
  },
};
</script>
