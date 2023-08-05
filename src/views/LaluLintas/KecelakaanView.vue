<template>
  <Dashboard nav_title="Lalu Lintas" nav_subtitle="Data Kecelakaan">
    <!-- title content -->
    <TitleOnScreen
      title="Data Kecelakaan"
      sub_title="Data kecelakaan lalu lintas yang terjadi"
    />
    <!-- all content -->
    <div
      class="lg:grid lg:grid-cols-2 lg:gap-4 lg:justify-items-stretch lg:content-stretch flex flex-center flex-col"
    >
      <ContentWithBackground v-for="index in 5" :key="index">
        <TitleContent title="Jumlah Kecelakaan">
          <EditBox title="2018 - 2022" />
        </TitleContent>
        <!-- modal for time -->
        <Modal
          class=""
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
    </div>
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
