<template>
  <div class="container flex flex-row">
    <!-- Sidebar Menu -->
    <div class="hidden w-1/5 gap-4 bg-primary-gray lg:flex lg:flex-col">
      <Sidebar />
    </div>
    <div class="lg:w-4/5 w-full">
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
          <TitleNavBar :title="nav_title" :sub_title="nav_subtitle" />
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
            <img
              src="@/assets/profile.png"
              class="w-5 h-5 rounded-full"
              alt=""
            />
            <p class="text-sm">Admin</p>
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="mx-5 mb-20 mt-7">
        <div class="flex flex-col w-full gap-5">
          <slot></slot>
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
  props: {
    nav_title: {
      type: String,
      required: true,
    },
    nav_subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>
