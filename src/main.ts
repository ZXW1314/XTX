import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";
import { lazyPlugin } from "@/directives/index.js";
import { componentsPlugin } from "@/components/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(lazyPlugin);
app.use(componentsPlugin);

app.mount("#app");
