<template>
  <Dashboard nav_title="Bahan Bakar" nav_subtitle="Pengajuan Subsidi">
    <!-- title content -->
    <TitleOnScreen
      title="Pengajuan Subsidi"
      sub_title="Data terkait pembelian bahan bakar"
    />
    <!-- first content -->
    <ContentWithBackground>
      <TitleContent title="Pengajuan subsidi BBM">
        <EditBox title="1 tahun terakhir" />
      </TitleContent>
      <!-- modal for time -->
      <Modal
        class="hidden"
        title="Rentang"
        custom_class="right-0 -top-6"
        @cancel="app.cancelFunction"
        @terapkan="app.getProvince"
      >
        <div class="flex flex-row gap-2 items-center justify-center">
          <input type="radio" name="list" id="list" class="w-3 h-3" />
          <label for="list" class="text-xs">Tanggal terbaru</label>
        </div>
        <div class="flex flex-row gap-2 items-center justify-center">
          <input type="radio" name="list" id="list" class="w-3 h-3" />
          <label for="list" class="text-xs">Tanggal terbaru</label>
        </div>
        <div class="flex flex-row gap-2 items-center justify-center">
          <input type="radio" name="list" id="list" class="w-3 h-3" />
          <label for="list" class="text-xs">Tanggal terbaru</label>
        </div>
      </Modal>
      <Line />
    </ContentWithBackground>
  </Dashboard>
</template>

<script>
import Dashboard from "@/views/Dashboard.vue";
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";
import TitleContent from "@/components/Title/TitleContent.vue";
import Line from "@/components/Chart/Line.vue";
import EditBox from "@/components/Content/EditBox.vue";
import Modal from "@/components/Modal/Modal.vue";
import { useApp } from "@/stores";

export default {
  components: {
    Dashboard,
    TitleOnScreen,
    ContentWithBackground,
    TitleContent,
    Line,
    EditBox,
    Modal,
  },
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
};
</script>
