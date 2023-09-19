<script setup>
import { ref } from "vue";
import { post } from "/src/api/api.js";
import router from "/src/router/index.js";

const email = ref("");
const password = ref("");
const errorMessage = ref("");

async function onSubmitHandler(e) {
  e.preventDefault();
  try {
    const response = await post("/auth/government", {
      email: email.value,
      password: password.value,
    });

    sessionStorage.setItem(
      import.meta.env.VITE_JWT_TOKEN_KEY,
      response.data.access_token,
    );
    router.push("/sekilas");
  } catch (error) {
    errorMessage.value = error.message;
  }
}

function onChangeHandler() {
  errorMessage.value = "";
}
</script>

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
      <form class="flex flex-col w-1/2 gap-6" @submit="onSubmitHandler">
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
            @change="onChangeHandler"
            v-model="email"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            @change="onChangeHandler"
            >Password</label
          >
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="flex items-end">
          <label
            class="w-full text-sm font-medium text-gray-900 dark:text-gray-300 text-end hover:underline hover:cursor-pointer"
            >Lupa Password?</label
          >
        </div>
        <p class="text-red-500 text-center">{{ errorMessage }}</p>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Masuk
        </button>
      </form>
    </div>
  </div>
</template>
