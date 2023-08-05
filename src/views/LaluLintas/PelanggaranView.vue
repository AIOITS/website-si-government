<template>
  <Dashboard nav_title="Lalu Lintas" nav_subtitle="Data Pelanggaran">
    <TitleOnScreen
      title="Data Pelanggaran"
      sub_title="Data pelanggaran lalu lintas yang terjadi"
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
