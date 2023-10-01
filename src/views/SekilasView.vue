<script setup></script>

<template>
  <Dashboard nav_title="Sekilas">
    <!-- title content -->
    <TitleOnScreen title="Sekilas" sub_title="Rangkuman Data Terkait BBM" />
    <!-- first content -->
    <BarComponent :is_sekilas="true" title="Data Pembelian BBM (Kiloliter)" />
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
        <RoundedColorBox
          title="Sumatra"
          @click="is_active_class(0)"
          :is_active="is_active[0]"
        />
        <RoundedColorBox
          title="Jawa"
          @click="is_active_class(1)"
          :is_active="is_active[1]"
        />
        <RoundedColorBox
          title="Kalimantan"
          @click="is_active_class(2)"
          :is_active="is_active[2]"
        />
        <RoundedColorBox
          title="Sulawesi"
          @click="is_active_class(3)"
          :is_active="is_active[3]"
        />
        <RoundedColorBox
          title="Maluku"
          @click="is_active_class(4)"
          :is_active="is_active[4]"
        />
        <RoundedColorBox
          title="Nusa Tenggara"
          @click="is_active_class(5)"
          :is_active="is_active[5]"
        />
        <RoundedColorBox
          title="Papua"
          @click="is_active_class(6)"
          :is_active="is_active[6]"
        />
      </div>
      <!-- maps -->
      <div class="flex flex-row items-center justify-center w-full">
        <img
          :src="image_url[getActiveIndex()]"
          class="w-10/12"
          alt="Indonesia"
        />
      </div>
    </div>
  </Dashboard>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import TitleNavBar from "@/components/Title/TitleNavBar.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import ColorBox from "@/components/Content/ColorBox.vue";
import BarChart from "@/components/Chart/BarChart.vue";
import RoundedColorBox from "@/components/Content/RoundedColorBox.vue";
import Dashboard from "@/views/Dashboard.vue";
import BarComponent from "@/components/Chart/BarComponent.vue";

export default {
  components: {
    Sidebar,
    TitleNavBar,
    TitleOnScreen,
    ColorBox,
    BarChart,
    RoundedColorBox,
    Dashboard,
    BarComponent,
  },
  data() {
    return {
      is_active: [true, false, false, false, false, false, false],
      image_url: [
        "/src/assets/persebaran/sumatra.svg",
        "/src/assets/persebaran/jawa.svg",
        "/src/assets/persebaran/kalimantan.svg",
        "/src/assets/persebaran/sulawesi.svg",
        "/src/assets/persebaran/maluku.svg",
        "/src/assets/persebaran/nusa_tenggara.svg",
        "/src/assets/persebaran/papua.svg",
      ],
    };
  },
  methods: {
    is_active_class(index) {
      this.is_active = this.is_active.map((item, i) => i === index);
    },
    getActiveIndex() {
      return this.is_active.indexOf(true);
    },
  },
};
</script>
