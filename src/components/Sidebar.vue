<template>
  <div class="mx-4">
    <div
      class="flex items-center justify-center w-full mt-10 mb-4 xl:gap-3 lg:gap-4 xl:flex-row lg:flex-col"
    >
      <img src="@/assets/government.svg" class="w-10" alt="SI Government" />
      <p class="font-bold text-white">SI Government</p>
    </div>
    <div class="flex flex-col gap-4">
      <div class="title-one">Sekilas</div>
      <div class="title-one">Bahan Bakar</div>
      <MenuSubItemVue title="Pembelian Bahan Bakar" />
      <MenuSubItemVue title="Penggunaan Subsidi" />
      <MenuSubItemVue title="Pengajuan Subsidi" />
      <div class="title-one">Lalu Lintas</div>
      <MenuSubItemVue title="Data Kecelakaan" />
      <MenuSubItemVue title="Data Pelanggaran" />
    </div>
  </div>
</template>

<script>
import MenuSubItemVue from "@/components/Title/MenuSubItem.vue";

export default {
  components: {
    MenuSubItemVue,
  },
};
</script>
