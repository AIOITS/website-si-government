<template>
  <div
    class="h-screen mx-4"
    :class="{ fixed: isFixed, 'top-0': isFixed, 'left-0': isFixed }"
  >
    <router-link
      to="/sekilas"
      class="flex items-center justify-center w-full mt-10 mb-4 xl:gap-3 lg:gap-4 xl:flex-row lg:flex-col"
    >
      <img src="@/assets/government.svg" class="w-10" alt="SI Government" />
      <p class="font-bold text-white">SI Government</p>
    </router-link>
    <div class="flex flex-col gap-4">
      <router-link to="/sekilas" class="title-one">Sekilas</router-link>
      <div class="title-one">Bahan Bakar</div>
      <MenuSubItemVue title="Pembelian Bahan Bakar" to="/bahan-bakar" />
      <MenuSubItemVue title="Penggunaan Subsidi" to="/bahan-bakar/penggunaan" />
      <MenuSubItemVue title="Pengajuan Subsidi" to="/bahan-bakar/pengajuan" />
      <div class="title-one">Lalu Lintas</div>
      <MenuSubItemVue title="Data Kecelakaan" to="/lalu-lintas/kecelakaan" />
      <MenuSubItemVue title="Data Pelanggaran" to="/lalu-lintas/pelanggaran" />
    </div>
  </div>
</template>

<script>
import MenuSubItemVue from "@/components/Title/MenuSubItem.vue";

export default {
  components: {
    MenuSubItemVue,
  },
  data() {
    return {
      isFixed: false,
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
