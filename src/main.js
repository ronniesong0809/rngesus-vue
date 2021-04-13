import "buefy/dist/buefy.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/app.css";
import "element-ui/lib/theme-chalk/index.css";

import Buefy, { ConfigProgrammatic } from "buefy";

import App from "./App.vue";
import ElementUI from "element-ui";
import Vue from "vue";
import dayjs from "dayjs";
import locale from "element-ui/lib/locale/lang/en";
import relativeTime from "dayjs/plugin/relativeTime";
import router from "./router";
import store from "./store";

dayjs.extend(relativeTime);

Vue.use(Buefy);
Vue.use(ElementUI, { locale });
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
