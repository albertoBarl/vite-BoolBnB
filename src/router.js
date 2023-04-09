import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue";
import AppSingleApartment from "./pages/AppSingleApartment.vue";

const router = createRouter({

  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/apartments",
      name: "search",
      component: AdvancedSearch,
    },
    {
      path: "/:slug",
      name: "single_apartment",
      component: AppSingleApartment,
    },
  ],
});

export { router };
