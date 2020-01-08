import VueRouter from "vue-router";
import register from './pages/register';
import login from './pages/login';

const routes= [

    {
        path: "/register",
        component: register,
        name: "register",
    },
    {
        path: "/login",
        component: login,
        name: "login",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
