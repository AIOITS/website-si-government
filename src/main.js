import { createApp, markRaw, provide, h } from "vue";
import { createPinia } from "pinia";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import "./index.css";
import "flowbite";
import { createApolloProvider } from "@vue/apollo-option";

import App from "./App.vue";
import router from "./router";
import { DefaultApolloClient } from "@vue/apollo-composable";

const pinia = createPinia();
const cache = new InMemoryCache();
const httpLink = createHttpLink({
  uri: "https://aioits-backend-q6ihv4us2q-uc.a.run.app/graphql",
});
const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
});

// pinia.use(({ store }) => {
//   store.router = markRaw(router);
// });

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
});

const app = createApp({
  setup() {
    pinia.use(({ store }) => {
      store.router = markRaw(router);
    });
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router).use(pinia).use(apolloProvider).mount("#app");
