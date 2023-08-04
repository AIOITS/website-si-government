<template>
  <div class="flex flex-row items-start justify-center gap-2">
    <p
      class="text-sm underline cursor-pointer underline-offset-2 text-primary-gray decoration-primary-gray"
    >
      {{ title }}
    </p>
    <p class="text-sm text-secondary-gray" v-if="sub_title">/</p>
    <p
      class="text-sm text-secondary-gray decoration-secondary-gray"
      v-if="sub_title"
    >
      {{ sub_title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    sub_title: {
      type: String,
      required: false,
    },
  },
};
</script>
