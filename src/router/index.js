import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCog,
    faLink,
    faTrash

} from "@fortawesome/free-solid-svg-icons";

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

library.add(faCog, faLink, faTrash)

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import("../views/About.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    }
];

const router = new VueRouter({
    routes
});

export default router;