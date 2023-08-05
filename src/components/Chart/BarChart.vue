<template>
  <ContentWithBackground>
    <!-- title main graphics -->
    <div class="flex flex-row items-center justify-between">
      <p class="text-lg font-bold text-primary-gray">{{ title }}</p>
      <div
        v-if="is_sekilas"
        class="flex flex-row items-center justify-between gap-1 cursor-pointer hover:underline hover:underline-offset-2 hover:decoration-secondary-gray"
      >
        <p class="text-sm text-primary-gray">Laporan Lengkap</p>
        <img
          src="@/assets/arrow-down.svg"
          class="w-3 -rotate-90 text-secondary-gray"
          alt=""
        />
      </div>
    </div>
    <!-- info box main graphics -->
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
    <!-- main graphics -->
    <div class="flex flex-row items-center justify-center w-full max-h-96">
      <TestVue />
    </div>
  </ContentWithBackground>
</template>

<script>
import ColorBox from "@/components/Content/ColorBox.vue";
import TestVue from "@/components/Chart/Test.vue";
import ContentWithBackground from "@/components/Content/ContentWithBackground.vue";

export default {
  components: {
    ColorBox,
    TestVue,
    ContentWithBackground,
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
};
</script>
