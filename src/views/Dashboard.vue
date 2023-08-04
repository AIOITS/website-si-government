<template>
  <div class="container flex flex-row">
    <!-- Sidebar Menu -->
    <div class="hidden w-1/5 gap-4 bg-primary-gray lg:flex lg:flex-col">
      <Sidebar />
    </div>
    <div class="w-full">
      <!-- Main Content -->
      <div
        class="flex flex-row justify-between px-5 py-3 border-b-2 border-gray-300 shadow-md"
      >
        <div class="flex flex-row items-center w-2/3 gap-5">
          <!-- Burger Menu -->
          <div
            class="flex p-1 cursor-pointer lg:hidden hover:bg-gray-200 hover:rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <TitleNavBar title="Sekilas" />
        </div>
        <div class="flex flex-row items-center justify-center gap-4">
          <div class="w-4">
            <img src="@/assets/bell.svg" alt="notify" />
            <!-- <img src="@/assets/bell_with_notify.svg" alt="notify" /> -->
          </div>
          <div
            class="flex flex-row items-center justify-center gap-1 cursor-pointer hover:underline hover:underline-offset-2"
          >
            <img src="@/assets/help.svg" alt="help" />
            <p class="text-sm">Bantuan</p>
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
          </div>
          <div
            class="flex flex-row items-center justify-center gap-1 cursor-pointer hover:underline hover:underline-offset-2"
          >
            <p class="text-sm">Admin</p>
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="mx-5 mb-20 mt-7">
        <div class="flex flex-col w-full gap-5">
          <!-- title content -->
          <TitleContent
            title="Sekilas"
            sub_title="Rangkuman Data Terkait BBM"
          />
          <!-- content in main graphics -->
          <div
            class="flex flex-col w-full gap-4 p-5 rounded-md bg-secondary-white"
          >
            <!-- title main graphics -->
            <div class="flex flex-row items-center justify-between">
              <p class="text-lg font-bold text-primary-gray">
                Data Pembelian BBM (Kiloliter)
              </p>
              <div
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
            <div
              class="flex flex-col flex-wrap w-full lg:grid lg:grid-flow-col lg:justify-stretch"
            >
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
            <div
              class="flex flex-row items-center justify-center w-full max-h-96"
            >
              <TestVue />
            </div>
          </div>
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
              <div class="py-1 rounded-xl bg-dark-blue">
                <p class="font-bold text-center text-white">Sumatra</p>
              </div>
              <RoundedColorBox title="Jawa" />
              <RoundedColorBox title="Kalimantan" />
              <RoundedColorBox title="Sulawesi" />
              <RoundedColorBox title="Maluku" />
              <RoundedColorBox title="Nusa Tenggara" />
              <RoundedColorBox title="Papua" />
            </div>
            <!-- maps -->
            <div class="flex flex-row items-center justify-center w-full">
              <img
                src="@/assets/indonesia.png"
                class="w-10/12"
                alt="Indonesia"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import TitleNavBar from "@/components/Title/TitleNavBar.vue";
import TitleContent from "@/components/Title/TitleContent.vue";
import ColorBox from "@/components/Content/ColorBox.vue";
import TestVue from "@/components/Chart/Test.vue";
import RoundedColorBox from "@/components/Content/RoundedColorBox.vue";

export default {
  components: {
    Sidebar,
    TitleNavBar,
    TitleContent,
    ColorBox,
    TestVue,
    RoundedColorBox,
  },
};
</script>
