<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Pembelian Bahan Bakar">
    <!-- title content -->
    <div class="flex flex-row justify-between">
      <TitleOnScreen
        title="Pembelian Bahan Bakar"
        sub_title="Data terkait pembelian bahan bakar"
      />
      <div class="flex-row flex-wrap gap-2 flex-center">
        <EditBox title="Wilayah" sub_title="Indonesia" />
        <EditBox title="Jenis bahan bakar" sub_title="Minyak keseluruhan" />
        <EditBox title="1 tahun terakhir" />
      </div>
    </div>
    <!-- first content -->
    <BarChart :is_sekilas="false" title="Data Pembelian BBM" />
    <!-- secondary content -->
    <div class="gap-3 my-5 full-content">
      <PieChart title="Perbandingan Pembelian BBM" class="py-3" />
      <PieChart title="Perbandingan Jenis Kendaraan" class="py-3" />
      <PieChart title="Perbandingan Jenis BBM" class="py-3" />
    </div>
    <!-- third content -->
    <ContentWithBackground>
      <!-- third title content -->
      <div class="flex flex-row items-center justify-between">
        <p class="text-lg font-bold text-primary-gray">Data Pembelian BBM</p>
        <div class="flex-row gap-2 flex-warp flex-center">
          <EditBox title="Wilayah" sub_title="Suarabaya" />
          <EditBox title="1 tahun terakhir" />
        </div>
      </div>
      <!-- info box third content -->
      <div class="full-content">
        <ColorBox
          class="bg-primary-yellow"
          title="123.654.987"
          sub_title="Total Penjualan BBM bersubsidi"
        />
        <ColorBox
          class="bg-primary-green"
          title="123.654.987"
          sub_title="Total Penjualan BBM bersubsidi"
        />
        <ColorBox
          class="bg-primary-blue"
          title="123.654.987"
          sub_title="Total Penjualan BBM bersubsidi"
        />
      </div>
      <!-- table -->
      <TableContent />
      <!-- pagination -->
      <div class="flex flex-row items-end justify-end">
        <div
          class="p-2 text-sm bg-white border-2 rounded-sm text-third-gray border-fourth-gray cursor-not-allowed"
        >
          Sebelumnya
        </div>
        <div
          class="px-3 py-2 text-sm text-white border-2 rounded-sm border-fourth-gray bg-primary-gray cursor-pointer"
        >
          1
        </div>
        <div
          class="p-2 text-sm bg-white border-2 rounded-sm text-primary-gray border-fourth-gray cursor-pointer"
        >
          Selanjutnya
        </div>
      </div>
    </ContentWithBackground>
  </Dashboard>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import EditBox from "@/components/Content/EditBox.vue";
import BarChart from "@/components/Chart/BarChart.vue";
import PieChart from "@/components/Chart/PieChart.vue";
import ColorBox from "@/components/Content/ColorBox.vue";
import TableContent from "@/components/Table/TableContent.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";

export default {
  components: {
    Dashboard,
    TitleOnScreen,
    EditBox,
    BarChart,
    PieChart,
    ColorBox,
    TableContent,
    ContentWithBackground,
  },
};
</script>
