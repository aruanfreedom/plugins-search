import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import api from "@/api";
import { apiConfig } from "@/api/apiConfig";

Vue.config.productionTip = false;

export const observer = new Vue();
api.init(apiConfig);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
