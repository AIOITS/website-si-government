import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
// import './style.css'
import "./index.css";
import "flowbite";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

createApp(App).use(router).use(pinia).mount("#app");