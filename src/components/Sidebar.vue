<template>
  <div
    class="h-screen bg-primary-gray"
    :class="{
      fixed: isFixed && !app.sidebar,
      'top-0': isFixed && !app.sidebar,
      'left-0': isFixed && !app.sidebar,
      'w-1/5': isFixed,
    }"
  >
    <router-link
      @click="app.sidebar = false"
      to="/sekilas"
      class="flex items-center justify-center w-full mt-10 mb-4 xl:gap-3 lg:gap-4 xl:flex-row lg:flex-col"
    >
      <img src="@/assets/government.svg" class="w-10" alt="SI Government" />
      <p class="font-bold text-white text-center">SI Government</p>
    </router-link>
    <div class="flex flex-col gap-1">
      <router-link
        to="/sekilas"
        class="title-one mx-3"
        @click="app.sidebar = false"
        >Sekilas</router-link
      >
      <div class="title-one mx-3">Bahan Bakar</div>
      <MenuSubItemVue
        title="Pembelian Bahan Bakar"
        @click="app.sidebar = false"
        to="/bahan-bakar"
      />
      <MenuSubItemVue
        title="Penggunaan Subsidi"
        @click="app.sidebar = false"
        to="/bahan-bakar/penggunaan"
      />
      <MenuSubItemVue
        title="Pengajuan Subsidi"
        @click="app.sidebar = false"
        to="/bahan-bakar/pengajuan"
      />
      <div class="title-one mx-3">Lalu Lintas</div>
      <MenuSubItemVue
        title="Data Kecelakaan"
        @click="app.sidebar = false"
        to="/lalu-lintas/kecelakaan"
      />
      <MenuSubItemVue
        title="Data Pelanggaran"
        @click="app.sidebar = false"
        to="/lalu-lintas/pelanggaran"
      />
    </div>
  </div>
</template>

<script>
import MenuSubItemVue from "@/components/Title/MenuSubItem.vue";
import { useApp } from "@/stores";

export default {
  components: {
    MenuSubItemVue,
  },
  data() {
    return {
      isFixed: false,
    };
  },
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
  methods: {
    handleScroll() {
      const sidebarElement = this.$el;
      const scrollTop = window.scrollY || window.pageYOffset;

      this.isFixed = scrollTop > sidebarElement.offsetTop;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
