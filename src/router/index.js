import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import JobView from "../views/JobView.vue";
import AddJobview from "../views/AddJobview.vue";

const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name:'home', 
            component: HomeView
        },
        {
            path: "/jobs/:id",
            name:'job', 
            component: JobView
        },
        {
            path: "/jobs",
            name:'jobs', 
            component: JobsView
        },
        {
            path: "/jobs/add",
            name:'addJob', 
            component: AddJobview,
        },
        {
            path: '/:catchAll(.*)',
            name:'notFound', 
            component: NotFoundView
        },
    ],
});

export default routes;