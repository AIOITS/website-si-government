<template>
  <div class="flex flex-row items-center justify-between">
    <p class="text-lg font-bold text-primary-gray">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
