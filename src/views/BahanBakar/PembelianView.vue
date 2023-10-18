<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Pembelian Bahan Bakar">
    <!-- title content -->
    <div class="flex flex-row justify-between">
      <TitleOnScreen
        title="Pembelian Bahan Bakar"
        sub_title="Data terkait pembelian bahan bakar"
      />
      <div class="flex flex-row flex-wrap items-end justify-end gap-2">
        <EditBox title="Wilayah" sub_title="Indonesia" />
        <EditBox title="Jenis bahan bakar" sub_title="Minyak keseluruhan" />
        <EditBox title="1 tahun terakhir" />
        <div>
          <!-- modal box for wilayah -->
          <Modal
            class="hidden"
            title="Wilayah"
            custom_class="right-0 top-2"
            @cancel="app.cancelFunction"
            @terapkan="app.getProvince"
          >
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
          </Modal>
          <!-- modal box for jenis bahan bakar -->
          <Modal
            class="hidden"
            title="Jenis bahan bakar"
            custom_class="right-0 top-2"
            @cancel="app.cancelFunction"
            @terapkan="app.getProvince"
          >
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
          </Modal>
          <!-- modal for time -->
          <Modal
            class="hidden"
            title="Rentang"
            custom_class="right-0 top-2"
            @cancel="app.cancelFunction"
            @terapkan="app.getProvince"
          >
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
          </Modal>
        </div>
      </div>
    </div>
    <!-- first content -->
    <BarComponent :is_sekilas="false" title="Data Pembelian BBM" />
    <!-- secondary content -->
    <div class="gap-3 my-5 full-content">
      <PieComponent
        title="Perbandingan Pembelian BBM"
        class="py-3"
        :chartData="getPembelianBBM"
      />
      <PieComponent
        title="Perbandingan Jenis Kendaraan"
        class="py-3"
        :chartData="getJenisKendaraan"
      />
      <PieComponent
        title="Perbandingan Jenis BBM"
        class="py-3"
        :chartData="getJenisBBM"
      />
    </div>
    <!-- third content -->
    <ContentWithBackground>
      <!-- third title content -->
      <div class="flex flex-row items-center justify-between">
        <p class="text-lg font-bold text-primary-gray">Data Pembelian BBM</p>
        <div
          class="flex-row flex-wrap items-center justify-end gap-2 flex-warp flex-center"
        >
          <EditBox title="Wilayah" sub_title="Suarabaya" />
          <EditBox title="1 tahun terakhir" />
          <!-- modal box for wilayah -->
          <Modal
            class="hidden"
            title="Wilayah"
            custom_class="right-0 top-4"
            @cancel="app.cancelFunction"
            @terapkan="app.getProvince"
          >
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
          </Modal>
          <!-- modal box rentang -->
          <Modal
            class="hidden"
            title="Rentang"
            custom_class="right-0 top-4"
            @cancel="app.cancelFunction"
            @terapkan="app.getProvince"
          >
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
            <div class="flex flex-row items-center justify-center gap-2">
              <input type="radio" name="list" id="list" class="w-3 h-3" />
              <label for="list" class="text-xs">Tanggal terbaru</label>
            </div>
          </Modal>
        </div>
      </div>
      <!-- info box third content -->
      <div class="full-content">
        <ColorBox
          class="bg-primary-yellow"
          :title="app.bahan_bakar.subsidi.toFixed(2).toString()"
          sub_title="Total Penjualan BBM bersubsidi"
        />
        <ColorBox
          class="bg-primary-green"
          :title="app.bahan_bakar.non_subsidi.toFixed(2).toString()"
          sub_title="Total Penjualan BBM bersubsidi"
        />
        <ColorBox
          class="bg-primary-blue"
          :title="app.bahan_bakar.total.toFixed(2).toString()"
          sub_title="Total Penjualan BBM bersubsidi"
        />
      </div>
      <!-- table -->
      <TableContent :data="currentPageData" />
      <!-- pagination -->
      <div class="flex flex-row items-end justify-end">
        <div
          @click="previousPage()"
          class="p-2 text-sm bg-white border-2 rounded-sm border-fourth-gray"
          :class="[
            currentPage === 1
              ? 'cursor-not-allowed text-third-gray'
              : 'cursor-pointer ',
          ]"
        >
          Sebelumnya
        </div>
        <div
          class="px-3 py-2 text-sm border-2 rounded-sm cursor-pointer border-fourth-gray"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          @click="goToPage(pageNumber)"
          :class="[
            pageNumber === currentPage
              ? 'bg-primary-gray text-white'
              : 'bg-white text-primary-gray',
          ]"
        >
          {{ pageNumber }}
        </div>
        <div
          @click="nextPage()"
          class="p-2 text-sm bg-white border-2 rounded-sm border-fourth-gray"
          :class="[
            currentPage === totalPages
              ? 'cursor-not-allowed text-third-gray'
              : 'cursor-pointer ',
          ]"
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
import BarComponent from "@/components/Chart/BarComponent.vue";
import PieComponent from "@/components/Chart/PieComponent.vue";
import ColorBox from "@/components/Content/ColorBox.vue";
import TableContent from "@/components/Table/TableContent.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";
import Modal from "@/components/Modal/Modal.vue";
import { useApp } from "@/stores";

