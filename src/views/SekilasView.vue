<script setup></script>

<template>
  <Dashboard nav_title="Sekilas">
    <!-- title content -->
    <TitleOnScreen title="Sekilas" sub_title="Rangkuman Data Terkait BBM" />
    <!-- first content -->
    <BarChart :is_sekilas="true" title="Data Pembelian BBM (Kiloliter)" />
    <!-- secondary content -->
    <div class="flex flex-col w-full gap-7">
      <!-- title secondary -->
      <p class="text-lg font-bold text-primary-gray">
        Persebaran Kuota BBM di Indonesia
      </p>
      <!-- list province -->
      <div
        class="flex flex-col flex-wrap w-full p-2 lg:grid lg:grid-flow-col lg:justify-stretch bg-secondary-white"
      >
        <div class="py-1 rounded-xl bg-dark-blue">
          <p class="font-bold text-center text-white">Sumatra</p>
        </div>
        <RoundedColorBox title="Jawa" />
        <RoundedColorBox title="Kalimantan" />
        <RoundedColorBox title="Sulawesi" />
        <RoundedColorBox title="Maluku" />
        <RoundedColorBox title="Nusa Tenggara" />
        <RoundedColorBox title="Papua" />
      </div>
      <!-- maps -->
      <div class="flex flex-row items-center justify-center w-full">
        <img src="@/assets/indonesia.png" class="w-10/12" alt="Indonesia" />
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import TitleNavBar from "@/components/Title/TitleNavBar.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import ColorBox from "@/components/Content/ColorBox.vue";
import TestVue from "@/components/Chart/Test.vue";
import RoundedColorBox from "@/components/Content/RoundedColorBox.vue";
import Dashboard from "@/views/Dashboard.vue";
import BarChart from "@/components/Chart/BarChart.vue";

export default {
  components: {
    Sidebar,
    TitleNavBar,
    TitleOnScreen,
    ColorBox,
    TestVue,
    RoundedColorBox,
    Dashboard,
    BarChart,
  },
};
</script>
