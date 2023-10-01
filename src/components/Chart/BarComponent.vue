<template>
  <ContentWithBackground>
    <!-- title main graphics -->
    <TitleContent :title="title">
      <router-link
        to="/bahan-bakar"
        v-if="is_sekilas"
        class="flex flex-row items-center justify-between gap-1 cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-secondary-gray"
      >
        <p class="text-sm text-primary-gray">Laporan Lengkap</p>
        <img
          src="@/assets/arrow-down.svg"
          class="w-3 -rotate-90 text-secondary-gray"
          alt=""
        />
      </router-link>
    </TitleContent>
    <!-- info box main graphics -->
    <div class="full-content">
      <ColorBox
        class="bg-primary-yellow"
        :title="app.bahan_bakar.subsidi.toString()"
        sub_title="Total Penjualan BBM bersubsidi"
      />
      <ColorBox
        class="bg-primary-green"
        :title="app.bahan_bakar.non_subsidi.toString()"
        sub_title="Total Penjualan BBM non-subsidi"
      />
      <ColorBox
        class="bg-primary-blue"
        :title="app.bahan_bakar.total.toString()"
        sub_title="Total Penjualan BBM"
      />
    </div>
    <p>{{ app.history_pengisian_by_date }}</p>
    <!-- main graphics -->
    <div class="flex flex-row items-center justify-center w-full max-h-96">
      <BarChart :data="app.history_pengisian_by_date" />
    </div>
  </ContentWithBackground>
</template>

<script>
import ColorBox from "@/components/Content/ColorBox.vue";
import BarChart from "@/components/Chart/BarChart.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";
import TitleContent from "@/components/Title/TitleContent.vue";
import { useApp } from "@/stores";
import { defineComponent, ref, onMounted, reactive, computed } from "vue";

export default {
  components: {
    ColorBox,
    BarChart,
    ContentWithBackground,
    TitleContent,
  },
  props: {
    is_sekilas: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
  async created() {
    await this.app.useHistoryPengisianByGroup();
    // await this.app.useHistoryPengisianByDate();
  },
  data() {
    return {
      subsidi: 0,
      non_subsidi: 0,
      total: 0,
    };
  },
};
</script>
