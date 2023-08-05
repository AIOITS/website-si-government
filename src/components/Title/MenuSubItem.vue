<template>
  <router-link :to="to" :class="{ 'bg-dark-blue': isCurrentRoute }">
    <div
      class="ml-1 flex flex-row items-center justify-start gap-1 hover:underline hover:underline-offset-4 hover:decoration-gray-400 p-2 pl-5 w-full"
    >
      <img src="@/assets/notes.svg" alt="notes" class="w-4" />
      <p class="title-two">{{ title }}</p>
    </div>
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
  computed: {
    isCurrentRoute() {
      return this.$route.path === this.to;
    },
  },
};
</script>
