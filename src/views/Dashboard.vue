<template>
  <div class="container flex flex-row">
    <!-- Sidebar Menu -->
    <div class="hidden w-1/5 bg-primary-gray lg:flex lg:flex-col">
      <Sidebar />
    </div>
    <div class="lg:w-4/5 w-full">
      <!-- Main Content -->
      <div
        class="flex flex-row justify-between px-5 py-3 border-b-2 border-gray-300 shadow-md"
      >
        <div class="flex flex-row items-center w-2/3 gap-5">
          <!-- Burger Menu -->
          <BurgerMenu @click="app.toggleSidebar()" />
          <!-- sidebar menu -->
          <div
            class="grid grid-cols-3 fixed left-0 top-0 w-full"
            v-if="app.sidebar"
          >
            <Sidebar class="col-span-2 bg-primary-gray" />
            <div
              class="bg-gray-400 col-span-1 opacity-70"
              @click="app.toggleSidebar()"
            ></div>
          </div>
          <TitleNavBar :title="nav_title" :sub_title="nav_subtitle" />
        </div>
        <div class="flex flex-row items-center justify-center gap-4">
          <!-- notify -->
          <div class="w-4">
            <img src="@/assets/bell.svg" alt="notify" />
            <!-- <img src="@/assets/bell_with_notify.svg" alt="notify" /> -->
          </div>
          <!-- help -->
          <div
            class="flex flex-row items-center justify-center gap-1 cursor-pointer hover:underline hover:underline-offset-2"
          >
            <img src="@/assets/help.svg" alt="help" />
            <p class="text-sm">Bantuan</p>
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
          </div>
          <!-- admin -->
          <div
            @click="app.toggleProfile()"
            class="flex flex-row items-center justify-center gap-1 cursor-pointer hover:underline hover:underline-offset-2"
          >
            <img
              src="@/assets/profile.png"
              class="w-5 h-5 rounded-full"
              alt=""
            />
            <p class="text-sm">Admin</p>
            <img
              src="@/assets/arrow-down.svg"
              alt="arrow-down"
              :class="{ 'rotate-180': app.is_profile }"
            />
          </div>
          <!-- sign out -->
          <div
            v-if="app.is_profile"
            class="fixed top-10 hover:underline hover:underline-offset-2 right-5 cursor-pointer text-sm bg-white border-2 border-third-gray rounded-md px-3 py-1"
          >
            Sign Out
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
import TitleOnScreen from "@/components/Title/TitleOnScreen.vue";
import ColorBox from "@/components/Content/ColorBox.vue";
import TestVue from "@/components/Chart/Test.vue";
import RoundedColorBox from "@/components/Content/RoundedColorBox.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
import { useApp } from "@/stores";

export default {
  components: {
    Sidebar,
    TitleNavBar,
    TitleOnScreen,
    ColorBox,
    TestVue,
    RoundedColorBox,
    BurgerMenu,
    Sidebar,
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
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
};
</script>