export default {
  components: {
    Dashboard,
    TitleOnScreen,
    EditBox,
    BarComponent,
    PieComponent,
    ColorBox,
    TableContent,
    ContentWithBackground,
    Modal,
  },
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
  async created() {
    await Promise.all([
      this.app.useJenisKendaraan(),
      this.app.useJenisBahanBakar(),
      this.app.useListSPBU(),
    ]);
  },
  data() {
    return {
      subsidi:
        (this.app.bahan_bakar.subsidi / this.app.bahan_bakar.total) * 100,
      non_subsidi:
        (this.app.bahan_bakar.non_subsidi / this.app.bahan_bakar.total) * 100,
      perbandingan_pembelian_bbm: {},
      perbandingan_jenis_kendaraan: {},
      perbandingan_jenis_bbm: {},
      total_jenis_kendaraan: this.app.jenis_kendaraan.total,
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    getPembelianBBM() {
      const subsidi = parseInt(
        (
          (this.app.bahan_bakar.subsidi / this.app.bahan_bakar.total) *
          100
        ).toFixed(2),
      );
      const non_subsidi = parseInt(
        (
          (this.app.bahan_bakar.non_subsidi / this.app.bahan_bakar.total) *
          100
        ).toFixed(2),
      );
      return (this.perbandingan_pembelian_bbm = {
        labels: ["Subsidi", "Non Subsidi"],
        datasets: [
          {
            label: "Perb. Pembelian BBM",
            data: [subsidi, non_subsidi],
            backgroundColor: ["#d5a419", "#00b595"],
          },
        ],
      });
    },
    getJenisKendaraan() {
      return (this.perbandingan_jenis_kendaraan = {
        labels: this.app.jenis_kendaraan.labels,
        datasets: [
          {
            label: "Perb. Jenis Kendaraan",
            data: this.app.jenis_kendaraan.data.map(
              (element) => (element / this.app.jenis_kendaraan.total) * 100,
            ),
            backgroundColor: ["#f9c74f", "#f94144", "#f8961e", "#00b595"],
          },
        ],
      });
    },
    getJenisBBM() {
      return (this.perbandingan_jenis_bbm = {
        labels: this.app.jenis_bahan_bakar.name,
        datasets: [
          {
            label: "Perb. Pembelian BBM",
            data: this.app.jenis_bahan_bakar.jumlah.map(
              (element) => (element / this.app.jenis_bahan_bakar.total) * 100,
            ),
            backgroundColor: [
              "#f94144",
              "#00b595",
              "#f3722c",
              "#2d9cdb",
              "#f9c74f",
              "#f8961e",
            ],
          },
        ],
      });
    },
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.app.list_spbu.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.app.list_spbu.length / this.itemsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      if (pageNumber >= 1 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
  },
};
</script>
