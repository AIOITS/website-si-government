<template>
  <Dashboard nav_title="Lalu Lintas" nav_subtitle="Data Kecelakaan">
    <TitleContent
      title="Data Kecelakaan"
      sub_title="Data kecelakaan lalu lintas yang terjadi"
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
