<template>
  <div class="flex flex-col gap-0">
    <p class="text-3xl font-bold text-primary-gray">{{ title }}</p>
    <p class="text-sm text-secondary-gray">{{ sub_title }}</p>
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
