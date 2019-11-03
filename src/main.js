import Vue from "vue";
import dotenv from "dotenv";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify";

// Component
import ProdukItem from "@/components/ProdukItem";
import Test from "@/components/Test";

dotenv.config();

Vue.config.productionTip = false;

// Component Register
Vue.component("ProdukItem", ProdukItem);
Vue.component("Test", Test);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
