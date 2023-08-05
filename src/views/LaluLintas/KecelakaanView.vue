<template>
  <Dashboard nav_title="Lalu Lintas" nav_subtitle="Data Kecelakaan">
    <TitleOnScreen
      title="Data Kecelakaan"
      sub_title="Data kecelakaan lalu lintas yang terjadi"
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
