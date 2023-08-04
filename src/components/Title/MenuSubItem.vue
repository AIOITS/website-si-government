<template>
  <router-link
    class="flex flex-row items-center justify-start gap-1 ml-1 hover:underline hover:underline-offset-4 hover:decoration-gray-400"
    :to="to"
  >
    <img src="@/assets/notes.svg" alt="notes" class="w-4" />
    <p class="title-two">{{ title }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
