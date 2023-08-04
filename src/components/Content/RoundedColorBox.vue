<template>
  <!-- <div class="py-1 cursor-pointer rounded-xl bg-dark-blue">
    <p class="font-bold text-center text-white">{{ title }}</p>
  </div> -->
  <div class="py-1 cursor-pointer rounded-2xl hover:bg-gray-300">
    <p class="font-bold text-center text-primary-gray">{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>
