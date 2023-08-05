<template>
  <div class="top-0 bottom-0 left-0 right-0">
    <RouterView :class="app.loading ? 'hidden' : ''" />
    <LoadingVue v-if="app.loading" />
  </div>
</template>

<script>
import LoadingVue from "@/components/Loading.vue";
import { useApp } from "@/stores";

export default {
  setup() {
    const app = useApp();

    return {
      app,
    };
  },
  components: {
    LoadingVue,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
