<template>
  <div
    class="py-1 cursor-pointer"
    :class="[
      is_active ? 'rounded-xl bg-dark-blue' : 'rounded-2xl hover:bg-gray-300',
    ]"
  >
    <p
      class="font-bold text-center"
      :class="[is_active ? 'text-white' : 'text-primary-gray']"
    >
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
