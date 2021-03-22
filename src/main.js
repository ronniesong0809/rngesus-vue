import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy, { ConfigProgrammatic } from "buefy";
import "buefy/dist/buefy.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/app.css";
import dayjs from "dayjs";

Vue.use(Buefy);
Vue.use(ElementUI);
ConfigProgrammatic.setOptions({
  defaultIconPack: "fa"
});

Vue.config.productionTip = false;
Vue.prototype.dayjs = dayjs;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
