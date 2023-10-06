<template>
  <div class="container flex items-center justify-center h-screen">
    <div
      class="flex flex-col items-center justify-center w-full h-full gap-1 bg-dark-blue"
    >
      <img src="@/assets/government.svg" class="logo" alt="Government logo" />
      <p class="text-2xl font-bold text-center text-white">SI Government</p>
      <p class="text-lg text-center text-white">
        Sistem pengelolaan data terintegrasi oleh Pemerintah
      </p>
    </div>
    <div class="flex items-center justify-center w-full h-full">
      <form class="flex flex-col w-1/2 gap-6">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            v-model="app.email"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            v-model="app.password"
            required
          />
        </div>
        <div class="flex items-end">
          <label
            class="w-full text-sm font-medium text-gray-900 dark:text-gray-300 text-end hover:underline hover:cursor-pointer"
            >Lupa Password?</label
          >
        </div>
        <p class="text-center text-red-500">{{ app.error }}</p>
        <button
          type="button"
          @click="app.login()"
          class="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          :class="[
            app.email == '' || app.password == ''
              ? 'cursor-not-allowed text-gray-400 bg-gray-200'
              : 'cursor-pointer text-white bg-blue-700 hover:bg-blue-800',
          ]"
        >
          Masuk
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useApp } from "@/stores/index.js";

export default {
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
};
</script>
