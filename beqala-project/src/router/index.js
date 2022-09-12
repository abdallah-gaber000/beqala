import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResturantView from "../views/ResturantView.vue";
import LogIn from "../views/LogIn.vue";
import JoinView from "../views/JoinView.vue";
import RestaurantDetails from "../views/RestaurantDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/resturant",
    name: "resturant",
    component: ResturantView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MedicalView.vue"),
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/Join",
    name: "Join",
    component: JoinView,
  },
  {
    path: "/RestaurantDetails",
    name: "RestaurantDetails",
    component: RestaurantDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
