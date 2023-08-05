<template>
  <div
    class="flex-row px-2 py-1.5 cursor-pointer rounded-md flex-center bg-dark-blue gap-1"
  >
    <p class="text-xs text-white">{{ getTitle(title) }}</p>
    <p class="text-xs text-white">{{ sub_title }}</p>
    <img src="@/assets/pen.svg" alt="edit" />
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
  methods: {
    getTitle(title) {
      if (this.sub_title) {
        title = `${title}:`;
      }
      return title;
    },
  },
};
</script>
