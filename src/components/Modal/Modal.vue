<template>
  <div class="relative">
    <div
      class="bg-white absolute rounded-md border-2 border-line flex flex-col items-start gap-1 stify-center w-64"
      :class="customClasses"
    >
      <!-- title modal -->
      <div
        class="flex flex-row items-center justify-between border-b-2 border-line p-2 w-full"
      >
        <p class="text-xs font-semibold">{{ title }}</p>
        <img
          src="@/assets/close.svg"
          class="w-3 cursor-pointer rounded-sm hover:bg-gray-200"
          alt="close"
        />
      </div>
      <!-- content -->
      <div
        class="flex flex-col items-start justify-center p-2 border-b-2 border-line w-full"
      >
        <slot></slot>
      </div>
      <!-- confirm -->
      <div class="w-full flex flex-row justify-end items-center gap-2 p-1">
        <div
          class="text-xs text-primary-gray border-2 font-semibold border-line rounded-md p-1 cursor-pointer"
          @click="cancelClicked"
        >
          Batal
        </div>
        <div
          class="text-xs text-white bg-dark-blue font-semibold rounded-md p-1 cursor-pointer"
          @click="terapkanClicked"
        >
          Terapkan
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    custom_class: {
      type: String,
      default: "mt-0",
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    customClasses() {
      return [`${this.custom_class}`];
    },
  },
  methods: {
    cancelClicked() {
      console.log("cancel");
      this.$emit("cancel");
    },
    terapkanClicked() {
      console.log(this.title);
      this.$emit("terapkan", this.title);
    },
  },
};
</script>
