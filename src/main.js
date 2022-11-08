import Vue from "vue";
import App from "./App.vue";
import { firestorePlugin } from "vuefire";
import VueRouter from "vue-router";

Vue.use(firestorePlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false;

import HomePage from "./components/HomePage";

const router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
