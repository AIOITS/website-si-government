<template>
  <Dashboard nav_title="Lalu Lintas" nav_subtitle="Data Pelanggaran">
    <TitleContent
      title="Data Pelanggaran"
      sub_title="Data pelanggaran lalu lintas yang terjadi"
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
