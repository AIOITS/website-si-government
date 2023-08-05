<template>
  <div class="flex flex-col items-center justify-center py-3">
    <p class="text-lg font-bold text-white">{{ title }}</p>
    <p class="text-sm text-white">{{ sub_title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    sub_title: {
      type: String,
      default: "Sub Title",
    },
  },
};
</script>
