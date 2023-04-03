import { createRouter, createWebHistory } from 'vue-router';

import HomePage from "./pages/HomePage.vue";
import AdvancedSearch from "./pages/AdvancedSearch.vue";

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/search/:place',
            name: 'search',
            component: AdvancedSearch
        }
    ]
});

export { router };