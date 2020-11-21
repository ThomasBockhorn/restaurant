/**
 * Vue Routes
 *
 * This is a listing of all the routes for the application
 */
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../js/components/pages/IntroComponent.vue")
    },
    {
        path: "/menu",
        name: "menu",
        component: () => import("../js/components/pages/MenuComponent.vue")
    },
    {
        path: "/gallery",
        name: "gallery",
        component: () => import("../js/components/pages/GalleryComponent.vue")
    }
];

export { routes };
